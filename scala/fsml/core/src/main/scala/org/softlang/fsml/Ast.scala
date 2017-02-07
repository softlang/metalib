package org.softlang.fsml

case class FsmNode(states: List[StateNode])

case class StateNode(initial: Boolean, id: String, transitions: List[TransitionNode])

case class TransitionNode(event: String, action: Option[String], target: Option[String])
