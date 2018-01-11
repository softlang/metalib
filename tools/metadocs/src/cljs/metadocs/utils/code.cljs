(ns metadocs.utils.code
  (:require [clojure.string :as string]))

(defn elide [code]
  (letfn [(elide' [lines skip result]
            (cond
              (empty? lines) result
              (some? (re-find #"BEGIN ..." (first lines))) (elide' (rest lines) true result)
              (some? (re-find #"END ..." (first lines))) (elide' (rest lines) false result)
              (true? skip) (elide' (rest lines) true result)
              :else (elide' (rest lines) false (concat result [(string/replace (first lines) "# ..." "...")]))))]
    (string/join "\n" (elide' (string/split-lines code) false []))))

(defn strip [code from to]
  (let [lines (string/split-lines code)]
    (string/join "\n" (subvec lines (max 0 (dec from)) (min (count lines) to)))))
