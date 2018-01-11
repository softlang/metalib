(ns metadocs.handler
    (:require [compojure.core :refer [ANY GET defroutes]]
              [compojure.route :refer [files resources not-found]]
              [ring.util.response :refer [content-type resource-response]]))

(defroutes routes
           (resources "/")
           (resources "/public")
           (resources "/metalib")
           (GET "/metalib/" [] (content-type (resource-response "index.html" {:root "public"})
                                            "text/html")))

(def handler (-> routes))
