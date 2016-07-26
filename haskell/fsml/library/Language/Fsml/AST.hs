module Language.Fsml.AST where

data Fsm = Fsm  { states :: [State] }

data State = State { initial     :: Bool
                   , id          :: String
                   , transitions :: [Transition] }
                   deriving (Eq)

data Transition = Transition { input  :: String
                             , action :: Maybe String
                             , target ::  Maybe String }
                             deriving (Eq)
