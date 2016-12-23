package de.sschauss.fsml

case class FsmNode(states: List[StateNode])

case class StateNode(initial: Boolean, id: String, transitions: List[TransitionNode])

case class TransitionNode(input: String, action: Option[String], target: Option[String])
