(ns metadocs.components.perspective
  (:require [metadocs.config :as config]
            [metadocs.utils.url :as url]))

(defn component [perspective]
  [:a {:href (str config/base-path "/perspectives/" (url/sanitize perspective) ".html")} perspective])
