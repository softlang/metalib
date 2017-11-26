(ns metadocs.utils.url
  (:require [clojure.string :as string]))

(defn sanitize [url]
  (string/replace url #" " "_"))
