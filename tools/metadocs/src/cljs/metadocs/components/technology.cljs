(ns metadocs.components.technology
  (:require [metadocs.config :as config]
            [metadocs.utils.url :as url]))

(defn component [technology]
  [:a {:href (str config/base-path "/technologies/" (url/sanitize technology) ".html")} technology])
