(ns metadocs.utils.github
  (:require [clojure.string :as string]))

(defn to-raw-uri [uri]
      (string/replace (string/replace uri "/blob" "") "github.com" "raw.githubusercontent.com"))