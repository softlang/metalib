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

(defn load-models []
      (let [model-file-names (-> model-dir
                                 load-model-file-names)]
           (map #(load-json (str model-dir %)) model-file-names)))

(defmacro defcontributionroutes [state page]
          (let [model-file-names (-> model-dir
                                     load-model-file-names)]
               `(do ~@(map (fn [model-file-name]
                               (let [model (-> (str model-dir model-file-name)
                                               load-json)
                                     model-name (:name model)]
                                    ;   (copy (file "resources/public/index.html") (file (str "resources/public/" model-name ".html")))
                                    `(~'defroute ~(str "/metalib/contributions/" model-name ".html") []
                                       (~'swap! ~state ~'assoc :current-page #(~page ~model)))))
                           model-file-names))))

(defmacro defperspectiveroutes [state page]
          (let [models (load-models)
                sections (mapcat :sections models)
                perspectives (mapcat :perspectives sections)]
               `(do ~@(map (fn [perspective]
                               `(~'defroute ~(str "/metalib/perspectives/" perspective ".html") []
                                  (~'swap! ~state ~'assoc :current-page #(~page ~perspective []))))
                           perspectives))))

(defmacro deffeatureroutes [state page]
          (let [models (load-models)
                sections (mapcat :sections models)
                features (mapcat :features sections)]
               `(do ~@(map (fn [feature]
                               `(~'defroute ~(str "/metalib/features/" feature ".html") []
                                  (~'swap! ~state ~'assoc :current-page #(~page ~feature))))
                           features))))

(defmacro deflanguageroutes [state page]
          (let [models (load-models)
                sections (mapcat :sections models)
                languages (mapcat :languages sections)]
               `(do ~@(map (fn [language]
                               `(~'defroute ~(str "/metalib/languages/" language ".html") []
                                  (~'swap! ~state ~'assoc :current-page #(~page ~language))))
                           languages))))

(defmacro deftechnologyroutes [state page]
          (let [models (load-models)
                sections (mapcat :sections models)
                technologies (mapcat :technologies sections)]
               `(do ~@(map (fn [technology]
                               `(~'defroute ~(str "/metalib/technologies/" technology ".html") []
                                  (~'swap! ~state ~'assoc :current-page #(~page ~technology))))
                           technologies))))

(defmacro defconceptroutes [state page]
          (let [models (load-models)
                sections (mapcat :sections models)
                concepts (mapcat :concepts sections)]
               `(do ~@(map (fn [concept]
                               `(~'defroute ~(str "/metalib/concepts/" concept ".html") []
                                  (~'swap! ~state ~'assoc :current-page #(~page ~concept))))
                           concepts))))

(defmacro contributions []
          (let [model-file-names (-> model-dir
                                     load-model-file-names)
                contributions (map #(load-json (str model-dir %)) model-file-names)]
               `(list ~@contributions)))

