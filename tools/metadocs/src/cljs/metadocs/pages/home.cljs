(ns metadocs.pages.home
  (:require [metadocs.components.summary :as summary]
            [metadocs.components.tagcloud :as tagcloud])
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
     [:h1 "Contributions"]
     [:table.toc
      [:tbody
       (map #(with-meta [:tr
                         [:td [:a {:href (str "/metalib/contributions/" (:name %) ".html")} (:name %)]]
                         [:td (:headline %)]] {:key %})
            contributions)]]
     [:h1 "Ontological summary"]
     [summary/component perspectives features languages technologies concepts]
     [tagcloud/component (mapcat :perspectives sections)]
     [tagcloud/component (mapcat :features sections)]
     [tagcloud/component (mapcat :languages sections)]
     [tagcloud/component (mapcat :technologies sections)]
     [tagcloud/component (mapcat :concepts sections)]]))