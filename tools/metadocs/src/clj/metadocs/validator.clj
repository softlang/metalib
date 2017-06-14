(ns metadocs.validator
  (:require [cheshire.core :refer [parse-stream]]
            [clojure.java.io :refer [reader]]))

(def feature-model-filename "feature-model.json")

(defn load-json [file-name]
  (parse-stream (reader file-name) true))

(defmulti validate-features (fn [tree mandatory feature-set]
                              (cond
                                (contains? tree :composition) :composition
                                (contains? tree :or) :or
                                (contains? tree :alternative) :alternative
                                :else :leaf)))

(defmethod validate-features :composition [tree mandatory feature-set]
  (let [children (:composition tree)]
    (println tree mandatory)
    (or (not mandatory) (every? identity (map #(if (and mandatory (:mandatory %1) (not %2))
                              (throw (Error. (str "no mandatory feature " (:feature %1))))
                              true)
                           children
                           (map #(validate-features % (and mandatory (:mandatory %)) feature-set) children))))))

(defmethod validate-features :or [tree mandatory feature-set]
  (let [children (:or tree)]
    (if (< 0 (count (filter identity (map #(validate-features % false feature-set) children))))
      true
      (throw (Error. (str "no feature for or " (:feature tree)))))))

(defmethod validate-features :alternative [tree mandatory feature-set]
  (let [children (:alternative tree)]
    (case (compare (count (filter identity (map #(validate-features % false feature-set) children))) 1)
      -1 (throw (Error. (str "no feature for alternative " (:feature tree))))
      0 true
      1 (throw (Error. (str "more than one feature for alternative " (:feature tree) (map :feature children)))))))

(defmethod validate-features :leaf [{:keys [feature]} mandatory feature-set]
  (contains? feature-set feature))

(defn validate []
  (let [feature-model (load-json feature-model-filename)]
    (print (pr-str (validate-features feature-model
                                      true
                                      #{"AST" "CST"})))))

