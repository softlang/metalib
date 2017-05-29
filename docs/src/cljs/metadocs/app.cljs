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
                   [metadocs.macros :refer [defcontributionroutes deftoc]]))

(enable-console-print!)

(def wiki-url "https://101wiki.softlang.org/")
(defonce state (atom {}))

(defn highlight-block [block]
  (with-meta (fn [] block)
    {:component-did-mount #(.highlightBlock js/hljs (dom-node %))}))

;; abstract class selection
(defmulti artifact-component #(:type %))

;; class nothing extends artifact
(defmethod artifact-component "none" [{:keys [link]}]
  [:div.artifact-none
   [:a {:href link :target "_blank"} "open_in_new"]])

;; class all extends artifact
(defmethod artifact-component "all" [{:keys [link]}]
  (let [code (atom nil)]
    (go (let [response (<! (http/get link {:with-credentials? false}))]
          (reset! code (:body response))))
    (fn []
      [:div.artifact-all
       [:a {:href link :target "_blank"} "open_in_new"]
       (if (nil? @code)
         [:span "sync"]
         [:div
          [(highlight-block [:pre @code])]])])))

;; class some extends artifact
(defmethod artifact-component "some" [{:keys [from to link]}]
  (let [code (atom nil)]
    (go (let [response (<! (http/get link {:with-credentials? false}))]
          (reset! code (->> response
                            :body
                            split-lines
                            (take to)
                            (drop (dec from))
                            (join "\n")))))
    (fn []
      [:div.artifact-some
       [:a {:href link :target "_blank"} "open_in_new"]
       (if (nil? @code)
         [:span "sync"]
         [:div
          [(highlight-block [:pre @code])]])])))

;; value languages
(defn languages-component [languages]
  (map #(with-meta [:a.language {:href (str wiki-url "Language:" %) :target "_blank"} %] {:key %}) languages))

;; value technolgies
(defn technologies-component [technologies]
  (map #(with-meta [:a.technology {:href (str wiki-url "Technology:" %) :target "_blank"} %] {:key %}) technologies))

;; value concepts
(defn concepts-component [concepts]
  (map #(with-meta [:a.concept {:href (str wiki-url %) :target "_blank"} %] {:key %}) concepts))

;; part artifacts
(defn artifacts-component [artifacts]
  (map #(with-meta [artifact-component %] {:key (:link %)}) artifacts))

;; abstract class projection
(defmulti projection-component :type)
;; class implementation
(defmethod projection-component "component" [{:keys [artifacts languages technologies concepts]}]
  [:div.projection-component])

;; class illustration
(defmethod projection-component "capture" [{:keys [link languages technologies concepts]}]
  [:div.projection-capture
   ;; value languages
   (languages-component languages)
   ;; value technologies
   (technologies-component technologies)
   ;; value concepts
   (concepts-component concepts)
   [:img {:src link}]])

;; value features
(defn features-component [features]
  [:div
   "Features:"
   (map #(with-meta [:span.feature %] {:key %}) features)])

;; abstract class perspective
(defn perspective-component [perspective]
  [:span.perspective perspective])

;; class section
(defn section-component [{:keys [headline perspective features languages technologies concepts artifacts]}]
  [:div.section
   ;; value headline
   [:h2.section-headline headline]
   ;; part perspective
   (perspective-component perspective)
   ;; value features
   (features-component features)
   ;; value languages
   (languages-component languages)
   ;; value technologies
   (technologies-component technologies)
   ;; value concepts
   (concepts-component concepts)
   ;; part artifacts
   (artifacts-component artifacts)])

;; class contribution
(defn contribution-component [{:keys [headline sections]}]
  [:div.contribution
   ;; value headline
   [:h1.contribution-headline headline]
   ;; part sections
   (map-indexed #(with-meta [section-component %2] {:key %1}) sections)])

(deftoc)

(defn home []
  [:div
   [:h1 "Contributions"]
   [:ul.toc
    (map #(with-meta [:li [:a {:href (:route %)} (:name %)]] {:key %}) toc)]])

(defcontributionroutes state contribution-component)

(defroute "/" []
  (swap! state assoc :current-page #'home))

(defroute "/metalib" []
  (swap! state assoc :current-page #'home))

(defroute "/metalib/" []
  (swap! state assoc :current-page #'home))

(defroute "/metalib/index.html" []
  (swap! state assoc :current-page #'home))

(defn nav []
  [:nav.nav
   [:a.nav-link {:href "/metalib/"} "metalib"]])

(defn current-page []
  [:div
   [nav]
   [(:current-page @state)]])

(defn init! []
  (configure-navigation!
   {:nav-handler (fn [path]
                   (dispatch! path))
    :path-exists? (fn [path]
                    (locate-route path))})
  (dispatch-current!)
  (render [current-page]
          (.getElementById js/document "app")))
