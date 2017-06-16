// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('metadocs.app');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('metadocs.pages.current');
goog.require('metadocs.router');
goog.require('reagent.core');
metadocs.app.init_BANG_ = (function metadocs$app$init_BANG_(){
metadocs.router.configure_BANG_();

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadocs.pages.current.page], null),document.getElementById("app"));
});
