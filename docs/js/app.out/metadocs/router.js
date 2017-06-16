// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('metadocs.router');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('accountant.core');
goog.require('metadocs.pages.contribution');
goog.require('metadocs.pages.perspective');
goog.require('metadocs.pages.feature');
goog.require('metadocs.pages.language');
goog.require('metadocs.pages.technology');
goog.require('metadocs.pages.concept');
goog.require('metadocs.pages.home');
goog.require('metadocs.state');
goog.require('secretary.core');
var action__25227__auto___25787 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25782 = params__25228__auto__;
var map__25782__$1 = ((((!((map__25782 == null)))?((((map__25782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25782):map__25782);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return metadocs.pages.home.page;},cljs.core.cst$sym$metadocs$pages$home_SLASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$metadocs$pages$home,cljs.core.cst$sym$page,"/home/schauboga/.boot/cache/tmp/home/schauboga/dev/university/metalib/tools/metadocs/e9l/-o089qr/metadocs/pages/home.cljs",11,1,6,6,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(metadocs.pages.home.page)?metadocs.pages.home.page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25784 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return metadocs.pages.home.page;},cljs.core.cst$sym$metadocs$pages$home_SLASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$metadocs$pages$home,cljs.core.cst$sym$page,"/home/schauboga/.boot/cache/tmp/home/schauboga/dev/university/metalib/tools/metadocs/e9l/-o089qr/metadocs/pages/home.cljs",11,1,6,6,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(metadocs.pages.home.page)?metadocs.pages.home.page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/",action__25227__auto___25787);

var action__25227__auto___25848 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25788 = params__25228__auto__;
var map__25788__$1 = ((((!((map__25788 == null)))?((((map__25788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25788):map__25788);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25788,map__25788__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Scala embedded",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/scala/fsml/",cljs.core.cst$kw$headline,"Scala-based embedded language implementation with macros",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"Case classes for object representation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Case Class"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/AST.scala"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$headline,"Textual embedded turnstile parsed as valid scala AST",cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Static annotation","Language Embedding"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"app/src/main/scala/org/softlang/fsml/Main.scala",cljs.core.cst$kw$from,5,cljs.core.cst$kw$to,23], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$headline,"Unlifting FSM expressions",cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Static annotation","Quasi Quotation","Implicit conversion"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Quotations.scala",cljs.core.cst$kw$from,50,cljs.core.cst$kw$to,66], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Constraints validated as part of the macro expansion",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Checker.scala",cljs.core.cst$kw$from,17,cljs.core.cst$kw$to,24], null)], null)], null),new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Piggyback"], null),cljs.core.cst$kw$headline,"Distinct state ids are guarantied by lifting state to objects in the same scope",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$type,"component",cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scalameta"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lifting","Quasi-quotation","Implicit conversion"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Quotations.scala",cljs.core.cst$kw$from,8,cljs.core.cst$kw$to,17], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Run-time system?"], null),cljs.core.cst$kw$headline,"Interpretation represented as a object property access chain",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"app/src/main/scala/org/softlang/fsml/Main.scala",cljs.core.cst$kw$from,25,cljs.core.cst$kw$to,25], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Run-time system?","Staging"], null),cljs.core.cst$kw$headline,"Annotation inlines textual embedded fsm into an scala object with initial state",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scalameta"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Inline Macro"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Fsm.scala",cljs.core.cst$kw$from,8,cljs.core.cst$kw$to,25], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Staging"], null),cljs.core.cst$kw$headline,"The transitions are translated to scala AST function definitions",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scalameta"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lifting","Quasi-quotation","Implicit conversion","Interpolation"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Quotations.scala",cljs.core.cst$kw$from,19,cljs.core.cst$kw$to,48], null)], null)], null)], null)], null));
});})(map__25788,map__25788__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25790 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25790){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Scala embedded",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/scala/fsml/",cljs.core.cst$kw$headline,"Scala-based embedded language implementation with macros",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"Case classes for object representation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Case Class"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/AST.scala"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$headline,"Textual embedded turnstile parsed as valid scala AST",cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Static annotation","Language Embedding"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"app/src/main/scala/org/softlang/fsml/Main.scala",cljs.core.cst$kw$from,5,cljs.core.cst$kw$to,23], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$headline,"Unlifting FSM expressions",cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Static annotation","Quasi Quotation","Implicit conversion"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Quotations.scala",cljs.core.cst$kw$from,50,cljs.core.cst$kw$to,66], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Constraints validated as part of the macro expansion",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Checker.scala",cljs.core.cst$kw$from,17,cljs.core.cst$kw$to,24], null)], null)], null),new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Piggyback"], null),cljs.core.cst$kw$headline,"Distinct state ids are guarantied by lifting state to objects in the same scope",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$type,"component",cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scalameta"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lifting","Quasi-quotation","Implicit conversion"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Quotations.scala",cljs.core.cst$kw$from,8,cljs.core.cst$kw$to,17], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Run-time system?"], null),cljs.core.cst$kw$headline,"Interpretation represented as a object property access chain",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"app/src/main/scala/org/softlang/fsml/Main.scala",cljs.core.cst$kw$from,25,cljs.core.cst$kw$to,25], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Run-time system?","Staging"], null),cljs.core.cst$kw$headline,"Annotation inlines textual embedded fsm into an scala object with initial state",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scalameta"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Inline Macro"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Fsm.scala",cljs.core.cst$kw$from,8,cljs.core.cst$kw$to,25], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Staging"], null),cljs.core.cst$kw$headline,"The transitions are translated to scala AST function definitions",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scalameta"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lifting","Quasi-quotation","Implicit conversion","Interpolation"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Quotations.scala",cljs.core.cst$kw$from,19,cljs.core.cst$kw$to,48], null)], null)], null)], null)], null));
});})(vec__25790))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/Scala embedded.html",action__25227__auto___25848);


var action__25227__auto___25849 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25793 = params__25228__auto__;
var map__25793__$1 = ((((!((map__25793 == null)))?((((map__25793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25793):map__25793);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25793,map__25793__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"EMFSirius",cljs.core.cst$kw$headline,"EMF with Sirius",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/sirius/fsml/",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph editing"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data","capture"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Turnstile.PNG"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Metamodel"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ecore"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation","capture"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Metamodel.PNG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.sirius.fsml.model/model/Fsml.ecore"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Model projection"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sirius viewpoint specification"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation","capture"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Projection.PNG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.sirius.fsml.viewpoint/description/Fsml.odesign"], null)], null)], null)], null)], null));
});})(map__25793,map__25793__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25795 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25795){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"EMFSirius",cljs.core.cst$kw$headline,"EMF with Sirius",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/sirius/fsml/",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph editing"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data","capture"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Turnstile.PNG"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Metamodel"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ecore"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation","capture"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Metamodel.PNG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.sirius.fsml.model/model/Fsml.ecore"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Model projection"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sirius viewpoint specification"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation","capture"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Projection.PNG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.sirius.fsml.viewpoint/description/Fsml.odesign"], null)], null)], null)], null)], null));
});})(vec__25795))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/EMFSirius.html",action__25227__auto___25849);


var action__25227__auto___25850 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25798 = params__25228__auto__;
var map__25798__$1 = ((((!((map__25798 == null)))?((((map__25798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25798):map__25798);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25798,map__25798__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"javaExternal",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/",cljs.core.cst$kw$headline,"External DSL style with ANTLR and Java",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Concrete syntax"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["External DSL"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.fsml"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning","Text-to-CST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/Fsml.g4"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Functional constructor","Getter","Setter"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/Fsm.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/State.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/Transition.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Abstraction"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Listener"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/FsmlToObjects.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-CST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser generation"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"Java/org/softlang/fsml/FsmlParser.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-CST"], null),cljs.core.cst$kw$headline,"Driver code for syntax checking",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Boilerplate code"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/FsmlSyntaxChecker.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-AST"], null),cljs.core.cst$kw$headline,"Driver code for parsing",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Boilerplate code"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4","JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/tests/FsmlToObjectsTest.java"], null)], null)], null)], null)], null));
});})(map__25798,map__25798__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25800 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25800){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"javaExternal",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/",cljs.core.cst$kw$headline,"External DSL style with ANTLR and Java",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Concrete syntax"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["External DSL"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.fsml"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning","Text-to-CST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/Fsml.g4"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Functional constructor","Getter","Setter"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/Fsm.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/State.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/Transition.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Abstraction"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Listener"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/FsmlToObjects.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-CST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser generation"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"Java/org/softlang/fsml/FsmlParser.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-CST"], null),cljs.core.cst$kw$headline,"Driver code for syntax checking",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Boilerplate code"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/FsmlSyntaxChecker.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-AST"], null),cljs.core.cst$kw$headline,"Driver code for parsing",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Boilerplate code"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4","JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/tests/FsmlToObjectsTest.java"], null)], null)], null)], null)], null));
});})(vec__25800))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/javaExternal.html",action__25227__auto___25850);


var action__25227__auto___25851 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25803 = params__25228__auto__;
var map__25803__$1 = ((((!((map__25803 == null)))?((((map__25803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25803):map__25803);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25803,map__25803__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"pythonInternal",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/Python/",cljs.core.cst$kw$headline,"Internal DSL style with Python",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlSample.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API","AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlModel.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template Processing"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jinja2"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlCGenerator.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jinja2"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template processing"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jinja2"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"templates/Fsm.jinja2"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exception"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlConstraints.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlInterpreter.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph rendering"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DOT"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graphviz"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"dot/sample.dot"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph rendering"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JSON","DOT","Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Internal DSL"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graphviz"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlVisualizer.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$headline,"Input for interpretation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JSON"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.input"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$headline,"Output for interpretation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JSON"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.output"], null)], null)], null)], null)], null));
});})(map__25803,map__25803__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25805 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25805){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"pythonInternal",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/Python/",cljs.core.cst$kw$headline,"Internal DSL style with Python",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlSample.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API","AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlModel.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template Processing"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jinja2"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlCGenerator.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jinja2"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template processing"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jinja2"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"templates/Fsm.jinja2"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exception"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlConstraints.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlInterpreter.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph rendering"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DOT"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graphviz"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"dot/sample.dot"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph rendering"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JSON","DOT","Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Internal DSL"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graphviz"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlVisualizer.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$headline,"Input for interpretation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JSON"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.input"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$headline,"Output for interpretation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JSON"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.output"], null)], null)], null)], null)], null));
});})(vec__25805))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/pythonInternal.html",action__25227__auto___25851);


