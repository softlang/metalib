(ns metadocs.pages.technology
  (:require [metadocs.config :as config]
            [metadocs.utils.url :as url]))

(defn page [technology contributions]
  (let [wiki-url (str config/wiki-url "Technology:" technology)]
    [:div [:h1 "Technology: " technology]
     [:div
      [:h2 "Contributions"]
      [:ul (map #(with-meta [:li [:a {:href (str "/metalib/contributions/" (url/sanitize %) ".html")} %]] {:key %}) contributions)]]
     [:div
      [:h2 "101Wiki"]
      [:a {:href wiki-url :target "_blank"} wiki-url]]]))
