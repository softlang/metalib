package org.softlang.metalib.sirius.fsml.simulation;

import java.io.File;

import org.eclipse.emf.common.util.URI;
import org.eclipse.emf.ecore.resource.Resource;
import org.eclipse.emf.ecore.resource.ResourceSet;
import org.eclipse.emf.ecore.resource.impl.ResourceSetImpl;
import org.eclipse.emf.ecore.xmi.impl.XMIResourceFactoryImpl;
import org.softlang.metalib.sirius.fsml.model.fsml.FSM;
import org.softlang.metalib.sirius.fsml.model.fsml.FSMTransition;
import org.softlang.metalib.sirius.fsml.model.fsml.FsmlPackage;

public class SimulationEMFUtils {
	public static void initialize() {
		FsmlPackage.eINSTANCE.eClass();
		Resource.Factory.Registry.INSTANCE.getExtensionToFactoryMap().put("fsml", new XMIResourceFactoryImpl());
	}

	public static FSM load(String path) {
		ResourceSet resourceSet = new ResourceSetImpl();

		// create a resource
		Resource resource = resourceSet.getResource(URI.createURI(path), true);

		return (FSM) resource.getContents().get(0);
	}

	public static Simulation loadSimulation(String path) {
		return new Simulation(load(path));
	}

	public static void main(String[] args) {
		initialize();
		Simulation simulation = loadSimulation("My.fsml");

		simulation.addSimulationListener(new SimulationListener() {
			@Override
			public void apply(FSMTransition transition) {
				System.out.println("Action: " + transition.getAction());
			}
		});

		simulation.step("coin");
		simulation.step("coin");
		simulation.step("enter");
		simulation.step("enter");
		simulation.step("coin");

	}
}
