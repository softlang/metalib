import org.eclipse.emf.common.util.EList;
import org.eclipse.emf.common.util.URI;
import org.eclipse.emf.ecore.resource.Resource;
import org.eclipse.emf.ecore.resource.Resource.Factory.Registry;
import org.eclipse.emf.ecore.resource.ResourceSet;
import org.eclipse.emf.ecore.resource.impl.ResourceSetImpl;
import org.eclipse.emf.ecore.xmi.impl.XMIResourceFactoryImpl;
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
		FSM fsmTurnstileEObject = (FSM) fsmlResource.getContents().get(0);
		EList<FSMState> fsmTurnstileStateEObjects = fsmTurnstileEObject.getStates();
	}
}
