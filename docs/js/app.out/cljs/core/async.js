// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22185 = [];
var len__10524__auto___22191 = arguments.length;
var i__10525__auto___22192 = (0);
while(true){
if((i__10525__auto___22192 < len__10524__auto___22191)){
args22185.push((arguments[i__10525__auto___22192]));

var G__22193 = (i__10525__auto___22192 + (1));
i__10525__auto___22192 = G__22193;
continue;
} else {
}
break;
}

var G__22187 = args22185.length;
switch (G__22187) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22185.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22188 = (function (f,blockable,meta22189){
this.f = f;
this.blockable = blockable;
this.meta22189 = meta22189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22190,meta22189__$1){
var self__ = this;
var _22190__$1 = this;
return (new cljs.core.async.t_cljs$core$async22188(self__.f,self__.blockable,meta22189__$1));
});

cljs.core.async.t_cljs$core$async22188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22190){
var self__ = this;
var _22190__$1 = this;
return self__.meta22189;
});

cljs.core.async.t_cljs$core$async22188.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22188.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta22189], null);
});

cljs.core.async.t_cljs$core$async22188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22188";

cljs.core.async.t_cljs$core$async22188.cljs$lang$ctorPrWriter = (function (this__9960__auto__,writer__9961__auto__,opt__9962__auto__){
return cljs.core._write(writer__9961__auto__,"cljs.core.async/t_cljs$core$async22188");
});

cljs.core.async.__GT_t_cljs$core$async22188 = (function cljs$core$async$__GT_t_cljs$core$async22188(f__$1,blockable__$1,meta22189){
return (new cljs.core.async.t_cljs$core$async22188(f__$1,blockable__$1,meta22189));
});

}

return (new cljs.core.async.t_cljs$core$async22188(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22197 = [];
var len__10524__auto___22200 = arguments.length;
var i__10525__auto___22201 = (0);
while(true){
if((i__10525__auto___22201 < len__10524__auto___22200)){
args22197.push((arguments[i__10525__auto___22201]));

var G__22202 = (i__10525__auto___22201 + (1));
i__10525__auto___22201 = G__22202;
continue;
} else {
}
break;
}

var G__22199 = args22197.length;
switch (G__22199) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22197.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22204 = [];
var len__10524__auto___22207 = arguments.length;
var i__10525__auto___22208 = (0);
while(true){
if((i__10525__auto___22208 < len__10524__auto___22207)){
args22204.push((arguments[i__10525__auto___22208]));

var G__22209 = (i__10525__auto___22208 + (1));
i__10525__auto___22208 = G__22209;
continue;
} else {
}
break;
}

var G__22206 = args22204.length;
switch (G__22206) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22204.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22211 = [];
var len__10524__auto___22214 = arguments.length;
var i__10525__auto___22215 = (0);
while(true){
if((i__10525__auto___22215 < len__10524__auto___22214)){
args22211.push((arguments[i__10525__auto___22215]));

var G__22216 = (i__10525__auto___22215 + (1));
i__10525__auto___22215 = G__22216;
continue;
} else {
}
break;
}

var G__22213 = args22211.length;
switch (G__22213) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22211.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_22218 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22218) : fn1.call(null,val_22218));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22218,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22218) : fn1.call(null,val_22218));
});})(val_22218,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22219 = [];
var len__10524__auto___22222 = arguments.length;
var i__10525__auto___22223 = (0);
while(true){
if((i__10525__auto___22223 < len__10524__auto___22222)){
args22219.push((arguments[i__10525__auto___22223]));

var G__22224 = (i__10525__auto___22223 + (1));
i__10525__auto___22223 = G__22224;
continue;
} else {
}
break;
}

var G__22221 = args22219.length;
switch (G__22221) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22219.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6736__auto__)){
var ret = temp__6736__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__6736__auto__)){
var retb = temp__6736__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__6736__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__6736__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__10324__auto___22226 = n;
var x_22227 = (0);
while(true){
if((x_22227 < n__10324__auto___22226)){
(a[x_22227] = (0));

var G__22228 = (x_22227 + (1));
x_22227 = G__22228;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__22229 = (i + (1));
i = G__22229;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async22233 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22233 = (function (flag,meta22234){
this.flag = flag;
this.meta22234 = meta22234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22235,meta22234__$1){
var self__ = this;
var _22235__$1 = this;
return (new cljs.core.async.t_cljs$core$async22233(self__.flag,meta22234__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22235){
var self__ = this;
var _22235__$1 = this;
return self__.meta22234;
});})(flag))
;

cljs.core.async.t_cljs$core$async22233.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22233.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async22233.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22233.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22233.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta22234], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22233";

cljs.core.async.t_cljs$core$async22233.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9960__auto__,writer__9961__auto__,opt__9962__auto__){
return cljs.core._write(writer__9961__auto__,"cljs.core.async/t_cljs$core$async22233");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22233 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22233(flag__$1,meta22234){
return (new cljs.core.async.t_cljs$core$async22233(flag__$1,meta22234));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22233(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22239 = (function (flag,cb,meta22240){
this.flag = flag;
this.cb = cb;
this.meta22240 = meta22240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22241,meta22240__$1){
var self__ = this;
var _22241__$1 = this;
return (new cljs.core.async.t_cljs$core$async22239(self__.flag,self__.cb,meta22240__$1));
});

cljs.core.async.t_cljs$core$async22239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22241){
var self__ = this;
var _22241__$1 = this;
return self__.meta22240;
});

cljs.core.async.t_cljs$core$async22239.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async22239.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta22240], null);
});

cljs.core.async.t_cljs$core$async22239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22239";

cljs.core.async.t_cljs$core$async22239.cljs$lang$ctorPrWriter = (function (this__9960__auto__,writer__9961__auto__,opt__9962__auto__){
return cljs.core._write(writer__9961__auto__,"cljs.core.async/t_cljs$core$async22239");
});

cljs.core.async.__GT_t_cljs$core$async22239 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22239(flag__$1,cb__$1,meta22240){
return (new cljs.core.async.t_cljs$core$async22239(flag__$1,cb__$1,meta22240));
});

}

