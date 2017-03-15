package org.softlang.fsml

import org.scalatest.{FlatSpec, Matchers}

class FsmSpecs extends FlatSpec with Matchers {

  "A Fsm" should "not compile when determinism not Ok" in {
    """
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

  it should "not compile when ids not ok" in {
    """
    @Fsm
    object IdsNotOk {
      initial state stateA {
        eventI/actionI -> stateZ;
      }
      state stateA {
        eventII/actionII -> stateZ;
      }
      state stateZ { }
    }
    """ shouldNot compile
  }

  it should "not compile when no initial state defined" in {
    """
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

  it should "not compile when unreachable states defined" in {
    """
    @Fsm
    object ReachableNotOk {
      initial state stateA {
        eventI/actionI -> stateB;
      }
      state stateB { }
      state stateC { }
    }
    """ shouldNot compile
  }

  it should "not compile when state resolution not ok" in {
    """
    @Fsm
    object ResolutionNotOk {
      initial state stateA {
      eventI/actionI -> stateB;
        eventII/actionII -> stateC;
      }
      state stateB { }
    }
    """ shouldNot compile
  }
}
