module main::rascal::org::softlang::fsml::Generator

import List;
import Prelude;
import String;
import main::rascal::org::softlang::fsml::ConcreteSyntax;

public void generateJava(Tree tree, loc location) =
	writeFile(|<location.scheme>://<location.authority>/src/gen/java/org/softlang/fluent/<getFileName(location)>.java|, fsmToJava(tree, location));

private str getFileName(loc location) {
	str filename = last(split("/", location.path));
	return toUpperCase(stringChar(charAt(filename, 0))) + substring(head(split(".", filename)), 1);
}

private str fsmToJava((Fsm)`<State* states>`, loc location) =
	"package org.softlang.fluent;
	'
	'import static org.softlang.fluent.FsmlImpl.fsm;
	'
	'public class <getFileName(location)> {
	'	
	'	public static final Fsml <toUpperCase(getFileName(location))> =
	'		fsm()
	'			<intercalate("\n", [stateToJava(s) | s <- states])>;
	'}
	";
	
private str stateToJava(State state) =
	".state(\"<state.id>\")
	'	<intercalate("\n", [transitionToJava(t) | t <- state.transitions])>";
	
private str transitionToJava((Transition)`<Event event>;`) =
	".transition(\"<event>\", null, null)";
	
private str transitionToJava((Transition)`<Event event> / <Action action>;`) = 
	".transition(\"<event>\", \"<action>\", null)";
	
private str transitionToJava((Transition)`<Event event> -\> <Id id>;`) = 
	".transition(\"<event>\", null, \"<id>\")";
	
private str transitionToJava((Transition)`<Event event> / <Action action> -\> <Id id>;`) = 
	".transition(\"<event>\", \"<action>\", \"<id>\")";
	