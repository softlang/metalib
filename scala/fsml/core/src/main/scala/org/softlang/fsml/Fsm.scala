package org.softlang.fsml

import org.softlang.fsml.Quotations._
import scala.meta._
import scala.annotation.StaticAnnotation
import scala.collection.immutable.Seq

class Fsm extends StaticAnnotation {

  inline def apply(annottee: Any): Any = meta {
    val q"object $objectName { ..${statements} }" = annottee
    val unliftedStates = unliftStates(statements).get
    val fsm: AST.Fsm = AST.Fsm(unliftedStates)
    Checker.check(fsm)
    val initialStateId = (fsm.states filter {
      _.initial
    }).head.id
    val liftedStates = liftStates(unliftedStates)
    q"""
        object $objectName {
          val run = ${Term.Name(initialStateId)}
          ..$liftedStates
        }
    """
  }

}