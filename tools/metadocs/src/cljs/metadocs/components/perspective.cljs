(ns metadocs.components.perspective
  (:require [metadocs.config :as config]))

(defn component [perspective]
      [:span [:a {:href (str config/base-path "/perspectives/" perspective ".html")} perspective]])