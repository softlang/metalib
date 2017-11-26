(ns metadocs.components.language
  (:require [metadocs.config :as config]
            [metadocs.utils.url :as url]))

(defn component [language]
      [:a {:href (str config/base-path "/languages/" (url/sanitize language) ".html")} language])
