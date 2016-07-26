package de.sschauss.fsml
import org.scalatest.{FlatSpec, Matchers}

class MacroTestSuite extends FlatSpec with Matchers {

  "A Fsm" should "not compile when determinism not Ok" in {
    """
    import de.sschauss.fsml.macros.Fsm
    @Fsm
    object DeterminismNotOk {
      initial state stateA {
        eventI / actionI -> stateB;
      	eventI / actionII -> stateC;
      }
      state stateB { }
      state stateC { }
    }
    """ shouldNot compile
  }

  it should "not compile when no initial state defined" in {
    """
    import de.sschauss.fsml.macros.Fsm
    @Fsm
    object InitialNotOk1 {
      state stateA {
      	eventI / actionI -> stateB;
      }
      state stateB {
      	eventII / actionII -> stateA;
      }
    }
    """ shouldNot compile
  }

  it should "not compile when multiple initial states defined" in {
    """
    import de.sschauss.fsml.macros.Fsm
    @Fsm
    object InitialNotOk1 {
      initial state stateA {
      	eventI / actionI -> stateC;
      }
      initial state stateB {
      	eventI / actionII -> stateC;
      }
      state stateC { }
    }
    """ shouldNot compile
  }

}
