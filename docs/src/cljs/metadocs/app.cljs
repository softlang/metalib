(ns metadocs.app
  (:require [accountant.core :refer [configure-navigation! dispatch-current!]]
            [cljs-http.client :as http]
            [cljsjs.highlight]
            [cljsjs.highlight.langs.java]
            [cljsjs.highlight.langs.haskell]
            [cljsjs.highlight.langs.scala]
            [clojure.string :refer [lower-case ends-with? replace join split-lines]]
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

(defn to-raw-uri [uri]
  (replace (replace uri "/blob" "") "github.com" "raw.githubusercontent.com"))

;; abstract class selection
(defmulti artifact-component #(:type %2))

;; class nothing extends artifact
(defmethod artifact-component "none" [baseuri {:keys [link]}]
  [:div.artifact-none
   [:a {:href (str baseuri link) :target "_blank"} link]])

;; class all extends artifact
(defmethod artifact-component "all" [baseuri {:keys [link]}]
  (let [code (atom nil)]
    (go (let [response (<! (http/get (to-raw-uri (str baseuri link)) {:with-credentials? false}))]
          (reset! code (:body response))))
    (fn []
      [:div.artifact-all
       [:a {:href (str baseuri link) :target "_blank"} link]
       (if (nil? @code)
         [:span "sync"]
         [:div
          [(highlight-block [:pre @code])]])])))

;; class some extends artifact
(defmethod artifact-component "some" [baseuri {:keys [from to link]}]
  (let [code (atom nil)]
    (go (let [response (<! (http/get (to-raw-uri (str baseuri link)) {:with-credentials? false}))]
          (reset! code (->> response
                            :body
                            split-lines
                            (take to)
                            (drop (dec from))
                            (join "\n")))))
    (fn []
      [:div.artifact-some
       [:a {:href (str baseuri link) :target "_blank"} link]
       (if (nil? @code)
         [:span "sync"]
         [:div
          [(highlight-block [:pre @code])]])])))

;; value languages
(defn languages-component [languages]
  (map #(with-meta [:span [:a {:href (str wiki-url "Language:" %) :target "_blank"} %]] {:key %}) languages))

;; value technolgies
(defn technologies-component [technologies]
  (map #(with-meta [:span [:a {:href (str wiki-url "Technology:" %) :target "_blank"} %]] {:key %}) technologies))

;; value concepts
(defn concepts-component [concepts]
  (map #(with-meta [:span [:a {:href (str wiki-url %) :target "_blank"} %]] {:key %}) concepts))

;; part artifacts
(defn artifacts-component [baseuri artifacts]
  (map (fn [artifact]
         (with-meta 
           (if (some true? (map #(ends-with? (lower-case (:link artifact)) %) (list ".png")))
             [:img.artifact-all {:src (to-raw-uri (str baseuri (:link artifact)))}]
             [artifact-component baseuri artifact]) {:key (:link artifact)}))
       artifacts))

;; value features
(defn features-component [features]
   (map #(with-meta [:span [:a {:href (str wiki-url "Feature:" %)} %]] {:key %}) features))

;; abstract class perspective
(defn perspective-component [perspectives]
  (map #(with-meta [:span [:a {:href (str wiki-url "Perspective:" %)} %]]) perspectives))

;; class section
(defn section-component [baseuri {:keys [headline perspectives features languages technologies concepts artifacts]}]
  [:div.section
   ;; value headline
   [:h2.section-headline headline]
   [:div.section-table
    ;; part perspective
    [:div.perspectives
     [:span "Perspective"]
     (perspective-component perspectives)]
    ;; value features
    [:div.features
     [:span "Features"]
     (features-component features)]
    ;; value languages
    [:div.languages
     [:span "Languages"]
     (languages-component languages)]
    ;; value technologies
    [:div.technologies
     [:span "Technologies"]
     (technologies-component technologies)]
    ;; value concepts
    [:div.concepts
     [:span "Concepts"]
     (concepts-component concepts)]]
   ;; part artifacts
   (artifacts-component baseuri artifacts)])

;; class contribution
(defn contribution-component [{:keys [headline baseuri sections]}]
  [:div.contribution
   ;; value headline
   [:h1.contribution-headline headline]
   ;; part sections
   (map-indexed #(with-meta [section-component baseuri %2] {:key %1}) sections)])

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
