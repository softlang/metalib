import java.io._
import java.util.regex.Pattern

import com.google.common.base.Charsets
import com.google.common.io.Files
import org.tartarus.snowball.ext.PorterStemmer

import scala.collection.JavaConverters._
import scala.collection.mutable
import scala.math._
import scala.reflect.ClassTag

object Utils {

  type MVector = Map[String, Double]

  def charset = Charsets.ISO_8859_1

  def read(path: String): String = read(new File(path))

  def stem(s: Iterable[String]) = {
    val stemmer = new PorterStemmer()
    s.map { x =>
      stemmer.setCurrent(x)
      stemmer.stem()
      stemmer.getCurrent
    }

  }

  def tree(path: String): Set[File] = tree(new File(path))

  def tree(file: File): Set[File] = {
    if (file.isDirectory())
      file.listFiles().flatMap(tree(_)).toSet
    else Set(file)
  }

  def fulltree(file: File): Set[File] = {
    if (file == null || file.listFiles() == null)
      throw new RuntimeException()

    file.listFiles().flatMap(tree(_)).toSet ++ Set(file)
  }

  def countTerms(seq: Iterable[String]): Map[String, Double] = {
    seq.foldLeft(new mutable.HashMap[String, Double]()) {
      (map, term) =>
        map += term -> (map.getOrElse(term, 0d) + 1d)
        map
    }.toMap

  }

  def read(file: File): String = Files.asCharSource(file, charset).read()

  def lastModified(path: String): Long = lastModified(new File(path))

  def lastModified(file: File): Long = fulltree(file).map {
    _.lastModified()
  }.max

  def readLines(file: File): Seq[String] = Files.asCharSource(file, charset).readLines().asScala.toSeq

  def readLines(path: String): Seq[String] = readLines(new File(path))

  def exists(path: String) = new File(path).exists()

  def save(file: File, content: String): Unit = {
    val sink = Files.asCharSink(file, charset)
    sink.write(content)
  }

  def save(path: String, content: String): Unit = {
    save(new File(path), content)
  }

  def saveLines(path: String, content: Iterable[String]): Unit = saveLines(new File(path), content)

  def saveLines(file: File, content: Iterable[String]): Unit = {
    val sink = Files.asCharSink(file, charset)
    sink.writeLines(content.asJava)
  }

  def delete(path: String): Unit =
    delete(new File(path))

  def delete(file: File): Unit = {
    if (file.exists()) {
      if (file.isDirectory()) file.listFiles().foreach {
        delete(_)
      }
      file.delete()
    }
  }

  def write(path: String, content: String): Unit = write(new File(path), content)

  def write(file: File, content: String): Unit = {
    Files.createParentDirs(file)
    Files.asCharSink(file, charset).write(content)
  }

  def replace(map: Map[String, String]): String => String = x => map.foldRight(x)((l, r) => r.replaceAll(l._1, l._2))

  def insert(regex: String, content: String, offset: Integer): String => String = x => {
    val matcher = Pattern.compile(regex).matcher(x)
    var current = x
    var number = 0
    while (matcher.find()) {
      def position = matcher.start() + offset + number

      current = current.substring(0, position) + content + current.substring(position)
      // TODO: This has become wrong many times without a reason. Always check this!
      number = number + 1
    }
    current
  }

  def countMatch(regex: String, content: String): Int = {
    val matcher = Pattern.compile(regex).matcher(content)
    var count = 0
    while (matcher.find())
      count = count + 1
    count
  }

  def round(x: Double) = BigDecimal(x).setScale(2, BigDecimal.RoundingMode.HALF_UP).toDouble

  def round(x: Double, scale: Integer) = BigDecimal(x).setScale(scale, BigDecimal.RoundingMode.HALF_UP).toDouble

  def prettyPrint(x: Double, scale: Integer) = if (x.isNaN()) "NaN" else round(x, scale).toString()


  def multv(a: MVector, b: MVector) = a.keySet.map { t => (t, a(t) * b.getOrElse(t, 0d)) }.toMap

  def add(a: MVector, b: MVector): MVector = (a.keySet.toSet ++ b.keySet.toSet).map(t => (t, a.getOrElse(t, 0d) + b.getOrElse(t, 0d))).toMap

