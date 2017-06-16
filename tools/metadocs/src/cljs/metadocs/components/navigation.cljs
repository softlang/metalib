(ns metadocs.components.navigation)

(defn component []
      [:nav.navigation
       [:a.navigation-link {:href "/metalib/"}
        [:b "metalib"]
        " - A Chrestomathy of DSL implementations"]])