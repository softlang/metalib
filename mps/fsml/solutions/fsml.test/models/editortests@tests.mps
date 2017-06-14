<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:be8d51e0-70e9-4262-a4d2-8c0f8a8bdae4(editortests@tests)">
  <persistence version="9" />
  <languages>
    <use id="f61473f9-130f-42f6-b98d-6c438812c2f6" name="jetbrains.mps.baseLanguage.unitTest" version="0" />
    <use id="8585453e-6bfb-4d80-98de-b16074f1d86c" name="jetbrains.mps.lang.test" version="1" />
    <use id="1e0d5fd6-c07a-4df5-9c9b-c73735ba6c37" name="fsml" version="0" />
    <use id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage" version="5" />
  </languages>
  <imports>
    <import index="1pii" ref="r:6139291b-5401-465d-ba30-ab70bd7eeb5c(fsml.intentions)" />
  </imports>
  <registry>
    <language id="8585453e-6bfb-4d80-98de-b16074f1d86c" name="jetbrains.mps.lang.test">
      <concept id="1229187653856" name="jetbrains.mps.lang.test.structure.EditorTestCase" flags="lg" index="LiM7Y">
        <property id="1883175908513350760" name="description" index="3YCmrE" />
        <child id="1229187676388" name="nodeToEdit" index="LiRBU" />
        <child id="1229187707859" name="result" index="LiZbd" />
        <child id="1229187755283" name="code" index="LjaKd" />
      </concept>
      <concept id="1229194968594" name="jetbrains.mps.lang.test.structure.AnonymousCellAnnotation" flags="ng" index="LIFWc">
        <property id="6268941039745498163" name="selectionStart" index="p6zMq" />
        <property id="6268941039745498165" name="selectionEnd" index="p6zMs" />
        <property id="1229194968595" name="cellId" index="LIFWd" />
        <property id="1932269937152561478" name="useLabelSelection" index="OXtK3" />
        <property id="1229432188737" name="isLastPosition" index="ZRATv" />
      </concept>
      <concept id="1225989773458" name="jetbrains.mps.lang.test.structure.InvokeIntentionStatement" flags="nn" index="1MFPAf">
        <reference id="1225989811227" name="intention" index="1MFYO6" />
      </concept>
    </language>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1133920641626" name="jetbrains.mps.lang.core.structure.BaseConcept" flags="ng" index="2VYdi">
        <child id="5169995583184591170" name="smodelAttribute" index="lGtFl" />
      </concept>
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ng" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="1e0d5fd6-c07a-4df5-9c9b-c73735ba6c37" name="fsml">
      <concept id="7780255817417852287" name="fsml.structure.Fsm" flags="ng" index="2D8C0e">
        <child id="4524322011154245748" name="states" index="3aBvqh" />
      </concept>
      <concept id="4524322011154212290" name="fsml.structure.State" flags="ng" index="3aABGB">
        <child id="4524322011154245760" name="initial" index="3aBvp_" />
        <child id="4524322011154245762" name="transitions" index="3aBvpB" />
      </concept>
      <concept id="4524322011154244496" name="fsml.structure.Initial" flags="ng" index="3aBvPP" />
      <concept id="4524322011154244455" name="fsml.structure.Transition" flags="ng" index="3aBvQ2">
        <reference id="4524322011154245782" name="target" index="3aBvpN" />
        <child id="4524322011154245777" name="event" index="3aBvpO" />
        <child id="4524322011154245779" name="action" index="3aBvpQ" />
      </concept>
      <concept id="4524322011154244431" name="fsml.structure.Action" flags="ng" index="3aBvQE" />
      <concept id="4524322011154244439" name="fsml.structure.Event" flags="ng" index="3aBvQM" />
    </language>
  </registry>
  <node concept="LiM7Y" id="5JglOZTemCt">
    <property role="TrG5h" value="MakeInitial" />
    <property role="3YCmrE" value="make the selected state the only initial one" />
    <node concept="2D8C0e" id="5JglOZTenwm" role="LiRBU">
      <node concept="3aABGB" id="5JglOZTenws" role="3aBvqh">
        <property role="TrG5h" value="stateA" />
        <node concept="3aBvQ2" id="5JglOZTenwx" role="3aBvpB">
          <ref role="3aBvpN" node="5JglOZTenwL" resolve="stateB" />
          <node concept="3aBvQM" id="5JglOZTenwy" role="3aBvpO">
            <property role="TrG5h" value="eventI" />
          </node>
          <node concept="3aBvQE" id="5JglOZTenw_" role="3aBvpQ">
            <property role="TrG5h" value="actionI" />
          </node>
        </node>
        <node concept="3aBvPP" id="5JglOZTenx1" role="3aBvp_" />
      </node>
      <node concept="3aABGB" id="5JglOZTenwL" role="3aBvqh">
        <property role="TrG5h" value="stateB" />
        <node concept="3aBvQ2" id="5JglOZTenx3" role="3aBvpB">
          <ref role="3aBvpN" node="5JglOZTenws" resolve="stateA" />
          <node concept="3aBvQM" id="5JglOZTenx4" role="3aBvpO">
            <property role="TrG5h" value="eventII" />
          </node>
          <node concept="3aBvQE" id="5JglOZTenx7" role="3aBvpQ">
            <property role="TrG5h" value="actionII" />
          </node>
        </node>
        <node concept="LIFWc" id="5JglOZTf6tk" role="lGtFl">
          <property role="ZRATv" value="true" />
          <property role="OXtK3" value="true" />
          <property role="p6zMq" value="0" />
          <property role="p6zMs" value="0" />
          <property role="LIFWd" value="empty_initial" />
        </node>
      </node>
    </node>
    <node concept="2D8C0e" id="5JglOZTenxk" role="LiZbd">
      <node concept="3aABGB" id="5JglOZTenxp" role="3aBvqh">
        <property role="TrG5h" value="stateA" />
        <node concept="3aBvQ2" id="5JglOZTenxu" role="3aBvpB">
          <ref role="3aBvpN" node="5JglOZTenxI" resolve="stateB" />
          <node concept="3aBvQM" id="5JglOZTenxv" role="3aBvpO">
            <property role="TrG5h" value="eventI" />
          </node>
          <node concept="3aBvQE" id="5JglOZTenxy" role="3aBvpQ">
            <property role="TrG5h" value="actionI" />
          </node>
        </node>
      </node>
      <node concept="3aABGB" id="5JglOZTenxI" role="3aBvqh">
        <property role="TrG5h" value="stateB" />
        <node concept="3aBvQ2" id="5JglOZTenxR" role="3aBvpB">
          <ref role="3aBvpN" node="5JglOZTenxp" resolve="stateA" />
          <node concept="3aBvQM" id="5JglOZTenxS" role="3aBvpO">
            <property role="TrG5h" value="eventII" />
          </node>
          <node concept="3aBvQE" id="5JglOZTenxV" role="3aBvpQ">
            <property role="TrG5h" value="actionII" />
          </node>
        </node>
        <node concept="3aBvPP" id="5JglOZTf9dd" role="3aBvp_" />
      </node>
    </node>
    <node concept="3clFbS" id="5JglOZTeoyz" role="LjaKd">
      <node concept="1MFPAf" id="5JglOZTeozs" role="3cqZAp">
        <ref role="1MFYO6" to="1pii:3V9BInOy7tk" resolve="Make_Initial" />
      </node>
    </node>
  </node>
</model>

