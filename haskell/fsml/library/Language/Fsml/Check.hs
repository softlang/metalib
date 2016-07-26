module Language.Fsml.Check
    ( check ) where

import           Prelude           hiding (id)
import           Data.List
import           Data.Maybe
import qualified Language.Fsml.AST as AST

check :: AST.Fsm -> Either [String] AST.Fsm
check fsm@(AST.Fsm []) = Right fsm
check fsm@(AST.Fsm states) =
    case checkAll states of
        [] -> Right fsm
        errors -> Left errors

checkAll :: [AST.State] -> [String]
checkAll states = concatMap ($ states) [checkDeterminism, checkSingleInitial, checkReachability]


checkDeterminism :: [AST.State] -> [String]
checkDeterminism = concatMap (checkDeterminism' . AST.transitions)
checkDeterminism' :: [AST.Transition] -> [String]
checkDeterminism' = dup . map ((++) "Duplicated input " . AST.input)

checkSingleInitial :: [AST.State] -> [String]
checkSingleInitial states =
    case length (initialStates states) of
        0   -> ["No initial state defined"]
        1   -> []
        _   -> ["Multiple initial states defined"]

checkReachability :: [AST.State] -> [String]
checkReachability states =
    case checkReachability' states (initialStates states) (initialStates states) of
        [] -> []
        s  -> map ("Unreachable state " ++) s

checkReachability' ::  [AST.State] -> [AST.State] -> [AST.State] -> [String]
checkReachability' s visited [] = map AST.id s \\ map AST.id visited
checkReachability' s visited toVisit = checkReachability' s visited' toVisit'
    where
        visited' = visited ++ toVisit
        toVisit' = (map (\i -> targetState i s) (mapMaybe AST.target (concatMap AST.transitions toVisit))) \\ visited'

targetState :: String -> [AST.State] -> AST.State
targetState i = head . filter ((== i) . AST.id)

initialStates :: [AST.State] -> [AST.State]
initialStates = filter AST.initial

dup :: Eq a => [a] -> [a]
dup x = x \\ nub x



