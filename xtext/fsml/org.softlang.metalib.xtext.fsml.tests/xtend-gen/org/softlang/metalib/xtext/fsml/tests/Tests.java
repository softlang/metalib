package org.softlang.metalib.xtext.fsml.tests;

import com.google.inject.Inject;
import org.eclipse.emf.common.util.EList;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.resource.Resource;
import org.eclipse.emf.ecore.util.EcoreUtil;
import org.eclipse.xtend2.lib.StringConcatenation;
import org.eclipse.xtext.junit4.InjectWith;
import org.eclipse.xtext.junit4.XtextRunner;
import org.eclipse.xtext.junit4.util.ParseHelper;
import org.eclipse.xtext.resource.XtextResourceSet;
import org.eclipse.xtext.xbase.lib.Exceptions;
import org.eclipse.xtext.xbase.lib.Extension;
import org.eclipse.xtext.xbase.lib.IterableExtensions;
import org.eclipse.xtext.xbase.lib.ObjectExtensions;
import org.eclipse.xtext.xbase.lib.Pair;
import org.eclipse.xtext.xbase.lib.Procedures.Procedure1;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.softlang.metalib.xtext.fsml.fsml.FSM;
import org.softlang.metalib.xtext.fsml.fsml.FSMState;
import org.softlang.metalib.xtext.fsml.fsml.FSMTransition;
import org.softlang.metalib.xtext.fsml.fsml.FsmlFactory;
import org.softlang.metalib.xtext.fsml.tests.FsmlInjectorProvider;

@RunWith(XtextRunner.class)
@InjectWith(FsmlInjectorProvider.class)
@SuppressWarnings("all")
public class Tests {
  /**
   * Parse helper to be injected
   */
  @Inject
  @Extension
  private ParseHelper<FSM> parseHelper;
  
  /**
   * Factory for FSML object
   */
  @Extension
  private FsmlFactory fsmlFactory = FsmlFactory.eINSTANCE;
  
  /**
   * The turnstile finite state machine
   */
  private FSM fsm;
  
  /**
   * The turnstiles locked state
   */
  private FSMState locked;
  
  /**
   * The turnstiles unlocked state
   */
  private FSMState unlocked;
  
  /**
   * The turnstiles exception state
   */
  private FSMState exception;
  
