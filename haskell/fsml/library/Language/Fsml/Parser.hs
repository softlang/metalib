module Language.Fsml.Parser
    ( fsm
    , topLevel ) where

import           Control.Applicative  ()
import qualified Language.Fsml.AST    as AST
import           Text.Parsec          hiding (State)
import qualified Text.Parsec.Expr     ()
import           Text.Parsec.Language (emptyDef)
import           Text.Parsec.String   (Parser)
import qualified Text.Parsec.Token    as Token

fsmlDef :: Token.LanguageDef ()
fsmlDef = emptyDef
    { Token.commentStart     = "/*"
    , Token.commentEnd       = "*/"
    , Token.commentLine      = "//"
    , Token.identStart       = lower
    , Token.identLetter      = letter
    , Token.nestedComments   = True
    , Token.reservedNames    = ["initial", "state"]
    , Token.reservedOpNames  = ["=", "/", "->"]
    }

lexer :: Token.TokenParser ()
lexer = Token.makeTokenParser fsmlDef

braces :: Parser p -> Parser p
braces = Token.braces lexer

semi :: Parser String
semi = Token.semi lexer

reserved :: String -> Parser ()
reserved = Token.reserved lexer

reservedOp :: String -> Parser ()
reservedOp = Token.reservedOp lexer

symbol :: String -> Parser String
symbol = Token.symbol lexer

topLevel :: Parser p -> Parser p
topLevel p = spaces *> p <* spaces

identifier :: Parser String
identifier = Token.identifier lexer

initial :: Parser Bool
initial =
        (symbol "initial" >> return True)
    <|> (symbol ""        >> return False)


transition :: Parser AST.Transition
transition = AST.Transition <$> identifier <*> optionMaybe (reservedOp "/" *> identifier) <*> optionMaybe (reservedOp "->" *> identifier) <* semi

state :: Parser AST.State
state = AST.State  <$> initial <*> (reserved "state" *> identifier) <*> braces (many transition)

fsm :: Parser AST.Fsm
fsm = AST.Fsm <$> many state