  def difference(a: MVector, b: MVector): MVector = (a.keySet.toSet ++ b.keySet.toSet).map(t => (t, a.getOrElse(t, 0d) - b.getOrElse(t, 0d))).toMap

  def negate(a: MVector): MVector = a.mapValues(-_)

  def cosine(a: MVector, b: MVector): Double = {
    val left = a.map { case (term, value) => math.pow(value, 2d) }.fold(0d)(_ + _)
    val right = b.map { case (term, value) => math.pow(value, 2d) }.fold(0d)(_ + _)

    val top = a.keySet.intersect(b.keySet).map { term => a(term) * b(term) }.fold(0d)(_ + _)
    val bottom = math.sqrt(right) * math.sqrt(left)

    if (bottom == 0d) return 0d

    val dareal = top / bottom

    val darealreal = 1d - Math.abs(dareal)

    darealreal
  }

  def splitAtWhiteLine(input: String) = {
    var fragments: Set[(Int, String)] = Set()
    var current = ""

    var i = 0
    for (line <- input.replace("\r", "").split("\n")) {
      i = i + 1
      if (line == "") {
        fragments = fragments ++ Set((i, current))
        current = ""
      } else current = current + "\n" + line
    }

    fragments = fragments ++ Set((i, current))

    fragments.filter {
      _._2 != ""
    }
  }

  // TODO: Check these measure definitions.
  def avg(iterable: Iterable[Double]) = {

    var current = 0d
    for (x <- iterable)
      current = current + x

    current / iterable.size.toDouble

  }

  def max(iterable: Iterable[Double]) = iterable.max

  def min(iterable: Iterable[Double]) = iterable.min

  def sum(iterable: Iterable[Double]) = iterable.fold(0d)(_ + _)

  def variance(iterable: Iterable[Double]) = {
    val average = avg(iterable)
    iterable.map { x => math.pow(x - average, 2d) }.fold(0d)(_ + _)
  }

  def stdev(iterable: Iterable[Double]) = {
    math.pow(variance(iterable), 0.5d)
  }

  def entropy(iterable: Iterable[Double]) = {
    val _sum = sum(iterable)

    -iterable.map { x =>
      val fx = x / _sum
      fx * math.log(fx)
    }.reduce(_ + _) / iterable.size.toDouble
  }

  def pathParents(x: String) = {
    val fragments = (if (x.indexOf("@") > 0) x.substring(0, x.indexOf("@")) else x).split("\\\\")
    val paths = (1 to fragments.length).map(x => (0 until x).map(y => fragments(y)).reduce(_ + "\\" + _))
    paths.toSet
  }

  def faction(iterable: Iterable[String]): Map[String, Double] = {

    val size = iterable.size.toDouble

    val paths = iterable.flatMap(pathParents).toSet

    val factions = paths.map { path =>
      (path, iterable.count {
        _.startsWith(path)
      }.toDouble / size)
    }.toMap

    factions
  }

  def serialize(value: Any, location: String) = {
    Files.createParentDirs(new File(location))

    val fos = new FileOutputStream(location)
    val oos = new ObjectOutputStream(fos)

    oos.writeObject(value)

    fos.close()
    oos.close()
  }

  def deserialize(location: String): Any = {
    val fis = new FileInputStream(location)
    val ois = new ObjectInputStream(fis)

    val obj = ois.readObject()

    fis.close()
    ois.close()

    obj
  }

  def smoothDistribution[T](distribution: Map[T, Double], symbols: Set[T], e: Double) = {
    val distributionWithE = symbols.map { x => x -> (distribution.getOrElse(x, 0d) + e) }
    val sum = distributionWithE.toSeq.map(_._2).reduce(_ + _)
    distributionWithE.map { case (k, v) => k -> (v / sum) }.toMap
  }

  def kl[T](a: Map[T, Double], b: Map[T, Double]) = {
    assert(!a.exists(_._2 == 0d) && Utils.round(a.map(_._2).reduce(_ + _), 3) == 1d)
    assert(!b.exists(_._2 == 0d) && Utils.round(b.map(_._2).reduce(_ + _), 3) == 1d)

    assert(a.keySet == b.keySet)

    val l = 0.5 * a.keySet.map { x => a(x) * math.log(a(x) / b(x)) }.reduce(_ + _)
    val r = 0.5 * b.keySet.map { x => b(x) * math.log(b(x) / a(x)) }.reduce(_ + _)

    l + r
  }

