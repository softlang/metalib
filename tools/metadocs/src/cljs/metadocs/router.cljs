(ns metadocs.router
  (:require [accountant.core :as accountant]
            [metadocs.pages.contribution :as contribution]
            [metadocs.pages.perspective :as perspective]
            [metadocs.pages.feature :as feature]
            [metadocs.pages.language :as language]
            [metadocs.pages.technology :as technology]
            [metadocs.pages.concept :as concept]
            [metadocs.pages.home :as home]
            [metadocs.state :as state]
            [secretary.core :as secretary])
  (:require-macros [metadocs.macros :refer [defcontributionroutes
                                            defperspectiveroutes
                                            deffeatureroutes
                                            deflanguageroutes
                                            deftechnologyroutes
                                            defconceptroutes]]
                   [secretary.core :refer [defroute]]))

(defroute "/metalib/" []
          (swap! state/db assoc :current-page #'home/page))

(defcontributionroutes state/db contribution/page)

(defperspectiveroutes state/db perspective/page)

(deffeatureroutes state/db feature/page)

(deflanguageroutes state/db language/page)

(deftechnologyroutes state/db technology/page)

(defconceptroutes state/db concept/page)

(defn configure! []
      (accountant/configure-navigation!
        {:nav-handler  (fn [path]
                           (secretary/dispatch! path))
         :path-exists? (fn [path]
                           (secretary/locate-route path))})
      (accountant/dispatch-current!))