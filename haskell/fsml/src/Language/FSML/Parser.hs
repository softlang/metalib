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
