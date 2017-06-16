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
    (or (not mandatory) (every? identity (map #(if (and mandatory (:mandatory %1) (not %2))
                                                 (throw (Error. (str "no mandatory feature " (:feature %1))))
                                                 true)
                                              children
                                              (map #(validate-features % (and mandatory (:mandatory %)) feature-set) children))))))

(defmethod validate-features :or [tree mandatory feature-set]
  (let [children (:or tree)]
    (< 0 (count (filter identity (map #(validate-features % mandatory feature-set) children))))))

(defmethod validate-features :alternative [tree mandatory feature-set]
  (let [children (:alternative tree)]
    (= 1 (count (filter identity (map #(validate-features % mandatory feature-set) children))))))

(defmethod validate-features :leaf [{:keys [feature]} mandatory feature-set]
  (contains? feature-set feature))

(defn validate [feature-set]
  (let [feature-model (load-json feature-model-filename)]
    (throw (Error. (pr-str (validate-features feature-model true feature-set))))))

