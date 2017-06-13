(ns metadocs.wrapper.highlight
  (:require [cljsjs.highlight]
            [cljsjs.highlight.langs.java]
            [cljsjs.highlight.langs.haskell]
            [cljsjs.highlight.langs.scala]
            [reagent.core :as reagent]))

(defn wrapper [block]
      (with-meta (fn [] block)
                 {:component-did-mount #(.highlightBlock js/hljs (reagent/dom-node %))}))