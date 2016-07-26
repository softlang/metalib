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

