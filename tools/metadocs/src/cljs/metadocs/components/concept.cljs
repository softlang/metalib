(ns metadocs.components.concept
  (:require [metadocs.config :as config]))

(defn component [concept]
      [:span [:a {:href (str config/wiki-url concept) :target "_blank"} concept]])