lazy val commonSettings = Seq(
  organization := "de.sschauss",
  version := "2.0",
  scalaVersion := "2.12.1",
  addCompilerPlugin("org.scalameta" % "paradise_2.12.1" % "3.0.0-M7"),
  scalacOptions ++= Seq("-unchecked", "-deprecation", "-feature", "-Xplugin-require:macroparadise")
)

lazy val root = project
  .in(file("."))
  .settings(commonSettings: _*)
  .aggregate(core, test)

lazy val core = project
  .settings(commonSettings: _*)

lazy val test = project
  .settings(commonSettings: _*)
  .dependsOn(core)

lazy val app = project
  .settings(commonSettings: _*)
  .dependsOn(core)
