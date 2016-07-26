module Language.Fsml.CS where

data Fsm = Fsm { states :: [State] } deriving (Eq, Show)

data State = State { initial     :: Bool
                   , id          :: String
                   , transitions :: [Transition] }
                   deriving (Eq, Show)

data Transition = Transition { input  :: String
                             , action :: Maybe String
                             , target :: Maybe State }
                             deriving (Eq, Show)

