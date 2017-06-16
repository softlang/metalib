import java.io.FileInputStream
import java.io.File

import com.google.common.base.Charsets
import com.google.common.io.CharSink
import com.google.common.io.Files
import com.google.common.io.Files
import org.json4s._
import org.json4s.native.JsonMethods._

import scala.collection.mutable

/**
  * Created by Johannes on 13.06.2017.
  */
object Program {
  // TODO: Change way to count concepts if assigned in one contribution multiple times.
  def main(args: Array[String]): Unit = {

    val contributions = (new File("C:\\Data\\Repos\\metalib\\models").listFiles())
      .map(f => f.getName.substring(0, f.getName.size - 5) -> loadJson(f.getPath())).
      map { case (id, json) => id -> (json \\ "features").children.map(x => x.children).flatten.map { case JString(x) => x }.toSet }

    val features = List(
      "Abstract syntax" -> List("AST", "ASG", "Semantic domain", "API", "Serialization", "Resolution"),
      "Textual syntax" -> List("Text-to-CST", "Text-to-AST", "Text-to-ASG", "Scanning", "Abstraction", "Replacement"),
      "Graphical syntax" -> List("Graph rendering", "Graph editing"),
      "Projectional syntax" -> List("Model projection", "Text projection"),
      "Dynamic semantics" -> List("Interpretation", "Run-time system"),
      "Static semantics" -> List("Analysis", "Piggyback"),
      "Translation semantics" -> List("Compilation", "Staging")
    )

    val nhline = " \\\\ \n"
    val hline = " \\\\ \\hline \n"

    def horizontalContributions() = {
      val begin = "\\begin{tabular}{ |l|" + contributions.map(_ => "c").reduce(_ + " " + _) + "| } \n \\hline \n"
      val header = "~ & " + contributions.map(x => "\\matrixx{" + x._1 + "} ").reduce(_ + " & \n" + _)
      val rows = features.map { case (high, lows) =>
        def highrow = "\\textbf{" + high + "} & " + contributions.map { case (_, cfeatures) => if (cfeatures.toSet.intersect(lows.toSet).isEmpty) "~" else "\\xo{2}" }.reduce(_ + " & " + _)

        def lowrows = lows.map { case low => low + " & " + contributions.map { case (_, cfeatures) => if (!cfeatures.contains(low)) "~" else "\\xo{2}" }.reduce(_ + " & " + _) }

        (List(highrow) ++ lowrows).reduce(_ + nhline + _)
      }.reduce(_ + hline + _)
      val end = "\\end{tabular}"

      begin + header + hline + rows + hline + end
    }

    def verticalContributions(features: List[(String,List[String])]) = {

      val leafFeatures = features.flatMap(_._2.toList)

      //leafFeatures.map(_ => "c").reduce(_ + " " + _)
      val begin = "\\begin{tabular}{ |l|" + features.map{case (x,c) => c.toList.map(_ => "c").reduce(_ + " " + _)}.reduce(_ + " | " + _) + "| } \n \\hline \n"

      val preheader = "~ & " + features.map{case (x,c) => "\\multicolumn{" + c.size +"}{c|}{\\matrixx{"+ x +"}}"}.reduce(_ + " & \n" + _)
      val header = "~ & " + leafFeatures.map(x => "\\matrixx{" + x + "} ").reduce(_ + " & \n" + _)

      val rows = contributions
        .map { case (id, features) => id + " & " + leafFeatures.map(feature => features.contains(feature)).map { x => if (x) "\\xo{2}" else " ~ " }.reduce(_ + " & " + _) }
        .reduce(_ + hline + _)
      val end = "\\end{tabular}"

      begin + preheader + hline + header + hline + rows + hline + end
    }

    val featureList = features.toList
    Files.asCharSink(new File("C:\\Data\\Papers\\metalib\\derived\\contributionsh.tex"), Charsets.UTF_8).write(horizontalContributions())
    Files.asCharSink(new File("C:\\Data\\Papers\\metalib\\derived\\contributionsv1.tex"), Charsets.UTF_8).write(verticalContributions(featureList.take(4)))
    Files.asCharSink(new File("C:\\Data\\Papers\\metalib\\derived\\contributionsv2.tex"), Charsets.UTF_8).write(verticalContributions(featureList.drop(4)))

    //    val columns = List("AST", "ASG", "Abstraction", "API", "Serialization", "Replacement")

    //
    //    val header = "~ & " + columns.map(x => "\\matrixx{" + x + "} ").reduce(_ + " & \n" + _)
    //
    //    val rows = contributions.map { case (id, features) => id + " & " + columns.map(feature => features.contains(feature)).map { x => if (x) "\\xo{2}" else " ~ " }.reduce(_ + " & " + _) }
    //      .reduce {
    //        _ + " \\\\ \\hline \n" + _
    //      }
    //
    //    print(header + "\n  \\\\ \\hline " + rows + " \\\\ \\hline ")
  }