return (new cljs.core.async.t_cljs$core$async22239(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22242_SHARP_){
var G__22246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22242_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22246) : fret.call(null,G__22246));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22243_SHARP_){
var G__22247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22243_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22247) : fret.call(null,G__22247));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__9303__auto__ = wport;
if(cljs.core.truth_(or__9303__auto__)){
return or__9303__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22248 = (i + (1));
i = G__22248;
continue;
}
} else {
return null;
}
break;
}
})();
var or__9303__auto__ = ret;
if(cljs.core.truth_(or__9303__auto__)){
return or__9303__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__6738__auto__ = (function (){var and__9291__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__9291__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__9291__auto__;
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var got = temp__6738__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__10531__auto__ = [];
var len__10524__auto___22254 = arguments.length;
var i__10525__auto___22255 = (0);
while(true){
if((i__10525__auto___22255 < len__10524__auto___22254)){
args__10531__auto__.push((arguments[i__10525__auto___22255]));

var G__22256 = (i__10525__auto___22255 + (1));
i__10525__auto___22255 = G__22256;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((1) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10532__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22251){
var map__22252 = p__22251;
var map__22252__$1 = ((((!((map__22252 == null)))?((((map__22252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22252):map__22252);
var opts = map__22252__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22249){
var G__22250 = cljs.core.first(seq22249);
var seq22249__$1 = cljs.core.next(seq22249);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22250,seq22249__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22257 = [];
var len__10524__auto___22307 = arguments.length;
var i__10525__auto___22308 = (0);
while(true){
if((i__10525__auto___22308 < len__10524__auto___22307)){
args22257.push((arguments[i__10525__auto___22308]));

var G__22309 = (i__10525__auto___22308 + (1));
i__10525__auto___22308 = G__22309;
continue;
} else {
}
break;
}

var G__22259 = args22257.length;
switch (G__22259) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22257.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22120__auto___22311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___22311){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___22311){
return (function (state_22283){
var state_val_22284 = (state_22283[(1)]);
if((state_val_22284 === (7))){
var inst_22279 = (state_22283[(2)]);
var state_22283__$1 = state_22283;
var statearr_22285_22312 = state_22283__$1;
(statearr_22285_22312[(2)] = inst_22279);

(statearr_22285_22312[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22284 === (1))){
var state_22283__$1 = state_22283;
var statearr_22286_22313 = state_22283__$1;
(statearr_22286_22313[(2)] = null);

(statearr_22286_22313[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22284 === (4))){
var inst_22262 = (state_22283[(7)]);
var inst_22262__$1 = (state_22283[(2)]);
var inst_22263 = (inst_22262__$1 == null);
var state_22283__$1 = (function (){var statearr_22287 = state_22283;
(statearr_22287[(7)] = inst_22262__$1);

return statearr_22287;
})();
if(cljs.core.truth_(inst_22263)){
var statearr_22288_22314 = state_22283__$1;
(statearr_22288_22314[(1)] = (5));

} else {
var statearr_22289_22315 = state_22283__$1;
(statearr_22289_22315[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22284 === (13))){
var state_22283__$1 = state_22283;
var statearr_22290_22316 = state_22283__$1;
(statearr_22290_22316[(2)] = null);

(statearr_22290_22316[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22284 === (6))){
var inst_22262 = (state_22283[(7)]);
var state_22283__$1 = state_22283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22283__$1,(11),to,inst_22262);
} else {
if((state_val_22284 === (3))){
var inst_22281 = (state_22283[(2)]);
var state_22283__$1 = state_22283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22283__$1,inst_22281);
} else {
if((state_val_22284 === (12))){
var state_22283__$1 = state_22283;
var statearr_22291_22317 = state_22283__$1;
(statearr_22291_22317[(2)] = null);

(statearr_22291_22317[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22284 === (2))){
var state_22283__$1 = state_22283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22283__$1,(4),from);
} else {
if((state_val_22284 === (11))){
var inst_22272 = (state_22283[(2)]);
var state_22283__$1 = state_22283;
if(cljs.core.truth_(inst_22272)){
var statearr_22292_22318 = state_22283__$1;
(statearr_22292_22318[(1)] = (12));

} else {
var statearr_22293_22319 = state_22283__$1;
(statearr_22293_22319[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22284 === (9))){
var state_22283__$1 = state_22283;
var statearr_22294_22320 = state_22283__$1;
(statearr_22294_22320[(2)] = null);

(statearr_22294_22320[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22284 === (5))){
var state_22283__$1 = state_22283;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22295_22321 = state_22283__$1;
(statearr_22295_22321[(1)] = (8));

} else {
var statearr_22296_22322 = state_22283__$1;
(statearr_22296_22322[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22284 === (14))){
var inst_22277 = (state_22283[(2)]);
var state_22283__$1 = state_22283;
var statearr_22297_22323 = state_22283__$1;
(statearr_22297_22323[(2)] = inst_22277);

(statearr_22297_22323[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22284 === (10))){
var inst_22269 = (state_22283[(2)]);
var state_22283__$1 = state_22283;
var statearr_22298_22324 = state_22283__$1;
(statearr_22298_22324[(2)] = inst_22269);

(statearr_22298_22324[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22284 === (8))){
var inst_22266 = cljs.core.async.close_BANG_(to);
var state_22283__$1 = state_22283;
var statearr_22299_22325 = state_22283__$1;
(statearr_22299_22325[(2)] = inst_22266);

(statearr_22299_22325[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto___22311))
;
return ((function (switch__18351__auto__,c__22120__auto___22311){
return (function() {
var cljs$core$async$state_machine__18352__auto__ = null;
var cljs$core$async$state_machine__18352__auto____0 = (function (){
var statearr_22303 = [null,null,null,null,null,null,null,null];
(statearr_22303[(0)] = cljs$core$async$state_machine__18352__auto__);

(statearr_22303[(1)] = (1));

return statearr_22303;
});
var cljs$core$async$state_machine__18352__auto____1 = (function (state_22283){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_22283);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e22304){if((e22304 instanceof Object)){
var ex__18355__auto__ = e22304;
var statearr_22305_22326 = state_22283;
(statearr_22305_22326[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22283);

return cljs.core.cst$kw$recur;
} else {
throw e22304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__22327 = state_22283;
state_22283 = G__22327;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$state_machine__18352__auto__ = function(state_22283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18352__auto____1.call(this,state_22283);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18352__auto____0;
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18352__auto____1;
return cljs$core$async$state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___22311))
})();
var state__22122__auto__ = (function (){var statearr_22306 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_22306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___22311);

return statearr_22306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___22311))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__22515){
var vec__22516 = p__22515;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22516,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22516,(1),null);
var job = vec__22516;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__22120__auto___22702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___22702,res,vec__22516,v,p,job,jobs,results){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___22702,res,vec__22516,v,p,job,jobs,results){
return (function (state_22523){
var state_val_22524 = (state_22523[(1)]);
if((state_val_22524 === (1))){
var state_22523__$1 = state_22523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22523__$1,(2),res,v);
} else {
if((state_val_22524 === (2))){
var inst_22520 = (state_22523[(2)]);
var inst_22521 = cljs.core.async.close_BANG_(res);
var state_22523__$1 = (function (){var statearr_22525 = state_22523;
(statearr_22525[(7)] = inst_22520);

return statearr_22525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22523__$1,inst_22521);
} else {
return null;
}
}
});})(c__22120__auto___22702,res,vec__22516,v,p,job,jobs,results))
;
return ((function (switch__18351__auto__,c__22120__auto___22702,res,vec__22516,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0 = (function (){
var statearr_22529 = [null,null,null,null,null,null,null,null];
(statearr_22529[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__);

(statearr_22529[(1)] = (1));

return statearr_22529;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1 = (function (state_22523){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_22523);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e22530){if((e22530 instanceof Object)){
var ex__18355__auto__ = e22530;
var statearr_22531_22703 = state_22523;
(statearr_22531_22703[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22523);

return cljs.core.cst$kw$recur;
} else {
throw e22530;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__22704 = state_22523;
state_22523 = G__22704;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__ = function(state_22523){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1.call(this,state_22523);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___22702,res,vec__22516,v,p,job,jobs,results))
})();
var state__22122__auto__ = (function (){var statearr_22532 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_22532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___22702);

return statearr_22532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___22702,res,vec__22516,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22533){
var vec__22534 = p__22533;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22534,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22534,(1),null);
var job = vec__22534;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__10324__auto___22705 = n;
var __22706 = (0);
while(true){
if((__22706 < n__10324__auto___22705)){
var G__22537_22707 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22537_22707) {
case "compute":
var c__22120__auto___22709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22706,c__22120__auto___22709,G__22537_22707,n__10324__auto___22705,jobs,results,process,async){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (__22706,c__22120__auto___22709,G__22537_22707,n__10324__auto___22705,jobs,results,process,async){
return (function (state_22550){
var state_val_22551 = (state_22550[(1)]);
if((state_val_22551 === (1))){
var state_22550__$1 = state_22550;
var statearr_22552_22710 = state_22550__$1;
(statearr_22552_22710[(2)] = null);

(statearr_22552_22710[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (2))){
var state_22550__$1 = state_22550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22550__$1,(4),jobs);
} else {
if((state_val_22551 === (3))){
var inst_22548 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22550__$1,inst_22548);
} else {
if((state_val_22551 === (4))){
var inst_22540 = (state_22550[(2)]);
var inst_22541 = process(inst_22540);
var state_22550__$1 = state_22550;
if(cljs.core.truth_(inst_22541)){
var statearr_22553_22711 = state_22550__$1;
(statearr_22553_22711[(1)] = (5));

} else {
var statearr_22554_22712 = state_22550__$1;
(statearr_22554_22712[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (5))){
var state_22550__$1 = state_22550;
var statearr_22555_22713 = state_22550__$1;
(statearr_22555_22713[(2)] = null);

(statearr_22555_22713[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (6))){
var state_22550__$1 = state_22550;
var statearr_22556_22714 = state_22550__$1;
(statearr_22556_22714[(2)] = null);

(statearr_22556_22714[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22551 === (7))){
var inst_22546 = (state_22550[(2)]);
var state_22550__$1 = state_22550;
var statearr_22557_22715 = state_22550__$1;
(statearr_22557_22715[(2)] = inst_22546);

(statearr_22557_22715[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__22706,c__22120__auto___22709,G__22537_22707,n__10324__auto___22705,jobs,results,process,async))
;
return ((function (__22706,switch__18351__auto__,c__22120__auto___22709,G__22537_22707,n__10324__auto___22705,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0 = (function (){
var statearr_22561 = [null,null,null,null,null,null,null];
(statearr_22561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__);

(statearr_22561[(1)] = (1));

return statearr_22561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1 = (function (state_22550){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_22550);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e22562){if((e22562 instanceof Object)){
var ex__18355__auto__ = e22562;
var statearr_22563_22716 = state_22550;
(statearr_22563_22716[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22550);

return cljs.core.cst$kw$recur;
} else {
throw e22562;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__22717 = state_22550;
state_22550 = G__22717;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__ = function(state_22550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1.call(this,state_22550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__;
})()
;})(__22706,switch__18351__auto__,c__22120__auto___22709,G__22537_22707,n__10324__auto___22705,jobs,results,process,async))
})();
var state__22122__auto__ = (function (){var statearr_22564 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_22564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___22709);

return statearr_22564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(__22706,c__22120__auto___22709,G__22537_22707,n__10324__auto___22705,jobs,results,process,async))
);


break;
case "async":
var c__22120__auto___22718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22706,c__22120__auto___22718,G__22537_22707,n__10324__auto___22705,jobs,results,process,async){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (__22706,c__22120__auto___22718,G__22537_22707,n__10324__auto___22705,jobs,results,process,async){
return (function (state_22577){
var state_val_22578 = (state_22577[(1)]);
if((state_val_22578 === (1))){
var state_22577__$1 = state_22577;
var statearr_22579_22719 = state_22577__$1;
(statearr_22579_22719[(2)] = null);

(statearr_22579_22719[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22578 === (2))){
var state_22577__$1 = state_22577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22577__$1,(4),jobs);
} else {
if((state_val_22578 === (3))){
var inst_22575 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22577__$1,inst_22575);
} else {
if((state_val_22578 === (4))){
var inst_22567 = (state_22577[(2)]);
var inst_22568 = async(inst_22567);
var state_22577__$1 = state_22577;
if(cljs.core.truth_(inst_22568)){
var statearr_22580_22720 = state_22577__$1;
(statearr_22580_22720[(1)] = (5));

} else {
var statearr_22581_22721 = state_22577__$1;
(statearr_22581_22721[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22578 === (5))){
var state_22577__$1 = state_22577;
var statearr_22582_22722 = state_22577__$1;
(statearr_22582_22722[(2)] = null);

(statearr_22582_22722[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22578 === (6))){
var state_22577__$1 = state_22577;
var statearr_22583_22723 = state_22577__$1;
(statearr_22583_22723[(2)] = null);

(statearr_22583_22723[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22578 === (7))){
var inst_22573 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
var statearr_22584_22724 = state_22577__$1;
(statearr_22584_22724[(2)] = inst_22573);

(statearr_22584_22724[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__22706,c__22120__auto___22718,G__22537_22707,n__10324__auto___22705,jobs,results,process,async))
;
return ((function (__22706,switch__18351__auto__,c__22120__auto___22718,G__22537_22707,n__10324__auto___22705,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0 = (function (){
var statearr_22588 = [null,null,null,null,null,null,null];
(statearr_22588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__);

(statearr_22588[(1)] = (1));

return statearr_22588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1 = (function (state_22577){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_22577);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e22589){if((e22589 instanceof Object)){
var ex__18355__auto__ = e22589;
var statearr_22590_22725 = state_22577;
(statearr_22590_22725[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22577);

return cljs.core.cst$kw$recur;
} else {
throw e22589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__22726 = state_22577;
state_22577 = G__22726;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__ = function(state_22577){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1.call(this,state_22577);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__;
})()
;})(__22706,switch__18351__auto__,c__22120__auto___22718,G__22537_22707,n__10324__auto___22705,jobs,results,process,async))
})();
var state__22122__auto__ = (function (){var statearr_22591 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_22591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___22718);

return statearr_22591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(__22706,c__22120__auto___22718,G__22537_22707,n__10324__auto___22705,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__22727 = (__22706 + (1));
__22706 = G__22727;
continue;
} else {
}
break;
}

var c__22120__auto___22728 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___22728,jobs,results,process,async){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___22728,jobs,results,process,async){
return (function (state_22613){
var state_val_22614 = (state_22613[(1)]);
if((state_val_22614 === (1))){
var state_22613__$1 = state_22613;
var statearr_22615_22729 = state_22613__$1;
(statearr_22615_22729[(2)] = null);

(statearr_22615_22729[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22614 === (2))){
var state_22613__$1 = state_22613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22613__$1,(4),from);
} else {
if((state_val_22614 === (3))){
var inst_22611 = (state_22613[(2)]);
var state_22613__$1 = state_22613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22613__$1,inst_22611);
} else {
if((state_val_22614 === (4))){
var inst_22594 = (state_22613[(7)]);
var inst_22594__$1 = (state_22613[(2)]);
var inst_22595 = (inst_22594__$1 == null);
var state_22613__$1 = (function (){var statearr_22616 = state_22613;
(statearr_22616[(7)] = inst_22594__$1);

return statearr_22616;
})();
if(cljs.core.truth_(inst_22595)){
var statearr_22617_22730 = state_22613__$1;
(statearr_22617_22730[(1)] = (5));

} else {
var statearr_22618_22731 = state_22613__$1;
(statearr_22618_22731[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22614 === (5))){
var inst_22597 = cljs.core.async.close_BANG_(jobs);
var state_22613__$1 = state_22613;
var statearr_22619_22732 = state_22613__$1;
(statearr_22619_22732[(2)] = inst_22597);

(statearr_22619_22732[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22614 === (6))){
var inst_22599 = (state_22613[(8)]);
var inst_22594 = (state_22613[(7)]);
var inst_22599__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22600 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22601 = [inst_22594,inst_22599__$1];
var inst_22602 = (new cljs.core.PersistentVector(null,2,(5),inst_22600,inst_22601,null));
var state_22613__$1 = (function (){var statearr_22620 = state_22613;
(statearr_22620[(8)] = inst_22599__$1);

return statearr_22620;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22613__$1,(8),jobs,inst_22602);
} else {
if((state_val_22614 === (7))){
var inst_22609 = (state_22613[(2)]);
var state_22613__$1 = state_22613;
var statearr_22621_22733 = state_22613__$1;
(statearr_22621_22733[(2)] = inst_22609);

(statearr_22621_22733[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22614 === (8))){
var inst_22599 = (state_22613[(8)]);
var inst_22604 = (state_22613[(2)]);
var state_22613__$1 = (function (){var statearr_22622 = state_22613;
(statearr_22622[(9)] = inst_22604);

return statearr_22622;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22613__$1,(9),results,inst_22599);
} else {
if((state_val_22614 === (9))){
var inst_22606 = (state_22613[(2)]);
var state_22613__$1 = (function (){var statearr_22623 = state_22613;
(statearr_22623[(10)] = inst_22606);

return statearr_22623;
})();
var statearr_22624_22734 = state_22613__$1;
(statearr_22624_22734[(2)] = null);

(statearr_22624_22734[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__22120__auto___22728,jobs,results,process,async))
;
return ((function (switch__18351__auto__,c__22120__auto___22728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0 = (function (){
var statearr_22628 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__);

(statearr_22628[(1)] = (1));

return statearr_22628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1 = (function (state_22613){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_22613);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e22629){if((e22629 instanceof Object)){
var ex__18355__auto__ = e22629;
var statearr_22630_22735 = state_22613;
(statearr_22630_22735[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22613);

return cljs.core.cst$kw$recur;
} else {
throw e22629;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__22736 = state_22613;
state_22613 = G__22736;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__ = function(state_22613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1.call(this,state_22613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___22728,jobs,results,process,async))
})();
var state__22122__auto__ = (function (){var statearr_22631 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_22631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___22728);

return statearr_22631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___22728,jobs,results,process,async))
);


var c__22120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto__,jobs,results,process,async){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto__,jobs,results,process,async){
return (function (state_22669){
var state_val_22670 = (state_22669[(1)]);
if((state_val_22670 === (7))){
var inst_22665 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
var statearr_22671_22737 = state_22669__$1;
(statearr_22671_22737[(2)] = inst_22665);

(statearr_22671_22737[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (20))){
var state_22669__$1 = state_22669;
var statearr_22672_22738 = state_22669__$1;
(statearr_22672_22738[(2)] = null);

(statearr_22672_22738[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (1))){
var state_22669__$1 = state_22669;
var statearr_22673_22739 = state_22669__$1;
(statearr_22673_22739[(2)] = null);

(statearr_22673_22739[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (4))){
var inst_22634 = (state_22669[(7)]);
var inst_22634__$1 = (state_22669[(2)]);
var inst_22635 = (inst_22634__$1 == null);
var state_22669__$1 = (function (){var statearr_22674 = state_22669;
(statearr_22674[(7)] = inst_22634__$1);

return statearr_22674;
})();
if(cljs.core.truth_(inst_22635)){
var statearr_22675_22740 = state_22669__$1;
(statearr_22675_22740[(1)] = (5));

} else {
var statearr_22676_22741 = state_22669__$1;
(statearr_22676_22741[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (15))){
var inst_22647 = (state_22669[(8)]);
var state_22669__$1 = state_22669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22669__$1,(18),to,inst_22647);
} else {
if((state_val_22670 === (21))){
var inst_22660 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
var statearr_22677_22742 = state_22669__$1;
(statearr_22677_22742[(2)] = inst_22660);

(statearr_22677_22742[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (13))){
var inst_22662 = (state_22669[(2)]);
var state_22669__$1 = (function (){var statearr_22678 = state_22669;
(statearr_22678[(9)] = inst_22662);

return statearr_22678;
})();
var statearr_22679_22743 = state_22669__$1;
(statearr_22679_22743[(2)] = null);

(statearr_22679_22743[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (6))){
var inst_22634 = (state_22669[(7)]);
var state_22669__$1 = state_22669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22669__$1,(11),inst_22634);
} else {
if((state_val_22670 === (17))){
var inst_22655 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
if(cljs.core.truth_(inst_22655)){
var statearr_22680_22744 = state_22669__$1;
(statearr_22680_22744[(1)] = (19));

} else {
var statearr_22681_22745 = state_22669__$1;
(statearr_22681_22745[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (3))){
var inst_22667 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22669__$1,inst_22667);
} else {
if((state_val_22670 === (12))){
var inst_22644 = (state_22669[(10)]);
var state_22669__$1 = state_22669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22669__$1,(14),inst_22644);
} else {
if((state_val_22670 === (2))){
var state_22669__$1 = state_22669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22669__$1,(4),results);
} else {
if((state_val_22670 === (19))){
var state_22669__$1 = state_22669;
var statearr_22682_22746 = state_22669__$1;
(statearr_22682_22746[(2)] = null);

(statearr_22682_22746[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (11))){
var inst_22644 = (state_22669[(2)]);
var state_22669__$1 = (function (){var statearr_22683 = state_22669;
(statearr_22683[(10)] = inst_22644);

return statearr_22683;
})();
var statearr_22684_22747 = state_22669__$1;
(statearr_22684_22747[(2)] = null);

(statearr_22684_22747[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (9))){
var state_22669__$1 = state_22669;
var statearr_22685_22748 = state_22669__$1;
(statearr_22685_22748[(2)] = null);

(statearr_22685_22748[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (5))){
var state_22669__$1 = state_22669;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22686_22749 = state_22669__$1;
(statearr_22686_22749[(1)] = (8));

} else {
var statearr_22687_22750 = state_22669__$1;
(statearr_22687_22750[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (14))){
var inst_22647 = (state_22669[(8)]);
var inst_22649 = (state_22669[(11)]);
var inst_22647__$1 = (state_22669[(2)]);
var inst_22648 = (inst_22647__$1 == null);
var inst_22649__$1 = cljs.core.not(inst_22648);
var state_22669__$1 = (function (){var statearr_22688 = state_22669;
(statearr_22688[(8)] = inst_22647__$1);

(statearr_22688[(11)] = inst_22649__$1);

return statearr_22688;
})();
if(inst_22649__$1){
var statearr_22689_22751 = state_22669__$1;
(statearr_22689_22751[(1)] = (15));

} else {
var statearr_22690_22752 = state_22669__$1;
(statearr_22690_22752[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (16))){
var inst_22649 = (state_22669[(11)]);
var state_22669__$1 = state_22669;
var statearr_22691_22753 = state_22669__$1;
(statearr_22691_22753[(2)] = inst_22649);

(statearr_22691_22753[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (10))){
var inst_22641 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
var statearr_22692_22754 = state_22669__$1;
(statearr_22692_22754[(2)] = inst_22641);

(statearr_22692_22754[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (18))){
var inst_22652 = (state_22669[(2)]);
var state_22669__$1 = state_22669;
var statearr_22693_22755 = state_22669__$1;
(statearr_22693_22755[(2)] = inst_22652);

(statearr_22693_22755[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22670 === (8))){
var inst_22638 = cljs.core.async.close_BANG_(to);
var state_22669__$1 = state_22669;
var statearr_22694_22756 = state_22669__$1;
(statearr_22694_22756[(2)] = inst_22638);

(statearr_22694_22756[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto__,jobs,results,process,async))
;
return ((function (switch__18351__auto__,c__22120__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0 = (function (){
var statearr_22698 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22698[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__);

(statearr_22698[(1)] = (1));

return statearr_22698;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1 = (function (state_22669){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_22669);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e22699){if((e22699 instanceof Object)){
var ex__18355__auto__ = e22699;
var statearr_22700_22757 = state_22669;
(statearr_22700_22757[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22669);

return cljs.core.cst$kw$recur;
} else {
throw e22699;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__22758 = state_22669;
state_22669 = G__22758;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__ = function(state_22669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1.call(this,state_22669);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18352__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto__,jobs,results,process,async))
})();
var state__22122__auto__ = (function (){var statearr_22701 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_22701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto__);

return statearr_22701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto__,jobs,results,process,async))
);

return c__22120__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22759 = [];
var len__10524__auto___22762 = arguments.length;
var i__10525__auto___22763 = (0);
while(true){
if((i__10525__auto___22763 < len__10524__auto___22762)){
args22759.push((arguments[i__10525__auto___22763]));

var G__22764 = (i__10525__auto___22763 + (1));
i__10525__auto___22763 = G__22764;
continue;
} else {
}
break;
}

var G__22761 = args22759.length;
switch (G__22761) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22759.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22766 = [];
var len__10524__auto___22769 = arguments.length;
var i__10525__auto___22770 = (0);
while(true){
if((i__10525__auto___22770 < len__10524__auto___22769)){
args22766.push((arguments[i__10525__auto___22770]));

var G__22771 = (i__10525__auto___22770 + (1));
i__10525__auto___22770 = G__22771;
continue;
} else {
}
break;
}

var G__22768 = args22766.length;
switch (G__22768) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22766.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22773 = [];
var len__10524__auto___22826 = arguments.length;
var i__10525__auto___22827 = (0);
while(true){
if((i__10525__auto___22827 < len__10524__auto___22826)){
args22773.push((arguments[i__10525__auto___22827]));

var G__22828 = (i__10525__auto___22827 + (1));
i__10525__auto___22827 = G__22828;
continue;
} else {
}
break;
}

var G__22775 = args22773.length;
switch (G__22775) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22773.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__22120__auto___22830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___22830,tc,fc){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___22830,tc,fc){
return (function (state_22801){
var state_val_22802 = (state_22801[(1)]);
if((state_val_22802 === (7))){
var inst_22797 = (state_22801[(2)]);
var state_22801__$1 = state_22801;
var statearr_22803_22831 = state_22801__$1;
(statearr_22803_22831[(2)] = inst_22797);

(statearr_22803_22831[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22802 === (1))){
var state_22801__$1 = state_22801;
var statearr_22804_22832 = state_22801__$1;
(statearr_22804_22832[(2)] = null);

(statearr_22804_22832[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22802 === (4))){
var inst_22778 = (state_22801[(7)]);
var inst_22778__$1 = (state_22801[(2)]);
var inst_22779 = (inst_22778__$1 == null);
var state_22801__$1 = (function (){var statearr_22805 = state_22801;
(statearr_22805[(7)] = inst_22778__$1);

return statearr_22805;
})();
if(cljs.core.truth_(inst_22779)){
var statearr_22806_22833 = state_22801__$1;
(statearr_22806_22833[(1)] = (5));

} else {
var statearr_22807_22834 = state_22801__$1;
(statearr_22807_22834[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22802 === (13))){
var state_22801__$1 = state_22801;
var statearr_22808_22835 = state_22801__$1;
(statearr_22808_22835[(2)] = null);

(statearr_22808_22835[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22802 === (6))){
var inst_22778 = (state_22801[(7)]);
var inst_22784 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22778) : p.call(null,inst_22778));
var state_22801__$1 = state_22801;
if(cljs.core.truth_(inst_22784)){
var statearr_22809_22836 = state_22801__$1;
(statearr_22809_22836[(1)] = (9));

} else {
var statearr_22810_22837 = state_22801__$1;
(statearr_22810_22837[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22802 === (3))){
var inst_22799 = (state_22801[(2)]);
var state_22801__$1 = state_22801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22801__$1,inst_22799);
} else {
if((state_val_22802 === (12))){
var state_22801__$1 = state_22801;
var statearr_22811_22838 = state_22801__$1;
(statearr_22811_22838[(2)] = null);

(statearr_22811_22838[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22802 === (2))){
var state_22801__$1 = state_22801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22801__$1,(4),ch);
} else {
if((state_val_22802 === (11))){
var inst_22778 = (state_22801[(7)]);
var inst_22788 = (state_22801[(2)]);
var state_22801__$1 = state_22801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22801__$1,(8),inst_22788,inst_22778);
} else {
if((state_val_22802 === (9))){
var state_22801__$1 = state_22801;
var statearr_22812_22839 = state_22801__$1;
(statearr_22812_22839[(2)] = tc);

(statearr_22812_22839[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22802 === (5))){
var inst_22781 = cljs.core.async.close_BANG_(tc);
var inst_22782 = cljs.core.async.close_BANG_(fc);
var state_22801__$1 = (function (){var statearr_22813 = state_22801;
(statearr_22813[(8)] = inst_22781);

return statearr_22813;
})();
var statearr_22814_22840 = state_22801__$1;
(statearr_22814_22840[(2)] = inst_22782);

(statearr_22814_22840[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22802 === (14))){
var inst_22795 = (state_22801[(2)]);
var state_22801__$1 = state_22801;
var statearr_22815_22841 = state_22801__$1;
(statearr_22815_22841[(2)] = inst_22795);

(statearr_22815_22841[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22802 === (10))){
var state_22801__$1 = state_22801;
var statearr_22816_22842 = state_22801__$1;
(statearr_22816_22842[(2)] = fc);

(statearr_22816_22842[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22802 === (8))){
var inst_22790 = (state_22801[(2)]);
var state_22801__$1 = state_22801;
if(cljs.core.truth_(inst_22790)){
var statearr_22817_22843 = state_22801__$1;
(statearr_22817_22843[(1)] = (12));

} else {
var statearr_22818_22844 = state_22801__$1;
(statearr_22818_22844[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto___22830,tc,fc))
;
return ((function (switch__18351__auto__,c__22120__auto___22830,tc,fc){
return (function() {
var cljs$core$async$state_machine__18352__auto__ = null;
var cljs$core$async$state_machine__18352__auto____0 = (function (){
var statearr_22822 = [null,null,null,null,null,null,null,null,null];
(statearr_22822[(0)] = cljs$core$async$state_machine__18352__auto__);

(statearr_22822[(1)] = (1));

return statearr_22822;
});
var cljs$core$async$state_machine__18352__auto____1 = (function (state_22801){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_22801);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e22823){if((e22823 instanceof Object)){
var ex__18355__auto__ = e22823;
var statearr_22824_22845 = state_22801;
(statearr_22824_22845[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22801);

return cljs.core.cst$kw$recur;
} else {
throw e22823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__22846 = state_22801;
state_22801 = G__22846;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$state_machine__18352__auto__ = function(state_22801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18352__auto____1.call(this,state_22801);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18352__auto____0;
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18352__auto____1;
return cljs$core$async$state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___22830,tc,fc))
})();
var state__22122__auto__ = (function (){var statearr_22825 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_22825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___22830);

return statearr_22825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___22830,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto__){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto__){
return (function (state_22910){
var state_val_22911 = (state_22910[(1)]);
if((state_val_22911 === (7))){
var inst_22906 = (state_22910[(2)]);
var state_22910__$1 = state_22910;
var statearr_22912_22933 = state_22910__$1;
(statearr_22912_22933[(2)] = inst_22906);

(statearr_22912_22933[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22911 === (1))){
var inst_22890 = init;
var state_22910__$1 = (function (){var statearr_22913 = state_22910;
(statearr_22913[(7)] = inst_22890);

return statearr_22913;
})();
var statearr_22914_22934 = state_22910__$1;
(statearr_22914_22934[(2)] = null);

(statearr_22914_22934[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22911 === (4))){
var inst_22893 = (state_22910[(8)]);
var inst_22893__$1 = (state_22910[(2)]);
var inst_22894 = (inst_22893__$1 == null);
var state_22910__$1 = (function (){var statearr_22915 = state_22910;
(statearr_22915[(8)] = inst_22893__$1);

return statearr_22915;
})();
if(cljs.core.truth_(inst_22894)){
var statearr_22916_22935 = state_22910__$1;
(statearr_22916_22935[(1)] = (5));

} else {
var statearr_22917_22936 = state_22910__$1;
(statearr_22917_22936[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22911 === (6))){
var inst_22893 = (state_22910[(8)]);
var inst_22897 = (state_22910[(9)]);
var inst_22890 = (state_22910[(7)]);
var inst_22897__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_22890,inst_22893) : f.call(null,inst_22890,inst_22893));
var inst_22898 = cljs.core.reduced_QMARK_(inst_22897__$1);
var state_22910__$1 = (function (){var statearr_22918 = state_22910;
(statearr_22918[(9)] = inst_22897__$1);

return statearr_22918;
})();
if(inst_22898){
var statearr_22919_22937 = state_22910__$1;
(statearr_22919_22937[(1)] = (8));

} else {
var statearr_22920_22938 = state_22910__$1;
(statearr_22920_22938[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22911 === (3))){
var inst_22908 = (state_22910[(2)]);
var state_22910__$1 = state_22910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22910__$1,inst_22908);
} else {
if((state_val_22911 === (2))){
var state_22910__$1 = state_22910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22910__$1,(4),ch);
} else {
if((state_val_22911 === (9))){
var inst_22897 = (state_22910[(9)]);
var inst_22890 = inst_22897;
var state_22910__$1 = (function (){var statearr_22921 = state_22910;
(statearr_22921[(7)] = inst_22890);

return statearr_22921;
})();
var statearr_22922_22939 = state_22910__$1;
(statearr_22922_22939[(2)] = null);

(statearr_22922_22939[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22911 === (5))){
var inst_22890 = (state_22910[(7)]);
var state_22910__$1 = state_22910;
var statearr_22923_22940 = state_22910__$1;
(statearr_22923_22940[(2)] = inst_22890);

(statearr_22923_22940[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22911 === (10))){
var inst_22904 = (state_22910[(2)]);
var state_22910__$1 = state_22910;
var statearr_22924_22941 = state_22910__$1;
(statearr_22924_22941[(2)] = inst_22904);

(statearr_22924_22941[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22911 === (8))){
var inst_22897 = (state_22910[(9)]);
var inst_22900 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_22897) : cljs.core.deref.call(null,inst_22897));
var state_22910__$1 = state_22910;
var statearr_22925_22942 = state_22910__$1;
(statearr_22925_22942[(2)] = inst_22900);

(statearr_22925_22942[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto__))
;
return ((function (switch__18351__auto__,c__22120__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18352__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18352__auto____0 = (function (){
var statearr_22929 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22929[(0)] = cljs$core$async$reduce_$_state_machine__18352__auto__);

(statearr_22929[(1)] = (1));

return statearr_22929;
});
var cljs$core$async$reduce_$_state_machine__18352__auto____1 = (function (state_22910){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_22910);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e22930){if((e22930 instanceof Object)){
var ex__18355__auto__ = e22930;
var statearr_22931_22943 = state_22910;
(statearr_22931_22943[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22910);

return cljs.core.cst$kw$recur;
} else {
throw e22930;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__22944 = state_22910;
state_22910 = G__22944;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18352__auto__ = function(state_22910){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18352__auto____1.call(this,state_22910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18352__auto____0;
cljs$core$async$reduce_$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18352__auto____1;
return cljs$core$async$reduce_$_state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto__))
})();
var state__22122__auto__ = (function (){var statearr_22932 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_22932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto__);

return statearr_22932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto__))
);

return c__22120__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__22120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto__,f__$1){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto__,f__$1){
return (function (state_22964){
var state_val_22965 = (state_22964[(1)]);
if((state_val_22965 === (1))){
var inst_22959 = cljs.core.async.reduce(f__$1,init,ch);
var state_22964__$1 = state_22964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22964__$1,(2),inst_22959);
} else {
if((state_val_22965 === (2))){
var inst_22961 = (state_22964[(2)]);
var inst_22962 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_22961) : f__$1.call(null,inst_22961));
var state_22964__$1 = state_22964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22964__$1,inst_22962);
} else {
return null;
}
}
});})(c__22120__auto__,f__$1))
;
return ((function (switch__18351__auto__,c__22120__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__18352__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18352__auto____0 = (function (){
var statearr_22969 = [null,null,null,null,null,null,null];
(statearr_22969[(0)] = cljs$core$async$transduce_$_state_machine__18352__auto__);

(statearr_22969[(1)] = (1));

return statearr_22969;
});
var cljs$core$async$transduce_$_state_machine__18352__auto____1 = (function (state_22964){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_22964);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e22970){if((e22970 instanceof Object)){
var ex__18355__auto__ = e22970;
var statearr_22971_22973 = state_22964;
(statearr_22971_22973[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22964);

return cljs.core.cst$kw$recur;
} else {
throw e22970;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__22974 = state_22964;
state_22964 = G__22974;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18352__auto__ = function(state_22964){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18352__auto____1.call(this,state_22964);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18352__auto____0;
cljs$core$async$transduce_$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18352__auto____1;
return cljs$core$async$transduce_$_state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto__,f__$1))
})();
var state__22122__auto__ = (function (){var statearr_22972 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_22972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto__);

return statearr_22972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto__,f__$1))
);

return c__22120__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22975 = [];
var len__10524__auto___23027 = arguments.length;
var i__10525__auto___23028 = (0);
while(true){
if((i__10525__auto___23028 < len__10524__auto___23027)){
args22975.push((arguments[i__10525__auto___23028]));

var G__23029 = (i__10525__auto___23028 + (1));
i__10525__auto___23028 = G__23029;
continue;
} else {
}
break;
}

var G__22977 = args22975.length;
switch (G__22977) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22975.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto__){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto__){
return (function (state_23002){
var state_val_23003 = (state_23002[(1)]);
if((state_val_23003 === (7))){
var inst_22984 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
var statearr_23004_23031 = state_23002__$1;
(statearr_23004_23031[(2)] = inst_22984);

(statearr_23004_23031[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23003 === (1))){
var inst_22978 = cljs.core.seq(coll);
var inst_22979 = inst_22978;
var state_23002__$1 = (function (){var statearr_23005 = state_23002;
(statearr_23005[(7)] = inst_22979);

return statearr_23005;
})();
var statearr_23006_23032 = state_23002__$1;
(statearr_23006_23032[(2)] = null);

(statearr_23006_23032[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23003 === (4))){
var inst_22979 = (state_23002[(7)]);
var inst_22982 = cljs.core.first(inst_22979);
var state_23002__$1 = state_23002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23002__$1,(7),ch,inst_22982);
} else {
if((state_val_23003 === (13))){
var inst_22996 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
var statearr_23007_23033 = state_23002__$1;
(statearr_23007_23033[(2)] = inst_22996);

(statearr_23007_23033[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23003 === (6))){
var inst_22987 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
if(cljs.core.truth_(inst_22987)){
var statearr_23008_23034 = state_23002__$1;
(statearr_23008_23034[(1)] = (8));

} else {
var statearr_23009_23035 = state_23002__$1;
(statearr_23009_23035[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23003 === (3))){
var inst_23000 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23002__$1,inst_23000);
} else {
if((state_val_23003 === (12))){
var state_23002__$1 = state_23002;
var statearr_23010_23036 = state_23002__$1;
(statearr_23010_23036[(2)] = null);

(statearr_23010_23036[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23003 === (2))){
var inst_22979 = (state_23002[(7)]);
var state_23002__$1 = state_23002;
if(cljs.core.truth_(inst_22979)){
var statearr_23011_23037 = state_23002__$1;
(statearr_23011_23037[(1)] = (4));

} else {
var statearr_23012_23038 = state_23002__$1;
(statearr_23012_23038[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23003 === (11))){
var inst_22993 = cljs.core.async.close_BANG_(ch);
var state_23002__$1 = state_23002;
var statearr_23013_23039 = state_23002__$1;
(statearr_23013_23039[(2)] = inst_22993);

(statearr_23013_23039[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23003 === (9))){
var state_23002__$1 = state_23002;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23014_23040 = state_23002__$1;
(statearr_23014_23040[(1)] = (11));

} else {
var statearr_23015_23041 = state_23002__$1;
(statearr_23015_23041[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23003 === (5))){
var inst_22979 = (state_23002[(7)]);
var state_23002__$1 = state_23002;
var statearr_23016_23042 = state_23002__$1;
(statearr_23016_23042[(2)] = inst_22979);

(statearr_23016_23042[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23003 === (10))){
var inst_22998 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
var statearr_23017_23043 = state_23002__$1;
(statearr_23017_23043[(2)] = inst_22998);

(statearr_23017_23043[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23003 === (8))){
var inst_22979 = (state_23002[(7)]);
var inst_22989 = cljs.core.next(inst_22979);
var inst_22979__$1 = inst_22989;
var state_23002__$1 = (function (){var statearr_23018 = state_23002;
(statearr_23018[(7)] = inst_22979__$1);

return statearr_23018;
})();
var statearr_23019_23044 = state_23002__$1;
(statearr_23019_23044[(2)] = null);

(statearr_23019_23044[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto__))
;
return ((function (switch__18351__auto__,c__22120__auto__){
return (function() {
var cljs$core$async$state_machine__18352__auto__ = null;
var cljs$core$async$state_machine__18352__auto____0 = (function (){
var statearr_23023 = [null,null,null,null,null,null,null,null];
(statearr_23023[(0)] = cljs$core$async$state_machine__18352__auto__);

(statearr_23023[(1)] = (1));

return statearr_23023;
});
var cljs$core$async$state_machine__18352__auto____1 = (function (state_23002){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_23002);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e23024){if((e23024 instanceof Object)){
var ex__18355__auto__ = e23024;
var statearr_23025_23045 = state_23002;
(statearr_23025_23045[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23002);

return cljs.core.cst$kw$recur;
} else {
throw e23024;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__23046 = state_23002;
state_23002 = G__23046;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$state_machine__18352__auto__ = function(state_23002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18352__auto____1.call(this,state_23002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18352__auto____0;
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18352__auto____1;
return cljs$core$async$state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto__))
})();
var state__22122__auto__ = (function (){var statearr_23026 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_23026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto__);

return statearr_23026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto__))
);

return c__22120__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__10021__auto__ = (((_ == null))?null:_);
var m__10022__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10021__auto__)]);
if(!((m__10022__auto__ == null))){
return (m__10022__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10022__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__10022__auto__.call(null,_));
} else {
var m__10022__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__10022__auto____$1 == null))){
return (m__10022__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10022__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__10022__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__10021__auto__ = (((m == null))?null:m);
var m__10022__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10021__auto__)]);
if(!((m__10022__auto__ == null))){
return (m__10022__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10022__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__10022__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__10022__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__10022__auto____$1 == null))){
return (m__10022__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10022__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__10022__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__10021__auto__ = (((m == null))?null:m);
var m__10022__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10021__auto__)]);
if(!((m__10022__auto__ == null))){
return (m__10022__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10022__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10022__auto__.call(null,m,ch));
} else {
var m__10022__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__10022__auto____$1 == null))){
return (m__10022__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10022__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10022__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__10021__auto__ = (((m == null))?null:m);
var m__10022__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10021__auto__)]);
if(!((m__10022__auto__ == null))){
return (m__10022__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10022__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__10022__auto__.call(null,m));
} else {
var m__10022__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__10022__auto____$1 == null))){
return (m__10022__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10022__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__10022__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__23275 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23275) : cljs.core.atom.call(null,G__23275));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23276 = (function (ch,cs,meta23277){
this.ch = ch;
this.cs = cs;
this.meta23277 = meta23277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23278,meta23277__$1){
var self__ = this;
var _23278__$1 = this;
return (new cljs.core.async.t_cljs$core$async23276(self__.ch,self__.cs,meta23277__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23278){
var self__ = this;
var _23278__$1 = this;
return self__.meta23277;
});})(cs))
;

cljs.core.async.t_cljs$core$async23276.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23276.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23276.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23276.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23276.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23276.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23279_23503 = self__.cs;
var G__23280_23504 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23279_23503,G__23280_23504) : cljs.core.reset_BANG_.call(null,G__23279_23503,G__23280_23504));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23276.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta23277], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23276";

cljs.core.async.t_cljs$core$async23276.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9960__auto__,writer__9961__auto__,opt__9962__auto__){
return cljs.core._write(writer__9961__auto__,"cljs.core.async/t_cljs$core$async23276");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23276 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23276(ch__$1,cs__$1,meta23277){
return (new cljs.core.async.t_cljs$core$async23276(ch__$1,cs__$1,meta23277));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23276(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22120__auto___23505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___23505,cs,m,dchan,dctr,done){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___23505,cs,m,dchan,dctr,done){
return (function (state_23415){
var state_val_23416 = (state_23415[(1)]);
if((state_val_23416 === (7))){
var inst_23411 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
var statearr_23417_23506 = state_23415__$1;
(statearr_23417_23506[(2)] = inst_23411);

(statearr_23417_23506[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (20))){
var inst_23314 = (state_23415[(7)]);
var inst_23326 = cljs.core.first(inst_23314);
var inst_23327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23326,(0),null);
var inst_23328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23326,(1),null);
var state_23415__$1 = (function (){var statearr_23418 = state_23415;
(statearr_23418[(8)] = inst_23327);

return statearr_23418;
})();
if(cljs.core.truth_(inst_23328)){
var statearr_23419_23507 = state_23415__$1;
(statearr_23419_23507[(1)] = (22));

} else {
var statearr_23420_23508 = state_23415__$1;
(statearr_23420_23508[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (27))){
var inst_23363 = (state_23415[(9)]);
var inst_23356 = (state_23415[(10)]);
var inst_23358 = (state_23415[(11)]);
var inst_23283 = (state_23415[(12)]);
var inst_23363__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23356,inst_23358);
var inst_23364 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23363__$1,inst_23283,done);
var state_23415__$1 = (function (){var statearr_23421 = state_23415;
(statearr_23421[(9)] = inst_23363__$1);

return statearr_23421;
})();
if(cljs.core.truth_(inst_23364)){
var statearr_23422_23509 = state_23415__$1;
(statearr_23422_23509[(1)] = (30));

} else {
var statearr_23423_23510 = state_23415__$1;
(statearr_23423_23510[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (1))){
var state_23415__$1 = state_23415;
var statearr_23424_23511 = state_23415__$1;
(statearr_23424_23511[(2)] = null);

(statearr_23424_23511[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (24))){
var inst_23314 = (state_23415[(7)]);
var inst_23333 = (state_23415[(2)]);
var inst_23334 = cljs.core.next(inst_23314);
var inst_23292 = inst_23334;
var inst_23293 = null;
var inst_23294 = (0);
var inst_23295 = (0);
var state_23415__$1 = (function (){var statearr_23425 = state_23415;
(statearr_23425[(13)] = inst_23292);

(statearr_23425[(14)] = inst_23294);

(statearr_23425[(15)] = inst_23295);

(statearr_23425[(16)] = inst_23293);

(statearr_23425[(17)] = inst_23333);

return statearr_23425;
})();
var statearr_23426_23512 = state_23415__$1;
(statearr_23426_23512[(2)] = null);

(statearr_23426_23512[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (39))){
var state_23415__$1 = state_23415;
var statearr_23430_23513 = state_23415__$1;
(statearr_23430_23513[(2)] = null);

(statearr_23430_23513[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (4))){
var inst_23283 = (state_23415[(12)]);
var inst_23283__$1 = (state_23415[(2)]);
var inst_23284 = (inst_23283__$1 == null);
var state_23415__$1 = (function (){var statearr_23431 = state_23415;
(statearr_23431[(12)] = inst_23283__$1);

return statearr_23431;
})();
if(cljs.core.truth_(inst_23284)){
var statearr_23432_23514 = state_23415__$1;
(statearr_23432_23514[(1)] = (5));

} else {
var statearr_23433_23515 = state_23415__$1;
(statearr_23433_23515[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (15))){
var inst_23292 = (state_23415[(13)]);
var inst_23294 = (state_23415[(14)]);
var inst_23295 = (state_23415[(15)]);
var inst_23293 = (state_23415[(16)]);
var inst_23310 = (state_23415[(2)]);
var inst_23311 = (inst_23295 + (1));
var tmp23427 = inst_23292;
var tmp23428 = inst_23294;
var tmp23429 = inst_23293;
var inst_23292__$1 = tmp23427;
var inst_23293__$1 = tmp23429;
var inst_23294__$1 = tmp23428;
var inst_23295__$1 = inst_23311;
var state_23415__$1 = (function (){var statearr_23434 = state_23415;
(statearr_23434[(18)] = inst_23310);

(statearr_23434[(13)] = inst_23292__$1);

(statearr_23434[(14)] = inst_23294__$1);

(statearr_23434[(15)] = inst_23295__$1);

(statearr_23434[(16)] = inst_23293__$1);

return statearr_23434;
})();
var statearr_23435_23516 = state_23415__$1;
(statearr_23435_23516[(2)] = null);

(statearr_23435_23516[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (21))){
var inst_23337 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
var statearr_23439_23517 = state_23415__$1;
(statearr_23439_23517[(2)] = inst_23337);

(statearr_23439_23517[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (31))){
var inst_23363 = (state_23415[(9)]);
var inst_23367 = done(null);
var inst_23368 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23363);
var state_23415__$1 = (function (){var statearr_23440 = state_23415;
(statearr_23440[(19)] = inst_23367);

return statearr_23440;
})();
var statearr_23441_23518 = state_23415__$1;
(statearr_23441_23518[(2)] = inst_23368);

(statearr_23441_23518[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (32))){
var inst_23357 = (state_23415[(20)]);
var inst_23356 = (state_23415[(10)]);
var inst_23358 = (state_23415[(11)]);
var inst_23355 = (state_23415[(21)]);
var inst_23370 = (state_23415[(2)]);
var inst_23371 = (inst_23358 + (1));
var tmp23436 = inst_23357;
var tmp23437 = inst_23356;
var tmp23438 = inst_23355;
var inst_23355__$1 = tmp23438;
var inst_23356__$1 = tmp23437;
var inst_23357__$1 = tmp23436;
var inst_23358__$1 = inst_23371;
var state_23415__$1 = (function (){var statearr_23442 = state_23415;
(statearr_23442[(20)] = inst_23357__$1);

(statearr_23442[(10)] = inst_23356__$1);

(statearr_23442[(11)] = inst_23358__$1);

(statearr_23442[(21)] = inst_23355__$1);

(statearr_23442[(22)] = inst_23370);

return statearr_23442;
})();
var statearr_23443_23519 = state_23415__$1;
(statearr_23443_23519[(2)] = null);

(statearr_23443_23519[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (40))){
var inst_23383 = (state_23415[(23)]);
var inst_23387 = done(null);
var inst_23388 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23383);
var state_23415__$1 = (function (){var statearr_23444 = state_23415;
(statearr_23444[(24)] = inst_23387);

return statearr_23444;
})();
var statearr_23445_23520 = state_23415__$1;
(statearr_23445_23520[(2)] = inst_23388);

(statearr_23445_23520[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (33))){
var inst_23374 = (state_23415[(25)]);
var inst_23376 = cljs.core.chunked_seq_QMARK_(inst_23374);
var state_23415__$1 = state_23415;
if(inst_23376){
var statearr_23446_23521 = state_23415__$1;
(statearr_23446_23521[(1)] = (36));

} else {
var statearr_23447_23522 = state_23415__$1;
(statearr_23447_23522[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (13))){
var inst_23304 = (state_23415[(26)]);
var inst_23307 = cljs.core.async.close_BANG_(inst_23304);
var state_23415__$1 = state_23415;
var statearr_23448_23523 = state_23415__$1;
(statearr_23448_23523[(2)] = inst_23307);

(statearr_23448_23523[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (22))){
var inst_23327 = (state_23415[(8)]);
var inst_23330 = cljs.core.async.close_BANG_(inst_23327);
var state_23415__$1 = state_23415;
var statearr_23449_23524 = state_23415__$1;
(statearr_23449_23524[(2)] = inst_23330);

(statearr_23449_23524[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (36))){
var inst_23374 = (state_23415[(25)]);
var inst_23378 = cljs.core.chunk_first(inst_23374);
var inst_23379 = cljs.core.chunk_rest(inst_23374);
var inst_23380 = cljs.core.count(inst_23378);
var inst_23355 = inst_23379;
var inst_23356 = inst_23378;
var inst_23357 = inst_23380;
var inst_23358 = (0);
var state_23415__$1 = (function (){var statearr_23450 = state_23415;
(statearr_23450[(20)] = inst_23357);

(statearr_23450[(10)] = inst_23356);

(statearr_23450[(11)] = inst_23358);

(statearr_23450[(21)] = inst_23355);

return statearr_23450;
})();
var statearr_23451_23525 = state_23415__$1;
(statearr_23451_23525[(2)] = null);

(statearr_23451_23525[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (41))){
var inst_23374 = (state_23415[(25)]);
var inst_23390 = (state_23415[(2)]);
var inst_23391 = cljs.core.next(inst_23374);
var inst_23355 = inst_23391;
var inst_23356 = null;
var inst_23357 = (0);
var inst_23358 = (0);
var state_23415__$1 = (function (){var statearr_23452 = state_23415;
(statearr_23452[(20)] = inst_23357);

(statearr_23452[(10)] = inst_23356);

(statearr_23452[(11)] = inst_23358);

(statearr_23452[(21)] = inst_23355);

(statearr_23452[(27)] = inst_23390);

return statearr_23452;
})();
var statearr_23453_23526 = state_23415__$1;
(statearr_23453_23526[(2)] = null);

(statearr_23453_23526[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (43))){
var state_23415__$1 = state_23415;
var statearr_23454_23527 = state_23415__$1;
(statearr_23454_23527[(2)] = null);

(statearr_23454_23527[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (29))){
var inst_23399 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
var statearr_23455_23528 = state_23415__$1;
(statearr_23455_23528[(2)] = inst_23399);

(statearr_23455_23528[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (44))){
var inst_23408 = (state_23415[(2)]);
var state_23415__$1 = (function (){var statearr_23456 = state_23415;
(statearr_23456[(28)] = inst_23408);

return statearr_23456;
})();
var statearr_23457_23529 = state_23415__$1;
(statearr_23457_23529[(2)] = null);

(statearr_23457_23529[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (6))){
var inst_23347 = (state_23415[(29)]);
var inst_23346 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_23347__$1 = cljs.core.keys(inst_23346);
var inst_23348 = cljs.core.count(inst_23347__$1);
var inst_23349 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_23348) : cljs.core.reset_BANG_.call(null,dctr,inst_23348));
var inst_23354 = cljs.core.seq(inst_23347__$1);
var inst_23355 = inst_23354;
var inst_23356 = null;
var inst_23357 = (0);
var inst_23358 = (0);
var state_23415__$1 = (function (){var statearr_23458 = state_23415;
(statearr_23458[(20)] = inst_23357);

(statearr_23458[(10)] = inst_23356);

(statearr_23458[(11)] = inst_23358);

(statearr_23458[(21)] = inst_23355);

(statearr_23458[(30)] = inst_23349);

(statearr_23458[(29)] = inst_23347__$1);

return statearr_23458;
})();
var statearr_23459_23530 = state_23415__$1;
(statearr_23459_23530[(2)] = null);

(statearr_23459_23530[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (28))){
var inst_23355 = (state_23415[(21)]);
var inst_23374 = (state_23415[(25)]);
var inst_23374__$1 = cljs.core.seq(inst_23355);
var state_23415__$1 = (function (){var statearr_23460 = state_23415;
(statearr_23460[(25)] = inst_23374__$1);

return statearr_23460;
})();
if(inst_23374__$1){
var statearr_23461_23531 = state_23415__$1;
(statearr_23461_23531[(1)] = (33));

} else {
var statearr_23462_23532 = state_23415__$1;
(statearr_23462_23532[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (25))){
var inst_23357 = (state_23415[(20)]);
var inst_23358 = (state_23415[(11)]);
var inst_23360 = (inst_23358 < inst_23357);
var inst_23361 = inst_23360;
var state_23415__$1 = state_23415;
if(cljs.core.truth_(inst_23361)){
var statearr_23463_23533 = state_23415__$1;
(statearr_23463_23533[(1)] = (27));

} else {
var statearr_23464_23534 = state_23415__$1;
(statearr_23464_23534[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (34))){
var state_23415__$1 = state_23415;
var statearr_23465_23535 = state_23415__$1;
(statearr_23465_23535[(2)] = null);

(statearr_23465_23535[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (17))){
var state_23415__$1 = state_23415;
var statearr_23466_23536 = state_23415__$1;
(statearr_23466_23536[(2)] = null);

(statearr_23466_23536[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (3))){
var inst_23413 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23415__$1,inst_23413);
} else {
if((state_val_23416 === (12))){
var inst_23342 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
var statearr_23467_23537 = state_23415__$1;
(statearr_23467_23537[(2)] = inst_23342);

(statearr_23467_23537[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (2))){
var state_23415__$1 = state_23415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23415__$1,(4),ch);
} else {
if((state_val_23416 === (23))){
var state_23415__$1 = state_23415;
var statearr_23468_23538 = state_23415__$1;
(statearr_23468_23538[(2)] = null);

(statearr_23468_23538[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (35))){
var inst_23397 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
var statearr_23469_23539 = state_23415__$1;
(statearr_23469_23539[(2)] = inst_23397);

(statearr_23469_23539[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (19))){
var inst_23314 = (state_23415[(7)]);
var inst_23318 = cljs.core.chunk_first(inst_23314);
var inst_23319 = cljs.core.chunk_rest(inst_23314);
var inst_23320 = cljs.core.count(inst_23318);
var inst_23292 = inst_23319;
var inst_23293 = inst_23318;
var inst_23294 = inst_23320;
var inst_23295 = (0);
var state_23415__$1 = (function (){var statearr_23470 = state_23415;
(statearr_23470[(13)] = inst_23292);

(statearr_23470[(14)] = inst_23294);

(statearr_23470[(15)] = inst_23295);

(statearr_23470[(16)] = inst_23293);

return statearr_23470;
})();
var statearr_23471_23540 = state_23415__$1;
(statearr_23471_23540[(2)] = null);

(statearr_23471_23540[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (11))){
var inst_23292 = (state_23415[(13)]);
var inst_23314 = (state_23415[(7)]);
var inst_23314__$1 = cljs.core.seq(inst_23292);
var state_23415__$1 = (function (){var statearr_23472 = state_23415;
(statearr_23472[(7)] = inst_23314__$1);

return statearr_23472;
})();
if(inst_23314__$1){
var statearr_23473_23541 = state_23415__$1;
(statearr_23473_23541[(1)] = (16));

} else {
var statearr_23474_23542 = state_23415__$1;
(statearr_23474_23542[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (9))){
var inst_23344 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
var statearr_23475_23543 = state_23415__$1;
(statearr_23475_23543[(2)] = inst_23344);

(statearr_23475_23543[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (5))){
var inst_23290 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_23291 = cljs.core.seq(inst_23290);
var inst_23292 = inst_23291;
var inst_23293 = null;
var inst_23294 = (0);
var inst_23295 = (0);
var state_23415__$1 = (function (){var statearr_23476 = state_23415;
(statearr_23476[(13)] = inst_23292);

(statearr_23476[(14)] = inst_23294);

(statearr_23476[(15)] = inst_23295);

(statearr_23476[(16)] = inst_23293);

return statearr_23476;
})();
var statearr_23477_23544 = state_23415__$1;
(statearr_23477_23544[(2)] = null);

(statearr_23477_23544[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (14))){
var state_23415__$1 = state_23415;
var statearr_23478_23545 = state_23415__$1;
(statearr_23478_23545[(2)] = null);

(statearr_23478_23545[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (45))){
var inst_23405 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
var statearr_23479_23546 = state_23415__$1;
(statearr_23479_23546[(2)] = inst_23405);

(statearr_23479_23546[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (26))){
var inst_23347 = (state_23415[(29)]);
var inst_23401 = (state_23415[(2)]);
var inst_23402 = cljs.core.seq(inst_23347);
var state_23415__$1 = (function (){var statearr_23480 = state_23415;
(statearr_23480[(31)] = inst_23401);

return statearr_23480;
})();
if(inst_23402){
var statearr_23481_23547 = state_23415__$1;
(statearr_23481_23547[(1)] = (42));

} else {
var statearr_23482_23548 = state_23415__$1;
(statearr_23482_23548[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (16))){
var inst_23314 = (state_23415[(7)]);
var inst_23316 = cljs.core.chunked_seq_QMARK_(inst_23314);
var state_23415__$1 = state_23415;
if(inst_23316){
var statearr_23483_23549 = state_23415__$1;
(statearr_23483_23549[(1)] = (19));

} else {
var statearr_23484_23550 = state_23415__$1;
(statearr_23484_23550[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (38))){
var inst_23394 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
var statearr_23485_23551 = state_23415__$1;
(statearr_23485_23551[(2)] = inst_23394);

(statearr_23485_23551[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (30))){
var state_23415__$1 = state_23415;
var statearr_23486_23552 = state_23415__$1;
(statearr_23486_23552[(2)] = null);

(statearr_23486_23552[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (10))){
var inst_23295 = (state_23415[(15)]);
var inst_23293 = (state_23415[(16)]);
var inst_23303 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23293,inst_23295);
var inst_23304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23303,(0),null);
var inst_23305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23303,(1),null);
var state_23415__$1 = (function (){var statearr_23487 = state_23415;
(statearr_23487[(26)] = inst_23304);

return statearr_23487;
})();
if(cljs.core.truth_(inst_23305)){
var statearr_23488_23553 = state_23415__$1;
(statearr_23488_23553[(1)] = (13));

} else {
var statearr_23489_23554 = state_23415__$1;
(statearr_23489_23554[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (18))){
var inst_23340 = (state_23415[(2)]);
var state_23415__$1 = state_23415;
var statearr_23490_23555 = state_23415__$1;
(statearr_23490_23555[(2)] = inst_23340);

(statearr_23490_23555[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (42))){
var state_23415__$1 = state_23415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23415__$1,(45),dchan);
} else {
if((state_val_23416 === (37))){
var inst_23374 = (state_23415[(25)]);
var inst_23383 = (state_23415[(23)]);
var inst_23283 = (state_23415[(12)]);
var inst_23383__$1 = cljs.core.first(inst_23374);
var inst_23384 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23383__$1,inst_23283,done);
var state_23415__$1 = (function (){var statearr_23491 = state_23415;
(statearr_23491[(23)] = inst_23383__$1);

return statearr_23491;
})();
if(cljs.core.truth_(inst_23384)){
var statearr_23492_23556 = state_23415__$1;
(statearr_23492_23556[(1)] = (39));

} else {
var statearr_23493_23557 = state_23415__$1;
(statearr_23493_23557[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23416 === (8))){
var inst_23294 = (state_23415[(14)]);
var inst_23295 = (state_23415[(15)]);
var inst_23297 = (inst_23295 < inst_23294);
var inst_23298 = inst_23297;
var state_23415__$1 = state_23415;
if(cljs.core.truth_(inst_23298)){
var statearr_23494_23558 = state_23415__$1;
(statearr_23494_23558[(1)] = (10));

} else {
var statearr_23495_23559 = state_23415__$1;
(statearr_23495_23559[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto___23505,cs,m,dchan,dctr,done))
;
return ((function (switch__18351__auto__,c__22120__auto___23505,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18352__auto__ = null;
var cljs$core$async$mult_$_state_machine__18352__auto____0 = (function (){
var statearr_23499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23499[(0)] = cljs$core$async$mult_$_state_machine__18352__auto__);

(statearr_23499[(1)] = (1));

return statearr_23499;
});
var cljs$core$async$mult_$_state_machine__18352__auto____1 = (function (state_23415){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_23415);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e23500){if((e23500 instanceof Object)){
var ex__18355__auto__ = e23500;
var statearr_23501_23560 = state_23415;
(statearr_23501_23560[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23415);

return cljs.core.cst$kw$recur;
} else {
throw e23500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__23561 = state_23415;
state_23415 = G__23561;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18352__auto__ = function(state_23415){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18352__auto____1.call(this,state_23415);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18352__auto____0;
cljs$core$async$mult_$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18352__auto____1;
return cljs$core$async$mult_$_state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___23505,cs,m,dchan,dctr,done))
})();
var state__22122__auto__ = (function (){var statearr_23502 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_23502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___23505);

return statearr_23502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___23505,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23562 = [];
var len__10524__auto___23565 = arguments.length;
var i__10525__auto___23566 = (0);
while(true){
if((i__10525__auto___23566 < len__10524__auto___23565)){
args23562.push((arguments[i__10525__auto___23566]));

var G__23567 = (i__10525__auto___23566 + (1));
i__10525__auto___23566 = G__23567;
continue;
} else {
}
break;
}

var G__23564 = args23562.length;
switch (G__23564) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23562.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__10021__auto__ = (((m == null))?null:m);
var m__10022__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10021__auto__)]);
if(!((m__10022__auto__ == null))){
return (m__10022__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10022__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10022__auto__.call(null,m,ch));
} else {
var m__10022__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__10022__auto____$1 == null))){
return (m__10022__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10022__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10022__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__10021__auto__ = (((m == null))?null:m);
var m__10022__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10021__auto__)]);
if(!((m__10022__auto__ == null))){
return (m__10022__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10022__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10022__auto__.call(null,m,ch));
} else {
var m__10022__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__10022__auto____$1 == null))){
return (m__10022__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10022__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__10022__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__10021__auto__ = (((m == null))?null:m);
var m__10022__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10021__auto__)]);
if(!((m__10022__auto__ == null))){
return (m__10022__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10022__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__10022__auto__.call(null,m));
} else {
var m__10022__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__10022__auto____$1 == null))){
return (m__10022__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10022__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__10022__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__10021__auto__ = (((m == null))?null:m);
var m__10022__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10021__auto__)]);
if(!((m__10022__auto__ == null))){
return (m__10022__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10022__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__10022__auto__.call(null,m,state_map));
} else {
var m__10022__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__10022__auto____$1 == null))){
return (m__10022__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10022__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__10022__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__10021__auto__ = (((m == null))?null:m);
var m__10022__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10021__auto__)]);
if(!((m__10022__auto__ == null))){
return (m__10022__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10022__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__10022__auto__.call(null,m,mode));
} else {
var m__10022__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__10022__auto____$1 == null))){
return (m__10022__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10022__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__10022__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10531__auto__ = [];
var len__10524__auto___23579 = arguments.length;
var i__10525__auto___23580 = (0);
while(true){
if((i__10525__auto___23580 < len__10524__auto___23579)){
args__10531__auto__.push((arguments[i__10525__auto___23580]));

var G__23581 = (i__10525__auto___23580 + (1));
i__10525__auto___23580 = G__23581;
continue;
} else {
}
break;
}

var argseq__10532__auto__ = ((((3) < args__10531__auto__.length))?(new cljs.core.IndexedSeq(args__10531__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10532__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23573){
var map__23574 = p__23573;
var map__23574__$1 = ((((!((map__23574 == null)))?((((map__23574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23574):map__23574);
var opts = map__23574__$1;
var statearr_23576_23582 = state;
(statearr_23576_23582[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts(((function (map__23574,map__23574__$1,opts){
return (function (val){
var statearr_23577_23583 = state;
(statearr_23577_23583[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__23574,map__23574__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_23578_23584 = state;
(statearr_23578_23584[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23569){
var G__23570 = cljs.core.first(seq23569);
var seq23569__$1 = cljs.core.next(seq23569);
var G__23571 = cljs.core.first(seq23569__$1);
var seq23569__$2 = cljs.core.next(seq23569__$1);
var G__23572 = cljs.core.first(seq23569__$2);
var seq23569__$3 = cljs.core.next(seq23569__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23570,G__23571,G__23572,seq23569__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__23756 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23756) : cljs.core.atom.call(null,G__23756));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__23757 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23757) : cljs.core.atom.call(null,G__23757));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23758 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23758 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta23759){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta23759 = meta23759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23760,meta23759__$1){
var self__ = this;
var _23760__$1 = this;
return (new cljs.core.async.t_cljs$core$async23758(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta23759__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23760){
var self__ = this;
var _23760__$1 = this;
return self__.meta23759;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23761_23927 = self__.cs;
var G__23762_23928 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23761_23927,G__23762_23928) : cljs.core.reset_BANG_.call(null,G__23761_23927,G__23762_23928));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23758.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23758.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta23759], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23758";

cljs.core.async.t_cljs$core$async23758.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9960__auto__,writer__9961__auto__,opt__9962__auto__){
return cljs.core._write(writer__9961__auto__,"cljs.core.async/t_cljs$core$async23758");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23758 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23758(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23759){
return (new cljs.core.async.t_cljs$core$async23758(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23759));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23758(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22120__auto___23929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___23929,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___23929,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23864){
var state_val_23865 = (state_23864[(1)]);
if((state_val_23865 === (7))){
var inst_23779 = (state_23864[(2)]);
var state_23864__$1 = state_23864;
var statearr_23866_23930 = state_23864__$1;
(statearr_23866_23930[(2)] = inst_23779);

(statearr_23866_23930[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (20))){
var inst_23791 = (state_23864[(7)]);
var state_23864__$1 = state_23864;
var statearr_23867_23931 = state_23864__$1;
(statearr_23867_23931[(2)] = inst_23791);

(statearr_23867_23931[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (27))){
var state_23864__$1 = state_23864;
var statearr_23868_23932 = state_23864__$1;
(statearr_23868_23932[(2)] = null);

(statearr_23868_23932[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (1))){
var inst_23766 = (state_23864[(8)]);
var inst_23766__$1 = calc_state();
var inst_23768 = (inst_23766__$1 == null);
var inst_23769 = cljs.core.not(inst_23768);
var state_23864__$1 = (function (){var statearr_23869 = state_23864;
(statearr_23869[(8)] = inst_23766__$1);

return statearr_23869;
})();
if(inst_23769){
var statearr_23870_23933 = state_23864__$1;
(statearr_23870_23933[(1)] = (2));

} else {
var statearr_23871_23934 = state_23864__$1;
(statearr_23871_23934[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (24))){
var inst_23824 = (state_23864[(9)]);
var inst_23815 = (state_23864[(10)]);
var inst_23838 = (state_23864[(11)]);
var inst_23838__$1 = (inst_23815.cljs$core$IFn$_invoke$arity$1 ? inst_23815.cljs$core$IFn$_invoke$arity$1(inst_23824) : inst_23815.call(null,inst_23824));
var state_23864__$1 = (function (){var statearr_23872 = state_23864;
(statearr_23872[(11)] = inst_23838__$1);

return statearr_23872;
})();
if(cljs.core.truth_(inst_23838__$1)){
var statearr_23873_23935 = state_23864__$1;
(statearr_23873_23935[(1)] = (29));

} else {
var statearr_23874_23936 = state_23864__$1;
(statearr_23874_23936[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (4))){
var inst_23782 = (state_23864[(2)]);
var state_23864__$1 = state_23864;
if(cljs.core.truth_(inst_23782)){
var statearr_23875_23937 = state_23864__$1;
(statearr_23875_23937[(1)] = (8));

} else {
var statearr_23876_23938 = state_23864__$1;
(statearr_23876_23938[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (15))){
var inst_23809 = (state_23864[(2)]);
var state_23864__$1 = state_23864;
if(cljs.core.truth_(inst_23809)){
var statearr_23877_23939 = state_23864__$1;
(statearr_23877_23939[(1)] = (19));

} else {
var statearr_23878_23940 = state_23864__$1;
(statearr_23878_23940[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (21))){
var inst_23814 = (state_23864[(12)]);
var inst_23814__$1 = (state_23864[(2)]);
var inst_23815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23814__$1,cljs.core.cst$kw$solos);
var inst_23816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23814__$1,cljs.core.cst$kw$mutes);
var inst_23817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23814__$1,cljs.core.cst$kw$reads);
var state_23864__$1 = (function (){var statearr_23879 = state_23864;
(statearr_23879[(12)] = inst_23814__$1);

(statearr_23879[(10)] = inst_23815);

(statearr_23879[(13)] = inst_23816);

return statearr_23879;
})();
return cljs.core.async.ioc_alts_BANG_(state_23864__$1,(22),inst_23817);
} else {
if((state_val_23865 === (31))){
var inst_23846 = (state_23864[(2)]);
var state_23864__$1 = state_23864;
if(cljs.core.truth_(inst_23846)){
var statearr_23880_23941 = state_23864__$1;
(statearr_23880_23941[(1)] = (32));

} else {
var statearr_23881_23942 = state_23864__$1;
(statearr_23881_23942[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (32))){
var inst_23823 = (state_23864[(14)]);
var state_23864__$1 = state_23864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23864__$1,(35),out,inst_23823);
} else {
if((state_val_23865 === (33))){
var inst_23814 = (state_23864[(12)]);
var inst_23791 = inst_23814;
var state_23864__$1 = (function (){var statearr_23882 = state_23864;
(statearr_23882[(7)] = inst_23791);

return statearr_23882;
})();
var statearr_23883_23943 = state_23864__$1;
(statearr_23883_23943[(2)] = null);

(statearr_23883_23943[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (13))){
var inst_23791 = (state_23864[(7)]);
var inst_23798 = inst_23791.cljs$lang$protocol_mask$partition0$;
var inst_23799 = (inst_23798 & (64));
var inst_23800 = inst_23791.cljs$core$ISeq$;
var inst_23801 = (cljs.core.PROTOCOL_SENTINEL === inst_23800);
var inst_23802 = (inst_23799) || (inst_23801);
var state_23864__$1 = state_23864;
if(cljs.core.truth_(inst_23802)){
var statearr_23884_23944 = state_23864__$1;
(statearr_23884_23944[(1)] = (16));

} else {
var statearr_23885_23945 = state_23864__$1;
(statearr_23885_23945[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (22))){
var inst_23824 = (state_23864[(9)]);
var inst_23823 = (state_23864[(14)]);
var inst_23822 = (state_23864[(2)]);
var inst_23823__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23822,(0),null);
var inst_23824__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23822,(1),null);
var inst_23825 = (inst_23823__$1 == null);
var inst_23826 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23824__$1,change);
var inst_23827 = (inst_23825) || (inst_23826);
var state_23864__$1 = (function (){var statearr_23886 = state_23864;
(statearr_23886[(9)] = inst_23824__$1);

(statearr_23886[(14)] = inst_23823__$1);

return statearr_23886;
})();
if(cljs.core.truth_(inst_23827)){
var statearr_23887_23946 = state_23864__$1;
(statearr_23887_23946[(1)] = (23));

} else {
var statearr_23888_23947 = state_23864__$1;
(statearr_23888_23947[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (36))){
var inst_23814 = (state_23864[(12)]);
var inst_23791 = inst_23814;
var state_23864__$1 = (function (){var statearr_23889 = state_23864;
(statearr_23889[(7)] = inst_23791);

return statearr_23889;
})();
var statearr_23890_23948 = state_23864__$1;
(statearr_23890_23948[(2)] = null);

(statearr_23890_23948[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (29))){
var inst_23838 = (state_23864[(11)]);
var state_23864__$1 = state_23864;
var statearr_23891_23949 = state_23864__$1;
(statearr_23891_23949[(2)] = inst_23838);

(statearr_23891_23949[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (6))){
var state_23864__$1 = state_23864;
var statearr_23892_23950 = state_23864__$1;
(statearr_23892_23950[(2)] = false);

(statearr_23892_23950[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (28))){
var inst_23834 = (state_23864[(2)]);
var inst_23835 = calc_state();
var inst_23791 = inst_23835;
var state_23864__$1 = (function (){var statearr_23893 = state_23864;
(statearr_23893[(7)] = inst_23791);

(statearr_23893[(15)] = inst_23834);

return statearr_23893;
})();
var statearr_23894_23951 = state_23864__$1;
(statearr_23894_23951[(2)] = null);

(statearr_23894_23951[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (25))){
var inst_23860 = (state_23864[(2)]);
var state_23864__$1 = state_23864;
var statearr_23895_23952 = state_23864__$1;
(statearr_23895_23952[(2)] = inst_23860);

(statearr_23895_23952[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (34))){
var inst_23858 = (state_23864[(2)]);
var state_23864__$1 = state_23864;
var statearr_23896_23953 = state_23864__$1;
(statearr_23896_23953[(2)] = inst_23858);

(statearr_23896_23953[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (17))){
var state_23864__$1 = state_23864;
var statearr_23897_23954 = state_23864__$1;
(statearr_23897_23954[(2)] = false);

(statearr_23897_23954[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (3))){
var state_23864__$1 = state_23864;
var statearr_23898_23955 = state_23864__$1;
(statearr_23898_23955[(2)] = false);

(statearr_23898_23955[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (12))){
var inst_23862 = (state_23864[(2)]);
var state_23864__$1 = state_23864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23864__$1,inst_23862);
} else {
if((state_val_23865 === (2))){
var inst_23766 = (state_23864[(8)]);
var inst_23771 = inst_23766.cljs$lang$protocol_mask$partition0$;
var inst_23772 = (inst_23771 & (64));
var inst_23773 = inst_23766.cljs$core$ISeq$;
var inst_23774 = (cljs.core.PROTOCOL_SENTINEL === inst_23773);
var inst_23775 = (inst_23772) || (inst_23774);
var state_23864__$1 = state_23864;
if(cljs.core.truth_(inst_23775)){
var statearr_23899_23956 = state_23864__$1;
(statearr_23899_23956[(1)] = (5));

} else {
var statearr_23900_23957 = state_23864__$1;
(statearr_23900_23957[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (23))){
var inst_23823 = (state_23864[(14)]);
var inst_23829 = (inst_23823 == null);
var state_23864__$1 = state_23864;
if(cljs.core.truth_(inst_23829)){
var statearr_23901_23958 = state_23864__$1;
(statearr_23901_23958[(1)] = (26));

} else {
var statearr_23902_23959 = state_23864__$1;
(statearr_23902_23959[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (35))){
var inst_23849 = (state_23864[(2)]);
var state_23864__$1 = state_23864;
if(cljs.core.truth_(inst_23849)){
var statearr_23903_23960 = state_23864__$1;
(statearr_23903_23960[(1)] = (36));

} else {
var statearr_23904_23961 = state_23864__$1;
(statearr_23904_23961[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (19))){
var inst_23791 = (state_23864[(7)]);
var inst_23811 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23791);
var state_23864__$1 = state_23864;
var statearr_23905_23962 = state_23864__$1;
(statearr_23905_23962[(2)] = inst_23811);

(statearr_23905_23962[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (11))){
var inst_23791 = (state_23864[(7)]);
var inst_23795 = (inst_23791 == null);
var inst_23796 = cljs.core.not(inst_23795);
var state_23864__$1 = state_23864;
if(inst_23796){
var statearr_23906_23963 = state_23864__$1;
(statearr_23906_23963[(1)] = (13));

} else {
var statearr_23907_23964 = state_23864__$1;
(statearr_23907_23964[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (9))){
var inst_23766 = (state_23864[(8)]);
var state_23864__$1 = state_23864;
var statearr_23908_23965 = state_23864__$1;
(statearr_23908_23965[(2)] = inst_23766);

(statearr_23908_23965[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (5))){
var state_23864__$1 = state_23864;
var statearr_23909_23966 = state_23864__$1;
(statearr_23909_23966[(2)] = true);

(statearr_23909_23966[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (14))){
var state_23864__$1 = state_23864;
var statearr_23910_23967 = state_23864__$1;
(statearr_23910_23967[(2)] = false);

(statearr_23910_23967[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (26))){
var inst_23824 = (state_23864[(9)]);
var inst_23831 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23824);
var state_23864__$1 = state_23864;
var statearr_23911_23968 = state_23864__$1;
(statearr_23911_23968[(2)] = inst_23831);

(statearr_23911_23968[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (16))){
var state_23864__$1 = state_23864;
var statearr_23912_23969 = state_23864__$1;
(statearr_23912_23969[(2)] = true);

(statearr_23912_23969[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (38))){
var inst_23854 = (state_23864[(2)]);
var state_23864__$1 = state_23864;
var statearr_23913_23970 = state_23864__$1;
(statearr_23913_23970[(2)] = inst_23854);

(statearr_23913_23970[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (30))){
var inst_23824 = (state_23864[(9)]);
var inst_23815 = (state_23864[(10)]);
var inst_23816 = (state_23864[(13)]);
var inst_23841 = cljs.core.empty_QMARK_(inst_23815);
var inst_23842 = (inst_23816.cljs$core$IFn$_invoke$arity$1 ? inst_23816.cljs$core$IFn$_invoke$arity$1(inst_23824) : inst_23816.call(null,inst_23824));
var inst_23843 = cljs.core.not(inst_23842);
var inst_23844 = (inst_23841) && (inst_23843);
var state_23864__$1 = state_23864;
var statearr_23914_23971 = state_23864__$1;
(statearr_23914_23971[(2)] = inst_23844);

(statearr_23914_23971[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (10))){
var inst_23766 = (state_23864[(8)]);
var inst_23787 = (state_23864[(2)]);
var inst_23788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23787,cljs.core.cst$kw$solos);
var inst_23789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23787,cljs.core.cst$kw$mutes);
var inst_23790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23787,cljs.core.cst$kw$reads);
var inst_23791 = inst_23766;
var state_23864__$1 = (function (){var statearr_23915 = state_23864;
(statearr_23915[(16)] = inst_23789);

(statearr_23915[(7)] = inst_23791);

(statearr_23915[(17)] = inst_23788);

(statearr_23915[(18)] = inst_23790);

return statearr_23915;
})();
var statearr_23916_23972 = state_23864__$1;
(statearr_23916_23972[(2)] = null);

(statearr_23916_23972[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (18))){
var inst_23806 = (state_23864[(2)]);
var state_23864__$1 = state_23864;
var statearr_23917_23973 = state_23864__$1;
(statearr_23917_23973[(2)] = inst_23806);

(statearr_23917_23973[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (37))){
var state_23864__$1 = state_23864;
var statearr_23918_23974 = state_23864__$1;
(statearr_23918_23974[(2)] = null);

(statearr_23918_23974[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23865 === (8))){
var inst_23766 = (state_23864[(8)]);
var inst_23784 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23766);
var state_23864__$1 = state_23864;
var statearr_23919_23975 = state_23864__$1;
(statearr_23919_23975[(2)] = inst_23784);

(statearr_23919_23975[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto___23929,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18351__auto__,c__22120__auto___23929,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18352__auto__ = null;
var cljs$core$async$mix_$_state_machine__18352__auto____0 = (function (){
var statearr_23923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23923[(0)] = cljs$core$async$mix_$_state_machine__18352__auto__);

(statearr_23923[(1)] = (1));

return statearr_23923;
});
var cljs$core$async$mix_$_state_machine__18352__auto____1 = (function (state_23864){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_23864);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e23924){if((e23924 instanceof Object)){
var ex__18355__auto__ = e23924;
var statearr_23925_23976 = state_23864;
(statearr_23925_23976[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23864);

return cljs.core.cst$kw$recur;
} else {
throw e23924;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__23977 = state_23864;
state_23864 = G__23977;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18352__auto__ = function(state_23864){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18352__auto____1.call(this,state_23864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18352__auto____0;
cljs$core$async$mix_$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18352__auto____1;
return cljs$core$async$mix_$_state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___23929,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22122__auto__ = (function (){var statearr_23926 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_23926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___23929);

return statearr_23926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___23929,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__10021__auto__ = (((p == null))?null:p);
var m__10022__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10021__auto__)]);
if(!((m__10022__auto__ == null))){
return (m__10022__auto__.cljs$core$IFn$_invoke$arity$4 ? m__10022__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__10022__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__10022__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__10022__auto____$1 == null))){
return (m__10022__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__10022__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__10022__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__10021__auto__ = (((p == null))?null:p);
var m__10022__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10021__auto__)]);
if(!((m__10022__auto__ == null))){
return (m__10022__auto__.cljs$core$IFn$_invoke$arity$3 ? m__10022__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__10022__auto__.call(null,p,v,ch));
} else {
var m__10022__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__10022__auto____$1 == null))){
return (m__10022__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__10022__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__10022__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23978 = [];
var len__10524__auto___23981 = arguments.length;
var i__10525__auto___23982 = (0);
while(true){
if((i__10525__auto___23982 < len__10524__auto___23981)){
args23978.push((arguments[i__10525__auto___23982]));

var G__23983 = (i__10525__auto___23982 + (1));
i__10525__auto___23982 = G__23983;
continue;
} else {
}
break;
}

var G__23980 = args23978.length;
switch (G__23980) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23978.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__10021__auto__ = (((p == null))?null:p);
var m__10022__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10021__auto__)]);
if(!((m__10022__auto__ == null))){
return (m__10022__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10022__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__10022__auto__.call(null,p));
} else {
var m__10022__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10022__auto____$1 == null))){
return (m__10022__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10022__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__10022__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__10021__auto__ = (((p == null))?null:p);
var m__10022__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10021__auto__)]);
if(!((m__10022__auto__ == null))){
return (m__10022__auto__.cljs$core$IFn$_invoke$arity$2 ? m__10022__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__10022__auto__.call(null,p,v));
} else {
var m__10022__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10022__auto____$1 == null))){
return (m__10022__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__10022__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__10022__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23986 = [];
var len__10524__auto___24114 = arguments.length;
var i__10525__auto___24115 = (0);
while(true){
if((i__10525__auto___24115 < len__10524__auto___24114)){
args23986.push((arguments[i__10525__auto___24115]));

var G__24116 = (i__10525__auto___24115 + (1));
i__10525__auto___24115 = G__24116;
continue;
} else {
}
break;
}

var G__23988 = args23986.length;
switch (G__23988) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23986.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__23989 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23989) : cljs.core.atom.call(null,G__23989));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__9303__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__9303__auto__)){
return or__9303__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__9303__auto__,mults){
return (function (p1__23985_SHARP_){
if(cljs.core.truth_((p1__23985_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23985_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__23985_SHARP_.call(null,topic)))){
return p1__23985_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23985_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__9303__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23990 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23991){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23991 = meta23991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23992,meta23991__$1){
var self__ = this;
var _23992__$1 = this;
return (new cljs.core.async.t_cljs$core$async23990(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23991__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23992){
var self__ = this;
var _23992__$1 = this;
return self__.meta23991;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23990.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23990.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23990.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23990.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23990.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__6738__auto__)){
var m = temp__6738__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23990.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23993 = self__.mults;
var G__23994 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23993,G__23994) : cljs.core.reset_BANG_.call(null,G__23993,G__23994));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23990.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23990.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta23991], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23990";

cljs.core.async.t_cljs$core$async23990.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9960__auto__,writer__9961__auto__,opt__9962__auto__){
return cljs.core._write(writer__9961__auto__,"cljs.core.async/t_cljs$core$async23990");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23990 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23990(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23991){
return (new cljs.core.async.t_cljs$core$async23990(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23991));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23990(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22120__auto___24118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___24118,mults,ensure_mult,p){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___24118,mults,ensure_mult,p){
return (function (state_24066){
var state_val_24067 = (state_24066[(1)]);
if((state_val_24067 === (7))){
var inst_24062 = (state_24066[(2)]);
var state_24066__$1 = state_24066;
var statearr_24068_24119 = state_24066__$1;
(statearr_24068_24119[(2)] = inst_24062);

(statearr_24068_24119[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (20))){
var state_24066__$1 = state_24066;
var statearr_24069_24120 = state_24066__$1;
(statearr_24069_24120[(2)] = null);

(statearr_24069_24120[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (1))){
var state_24066__$1 = state_24066;
var statearr_24070_24121 = state_24066__$1;
(statearr_24070_24121[(2)] = null);

(statearr_24070_24121[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (24))){
var inst_24045 = (state_24066[(7)]);
var inst_24054 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24045);
var state_24066__$1 = state_24066;
var statearr_24071_24122 = state_24066__$1;
(statearr_24071_24122[(2)] = inst_24054);

(statearr_24071_24122[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (4))){
var inst_23997 = (state_24066[(8)]);
var inst_23997__$1 = (state_24066[(2)]);
var inst_23998 = (inst_23997__$1 == null);
var state_24066__$1 = (function (){var statearr_24072 = state_24066;
(statearr_24072[(8)] = inst_23997__$1);

return statearr_24072;
})();
if(cljs.core.truth_(inst_23998)){
var statearr_24073_24123 = state_24066__$1;
(statearr_24073_24123[(1)] = (5));

} else {
var statearr_24074_24124 = state_24066__$1;
(statearr_24074_24124[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (15))){
var inst_24039 = (state_24066[(2)]);
var state_24066__$1 = state_24066;
var statearr_24075_24125 = state_24066__$1;
(statearr_24075_24125[(2)] = inst_24039);

(statearr_24075_24125[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (21))){
var inst_24059 = (state_24066[(2)]);
var state_24066__$1 = (function (){var statearr_24076 = state_24066;
(statearr_24076[(9)] = inst_24059);

return statearr_24076;
})();
var statearr_24077_24126 = state_24066__$1;
(statearr_24077_24126[(2)] = null);

(statearr_24077_24126[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (13))){
var inst_24021 = (state_24066[(10)]);
var inst_24023 = cljs.core.chunked_seq_QMARK_(inst_24021);
var state_24066__$1 = state_24066;
if(inst_24023){
var statearr_24078_24127 = state_24066__$1;
(statearr_24078_24127[(1)] = (16));

} else {
var statearr_24079_24128 = state_24066__$1;
(statearr_24079_24128[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (22))){
var inst_24051 = (state_24066[(2)]);
var state_24066__$1 = state_24066;
if(cljs.core.truth_(inst_24051)){
var statearr_24080_24129 = state_24066__$1;
(statearr_24080_24129[(1)] = (23));

} else {
var statearr_24081_24130 = state_24066__$1;
(statearr_24081_24130[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (6))){
var inst_23997 = (state_24066[(8)]);
var inst_24045 = (state_24066[(7)]);
var inst_24047 = (state_24066[(11)]);
var inst_24045__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_23997) : topic_fn.call(null,inst_23997));
var inst_24046 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_24047__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24046,inst_24045__$1);
var state_24066__$1 = (function (){var statearr_24082 = state_24066;
(statearr_24082[(7)] = inst_24045__$1);

(statearr_24082[(11)] = inst_24047__$1);

return statearr_24082;
})();
if(cljs.core.truth_(inst_24047__$1)){
var statearr_24083_24131 = state_24066__$1;
(statearr_24083_24131[(1)] = (19));

} else {
var statearr_24084_24132 = state_24066__$1;
(statearr_24084_24132[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (25))){
var inst_24056 = (state_24066[(2)]);
var state_24066__$1 = state_24066;
var statearr_24085_24133 = state_24066__$1;
(statearr_24085_24133[(2)] = inst_24056);

(statearr_24085_24133[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (17))){
var inst_24021 = (state_24066[(10)]);
var inst_24030 = cljs.core.first(inst_24021);
var inst_24031 = cljs.core.async.muxch_STAR_(inst_24030);
var inst_24032 = cljs.core.async.close_BANG_(inst_24031);
var inst_24033 = cljs.core.next(inst_24021);
var inst_24007 = inst_24033;
var inst_24008 = null;
var inst_24009 = (0);
var inst_24010 = (0);
var state_24066__$1 = (function (){var statearr_24086 = state_24066;
(statearr_24086[(12)] = inst_24010);

(statearr_24086[(13)] = inst_24008);

(statearr_24086[(14)] = inst_24032);

(statearr_24086[(15)] = inst_24007);

(statearr_24086[(16)] = inst_24009);

return statearr_24086;
})();
var statearr_24087_24134 = state_24066__$1;
(statearr_24087_24134[(2)] = null);

(statearr_24087_24134[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (3))){
var inst_24064 = (state_24066[(2)]);
var state_24066__$1 = state_24066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24066__$1,inst_24064);
} else {
if((state_val_24067 === (12))){
var inst_24041 = (state_24066[(2)]);
var state_24066__$1 = state_24066;
var statearr_24088_24135 = state_24066__$1;
(statearr_24088_24135[(2)] = inst_24041);

(statearr_24088_24135[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (2))){
var state_24066__$1 = state_24066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24066__$1,(4),ch);
} else {
if((state_val_24067 === (23))){
var state_24066__$1 = state_24066;
var statearr_24089_24136 = state_24066__$1;
(statearr_24089_24136[(2)] = null);

(statearr_24089_24136[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (19))){
var inst_23997 = (state_24066[(8)]);
var inst_24047 = (state_24066[(11)]);
var inst_24049 = cljs.core.async.muxch_STAR_(inst_24047);
var state_24066__$1 = state_24066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24066__$1,(22),inst_24049,inst_23997);
} else {
if((state_val_24067 === (11))){
var inst_24021 = (state_24066[(10)]);
var inst_24007 = (state_24066[(15)]);
var inst_24021__$1 = cljs.core.seq(inst_24007);
var state_24066__$1 = (function (){var statearr_24090 = state_24066;
(statearr_24090[(10)] = inst_24021__$1);

return statearr_24090;
})();
if(inst_24021__$1){
var statearr_24091_24137 = state_24066__$1;
(statearr_24091_24137[(1)] = (13));

} else {
var statearr_24092_24138 = state_24066__$1;
(statearr_24092_24138[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (9))){
var inst_24043 = (state_24066[(2)]);
var state_24066__$1 = state_24066;
var statearr_24093_24139 = state_24066__$1;
(statearr_24093_24139[(2)] = inst_24043);

(statearr_24093_24139[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (5))){
var inst_24004 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_24005 = cljs.core.vals(inst_24004);
var inst_24006 = cljs.core.seq(inst_24005);
var inst_24007 = inst_24006;
var inst_24008 = null;
var inst_24009 = (0);
var inst_24010 = (0);
var state_24066__$1 = (function (){var statearr_24094 = state_24066;
(statearr_24094[(12)] = inst_24010);

(statearr_24094[(13)] = inst_24008);

(statearr_24094[(15)] = inst_24007);

(statearr_24094[(16)] = inst_24009);

return statearr_24094;
})();
var statearr_24095_24140 = state_24066__$1;
(statearr_24095_24140[(2)] = null);

(statearr_24095_24140[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (14))){
var state_24066__$1 = state_24066;
var statearr_24099_24141 = state_24066__$1;
(statearr_24099_24141[(2)] = null);

(statearr_24099_24141[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (16))){
var inst_24021 = (state_24066[(10)]);
var inst_24025 = cljs.core.chunk_first(inst_24021);
var inst_24026 = cljs.core.chunk_rest(inst_24021);
var inst_24027 = cljs.core.count(inst_24025);
var inst_24007 = inst_24026;
var inst_24008 = inst_24025;
var inst_24009 = inst_24027;
var inst_24010 = (0);
var state_24066__$1 = (function (){var statearr_24100 = state_24066;
(statearr_24100[(12)] = inst_24010);

(statearr_24100[(13)] = inst_24008);

(statearr_24100[(15)] = inst_24007);

(statearr_24100[(16)] = inst_24009);

return statearr_24100;
})();
var statearr_24101_24142 = state_24066__$1;
(statearr_24101_24142[(2)] = null);

(statearr_24101_24142[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (10))){
var inst_24010 = (state_24066[(12)]);
var inst_24008 = (state_24066[(13)]);
var inst_24007 = (state_24066[(15)]);
var inst_24009 = (state_24066[(16)]);
var inst_24015 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24008,inst_24010);
var inst_24016 = cljs.core.async.muxch_STAR_(inst_24015);
var inst_24017 = cljs.core.async.close_BANG_(inst_24016);
var inst_24018 = (inst_24010 + (1));
var tmp24096 = inst_24008;
var tmp24097 = inst_24007;
var tmp24098 = inst_24009;
var inst_24007__$1 = tmp24097;
var inst_24008__$1 = tmp24096;
var inst_24009__$1 = tmp24098;
var inst_24010__$1 = inst_24018;
var state_24066__$1 = (function (){var statearr_24102 = state_24066;
(statearr_24102[(17)] = inst_24017);

(statearr_24102[(12)] = inst_24010__$1);

(statearr_24102[(13)] = inst_24008__$1);

(statearr_24102[(15)] = inst_24007__$1);

(statearr_24102[(16)] = inst_24009__$1);

return statearr_24102;
})();
var statearr_24103_24143 = state_24066__$1;
(statearr_24103_24143[(2)] = null);

(statearr_24103_24143[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (18))){
var inst_24036 = (state_24066[(2)]);
var state_24066__$1 = state_24066;
var statearr_24104_24144 = state_24066__$1;
(statearr_24104_24144[(2)] = inst_24036);

(statearr_24104_24144[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24067 === (8))){
var inst_24010 = (state_24066[(12)]);
var inst_24009 = (state_24066[(16)]);
var inst_24012 = (inst_24010 < inst_24009);
var inst_24013 = inst_24012;
var state_24066__$1 = state_24066;
if(cljs.core.truth_(inst_24013)){
var statearr_24105_24145 = state_24066__$1;
(statearr_24105_24145[(1)] = (10));

} else {
var statearr_24106_24146 = state_24066__$1;
(statearr_24106_24146[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto___24118,mults,ensure_mult,p))
;
return ((function (switch__18351__auto__,c__22120__auto___24118,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18352__auto__ = null;
var cljs$core$async$state_machine__18352__auto____0 = (function (){
var statearr_24110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24110[(0)] = cljs$core$async$state_machine__18352__auto__);

(statearr_24110[(1)] = (1));

return statearr_24110;
});
var cljs$core$async$state_machine__18352__auto____1 = (function (state_24066){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_24066);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e24111){if((e24111 instanceof Object)){
var ex__18355__auto__ = e24111;
var statearr_24112_24147 = state_24066;
(statearr_24112_24147[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24066);

return cljs.core.cst$kw$recur;
} else {
throw e24111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__24148 = state_24066;
state_24066 = G__24148;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$state_machine__18352__auto__ = function(state_24066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18352__auto____1.call(this,state_24066);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18352__auto____0;
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18352__auto____1;
return cljs$core$async$state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___24118,mults,ensure_mult,p))
})();
var state__22122__auto__ = (function (){var statearr_24113 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_24113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___24118);

return statearr_24113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___24118,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24149 = [];
var len__10524__auto___24152 = arguments.length;
var i__10525__auto___24153 = (0);
while(true){
if((i__10525__auto___24153 < len__10524__auto___24152)){
args24149.push((arguments[i__10525__auto___24153]));

var G__24154 = (i__10525__auto___24153 + (1));
i__10525__auto___24153 = G__24154;
continue;
} else {
}
break;
}

var G__24151 = args24149.length;
switch (G__24151) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24149.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24156 = [];
var len__10524__auto___24159 = arguments.length;
var i__10525__auto___24160 = (0);
while(true){
if((i__10525__auto___24160 < len__10524__auto___24159)){
args24156.push((arguments[i__10525__auto___24160]));

var G__24161 = (i__10525__auto___24160 + (1));
i__10525__auto___24160 = G__24161;
continue;
} else {
}
break;
}

var G__24158 = args24156.length;
switch (G__24158) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24156.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24163 = [];
var len__10524__auto___24234 = arguments.length;
var i__10525__auto___24235 = (0);
while(true){
if((i__10525__auto___24235 < len__10524__auto___24234)){
args24163.push((arguments[i__10525__auto___24235]));

var G__24236 = (i__10525__auto___24235 + (1));
i__10525__auto___24235 = G__24236;
continue;
} else {
}
break;
}

var G__24165 = args24163.length;
switch (G__24165) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24163.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__22120__auto___24238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___24238,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___24238,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24204){
var state_val_24205 = (state_24204[(1)]);
if((state_val_24205 === (7))){
var state_24204__$1 = state_24204;
var statearr_24206_24239 = state_24204__$1;
(statearr_24206_24239[(2)] = null);

(statearr_24206_24239[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24205 === (1))){
var state_24204__$1 = state_24204;
var statearr_24207_24240 = state_24204__$1;
(statearr_24207_24240[(2)] = null);

(statearr_24207_24240[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24205 === (4))){
var inst_24168 = (state_24204[(7)]);
var inst_24170 = (inst_24168 < cnt);
var state_24204__$1 = state_24204;
if(cljs.core.truth_(inst_24170)){
var statearr_24208_24241 = state_24204__$1;
(statearr_24208_24241[(1)] = (6));

} else {
var statearr_24209_24242 = state_24204__$1;
(statearr_24209_24242[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24205 === (15))){
var inst_24200 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
var statearr_24210_24243 = state_24204__$1;
(statearr_24210_24243[(2)] = inst_24200);

(statearr_24210_24243[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24205 === (13))){
var inst_24193 = cljs.core.async.close_BANG_(out);
var state_24204__$1 = state_24204;
var statearr_24211_24244 = state_24204__$1;
(statearr_24211_24244[(2)] = inst_24193);

(statearr_24211_24244[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24205 === (6))){
var state_24204__$1 = state_24204;
var statearr_24212_24245 = state_24204__$1;
(statearr_24212_24245[(2)] = null);

(statearr_24212_24245[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24205 === (3))){
var inst_24202 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24204__$1,inst_24202);
} else {
if((state_val_24205 === (12))){
var inst_24190 = (state_24204[(8)]);
var inst_24190__$1 = (state_24204[(2)]);
var inst_24191 = cljs.core.some(cljs.core.nil_QMARK_,inst_24190__$1);
var state_24204__$1 = (function (){var statearr_24213 = state_24204;
(statearr_24213[(8)] = inst_24190__$1);

return statearr_24213;
})();
if(cljs.core.truth_(inst_24191)){
var statearr_24214_24246 = state_24204__$1;
(statearr_24214_24246[(1)] = (13));

} else {
var statearr_24215_24247 = state_24204__$1;
(statearr_24215_24247[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24205 === (2))){
var inst_24167 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_24168 = (0);
var state_24204__$1 = (function (){var statearr_24216 = state_24204;
(statearr_24216[(9)] = inst_24167);

(statearr_24216[(7)] = inst_24168);

return statearr_24216;
})();
var statearr_24217_24248 = state_24204__$1;
(statearr_24217_24248[(2)] = null);

(statearr_24217_24248[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24205 === (11))){
var inst_24168 = (state_24204[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24204,(10),Object,null,(9));
var inst_24177 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24168) : chs__$1.call(null,inst_24168));
var inst_24178 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24168) : done.call(null,inst_24168));
var inst_24179 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24177,inst_24178);
var state_24204__$1 = state_24204;
var statearr_24218_24249 = state_24204__$1;
(statearr_24218_24249[(2)] = inst_24179);


cljs.core.async.impl.ioc_helpers.process_exception(state_24204__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_24205 === (9))){
var inst_24168 = (state_24204[(7)]);
var inst_24181 = (state_24204[(2)]);
var inst_24182 = (inst_24168 + (1));
var inst_24168__$1 = inst_24182;
var state_24204__$1 = (function (){var statearr_24219 = state_24204;
(statearr_24219[(7)] = inst_24168__$1);

(statearr_24219[(10)] = inst_24181);

return statearr_24219;
})();
var statearr_24220_24250 = state_24204__$1;
(statearr_24220_24250[(2)] = null);

(statearr_24220_24250[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24205 === (5))){
var inst_24188 = (state_24204[(2)]);
var state_24204__$1 = (function (){var statearr_24221 = state_24204;
(statearr_24221[(11)] = inst_24188);

return statearr_24221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24204__$1,(12),dchan);
} else {
if((state_val_24205 === (14))){
var inst_24190 = (state_24204[(8)]);
var inst_24195 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24190);
var state_24204__$1 = state_24204;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24204__$1,(16),out,inst_24195);
} else {
if((state_val_24205 === (16))){
var inst_24197 = (state_24204[(2)]);
var state_24204__$1 = (function (){var statearr_24222 = state_24204;
(statearr_24222[(12)] = inst_24197);

return statearr_24222;
})();
var statearr_24223_24251 = state_24204__$1;
(statearr_24223_24251[(2)] = null);

(statearr_24223_24251[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24205 === (10))){
var inst_24172 = (state_24204[(2)]);
var inst_24173 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24204__$1 = (function (){var statearr_24224 = state_24204;
(statearr_24224[(13)] = inst_24172);

return statearr_24224;
})();
var statearr_24225_24252 = state_24204__$1;
(statearr_24225_24252[(2)] = inst_24173);


cljs.core.async.impl.ioc_helpers.process_exception(state_24204__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_24205 === (8))){
var inst_24186 = (state_24204[(2)]);
var state_24204__$1 = state_24204;
var statearr_24226_24253 = state_24204__$1;
(statearr_24226_24253[(2)] = inst_24186);

(statearr_24226_24253[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto___24238,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18351__auto__,c__22120__auto___24238,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18352__auto__ = null;
var cljs$core$async$state_machine__18352__auto____0 = (function (){
var statearr_24230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24230[(0)] = cljs$core$async$state_machine__18352__auto__);

(statearr_24230[(1)] = (1));

return statearr_24230;
});
var cljs$core$async$state_machine__18352__auto____1 = (function (state_24204){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_24204);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e24231){if((e24231 instanceof Object)){
var ex__18355__auto__ = e24231;
var statearr_24232_24254 = state_24204;
(statearr_24232_24254[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24204);

return cljs.core.cst$kw$recur;
} else {
throw e24231;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__24255 = state_24204;
state_24204 = G__24255;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$state_machine__18352__auto__ = function(state_24204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18352__auto____1.call(this,state_24204);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18352__auto____0;
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18352__auto____1;
return cljs$core$async$state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___24238,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22122__auto__ = (function (){var statearr_24233 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_24233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___24238);

return statearr_24233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___24238,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24257 = [];
var len__10524__auto___24315 = arguments.length;
var i__10525__auto___24316 = (0);
while(true){
if((i__10525__auto___24316 < len__10524__auto___24315)){
args24257.push((arguments[i__10525__auto___24316]));

var G__24317 = (i__10525__auto___24316 + (1));
i__10525__auto___24316 = G__24317;
continue;
} else {
}
break;
}

var G__24259 = args24257.length;
switch (G__24259) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24257.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22120__auto___24319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___24319,out){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___24319,out){
return (function (state_24291){
var state_val_24292 = (state_24291[(1)]);
if((state_val_24292 === (7))){
var inst_24271 = (state_24291[(7)]);
var inst_24270 = (state_24291[(8)]);
var inst_24270__$1 = (state_24291[(2)]);
var inst_24271__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24270__$1,(0),null);
var inst_24272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24270__$1,(1),null);
var inst_24273 = (inst_24271__$1 == null);
var state_24291__$1 = (function (){var statearr_24293 = state_24291;
(statearr_24293[(9)] = inst_24272);

(statearr_24293[(7)] = inst_24271__$1);

(statearr_24293[(8)] = inst_24270__$1);

return statearr_24293;
})();
if(cljs.core.truth_(inst_24273)){
var statearr_24294_24320 = state_24291__$1;
(statearr_24294_24320[(1)] = (8));

} else {
var statearr_24295_24321 = state_24291__$1;
(statearr_24295_24321[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24292 === (1))){
var inst_24260 = cljs.core.vec(chs);
var inst_24261 = inst_24260;
var state_24291__$1 = (function (){var statearr_24296 = state_24291;
(statearr_24296[(10)] = inst_24261);

return statearr_24296;
})();
var statearr_24297_24322 = state_24291__$1;
(statearr_24297_24322[(2)] = null);

(statearr_24297_24322[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24292 === (4))){
var inst_24261 = (state_24291[(10)]);
var state_24291__$1 = state_24291;
return cljs.core.async.ioc_alts_BANG_(state_24291__$1,(7),inst_24261);
} else {
if((state_val_24292 === (6))){
var inst_24287 = (state_24291[(2)]);
var state_24291__$1 = state_24291;
var statearr_24298_24323 = state_24291__$1;
(statearr_24298_24323[(2)] = inst_24287);

(statearr_24298_24323[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24292 === (3))){
var inst_24289 = (state_24291[(2)]);
var state_24291__$1 = state_24291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24291__$1,inst_24289);
} else {
if((state_val_24292 === (2))){
var inst_24261 = (state_24291[(10)]);
var inst_24263 = cljs.core.count(inst_24261);
var inst_24264 = (inst_24263 > (0));
var state_24291__$1 = state_24291;
if(cljs.core.truth_(inst_24264)){
var statearr_24300_24324 = state_24291__$1;
(statearr_24300_24324[(1)] = (4));

} else {
var statearr_24301_24325 = state_24291__$1;
(statearr_24301_24325[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24292 === (11))){
var inst_24261 = (state_24291[(10)]);
var inst_24280 = (state_24291[(2)]);
var tmp24299 = inst_24261;
var inst_24261__$1 = tmp24299;
var state_24291__$1 = (function (){var statearr_24302 = state_24291;
(statearr_24302[(10)] = inst_24261__$1);

(statearr_24302[(11)] = inst_24280);

return statearr_24302;
})();
var statearr_24303_24326 = state_24291__$1;
(statearr_24303_24326[(2)] = null);

(statearr_24303_24326[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24292 === (9))){
var inst_24271 = (state_24291[(7)]);
var state_24291__$1 = state_24291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24291__$1,(11),out,inst_24271);
} else {
if((state_val_24292 === (5))){
var inst_24285 = cljs.core.async.close_BANG_(out);
var state_24291__$1 = state_24291;
var statearr_24304_24327 = state_24291__$1;
(statearr_24304_24327[(2)] = inst_24285);

(statearr_24304_24327[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24292 === (10))){
var inst_24283 = (state_24291[(2)]);
var state_24291__$1 = state_24291;
var statearr_24305_24328 = state_24291__$1;
(statearr_24305_24328[(2)] = inst_24283);

(statearr_24305_24328[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24292 === (8))){
var inst_24261 = (state_24291[(10)]);
var inst_24272 = (state_24291[(9)]);
var inst_24271 = (state_24291[(7)]);
var inst_24270 = (state_24291[(8)]);
var inst_24275 = (function (){var cs = inst_24261;
var vec__24266 = inst_24270;
var v = inst_24271;
var c = inst_24272;
return ((function (cs,vec__24266,v,c,inst_24261,inst_24272,inst_24271,inst_24270,state_val_24292,c__22120__auto___24319,out){
return (function (p1__24256_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24256_SHARP_);
});
;})(cs,vec__24266,v,c,inst_24261,inst_24272,inst_24271,inst_24270,state_val_24292,c__22120__auto___24319,out))
})();
var inst_24276 = cljs.core.filterv(inst_24275,inst_24261);
var inst_24261__$1 = inst_24276;
var state_24291__$1 = (function (){var statearr_24306 = state_24291;
(statearr_24306[(10)] = inst_24261__$1);

return statearr_24306;
})();
var statearr_24307_24329 = state_24291__$1;
(statearr_24307_24329[(2)] = null);

(statearr_24307_24329[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto___24319,out))
;
return ((function (switch__18351__auto__,c__22120__auto___24319,out){
return (function() {
var cljs$core$async$state_machine__18352__auto__ = null;
var cljs$core$async$state_machine__18352__auto____0 = (function (){
var statearr_24311 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24311[(0)] = cljs$core$async$state_machine__18352__auto__);

(statearr_24311[(1)] = (1));

return statearr_24311;
});
var cljs$core$async$state_machine__18352__auto____1 = (function (state_24291){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_24291);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e24312){if((e24312 instanceof Object)){
var ex__18355__auto__ = e24312;
var statearr_24313_24330 = state_24291;
(statearr_24313_24330[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24291);

return cljs.core.cst$kw$recur;
} else {
throw e24312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__24331 = state_24291;
state_24291 = G__24331;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$state_machine__18352__auto__ = function(state_24291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18352__auto____1.call(this,state_24291);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18352__auto____0;
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18352__auto____1;
return cljs$core$async$state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___24319,out))
})();
var state__22122__auto__ = (function (){var statearr_24314 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_24314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___24319);

return statearr_24314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___24319,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24332 = [];
var len__10524__auto___24381 = arguments.length;
var i__10525__auto___24382 = (0);
while(true){
if((i__10525__auto___24382 < len__10524__auto___24381)){
args24332.push((arguments[i__10525__auto___24382]));

var G__24383 = (i__10525__auto___24382 + (1));
i__10525__auto___24382 = G__24383;
continue;
} else {
}
break;
}

var G__24334 = args24332.length;
switch (G__24334) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24332.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22120__auto___24385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___24385,out){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___24385,out){
return (function (state_24358){
var state_val_24359 = (state_24358[(1)]);
if((state_val_24359 === (7))){
var inst_24340 = (state_24358[(7)]);
var inst_24340__$1 = (state_24358[(2)]);
var inst_24341 = (inst_24340__$1 == null);
var inst_24342 = cljs.core.not(inst_24341);
var state_24358__$1 = (function (){var statearr_24360 = state_24358;
(statearr_24360[(7)] = inst_24340__$1);

return statearr_24360;
})();
if(inst_24342){
var statearr_24361_24386 = state_24358__$1;
(statearr_24361_24386[(1)] = (8));

} else {
var statearr_24362_24387 = state_24358__$1;
(statearr_24362_24387[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24359 === (1))){
var inst_24335 = (0);
var state_24358__$1 = (function (){var statearr_24363 = state_24358;
(statearr_24363[(8)] = inst_24335);

return statearr_24363;
})();
var statearr_24364_24388 = state_24358__$1;
(statearr_24364_24388[(2)] = null);

(statearr_24364_24388[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24359 === (4))){
var state_24358__$1 = state_24358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24358__$1,(7),ch);
} else {
if((state_val_24359 === (6))){
var inst_24353 = (state_24358[(2)]);
var state_24358__$1 = state_24358;
var statearr_24365_24389 = state_24358__$1;
(statearr_24365_24389[(2)] = inst_24353);

(statearr_24365_24389[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24359 === (3))){
var inst_24355 = (state_24358[(2)]);
var inst_24356 = cljs.core.async.close_BANG_(out);
var state_24358__$1 = (function (){var statearr_24366 = state_24358;
(statearr_24366[(9)] = inst_24355);

return statearr_24366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24358__$1,inst_24356);
} else {
if((state_val_24359 === (2))){
var inst_24335 = (state_24358[(8)]);
var inst_24337 = (inst_24335 < n);
var state_24358__$1 = state_24358;
if(cljs.core.truth_(inst_24337)){
var statearr_24367_24390 = state_24358__$1;
(statearr_24367_24390[(1)] = (4));

} else {
var statearr_24368_24391 = state_24358__$1;
(statearr_24368_24391[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24359 === (11))){
var inst_24335 = (state_24358[(8)]);
var inst_24345 = (state_24358[(2)]);
var inst_24346 = (inst_24335 + (1));
var inst_24335__$1 = inst_24346;
var state_24358__$1 = (function (){var statearr_24369 = state_24358;
(statearr_24369[(10)] = inst_24345);

(statearr_24369[(8)] = inst_24335__$1);

return statearr_24369;
})();
var statearr_24370_24392 = state_24358__$1;
(statearr_24370_24392[(2)] = null);

(statearr_24370_24392[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24359 === (9))){
var state_24358__$1 = state_24358;
var statearr_24371_24393 = state_24358__$1;
(statearr_24371_24393[(2)] = null);

(statearr_24371_24393[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24359 === (5))){
var state_24358__$1 = state_24358;
var statearr_24372_24394 = state_24358__$1;
(statearr_24372_24394[(2)] = null);

(statearr_24372_24394[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24359 === (10))){
var inst_24350 = (state_24358[(2)]);
var state_24358__$1 = state_24358;
var statearr_24373_24395 = state_24358__$1;
(statearr_24373_24395[(2)] = inst_24350);

(statearr_24373_24395[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24359 === (8))){
var inst_24340 = (state_24358[(7)]);
var state_24358__$1 = state_24358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24358__$1,(11),out,inst_24340);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto___24385,out))
;
return ((function (switch__18351__auto__,c__22120__auto___24385,out){
return (function() {
var cljs$core$async$state_machine__18352__auto__ = null;
var cljs$core$async$state_machine__18352__auto____0 = (function (){
var statearr_24377 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24377[(0)] = cljs$core$async$state_machine__18352__auto__);

(statearr_24377[(1)] = (1));

return statearr_24377;
});
var cljs$core$async$state_machine__18352__auto____1 = (function (state_24358){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_24358);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e24378){if((e24378 instanceof Object)){
var ex__18355__auto__ = e24378;
var statearr_24379_24396 = state_24358;
(statearr_24379_24396[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24358);

return cljs.core.cst$kw$recur;
} else {
throw e24378;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__24397 = state_24358;
state_24358 = G__24397;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$state_machine__18352__auto__ = function(state_24358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18352__auto____1.call(this,state_24358);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18352__auto____0;
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18352__auto____1;
return cljs$core$async$state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___24385,out))
})();
var state__22122__auto__ = (function (){var statearr_24380 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_24380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___24385);

return statearr_24380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___24385,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24407 = (function (f,ch,meta24408){
this.f = f;
this.ch = ch;
this.meta24408 = meta24408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24409,meta24408__$1){
var self__ = this;
var _24409__$1 = this;
return (new cljs.core.async.t_cljs$core$async24407(self__.f,self__.ch,meta24408__$1));
});

cljs.core.async.t_cljs$core$async24407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24409){
var self__ = this;
var _24409__$1 = this;
return self__.meta24408;
});

cljs.core.async.t_cljs$core$async24407.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24407.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async24407.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async24407.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24407.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24410 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24410 = (function (f,ch,meta24408,_,fn1,meta24411){
this.f = f;
this.ch = ch;
this.meta24408 = meta24408;
this._ = _;
this.fn1 = fn1;
this.meta24411 = meta24411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24412,meta24411__$1){
var self__ = this;
var _24412__$1 = this;
return (new cljs.core.async.t_cljs$core$async24410(self__.f,self__.ch,self__.meta24408,self__._,self__.fn1,meta24411__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24412){
var self__ = this;
var _24412__$1 = this;
return self__.meta24411;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24398_SHARP_){
var G__24413 = (((p1__24398_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24398_SHARP_) : self__.f.call(null,p1__24398_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24413) : f1.call(null,G__24413));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24410.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24408,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async24407], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta24411], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24410.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24410";

cljs.core.async.t_cljs$core$async24410.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9960__auto__,writer__9961__auto__,opt__9962__auto__){
return cljs.core._write(writer__9961__auto__,"cljs.core.async/t_cljs$core$async24410");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24410 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24410(f__$1,ch__$1,meta24408__$1,___$2,fn1__$1,meta24411){
return (new cljs.core.async.t_cljs$core$async24410(f__$1,ch__$1,meta24408__$1,___$2,fn1__$1,meta24411));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24410(self__.f,self__.ch,self__.meta24408,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__9291__auto__ = ret;
if(cljs.core.truth_(and__9291__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__9291__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__24414 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24414) : self__.f.call(null,G__24414));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24407.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24407.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24408], null);
});

cljs.core.async.t_cljs$core$async24407.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24407";

cljs.core.async.t_cljs$core$async24407.cljs$lang$ctorPrWriter = (function (this__9960__auto__,writer__9961__auto__,opt__9962__auto__){
return cljs.core._write(writer__9961__auto__,"cljs.core.async/t_cljs$core$async24407");
});

cljs.core.async.__GT_t_cljs$core$async24407 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24407(f__$1,ch__$1,meta24408){
return (new cljs.core.async.t_cljs$core$async24407(f__$1,ch__$1,meta24408));
});

}

return (new cljs.core.async.t_cljs$core$async24407(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24418 = (function (f,ch,meta24419){
this.f = f;
this.ch = ch;
this.meta24419 = meta24419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24420,meta24419__$1){
var self__ = this;
var _24420__$1 = this;
return (new cljs.core.async.t_cljs$core$async24418(self__.f,self__.ch,meta24419__$1));
});

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24420){
var self__ = this;
var _24420__$1 = this;
return self__.meta24419;
});

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async24418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24419], null);
});

cljs.core.async.t_cljs$core$async24418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24418";

cljs.core.async.t_cljs$core$async24418.cljs$lang$ctorPrWriter = (function (this__9960__auto__,writer__9961__auto__,opt__9962__auto__){
return cljs.core._write(writer__9961__auto__,"cljs.core.async/t_cljs$core$async24418");
});

cljs.core.async.__GT_t_cljs$core$async24418 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24418(f__$1,ch__$1,meta24419){
return (new cljs.core.async.t_cljs$core$async24418(f__$1,ch__$1,meta24419));
});

}

return (new cljs.core.async.t_cljs$core$async24418(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24424 = (function (p,ch,meta24425){
this.p = p;
this.ch = ch;
this.meta24425 = meta24425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24426,meta24425__$1){
var self__ = this;
var _24426__$1 = this;
return (new cljs.core.async.t_cljs$core$async24424(self__.p,self__.ch,meta24425__$1));
});

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24426){
var self__ = this;
var _24426__$1 = this;
return self__.meta24425;
});

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24424.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta24425], null);
});

cljs.core.async.t_cljs$core$async24424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24424";

cljs.core.async.t_cljs$core$async24424.cljs$lang$ctorPrWriter = (function (this__9960__auto__,writer__9961__auto__,opt__9962__auto__){
return cljs.core._write(writer__9961__auto__,"cljs.core.async/t_cljs$core$async24424");
});

cljs.core.async.__GT_t_cljs$core$async24424 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24424(p__$1,ch__$1,meta24425){
return (new cljs.core.async.t_cljs$core$async24424(p__$1,ch__$1,meta24425));
});

}

return (new cljs.core.async.t_cljs$core$async24424(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24427 = [];
var len__10524__auto___24471 = arguments.length;
var i__10525__auto___24472 = (0);
while(true){
if((i__10525__auto___24472 < len__10524__auto___24471)){
args24427.push((arguments[i__10525__auto___24472]));

var G__24473 = (i__10525__auto___24472 + (1));
i__10525__auto___24472 = G__24473;
continue;
} else {
}
break;
}

var G__24429 = args24427.length;
switch (G__24429) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24427.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22120__auto___24475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___24475,out){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___24475,out){
return (function (state_24450){
var state_val_24451 = (state_24450[(1)]);
if((state_val_24451 === (7))){
var inst_24446 = (state_24450[(2)]);
var state_24450__$1 = state_24450;
var statearr_24452_24476 = state_24450__$1;
(statearr_24452_24476[(2)] = inst_24446);

(statearr_24452_24476[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24451 === (1))){
var state_24450__$1 = state_24450;
var statearr_24453_24477 = state_24450__$1;
(statearr_24453_24477[(2)] = null);

(statearr_24453_24477[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24451 === (4))){
var inst_24432 = (state_24450[(7)]);
var inst_24432__$1 = (state_24450[(2)]);
var inst_24433 = (inst_24432__$1 == null);
var state_24450__$1 = (function (){var statearr_24454 = state_24450;
(statearr_24454[(7)] = inst_24432__$1);

return statearr_24454;
})();
if(cljs.core.truth_(inst_24433)){
var statearr_24455_24478 = state_24450__$1;
(statearr_24455_24478[(1)] = (5));

} else {
var statearr_24456_24479 = state_24450__$1;
(statearr_24456_24479[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24451 === (6))){
var inst_24432 = (state_24450[(7)]);
var inst_24437 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24432) : p.call(null,inst_24432));
var state_24450__$1 = state_24450;
if(cljs.core.truth_(inst_24437)){
var statearr_24457_24480 = state_24450__$1;
(statearr_24457_24480[(1)] = (8));

} else {
var statearr_24458_24481 = state_24450__$1;
(statearr_24458_24481[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24451 === (3))){
var inst_24448 = (state_24450[(2)]);
var state_24450__$1 = state_24450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24450__$1,inst_24448);
} else {
if((state_val_24451 === (2))){
var state_24450__$1 = state_24450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24450__$1,(4),ch);
} else {
if((state_val_24451 === (11))){
var inst_24440 = (state_24450[(2)]);
var state_24450__$1 = state_24450;
var statearr_24459_24482 = state_24450__$1;
(statearr_24459_24482[(2)] = inst_24440);

(statearr_24459_24482[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24451 === (9))){
var state_24450__$1 = state_24450;
var statearr_24460_24483 = state_24450__$1;
(statearr_24460_24483[(2)] = null);

(statearr_24460_24483[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24451 === (5))){
var inst_24435 = cljs.core.async.close_BANG_(out);
var state_24450__$1 = state_24450;
var statearr_24461_24484 = state_24450__$1;
(statearr_24461_24484[(2)] = inst_24435);

(statearr_24461_24484[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24451 === (10))){
var inst_24443 = (state_24450[(2)]);
var state_24450__$1 = (function (){var statearr_24462 = state_24450;
(statearr_24462[(8)] = inst_24443);

return statearr_24462;
})();
var statearr_24463_24485 = state_24450__$1;
(statearr_24463_24485[(2)] = null);

(statearr_24463_24485[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24451 === (8))){
var inst_24432 = (state_24450[(7)]);
var state_24450__$1 = state_24450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24450__$1,(11),out,inst_24432);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto___24475,out))
;
return ((function (switch__18351__auto__,c__22120__auto___24475,out){
return (function() {
var cljs$core$async$state_machine__18352__auto__ = null;
var cljs$core$async$state_machine__18352__auto____0 = (function (){
var statearr_24467 = [null,null,null,null,null,null,null,null,null];
(statearr_24467[(0)] = cljs$core$async$state_machine__18352__auto__);

(statearr_24467[(1)] = (1));

return statearr_24467;
});
var cljs$core$async$state_machine__18352__auto____1 = (function (state_24450){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_24450);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e24468){if((e24468 instanceof Object)){
var ex__18355__auto__ = e24468;
var statearr_24469_24486 = state_24450;
(statearr_24469_24486[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24450);

return cljs.core.cst$kw$recur;
} else {
throw e24468;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__24487 = state_24450;
state_24450 = G__24487;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$state_machine__18352__auto__ = function(state_24450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18352__auto____1.call(this,state_24450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18352__auto____0;
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18352__auto____1;
return cljs$core$async$state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___24475,out))
})();
var state__22122__auto__ = (function (){var statearr_24470 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_24470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___24475);

return statearr_24470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___24475,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24488 = [];
var len__10524__auto___24491 = arguments.length;
var i__10525__auto___24492 = (0);
while(true){
if((i__10525__auto___24492 < len__10524__auto___24491)){
args24488.push((arguments[i__10525__auto___24492]));

var G__24493 = (i__10525__auto___24492 + (1));
i__10525__auto___24492 = G__24493;
continue;
} else {
}
break;
}

var G__24490 = args24488.length;
switch (G__24490) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24488.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22120__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto__){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto__){
return (function (state_24660){
var state_val_24661 = (state_24660[(1)]);
if((state_val_24661 === (7))){
var inst_24656 = (state_24660[(2)]);
var state_24660__$1 = state_24660;
var statearr_24662_24703 = state_24660__$1;
(statearr_24662_24703[(2)] = inst_24656);

(statearr_24662_24703[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (20))){
var inst_24626 = (state_24660[(7)]);
var inst_24637 = (state_24660[(2)]);
var inst_24638 = cljs.core.next(inst_24626);
var inst_24612 = inst_24638;
var inst_24613 = null;
var inst_24614 = (0);
var inst_24615 = (0);
var state_24660__$1 = (function (){var statearr_24663 = state_24660;
(statearr_24663[(8)] = inst_24615);

(statearr_24663[(9)] = inst_24613);

(statearr_24663[(10)] = inst_24612);

(statearr_24663[(11)] = inst_24614);

(statearr_24663[(12)] = inst_24637);

return statearr_24663;
})();
var statearr_24664_24704 = state_24660__$1;
(statearr_24664_24704[(2)] = null);

(statearr_24664_24704[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (1))){
var state_24660__$1 = state_24660;
var statearr_24665_24705 = state_24660__$1;
(statearr_24665_24705[(2)] = null);

(statearr_24665_24705[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (4))){
var inst_24601 = (state_24660[(13)]);
var inst_24601__$1 = (state_24660[(2)]);
var inst_24602 = (inst_24601__$1 == null);
var state_24660__$1 = (function (){var statearr_24666 = state_24660;
(statearr_24666[(13)] = inst_24601__$1);

return statearr_24666;
})();
if(cljs.core.truth_(inst_24602)){
var statearr_24667_24706 = state_24660__$1;
(statearr_24667_24706[(1)] = (5));

} else {
var statearr_24668_24707 = state_24660__$1;
(statearr_24668_24707[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (15))){
var state_24660__$1 = state_24660;
var statearr_24672_24708 = state_24660__$1;
(statearr_24672_24708[(2)] = null);

(statearr_24672_24708[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (21))){
var state_24660__$1 = state_24660;
var statearr_24673_24709 = state_24660__$1;
(statearr_24673_24709[(2)] = null);

(statearr_24673_24709[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (13))){
var inst_24615 = (state_24660[(8)]);
var inst_24613 = (state_24660[(9)]);
var inst_24612 = (state_24660[(10)]);
var inst_24614 = (state_24660[(11)]);
var inst_24622 = (state_24660[(2)]);
var inst_24623 = (inst_24615 + (1));
var tmp24669 = inst_24613;
var tmp24670 = inst_24612;
var tmp24671 = inst_24614;
var inst_24612__$1 = tmp24670;
var inst_24613__$1 = tmp24669;
var inst_24614__$1 = tmp24671;
var inst_24615__$1 = inst_24623;
var state_24660__$1 = (function (){var statearr_24674 = state_24660;
(statearr_24674[(8)] = inst_24615__$1);

(statearr_24674[(9)] = inst_24613__$1);

(statearr_24674[(10)] = inst_24612__$1);

(statearr_24674[(11)] = inst_24614__$1);

(statearr_24674[(14)] = inst_24622);

return statearr_24674;
})();
var statearr_24675_24710 = state_24660__$1;
(statearr_24675_24710[(2)] = null);

(statearr_24675_24710[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (22))){
var state_24660__$1 = state_24660;
var statearr_24676_24711 = state_24660__$1;
(statearr_24676_24711[(2)] = null);

(statearr_24676_24711[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (6))){
var inst_24601 = (state_24660[(13)]);
var inst_24610 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24601) : f.call(null,inst_24601));
var inst_24611 = cljs.core.seq(inst_24610);
var inst_24612 = inst_24611;
var inst_24613 = null;
var inst_24614 = (0);
var inst_24615 = (0);
var state_24660__$1 = (function (){var statearr_24677 = state_24660;
(statearr_24677[(8)] = inst_24615);

(statearr_24677[(9)] = inst_24613);

(statearr_24677[(10)] = inst_24612);

(statearr_24677[(11)] = inst_24614);

return statearr_24677;
})();
var statearr_24678_24712 = state_24660__$1;
(statearr_24678_24712[(2)] = null);

(statearr_24678_24712[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (17))){
var inst_24626 = (state_24660[(7)]);
var inst_24630 = cljs.core.chunk_first(inst_24626);
var inst_24631 = cljs.core.chunk_rest(inst_24626);
var inst_24632 = cljs.core.count(inst_24630);
var inst_24612 = inst_24631;
var inst_24613 = inst_24630;
var inst_24614 = inst_24632;
var inst_24615 = (0);
var state_24660__$1 = (function (){var statearr_24679 = state_24660;
(statearr_24679[(8)] = inst_24615);

(statearr_24679[(9)] = inst_24613);

(statearr_24679[(10)] = inst_24612);

(statearr_24679[(11)] = inst_24614);

return statearr_24679;
})();
var statearr_24680_24713 = state_24660__$1;
(statearr_24680_24713[(2)] = null);

(statearr_24680_24713[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (3))){
var inst_24658 = (state_24660[(2)]);
var state_24660__$1 = state_24660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24660__$1,inst_24658);
} else {
if((state_val_24661 === (12))){
var inst_24646 = (state_24660[(2)]);
var state_24660__$1 = state_24660;
var statearr_24681_24714 = state_24660__$1;
(statearr_24681_24714[(2)] = inst_24646);

(statearr_24681_24714[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (2))){
var state_24660__$1 = state_24660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24660__$1,(4),in$);
} else {
if((state_val_24661 === (23))){
var inst_24654 = (state_24660[(2)]);
var state_24660__$1 = state_24660;
var statearr_24682_24715 = state_24660__$1;
(statearr_24682_24715[(2)] = inst_24654);

(statearr_24682_24715[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (19))){
var inst_24641 = (state_24660[(2)]);
var state_24660__$1 = state_24660;
var statearr_24683_24716 = state_24660__$1;
(statearr_24683_24716[(2)] = inst_24641);

(statearr_24683_24716[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (11))){
var inst_24612 = (state_24660[(10)]);
var inst_24626 = (state_24660[(7)]);
var inst_24626__$1 = cljs.core.seq(inst_24612);
var state_24660__$1 = (function (){var statearr_24684 = state_24660;
(statearr_24684[(7)] = inst_24626__$1);

return statearr_24684;
})();
if(inst_24626__$1){
var statearr_24685_24717 = state_24660__$1;
(statearr_24685_24717[(1)] = (14));

} else {
var statearr_24686_24718 = state_24660__$1;
(statearr_24686_24718[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (9))){
var inst_24648 = (state_24660[(2)]);
var inst_24649 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_24660__$1 = (function (){var statearr_24687 = state_24660;
(statearr_24687[(15)] = inst_24648);

return statearr_24687;
})();
if(cljs.core.truth_(inst_24649)){
var statearr_24688_24719 = state_24660__$1;
(statearr_24688_24719[(1)] = (21));

} else {
var statearr_24689_24720 = state_24660__$1;
(statearr_24689_24720[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (5))){
var inst_24604 = cljs.core.async.close_BANG_(out);
var state_24660__$1 = state_24660;
var statearr_24690_24721 = state_24660__$1;
(statearr_24690_24721[(2)] = inst_24604);

(statearr_24690_24721[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (14))){
var inst_24626 = (state_24660[(7)]);
var inst_24628 = cljs.core.chunked_seq_QMARK_(inst_24626);
var state_24660__$1 = state_24660;
if(inst_24628){
var statearr_24691_24722 = state_24660__$1;
(statearr_24691_24722[(1)] = (17));

} else {
var statearr_24692_24723 = state_24660__$1;
(statearr_24692_24723[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (16))){
var inst_24644 = (state_24660[(2)]);
var state_24660__$1 = state_24660;
var statearr_24693_24724 = state_24660__$1;
(statearr_24693_24724[(2)] = inst_24644);

(statearr_24693_24724[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24661 === (10))){
var inst_24615 = (state_24660[(8)]);
var inst_24613 = (state_24660[(9)]);
var inst_24620 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24613,inst_24615);
var state_24660__$1 = state_24660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24660__$1,(13),out,inst_24620);
} else {
if((state_val_24661 === (18))){
var inst_24626 = (state_24660[(7)]);
var inst_24635 = cljs.core.first(inst_24626);
var state_24660__$1 = state_24660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24660__$1,(20),out,inst_24635);
} else {
if((state_val_24661 === (8))){
var inst_24615 = (state_24660[(8)]);
var inst_24614 = (state_24660[(11)]);
var inst_24617 = (inst_24615 < inst_24614);
var inst_24618 = inst_24617;
var state_24660__$1 = state_24660;
if(cljs.core.truth_(inst_24618)){
var statearr_24694_24725 = state_24660__$1;
(statearr_24694_24725[(1)] = (10));

} else {
var statearr_24695_24726 = state_24660__$1;
(statearr_24695_24726[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto__))
;
return ((function (switch__18351__auto__,c__22120__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18352__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18352__auto____0 = (function (){
var statearr_24699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24699[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18352__auto__);

(statearr_24699[(1)] = (1));

return statearr_24699;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18352__auto____1 = (function (state_24660){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_24660);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e24700){if((e24700 instanceof Object)){
var ex__18355__auto__ = e24700;
var statearr_24701_24727 = state_24660;
(statearr_24701_24727[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24660);

return cljs.core.cst$kw$recur;
} else {
throw e24700;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__24728 = state_24660;
state_24660 = G__24728;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18352__auto__ = function(state_24660){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18352__auto____1.call(this,state_24660);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18352__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18352__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto__))
})();
var state__22122__auto__ = (function (){var statearr_24702 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_24702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto__);

return statearr_24702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto__))
);

return c__22120__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24729 = [];
var len__10524__auto___24732 = arguments.length;
var i__10525__auto___24733 = (0);
while(true){
if((i__10525__auto___24733 < len__10524__auto___24732)){
args24729.push((arguments[i__10525__auto___24733]));

var G__24734 = (i__10525__auto___24733 + (1));
i__10525__auto___24733 = G__24734;
continue;
} else {
}
break;
}

var G__24731 = args24729.length;
switch (G__24731) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24729.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24736 = [];
var len__10524__auto___24739 = arguments.length;
var i__10525__auto___24740 = (0);
while(true){
if((i__10525__auto___24740 < len__10524__auto___24739)){
args24736.push((arguments[i__10525__auto___24740]));

var G__24741 = (i__10525__auto___24740 + (1));
i__10525__auto___24740 = G__24741;
continue;
} else {
}
break;
}

var G__24738 = args24736.length;
switch (G__24738) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24736.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24743 = [];
var len__10524__auto___24794 = arguments.length;
var i__10525__auto___24795 = (0);
while(true){
if((i__10525__auto___24795 < len__10524__auto___24794)){
args24743.push((arguments[i__10525__auto___24795]));

var G__24796 = (i__10525__auto___24795 + (1));
i__10525__auto___24795 = G__24796;
continue;
} else {
}
break;
}

var G__24745 = args24743.length;
switch (G__24745) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24743.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22120__auto___24798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___24798,out){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___24798,out){
return (function (state_24769){
var state_val_24770 = (state_24769[(1)]);
if((state_val_24770 === (7))){
var inst_24764 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24771_24799 = state_24769__$1;
(statearr_24771_24799[(2)] = inst_24764);

(statearr_24771_24799[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24770 === (1))){
var inst_24746 = null;
var state_24769__$1 = (function (){var statearr_24772 = state_24769;
(statearr_24772[(7)] = inst_24746);

return statearr_24772;
})();
var statearr_24773_24800 = state_24769__$1;
(statearr_24773_24800[(2)] = null);

(statearr_24773_24800[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24770 === (4))){
var inst_24749 = (state_24769[(8)]);
var inst_24749__$1 = (state_24769[(2)]);
var inst_24750 = (inst_24749__$1 == null);
var inst_24751 = cljs.core.not(inst_24750);
var state_24769__$1 = (function (){var statearr_24774 = state_24769;
(statearr_24774[(8)] = inst_24749__$1);

return statearr_24774;
})();
if(inst_24751){
var statearr_24775_24801 = state_24769__$1;
(statearr_24775_24801[(1)] = (5));

} else {
var statearr_24776_24802 = state_24769__$1;
(statearr_24776_24802[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24770 === (6))){
var state_24769__$1 = state_24769;
var statearr_24777_24803 = state_24769__$1;
(statearr_24777_24803[(2)] = null);

(statearr_24777_24803[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24770 === (3))){
var inst_24766 = (state_24769[(2)]);
var inst_24767 = cljs.core.async.close_BANG_(out);
var state_24769__$1 = (function (){var statearr_24778 = state_24769;
(statearr_24778[(9)] = inst_24766);

return statearr_24778;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24769__$1,inst_24767);
} else {
if((state_val_24770 === (2))){
var state_24769__$1 = state_24769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24769__$1,(4),ch);
} else {
if((state_val_24770 === (11))){
var inst_24749 = (state_24769[(8)]);
var inst_24758 = (state_24769[(2)]);
var inst_24746 = inst_24749;
var state_24769__$1 = (function (){var statearr_24779 = state_24769;
(statearr_24779[(7)] = inst_24746);

(statearr_24779[(10)] = inst_24758);

return statearr_24779;
})();
var statearr_24780_24804 = state_24769__$1;
(statearr_24780_24804[(2)] = null);

(statearr_24780_24804[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24770 === (9))){
var inst_24749 = (state_24769[(8)]);
var state_24769__$1 = state_24769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24769__$1,(11),out,inst_24749);
} else {
if((state_val_24770 === (5))){
var inst_24746 = (state_24769[(7)]);
var inst_24749 = (state_24769[(8)]);
var inst_24753 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24749,inst_24746);
var state_24769__$1 = state_24769;
if(inst_24753){
var statearr_24782_24805 = state_24769__$1;
(statearr_24782_24805[(1)] = (8));

} else {
var statearr_24783_24806 = state_24769__$1;
(statearr_24783_24806[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24770 === (10))){
var inst_24761 = (state_24769[(2)]);
var state_24769__$1 = state_24769;
var statearr_24784_24807 = state_24769__$1;
(statearr_24784_24807[(2)] = inst_24761);

(statearr_24784_24807[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24770 === (8))){
var inst_24746 = (state_24769[(7)]);
var tmp24781 = inst_24746;
var inst_24746__$1 = tmp24781;
var state_24769__$1 = (function (){var statearr_24785 = state_24769;
(statearr_24785[(7)] = inst_24746__$1);

return statearr_24785;
})();
var statearr_24786_24808 = state_24769__$1;
(statearr_24786_24808[(2)] = null);

(statearr_24786_24808[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto___24798,out))
;
return ((function (switch__18351__auto__,c__22120__auto___24798,out){
return (function() {
var cljs$core$async$state_machine__18352__auto__ = null;
var cljs$core$async$state_machine__18352__auto____0 = (function (){
var statearr_24790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24790[(0)] = cljs$core$async$state_machine__18352__auto__);

(statearr_24790[(1)] = (1));

return statearr_24790;
});
var cljs$core$async$state_machine__18352__auto____1 = (function (state_24769){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_24769);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e24791){if((e24791 instanceof Object)){
var ex__18355__auto__ = e24791;
var statearr_24792_24809 = state_24769;
(statearr_24792_24809[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24769);

return cljs.core.cst$kw$recur;
} else {
throw e24791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__24810 = state_24769;
state_24769 = G__24810;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$state_machine__18352__auto__ = function(state_24769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18352__auto____1.call(this,state_24769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18352__auto____0;
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18352__auto____1;
return cljs$core$async$state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___24798,out))
})();
var state__22122__auto__ = (function (){var statearr_24793 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_24793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___24798);

return statearr_24793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___24798,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24811 = [];
var len__10524__auto___24881 = arguments.length;
var i__10525__auto___24882 = (0);
while(true){
if((i__10525__auto___24882 < len__10524__auto___24881)){
args24811.push((arguments[i__10525__auto___24882]));

var G__24883 = (i__10525__auto___24882 + (1));
i__10525__auto___24882 = G__24883;
continue;
} else {
}
break;
}

var G__24813 = args24811.length;
switch (G__24813) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24811.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22120__auto___24885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___24885,out){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___24885,out){
return (function (state_24851){
var state_val_24852 = (state_24851[(1)]);
if((state_val_24852 === (7))){
var inst_24847 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
var statearr_24853_24886 = state_24851__$1;
(statearr_24853_24886[(2)] = inst_24847);

(statearr_24853_24886[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (1))){
var inst_24814 = (new Array(n));
var inst_24815 = inst_24814;
var inst_24816 = (0);
var state_24851__$1 = (function (){var statearr_24854 = state_24851;
(statearr_24854[(7)] = inst_24815);

(statearr_24854[(8)] = inst_24816);

return statearr_24854;
})();
var statearr_24855_24887 = state_24851__$1;
(statearr_24855_24887[(2)] = null);

(statearr_24855_24887[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (4))){
var inst_24819 = (state_24851[(9)]);
var inst_24819__$1 = (state_24851[(2)]);
var inst_24820 = (inst_24819__$1 == null);
var inst_24821 = cljs.core.not(inst_24820);
var state_24851__$1 = (function (){var statearr_24856 = state_24851;
(statearr_24856[(9)] = inst_24819__$1);

return statearr_24856;
})();
if(inst_24821){
var statearr_24857_24888 = state_24851__$1;
(statearr_24857_24888[(1)] = (5));

} else {
var statearr_24858_24889 = state_24851__$1;
(statearr_24858_24889[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (15))){
var inst_24841 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
var statearr_24859_24890 = state_24851__$1;
(statearr_24859_24890[(2)] = inst_24841);

(statearr_24859_24890[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (13))){
var state_24851__$1 = state_24851;
var statearr_24860_24891 = state_24851__$1;
(statearr_24860_24891[(2)] = null);

(statearr_24860_24891[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (6))){
var inst_24816 = (state_24851[(8)]);
var inst_24837 = (inst_24816 > (0));
var state_24851__$1 = state_24851;
if(cljs.core.truth_(inst_24837)){
var statearr_24861_24892 = state_24851__$1;
(statearr_24861_24892[(1)] = (12));

} else {
var statearr_24862_24893 = state_24851__$1;
(statearr_24862_24893[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (3))){
var inst_24849 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24851__$1,inst_24849);
} else {
if((state_val_24852 === (12))){
var inst_24815 = (state_24851[(7)]);
var inst_24839 = cljs.core.vec(inst_24815);
var state_24851__$1 = state_24851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24851__$1,(15),out,inst_24839);
} else {
if((state_val_24852 === (2))){
var state_24851__$1 = state_24851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24851__$1,(4),ch);
} else {
if((state_val_24852 === (11))){
var inst_24831 = (state_24851[(2)]);
var inst_24832 = (new Array(n));
var inst_24815 = inst_24832;
var inst_24816 = (0);
var state_24851__$1 = (function (){var statearr_24863 = state_24851;
(statearr_24863[(7)] = inst_24815);

(statearr_24863[(8)] = inst_24816);

(statearr_24863[(10)] = inst_24831);

return statearr_24863;
})();
var statearr_24864_24894 = state_24851__$1;
(statearr_24864_24894[(2)] = null);

(statearr_24864_24894[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (9))){
var inst_24815 = (state_24851[(7)]);
var inst_24829 = cljs.core.vec(inst_24815);
var state_24851__$1 = state_24851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24851__$1,(11),out,inst_24829);
} else {
if((state_val_24852 === (5))){
var inst_24815 = (state_24851[(7)]);
var inst_24819 = (state_24851[(9)]);
var inst_24816 = (state_24851[(8)]);
var inst_24824 = (state_24851[(11)]);
var inst_24823 = (inst_24815[inst_24816] = inst_24819);
var inst_24824__$1 = (inst_24816 + (1));
var inst_24825 = (inst_24824__$1 < n);
var state_24851__$1 = (function (){var statearr_24865 = state_24851;
(statearr_24865[(11)] = inst_24824__$1);

(statearr_24865[(12)] = inst_24823);

return statearr_24865;
})();
if(cljs.core.truth_(inst_24825)){
var statearr_24866_24895 = state_24851__$1;
(statearr_24866_24895[(1)] = (8));

} else {
var statearr_24867_24896 = state_24851__$1;
(statearr_24867_24896[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (14))){
var inst_24844 = (state_24851[(2)]);
var inst_24845 = cljs.core.async.close_BANG_(out);
var state_24851__$1 = (function (){var statearr_24869 = state_24851;
(statearr_24869[(13)] = inst_24844);

return statearr_24869;
})();
var statearr_24870_24897 = state_24851__$1;
(statearr_24870_24897[(2)] = inst_24845);

(statearr_24870_24897[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (10))){
var inst_24835 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
var statearr_24871_24898 = state_24851__$1;
(statearr_24871_24898[(2)] = inst_24835);

(statearr_24871_24898[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (8))){
var inst_24815 = (state_24851[(7)]);
var inst_24824 = (state_24851[(11)]);
var tmp24868 = inst_24815;
var inst_24815__$1 = tmp24868;
var inst_24816 = inst_24824;
var state_24851__$1 = (function (){var statearr_24872 = state_24851;
(statearr_24872[(7)] = inst_24815__$1);

(statearr_24872[(8)] = inst_24816);

return statearr_24872;
})();
var statearr_24873_24899 = state_24851__$1;
(statearr_24873_24899[(2)] = null);

(statearr_24873_24899[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto___24885,out))
;
return ((function (switch__18351__auto__,c__22120__auto___24885,out){
return (function() {
var cljs$core$async$state_machine__18352__auto__ = null;
var cljs$core$async$state_machine__18352__auto____0 = (function (){
var statearr_24877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24877[(0)] = cljs$core$async$state_machine__18352__auto__);

(statearr_24877[(1)] = (1));

return statearr_24877;
});
var cljs$core$async$state_machine__18352__auto____1 = (function (state_24851){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_24851);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e24878){if((e24878 instanceof Object)){
var ex__18355__auto__ = e24878;
var statearr_24879_24900 = state_24851;
(statearr_24879_24900[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24851);

return cljs.core.cst$kw$recur;
} else {
throw e24878;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__24901 = state_24851;
state_24851 = G__24901;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$state_machine__18352__auto__ = function(state_24851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18352__auto____1.call(this,state_24851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18352__auto____0;
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18352__auto____1;
return cljs$core$async$state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___24885,out))
})();
var state__22122__auto__ = (function (){var statearr_24880 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_24880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___24885);

return statearr_24880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___24885,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24902 = [];
var len__10524__auto___24976 = arguments.length;
var i__10525__auto___24977 = (0);
while(true){
if((i__10525__auto___24977 < len__10524__auto___24976)){
args24902.push((arguments[i__10525__auto___24977]));

var G__24978 = (i__10525__auto___24977 + (1));
i__10525__auto___24977 = G__24978;
continue;
} else {
}
break;
}

var G__24904 = args24902.length;
switch (G__24904) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24902.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__22120__auto___24980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__22120__auto___24980,out){
return (function (){
var f__22121__auto__ = (function (){var switch__18351__auto__ = ((function (c__22120__auto___24980,out){
return (function (state_24946){
var state_val_24947 = (state_24946[(1)]);
if((state_val_24947 === (7))){
var inst_24942 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
var statearr_24948_24981 = state_24946__$1;
(statearr_24948_24981[(2)] = inst_24942);

(statearr_24948_24981[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24947 === (1))){
var inst_24905 = [];
var inst_24906 = inst_24905;
var inst_24907 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_24946__$1 = (function (){var statearr_24949 = state_24946;
(statearr_24949[(7)] = inst_24906);

(statearr_24949[(8)] = inst_24907);

return statearr_24949;
})();
var statearr_24950_24982 = state_24946__$1;
(statearr_24950_24982[(2)] = null);

(statearr_24950_24982[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24947 === (4))){
var inst_24910 = (state_24946[(9)]);
var inst_24910__$1 = (state_24946[(2)]);
var inst_24911 = (inst_24910__$1 == null);
var inst_24912 = cljs.core.not(inst_24911);
var state_24946__$1 = (function (){var statearr_24951 = state_24946;
(statearr_24951[(9)] = inst_24910__$1);

return statearr_24951;
})();
if(inst_24912){
var statearr_24952_24983 = state_24946__$1;
(statearr_24952_24983[(1)] = (5));

} else {
var statearr_24953_24984 = state_24946__$1;
(statearr_24953_24984[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24947 === (15))){
var inst_24936 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
var statearr_24954_24985 = state_24946__$1;
(statearr_24954_24985[(2)] = inst_24936);

(statearr_24954_24985[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24947 === (13))){
var state_24946__$1 = state_24946;
var statearr_24955_24986 = state_24946__$1;
(statearr_24955_24986[(2)] = null);

(statearr_24955_24986[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24947 === (6))){
var inst_24906 = (state_24946[(7)]);
var inst_24931 = inst_24906.length;
var inst_24932 = (inst_24931 > (0));
var state_24946__$1 = state_24946;
if(cljs.core.truth_(inst_24932)){
var statearr_24956_24987 = state_24946__$1;
(statearr_24956_24987[(1)] = (12));

} else {
var statearr_24957_24988 = state_24946__$1;
(statearr_24957_24988[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24947 === (3))){
var inst_24944 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24946__$1,inst_24944);
} else {
if((state_val_24947 === (12))){
var inst_24906 = (state_24946[(7)]);
var inst_24934 = cljs.core.vec(inst_24906);
var state_24946__$1 = state_24946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24946__$1,(15),out,inst_24934);
} else {
if((state_val_24947 === (2))){
var state_24946__$1 = state_24946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24946__$1,(4),ch);
} else {
if((state_val_24947 === (11))){
var inst_24910 = (state_24946[(9)]);
var inst_24914 = (state_24946[(10)]);
var inst_24924 = (state_24946[(2)]);
var inst_24925 = [];
var inst_24926 = inst_24925.push(inst_24910);
var inst_24906 = inst_24925;
var inst_24907 = inst_24914;
var state_24946__$1 = (function (){var statearr_24958 = state_24946;
(statearr_24958[(7)] = inst_24906);

(statearr_24958[(11)] = inst_24926);

(statearr_24958[(8)] = inst_24907);

(statearr_24958[(12)] = inst_24924);

return statearr_24958;
})();
var statearr_24959_24989 = state_24946__$1;
(statearr_24959_24989[(2)] = null);

(statearr_24959_24989[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24947 === (9))){
var inst_24906 = (state_24946[(7)]);
var inst_24922 = cljs.core.vec(inst_24906);
var state_24946__$1 = state_24946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24946__$1,(11),out,inst_24922);
} else {
if((state_val_24947 === (5))){
var inst_24910 = (state_24946[(9)]);
var inst_24914 = (state_24946[(10)]);
var inst_24907 = (state_24946[(8)]);
var inst_24914__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24910) : f.call(null,inst_24910));
var inst_24915 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24914__$1,inst_24907);
var inst_24916 = cljs.core.keyword_identical_QMARK_(inst_24907,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_24917 = (inst_24915) || (inst_24916);
var state_24946__$1 = (function (){var statearr_24960 = state_24946;
(statearr_24960[(10)] = inst_24914__$1);

return statearr_24960;
})();
if(cljs.core.truth_(inst_24917)){
var statearr_24961_24990 = state_24946__$1;
(statearr_24961_24990[(1)] = (8));

} else {
var statearr_24962_24991 = state_24946__$1;
(statearr_24962_24991[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24947 === (14))){
var inst_24939 = (state_24946[(2)]);
var inst_24940 = cljs.core.async.close_BANG_(out);
var state_24946__$1 = (function (){var statearr_24964 = state_24946;
(statearr_24964[(13)] = inst_24939);

return statearr_24964;
})();
var statearr_24965_24992 = state_24946__$1;
(statearr_24965_24992[(2)] = inst_24940);

(statearr_24965_24992[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24947 === (10))){
var inst_24929 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
var statearr_24966_24993 = state_24946__$1;
(statearr_24966_24993[(2)] = inst_24929);

(statearr_24966_24993[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24947 === (8))){
var inst_24906 = (state_24946[(7)]);
var inst_24910 = (state_24946[(9)]);
var inst_24914 = (state_24946[(10)]);
var inst_24919 = inst_24906.push(inst_24910);
var tmp24963 = inst_24906;
var inst_24906__$1 = tmp24963;
var inst_24907 = inst_24914;
var state_24946__$1 = (function (){var statearr_24967 = state_24946;
(statearr_24967[(7)] = inst_24906__$1);

(statearr_24967[(8)] = inst_24907);

(statearr_24967[(14)] = inst_24919);

return statearr_24967;
})();
var statearr_24968_24994 = state_24946__$1;
(statearr_24968_24994[(2)] = null);

(statearr_24968_24994[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22120__auto___24980,out))
;
return ((function (switch__18351__auto__,c__22120__auto___24980,out){
return (function() {
var cljs$core$async$state_machine__18352__auto__ = null;
var cljs$core$async$state_machine__18352__auto____0 = (function (){
var statearr_24972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24972[(0)] = cljs$core$async$state_machine__18352__auto__);

(statearr_24972[(1)] = (1));

return statearr_24972;
});
var cljs$core$async$state_machine__18352__auto____1 = (function (state_24946){
while(true){
var ret_value__18353__auto__ = (function (){try{while(true){
var result__18354__auto__ = switch__18351__auto__(state_24946);
if(cljs.core.keyword_identical_QMARK_(result__18354__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18354__auto__;
}
break;
}
}catch (e24973){if((e24973 instanceof Object)){
var ex__18355__auto__ = e24973;
var statearr_24974_24995 = state_24946;
(statearr_24974_24995[(5)] = ex__18355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24946);

return cljs.core.cst$kw$recur;
} else {
throw e24973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18353__auto__,cljs.core.cst$kw$recur)){
var G__24996 = state_24946;
state_24946 = G__24996;
continue;
} else {
return ret_value__18353__auto__;
}
break;
}
});
cljs$core$async$state_machine__18352__auto__ = function(state_24946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18352__auto____1.call(this,state_24946);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18352__auto____0;
cljs$core$async$state_machine__18352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18352__auto____1;
return cljs$core$async$state_machine__18352__auto__;
})()
;})(switch__18351__auto__,c__22120__auto___24980,out))
})();
var state__22122__auto__ = (function (){var statearr_24975 = (f__22121__auto__.cljs$core$IFn$_invoke$arity$0 ? f__22121__auto__.cljs$core$IFn$_invoke$arity$0() : f__22121__auto__.call(null));
(statearr_24975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22120__auto___24980);

return statearr_24975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__22122__auto__);
});})(c__22120__auto___24980,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

