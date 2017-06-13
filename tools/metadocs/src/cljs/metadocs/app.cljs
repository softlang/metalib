(ns metadocs.app
  (:require [metadocs.pages.current :as current]
            [metadocs.router :as router]
            [reagent.core :as reagent]))

(defn init! []
      (router/configure!)
      (reagent/render [current/page]
                      (.getElementById js/document "app")))
