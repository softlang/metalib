module FsmlAcceptor where

import Language.FSML.Acceptor
import Text.Parsec (parse)
import Text.Parsec.Utilities (completeParser)
import System.Environment (getArgs)
import System.IO (readFile)
import System.Exit (exitSuccess, exitFailure)

main :: IO ()
main = do
  text <- readFile "./data/sample.fsml"
  case parse (completeParser fsm >> return ()) "" text of
    (Right ()) -> exitSuccess
    _ -> exitFailure
