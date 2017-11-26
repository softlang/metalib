(ns metadocs.components.feature
  (:require [metadocs.config :as config]
            [metadocs.utils.url :as url]))

(defn component [feature]
  [:a {:href (str config/base-path "/features/" (url/sanitize feature) ".html")} feature])
