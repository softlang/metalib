(ns metadocs.components.concept
  (:require [metadocs.config :as config]
            [metadocs.utils.url :as url]))

(defn component [concept]
  [:a {:href (str config/base-path "/concepts/" (url/sanitize concept) ".html")} concept])
