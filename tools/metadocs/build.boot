(set-env! :dependencies '[[adzerk/boot-cljs "2.0.0"]
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
                          [org.slf4j/slf4j-nop "1.7.25"]
                          [pandeiro/boot-http "0.8.0"]
                          [reagent "0.6.1"]
                          [reagent-utils "0.2.1"]
                          [ring/ring-core "1.6.0"]
                          [secretary "1.2.3"]
                          [venantius/accountant "0.2.0"]
                          [weasel "0.7.0"]]
          :resource-paths #{"resources"}
          :source-paths #{"src/cljs" "src/clj"})

(require '[adzerk.boot-cljs :refer [cljs]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
         '[adzerk.boot-reload :refer [reload]]
         '[deraen.boot-sass :refer [sass]]
         '[pandeiro.boot-http :refer [serve]]
         '[metadocs.validator])

(task-options!
 repl {:middleware '[cemerick.piggieback/wrap-cljs-repl]})

(deftask dev []
  (comp (serve :handler 'metadocs.handler/handler
               :reload true)
        (watch)
        (reload :on-jsload 'metadocs.app/init!)
        (cljs-repl)
        (sass :source-map true)
        (cljs :compiler-options {:optimizations :none
                                 :parallel-build true})))

(deftask prod []
  (comp
   (notify)
   (sass)
   (cljs :compiler-options {:optimizations  :advanced
                            :parallel-build true
                            :source-map     false})
   (aot :namespace '#{metadocs.server})
   (pom :project 'metadocs
        :version "1.0.0")
   (uber)
   (jar :file "metadocs.jar"
        :main 'metadocs.server)
   (target "target")))
