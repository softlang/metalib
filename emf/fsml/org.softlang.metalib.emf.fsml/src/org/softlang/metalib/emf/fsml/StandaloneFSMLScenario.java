package org.softlang.metalib.emf.fsml;

import org.eclipse.emf.common.util.URI;
import org.eclipse.emf.ecore.resource.Resource;
import org.eclipse.emf.ecore.resource.ResourceSet;
import org.eclipse.emf.ecore.resource.impl.ResourceSetImpl;
import org.eclipse.emf.ecore.xmi.impl.XMIResourceFactoryImpl;
import org.softlang.metalib.emf.fsml.fsml.FSM;

public class StandaloneFSMLScenario {

	public static void main(String[] args) {
		ResourceSet rs = new ResourceSetImpl();
		
		rs.getResourceFactoryRegistry().getExtensionToFactoryMap().put("fsml", new XMIResourceFactoryImpl());

		URI uri = URI.createFileURI("path");

		Resource resource = rs.createResource(uri);

		FSM fsm = (FSM) resource.getContents().get(0);

	}
}
