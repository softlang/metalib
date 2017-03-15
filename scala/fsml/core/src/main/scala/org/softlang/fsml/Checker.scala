package org.softlang.fsml

import scala.annotation.tailrec
import scala.collection.immutable.{List, Seq, Set}

object Checker {

  def check(fsm: AST.Fsm): Unit = {
    Seq[AST.Fsm => Seq[String]](checkSingleInitial, checkReachability) flatMap {
      _ (fsm)
    } match {
      case Nil =>
      case exceptions => throw new Exception(s"${exceptions.mkString("\n\t", "\n\t", "\n")}")
    }
  }

  def checkSingleInitial(fsm: AST.Fsm): Seq[String] =
    fsm.states count {
      _.initial
    } match {
      case 0 => Seq("no initial state defined")
      case 1 => Seq()
      case n => Seq(s"$n initial states defined")
    }

  def checkReachability(fsm: AST.Fsm): Seq[String] = {
    (fsm.states.toSet diff checkReachability(fsm, Set(), (fsm.states filter {
      _.initial
    }).to[Set])).to[Seq] match {
      case Nil => Seq()
      case states => states map { state => s"unreachable state ${state.id}" }
    }
  }

  @tailrec
  def checkReachability(fsm: AST.Fsm, visitedStates: Set[AST.State], statesToVisit: Set[AST.State]): Set[AST.State] =
    statesToVisit.to[List] match {
      case Nil => visitedStates
      case state :: states => checkReachability(fsm, visitedStates + state, (state.transitions flatMap {
        _.target
      } flatMap { target =>
        fsm.states filter {
          _.id == target
        }
      }).to[Set] union states.to[Set] diff (visitedStates + state))
    }

}
