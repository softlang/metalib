module main::rascal::org::softlang::fsml::Plugin

import Prelude;
import util::Eval;
import util::IDE;
import util::ValueUI;
import main::rascal::org::softlang::fsml::Annotater;
import main::rascal::org::softlang::fsml::ConcreteSyntax;
import main::rascal::org::softlang::fsml::Generator;
import main::rascal::org::softlang::fsml::Outliner;
import main::rascal::org::softlang::fsml::PrettyPrinter;
import main::rascal::org::softlang::fsml::Visualizer;

private str FSML_NAME = "FSML";
private str FSML_EXT = "fsml";

private Fsm parseFsm(str source, loc location) {
	return parse(#Fsm, source, location);
}

private set[Contribution] FSMLContrib = {
	popup(
		menu("FSML", [
			action("Format", ppFsm),
			action("Generate Java", generateJava),
			action("Visualize", visualize)
		])
	),
	annotator(annotateFsm),
	outliner(outlineFsm)
};

public void registerFSML() {
	registerLanguage(FSML_NAME, FSML_EXT, parseFsm);
	registerContributions(FSML_NAME, FSMLContrib);
}
