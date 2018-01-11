(ns metadocs.components.artifact
  (:require [cljs-http.client :as http]
            [clojure.string :as string]
            [metadocs.config :as config]
            [metadocs.utils.code :as code]
            [metadocs.utils.github :as github]
            [metadocs.wrapper.highlight :as highlight]
            [reagent.core :as reagent])
  (:require-macros [cljs.core.async.macros :as async]))

(defmulti component (fn [_ artifact] (:type @artifact)))

(defmethod component "none" [baseuri artifact]
  (let [link (:link @artifact)
        link-edit? (reagent/atom false)]
    (fn []
      [:div {:class "box"}
       [:div {:class "levels"}
        [:div {:class "level-left"}
         [:div {:class "level-item"}
          [:a {:href (str @baseuri link) :target "_blank"} link]]]]])))

(defmethod component "all" [baseuri artifact]
  (let [link (:link @artifact)
        link-edit? (reagent/atom false)]
    (fn []
      [:div {:class "box"}
       [:div {:class "levels"}
        [:div {:class "level-left"}
         [:div {:class "level-item"}
          [:a {:href (str @baseuri link) :target "_blank"} link]]]]
       (if (some true? (map #(string/ends-with? (string/lower-case link) %) config/bin-eols))
         [:img {:src (github/to-raw-uri (str @baseuri link))}]
         [(let [snippet (reagent/atom nil)]
            (async/go (let [response (<! (http/get (github/to-raw-uri (str @baseuri link)) {:with-credentials? false}))]
                        (reset! snippet (code/elide (:body response)))))
            (fn []
              (if (nil? @snippet)
                [:div]
                [(highlight/wrapper [:pre @snippet])])))])])))

(defmethod component "some" [baseuri artifact]
  (let [from (reagent/cursor artifact [:from])
        to (reagent/cursor artifact [:to])
        link (reagent/cursor artifact [:link])
        snippet (reagent/atom nil)
        edit? (reagent/atom false)]
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
            [:button {:class "button is-edit" :on-click #(reset! edit? true)}
             [:i {:class "far fa-edit"}]]]]])
       (if (nil? @snippet)
         [:div]
         [:div
          [(highlight/wrapper [:pre @snippet])]])])))
