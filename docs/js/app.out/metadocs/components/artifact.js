// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('metadocs.components.artifact');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('metadocs.config');
goog.require('metadocs.utils.code');
goog.require('metadocs.utils.github');
goog.require('metadocs.wrapper.highlight');
goog.require('reagent.core');
if(typeof metadocs.components.artifact.component !== 'undefined'){
} else {
metadocs.components.artifact.component = (function (){var method_table__10334__auto__ = (function (){var G__25700 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25700) : cljs.core.atom.call(null,G__25700));
})();
var prefer_table__10335__auto__ = (function (){var G__25701 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25701) : cljs.core.atom.call(null,G__25701));
})();
var method_cache__10336__auto__ = (function (){var G__25702 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25702) : cljs.core.atom.call(null,G__25702));
})();
var cached_hierarchy__10337__auto__ = (function (){var G__25703 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25703) : cljs.core.atom.call(null,G__25703));
})();
var hierarchy__10338__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metadocs.components.artifact","component"),((function (method_table__10334__auto__,prefer_table__10335__auto__,method_cache__10336__auto__,cached_hierarchy__10337__auto__,hierarchy__10338__auto__){
return (function (p1__25699_SHARP_,p2__25698_SHARP_){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(p2__25698_SHARP_);
});})(method_table__10334__auto__,prefer_table__10335__auto__,method_cache__10336__auto__,cached_hierarchy__10337__auto__,hierarchy__10338__auto__))
,cljs.core.cst$kw$default,hierarchy__10338__auto__,method_table__10334__auto__,prefer_table__10335__auto__,method_cache__10336__auto__,cached_hierarchy__10337__auto__));
})();
}
metadocs.components.artifact.component.cljs$core$IMultiFn$_add_method$arity$3(null,"none",(function (baseuri,p__25704){
var map__25705 = p__25704;
var map__25705__$1 = ((((!((map__25705 == null)))?((((map__25705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25705):map__25705);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25705__$1,cljs.core.cst$kw$link);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$artifact_DASH_none,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(baseuri),cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join(''),cljs.core.cst$kw$target,"_blank"], null),link], null)], null);
}));
metadocs.components.artifact.component.cljs$core$IMultiFn$_add_method$arity$3(null,"all",(function (baseuri,p__25708){
var map__25709 = p__25708;
var map__25709__$1 = ((((!((map__25709 == null)))?((((map__25709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25709):map__25709);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25709__$1,cljs.core.cst$kw$link);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$artifact_DASH_all,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(baseuri),cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join(''),cljs.core.cst$kw$target,"_blank"], null),link], null),(cljs.core.truth_(cljs.core.some(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__25709,map__25709__$1,link){
return (function (p1__25707_SHARP_){
return clojure.string.ends_with_QMARK_(clojure.string.lower_case(link),p1__25707_SHARP_);
});})(map__25709,map__25709__$1,link))
,metadocs.config.bin_eols)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$artifact_DASH_all,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,metadocs.utils.github.to_raw_uri([cljs.core.str.cljs$core$IFn$_invoke$arity$1(baseuri),cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join(''))], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var artifact = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var c__22123__auto___25732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22123__auto___25732,artifact,map__25709,map__25709__$1,link){
return (function (){
var f__22124__auto__ = (function (){var switch__18453__auto__ = ((function (c__22123__auto___25732,artifact,map__25709,map__25709__$1,link){
return (function (state_25723){
var state_val_25724 = (state_25723[(1)]);
if((state_val_25724 === (1))){
var inst_25711 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(baseuri),cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join('');
var inst_25712 = metadocs.utils.github.to_raw_uri(inst_25711);
var inst_25713 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_25714 = [false];
var inst_25715 = cljs.core.PersistentHashMap.fromArrays(inst_25713,inst_25714);
var inst_25716 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_25712,cljs.core.array_seq([inst_25715], 0));
var state_25723__$1 = state_25723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25723__$1,(2),inst_25716);
} else {
if((state_val_25724 === (2))){
var inst_25718 = (state_25723[(2)]);
var inst_25719 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_25718);
var inst_25720 = metadocs.utils.code.elide(inst_25719);
var inst_25721 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(artifact,inst_25720) : cljs.core.reset_BANG_.call(null,artifact,inst_25720));
var state_25723__$1 = state_25723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25723__$1,inst_25721);
} else {
return null;
}
}
});})(c__22123__auto___25732,artifact,map__25709,map__25709__$1,link))
;
return ((function (switch__18453__auto__,c__22123__auto___25732,artifact,map__25709,map__25709__$1,link){
return (function() {
var metadocs$components$artifact$state_machine__18454__auto__ = null;
var metadocs$components$artifact$state_machine__18454__auto____0 = (function (){
var statearr_25728 = [null,null,null,null,null,null,null];
(statearr_25728[(0)] = metadocs$components$artifact$state_machine__18454__auto__);

(statearr_25728[(1)] = (1));

return statearr_25728;
});
var metadocs$components$artifact$state_machine__18454__auto____1 = (function (state_25723){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__(state_25723);
if(cljs.core.keyword_identical_QMARK_(result__18456__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e25729){if((e25729 instanceof Object)){
var ex__18457__auto__ = e25729;
var statearr_25730_25733 = state_25723;
(statearr_25730_25733[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25723);

return cljs.core.cst$kw$recur;
} else {
throw e25729;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18455__auto__,cljs.core.cst$kw$recur)){
var G__25734 = state_25723;
state_25723 = G__25734;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
metadocs$components$artifact$state_machine__18454__auto__ = function(state_25723){
switch(arguments.length){
case 0:
return metadocs$components$artifact$state_machine__18454__auto____0.call(this);
case 1:
return metadocs$components$artifact$state_machine__18454__auto____1.call(this,state_25723);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
metadocs$components$artifact$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = metadocs$components$artifact$state_machine__18454__auto____0;
metadocs$components$artifact$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = metadocs$components$artifact$state_machine__18454__auto____1;
return metadocs$components$artifact$state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__22123__auto___25732,artifact,map__25709,map__25709__$1,link))
})();
var state__22125__auto__ = (function (){var statearr_25731 = (f__22124__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22124__auto__.cljs$core$IFn$_invoke$arity$0() : f__22124__auto__.call(null));
(statearr_25731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22123__auto___25732);

return statearr_25731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22125__auto__);
});})(c__22123__auto___25732,artifact,map__25709,map__25709__$1,link))
);


return ((function (artifact,map__25709,map__25709__$1,link){
return (function (){
if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(artifact) : cljs.core.deref.call(null,artifact)) == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"sync"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadocs.wrapper.highlight.wrapper(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(artifact) : cljs.core.deref.call(null,artifact))], null))], null)], null);
}
});
;})(artifact,map__25709,map__25709__$1,link))
})()], null))], null);
}));
metadocs.components.artifact.component.cljs$core$IMultiFn$_add_method$arity$3(null,"some",(function (baseuri,p__25735){
var map__25736 = p__25735;
var map__25736__$1 = ((((!((map__25736 == null)))?((((map__25736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25736):map__25736);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25736__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25736__$1,cljs.core.cst$kw$to);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25736__$1,cljs.core.cst$kw$link);
var artifact = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var c__22123__auto___25760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22123__auto___25760,artifact,map__25736,map__25736__$1,from,to,link){
return (function (){
var f__22124__auto__ = (function (){var switch__18453__auto__ = ((function (c__22123__auto___25760,artifact,map__25736,map__25736__$1,from,to,link){
return (function (state_25751){
var state_val_25752 = (state_25751[(1)]);
if((state_val_25752 === (1))){
var inst_25738 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(baseuri),cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join('');
var inst_25739 = metadocs.utils.github.to_raw_uri(inst_25738);
var inst_25740 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_];
var inst_25741 = [false];
var inst_25742 = cljs.core.PersistentHashMap.fromArrays(inst_25740,inst_25741);
var inst_25743 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_25739,cljs.core.array_seq([inst_25742], 0));
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25751__$1,(2),inst_25743);
} else {
if((state_val_25752 === (2))){
var inst_25745 = (state_25751[(2)]);
var inst_25746 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_25745);
var inst_25747 = metadocs.utils.code.strip(inst_25746,from,to);
var inst_25748 = metadocs.utils.code.elide(inst_25747);
var inst_25749 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(artifact,inst_25748) : cljs.core.reset_BANG_.call(null,artifact,inst_25748));
var state_25751__$1 = state_25751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25751__$1,inst_25749);
} else {
return null;
}
}
});})(c__22123__auto___25760,artifact,map__25736,map__25736__$1,from,to,link))
;
return ((function (switch__18453__auto__,c__22123__auto___25760,artifact,map__25736,map__25736__$1,from,to,link){
return (function() {
var metadocs$components$artifact$state_machine__18454__auto__ = null;
var metadocs$components$artifact$state_machine__18454__auto____0 = (function (){
var statearr_25756 = [null,null,null,null,null,null,null];
(statearr_25756[(0)] = metadocs$components$artifact$state_machine__18454__auto__);

(statearr_25756[(1)] = (1));

return statearr_25756;
});
var metadocs$components$artifact$state_machine__18454__auto____1 = (function (state_25751){
while(true){
var ret_value__18455__auto__ = (function (){try{while(true){
var result__18456__auto__ = switch__18453__auto__(state_25751);
if(cljs.core.keyword_identical_QMARK_(result__18456__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18456__auto__;
}
break;
}
}catch (e25757){if((e25757 instanceof Object)){
var ex__18457__auto__ = e25757;
var statearr_25758_25761 = state_25751;
(statearr_25758_25761[(5)] = ex__18457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25751);

return cljs.core.cst$kw$recur;
} else {
throw e25757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18455__auto__,cljs.core.cst$kw$recur)){
var G__25762 = state_25751;
state_25751 = G__25762;
continue;
} else {
return ret_value__18455__auto__;
}
break;
}
});
metadocs$components$artifact$state_machine__18454__auto__ = function(state_25751){
switch(arguments.length){
case 0:
return metadocs$components$artifact$state_machine__18454__auto____0.call(this);
case 1:
return metadocs$components$artifact$state_machine__18454__auto____1.call(this,state_25751);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
metadocs$components$artifact$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$0 = metadocs$components$artifact$state_machine__18454__auto____0;
metadocs$components$artifact$state_machine__18454__auto__.cljs$core$IFn$_invoke$arity$1 = metadocs$components$artifact$state_machine__18454__auto____1;
return metadocs$components$artifact$state_machine__18454__auto__;
})()
;})(switch__18453__auto__,c__22123__auto___25760,artifact,map__25736,map__25736__$1,from,to,link))
})();
var state__22125__auto__ = (function (){var statearr_25759 = (f__22124__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22124__auto__.cljs$core$IFn$_invoke$arity$0() : f__22124__auto__.call(null));
(statearr_25759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22123__auto___25760);

return statearr_25759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22125__auto__);
});})(c__22123__auto___25760,artifact,map__25736,map__25736__$1,from,to,link))
);


return ((function (artifact,map__25736,map__25736__$1,from,to,link){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$artifact_DASH_some,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(baseuri),cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join(''),cljs.core.cst$kw$target,"_blank"], null),link], null),((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(artifact) : cljs.core.deref.call(null,artifact)) == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"sync"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadocs.wrapper.highlight.wrapper(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(artifact) : cljs.core.deref.call(null,artifact))], null))], null)], null))], null);
});
;})(artifact,map__25736,map__25736__$1,from,to,link))
}));
