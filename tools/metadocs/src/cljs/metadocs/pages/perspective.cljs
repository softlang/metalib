(ns metadocs.pages.perspective
  (:require [metadocs.config :as config]
            [metadocs.utils.url :as url]))

(defn page [perspective contributions]
  (let [wiki-url (str config/wiki-url "Perspective:" perspective)]
    [:div [:h1 "Perspective: " perspective]
     [:div
      [:h2 "Contributions"]
      [:ul (map #(with-meta [:li [:a {:href (str "/metalib/contributions/" (url/sanitize %) ".html")} %]] {:key %}) contributions)]]
     [:div
      [:h2 "101Wiki"]
      [:a {:href wiki-url :target "_blank"} wiki-url]]]))
