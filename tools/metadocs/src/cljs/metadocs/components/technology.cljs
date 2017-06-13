(ns metadocs.components.technology
  (:require [metadocs.config :as config]))

(defn component [technology]
      [:span [:a {:href (str config/wiki-url "Technology:" technology) :target "_blank"} technology]])