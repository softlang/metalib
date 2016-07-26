lazy val commonSettings = Seq(
  organization := "de.sschauss",
  version := "1.0",
  scalaVersion := "2.11.7",
  addCompilerPlugin("org.scalamacros" % "paradise_2.11.7" % "2.1.0-M5"),
  scalacOptions ++= Seq("-unchecked", "-deprecation", "-feature")
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
