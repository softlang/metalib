(ns metadocs.components.tagcloud
  (:require [reagent.core :as reagent]))

(def wordcloud (aget js/window "WordCloud"))

(defn component [tags width height]
  (let [list (reduce-kv #(conj %1 [%2 %3]) [] (frequencies tags))
        maximum (apply max (map second list))]
    [(with-meta (fn [] [:canvas.tagcloud {:width  width
                                          :height height}])
                {:component-did-mount (fn [this]
                                        (let [dom-node (reagent/dom-node this)]
                                          (wordcloud dom-node
                                                     (clj->js {:list         list
                                                               :gridSize     2
                                                               :shape        :diamond
                                                               :minRotation  0
                                                               :maxRotation  0
                                                               :weightFactor #(* 120 (/ % maximum))}))))})]))