var action__25227__auto___25852 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25808 = params__25228__auto__;
var map__25808__$1 = ((((!((map__25808 == null)))?((((map__25808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25808):map__25808);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25808,map__25808__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"javaFluentInternal",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/Java/",cljs.core.cst$kw$headline,"Internal DSL style with Java with a fluent API",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/Sample.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/Fsm.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/ActionStatePair.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Semantic domain"], null),cljs.core.cst$kw$headline,"Implementation of fluent API",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/FsmImpl.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/FsmlInterpreter.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/FluentTest.java"], null)], null)], null)], null)], null));
});})(map__25808,map__25808__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25810 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25810){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"javaFluentInternal",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/Java/",cljs.core.cst$kw$headline,"Internal DSL style with Java with a fluent API",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/Sample.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/Fsm.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/ActionStatePair.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Semantic domain"], null),cljs.core.cst$kw$headline,"Implementation of fluent API",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/FsmImpl.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/FsmlInterpreter.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/FluentTest.java"], null)], null)], null)], null)], null));
});})(vec__25810))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/javaFluentInternal.html",action__25227__auto___25852);


var action__25227__auto___25853 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25813 = params__25228__auto__;
var map__25813__$1 = ((((!((map__25813 == null)))?((((map__25813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25813):map__25813);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25813,map__25813__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"EMFXtext",cljs.core.cst$kw$headline,"XText with derived EMF model",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/xtext/fsml/",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG","Text-to-ASG"], null),cljs.core.cst$kw$headline,"State-machine grammar",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtext"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtext"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/Fsml.xtext"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Textual syntax"], null),cljs.core.cst$kw$headline,"A Turnstile FSM",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FSML"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml.turnstile/src/org/softlang/metalib/xtext/fsml/turnstile/Turnstile.fsml"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG"], null),cljs.core.cst$kw$headline,"EMF model interfaces",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/fsml/FSM.java",cljs.core.cst$kw$from,24,cljs.core.cst$kw$to,44], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/fsml/FSMState.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/fsml/FSMTransition.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG"], null),cljs.core.cst$kw$headline,"EMF model classes",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/fsml/impl/FSMImpl.java",cljs.core.cst$kw$from,35,cljs.core.cst$kw$to,47], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/fsml/impl/FSMStateImpl.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/fsml/impl/FSMTransitionImpl.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-ASG","Scanning"], null),cljs.core.cst$kw$headline,"Generated Parser",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR3"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser","Token"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/parser/antlr/FsmlParser.java",cljs.core.cst$kw$from,12,cljs.core.cst$kw$to,40], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Xtext Constraint",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtend"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/validation/FsmlValidator.xtend",cljs.core.cst$kw$from,35,cljs.core.cst$kw$to,54], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Piggyback","Resolution"], null),cljs.core.cst$kw$headline,"Xtext model reference resolution by name",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtext"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reference relationship","Name binding"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/Fsml.xtext",cljs.core.cst$kw$from,20,cljs.core.cst$kw$to,21], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline,"",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtend"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template processing"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/generator/FsmlGenerator.xtend",cljs.core.cst$kw$from,80,cljs.core.cst$kw$to,185], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph rendering"], null),cljs.core.cst$kw$headline,"DGL generation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtend"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template processing"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/generator/FsmlGenerator.xtend",cljs.core.cst$kw$from,188,cljs.core.cst$kw$to,199], null)], null)], null)], null)], null));
});})(map__25813,map__25813__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25815 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25815){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"EMFXtext",cljs.core.cst$kw$headline,"XText with derived EMF model",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/xtext/fsml/",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG","Text-to-ASG"], null),cljs.core.cst$kw$headline,"State-machine grammar",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtext"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtext"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/Fsml.xtext"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Textual syntax"], null),cljs.core.cst$kw$headline,"A Turnstile FSM",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FSML"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml.turnstile/src/org/softlang/metalib/xtext/fsml/turnstile/Turnstile.fsml"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG"], null),cljs.core.cst$kw$headline,"EMF model interfaces",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/fsml/FSM.java",cljs.core.cst$kw$from,24,cljs.core.cst$kw$to,44], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/fsml/FSMState.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/fsml/FSMTransition.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG"], null),cljs.core.cst$kw$headline,"EMF model classes",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/fsml/impl/FSMImpl.java",cljs.core.cst$kw$from,35,cljs.core.cst$kw$to,47], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/fsml/impl/FSMStateImpl.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/fsml/impl/FSMTransitionImpl.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-ASG","Scanning"], null),cljs.core.cst$kw$headline,"Generated Parser",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR3"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser","Token"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/parser/antlr/FsmlParser.java",cljs.core.cst$kw$from,12,cljs.core.cst$kw$to,40], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Xtext Constraint",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtend"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/validation/FsmlValidator.xtend",cljs.core.cst$kw$from,35,cljs.core.cst$kw$to,54], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Piggyback","Resolution"], null),cljs.core.cst$kw$headline,"Xtext model reference resolution by name",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtext"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reference relationship","Name binding"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/Fsml.xtext",cljs.core.cst$kw$from,20,cljs.core.cst$kw$to,21], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline,"",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtend"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template processing"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/generator/FsmlGenerator.xtend",cljs.core.cst$kw$from,80,cljs.core.cst$kw$to,185], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph rendering"], null),cljs.core.cst$kw$headline,"DGL generation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtend"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template processing"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/generator/FsmlGenerator.xtend",cljs.core.cst$kw$from,188,cljs.core.cst$kw$to,199], null)], null)], null)], null)], null));
});})(vec__25815))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/EMFXtext.html",action__25227__auto___25853);


var action__25227__auto___25854 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25818 = params__25228__auto__;
var map__25818__$1 = ((((!((map__25818 == null)))?((((map__25818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25818):map__25818);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25818,map__25818__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"pythonExternal",cljs.core.cst$kw$headline,"External DSL style with ANTLR and Python",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Concrete syntax"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["External DSL"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.fsml"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser generation","Generated code"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"Python/FsmlLexer.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser generation","Generated code"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"Python/FsmlParser.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API","AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dictionary"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/FsmlModel.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning","Text-to-AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Semantic action"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/Fsml.g4"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Serialization"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JSON"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/sample.json"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Serialization","Parsing"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/FsmlToJSON.py"], null)], null)], null)], null)], null));
});})(map__25818,map__25818__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25820 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25820){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"pythonExternal",cljs.core.cst$kw$headline,"External DSL style with ANTLR and Python",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Concrete syntax"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["External DSL"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.fsml"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser generation","Generated code"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"Python/FsmlLexer.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser generation","Generated code"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"Python/FsmlParser.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API","AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dictionary"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/FsmlModel.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning","Text-to-AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Semantic action"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/Fsml.g4"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Serialization"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JSON"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/sample.json"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Serialization","Parsing"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/FsmlToJSON.py"], null)], null)], null)], null)], null));
});})(vec__25820))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/pythonExternal.html",action__25227__auto___25854);


var action__25227__auto___25855 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25823 = params__25228__auto__;
var map__25823__$1 = ((((!((map__25823 == null)))?((((map__25823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25823):map__25823);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25823,map__25823__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"MPS",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/mps/",cljs.core.cst$kw$headline,"MPS implementation based on projectional editing",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"Projectional Editor on AST",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"editor_state.png"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"Projectional Editor on AST",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"structure_event.png"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Check determinism",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"typesystem_check_input.png"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline,"Compilation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"compilation_state.png"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projectional Syntax"], null),cljs.core.cst$kw$headline,"Sample Turnstile",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture","data"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.png"], null)], null)], null)], null)], null));
});})(map__25823,map__25823__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25825 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25825){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"MPS",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/mps/",cljs.core.cst$kw$headline,"MPS implementation based on projectional editing",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"Projectional Editor on AST",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"editor_state.png"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"Projectional Editor on AST",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"structure_event.png"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Check determinism",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"typesystem_check_input.png"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline,"Compilation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"compilation_state.png"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projectional Syntax"], null),cljs.core.cst$kw$headline,"Sample Turnstile",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture","data"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.png"], null)], null)], null)], null)], null));
});})(vec__25825))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/MPS.html",action__25227__auto___25855);


var action__25227__auto___25856 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25828 = params__25228__auto__;
var map__25828__$1 = ((((!((map__25828 == null)))?((((map__25828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25828):map__25828);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25828,map__25828__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"HaskellQuasiQuotation",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/haskell/fsml/",cljs.core.cst$kw$headline,"Use of quasi-quotation and Template Haskell",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"AST implementation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Algebraic data type"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Ast.hs",cljs.core.cst$kw$from,7,cljs.core.cst$kw$to,15], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning"], null),cljs.core.cst$kw$headline,"Lexer definition",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parsec"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lexer"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Lexer.hs",cljs.core.cst$kw$from,13,cljs.core.cst$kw$to,43], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning","Text-to-AST"], null),cljs.core.cst$kw$headline,"Parser combinator",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parsec"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser combinator"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Parser.hs",cljs.core.cst$kw$from,28,cljs.core.cst$kw$to,50], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remove Creole^+-"], null),cljs.core.cst$kw$headline,"Embedded turnstile object in Haskell declaration context",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template Haskell"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Quasi-quotation"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"app/Main.hs",cljs.core.cst$kw$from,7,cljs.core.cst$kw$to,22], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Constraint checking",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Checker.hs",cljs.core.cst$kw$from,8,cljs.core.cst$kw$to,46], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Piggyback"], null),cljs.core.cst$kw$headline,"By generating alternatives for the state data type distinct state ids are guaranteed",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/QuasiQuoter.hs",cljs.core.cst$kw$from,42,cljs.core.cst$kw$to,50], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Run-time system?"], null),cljs.core.cst$kw$headline,"Transitioning between states by folding over the generated event functions",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Currying","Fold"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"app/Main.hs",cljs.core.cst$kw$from,24,cljs.core.cst$kw$to,28], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Staging"], null),cljs.core.cst$kw$headline,"Transitions are translated to Haskell AST",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template Haskell"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Quasi-quotation"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/QuasiQuoter.hs",cljs.core.cst$kw$from,52,cljs.core.cst$kw$to,75], null)], null)], null)], null)], null));
});})(map__25828,map__25828__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25830 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25830){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"HaskellQuasiQuotation",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/haskell/fsml/",cljs.core.cst$kw$headline,"Use of quasi-quotation and Template Haskell",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"AST implementation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Algebraic data type"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Ast.hs",cljs.core.cst$kw$from,7,cljs.core.cst$kw$to,15], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning"], null),cljs.core.cst$kw$headline,"Lexer definition",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parsec"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lexer"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Lexer.hs",cljs.core.cst$kw$from,13,cljs.core.cst$kw$to,43], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning","Text-to-AST"], null),cljs.core.cst$kw$headline,"Parser combinator",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parsec"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser combinator"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Parser.hs",cljs.core.cst$kw$from,28,cljs.core.cst$kw$to,50], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remove Creole^+-"], null),cljs.core.cst$kw$headline,"Embedded turnstile object in Haskell declaration context",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template Haskell"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Quasi-quotation"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"app/Main.hs",cljs.core.cst$kw$from,7,cljs.core.cst$kw$to,22], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Constraint checking",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Checker.hs",cljs.core.cst$kw$from,8,cljs.core.cst$kw$to,46], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Piggyback"], null),cljs.core.cst$kw$headline,"By generating alternatives for the state data type distinct state ids are guaranteed",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/QuasiQuoter.hs",cljs.core.cst$kw$from,42,cljs.core.cst$kw$to,50], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Run-time system?"], null),cljs.core.cst$kw$headline,"Transitioning between states by folding over the generated event functions",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Currying","Fold"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"app/Main.hs",cljs.core.cst$kw$from,24,cljs.core.cst$kw$to,28], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Staging"], null),cljs.core.cst$kw$headline,"Transitions are translated to Haskell AST",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template Haskell"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Quasi-quotation"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/QuasiQuoter.hs",cljs.core.cst$kw$from,52,cljs.core.cst$kw$to,75], null)], null)], null)], null)], null));
});})(vec__25830))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/HaskellQuasiQuotation.html",action__25227__auto___25856);


