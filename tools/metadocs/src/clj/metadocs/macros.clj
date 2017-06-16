(ns metadocs.macros
  (:require [cheshire.core :as json]
            [clj-http.client :as http]
            [clojure.java.io :as io]))

(def model-dir "../../models/")

(defn load-model-file-names [model-dir]
  (-> model-dir
      io/file
      .list))

(defn load-json [file-name]
  (json/parse-stream (io/reader file-name) true))

(defn load-models []
  (let [model-file-names (-> model-dir
                             load-model-file-names)]
    (map #(load-json (str model-dir %)) model-file-names)))

(defn delete-dir-contents [dir]
  (doseq [file (-> dir io/file .list)]
    (io/delete-file file true)))

(defmacro defcontributionroutes [state page]
  (let [model-file-names (-> model-dir
                             load-model-file-names)]
    (delete-dir-contents "resources/public/contributions/")
    `(do ~@(map (fn [model-file-name]
                  (let [model (-> (str model-dir model-file-name)
                                  load-json)
                        model-name (:name model)]
                    (io/copy (io/file "resources/public/index.html") (io/file (str "resources/public/contributions/" model-name ".html")))
                    `(~'defroute ~(str "/metalib/contributions/" model-name ".html") []
                       (~'swap! ~state ~'assoc :current-page #(~page ~model)))))
                model-file-names))))

(defmacro defperspectiveroutes [state page]
  (let [models (load-models)
        sections (mapcat :sections models)
        perspectives (set (mapcat :perspectives sections))]
    (delete-dir-contents "resources/public/perspectives/")
    `(do ~@(map (fn [perspective]
                  (let [contributions (map :name (filter #(contains? (set (mapcat :perspectives (:sections %))) perspective) models))]
                    (io/copy (io/file "resources/public/index.html") (io/file (str "resources/public/perspectives/" perspective ".html")))
                    `(~'defroute ~(str "/metalib/perspectives/" perspective ".html") []
                       (~'swap! ~state ~'assoc :current-page #(~page ~perspective (list ~@contributions))))))
                perspectives))))

(defmacro deffeatureroutes [state page]
  (let [models (load-models)
        sections (mapcat :sections models)
        features (set (mapcat :features sections))]
    (delete-dir-contents "resources/public/features/")
    `(do ~@(map (fn [feature]
                  (let [contributions (map :name (filter #(contains? (set (mapcat :features (:sections %))) feature) models))]
                    (io/copy (io/file "resources/public/index.html") (io/file (str "resources/public/features/" feature ".html")))
                    `(~'defroute ~(str "/metalib/features/" feature ".html") []
                       (~'swap! ~state ~'assoc :current-page #(~page ~feature (list ~@contributions))))))
                features))))

(defmacro deflanguageroutes [state page]
  (let [models (load-models)
        sections (mapcat :sections models)
        languages (set (mapcat :languages sections))]
    (delete-dir-contents "resources/public/languages/")
    `(do ~@(map (fn [language]
                  (let [contributions (map :name (filter #(contains? (set (mapcat :languages (:sections %))) language) models))]
                    (io/copy (io/file "resources/public/index.html") (io/file (str "resources/public/languages/" language ".html")))
                    `(~'defroute ~(str "/metalib/languages/" language ".html") []
                       (~'swap! ~state ~'assoc :current-page #(~page ~language (list ~@contributions))))))
                languages))))

(defmacro deftechnologyroutes [state page]
  (let [models (load-models)
        sections (mapcat :sections models)
        technologies (set (mapcat :technologies sections))]
    (delete-dir-contents "resources/public/technologies/")
    `(do ~@(map (fn [technology]
                  (let [contributions (map :name (filter #(contains? (set (mapcat :technologies (:sections %))) technology) models))]
                    (io/copy (io/file "resources/public/index.html") (io/file (str "resources/public/technologies/" technology ".html")))
                    `(~'defroute ~(str "/metalib/technologies/" technology ".html") []
                       (~'swap! ~state ~'assoc :current-page #(~page ~technology (list ~@contributions))))))
                technologies))))

(defmacro defconceptroutes [state page]
  (let [models (load-models)
        sections (mapcat :sections models)
        concepts (set (mapcat :concepts sections))]
    (delete-dir-contents "resources/public/concepts/")
    `(do ~@(map (fn [concept]
                  (let [contributions (map :name (filter #(contains? (set (mapcat :concepts (:sections %))) concept) models))]
                    (io/copy (io/file "resources/public/index.html") (io/file (str "resources/public/concepts/" concept ".html")))
                    `(~'defroute ~(str "/metalib/concepts/" concept ".html") []
                       (~'swap! ~state ~'assoc :current-page #(~page ~concept (list ~@contributions))))))
                concepts))))

(defmacro contributions []
  (let [model-file-names (-> model-dir
                             load-model-file-names)
        contributions (map #(load-json (str model-dir %)) model-file-names)]
    `(list ~@contributions)))

