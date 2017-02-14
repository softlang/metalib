package org.softlang.metalib.xtext.fsml.tests

import com.google.inject.Inject
import org.eclipse.emf.ecore.EObject
import org.eclipse.emf.ecore.util.EcoreUtil
import org.eclipse.xtext.junit4.InjectWith
import org.eclipse.xtext.junit4.XtextRunner
import org.eclipse.xtext.junit4.util.ParseHelper
import org.eclipse.xtext.resource.XtextResourceSet
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith

import static org.junit.Assert.*
import org.softlang.metalib.xtext.fsml.fsml.FSM
import org.softlang.metalib.xtext.fsml.fsml.FsmlFactory
import org.softlang.metalib.xtext.fsml.fsml.FSMState

@RunWith(XtextRunner)
@InjectWith(FsmlInjectorProvider)
class Tests
{

	/**
	 * Parse helper to be injected
	 */
	@Inject extension ParseHelper<FSM> parseHelper;

	/**
	 * Factory for FSML object
	 */
	extension FsmlFactory fsmlFactory = FsmlFactory.eINSTANCE;

	
	/**
	 * The turnstile finite state machine
	 */
	var FSM fsm;

	/**
	 * The turnstiles locked state
	 */
	var FSMState locked;

	/**
	 * The turnstiles unlocked state
	 */
	var FSMState unlocked;

	/**
	 * The turnstiles exception state
	 */
	var FSMState exception;

	/**
	 * Setup creates the reference finite state machine
	 */
	@Before
	def void setup()
	{

		// Create states ahead to make them referencable in code
		locked = createFSMState => [initial = true; name = 'locked'];
		unlocked = createFSMState => [name = 'unlocked'];
		exception = createFSMState => [name = 'exception'];

		// Initialize locked state
		locked => [
			transitions += createFSMTransition => [
				input = 'ticket';
				action = 'collect';
				target = unlocked;
			];
			transitions += createFSMTransition => [
				input = 'pass';
				action = 'alarm';
				target = exception;
			];
		];

		// Initialize unlocked state
		unlocked => [
			transitions += createFSMTransition => [
				input = 'ticket';
				action = 'eject';
			];
			transitions += createFSMTransition => [
				input = 'pass';
				target = locked;
			];
		];

		// Initialize exception state
		exception => [
			transitions += createFSMTransition => [
				input = 'ticket';
				action = 'eject';
			];
			transitions += createFSMTransition => [
				input = 'pass';
			];
			transitions += createFSMTransition => [
				input = 'mute';
			];
			transitions += createFSMTransition => [
				input = 'release';
				target = locked;
			];
		];

		// Initialize states
		fsm = createFSM => [
			states += locked;
			states += unlocked;
			states += exception;
		];
	}

	/**
	 * testParse tests the parser against the reference
	 */
	@Test
	def void testParse()
	{

		// Obtain the finite state machine by parsing it from text
		val fsmParsed = parse(
			'''initial state locked {
  ticket/collect -> unlocked;
  pass/alarm -> exception;
}
state unlocked {
  ticket/eject;
  pass -> locked;
}
state exception {
  ticket/eject;
  pass;
  mute;
  release -> locked;
}''');

		// Assert EObject equality
		assertEEquals(fsm, fsmParsed);
	}

	/**
	 * Negative test for parser, s. figure D.37
	 */
	@Test
	def void testNegativeKeyword()
	{
		val annotatedFSM = annotatedParse(
			'''innnitial state locked {
	ticket/collect -> unlocked;
	pass/alarm -> exception;
}

state unlocked {
	ticket/eject;
	pass -> locked;
}

state exception {
	ticket/eject;
	pass;
	mute;
	release -> locked;
}''');

		// Assert that the model could not be parsed
		assertNull(annotatedFSM.key);

		// Assert there were no warnings
		assertEquals(annotatedFSM.value.key.size, 0);

		// Assert there was one error
		assertEquals(annotatedFSM.value.value.size, 1);

		// Store the error for more assertions
		val error = annotatedFSM.value.value.head;

		// Assert correct position and message of the error
		assertEquals(error.line, 1);
		assertEquals(error.message, "missing EOF at 'innnitial'");
	}

//	/**
//	 * Negative test for invalid inputs, s. figure D.38
//	 */
//	@Test(expected=InvalidInputException)
//	def void testNegativeInvalidInput()
//	{
//
//		// Create the input model
//		val input = createInput => [
//			inputs += createInputEntry => [value = 'foo'];
//		];
//
//		// Simulate, will run into an expected exception
//		Simulation::simulate(fsm, input);
//	}
//
//	/**
//	 * Negative test for infeasible inputs, s. figure D.39
//	 */
//	@Test(expected=InfeasibleInputException)
//	def void testNegativeInfeasibleInput()
//	{
//
//		// Create the input model
//		val input = createInput => [
//			inputs += createInputEntry => [value = 'mute'];
//		];
//
//		// Simulate, will run into an expected exception
//		Simulation::simulate(fsm, input);
//	}
//
//	/**
//	 * testSimulation tests the simulator against a reference result
//	 */
//	@Test
//	def void testSimulation()
//	{
//
//		// Create the input model
//		val input = createInput => [
//			inputs += createInputEntry => [value = 'ticket'];
//			inputs += createInputEntry => [value = 'pass'];
//			inputs += createInputEntry => [value = 'ticket'];
//			inputs += createInputEntry => [value = 'pass'];
//			inputs += createInputEntry => [value = 'ticket'];
//			inputs += createInputEntry => [value = 'ticket'];
//			inputs += createInputEntry => [value = 'pass'];
//			inputs += createInputEntry => [value = 'pass'];
//			inputs += createInputEntry => [value = 'ticket'];
//			inputs += createInputEntry => [value = 'pass'];
//			inputs += createInputEntry => [value = 'mute'];
//			inputs += createInputEntry => [value = 'release'];
//			inputs += createInputEntry => [value = 'ticket'];
//			inputs += createInputEntry => [value = 'pass'];
//		];
//
//		// Create the expected result value
//		val expectedResult = #[
//			"collect" -> unlocked,
//			null -> locked,
//			"collect" -> unlocked,
//			null -> locked,
//			"collect" -> unlocked,
//			"eject" -> unlocked,
//			null -> locked,
//			"alarm" -> exception,
//			"eject" -> exception,
//			null -> exception,
//			null -> exception,
//			null -> locked,
//			"collect" -> unlocked,
//			null -> locked
//		];
//
//		// Simulate and store the actual result value
//		val result = Simulation::simulate(fsm, input);
//
//		// Assert equality
//		assertEquals(expectedResult, result);
//	}

	/**
	 * Helper for parsing a model and annotating it with the warnings and
	 * errors the parsing process generated
	 */
	def annotatedParse(CharSequence s)
	{

		// Make a new resource-set
		val resourceSet = new XtextResourceSet;

		// Parse the given string
		val parsed = parse(s, resourceSet);

		// Assume the last resource to be the one generated for the char sequence
		val resource = resourceSet.resources.last;

		// Return the annotated model
		return parsed -> (resource.warnings -> resource.errors);
	}

	/**
	 * Helper because JUnit does not know how to structurally compare EObjects
	 */
	def static assertEEquals(EObject expected, EObject actual)
	{
		assertTrue('''Expected: «expected» but was: «actual»''', EcoreUtil::equals(expected, actual));
	}
}
