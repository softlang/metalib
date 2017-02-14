/*
 * generated by Xtext 2.10.0
 */
package org.softlang.metalib.xtext.fsml.parser.antlr;

import com.google.inject.Inject;
import org.eclipse.xtext.parser.antlr.AbstractAntlrParser;
import org.eclipse.xtext.parser.antlr.XtextTokenStream;
import org.softlang.metalib.xtext.fsml.parser.antlr.internal.InternalFsmlParser;
import org.softlang.metalib.xtext.fsml.services.FsmlGrammarAccess;

public class FsmlParser extends AbstractAntlrParser {

	@Inject
	private FsmlGrammarAccess grammarAccess;

	@Override
	protected void setInitialHiddenTokens(XtextTokenStream tokenStream) {
		tokenStream.setInitialHiddenTokens("RULE_WS", "RULE_ML_COMMENT", "RULE_SL_COMMENT");
	}
	

	@Override
	protected InternalFsmlParser createParser(XtextTokenStream stream) {
		return new InternalFsmlParser(stream, getGrammarAccess());
	}

	@Override 
	protected String getDefaultRuleName() {
		return "FSM";
	}

	public FsmlGrammarAccess getGrammarAccess() {
		return this.grammarAccess;
	}

	public void setGrammarAccess(FsmlGrammarAccess grammarAccess) {
		this.grammarAccess = grammarAccess;
	}
}
