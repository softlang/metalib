(ns metadocs.components.section
  (:require [metadocs.components.artifact :as artifact]
            [metadocs.components.summary :as summary]))


(defn component [baseuri {:keys [headline perspectives features languages technologies concepts artifacts]}]
      [:div.section
       [:h2.section-headline headline]
       [summary/component perspectives features languages technologies concepts artifacts]
       (map #(with-meta [artifact/component baseuri %] {:key %}) artifacts)])