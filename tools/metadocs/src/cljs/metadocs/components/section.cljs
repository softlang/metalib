(ns metadocs.components.section
  (:require [metadocs.components.artifact :as artifact]
            [metadocs.components.concept :as concept]
            [metadocs.components.feature :as feature]
            [metadocs.components.language :as language]
            [metadocs.components.technology :as technology]
            [metadocs.components.perspective :as perspective]
            [reagent.core :as reagent]))

(defn delete [atom key]
  (reset! atom (into [] (concat (take key @atom) (drop (inc key) @atom)))))

(defn component [baseuri section move-section-up move-section-down remove-section sections]
  (let [headline (reagent/cursor section [:headline])
        headline-edit? (reagent/atom false)
        perspectives (reagent/cursor section [:perspectives])
        features (reagent/cursor section [:features])
        languages (reagent/cursor section [:languages])
        technologies (reagent/cursor section [:technologies])
        concepts (reagent/cursor section [:concepts])
        artifacts (reagent/cursor section [:artifacts])]
    (fn []
      [:div {:class "card"}
       (if @headline-edit?
         [:div {:class "card-header"}
          [:div {:class "card-header-title"}
           [:div {:class "field has-addons" :style {:width "100%"}}
            [:div {:class "control is-expanded"}
             [:input {:class "input" :on-change #(reset! headline (-> % .-target .-value)) :value @headline}]]
            [:div {:class "control"}
             [:button {:class "button" :on-click #(reset! headline-edit? false)}
              [:i {:class "far fa-check-circle"}]]]]]]
         [:div {:class "card-header section-card-header"}
          [:p {:class "card-header-title"}
           @headline]
          [:a {:class "card-header-icon" :on-click move-section-up :disabled (= @section (first @sections))}
           [:span {:class "icon"}
            [:i {:class "far fa-arrow-alt-circle-up"}]]]
          [:a {:class "card-header-icon" :on-click move-section-down :disabled (= @section (last @sections))}
           [:span {:class "icon"}
            [:i {:class "far fa-arrow-alt-circle-down"}]]]
          [:a {:class "card-header-icon" :on-click #(reset! headline-edit? true)}
           [:span {:class "icon"}
            [:i {:class "far fa-edit"}]]]
          [:a {:class "card-header-icon" :on-click remove-section}
           [:span {:class "icon"}
            [:i {:class "far fa-trash-alt"}]]]])
       [:div {:class "card-content"}
        [:div {:class "content"}
         [:div {:class "columns"}
          [:div {:class "column perspective-column"}
           [:div {:class "level"}
            [:div {:class "level-left"}
             [:div {:class "level-item"}
              [:h3 {:class "title is3"}
               "Perspectives"]]]
            [:div {:class "level-right"}
             [:div {:class "level-item"}
              [:button {:class "button is-small add-button" :on-click #(swap! perspectives conj "New Perspective")}
               [:span {:class "icon"}
                [:i {:class "far fa-plus-square"}]]]]]]
           (map #(let [perspective (reagent/cursor perspectives [%])]
                   (with-meta [perspective/component perspective (partial delete perspectives %)] {:key %}))
                (-> @perspectives count range))]
          [:div {:class "column feature-column"}
           [:div {:class "level"}
            [:div {:class "level-left"}
             [:div {:class "level-item"}
              [:h3 {:class "title is3"}
               "Features"]]]
            [:div {:class "level-right"}
             [:div {:class "level-item"}
              [:button {:class "button is-small add-button" :on-click #(swap! features conj "New Feature")}
               [:span {:class "icon"}
                [:i {:class "far fa-plus-square"}]]]]]]
           (map #(let [feature (reagent/cursor features [%])]
                   (with-meta [feature/component feature (partial delete features %)] {:key %}))
                (-> @features count range))]
          [:div {:class "column language-column"}
           [:div {:class "level"}
            [:div {:class "level-left"}
             [:div {:class "level-item"}
              [:h3 {:class "title is3"}
               "Languages"]]]
            [:div {:class "level-right"}
             [:div {:class "level-item"}
              [:button {:class "button is-small add-button" :on-click #(swap! languages conj "New Language")}
               [:span {:class "icon"}
                [:i {:class "far fa-plus-square"}]]]]]]
           (map #(let [language (reagent/cursor languages [%])]
                   (with-meta [language/component language (partial delete languages %)] {:key %}))
                (-> @languages count range))]
          [:div {:class "column technology-column"}
           [:div {:class "level"}
            [:div {:class "level-left"}
             [:div {:class "level-item"}
              [:h3 {:class "title is3"}
               "Technologies"]]]
            [:div {:class "level-right"}
             [:div {:class "level-item"}
              [:button {:class "button is-small add-button" :on-click #(swap! technologies conj "New Technology")}
               [:span {:class "icon"}
                [:i {:class "far fa-plus-square"}]]]]]]
           (map #(let [technology (reagent/cursor technologies [%])]
                   (with-meta [technology/component technology (partial delete technologies %)] {:key %}))
                (-> @technologies count range))]
          [:div {:class "column concept-column"}
           [:div {:class "level"}
            [:div {:class "level-left"}
             [:div {:class "level-item"}
              [:h3 {:class "title is3"}
               "Concepts"]]]
            [:div {:class "level-right"}
             [:div {:class "level-item"}
              [:button {:class "button is-small add-button" :on-click #(swap! concepts conj "New Concept")}
               [:span {:class "icon"}
                [:i {:class "far fa-plus-square"}]]]]]]
           (map #(let [concept (reagent/cursor concepts [%])]
                   (with-meta [concept/component concept (partial delete concepts %)] {:key %}))
                (-> @concepts count range))]]
         (map #(let [artifact (reagent/cursor artifacts [%])]
                 (with-meta [artifact/component baseuri artifact] {:key %}))
              (-> @artifacts count range))]]])))

