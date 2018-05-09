package org.softlang.fsml

import scala.meta._
import scala.collection.immutable.Seq

package object Quotations {

  def liftStates: Lift[Seq[AST.State], Seq[Stat]] = Lift {
    _ map {
      state =>
        q"""
          object ${Term.Name(state.id)} {
            ..${liftTransitions(state.transitions)}
          }
        """
    }
  }

  def liftTransitions: Lift[Seq[AST.Transition], Seq[Stat]] = Lift {
    _ map {
      case AST.Transition(event, Some(action), Some(target)) =>
        q"""
          def ${Term.Name(event)} = {
            println(${Lit(action)})
            ${Term.Name(target)}
          }
        """
      case AST.Transition(event, Some(action), None) =>
        q"""
          def ${Term.Name(event)} = {
            println(${Lit(action)})
            this
          }
        """
      case AST.Transition(event, None, Some(target)) =>
        q"""
          def ${Term.Name(event)} = {
            ${Term.Name(target)}
          }
        """
      case AST.Transition(event, None, None) =>
        q"""
          def ${Term.Name(event)} = {
            this
          }
        """
    }
  }

  def unliftStates: Unlift[Seq[Stat], Seq[AST.State]] = Unlift {
    case states =>
      states map {
        case q"initial.state($id{..${transitions}})" =>
          AST.State(initial = true, id.toString(), `stats -> transitions`(transitions).get)
        case q"initial.state($id(()))" =>
          AST.State(initial = true, id.toString(), Seq())
        case q"initial.state($id(${transition}))" =>
          AST.State(initial = true, id.toString(), Seq(`arg -> transition`(transition).get))
        case q"state.$id({..${transitions}})" =>
          AST.State(initial = false, id.toString(), `stats -> transitions`(transitions).get)
        case q"state.$id(())" =>
          AST.State(initial = false, id.toString(), Seq())
        case q"state.$id(${transition})" =>
          AST.State(initial = true, id.toString(), Seq(`arg -> transition`(transition).get))
      }
  }

  def `arg -> transition`: Unlift[Term.Arg, AST.Transition] = Unlift {
    case arg => `tree -> transition`(arg)
  }

  def `stats -> transitions`: Unlift[Seq[Stat], Seq[AST.Transition]] = Unlift {
    case stats => stats map `tree -> transition`
  }

  private def `tree -> transition`(tree: Tree): AST.Transition = tree match {
    case q"$event / $action -> $target" =>
      AST.Transition(event.toString(), Some(action.toString()), Some(target.toString()))
    case q"$event -> $target" =>
      AST.Transition(event.toString(), None, Some(target.toString()))
    case q"$event / $action" =>
      AST.Transition(event.toString(), Some(action.toString()), None)
    case q"$event" =>
      AST.Transition(event.toString(), None, None)
  }

}
