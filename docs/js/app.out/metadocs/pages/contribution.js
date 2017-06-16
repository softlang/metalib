// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('metadocs.pages.contribution');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('metadocs.components.section');
goog.require('metadocs.components.summary');
metadocs.pages.contribution.page = (function metadocs$pages$contribution$page(p__25775){
var map__25778 = p__25775;
var map__25778__$1 = ((((!((map__25778 == null)))?((((map__25778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25778):map__25778);
var headline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25778__$1,cljs.core.cst$kw$headline);
var baseuri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25778__$1,cljs.core.cst$kw$baseuri);
var sections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25778__$1,cljs.core.cst$kw$sections);
var perspectives = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$perspectives,cljs.core.array_seq([sections], 0)));
var features = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$features,cljs.core.array_seq([sections], 0)));
var languages = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$languages,cljs.core.array_seq([sections], 0)));
var technologies = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$technologies,cljs.core.array_seq([sections], 0)));
var concepts = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$concepts,cljs.core.array_seq([sections], 0)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$contribution,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$contribution_DASH_headline,headline], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadocs.components.summary.component,perspectives,features,languages,technologies,concepts], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (perspectives,features,languages,technologies,concepts,map__25778,map__25778__$1,headline,baseuri,sections){
return (function (p1__25774_SHARP_,p2__25773_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadocs.components.section.component,baseuri,p2__25773_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__25774_SHARP_], null));
});})(perspectives,features,languages,technologies,concepts,map__25778,map__25778__$1,headline,baseuri,sections))
,sections)], null);
});
