(ns metadocs.components.navigation)

(defn component []
  [:nav {:class "navbar" :role "navigation" :aria-label "main navigation"}
   [:div {:class "container"}
    [:div {:class "navbar-brand"}
     [:a {:class "navbar-item" :href "/metalib/"}
      "metalib"]]]])