  def smoothKl[T](a: Map[T, Double], b: Map[T, Double]) = {
    val keys = a.keySet ++ b.keySet
    val e = math.pow(10d, -3d)

    val ai = smoothDistribution(a, keys, e)
    val bi = smoothDistribution(b, keys, e)

    kl(ai, bi)
  }

  def smoothJs[T](a: Map[T, Double], b: Map[T, Double]) = {
    val keys = a.keySet ++ b.keySet
    val e = math.pow(10d, -3d)

    val ai = smoothDistribution(a, keys, e)
    val bi = smoothDistribution(b, keys, e)

    js(ai, bi)
  }

  def js[T](a: Map[T, Double], b: Map[T, Double]) = {
    assert(!a.exists(_._2 == 0d) && Utils.round(a.map(_._2).reduce(_ + _), 3) == 1d)
    assert(!b.exists(_._2 == 0d) && Utils.round(b.map(_._2).reduce(_ + _), 3) == 1d)

    val l = 0.5 * (a.keySet ++ b.keySet).map { x => a(x) * math.log(a(x) / (0.5d * (a(x) + b(x)))) }.reduce(_ + _)
    val r = 0.5 * (a.keySet ++ b.keySet).map { x => b(x) * math.log(b(x) / (0.5d * (a(x) + b(x)))) }.reduce(_ + _)

    l + r
  }

  def vsm[D, T](documents: Iterable[(D, Map[String, Double])], ltf: Boolean = true) = {
    val invertedDocumentFrequency = idf(documents.map(_._2))

    def weight(v: Map[String, Double]) = if (ltf) weightLtfIdf(v, invertedDocumentFrequency) else weightIdf(v, invertedDocumentFrequency)

    documents.map { case (k, v) => k -> weight(v) }
  }

  def weightLtfIdf(vector: Map[String, Double], idf: Map[String, Double]) = vector.map { case (k, v) => k -> scala.math.log(1 + v) * scala.math.log(idf(k)) }

  def weightIdf(vector: Map[String, Double], idf: Map[String, Double]) = vector.map { case (k, v) => k -> v * scala.math.log(idf(k)) }

  def idf(documents: Iterable[Map[String, Double]]) = {
    val size = documents.size.toDouble
    df(documents).mapValues {
      size / _.toDouble
    }
  }

  def df(documents: Iterable[Map[String, Double]]) = {
    documents
      .flatMap(_.keySet)
      .groupBy { x => x }
      .map { x => x._1 -> x._2.size }
  }

  def index(documents: Iterable[Map[String, Double]]) = {
    documents.flatMap(_.keySet.toSet).aggregate(Set[String]())(_ ++ Set(_), _ ++ _).toSeq.zipWithIndex.toMap
  }

  def name(vector: MVector, take: Integer, r: Integer) = vector.toSeq.sortBy(-_._2).take(take).map { case (k, v) => if (r == 0) k else (if (r == 1) v.toInt.toString() else round(v, r).toString()) + ":" + k }.reduce(_ + " " + _)

  val stopwords: Set[String] = Utils.read("stopwords.txt").split("\r\n").toSet

  def preprocessing(x: String): Seq[String] = {
    val stemmer = new PorterStemmer()

    def stem(x: String) = {
      stemmer.setCurrent(x)
      stemmer.stem()
      val output = stemmer.getCurrent

      def key = (x, output)

      //mostFrequentStemming.put(key, mostFrequentStemming.getOrElse(key, 0) + 1)

      output
    }

    // TODO: Check if newlines are replaced?
    val xi = Utils.replace(Map("[^a-zA-Z]" -> " "))(x)
    val xii = Utils.insert("[a-z][A-Z]", " ", 1)(xi)
    val xiii = Utils.insert("[A-Z][A-Z][a-z]", " ", 1)(xii)
    val xiiii = xiii.map(_.toLower)
    val t = xiiii.split(" ")
    //val ti = t.filter { x => x != "" && x != " " }
    val ti = t.filter { x => !("".equals(x) || " ".equals(x)) }
    val tii = ti.filter { x => !stopwords.contains(x) }
    val tiii = tii.map(x => stem(x))
    tiii.filter { x => x.length > 1 }
  }

  def isEmpty(v: MVector) = v.isEmpty || !v.exists(x => x._2 != 0d)
}