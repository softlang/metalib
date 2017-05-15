(ns metadocs.app
  (:require [accountant.core :refer [configure-navigation! dispatch-current!]]
            [cljs-http.client :as http]
            [cljsjs.highlight]
            [cljsjs.highlight.langs.java]
            [cljsjs.highlight.langs.haskell]
            [cljsjs.highlight.langs.scala]
            [clojure.string :refer [join split-lines]]
            [reagent.core :refer [atom dom-node render]]
            [secretary.core :refer [dispatch! locate-route]])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [secretary.core :refer [defroute]]
                   [metadocs.macros :refer [defcontributionroutes]]))

(def wiki-url "https://101wiki.softlang.org/")
(defonce state (atom {}))

(defn highlight-block [block]
  (with-meta (fn [] block)
    {:component-did-mount #(.highlightBlock js/hljs (dom-node %))}))

;; abstract class selection
(defmulti selection-component #(:type %1))

;; class nothing extends selection
(defmethod selection-component "nothing" [selection link]
  [:div.selection-nothing
   link
   (str selection)])

;; class all extends selection
(defmethod selection-component "all" [selection link]
  (let [code (atom nil)]
    (go (let [response (<! (http/get link {:with-credentials? false}))]
          (reset! code (:body response))))
    (fn []
      [:div.selection-all
       [:a {:href link :target "_blank"} "open_in_new"]
       (if (nil? @code)
         [:span "sync"]
         [:div
          [(highlight-block [:pre @code])]])])))

;; class excerpt extends selection
(defmethod selection-component "excerpt" [{:keys [folded unfolded]} link]
  (let [folded? (atom true)
        code (atom nil)]
    (go (let [response (<! (http/get link {:with-credentials? false}))]
          (reset! code (if (nil? unfolded) (:body response) (->> response
                                                                 :body
                                                                 split-lines
                                                                 (take (:to unfolded))
                                                                 (drop (- (:from unfolded) 1))
                                                                 (join "\n"))))))
    (fn []
      [:div.selection-excerpt
       [:a {:href link :target "_blank"} "open_in_new"]
       (if (nil? @code)
         [:span "sync"]
         [(fn []
            (let [line-count (-> @code split-lines count)]
              [:div
               [:div {:style {:height (str (if @folded? (if (nil? unfolded) (:to folded) (- (:to unfolded) (:from unfolded))) line-count) "rem")
                              :margin-top (str (if @folded? (- (if (nil? unfolded) (dec (:from folded)) (- (:from folded) (:from unfolded)))) 0) "rem")}}
                [(highlight-block [:pre @code])]]
               [:button {:on-click #(swap! folded? not)}
                [:i {:style {:transform (str "rotateX(" (if @folded? 0 180) "deg")}} "expand_more"]]]))])])))

;; value languages
(defn languages-component [languages]
  (map #(with-meta [:a.language {:href (str wiki-url "Language:" %) :target "_blank"} %] {:key %}) languages))

;; value technolgies
(defn technologies-component [technologies]
  (map #(with-meta [:a.technology {:href (str wiki-url "Technolgy:" %) :target "_blank"} %] {:key %}) technologies))

;; value concepts
(defn concepts-component [concepts]
  (map #(with-meta [:a.concept {:href (str wiki-url %) :target "_blank"} %] {:key %}) concepts))

;; abstract class projection
(defmulti projection-component :type)
;; class implementation
(defmethod projection-component "implementation" [{:keys [selection link languages technologies concepts]}]
  [:div.projection
   (languages-component languages)
   (technologies-component technologies)
   (concepts-component concepts)
   [selection-component selection link]])
;; class illustration
(defmethod projection-component "illustration" [projection]
  [:div.projection (str projection)])

;; value features
(defn features-component [features]
  (map #(with-meta [:span %] {:key %}) features))

;; class section
(defn section-component [{:keys [features headline projection]}]
  [:div
   ;; value headline
   [:h2 headline]
   ;; value features
   [:h3 (features-component features)]
   [projection-component projection]])

;; class contribution
(defn contribution-component [{:keys [headline sections]}]
  [:div.contribution
   ;; value headline
   [:h1 headline]
   ;; part sections
   (map-indexed #(with-meta [section-component %2] {:key %1}) sections)])

(defn home []
  [:div
   [:a {:href "scala"} "scala"]])

(defcontributionroutes state contribution-component)

(defroute "/" []
  (swap! state assoc :current-page #'home))

(defroute "/metadocs" []
  (swap! state assoc :current-page #'home))

(defroute "/metadocs/" []
  (swap! state assoc :current-page #'home))

(defroute "/metadocs/index.html" []
  (swap! state assoc :current-page #'home))

(defn current-page []
  [(:current-page @state)])

(defn init! []
  (configure-navigation!
   {:nav-handler (fn [path]
                   (dispatch! path))
    :path-exists? (fn [path]
                    (locate-route path))})
  (dispatch-current!)
  (render [current-page]
          (.getElementById js/document "app")))