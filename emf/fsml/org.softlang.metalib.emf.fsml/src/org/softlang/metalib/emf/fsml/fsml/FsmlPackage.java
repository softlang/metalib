/**
 */
package org.softlang.metalib.emf.fsml.fsml;

import org.eclipse.emf.ecore.EAttribute;
import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EOperation;
import org.eclipse.emf.ecore.EPackage;
import org.eclipse.emf.ecore.EReference;

/**
 * <!-- begin-user-doc -->
 * The <b>Package</b> for the model.
 * It contains accessors for the meta objects to represent
 * <ul>
 *   <li>each class,</li>
 *   <li>each feature of each class,</li>
 *   <li>each operation of each class,</li>
 *   <li>each enum,</li>
 *   <li>and each data type</li>
 * </ul>
 * <!-- end-user-doc -->
 * @see org.softlang.metalib.emf.fsml.fsml.FsmlFactory
 * @model kind="package"
 * @generated
 */
public interface FsmlPackage extends EPackage {
	/**
	 * The package name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNAME = "fsml";

	/**
	 * The package namespace URI.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNS_URI = "http://www.softlang.org/metalib/emf/Fsml";

	/**
	 * The package namespace name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNS_PREFIX = "fsml";

	/**
	 * The singleton instance of the package.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	FsmlPackage eINSTANCE = org.softlang.metalib.emf.fsml.fsml.impl.FsmlPackageImpl.init();

	/**
	 * The meta object id for the '{@link org.softlang.metalib.emf.fsml.fsml.impl.FSMImpl <em>FSM</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see org.softlang.metalib.emf.fsml.fsml.impl.FSMImpl
	 * @see org.softlang.metalib.emf.fsml.fsml.impl.FsmlPackageImpl#getFSM()
	 * @generated
	 */
	int FSM = 0;

	/**
	 * The feature id for the '<em><b>States</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM__STATES = 0;

	/**
	 * The number of structural features of the '<em>FSM</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_FEATURE_COUNT = 1;

	/**
	 * The operation id for the '<em>Has Exact One Initial State</em>' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM___HAS_EXACT_ONE_INITIAL_STATE__DIAGNOSTICCHAIN_MAP = 0;

	/**
	 * The number of operations of the '<em>FSM</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_OPERATION_COUNT = 1;

	/**
	 * The meta object id for the '{@link org.softlang.metalib.emf.fsml.fsml.impl.FSMStateImpl <em>FSM State</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see org.softlang.metalib.emf.fsml.fsml.impl.FSMStateImpl
	 * @see org.softlang.metalib.emf.fsml.fsml.impl.FsmlPackageImpl#getFSMState()
	 * @generated
	 */
	int FSM_STATE = 1;

	/**
	 * The feature id for the '<em><b>Initial</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_STATE__INITIAL = 0;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_STATE__NAME = 1;

	/**
	 * The feature id for the '<em><b>Transitions</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_STATE__TRANSITIONS = 2;

	/**
	 * The number of structural features of the '<em>FSM State</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_STATE_FEATURE_COUNT = 3;

	/**
	 * The operation id for the '<em>Has Distinct Events</em>' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_STATE___HAS_DISTINCT_EVENTS__DIAGNOSTICCHAIN_MAP = 0;

	/**
	 * The operation id for the '<em>Is Reachable</em>' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_STATE___IS_REACHABLE__DIAGNOSTICCHAIN_MAP = 1;

	/**
	 * The number of operations of the '<em>FSM State</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_STATE_OPERATION_COUNT = 2;

	/**
	 * The meta object id for the '{@link org.softlang.metalib.emf.fsml.fsml.impl.FSMTransitionImpl <em>FSM Transition</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see org.softlang.metalib.emf.fsml.fsml.impl.FSMTransitionImpl
	 * @see org.softlang.metalib.emf.fsml.fsml.impl.FsmlPackageImpl#getFSMTransition()
	 * @generated
	 */
	int FSM_TRANSITION = 2;

	/**
	 * The feature id for the '<em><b>Input</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_TRANSITION__INPUT = 0;

	/**
	 * The feature id for the '<em><b>Action</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_TRANSITION__ACTION = 1;

	/**
	 * The feature id for the '<em><b>Target</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_TRANSITION__TARGET = 2;

	/**
	 * The number of structural features of the '<em>FSM Transition</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_TRANSITION_FEATURE_COUNT = 3;

	/**
	 * The number of operations of the '<em>FSM Transition</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_TRANSITION_OPERATION_COUNT = 0;


	/**
	 * Returns the meta object for class '{@link org.softlang.metalib.emf.fsml.fsml.FSM <em>FSM</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>FSM</em>'.
	 * @see org.softlang.metalib.emf.fsml.fsml.FSM
	 * @generated
	 */
	EClass getFSM();

