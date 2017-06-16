// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('metadocs.wrapper.highlight');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
metadocs.wrapper.highlight.wrapper = (function metadocs$wrapper$highlight$wrapper(block){
return cljs.core.with_meta((function (){
return block;
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (p1__18471_SHARP_){
return hljs.highlightBlock(reagent.core.dom_node(p1__18471_SHARP_));
})], null));
});
