(ns metadocs.validator
  (:require [cheshire.core :refer [parse-stream]]
            [clojure.java.io :refer [reader]]))

(def feature-model-filename "feature-model.json")

(defn load-json [file-name]
  (parse-stream (reader file-name) true))

(defmulti annotate-feature-model (fn [feature-model _]
                                   (cond
                                     (contains? feature-model :composition) :composition
                                     (contains? feature-model :or) :or
                                     (contains? feature-model :alternative) :alternative
                                     :else :leaf)))

(defmethod annotate-feature-model :composition [feature-model feature-set]
  (let [children (map #(annotate-feature-model % feature-set) (:composition feature-model))]
    (assoc feature-model :composition children
                         :occupied? (not (empty? (filter :occupied? children))))))

(defmethod annotate-feature-model :or [feature-model feature-set]
  (let [children (map #(annotate-feature-model % feature-set) (:or feature-model))]
    (assoc feature-model :or children
                         :occupied? (not (empty? (filter :occupied? children))))))

(defmethod annotate-feature-model :alternative [feature-model feature-set]
  (let [children (map #(annotate-feature-model % feature-set) (:alternative feature-model))]
    (assoc feature-model :alternative children
                         :occupied? (not (empty? (filter :occupied? children))))))

(defmethod annotate-feature-model :leaf [feature-model feature-set]
  (assoc feature-model :occupied? (contains? feature-set (:feature feature-model))))

(defmulti validate-feature-model (fn [feature-model]
                                   (cond
                                     (contains? feature-model :composition) :composition
                                     (contains? feature-model :or) :or
                                     (contains? feature-model :alternative) :alternative
                                     :else :leaf)))

(defmethod validate-feature-model :composition [feature-model]
  (let [children (map validate-feature-model (:composition feature-model))]
    (assoc feature-model :composition children
                         :valid? (every? identity (map #(if (:mandatory %)
                                                          (and (:occupied? %) (:valid? %))
                                                          (or (not (:occupied? %)) (:valid? %)))
                                                       children)))))

(defmethod validate-feature-model :or [feature-model]
  (let [children (map validate-feature-model (:or feature-model))]
    (assoc feature-model :or children
                         :valid? (:occupied? feature-model))))

(defmethod validate-feature-model :alternative [feature-model]
  (let [children (map validate-feature-model (:alternative feature-model))]
    (assoc feature-model :alternative children
                         :valid? (= 1 (count (filter :occupied? children))))))

(defmethod validate-feature-model :leaf [feature-model]
  (assoc feature-model :valid? true))

(defn validate [contribution feature-set]
  (let [feature-model (load-json feature-model-filename)
        validated-feature-model (validate-feature-model (annotate-feature-model feature-model feature-set))]
    (if (not (:valid? validated-feature-model))
      (throw (Exception. (str "invalid feature set for " contribution "\n"
                              (pr-str feature-set) "\n"
                              (pr-str validated-feature-model)))))))

