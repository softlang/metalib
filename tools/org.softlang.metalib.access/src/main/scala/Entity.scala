/**
  * Created by Johannes on 04.07.2017.
  */
sealed trait Link {

}

object Link {
  // Todo: solve this properly.
  def apply(content: String): Link = content match {
    case x if x.startsWith("http") => new Uri(x)
    case x if x.contains(":") => new Entity(x.split(":")(0), x.split(":")(1))
    case x => new Entity("Concept", x)
  }
}

case class Uri(uri: String) extends Link {
  override def toString() = uri
}

case class Entity(namespace: String, name: String) extends Link {

  override def toString() = namespace match {
    case "Concept" => "https://101wiki.softlang.org/" + name.replaceAll(" ","_")
    case _ => "https://101wiki.softlang.org/" + namespace.replaceAll(" ","_") + ":" + name.replaceAll(" ","_")
  }
}
