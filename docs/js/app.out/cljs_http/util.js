// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('clojure.string');
goog.require('cognitect.transit');
goog.require('goog.userAgent');
goog.require('no.en.core');
/**
 * Returns the value of the HTTP basic authentication header for
 *   `credentials`.
 */
cljs_http.util.basic_auth = (function cljs_http$util$basic_auth(credentials){
if(cljs.core.truth_(credentials)){
var vec__16829 = ((cljs.core.map_QMARK_(credentials))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(credentials,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$username,cljs.core.cst$kw$password], null)):credentials);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16829,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16829,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Basic "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.base64_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)].join('')))].join('');
} else {
return null;
}
});
/**
 * Build the url from the request map.
 */
cljs_http.util.build_url = (function cljs_http$util$build_url(p__16834){
var map__16844 = p__16834;
var map__16844__$1 = ((((!((map__16844 == null)))?((((map__16844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16844):map__16844);
var scheme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16844__$1,cljs.core.cst$kw$scheme);
var server_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16844__$1,cljs.core.cst$kw$server_DASH_name);
var server_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16844__$1,cljs.core.cst$kw$server_DASH_port);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16844__$1,cljs.core.cst$kw$uri);
var query_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16844__$1,cljs.core.cst$kw$query_DASH_string);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16850 = (new goog.Uri());
G__16850.setScheme(cljs.core.name((function (){var or__9303__auto__ = scheme;
if(cljs.core.truth_(or__9303__auto__)){
return or__9303__auto__;
} else {
return cljs.core.cst$kw$http;
}
})()));

G__16850.setDomain(server_name);

G__16850.setPort(server_port);

G__16850.setPath(uri);

G__16850.setQuery(query_string,true);

return G__16850;
})())].join('');
});
/**
 * Returns dash separated string `s` in camel case.
 */
cljs_http.util.camelize = (function cljs_http$util$camelize(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/-/)));
});
/**
 * Build the headers from the map.
 */
cljs_http.util.build_headers = (function cljs_http$util$build_headers(m){
return cljs.core.clj__GT_js(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(m)),cljs.core.vals(m)));
});
/**
 * Returns the user agent.
 */
cljs_http.util.user_agent = (function cljs_http$util$user_agent(){
return goog.userAgent.getUserAgentString();
});
/**
 * Returns true if the user agent is an Android client.
 */
cljs_http.util.android_QMARK_ = (function cljs_http$util$android_QMARK_(){
return cljs.core.re_matches(/.*android.*/i,cljs_http.util.user_agent());
});
/**
 * Transit decode an object from `s`.
 */
cljs_http.util.transit_decode = (function cljs_http$util$transit_decode(s,type,opts){
var rdr = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,opts);
return cognitect.transit.read(rdr,s);
});
/**
 * Transit encode `x` into a String.
 */
cljs_http.util.transit_encode = (function cljs_http$util$transit_encode(x,type,opts){
var wrtr = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,opts);
return cognitect.transit.write(wrtr,x);
});
/**
 * JSON decode an object from `s`.
 */
cljs_http.util.json_decode = (function cljs_http$util$json_decode(s){
var temp__6736__auto__ = ((!(clojure.string.blank_QMARK_(s)))?JSON.parse(s):null);
if(cljs.core.truth_(temp__6736__auto__)){
var v = temp__6736__auto__;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
} else {
return null;
}
});
/**
 * JSON encode `x` into a String.
 */
cljs_http.util.json_encode = (function cljs_http$util$json_encode(x){
var G__16927 = cljs.core.clj__GT_js(x);
return JSON.stringify(G__16927);
});
cljs_http.util.parse_headers = (function cljs_http$util$parse_headers(headers){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16937_SHARP_,p2__16936_SHARP_){
var vec__16943 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__16936_SHARP_,/:\s+/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16943,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16943,(1),null);
if((clojure.string.blank_QMARK_(k)) || (clojure.string.blank_QMARK_(v))){
return p1__16937_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16937_SHARP_,clojure.string.lower_case(k),v);
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var or__9303__auto__ = headers;
if(cljs.core.truth_(or__9303__auto__)){
return or__9303__auto__;
} else {
return "";
}
})(),/(\n)|(\r)|(\r\n)|(\n\r)/));
});
