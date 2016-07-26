---
layout: page
title: Haskell
---

## AST

First we define the AST using Haskell ADTs.
As you can see, the structure of the ADTs matches the FSML grammar's production rules perfectly.
You can ignore the language pragma, import statement and derived Lift instance for now.

{% highlight haskell %}
{-# LANGUAGE DeriveLift #-}

module Language.FSML.Ast where

import Language.Haskell.TH.Syntax

data Fsm = Fsm { states :: [State] } deriving (Show, Lift)

data State = State { getInitial :: Bool
                   , getId      :: String
                   , getTransitions :: [Transition] } deriving (Show, Lift)
             
data Transition = Transition { getEvent  :: String
                             , getAction :: Maybe String
                             , getTarget :: String } deriving (Show, Lift)
{% endhighlight %}


## Lexer

{% highlight haskell %}
module Language.FSML.Lexer ( braces
                           , ident
                           , reserved
                           , reservedOp
                           , semi
                           ) where

import           Text.Parsec.Char     as Char
import           Text.Parsec.Language (emptyDef)
import           Text.Parsec.String   (Parser)
import qualified Text.Parsec.Token    as Token

fsmlDef :: Token.LanguageDef ()
fsmlDef = emptyDef { Token.commentStart  = "/*"
                   , Token.commentEnd    = "*/"
                   , Token.commentLine   = "//"
                   , Token.identStart    = Char.lower
                   , Token.identLetter   = Char.letter
                   , Token.reservedNames = [ "initial"
                                           , "state"
                                           ]
                   , Token.reservedOpNames = [ "/"
                                             , "->"
                                             ]
                   }

lexer :: Token.TokenParser ()
lexer = Token.makeTokenParser fsmlDef

braces :: Parser p -> Parser p
braces = Token.braces lexer

ident :: Parser String
ident = Token.identifier lexer

reserved :: String -> Parser ()
reserved = Token.reserved lexer

reservedOp :: String -> Parser ()
reservedOp = Token.reservedOp lexer

semi :: Parser String
semi = Token.semi lexer
{% endhighlight %}

## Parser

{% highlight haskell %}
module Language.FSML.Parser ( fsm
                            , parseWithSourcePos
                            ) where

import qualified Language.FSML.Ast   as Ast
import           Language.FSML.Lexer
import           Text.Parsec
import           Text.Parsec.String  (Parser)

parseWithSourcePos :: Monad m => Parser a -> String -> Int -> Int -> String -> m a
parseWithSourcePos parser file line col str =
  case runParser parser' () "" str of
      Left err  -> fail $ show err
      Right ast   -> return ast
  where
    parser' = do
      pos <- getPosition
      setPosition
        $ (flip setSourceName) file
        $ (flip setSourceLine) line
        $ (flip setSourceColumn) col
        $ pos
      spaces
      ast <- parser
      eof
      return ast

fsm :: Parser Ast.Fsm
fsm = Ast.Fsm <$> many state

state :: Parser Ast.State
state = do 
  initial <- initial 
  id <- (reserved "state" *> stateId)
  transitions <- braces (many (transition id))
  return $ Ast.State initial id transitions

initial :: Parser Bool
initial = option False (reserved "initial" >> return True)

transition :: String -> Parser Ast.Transition
transition id = Ast.Transition
  <$> input
  <*> optionMaybe (reservedOp "/" *> action)
  <*> option id (reservedOp "->" *> stateId)
  <* semi

action = ident
input = ident
stateId = ident
{% endhighlight %}

## QuasiQuoter

{% highlight haskell %}
{-# LANGUAGE TemplateHaskell #-}

module Language.FSML.QuasiQuoter where

import Data.Char
import Data.List
import Language.FSML.Ast         as Ast
import Language.FSML.Parser
import Language.Haskell.TH
import Language.Haskell.TH.Quote
import Text.Parsec               hiding (State)
import Text.Parsec.String        (Parser)

fsml :: QuasiQuoter
fsml = QuasiQuoter { quoteExp  = undefined
                   , quoteDec  = quoteFsmlDec
                   , quoteType = undefined
                   , quotePat  = undefined
                   }

quoteFsmlDec :: String -> DecsQ
quoteFsmlDec str = do  loc <- location
                       let filename = loc_filename loc
                           charPos = loc_start loc
                           line = fst charPos
                           col = snd charPos
                       ast <- parseWithSourcePos fsm filename line col str
                       initial <- genInitial ast
                       states <- genStates ast
                       transitions <- genTransitionFuns ast
                       return $ [initial, states] ++ transitions

genInitial :: Ast.Fsm ->  DecQ
genInitial (Ast.Fsm states) =
  valD
  (varP (mkName "initial"))
  (normalB (tupE [conE (mkName (firstUpper (getInitialId (Fsm states)))), listE []]))
  []

genStates :: Ast.Fsm -> DecQ
genStates (Ast.Fsm states) =
  dataD
  (return [])
  (mkName "State")
  []
  Nothing
  (map (\(State _ id _) -> normalC (mkName (firstUpper id)) []) states)
  (cxt [(conT (mkName "Show"))])

genTransitionClause :: (State, Transition) -> ClauseQ
genTransitionClause ((State _ source _ ), (Transition _ (Just action) target)) =
  clause
  [[p| ($(conP (mkName (firstUpper source)) []), actions) |]]
  (normalB [| ($(conE (mkName (firstUpper target))), actions ++ [$(stringE action)]) |] )
  []
genTransitionClause ((State _ source _), (Transition _ Nothing target)) =
  clause
  [[p| ($(conP (mkName (firstUpper source)) []), actions) |]]
  (normalB [| ($(conE (mkName (firstUpper target))), actions) |])
  []

genTransitionFun :: [(State, Transition)] -> DecQ
genTransitionFun st = let (_, (Transition event _ _)) = head st
                          clauses = map genTransitionClause st
                      in funD (mkName event) clauses

genTransitionFuns :: Ast.Fsm -> DecsQ
genTransitionFuns = mapM genTransitionFun . groupTransitions

groupTransitions :: Ast.Fsm -> [[(Ast.State, Ast.Transition)]]
groupTransitions (Fsm states) = groupBy (\(_, l) (_, r) -> (Ast.getEvent l) == (Ast.getEvent r)) $
                                sortBy (\(_, l) (_, r) -> compare (Ast.getEvent l) (Ast.getEvent r)) $
                                concatMap (\s -> (map (\t -> (s, t)) (Ast.getTransitions s))) states
                                                                           
firstUpper :: String -> String
firstUpper (h:t) = (toUpper h):t

getInitialId :: Ast.Fsm -> String
getInitialId (Fsm states) = Ast.getId (head (filter (\(Ast.State initial _ _) -> initial) states))
{% endhighlight %}

## Resources

### Key Publications:
- [Tim Sheard, Simon L. Peyton Jones, Template meta-programming for Haskell](http://dblp.org/rec/journals/sigplan/SheardJ02){:target="_blank"}
    
### Wikipedia:
- [Haskell (programming language)](https://en.wikipedia.org/wiki/Haskell_(programming_language)){:target="_blank"}
- [Parsec (parser)](https://en.wikipedia.org/wiki/Parsec_(parser)){:target="_blank"}
- [Template Haskell](https://en.wikipedia.org/wiki/Template_Haskell){:target="_blank"}