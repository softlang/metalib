<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:6139291b-5401-465d-ba30-ab70bd7eeb5c(fsml.intentions)">
  <persistence version="9" />
  <languages>
    <use id="d7a92d38-f7db-40d0-8431-763b0c3c9f20" name="jetbrains.mps.lang.intentions" version="0" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="go7p" ref="r:b814c010-3eeb-4171-b50a-982b2ce1cddf(fsml.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1215693861676" name="jetbrains.mps.baseLanguage.structure.BaseAssignmentExpression" flags="nn" index="d038R">
        <child id="1068498886297" name="rValue" index="37vLTx" />
        <child id="1068498886295" name="lValue" index="37vLTJ" />
      </concept>
      <concept id="4836112446988635817" name="jetbrains.mps.baseLanguage.structure.UndefinedType" flags="in" index="2jxLKc" />
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1145552977093" name="jetbrains.mps.baseLanguage.structure.GenericNewExpression" flags="nn" index="2ShNRf">
        <child id="1145553007750" name="creator" index="2ShVmc" />
      </concept>
      <concept id="1137021947720" name="jetbrains.mps.baseLanguage.structure.ConceptFunction" flags="in" index="2VMwT0">
        <child id="1137022507850" name="body" index="2VODD2" />
      </concept>
      <concept id="1070475926800" name="jetbrains.mps.baseLanguage.structure.StringLiteral" flags="nn" index="Xl_RD">
        <property id="1070475926801" name="value" index="Xl_RC" />
      </concept>
      <concept id="1070534058343" name="jetbrains.mps.baseLanguage.structure.NullLiteral" flags="nn" index="10Nm6u" />
      <concept id="1068498886296" name="jetbrains.mps.baseLanguage.structure.VariableReference" flags="nn" index="37vLTw">
        <reference id="1068581517664" name="variableDeclaration" index="3cqZAo" />
      </concept>
      <concept id="1068498886294" name="jetbrains.mps.baseLanguage.structure.AssignmentExpression" flags="nn" index="37vLTI" />
      <concept id="4972933694980447171" name="jetbrains.mps.baseLanguage.structure.BaseVariableDeclaration" flags="ng" index="19Szcq">
        <child id="5680397130376446158" name="type" index="1tU5fm" />
      </concept>
      <concept id="1068580123155" name="jetbrains.mps.baseLanguage.structure.ExpressionStatement" flags="nn" index="3clFbF">
        <child id="1068580123156" name="expression" index="3clFbG" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
    </language>
    <language id="fd392034-7849-419d-9071-12563d152375" name="jetbrains.mps.baseLanguage.closures">
      <concept id="1199569711397" name="jetbrains.mps.baseLanguage.closures.structure.ClosureLiteral" flags="nn" index="1bVj0M">
        <child id="1199569906740" name="parameter" index="1bW2Oz" />
        <child id="1199569916463" name="body" index="1bW5cS" />
      </concept>
    </language>
    <language id="d7a92d38-f7db-40d0-8431-763b0c3c9f20" name="jetbrains.mps.lang.intentions">
      <concept id="1192794744107" name="jetbrains.mps.lang.intentions.structure.IntentionDeclaration" flags="ig" index="2S6QgY" />
      <concept id="1192794782375" name="jetbrains.mps.lang.intentions.structure.DescriptionBlock" flags="in" index="2S6ZIM" />
      <concept id="1192795911897" name="jetbrains.mps.lang.intentions.structure.ExecuteBlock" flags="in" index="2Sbjvc" />
      <concept id="1192796902958" name="jetbrains.mps.lang.intentions.structure.ConceptFunctionParameter_node" flags="nn" index="2Sf5sV" />
      <concept id="2522969319638091381" name="jetbrains.mps.lang.intentions.structure.BaseIntentionDeclaration" flags="ig" index="2ZfUlf">
        <reference id="2522969319638198290" name="forConcept" index="2ZfgGC" />
        <child id="2522969319638198291" name="executeFunction" index="2ZfgGD" />
        <child id="2522969319638093993" name="descriptionFunction" index="2ZfVej" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1177026924588" name="jetbrains.mps.lang.smodel.structure.RefConcept_Reference" flags="nn" index="chp4Y">
        <reference id="1177026940964" name="conceptDeclaration" index="cht4Q" />
      </concept>
      <concept id="1138411891628" name="jetbrains.mps.lang.smodel.structure.SNodeOperation" flags="nn" index="eCIE_">
        <child id="1144104376918" name="parameter" index="1xVPHs" />
      </concept>
      <concept id="1171407110247" name="jetbrains.mps.lang.smodel.structure.Node_GetAncestorOperation" flags="nn" index="2Xjw5R" />
      <concept id="1172008320231" name="jetbrains.mps.lang.smodel.structure.Node_IsNotNullOperation" flags="nn" index="3x8VRR" />
      <concept id="1144101972840" name="jetbrains.mps.lang.smodel.structure.OperationParm_Concept" flags="ng" index="1xMEDy">
        <child id="1207343664468" name="conceptArgument" index="ri$Ld" />
      </concept>
      <concept id="1180636770613" name="jetbrains.mps.lang.smodel.structure.SNodeCreator" flags="nn" index="3zrR0B">
        <child id="1180636770616" name="createdType" index="3zrR0E" />
      </concept>
      <concept id="1138055754698" name="jetbrains.mps.lang.smodel.structure.SNodeType" flags="in" index="3Tqbb2">
        <reference id="1138405853777" name="concept" index="ehGHo" />
      </concept>
      <concept id="1138056143562" name="jetbrains.mps.lang.smodel.structure.SLinkAccess" flags="nn" index="3TrEf2">
        <reference id="1138056516764" name="link" index="3Tt5mk" />
      </concept>
      <concept id="1138056282393" name="jetbrains.mps.lang.smodel.structure.SLinkListAccess" flags="nn" index="3Tsc0h">
        <reference id="1138056546658" name="link" index="3TtcxE" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ng" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="83888646-71ce-4f1c-9c53-c54016f6ad4f" name="jetbrains.mps.baseLanguage.collections">
      <concept id="1204796164442" name="jetbrains.mps.baseLanguage.collections.structure.InternalSequenceOperation" flags="nn" index="23sCx2">
        <child id="1204796294226" name="closure" index="23t8la" />
      </concept>
      <concept id="1204980550705" name="jetbrains.mps.baseLanguage.collections.structure.VisitAllOperation" flags="nn" index="2es0OD" />
      <concept id="1203518072036" name="jetbrains.mps.baseLanguage.collections.structure.SmartClosureParameterDeclaration" flags="ig" index="Rh6nW" />
      <concept id="1202120902084" name="jetbrains.mps.baseLanguage.collections.structure.WhereOperation" flags="nn" index="3zZkjj" />
    </language>
  </registry>
  <node concept="2S6QgY" id="3V9BInOy7tk">
    <property role="TrG5h" value="Make_Initial" />
    <ref role="2ZfgGC" to="go7p:3V9BInOkYn2" resolve="State" />
    <node concept="2S6ZIM" id="3V9BInOy7tl" role="2ZfVej">
      <node concept="3clFbS" id="3V9BInOy7tm" role="2VODD2">
        <node concept="3clFbF" id="3V9BInOy82T" role="3cqZAp">
          <node concept="Xl_RD" id="3V9BInOy82S" role="3clFbG">
            <property role="Xl_RC" value="Make State Initial" />
          </node>
        </node>
      </node>
    </node>
    <node concept="2Sbjvc" id="3V9BInOy7tn" role="2ZfgGD">
      <node concept="3clFbS" id="3V9BInOy7to" role="2VODD2">
        <node concept="3clFbF" id="33QxA9O$ddZ" role="3cqZAp">
          <node concept="2OqwBi" id="33QxA9O$ew1" role="3clFbG">
            <node concept="2OqwBi" id="33QxA9O$Ipd" role="2Oq$k0">
              <node concept="2OqwBi" id="33QxA9O$d_G" role="2Oq$k0">
                <node concept="2OqwBi" id="33QxA9O$dfO" role="2Oq$k0">
                  <node concept="2Sf5sV" id="33QxA9O$ddY" role="2Oq$k0" />
                  <node concept="2Xjw5R" id="33QxA9O$dqT" role="2OqNvi">
                    <node concept="1xMEDy" id="33QxA9O$dqV" role="1xVPHs">
                      <node concept="chp4Y" id="3V9BInOyaqN" role="ri$Ld">
                        <ref role="cht4Q" to="go7p:6JT1n72QSlZ" resolve="Fsm" />
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="3Tsc0h" id="3V9BInOyaDF" role="2OqNvi">
                  <ref role="3TtcxE" to="go7p:3V9BInOl6xO" />
                </node>
              </node>
              <node concept="3zZkjj" id="33QxA9O$Lox" role="2OqNvi">
                <node concept="1bVj0M" id="33QxA9O$Loz" role="23t8la">
                  <node concept="3clFbS" id="33QxA9O$Lo$" role="1bW5cS">
                    <node concept="3clFbF" id="33QxA9O$LtW" role="3cqZAp">
                      <node concept="2OqwBi" id="33QxA9O$Mix" role="3clFbG">
                        <node concept="2OqwBi" id="33QxA9O$Lzy" role="2Oq$k0">
                          <node concept="37vLTw" id="33QxA9O$LtV" role="2Oq$k0">
                            <ref role="3cqZAo" node="33QxA9O$Lo_" resolve="it" />
                          </node>
                          <node concept="3TrEf2" id="3V9BInOyaS1" role="2OqNvi">
                            <ref role="3Tt5mk" to="go7p:3V9BInOl6y0" />
                          </node>
                        </node>
                        <node concept="3x8VRR" id="33QxA9O$MCG" role="2OqNvi" />
                      </node>
                    </node>
                  </node>
                  <node concept="Rh6nW" id="33QxA9O$Lo_" role="1bW2Oz">
                    <property role="TrG5h" value="it" />
                    <node concept="2jxLKc" id="33QxA9O$LoA" role="1tU5fm" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="2es0OD" id="33QxA9O$g09" role="2OqNvi">
              <node concept="1bVj0M" id="33QxA9O$g0b" role="23t8la">
                <node concept="3clFbS" id="33QxA9O$g0c" role="1bW5cS">
                  <node concept="3clFbF" id="33QxA9O$g2Y" role="3cqZAp">
                    <node concept="37vLTI" id="33QxA9O$gV_" role="3clFbG">
                      <node concept="10Nm6u" id="33QxA9O$gZ9" role="37vLTx" />
                      <node concept="2OqwBi" id="33QxA9O$g6g" role="37vLTJ">
                        <node concept="37vLTw" id="33QxA9O$g2X" role="2Oq$k0">
                          <ref role="3cqZAo" node="33QxA9O$g0d" resolve="it" />
                        </node>
                        <node concept="3TrEf2" id="3V9BInOyb8n" role="2OqNvi">
                          <ref role="3Tt5mk" to="go7p:3V9BInOl6y0" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="Rh6nW" id="33QxA9O$g0d" role="1bW2Oz">
                  <property role="TrG5h" value="it" />
                  <node concept="2jxLKc" id="33QxA9O$g0e" role="1tU5fm" />
                </node>
              </node>
            </node>
          </node>
        </node>
        <node concept="3clFbF" id="33QxA9O$Hom" role="3cqZAp">
          <node concept="37vLTI" id="33QxA9O$MUk" role="3clFbG">
            <node concept="2ShNRf" id="33QxA9O$MW9" role="37vLTx">
              <node concept="3zrR0B" id="33QxA9O$MW7" role="2ShVmc">
                <node concept="3Tqbb2" id="33QxA9O$MW8" role="3zrR0E">
                  <ref role="ehGHo" to="go7p:3V9BInOl6eg" resolve="Initial" />
                </node>
              </node>
            </node>
            <node concept="2OqwBi" id="33QxA9O$HrT" role="37vLTJ">
              <node concept="2Sf5sV" id="33QxA9O$Hok" role="2Oq$k0" />
              <node concept="3TrEf2" id="3V9BInOybm5" role="2OqNvi">
                <ref role="3Tt5mk" to="go7p:3V9BInOl6y0" />
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
</model>

