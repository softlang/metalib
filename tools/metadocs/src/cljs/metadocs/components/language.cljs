(ns metadocs.components.language
  (:require [metadocs.config :as config]
            [metadocs.utils.url :as url]))


(defn component [language]
      [:span [:a {:href (str config/base-path "/languages/" (url/sanitize language) ".html")} language]])
