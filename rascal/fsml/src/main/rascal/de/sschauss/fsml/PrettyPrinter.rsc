module main::rascal::de::sschauss::fsml::PrettyPrinter

import List;
import Prelude;
import String;
import main::rascal::de::sschauss::fsml::ConcreteSyntax;

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
	
private str ppTransition((Transition)`<Input input>;`) =
	"<input>;";

private str ppTransition((Transition)`<Input input> / <Action action>;`) =
	"<input> / <action>;";

private str ppTransition((Transition)`<Input input> -\> <Id id>;`) =
	"<input> -\> <id>;";

private str ppTransition((Transition)`<Input input> / <Action action> -\> <Id id>;`) =
	"<input> / <action> -\> <id>;";