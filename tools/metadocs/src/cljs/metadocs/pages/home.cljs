(ns metadocs.pages.home
  (:require [metadocs.components.summary :as summary]
            [metadocs.components.tagcloud :as tagcloud])
  (:require-macros [metadocs.macros :as macros]))

(defn page []
      (let [contributions (macros/contributions)
            sections (mapcat :sections (macros/contributions))
            perspectives (distinct (mapcat :perspectives sections))
            features (distinct (mapcat :features sections))
            languages (distinct (mapcat :languages sections))
            technologies (distinct (mapcat :technologies sections))
            concepts (distinct (mapcat :concepts sections))]
           [:div
            [:h1 "Contributions"]
            [:div.toc
             (map #(with-meta [:div
                               [:a {:href (str "/metalib/contributions/" (:name %) ".html")}
                                (str (:name %) " \u2015 " (:headline %))]] {:key %})
                  contributions)]
            [summary/component perspectives features languages technologies concepts]
            [tagcloud/component (mapcat :perspectives sections)]
            [tagcloud/component (mapcat :features sections)]
            [tagcloud/component (mapcat :languages sections)]
            [tagcloud/component (mapcat :technologies sections)]
            [tagcloud/component (mapcat :concepts sections)]]))