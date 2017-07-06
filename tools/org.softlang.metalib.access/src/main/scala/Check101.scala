import java.io.File
import java.net.{HttpURLConnection, URL}

import Program.loadJson
import org.apache.commons.io.IOUtils
import org.json4s
import org.json4s.JsonAST.JString

/**
  * Created by Johannes on 28.06.2017.
  */
object Check101 {

  val features = (new File("C:\\Data\\Repos\\metalib\\models").listFiles())
    .map(f => f.getName.substring(0, f.getName.size - 5) -> loadJson(f.getPath())).
    flatMap { case (_, json) => (json \\ "features").children.map(x => x.children).flatten.map { case JString(x) => x }.toSet }.toSet

  val technologies = (new File("C:\\Data\\Repos\\metalib\\models").listFiles())
    .map(f => f.getName.substring(0, f.getName.size - 5) -> loadJson(f.getPath())).
    flatMap { case (_, json) => (json \\ "technologies").children.map(x => x.children).flatten.map { case JString(x) => x }.toSet }.toSet

  val languages = (new File("C:\\Data\\Repos\\metalib\\models").listFiles())
    .map(f => f.getName.substring(0, f.getName.size - 5) -> loadJson(f.getPath())).
    flatMap { case (_, json) => (json \\ "languages").children.map(x => x.children).flatten.map { case JString(x) => x }.toSet }.toSet

  val concepts = (new File("C:\\Data\\Repos\\metalib\\models").listFiles())
    .map(f => f.getName.substring(0, f.getName.size - 5) -> loadJson(f.getPath())).
    flatMap { case (_, json) => (json \\ "concepts").children.map(x => x.children).flatten.map { case JString(x) => x }.toSet }.toSet

  def pf(iterable: Iterable[String]) = if (iterable.size > 0) iterable.reduce(_ + ", " + _) else "empty"

  def main(args: Array[String]): Unit = {
    println("all metalib features: " + pf(features))
    println("all metalib technologies: " + pf(technologies))
    println("all metalib languages: " + pf(languages))
    println("all metalib concepts: " + pf(concepts))
    println("======================================================")

    val missingFeatures = missing101("Feature", features)
    val missingTechnologies = missing101("Technology", technologies)
    val missingLanguages = missing101("Language", languages)
    val missingConcepts = missing101("", concepts)

    // Checking existence
    logMissing101("Feature", missingFeatures)
    logMissing101("Technology", missingTechnologies)
    logMissing101("Language", missingLanguages)
    logMissing101("", missingConcepts)


    logMissingHtmlSegment101("Language", languages -- missingLanguages, Set("/Section:Headline", "/Property:instanceOf", "/Section:Metadata"))
    logMissingHtmlSegment101("Technology", technologies -- missingTechnologies, Set("/Section:Headline", "/Property:instanceOf", "Property:facilitates", "/Section:Metadata"))
    logMissingHtmlSegment101("Feature", features -- missingFeatures, Set("/Section:Headline", "/Section:Description", "/Property:relatesTo", "/Section:Metadata"))
    logMissingHtmlSegment101("", concepts -- missingConcepts, Set("/Section:Headline", "/Section:Metadata"))


  }

  def logMissing101(ns: String, missing: Iterable[String]) = {
    println("======================================================")
    println("Missing " + ns)
    for (x <- missing) println(page101(ns, x))
  }

  def logMissingHtmlSegment101(ns: String, names: Iterable[String], patterns: Set[String]) = {
    println("======================================================")
    println("Namespace " + ns)
    for (x <- names) {
      val missingHtml = missingHtmlSegment101(ns, x, patterns)
      if (!missingHtml.isEmpty) {
        println(page101(ns, x))
        println("missing html segments: " + pf(missingHtml))
      }
    }
  }

  def missing101(ns: String, names: Iterable[String]): Iterable[String] =
    names.collect { case name if missing101(ns, name) => name }

  def missing101(ns: String, name: String): Boolean = {
    val url = new URL(page101(ns, name))
    val huc = url.openConnection().asInstanceOf[HttpURLConnection]
    huc.setRequestMethod("HEAD")
    huc.setInstanceFollowRedirects(false)
    val responseCode = huc.getResponseCode
    (200 != responseCode)
  }

  def page101(ns: String, name: String) =
    if (ns == "") "https://101wiki.softlang.org/" + name.replaceAll(" ", "_")
    else "https://101wiki.softlang.org/" + ns.replaceAll(" ", "_") + ":" + name.replaceAll(" ", "_")

  def missingHtmlSegment101(ns: String, name: String, htmlSegments: Iterable[String]): Iterable[String] = {
    val content = IOUtils.toString(new URL(page101(ns, name)).openStream())
    htmlSegments.collect { case x if !content.contains(x) => x }
  }

}
