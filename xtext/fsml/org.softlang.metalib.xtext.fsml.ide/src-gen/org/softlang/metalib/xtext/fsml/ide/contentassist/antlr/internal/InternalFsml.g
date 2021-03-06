/*
 * generated by Xtext 2.10.0
 */
grammar InternalFsml;

options {
	superClass=AbstractInternalContentAssistParser;
}

@lexer::header {
package org.softlang.metalib.xtext.fsml.ide.contentassist.antlr.internal;

// Hack: Use our own Lexer superclass by means of import. 
// Currently there is no other way to specify the superclass for the lexer.
import org.eclipse.xtext.ide.editor.contentassist.antlr.internal.Lexer;
}

@parser::header {
package org.softlang.metalib.xtext.fsml.ide.contentassist.antlr.internal;

import java.io.InputStream;
import org.eclipse.xtext.*;
import org.eclipse.xtext.parser.*;
import org.eclipse.xtext.parser.impl.*;
import org.eclipse.emf.ecore.util.EcoreUtil;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.xtext.parser.antlr.XtextTokenStream;
import org.eclipse.xtext.parser.antlr.XtextTokenStream.HiddenTokens;
import org.eclipse.xtext.ide.editor.contentassist.antlr.internal.AbstractInternalContentAssistParser;
import org.eclipse.xtext.ide.editor.contentassist.antlr.internal.DFA;
import org.softlang.metalib.xtext.fsml.services.FsmlGrammarAccess;

}
@parser::members {
	private FsmlGrammarAccess grammarAccess;

	public void setGrammarAccess(FsmlGrammarAccess grammarAccess) {
		this.grammarAccess = grammarAccess;
	}

	@Override
	protected Grammar getGrammar() {
		return grammarAccess.getGrammar();
	}

	@Override
	protected String getValueForTokenName(String tokenName) {
		return tokenName;
	}
}

// Entry rule entryRuleFSM
entryRuleFSM
:
{ before(grammarAccess.getFSMRule()); }
	 ruleFSM
{ after(grammarAccess.getFSMRule()); } 
	 EOF 
;

// Rule FSM
ruleFSM 
	@init {
		int stackSize = keepStackSize();
	}
	:
	(
		{ before(grammarAccess.getFSMAccess().getStatesAssignment()); }
		(rule__FSM__StatesAssignment)*
		{ after(grammarAccess.getFSMAccess().getStatesAssignment()); }
	)
;
finally {
	restoreStackSize(stackSize);
}

// Entry rule entryRuleFSMState
entryRuleFSMState
:
{ before(grammarAccess.getFSMStateRule()); }
	 ruleFSMState
{ after(grammarAccess.getFSMStateRule()); } 
	 EOF 
;

// Rule FSMState
ruleFSMState 
	@init {
		int stackSize = keepStackSize();
	}
	:
	(
		{ before(grammarAccess.getFSMStateAccess().getGroup()); }
		(rule__FSMState__Group__0)
		{ after(grammarAccess.getFSMStateAccess().getGroup()); }
	)
;
finally {
	restoreStackSize(stackSize);
}

// Entry rule entryRuleFSMTransition
entryRuleFSMTransition
:
{ before(grammarAccess.getFSMTransitionRule()); }
	 ruleFSMTransition
{ after(grammarAccess.getFSMTransitionRule()); } 
	 EOF 
;

// Rule FSMTransition
ruleFSMTransition 
	@init {
		int stackSize = keepStackSize();
	}
	:
	(
		{ before(grammarAccess.getFSMTransitionAccess().getGroup()); }
		(rule__FSMTransition__Group__0)
		{ after(grammarAccess.getFSMTransitionAccess().getGroup()); }
	)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__Group__0
	@init {
		int stackSize = keepStackSize();
	}
:
	rule__FSMState__Group__0__Impl
	rule__FSMState__Group__1
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__Group__0__Impl
	@init {
		int stackSize = keepStackSize();
	}
:
(
	{ before(grammarAccess.getFSMStateAccess().getInitialAssignment_0()); }
	(rule__FSMState__InitialAssignment_0)?
	{ after(grammarAccess.getFSMStateAccess().getInitialAssignment_0()); }
)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__Group__1
	@init {
		int stackSize = keepStackSize();
	}
:
	rule__FSMState__Group__1__Impl
	rule__FSMState__Group__2
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__Group__1__Impl
	@init {
		int stackSize = keepStackSize();
	}
:
(
	{ before(grammarAccess.getFSMStateAccess().getStateKeyword_1()); }
	'state'
	{ after(grammarAccess.getFSMStateAccess().getStateKeyword_1()); }
)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__Group__2
	@init {
		int stackSize = keepStackSize();
	}
:
	rule__FSMState__Group__2__Impl
	rule__FSMState__Group__3
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__Group__2__Impl
	@init {
		int stackSize = keepStackSize();
	}