var action__25227__auto___25857 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25833 = params__25228__auto__;
var map__25833__$1 = ((((!((map__25833 == null)))?((((map__25833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25833):map__25833);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25833,map__25833__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"EMFXMI",cljs.core.cst$kw$headline,"EMF with XMI persistence",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/emf/fsml/",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST","ASG","Resolution"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Metamodel","Structured editor","Reference","Package"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ecore"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation","capture"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"metamodel.PNG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/model/Fsml.ecore"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API","ASG"], null),cljs.core.cst$kw$headline,"EMF model interface for the FSM object",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OO interface","Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FSM.java",cljs.core.cst$kw$from,25,cljs.core.cst$kw$to,52], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FSMState.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FSMTransition.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG"], null),cljs.core.cst$kw$headline,"EMF model class for the FSM object",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OO class","Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/impl/FSMImpl.java",cljs.core.cst$kw$from,41,cljs.core.cst$kw$to,51], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/impl/FSMStateImpl.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/impl/FSMTransitionImpl.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST","ASG"], null),cljs.core.cst$kw$headline,"EMF Packages",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Package","Factory"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FsmlFactory.java",cljs.core.cst$kw$from,49,cljs.core.cst$kw$to,58], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FsmlPackage.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Model projection"], null),cljs.core.cst$kw$headline,"EMF Item provider",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adapter","Command"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.edit/src/org/softlang/metalib/emf/fsml/fsml/provider/FSMItemProvider.java",cljs.core.cst$kw$from,76,cljs.core.cst$kw$to,83], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.edit/src/org/softlang/metalib/emf/fsml/fsml/provider/FSMStateItemProvider.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.edit/src/org/softlang/metalib/emf/fsml/fsml/provider/FSMTransitionItemProvider.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph editing","Model projection"], null),cljs.core.cst$kw$headline,"Viewing and editing the turnstile object in the generated eclipse editor",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data","capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JFace","SWT","Eclipse"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IDE","Structured editor","Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"emfturnstile.PNG"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph editing","Model projection"], null),cljs.core.cst$kw$headline,"The generated eclipse editor for EMF models",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JFace","SWT","Eclipse"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IDE","Structured Editor","Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.editor/src/org/softlang/metalib/emf/fsml/fsml/presentation/FsmlEditor.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Serialization","Resolution","AST"], null),cljs.core.cst$kw$headline,"The turnstile object in EMF's textual exchange format",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["XMI"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SAX"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Persistence","URI"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.turnstile/Turnstile.fsml"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"EMF delegates model validation to methods with a certain signature",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/impl/FSMStateImpl.java",cljs.core.cst$kw$from,188,cljs.core.cst$kw$to,217], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Piggyback"], null),cljs.core.cst$kw$headline,"Unique state names are validated by setting the EMF's unique id feature",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["XMI"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Metamodel"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/model/Fsml.ecore",cljs.core.cst$kw$from,37,cljs.core.cst$kw$to,38], null)], null)], null)], null)], null));
});})(map__25833,map__25833__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25835 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25835){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"EMFXMI",cljs.core.cst$kw$headline,"EMF with XMI persistence",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/emf/fsml/",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST","ASG","Resolution"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Metamodel","Structured editor","Reference","Package"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ecore"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation","capture"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"metamodel.PNG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/model/Fsml.ecore"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API","ASG"], null),cljs.core.cst$kw$headline,"EMF model interface for the FSM object",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OO interface","Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FSM.java",cljs.core.cst$kw$from,25,cljs.core.cst$kw$to,52], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FSMState.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FSMTransition.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG"], null),cljs.core.cst$kw$headline,"EMF model class for the FSM object",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OO class","Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/impl/FSMImpl.java",cljs.core.cst$kw$from,41,cljs.core.cst$kw$to,51], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/impl/FSMStateImpl.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/impl/FSMTransitionImpl.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST","ASG"], null),cljs.core.cst$kw$headline,"EMF Packages",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Package","Factory"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FsmlFactory.java",cljs.core.cst$kw$from,49,cljs.core.cst$kw$to,58], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FsmlPackage.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Model projection"], null),cljs.core.cst$kw$headline,"EMF Item provider",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adapter","Command"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.edit/src/org/softlang/metalib/emf/fsml/fsml/provider/FSMItemProvider.java",cljs.core.cst$kw$from,76,cljs.core.cst$kw$to,83], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.edit/src/org/softlang/metalib/emf/fsml/fsml/provider/FSMStateItemProvider.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.edit/src/org/softlang/metalib/emf/fsml/fsml/provider/FSMTransitionItemProvider.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph editing","Model projection"], null),cljs.core.cst$kw$headline,"Viewing and editing the turnstile object in the generated eclipse editor",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data","capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JFace","SWT","Eclipse"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IDE","Structured editor","Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"emfturnstile.PNG"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph editing","Model projection"], null),cljs.core.cst$kw$headline,"The generated eclipse editor for EMF models",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JFace","SWT","Eclipse"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IDE","Structured Editor","Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.editor/src/org/softlang/metalib/emf/fsml/fsml/presentation/FsmlEditor.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Serialization","Resolution","AST"], null),cljs.core.cst$kw$headline,"The turnstile object in EMF's textual exchange format",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["XMI"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SAX"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Persistence","URI"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.turnstile/Turnstile.fsml"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"EMF delegates model validation to methods with a certain signature",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/impl/FSMStateImpl.java",cljs.core.cst$kw$from,188,cljs.core.cst$kw$to,217], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Piggyback"], null),cljs.core.cst$kw$headline,"Unique state names are validated by setting the EMF's unique id feature",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["XMI"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Metamodel"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/model/Fsml.ecore",cljs.core.cst$kw$from,37,cljs.core.cst$kw$to,38], null)], null)], null)], null)], null));
});})(vec__25835))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/EMFXMI.html",action__25227__auto___25857);


var action__25227__auto___25858 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25838 = params__25228__auto__;
var map__25838__$1 = ((((!((map__25838 == null)))?((((map__25838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25838):map__25838);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25838,map__25838__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"javaInfluentInternal",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/Java/",cljs.core.cst$kw$headline,"Internal DSL style with Java and an influent API",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Getter","Setter"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/ImperativeSample.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Functional constructor"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/FunctionalSample.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Functional constructor","Getter","Setter"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/Fsm.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/State.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/Transition.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/FsmlInterpreter.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/InfluentTest.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline," Translate^O  Feature",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Generated code"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/Turnstile.c"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["StringTemplate"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template processing"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["StringTemplate"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"templates/Fsm.stg"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"https://github.com/softlang/yas/blob/master/languages/FSML/Java/org/softlang/fsml/FsmlCGenerator.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["StringTemplate","JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/CGeneratorTest.java"], null)], null)], null)], null)], null));
});})(map__25838,map__25838__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25840 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25840){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"javaInfluentInternal",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/Java/",cljs.core.cst$kw$headline,"Internal DSL style with Java and an influent API",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Getter","Setter"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/ImperativeSample.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Functional constructor"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/FunctionalSample.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Functional constructor","Getter","Setter"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/Fsm.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/State.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/Transition.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/FsmlInterpreter.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/InfluentTest.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline," Translate^O  Feature",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Generated code"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/Turnstile.c"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["StringTemplate"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template processing"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["StringTemplate"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"templates/Fsm.stg"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"https://github.com/softlang/yas/blob/master/languages/FSML/Java/org/softlang/fsml/FsmlCGenerator.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["StringTemplate","JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/CGeneratorTest.java"], null)], null)], null)], null)], null));
});})(vec__25840))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/javaInfluentInternal.html",action__25227__auto___25858);


var action__25227__auto___25859 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25843 = params__25228__auto__;
var map__25843__$1 = ((((!((map__25843 == null)))?((((map__25843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25843):map__25843);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25843,map__25843__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Spoofax",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/spoofax/fsml/",cljs.core.cst$kw$headline,"Spoofax AST",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"FSML Grammar in Spoofax",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SDF3"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Grammar"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"syntax/fsml.sdf3"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Textual syntax"], null),cljs.core.cst$kw$headline,"Turnstile sample in CS",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FSML"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"test/Turnstile.fsm"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Name binding",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NABL"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Name binding"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"trans/names.nab"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Check Initial",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stratego"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"trans/check.str",cljs.core.cst$kw$from,61,cljs.core.cst$kw$to,62], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline,"Compilation to Java",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stratego"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Name binding"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"trans/generate.str"], null)], null)], null)], null)], null));
});})(map__25843,map__25843__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25845 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25845){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Spoofax",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/spoofax/fsml/",cljs.core.cst$kw$headline,"Spoofax AST",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"FSML Grammar in Spoofax",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SDF3"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Grammar"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"syntax/fsml.sdf3"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Textual syntax"], null),cljs.core.cst$kw$headline,"Turnstile sample in CS",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FSML"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"test/Turnstile.fsm"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Name binding",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NABL"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Name binding"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"trans/names.nab"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Check Initial",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stratego"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"trans/check.str",cljs.core.cst$kw$from,61,cljs.core.cst$kw$to,62], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline,"Compilation to Java",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stratego"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Name binding"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"trans/generate.str"], null)], null)], null)], null)], null));
});})(vec__25845))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/Spoofax.html",action__25227__auto___25859);

