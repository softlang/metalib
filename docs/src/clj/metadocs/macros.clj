(ns metadocs.macros
  (:require [cheshire.core :refer [parse-stream]]
            [clj-http.client :as http]
            [clojure.java.io :refer [file reader]]
            [clojure.string :refer [join last-index-of split-lines]]))

(def model-dir "models/")
(def wiki-base-url "https://101wiki.softlang.org/")

(defn load-model-file-names [model-dir]
  (-> model-dir
      file
      .list))

(defn strip-file-extension [file-name]
  (subs file-name
        0
        (last-index-of file-name ".")))

(defn load-json [file-name]
  (parse-stream (reader (str model-dir file-name)) true))

(defmacro defcontributionroutes [state contribution-component]
  (let [model-file-names (-> model-dir
                             load-model-file-names)]    
    `(do ~@(map (fn [model-file-name]
                  (let [model-name (strip-file-extension model-file-name)
                        model (load-json model-file-name)]
                    `(~'defroute ~(str "/metadocs/" model-name) []
                      (~'swap! ~'state ~'assoc :current-page #(~contribution-component ~model)))))
                model-file-names))))