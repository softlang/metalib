package org.softlang.metalib.emf.fsml;

import java.util.ArrayList;
import java.util.List;

import org.softlang.metalib.emf.fsml.fsml.FSM;
import org.softlang.metalib.emf.fsml.fsml.FSMState;
import org.softlang.metalib.emf.fsml.fsml.FSMTransition;

public class Simulation {

	private final List<SimulationListener> simulationListeners = new ArrayList<>();
	private FSMState current = null;

	public Simulation(FSM fsm) {
		for (FSMState state : fsm.getStates())
			if (state.isInitial())
				if (current == null)
					current = state;
				else
					throw new RuntimeException("More than one initial state");

		if (current == null)
			throw new RuntimeException("No initial state");
	}

	public void step(String input) {
		assert (input != null);

		// Select the next transition.
		FSMTransition next = null;
		for (FSMTransition transition : current.getTransitions())
			if (input.equals(transition.getInput()))
				if (next == null)
					next = transition;
				else
					throw new RuntimeException("State-machine is not deterministic.");

		if (next == null)
			return;

		// Apply the next transition and inform the listeners.
		if(next.getTarget() != null)
			current = next.getTarget();
		
		for (SimulationListener l : simulationListeners)
			l.apply(next);

	}

	public void addSimulationListener(SimulationListener l) {
		simulationListeners.add(l);
	}

	public void removeSimulationListener(SimulationListener l) {
		simulationListeners.remove(l);
	}
}
