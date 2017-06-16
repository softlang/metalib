// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('metadocs.components.section');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('metadocs.components.artifact');
goog.require('metadocs.components.summary');
metadocs.components.section.component = (function metadocs$components$section$component(baseuri,p__25766){
var map__25769 = p__25766;
var map__25769__$1 = ((((!((map__25769 == null)))?((((map__25769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25769):map__25769);
var headline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25769__$1,cljs.core.cst$kw$headline);
var perspectives = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25769__$1,cljs.core.cst$kw$perspectives);
var features = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25769__$1,cljs.core.cst$kw$features);
var languages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25769__$1,cljs.core.cst$kw$languages);
var technologies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25769__$1,cljs.core.cst$kw$technologies);
var concepts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25769__$1,cljs.core.cst$kw$concepts);
var artifacts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25769__$1,cljs.core.cst$kw$artifacts);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$section_DASH_headline,headline], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadocs.components.summary.component,perspectives,features,languages,technologies,concepts,artifacts], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__25769,map__25769__$1,headline,perspectives,features,languages,technologies,concepts,artifacts){
return (function (p1__25765_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadocs.components.artifact.component,baseuri,p1__25765_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__25765_SHARP_], null));
});})(map__25769,map__25769__$1,headline,perspectives,features,languages,technologies,concepts,artifacts))
,artifacts)], null);
});
