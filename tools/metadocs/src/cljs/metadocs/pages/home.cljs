(ns metadocs.pages.home
  (:require [metadocs.components.summary :as summary]
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
     [:h1 "Contributions"]
     [:table.toc
      [:tbody
       (map #(with-meta [:tr
                         [:td [:a {:href (str "/metalib/contributions/" (-> % :name url/sanitize) ".html")} (:name %)]]
                         [:td (:headline %)]] {:key %})
            contributions)]]
     [:h1 "Ontological summary"]
     [summary/component perspectives features languages technologies concepts]
     [:h1 "Perspectives"]
     [tagcloud/component (mapcat #(set (mapcat :perspectives (:sections %))) contributions) 1280 320]
     [:h1 "Features"]
     [tagcloud/component (mapcat #(set (mapcat :features (:sections %))) contributions) 1280 640]
     [:h1 "Languages"]
     [tagcloud/component (mapcat #(set (mapcat :languages (:sections %))) contributions) 1280 320]
     [:h1 "Technologies"]
     [tagcloud/component (mapcat #(set (mapcat :technologies (:sections %))) contributions) 1280 480]
     [:h1 "Concepts"]
     [tagcloud/component (mapcat #(set (mapcat :concepts (:sections %))) contributions) 1280 480]]))
