(ns metadocs.components.summary
      (:require [metadocs.components.perspective :as perspective]
                [metadocs.components.feature :as feature]
                [metadocs.components.language :as language]
                [metadocs.components.technology :as technology]
                [metadocs.components.concept :as concept]))

(defn component [perspectives features languages technologies concepts]
      [:div.summary
       [:div.perspectives
        [:span "Perspectives"]
        (map #(with-meta [perspective/component %] {:key %}) perspectives)]
       [:div.features
        [:span "Features"]
        (map #(with-meta [feature/component %] {:key %}) features)]
       [:div.languages
        [:span "Languages"]
        (map #(with-meta [language/component %] {:key %}) languages)]
       [:div.technologies
        [:span "Technologies"]
        (map #(with-meta [technology/component %] {:key %}) technologies)]
       [:div.concepts
        [:span "Concepts"]
        (map #(with-meta [concept/component %] {:key %}) concepts)]])