  /**
   * Setup creates the reference finite state machine
   */
  @Before
  public void setup() {
    FSMState _createFSMState = this.fsmlFactory.createFSMState();
    final Procedure1<FSMState> _function = (FSMState it) -> {
      it.setInitial(true);
      it.setName("locked");
    };
    FSMState _doubleArrow = ObjectExtensions.<FSMState>operator_doubleArrow(_createFSMState, _function);
    this.locked = _doubleArrow;
    FSMState _createFSMState_1 = this.fsmlFactory.createFSMState();
    final Procedure1<FSMState> _function_1 = (FSMState it) -> {
      it.setName("unlocked");
    };
    FSMState _doubleArrow_1 = ObjectExtensions.<FSMState>operator_doubleArrow(_createFSMState_1, _function_1);
    this.unlocked = _doubleArrow_1;
    FSMState _createFSMState_2 = this.fsmlFactory.createFSMState();
    final Procedure1<FSMState> _function_2 = (FSMState it) -> {
      it.setName("exception");
    };
    FSMState _doubleArrow_2 = ObjectExtensions.<FSMState>operator_doubleArrow(_createFSMState_2, _function_2);
    this.exception = _doubleArrow_2;
    final Procedure1<FSMState> _function_3 = (FSMState it) -> {
      EList<FSMTransition> _transitions = it.getTransitions();
      FSMTransition _createFSMTransition = this.fsmlFactory.createFSMTransition();
      final Procedure1<FSMTransition> _function_4 = (FSMTransition it_1) -> {
        it_1.setInput("ticket");
        it_1.setAction("collect");
        it_1.setTarget(this.unlocked);
      };
      FSMTransition _doubleArrow_3 = ObjectExtensions.<FSMTransition>operator_doubleArrow(_createFSMTransition, _function_4);
      _transitions.add(_doubleArrow_3);
      EList<FSMTransition> _transitions_1 = it.getTransitions();
      FSMTransition _createFSMTransition_1 = this.fsmlFactory.createFSMTransition();
      final Procedure1<FSMTransition> _function_5 = (FSMTransition it_1) -> {
        it_1.setInput("pass");
        it_1.setAction("alarm");
        it_1.setTarget(this.exception);
      };
      FSMTransition _doubleArrow_4 = ObjectExtensions.<FSMTransition>operator_doubleArrow(_createFSMTransition_1, _function_5);
      _transitions_1.add(_doubleArrow_4);
    };
    ObjectExtensions.<FSMState>operator_doubleArrow(
      this.locked, _function_3);
    final Procedure1<FSMState> _function_4 = (FSMState it) -> {
      EList<FSMTransition> _transitions = it.getTransitions();
      FSMTransition _createFSMTransition = this.fsmlFactory.createFSMTransition();
      final Procedure1<FSMTransition> _function_5 = (FSMTransition it_1) -> {
        it_1.setInput("ticket");
        it_1.setAction("eject");
      };
      FSMTransition _doubleArrow_3 = ObjectExtensions.<FSMTransition>operator_doubleArrow(_createFSMTransition, _function_5);
      _transitions.add(_doubleArrow_3);
      EList<FSMTransition> _transitions_1 = it.getTransitions();
      FSMTransition _createFSMTransition_1 = this.fsmlFactory.createFSMTransition();
      final Procedure1<FSMTransition> _function_6 = (FSMTransition it_1) -> {
        it_1.setInput("pass");
        it_1.setTarget(this.locked);
      };
      FSMTransition _doubleArrow_4 = ObjectExtensions.<FSMTransition>operator_doubleArrow(_createFSMTransition_1, _function_6);
      _transitions_1.add(_doubleArrow_4);
    };
    ObjectExtensions.<FSMState>operator_doubleArrow(
      this.unlocked, _function_4);
    final Procedure1<FSMState> _function_5 = (FSMState it) -> {
      EList<FSMTransition> _transitions = it.getTransitions();
      FSMTransition _createFSMTransition = this.fsmlFactory.createFSMTransition();
      final Procedure1<FSMTransition> _function_6 = (FSMTransition it_1) -> {
        it_1.setInput("ticket");
        it_1.setAction("eject");
      };
      FSMTransition _doubleArrow_3 = ObjectExtensions.<FSMTransition>operator_doubleArrow(_createFSMTransition, _function_6);
      _transitions.add(_doubleArrow_3);
      EList<FSMTransition> _transitions_1 = it.getTransitions();
      FSMTransition _createFSMTransition_1 = this.fsmlFactory.createFSMTransition();
      final Procedure1<FSMTransition> _function_7 = (FSMTransition it_1) -> {
        it_1.setInput("pass");
      };
      FSMTransition _doubleArrow_4 = ObjectExtensions.<FSMTransition>operator_doubleArrow(_createFSMTransition_1, _function_7);
      _transitions_1.add(_doubleArrow_4);
      EList<FSMTransition> _transitions_2 = it.getTransitions();
      FSMTransition _createFSMTransition_2 = this.fsmlFactory.createFSMTransition();
      final Procedure1<FSMTransition> _function_8 = (FSMTransition it_1) -> {
        it_1.setInput("mute");
      };
      FSMTransition _doubleArrow_5 = ObjectExtensions.<FSMTransition>operator_doubleArrow(_createFSMTransition_2, _function_8);
      _transitions_2.add(_doubleArrow_5);
      EList<FSMTransition> _transitions_3 = it.getTransitions();
      FSMTransition _createFSMTransition_3 = this.fsmlFactory.createFSMTransition();
      final Procedure1<FSMTransition> _function_9 = (FSMTransition it_1) -> {
        it_1.setInput("release");
        it_1.setTarget(this.locked);
      };
      FSMTransition _doubleArrow_6 = ObjectExtensions.<FSMTransition>operator_doubleArrow(_createFSMTransition_3, _function_9);
      _transitions_3.add(_doubleArrow_6);
    };
    ObjectExtensions.<FSMState>operator_doubleArrow(
      this.exception, _function_5);
    FSM _createFSM = this.fsmlFactory.createFSM();
    final Procedure1<FSM> _function_6 = (FSM it) -> {
      EList<FSMState> _states = it.getStates();
      _states.add(this.locked);
      EList<FSMState> _states_1 = it.getStates();
      _states_1.add(this.unlocked);
      EList<FSMState> _states_2 = it.getStates();
      _states_2.add(this.exception);
    };
    FSM _doubleArrow_3 = ObjectExtensions.<FSM>operator_doubleArrow(_createFSM, _function_6);
    this.fsm = _doubleArrow_3;
  }
  
  /**
   * testParse tests the parser against the reference
   */
  @Test
  public void testParse() {
    try {
      StringConcatenation _builder = new StringConcatenation();
      _builder.append("initial state locked {");
      _builder.newLine();
      _builder.append("  ");
      _builder.append("ticket/collect -> unlocked;");
      _builder.newLine();
      _builder.append("  ");
      _builder.append("pass/alarm -> exception;");
      _builder.newLine();
      _builder.append("}");
      _builder.newLine();
      _builder.append("state unlocked {");
      _builder.newLine();
      _builder.append("  ");
      _builder.append("ticket/eject;");
      _builder.newLine();
      _builder.append("  ");
      _builder.append("pass -> locked;");
      _builder.newLine();
      _builder.append("}");
      _builder.newLine();
      _builder.append("state exception {");
      _builder.newLine();
      _builder.append("  ");
      _builder.append("ticket/eject;");
      _builder.newLine();
      _builder.append("  ");
      _builder.append("pass;");
      _builder.newLine();
      _builder.append("  ");
      _builder.append("mute;");
      _builder.newLine();
      _builder.append("  ");
      _builder.append("release -> locked;");
      _builder.newLine();
      _builder.append("}");
      final FSM fsmParsed = this.parseHelper.parse(_builder);
      Tests.assertEEquals(this.fsm, fsmParsed);
    } catch (Throwable _e) {
      throw Exceptions.sneakyThrow(_e);
    }
  }
  
