(ns metadocs.components.perspective
  (:require [metadocs.config :as config]))

(defn component [perspective]
      [:span [:a {:href (str config/wiki-url "Perspective:" perspective) :target "_blank"} perspective]])