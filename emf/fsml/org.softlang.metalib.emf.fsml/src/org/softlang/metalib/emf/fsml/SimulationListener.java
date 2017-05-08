package org.softlang.metalib.emf.fsml;

import org.softlang.metalib.emf.fsml.fsml.FSMTransition;

public interface SimulationListener {
	void apply(FSMTransition transition);
}
