module Language.Fsml.Runtime where

import           Data.List
import           Data.Maybe
import qualified Language.Fsml.CS as CS

run :: CS.Fsm -> [String] -> [String]
run f = run' f s'
    where
        s' = fromMaybe (error "no initial state defined")
                       (find CS.initial (CS.states f))

run' :: CS.Fsm -> CS.State -> [String] -> [String]
run' _ _ []      = []
run' f s (i:is) = maybeToList (CS.action t') ++ run' f (fromMaybe s (CS.target t')) is
    where
         t' = fromMaybe (error ("input" ++ i ++ "not defined in state " ++ CS.id s))
                        (find ((==) i . CS.input) (CS.transitions s))
