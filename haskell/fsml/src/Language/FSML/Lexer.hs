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
