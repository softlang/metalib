// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('metadocs.components.tagcloud');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
metadocs.components.tagcloud.wordcloud = (window["WordCloud"]);
metadocs.components.tagcloud.component = (function metadocs$components$tagcloud$component(tags){
var list = cljs.core.reduce_kv((function (p1__18473_SHARP_,p2__18474_SHARP_,p3__18475_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__18473_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__18474_SHARP_,p3__18475_SHARP_], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.frequencies(tags));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(((function (list){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas$tagcloud,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,((((80) / (2)) * (16)) * (2)),cljs.core.cst$kw$height,((((80) / (2)) * (16)) * (2))], null)], null);
});})(list))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (list){
return (function (this$){
var dom_node = reagent.core.dom_node(this$);
var G__18487 = dom_node;
var G__18488 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$list,list,cljs.core.cst$kw$gridSize,(2),cljs.core.cst$kw$shape,cljs.core.cst$kw$diamond,cljs.core.cst$kw$minRotation,(0),cljs.core.cst$kw$maxRotation,(0),cljs.core.cst$kw$weightFactor,((function (G__18487,dom_node,list){
return (function (p1__18476_SHARP_){
return ((25) * Math.pow(p1__18476_SHARP_,0.5));
});})(G__18487,dom_node,list))
], null));
return (metadocs.components.tagcloud.wordcloud.cljs$core$IFn$_invoke$arity$2 ? metadocs.components.tagcloud.wordcloud.cljs$core$IFn$_invoke$arity$2(G__18487,G__18488) : metadocs.components.tagcloud.wordcloud.call(null,G__18487,G__18488));
});})(list))
], null))], null);
});
