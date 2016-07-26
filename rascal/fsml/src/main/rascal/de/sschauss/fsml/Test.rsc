module main::rascal::de::sschauss::fsml::Test

import Prelude;
import main::rascal::de::sschauss::fsml::ConcreteSyntax;
import main::rascal::de::sschauss::fsml::Checker;

test bool initialNotOk2() {
	Fsm fsm = parse(#Fsm, |project://fsml/src/main/resources/initialNotOk1.fsml|);
	return {H*, error("no initial state defined", L), T*} := checkConstraints(fsm);
}

test bool initialNotOk2() {
	Fsm fsm = parse(#Fsm, |project://fsml/src/main/resources/initialNotOk2.fsml|);
	return {H*, error("multiple initial states defined", L), T*} := checkConstraints(fsm);
}

test bool idsNotOk() {
	Fsm fsm = parse(#Fsm, |project://fsml/src/main/resources/idsNotOk.fsml|);
	return {H*, error("state with ID stateA already defined", L), T*} := checkConstraints(fsm);
}

test bool resolutionNotOk() {
	Fsm fsm = parse(#Fsm, |project://fsml/src/main/resources/resolutionNotOk.fsml|);
	return {H*, error("unresolved state stateC", L), T*} := checkConstraints(fsm);
}

test bool determinismNotOk() {
	Fsm fsm = parse(#Fsm, |project://fsml/src/main/resources/determinismNotOk.fsml|);
	return {H*, error("input eventI already defined in state stateA", L), T*} := checkConstraints(fsm);
}

test bool reachabilityNotOk() {
	Fsm fsm = parse(#Fsm, |project://fsml/src/main/resources/reachabilityNotOk.fsml|);
	return {H*, warning("unreachable state stateC", L), T*} := checkConstraints(fsm);
}