package org.softlang.metalib.xtext.fsml.parser.antlr.internal;

import org.eclipse.xtext.*;
import org.eclipse.xtext.parser.*;
import org.eclipse.xtext.parser.impl.*;
import org.eclipse.emf.ecore.util.EcoreUtil;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.xtext.parser.antlr.AbstractInternalAntlrParser;
import org.eclipse.xtext.parser.antlr.XtextTokenStream;
import org.eclipse.xtext.parser.antlr.XtextTokenStream.HiddenTokens;
import org.eclipse.xtext.parser.antlr.AntlrDatatypeRuleToken;
import org.softlang.metalib.xtext.fsml.services.FsmlGrammarAccess;



import org.antlr.runtime.*;
import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

@SuppressWarnings("all")
public class InternalFsmlParser extends AbstractInternalAntlrParser {
    public static final String[] tokenNames = new String[] {
        "<invalid>", "<EOR>", "<DOWN>", "<UP>", "RULE_ID", "RULE_INT", "RULE_STRING", "RULE_ML_COMMENT", "RULE_SL_COMMENT", "RULE_WS", "RULE_ANY_OTHER", "'initial'", "'state'", "'{'", "'}'", "'/'", "'->'", "';'"
    };
    public static final int RULE_ID=4;
    public static final int RULE_WS=9;
    public static final int RULE_STRING=6;
    public static final int RULE_ANY_OTHER=10;
    public static final int RULE_SL_COMMENT=8;
    public static final int T__15=15;
    public static final int T__16=16;
    public static final int T__17=17;
    public static final int RULE_INT=5;
    public static final int T__11=11;
    public static final int RULE_ML_COMMENT=7;
    public static final int T__12=12;
    public static final int T__13=13;
    public static final int T__14=14;
    public static final int EOF=-1;

    // delegates
    // delegators


        public InternalFsmlParser(TokenStream input) {
            this(input, new RecognizerSharedState());
        }
        public InternalFsmlParser(TokenStream input, RecognizerSharedState state) {
            super(input, state);
             
        }
        

    public String[] getTokenNames() { return InternalFsmlParser.tokenNames; }
    public String getGrammarFileName() { return "InternalFsml.g"; }



     	private FsmlGrammarAccess grammarAccess;

        public InternalFsmlParser(TokenStream input, FsmlGrammarAccess grammarAccess) {
            this(input);
            this.grammarAccess = grammarAccess;
            registerRules(grammarAccess.getGrammar());
        }

        @Override
        protected String getFirstRuleName() {
        	return "FSM";
       	}

       	@Override
       	protected FsmlGrammarAccess getGrammarAccess() {
       		return grammarAccess;
       	}




    // $ANTLR start "entryRuleFSM"
    // InternalFsml.g:64:1: entryRuleFSM returns [EObject current=null] : iv_ruleFSM= ruleFSM EOF ;
    public final EObject entryRuleFSM() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleFSM = null;


