(ns metadocs.components.concept
  (:require [metadocs.config :as config]))

(defn component [concept]
      [:span [:a {:href (str config/base-path "/concepts/" concept ".html")} concept]])