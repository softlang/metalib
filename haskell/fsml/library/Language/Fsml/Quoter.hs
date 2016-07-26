{-# LANGUAGE TemplateHaskell #-}
module Language.Fsml.Quoter
    ( fsml ) where

import Prelude                             hiding (id)
import qualified Language.Fsml.AST         as AST
import           Language.Fsml.Check
import           Language.Fsml.Parser
import qualified Language.Fsml.CS          as CS
import           Language.Haskell.TH
import           Language.Haskell.TH.Quote
import           Text.Parsec               (parse)

fsml :: QuasiQuoter
fsml = QuasiQuoter
    { quoteExp  = quoteFsmlExp
    , quotePat  = undefined
    , quoteType = undefined
    , quoteDec  = undefined
    }

quoteFsmlExp :: String -> Q Exp
quoteFsmlExp str = do
    filename <- loc_filename `fmap` location
    case parse (topLevel fsm) filename str of
        Left err  -> error (show err)
        Right ast -> either (error . show) toFsmLetExp (check ast)

toFsmLetExp :: AST.Fsm -> Q Exp
toFsmLetExp fsmNode = [|$(letE (map toStateDec (AST.states fsmNode)) (toFsmExp fsmNode))|]

toFsmExp :: AST.Fsm -> Q Exp
toFsmExp (AST.Fsm states) = [|CS.Fsm $(listE (map (varE . mkName . AST.id) states))|]

toStateDec :: AST.State -> Q Dec
toStateDec state = valD (varP (mkName (AST.id state))) (normalB (toStateExp state)) []

toStateExp :: AST.State -> Q Exp
toStateExp (AST.State initial id transitions) = [|CS.State initial id $(listE (map toTransitionExp transitions))|]

toTransitionExp :: AST.Transition -> Q Exp
toTransitionExp (AST.Transition input action target) = [|CS.Transition input action $(maybe (conE 'Nothing) (appE (conE 'Just) . varE . mkName) target)|]
