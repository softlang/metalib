// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__9291__auto__ = v;
if(cljs.core.truth_(and__9291__auto__)){
return (v > (0));
} else {
return and__9291__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__25264_SHARP_,p2__25263_SHARP_){
var vec__25268 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__25263_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25268,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25268,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25264_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25297_SHARP_){
return cljs_http.client.encode_val(k,p1__25297_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__25311){
var vec__25316 = p__25311;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25316,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25316,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__25323_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25323_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__9291__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__9291__auto__){
var and__9291__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__9291__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__9291__auto____$1;
}
} else {
return and__9291__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__6736__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6736__auto__)){
var params = temp__6736__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__25335 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25335) : client.call(null,G__25335));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__25342_SHARP_){
return cljs_http.client.decode_body(p1__25342_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__10531__auto__ = [];
var len__10524__auto___25350 = arguments.length;
var i__10525__auto___25351 = (0);
while(true){
if((i__10525__auto___25351 < len__10524__auto___25350)){
args__10531__auto__.push((arguments[i__10525__auto___25351]));

var G__25352 = (i__10525__auto___25351 + (1));
i__10525__auto___25351 = G__25352;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((1) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10532__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__25345){
var vec__25346 = p__25345;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25346,(0),null);
return ((function (vec__25346,default_headers){
return (function (request){
var temp__6736__auto__ = (function (){var or__9303__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__9303__auto__)){
return or__9303__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var default_headers__$1 = temp__6736__auto__;
var G__25349 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25349) : client.call(null,G__25349));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__25346,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq25343){
var G__25344 = cljs.core.first(seq25343);
var seq25343__$1 = cljs.core.next(seq25343);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__25344,seq25343__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__10531__auto__ = [];
var len__10524__auto___25386 = arguments.length;
var i__10525__auto___25387 = (0);
while(true){
if((i__10525__auto___25387 < len__10524__auto___25386)){
args__10531__auto__.push((arguments[i__10525__auto___25387]));

var G__25388 = (i__10525__auto___25387 + (1));
i__10525__auto___25387 = G__25388;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((1) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10532__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__25381){
var vec__25382 = p__25381;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25382,(0),null);
return ((function (vec__25382,accept){
return (function (request){
var temp__6736__auto__ = (function (){var or__9303__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__9303__auto__)){
return or__9303__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var accept__$1 = temp__6736__auto__;
var G__25385 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25385) : client.call(null,G__25385));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__25382,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq25367){
var G__25368 = cljs.core.first(seq25367);
var seq25367__$1 = cljs.core.next(seq25367);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__25368,seq25367__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__10531__auto__ = [];
var len__10524__auto___25411 = arguments.length;
var i__10525__auto___25412 = (0);
while(true){
if((i__10525__auto___25412 < len__10524__auto___25411)){
args__10531__auto__.push((arguments[i__10525__auto___25412]));

var G__25416 = (i__10525__auto___25412 + (1));
i__10525__auto___25412 = G__25416;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((1) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10532__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__25403){
var vec__25404 = p__25403;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25404,(0),null);
return ((function (vec__25404,content_type){
return (function (request){
var temp__6736__auto__ = (function (){var or__9303__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__9303__auto__)){
return or__9303__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var content_type__$1 = temp__6736__auto__;
var G__25407 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25407) : client.call(null,G__25407));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__25404,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq25401){
var G__25402 = cljs.core.first(seq25401);
var seq25401__$1 = cljs.core.next(seq25401);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__25402,seq25401__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__6736__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6736__auto__)){
var params = temp__6736__auto__;
var map__25423 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__25423__$1 = ((((!((map__25423 == null)))?((((map__25423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25423):map__25423);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25423__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25423__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__25425 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25425) : client.call(null,G__25425));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__25430 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__25430__$1 = ((((!((map__25430 == null)))?((((map__25430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25430):map__25430);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25430__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25430__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__25430,map__25430__$1,decoding,decoding_opts){
return (function (p1__25426_SHARP_){
return cljs_http.util.transit_decode(p1__25426_SHARP_,decoding,decoding_opts);
});})(map__25430,map__25430__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__25430,map__25430__$1,decoding,decoding_opts,transit_decode){
return (function (p1__25427_SHARP_){
return cljs_http.client.decode_body(p1__25427_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__25430,map__25430__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__6736__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6736__auto__)){
var params = temp__6736__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__25438 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25438) : client.call(null,G__25438));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__25440_SHARP_){
return cljs_http.client.decode_body(p1__25440_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__25454){
var map__25455 = p__25454;
var map__25455__$1 = ((((!((map__25455 == null)))?((((map__25455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25455):map__25455);
var req = map__25455__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25455__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__25457 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25457) : client.call(null,G__25457));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__25474){
var map__25475 = p__25474;
var map__25475__$1 = ((((!((map__25475 == null)))?((((map__25475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25475):map__25475);
var request = map__25475__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25475__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25475__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25475__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__9291__auto__ = form_params;
if(cljs.core.truth_(and__9291__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__9291__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__25477 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25477) : client.call(null,G__25477));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__25498_25508 = cljs.core.seq(params);
var chunk__25499_25509 = null;
var count__25500_25510 = (0);
var i__25501_25511 = (0);
while(true){
if((i__25501_25511 < count__25500_25510)){
var vec__25502_25512 = chunk__25499_25509.cljs$core$IIndexed$_nth$arity$2(null,i__25501_25511);
var k_25513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25502_25512,(0),null);
var v_25514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25502_25512,(1),null);
if(cljs.core.coll_QMARK_(v_25514)){
form_data.append(cljs.core.name(k_25513),cljs.core.first(v_25514),cljs.core.second(v_25514));
} else {
form_data.append(cljs.core.name(k_25513),v_25514);
}

var G__25515 = seq__25498_25508;
var G__25516 = chunk__25499_25509;
var G__25517 = count__25500_25510;
var G__25518 = (i__25501_25511 + (1));
seq__25498_25508 = G__25515;
chunk__25499_25509 = G__25516;
count__25500_25510 = G__25517;
i__25501_25511 = G__25518;
continue;
} else {
var temp__6738__auto___25519 = cljs.core.seq(seq__25498_25508);
if(temp__6738__auto___25519){
var seq__25498_25520__$1 = temp__6738__auto___25519;
if(cljs.core.chunked_seq_QMARK_(seq__25498_25520__$1)){
var c__10214__auto___25521 = cljs.core.chunk_first(seq__25498_25520__$1);
var G__25522 = cljs.core.chunk_rest(seq__25498_25520__$1);
var G__25523 = c__10214__auto___25521;
var G__25524 = cljs.core.count(c__10214__auto___25521);
var G__25525 = (0);
seq__25498_25508 = G__25522;
chunk__25499_25509 = G__25523;
count__25500_25510 = G__25524;
i__25501_25511 = G__25525;
continue;
} else {
var vec__25505_25526 = cljs.core.first(seq__25498_25520__$1);
var k_25527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25505_25526,(0),null);
var v_25528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25505_25526,(1),null);
if(cljs.core.coll_QMARK_(v_25528)){
form_data.append(cljs.core.name(k_25527),cljs.core.first(v_25528),cljs.core.second(v_25528));
} else {
form_data.append(cljs.core.name(k_25527),v_25528);
}

var G__25537 = cljs.core.next(seq__25498_25520__$1);
var G__25538 = null;
var G__25539 = (0);
var G__25540 = (0);
seq__25498_25508 = G__25537;
chunk__25499_25509 = G__25538;
count__25500_25510 = G__25539;
i__25501_25511 = G__25540;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__25545){
var map__25546 = p__25545;
var map__25546__$1 = ((((!((map__25546 == null)))?((((map__25546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25546):map__25546);
var request = map__25546__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25546__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25546__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__9291__auto__ = multipart_params;
if(cljs.core.truth_(and__9291__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__9291__auto__;
}
})())){
var G__25548 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25548) : client.call(null,G__25548));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__6736__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__6736__auto__)){
var m = temp__6736__auto__;
var G__25560 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25560) : client.call(null,G__25560));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__25561_SHARP_){
var G__25563 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25561_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25563) : client.call(null,G__25563));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__25569){
var map__25570 = p__25569;
var map__25570__$1 = ((((!((map__25570 == null)))?((((map__25570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25570):map__25570);
var req = map__25570__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25570__$1,cljs.core.cst$kw$query_DASH_params);
var temp__6736__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__6736__auto__)){
var spec = temp__6736__auto__;
var G__25572 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__6736__auto__,map__25570,map__25570__$1,req,query_params){
return (function (p1__25564_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__25564_SHARP_,query_params], 0));
});})(spec,temp__6736__auto__,map__25570,map__25570__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25572) : client.call(null,G__25572));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__10531__auto__ = [];
var len__10524__auto___25587 = arguments.length;
var i__10525__auto___25588 = (0);
while(true){
if((i__10525__auto___25588 < len__10524__auto___25587)){
args__10531__auto__.push((arguments[i__10525__auto___25588]));

var G__25589 = (i__10525__auto___25588 + (1));
i__10525__auto___25588 = G__25589;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((1) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10532__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__25582){
var vec__25583 = p__25582;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25583,(0),null);
return ((function (vec__25583,credentials){
return (function (req){
var credentials__$1 = (function (){var or__9303__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__9303__auto__)){
return or__9303__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__25586 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25586) : client.call(null,G__25586));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__25583,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq25580){
var G__25581 = cljs.core.first(seq25580);
var seq25580__$1 = cljs.core.next(seq25580);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__25581,seq25580__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__6736__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__6736__auto__)){
var oauth_token = temp__6736__auto__;
var G__25601 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__25601) : client.call(null,G__25601));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__6736__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6736__auto__)){
var custom_channel = temp__6736__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__10531__auto__ = [];
var len__10524__auto___25609 = arguments.length;
var i__10525__auto___25610 = (0);
while(true){
if((i__10525__auto___25610 < len__10524__auto___25609)){
args__10531__auto__.push((arguments[i__10525__auto___25610]));

var G__25611 = (i__10525__auto___25610 + (1));
i__10525__auto___25610 = G__25611;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((1) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10532__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25604){
var vec__25605 = p__25604;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25605,(0),null);
var G__25608 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__25608) : cljs_http.client.request.call(null,G__25608));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq25602){
var G__25603 = cljs.core.first(seq25602);
var seq25602__$1 = cljs.core.next(seq25602);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__25603,seq25602__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__10531__auto__ = [];
var len__10524__auto___25621 = arguments.length;
var i__10525__auto___25623 = (0);
while(true){
if((i__10525__auto___25623 < len__10524__auto___25621)){
args__10531__auto__.push((arguments[i__10525__auto___25623]));

var G__25625 = (i__10525__auto___25623 + (1));
i__10525__auto___25623 = G__25625;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((1) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10532__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25616){
var vec__25617 = p__25616;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25617,(0),null);
var G__25620 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__25620) : cljs_http.client.request.call(null,G__25620));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq25614){
var G__25615 = cljs.core.first(seq25614);
var seq25614__$1 = cljs.core.next(seq25614);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__25615,seq25614__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__10531__auto__ = [];
var len__10524__auto___25633 = arguments.length;
var i__10525__auto___25634 = (0);
while(true){
if((i__10525__auto___25634 < len__10524__auto___25633)){
args__10531__auto__.push((arguments[i__10525__auto___25634]));

var G__25635 = (i__10525__auto___25634 + (1));
i__10525__auto___25634 = G__25635;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((1) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10532__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25628){
var vec__25629 = p__25628;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25629,(0),null);
var G__25632 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__25632) : cljs_http.client.request.call(null,G__25632));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq25626){
var G__25627 = cljs.core.first(seq25626);
var seq25626__$1 = cljs.core.next(seq25626);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__25627,seq25626__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__10531__auto__ = [];
var len__10524__auto___25643 = arguments.length;
var i__10525__auto___25644 = (0);
while(true){
if((i__10525__auto___25644 < len__10524__auto___25643)){
args__10531__auto__.push((arguments[i__10525__auto___25644]));

var G__25645 = (i__10525__auto___25644 + (1));
i__10525__auto___25644 = G__25645;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((1) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10532__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25638){
var vec__25639 = p__25638;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25639,(0),null);
var G__25642 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__25642) : cljs_http.client.request.call(null,G__25642));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq25636){
var G__25637 = cljs.core.first(seq25636);
var seq25636__$1 = cljs.core.next(seq25636);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__25637,seq25636__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__10531__auto__ = [];
var len__10524__auto___25653 = arguments.length;
var i__10525__auto___25654 = (0);
while(true){
if((i__10525__auto___25654 < len__10524__auto___25653)){
args__10531__auto__.push((arguments[i__10525__auto___25654]));

var G__25655 = (i__10525__auto___25654 + (1));
i__10525__auto___25654 = G__25655;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((1) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10532__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25648){
var vec__25649 = p__25648;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25649,(0),null);
var G__25652 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__25652) : cljs_http.client.request.call(null,G__25652));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq25646){
var G__25647 = cljs.core.first(seq25646);
var seq25646__$1 = cljs.core.next(seq25646);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__25647,seq25646__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__10531__auto__ = [];
var len__10524__auto___25663 = arguments.length;
var i__10525__auto___25664 = (0);
while(true){
if((i__10525__auto___25664 < len__10524__auto___25663)){
args__10531__auto__.push((arguments[i__10525__auto___25664]));

var G__25665 = (i__10525__auto___25664 + (1));
i__10525__auto___25664 = G__25665;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((1) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10532__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25658){
var vec__25659 = p__25658;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25659,(0),null);
var G__25662 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__25662) : cljs_http.client.request.call(null,G__25662));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq25656){
var G__25657 = cljs.core.first(seq25656);
var seq25656__$1 = cljs.core.next(seq25656);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__25657,seq25656__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__10531__auto__ = [];
var len__10524__auto___25673 = arguments.length;
var i__10525__auto___25674 = (0);
while(true){
if((i__10525__auto___25674 < len__10524__auto___25673)){
args__10531__auto__.push((arguments[i__10525__auto___25674]));

var G__25675 = (i__10525__auto___25674 + (1));
i__10525__auto___25674 = G__25675;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((1) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10532__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25668){
var vec__25669 = p__25668;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25669,(0),null);
var G__25672 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__25672) : cljs_http.client.request.call(null,G__25672));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq25666){
var G__25667 = cljs.core.first(seq25666);
var seq25666__$1 = cljs.core.next(seq25666);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__25667,seq25666__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__10531__auto__ = [];
var len__10524__auto___25683 = arguments.length;
var i__10525__auto___25684 = (0);
while(true){
if((i__10525__auto___25684 < len__10524__auto___25683)){
args__10531__auto__.push((arguments[i__10525__auto___25684]));

var G__25685 = (i__10525__auto___25684 + (1));
i__10525__auto___25684 = G__25685;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((1) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10532__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25678){
var vec__25679 = p__25678;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25679,(0),null);
var G__25682 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__25682) : cljs_http.client.request.call(null,G__25682));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq25676){
var G__25677 = cljs.core.first(seq25676);
var seq25676__$1 = cljs.core.next(seq25676);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__25677,seq25676__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__10531__auto__ = [];
var len__10524__auto___25693 = arguments.length;
var i__10525__auto___25694 = (0);
while(true){
if((i__10525__auto___25694 < len__10524__auto___25693)){
args__10531__auto__.push((arguments[i__10525__auto___25694]));

var G__25695 = (i__10525__auto___25694 + (1));
i__10525__auto___25694 = G__25695;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((1) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10532__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__25688){
var vec__25689 = p__25688;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25689,(0),null);
var G__25692 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__25692) : cljs_http.client.request.call(null,G__25692));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq25686){
var G__25687 = cljs.core.first(seq25686);
var seq25686__$1 = cljs.core.next(seq25686);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__25687,seq25686__$1);
});

