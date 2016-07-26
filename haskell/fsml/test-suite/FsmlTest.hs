module FsmlTest where

import Language.Fsml
import Language.Fsml.AST
import Language.Fsml.CS
import Language.Fsml.Quoter
import Language.Fsml.Parser

-- | >>> :set -XQuasiQuotes
{- | >>> :{
    [fsml|
        initial state stateA {
            eventI / actionI -> stateB;
            eventI / actionII -> stateC;
        }
        state stateB {
        }
        state stateC {
        }
    |]
:}
...
...Duplicated input eventI...
...
-}

-- | >>> :set -XQuasiQuotes
{- | >>> :{
    [fsml|
        state stateA {
	    eventI / actionI -> stateB;
        }
        state stateB {
	    eventII / actionII -> stateA;
        }
    |]
:}
...
...No initial state defined...
...
-}

-- | >>> :set -XQuasiQuotes
{- | >>> :{
    [fsml|
        initial state stateA {
           eventI / actionI -> stateC;
        }
        initial state stateB {
            eventI / actionII -> stateC;
        }
        state stateC {
        }
    |]
:}
...
...Multiple initial states defined...
...
-}

-- | >>> :set -XQuasiQuotes
{- | >>> :{
    [fsml|
        initial state stateA {
            eventI / actionI -> stateB;
        }
        state stateB { }
        state stateC { }
    |]
:}
...
..."Unreachable state stateC...
...
-}
