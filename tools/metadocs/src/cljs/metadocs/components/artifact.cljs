(ns metadocs.components.artifact
  (:require [cljs-http.client :as http]
            [clojure.string :as string]
            [metadocs.config :as config]
            [metadocs.utils.code :as code]
            [metadocs.utils.github :as github]
            [metadocs.wrapper.highlight :as highlight]
            [reagent.core :as reagent])
  (:require-macros [cljs.core.async.macros :as async]))

(defn set-type [type artifact value]
  (case value
    "none" (do (swap! artifact dissoc :from)
               (swap! artifact dissoc :to)
               (reset! type "none"))
    "all" (do (swap! artifact dissoc :from)
              (swap! artifact dissoc :to)
              (reset! type "all"))
    "some" (do (swap! artifact assoc :from 1)
               (swap! artifact assoc :to 1)
               (reset! type "some"))))


(defn none-component [baseuri artifact delete edit?]
  (let [link (reagent/cursor artifact [:link])
        type (reagent/cursor artifact [:type])]
    [:div {:class "artifact box"}
     (if @edit?
       [:div {:class "field has-addons"}
        [:div {:class "control"}
         [:span {:class "select"}
          [:select {:on-change #(->> % .-target .-value (set-type type artifact)) :value @type}
           [:option "none"]
           [:option "all"]
           [:option "some"]]]]
        [:div {:class "control is-expanded"}
         [:input {:class "input" :type "text" :on-change #(->> % .-target .-value (reset! link)) :value @link}]]
        [:div {:class "control"}
         [:button {:class "button" :on-click #(reset! edit? false)}
          [:i {:class "far fa-check-circle"}]]]]
       [:div {:class "level"}
        [:div {:class "level-left"}
         [:div {:class "level-item"}
          [:a {:href (str @baseuri @link) :target "_blank"} @link]]]
        [:div {:class "level-right"}
         [:div {:class "level-item"}
          [:div {:class "control"}
           [:button {:class "button is-edit" :on-click #(reset! edit? true)}
            [:i {:class "far fa-edit"}]]]]
         [:div {:class "level-item"}
          [:div {:class "control"}
           [:button {:class "button is-edit" :on-click delete}
            [:i {:class "far fa-trash-alt"}]]]]]])]))


(defn all-component [baseuri artifact delete edit?]
  (let [link (reagent/cursor artifact [:link])
        type (reagent/cursor artifact [:type])
        snippet (reagent/atom nil)]
    (fn []
      (async/go (let [response (<! (http/get (github/to-raw-uri (str @baseuri @link)) {:with-credentials? false
                                                                                       :throw-exceptions false
                                                                                       :accept "text/plain"}))]
                  (if (= 200 (:status response))
                    (reset! snippet (code/elide (:body response)))
                    (reset! snippet (:body response)))))
      [:div {:class "artifact box"}
       (if @edit?
         [:div {:class "field has-addons"}
          [:div {:class "control"}
           [:span {:class "select"}
            [:select {:on-change #(->> % .-target .-value (set-type type artifact)) :value @type}
             [:option "none"]
             [:option "all"]
             [:option "some"]]]]
          [:div {:class "control is-expanded"}
           [:input {:class "input" :type "text" :on-change #(->> % .-target .-value (reset! link)) :value @link}]]
          [:div {:class "control"}
           [:button {:class "button" :on-click #(reset! edit? false)}
            [:i {:class "far fa-check-circle"}]]]]
         [:div {:class "level"}
          [:div {:class "level-left"}
           [:div {:class "level-item"}
            [:a {:href (str @baseuri @link) :target "_blank"} @link]]]
          [:div {:class "level-right"}
           [:div {:class "level-item"}
            [:div {:class "control"}
             [:button {:class "button is-edit" :on-click #(reset! edit? true)}
              [:i {:class "far fa-edit"}]]]]
           [:div {:class "level-item"}
            [:div {:class "control"}
             [:button {:class "button is-edit" :on-click delete}
              [:i {:class "far fa-trash-alt"}]]]]]])
       (if (nil? @snippet)
         [:div]
         (if (some true? (map #(string/ends-with? (string/lower-case @link) %) config/bin-eols))
           [:img {:src (github/to-raw-uri (str @baseuri @link))}]
           [:div
            [(highlight/wrapper [:pre @snippet])]]))])))


(defn some-component [baseuri artifact delete edit?]
  (let [from (reagent/cursor artifact [:from])
        to (reagent/cursor artifact [:to])
        link (reagent/cursor artifact [:link])
        type (reagent/cursor artifact [:type])
        snippet (reagent/atom nil)]
    (fn []
      (async/go (let [response (<! (http/get (github/to-raw-uri (str @baseuri @link)) {:with-credentials? false
                                                                                       :throw-exceptions false
                                                                                       :accept "text/plain"}))]
                  (if (= 200 (:status response))
                    (reset! snippet (code/elide (code/strip (:body response) @from @to)))
                    (reset! snippet (:body response)))))
      [:div {:class "artifact box"}
       (if @edit?
         [:div {:class "field has-addons"}
          [:div {:class "control"}
           [:span {:class "select"}
            [:select {:on-change #(->> % .-target .-value (set-type type artifact)) :value @type}
             [:option "none"]
             [:option "all"]
             [:option "some"]]]]
          [:div {:class "control is-expanded"}
           [:input {:class "input" :type "text" :on-change #(->> % .-target .-value (reset! link)) :value @link}]]
          [:div {:class "control"}
           [:input {:class "input" :type "number" :min 1 :step 1 :on-change #(->> % .-target .-value js/parseInt (reset! from)) :value @from}]]
          [:div {:class "control"}
           [:input {:class "input" :type "number" :min 1 :step 1 :on-change #(->> % .-target .-value js/parseInt (reset! to)) :value @to}]]
          [:div {:class "control"}
           [:button {:class "button" :on-click #(reset! edit? false)}
            [:i {:class "far fa-check-circle"}]]]]
         [:div {:class "level"}
          [:div {:class "level-left"}
           [:div {:class "level-item"}
            [:a {:href (str @baseuri @link) :target "_blank"} @link]]]
          [:div {:class "level-right"}
           [:div {:class "level-item"}
            [:div {:class "control"}
             [:button {:class "button is-edit" :on-click #(reset! edit? true)}
              [:i {:class "far fa-edit"}]]]]
           [:div {:class "level-item"}
            [:div {:class "control"}
             [:button {:class "button is-edit" :on-click delete}
              [:i {:class "far fa-trash-alt"}]]]]]])
       (if (nil? @snippet)
         [:div]
         [:div
          [(highlight/wrapper [:pre @snippet])]])])))

(defn component [baseuri artifact delete]
  (let [edit? (reagent/atom false)]
    (fn []
      (case (:type @artifact)
        "none" [none-component baseuri artifact delete edit?]
        "all" [all-component baseuri artifact delete edit?]
        "some" [some-component baseuri artifact delete edit?]))))
