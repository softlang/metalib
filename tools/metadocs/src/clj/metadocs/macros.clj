(ns metadocs.macros
    (:require [cheshire.core :refer [parse-stream]]
      [clj-http.client :as http]
      [clojure.java.io :refer [copy file reader]]
      [clojure.string :refer [join last-index-of split-lines]]))

(def model-dir "../../models/")

(defn load-model-file-names [model-dir]
      (-> model-dir
          file
          .list))

(defn load-json [file-name]
      (parse-stream (reader file-name) true))

(defmacro defcontributionroutes [state contribution-component]
          (let [model-file-names (-> model-dir
                                     load-model-file-names)]
               `(do ~@(map (fn [model-file-name]
                               (let [model (-> (str model-dir model-file-name)
                                               load-json)
                                     model-name (:name model)]
                                    ;   (copy (file "resources/public/index.html") (file (str "resources/public/" model-name ".html")))
                                    `(~'defroute ~(str "/metalib/" model-name ".html") []
                                       (~'swap! ~state ~'assoc :current-page #(~contribution-component ~model)))))
                           model-file-names))))

(defmacro contributions []
          (let [model-file-names (-> model-dir
                                     load-model-file-names)
                contributions (map #(load-json (str model-dir %)) model-file-names)]
               `(list ~@contributions)))

