{-# LANGUAGE QuasiQuotes #-}
module Main where

import           Prelude               hiding (id)
import           Language.Fsml
import qualified Language.Fsml.CS      as CS
import qualified Language.Fsml.AST     as AST
import           Language.Fsml.Runtime
import           Data.Maybe

turnstileFsm :: CS.Fsm
turnstileFsm = [fsml|
        initial state locked {
              ticket / collect -> unlocked;
              pass / alarm -> exception;
        }
        state unlocked {
              ticket / eject;
              pass -> locked;
        }
        state exception {
              ticket / eject;
              pass;
              mute;
              release -> locked;
        }
|]

inputs :: [String]
inputs = ["ticket", "ticket", "pass", "pass", "ticket", "mute", "release"]

main :: IO ()
main = print (run turnstileFsm inputs)
