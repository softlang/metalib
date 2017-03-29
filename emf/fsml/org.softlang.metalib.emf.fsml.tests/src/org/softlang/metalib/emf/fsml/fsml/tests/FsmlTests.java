/**
 */
package org.softlang.metalib.emf.fsml.fsml.tests;

import junit.framework.Test;
import junit.framework.TestSuite;

import junit.textui.TestRunner;

/**
 * <!-- begin-user-doc -->
 * A test suite for the '<em><b>fsml</b></em>' package.
 * <!-- end-user-doc -->
 * @generated
 */
public class FsmlTests extends TestSuite {

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static void main(String[] args) {
		TestRunner.run(suite());
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static Test suite() {
		TestSuite suite = new FsmlTests("fsml Tests");
		suite.addTestSuite(FSMTest.class);
		suite.addTestSuite(FSMStateTest.class);
		return suite;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public FsmlTests(String name) {
		super(name);
	}

} //FsmlTests
