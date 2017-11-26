(ns metadocs.components.concept
  (:require [metadocs.config :as config]
            [metadocs.utils.url :as url]))

(defn component [concept]
      [:span [:a {:href (str config/base-path "/concepts/" (url/sanitize concept) ".html")} concept]])