  /**
   * Negative test for parser, s. figure D.37
   */
  @Test
  public void testNegativeKeyword() {
    StringConcatenation _builder = new StringConcatenation();
    _builder.append("innnitial state locked {");
    _builder.newLine();
    _builder.append("\t");
    _builder.append("ticket/collect -> unlocked;");
    _builder.newLine();
    _builder.append("\t");
    _builder.append("pass/alarm -> exception;");
    _builder.newLine();
    _builder.append("}");
    _builder.newLine();
    _builder.newLine();
    _builder.append("state unlocked {");
    _builder.newLine();
    _builder.append("\t");
    _builder.append("ticket/eject;");
    _builder.newLine();
    _builder.append("\t");
    _builder.append("pass -> locked;");
    _builder.newLine();
    _builder.append("}");
    _builder.newLine();
    _builder.newLine();
    _builder.append("state exception {");
    _builder.newLine();
    _builder.append("\t");
    _builder.append("ticket/eject;");
    _builder.newLine();
    _builder.append("\t");
    _builder.append("pass;");
    _builder.newLine();
    _builder.append("\t");
    _builder.append("mute;");
    _builder.newLine();
    _builder.append("\t");
    _builder.append("release -> locked;");
    _builder.newLine();
    _builder.append("}");
    final Pair<FSM, Pair<EList<Resource.Diagnostic>, EList<Resource.Diagnostic>>> annotatedFSM = this.annotatedParse(_builder);
    FSM _key = annotatedFSM.getKey();
    Assert.assertNull(_key);
    Pair<EList<Resource.Diagnostic>, EList<Resource.Diagnostic>> _value = annotatedFSM.getValue();
    EList<Resource.Diagnostic> _key_1 = _value.getKey();
    int _size = _key_1.size();
    Assert.assertEquals(_size, 0);
    Pair<EList<Resource.Diagnostic>, EList<Resource.Diagnostic>> _value_1 = annotatedFSM.getValue();
    EList<Resource.Diagnostic> _value_2 = _value_1.getValue();
    int _size_1 = _value_2.size();
    Assert.assertEquals(_size_1, 1);
    Pair<EList<Resource.Diagnostic>, EList<Resource.Diagnostic>> _value_3 = annotatedFSM.getValue();
    EList<Resource.Diagnostic> _value_4 = _value_3.getValue();
    final Resource.Diagnostic error = IterableExtensions.<Resource.Diagnostic>head(_value_4);
    int _line = error.getLine();
    Assert.assertEquals(_line, 1);
    String _message = error.getMessage();
    Assert.assertEquals(_message, "missing EOF at \'innnitial\'");
  }
  
  /**
   * Helper for parsing a model and annotating it with the warnings and
   * errors the parsing process generated
   */
  public Pair<FSM, Pair<EList<Resource.Diagnostic>, EList<Resource.Diagnostic>>> annotatedParse(final CharSequence s) {
    try {
      final XtextResourceSet resourceSet = new XtextResourceSet();
      final FSM parsed = this.parseHelper.parse(s, resourceSet);
      EList<Resource> _resources = resourceSet.getResources();
      final Resource resource = IterableExtensions.<Resource>last(_resources);
      EList<Resource.Diagnostic> _warnings = resource.getWarnings();
      EList<Resource.Diagnostic> _errors = resource.getErrors();
      Pair<EList<Resource.Diagnostic>, EList<Resource.Diagnostic>> _mappedTo = Pair.<EList<Resource.Diagnostic>, EList<Resource.Diagnostic>>of(_warnings, _errors);
      return Pair.<FSM, Pair<EList<Resource.Diagnostic>, EList<Resource.Diagnostic>>>of(parsed, _mappedTo);
    } catch (Throwable _e) {
      throw Exceptions.sneakyThrow(_e);
    }
  }
  
  /**
   * Helper because JUnit does not know how to structurally compare EObjects
   */
  public static void assertEEquals(final EObject expected, final EObject actual) {
    StringConcatenation _builder = new StringConcatenation();
    _builder.append("Expected: ");
    _builder.append(expected, "");
    _builder.append(" but was: ");
    _builder.append(actual, "");
    boolean _equals = EcoreUtil.equals(expected, actual);
    Assert.assertTrue(_builder.toString(), _equals);
  }
}
