import Language.FSML.Syntax
import Language.FSML.Domains
import Language.FSML.QQ.Sample
import Language.FSML.SampleIO
import Language.FSML.Interpreter

run :: Fsm -> Input -> Output
run fsm input = simulate fsm input

main :: IO()
main = putStrLn $ show $ run turnstileFsm sampleInput
