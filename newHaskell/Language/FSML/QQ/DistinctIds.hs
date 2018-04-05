-- BEGIN ...
{-# LANGUAGE QuasiQuotes #-}
-- Negative test case for distinctIds check
module Language.FSML.QQ.DistinctIds where
import Language.FSML.Quoter
import Language.FSML.Syntax
-- END ...
sampleFsm :: Fsm
sampleFsm = [fsml|
        initial state state1 {
                event1 -> state1;
        }
        state state1 {
                event2 -> state1;
        }
|]
