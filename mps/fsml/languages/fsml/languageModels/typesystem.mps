<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:ad6fef75-83a6-4dc3-b0fa-1a4cf65e8eba(fsml.typesystem)">
  <persistence version="9" />
  <languages>
    <use id="7a5dda62-9140-4668-ab76-d5ed1746f2b2" name="jetbrains.mps.lang.typesystem" version="0" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="4dy3" ref="r:d52f619a-92bb-4609-884f-25be2b756cb6(fsml.runtime)" />
    <import index="hjq9" ref="r:58959aaf-bfb9-4a71-b862-816460a5ed9b(fsml.behavior)" implicit="true" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
    <import index="go7p" ref="r:b814c010-3eeb-4171-b50a-982b2ce1cddf(fsml.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="4836112446988635817" name="jetbrains.mps.baseLanguage.structure.UndefinedType" flags="in" index="2jxLKc" />
      <concept id="1154032098014" name="jetbrains.mps.baseLanguage.structure.AbstractLoopStatement" flags="nn" index="2LF5Ji">
        <child id="1154032183016" name="body" index="2LFqv$" />
      </concept>
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1070475926800" name="jetbrains.mps.baseLanguage.structure.StringLiteral" flags="nn" index="Xl_RD">
        <property id="1070475926801" name="value" index="Xl_RC" />
      </concept>
      <concept id="1068431474542" name="jetbrains.mps.baseLanguage.structure.VariableDeclaration" flags="ng" index="33uBYm">
        <child id="1068431790190" name="initializer" index="33vP2m" />
      </concept>
      <concept id="1068498886296" name="jetbrains.mps.baseLanguage.structure.VariableReference" flags="nn" index="37vLTw">
        <reference id="1068581517664" name="variableDeclaration" index="3cqZAo" />
      </concept>
      <concept id="4972933694980447171" name="jetbrains.mps.baseLanguage.structure.BaseVariableDeclaration" flags="ng" index="19Szcq">
        <child id="5680397130376446158" name="type" index="1tU5fm" />
      </concept>
      <concept id="1068580123152" name="jetbrains.mps.baseLanguage.structure.EqualsExpression" flags="nn" index="3clFbC" />
      <concept id="1068580123155" name="jetbrains.mps.baseLanguage.structure.ExpressionStatement" flags="nn" index="3clFbF">
        <child id="1068580123156" name="expression" index="3clFbG" />
      </concept>
      <concept id="1068580123159" name="jetbrains.mps.baseLanguage.structure.IfStatement" flags="nn" index="3clFbJ">
        <child id="1068580123160" name="condition" index="3clFbw" />
        <child id="1068580123161" name="ifTrue" index="3clFbx" />
        <child id="1206060520071" name="elsifClauses" index="3eNLev" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1068580320020" name="jetbrains.mps.baseLanguage.structure.IntegerConstant" flags="nn" index="3cmrfG">
        <property id="1068580320021" name="value" index="3cmrfH" />
      </concept>
      <concept id="1068581242875" name="jetbrains.mps.baseLanguage.structure.PlusExpression" flags="nn" index="3cpWs3" />
      <concept id="1068581242864" name="jetbrains.mps.baseLanguage.structure.LocalVariableDeclarationStatement" flags="nn" index="3cpWs8">
        <child id="1068581242865" name="localVariableDeclaration" index="3cpWs9" />
      </concept>
      <concept id="1068581242863" name="jetbrains.mps.baseLanguage.structure.LocalVariableDeclaration" flags="nr" index="3cpWsn" />
      <concept id="1206060495898" name="jetbrains.mps.baseLanguage.structure.ElsifClause" flags="ng" index="3eNFk2">
        <child id="1206060619838" name="condition" index="3eO9$A" />
        <child id="1206060644605" name="statementList" index="3eOfB_" />
      </concept>
      <concept id="1081506762703" name="jetbrains.mps.baseLanguage.structure.GreaterThanExpression" flags="nn" index="3eOSWO" />
      <concept id="1081506773034" name="jetbrains.mps.baseLanguage.structure.LessThanExpression" flags="nn" index="3eOVzh" />
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ng" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
      </concept>
      <concept id="1107535904670" name="jetbrains.mps.baseLanguage.structure.ClassifierType" flags="in" index="3uibUv">
        <reference id="1107535924139" name="classifier" index="3uigEE" />
      </concept>
      <concept id="1081773326031" name="jetbrains.mps.baseLanguage.structure.BinaryOperation" flags="nn" index="3uHJSO">
        <child id="1081773367579" name="rightExpression" index="3uHU7w" />
        <child id="1081773367580" name="leftExpression" index="3uHU7B" />
      </concept>
      <concept id="1073239437375" name="jetbrains.mps.baseLanguage.structure.NotEqualsExpression" flags="nn" index="3y3z36" />
      <concept id="1080120340718" name="jetbrains.mps.baseLanguage.structure.AndExpression" flags="nn" index="1Wc70l" />
    </language>
    <language id="fd392034-7849-419d-9071-12563d152375" name="jetbrains.mps.baseLanguage.closures">
      <concept id="1199569711397" name="jetbrains.mps.baseLanguage.closures.structure.ClosureLiteral" flags="nn" index="1bVj0M">
        <child id="1199569906740" name="parameter" index="1bW2Oz" />
        <child id="1199569916463" name="body" index="1bW5cS" />
      </concept>
    </language>
    <language id="3a13115c-633c-4c5c-bbcc-75c4219e9555" name="jetbrains.mps.lang.quotation">
      <concept id="1196350785113" name="jetbrains.mps.lang.quotation.structure.Quotation" flags="nn" index="2c44tf">
        <child id="1196350785114" name="quotedNode" index="2c44tc" />
      </concept>
    </language>
    <language id="7a5dda62-9140-4668-ab76-d5ed1746f2b2" name="jetbrains.mps.lang.typesystem">
      <concept id="1207055528241" name="jetbrains.mps.lang.typesystem.structure.WarningStatement" flags="nn" index="a7r0C">
        <child id="1207055552304" name="warningText" index="a7wSD" />
      </concept>
      <concept id="1185788614172" name="jetbrains.mps.lang.typesystem.structure.NormalTypeClause" flags="ng" index="mw_s8">
        <child id="1185788644032" name="normalType" index="mwGJk" />
      </concept>
      <concept id="1175517767210" name="jetbrains.mps.lang.typesystem.structure.ReportErrorStatement" flags="nn" index="2MkqsV">
        <child id="1175517851849" name="errorString" index="2MkJ7o" />
      </concept>
      <concept id="1227096774658" name="jetbrains.mps.lang.typesystem.structure.MessageStatement" flags="ng" index="2OEH$v">
        <child id="1227096802790" name="nodeToReport" index="2OEOjV" />
      </concept>
      <concept id="1195213580585" name="jetbrains.mps.lang.typesystem.structure.AbstractCheckingRule" flags="ig" index="18hYwZ">
        <child id="1195213635060" name="body" index="18ibNy" />
      </concept>
      <concept id="1195214364922" name="jetbrains.mps.lang.typesystem.structure.NonTypesystemRule" flags="ig" index="18kY7G" />
      <concept id="1174642788531" name="jetbrains.mps.lang.typesystem.structure.ConceptReference" flags="ig" index="1YaCAy">
        <reference id="1174642800329" name="concept" index="1YaFvo" />
      </concept>
      <concept id="1174643105530" name="jetbrains.mps.lang.typesystem.structure.InferenceRule" flags="ig" index="1YbPZF" />
      <concept id="1174648085619" name="jetbrains.mps.lang.typesystem.structure.AbstractRule" flags="ng" index="1YuPPy">
        <child id="1174648101952" name="applicableNode" index="1YuTPh" />
      </concept>
      <concept id="1174650418652" name="jetbrains.mps.lang.typesystem.structure.ApplicableNodeReference" flags="nn" index="1YBJjd">
        <reference id="1174650432090" name="applicableNode" index="1YBMHb" />
      </concept>
      <concept id="1174657487114" name="jetbrains.mps.lang.typesystem.structure.TypeOfExpression" flags="nn" index="1Z2H0r">
        <child id="1174657509053" name="term" index="1Z2MuG" />
      </concept>
      <concept id="1174658326157" name="jetbrains.mps.lang.typesystem.structure.CreateEquationStatement" flags="nn" index="1Z5TYs" />
      <concept id="1174660718586" name="jetbrains.mps.lang.typesystem.structure.AbstractEquationStatement" flags="nn" index="1Zf1VF">
        <child id="1174660783413" name="leftExpression" index="1ZfhK$" />
        <child id="1174660783414" name="rightExpression" index="1ZfhKB" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1177026924588" name="jetbrains.mps.lang.smodel.structure.RefConcept_Reference" flags="nn" index="chp4Y">
        <reference id="1177026940964" name="conceptDeclaration" index="cht4Q" />
      </concept>
      <concept id="1138411891628" name="jetbrains.mps.lang.smodel.structure.SNodeOperation" flags="nn" index="eCIE_">
        <child id="1144104376918" name="parameter" index="1xVPHs" />
      </concept>
      <concept id="1179409122411" name="jetbrains.mps.lang.smodel.structure.Node_ConceptMethodCall" flags="nn" index="2qgKlT" />
      <concept id="1171305280644" name="jetbrains.mps.lang.smodel.structure.Node_GetDescendantsOperation" flags="nn" index="2Rf3mk" />
      <concept id="1171407110247" name="jetbrains.mps.lang.smodel.structure.Node_GetAncestorOperation" flags="nn" index="2Xjw5R" />
      <concept id="1144101972840" name="jetbrains.mps.lang.smodel.structure.OperationParm_Concept" flags="ng" index="1xMEDy">
        <child id="1207343664468" name="conceptArgument" index="ri$Ld" />
      </concept>
      <concept id="1138055754698" name="jetbrains.mps.lang.smodel.structure.SNodeType" flags="in" index="3Tqbb2">
        <reference id="1138405853777" name="concept" index="ehGHo" />
      </concept>
      <concept id="1138056022639" name="jetbrains.mps.lang.smodel.structure.SPropertyAccess" flags="nn" index="3TrcHB">
        <reference id="1138056395725" name="property" index="3TsBF5" />
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
      <concept id="540871147943773365" name="jetbrains.mps.baseLanguage.collections.structure.SingleArgumentSequenceOperation" flags="nn" index="25WWJ4">
        <child id="540871147943773366" name="argument" index="25WWJ7" />
      </concept>
      <concept id="1204980550705" name="jetbrains.mps.baseLanguage.collections.structure.VisitAllOperation" flags="nn" index="2es0OD" />
      <concept id="1151689724996" name="jetbrains.mps.baseLanguage.collections.structure.SequenceType" flags="in" index="A3Dl8">
        <child id="1151689745422" name="elementType" index="A3Ik2" />
      </concept>
      <concept id="1153943597977" name="jetbrains.mps.baseLanguage.collections.structure.ForEachStatement" flags="nn" index="2Gpval">
        <child id="1153944400369" name="variable" index="2Gsz3X" />
        <child id="1153944424730" name="inputSequence" index="2GsD0m" />
      </concept>
      <concept id="1153944193378" name="jetbrains.mps.baseLanguage.collections.structure.ForEachVariable" flags="nr" index="2GrKxI" />
      <concept id="1153944233411" name="jetbrains.mps.baseLanguage.collections.structure.ForEachVariableReference" flags="nn" index="2GrUjf">
        <reference id="1153944258490" name="variable" index="2Gs0qQ" />
      </concept>
      <concept id="1203518072036" name="jetbrains.mps.baseLanguage.collections.structure.SmartClosureParameterDeclaration" flags="ig" index="Rh6nW" />
      <concept id="1171391069720" name="jetbrains.mps.baseLanguage.collections.structure.GetIndexOfOperation" flags="nn" index="2WmjW8" />
      <concept id="1162935959151" name="jetbrains.mps.baseLanguage.collections.structure.GetSizeOperation" flags="nn" index="34oBXx" />
      <concept id="1202128969694" name="jetbrains.mps.baseLanguage.collections.structure.SelectOperation" flags="nn" index="3$u5V9" />
    </language>
  </registry>
  <node concept="18kY7G" id="3V9BInOoRk$">
    <property role="TrG5h" value="check_Fsm" />
    <node concept="3clFbS" id="3V9BInOoRk_" role="18ibNy">
      <node concept="3clFbF" id="lDEcpPMl4f" role="3cqZAp">
        <node concept="2OqwBi" id="lDEcpPMlSK" role="3clFbG">
          <node concept="2OqwBi" id="lDEcpPMl5Z" role="2Oq$k0">
            <node concept="1YBJjd" id="3V9BInOoRvT" role="2Oq$k0">
              <ref role="1YBMHb" node="3V9BInOoRkB" resolve="fsm" />
            </node>
            <node concept="2qgKlT" id="3V9BInOoSux" role="2OqNvi">
              <ref role="37wK5l" to="hjq9:lDEcpPHU09" resolve="getUnreachableStates" />
            </node>
          </node>
          <node concept="2es0OD" id="lDEcpPMpFv" role="2OqNvi">
            <node concept="1bVj0M" id="lDEcpPMpFx" role="23t8la">
              <node concept="3clFbS" id="lDEcpPMpFy" role="1bW5cS">
                <node concept="a7r0C" id="lDEcpPI$_k" role="3cqZAp">
                  <node concept="3cpWs3" id="lDEcpPI$OV" role="a7wSD">
                    <node concept="Xl_RD" id="lDEcpPI$AB" role="3uHU7B">
                      <property role="Xl_RC" value="unreachable state " />
                    </node>
                    <node concept="2OqwBi" id="lDEcpPI$ZG" role="3uHU7w">
                      <node concept="37vLTw" id="lDEcpPMwDp" role="2Oq$k0">
                        <ref role="3cqZAo" node="lDEcpPMpFz" resolve="it" />
                      </node>
                      <node concept="3TrcHB" id="3V9BInOoVhk" role="2OqNvi">
                        <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                      </node>
                    </node>
                  </node>
                  <node concept="37vLTw" id="lDEcpPNyhg" role="2OEOjV">
                    <ref role="3cqZAo" node="lDEcpPMpFz" resolve="it" />
                  </node>
                </node>
              </node>
              <node concept="Rh6nW" id="lDEcpPMpFz" role="1bW2Oz">
                <property role="TrG5h" value="it" />
                <node concept="2jxLKc" id="lDEcpPMpF$" role="1tU5fm" />
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="3V9BInOoRkB" role="1YuTPh">
      <property role="TrG5h" value="fsm" />
      <ref role="1YaFvo" to="go7p:6JT1n72QSlZ" resolve="Fsm" />
    </node>
  </node>
  <node concept="18kY7G" id="3V9BInOppYC">
    <property role="TrG5h" value="check_Input" />
    <node concept="3clFbS" id="3V9BInOppYD" role="18ibNy">
      <node concept="3cpWs8" id="58KA5ZsMDiF" role="3cqZAp">
        <node concept="3cpWsn" id="58KA5ZsMDiI" role="3cpWs9">
          <property role="TrG5h" value="state" />
          <node concept="3Tqbb2" id="58KA5ZsMDiD" role="1tU5fm">
            <ref role="ehGHo" to="go7p:3V9BInOkYn2" resolve="State" />
          </node>
          <node concept="2OqwBi" id="58KA5ZsMDqx" role="33vP2m">
            <node concept="1YBJjd" id="58KA5ZsMDoJ" role="2Oq$k0">
              <ref role="1YBMHb" node="3V9BInOppYF" resolve="input" />
            </node>
            <node concept="2Xjw5R" id="58KA5ZsMDKL" role="2OqNvi">
              <node concept="1xMEDy" id="58KA5ZsMDKN" role="1xVPHs">
                <node concept="chp4Y" id="58KA5ZsMDL8" role="ri$Ld">
                  <ref role="cht4Q" to="go7p:3V9BInOkYn2" resolve="State" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="3cpWs8" id="58KA5ZsMwGx" role="3cqZAp">
        <node concept="3cpWsn" id="58KA5ZsMwG$" role="3cpWs9">
          <property role="TrG5h" value="inputs" />
          <node concept="A3Dl8" id="58KA5ZsMwGu" role="1tU5fm">
            <node concept="3Tqbb2" id="58KA5ZsMwGT" role="A3Ik2">
              <ref role="ehGHo" to="go7p:3V9BInOl6dn" resolve="Input" />
            </node>
          </node>
          <node concept="2OqwBi" id="58KA5ZsMx52" role="33vP2m">
            <node concept="2Rf3mk" id="58KA5ZsMxnU" role="2OqNvi">
              <node concept="1xMEDy" id="58KA5ZsMxnW" role="1xVPHs">
                <node concept="chp4Y" id="58KA5ZsMxoK" role="ri$Ld">
                  <ref role="cht4Q" to="go7p:3V9BInOl6dn" resolve="Input" />
                </node>
              </node>
            </node>
            <node concept="37vLTw" id="58KA5ZsMDYL" role="2Oq$k0">
              <ref role="3cqZAo" node="58KA5ZsMDiI" resolve="state" />
            </node>
          </node>
        </node>
      </node>
      <node concept="3clFbF" id="58KA5ZsMxwG" role="3cqZAp">
        <node concept="2OqwBi" id="58KA5ZsMyn_" role="3clFbG">
          <node concept="37vLTw" id="58KA5ZsMy8l" role="2Oq$k0">
            <ref role="3cqZAo" node="58KA5ZsMwG$" resolve="inputs" />
          </node>
          <node concept="2es0OD" id="58KA5ZsMyXi" role="2OqNvi">
            <node concept="1bVj0M" id="58KA5ZsMyXk" role="23t8la">
              <node concept="3clFbS" id="58KA5ZsMyXl" role="1bW5cS">
                <node concept="3clFbJ" id="58KA5ZsMzD5" role="3cqZAp">
                  <node concept="3clFbS" id="58KA5ZsMzD7" role="3clFbx">
                    <node concept="2MkqsV" id="58KA5ZsMCJc" role="3cqZAp">
                      <node concept="1YBJjd" id="58KA5ZsMCNY" role="2OEOjV">
                        <ref role="1YBMHb" node="3V9BInOppYF" resolve="input" />
                      </node>
                      <node concept="3cpWs3" id="58KA5ZsMJZ9" role="2MkJ7o">
                        <node concept="2OqwBi" id="58KA5ZsMKfW" role="3uHU7w">
                          <node concept="37vLTw" id="58KA5ZsMK7p" role="2Oq$k0">
                            <ref role="3cqZAo" node="58KA5ZsMDiI" resolve="state" />
                          </node>
                          <node concept="3TrcHB" id="58KA5ZsMKC5" role="2OqNvi">
                            <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                          </node>
                        </node>
                        <node concept="3cpWs3" id="58KA5ZsMIxz" role="3uHU7B">
                          <node concept="3cpWs3" id="58KA5ZsMHyT" role="3uHU7B">
                            <node concept="Xl_RD" id="58KA5ZsMGOm" role="3uHU7B">
                              <property role="Xl_RC" value="input " />
                            </node>
                            <node concept="2OqwBi" id="58KA5ZsMHKd" role="3uHU7w">
                              <node concept="1YBJjd" id="58KA5ZsMHC2" role="2Oq$k0">
                                <ref role="1YBMHb" node="3V9BInOppYF" resolve="input" />
                              </node>
                              <node concept="3TrcHB" id="58KA5ZsMI5U" role="2OqNvi">
                                <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                              </node>
                            </node>
                          </node>
                          <node concept="Xl_RD" id="58KA5ZsMIDB" role="3uHU7w">
                            <property role="Xl_RC" value=" already defined in state " />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="1Wc70l" id="58KA5ZsM_2L" role="3clFbw">
                    <node concept="3eOVzh" id="58KA5ZsNqEx" role="3uHU7w">
                      <node concept="2OqwBi" id="58KA5ZsM_lZ" role="3uHU7B">
                        <node concept="37vLTw" id="58KA5ZsM_70" role="2Oq$k0">
                          <ref role="3cqZAo" node="58KA5ZsMwG$" resolve="inputs" />
                        </node>
                        <node concept="2WmjW8" id="58KA5ZsM_Ym" role="2OqNvi">
                          <node concept="37vLTw" id="58KA5ZsMAY7" role="25WWJ7">
                            <ref role="3cqZAo" node="58KA5ZsMyXm" resolve="it" />
                          </node>
                        </node>
                      </node>
                      <node concept="2OqwBi" id="58KA5ZsMBXb" role="3uHU7w">
                        <node concept="37vLTw" id="58KA5ZsMBC1" role="2Oq$k0">
                          <ref role="3cqZAo" node="58KA5ZsMwG$" resolve="inputs" />
                        </node>
                        <node concept="2WmjW8" id="58KA5ZsMC_Z" role="2OqNvi">
                          <node concept="1YBJjd" id="58KA5ZsMCEA" role="25WWJ7">
                            <ref role="1YBMHb" node="3V9BInOppYF" resolve="input" />
                          </node>
                        </node>
                      </node>
                    </node>
                    <node concept="1Wc70l" id="58KA5ZsM$B3" role="3uHU7B">
                      <node concept="3y3z36" id="58KA5ZsM$J1" role="3uHU7B">
                        <node concept="1YBJjd" id="58KA5ZsM$LQ" role="3uHU7w">
                          <ref role="1YBMHb" node="3V9BInOppYF" resolve="input" />
                        </node>
                        <node concept="37vLTw" id="58KA5ZsM$EI" role="3uHU7B">
                          <ref role="3cqZAo" node="58KA5ZsMyXm" resolve="it" />
                        </node>
                      </node>
                      <node concept="3clFbC" id="58KA5ZsM$fc" role="3uHU7w">
                        <node concept="2OqwBi" id="58KA5ZsMzHq" role="3uHU7B">
                          <node concept="37vLTw" id="58KA5ZsMzEw" role="2Oq$k0">
                            <ref role="3cqZAo" node="58KA5ZsMyXm" resolve="it" />
                          </node>
                          <node concept="3TrcHB" id="58KA5ZsM$5u" role="2OqNvi">
                            <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                          </node>
                        </node>
                        <node concept="2OqwBi" id="58KA5ZsM$ne" role="3uHU7w">
                          <node concept="1YBJjd" id="58KA5ZsM$hM" role="2Oq$k0">
                            <ref role="1YBMHb" node="3V9BInOppYF" resolve="input" />
                          </node>
                          <node concept="3TrcHB" id="58KA5ZsM$xL" role="2OqNvi">
                            <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="Rh6nW" id="58KA5ZsMyXm" role="1bW2Oz">
                <property role="TrG5h" value="it" />
                <node concept="2jxLKc" id="58KA5ZsMyXn" role="1tU5fm" />
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="3V9BInOppYF" role="1YuTPh">
      <property role="TrG5h" value="input" />
      <ref role="1YaFvo" to="go7p:3V9BInOl6dn" resolve="Input" />
    </node>
  </node>
  <node concept="18kY7G" id="3V9BInOqoMC">
    <property role="TrG5h" value="check_State" />
    <node concept="3clFbS" id="3V9BInOqoMD" role="18ibNy">
      <node concept="3cpWs8" id="27zjBwZN5nl" role="3cqZAp">
        <node concept="3cpWsn" id="27zjBwZN5no" role="3cpWs9">
          <property role="TrG5h" value="fsm" />
          <node concept="3Tqbb2" id="27zjBwZN5nj" role="1tU5fm">
            <ref role="ehGHo" to="go7p:6JT1n72QSlZ" resolve="Fsm" />
          </node>
          <node concept="2OqwBi" id="27zjBwZN5AT" role="33vP2m">
            <node concept="1YBJjd" id="27zjBwZN5_7" role="2Oq$k0">
              <ref role="1YBMHb" node="3V9BInOqoMF" resolve="state" />
            </node>
            <node concept="2Xjw5R" id="27zjBwZN63E" role="2OqNvi">
              <node concept="1xMEDy" id="27zjBwZN63G" role="1xVPHs">
                <node concept="chp4Y" id="27zjBwZN649" role="ri$Ld">
                  <ref role="cht4Q" to="go7p:6JT1n72QSlZ" resolve="Fsm" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="3cpWs8" id="3rAnA9iLUCC" role="3cqZAp">
        <node concept="3cpWsn" id="3rAnA9iLUCF" role="3cpWs9">
          <property role="TrG5h" value="states" />
          <node concept="2OqwBi" id="3rAnA9iLLjM" role="33vP2m">
            <node concept="2Rf3mk" id="27zjBwZMQuZ" role="2OqNvi">
              <node concept="1xMEDy" id="27zjBwZMQv1" role="1xVPHs">
                <node concept="chp4Y" id="27zjBwZMQEO" role="ri$Ld">
                  <ref role="cht4Q" to="go7p:3V9BInOkYn2" resolve="State" />
                </node>
              </node>
            </node>
            <node concept="37vLTw" id="27zjBwZN6Bz" role="2Oq$k0">
              <ref role="3cqZAo" node="27zjBwZN5no" resolve="fsm" />
            </node>
          </node>
          <node concept="A3Dl8" id="27zjBwZNnHn" role="1tU5fm">
            <node concept="3Tqbb2" id="27zjBwZNogv" role="A3Ik2">
              <ref role="ehGHo" to="go7p:3V9BInOkYn2" resolve="State" />
            </node>
          </node>
        </node>
      </node>
      <node concept="3cpWs8" id="3rAnA9iLs80" role="3cqZAp">
        <node concept="3cpWsn" id="3rAnA9iLs83" role="3cpWs9">
          <property role="TrG5h" value="initials" />
          <node concept="2OqwBi" id="3rAnA9iLsIA" role="33vP2m">
            <node concept="37vLTw" id="5JglOZTbETC" role="2Oq$k0">
              <ref role="3cqZAo" node="27zjBwZN5no" resolve="fsm" />
            </node>
            <node concept="2Rf3mk" id="5JglOZTbFyG" role="2OqNvi">
              <node concept="1xMEDy" id="5JglOZTbFyI" role="1xVPHs">
                <node concept="chp4Y" id="13jvcrV5$0e" role="ri$Ld">
                  <ref role="cht4Q" to="go7p:3V9BInOl6eg" resolve="Initial" />
                </node>
              </node>
            </node>
          </node>
          <node concept="A3Dl8" id="27zjBwZNpAp" role="1tU5fm">
            <node concept="3Tqbb2" id="27zjBwZNpJ5" role="A3Ik2">
              <ref role="ehGHo" to="go7p:3V9BInOl6eg" resolve="Initial" />
            </node>
          </node>
        </node>
      </node>
      <node concept="3clFbJ" id="3rAnA9iM4Fv" role="3cqZAp">
        <node concept="3clFbS" id="3rAnA9iM4Fx" role="3clFbx">
          <node concept="2Gpval" id="3rAnA9iLunh" role="3cqZAp">
            <node concept="2GrKxI" id="3rAnA9iLuni" role="2Gsz3X">
              <property role="TrG5h" value="s" />
            </node>
            <node concept="3clFbS" id="3rAnA9iLunj" role="2LFqv$">
              <node concept="2MkqsV" id="3rAnA9iLuok" role="3cqZAp">
                <node concept="Xl_RD" id="3rAnA9iLuow" role="2MkJ7o">
                  <property role="Xl_RC" value="no initial state defined" />
                </node>
                <node concept="2GrUjf" id="3rAnA9iLLKV" role="2OEOjV">
                  <ref role="2Gs0qQ" node="3rAnA9iLuni" resolve="s" />
                </node>
              </node>
            </node>
            <node concept="37vLTw" id="3rAnA9iLUKZ" role="2GsD0m">
              <ref role="3cqZAo" node="3rAnA9iLUCF" resolve="states" />
            </node>
          </node>
        </node>
        <node concept="3clFbC" id="3rAnA9iM65J" role="3clFbw">
          <node concept="3cmrfG" id="3rAnA9iM696" role="3uHU7w">
            <property role="3cmrfH" value="0" />
          </node>
          <node concept="2OqwBi" id="3rAnA9iM4Tr" role="3uHU7B">
            <node concept="37vLTw" id="3rAnA9iM4Jc" role="2Oq$k0">
              <ref role="3cqZAo" node="3rAnA9iLs83" resolve="initials" />
            </node>
            <node concept="34oBXx" id="3rAnA9iM5uS" role="2OqNvi" />
          </node>
        </node>
        <node concept="3eNFk2" id="3rAnA9iM6dH" role="3eNLev">
          <node concept="3eOSWO" id="3rAnA9iM8bU" role="3eO9$A">
            <node concept="3cmrfG" id="3rAnA9iM8c$" role="3uHU7w">
              <property role="3cmrfH" value="1" />
            </node>
            <node concept="2OqwBi" id="3rAnA9iM6oE" role="3uHU7B">
              <node concept="37vLTw" id="3rAnA9iM6er" role="2Oq$k0">
                <ref role="3cqZAo" node="3rAnA9iLs83" resolve="initials" />
              </node>
              <node concept="34oBXx" id="3rAnA9iM73s" role="2OqNvi" />
            </node>
          </node>
          <node concept="3clFbS" id="3rAnA9iM6dJ" role="3eOfB_">
            <node concept="3cpWs8" id="27zjBwZM3LR" role="3cqZAp">
              <node concept="3cpWsn" id="27zjBwZM3LU" role="3cpWs9">
                <property role="TrG5h" value="initialStates" />
                <node concept="2OqwBi" id="27zjBwZMu$m" role="33vP2m">
                  <node concept="37vLTw" id="27zjBwZMqrS" role="2Oq$k0">
                    <ref role="3cqZAo" node="3rAnA9iLs83" resolve="initials" />
                  </node>
                  <node concept="3$u5V9" id="27zjBwZNqHA" role="2OqNvi">
                    <node concept="1bVj0M" id="27zjBwZNqHC" role="23t8la">
                      <node concept="3clFbS" id="27zjBwZNqHD" role="1bW5cS">
                        <node concept="3clFbF" id="27zjBwZNqJI" role="3cqZAp">
                          <node concept="2OqwBi" id="27zjBwZNqMY" role="3clFbG">
                            <node concept="37vLTw" id="27zjBwZNqJH" role="2Oq$k0">
                              <ref role="3cqZAo" node="27zjBwZNqHE" resolve="it" />
                            </node>
                            <node concept="2Xjw5R" id="27zjBwZNr6M" role="2OqNvi">
                              <node concept="1xMEDy" id="27zjBwZNr6O" role="1xVPHs">
                                <node concept="chp4Y" id="27zjBwZNr9e" role="ri$Ld">
                                  <ref role="cht4Q" to="go7p:3V9BInOkYn2" resolve="State" />
                                </node>
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                      <node concept="Rh6nW" id="27zjBwZNqHE" role="1bW2Oz">
                        <property role="TrG5h" value="it" />
                        <node concept="2jxLKc" id="27zjBwZNqHF" role="1tU5fm" />
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="A3Dl8" id="27zjBwZNq5z" role="1tU5fm">
                  <node concept="3Tqbb2" id="27zjBwZNq6b" role="A3Ik2">
                    <ref role="ehGHo" to="go7p:3V9BInOkYn2" resolve="State" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="2Gpval" id="3rAnA9iLUtS" role="3cqZAp">
              <node concept="2GrKxI" id="3rAnA9iLUtT" role="2Gsz3X">
                <property role="TrG5h" value="s" />
              </node>
              <node concept="3clFbS" id="3rAnA9iLUtU" role="2LFqv$">
                <node concept="2MkqsV" id="3rAnA9iLU$B" role="3cqZAp">
                  <node concept="2GrUjf" id="3rAnA9iLUZ0" role="2OEOjV">
                    <ref role="2Gs0qQ" node="3rAnA9iLUtT" resolve="s" />
                  </node>
                  <node concept="Xl_RD" id="3rAnA9iLU$N" role="2MkJ7o">
                    <property role="Xl_RC" value="multiple initial states defined" />
                  </node>
                </node>
              </node>
              <node concept="37vLTw" id="27zjBwZNreu" role="2GsD0m">
                <ref role="3cqZAo" node="27zjBwZM3LU" resolve="initialStates" />
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="3clFbF" id="3V9BInOrUeE" role="3cqZAp">
        <node concept="2OqwBi" id="3V9BInOrUnq" role="3clFbG">
          <node concept="37vLTw" id="3V9BInOrUfH" role="2Oq$k0">
            <ref role="3cqZAo" node="3rAnA9iLUCF" resolve="states" />
          </node>
          <node concept="2es0OD" id="3V9BInOrUY5" role="2OqNvi">
            <node concept="1bVj0M" id="3V9BInOrUY7" role="23t8la">
              <node concept="3clFbS" id="3V9BInOrUY8" role="1bW5cS">
                <node concept="3clFbJ" id="3V9BInOrUZs" role="3cqZAp">
                  <node concept="3clFbS" id="3V9BInOrUZt" role="3clFbx">
                    <node concept="2MkqsV" id="3V9BInOrXY8" role="3cqZAp">
                      <node concept="3cpWs3" id="58KA5ZsMu36" role="2MkJ7o">
                        <node concept="Xl_RD" id="58KA5ZsMugl" role="3uHU7w">
                          <property role="Xl_RC" value=" already defined" />
                        </node>
                        <node concept="3cpWs3" id="3V9BInOs0L_" role="3uHU7B">
                          <node concept="Xl_RD" id="3V9BInOrY5x" role="3uHU7B">
                            <property role="Xl_RC" value="state with ID " />
                          </node>
                          <node concept="2OqwBi" id="3V9BInOs1Bl" role="3uHU7w">
                            <node concept="37vLTw" id="3V9BInOs25l" role="2Oq$k0">
                              <ref role="3cqZAo" node="3V9BInOrUY9" resolve="it" />
                            </node>
                            <node concept="3TrcHB" id="3V9BInOs1SO" role="2OqNvi">
                              <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                            </node>
                          </node>
                        </node>
                      </node>
                      <node concept="37vLTw" id="3V9BInOs2fS" role="2OEOjV">
                        <ref role="3cqZAo" node="3V9BInOrUY9" resolve="it" />
                      </node>
                    </node>
                  </node>
                  <node concept="1Wc70l" id="58KA5ZsJoOP" role="3clFbw">
                    <node concept="3eOSWO" id="58KA5ZsMAko" role="3uHU7w">
                      <node concept="2OqwBi" id="58KA5ZsJpmS" role="3uHU7B">
                        <node concept="37vLTw" id="58KA5ZsJp29" role="2Oq$k0">
                          <ref role="3cqZAo" node="3rAnA9iLUCF" resolve="states" />
                        </node>
                        <node concept="2WmjW8" id="58KA5ZsJq7H" role="2OqNvi">
                          <node concept="37vLTw" id="58KA5ZsMA7S" role="25WWJ7">
                            <ref role="3cqZAo" node="3V9BInOrUY9" resolve="it" />
                          </node>
                        </node>
                      </node>
                      <node concept="2OqwBi" id="58KA5ZsJsdP" role="3uHU7w">
                        <node concept="37vLTw" id="58KA5ZsJrL6" role="2Oq$k0">
                          <ref role="3cqZAo" node="3rAnA9iLUCF" resolve="states" />
                        </node>
                        <node concept="2WmjW8" id="58KA5ZsJsZ7" role="2OqNvi">
                          <node concept="1YBJjd" id="58KA5ZsMAHT" role="25WWJ7">
                            <ref role="1YBMHb" node="3V9BInOqoMF" resolve="state" />
                          </node>
                        </node>
                      </node>
                    </node>
                    <node concept="1Wc70l" id="3V9BInOrWij" role="3uHU7B">
                      <node concept="3y3z36" id="3V9BInOrWdG" role="3uHU7B">
                        <node concept="37vLTw" id="3V9BInOrVrp" role="3uHU7B">
                          <ref role="3cqZAo" node="3V9BInOrUY9" resolve="it" />
                        </node>
                        <node concept="1YBJjd" id="3V9BInOrWfb" role="3uHU7w">
                          <ref role="1YBMHb" node="3V9BInOqoMF" resolve="state" />
                        </node>
                      </node>
                      <node concept="3clFbC" id="3V9BInOrXiT" role="3uHU7w">
                        <node concept="2OqwBi" id="3V9BInOrWxi" role="3uHU7B">
                          <node concept="37vLTw" id="3V9BInOrWp0" role="2Oq$k0">
                            <ref role="3cqZAo" node="3V9BInOrUY9" resolve="it" />
                          </node>
                          <node concept="3TrcHB" id="3V9BInOrWPk" role="2OqNvi">
                            <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                          </node>
                        </node>
                        <node concept="2OqwBi" id="3V9BInOrX_u" role="3uHU7w">
                          <node concept="1YBJjd" id="3V9BInOrXqJ" role="2Oq$k0">
                            <ref role="1YBMHb" node="3V9BInOqoMF" resolve="state" />
                          </node>
                          <node concept="3TrcHB" id="3V9BInOrXQG" role="2OqNvi">
                            <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="Rh6nW" id="3V9BInOrUY9" role="1bW2Oz">
                <property role="TrG5h" value="it" />
                <node concept="2jxLKc" id="3V9BInOrUYa" role="1tU5fm" />
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="3V9BInOqoMF" role="1YuTPh">
      <property role="TrG5h" value="state" />
      <ref role="1YaFvo" to="go7p:3V9BInOkYn2" resolve="State" />
    </node>
  </node>
  <node concept="1YbPZF" id="3V9BInOuJ3$">
    <property role="TrG5h" value="typeof_Fsm" />
    <node concept="3clFbS" id="3V9BInOuJ3_" role="18ibNy">
      <node concept="1Z5TYs" id="3V9BInOuJ6J" role="3cqZAp">
        <node concept="mw_s8" id="3V9BInOuJ6M" role="1ZfhK$">
          <node concept="1Z2H0r" id="3V9BInOuJ3F" role="mwGJk">
            <node concept="1YBJjd" id="3V9BInOuJ47" role="1Z2MuG">
              <ref role="1YBMHb" node="3V9BInOuJ3B" resolve="fsm" />
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="3V9BInOuKgq" role="1ZfhKB">
          <node concept="2c44tf" id="3V9BInOuKgH" role="mwGJk">
            <node concept="3uibUv" id="5WiIO$HCZEo" role="2c44tc">
              <ref role="3uigEE" to="4dy3:5WiIO$HCxdj" resolve="Fsm" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="3V9BInOuJ3B" role="1YuTPh">
      <property role="TrG5h" value="fsm" />
      <ref role="1YaFvo" to="go7p:6JT1n72QSlZ" resolve="Fsm" />
    </node>
  </node>
</model>

