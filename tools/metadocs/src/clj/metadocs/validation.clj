(ns metadocs.validation
  (:require [cheshire.core :as json]
            [clojure.java.io :as io]))

(defn load-json [file-name]
  (-> file-name io/reader (json/parse-stream true)))

(defmacro load-feature-model []
  (let [feature-model (load-json "feature-model.json")]
    `~feature-model))