:
(
	{ before(grammarAccess.getFSMStateAccess().getNameAssignment_2()); }
	(rule__FSMState__NameAssignment_2)
	{ after(grammarAccess.getFSMStateAccess().getNameAssignment_2()); }
)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__Group__3
	@init {
		int stackSize = keepStackSize();
	}
:
	rule__FSMState__Group__3__Impl
	rule__FSMState__Group__4
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__Group__3__Impl
	@init {
		int stackSize = keepStackSize();
	}
:
(
	{ before(grammarAccess.getFSMStateAccess().getLeftCurlyBracketKeyword_3()); }
	'{'
	{ after(grammarAccess.getFSMStateAccess().getLeftCurlyBracketKeyword_3()); }
)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__Group__4
	@init {
		int stackSize = keepStackSize();
	}
:
	rule__FSMState__Group__4__Impl
	rule__FSMState__Group__5
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__Group__4__Impl
	@init {
		int stackSize = keepStackSize();
	}
:
(
	{ before(grammarAccess.getFSMStateAccess().getTransitionsAssignment_4()); }
	(rule__FSMState__TransitionsAssignment_4)*
	{ after(grammarAccess.getFSMStateAccess().getTransitionsAssignment_4()); }
)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__Group__5
	@init {
		int stackSize = keepStackSize();
	}
:
	rule__FSMState__Group__5__Impl
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__Group__5__Impl
	@init {
		int stackSize = keepStackSize();
	}
:
(
	{ before(grammarAccess.getFSMStateAccess().getRightCurlyBracketKeyword_5()); }
	'}'
	{ after(grammarAccess.getFSMStateAccess().getRightCurlyBracketKeyword_5()); }
)
;
finally {
	restoreStackSize(stackSize);
}


rule__FSMTransition__Group__0
	@init {
		int stackSize = keepStackSize();
	}
:
	rule__FSMTransition__Group__0__Impl
	rule__FSMTransition__Group__1
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__Group__0__Impl
	@init {
		int stackSize = keepStackSize();
	}
:
(
	{ before(grammarAccess.getFSMTransitionAccess().getInputAssignment_0()); }
	(rule__FSMTransition__InputAssignment_0)
	{ after(grammarAccess.getFSMTransitionAccess().getInputAssignment_0()); }
)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__Group__1
	@init {
		int stackSize = keepStackSize();
	}
:
	rule__FSMTransition__Group__1__Impl
	rule__FSMTransition__Group__2
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__Group__1__Impl
	@init {
		int stackSize = keepStackSize();
	}
:
(
	{ before(grammarAccess.getFSMTransitionAccess().getGroup_1()); }
	(rule__FSMTransition__Group_1__0)?
	{ after(grammarAccess.getFSMTransitionAccess().getGroup_1()); }
)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__Group__2
	@init {
		int stackSize = keepStackSize();
	}
:
	rule__FSMTransition__Group__2__Impl
	rule__FSMTransition__Group__3
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__Group__2__Impl
	@init {
		int stackSize = keepStackSize();
	}
:
(
	{ before(grammarAccess.getFSMTransitionAccess().getGroup_2()); }
	(rule__FSMTransition__Group_2__0)?
	{ after(grammarAccess.getFSMTransitionAccess().getGroup_2()); }
)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__Group__3
	@init {
		int stackSize = keepStackSize();
	}
:
	rule__FSMTransition__Group__3__Impl
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__Group__3__Impl
	@init {
		int stackSize = keepStackSize();
	}
:
(
	{ before(grammarAccess.getFSMTransitionAccess().getSemicolonKeyword_3()); }
	';'
	{ after(grammarAccess.getFSMTransitionAccess().getSemicolonKeyword_3()); }
)
;
finally {
	restoreStackSize(stackSize);
}


rule__FSMTransition__Group_1__0
	@init {
		int stackSize = keepStackSize();
	}
:
	rule__FSMTransition__Group_1__0__Impl
	rule__FSMTransition__Group_1__1
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__Group_1__0__Impl
	@init {
		int stackSize = keepStackSize();
	}
:
(
	{ before(grammarAccess.getFSMTransitionAccess().getSolidusKeyword_1_0()); }
	'/'
	{ after(grammarAccess.getFSMTransitionAccess().getSolidusKeyword_1_0()); }
)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__Group_1__1
	@init {
		int stackSize = keepStackSize();
	}
:
	rule__FSMTransition__Group_1__1__Impl
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__Group_1__1__Impl
	@init {
		int stackSize = keepStackSize();
	}
:
(
	{ before(grammarAccess.getFSMTransitionAccess().getActionAssignment_1_1()); }
	(rule__FSMTransition__ActionAssignment_1_1)
	{ after(grammarAccess.getFSMTransitionAccess().getActionAssignment_1_1()); }
)
;
finally {
	restoreStackSize(stackSize);
}


rule__FSMTransition__Group_2__0
	@init {
		int stackSize = keepStackSize();
	}
