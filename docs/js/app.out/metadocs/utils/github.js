// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('metadocs.utils.github');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
metadocs.utils.github.to_raw_uri = (function metadocs$utils$github$to_raw_uri(uri){
return clojure.string.replace(clojure.string.replace(uri,"/blob",""),"github.com","raw.githubusercontent.com");
});