	/**
	 * Returns the meta object for the containment reference list '{@link org.softlang.metalib.emf.fsml.fsml.FSM#getStates <em>States</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>States</em>'.
	 * @see org.softlang.metalib.emf.fsml.fsml.FSM#getStates()
	 * @see #getFSM()
	 * @generated
	 */
	EReference getFSM_States();

	/**
	 * Returns the meta object for the '{@link org.softlang.metalib.emf.fsml.fsml.FSM#hasExactOneInitialState(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Has Exact One Initial State</em>}' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the '<em>Has Exact One Initial State</em>' operation.
	 * @see org.softlang.metalib.emf.fsml.fsml.FSM#hasExactOneInitialState(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
	 * @generated
	 */
	EOperation getFSM__HasExactOneInitialState__DiagnosticChain_Map();

	/**
	 * Returns the meta object for class '{@link org.softlang.metalib.emf.fsml.fsml.FSMState <em>FSM State</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>FSM State</em>'.
	 * @see org.softlang.metalib.emf.fsml.fsml.FSMState
	 * @generated
	 */
	EClass getFSMState();

	/**
	 * Returns the meta object for the attribute '{@link org.softlang.metalib.emf.fsml.fsml.FSMState#isInitial <em>Initial</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Initial</em>'.
	 * @see org.softlang.metalib.emf.fsml.fsml.FSMState#isInitial()
	 * @see #getFSMState()
	 * @generated
	 */
	EAttribute getFSMState_Initial();

	/**
	 * Returns the meta object for the attribute '{@link org.softlang.metalib.emf.fsml.fsml.FSMState#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see org.softlang.metalib.emf.fsml.fsml.FSMState#getName()
	 * @see #getFSMState()
	 * @generated
	 */
	EAttribute getFSMState_Name();

	/**
	 * Returns the meta object for the containment reference list '{@link org.softlang.metalib.emf.fsml.fsml.FSMState#getTransitions <em>Transitions</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Transitions</em>'.
	 * @see org.softlang.metalib.emf.fsml.fsml.FSMState#getTransitions()
	 * @see #getFSMState()
	 * @generated
	 */
	EReference getFSMState_Transitions();

	/**
	 * Returns the meta object for the '{@link org.softlang.metalib.emf.fsml.fsml.FSMState#hasDistinctEvents(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Has Distinct Events</em>}' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the '<em>Has Distinct Events</em>' operation.
	 * @see org.softlang.metalib.emf.fsml.fsml.FSMState#hasDistinctEvents(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
	 * @generated
	 */
	EOperation getFSMState__HasDistinctEvents__DiagnosticChain_Map();

	/**
	 * Returns the meta object for the '{@link org.softlang.metalib.emf.fsml.fsml.FSMState#isReachable(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Is Reachable</em>}' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the '<em>Is Reachable</em>' operation.
	 * @see org.softlang.metalib.emf.fsml.fsml.FSMState#isReachable(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
	 * @generated
	 */
	EOperation getFSMState__IsReachable__DiagnosticChain_Map();

	/**
	 * Returns the meta object for class '{@link org.softlang.metalib.emf.fsml.fsml.FSMTransition <em>FSM Transition</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>FSM Transition</em>'.
	 * @see org.softlang.metalib.emf.fsml.fsml.FSMTransition
	 * @generated
	 */
	EClass getFSMTransition();

	/**
	 * Returns the meta object for the attribute '{@link org.softlang.metalib.emf.fsml.fsml.FSMTransition#getInput <em>Input</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Input</em>'.
	 * @see org.softlang.metalib.emf.fsml.fsml.FSMTransition#getInput()
	 * @see #getFSMTransition()
	 * @generated
	 */
	EAttribute getFSMTransition_Input();

	/**
	 * Returns the meta object for the attribute '{@link org.softlang.metalib.emf.fsml.fsml.FSMTransition#getAction <em>Action</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Action</em>'.
	 * @see org.softlang.metalib.emf.fsml.fsml.FSMTransition#getAction()
	 * @see #getFSMTransition()
	 * @generated
	 */
	EAttribute getFSMTransition_Action();

