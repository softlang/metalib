(ns metadocs.components.language
  (:require [metadocs.config :as config]))


(defn component [language]
      [:span [:a {:href (str config/base-path "/languages/" language ".html")} language]])