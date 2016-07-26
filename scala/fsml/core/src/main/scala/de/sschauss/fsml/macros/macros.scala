package de.sschauss.fsml

import scala.annotation.tailrec

package object macros {

  import de.sschauss.fsml.macros.ast.{FsmNode, StateNode, TransitionNode}

  import scala.language.experimental.macros
  import scala.language.{implicitConversions, postfixOps}
  import scala.reflect.macros.whitebox

  def fsmMacro(c: whitebox.Context)(annottees: c.Tree*): c.Tree = (new {

    import c.universe._

    implicit val nameToString: Name => String = (ident: Name) => ident.toString

    implicit val unliftStateDefinition: Unliftable[StateNode] = Unliftable {
      case q"initial state ${id: Name} { ..${transitions: List[TransitionNode]} }" =>
        StateNode(true, id, transitions)
      case q"state ${id: Name} { ..${transitions: List[TransitionNode]} }" =>
        StateNode(false, id, transitions)
    }

    implicit val unliftTransitionExpression: Unliftable[TransitionNode] = Unliftable {
      case q"${input: Name} / ${action: Name} -> ${target: Name}" =>
        TransitionNode(input, Some(action), Some(target))
      case q"${input: Name} / ${action: Name}" =>
        TransitionNode(input, Some(action), None)
      case q"${input: Name} -> ${target: Name}" =>
        TransitionNode(input, None, Some(target))
      case q"${input: Name}" =>
        TransitionNode(input, None, None)
    }

    implicit val liftStateNode: Liftable[StateNode] = Liftable { s =>
      q"""object ${TermName(s.id)} { ..${s.transitions} }"""
    }

    implicit val liftTransitionNode: Liftable[TransitionNode] = Liftable {
      case TransitionNode(input, Some(action), Some(target)) =>
        q"def ${TermName(s"$input")} = { println($action); ${TermName(target)} }"
      case TransitionNode(input, Some(action), None) =>
        q"def ${TermName(s"$input")} = { println($action); this }"
      case TransitionNode(input, None, Some(target)) =>
        q"def ${TermName(s"$input")} = ${TermName(target)}"
      case TransitionNode(input, None, None) =>
        q"def ${TermName(input)} = this"
    }

    def apply(): c.Tree = {
      val q"object $objectName extends ..$parents { ..${states: List[StateNode]} }" = annottees.head
      val fsmNode = FsmNode(states)
      check(c)(fsmNode)
      q"""
        object $objectName extends ..$parents {
          def apply() = ${TermName(getInitialState(fsmNode).id)}
          ..$states
        }
      """
    }

  }) ()

  private def getInitialStates(fsmNode: FsmNode): List[StateNode] = fsmNode.states filter { _.initial }
  private def getInitialState(fsmNode: FsmNode): StateNode = getInitialStates(fsmNode) head

  private def check(c: whitebox.Context)(fsm: FsmNode): Unit =
    List[whitebox.Context => FsmNode => Unit](checkSingleInitial, checkReachability) foreach {
      _ (c)(fsm)
    }

  private def checkSingleInitial(c: whitebox.Context)(fsm: FsmNode): Unit =
    fsm.states count {
      _.initial
    } match {
      case 0 => c.error(c.enclosingPosition, "No initial state defined")
      case 1 =>
      case _ => c.error(c.enclosingPosition, "Multiple initial states defined")
    }

  private def checkReachability(c: whitebox.Context)(fsmNode: FsmNode): Unit =
    (fsmNode.states toSet) diff checkReachability(fsmNode, Set(), getInitialStates(fsmNode) toSet) toList match {
      case Nil =>
      case states => states foreach {
        s => c.error(c.enclosingPosition, s"unreachable state ${s.id}")
      }
    }

  @tailrec private def checkReachability(fsm: FsmNode, visitedStates: Set[StateNode], statesToVisit: Set[StateNode]): Set[StateNode] =
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