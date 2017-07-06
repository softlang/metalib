import MetadataParser.id

import scala.util.matching.Regex
import scala.util.parsing.combinator.RegexParsers

/**
  * Created by Johannes on 04.07.2017.
  */
object MetadataParser extends RegexParsers {

  override def skipWhitespace: Boolean = false

  val id = """[a-zA-Z]([a-zA-Z0-9]|_[a-zA-Z0-9])*""" r
  val ws = """\s""".r
  val wss = """\s+""".r
  //val URL = """(http|ftp|https)://(.*)\.([a-z]+)""".r

  def wsid: Parser[String] =  (id ~ (ws ~ id).*) ^^ {
    case x => x.toString()
    //    case a ~ list if list.isEmpty => a
    //    case a ~ list => a + " " + list.map {
    //      _._2
    //    }.reduce(_ + " " + _)
  }

  def identifier: Parser[String] = (wsid ~ (":" ~ wsid).?) ^^ {
    case id ~ None => id
    case id ~ Some(b) => id + ":" + b._2
  }

  def triple: Parser[(String, String, String)] = (identifier ~ "::" ~ identifier) ^^ { case a ~ "::" ~ b => ("this", a, b) }

  def metadata: Parser[List[(String, String, String)]] = (("*" ~ wss.? ~ triple).* ~ wss.?) ^^ { case list ~ _ => list.map(_._2) }

  def apply(input: String) = parseAll(triple, input) match {
    case Success(result, _) => result
    case failure: NoSuccess => scala.sys.error(failure.msg + " @ " + input)
  }

  def main(args: Array[String]): Unit = {
    print(apply("*instanceOf:Property::Code generation:Technology"))
    //*sameAs:Property::Codegeneration:Technology
  }
}

// //I like this sample
//  def number: Parser[Double] = """\d+(\.\d*)?""".r ^^ { _.toDouble }
//  def factor: Parser[Double] = number | "(" ~> expr <~ ")"
//  def term  : Parser[Double] = factor ~ rep( "*" ~ factor | "/" ~ factor) ^^ {
//    case number ~ list => (number /: list) {
//      case (x, "*" ~ y) => x * y
//      case (x, "/" ~ y) => x / y
//    }
//  }
//  def expr  : Parser[Double] = term ~ rep("+" ~ log(term)("Plus term") | "-" ~ log(term)("Minus term")) ^^ {
//    case number ~ list => list.foldLeft(number) { // same as before, using alternate name for /:
//      case (x, "+" ~ y) => x + y
//      case (x, "-" ~ y) => x - y
//    }

