import java.io.File
import java.net.URL

import org.apache.commons.io.IOUtils
import org.json4s.{JObject, _}
import org.json4s.native.JsonMethods._
import com.google.common.base.Charsets
import com.google.common.io.CharSink
import com.google.common.io.Files

/**
  * Created by Johannes on 03.07.2017.
  */
object CheckAll101 {

  def titleOf(page: JsonAST.JValue): String = (page \ "title").asInstanceOf[JString].values

  def namespaceOf(page: JsonAST.JValue): String = (page \ "namespace").asInstanceOf[JString].values

  def sectionsTitlesOf(page: JsonAST.JValue) = sectionsOf(page).map(_._1)

  def sectionsOf(page: JsonAST.JValue) = (page \ "sections").children.map { case section =>
    val JString(title) = section \\ "title"
    val JString(content) = section \\ "content"
    (title, content)
  }.toSet


  def triplesOf(page: JsonAST.JValue) = (page \ "triples").children.map {
    case JObject(List(Tuple2("predicate", JString(p)), Tuple2("object", JString(o)))) =>
      (Entity(namespaceOf(page), titleOf(page)), Entity("Property", p), Link(o))
  }.toSet

  def entityOf(page: JsonAST.JValue) = Entity(namespaceOf(page), titleOf(page))

  def main(args: Array[String]): Unit = {
    val pages = access101content(0)
    val entities = pages.map(page => entityOf(page))
    val triples = pages.flatMap { case page => triplesOf(page) }

    val rawDocuments = pages.map { case page =>
      val sections = sectionsOf(page).filter(_._1 != "metadata").map(_._2).fold("")(_ + "\n" + _) + " " + titleOf(page) + " " + namespaceOf(page)
      val terms = Utils.preprocessing(sections)
      val vector = Utils.countTerms(terms)
      val entity = entityOf(page)
      entity -> vector
    }.filter { case (_, vector) => !Utils.isEmpty(vector) }.toMap

    val vsm = Utils.vsm(rawDocuments, true).toMap

    val domains = triples.collect {
      case (property@Entity("Property", _), Entity("Property", "hasDomain"), domain) => (property, domain)
    }

    val ranges = triples.collect {
      case (property@Entity("Property", _), Entity("Property", "hasRange"), domain) => (property, domain)
    }

    val mandatoryProperties = triples.collect {
      case (Entity("Namespace", namespace), Entity("Property", "hasMandatory"), property@Entity("Property", _)) => (namespace, property)
    }

    val mandatorySections = triples.collect {
      case (Entity("Namespace", namespace), Entity("Property", "hasMandatory"), Entity("Section", property)) => (namespace, property)
    }

    val report = pages.toSeq.flatMap { case page =>

      val entity = Entity(namespaceOf(page), titleOf(page))
      val namespace = namespaceOf(page)
      val properties = triplesOf(page)
      val sections = sectionsTitlesOf(page)

      val currentMandatorySections = mandatorySections.collect { case (n, x) if n == namespace => x }
      val missingSections = currentMandatorySections.diff(sections)

      val currentMandatoryProperties = mandatoryProperties.collect { case (n, x) if n == namespace => x }
      val missingProperties = currentMandatoryProperties.diff(properties.map(_._2))
      val vector = vsm.get(entity)

      def threshold = 0.5d

      val similarity =
        if (vector.isDefined) vsm.filter(_._1 != entity).map { case (entity, otherVector) => entity -> Utils.cosine(vector.get, otherVector) }
        else (Map[Entity, Double]())
      val strongSimilarity = similarity.filter { case (entity, similarity) => similarity < threshold }.toSeq.sortBy(_._2).take(5)

      val failedDomains = properties.filter {
        case (Entity(domain, _), property, Entity(range, _))
        => !(domains.contains((property, Entity("Type", domain))) || domains.contains((property, Entity("Type", "Any"))))
        case _ => false
      }

      val missingEntities = properties.flatMap { case (s, p, o) => Set(s, p, o) }.filter(_.isInstanceOf[Entity]).map(_.asInstanceOf[Entity]).diff(entities)

      val failedRanges = properties.filter {
        case (Entity(domain, _), property, Entity(range, _))
        => !(ranges.contains((property, Entity("Type", range))) || ranges.contains((property, Entity("Type", "Any"))))
        case _ => false
      }

      if(entity.toString() == "Contribution:rascal")
        println("")

      val errors = missingSections.map(x => "Missing section: '" + x + "'") ++
        missingProperties.map(x => "Missing property: '" + x + "'") ++
        failedDomains.map(x => "Failed domain: '" + x + "'") ++
        failedRanges.map(x => "Failed range: '" + x + "'") ++
        strongSimilarity.map(x => "Strong similarity with " + x._2 + ": '" + x._1 + "'") ++
        missingEntities.map(x => "Missing page: '" + x + "'")
      if (!errors.isEmpty) {
        Seq("=======================================================") ++
          Seq("Page:" + entity) ++
          errors

      } else Seq()
    }


    val sink = Files.asCharSink(new File("report.txt"), Charsets.UTF_8)
    sink.write(report.reduce(_ + "\n" + _))
  }

  def access101content(lastId: Int): Set[JsonAST.JValue] = {
    val JArray(current) = parse(new URL("https://101wiki.softlang.org/pages?after_id=" + lastId).openStream())
    val rest =
      if (!current.isEmpty) access101content((current.last \ "id").asInstanceOf[JInt].values.toInt)
      else Set()

    current.toSet ++ rest
  }
}