var action__25227__auto___25885 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25860 = params__25228__auto__;
var map__25860__$1 = ((((!((map__25860 == null)))?((((map__25860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25860):map__25860);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25860,map__25860__$1){
return (function (){
return metadocs.pages.perspective.page("application",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__25860,map__25860__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25862 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25862){
return (function (){
return metadocs.pages.perspective.page("application",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__25862))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/perspectives/application.html",action__25227__auto___25885);


var action__25227__auto___25886 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25865 = params__25228__auto__;
var map__25865__$1 = ((((!((map__25865 == null)))?((((map__25865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25865):map__25865);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25865,map__25865__$1){
return (function (){
return metadocs.pages.perspective.page("implementation",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"javaInfluentInternal"),"EMFXMI"),"HaskellQuasiQuotation"),"pythonExternal"),"EMFXtext"),"javaFluentInternal"),"pythonInternal"),"javaExternal"),"EMFSirius"),"Scala embedded"));
});})(map__25865,map__25865__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25867 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25867){
return (function (){
return metadocs.pages.perspective.page("implementation",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"javaInfluentInternal"),"EMFXMI"),"HaskellQuasiQuotation"),"pythonExternal"),"EMFXtext"),"javaFluentInternal"),"pythonInternal"),"javaExternal"),"EMFSirius"),"Scala embedded"));
});})(vec__25867))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/perspectives/implementation.html",action__25227__auto___25886);


var action__25227__auto___25887 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25870 = params__25228__auto__;
var map__25870__$1 = ((((!((map__25870 == null)))?((((map__25870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25870):map__25870);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25870,map__25870__$1){
return (function (){
return metadocs.pages.perspective.page("capture",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"MPS"),"EMFSirius"));
});})(map__25870,map__25870__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25872 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25872){
return (function (){
return metadocs.pages.perspective.page("capture",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"MPS"),"EMFSirius"));
});})(vec__25872))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/perspectives/capture.html",action__25227__auto___25887);


var action__25227__auto___25888 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25875 = params__25228__auto__;
var map__25875__$1 = ((((!((map__25875 == null)))?((((map__25875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25875):map__25875);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25875,map__25875__$1){
return (function (){
return metadocs.pages.perspective.page("data",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"javaInfluentInternal"),"EMFXMI"),"HaskellQuasiQuotation"),"MPS"),"pythonExternal"),"EMFXtext"),"javaFluentInternal"),"pythonInternal"),"javaExternal"),"EMFSirius"),"Scala embedded"));
});})(map__25875,map__25875__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25877 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25877){
return (function (){
return metadocs.pages.perspective.page("data",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"javaInfluentInternal"),"EMFXMI"),"HaskellQuasiQuotation"),"MPS"),"pythonExternal"),"EMFXtext"),"javaFluentInternal"),"pythonInternal"),"javaExternal"),"EMFSirius"),"Scala embedded"));
});})(vec__25877))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/perspectives/data.html",action__25227__auto___25888);


var action__25227__auto___25889 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25880 = params__25228__auto__;
var map__25880__$1 = ((((!((map__25880 == null)))?((((map__25880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25880):map__25880);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25880,map__25880__$1){
return (function (){
return metadocs.pages.perspective.page("test",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"pythonExternal"),"javaFluentInternal"),"pythonInternal"),"javaExternal"));
});})(map__25880,map__25880__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25882 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25882){
return (function (){
return metadocs.pages.perspective.page("test",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"pythonExternal"),"javaFluentInternal"),"pythonInternal"),"javaExternal"));
});})(vec__25882))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/perspectives/test.html",action__25227__auto___25889);

