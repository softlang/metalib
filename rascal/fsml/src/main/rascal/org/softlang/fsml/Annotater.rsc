module main::rascal::org::softlang::fsml::Annotater

import Prelude;
import main::rascal::org::softlang::fsml::Checker;
import main::rascal::org::softlang::fsml::ConcreteSyntax;

public Fsm annotateFsm (Fsm f) {
	set[Message] errors = checkConstraints(f);
	f = resolve(f);
	return f[@messages = errors];
}

private Fsm resolve(Fsm f) {
	map[str, loc] stateIds = ();
	map[str, loc] transitionIds = ();
	visit(f) {
		case State s: stateIds["<s.id>"] = s.id@\loc; 
	}
	return visit(f){
		case Transition t => visit(t) {
			case Id id => id[@link=stateIds["<id>"]]
				when "<id>" in stateIds
		}
	}
}
