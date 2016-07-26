module main::rascal::de::sschauss::fsml::Generator

import List;
import Prelude;
import String;
import main::rascal::de::sschauss::fsml::ConcreteSyntax;

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
	
private str transitionToJava((Transition)`<Input input>;`) =
	".transition(\"<input>\", null, null)";
	
private str transitionToJava((Transition)`<Input input> / <Action action>;`) = 
	".transition(\"<input>\", \"<action>\", null)";
	
private str transitionToJava((Transition)`<Input input> -\> <Id id>;`) = 
	".transition(\"<input>\", null, \"<id>\")";
	
private str transitionToJava((Transition)`<Input input> / <Action action> -\> <Id id>;`) = 
	".transition(\"<input>\", \"<action>\", \"<id>\")";