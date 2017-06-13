(ns metadocs.components.feature
  (:require [metadocs.config :as config]))


(defn component [feature]
      [:span [:a {:href (str config/wiki-url "Feature:" feature) :target "_blank"} feature]])