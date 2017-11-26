(ns metadocs.pages.feature
  (:require [metadocs.config :as config]
            [metadocs.utils.url :as url]))

(defn page [feature contributions]
  (let [wiki-url (str config/wiki-url "Feature:" feature)]
    [:div [:h1 "Feature: " feature]
     [:div
      [:h2 "Contributions"]
      [:ul (map #(with-meta [:li [:a {:href (str "/metalib/contributions/" (url/sanitize %) ".html")} %]] {:key %}) contributions)]]
     [:div
      [:h2 "101Wiki"]
      [:a {:href wiki-url :target "_blank"} wiki-url]]]))
