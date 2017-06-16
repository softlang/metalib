// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('metadocs.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
if(typeof metadocs.state.db !== 'undefined'){
} else {
metadocs.state.db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
