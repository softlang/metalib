(ns metadocs.components.tagcloud
  (:require [reagent.core :as reagent]))

(def wordcloud (aget js/window "WordCloud"))

(defn component [tags]
      (let [list (reduce-kv #(conj %1 [%2 %3]) [] (frequencies tags))]
           [(with-meta (fn [] [:canvas.tagcloud {:width  (* (/ 80 2) 16 2)
                                                 :height (* (/ 80 2) 16 2)}])
                       {:component-did-mount (fn [this]
                                                 (let [dom-node (reagent/dom-node this)]
                                                      (wordcloud dom-node
                                                                 (clj->js {:list         list
                                                                           :gridSize     2
                                                                           :shape :diamond
                                                                           :minRotation 0
                                                                           :maxRotation 0
                                                                           :weightFactor #(* 25 (.pow js/Math % 0.5))}))))})]))