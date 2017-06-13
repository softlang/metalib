(ns metadocs.components.language
  (:require [metadocs.config :as config]))


(defn component [language]
      [:span [:a {:href (str config/wiki-url "Language:" language) :target "_blank"} language]])