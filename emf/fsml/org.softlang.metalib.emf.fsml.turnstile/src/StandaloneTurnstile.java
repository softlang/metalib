import java.io.IOException;
import java.util.Collections;
import java.util.Map;

import org.eclipse.emf.common.util.EList;
import org.eclipse.emf.common.util.URI;
import org.eclipse.emf.ecore.resource.Resource;
import org.eclipse.emf.ecore.resource.Resource.Factory.Registry;
import org.eclipse.emf.ecore.resource.ResourceSet;
import org.eclipse.emf.ecore.resource.impl.ResourceSetImpl;
import org.eclipse.emf.ecore.xmi.impl.XMIResourceFactoryImpl;
import org.eclipse.emf.ecore.xmi.impl.XMLResourceFactoryImpl;
import org.softlang.metalib.emf.fsml.fsml.FSM;
import org.softlang.metalib.emf.fsml.fsml.FSMState;
import org.softlang.metalib.emf.fsml.fsml.FsmlPackage;

public class StandaloneTurnstile {
	
	public static void main(String[] args) {
		// Register package as a side-effect.
		FsmlPackage.eINSTANCE.eClass();
		// The ResourceSet that this standalone application is using.
		ResourceSet resourceSet = new ResourceSetImpl();
		// Get the registry for ResourceFactories.
		Registry resourceFactoryRegistry = resourceSet.getResourceFactoryRegistry();
		// Register the XMIResourceFactory for files with fsml extension.
		XMIResourceFactoryImpl xmiResourceFactory = new XMIResourceFactoryImpl();
		resourceFactoryRegistry.getExtensionToFactoryMap().put("fsml", xmiResourceFactory);
		// Deserialize XMI File.
		Resource fsmlResource = resourceSet.getResource(URI.createURI("Turnstile.fsml"), true);
		// Read the Turnstile model.
		FSM turnstile = (FSM) fsmlResource.getContents().get(0);
		EList<FSMState> fsmTurnstileStateEObjects = turnstile.getStates();
		
		
        
		Resource.Factory.Registry reg = Resource.Factory.Registry.INSTANCE;
        Map<String, Object> m = reg.getExtensionToFactoryMap();
        m.put("xml", new XMLResourceFactoryImpl());

        // Obtain a new resource set
        ResourceSet resSet = new ResourceSetImpl();

        // create a resource
        Resource resource = resSet.createResource(URI
                .createURI("myturnstile.xml"));
        // Get the first model element and cast it to the right type, in my
        // example everything is hierarchical included in this first node
        resource.getContents().add(turnstile);

        // now save the content.
        try {
            resource.save(Collections.EMPTY_MAP);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
	}
}