        try {
            // InternalFsml.g:64:44: (iv_ruleFSM= ruleFSM EOF )
            // InternalFsml.g:65:2: iv_ruleFSM= ruleFSM EOF
            {
             newCompositeNode(grammarAccess.getFSMRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleFSM=ruleFSM();

            state._fsp--;

             current =iv_ruleFSM; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleFSM"


    // $ANTLR start "ruleFSM"
    // InternalFsml.g:71:1: ruleFSM returns [EObject current=null] : ( (lv_states_0_0= ruleFSMState ) )* ;
    public final EObject ruleFSM() throws RecognitionException {
        EObject current = null;

        EObject lv_states_0_0 = null;



        	enterRule();

        try {
            // InternalFsml.g:77:2: ( ( (lv_states_0_0= ruleFSMState ) )* )
            // InternalFsml.g:78:2: ( (lv_states_0_0= ruleFSMState ) )*
            {
            // InternalFsml.g:78:2: ( (lv_states_0_0= ruleFSMState ) )*
            loop1:
            do {
                int alt1=2;
                int LA1_0 = input.LA(1);

                if ( ((LA1_0>=11 && LA1_0<=12)) ) {
                    alt1=1;
                }


                switch (alt1) {
            	case 1 :
            	    // InternalFsml.g:79:3: (lv_states_0_0= ruleFSMState )
            	    {
            	    // InternalFsml.g:79:3: (lv_states_0_0= ruleFSMState )
            	    // InternalFsml.g:80:4: lv_states_0_0= ruleFSMState
            	    {

            	    				newCompositeNode(grammarAccess.getFSMAccess().getStatesFSMStateParserRuleCall_0());
            	    			
            	    pushFollow(FOLLOW_3);
            	    lv_states_0_0=ruleFSMState();

            	    state._fsp--;


            	    				if (current==null) {
            	    					current = createModelElementForParent(grammarAccess.getFSMRule());
            	    				}
            	    				add(
            	    					current,
            	    					"states",
            	    					lv_states_0_0,
            	    					"org.softlang.metalib.xtext.fsml.Fsml.FSMState");
            	    				afterParserOrEnumRuleCall();
            	    			

            	    }


            	    }
            	    break;

            	default :
            	    break loop1;
                }
            } while (true);


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleFSM"


    // $ANTLR start "entryRuleFSMState"
    // InternalFsml.g:100:1: entryRuleFSMState returns [EObject current=null] : iv_ruleFSMState= ruleFSMState EOF ;
    public final EObject entryRuleFSMState() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleFSMState = null;


        try {
            // InternalFsml.g:100:49: (iv_ruleFSMState= ruleFSMState EOF )
            // InternalFsml.g:101:2: iv_ruleFSMState= ruleFSMState EOF
            {
             newCompositeNode(grammarAccess.getFSMStateRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleFSMState=ruleFSMState();

            state._fsp--;

             current =iv_ruleFSMState; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleFSMState"


    // $ANTLR start "ruleFSMState"
    // InternalFsml.g:107:1: ruleFSMState returns [EObject current=null] : ( ( (lv_initial_0_0= 'initial' ) )? otherlv_1= 'state' ( (lv_name_2_0= RULE_ID ) ) otherlv_3= '{' ( (lv_transitions_4_0= ruleFSMTransition ) )* otherlv_5= '}' ) ;
    public final EObject ruleFSMState() throws RecognitionException {
        EObject current = null;

        Token lv_initial_0_0=null;
        Token otherlv_1=null;
        Token lv_name_2_0=null;
        Token otherlv_3=null;
        Token otherlv_5=null;
        EObject lv_transitions_4_0 = null;



        	enterRule();

        try {
            // InternalFsml.g:113:2: ( ( ( (lv_initial_0_0= 'initial' ) )? otherlv_1= 'state' ( (lv_name_2_0= RULE_ID ) ) otherlv_3= '{' ( (lv_transitions_4_0= ruleFSMTransition ) )* otherlv_5= '}' ) )
            // InternalFsml.g:114:2: ( ( (lv_initial_0_0= 'initial' ) )? otherlv_1= 'state' ( (lv_name_2_0= RULE_ID ) ) otherlv_3= '{' ( (lv_transitions_4_0= ruleFSMTransition ) )* otherlv_5= '}' )
            {
            // InternalFsml.g:114:2: ( ( (lv_initial_0_0= 'initial' ) )? otherlv_1= 'state' ( (lv_name_2_0= RULE_ID ) ) otherlv_3= '{' ( (lv_transitions_4_0= ruleFSMTransition ) )* otherlv_5= '}' )
            // InternalFsml.g:115:3: ( (lv_initial_0_0= 'initial' ) )? otherlv_1= 'state' ( (lv_name_2_0= RULE_ID ) ) otherlv_3= '{' ( (lv_transitions_4_0= ruleFSMTransition ) )* otherlv_5= '}'
            {
            // InternalFsml.g:115:3: ( (lv_initial_0_0= 'initial' ) )?
            int alt2=2;
            int LA2_0 = input.LA(1);

            if ( (LA2_0==11) ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // InternalFsml.g:116:4: (lv_initial_0_0= 'initial' )
                    {
                    // InternalFsml.g:116:4: (lv_initial_0_0= 'initial' )
                    // InternalFsml.g:117:5: lv_initial_0_0= 'initial'
                    {
                    lv_initial_0_0=(Token)match(input,11,FOLLOW_4); 

                    					newLeafNode(lv_initial_0_0, grammarAccess.getFSMStateAccess().getInitialInitialKeyword_0_0());
                    				

                    					if (current==null) {
                    						current = createModelElement(grammarAccess.getFSMStateRule());
                    					}
                    					setWithLastConsumed(current, "initial", true, "initial");
                    				

                    }


                    }
                    break;

            }

            otherlv_1=(Token)match(input,12,FOLLOW_5); 

            			newLeafNode(otherlv_1, grammarAccess.getFSMStateAccess().getStateKeyword_1());
            		
            // InternalFsml.g:133:3: ( (lv_name_2_0= RULE_ID ) )
            // InternalFsml.g:134:4: (lv_name_2_0= RULE_ID )
            {
            // InternalFsml.g:134:4: (lv_name_2_0= RULE_ID )
            // InternalFsml.g:135:5: lv_name_2_0= RULE_ID
            {
            lv_name_2_0=(Token)match(input,RULE_ID,FOLLOW_6); 

            					newLeafNode(lv_name_2_0, grammarAccess.getFSMStateAccess().getNameIDTerminalRuleCall_2_0());
            				

            					if (current==null) {
            						current = createModelElement(grammarAccess.getFSMStateRule());
            					}
            					setWithLastConsumed(
            						current,
            						"name",
            						lv_name_2_0,
            						"org.eclipse.xtext.common.Terminals.ID");
            				

            }


            }

            otherlv_3=(Token)match(input,13,FOLLOW_7); 

            			newLeafNode(otherlv_3, grammarAccess.getFSMStateAccess().getLeftCurlyBracketKeyword_3());
            		
            // InternalFsml.g:155:3: ( (lv_transitions_4_0= ruleFSMTransition ) )*
            loop3:
            do {
                int alt3=2;
                int LA3_0 = input.LA(1);

                if ( (LA3_0==RULE_ID) ) {
                    alt3=1;
                }


                switch (alt3) {
            	case 1 :
            	    // InternalFsml.g:156:4: (lv_transitions_4_0= ruleFSMTransition )
            	    {
            	    // InternalFsml.g:156:4: (lv_transitions_4_0= ruleFSMTransition )
            	    // InternalFsml.g:157:5: lv_transitions_4_0= ruleFSMTransition
            	    {

            	    					newCompositeNode(grammarAccess.getFSMStateAccess().getTransitionsFSMTransitionParserRuleCall_4_0());
            	    				
            	    pushFollow(FOLLOW_7);
            	    lv_transitions_4_0=ruleFSMTransition();

            	    state._fsp--;


            	    					if (current==null) {
            	    						current = createModelElementForParent(grammarAccess.getFSMStateRule());
            	    					}
            	    					add(
            	    						current,
            	    						"transitions",
            	    						lv_transitions_4_0,
            	    						"org.softlang.metalib.xtext.fsml.Fsml.FSMTransition");
            	    					afterParserOrEnumRuleCall();
            	    				

            	    }


            	    }
            	    break;

            	default :
            	    break loop3;
                }
            } while (true);

            otherlv_5=(Token)match(input,14,FOLLOW_2); 

            			newLeafNode(otherlv_5, grammarAccess.getFSMStateAccess().getRightCurlyBracketKeyword_5());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleFSMState"


    // $ANTLR start "entryRuleFSMTransition"
    // InternalFsml.g:182:1: entryRuleFSMTransition returns [EObject current=null] : iv_ruleFSMTransition= ruleFSMTransition EOF ;
    public final EObject entryRuleFSMTransition() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleFSMTransition = null;


        try {
            // InternalFsml.g:182:54: (iv_ruleFSMTransition= ruleFSMTransition EOF )
            // InternalFsml.g:183:2: iv_ruleFSMTransition= ruleFSMTransition EOF
            {
             newCompositeNode(grammarAccess.getFSMTransitionRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleFSMTransition=ruleFSMTransition();

            state._fsp--;

             current =iv_ruleFSMTransition; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleFSMTransition"


    // $ANTLR start "ruleFSMTransition"
    // InternalFsml.g:189:1: ruleFSMTransition returns [EObject current=null] : ( ( (lv_input_0_0= RULE_ID ) ) (otherlv_1= '/' ( (lv_action_2_0= RULE_ID ) ) )? (otherlv_3= '->' ( (otherlv_4= RULE_ID ) ) )? otherlv_5= ';' ) ;
    public final EObject ruleFSMTransition() throws RecognitionException {
        EObject current = null;

        Token lv_input_0_0=null;
        Token otherlv_1=null;
        Token lv_action_2_0=null;
        Token otherlv_3=null;
        Token otherlv_4=null;
        Token otherlv_5=null;


        	enterRule();

        try {
            // InternalFsml.g:195:2: ( ( ( (lv_input_0_0= RULE_ID ) ) (otherlv_1= '/' ( (lv_action_2_0= RULE_ID ) ) )? (otherlv_3= '->' ( (otherlv_4= RULE_ID ) ) )? otherlv_5= ';' ) )
            // InternalFsml.g:196:2: ( ( (lv_input_0_0= RULE_ID ) ) (otherlv_1= '/' ( (lv_action_2_0= RULE_ID ) ) )? (otherlv_3= '->' ( (otherlv_4= RULE_ID ) ) )? otherlv_5= ';' )
            {
            // InternalFsml.g:196:2: ( ( (lv_input_0_0= RULE_ID ) ) (otherlv_1= '/' ( (lv_action_2_0= RULE_ID ) ) )? (otherlv_3= '->' ( (otherlv_4= RULE_ID ) ) )? otherlv_5= ';' )
            // InternalFsml.g:197:3: ( (lv_input_0_0= RULE_ID ) ) (otherlv_1= '/' ( (lv_action_2_0= RULE_ID ) ) )? (otherlv_3= '->' ( (otherlv_4= RULE_ID ) ) )? otherlv_5= ';'
            {
            // InternalFsml.g:197:3: ( (lv_input_0_0= RULE_ID ) )
            // InternalFsml.g:198:4: (lv_input_0_0= RULE_ID )
            {
            // InternalFsml.g:198:4: (lv_input_0_0= RULE_ID )
            // InternalFsml.g:199:5: lv_input_0_0= RULE_ID
            {
            lv_input_0_0=(Token)match(input,RULE_ID,FOLLOW_8); 

            					newLeafNode(lv_input_0_0, grammarAccess.getFSMTransitionAccess().getInputIDTerminalRuleCall_0_0());
            				

            					if (current==null) {
            						current = createModelElement(grammarAccess.getFSMTransitionRule());
            					}
            					setWithLastConsumed(
            						current,
            						"input",
            						lv_input_0_0,
            						"org.eclipse.xtext.common.Terminals.ID");
            				

            }


            }

            // InternalFsml.g:215:3: (otherlv_1= '/' ( (lv_action_2_0= RULE_ID ) ) )?
            int alt4=2;
            int LA4_0 = input.LA(1);

            if ( (LA4_0==15) ) {
                alt4=1;
            }
            switch (alt4) {
                case 1 :
                    // InternalFsml.g:216:4: otherlv_1= '/' ( (lv_action_2_0= RULE_ID ) )
                    {
                    otherlv_1=(Token)match(input,15,FOLLOW_5); 

                    				newLeafNode(otherlv_1, grammarAccess.getFSMTransitionAccess().getSolidusKeyword_1_0());
                    			
                    // InternalFsml.g:220:4: ( (lv_action_2_0= RULE_ID ) )
                    // InternalFsml.g:221:5: (lv_action_2_0= RULE_ID )
                    {
                    // InternalFsml.g:221:5: (lv_action_2_0= RULE_ID )
                    // InternalFsml.g:222:6: lv_action_2_0= RULE_ID
                    {
                    lv_action_2_0=(Token)match(input,RULE_ID,FOLLOW_9); 

                    						newLeafNode(lv_action_2_0, grammarAccess.getFSMTransitionAccess().getActionIDTerminalRuleCall_1_1_0());
                    					

                    						if (current==null) {
                    							current = createModelElement(grammarAccess.getFSMTransitionRule());
                    						}
                    						setWithLastConsumed(
                    							current,
                    							"action",
                    							lv_action_2_0,
                    							"org.eclipse.xtext.common.Terminals.ID");
                    					

                    }


                    }


                    }
                    break;

            }

            // InternalFsml.g:239:3: (otherlv_3= '->' ( (otherlv_4= RULE_ID ) ) )?
            int alt5=2;
            int LA5_0 = input.LA(1);

            if ( (LA5_0==16) ) {
                alt5=1;
            }
            switch (alt5) {
                case 1 :
                    // InternalFsml.g:240:4: otherlv_3= '->' ( (otherlv_4= RULE_ID ) )
                    {
                    otherlv_3=(Token)match(input,16,FOLLOW_5); 

                    				newLeafNode(otherlv_3, grammarAccess.getFSMTransitionAccess().getHyphenMinusGreaterThanSignKeyword_2_0());
                    			
                    // InternalFsml.g:244:4: ( (otherlv_4= RULE_ID ) )
                    // InternalFsml.g:245:5: (otherlv_4= RULE_ID )
                    {
                    // InternalFsml.g:245:5: (otherlv_4= RULE_ID )
                    // InternalFsml.g:246:6: otherlv_4= RULE_ID
                    {

                    						if (current==null) {
                    							current = createModelElement(grammarAccess.getFSMTransitionRule());
                    						}
                    					
                    otherlv_4=(Token)match(input,RULE_ID,FOLLOW_10); 

                    						newLeafNode(otherlv_4, grammarAccess.getFSMTransitionAccess().getTargetFSMStateCrossReference_2_1_0());
                    					

                    }


                    }


                    }
                    break;

            }

            otherlv_5=(Token)match(input,17,FOLLOW_2); 

            			newLeafNode(otherlv_5, grammarAccess.getFSMTransitionAccess().getSemicolonKeyword_3());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleFSMTransition"

    // Delegated rules


 

    public static final BitSet FOLLOW_1 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_2 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_3 = new BitSet(new long[]{0x0000000000001802L});
    public static final BitSet FOLLOW_4 = new BitSet(new long[]{0x0000000000001000L});
    public static final BitSet FOLLOW_5 = new BitSet(new long[]{0x0000000000000010L});
    public static final BitSet FOLLOW_6 = new BitSet(new long[]{0x0000000000002000L});
    public static final BitSet FOLLOW_7 = new BitSet(new long[]{0x0000000000004010L});
    public static final BitSet FOLLOW_8 = new BitSet(new long[]{0x0000000000038000L});
    public static final BitSet FOLLOW_9 = new BitSet(new long[]{0x0000000000030000L});
    public static final BitSet FOLLOW_10 = new BitSet(new long[]{0x0000000000020000L});

}