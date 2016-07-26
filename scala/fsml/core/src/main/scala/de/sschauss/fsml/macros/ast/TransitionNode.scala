package de.sschauss.fsml.macros.ast

case class TransitionNode(input: String, action: Option[String], target: Option[String])
