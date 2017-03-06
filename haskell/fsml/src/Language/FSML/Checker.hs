module Language.FSML.Checker where

import Data.List
import Language.FSML.Ast   as Ast
import Language.Haskell.TH


check :: Ast.Fsm -> Q ()
check fsm@(Ast.Fsm states) =
  case checkAll states of
    [] -> return ()
    errors -> fail $ unlines errors
    
checkAll :: [Ast.State] -> [String]
checkAll states = concatMap ($ states) [checkDeterminism, checkSingleInitial, checkReachability]

checkDeterminism :: [Ast.State] -> [String]
checkDeterminism = concatMap (checkDeterminism' . Ast.getTransitions)
checkDeterminism' :: [Ast.Transition] -> [String]
checkDeterminism' = dup . map ((++) "Duplicated input " . Ast.getEvent)

checkSingleInitial :: [Ast.State] -> [String]
checkSingleInitial states =
    case length (initialStates states) of
        0   -> ["No initial state defined"]
        1   -> []
        _   -> ["Multiple initial states defined"]

checkReachability :: [Ast.State] -> [String]
checkReachability states =
    case checkReachability' states [] (initialStates states) of
        [] -> []
        s  -> map ("Unreachable state " ++) s

checkReachability' ::  [Ast.State] -> [Ast.State] -> [Ast.State] -> [String]
checkReachability' s visited [] = map Ast.getId s \\ map Ast.getId visited
checkReachability' s visited toVisit = checkReachability' s visited' toVisit'
    where
        visited' = visited ++ toVisit
        toVisit' = (map (\i -> targetState i s) (map Ast.getTarget (concatMap Ast.getTransitions toVisit))) \\ visited'

targetState :: String -> [Ast.State] -> Ast.State
targetState i = head . filter ((== i) . Ast.getId)

initialStates :: [Ast.State] -> [Ast.State]
initialStates = filter Ast.getInitial

dup :: Eq a => [a] -> [a]
dup x = x \\ nub x
