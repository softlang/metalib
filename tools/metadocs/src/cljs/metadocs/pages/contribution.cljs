(ns metadocs.pages.contribution
  (:require [metadocs.components.section :as section]
            [metadocs.components.summary :as summary]))


(defn page [{:keys [headline baseuri sections]}]
      (let [perspectives (sort (distinct (mapcat :perspectives sections)))
            features (sort (distinct (mapcat :features sections)))
            languages (sort (distinct (mapcat :languages sections)))
            technologies (sort (distinct (mapcat :technologies sections)))
            concepts (sort (distinct (mapcat :concepts sections)))]
           [:div.contribution
            [:h1.contribution-headline headline]
            [summary/component perspectives features languages technologies concepts]
            (map-indexed #(with-meta [section/component baseuri %2] {:key %1}) sections)]))