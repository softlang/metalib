module main::rascal::org::softlang::fsml::PrettyPrinter

import List;
import Prelude;
import String;
import main::rascal::org::softlang::fsml::ConcreteSyntax;

public void ppFsm(Tree tree, loc location) = writeFile(location, trim(ppFsm(tree)));

private str ppFsm((Fsm)`<State* states>`) =
	"<intercalate("\n", [ppState(s) | s <- states])>";

private str ppState((State)`initial state <Id id> { <Transition* transitions>}`) =
	"initial state <id> {
	'	<intercalate("\n", [ppTransition(t) | t <- transitions])>
	'}
	'";
	
private str ppState((State)`state <Id id> { <Transition* transitions> }`) =
	"state <id> {
	'	<intercalate("\n", [ppTransition(t) | t <- transitions])>
	'}
	'";
	
private str ppTransition((Transition)`<Event event>;`) =
	"<event>;";

private str ppTransition((Transition)`<Event event> / <Action action>;`) =
	"<event> / <action>;";

private str ppTransition((Transition)`<Event event> -\> <Id id>;`) =
	"<event> -\> <id>;";

private str ppTransition((Transition)`<Event event> / <Action action> -\> <Id id>;`) =
	"<event> / <action> -\> <id>;";
	