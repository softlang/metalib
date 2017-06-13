(ns metadocs.pages.home
  (:require [metadocs.components.summary :as summary])
  (:require-macros [metadocs.macros :as macros]))

(defn page []
      (let [contributions (macros/contributions)
            sections (mapcat :sections (macros/contributions))
            perspectives (distinct (mapcat :perspectives sections))
            features (distinct (mapcat :perspectives sections))
            languages (distinct (mapcat :perspectives sections))
            technologies (distinct (mapcat :perspectives sections))
            concepts (distinct (mapcat :perspectives sections))]
           [:div
            [:h1 "Contributions"]
            [:div.toc
             (map #(with-meta [:div
                               [:a {:href (str "/metalib/" (:name %) ".html")}
                                (str (:name %) " \u2015 " (:headline %))]] {:key %})
                  contributions)]
            [summary/component perspectives features languages technologies concepts]]))