  def applyExtract() = {

    val technologies = (new File("C:\\Data\\Repos\\metalib\\docs\\models").listFiles()).map { f =>
      val data = loadJson(f.getPath())
      (data \\ "concepts").children.map(x => x.children).flatten.map { case JString(x) => x }
    }.flatten.toSeq

    for ((k, v) <- count(technologies))
      println(v + " " + k)
  }

  def applyRename() = {
    for (f <- new File("C:\\Data\\Repos\\metalib\\docs\\models_old").listFiles())
      rename(f.getPath(), "renamed/" + f.getName + ".json")
  }

  def loadJson(path: String) =
    parse(Files.asCharSource(new File(path), Charsets.UTF_8).read())


  def rename(input: String, output: String): Unit = {
    var data = loadJson(input)

    data = rename(data)

    val sink = Files.asCharSink(new File(output), Charsets.UTF_8)
    sink.write(compact(render(data)))
  }

  def rename(x: JValue): JValue = x match {
    case JObject(fields) => JObject(fields.map(renameField(_)))
    case JArray(arr) => JArray(arr.map(rename(_)))
    case x => x
  }

  def renameField(x: JField): JField = x match {
    // Renaming Of Perspectives
    case ("perspectives", l) => ("perspectives", l.map {
      case JString("object") => JString("data")
      case JString("meta") => JString("implementation")
      case x => x
    })
    // Renaming of features
    case ("features", l) => ("features", l.map {
      case JString("AST+") => JString("AST")
      case JString("AST-") => JString("AST")
      case JString("AST^+") => JString("AST")
      case JString("AST^-") => JString("AST")

      case JString("Creole^+-") => JString("Remove Creole^+-")
      case JString("Pidgin^+-") => JString("Remove Pidgin^+-")
      case JString("Analyse") => JString("Analysis")
      case JString("Analysis^O") => JString("Analysis")
      case JString("Analysis^M") => JString("Piggyback")
      case JString("Analyse^O") => JString("Analysis")
      case JString("Analyse^M") => JString("Piggyback")
      case JString("Translate^O") => JString("Compilation")
      case JString("Translate^M") => JString("Staging")

      case JString("Interpret^O") => JString("Interpretation")
      case JString("Interpret^M") => JString("Run-time system?")

      case JString("Scannerfull parsing") => JString("Scanning")
      case JString("Interface") => JString("API")
      case JString("Graph Editing") => JString("Graph editing")
      case JString("Graph Rendering") => JString("Graph rendering")

      case x => x
    })
    case (x, y) => (x, rename(y))
  }


  def count(seq: Iterable[String]): Map[String, Int] = {
    seq.foldLeft(new mutable.HashMap[String, Int]()) {
      (map, term) =>
        map += term -> (map.getOrElse(term, 0) + 1)
        map
    }.toMap
  }
}
