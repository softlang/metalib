(ns metadocs.components.technology
  (:require [metadocs.config :as config]))

(defn component [technology]
      [:span [:a {:href (str config/base-path "/technologies/" technology ".html")} technology]])