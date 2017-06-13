(ns metadocs.pages.current
  (:require [metadocs.components.navigation :as navigation]
            [metadocs.state :as state]))

(defn page []
      [:div
       [navigation/component]
       [(:current-page @state/db)]])