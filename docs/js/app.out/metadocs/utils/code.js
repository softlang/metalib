// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('metadocs.utils.code');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
metadocs.utils.code.elide = (function metadocs$utils$code$elide(code){
var elide_SINGLEQUOTE_ = (function metadocs$utils$code$elide_$_elide_SINGLEQUOTE_(lines,skip,result){
if(cljs.core.empty_QMARK_(lines)){
return result;
} else {
if(!((cljs.core.re_find(/BEGIN .../,cljs.core.first(lines)) == null))){
return metadocs$utils$code$elide_$_elide_SINGLEQUOTE_(cljs.core.rest(lines),true,result);
} else {
if(!((cljs.core.re_find(/END .../,cljs.core.first(lines)) == null))){
return metadocs$utils$code$elide_$_elide_SINGLEQUOTE_(cljs.core.rest(lines),false,result);
} else {
if(skip === true){
return metadocs$utils$code$elide_$_elide_SINGLEQUOTE_(cljs.core.rest(lines),true,result);
} else {
return metadocs$utils$code$elide_$_elide_SINGLEQUOTE_(cljs.core.rest(lines),false,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(cljs.core.first(lines),"# ...","...")], null)));

}
}
}
}
});
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",elide_SINGLEQUOTE_(clojure.string.split_lines(code),false,cljs.core.PersistentVector.EMPTY));
});
metadocs.utils.code.strip = (function metadocs$utils$code$strip(code,from,to){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(clojure.string.split_lines(code),(from - (1)),to));
});
