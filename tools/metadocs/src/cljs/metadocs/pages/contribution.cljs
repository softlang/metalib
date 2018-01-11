(ns metadocs.pages.contribution
  (:require [cljsjs.filesaverjs]
            [clojure.walk :as walk]
            [reagent.core :as reagent]
            [metadocs.components.section :as section]
            [metadocs.components.summary :as summary]))

(defn model->blob [model]
  (let [json #js [(-> @model clj->js (js/JSON.stringify nil 4))]]
    (-> json (js/Blob. json #js {:type "application/json;charset=utf-8"}))))

(defn move-section-up [sections key]
  (when (> key 0)
    (let [previous-section (get @sections (dec key))
          section (get @sections key)]
      (swap! sections assoc key previous-section)
      (swap! sections assoc (dec key) section))))

(defn move-section-down [sections key]
  (when (< key (dec (count @sections)))
    (let [next-section (get @sections (inc key))
          section (get @sections key)]
      (swap! sections assoc key next-section)
      (swap! sections assoc (inc key) section))))

(defn remove-section [sections key]
  (reset! sections (into [] (concat (take key @sections) (drop (inc key) @sections)))))

(defn add-section [sections]
  (swap! sections conj {:features []
                        :headline "New section"
                        :perspectives []
                        :languages []
                        :technologies []
                        :concepts []
                        :artifacts []}))


(defn load-model [file atom]
  (let [file-reader (js/FileReader.)]
    (aset file-reader "onload" #(->> file-reader
                                     .-result
                                     js/JSON.parse
                                     js->clj
                                     walk/keywordize-keys
                                     (reset! atom)))
    (.readAsText file-reader file)))

(defn page [model]
  (let [model (reagent/atom model)
        sections (reagent/cursor model [:sections])
        name (reagent/cursor model [:name])
        baseuri (reagent/cursor model [:baseuri])
        headline (reagent/cursor model [:headline])
        perspectives (sort (distinct (mapcat :perspectives @sections)))
        features (sort (distinct (mapcat :features @sections)))
        languages (sort (distinct (mapcat :languages @sections)))
        technologies (sort (distinct (mapcat :technologies @sections)))
        concepts (sort (distinct (mapcat :concepts @sections)))]
    (fn []
      [:div
       [:div {:class "hero is-primary"}
        [:div {:class "hero-body"}
         [:div {:class "container"}
          [:h1 {:class "title"} @headline]]]]
       [:section {:class "section"}
        [:div {:class "container"}
         [:div {:class "field is-horizontal"}
          [:div {:class "field-label is-normal"}
           [:label {:class "label"} "Contribution name"]]
          [:div {:class "field-body"}
           [:div {:class "field"}
            [:p {:class "control"}
             [:input {:class "input" :type "text" :on-change #(->> % .-target .-value (reset! name)) :value @name}]]]]]
         [:div {:class "field is-horizontal"}
          [:div {:class "field-label is-normal"}
           [:label {:class "label"} "Headline"]]
          [:div {:class "field-body"}
           [:div {:class "field"}
            [:p {:class "control"}
             [:input {:class "input" :type "text" :on-change #(->> % .-target .-value (reset! headline)) :value @headline}]]]]]
         [:div {:class "field is-horizontal"}
          [:div {:class "field-label is-normal"}
           [:label {:class "label"} "Baseuri"]]
          [:div {:class "field-body"}
           [:div {:class "field"}
            [:p {:class "control"}
             [:input {:class "input" :type "url" :on-change #(->> % .-target .-value (reset! baseuri)) :value @baseuri}]]]]]
         [:div {:class "field is-grouped is-grouped-right"}
          [:div {:class "control"}
           [:div {:class "file is-large"}
            [:label {:class "file-label"}
             [:input {:class "file-input" :type "file" :on-change #(-> % .-target .-files (aget 0) (load-model model))}]
             [:span {:class "file-cta"}
              [:span {:class "file-icon"}
               [:i {:class "far fa-folder-open"}]]
              [:span {:class "file-label"}
               "Load"]]]]]
          [:div {:class "control"}
           [:button {:class "button is-large" :on-click #(reset! model {:name ""
                                                                        :basuri ""
                                                                        :headline ""
                                                                        :sections []})}
            [:span {:class "icon is-large"}
             [:i {:class "far fa-file"}]]
            [:span "New"]]]
          [:div {:class "control"}
           [:button {:class "button is-large" :on-click #(-> model model->blob (js/saveAs (str @name ".json")))}
            [:span {:class "icon is-large"}
             [:i {:class "far fa-save"}]]
            [:span "Save"]]]]]]
       (map #(let [section (reagent/cursor sections [%])]
               (with-meta
                 [:section {:class "section"}
                  [:div {:class "container"}
                   [section/component baseuri section (partial move-section-up sections %) (partial move-section-down sections %) (partial remove-section sections %) sections]]] {:key %}))
            (range (count @sections)))
       [:section {:class "section"}
        [:div {:class "container"}
         [:div {:class "columns is-centered"}
          [:div {:class "column is-narrow"}
           [:button {:class "button is-large" :on-click (partial add-section sections)}
            [:span {:class "icon is-large"}
             [:i {:class "far fa-plus-square"}]]]]]]]])))
