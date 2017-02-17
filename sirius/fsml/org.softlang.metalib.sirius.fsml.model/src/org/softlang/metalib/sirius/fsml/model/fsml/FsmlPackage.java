/**
 */
package org.softlang.metalib.sirius.fsml.model.fsml;

import org.eclipse.emf.ecore.EAttribute;
import org.eclipse.emf.ecore.EClass;
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
 * @see org.softlang.metalib.sirius.fsml.model.fsml.FsmlFactory
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
	String eNS_URI = "http://www.softlang.org/metalib/sirius/fsml/model/Fsml";

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
	FsmlPackage eINSTANCE = org.softlang.metalib.sirius.fsml.model.fsml.impl.FsmlPackageImpl.init();

	/**
	 * The meta object id for the '{@link org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMImpl <em>FSM</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMImpl
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.impl.FsmlPackageImpl#getFSM()
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
	 * The number of operations of the '<em>FSM</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMStateImpl <em>FSM State</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMStateImpl
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.impl.FsmlPackageImpl#getFSMState()
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
	 * The number of operations of the '<em>FSM State</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FSM_STATE_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMTransitionImpl <em>FSM Transition</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMTransitionImpl
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.impl.FsmlPackageImpl#getFSMTransition()
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
	 * Returns the meta object for class '{@link org.softlang.metalib.sirius.fsml.model.fsml.FSM <em>FSM</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>FSM</em>'.
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.FSM
	 * @generated
	 */
	EClass getFSM();

	/**
	 * Returns the meta object for the containment reference list '{@link org.softlang.metalib.sirius.fsml.model.fsml.FSM#getStates <em>States</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>States</em>'.
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.FSM#getStates()
	 * @see #getFSM()
	 * @generated
	 */
	EReference getFSM_States();

	/**
	 * Returns the meta object for class '{@link org.softlang.metalib.sirius.fsml.model.fsml.FSMState <em>FSM State</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>FSM State</em>'.
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.FSMState
	 * @generated
	 */
	EClass getFSMState();

	/**
	 * Returns the meta object for the attribute '{@link org.softlang.metalib.sirius.fsml.model.fsml.FSMState#isInitial <em>Initial</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Initial</em>'.
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.FSMState#isInitial()
	 * @see #getFSMState()
	 * @generated
	 */
	EAttribute getFSMState_Initial();

	/**
	 * Returns the meta object for the attribute '{@link org.softlang.metalib.sirius.fsml.model.fsml.FSMState#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.FSMState#getName()
	 * @see #getFSMState()
	 * @generated
	 */
	EAttribute getFSMState_Name();

	/**
	 * Returns the meta object for the containment reference list '{@link org.softlang.metalib.sirius.fsml.model.fsml.FSMState#getTransitions <em>Transitions</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Transitions</em>'.
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.FSMState#getTransitions()
	 * @see #getFSMState()
	 * @generated
	 */
	EReference getFSMState_Transitions();

	/**
	 * Returns the meta object for class '{@link org.softlang.metalib.sirius.fsml.model.fsml.FSMTransition <em>FSM Transition</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>FSM Transition</em>'.
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.FSMTransition
	 * @generated
	 */
	EClass getFSMTransition();

	/**
	 * Returns the meta object for the attribute '{@link org.softlang.metalib.sirius.fsml.model.fsml.FSMTransition#getInput <em>Input</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Input</em>'.
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.FSMTransition#getInput()
	 * @see #getFSMTransition()
	 * @generated
	 */
	EAttribute getFSMTransition_Input();

	/**
	 * Returns the meta object for the attribute '{@link org.softlang.metalib.sirius.fsml.model.fsml.FSMTransition#getAction <em>Action</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Action</em>'.
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.FSMTransition#getAction()
	 * @see #getFSMTransition()
	 * @generated
	 */
	EAttribute getFSMTransition_Action();

	/**
	 * Returns the meta object for the reference '{@link org.softlang.metalib.sirius.fsml.model.fsml.FSMTransition#getTarget <em>Target</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Target</em>'.
	 * @see org.softlang.metalib.sirius.fsml.model.fsml.FSMTransition#getTarget()
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
		 * The meta object literal for the '{@link org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMImpl <em>FSM</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMImpl
		 * @see org.softlang.metalib.sirius.fsml.model.fsml.impl.FsmlPackageImpl#getFSM()
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
		 * The meta object literal for the '{@link org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMStateImpl <em>FSM State</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMStateImpl
		 * @see org.softlang.metalib.sirius.fsml.model.fsml.impl.FsmlPackageImpl#getFSMState()
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
		 * The meta object literal for the '{@link org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMTransitionImpl <em>FSM Transition</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMTransitionImpl
		 * @see org.softlang.metalib.sirius.fsml.model.fsml.impl.FsmlPackageImpl#getFSMTransition()
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
