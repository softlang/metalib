package org.softlang.fsml

import scala.collection.immutable.Seq

package object AST {

  case class Fsm(states: Seq[State])

  case class State(initial: Boolean, id: String, transitions: Seq[Transition])

  case class Transition(event: String, action: Option[String], target: Option[String])

}
