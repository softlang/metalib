(ns metadocs.pages.language
  (:require [metadocs.config :as config]))

(defn page [language contributions]
  (let [wiki-url (str config/wiki-url "Language:" language)]
    [:div [:h1 "Language: " language]
     [:div
      [:h2 "Contributions"]
      [:ul (map #(with-meta [:li [:a {:href (str "/metalib/contributions/" % ".html")} %]] {:key %}) contributions)]]
     [:div
      [:h2 "101Wiki"]
      [:a {:href wiki-url :target "_blank"} wiki-url]]]))