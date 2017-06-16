// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__9303__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__9303__auto__)){
return or__9303__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__16304 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16304) : cljs.core.atom.call(null,G__16304));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_16307 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_16307){
return (function (){
var _STAR_always_update_STAR_16308 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(!((callback == null))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_16308;
}});})(_STAR_always_update_STAR_16307))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_16307;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args16309 = [];
var len__10524__auto___16320 = arguments.length;
var i__10525__auto___16321 = (0);
while(true){
if((i__10525__auto___16321 < len__10524__auto___16320)){
args16309.push((arguments[i__10525__auto___16321]));

var G__16322 = (i__10525__auto___16321 + (1));
i__10525__auto___16321 = G__16322;
continue;
} else {
}
break;
}

var G__16315 = args16309.length;
switch (G__16315) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16309.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__16333_16337 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__16334_16338 = null;
var count__16335_16339 = (0);
var i__16336_16340 = (0);
while(true){
if((i__16336_16340 < count__16335_16339)){
var v_16341 = chunk__16334_16338.cljs$core$IIndexed$_nth$arity$2(null,i__16336_16340);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_16341);

var G__16342 = seq__16333_16337;
var G__16343 = chunk__16334_16338;
var G__16344 = count__16335_16339;
var G__16345 = (i__16336_16340 + (1));
seq__16333_16337 = G__16342;
chunk__16334_16338 = G__16343;
count__16335_16339 = G__16344;
i__16336_16340 = G__16345;
continue;
} else {
var temp__6738__auto___16346 = cljs.core.seq(seq__16333_16337);
if(temp__6738__auto___16346){
var seq__16333_16347__$1 = temp__6738__auto___16346;
if(cljs.core.chunked_seq_QMARK_(seq__16333_16347__$1)){
var c__10214__auto___16348 = cljs.core.chunk_first(seq__16333_16347__$1);
var G__16349 = cljs.core.chunk_rest(seq__16333_16347__$1);
var G__16350 = c__10214__auto___16348;
var G__16351 = cljs.core.count(c__10214__auto___16348);
var G__16352 = (0);
seq__16333_16337 = G__16349;
chunk__16334_16338 = G__16350;
count__16335_16339 = G__16351;
i__16336_16340 = G__16352;
continue;
} else {
var v_16353 = cljs.core.first(seq__16333_16347__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_16353);

var G__16354 = cljs.core.next(seq__16333_16347__$1);
var G__16355 = null;
var G__16356 = (0);
var G__16357 = (0);
seq__16333_16337 = G__16354;
chunk__16334_16338 = G__16355;
count__16335_16339 = G__16356;
i__16336_16340 = G__16357;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
