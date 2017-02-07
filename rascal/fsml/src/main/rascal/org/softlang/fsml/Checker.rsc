module main::rascal::org::softlang::fsml::Checker

import Prelude;
import util::Maybe;
import main::rascal::org::softlang::fsml::ConcreteSyntax;
import main::rascal::org::softlang::fsml::Util;

public set[Message] checkConstraints(Fsm f) =
	checkSingleInitial(f) +
	checkDistinctIds(f) +
	checkResolvable(f) +
	checkStateDeterministic(f) +
	checkReachable(f);

private set[Message] checkSingleInitial(Fsm f) {
	set[State] initialStates = {};
	set[State] noninitialStates = {};
	set[Message] messages = {};
	visit(f) {
		case state: (State)`initial state <Id _> { <Transition* _> }`: initialStates += state;
		case state: (State)`state <Id _> { <Transition* _> }`: noninitialStates += state;
	}
	switch(initialStates) {
		case {}: messages = {error("no initial state defined", n@\loc) | n <- noninitialStates};
		case {X, Y, N*}: messages = {error("multiple initial states defined", i@\loc) | i <- initialStates};
		default: el = {};
	}
	return messages;
}

private set[Message] checkDistinctIds(Fsm f) {
	list[Id] ids = [ s.id | s <- f.states ];
	return {error("state with ID <id> already defined", id@\loc) | id <- getDuplicates(ids)};
}
	
private set[Message] checkResolvable(Fsm f) {
	set[Id] referencedIds = {};
	set[Id] stateIds = {};
	visit(f) {
		case State s: stateIds += s.id;
		case (Transition)`<Event _> / <Action _> -\> <Id id>;`: referencedIds += id;
		case (Transition)`<Event _> -\> <Id id>;`: referencedIds += id;
	}
	return {error("unresolved state <id>", id@\loc) | id <- referencedIds - stateIds};
}
	
private set[Message] checkStateDeterministic(Fsm f) {
	set[Message] messages = {};
	visit(f) {
		case State s: {
			list[Event] events = [];
			visit(s.transitions) {
				case Event i: events += i;
			};
			messages += ({error("event <i> already defined in state <s.id>", i@\loc) | i <- getDuplicates(events)});
		}
	};
	return messages;
}

private set[Message] checkReachable(Fsm f) {
	rel[State, State] initial = {};
	rel[State, State] relation = {};
	visit(f) {
		case state: (State)`initial state <Id _> {<Transition* ts>}`:
			initial += <state, state> + getStateRelation(f, state);
		case state: (State)`state <Id _> {<Transition* ts>}`:
			relation += getStateRelation(f, state);
	}
	solve(initial) {
			initial += (initial o relation);
	}
	set[State] unreachableStates = {s | s <- f.states} - {s | <_, s> <- initial};
	return {warning("unreachable state <s.id>", s.id@\loc) | s <- unreachableStates};
}

private rel[State, State] getStateRelation(Fsm f, State state) {
	rel[State, State] relation = {};
	visit(state){
		case (Transition)`<Event _> -\> <Id id>;`: 
			if(just(target) := getStateId(id, f)){relation += <state, target>;}			
		case (Transition)`<Event _> / <Action _> -\> <Id id>;`:
			if(just(target) := getStateId(id, f)){relation += <state, target>;}
	}
	return relation;
}

private Maybe[State] getStateId(Id id, Fsm f){
	visit(f){
		case State s: {
			if(id == s.id) return just(s);
		}
	}
	return nothing();
}
