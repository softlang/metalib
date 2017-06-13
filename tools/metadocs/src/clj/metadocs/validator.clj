(ns metadocs.validator
  (:require [cheshire.core :refer [parse-stream]]
            [clojure.java.io :refer [reader]]))

(def feature-model-filename "featuremodel.json")

(def feature-set #{"AST+-"})

(defn load-json [file-name]
  (parse-stream (reader file-name) true))

(defmulti annotate-tree #(cond
                           (contains? % :composition) :composition
                           (contains? % :or) :or
                           (contains? % :alternative) :alternative
                           :else :leaf))

(defmethod annotate-tree :composition [tree]
  (let [children (:composition tree)]
    (filter identity (map annotate-tree children))))

(defmethod annotate-tree :or [tree]
  (let [children (:or tree)]
    (< 0 (count (filter identity (map annotate-tree children))))))

(defmethod annotate-tree :alternative [tree]
  (let [children (:alternative tree)]
    (= 1 (count (filter identity (map annotate-tree children))))))

(defmethod annotate-tree :leaf [{:keys [feature]}]
  (contains? feature-set feature))

(defn validate []
  (let [model (load-json feature-model-filename)]
    (print (pr-str (annotate-tree model)))))
