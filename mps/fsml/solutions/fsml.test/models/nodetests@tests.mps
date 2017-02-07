<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:f2b42bec-11ea-4b45-89e9-299de2e70709(nodetests@tests)">
  <persistence version="9" />
  <languages>
    <use id="f61473f9-130f-42f6-b98d-6c438812c2f6" name="jetbrains.mps.baseLanguage.unitTest" version="0" />
    <use id="8585453e-6bfb-4d80-98de-b16074f1d86c" name="jetbrains.mps.lang.test" version="1" />
    <use id="1e0d5fd6-c07a-4df5-9c9b-c73735ba6c37" name="fsml" version="0" />
  </languages>
  <imports>
    <import index="36f4" ref="r:ad6fef75-83a6-4dc3-b0fa-1a4cf65e8eba(fsml.typesystem)" />
  </imports>
  <registry>
    <language id="8585453e-6bfb-4d80-98de-b16074f1d86c" name="jetbrains.mps.lang.test">
      <concept id="1215507671101" name="jetbrains.mps.lang.test.structure.NodeErrorCheckOperation" flags="ng" index="1TM$A">
        <child id="8489045168660938517" name="errorRef" index="3lydEf" />
      </concept>
      <concept id="1215511704609" name="jetbrains.mps.lang.test.structure.NodeWarningCheckOperation" flags="ng" index="29bkU">
        <child id="8489045168660938635" name="warningRef" index="3lydCh" />
      </concept>
      <concept id="1215603922101" name="jetbrains.mps.lang.test.structure.NodeOperationsContainer" flags="ng" index="7CXmI">
        <child id="1215604436604" name="nodeOperations" index="7EUXB" />
      </concept>
      <concept id="7691029917083872157" name="jetbrains.mps.lang.test.structure.IRuleReference" flags="ng" index="2u4UPC">
        <reference id="8333855927540250453" name="declaration" index="39XzEq" />
      </concept>
      <concept id="4531408400486526326" name="jetbrains.mps.lang.test.structure.WarningStatementReference" flags="ng" index="2PQEqo" />
      <concept id="4531408400484511853" name="jetbrains.mps.lang.test.structure.ReportErrorStatementReference" flags="ng" index="2PYRI3" />
      <concept id="1216913645126" name="jetbrains.mps.lang.test.structure.NodesTestCase" flags="lg" index="1lH9Xt">
        <child id="1217501822150" name="nodesToCheck" index="1SKRRt" />
      </concept>
      <concept id="1216989428737" name="jetbrains.mps.lang.test.structure.TestNode" flags="ng" index="1qefOq">
        <child id="1216989461394" name="nodeToCheck" index="1qenE9" />
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
        <child id="4524322011154245777" name="input" index="3aBvpO" />
        <child id="4524322011154245779" name="action" index="3aBvpQ" />
      </concept>
      <concept id="4524322011154244431" name="fsml.structure.Action" flags="ng" index="3aBvQE" />
      <concept id="4524322011154244439" name="fsml.structure.Input" flags="ng" index="3aBvQM" />
    </language>
  </registry>
  <node concept="1lH9Xt" id="27zjBwZLgQS">
    <property role="TrG5h" value="DeterminismNotOk" />
    <node concept="1qefOq" id="27zjBwZLgQX" role="1SKRRt">
      <node concept="2D8C0e" id="27zjBwZLgQZ" role="1qenE9">
        <node concept="3aABGB" id="27zjBwZLgR4" role="3aBvqh">
          <property role="TrG5h" value="stateA" />
          <node concept="3aBvQ2" id="27zjBwZLgR9" role="3aBvpB">
            <ref role="3aBvpN" node="27zjBwZLgRS" resolve="stateB" />
            <node concept="3aBvQM" id="27zjBwZLgRa" role="3aBvpO">
              <property role="TrG5h" value="eventI" />
            </node>
          </node>
          <node concept="3aBvQ2" id="27zjBwZLgRE" role="3aBvpB">
            <ref role="3aBvpN" node="27zjBwZLgS2" resolve="stateC" />
            <node concept="3aBvQM" id="27zjBwZLgRF" role="3aBvpO">
              <property role="TrG5h" value="eventI" />
              <node concept="7CXmI" id="27zjBwZL$Bz" role="lGtFl">
                <node concept="1TM$A" id="27zjBwZL$B$" role="7EUXB">
                  <node concept="2PYRI3" id="58KA5ZsOwf7" role="3lydEf">
                    <ref role="39XzEq" to="36f4:58KA5ZsMCJc" />
                  </node>
                </node>
              </node>
            </node>
          </node>
          <node concept="3aBvPP" id="27zjBwZLzFw" role="3aBvp_" />
        </node>
        <node concept="3aABGB" id="27zjBwZLgRS" role="3aBvqh">
          <property role="TrG5h" value="stateB" />
        </node>
        <node concept="3aABGB" id="27zjBwZLgS2" role="3aBvqh">
          <property role="TrG5h" value="stateC" />
        </node>
      </node>
    </node>
  </node>
  <node concept="1lH9Xt" id="27zjBwZL_46">
    <property role="TrG5h" value="IdsNotOk" />
    <node concept="1qefOq" id="27zjBwZL_4u" role="1SKRRt">
      <node concept="2D8C0e" id="27zjBwZL_4w" role="1qenE9">
        <node concept="3aABGB" id="27zjBwZL_4_" role="3aBvqh">
          <property role="TrG5h" value="stateA" />
          <node concept="3aBvQ2" id="27zjBwZL_8O" role="3aBvpB">
            <ref role="3aBvpN" node="27zjBwZL_7y" resolve="stateZ" />
            <node concept="3aBvQM" id="27zjBwZL_8P" role="3aBvpO">
              <property role="TrG5h" value="eventI" />
            </node>
            <node concept="3aBvQE" id="27zjBwZL_9u" role="3aBvpQ">
              <property role="TrG5h" value="actionI" />
            </node>
          </node>
          <node concept="3aBvPP" id="27zjBwZL_51" role="3aBvp_" />
        </node>
        <node concept="3aABGB" id="27zjBwZL_5r" role="3aBvqh">
          <property role="TrG5h" value="stateA" />
          <node concept="3aBvQ2" id="27zjBwZL_9x" role="3aBvpB">
            <ref role="3aBvpN" node="27zjBwZL_7y" resolve="stateZ" />
            <node concept="3aBvQM" id="27zjBwZL_9y" role="3aBvpO">
              <property role="TrG5h" value="eventII" />
            </node>
            <node concept="3aBvQE" id="27zjBwZL_ac" role="3aBvpQ">
              <property role="TrG5h" value="actionII" />
            </node>
          </node>
          <node concept="7CXmI" id="27zjBwZL_6E" role="lGtFl">
            <node concept="1TM$A" id="27zjBwZL_6F" role="7EUXB">
              <node concept="2PYRI3" id="58KA5ZsOwad" role="3lydEf">
                <ref role="39XzEq" to="36f4:3V9BInOrXY8" />
              </node>
            </node>
          </node>
        </node>
        <node concept="3aABGB" id="27zjBwZL_7y" role="3aBvqh">
          <property role="TrG5h" value="stateZ" />
        </node>
      </node>
    </node>
  </node>
  <node concept="1lH9Xt" id="27zjBwZL_Cq">
    <property role="TrG5h" value="InitialNotOk1" />
    <node concept="1qefOq" id="27zjBwZL_DK" role="1SKRRt">
      <node concept="2D8C0e" id="27zjBwZL_DM" role="1qenE9">
        <node concept="3aABGB" id="27zjBwZL_DR" role="3aBvqh">
          <property role="TrG5h" value="stateA" />
          <node concept="3aBvQ2" id="27zjBwZL_EC" role="3aBvpB">
            <ref role="3aBvpN" node="27zjBwZL_EI" resolve="stateB" />
            <node concept="3aBvQM" id="27zjBwZL_ED" role="3aBvpO">
              <property role="TrG5h" value="eventI" />
            </node>
            <node concept="3aBvQE" id="27zjBwZL_EG" role="3aBvpQ">
              <property role="TrG5h" value="actionII" />
            </node>
          </node>
          <node concept="7CXmI" id="27zjBwZL_Hq" role="lGtFl">
            <node concept="1TM$A" id="27zjBwZL_Hr" role="7EUXB">
              <node concept="2PYRI3" id="27zjBwZL_Hv" role="3lydEf">
                <ref role="39XzEq" to="36f4:3rAnA9iLuok" />
              </node>
            </node>
          </node>
        </node>
        <node concept="3aABGB" id="27zjBwZL_EI" role="3aBvqh">
          <property role="TrG5h" value="stateB" />
          <node concept="3aBvQ2" id="27zjBwZL_FB" role="3aBvpB">
            <ref role="3aBvpN" node="27zjBwZL_DR" resolve="stateA" />
            <node concept="3aBvQM" id="27zjBwZL_FC" role="3aBvpO">
              <property role="TrG5h" value="eventII" />
            </node>
            <node concept="3aBvQE" id="27zjBwZL_FF" role="3aBvpQ">
              <property role="TrG5h" value="actionII" />
            </node>
          </node>
          <node concept="7CXmI" id="27zjBwZL_Hx" role="lGtFl">
            <node concept="1TM$A" id="27zjBwZL_Hy" role="7EUXB">
              <node concept="2PYRI3" id="27zjBwZL_HA" role="3lydEf">
                <ref role="39XzEq" to="36f4:3rAnA9iLuok" />
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="1lH9Xt" id="27zjBwZLAj4">
    <property role="TrG5h" value="InitialNotOk2" />
    <node concept="1qefOq" id="27zjBwZLAj8" role="1SKRRt">
      <node concept="2D8C0e" id="27zjBwZLAja" role="1qenE9">
        <node concept="3aABGB" id="27zjBwZLAjf" role="3aBvqh">
          <property role="TrG5h" value="stateA" />
          <node concept="3aBvQ2" id="27zjBwZLAkm" role="3aBvpB">
            <ref role="3aBvpN" node="27zjBwZLAlN" resolve="stateC" />
            <node concept="3aBvQM" id="27zjBwZLAkn" role="3aBvpO">
              <property role="TrG5h" value="eventI" />
            </node>
            <node concept="3aBvQE" id="27zjBwZLAkq" role="3aBvpQ">
              <property role="TrG5h" value="actionI" />
            </node>
          </node>
          <node concept="3aBvPP" id="27zjBwZLAjk" role="3aBvp_" />
          <node concept="7CXmI" id="27zjBwZNPiH" role="lGtFl">
            <node concept="1TM$A" id="27zjBwZNPiI" role="7EUXB">
              <node concept="2PYRI3" id="27zjBwZNPiM" role="3lydEf">
                <ref role="39XzEq" to="36f4:3rAnA9iLU$B" />
              </node>
            </node>
          </node>
        </node>
        <node concept="3aABGB" id="27zjBwZLAks" role="3aBvqh">
          <property role="TrG5h" value="stateB" />
          <node concept="3aBvQ2" id="27zjBwZLAlH" role="3aBvpB">
            <ref role="3aBvpN" node="27zjBwZLAlN" resolve="stateC" />
            <node concept="3aBvQM" id="27zjBwZLAlI" role="3aBvpO">
              <property role="TrG5h" value="eventII" />
            </node>
            <node concept="3aBvQE" id="27zjBwZLAlL" role="3aBvpQ">
              <property role="TrG5h" value="actionII" />
            </node>
          </node>
          <node concept="3aBvPP" id="27zjBwZLAkA" role="3aBvp_" />
          <node concept="7CXmI" id="27zjBwZNPiO" role="lGtFl">
            <node concept="1TM$A" id="27zjBwZNPiP" role="7EUXB">
              <node concept="2PYRI3" id="27zjBwZNPiT" role="3lydEf">
                <ref role="39XzEq" to="36f4:3rAnA9iLU$B" />
              </node>
            </node>
          </node>
        </node>
        <node concept="3aABGB" id="27zjBwZLAlN" role="3aBvqh">
          <property role="TrG5h" value="stateC" />
        </node>
      </node>
    </node>
  </node>
  <node concept="1lH9Xt" id="5JglOZTdaTF">
    <property role="TrG5h" value="ReachabilityNotOk" />
    <node concept="1qefOq" id="5JglOZTdaTJ" role="1SKRRt">
      <node concept="2D8C0e" id="5JglOZTdaYf" role="1qenE9">
        <node concept="3aABGB" id="5JglOZTdaZB" role="3aBvqh">
          <property role="TrG5h" value="stateA" />
          <node concept="3aBvQ2" id="5JglOZTdb2o" role="3aBvpB">
            <ref role="3aBvpN" node="5JglOZTdb3Q" resolve="stateB" />
            <node concept="3aBvQM" id="5JglOZTdb2p" role="3aBvpO">
              <property role="TrG5h" value="eventI" />
            </node>
            <node concept="3aBvQE" id="5JglOZTdb2s" role="3aBvpQ">
              <property role="TrG5h" value="actionII" />
            </node>
          </node>
          <node concept="3aBvPP" id="5JglOZTdaZG" role="3aBvp_" />
        </node>
        <node concept="3aABGB" id="5JglOZTdb3Q" role="3aBvqh">
          <property role="TrG5h" value="stateB" />
        </node>
        <node concept="3aABGB" id="5JglOZTdb5p" role="3aBvqh">
          <property role="TrG5h" value="stateC" />
          <node concept="7CXmI" id="5JglOZTdb8r" role="lGtFl">
            <node concept="29bkU" id="5JglOZTdb8s" role="7EUXB">
              <node concept="2PQEqo" id="58KA5ZsPw_V" role="3lydCh">
                <ref role="39XzEq" to="36f4:lDEcpPI$_k" />
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
</model>

