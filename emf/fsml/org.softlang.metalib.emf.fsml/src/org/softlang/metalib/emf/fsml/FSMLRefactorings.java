package org.softlang.metalib.emf.fsml;

import org.softlang.metalib.emf.fsml.fsml.FSM;
import org.softlang.metalib.emf.fsml.fsml.FSMState;

public class FSMLRefactorings {
	public static void rename(FSM fsm, String oldName, String newName) {
		for (FSMState state : fsm.getStates())
			if (oldName != null && oldName.equals(state.getName()))
				state.setName(newName);
	}
}
