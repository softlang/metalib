package org.softlang.fsml

import scala.annotation.{StaticAnnotation, compileTimeOnly}
import scala.language.experimental.macros

object FsmMacro {

  import scala.language.{implicitConversions, postfixOps}
  import scala.reflect.macros.whitebox

  def impl(c: whitebox.Context)(annottees: c.Tree*): c.Tree = (new {

    import c.universe._

    implicit val nameToString: Name => String = (ident: Name) => ident.toString

    implicit val unliftStateDefinition: Unliftable[StateNode] = Unliftable {
      case q"initial state ${id: Name} { ..${transitions: List[TransitionNode]} }" =>
        StateNode(initial = true, id, transitions)
      case q"state ${id: Name} { ..${transitions: List[TransitionNode]} }" =>
        StateNode(initial = false, id, transitions)
    }

    implicit val unliftTransitionExpression: Unliftable[TransitionNode] = Unliftable {
      case q"${event: Name} / ${action: Name} -> ${target: Name}" =>
        TransitionNode(event, Some(action), Some(target))
      case q"${event: Name} / ${action: Name}" =>
        TransitionNode(event, Some(action), None)
      case q"${event: Name} -> ${target: Name}" =>
        TransitionNode(event, None, Some(target))
      case q"${event: Name}" =>
        TransitionNode(event, None, None)
    }

    implicit val liftStateNode: Liftable[StateNode] = Liftable { s =>
      q"""object ${TermName(s.id)} { ..${s.transitions} }"""
    }

    implicit val liftTransitionNode: Liftable[TransitionNode] = Liftable {
      case TransitionNode(event, Some(action), Some(target)) =>
        q"def ${TermName(s"$event")} = { println($action); ${TermName(target)} }"
      case TransitionNode(event, Some(action), None) =>
        q"def ${TermName(s"$event")} = { println($action); this }"
      case TransitionNode(event, None, Some(target)) =>
        q"def ${TermName(s"$event")} = ${TermName(target)}"
      case TransitionNode(event, None, None) =>
        q"def ${TermName(event)} = this"
    }

    def apply(): c.Tree = {
      val q"object $objectName extends ..$parents { ..${states: List[StateNode]} }" = annottees.head
      val fsmNode = FsmNode(states)
      Checker.check(c)(fsmNode)
      q"""
        object $objectName extends ..$parents {
          def apply() = ${
        TermName((fsmNode.states filter {
          _.initial
        } head) id)
      }
          ..$states
        }
      """
    }
  }) ()
}

@compileTimeOnly("macro annotation for the FSML")
class Fsm extends StaticAnnotation {
  def macroTransform(annottees: Any*): Any = macro FsmMacro.impl
}