var action__25227__auto___26015 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25890 = params__25228__auto__;
var map__25890__$1 = ((((!((map__25890 == null)))?((((map__25890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25890):map__25890);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25890,map__25890__$1){
return (function (){
return metadocs.pages.feature.page("Model projection",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(map__25890,map__25890__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25892 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25892){
return (function (){
return metadocs.pages.feature.page("Model projection",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(vec__25892))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Model projection.html",action__25227__auto___26015);


var action__25227__auto___26016 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25895 = params__25228__auto__;
var map__25895__$1 = ((((!((map__25895 == null)))?((((map__25895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25895):map__25895);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25895,map__25895__$1){
return (function (){
return metadocs.pages.feature.page("Staging",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"Scala embedded"));
});})(map__25895,map__25895__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25897 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25897){
return (function (){
return metadocs.pages.feature.page("Staging",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"Scala embedded"));
});})(vec__25897))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Staging.html",action__25227__auto___26016);


var action__25227__auto___26017 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25900 = params__25228__auto__;
var map__25900__$1 = ((((!((map__25900 == null)))?((((map__25900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25900):map__25900);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25900,map__25900__$1){
return (function (){
return metadocs.pages.feature.page("Text-to-CST",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(map__25900,map__25900__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25902 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25902){
return (function (){
return metadocs.pages.feature.page("Text-to-CST",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(vec__25902))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Text-to-CST.html",action__25227__auto___26017);


var action__25227__auto___26018 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25905 = params__25228__auto__;
var map__25905__$1 = ((((!((map__25905 == null)))?((((map__25905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25905):map__25905);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25905,map__25905__$1){
return (function (){
return metadocs.pages.feature.page("Interpretation",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaFluentInternal"),"pythonInternal"));
});})(map__25905,map__25905__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25907 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25907){
return (function (){
return metadocs.pages.feature.page("Interpretation",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaFluentInternal"),"pythonInternal"));
});})(vec__25907))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Interpretation.html",action__25227__auto___26018);


var action__25227__auto___26019 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25910 = params__25228__auto__;
var map__25910__$1 = ((((!((map__25910 == null)))?((((map__25910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25910):map__25910);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25910,map__25910__$1){
return (function (){
return metadocs.pages.feature.page("Abstraction",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(map__25910,map__25910__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25912 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25912){
return (function (){
return metadocs.pages.feature.page("Abstraction",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(vec__25912))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Abstraction.html",action__25227__auto___26019);


var action__25227__auto___26020 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25915 = params__25228__auto__;
var map__25915__$1 = ((((!((map__25915 == null)))?((((map__25915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25915):map__25915);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25915,map__25915__$1){
return (function (){
return metadocs.pages.feature.page("Run-time system?",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"Scala embedded"));
});})(map__25915,map__25915__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25917 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25917){
return (function (){
return metadocs.pages.feature.page("Run-time system?",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"Scala embedded"));
});})(vec__25917))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Run-time system?.html",action__25227__auto___26020);


var action__25227__auto___26021 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25920 = params__25228__auto__;
var map__25920__$1 = ((((!((map__25920 == null)))?((((map__25920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25920):map__25920);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25920,map__25920__$1){
return (function (){
return metadocs.pages.feature.page("API",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXMI"),"pythonExternal"),"javaFluentInternal"),"pythonInternal"));
});})(map__25920,map__25920__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25922 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25922){
return (function (){
return metadocs.pages.feature.page("API",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXMI"),"pythonExternal"),"javaFluentInternal"),"pythonInternal"));
});})(vec__25922))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/API.html",action__25227__auto___26021);


var action__25227__auto___26022 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25925 = params__25228__auto__;
var map__25925__$1 = ((((!((map__25925 == null)))?((((map__25925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25925):map__25925);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25925,map__25925__$1){
return (function (){
return metadocs.pages.feature.page("Resolution",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFXtext"));
});})(map__25925,map__25925__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25927 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25927){
return (function (){
return metadocs.pages.feature.page("Resolution",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFXtext"));
});})(vec__25927))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Resolution.html",action__25227__auto___26022);


var action__25227__auto___26023 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25930 = params__25228__auto__;
var map__25930__$1 = ((((!((map__25930 == null)))?((((map__25930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25930):map__25930);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25930,map__25930__$1){
return (function (){
return metadocs.pages.feature.page("Textual syntax",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"EMFXtext"));
});})(map__25930,map__25930__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25932 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25932){
return (function (){
return metadocs.pages.feature.page("Textual syntax",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"EMFXtext"));
});})(vec__25932))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Textual syntax.html",action__25227__auto___26023);


var action__25227__auto___26024 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25935 = params__25228__auto__;
var map__25935__$1 = ((((!((map__25935 == null)))?((((map__25935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25935):map__25935);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25935,map__25935__$1){
return (function (){
return metadocs.pages.feature.page("Scanning",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"pythonExternal"),"EMFXtext"),"javaExternal"));
});})(map__25935,map__25935__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25937 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25937){
return (function (){
return metadocs.pages.feature.page("Scanning",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"pythonExternal"),"EMFXtext"),"javaExternal"));
});})(vec__25937))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Scanning.html",action__25227__auto___26024);


var action__25227__auto___26025 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25940 = params__25228__auto__;
var map__25940__$1 = ((((!((map__25940 == null)))?((((map__25940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25940):map__25940);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25940,map__25940__$1){
return (function (){
return metadocs.pages.feature.page("Text-to-AST",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"pythonExternal"),"javaExternal"),"Scala embedded"));
});})(map__25940,map__25940__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25942 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25942){
return (function (){
return metadocs.pages.feature.page("Text-to-AST",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"pythonExternal"),"javaExternal"),"Scala embedded"));
});})(vec__25942))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Text-to-AST.html",action__25227__auto___26025);


var action__25227__auto___26026 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25945 = params__25228__auto__;
var map__25945__$1 = ((((!((map__25945 == null)))?((((map__25945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25945):map__25945);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25945,map__25945__$1){
return (function (){
return metadocs.pages.feature.page("Semantic domain",cljs.core._conj(cljs.core.List.EMPTY,"javaFluentInternal"));
});})(map__25945,map__25945__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25947 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25947){
return (function (){
return metadocs.pages.feature.page("Semantic domain",cljs.core._conj(cljs.core.List.EMPTY,"javaFluentInternal"));
});})(vec__25947))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Semantic domain.html",action__25227__auto___26026);


var action__25227__auto___26027 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25950 = params__25228__auto__;
var map__25950__$1 = ((((!((map__25950 == null)))?((((map__25950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25950):map__25950);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25950,map__25950__$1){
return (function (){
return metadocs.pages.feature.page("Text-to-ASG",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__25950,map__25950__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25952 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25952){
return (function (){
return metadocs.pages.feature.page("Text-to-ASG",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__25952))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Text-to-ASG.html",action__25227__auto___26027);


var action__25227__auto___26028 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25955 = params__25228__auto__;
var map__25955__$1 = ((((!((map__25955 == null)))?((((map__25955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25955):map__25955);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25955,map__25955__$1){
return (function (){
return metadocs.pages.feature.page("Serialization",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"pythonExternal"));
});})(map__25955,map__25955__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25957 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25957){
return (function (){
return metadocs.pages.feature.page("Serialization",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"pythonExternal"));
});})(vec__25957))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Serialization.html",action__25227__auto___26028);


var action__25227__auto___26029 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25960 = params__25228__auto__;
var map__25960__$1 = ((((!((map__25960 == null)))?((((map__25960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25960):map__25960);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25960,map__25960__$1){
return (function (){
return metadocs.pages.feature.page("Analysis",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"EMFXMI"),"HaskellQuasiQuotation"),"MPS"),"EMFXtext"),"pythonInternal"),"Scala embedded"));
});})(map__25960,map__25960__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25962 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25962){
return (function (){
return metadocs.pages.feature.page("Analysis",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"EMFXMI"),"HaskellQuasiQuotation"),"MPS"),"EMFXtext"),"pythonInternal"),"Scala embedded"));
});})(vec__25962))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Analysis.html",action__25227__auto___26029);


var action__25227__auto___26030 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25965 = params__25228__auto__;
var map__25965__$1 = ((((!((map__25965 == null)))?((((map__25965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25965):map__25965);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25965,map__25965__$1){
return (function (){
return metadocs.pages.feature.page("ASG",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFXtext"),"EMFSirius"));
});})(map__25965,map__25965__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25967 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25967){
return (function (){
return metadocs.pages.feature.page("ASG",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFXtext"),"EMFSirius"));
});})(vec__25967))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/ASG.html",action__25227__auto___26030);


var action__25227__auto___26031 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25970 = params__25228__auto__;
var map__25970__$1 = ((((!((map__25970 == null)))?((((map__25970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25970):map__25970);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25970,map__25970__$1){
return (function (){
return metadocs.pages.feature.page("Projectional Syntax",cljs.core._conj(cljs.core.List.EMPTY,"MPS"));
});})(map__25970,map__25970__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25972 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25972){
return (function (){
return metadocs.pages.feature.page("Projectional Syntax",cljs.core._conj(cljs.core.List.EMPTY,"MPS"));
});})(vec__25972))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Projectional Syntax.html",action__25227__auto___26031);


var action__25227__auto___26032 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25975 = params__25228__auto__;
var map__25975__$1 = ((((!((map__25975 == null)))?((((map__25975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25975):map__25975);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25975,map__25975__$1){
return (function (){
return metadocs.pages.feature.page("Piggyback",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"HaskellQuasiQuotation"),"EMFXtext"),"Scala embedded"));
});})(map__25975,map__25975__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25977 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25977){
return (function (){
return metadocs.pages.feature.page("Piggyback",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"HaskellQuasiQuotation"),"EMFXtext"),"Scala embedded"));
});})(vec__25977))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Piggyback.html",action__25227__auto___26032);


var action__25227__auto___26033 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25980 = params__25228__auto__;
var map__25980__$1 = ((((!((map__25980 == null)))?((((map__25980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25980):map__25980);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25980,map__25980__$1){
return (function (){
return metadocs.pages.feature.page("AST",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"javaInfluentInternal"),"EMFXMI"),"HaskellQuasiQuotation"),"MPS"),"pythonExternal"),"pythonInternal"),"javaExternal"),"Scala embedded"));
});})(map__25980,map__25980__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25982 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25982){
return (function (){
return metadocs.pages.feature.page("AST",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"javaInfluentInternal"),"EMFXMI"),"HaskellQuasiQuotation"),"MPS"),"pythonExternal"),"pythonInternal"),"javaExternal"),"Scala embedded"));
});})(vec__25982))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/AST.html",action__25227__auto___26033);


var action__25227__auto___26034 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25985 = params__25228__auto__;
var map__25985__$1 = ((((!((map__25985 == null)))?((((map__25985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25985):map__25985);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25985,map__25985__$1){
return (function (){
return metadocs.pages.feature.page("Concrete syntax",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(map__25985,map__25985__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25987 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25987){
return (function (){
return metadocs.pages.feature.page("Concrete syntax",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(vec__25987))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Concrete syntax.html",action__25227__auto___26034);


var action__25227__auto___26035 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25990 = params__25228__auto__;
var map__25990__$1 = ((((!((map__25990 == null)))?((((map__25990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25990):map__25990);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25990,map__25990__$1){
return (function (){
return metadocs.pages.feature.page("Parsing",cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"));
});})(map__25990,map__25990__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25992 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25992){
return (function (){
return metadocs.pages.feature.page("Parsing",cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"));
});})(vec__25992))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Parsing.html",action__25227__auto___26035);


var action__25227__auto___26036 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__25995 = params__25228__auto__;
var map__25995__$1 = ((((!((map__25995 == null)))?((((map__25995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25995):map__25995);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25995,map__25995__$1){
return (function (){
return metadocs.pages.feature.page("Graph rendering",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"),"pythonInternal"));
});})(map__25995,map__25995__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__25997 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25997){
return (function (){
return metadocs.pages.feature.page("Graph rendering",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"),"pythonInternal"));
});})(vec__25997))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Graph rendering.html",action__25227__auto___26036);


var action__25227__auto___26037 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26000 = params__25228__auto__;
var map__26000__$1 = ((((!((map__26000 == null)))?((((map__26000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26000):map__26000);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26000,map__26000__$1){
return (function (){
return metadocs.pages.feature.page("Compilation",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"javaInfluentInternal"),"MPS"),"EMFXtext"),"pythonInternal"));
});})(map__26000,map__26000__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26002 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26002){
return (function (){
return metadocs.pages.feature.page("Compilation",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"javaInfluentInternal"),"MPS"),"EMFXtext"),"pythonInternal"));
});})(vec__26002))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Compilation.html",action__25227__auto___26037);


var action__25227__auto___26038 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26005 = params__25228__auto__;
var map__26005__$1 = ((((!((map__26005 == null)))?((((map__26005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26005):map__26005);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26005,map__26005__$1){
return (function (){
return metadocs.pages.feature.page("Graph editing",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(map__26005,map__26005__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26007 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26007){
return (function (){
return metadocs.pages.feature.page("Graph editing",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(vec__26007))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Graph editing.html",action__25227__auto___26038);


var action__25227__auto___26039 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26010 = params__25228__auto__;
var map__26010__$1 = ((((!((map__26010 == null)))?((((map__26010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26010):map__26010);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26010,map__26010__$1){
return (function (){
return metadocs.pages.feature.page("Remove Creole^+-",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26010,map__26010__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26012 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26012){
return (function (){
return metadocs.pages.feature.page("Remove Creole^+-",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26012))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Remove Creole^+-.html",action__25227__auto___26039);

var action__25227__auto___26135 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26040 = params__25228__auto__;
var map__26040__$1 = ((((!((map__26040 == null)))?((((map__26040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26040):map__26040);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26040,map__26040__$1){
return (function (){
return metadocs.pages.language.page("DOT",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(map__26040,map__26040__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26042 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26042){
return (function (){
return metadocs.pages.language.page("DOT",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(vec__26042))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/DOT.html",action__25227__auto___26135);


var action__25227__auto___26136 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26045 = params__25228__auto__;
var map__26045__$1 = ((((!((map__26045 == null)))?((((map__26045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26045):map__26045);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26045,map__26045__$1){
return (function (){
return metadocs.pages.language.page("NABL",cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"));
});})(map__26045,map__26045__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26047 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26047){
return (function (){
return metadocs.pages.language.page("NABL",cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"));
});})(vec__26047))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/NABL.html",action__25227__auto___26136);


var action__25227__auto___26137 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26050 = params__25228__auto__;
var map__26050__$1 = ((((!((map__26050 == null)))?((((map__26050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26050):map__26050);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26050,map__26050__$1){
return (function (){
return metadocs.pages.language.page("jinja2",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(map__26050,map__26050__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26052 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26052){
return (function (){
return metadocs.pages.language.page("jinja2",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(vec__26052))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/jinja2.html",action__25227__auto___26137);


var action__25227__auto___26138 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26055 = params__25228__auto__;
var map__26055__$1 = ((((!((map__26055 == null)))?((((map__26055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26055):map__26055);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26055,map__26055__$1){
return (function (){
return metadocs.pages.language.page("StringTemplate",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(map__26055,map__26055__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26057 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26057){
return (function (){
return metadocs.pages.language.page("StringTemplate",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(vec__26057))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/StringTemplate.html",action__25227__auto___26138);


var action__25227__auto___26139 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26060 = params__25228__auto__;
var map__26060__$1 = ((((!((map__26060 == null)))?((((map__26060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26060):map__26060);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26060,map__26060__$1){
return (function (){
return metadocs.pages.language.page("ANTLR4",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(map__26060,map__26060__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26062 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26062){
return (function (){
return metadocs.pages.language.page("ANTLR4",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(vec__26062))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/ANTLR4.html",action__25227__auto___26139);


var action__25227__auto___26140 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26065 = params__25228__auto__;
var map__26065__$1 = ((((!((map__26065 == null)))?((((map__26065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26065):map__26065);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26065,map__26065__$1){
return (function (){
return metadocs.pages.language.page("Python",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"pythonInternal"));
});})(map__26065,map__26065__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26067 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26067){
return (function (){
return metadocs.pages.language.page("Python",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"pythonInternal"));
});})(vec__26067))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Python.html",action__25227__auto___26140);


var action__25227__auto___26141 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26070 = params__25228__auto__;
var map__26070__$1 = ((((!((map__26070 == null)))?((((map__26070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26070):map__26070);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26070,map__26070__$1){
return (function (){
return metadocs.pages.language.page("XMI",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26070,map__26070__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26072 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26072){
return (function (){
return metadocs.pages.language.page("XMI",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26072))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/XMI.html",action__25227__auto___26141);


var action__25227__auto___26142 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26075 = params__25228__auto__;
var map__26075__$1 = ((((!((map__26075 == null)))?((((map__26075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26075):map__26075);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26075,map__26075__$1){
return (function (){
return metadocs.pages.language.page("Xtend",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__26075,map__26075__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26077 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26077){
return (function (){
return metadocs.pages.language.page("Xtend",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__26077))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Xtend.html",action__25227__auto___26142);


var action__25227__auto___26143 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26080 = params__25228__auto__;
var map__26080__$1 = ((((!((map__26080 == null)))?((((map__26080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26080):map__26080);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26080,map__26080__$1){
return (function (){
return metadocs.pages.language.page("Scala",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26080,map__26080__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26082 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26082){
return (function (){
return metadocs.pages.language.page("Scala",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26082))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Scala.html",action__25227__auto___26143);


var action__25227__auto___26144 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26085 = params__25228__auto__;
var map__26085__$1 = ((((!((map__26085 == null)))?((((map__26085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26085):map__26085);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26085,map__26085__$1){
return (function (){
return metadocs.pages.language.page("C",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(map__26085,map__26085__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26087 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26087){
return (function (){
return metadocs.pages.language.page("C",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(vec__26087))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/C.html",action__25227__auto___26144);


var action__25227__auto___26145 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26090 = params__25228__auto__;
var map__26090__$1 = ((((!((map__26090 == null)))?((((map__26090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26090):map__26090);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26090,map__26090__$1){
return (function (){
return metadocs.pages.language.page("JSON",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"pythonInternal"));
});})(map__26090,map__26090__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26092 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26092){
return (function (){
return metadocs.pages.language.page("JSON",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"pythonInternal"));
});})(vec__26092))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/JSON.html",action__25227__auto___26145);


var action__25227__auto___26146 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26095 = params__25228__auto__;
var map__26095__$1 = ((((!((map__26095 == null)))?((((map__26095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26095):map__26095);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26095,map__26095__$1){
return (function (){
return metadocs.pages.language.page("Stratego",cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"));
});})(map__26095,map__26095__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26097 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26097){
return (function (){
return metadocs.pages.language.page("Stratego",cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"));
});})(vec__26097))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Stratego.html",action__25227__auto___26146);


var action__25227__auto___26147 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26100 = params__25228__auto__;
var map__26100__$1 = ((((!((map__26100 == null)))?((((map__26100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26100):map__26100);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26100,map__26100__$1){
return (function (){
return metadocs.pages.language.page("Haskell",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26100,map__26100__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26102 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26102){
return (function (){
return metadocs.pages.language.page("Haskell",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26102))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Haskell.html",action__25227__auto___26147);


var action__25227__auto___26148 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26105 = params__25228__auto__;
var map__26105__$1 = ((((!((map__26105 == null)))?((((map__26105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26105):map__26105);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26105,map__26105__$1){
return (function (){
return metadocs.pages.language.page("Ecore",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(map__26105,map__26105__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26107 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26107){
return (function (){
return metadocs.pages.language.page("Ecore",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(vec__26107))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Ecore.html",action__25227__auto___26148);


var action__25227__auto___26149 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26110 = params__25228__auto__;
var map__26110__$1 = ((((!((map__26110 == null)))?((((map__26110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26110):map__26110);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26110,map__26110__$1){
return (function (){
return metadocs.pages.language.page("SDF3",cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"));
});})(map__26110,map__26110__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26112 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26112){
return (function (){
return metadocs.pages.language.page("SDF3",cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"));
});})(vec__26112))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/SDF3.html",action__25227__auto___26149);


var action__25227__auto___26150 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26115 = params__25228__auto__;
var map__26115__$1 = ((((!((map__26115 == null)))?((((map__26115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26115):map__26115);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26115,map__26115__$1){
return (function (){
return metadocs.pages.language.page("Xtext",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__26115,map__26115__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26117 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26117){
return (function (){
return metadocs.pages.language.page("Xtext",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__26117))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Xtext.html",action__25227__auto___26150);


var action__25227__auto___26151 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26120 = params__25228__auto__;
var map__26120__$1 = ((((!((map__26120 == null)))?((((map__26120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26120):map__26120);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26120,map__26120__$1){
return (function (){
return metadocs.pages.language.page("Java",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXMI"),"EMFXtext"),"javaFluentInternal"),"javaExternal"));
});})(map__26120,map__26120__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26122 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26122){
return (function (){
return metadocs.pages.language.page("Java",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXMI"),"EMFXtext"),"javaFluentInternal"),"javaExternal"));
});})(vec__26122))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Java.html",action__25227__auto___26151);


var action__25227__auto___26152 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26125 = params__25228__auto__;
var map__26125__$1 = ((((!((map__26125 == null)))?((((map__26125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26125):map__26125);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26125,map__26125__$1){
return (function (){
return metadocs.pages.language.page("Sirius viewpoint specification",cljs.core._conj(cljs.core.List.EMPTY,"EMFSirius"));
});})(map__26125,map__26125__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26127 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26127){
return (function (){
return metadocs.pages.language.page("Sirius viewpoint specification",cljs.core._conj(cljs.core.List.EMPTY,"EMFSirius"));
});})(vec__26127))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Sirius viewpoint specification.html",action__25227__auto___26152);


var action__25227__auto___26153 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26130 = params__25228__auto__;
var map__26130__$1 = ((((!((map__26130 == null)))?((((map__26130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26130):map__26130);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26130,map__26130__$1){
return (function (){
return metadocs.pages.language.page("FSML",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"EMFXtext"));
});})(map__26130,map__26130__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26132 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26132){
return (function (){
return metadocs.pages.language.page("FSML",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"EMFXtext"));
});})(vec__26132))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/FSML.html",action__25227__auto___26153);

var action__25227__auto___26229 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26154 = params__25228__auto__;
var map__26154__$1 = ((((!((map__26154 == null)))?((((map__26154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26154):map__26154);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26154,map__26154__$1){
return (function (){
return metadocs.pages.technology.page("jinja2",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(map__26154,map__26154__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26156 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26156){
return (function (){
return metadocs.pages.technology.page("jinja2",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(vec__26156))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/jinja2.html",action__25227__auto___26229);


var action__25227__auto___26230 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26159 = params__25228__auto__;
var map__26159__$1 = ((((!((map__26159 == null)))?((((map__26159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26159):map__26159);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26159,map__26159__$1){
return (function (){
return metadocs.pages.technology.page("ANTLR3",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__26159,map__26159__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26161 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26161){
return (function (){
return metadocs.pages.technology.page("ANTLR3",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__26161))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/ANTLR3.html",action__25227__auto___26230);


var action__25227__auto___26231 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26164 = params__25228__auto__;
var map__26164__$1 = ((((!((map__26164 == null)))?((((map__26164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26164):map__26164);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26164,map__26164__$1){
return (function (){
return metadocs.pages.technology.page("StringTemplate",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(map__26164,map__26164__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26166 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26166){
return (function (){
return metadocs.pages.technology.page("StringTemplate",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(vec__26166))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/StringTemplate.html",action__25227__auto___26231);


var action__25227__auto___26232 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26169 = params__25228__auto__;
var map__26169__$1 = ((((!((map__26169 == null)))?((((map__26169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26169):map__26169);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26169,map__26169__$1){
return (function (){
return metadocs.pages.technology.page("ANTLR4",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(map__26169,map__26169__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26171 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26171){
return (function (){
return metadocs.pages.technology.page("ANTLR4",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(vec__26171))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/ANTLR4.html",action__25227__auto___26232);


var action__25227__auto___26233 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26174 = params__25228__auto__;
var map__26174__$1 = ((((!((map__26174 == null)))?((((map__26174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26174.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26174):map__26174);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26174,map__26174__$1){
return (function (){
return metadocs.pages.technology.page("JFace",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26174,map__26174__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26176 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26176){
return (function (){
return metadocs.pages.technology.page("JFace",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26176))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/JFace.html",action__25227__auto___26233);


var action__25227__auto___26234 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26179 = params__25228__auto__;
var map__26179__$1 = ((((!((map__26179 == null)))?((((map__26179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26179):map__26179);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26179,map__26179__$1){
return (function (){
return metadocs.pages.technology.page("SWT",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26179,map__26179__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26181 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26181){
return (function (){
return metadocs.pages.technology.page("SWT",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26181))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/SWT.html",action__25227__auto___26234);


var action__25227__auto___26235 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26184 = params__25228__auto__;
var map__26184__$1 = ((((!((map__26184 == null)))?((((map__26184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26184):map__26184);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26184,map__26184__$1){
return (function (){
return metadocs.pages.technology.page("Parsec",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26184,map__26184__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26186 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26186){
return (function (){
return metadocs.pages.technology.page("Parsec",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26186))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/Parsec.html",action__25227__auto___26235);


var action__25227__auto___26236 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26189 = params__25228__auto__;
var map__26189__$1 = ((((!((map__26189 == null)))?((((map__26189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26189):map__26189);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26189,map__26189__$1){
return (function (){
return metadocs.pages.technology.page("MPS",cljs.core._conj(cljs.core.List.EMPTY,"MPS"));
});})(map__26189,map__26189__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26191 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26191){
return (function (){
return metadocs.pages.technology.page("MPS",cljs.core._conj(cljs.core.List.EMPTY,"MPS"));
});})(vec__26191))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/MPS.html",action__25227__auto___26236);


var action__25227__auto___26237 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26194 = params__25228__auto__;
var map__26194__$1 = ((((!((map__26194 == null)))?((((map__26194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26194):map__26194);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26194,map__26194__$1){
return (function (){
return metadocs.pages.technology.page("SAX",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26194,map__26194__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26196 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26196){
return (function (){
return metadocs.pages.technology.page("SAX",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26196))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/SAX.html",action__25227__auto___26237);


var action__25227__auto___26238 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26199 = params__25228__auto__;
var map__26199__$1 = ((((!((map__26199 == null)))?((((map__26199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26199):map__26199);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26199,map__26199__$1){
return (function (){
return metadocs.pages.technology.page("Xtext",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__26199,map__26199__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26201 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26201){
return (function (){
return metadocs.pages.technology.page("Xtext",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__26201))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/Xtext.html",action__25227__auto___26238);


var action__25227__auto___26239 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26204 = params__25228__auto__;
var map__26204__$1 = ((((!((map__26204 == null)))?((((map__26204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26204):map__26204);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26204,map__26204__$1){
return (function (){
return metadocs.pages.technology.page("Eclipse",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26204,map__26204__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26206 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26206){
return (function (){
return metadocs.pages.technology.page("Eclipse",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26206))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/Eclipse.html",action__25227__auto___26239);


var action__25227__auto___26240 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26209 = params__25228__auto__;
var map__26209__$1 = ((((!((map__26209 == null)))?((((map__26209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26209):map__26209);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26209,map__26209__$1){
return (function (){
return metadocs.pages.technology.page("Template Haskell",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26209,map__26209__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26211 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26211){
return (function (){
return metadocs.pages.technology.page("Template Haskell",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26211))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/Template Haskell.html",action__25227__auto___26240);


var action__25227__auto___26241 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26214 = params__25228__auto__;
var map__26214__$1 = ((((!((map__26214 == null)))?((((map__26214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26214):map__26214);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26214,map__26214__$1){
return (function (){
return metadocs.pages.technology.page("Graphviz",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(map__26214,map__26214__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26216 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26216){
return (function (){
return metadocs.pages.technology.page("Graphviz",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(vec__26216))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/Graphviz.html",action__25227__auto___26241);


var action__25227__auto___26242 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26219 = params__25228__auto__;
var map__26219__$1 = ((((!((map__26219 == null)))?((((map__26219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26219):map__26219);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26219,map__26219__$1){
return (function (){
return metadocs.pages.technology.page("scalameta",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26219,map__26219__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26221 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26221){
return (function (){
return metadocs.pages.technology.page("scalameta",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26221))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/scalameta.html",action__25227__auto___26242);


var action__25227__auto___26243 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26224 = params__25228__auto__;
var map__26224__$1 = ((((!((map__26224 == null)))?((((map__26224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26224):map__26224);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26224,map__26224__$1){
return (function (){
return metadocs.pages.technology.page("JUnit",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaFluentInternal"),"javaExternal"));
});})(map__26224,map__26224__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26226 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26226){
return (function (){
return metadocs.pages.technology.page("JUnit",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaFluentInternal"),"javaExternal"));
});})(vec__26226))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/JUnit.html",action__25227__auto___26243);

var action__25227__auto___26479 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26244 = params__25228__auto__;
var map__26244__$1 = ((((!((map__26244 == null)))?((((map__26244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26244):map__26244);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26244,map__26244__$1){
return (function (){
return metadocs.pages.concept.page("Persistence",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26244,map__26244__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26246 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26246){
return (function (){
return metadocs.pages.concept.page("Persistence",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26246))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Persistence.html",action__25227__auto___26479);


var action__25227__auto___26480 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26249 = params__25228__auto__;
var map__26249__$1 = ((((!((map__26249 == null)))?((((map__26249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26249):map__26249);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26249,map__26249__$1){
return (function (){
return metadocs.pages.concept.page("Structured Editor",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26249,map__26249__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26251 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26251){
return (function (){
return metadocs.pages.concept.page("Structured Editor",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26251))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Structured Editor.html",action__25227__auto___26480);


var action__25227__auto___26481 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26254 = params__25228__auto__;
var map__26254__$1 = ((((!((map__26254 == null)))?((((map__26254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26254):map__26254);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26254,map__26254__$1){
return (function (){
return metadocs.pages.concept.page("Reference relationship",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__26254,map__26254__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26256 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26256){
return (function (){
return metadocs.pages.concept.page("Reference relationship",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__26256))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Reference relationship.html",action__25227__auto___26481);


var action__25227__auto___26482 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26259 = params__25228__auto__;
var map__26259__$1 = ((((!((map__26259 == null)))?((((map__26259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26259):map__26259);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26259,map__26259__$1){
return (function (){
return metadocs.pages.concept.page("Static annotation",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26259,map__26259__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26261 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26261){
return (function (){
return metadocs.pages.concept.page("Static annotation",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26261))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Static annotation.html",action__25227__auto___26482);


var action__25227__auto___26483 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26264 = params__25228__auto__;
var map__26264__$1 = ((((!((map__26264 == null)))?((((map__26264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26264):map__26264);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26264,map__26264__$1){
return (function (){
return metadocs.pages.concept.page("Package",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26264,map__26264__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26266 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26266){
return (function (){
return metadocs.pages.concept.page("Package",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26266))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Package.html",action__25227__auto___26483);


var action__25227__auto___26484 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26269 = params__25228__auto__;
var map__26269__$1 = ((((!((map__26269 == null)))?((((map__26269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26269):map__26269);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26269,map__26269__$1){
return (function (){
return metadocs.pages.concept.page("Name binding",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"EMFXtext"));
});})(map__26269,map__26269__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26271 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26271){
return (function (){
return metadocs.pages.concept.page("Name binding",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"EMFXtext"));
});})(vec__26271))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Name binding.html",action__25227__auto___26484);


var action__25227__auto___26485 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26274 = params__25228__auto__;
var map__26274__$1 = ((((!((map__26274 == null)))?((((map__26274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26274):map__26274);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26274,map__26274__$1){
return (function (){
return metadocs.pages.concept.page("Implicit conversion",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26274,map__26274__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26276 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26276){
return (function (){
return metadocs.pages.concept.page("Implicit conversion",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26276))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Implicit conversion.html",action__25227__auto___26485);


var action__25227__auto___26486 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26279 = params__25228__auto__;
var map__26279__$1 = ((((!((map__26279 == null)))?((((map__26279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26279):map__26279);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26279,map__26279__$1){
return (function (){
return metadocs.pages.concept.page("IDE",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26279,map__26279__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26281 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26281){
return (function (){
return metadocs.pages.concept.page("IDE",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26281))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/IDE.html",action__25227__auto___26486);


var action__25227__auto___26487 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26284 = params__25228__auto__;
var map__26284__$1 = ((((!((map__26284 == null)))?((((map__26284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26284):map__26284);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26284,map__26284__$1){
return (function (){
return metadocs.pages.concept.page("Fold",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26284,map__26284__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26286 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26286){
return (function (){
return metadocs.pages.concept.page("Fold",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26286))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Fold.html",action__25227__auto___26487);


var action__25227__auto___26488 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26289 = params__25228__auto__;
var map__26289__$1 = ((((!((map__26289 == null)))?((((map__26289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26289):map__26289);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26289,map__26289__$1){
return (function (){
return metadocs.pages.concept.page("Getter",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaExternal"));
});})(map__26289,map__26289__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26291 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26291){
return (function (){
return metadocs.pages.concept.page("Getter",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaExternal"));
});})(vec__26291))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Getter.html",action__25227__auto___26488);


var action__25227__auto___26489 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26294 = params__25228__auto__;
var map__26294__$1 = ((((!((map__26294 == null)))?((((map__26294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26294):map__26294);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26294,map__26294__$1){
return (function (){
return metadocs.pages.concept.page("Template Processing",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(map__26294,map__26294__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26296 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26296){
return (function (){
return metadocs.pages.concept.page("Template Processing",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(vec__26296))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Template Processing.html",action__25227__auto___26489);


var action__25227__auto___26490 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26299 = params__25228__auto__;
var map__26299__$1 = ((((!((map__26299 == null)))?((((map__26299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26299):map__26299);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26299,map__26299__$1){
return (function (){
return metadocs.pages.concept.page("Setter",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaExternal"));
});})(map__26299,map__26299__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26301 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26301){
return (function (){
return metadocs.pages.concept.page("Setter",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaExternal"));
});})(vec__26301))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Setter.html",action__25227__auto___26490);


var action__25227__auto___26491 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26304 = params__25228__auto__;
var map__26304__$1 = ((((!((map__26304 == null)))?((((map__26304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26304):map__26304);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26304,map__26304__$1){
return (function (){
return metadocs.pages.concept.page("Interpolation",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26304,map__26304__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26306 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26306){
return (function (){
return metadocs.pages.concept.page("Interpolation",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26306))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Interpolation.html",action__25227__auto___26491);


var action__25227__auto___26492 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26309 = params__25228__auto__;
var map__26309__$1 = ((((!((map__26309 == null)))?((((map__26309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26309):map__26309);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26309,map__26309__$1){
return (function (){
return metadocs.pages.concept.page("External DSL",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(map__26309,map__26309__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26311 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26311){
return (function (){
return metadocs.pages.concept.page("External DSL",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(vec__26311))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/External DSL.html",action__25227__auto___26492);


var action__25227__auto___26493 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26314 = params__25228__auto__;
var map__26314__$1 = ((((!((map__26314 == null)))?((((map__26314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26314):map__26314);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26314,map__26314__$1){
return (function (){
return metadocs.pages.concept.page("Boilerplate code",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(map__26314,map__26314__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26316 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26316){
return (function (){
return metadocs.pages.concept.page("Boilerplate code",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(vec__26316))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Boilerplate code.html",action__25227__auto___26493);


var action__25227__auto___26494 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26319 = params__25228__auto__;
var map__26319__$1 = ((((!((map__26319 == null)))?((((map__26319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26319):map__26319);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26319,map__26319__$1){
return (function (){
return metadocs.pages.concept.page("Parser",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__26319,map__26319__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26321 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26321){
return (function (){
return metadocs.pages.concept.page("Parser",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__26321))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Parser.html",action__25227__auto___26494);


var action__25227__auto___26495 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26324 = params__25228__auto__;
var map__26324__$1 = ((((!((map__26324 == null)))?((((map__26324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26324):map__26324);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26324,map__26324__$1){
return (function (){
return metadocs.pages.concept.page("Case Class",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26324,map__26324__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26326 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26326){
return (function (){
return metadocs.pages.concept.page("Case Class",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26326))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Case Class.html",action__25227__auto___26495);


var action__25227__auto___26496 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26329 = params__25228__auto__;
var map__26329__$1 = ((((!((map__26329 == null)))?((((map__26329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26329):map__26329);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26329,map__26329__$1){
return (function (){
return metadocs.pages.concept.page("Semantic action",cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"));
});})(map__26329,map__26329__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26331 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26331){
return (function (){
return metadocs.pages.concept.page("Semantic action",cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"));
});})(vec__26331))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Semantic action.html",action__25227__auto___26496);


var action__25227__auto___26497 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26334 = params__25228__auto__;
var map__26334__$1 = ((((!((map__26334 == null)))?((((map__26334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26334):map__26334);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26334,map__26334__$1){
return (function (){
return metadocs.pages.concept.page("Algebraic data type",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26334,map__26334__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26336 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26336){
return (function (){
return metadocs.pages.concept.page("Algebraic data type",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26336))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Algebraic data type.html",action__25227__auto___26497);


var action__25227__auto___26498 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26339 = params__25228__auto__;
var map__26339__$1 = ((((!((map__26339 == null)))?((((map__26339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26339):map__26339);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26339,map__26339__$1){
return (function (){
return metadocs.pages.concept.page("Adapter",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26339,map__26339__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26341 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26341){
return (function (){
return metadocs.pages.concept.page("Adapter",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26341))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Adapter.html",action__25227__auto___26498);


var action__25227__auto___26499 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26344 = params__25228__auto__;
var map__26344__$1 = ((((!((map__26344 == null)))?((((map__26344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26344):map__26344);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26344,map__26344__$1){
return (function (){
return metadocs.pages.concept.page("OO class",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26344,map__26344__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26346 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26346){
return (function (){
return metadocs.pages.concept.page("OO class",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26346))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/OO class.html",action__25227__auto___26499);


var action__25227__auto___26500 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26349 = params__25228__auto__;
var map__26349__$1 = ((((!((map__26349 == null)))?((((map__26349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26349):map__26349);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26349,map__26349__$1){
return (function (){
return metadocs.pages.concept.page("Metamodel",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(map__26349,map__26349__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26351 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26351){
return (function (){
return metadocs.pages.concept.page("Metamodel",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(vec__26351))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Metamodel.html",action__25227__auto___26500);


var action__25227__auto___26501 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26354 = params__25228__auto__;
var map__26354__$1 = ((((!((map__26354 == null)))?((((map__26354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26354):map__26354);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26354,map__26354__$1){
return (function (){
return metadocs.pages.concept.page("Grammar",cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"));
});})(map__26354,map__26354__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26356 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26356){
return (function (){
return metadocs.pages.concept.page("Grammar",cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"));
});})(vec__26356))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Grammar.html",action__25227__auto___26501);


var action__25227__auto___26502 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26359 = params__25228__auto__;
var map__26359__$1 = ((((!((map__26359 == null)))?((((map__26359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26359):map__26359);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26359,map__26359__$1){
return (function (){
return metadocs.pages.concept.page("Functional constructor",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaExternal"));
});})(map__26359,map__26359__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26361 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26361){
return (function (){
return metadocs.pages.concept.page("Functional constructor",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaExternal"));
});})(vec__26361))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Functional constructor.html",action__25227__auto___26502);


var action__25227__auto___26503 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26364 = params__25228__auto__;
var map__26364__$1 = ((((!((map__26364 == null)))?((((map__26364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26364):map__26364);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26364,map__26364__$1){
return (function (){
return metadocs.pages.concept.page("Listener",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(map__26364,map__26364__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26366 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26366){
return (function (){
return metadocs.pages.concept.page("Listener",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(vec__26366))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Listener.html",action__25227__auto___26503);


var action__25227__auto___26504 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26369 = params__25228__auto__;
var map__26369__$1 = ((((!((map__26369 == null)))?((((map__26369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26369):map__26369);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26369,map__26369__$1){
return (function (){
return metadocs.pages.concept.page("Command",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26369,map__26369__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26371 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26371){
return (function (){
return metadocs.pages.concept.page("Command",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26371))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Command.html",action__25227__auto___26504);


var action__25227__auto___26505 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26374 = params__25228__auto__;
var map__26374__$1 = ((((!((map__26374 == null)))?((((map__26374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26374):map__26374);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26374,map__26374__$1){
return (function (){
return metadocs.pages.concept.page("Internal DSL",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(map__26374,map__26374__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26376 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26376){
return (function (){
return metadocs.pages.concept.page("Internal DSL",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(vec__26376))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Internal DSL.html",action__25227__auto___26505);


var action__25227__auto___26506 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26379 = params__25228__auto__;
var map__26379__$1 = ((((!((map__26379 == null)))?((((map__26379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26379):map__26379);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26379,map__26379__$1){
return (function (){
return metadocs.pages.concept.page("URI",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26379,map__26379__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26381 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26381){
return (function (){
return metadocs.pages.concept.page("URI",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26381))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/URI.html",action__25227__auto___26506);


var action__25227__auto___26507 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26384 = params__25228__auto__;
var map__26384__$1 = ((((!((map__26384 == null)))?((((map__26384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26384):map__26384);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26384,map__26384__$1){
return (function (){
return metadocs.pages.concept.page("Currying",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26384,map__26384__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26386 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26386){
return (function (){
return metadocs.pages.concept.page("Currying",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26386))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Currying.html",action__25227__auto___26507);


var action__25227__auto___26508 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26389 = params__25228__auto__;
var map__26389__$1 = ((((!((map__26389 == null)))?((((map__26389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26389):map__26389);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26389,map__26389__$1){
return (function (){
return metadocs.pages.concept.page("Inline Macro",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26389,map__26389__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26391 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26391){
return (function (){
return metadocs.pages.concept.page("Inline Macro",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26391))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Inline Macro.html",action__25227__auto___26508);


var action__25227__auto___26509 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26394 = params__25228__auto__;
var map__26394__$1 = ((((!((map__26394 == null)))?((((map__26394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26394):map__26394);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26394,map__26394__$1){
return (function (){
return metadocs.pages.concept.page("Parser generation",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(map__26394,map__26394__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26396 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26396){
return (function (){
return metadocs.pages.concept.page("Parser generation",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(vec__26396))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Parser generation.html",action__25227__auto___26509);


var action__25227__auto___26510 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26399 = params__25228__auto__;
var map__26399__$1 = ((((!((map__26399 == null)))?((((map__26399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26399):map__26399);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26399,map__26399__$1){
return (function (){
return metadocs.pages.concept.page("Lexer",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26399,map__26399__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26401 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26401){
return (function (){
return metadocs.pages.concept.page("Lexer",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26401))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Lexer.html",action__25227__auto___26510);


var action__25227__auto___26511 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26409 = params__25228__auto__;
var map__26409__$1 = ((((!((map__26409 == null)))?((((map__26409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26409):map__26409);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26409,map__26409__$1){
return (function (){
return metadocs.pages.concept.page("Language Embedding",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26409,map__26409__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26411 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26411){
return (function (){
return metadocs.pages.concept.page("Language Embedding",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26411))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Language Embedding.html",action__25227__auto___26511);


var action__25227__auto___26512 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26414 = params__25228__auto__;
var map__26414__$1 = ((((!((map__26414 == null)))?((((map__26414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26414):map__26414);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26414,map__26414__$1){
return (function (){
return metadocs.pages.concept.page("Structured editor",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26414,map__26414__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26416 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26416){
return (function (){
return metadocs.pages.concept.page("Structured editor",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26416))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Structured editor.html",action__25227__auto___26512);


var action__25227__auto___26513 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26419 = params__25228__auto__;
var map__26419__$1 = ((((!((map__26419 == null)))?((((map__26419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26419):map__26419);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26419,map__26419__$1){
return (function (){
return metadocs.pages.concept.page("Quasi Quotation",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26419,map__26419__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26421 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26421){
return (function (){
return metadocs.pages.concept.page("Quasi Quotation",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26421))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Quasi Quotation.html",action__25227__auto___26513);


var action__25227__auto___26514 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26424 = params__25228__auto__;
var map__26424__$1 = ((((!((map__26424 == null)))?((((map__26424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26424):map__26424);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26424,map__26424__$1){
return (function (){
return metadocs.pages.concept.page("Quasi-quotation",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"Scala embedded"));
});})(map__26424,map__26424__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26426 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26426){
return (function (){
return metadocs.pages.concept.page("Quasi-quotation",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"Scala embedded"));
});})(vec__26426))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Quasi-quotation.html",action__25227__auto___26514);


var action__25227__auto___26515 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26429 = params__25228__auto__;
var map__26429__$1 = ((((!((map__26429 == null)))?((((map__26429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26429):map__26429);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26429,map__26429__$1){
return (function (){
return metadocs.pages.concept.page("Lifting",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26429,map__26429__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26431 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26431){
return (function (){
return metadocs.pages.concept.page("Lifting",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26431))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Lifting.html",action__25227__auto___26515);


var action__25227__auto___26516 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26434 = params__25228__auto__;
var map__26434__$1 = ((((!((map__26434 == null)))?((((map__26434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26434):map__26434);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26434,map__26434__$1){
return (function (){
return metadocs.pages.concept.page("Parser combinator",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26434,map__26434__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26436 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26436){
return (function (){
return metadocs.pages.concept.page("Parser combinator",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26436))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Parser combinator.html",action__25227__auto___26516);


var action__25227__auto___26517 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26439 = params__25228__auto__;
var map__26439__$1 = ((((!((map__26439 == null)))?((((map__26439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26439):map__26439);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26439,map__26439__$1){
return (function (){
return metadocs.pages.concept.page("OO interface",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26439,map__26439__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26441 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26441){
return (function (){
return metadocs.pages.concept.page("OO interface",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26441))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/OO interface.html",action__25227__auto___26517);


var action__25227__auto___26518 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26444 = params__25228__auto__;
var map__26444__$1 = ((((!((map__26444 == null)))?((((map__26444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26444):map__26444);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26444,map__26444__$1){
return (function (){
return metadocs.pages.concept.page("Template processing",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXtext"),"pythonInternal"));
});})(map__26444,map__26444__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26446 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26446){
return (function (){
return metadocs.pages.concept.page("Template processing",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXtext"),"pythonInternal"));
});})(vec__26446))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Template processing.html",action__25227__auto___26518);


var action__25227__auto___26519 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26449 = params__25228__auto__;
var map__26449__$1 = ((((!((map__26449 == null)))?((((map__26449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26449):map__26449);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26449,map__26449__$1){
return (function (){
return metadocs.pages.concept.page("Fluent API",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaFluentInternal"),"pythonInternal"));
});})(map__26449,map__26449__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26451 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26451){
return (function (){
return metadocs.pages.concept.page("Fluent API",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaFluentInternal"),"pythonInternal"));
});})(vec__26451))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Fluent API.html",action__25227__auto___26519);


var action__25227__auto___26520 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26454 = params__25228__auto__;
var map__26454__$1 = ((((!((map__26454 == null)))?((((map__26454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26454):map__26454);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26454,map__26454__$1){
return (function (){
return metadocs.pages.concept.page("Factory",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26454,map__26454__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26456 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26456){
return (function (){
return metadocs.pages.concept.page("Factory",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26456))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Factory.html",action__25227__auto___26520);


var action__25227__auto___26521 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26459 = params__25228__auto__;
var map__26459__$1 = ((((!((map__26459 == null)))?((((map__26459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26459):map__26459);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26459,map__26459__$1){
return (function (){
return metadocs.pages.concept.page("Token",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__26459,map__26459__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26461 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26461){
return (function (){
return metadocs.pages.concept.page("Token",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__26461))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Token.html",action__25227__auto___26521);


var action__25227__auto___26522 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26464 = params__25228__auto__;
var map__26464__$1 = ((((!((map__26464 == null)))?((((map__26464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26464):map__26464);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26464,map__26464__$1){
return (function (){
return metadocs.pages.concept.page("Reference",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26464,map__26464__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26466 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26466){
return (function (){
return metadocs.pages.concept.page("Reference",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26466))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Reference.html",action__25227__auto___26522);


var action__25227__auto___26523 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26469 = params__25228__auto__;
var map__26469__$1 = ((((!((map__26469 == null)))?((((map__26469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26469):map__26469);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26469,map__26469__$1){
return (function (){
return metadocs.pages.concept.page("Exception",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(map__26469,map__26469__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26471 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26471){
return (function (){
return metadocs.pages.concept.page("Exception",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(vec__26471))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Exception.html",action__25227__auto___26523);


var action__25227__auto___26524 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26474 = params__25228__auto__;
var map__26474__$1 = ((((!((map__26474 == null)))?((((map__26474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26474):map__26474);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26474,map__26474__$1){
return (function (){
return metadocs.pages.concept.page("Generated code",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXMI"),"pythonExternal"),"EMFXtext"));
});})(map__26474,map__26474__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26476 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26476){
return (function (){
return metadocs.pages.concept.page("Generated code",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXMI"),"pythonExternal"),"EMFXtext"));
});})(vec__26476))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Generated code.html",action__25227__auto___26524);


var action__25227__auto___26525 = (function (params__25228__auto__){
if(cljs.core.map_QMARK_(params__25228__auto__)){
var map__26404 = params__25228__auto__;
var map__26404__$1 = ((((!((map__26404 == null)))?((((map__26404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26404):map__26404);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26404,map__26404__$1){
return (function (){
return metadocs.pages.concept.page("dictionary",cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"));
});})(map__26404,map__26404__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25228__auto__)){
var vec__26406 = params__25228__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26406){
return (function (){
return metadocs.pages.concept.page("dictionary",cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"));
});})(vec__26406))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/dictionary.html",action__25227__auto___26525);

metadocs.router.configure_BANG_ = (function metadocs$router$configure_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
return secretary.core.dispatch_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return secretary.core.locate_route(path);
})], null));

return accountant.core.dispatch_current_BANG_();
});
