package org.softlang.metalib.emf.fsml;

import java.io.IOException;
import java.util.Collections;

import org.eclipse.emf.common.util.Diagnostic;
import org.eclipse.emf.common.util.URI;
import org.eclipse.emf.ecore.EPackage;
import org.eclipse.emf.ecore.resource.Resource;
import org.eclipse.emf.ecore.resource.ResourceSet;
import org.eclipse.emf.ecore.resource.impl.ResourceSetImpl;
import org.eclipse.emf.ecore.util.Diagnostician;
import org.eclipse.emf.ecore.xmi.impl.XMIResourceFactoryImpl;
import org.softlang.metalib.emf.fsml.fsml.FSM;
import org.softlang.metalib.emf.fsml.fsml.FsmlPackage;

public class FSMLUtils {
	public static void initialize() {
		FsmlPackage.eINSTANCE.eClass();
		Resource.Factory.Registry.INSTANCE.getExtensionToFactoryMap().put("fsml", new XMIResourceFactoryImpl());
	}

	public static FSM load(String path) {
		ResourceSet resourceSet = new ResourceSetImpl();
		Resource resource = resourceSet.getResource(URI.createURI(path), true);

		return (FSM) resource.getContents().get(0);
	}

	public static void save(FSM content, String path) throws IOException {
		ResourceSet resourceSet = new ResourceSetImpl();
		Resource resource = resourceSet.createResource(URI.createURI(path));
		resource.getContents().add(content);
		resource.save(Collections.emptyMap());
	}

	public static boolean validateFSM(FSM content) {
		Diagnostic diagnostic = Diagnostician.INSTANCE.validate(content);
		return diagnostic.getSeverity() == Diagnostic.OK;
	}
}
