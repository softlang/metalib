package de.sschauss.fsml.macros

import scala.annotation.{compileTimeOnly, StaticAnnotation}
import scala.language.experimental.macros

@compileTimeOnly("macro annotation for the FSML")
class Fsm extends StaticAnnotation {
  def macroTransform(annottees: Any*): Any = macro fsmMacro
}