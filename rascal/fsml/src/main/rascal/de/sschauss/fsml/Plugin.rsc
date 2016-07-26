module main::rascal::de::sschauss::fsml::Plugin

import Prelude;
import util::Eval;
import util::IDE;
import util::ValueUI;
import main::rascal::de::sschauss::fsml::Annotater;
import main::rascal::de::sschauss::fsml::ConcreteSyntax;
import main::rascal::de::sschauss::fsml::Generator;
import main::rascal::de::sschauss::fsml::Outliner;
import main::rascal::de::sschauss::fsml::PrettyPrinter;
import main::rascal::de::sschauss::fsml::Visualizer;

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
