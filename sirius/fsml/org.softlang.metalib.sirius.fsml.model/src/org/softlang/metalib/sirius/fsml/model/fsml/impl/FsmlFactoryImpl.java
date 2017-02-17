/**
 */
package org.softlang.metalib.sirius.fsml.model.fsml.impl;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EPackage;

import org.eclipse.emf.ecore.impl.EFactoryImpl;

import org.eclipse.emf.ecore.plugin.EcorePlugin;

import org.softlang.metalib.sirius.fsml.model.fsml.*;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model <b>Factory</b>.
 * <!-- end-user-doc -->
 * @generated
 */
public class FsmlFactoryImpl extends EFactoryImpl implements FsmlFactory {
	/**
	 * Creates the default factory implementation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static FsmlFactory init() {
		try {
			FsmlFactory theFsmlFactory = (FsmlFactory)EPackage.Registry.INSTANCE.getEFactory(FsmlPackage.eNS_URI);
			if (theFsmlFactory != null) {
				return theFsmlFactory;
			}
		}
		catch (Exception exception) {
			EcorePlugin.INSTANCE.log(exception);
		}
		return new FsmlFactoryImpl();
	}

	/**
	 * Creates an instance of the factory.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FsmlFactoryImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EObject create(EClass eClass) {
		switch (eClass.getClassifierID()) {
			case FsmlPackage.FSM: return createFSM();
			case FsmlPackage.FSM_STATE: return createFSMState();
			case FsmlPackage.FSM_TRANSITION: return createFSMTransition();
			default:
				throw new IllegalArgumentException("The class '" + eClass.getName() + "' is not a valid classifier");
		}
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FSM createFSM() {
		FSMImpl fsm = new FSMImpl();
		return fsm;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FSMState createFSMState() {
		FSMStateImpl fsmState = new FSMStateImpl();
		return fsmState;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FSMTransition createFSMTransition() {
		FSMTransitionImpl fsmTransition = new FSMTransitionImpl();
		return fsmTransition;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FsmlPackage getFsmlPackage() {
		return (FsmlPackage)getEPackage();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @deprecated
	 * @generated
	 */
	@Deprecated
	public static FsmlPackage getPackage() {
		return FsmlPackage.eINSTANCE;
	}

} //FsmlFactoryImpl
