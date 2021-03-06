<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:b814c010-3eeb-4171-b50a-982b2ce1cddf(fsml.structure)">
  <persistence version="9" />
  <languages>
    <use id="c72da2b9-7cce-4447-8389-f407dc1158b7" name="jetbrains.mps.lang.structure" version="3" />
  </languages>
  <imports>
    <import index="tpee" ref="r:00000000-0000-4000-0000-011c895902ca(jetbrains.mps.baseLanguage.structure)" implicit="true" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="c72da2b9-7cce-4447-8389-f407dc1158b7" name="jetbrains.mps.lang.structure">
      <concept id="1169125787135" name="jetbrains.mps.lang.structure.structure.AbstractConceptDeclaration" flags="ig" index="PkWjJ">
        <property id="6714410169261853888" name="conceptId" index="EcuMT" />
        <child id="1071489727083" name="linkDeclaration" index="1TKVEi" />
      </concept>
      <concept id="1169127622168" name="jetbrains.mps.lang.structure.structure.InterfaceConceptReference" flags="ig" index="PrWs8">
        <reference id="1169127628841" name="intfc" index="PrY4T" />
      </concept>
      <concept id="1071489090640" name="jetbrains.mps.lang.structure.structure.ConceptDeclaration" flags="ig" index="1TIwiD">
        <reference id="1071489389519" name="extends" index="1TJDcQ" />
        <child id="1169129564478" name="implements" index="PzmwI" />
      </concept>
      <concept id="1071489288298" name="jetbrains.mps.lang.structure.structure.LinkDeclaration" flags="ig" index="1TJgyj">
        <property id="1071599776563" name="role" index="20kJfa" />
        <property id="1071599893252" name="sourceCardinality" index="20lbJX" />
        <property id="1071599937831" name="metaClass" index="20lmBu" />
        <property id="241647608299431140" name="linkId" index="IQ2ns" />
        <reference id="1071599976176" name="target" index="20lvS9" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ng" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
  </registry>
  <node concept="1TIwiD" id="6JT1n72QSlZ">
    <property role="TrG5h" value="Fsm" />
    <property role="EcuMT" value="7780255817417852287" />
    <ref role="1TJDcQ" to="tpee:fz3vP1J" resolve="Expression" />
    <node concept="1TJgyj" id="3V9BInOl6xO" role="1TKVEi">
      <property role="20lmBu" value="aggregation" />
      <property role="20kJfa" value="states" />
      <property role="20lbJX" value="0..n" />
      <property role="IQ2ns" value="4524322011154245748" />
      <ref role="20lvS9" node="3V9BInOkYn2" resolve="State" />
    </node>
  </node>
  <node concept="1TIwiD" id="3V9BInOkYn2">
    <property role="TrG5h" value="State" />
    <property role="EcuMT" value="4524322011154212290" />
    <node concept="PrWs8" id="3V9BInOl6da" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
    <node concept="1TJgyj" id="3V9BInOl6y0" role="1TKVEi">
      <property role="20lmBu" value="aggregation" />
      <property role="20kJfa" value="initial" />
      <property role="IQ2ns" value="4524322011154245760" />
      <ref role="20lvS9" node="3V9BInOl6eg" resolve="Initial" />
    </node>
    <node concept="1TJgyj" id="3V9BInOl6y2" role="1TKVEi">
      <property role="20lmBu" value="aggregation" />
      <property role="20kJfa" value="transitions" />
      <property role="20lbJX" value="0..n" />
      <property role="IQ2ns" value="4524322011154245762" />
      <ref role="20lvS9" node="3V9BInOl6dB" resolve="Transition" />
    </node>
  </node>
  <node concept="1TIwiD" id="3V9BInOl6df">
    <property role="TrG5h" value="Action" />
    <property role="EcuMT" value="4524322011154244431" />
    <node concept="PrWs8" id="3V9BInOl6dg" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
  </node>
  <node concept="1TIwiD" id="3V9BInOl6dn">
    <property role="TrG5h" value="Event" />
    <property role="EcuMT" value="4524322011154244439" />
    <node concept="PrWs8" id="3V9BInOl6du" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
  </node>
  <node concept="1TIwiD" id="3V9BInOl6dB">
    <property role="TrG5h" value="Transition" />
    <property role="EcuMT" value="4524322011154244455" />
    <node concept="1TJgyj" id="3V9BInOl6yh" role="1TKVEi">
      <property role="20lmBu" value="aggregation" />
      <property role="20kJfa" value="event" />
      <property role="20lbJX" value="1" />
      <property role="IQ2ns" value="4524322011154245777" />
      <ref role="20lvS9" node="3V9BInOl6dn" resolve="Event" />
    </node>
    <node concept="1TJgyj" id="3V9BInOl6yj" role="1TKVEi">
      <property role="20lmBu" value="aggregation" />
      <property role="20kJfa" value="action" />
      <property role="IQ2ns" value="4524322011154245779" />
      <ref role="20lvS9" node="3V9BInOl6df" resolve="Action" />
    </node>
    <node concept="1TJgyj" id="3V9BInOl6ym" role="1TKVEi">
      <property role="20lmBu" value="reference" />
      <property role="20kJfa" value="target" />
      <property role="IQ2ns" value="4524322011154245782" />
      <ref role="20lvS9" node="3V9BInOkYn2" resolve="State" />
    </node>
  </node>
  <node concept="1TIwiD" id="3V9BInOl6eg">
    <property role="TrG5h" value="Initial" />
    <property role="EcuMT" value="4524322011154244496" />
  </node>
</model>

