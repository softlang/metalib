package de.sschauss.fsml.macros.ast

case class StateNode(initial: Boolean, id: String, transitions: List[TransitionNode])