// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__15687__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15688__i = 0, G__15688__a = new Array(arguments.length -  0);
while (G__15688__i < G__15688__a.length) {G__15688__a[G__15688__i] = arguments[G__15688__i + 0]; ++G__15688__i;}
  args = new cljs.core.IndexedSeq(G__15688__a,0);
} 
return G__15687__delegate.call(this,args);};
G__15687.cljs$lang$maxFixedArity = 0;
G__15687.cljs$lang$applyTo = (function (arglist__15689){
var args = cljs.core.seq(arglist__15689);
return G__15687__delegate(args);
});
G__15687.cljs$core$IFn$_invoke$arity$variadic = G__15687__delegate;
return G__15687;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__15690__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15694__i = 0, G__15694__a = new Array(arguments.length -  0);
while (G__15694__i < G__15694__a.length) {G__15694__a[G__15694__i] = arguments[G__15694__i + 0]; ++G__15694__i;}
  args = new cljs.core.IndexedSeq(G__15694__a,0);
} 
return G__15690__delegate.call(this,args);};
G__15690.cljs$lang$maxFixedArity = 0;
G__15690.cljs$lang$applyTo = (function (arglist__15695){
var args = cljs.core.seq(arglist__15695);
return G__15690__delegate(args);
});
G__15690.cljs$core$IFn$_invoke$arity$variadic = G__15690__delegate;
return G__15690;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
