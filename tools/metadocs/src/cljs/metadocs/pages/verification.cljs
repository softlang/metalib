(ns metadocs.pages.verification
  (:require [clojure.walk :as walk]
            [reagent.core :as reagent])
  (:require-macros [metadocs.validation :refer [load-feature-model]]))

(def feature-model (load-feature-model))

(defn collect-features [model]
  (->> model :sections (map :features) flatten set))

(defn flag-set-features [feature-model features]
  (.log js/console (str feature-model))
  (cond
    (contains? feature-model :composition) (let [children (mapv #(flag-set-features % features) (:composition feature-model))]
                                             (assoc (assoc feature-model :set (some? (map :set children))) :composition children))
    (contains? feature-model :or) (let [children (mapv #(flag-set-features % features) (:or feature-model))]
                                             (assoc (assoc feature-model :set (some? (map :set children))) :or children))
    (contains? feature-model :alternative) (let [children (mapv #(flag-set-features % features) (:alternative feature-model))]
                                             (assoc (assoc feature-model :set (some? (map :set children))) :alternative children))
    :else (assoc feature-model :set (contains? features (:feature feature-model)))))

(defn validate [model]
  (let [features (collect-features model)]
    (.log js/console (str features (flag-set-features feature-model features)))
    feature-model))

(defn read-json-file [file atom]
  (let [file-reader (js/FileReader.)]
    (aset file-reader "onload" #(->> file-reader
                                     .-result
                                     js/JSON.parse
                                     js->clj
                                     walk/keywordize-keys
                                     (reset! atom)))
    (.readAsText file-reader file)))

(defn page []
  (let [model (reagent/atom "")
        result (reagent/atom nil)]
    (fn []
      [:div
       [:h1 "Model validation"]
       [:input {:type "file"
                :on-change #(-> % .-target .-files (aget 0) (read-json-file model))}]
       [:div (str (list @result @model))]
       [:button {:on-click #(->> @model validate (reset! result))}
        "validate"]])))

