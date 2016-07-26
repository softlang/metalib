<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:cae0aa54-7c34-4e64-9a9e-9f54cafd6266(fsml.build)">
  <persistence version="9" />
  <languages>
    <use id="798100da-4f0a-421a-b991-71f8c50ce5d2" name="jetbrains.mps.build" version="0" />
    <use id="0cf935df-4699-4e9c-a132-fa109541cba3" name="jetbrains.mps.build.mps" version="1" />
  </languages>
  <imports>
    <import index="ffeo" ref="r:874d959d-e3b4-4d04-b931-ca849af130dd(jetbrains.mps.ide.build)" />
  </imports>
  <registry>
    <language id="798100da-4f0a-421a-b991-71f8c50ce5d2" name="jetbrains.mps.build">
      <concept id="5481553824944787378" name="jetbrains.mps.build.structure.BuildSourceProjectRelativePath" flags="ng" index="55IIr" />
      <concept id="9126048691955220717" name="jetbrains.mps.build.structure.BuildLayout_File" flags="ng" index="28jJK3">
        <property id="9126048691955221291" name="filemode" index="28jJZ5" />
        <child id="9126048691955220774" name="parameters" index="28jJR8" />
        <child id="9126048691955220762" name="path" index="28jJRO" />
      </concept>
      <concept id="2755237150521975431" name="jetbrains.mps.build.structure.BuildVariableMacroInitWithString" flags="ng" index="aVJcg">
        <child id="2755237150521975437" name="value" index="aVJcq" />
      </concept>
      <concept id="244868996532454372" name="jetbrains.mps.build.structure.BuildVariableMacroInitWithDate" flags="ng" index="hHN3E">
        <property id="244868996532454384" name="pattern" index="hHN3Y" />
      </concept>
      <concept id="7321017245476976379" name="jetbrains.mps.build.structure.BuildRelativePath" flags="ng" index="iG8Mu">
        <child id="7321017245477039051" name="compositePart" index="iGT6I" />
      </concept>
      <concept id="3767587139141066978" name="jetbrains.mps.build.structure.BuildVariableMacro" flags="ng" index="2kB4xC">
        <child id="2755237150521975432" name="initialValue" index="aVJcv" />
      </concept>
      <concept id="4993211115183325728" name="jetbrains.mps.build.structure.BuildProjectDependency" flags="ng" index="2sgV4H">
        <reference id="5617550519002745380" name="script" index="1l3spb" />
        <child id="4129895186893471026" name="artifacts" index="2JcizS" />
      </concept>
      <concept id="7801138212747054656" name="jetbrains.mps.build.structure.BuildLayout_Filemode" flags="ng" index="yKbIv">
        <property id="7801138212747054660" name="filemode" index="yKbIr" />
      </concept>
      <concept id="2750015747481074431" name="jetbrains.mps.build.structure.BuildLayout_Files" flags="ng" index="2HvfSZ">
        <child id="2750015747481074432" name="path" index="2HvfZ0" />
        <child id="2750015747481074433" name="parameters" index="2HvfZ1" />
      </concept>
      <concept id="4380385936562003279" name="jetbrains.mps.build.structure.BuildString" flags="ng" index="NbPM2">
        <child id="4903714810883783243" name="parts" index="3MwsjC" />
      </concept>
      <concept id="8618885170173601777" name="jetbrains.mps.build.structure.BuildCompositePath" flags="nn" index="2Ry0Ak">
        <property id="8618885170173601779" name="head" index="2Ry0Am" />
        <child id="8618885170173601778" name="tail" index="2Ry0An" />
      </concept>
      <concept id="6647099934206700647" name="jetbrains.mps.build.structure.BuildJavaPlugin" flags="ng" index="10PD9b" />
      <concept id="9184644532457106504" name="jetbrains.mps.build.structure.BuildLayout_CopyFilterReplaceRegex" flags="ng" index="1688n2">
        <property id="9184644532457106505" name="pattern" index="1688n3" />
        <property id="9184644532457106508" name="flags" index="1688n6" />
        <child id="9184644532457106506" name="value" index="1688n0" />
      </concept>
      <concept id="7389400916848050074" name="jetbrains.mps.build.structure.BuildLayout_Jar" flags="ng" index="3981dx" />
      <concept id="7389400916848050071" name="jetbrains.mps.build.structure.BuildLayout_Zip" flags="ng" index="3981dG" />
      <concept id="7389400916848050060" name="jetbrains.mps.build.structure.BuildLayout_NamedContainer" flags="ng" index="3981dR">
        <child id="4380385936562148502" name="containerName" index="Nbhlr" />
      </concept>
      <concept id="7389400916848036984" name="jetbrains.mps.build.structure.BuildLayout_Folder" flags="ng" index="398223" />
      <concept id="7389400916848136194" name="jetbrains.mps.build.structure.BuildFolderMacro" flags="ng" index="398rNT">
        <child id="7389400916848144618" name="defaultPath" index="398pKh" />
      </concept>
      <concept id="7389400916848153117" name="jetbrains.mps.build.structure.BuildSourceMacroRelativePath" flags="ng" index="398BVA">
        <reference id="7389400916848153130" name="macro" index="398BVh" />
      </concept>
      <concept id="4198392933254416812" name="jetbrains.mps.build.structure.BuildLayout_CopyFilterFixCRLF" flags="ng" index="3co7Ac">
        <property id="4198392933254416822" name="eol" index="3co7Am" />
        <property id="4198392933254551900" name="removeEOF" index="3cpA_W" />
      </concept>
      <concept id="5617550519002745364" name="jetbrains.mps.build.structure.BuildLayout" flags="ng" index="1l3spV" />
      <concept id="5617550519002745363" name="jetbrains.mps.build.structure.BuildProject" flags="ng" index="1l3spW">
        <property id="4915877860348071612" name="fileName" index="turDy" />
        <property id="5204048710541015587" name="internalBaseDirectory" index="2DA0ip" />
        <child id="6647099934206700656" name="plugins" index="10PD9s" />
        <child id="7389400916848080626" name="parts" index="3989C9" />
        <child id="5617550519002745381" name="dependencies" index="1l3spa" />
        <child id="5617550519002745378" name="macros" index="1l3spd" />
        <child id="5617550519002745372" name="layout" index="1l3spN" />
      </concept>
      <concept id="8577651205286814211" name="jetbrains.mps.build.structure.BuildLayout_Tar" flags="ng" index="1tmT9g">
        <property id="1979010778009209128" name="compression" index="AB_bT" />
      </concept>
      <concept id="4701820937132344003" name="jetbrains.mps.build.structure.BuildLayout_Container" flags="ng" index="1y1bJS">
        <child id="7389400916848037006" name="children" index="39821P" />
      </concept>
      <concept id="5610619299013057363" name="jetbrains.mps.build.structure.BuildLayout_ImportContent" flags="ng" index="3ygNvl">
        <reference id="5610619299013057365" name="target" index="3ygNvj" />
        <child id="6789562173791401562" name="selectors" index="1juEy9" />
      </concept>
      <concept id="7753544965996647428" name="jetbrains.mps.build.structure.BuildLayout_FilesOf" flags="ng" index="1zDrgl">
        <reference id="7753544965996647430" name="element" index="1zDrgn" />
      </concept>
      <concept id="841011766565753074" name="jetbrains.mps.build.structure.BuildLayout_Import" flags="ng" index="3_I8Xc">
        <reference id="841011766565753076" name="target" index="3_I8Xa" />
      </concept>
      <concept id="841011766566059607" name="jetbrains.mps.build.structure.BuildStringNotEmpty" flags="ng" index="3_J27D" />
      <concept id="5248329904288051111" name="jetbrains.mps.build.structure.BuildFileExcludeSelector" flags="ng" index="3LWZYq">
        <property id="5248329904288051112" name="pattern" index="3LWZYl" />
      </concept>
      <concept id="5248329904288051100" name="jetbrains.mps.build.structure.BuildFileIncludeSelector" flags="ng" index="3LWZYx">
        <property id="5248329904288051101" name="pattern" index="3LWZYw" />
      </concept>
      <concept id="4903714810883702019" name="jetbrains.mps.build.structure.BuildTextStringPart" flags="ng" index="3Mxwew">
        <property id="4903714810883755350" name="text" index="3MwjfP" />
      </concept>
      <concept id="4903714810883702017" name="jetbrains.mps.build.structure.BuildVarRefStringPart" flags="ng" index="3Mxwey">
        <reference id="4903714810883702018" name="macro" index="3Mxwex" />
      </concept>
      <concept id="202934866059043946" name="jetbrains.mps.build.structure.BuildLayout_EchoProperties" flags="ng" index="1TblL5">
        <child id="202934866059043948" name="fileName" index="1TblL3" />
        <child id="202934866059043962" name="entries" index="1TblLl" />
      </concept>
      <concept id="202934866059043959" name="jetbrains.mps.build.structure.BuildLayout_EchoPropertyEntry" flags="ng" index="1TblLo">
        <property id="202934866059043960" name="key" index="1TblLn" />
        <child id="202934866059043961" name="value" index="1TblLm" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ng" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="0cf935df-4699-4e9c-a132-fa109541cba3" name="jetbrains.mps.build.mps">
      <concept id="6592112598314586625" name="jetbrains.mps.build.mps.structure.BuildMps_IdeaPluginGroup" flags="ng" index="m$f5U">
        <reference id="6592112598314586626" name="group" index="m$f5T" />
      </concept>
      <concept id="6592112598314498932" name="jetbrains.mps.build.mps.structure.BuildMps_IdeaPlugin" flags="ng" index="m$_wf">
        <property id="6592112598314498927" name="id" index="m$_wk" />
        <child id="6592112598314498931" name="version" index="m$_w8" />
        <child id="6592112598314499050" name="content" index="m$_yh" />
        <child id="6592112598314499028" name="dependencies" index="m$_yJ" />
        <child id="6592112598314499021" name="name" index="m$_yQ" />
        <child id="6592112598314855574" name="containerName" index="m_cZH" />
      </concept>
      <concept id="6592112598314498926" name="jetbrains.mps.build.mps.structure.BuildMpsLayout_Plugin" flags="ng" index="m$_wl">
        <reference id="6592112598314801433" name="plugin" index="m_rDy" />
      </concept>
      <concept id="6592112598314499027" name="jetbrains.mps.build.mps.structure.BuildMps_IdeaPluginDependency" flags="ng" index="m$_yC">
        <reference id="6592112598314499066" name="target" index="m$_y1" />
      </concept>
      <concept id="1500819558095907805" name="jetbrains.mps.build.mps.structure.BuildMps_Group" flags="ng" index="2G$12M">
        <child id="1500819558095907806" name="modules" index="2G$12L" />
      </concept>
      <concept id="868032131020265945" name="jetbrains.mps.build.mps.structure.BuildMPSPlugin" flags="ng" index="3b7kt6" />
      <concept id="5253498789149381388" name="jetbrains.mps.build.mps.structure.BuildMps_Module" flags="ng" index="3bQrTs">
        <property id="1500819558096356884" name="doNotCompile" index="2GAjPV" />
        <child id="5253498789149547704" name="dependencies" index="3bR37C" />
      </concept>
      <concept id="5253498789149585690" name="jetbrains.mps.build.mps.structure.BuildMps_ModuleDependencyOnModule" flags="ng" index="3bR9La">
        <property id="5253498789149547713" name="reexport" index="3bR36h" />
        <reference id="5253498789149547705" name="module" index="3bR37D" />
      </concept>
      <concept id="5507251971038816436" name="jetbrains.mps.build.mps.structure.BuildMps_Generator" flags="ng" index="1yeLz9" />
      <concept id="7753544965996377997" name="jetbrains.mps.build.mps.structure.BuildMps_Branding" flags="ng" index="1zClus">
        <property id="3497141547781541445" name="minor" index="2OjLBK" />
        <property id="3497141547781541444" name="major" index="2OjLBL" />
        <child id="8108467228800445684" name="dialogImage" index="2t3ecf" />
        <child id="6108265972537182997" name="aboutScreen" index="2EqU2s" />
        <child id="6108265972537182996" name="splashScreen" index="2EqU2t" />
        <child id="6108265972537229337" name="buildNumber" index="2EteIg" />
        <child id="6108265972537229339" name="icon16" index="2EteIi" />
        <child id="6108265972537229338" name="icon32" index="2EteIj" />
        <child id="6108265972537229340" name="icon32opaque" index="2EteIl" />
        <child id="6108265972537372847" name="shortName" index="2EtHGA" />
        <child id="6108265972537372848" name="fullName" index="2EtHGT" />
        <child id="8795525031433238889" name="textColor" index="HFo83" />
        <child id="3497141547781549827" name="codename" index="2OjNyQ" />
        <child id="1462305029084462472" name="buildDate" index="R$TG_" />
        <child id="772379520210716142" name="welcomeLogo" index="3vi$VU" />
      </concept>
      <concept id="4278635856200794926" name="jetbrains.mps.build.mps.structure.BuildMps_ModuleDependencyExtendLanguage" flags="ng" index="1Busua">
        <reference id="4278635856200794928" name="language" index="1Busuk" />
      </concept>
      <concept id="3189788309731981027" name="jetbrains.mps.build.mps.structure.BuildMps_ModuleSolutionRuntime" flags="ng" index="1E0d5M">
        <reference id="3189788309731981028" name="solution" index="1E0d5P" />
      </concept>
      <concept id="3189788309731840247" name="jetbrains.mps.build.mps.structure.BuildMps_Solution" flags="ng" index="1E1JtA" />
      <concept id="3189788309731840248" name="jetbrains.mps.build.mps.structure.BuildMps_Language" flags="ng" index="1E1JtD">
        <child id="3189788309731917348" name="runtime" index="1E1XAP" />
        <child id="9200313594498201639" name="generator" index="1TViLv" />
      </concept>
      <concept id="322010710375871467" name="jetbrains.mps.build.mps.structure.BuildMps_AbstractModule" flags="ng" index="3LEN3z">
        <property id="8369506495128725901" name="compact" index="BnDLt" />
        <property id="322010710375892619" name="uuid" index="3LESm3" />
        <child id="322010710375956261" name="path" index="3LF7KH" />
      </concept>
      <concept id="7259033139236285166" name="jetbrains.mps.build.mps.structure.BuildMps_ExtractedModuleDependency" flags="nn" index="1SiIV0">
        <child id="7259033139236285167" name="dependency" index="1SiIV1" />
      </concept>
    </language>
  </registry>
  <node concept="1l3spW" id="1uZsEKvtTTW">
    <property role="TrG5h" value="fsml" />
    <property role="2DA0ip" value="../../" />
    <node concept="10PD9b" id="1uZsEKvtTTX" role="10PD9s" />
    <node concept="3b7kt6" id="1uZsEKvtTTY" role="10PD9s" />
    <node concept="1zClus" id="1uZsEKvtTUb" role="3989C9">
      <property role="2OjLBK" value="0" />
      <property role="TrG5h" value="MPS" />
      <property role="2OjLBL" value="1" />
      <node concept="55IIr" id="1uZsEKvtTUc" role="3vi$VU">
        <node concept="2Ry0Ak" id="1uZsEKvtTUd" role="iGT6I">
          <property role="2Ry0Am" value="icons" />
          <node concept="2Ry0Ak" id="1uZsEKvtTUe" role="2Ry0An">
            <property role="2Ry0Am" value="logo.png" />
          </node>
        </node>
      </node>
      <node concept="3_J27D" id="1uZsEKvtTUf" role="2EteIg">
        <node concept="3Mxwey" id="1uZsEKvtTUg" role="3MwsjC">
          <ref role="3Mxwex" node="1uZsEKvtTU1" resolve="build.number" />
        </node>
      </node>
      <node concept="55IIr" id="1uZsEKvtTUh" role="2EteIi">
        <node concept="2Ry0Ak" id="1uZsEKvtTUi" role="iGT6I">
          <property role="2Ry0Am" value="icons" />
          <node concept="2Ry0Ak" id="1uZsEKvtTUj" role="2Ry0An">
            <property role="2Ry0Am" value="MPS16.png" />
          </node>
        </node>
      </node>
      <node concept="3_J27D" id="1uZsEKvtTUk" role="2EtHGA">
        <node concept="3Mxwew" id="1uZsEKvtTUl" role="3MwsjC">
          <property role="3MwjfP" value="fsml" />
        </node>
      </node>
      <node concept="3_J27D" id="1uZsEKvtTUm" role="2EtHGT">
        <node concept="3Mxwew" id="1uZsEKvtTUn" role="3MwsjC">
          <property role="3MwjfP" value="fsml" />
        </node>
      </node>
      <node concept="NbPM2" id="1uZsEKvtTUo" role="2OjNyQ">
        <node concept="3Mxwew" id="1uZsEKvtTUp" role="3MwsjC">
          <property role="3MwjfP" value="fsml" />
        </node>
      </node>
      <node concept="3_J27D" id="1uZsEKvtTUq" role="HFo83">
        <node concept="3Mxwew" id="1uZsEKvtTUr" role="3MwsjC">
          <property role="3MwjfP" value="002387" />
        </node>
      </node>
      <node concept="55IIr" id="1uZsEKvtTUs" role="2EteIj">
        <node concept="2Ry0Ak" id="1uZsEKvtTUt" role="iGT6I">
          <property role="2Ry0Am" value="icons" />
          <node concept="2Ry0Ak" id="1uZsEKvtTUu" role="2Ry0An">
            <property role="2Ry0Am" value="MPS32.png" />
          </node>
        </node>
      </node>
      <node concept="3_J27D" id="1uZsEKvtTUv" role="R$TG_">
        <node concept="3Mxwey" id="1uZsEKvtTUw" role="3MwsjC">
          <ref role="3Mxwex" node="1uZsEKvtTTZ" resolve="date" />
        </node>
      </node>
      <node concept="55IIr" id="1uZsEKvtTUx" role="2EteIl">
        <node concept="2Ry0Ak" id="1uZsEKvtTUy" role="iGT6I">
          <property role="2Ry0Am" value="icons" />
          <node concept="2Ry0Ak" id="1uZsEKvtTUz" role="2Ry0An">
            <property role="2Ry0Am" value="MPS32.png" />
          </node>
        </node>
      </node>
      <node concept="55IIr" id="1uZsEKvtTU$" role="2EqU2t">
        <node concept="2Ry0Ak" id="1uZsEKvtTU_" role="iGT6I">
          <property role="2Ry0Am" value="icons" />
          <node concept="2Ry0Ak" id="1uZsEKvtTUA" role="2Ry0An">
            <property role="2Ry0Am" value="splash.png" />
          </node>
        </node>
      </node>
      <node concept="55IIr" id="1uZsEKvtTUB" role="2EqU2s">
        <node concept="2Ry0Ak" id="1uZsEKvtTUC" role="iGT6I">
          <property role="2Ry0Am" value="icons" />
          <node concept="2Ry0Ak" id="1uZsEKvtTUD" role="2Ry0An">
            <property role="2Ry0Am" value="about.png" />
          </node>
        </node>
      </node>
      <node concept="55IIr" id="1uZsEKvtTUE" role="2t3ecf">
        <node concept="2Ry0Ak" id="1uZsEKvtTUF" role="iGT6I">
          <property role="2Ry0Am" value="icons" />
          <node concept="2Ry0Ak" id="1uZsEKvtTUG" role="2Ry0An">
            <property role="2Ry0Am" value="dialogImage.png" />
          </node>
        </node>
      </node>
    </node>
    <node concept="2kB4xC" id="1uZsEKvtTTZ" role="1l3spd">
      <property role="TrG5h" value="date" />
      <node concept="hHN3E" id="1uZsEKvtTU0" role="aVJcv">
        <property role="hHN3Y" value="yyyyMMdd" />
      </node>
    </node>
    <node concept="2kB4xC" id="1uZsEKvtTU1" role="1l3spd">
      <property role="TrG5h" value="build.number" />
      <node concept="aVJcg" id="1uZsEKvtTU2" role="aVJcv">
        <node concept="NbPM2" id="1uZsEKvtTU3" role="aVJcq">
          <node concept="3Mxwew" id="1uZsEKvtTU4" role="3MwsjC">
            <property role="3MwjfP" value="fsml-143.SNAPSHOT" />
          </node>
        </node>
      </node>
    </node>
    <node concept="398rNT" id="1uZsEKvtTU5" role="1l3spd">
      <property role="TrG5h" value="mps_home" />
    </node>
    <node concept="2sgV4H" id="1uZsEKvtTU6" role="1l3spa">
      <ref role="1l3spb" to="ffeo:1diLdO26mQ6" resolve="mpsStandalone" />
      <node concept="398BVA" id="1uZsEKvtTU7" role="2JcizS">
        <ref role="398BVh" node="1uZsEKvtTU5" resolve="mps_home" />
      </node>
    </node>
    <node concept="2sgV4H" id="1uZsEKvtTU8" role="1l3spa">
      <ref role="1l3spb" to="ffeo:5rNMDvYzelV" resolve="mpsMakePlugin" />
      <node concept="398BVA" id="1uZsEKvtTU9" role="2JcizS">
        <ref role="398BVh" node="1uZsEKvtTU5" resolve="mps_home" />
        <node concept="2Ry0Ak" id="1uZsEKvtTUa" role="iGT6I">
          <property role="2Ry0Am" value="plugins" />
        </node>
      </node>
    </node>
    <node concept="1l3spV" id="1uZsEKvtTV4" role="1l3spN">
      <node concept="3_I8Xc" id="1uZsEKvtTVc" role="39821P">
        <ref role="3_I8Xa" to="ffeo:1diLdO26H79" resolve="languages" />
      </node>
      <node concept="3_I8Xc" id="1uZsEKvtTVd" role="39821P">
        <ref role="3_I8Xa" to="ffeo:1aRUp2KiMC$" resolve="license" />
      </node>
      <node concept="398223" id="1uZsEKvtTVe" role="39821P">
        <node concept="3_J27D" id="1uZsEKvtTVf" role="Nbhlr">
          <node concept="3Mxwew" id="1uZsEKvtTVg" role="3MwsjC">
            <property role="3MwjfP" value="bin" />
          </node>
        </node>
        <node concept="3ygNvl" id="1uZsEKvtTVh" role="39821P">
          <ref role="3ygNvj" to="ffeo:3cxBkkDa4_O" resolve="bin" />
          <node concept="3LWZYx" id="1uZsEKvtTVi" role="1juEy9">
            <property role="3LWZYw" value="log.xml" />
          </node>
          <node concept="3LWZYx" id="1uZsEKvtTVj" role="1juEy9">
            <property role="3LWZYw" value="log4j.dtd" />
          </node>
        </node>
        <node concept="28jJK3" id="1uZsEKvtTVk" role="39821P">
          <node concept="1688n2" id="1uZsEKvtTVl" role="28jJR8">
            <property role="1688n6" value="g" />
            <property role="1688n3" value="\.MPS(\w+)" />
            <node concept="NbPM2" id="1uZsEKvtTVm" role="1688n0">
              <node concept="3Mxwew" id="1uZsEKvtTVn" role="3MwsjC">
                <property role="3MwjfP" value="\." />
              </node>
              <node concept="3Mxwey" id="1uZsEKvtTVo" role="3MwsjC">
                <ref role="3Mxwex" node="1uZsEKvtTU1" resolve="build.number" />
              </node>
            </node>
          </node>
          <node concept="398BVA" id="1uZsEKvtTV8" role="28jJRO">
            <ref role="398BVh" node="1uZsEKvtTU5" resolve="mps_home" />
            <node concept="2Ry0Ak" id="1uZsEKvtTV9" role="iGT6I">
              <property role="2Ry0Am" value="bin" />
              <node concept="2Ry0Ak" id="1uZsEKvtTVa" role="2Ry0An">
                <property role="2Ry0Am" value="idea.properties" />
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="398223" id="1uZsEKvtTVp" role="39821P">
        <node concept="3_J27D" id="1uZsEKvtTVq" role="Nbhlr">
          <node concept="3Mxwew" id="1uZsEKvtTVr" role="3MwsjC">
            <property role="3MwjfP" value="lib" />
          </node>
        </node>
        <node concept="3ygNvl" id="1uZsEKvtTVs" role="39821P">
          <ref role="3ygNvj" to="ffeo:1diLdO26H7f" resolve="lib" />
          <node concept="3LWZYq" id="1uZsEKvtTVt" role="1juEy9">
            <property role="3LWZYl" value="MPS-src.zip" />
          </node>
          <node concept="3LWZYq" id="1uZsEKvtTVu" role="1juEy9">
            <property role="3LWZYl" value="branding.jar" />
          </node>
        </node>
        <node concept="3981dx" id="1uZsEKvtTVv" role="39821P">
          <node concept="3_J27D" id="1uZsEKvtTVw" role="Nbhlr">
            <node concept="3Mxwew" id="1uZsEKvtTVx" role="3MwsjC">
              <property role="3MwjfP" value="branding.jar" />
            </node>
          </node>
          <node concept="1zDrgl" id="1uZsEKvtTVy" role="39821P">
            <ref role="1zDrgn" node="1uZsEKvtTUb" resolve="fsml" />
          </node>
        </node>
      </node>
      <node concept="398223" id="1uZsEKvtTVz" role="39821P">
        <node concept="3_I8Xc" id="1uZsEKvtTV$" role="39821P">
          <ref role="3_I8Xa" to="ffeo:1diLdO26H81" resolve="svn4idea" />
        </node>
        <node concept="3_I8Xc" id="1uZsEKvtTV_" role="39821P">
          <ref role="3_I8Xa" to="ffeo:1diLdO26H7T" resolve="cvsIntegration" />
        </node>
        <node concept="3_I8Xc" id="1uZsEKvtTVA" role="39821P">
          <ref role="3_I8Xa" to="ffeo:1diLdO26H8a" resolve="git4idea" />
        </node>
        <node concept="3_I8Xc" id="1uZsEKvtTVB" role="39821P">
          <ref role="3_I8Xa" to="ffeo:ymnOULBdbM" resolve="mps-core" />
        </node>
        <node concept="m$_wl" id="1uZsEKvtTVC" role="39821P">
          <ref role="m_rDy" node="1uZsEKvtTUV" resolve="fsml" />
        </node>
        <node concept="3_J27D" id="1uZsEKvtTVD" role="Nbhlr">
          <node concept="3Mxwew" id="1uZsEKvtTVE" role="3MwsjC">
            <property role="3MwjfP" value="plugins" />
          </node>
        </node>
      </node>
      <node concept="1TblL5" id="1uZsEKvtTVF" role="39821P">
        <node concept="3_J27D" id="1uZsEKvtTVG" role="1TblL3">
          <node concept="3Mxwew" id="1uZsEKvtTVH" role="3MwsjC">
            <property role="3MwjfP" value="build.number" />
          </node>
        </node>
        <node concept="1TblLo" id="1uZsEKvtTVI" role="1TblLl">
          <property role="1TblLn" value="build.number" />
          <node concept="NbPM2" id="1uZsEKvtTVJ" role="1TblLm">
            <node concept="3Mxwey" id="1uZsEKvtTVK" role="3MwsjC">
              <ref role="3Mxwex" node="1uZsEKvtTU1" resolve="build.number" />
            </node>
          </node>
        </node>
        <node concept="1TblLo" id="1uZsEKvtTVL" role="1TblLl">
          <property role="1TblLn" value="date" />
          <node concept="NbPM2" id="1uZsEKvtTVM" role="1TblLm">
            <node concept="3Mxwey" id="1uZsEKvtTVN" role="3MwsjC">
              <ref role="3Mxwex" node="1uZsEKvtTTZ" resolve="date" />
            </node>
          </node>
        </node>
        <node concept="1TblLo" id="1uZsEKvtTVO" role="1TblLl">
          <property role="1TblLn" value="version" />
          <node concept="NbPM2" id="1uZsEKvtTVP" role="1TblLm">
            <node concept="3Mxwew" id="1uZsEKvtTVQ" role="3MwsjC">
              <property role="3MwjfP" value="1.0" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="m$_wf" id="1uZsEKvtTUV" role="3989C9">
      <property role="m$_wk" value="fsml" />
      <node concept="3_J27D" id="1uZsEKvtTUW" role="m$_yQ">
        <node concept="3Mxwew" id="1uZsEKvtTUX" role="3MwsjC">
          <property role="3MwjfP" value="fsml" />
        </node>
      </node>
      <node concept="3_J27D" id="1uZsEKvtTUY" role="m$_w8">
        <node concept="3Mxwew" id="1uZsEKvtTUZ" role="3MwsjC">
          <property role="3MwjfP" value="1.0" />
        </node>
      </node>
      <node concept="m$f5U" id="1uZsEKvtTV0" role="m$_yh">
        <ref role="m$f5T" node="1uZsEKvtTUU" resolve="fsml" />
      </node>
      <node concept="m$_yC" id="1uZsEKvtTV1" role="m$_yJ">
        <ref role="m$_y1" to="ffeo:4k71ibbKLe8" resolve="jetbrains.mps.core" />
      </node>
      <node concept="3_J27D" id="1uZsEKvtTV2" role="m_cZH">
        <node concept="3Mxwew" id="1uZsEKvtTV3" role="3MwsjC">
          <property role="3MwjfP" value="fsml" />
        </node>
      </node>
    </node>
    <node concept="2G$12M" id="1uZsEKvtTUU" role="3989C9">
      <property role="TrG5h" value="fsml" />
      <node concept="1E1JtD" id="1uZsEKvtTUM" role="2G$12L">
        <property role="BnDLt" value="true" />
        <property role="TrG5h" value="fsml" />
        <property role="3LESm3" value="1e0d5fd6-c07a-4df5-9c9b-c73735ba6c37" />
        <property role="2GAjPV" value="false" />
        <node concept="55IIr" id="1uZsEKvtTUH" role="3LF7KH">
          <node concept="2Ry0Ak" id="1uZsEKvtTUI" role="iGT6I">
            <property role="2Ry0Am" value="languages" />
            <node concept="2Ry0Ak" id="1uZsEKvtTUJ" role="2Ry0An">
              <property role="2Ry0Am" value="fsml" />
              <node concept="2Ry0Ak" id="1uZsEKvtTUK" role="2Ry0An">
                <property role="2Ry0Am" value="fsml.mpl" />
              </node>
            </node>
          </node>
        </node>
        <node concept="1SiIV0" id="1uZsEKvtVY3" role="3bR37C">
          <node concept="3bR9La" id="1uZsEKvtVY4" role="1SiIV1">
            <property role="3bR36h" value="false" />
            <ref role="3bR37D" node="1uZsEKvtTUT" resolve="fsml.runtime" />
          </node>
        </node>
        <node concept="1SiIV0" id="1uZsEKvtVY5" role="3bR37C">
          <node concept="3bR9La" id="1uZsEKvtVY6" role="1SiIV1">
            <property role="3bR36h" value="false" />
            <ref role="3bR37D" to="ffeo:7Kfy9QB6LfQ" resolve="jetbrains.mps.kernel" />
          </node>
        </node>
        <node concept="1E0d5M" id="1uZsEKvtVY7" role="1E1XAP">
          <ref role="1E0d5P" node="1uZsEKvtTUT" resolve="fsml.runtime" />
        </node>
        <node concept="1SiIV0" id="1uZsEKvtVY8" role="3bR37C">
          <node concept="1Busua" id="1uZsEKvtVY9" role="1SiIV1">
            <ref role="1Busuk" to="ffeo:7Kfy9QB6KYb" resolve="jetbrains.mps.baseLanguage" />
          </node>
        </node>
        <node concept="1yeLz9" id="1uZsEKvtVYa" role="1TViLv">
          <property role="TrG5h" value="fsml#7850929120050058963" />
          <property role="3LESm3" value="f20f8655-a0cb-4647-a9ef-7e416845fed3" />
          <property role="2GAjPV" value="false" />
          <node concept="1SiIV0" id="1uZsEKvtVYb" role="3bR37C">
            <node concept="3bR9La" id="1uZsEKvtVYc" role="1SiIV1">
              <property role="3bR36h" value="false" />
              <ref role="3bR37D" to="ffeo:7Kfy9QB6KXW" resolve="jetbrains.mps.lang.core" />
            </node>
          </node>
        </node>
      </node>
      <node concept="1E1JtA" id="1uZsEKvtTUT" role="2G$12L">
        <property role="BnDLt" value="true" />
        <property role="TrG5h" value="fsml.runtime" />
        <property role="3LESm3" value="878f9fc2-8329-46b7-81d8-f91074dcb3cc" />
        <property role="2GAjPV" value="false" />
        <node concept="55IIr" id="1uZsEKvtTUN" role="3LF7KH">
          <node concept="2Ry0Ak" id="1uZsEKvtTUO" role="iGT6I">
            <property role="2Ry0Am" value="languages" />
            <node concept="2Ry0Ak" id="1uZsEKvtTUP" role="2Ry0An">
              <property role="2Ry0Am" value="fsml" />
              <node concept="2Ry0Ak" id="1uZsEKvtTUQ" role="2Ry0An">
                <property role="2Ry0Am" value="runtime" />
                <node concept="2Ry0Ak" id="1uZsEKvtTUR" role="2Ry0An">
                  <property role="2Ry0Am" value="fsml.runtime.msd" />
                </node>
              </node>
            </node>
          </node>
        </node>
        <node concept="1SiIV0" id="1uZsEKvtTVR" role="3bR37C">
          <node concept="3bR9La" id="1uZsEKvtTVS" role="1SiIV1">
            <property role="3bR36h" value="true" />
            <ref role="3bR37D" to="ffeo:mXGwHwhVPj" resolve="JDK" />
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="1l3spW" id="1uZsEKvtTVY">
    <property role="TrG5h" value="fsmlDistribution" />
    <property role="turDy" value="buildDistribution.xml" />
    <property role="2DA0ip" value="../../" />
    <node concept="2sgV4H" id="1uZsEKvtTVZ" role="1l3spa">
      <ref role="1l3spb" node="1uZsEKvtTTW" resolve="fsml" />
    </node>
    <node concept="1l3spV" id="1uZsEKvtTW0" role="1l3spN">
      <node concept="1tmT9g" id="1uZsEKvtTWI" role="39821P">
        <property role="AB_bT" value="gzip" />
        <node concept="398223" id="1uZsEKvtTWJ" role="39821P">
          <node concept="3ygNvl" id="1uZsEKvtTWK" role="39821P">
            <ref role="3ygNvj" node="1uZsEKvtTV4" />
          </node>
          <node concept="398223" id="1uZsEKvtTWL" role="39821P">
            <node concept="28jJK3" id="1uZsEKvtTWM" role="39821P">
              <property role="28jJZ5" value="755" />
              <node concept="398BVA" id="1uZsEKvtTWc" role="28jJRO">
                <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                <node concept="2Ry0Ak" id="1uZsEKvtTWd" role="iGT6I">
                  <property role="2Ry0Am" value="bin" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTWe" role="2Ry0An">
                    <property role="2Ry0Am" value="linux" />
                    <node concept="2Ry0Ak" id="1uZsEKvtTWf" role="2Ry0An">
                      <property role="2Ry0Am" value="fsnotifier" />
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="28jJK3" id="1uZsEKvtTWN" role="39821P">
              <property role="28jJZ5" value="755" />
              <node concept="398BVA" id="1uZsEKvtTWk" role="28jJRO">
                <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                <node concept="2Ry0Ak" id="1uZsEKvtTWl" role="iGT6I">
                  <property role="2Ry0Am" value="bin" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTWm" role="2Ry0An">
                    <property role="2Ry0Am" value="linux" />
                    <node concept="2Ry0Ak" id="1uZsEKvtTWn" role="2Ry0An">
                      <property role="2Ry0Am" value="fsnotifier64" />
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="28jJK3" id="1uZsEKvtTWO" role="39821P">
              <node concept="3co7Ac" id="1uZsEKvtTWP" role="28jJR8">
                <property role="3co7Am" value="lf" />
                <property role="3cpA_W" value="true" />
              </node>
              <node concept="398BVA" id="1uZsEKvtTWr" role="28jJRO">
                <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                <node concept="2Ry0Ak" id="1uZsEKvtTWs" role="iGT6I">
                  <property role="2Ry0Am" value="bin" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTWt" role="2Ry0An">
                    <property role="2Ry0Am" value="mps.vmoptions" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="28jJK3" id="1uZsEKvtTWQ" role="39821P">
              <node concept="3co7Ac" id="1uZsEKvtTWR" role="28jJR8">
                <property role="3co7Am" value="lf" />
                <property role="3cpA_W" value="true" />
              </node>
              <node concept="398BVA" id="1uZsEKvtTWx" role="28jJRO">
                <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                <node concept="2Ry0Ak" id="1uZsEKvtTWy" role="iGT6I">
                  <property role="2Ry0Am" value="bin" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTWz" role="2Ry0An">
                    <property role="2Ry0Am" value="mps64.vmoptions" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="2HvfSZ" id="1uZsEKvtTWS" role="39821P">
              <node concept="3LWZYq" id="1uZsEKvtTWT" role="2HvfZ1">
                <property role="3LWZYl" value="**/fsnotifier" />
              </node>
              <node concept="3LWZYq" id="1uZsEKvtTWU" role="2HvfZ1">
                <property role="3LWZYl" value="**/fsnotifier64" />
              </node>
              <node concept="398BVA" id="1uZsEKvtTWB" role="2HvfZ0">
                <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                <node concept="2Ry0Ak" id="1uZsEKvtTWC" role="iGT6I">
                  <property role="2Ry0Am" value="bin" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTWD" role="2Ry0An">
                    <property role="2Ry0Am" value="linux" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="3_J27D" id="1uZsEKvtTWV" role="Nbhlr">
              <node concept="3Mxwew" id="1uZsEKvtTWW" role="3MwsjC">
                <property role="3MwjfP" value="bin" />
              </node>
            </node>
          </node>
          <node concept="28jJK3" id="1uZsEKvtTWX" role="39821P">
            <property role="28jJZ5" value="755" />
            <node concept="3co7Ac" id="1uZsEKvtTWY" role="28jJR8">
              <property role="3co7Am" value="lf" />
              <property role="3cpA_W" value="true" />
            </node>
            <node concept="398BVA" id="1uZsEKvtTWG" role="28jJRO">
              <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
              <node concept="2Ry0Ak" id="1uZsEKvtTWH" role="iGT6I">
                <property role="2Ry0Am" value="mps.sh" />
              </node>
            </node>
          </node>
          <node concept="3_J27D" id="1uZsEKvtTWZ" role="Nbhlr">
            <node concept="3Mxwew" id="1uZsEKvtTX0" role="3MwsjC">
              <property role="3MwjfP" value="fsml " />
            </node>
            <node concept="3Mxwey" id="1uZsEKvtTX1" role="3MwsjC">
              <ref role="3Mxwex" node="1uZsEKvtTW2" resolve="version" />
            </node>
          </node>
        </node>
        <node concept="3_J27D" id="1uZsEKvtTX2" role="Nbhlr">
          <node concept="3Mxwey" id="1uZsEKvtTX3" role="3MwsjC">
            <ref role="3Mxwex" node="1uZsEKvtTU1" resolve="build.number" />
          </node>
          <node concept="3Mxwew" id="1uZsEKvtTX4" role="3MwsjC">
            <property role="3MwjfP" value="-linux.tar.gz" />
          </node>
        </node>
      </node>
      <node concept="3981dG" id="1uZsEKvtTZz" role="39821P">
        <node concept="398223" id="1uZsEKvtTZ$" role="39821P">
          <node concept="3ygNvl" id="1uZsEKvtTZ_" role="39821P">
            <ref role="3ygNvj" node="1uZsEKvtTV4" />
          </node>
          <node concept="398223" id="1uZsEKvtTZA" role="39821P">
            <node concept="3_J27D" id="1uZsEKvtTZB" role="Nbhlr">
              <node concept="3Mxwew" id="1uZsEKvtTZC" role="3MwsjC">
                <property role="3MwjfP" value="bin" />
              </node>
            </node>
            <node concept="28jJK3" id="1uZsEKvtTZD" role="39821P">
              <node concept="398BVA" id="1uZsEKvtTX8" role="28jJRO">
                <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                <node concept="2Ry0Ak" id="1uZsEKvtTX9" role="iGT6I">
                  <property role="2Ry0Am" value="bin" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTXa" role="2Ry0An">
                    <property role="2Ry0Am" value="mps.vmoptions" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="28jJK3" id="1uZsEKvtTZE" role="39821P">
              <node concept="398BVA" id="1uZsEKvtTXe" role="28jJRO">
                <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                <node concept="2Ry0Ak" id="1uZsEKvtTXf" role="iGT6I">
                  <property role="2Ry0Am" value="bin" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTXg" role="2Ry0An">
                    <property role="2Ry0Am" value="mps.exe.vmoptions" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="28jJK3" id="1uZsEKvtTZF" role="39821P">
              <node concept="398BVA" id="1uZsEKvtTXk" role="28jJRO">
                <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                <node concept="2Ry0Ak" id="1uZsEKvtTXl" role="iGT6I">
                  <property role="2Ry0Am" value="bin" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTXm" role="2Ry0An">
                    <property role="2Ry0Am" value="mps64.vmoptions" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="28jJK3" id="1uZsEKvtTZG" role="39821P">
              <node concept="398BVA" id="1uZsEKvtTXq" role="28jJRO">
                <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                <node concept="2Ry0Ak" id="1uZsEKvtTXr" role="iGT6I">
                  <property role="2Ry0Am" value="bin" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTXs" role="2Ry0An">
                    <property role="2Ry0Am" value="mps64.exe.vmoptions" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="398223" id="1uZsEKvtTZH" role="39821P">
              <node concept="3_J27D" id="1uZsEKvtTZI" role="Nbhlr">
                <node concept="3Mxwew" id="1uZsEKvtTZJ" role="3MwsjC">
                  <property role="3MwjfP" value="win" />
                </node>
              </node>
              <node concept="2HvfSZ" id="1uZsEKvtTZK" role="39821P">
                <node concept="3LWZYq" id="1uZsEKvtTZL" role="2HvfZ1">
                  <property role="3LWZYl" value="**/*.exe" />
                </node>
                <node concept="398BVA" id="1uZsEKvtTXw" role="2HvfZ0">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTXx" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtTXy" role="2Ry0An">
                      <property role="2Ry0Am" value="win" />
                    </node>
                  </node>
                </node>
              </node>
              <node concept="yKbIv" id="1uZsEKvtTZM" role="39821P">
                <property role="yKbIr" value="755" />
                <node concept="2HvfSZ" id="1uZsEKvtTZN" role="39821P">
                  <node concept="3LWZYx" id="1uZsEKvtTZO" role="2HvfZ1">
                    <property role="3LWZYw" value="**/*.exe" />
                  </node>
                  <node concept="398BVA" id="1uZsEKvtTXA" role="2HvfZ0">
                    <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                    <node concept="2Ry0Ak" id="1uZsEKvtTXB" role="iGT6I">
                      <property role="2Ry0Am" value="bin" />
                      <node concept="2Ry0Ak" id="1uZsEKvtTXC" role="2Ry0An">
                        <property role="2Ry0Am" value="win" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="398223" id="1uZsEKvtTZP" role="39821P">
              <node concept="2HvfSZ" id="1uZsEKvtTZQ" role="39821P">
                <node concept="3LWZYq" id="1uZsEKvtTZR" role="2HvfZ1">
                  <property role="3LWZYl" value="**/fsnotifier" />
                </node>
                <node concept="3LWZYq" id="1uZsEKvtTZS" role="2HvfZ1">
                  <property role="3LWZYl" value="**/fsnotifier64" />
                </node>
                <node concept="398BVA" id="1uZsEKvtTXG" role="2HvfZ0">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTXH" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtTXI" role="2Ry0An">
                      <property role="2Ry0Am" value="linux" />
                    </node>
                  </node>
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtTZT" role="39821P">
                <property role="28jJZ5" value="755" />
                <node concept="398BVA" id="1uZsEKvtTXN" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTXO" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtTXP" role="2Ry0An">
                      <property role="2Ry0Am" value="linux" />
                      <node concept="2Ry0Ak" id="1uZsEKvtTXQ" role="2Ry0An">
                        <property role="2Ry0Am" value="fsnotifier" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtTZU" role="39821P">
                <property role="28jJZ5" value="755" />
                <node concept="398BVA" id="1uZsEKvtTXV" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTXW" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtTXX" role="2Ry0An">
                      <property role="2Ry0Am" value="linux" />
                      <node concept="2Ry0Ak" id="1uZsEKvtTXY" role="2Ry0An">
                        <property role="2Ry0Am" value="fsnotifier64" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="3_J27D" id="1uZsEKvtTZV" role="Nbhlr">
                <node concept="3Mxwew" id="1uZsEKvtTZW" role="3MwsjC">
                  <property role="3MwjfP" value="linux" />
                </node>
              </node>
            </node>
            <node concept="398223" id="1uZsEKvtTZX" role="39821P">
              <node concept="yKbIv" id="1uZsEKvtTZY" role="39821P">
                <property role="yKbIr" value="755" />
                <node concept="2HvfSZ" id="1uZsEKvtTZZ" role="39821P">
                  <node concept="398BVA" id="1uZsEKvtTY2" role="2HvfZ0">
                    <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                    <node concept="2Ry0Ak" id="1uZsEKvtTY3" role="iGT6I">
                      <property role="2Ry0Am" value="bin" />
                      <node concept="2Ry0Ak" id="1uZsEKvtTY4" role="2Ry0An">
                        <property role="2Ry0Am" value="nix" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="3_J27D" id="1uZsEKvtU00" role="Nbhlr">
                <node concept="3Mxwew" id="1uZsEKvtU01" role="3MwsjC">
                  <property role="3MwjfP" value="nix" />
                </node>
              </node>
            </node>
            <node concept="398223" id="1uZsEKvtU02" role="39821P">
              <node concept="28jJK3" id="1uZsEKvtU03" role="39821P">
                <node concept="398BVA" id="1uZsEKvtTY9" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTYa" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtTYb" role="2Ry0An">
                      <property role="2Ry0Am" value="mac" />
                      <node concept="2Ry0Ak" id="1uZsEKvtTYc" role="2Ry0An">
                        <property role="2Ry0Am" value="libbreakgen.jnilib" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtU04" role="39821P">
                <node concept="398BVA" id="1uZsEKvtTYh" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTYi" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtTYj" role="2Ry0An">
                      <property role="2Ry0Am" value="mac" />
                      <node concept="2Ry0Ak" id="1uZsEKvtTYk" role="2Ry0An">
                        <property role="2Ry0Am" value="libbreakgen64.jnilib" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtU05" role="39821P">
                <property role="28jJZ5" value="755" />
                <node concept="398BVA" id="1uZsEKvtTYp" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTYq" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtTYr" role="2Ry0An">
                      <property role="2Ry0Am" value="mac" />
                      <node concept="2Ry0Ak" id="1uZsEKvtTYs" role="2Ry0An">
                        <property role="2Ry0Am" value="restarter" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtU06" role="39821P">
                <property role="28jJZ5" value="755" />
                <node concept="398BVA" id="1uZsEKvtTYx" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTYy" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtTYz" role="2Ry0An">
                      <property role="2Ry0Am" value="mac" />
                      <node concept="2Ry0Ak" id="1uZsEKvtTY$" role="2Ry0An">
                        <property role="2Ry0Am" value="fsnotifier" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtU07" role="39821P">
                <property role="28jJZ5" value="755" />
                <node concept="398BVA" id="1uZsEKvtTYD" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtTYE" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtTYF" role="2Ry0An">
                      <property role="2Ry0Am" value="mac" />
                      <node concept="2Ry0Ak" id="1uZsEKvtTYG" role="2Ry0An">
                        <property role="2Ry0Am" value="printenv.py" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="398223" id="1uZsEKvtU08" role="39821P">
                <node concept="3_J27D" id="1uZsEKvtU09" role="Nbhlr">
                  <node concept="3Mxwew" id="1uZsEKvtU0a" role="3MwsjC">
                    <property role="3MwjfP" value="Contents" />
                  </node>
                </node>
                <node concept="398223" id="1uZsEKvtU0b" role="39821P">
                  <node concept="3_J27D" id="1uZsEKvtU0c" role="Nbhlr">
                    <node concept="3Mxwew" id="1uZsEKvtU0d" role="3MwsjC">
                      <property role="3MwjfP" value="Resources" />
                    </node>
                  </node>
                  <node concept="28jJK3" id="1uZsEKvtU0e" role="39821P">
                    <node concept="398BVA" id="1uZsEKvtTYN" role="28jJRO">
                      <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                      <node concept="2Ry0Ak" id="1uZsEKvtTYO" role="iGT6I">
                        <property role="2Ry0Am" value="bin" />
                        <node concept="2Ry0Ak" id="1uZsEKvtTYP" role="2Ry0An">
                          <property role="2Ry0Am" value="mac" />
                          <node concept="2Ry0Ak" id="1uZsEKvtTYQ" role="2Ry0An">
                            <property role="2Ry0Am" value="Contents" />
                            <node concept="2Ry0Ak" id="1uZsEKvtTYR" role="2Ry0An">
                              <property role="2Ry0Am" value="Resources" />
                              <node concept="2Ry0Ak" id="1uZsEKvtTYS" role="2Ry0An">
                                <property role="2Ry0Am" value="mps.icns" />
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="398223" id="1uZsEKvtU0f" role="39821P">
                  <node concept="3_J27D" id="1uZsEKvtU0g" role="Nbhlr">
                    <node concept="3Mxwew" id="1uZsEKvtU0h" role="3MwsjC">
                      <property role="3MwjfP" value="MacOS" />
                    </node>
                  </node>
                  <node concept="28jJK3" id="1uZsEKvtU0i" role="39821P">
                    <property role="28jJZ5" value="755" />
                    <node concept="398BVA" id="1uZsEKvtTYZ" role="28jJRO">
                      <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                      <node concept="2Ry0Ak" id="1uZsEKvtTZ0" role="iGT6I">
                        <property role="2Ry0Am" value="bin" />
                        <node concept="2Ry0Ak" id="1uZsEKvtTZ1" role="2Ry0An">
                          <property role="2Ry0Am" value="mac" />
                          <node concept="2Ry0Ak" id="1uZsEKvtTZ2" role="2Ry0An">
                            <property role="2Ry0Am" value="Contents" />
                            <node concept="2Ry0Ak" id="1uZsEKvtTZ3" role="2Ry0An">
                              <property role="2Ry0Am" value="MacOS" />
                              <node concept="2Ry0Ak" id="1uZsEKvtTZ4" role="2Ry0An">
                                <property role="2Ry0Am" value="mps" />
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="28jJK3" id="1uZsEKvtU0j" role="39821P">
                    <property role="28jJZ5" value="644" />
                    <node concept="398BVA" id="1uZsEKvtTZb" role="28jJRO">
                      <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                      <node concept="2Ry0Ak" id="1uZsEKvtTZc" role="iGT6I">
                        <property role="2Ry0Am" value="bin" />
                        <node concept="2Ry0Ak" id="1uZsEKvtTZd" role="2Ry0An">
                          <property role="2Ry0Am" value="mac" />
                          <node concept="2Ry0Ak" id="1uZsEKvtTZe" role="2Ry0An">
                            <property role="2Ry0Am" value="Contents" />
                            <node concept="2Ry0Ak" id="1uZsEKvtTZf" role="2Ry0An">
                              <property role="2Ry0Am" value="MacOS" />
                              <node concept="2Ry0Ak" id="1uZsEKvtTZg" role="2Ry0An">
                                <property role="2Ry0Am" value="idea_appLauncher" />
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="28jJK3" id="1uZsEKvtU0k" role="39821P">
                  <node concept="398BVA" id="1uZsEKvtTZm" role="28jJRO">
                    <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                    <node concept="2Ry0Ak" id="1uZsEKvtTZn" role="iGT6I">
                      <property role="2Ry0Am" value="bin" />
                      <node concept="2Ry0Ak" id="1uZsEKvtTZo" role="2Ry0An">
                        <property role="2Ry0Am" value="mac" />
                        <node concept="2Ry0Ak" id="1uZsEKvtTZp" role="2Ry0An">
                          <property role="2Ry0Am" value="Contents" />
                          <node concept="2Ry0Ak" id="1uZsEKvtTZq" role="2Ry0An">
                            <property role="2Ry0Am" value="Info.plist" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="3_J27D" id="1uZsEKvtU0l" role="Nbhlr">
                <node concept="3Mxwew" id="1uZsEKvtU0m" role="3MwsjC">
                  <property role="3MwjfP" value="mac" />
                </node>
              </node>
            </node>
          </node>
          <node concept="28jJK3" id="1uZsEKvtU0n" role="39821P">
            <property role="28jJZ5" value="755" />
            <node concept="398BVA" id="1uZsEKvtTZt" role="28jJRO">
              <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
              <node concept="2Ry0Ak" id="1uZsEKvtTZu" role="iGT6I">
                <property role="2Ry0Am" value="mps.sh" />
              </node>
            </node>
          </node>
          <node concept="28jJK3" id="1uZsEKvtU0o" role="39821P">
            <property role="28jJZ5" value="755" />
            <node concept="398BVA" id="1uZsEKvtTZx" role="28jJRO">
              <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
              <node concept="2Ry0Ak" id="1uZsEKvtTZy" role="iGT6I">
                <property role="2Ry0Am" value="mps.bat" />
              </node>
            </node>
          </node>
          <node concept="3_J27D" id="1uZsEKvtU0p" role="Nbhlr">
            <node concept="3Mxwew" id="1uZsEKvtU0q" role="3MwsjC">
              <property role="3MwjfP" value="fsml " />
            </node>
            <node concept="3Mxwey" id="1uZsEKvtU0r" role="3MwsjC">
              <ref role="3Mxwex" node="1uZsEKvtTW2" resolve="version" />
            </node>
          </node>
        </node>
        <node concept="3_J27D" id="1uZsEKvtU0s" role="Nbhlr">
          <node concept="3Mxwey" id="1uZsEKvtU0t" role="3MwsjC">
            <ref role="3Mxwex" node="1uZsEKvtTU1" resolve="build.number" />
          </node>
          <node concept="3Mxwew" id="1uZsEKvtU0u" role="3MwsjC">
            <property role="3MwjfP" value=".zip" />
          </node>
        </node>
      </node>
      <node concept="3981dG" id="1uZsEKvtU25" role="39821P">
        <node concept="3_J27D" id="1uZsEKvtU26" role="Nbhlr">
          <node concept="3Mxwey" id="1uZsEKvtU27" role="3MwsjC">
            <ref role="3Mxwex" node="1uZsEKvtTU1" resolve="build.number" />
          </node>
          <node concept="3Mxwew" id="1uZsEKvtU28" role="3MwsjC">
            <property role="3MwjfP" value="-macos.zip" />
          </node>
        </node>
        <node concept="398223" id="1uZsEKvtU29" role="39821P">
          <node concept="398223" id="1uZsEKvtU2a" role="39821P">
            <node concept="3ygNvl" id="1uZsEKvtU2b" role="39821P">
              <ref role="3ygNvj" node="1uZsEKvtTV4" />
            </node>
            <node concept="3_J27D" id="1uZsEKvtU2c" role="Nbhlr">
              <node concept="3Mxwew" id="1uZsEKvtU2d" role="3MwsjC">
                <property role="3MwjfP" value="Contents" />
              </node>
            </node>
            <node concept="398223" id="1uZsEKvtU2e" role="39821P">
              <node concept="3_J27D" id="1uZsEKvtU2f" role="Nbhlr">
                <node concept="3Mxwew" id="1uZsEKvtU2g" role="3MwsjC">
                  <property role="3MwjfP" value="Resources" />
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtU2h" role="39821P">
                <node concept="398BVA" id="1uZsEKvtU0_" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtU0A" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtU0B" role="2Ry0An">
                      <property role="2Ry0Am" value="mac" />
                      <node concept="2Ry0Ak" id="1uZsEKvtU0C" role="2Ry0An">
                        <property role="2Ry0Am" value="Contents" />
                        <node concept="2Ry0Ak" id="1uZsEKvtU0D" role="2Ry0An">
                          <property role="2Ry0Am" value="Resources" />
                          <node concept="2Ry0Ak" id="1uZsEKvtU0E" role="2Ry0An">
                            <property role="2Ry0Am" value="mps.icns" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="398223" id="1uZsEKvtU2i" role="39821P">
              <node concept="28jJK3" id="1uZsEKvtU2j" role="39821P">
                <property role="28jJZ5" value="755" />
                <node concept="398BVA" id="1uZsEKvtU0L" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtU0M" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtU0N" role="2Ry0An">
                      <property role="2Ry0Am" value="mac" />
                      <node concept="2Ry0Ak" id="1uZsEKvtU0O" role="2Ry0An">
                        <property role="2Ry0Am" value="Contents" />
                        <node concept="2Ry0Ak" id="1uZsEKvtU0P" role="2Ry0An">
                          <property role="2Ry0Am" value="MacOS" />
                          <node concept="2Ry0Ak" id="1uZsEKvtU0Q" role="2Ry0An">
                            <property role="2Ry0Am" value="mps" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="3_J27D" id="1uZsEKvtU2k" role="Nbhlr">
                <node concept="3Mxwew" id="1uZsEKvtU2l" role="3MwsjC">
                  <property role="3MwjfP" value="MacOS" />
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtU2m" role="39821P">
                <property role="28jJZ5" value="644" />
                <node concept="398BVA" id="1uZsEKvtU0X" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtU0Y" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtU0Z" role="2Ry0An">
                      <property role="2Ry0Am" value="mac" />
                      <node concept="2Ry0Ak" id="1uZsEKvtU10" role="2Ry0An">
                        <property role="2Ry0Am" value="Contents" />
                        <node concept="2Ry0Ak" id="1uZsEKvtU11" role="2Ry0An">
                          <property role="2Ry0Am" value="MacOS" />
                          <node concept="2Ry0Ak" id="1uZsEKvtU12" role="2Ry0An">
                            <property role="2Ry0Am" value="idea_appLauncher" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="28jJK3" id="1uZsEKvtU2n" role="39821P">
              <node concept="398BVA" id="1uZsEKvtU18" role="28jJRO">
                <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                <node concept="2Ry0Ak" id="1uZsEKvtU19" role="iGT6I">
                  <property role="2Ry0Am" value="bin" />
                  <node concept="2Ry0Ak" id="1uZsEKvtU1a" role="2Ry0An">
                    <property role="2Ry0Am" value="mac" />
                    <node concept="2Ry0Ak" id="1uZsEKvtU1b" role="2Ry0An">
                      <property role="2Ry0Am" value="Contents" />
                      <node concept="2Ry0Ak" id="1uZsEKvtU1c" role="2Ry0An">
                        <property role="2Ry0Am" value="Info.plist" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="398223" id="1uZsEKvtU2o" role="39821P">
              <node concept="3_J27D" id="1uZsEKvtU2p" role="Nbhlr">
                <node concept="3Mxwew" id="1uZsEKvtU2q" role="3MwsjC">
                  <property role="3MwjfP" value="bin" />
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtU2r" role="39821P">
                <node concept="398BVA" id="1uZsEKvtU1h" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtU1i" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtU1j" role="2Ry0An">
                      <property role="2Ry0Am" value="mac" />
                      <node concept="2Ry0Ak" id="1uZsEKvtU1k" role="2Ry0An">
                        <property role="2Ry0Am" value="libbreakgen.jnilib" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtU2s" role="39821P">
                <node concept="398BVA" id="1uZsEKvtU1p" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtU1q" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtU1r" role="2Ry0An">
                      <property role="2Ry0Am" value="mac" />
                      <node concept="2Ry0Ak" id="1uZsEKvtU1s" role="2Ry0An">
                        <property role="2Ry0Am" value="libbreakgen64.jnilib" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtU2t" role="39821P">
                <property role="28jJZ5" value="755" />
                <node concept="398BVA" id="1uZsEKvtU1x" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtU1y" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtU1z" role="2Ry0An">
                      <property role="2Ry0Am" value="mac" />
                      <node concept="2Ry0Ak" id="1uZsEKvtU1$" role="2Ry0An">
                        <property role="2Ry0Am" value="restarter" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtU2u" role="39821P">
                <property role="28jJZ5" value="755" />
                <node concept="398BVA" id="1uZsEKvtU1D" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtU1E" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtU1F" role="2Ry0An">
                      <property role="2Ry0Am" value="mac" />
                      <node concept="2Ry0Ak" id="1uZsEKvtU1G" role="2Ry0An">
                        <property role="2Ry0Am" value="fsnotifier" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtU2v" role="39821P">
                <node concept="3co7Ac" id="1uZsEKvtU2w" role="28jJR8">
                  <property role="3co7Am" value="lf" />
                  <property role="3cpA_W" value="true" />
                </node>
                <node concept="398BVA" id="1uZsEKvtU1K" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtU1L" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtU1M" role="2Ry0An">
                      <property role="2Ry0Am" value="mps.vmoptions" />
                    </node>
                  </node>
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtU2x" role="39821P">
                <node concept="3co7Ac" id="1uZsEKvtU2y" role="28jJR8">
                  <property role="3co7Am" value="lf" />
                  <property role="3cpA_W" value="true" />
                </node>
                <node concept="398BVA" id="1uZsEKvtU1Q" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtU1R" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtU1S" role="2Ry0An">
                      <property role="2Ry0Am" value="mps64.vmoptions" />
                    </node>
                  </node>
                </node>
              </node>
              <node concept="28jJK3" id="1uZsEKvtU2z" role="39821P">
                <property role="28jJZ5" value="755" />
                <node concept="3co7Ac" id="1uZsEKvtU2$" role="28jJR8">
                  <property role="3co7Am" value="lf" />
                  <property role="3cpA_W" value="true" />
                </node>
                <node concept="398BVA" id="1uZsEKvtU1X" role="28jJRO">
                  <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                  <node concept="2Ry0Ak" id="1uZsEKvtU1Y" role="iGT6I">
                    <property role="2Ry0Am" value="bin" />
                    <node concept="2Ry0Ak" id="1uZsEKvtU1Z" role="2Ry0An">
                      <property role="2Ry0Am" value="mac" />
                      <node concept="2Ry0Ak" id="1uZsEKvtU20" role="2Ry0An">
                        <property role="2Ry0Am" value="printenv.py" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="28jJK3" id="1uZsEKvtU2_" role="39821P">
              <property role="28jJZ5" value="755" />
              <node concept="3co7Ac" id="1uZsEKvtU2A" role="28jJR8">
                <property role="3co7Am" value="lf" />
                <property role="3cpA_W" value="true" />
              </node>
              <node concept="398BVA" id="1uZsEKvtU23" role="28jJRO">
                <ref role="398BVh" node="1uZsEKvtTW1" resolve="mps_home" />
                <node concept="2Ry0Ak" id="1uZsEKvtU24" role="iGT6I">
                  <property role="2Ry0Am" value="mps.sh" />
                </node>
              </node>
            </node>
          </node>
          <node concept="3_J27D" id="1uZsEKvtU2B" role="Nbhlr">
            <node concept="3Mxwew" id="1uZsEKvtU2C" role="3MwsjC">
              <property role="3MwjfP" value="fsml " />
            </node>
            <node concept="3Mxwey" id="1uZsEKvtU2D" role="3MwsjC">
              <ref role="3Mxwex" node="1uZsEKvtTW2" resolve="version" />
            </node>
            <node concept="3Mxwew" id="1uZsEKvtU2E" role="3MwsjC">
              <property role="3MwjfP" value=".app" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="398rNT" id="1uZsEKvtTW1" role="1l3spd">
      <property role="TrG5h" value="mps_home" />
      <node concept="55IIr" id="1uZsEKvtUOs" role="398pKh">
        <node concept="2Ry0Ak" id="1uZsEKvtUOv" role="iGT6I">
          <property role="2Ry0Am" value=".." />
          <node concept="2Ry0Ak" id="1uZsEKvtUO$" role="2Ry0An">
            <property role="2Ry0Am" value="mps" />
          </node>
        </node>
      </node>
    </node>
    <node concept="2kB4xC" id="1uZsEKvtTW2" role="1l3spd">
      <property role="TrG5h" value="version" />
      <node concept="aVJcg" id="1uZsEKvtTW3" role="aVJcv">
        <node concept="NbPM2" id="1uZsEKvtTW4" role="aVJcq">
          <node concept="3Mxwew" id="1uZsEKvtTW5" role="3MwsjC">
            <property role="3MwjfP" value="3.3.4" />
          </node>
        </node>
      </node>
    </node>
  </node>
</model>

