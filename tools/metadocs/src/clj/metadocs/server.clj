(ns metadocs.server
  (:require [metadocs.handler :refer [handler]]
            [org.httpkit.server :refer [run-server]])
  (:gen-class))

(defn -main [& args]
  (let [port 3000]
    (run-server handler {:port port :join? false})))
