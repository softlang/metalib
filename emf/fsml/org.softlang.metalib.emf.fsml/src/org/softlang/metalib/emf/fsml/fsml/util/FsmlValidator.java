/**
 */
package org.softlang.metalib.emf.fsml.fsml.util;

import java.util.Map;

import org.eclipse.emf.common.util.DiagnosticChain;
import org.eclipse.emf.common.util.ResourceLocator;

import org.eclipse.emf.ecore.EPackage;

import org.eclipse.emf.ecore.util.EObjectValidator;

import org.softlang.metalib.emf.fsml.fsml.*;

/**
 * <!-- begin-user-doc -->
 * The <b>Validator</b> for the model.
 * <!-- end-user-doc -->
 * @see org.softlang.metalib.emf.fsml.fsml.FsmlPackage
 * @generated
 */
public class FsmlValidator extends EObjectValidator {
	/**
	 * The cached model package
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final FsmlValidator INSTANCE = new FsmlValidator();

	/**
	 * A constant for the {@link org.eclipse.emf.common.util.Diagnostic#getSource() source} of diagnostic {@link org.eclipse.emf.common.util.Diagnostic#getCode() codes} from this package.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see org.eclipse.emf.common.util.Diagnostic#getSource()
	 * @see org.eclipse.emf.common.util.Diagnostic#getCode()
	 * @generated
	 */
	public static final String DIAGNOSTIC_SOURCE = "org.softlang.metalib.emf.fsml.fsml";

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Has Exact One Initial State' of 'FSM'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int FSM__HAS_EXACT_ONE_INITIAL_STATE = 1;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Has Distinct Events' of 'FSM State'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int FSM_STATE__HAS_DISTINCT_EVENTS = 2;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Is Reachable' of 'FSM State'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int FSM_STATE__IS_REACHABLE = 3;

	/**
	 * A constant with a fixed name that can be used as the base value for additional hand written constants.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private static final int GENERATED_DIAGNOSTIC_CODE_COUNT = 3;

	/**
	 * A constant with a fixed name that can be used as the base value for additional hand written constants in a derived class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected static final int DIAGNOSTIC_CODE_COUNT = GENERATED_DIAGNOSTIC_CODE_COUNT;

	/**
	 * Creates an instance of the switch.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FsmlValidator() {
		super();
	}

	/**
	 * Returns the package of this validator switch.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EPackage getEPackage() {
	  return FsmlPackage.eINSTANCE;
	}

	/**
	 * Calls <code>validateXXX</code> for the corresponding classifier of the model.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected boolean validate(int classifierID, Object value, DiagnosticChain diagnostics, Map<Object, Object> context) {
		switch (classifierID) {
			case FsmlPackage.FSM:
				return validateFSM((FSM)value, diagnostics, context);
			case FsmlPackage.FSM_STATE:
				return validateFSMState((FSMState)value, diagnostics, context);
			case FsmlPackage.FSM_TRANSITION:
				return validateFSMTransition((FSMTransition)value, diagnostics, context);
			default:
				return true;
		}
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFSM(FSM fsm, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(fsm, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(fsm, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(fsm, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(fsm, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(fsm, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(fsm, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(fsm, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(fsm, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(fsm, diagnostics, context);
		if (result || diagnostics != null) result &= validateFSM_hasExactOneInitialState(fsm, diagnostics, context);
		return result;
	}

	/**
	 * Validates the hasExactOneInitialState constraint of '<em>FSM</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFSM_hasExactOneInitialState(FSM fsm, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return fsm.hasExactOneInitialState(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFSMState(FSMState fsmState, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(fsmState, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(fsmState, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(fsmState, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(fsmState, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(fsmState, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(fsmState, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(fsmState, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(fsmState, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(fsmState, diagnostics, context);
		if (result || diagnostics != null) result &= validateFSMState_hasDistinctEvents(fsmState, diagnostics, context);
		if (result || diagnostics != null) result &= validateFSMState_isReachable(fsmState, diagnostics, context);
		return result;
	}

	/**
	 * Validates the hasDistinctEvents constraint of '<em>FSM State</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFSMState_hasDistinctEvents(FSMState fsmState, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return fsmState.hasDistinctEvents(diagnostics, context);
	}

	/**
	 * Validates the isReachable constraint of '<em>FSM State</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFSMState_isReachable(FSMState fsmState, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return fsmState.isReachable(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFSMTransition(FSMTransition fsmTransition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return validate_EveryDefaultConstraint(fsmTransition, diagnostics, context);
	}

	/**
	 * Returns the resource locator that will be used to fetch messages for this validator's diagnostics.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public ResourceLocator getResourceLocator() {
		// TODO
		// Specialize this to return a resource locator for messages specific to this validator.
		// Ensure that you remove @generated or mark it @generated NOT
		return super.getResourceLocator();
	}

} //FsmlValidator
