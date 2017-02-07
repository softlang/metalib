module main::rascal::org::softlang::fsml::Outliner

import Prelude;
import util::IDE;
import main::rascal::org::softlang::fsml::ConcreteSyntax;

public node outlineFsm(Fsm f){
	node outline = "states"([outlineState(s) | s <- f.states]);
	return outline;
}

private node outlineState(State s) {
	node outline = "<s.id>"([outlineTransition(t) | t <- s.transitions]);
	outline@\loc = s@\loc;
	return outline;
}

private node outlineTransition(Transition t) {
	node outline = "<t.event>"();
	outline@\loc = t@\loc;
	return outline;
}
