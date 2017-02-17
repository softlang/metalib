package org.softlang.metalib.sirius.fsml.simulation;

import org.softlang.metalib.sirius.fsml.model.fsml.FSMState;
import org.softlang.metalib.sirius.fsml.model.fsml.FSMTransition;

public interface SimulationListener {
	void apply(FSMTransition transition);
}
