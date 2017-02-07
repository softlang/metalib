package org.softlang.fsml

import scala.annotation.tailrec
import scala.language.postfixOps

object Checker {

  import scala.reflect.macros.whitebox

  def check(c: whitebox.Context)(fsm: FsmNode): Unit =
    List[whitebox.Context => FsmNode => Unit](checkSingleInitial, checkReachability) foreach {
      _ (c)(fsm)
    }

  def checkSingleInitial(c: whitebox.Context)(fsm: FsmNode): Unit =
    fsm.states count {
      _.initial
    } match {
      case 0 => c.error(c.enclosingPosition, "No initial state defined")
      case 1 =>
      case _ => c.error(c.enclosingPosition, "Multiple initial states defined")
    }

  def checkReachability(c: whitebox.Context)(fsmNode: FsmNode): Unit =
    (fsmNode.states toSet) diff checkReachability(fsmNode, Set(), fsmNode.states filter {
      _.initial
    } toSet) toList match {
      case Nil =>
      case states => states foreach {
        s => c.error(c.enclosingPosition, s"unreachable state ${s.id}")
      }
    }

  @tailrec
  def checkReachability(fsm: FsmNode, visitedStates: Set[StateNode], statesToVisit: Set[StateNode]): Set[StateNode] =
    statesToVisit toList match {
      case Nil => visitedStates
      case state :: states => checkReachability(fsm, visitedStates + state, (state.transitions flatMap {
        _.target
      } flatMap { targetID =>
        fsm.states filter {
          _.id == targetID
        }
      } toSet) union (states toSet) diff (visitedStates + state))
    }

}
