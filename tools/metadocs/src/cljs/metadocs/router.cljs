(ns metadocs.router
  (:require [accountant.core :as accountant]
            [metadocs.pages.contribution :as contribution]
            [metadocs.pages.home :as home]
            [metadocs.state :as state]
            [secretary.core :as secretary])
  (:require-macros [metadocs.macros :refer [defcontributionroutes]]
                   [secretary.core :refer [defroute]]))

(defroute "/metalib/" []
          (swap! state/db assoc :current-page #'home/page))

(defcontributionroutes state/db contribution/page)

(defn configure! []
      (accountant/configure-navigation!
        {:nav-handler  (fn [path]
                           (secretary/dispatch! path))
         :path-exists? (fn [path]
                           (secretary/locate-route path))})
      (accountant/dispatch-current!))