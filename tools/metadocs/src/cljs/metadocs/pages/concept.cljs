(ns metadocs.pages.concept
  (:require [metadocs.config :as config]))

(defn page [concept contributions]
  (let [wiki-url (str config/wiki-url concept)]
    [:div [:h1 "Language: " concept]
     [:div
      [:h2 "Contributions"]
      [:ul (map #(with-meta [:li [:a {:href (str "/metalib/contributions/" % ".html")} %]] {:key %}) contributions)]]
     [:div
      [:h2 "101Wiki"]
      [:a {:href wiki-url :target "_blank"} wiki-url]]]))