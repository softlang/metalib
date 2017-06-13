(ns metadocs.pages.perspective)

(defn page [perspective contribution-names]
      [:div [:h1 "Perspective: " perspective]
       [:ul (map #(with-meta [:li [:a %]] {:key %}) contribution-names)]])