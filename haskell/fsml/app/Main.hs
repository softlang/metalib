{-# LANGUAGE QuasiQuotes #-}

module Main where

import Language.FSML.QuasiQuoter

[fsml|
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

run :: [(State, [String]) -> (State, [String])] -> (State, [String])
run events = foldl (\sa e -> e sa) initial events

main :: IO ()
main = putStrLn $ show $ run [ticket, ticket, pass, pass, ticket, mute, release]
