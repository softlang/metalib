(ns metadocs.components.feature
  (:require [metadocs.config :as config]))


(defn component [feature]
      [:span [:a {:href (str config/base-path "/features/" feature ".html")} feature]])