(ns metadocs.pages.contribution
  (:require [metadocs.components.section :as section]
            [metadocs.components.summary :as summary]))


(defn page [{:keys [headline baseuri sections]}]
      (let [perspectives (distinct (mapcat :perspectives sections))
            features (distinct (mapcat :features sections))
            languages (distinct (mapcat :languages sections))
            technologies (distinct (mapcat :technologies sections))
            concepts (distinct (mapcat :concepts sections))]
           [:div.contribution
            [:h1.contribution-headline headline]
            [summary/component perspectives features languages technologies concepts]
            (map-indexed #(with-meta [section/component baseuri %2] {:key %1}) sections)]))