(ns metadocs.components.technology
  (:require [metadocs.config :as config]
            [metadocs.utils.url :as url]
            [reagent.core :as reagent]))

(defn component [technology remove]
  (let [edit? (reagent/atom false)]
    (fn []
      (if @edit?
        [:div {:class "field has-addons"}
         [:div {:class "control"}
          [:input {:class "input" :on-change #(reset! technology (-> % .-target .-value)) :value @technology}]]
         [:div {:class "control"}
          [:button {:class "button" :on-click #(reset! edit? false)}
           [:i {:class "far fa-check-circle"}]]]]
        [:div {:class "perspective tags has-addons"}
         [:a {:class "tag is-link" :href (str config/base-path "/technologies/" (url/sanitize @technology) ".html")} @technology]
         [:a {:class "tag is-edit" :on-click #(reset! edit? true)}
          [:i {:class "far fa-edit"}]]
         [:a {:class "tag is-remove" :on-click remove}
          [:i {:class "far fa-trash-alt"}]]]))))
