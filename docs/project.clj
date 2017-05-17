(defproject
  boot-project
  "0.0.0-SNAPSHOT"
  :dependencies
  [[adzerk/boot-cljs "2.0.0"]
   [adzerk/boot-cljs-repl "0.3.3"]
   [adzerk/boot-reload "0.5.1"]
   [com.cemerick/piggieback "0.2.1"]
   [cheshire "5.7.1"]
   [clj-http "3.5.0"]
   [cljs-http "0.1.43"]
   [cljsjs/highlight "9.6.0-0"]
   [compojure "1.6.0"]
   [deraen/boot-sass "0.3.1"]
   [http-kit "2.2.0"]
   [org.clojure/clojure "1.9.0-alpha16"]
   [org.clojure/clojurescript "1.9.521"]
   [org.clojure/core.async "0.3.442"]
   [org.clojure/tools.nrepl "0.2.13"]
   [pandeiro/boot-http "0.8.0"]
   [reagent "0.6.1"]
   [reagent-utils "0.2.1"]
   [ring/ring-core "1.6.0"]
   [secretary "1.2.3"]
   [venantius/accountant "0.2.0"]
   [weasel "0.7.0"]
   [boot/core "2.6.0" :scope "compile"]]
  :repositories
  [["clojars" {:url "https://repo.clojars.org/"}]
   ["maven-central" {:url "https://repo1.maven.org/maven2"}]]
  :source-paths
  ["src/cljs" "src/clj" "resources"])