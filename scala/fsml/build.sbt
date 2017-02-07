lazy val commonSettings = Seq(
  organization := "de.sschauss",
  version := "2.0",
  scalaVersion := "2.12.1",
  addCompilerPlugin("org.scalamacros" % "paradise_2.12.1" % "2.1.0"),
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

lazy val app = project
  .settings(commonSettings: _*)
  .dependsOn(core)
