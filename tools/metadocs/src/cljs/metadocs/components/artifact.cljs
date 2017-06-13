(ns metadocs.components.artifact
  (:require [cljs-http.client :as http]
            [clojure.string :as string]
            [metadocs.config :as config]
            [metadocs.utils.code :as code]
            [metadocs.utils.github :as github]
            [metadocs.wrapper.highlight :as highlight]
            [reagent.core :as reagent])
  (:require-macros [cljs.core.async.macros :as async]))

(defmulti component #(:type %2))

(defmethod component "none" [baseuri {:keys [link]}]
           [:div.artifact-none
            [:a {:href (str baseuri link) :target "_blank"} link]])

(defmethod component "all" [baseuri {:keys [link]}]
           [:div.artifact-all
            [:a {:href (str baseuri link) :target "_blank"} link]
            (if (some true? (map #(string/ends-with? (string/lower-case link) %) config/bin-eols))
              [:img.artifact-all {:src (github/to-raw-uri (str baseuri link))}]
              [(let [artifact (reagent/atom nil)]
                    (async/go (let [response (<! (http/get (github/to-raw-uri (str baseuri link)) {:with-credentials? false}))]
                                   (reset! artifact (code/elide (:body response)))))
                    (fn []
                        (if (nil? @artifact)
                          [:span "sync"]
                          [:div
                           [(highlight/wrapper [:pre @artifact])]])))])])

(defmethod component "some" [baseuri {:keys [from to link]}]
           (let [artifact (reagent/atom nil)]
                (async/go (let [response (<! (http/get (github/to-raw-uri (str baseuri link)) {:with-credentials? false}))]
                               (reset! artifact (code/elide (code/strip (:body response) from to)))))
                (fn []
                    [:div.artifact-some
                     [:a {:href (str baseuri link) :target "_blank"} link]
                     (if (nil? @artifact)
                       [:span "sync"]
                       [:div
                        [(highlight/wrapper [:pre @artifact])]])])))