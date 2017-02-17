/**
 */
package org.softlang.metalib.sirius.fsml.model.fsml.impl;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;

import org.softlang.metalib.sirius.fsml.model.fsml.FSMState;
import org.softlang.metalib.sirius.fsml.model.fsml.FSMTransition;
import org.softlang.metalib.sirius.fsml.model.fsml.FsmlPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>FSM Transition</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMTransitionImpl#getInput <em>Input</em>}</li>
 *   <li>{@link org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMTransitionImpl#getAction <em>Action</em>}</li>
 *   <li>{@link org.softlang.metalib.sirius.fsml.model.fsml.impl.FSMTransitionImpl#getTarget <em>Target</em>}</li>
 * </ul>
 *
 * @generated
 */
public class FSMTransitionImpl extends MinimalEObjectImpl.Container implements FSMTransition {
	/**
	 * The default value of the '{@link #getInput() <em>Input</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getInput()
	 * @generated
	 * @ordered
	 */
	protected static final String INPUT_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getInput() <em>Input</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getInput()
	 * @generated
	 * @ordered
	 */
	protected String input = INPUT_EDEFAULT;

	/**
	 * The default value of the '{@link #getAction() <em>Action</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getAction()
	 * @generated
	 * @ordered
	 */
	protected static final String ACTION_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getAction() <em>Action</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getAction()
	 * @generated
	 * @ordered
	 */
	protected String action = ACTION_EDEFAULT;

	/**
	 * The cached value of the '{@link #getTarget() <em>Target</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getTarget()
	 * @generated
	 * @ordered
	 */
	protected FSMState target;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected FSMTransitionImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return FsmlPackage.Literals.FSM_TRANSITION;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getInput() {
		return input;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setInput(String newInput) {
		String oldInput = input;
		input = newInput;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, FsmlPackage.FSM_TRANSITION__INPUT, oldInput, input));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getAction() {
		return action;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setAction(String newAction) {
		String oldAction = action;
		action = newAction;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, FsmlPackage.FSM_TRANSITION__ACTION, oldAction, action));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FSMState getTarget() {
		if (target != null && target.eIsProxy()) {
			InternalEObject oldTarget = (InternalEObject)target;
			target = (FSMState)eResolveProxy(oldTarget);
			if (target != oldTarget) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, FsmlPackage.FSM_TRANSITION__TARGET, oldTarget, target));
			}
		}
		return target;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FSMState basicGetTarget() {
		return target;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setTarget(FSMState newTarget) {
		FSMState oldTarget = target;
		target = newTarget;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, FsmlPackage.FSM_TRANSITION__TARGET, oldTarget, target));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
			case FsmlPackage.FSM_TRANSITION__INPUT:
				return getInput();
			case FsmlPackage.FSM_TRANSITION__ACTION:
				return getAction();
			case FsmlPackage.FSM_TRANSITION__TARGET:
				if (resolve) return getTarget();
				return basicGetTarget();
		}
		return super.eGet(featureID, resolve, coreType);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void eSet(int featureID, Object newValue) {
		switch (featureID) {
			case FsmlPackage.FSM_TRANSITION__INPUT:
				setInput((String)newValue);
				return;
			case FsmlPackage.FSM_TRANSITION__ACTION:
				setAction((String)newValue);
				return;
			case FsmlPackage.FSM_TRANSITION__TARGET:
				setTarget((FSMState)newValue);
				return;
		}
		super.eSet(featureID, newValue);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void eUnset(int featureID) {
		switch (featureID) {
			case FsmlPackage.FSM_TRANSITION__INPUT:
				setInput(INPUT_EDEFAULT);
				return;
			case FsmlPackage.FSM_TRANSITION__ACTION:
				setAction(ACTION_EDEFAULT);
				return;
			case FsmlPackage.FSM_TRANSITION__TARGET:
				setTarget((FSMState)null);
				return;
		}
		super.eUnset(featureID);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public boolean eIsSet(int featureID) {
		switch (featureID) {
			case FsmlPackage.FSM_TRANSITION__INPUT:
				return INPUT_EDEFAULT == null ? input != null : !INPUT_EDEFAULT.equals(input);
			case FsmlPackage.FSM_TRANSITION__ACTION:
				return ACTION_EDEFAULT == null ? action != null : !ACTION_EDEFAULT.equals(action);
			case FsmlPackage.FSM_TRANSITION__TARGET:
				return target != null;
		}
		return super.eIsSet(featureID);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String toString() {
		if (eIsProxy()) return super.toString();

		StringBuffer result = new StringBuffer(super.toString());
		result.append(" (input: ");
		result.append(input);
		result.append(", action: ");
		result.append(action);
		result.append(')');
		return result.toString();
	}

} //FSMTransitionImpl
