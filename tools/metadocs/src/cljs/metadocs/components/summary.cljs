(ns metadocs.components.summary
  (:require [reagent.core :as reagent]
            [metadocs.components.perspective :as perspective]
            [metadocs.components.feature :as feature]
            [metadocs.components.language :as language]
            [metadocs.components.technology :as technology]
            [metadocs.components.concept :as concept]))

(defn delete [atom key]
  (reset! atom (into [] (concat (take key @atom) (drop (inc key) @atom)))))

(defn component [perspectives features languages technologies concepts]
  (fn []
    [:div
     [:div
      [:h3 "Perspectives"]
      [:ul
       (map #(let [perspective (reagent/cursor perspectives [%])]
               (with-meta [:li [perspective/component perspective (partial delete perspectives %)]] {:key %}))
            (-> @perspectives count range))]]
     [:div
      [:h3 "Features"]
      [:ul
       (map #(with-meta [:li [feature/component %]] {:key %}) @features)]]
     [:div
      [:h3 "Languages"]
      [:ul
       (map #(with-meta [:li [language/component %]] {:key %}) @languages)]]
     [:div
      [:h3 "Technologies"]
      [:ul
       (map #(with-meta [:li [technology/component %]] {:key %}) @technologies)]]
     [:div
      [:h3"Concepts"]
      [:ul
       (map #(let [concept (reagent/cursor concepts [%])]
               (with-meta [:li [concept/component concept (partial delete concepts %)]] {:key %}))
            (-> @concepts count range))]]]))