	/**
	 * Returns the meta object for the reference '{@link org.softlang.metalib.emf.fsml.fsml.FSMTransition#getTarget <em>Target</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Target</em>'.
	 * @see org.softlang.metalib.emf.fsml.fsml.FSMTransition#getTarget()
	 * @see #getFSMTransition()
	 * @generated
	 */
	EReference getFSMTransition_Target();

	/**
	 * Returns the factory that creates the instances of the model.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the factory that creates the instances of the model.
	 * @generated
	 */
	FsmlFactory getFsmlFactory();

	/**
	 * <!-- begin-user-doc -->
	 * Defines literals for the meta objects that represent
	 * <ul>
	 *   <li>each class,</li>
	 *   <li>each feature of each class,</li>
	 *   <li>each operation of each class,</li>
	 *   <li>each enum,</li>
	 *   <li>and each data type</li>
	 * </ul>
	 * <!-- end-user-doc -->
	 * @generated
	 */
	interface Literals {
		/**
		 * The meta object literal for the '{@link org.softlang.metalib.emf.fsml.fsml.impl.FSMImpl <em>FSM</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see org.softlang.metalib.emf.fsml.fsml.impl.FSMImpl
		 * @see org.softlang.metalib.emf.fsml.fsml.impl.FsmlPackageImpl#getFSM()
		 * @generated
		 */
		EClass FSM = eINSTANCE.getFSM();

		/**
		 * The meta object literal for the '<em><b>States</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference FSM__STATES = eINSTANCE.getFSM_States();

		/**
		 * The meta object literal for the '<em><b>Has Exact One Initial State</b></em>' operation.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EOperation FSM___HAS_EXACT_ONE_INITIAL_STATE__DIAGNOSTICCHAIN_MAP = eINSTANCE.getFSM__HasExactOneInitialState__DiagnosticChain_Map();

		/**
		 * The meta object literal for the '{@link org.softlang.metalib.emf.fsml.fsml.impl.FSMStateImpl <em>FSM State</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see org.softlang.metalib.emf.fsml.fsml.impl.FSMStateImpl
		 * @see org.softlang.metalib.emf.fsml.fsml.impl.FsmlPackageImpl#getFSMState()
		 * @generated
		 */
		EClass FSM_STATE = eINSTANCE.getFSMState();

		/**
		 * The meta object literal for the '<em><b>Initial</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute FSM_STATE__INITIAL = eINSTANCE.getFSMState_Initial();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute FSM_STATE__NAME = eINSTANCE.getFSMState_Name();

		/**
		 * The meta object literal for the '<em><b>Transitions</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference FSM_STATE__TRANSITIONS = eINSTANCE.getFSMState_Transitions();

		/**
		 * The meta object literal for the '<em><b>Has Distinct Events</b></em>' operation.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EOperation FSM_STATE___HAS_DISTINCT_EVENTS__DIAGNOSTICCHAIN_MAP = eINSTANCE.getFSMState__HasDistinctEvents__DiagnosticChain_Map();

		/**
		 * The meta object literal for the '<em><b>Is Reachable</b></em>' operation.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EOperation FSM_STATE___IS_REACHABLE__DIAGNOSTICCHAIN_MAP = eINSTANCE.getFSMState__IsReachable__DiagnosticChain_Map();

		/**
		 * The meta object literal for the '{@link org.softlang.metalib.emf.fsml.fsml.impl.FSMTransitionImpl <em>FSM Transition</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see org.softlang.metalib.emf.fsml.fsml.impl.FSMTransitionImpl
		 * @see org.softlang.metalib.emf.fsml.fsml.impl.FsmlPackageImpl#getFSMTransition()
		 * @generated
		 */
		EClass FSM_TRANSITION = eINSTANCE.getFSMTransition();

		/**
		 * The meta object literal for the '<em><b>Input</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute FSM_TRANSITION__INPUT = eINSTANCE.getFSMTransition_Input();

		/**
		 * The meta object literal for the '<em><b>Action</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute FSM_TRANSITION__ACTION = eINSTANCE.getFSMTransition_Action();

		/**
		 * The meta object literal for the '<em><b>Target</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference FSM_TRANSITION__TARGET = eINSTANCE.getFSMTransition_Target();

	}

} //FsmlPackage
