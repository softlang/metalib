(ns metadocs.pages.home
  (:require [metadocs.config :as config]
            [metadocs.components.summary :as summary]
            [metadocs.components.tagcloud :as tagcloud]
            [metadocs.utils.url :as url])
  (:require-macros [metadocs.macros :as macros]))

(defn page []
  (let [contributions (macros/contributions)
        sections (mapcat :sections (macros/contributions))
        perspectives (sort (distinct (mapcat :perspectives sections)))
        features (sort (distinct (mapcat :features sections)))
        languages (sort (distinct (mapcat :languages sections)))
        technologies (sort (distinct (mapcat :technologies sections)))
        concepts (sort (distinct (mapcat :concepts sections)))]
    [:div
     [:div {:class "section"}
      [:div {:class "container"}
       [:h2 {:class "title is-2"}
        "Contributions"]
       [:table {:class "table is-fullwidth"}
        [:tbody
         (map #(with-meta [:tr
                           [:td [:a {:href (str "/metalib/contributions/" (-> % :name url/sanitize) ".html")} (:name %)]]
                           [:td (:headline %)]] {:key %})
              contributions)]]]]
     [:div {:class "section"}
      [:div {:class "container"}
       [:h2 {:class "title is-2"}
        "Ontological summary"]
       [:div {:class "columns"}
        [:div {:class "column"}
         [:h3 {:class "title is-3"} "Perspectives"]
         (map #(with-meta [:p {:class "field"} [:a {:class "tag is-link" :href (str config/base-path "/perspectives/" (url/sanitize %) ".html")} %]] {:key %}) perspectives)]
        [:div {:class "column"}
         [:h3 {:class "title is-3"} "Features"]
         (map #(with-meta [:p {:class "field"} [:a {:class "tag is-link" :href (str config/base-path "/features/" (url/sanitize %) ".html")} %]] {:key %}) features)]
        [:div {:class "column"}
         [:h3 {:class "title is-3"} "Languages"]
         (map #(with-meta [:p {:class "field"} [:a {:class "tag is-link" :href (str config/base-path "/languages/" (url/sanitize %) ".html")} %]] {:key %}) languages)]
        [:div {:class "column"}
         [:h3 {:class "title is-3"} "Technologies"]
         (map #(with-meta [:p {:class "field"} [:a {:class "tag is-link" :href (str config/base-path "/technologies/" (url/sanitize %) ".html")} %]] {:key %}) technologies)]
        [:div {:class "column"}
         [:h3 {:class "title is-3"} "Concepts"]
         (map #(with-meta [:p {:class "field"} [:a {:class "tag is-link" :href (str config/base-path "/concepts/" (url/sanitize %) ".html")} %]] {:key %}) concepts)]]]]]))