:
	rule__FSMTransition__Group_2__0__Impl
	rule__FSMTransition__Group_2__1
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__Group_2__0__Impl
	@init {
		int stackSize = keepStackSize();
	}
:
(
	{ before(grammarAccess.getFSMTransitionAccess().getHyphenMinusGreaterThanSignKeyword_2_0()); }
	'->'
	{ after(grammarAccess.getFSMTransitionAccess().getHyphenMinusGreaterThanSignKeyword_2_0()); }
)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__Group_2__1
	@init {
		int stackSize = keepStackSize();
	}
:
	rule__FSMTransition__Group_2__1__Impl
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__Group_2__1__Impl
	@init {
		int stackSize = keepStackSize();
	}
:
(
	{ before(grammarAccess.getFSMTransitionAccess().getTargetAssignment_2_1()); }
	(rule__FSMTransition__TargetAssignment_2_1)
	{ after(grammarAccess.getFSMTransitionAccess().getTargetAssignment_2_1()); }
)
;
finally {
	restoreStackSize(stackSize);
}


rule__FSM__StatesAssignment
	@init {
		int stackSize = keepStackSize();
	}
:
	(
		{ before(grammarAccess.getFSMAccess().getStatesFSMStateParserRuleCall_0()); }
		ruleFSMState
		{ after(grammarAccess.getFSMAccess().getStatesFSMStateParserRuleCall_0()); }
	)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__InitialAssignment_0
	@init {
		int stackSize = keepStackSize();
	}
:
	(
		{ before(grammarAccess.getFSMStateAccess().getInitialInitialKeyword_0_0()); }
		(
			{ before(grammarAccess.getFSMStateAccess().getInitialInitialKeyword_0_0()); }
			'initial'
			{ after(grammarAccess.getFSMStateAccess().getInitialInitialKeyword_0_0()); }
		)
		{ after(grammarAccess.getFSMStateAccess().getInitialInitialKeyword_0_0()); }
	)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__NameAssignment_2
	@init {
		int stackSize = keepStackSize();
	}
:
	(
		{ before(grammarAccess.getFSMStateAccess().getNameIDTerminalRuleCall_2_0()); }
		RULE_ID
		{ after(grammarAccess.getFSMStateAccess().getNameIDTerminalRuleCall_2_0()); }
	)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMState__TransitionsAssignment_4
	@init {
		int stackSize = keepStackSize();
	}
:
	(
		{ before(grammarAccess.getFSMStateAccess().getTransitionsFSMTransitionParserRuleCall_4_0()); }
		ruleFSMTransition
		{ after(grammarAccess.getFSMStateAccess().getTransitionsFSMTransitionParserRuleCall_4_0()); }
	)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__InputAssignment_0
	@init {
		int stackSize = keepStackSize();
	}
:
	(
		{ before(grammarAccess.getFSMTransitionAccess().getInputIDTerminalRuleCall_0_0()); }
		RULE_ID
		{ after(grammarAccess.getFSMTransitionAccess().getInputIDTerminalRuleCall_0_0()); }
	)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__ActionAssignment_1_1
	@init {
		int stackSize = keepStackSize();
	}
:
	(
		{ before(grammarAccess.getFSMTransitionAccess().getActionIDTerminalRuleCall_1_1_0()); }
		RULE_ID
		{ after(grammarAccess.getFSMTransitionAccess().getActionIDTerminalRuleCall_1_1_0()); }
	)
;
finally {
	restoreStackSize(stackSize);
}

rule__FSMTransition__TargetAssignment_2_1
	@init {
		int stackSize = keepStackSize();
	}
:
	(
		{ before(grammarAccess.getFSMTransitionAccess().getTargetFSMStateCrossReference_2_1_0()); }
		(
			{ before(grammarAccess.getFSMTransitionAccess().getTargetFSMStateIDTerminalRuleCall_2_1_0_1()); }
			RULE_ID
			{ after(grammarAccess.getFSMTransitionAccess().getTargetFSMStateIDTerminalRuleCall_2_1_0_1()); }
		)
		{ after(grammarAccess.getFSMTransitionAccess().getTargetFSMStateCrossReference_2_1_0()); }
	)
;
finally {
	restoreStackSize(stackSize);
}

RULE_ID : '^'? ('a'..'z'|'A'..'Z'|'_') ('a'..'z'|'A'..'Z'|'_'|'0'..'9')*;

RULE_INT : ('0'..'9')+;

RULE_STRING : ('"' ('\\' .|~(('\\'|'"')))* '"'|'\'' ('\\' .|~(('\\'|'\'')))* '\'');

RULE_ML_COMMENT : '/*' ( options {greedy=false;} : . )*'*/';

RULE_SL_COMMENT : '//' ~(('\n'|'\r'))* ('\r'? '\n')?;

RULE_WS : (' '|'\t'|'\r'|'\n')+;

RULE_ANY_OTHER : .;
