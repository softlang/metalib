/*
 * generated by Xtext 2.10.0
 */
package org.softlang.metalib.xtext.fsml.ide.contentassist.antlr;

import com.google.inject.Inject;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import org.antlr.runtime.RecognitionException;
import org.eclipse.xtext.AbstractElement;
import org.eclipse.xtext.ide.editor.contentassist.antlr.AbstractContentAssistParser;
import org.eclipse.xtext.ide.editor.contentassist.antlr.FollowElement;
import org.eclipse.xtext.ide.editor.contentassist.antlr.internal.AbstractInternalContentAssistParser;
import org.softlang.metalib.xtext.fsml.ide.contentassist.antlr.internal.InternalFsmlParser;
import org.softlang.metalib.xtext.fsml.services.FsmlGrammarAccess;

public class FsmlParser extends AbstractContentAssistParser {

	@Inject
	private FsmlGrammarAccess grammarAccess;

	private Map<AbstractElement, String> nameMappings;

	@Override
	protected InternalFsmlParser createParser() {
		InternalFsmlParser result = new InternalFsmlParser(null);
		result.setGrammarAccess(grammarAccess);
		return result;
	}

	@Override
	protected String getRuleName(AbstractElement element) {
		if (nameMappings == null) {
			nameMappings = new HashMap<AbstractElement, String>() {
				private static final long serialVersionUID = 1L;
				{
					put(grammarAccess.getFSMStateAccess().getGroup(), "rule__FSMState__Group__0");
					put(grammarAccess.getFSMTransitionAccess().getGroup(), "rule__FSMTransition__Group__0");
					put(grammarAccess.getFSMTransitionAccess().getGroup_1(), "rule__FSMTransition__Group_1__0");
					put(grammarAccess.getFSMTransitionAccess().getGroup_2(), "rule__FSMTransition__Group_2__0");
					put(grammarAccess.getFSMAccess().getStatesAssignment(), "rule__FSM__StatesAssignment");
					put(grammarAccess.getFSMStateAccess().getInitialAssignment_0(), "rule__FSMState__InitialAssignment_0");
					put(grammarAccess.getFSMStateAccess().getNameAssignment_2(), "rule__FSMState__NameAssignment_2");
					put(grammarAccess.getFSMStateAccess().getTransitionsAssignment_4(), "rule__FSMState__TransitionsAssignment_4");
					put(grammarAccess.getFSMTransitionAccess().getInputAssignment_0(), "rule__FSMTransition__InputAssignment_0");
					put(grammarAccess.getFSMTransitionAccess().getActionAssignment_1_1(), "rule__FSMTransition__ActionAssignment_1_1");
					put(grammarAccess.getFSMTransitionAccess().getTargetAssignment_2_1(), "rule__FSMTransition__TargetAssignment_2_1");
				}
			};
		}
		return nameMappings.get(element);
	}

	@Override
	protected Collection<FollowElement> getFollowElements(AbstractInternalContentAssistParser parser) {
		try {
			InternalFsmlParser typedParser = (InternalFsmlParser) parser;
			typedParser.entryRuleFSM();
			return typedParser.getFollowElements();
		} catch(RecognitionException ex) {
			throw new RuntimeException(ex);
		}
	}

	@Override
	protected String[] getInitialHiddenTokens() {
		return new String[] { "RULE_WS", "RULE_ML_COMMENT", "RULE_SL_COMMENT" };
	}

	public FsmlGrammarAccess getGrammarAccess() {
		return this.grammarAccess;
	}

	public void setGrammarAccess(FsmlGrammarAccess grammarAccess) {
		this.grammarAccess = grammarAccess;
	}
}
