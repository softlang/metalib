{-# LANGUAGE TemplateHaskell #-}

module Language.FSML.QuasiQuoter where

import Data.Char
import Data.List
import Language.FSML.Ast         as Ast
import Language.FSML.Checker     (check)
import Language.FSML.Parser
import Language.Haskell.TH
import Language.Haskell.TH.Quote
import Text.Parsec               hiding (State)
import Text.Parsec.String        (Parser)

fsml :: QuasiQuoter
fsml = QuasiQuoter { quoteExp  = undefined
                   , quoteDec  = quoteFsmlDec
                   , quoteType = undefined
                   , quotePat  = undefined
                   }

quoteFsmlDec :: String -> DecsQ
quoteFsmlDec str = do  loc <- location
                       let filename = loc_filename loc
                           charPos = loc_start loc
                           line = fst charPos
                           col = snd charPos
                       ast <- parseWithSourcePos fsm filename line col str
                       _ <- check ast
                       initial <- genInitial ast
                       states <- genStates ast
                       transitions <- genTransitionFuns ast
                       return $ [initial, states] ++ transitions

genInitial :: Ast.Fsm -> DecQ
genInitial (Ast.Fsm states) =
  valD
  (varP (mkName "initial"))
  (normalB (tupE [conE (mkName (firstUpper (getInitialId (Fsm states)))), listE []]))
  []

genStates :: Ast.Fsm -> DecQ
genStates (Ast.Fsm states) =
  dataD
  (return [])
  (mkName "State")
  []
  Nothing
  (map (\(State _ id _) -> normalC (mkName (firstUpper id)) []) states)
  (cxt [(conT (mkName "Show"))])

genTransitionClause :: (State, Transition) -> ClauseQ
genTransitionClause ((State _ source _ ), (Transition _ (Just action) target)) =
  clause
  [[p| ($(conP (mkName (firstUpper source)) []), actions) |]]
  (normalB [| ($(conE (mkName (firstUpper target))), actions ++ [$(stringE action)]) |] )
  []
genTransitionClause ((State _ source _), (Transition _ Nothing target)) =
  clause
  [[p| ($(conP (mkName (firstUpper source)) []), actions) |]]
  (normalB [| ($(conE (mkName (firstUpper target))), actions) |])
  []

genTransitionFun :: [(State, Transition)] -> DecQ
genTransitionFun st = let (_, (Transition event _ _)) = head st
                          clauses = map genTransitionClause st
                      in funD (mkName event) clauses

genTransitionFuns :: Ast.Fsm -> DecsQ
genTransitionFuns = mapM genTransitionFun . groupTransitions

groupTransitions :: Ast.Fsm -> [[(Ast.State, Ast.Transition)]]
groupTransitions (Fsm states) = groupBy (\(_, l) (_, r) -> (Ast.getEvent l) == (Ast.getEvent r)) $
                                sortBy (\(_, l) (_, r) -> compare (Ast.getEvent l) (Ast.getEvent r)) $
                                concatMap (\s -> (map (\t -> (s, t)) (Ast.getTransitions s))) states
                                                                           
firstUpper :: String -> String
firstUpper (h:t) = (toUpper h):t

getInitialId :: Ast.Fsm -> String
getInitialId (Fsm states) = Ast.getId (head (filter (\(Ast.State initial _ _) -> initial) states))

