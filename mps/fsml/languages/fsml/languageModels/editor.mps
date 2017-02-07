<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:d133ee2a-5f23-4996-9f69-d87bbf01dce7(fsml.editor)">
  <persistence version="9" />
  <languages>
    <use id="18bc6592-03a6-4e29-a83a-7ff23bde13ba" name="jetbrains.mps.lang.editor" version="4" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="go7p" ref="r:b814c010-3eeb-4171-b50a-982b2ce1cddf(fsml.structure)" implicit="true" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="18bc6592-03a6-4e29-a83a-7ff23bde13ba" name="jetbrains.mps.lang.editor">
      <concept id="1071666914219" name="jetbrains.mps.lang.editor.structure.ConceptEditorDeclaration" flags="ig" index="24kQdi" />
      <concept id="1198489924438" name="jetbrains.mps.lang.editor.structure.CellModel_Block" flags="sg" stub="8104358048506730066" index="b$f91">
        <child id="1198489985045" name="header" index="b$u42" />
        <child id="1198489993734" name="body" index="b$wch" />
      </concept>
      <concept id="1140524381322" name="jetbrains.mps.lang.editor.structure.CellModel_ListWithRole" flags="ng" index="2czfm3">
        <child id="1140524464360" name="cellLayout" index="2czzBx" />
      </concept>
      <concept id="1106270549637" name="jetbrains.mps.lang.editor.structure.CellLayout_Horizontal" flags="nn" index="2iRfu4" />
      <concept id="1106270571710" name="jetbrains.mps.lang.editor.structure.CellLayout_Vertical" flags="nn" index="2iRkQZ" />
      <concept id="1142886221719" name="jetbrains.mps.lang.editor.structure.QueryFunction_NodeCondition" flags="in" index="pkWqt" />
      <concept id="1142886811589" name="jetbrains.mps.lang.editor.structure.ConceptFunctionParameter_node" flags="nn" index="pncrf" />
      <concept id="1080736578640" name="jetbrains.mps.lang.editor.structure.BaseEditorComponent" flags="ig" index="2wURMF">
        <child id="1080736633877" name="cellModel" index="2wV5jI" />
      </concept>
      <concept id="1088013125922" name="jetbrains.mps.lang.editor.structure.CellModel_RefCell" flags="sg" stub="730538219795941030" index="1iCGBv">
        <child id="1088186146602" name="editorComponent" index="1sWHZn" />
      </concept>
      <concept id="1088185857835" name="jetbrains.mps.lang.editor.structure.InlineEditorComponent" flags="ig" index="1sVBvm" />
      <concept id="1139848536355" name="jetbrains.mps.lang.editor.structure.CellModel_WithRole" flags="ng" index="1$h60E">
        <property id="1140017977771" name="readOnly" index="1Intyy" />
        <reference id="1140103550593" name="relationDeclaration" index="1NtTu8" />
      </concept>
      <concept id="1073389214265" name="jetbrains.mps.lang.editor.structure.EditorCellModel" flags="ng" index="3EYTF0">
        <child id="1142887637401" name="renderingCondition" index="pqm2j" />
      </concept>
      <concept id="1073389446423" name="jetbrains.mps.lang.editor.structure.CellModel_Collection" flags="sn" stub="3013115976261988961" index="3EZMnI">
        <child id="1106270802874" name="cellLayout" index="2iSdaV" />
        <child id="1073389446424" name="childCellModel" index="3EZMnx" />
      </concept>
      <concept id="1073389577006" name="jetbrains.mps.lang.editor.structure.CellModel_Constant" flags="sn" stub="3610246225209162225" index="3F0ifn">
        <property id="1073389577007" name="text" index="3F0ifm" />
      </concept>
      <concept id="1073389658414" name="jetbrains.mps.lang.editor.structure.CellModel_Property" flags="sg" stub="730538219796134133" index="3F0A7n" />
      <concept id="1073389882823" name="jetbrains.mps.lang.editor.structure.CellModel_RefNode" flags="sg" stub="730538219795960754" index="3F1sOY" />
      <concept id="1073390211982" name="jetbrains.mps.lang.editor.structure.CellModel_RefNodeList" flags="sg" stub="2794558372793454595" index="3F2HdR" />
      <concept id="1166049232041" name="jetbrains.mps.lang.editor.structure.AbstractComponent" flags="ng" index="1XWOmA">
        <reference id="1166049300910" name="conceptDeclaration" index="1XX52x" />
      </concept>
    </language>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1137021947720" name="jetbrains.mps.baseLanguage.structure.ConceptFunction" flags="in" index="2VMwT0">
        <child id="1137022507850" name="body" index="2VODD2" />
      </concept>
      <concept id="1068580123155" name="jetbrains.mps.baseLanguage.structure.ExpressionStatement" flags="nn" index="3clFbF">
        <child id="1068580123156" name="expression" index="3clFbG" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1172008320231" name="jetbrains.mps.lang.smodel.structure.Node_IsNotNullOperation" flags="nn" index="3x8VRR" />
      <concept id="1138056143562" name="jetbrains.mps.lang.smodel.structure.SLinkAccess" flags="nn" index="3TrEf2">
        <reference id="1138056516764" name="link" index="3Tt5mk" />
      </concept>
    </language>
  </registry>
  <node concept="24kQdi" id="3V9BInOlb$X">
    <ref role="1XX52x" to="go7p:6JT1n72QSlZ" resolve="Fsm" />
    <node concept="b$f91" id="3V9BInOlhpC" role="2wV5jI">
      <node concept="3EZMnI" id="3V9BInOlhpK" role="b$wch">
        <node concept="3F0ifn" id="7k5EH56o29M" role="3EZMnx" />
        <node concept="3F2HdR" id="3V9BInOlhpR" role="3EZMnx">
          <ref role="1NtTu8" to="go7p:3V9BInOl6xO" resolve="states" />
          <node concept="2iRkQZ" id="3V9BInOlhpT" role="2czzBx" />
        </node>
        <node concept="2iRkQZ" id="3V9BInOlhpN" role="2iSdaV" />
      </node>
      <node concept="3F0ifn" id="3V9BInOlhpI" role="b$u42">
        <property role="3F0ifm" value="fsm" />
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="3V9BInOmoft">
    <ref role="1XX52x" to="go7p:3V9BInOkYn2" resolve="State" />
    <node concept="3EZMnI" id="3V9BInOmofP" role="2wV5jI">
      <node concept="3F1sOY" id="3V9BInOmohV" role="3EZMnx">
        <ref role="1NtTu8" to="go7p:3V9BInOl6y0" resolve="initial" />
      </node>
      <node concept="3F0ifn" id="3V9BInOmofR" role="3EZMnx">
        <property role="3F0ifm" value="state" />
      </node>
      <node concept="b$f91" id="3V9BInOpTiu" role="3EZMnx">
        <node concept="3F2HdR" id="3V9BInOpTiJ" role="b$wch">
          <ref role="1NtTu8" to="go7p:3V9BInOl6y2" resolve="transitions" />
          <node concept="2iRkQZ" id="3V9BInOpTiL" role="2czzBx" />
        </node>
        <node concept="3F0A7n" id="3V9BInOpTiA" role="b$u42">
          <ref role="1NtTu8" to="tpck:h0TrG11" resolve="name" />
        </node>
      </node>
      <node concept="2iRfu4" id="3V9BInOmofS" role="2iSdaV" />
    </node>
  </node>
  <node concept="24kQdi" id="3V9BInOmxxF">
    <ref role="1XX52x" to="go7p:3V9BInOl6eg" resolve="Initial" />
    <node concept="3F0ifn" id="3V9BInOmxxH" role="2wV5jI">
      <property role="3F0ifm" value="initial" />
    </node>
  </node>
  <node concept="24kQdi" id="3V9BInOmxy6">
    <ref role="1XX52x" to="go7p:3V9BInOl6dn" resolve="Input" />
    <node concept="3F0A7n" id="3V9BInOmxyb" role="2wV5jI">
      <ref role="1NtTu8" to="tpck:h0TrG11" resolve="name" />
    </node>
  </node>
  <node concept="24kQdi" id="3V9BInOmxyA">
    <ref role="1XX52x" to="go7p:3V9BInOl6df" resolve="Action" />
    <node concept="3F0A7n" id="3V9BInOmxyF" role="2wV5jI">
      <ref role="1NtTu8" to="tpck:h0TrG11" resolve="name" />
    </node>
  </node>
  <node concept="24kQdi" id="3V9BInOmxz8">
    <ref role="1XX52x" to="go7p:3V9BInOl6dB" resolve="Transition" />
    <node concept="3EZMnI" id="3V9BInOmxza" role="2wV5jI">
      <node concept="3F1sOY" id="3V9BInOmxzk" role="3EZMnx">
        <ref role="1NtTu8" to="go7p:3V9BInOl6yh" resolve="input" />
      </node>
      <node concept="3F0ifn" id="3V9BInOmxzq" role="3EZMnx">
        <property role="3F0ifm" value="/" />
        <node concept="pkWqt" id="3V9BInOmx$G" role="pqm2j">
          <node concept="3clFbS" id="3V9BInOmx$H" role="2VODD2">
            <node concept="3clFbF" id="3V9BInOmyxC" role="3cqZAp">
              <node concept="2OqwBi" id="3V9BInOmIfs" role="3clFbG">
                <node concept="2OqwBi" id="3V9BInOmyUp" role="2Oq$k0">
                  <node concept="pncrf" id="3V9BInOmyxB" role="2Oq$k0" />
                  <node concept="3TrEf2" id="3V9BInOmHX$" role="2OqNvi">
                    <ref role="3Tt5mk" to="go7p:3V9BInOl6yj" resolve="action" />
                  </node>
                </node>
                <node concept="3x8VRR" id="3V9BInOmIGz" role="2OqNvi" />
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="3F1sOY" id="3V9BInOmxzB" role="3EZMnx">
        <ref role="1NtTu8" to="go7p:3V9BInOl6yj" resolve="action" />
      </node>
      <node concept="3F0ifn" id="3V9BInOmxzL" role="3EZMnx">
        <property role="3F0ifm" value="-&gt;" />
        <node concept="pkWqt" id="3V9BInOmIN$" role="pqm2j">
          <node concept="3clFbS" id="3V9BInOmIN_" role="2VODD2">
            <node concept="3clFbF" id="3V9BInOmISw" role="3cqZAp">
              <node concept="2OqwBi" id="3V9BInOmJtF" role="3clFbG">
                <node concept="2OqwBi" id="3V9BInOmIWT" role="2Oq$k0">
                  <node concept="pncrf" id="3V9BInOmISv" role="2Oq$k0" />
                  <node concept="3TrEf2" id="3V9BInOmJbW" role="2OqNvi">
                    <ref role="3Tt5mk" to="go7p:3V9BInOl6ym" resolve="target" />
                  </node>
                </node>
                <node concept="3x8VRR" id="3V9BInOmJUM" role="2OqNvi" />
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="2iRfu4" id="3V9BInOmxzd" role="2iSdaV" />
      <node concept="1iCGBv" id="3V9BInOmxzX" role="3EZMnx">
        <ref role="1NtTu8" to="go7p:3V9BInOl6ym" resolve="target" />
        <node concept="1sVBvm" id="3V9BInOmxzZ" role="1sWHZn">
          <node concept="3F0A7n" id="3V9BInOmx$a" role="2wV5jI">
            <property role="1Intyy" value="true" />
            <ref role="1NtTu8" to="tpck:h0TrG11" resolve="name" />
          </node>
        </node>
      </node>
      <node concept="3F0ifn" id="3V9BInOn_wk" role="3EZMnx">
        <property role="3F0ifm" value=";" />
      </node>
    </node>
  </node>
</model>

