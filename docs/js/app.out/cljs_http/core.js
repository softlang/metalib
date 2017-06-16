// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = (function (){var G__25001 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25001) : cljs.core.atom.call(null,G__25001));
})();
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__6738__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_http.core.pending_requests) : cljs.core.deref.call(null,cljs_http.core.pending_requests)).call(null,channel);
if(cljs.core.truth_(temp__6738__auto__)){
var req = temp__6738__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__25050){
var vec__25051 = p__25050;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25051,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25051,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__25077 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__25077)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__25077)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__25077)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__25077)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__25077)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__25077)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__25080){
var map__25086 = p__25080;
var map__25086__$1 = ((((!((map__25086 == null)))?((((map__25086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25086):map__25086);
var request = map__25086__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25086__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25086__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25086__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__9303__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__9303__auto__)){
return or__9303__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__25089 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__25089,default_headers);

cljs_http.core.apply_response_type_BANG_(G__25089,response_type);

G__25089.setTimeoutInterval(timeout);

G__25089.setWithCredentials(send_credentials);

return G__25089;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__25094){
var map__25126 = p__25094;
var map__25126__$1 = ((((!((map__25126 == null)))?((((map__25126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25126):map__25126);
var request = map__25126__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25126__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25126__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25126__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25126__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25126__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25126__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__9303__auto__ = request_method;
if(cljs.core.truth_(or__9303__auto__)){
return or__9303__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__25126,map__25126__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__25128 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__25128) : cljs_http.core.error_kw.call(null,G__25128));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__25126,map__25126__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_25157 = ((function (channel,request_url,method,headers__$1,xhr,map__25126,map__25126__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__25126,map__25126__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__25129_25161 = xhr;
G__25129_25161.setProgressEventsEnabled(true);

G__25129_25161.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_25157,cljs.core.cst$kw$upload));

G__25129_25161.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_25157,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__22120__auto___25164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___25164,channel,request_url,method,headers__$1,xhr,map__25126,map__25126__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___25164,channel,request_url,method,headers__$1,xhr,map__25126,map__25126__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_25140){
var state_val_25141 = (state_25140[(1)]);
if((state_val_25141 === (1))){
var state_25140__$1 = state_25140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25140__$1,(2),cancel);
} else {
if((state_val_25141 === (2))){
var inst_25131 = (state_25140[(2)]);
var inst_25132 = xhr.isComplete();
var inst_25133 = cljs.core.not(inst_25132);
var state_25140__$1 = (function (){var statearr_25145 = state_25140;
(statearr_25145[(7)] = inst_25131);

return statearr_25145;
})();
if(inst_25133){
var statearr_25146_25167 = state_25140__$1;
(statearr_25146_25167[(1)] = (3));

} else {
var statearr_25147_25168 = state_25140__$1;
(statearr_25147_25168[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25141 === (3))){
var inst_25135 = xhr.abort();
var state_25140__$1 = state_25140;
var statearr_25148_25169 = state_25140__$1;
(statearr_25148_25169[(2)] = inst_25135);

(statearr_25148_25169[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25141 === (4))){
var state_25140__$1 = state_25140;
var statearr_25149_25170 = state_25140__$1;
(statearr_25149_25170[(2)] = null);

(statearr_25149_25170[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25141 === (5))){
var inst_25138 = (state_25140[(2)]);
var state_25140__$1 = state_25140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25140__$1,inst_25138);
} else {
return null;
}
}
}
}
}
});})(c__22120__auto___25164,channel,request_url,method,headers__$1,xhr,map__25126,map__25126__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__18351__auto__,c__22120__auto___25164,channel,request_url,method,headers__$1,xhr,map__25126,map__25126__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__18352__auto__ = null;
var cljs_http$core$xhr_$_state_machine__18352__auto____0 = (function (){
var statearr_25153 = [null,null,null,null,null,null,null,null];
(statearr_25153[(0)] = cljs_http$core$xhr_$_state_machine__18352__auto__);

(statearr_25153[(1)] = (1));

return statearr_25153;
});
var cljs_http$core$xhr_$_state_machine__18352__auto____1 = (function (state_25140){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_25140);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e25154){if((e25154 instanceof Object)){
var ex__18355__auto__ = e25154;
var statearr_25155_25174 = state_25140;
(statearr_25155_25174[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25140);

return cljs.core.cst$kw$recur;
} else {
throw e25154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__25175 = state_25140;
state_25140 = G__25175;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__18352__auto__ = function(state_25140){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__18352__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__18352__auto____1.call(this,state_25140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__18352__auto____0;
cljs_http$core$xhr_$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__18352__auto____1;
return cljs_http$core$xhr_$_state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___25164,channel,request_url,method,headers__$1,xhr,map__25126,map__25126__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__22122__auto__ = (function (){var statearr_25156 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_25156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___25164);

return statearr_25156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___25164,channel,request_url,method,headers__$1,xhr,map__25126,map__25126__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__25180){
var map__25199 = p__25180;
var map__25199__$1 = ((((!((map__25199 == null)))?((((map__25199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25199):map__25199);
var request = map__25199__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25199__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25199__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25199__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25199__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_25224 = jsonp.send(null,((function (channel,jsonp,map__25199,map__25199__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__25199,map__25199__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__25199,map__25199__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__25199,map__25199__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_25224], null));

if(cljs.core.truth_(cancel)){
var c__22120__auto___25235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___25235,req_25224,channel,jsonp,map__25199,map__25199__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___25235,req_25224,channel,jsonp,map__25199,map__25199__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_25205){
var state_val_25206 = (state_25205[(1)]);
if((state_val_25206 === (1))){
var state_25205__$1 = state_25205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25205__$1,(2),cancel);
} else {
if((state_val_25206 === (2))){
var inst_25202 = (state_25205[(2)]);
var inst_25203 = jsonp.cancel(req_25224);
var state_25205__$1 = (function (){var statearr_25207 = state_25205;
(statearr_25207[(7)] = inst_25202);

return statearr_25207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25205__$1,inst_25203);
} else {
return null;
}
}
});})(c__22120__auto___25235,req_25224,channel,jsonp,map__25199,map__25199__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__18351__auto__,c__22120__auto___25235,req_25224,channel,jsonp,map__25199,map__25199__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__18352__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__18352__auto____0 = (function (){
var statearr_25211 = [null,null,null,null,null,null,null,null];
(statearr_25211[(0)] = cljs_http$core$jsonp_$_state_machine__18352__auto__);

(statearr_25211[(1)] = (1));

return statearr_25211;
});
var cljs_http$core$jsonp_$_state_machine__18352__auto____1 = (function (state_25205){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_25205);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e25212){if((e25212 instanceof Object)){
var ex__18355__auto__ = e25212;
var statearr_25213_25240 = state_25205;
(statearr_25213_25240[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25205);

return cljs.core.cst$kw$recur;
} else {
throw e25212;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__25241 = state_25205;
state_25205 = G__25241;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__18352__auto__ = function(state_25205){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__18352__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__18352__auto____1.call(this,state_25205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__18352__auto____0;
cljs_http$core$jsonp_$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__18352__auto____1;
return cljs_http$core$jsonp_$_state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___25235,req_25224,channel,jsonp,map__25199,map__25199__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__22122__auto__ = (function (){var statearr_25216 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_25216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___25235);

return statearr_25216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___25235,req_25224,channel,jsonp,map__25199,map__25199__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__25242){
var map__25245 = p__25242;
var map__25245__$1 = ((((!((map__25245 == null)))?((((map__25245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25245):map__25245);
var request = map__25245__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25245__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
