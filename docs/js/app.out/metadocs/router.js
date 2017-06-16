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
var action__25205__auto___25787 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25782 = params__25206__auto__;
var map__25782__$1 = ((((!((map__25782 == null)))?((((map__25782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25782):map__25782);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return metadocs.pages.home.page;},cljs.core.cst$sym$metadocs$pages$home_SLASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$metadocs$pages$home,cljs.core.cst$sym$page,"/home/schauboga/.boot/cache/tmp/home/schauboga/dev/university/metalib/tools/metadocs/fgh/-o089qr/metadocs/pages/home.cljs",11,1,6,6,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(metadocs.pages.home.page)?metadocs.pages.home.page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25784 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,new cljs.core.Var(function(){return metadocs.pages.home.page;},cljs.core.cst$sym$metadocs$pages$home_SLASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$metadocs$pages$home,cljs.core.cst$sym$page,"/home/schauboga/.boot/cache/tmp/home/schauboga/dev/university/metalib/tools/metadocs/fgh/-o089qr/metadocs/pages/home.cljs",11,1,6,6,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(metadocs.pages.home.page)?metadocs.pages.home.page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/",action__25205__auto___25787);

var action__25205__auto___25848 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25788 = params__25206__auto__;
var map__25788__$1 = ((((!((map__25788 == null)))?((((map__25788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25788):map__25788);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25788,map__25788__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Scala embedded",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/scala/fsml/",cljs.core.cst$kw$headline,"Scala-based embedded language implementation with macros",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"Case classes for object representation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Case Class"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/AST.scala"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$headline,"Textual embedded turnstile parsed as valid scala AST",cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Static annotation","Language Embedding"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"app/src/main/scala/org/softlang/fsml/Main.scala",cljs.core.cst$kw$from,5,cljs.core.cst$kw$to,23], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$headline,"Unlifting FSM expressions",cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Static annotation","Quasi Quotation","Implicit conversion"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Quotations.scala",cljs.core.cst$kw$from,50,cljs.core.cst$kw$to,66], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Constraints validated as part of the macro expansion",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Checker.scala",cljs.core.cst$kw$from,17,cljs.core.cst$kw$to,24], null)], null)], null),new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Piggyback"], null),cljs.core.cst$kw$headline,"Distinct state ids are guarantied by lifting state to objects in the same scope",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$type,"component",cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scalameta"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lifting","Quasi-quotation","Implicit conversion"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Quotations.scala",cljs.core.cst$kw$from,8,cljs.core.cst$kw$to,17], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Run-time system?"], null),cljs.core.cst$kw$headline,"Interpretation represented as a object property access chain",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"app/src/main/scala/org/softlang/fsml/Main.scala",cljs.core.cst$kw$from,25,cljs.core.cst$kw$to,25], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Run-time system?","Staging"], null),cljs.core.cst$kw$headline,"Annotation inlines textual embedded fsm into an scala object with initial state",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scalameta"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Inline Macro"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Fsm.scala",cljs.core.cst$kw$from,8,cljs.core.cst$kw$to,25], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Staging"], null),cljs.core.cst$kw$headline,"The transitions are translated to scala AST function definitions",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scala"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scalameta"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lifting","Quasi-quotation","Implicit conversion","Interpolation"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"core/src/main/scala/org/softlang/fsml/Quotations.scala",cljs.core.cst$kw$from,19,cljs.core.cst$kw$to,48], null)], null)], null)], null)], null));
});})(map__25788,map__25788__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25790 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/contributions/Scala embedded.html",action__25205__auto___25848);


var action__25205__auto___25849 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25793 = params__25206__auto__;
var map__25793__$1 = ((((!((map__25793 == null)))?((((map__25793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25793):map__25793);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25793,map__25793__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"EMFSirius",cljs.core.cst$kw$headline,"EMF with Sirius",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/sirius/fsml/",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph editing"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data","capture"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Turnstile.PNG"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Metamodel"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ecore"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation","capture"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Metamodel.PNG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.sirius.fsml.model/model/Fsml.ecore"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Model projection"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sirius viewpoint specification"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation","capture"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Projection.PNG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.sirius.fsml.viewpoint/description/Fsml.odesign"], null)], null)], null)], null)], null));
});})(map__25793,map__25793__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25795 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/contributions/EMFSirius.html",action__25205__auto___25849);


var action__25205__auto___25850 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25798 = params__25206__auto__;
var map__25798__$1 = ((((!((map__25798 == null)))?((((map__25798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25798):map__25798);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25798,map__25798__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"javaExternal",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/",cljs.core.cst$kw$headline,"External DSL style with ANTLR and Java",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Concrete syntax"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FSML"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["External DSL"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.fsml"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning","Text-to-CST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Grammar"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/Fsml.g4"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Functional constructor"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/Fsm.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/State.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/Transition.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Abstraction"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Listener","Tree Walker"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/FsmlToObjects.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-CST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser generation","Code generation"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"Java/org/softlang/fsml/FsmlParser.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-CST"], null),cljs.core.cst$kw$headline,"Driver code for syntax checking",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Acceptor"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/FsmlSyntaxChecker.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-AST"], null),cljs.core.cst$kw$headline,"Driver code for parsing",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Boilerplate code"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4","JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/tests/FsmlToObjectsTest.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline,"Compilation to C",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template Processing"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stringtemplate"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/FsmlCGenerator.java"], null)], null)], null)], null)], null));
});})(map__25798,map__25798__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25800 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25800){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"javaExternal",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/",cljs.core.cst$kw$headline,"External DSL style with ANTLR and Java",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Concrete syntax"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FSML"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["External DSL"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.fsml"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning","Text-to-CST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Grammar"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/Fsml.g4"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Functional constructor"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/Fsm.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/State.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/Transition.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Abstraction"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Listener","Tree Walker"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/FsmlToObjects.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-CST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser generation","Code generation"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"Java/org/softlang/fsml/FsmlParser.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-CST"], null),cljs.core.cst$kw$headline,"Driver code for syntax checking",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Acceptor"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/FsmlSyntaxChecker.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-AST"], null),cljs.core.cst$kw$headline,"Driver code for parsing",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Boilerplate code"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4","JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/tests/FsmlToObjectsTest.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline,"Compilation to C",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template Processing"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stringtemplate"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Java/org/softlang/fsml/FsmlCGenerator.java"], null)], null)], null)], null)], null));
});})(vec__25800))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/javaExternal.html",action__25205__auto___25850);


var action__25205__auto___25851 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25803 = params__25206__auto__;
var map__25803__$1 = ((((!((map__25803 == null)))?((((map__25803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25803):map__25803);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25803,map__25803__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"pythonInternal",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/Python/",cljs.core.cst$kw$headline,"Internal DSL style with Python",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlSample.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API","AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlModel.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template Processing"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jinja2"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlCGenerator.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jinja2"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template processing"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jinja2"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"templates/Fsm.jinja2"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exception"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlConstraints.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlInterpreter.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph rendering"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DOT"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graphviz"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"dot/sample.dot"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph rendering"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JSON","DOT","Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Internal DSL"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graphviz"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"FsmlVisualizer.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$headline,"Input for interpretation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JSON"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.input"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$headline,"Output for interpretation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JSON"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.output"], null)], null)], null)], null)], null));
});})(map__25803,map__25803__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25805 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/contributions/pythonInternal.html",action__25205__auto___25851);


var action__25205__auto___25852 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25808 = params__25206__auto__;
var map__25808__$1 = ((((!((map__25808 == null)))?((((map__25808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25808):map__25808);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25808,map__25808__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"javaFluentInternal",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/Java/",cljs.core.cst$kw$headline,"Internal DSL style with Java with a fluent API",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/Sample.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/Fsm.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/ActionStatePair.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Semantic domain"], null),cljs.core.cst$kw$headline,"Implementation of fluent API",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fluent API"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/FsmImpl.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/fluent/FsmlInterpreter.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/FluentTest.java"], null)], null)], null)], null)], null));
});})(map__25808,map__25808__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25810 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/contributions/javaFluentInternal.html",action__25205__auto___25852);


var action__25205__auto___25853 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25813 = params__25206__auto__;
var map__25813__$1 = ((((!((map__25813 == null)))?((((map__25813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25813):map__25813);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25813,map__25813__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"EMFXtext",cljs.core.cst$kw$headline,"XText with derived EMF model",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/xtext/fsml/",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG","Text-to-ASG"], null),cljs.core.cst$kw$headline,"State-machine grammar",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtext"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtext"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/Fsml.xtext"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Textual syntax"], null),cljs.core.cst$kw$headline,"A Turnstile FSM",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FSML"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml.turnstile/src/org/softlang/metalib/xtext/fsml/turnstile/Turnstile.fsml"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG"], null),cljs.core.cst$kw$headline,"EMF model interfaces",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/fsml/FSM.java",cljs.core.cst$kw$from,24,cljs.core.cst$kw$to,44], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/fsml/FSMState.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/fsml/FSMTransition.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG"], null),cljs.core.cst$kw$headline,"EMF model classes",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/fsml/impl/FSMImpl.java",cljs.core.cst$kw$from,35,cljs.core.cst$kw$to,47], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/fsml/impl/FSMStateImpl.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/fsml/impl/FSMTransitionImpl.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-ASG","Scanning"], null),cljs.core.cst$kw$headline,"Generated Parser",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR3"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser","Token"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src-gen/org/softlang/metalib/xtext/fsml/parser/antlr/FsmlParser.java",cljs.core.cst$kw$from,12,cljs.core.cst$kw$to,40], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Xtext Constraint",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtend"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/validation/FsmlValidator.xtend",cljs.core.cst$kw$from,35,cljs.core.cst$kw$to,54], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Piggyback","Resolution"], null),cljs.core.cst$kw$headline,"Xtext model reference resolution by name",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtext"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reference relationship","Name binding"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/Fsml.xtext",cljs.core.cst$kw$from,20,cljs.core.cst$kw$to,21], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline,"",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtend"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template processing"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/generator/FsmlGenerator.xtend",cljs.core.cst$kw$from,80,cljs.core.cst$kw$to,185], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph rendering"], null),cljs.core.cst$kw$headline,"DGL generation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Xtend"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template processing"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.xtext.fsml/src/org/softlang/metalib/xtext/fsml/generator/FsmlGenerator.xtend",cljs.core.cst$kw$from,188,cljs.core.cst$kw$to,199], null)], null)], null)], null)], null));
});})(map__25813,map__25813__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25815 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/contributions/EMFXtext.html",action__25205__auto___25853);


var action__25205__auto___25854 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25818 = params__25206__auto__;
var map__25818__$1 = ((((!((map__25818 == null)))?((((map__25818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25818):map__25818);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25818,map__25818__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"pythonExternal",cljs.core.cst$kw$headline,"External DSL style with ANTLR and Python",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Concrete syntax"], null),cljs.core.cst$kw$headline,"FSML example",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FSML"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.fsml"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning"], null),cljs.core.cst$kw$headline,"Generated Lexer",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser generation","Generated code"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"Python/FsmlLexer.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-AST"], null),cljs.core.cst$kw$headline,"Generated Parser",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser generation","Generated code"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"Python/FsmlParser.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API","AST"], null),cljs.core.cst$kw$headline,"AST implementation based on dictionaries",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dictionary"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/FsmlModel.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning","Text-to-AST"], null),cljs.core.cst$kw$headline,"ANTLR grammar for FSML including semantic actions",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Grammar","Semantic action"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/Fsml.g4"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Serialization"], null),cljs.core.cst$kw$headline,"Serialized Turnstile",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JSON"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/sample.json"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Serialization","Parsing"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/FsmlToJSON.py"], null)], null)], null)], null)], null));
});})(map__25818,map__25818__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25820 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25820){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"pythonExternal",cljs.core.cst$kw$headline,"External DSL style with ANTLR and Python",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Concrete syntax"], null),cljs.core.cst$kw$headline,"FSML example",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FSML"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.fsml"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning"], null),cljs.core.cst$kw$headline,"Generated Lexer",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser generation","Generated code"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"Python/FsmlLexer.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Text-to-AST"], null),cljs.core.cst$kw$headline,"Generated Parser",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser generation","Generated code"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"Python/FsmlParser.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API","AST"], null),cljs.core.cst$kw$headline,"AST implementation based on dictionaries",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dictionary"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/FsmlModel.py"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning","Text-to-AST"], null),cljs.core.cst$kw$headline,"ANTLR grammar for FSML including semantic actions",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Grammar","Semantic action"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ANTLR4"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/Fsml.g4"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Serialization"], null),cljs.core.cst$kw$headline,"Serialized Turnstile",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JSON"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/sample.json"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Serialization","Parsing"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Python"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"Python/FsmlToJSON.py"], null)], null)], null)], null)], null));
});})(vec__25820))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/pythonExternal.html",action__25205__auto___25854);


var action__25205__auto___25855 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25823 = params__25206__auto__;
var map__25823__$1 = ((((!((map__25823 == null)))?((((map__25823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25823):map__25823);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25823,map__25823__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"MPS",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/mps/",cljs.core.cst$kw$headline,"MPS implementation based on projectional editing",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"Projectional Editor on AST",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"editor_state.png"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"Projectional Editor on AST",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"structure_event.png"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Check determinism",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"typesystem_check_input.png"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline,"Compilation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"compilation_state.png"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projectional Syntax"], null),cljs.core.cst$kw$headline,"Sample Turnstile",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["capture","data"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MPS"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"sample.png"], null)], null)], null)], null)], null));
});})(map__25823,map__25823__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25825 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/contributions/MPS.html",action__25205__auto___25855);


var action__25205__auto___25856 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25828 = params__25206__auto__;
var map__25828__$1 = ((((!((map__25828 == null)))?((((map__25828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25828):map__25828);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25828,map__25828__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"HaskellQuasiQuotation",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/haskell/fsml/",cljs.core.cst$kw$headline,"Use of quasi-quotation and Template Haskell",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"AST implementation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Algebraic data type","Record type"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Ast.hs",cljs.core.cst$kw$from,7,cljs.core.cst$kw$to,15], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning"], null),cljs.core.cst$kw$headline,"Lexer definition",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parsec"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lexer","Parser combinator"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Lexer.hs",cljs.core.cst$kw$from,13,cljs.core.cst$kw$to,43], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning","Text-to-AST"], null),cljs.core.cst$kw$headline,"Parser combinator",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parsec"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser combinator"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Parser.hs",cljs.core.cst$kw$from,28,cljs.core.cst$kw$to,50], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"Embedded turnstile object in Haskell declaration context",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template Haskell"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Quasi-quotation"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"app/Main.hs",cljs.core.cst$kw$from,7,cljs.core.cst$kw$to,22], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Constraint checking",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Checker.hs",cljs.core.cst$kw$from,8,cljs.core.cst$kw$to,46], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Piggyback"], null),cljs.core.cst$kw$headline,"By generating alternatives for the state data type distinct state ids are guaranteed",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/QuasiQuoter.hs",cljs.core.cst$kw$from,42,cljs.core.cst$kw$to,50], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dynamic semantics","Run-time system"], null),cljs.core.cst$kw$headline,"Transitioning between states by folding over the generated event functions",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"app/Main.hs",cljs.core.cst$kw$from,24,cljs.core.cst$kw$to,28], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Staging"], null),cljs.core.cst$kw$headline,"Transitions are translated to Haskell AST",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template Haskell"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Quasi-quotation"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/QuasiQuoter.hs",cljs.core.cst$kw$from,52,cljs.core.cst$kw$to,75], null)], null)], null)], null)], null));
});})(map__25828,map__25828__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25830 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25830){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"HaskellQuasiQuotation",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/haskell/fsml/",cljs.core.cst$kw$headline,"Use of quasi-quotation and Template Haskell",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"AST implementation",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Algebraic data type","Record type"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Ast.hs",cljs.core.cst$kw$from,7,cljs.core.cst$kw$to,15], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning"], null),cljs.core.cst$kw$headline,"Lexer definition",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parsec"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lexer","Parser combinator"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Lexer.hs",cljs.core.cst$kw$from,13,cljs.core.cst$kw$to,43], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning","Text-to-AST"], null),cljs.core.cst$kw$headline,"Parser combinator",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parsec"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Parser combinator"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Parser.hs",cljs.core.cst$kw$from,28,cljs.core.cst$kw$to,50], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"Embedded turnstile object in Haskell declaration context",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template Haskell"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Quasi-quotation"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"app/Main.hs",cljs.core.cst$kw$from,7,cljs.core.cst$kw$to,22], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Constraint checking",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/Checker.hs",cljs.core.cst$kw$from,8,cljs.core.cst$kw$to,46], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Piggyback"], null),cljs.core.cst$kw$headline,"By generating alternatives for the state data type distinct state ids are guaranteed",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/QuasiQuoter.hs",cljs.core.cst$kw$from,42,cljs.core.cst$kw$to,50], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dynamic semantics","Run-time system"], null),cljs.core.cst$kw$headline,"Transitioning between states by folding over the generated event functions",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"app/Main.hs",cljs.core.cst$kw$from,24,cljs.core.cst$kw$to,28], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Staging"], null),cljs.core.cst$kw$headline,"Transitions are translated to Haskell AST",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Haskell"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template Haskell"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Quasi-quotation"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"src/Language/FSML/QuasiQuoter.hs",cljs.core.cst$kw$from,52,cljs.core.cst$kw$to,75], null)], null)], null)], null)], null));
});})(vec__25830))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/HaskellQuasiQuotation.html",action__25205__auto___25856);


var action__25205__auto___25857 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25833 = params__25206__auto__;
var map__25833__$1 = ((((!((map__25833 == null)))?((((map__25833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25833):map__25833);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25833,map__25833__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"EMFXMI",cljs.core.cst$kw$headline,"EMF with XMI persistence",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/emf/fsml/",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST","ASG","Resolution"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Metamodel","Structured editor","Reference","Package"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ecore"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation","capture"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"metamodel.PNG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/model/Fsml.ecore"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API","ASG"], null),cljs.core.cst$kw$headline,"EMF model interface for the FSM object",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OO interface","Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FSM.java",cljs.core.cst$kw$from,25,cljs.core.cst$kw$to,52], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FSMState.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FSMTransition.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ASG"], null),cljs.core.cst$kw$headline,"EMF model class for the FSM object",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OO class","Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/impl/FSMImpl.java",cljs.core.cst$kw$from,41,cljs.core.cst$kw$to,51], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/impl/FSMStateImpl.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/impl/FSMTransitionImpl.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST","ASG"], null),cljs.core.cst$kw$headline,"EMF Packages",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Package","Factory"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FsmlFactory.java",cljs.core.cst$kw$from,49,cljs.core.cst$kw$to,58], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/FsmlPackage.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Model projection"], null),cljs.core.cst$kw$headline,"EMF Item provider",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adapter","Command"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.edit/src/org/softlang/metalib/emf/fsml/fsml/provider/FSMItemProvider.java",cljs.core.cst$kw$from,76,cljs.core.cst$kw$to,83], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.edit/src/org/softlang/metalib/emf/fsml/fsml/provider/FSMStateItemProvider.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.edit/src/org/softlang/metalib/emf/fsml/fsml/provider/FSMTransitionItemProvider.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph editing","Model projection"], null),cljs.core.cst$kw$headline,"Viewing and editing the turnstile object in the generated eclipse editor",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data","capture"], null),cljs.core.cst$kw$languages,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JFace","SWT","Eclipse"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IDE","Structured editor","Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"emfturnstile.PNG"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graph editing","Model projection"], null),cljs.core.cst$kw$headline,"The generated eclipse editor for EMF models",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JFace","SWT","Eclipse"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IDE","Structured Editor","Generated code"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"none",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.editor/src/org/softlang/metalib/emf/fsml/fsml/presentation/FsmlEditor.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Serialization","Resolution","AST"], null),cljs.core.cst$kw$headline,"The turnstile object in EMF's textual exchange format",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["XMI"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SAX"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Persistence","URI"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml.turnstile/Turnstile.fsml"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"EMF delegates model validation to methods with a certain signature",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/src/org/softlang/metalib/emf/fsml/fsml/impl/FSMStateImpl.java",cljs.core.cst$kw$from,188,cljs.core.cst$kw$to,217], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Piggyback"], null),cljs.core.cst$kw$headline,"Unique state names are validated by setting the EMF's unique id feature",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["XMI"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Metamodel"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"org.softlang.metalib.emf.fsml/model/Fsml.ecore",cljs.core.cst$kw$from,37,cljs.core.cst$kw$to,38], null)], null)], null)], null)], null));
});})(map__25833,map__25833__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25835 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/contributions/EMFXMI.html",action__25205__auto___25857);


var action__25205__auto___25858 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25838 = params__25206__auto__;
var map__25838__$1 = ((((!((map__25838 == null)))?((((map__25838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25838):map__25838);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25838,map__25838__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"javaInfluentInternal",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/Java/",cljs.core.cst$kw$headline,"Internal DSL style with Java and an influent API",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API","AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Batch"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/ImperativeSample.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Functional constructor"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/FunctionalSample.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OO Class","Functional constructor"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/Fsm.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/State.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/Transition.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/FsmlInterpreter.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/InfluentTest.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline," Translate^O  Feature",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Generated code"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/Turnstile.c"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["StringTemplate"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template processing"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["StringTemplate"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"templates/Fsm.stg"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"https://github.com/softlang/yas/blob/master/languages/FSML/Java/org/softlang/fsml/FsmlCGenerator.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["StringTemplate","JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/CGeneratorTest.java"], null)], null)], null)], null)], null));
});})(map__25838,map__25838__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25840 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25840){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"javaInfluentInternal",cljs.core.cst$kw$baseuri,"https://github.com/softlang/yas/blob/master/languages/FSML/Java/",cljs.core.cst$kw$headline,"Internal DSL style with Java and an influent API",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API","AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Batch"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/ImperativeSample.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["API"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Functional constructor"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/FunctionalSample.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OO Class","Functional constructor"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/Fsm.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/State.java"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/Transition.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/FsmlInterpreter.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Interpretation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/InfluentTest.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline," Translate^O  Feature",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Generated code"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/Turnstile.c"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["StringTemplate"], null),cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template processing"], null),cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["StringTemplate"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"templates/Fsm.stg"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"https://github.com/softlang/yas/blob/master/languages/FSML/Java/org/softlang/fsml/FsmlCGenerator.java"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Java"], null),cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$technologies,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["StringTemplate","JUnit"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"org/softlang/fsml/tests/CGeneratorTest.java"], null)], null)], null)], null)], null));
});})(vec__25840))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/contributions/javaInfluentInternal.html",action__25205__auto___25858);


var action__25205__auto___25859 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25843 = params__25206__auto__;
var map__25843__$1 = ((((!((map__25843 == null)))?((((map__25843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25843):map__25843);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25843,map__25843__$1){
return (function (){
return metadocs.pages.contribution.page(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"Spoofax",cljs.core.cst$kw$baseuri,"https://github.com/softlang/metalib/blob/master/spoofax/fsml/",cljs.core.cst$kw$headline,"Spoofax AST",cljs.core.cst$kw$sections,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AST"], null),cljs.core.cst$kw$headline,"FSML Grammar in Spoofax",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SDF3"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Grammar"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"syntax/fsml.sdf3"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Textual syntax"], null),cljs.core.cst$kw$headline,"Turnstile sample in CS",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FSML"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"test/Turnstile.fsm"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Name binding",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NABL"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Name binding"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"trans/names.nab"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Analysis"], null),cljs.core.cst$kw$headline,"Check Initial",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stratego"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"some",cljs.core.cst$kw$link,"trans/check.str",cljs.core.cst$kw$from,61,cljs.core.cst$kw$to,62], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Compilation"], null),cljs.core.cst$kw$headline,"Compilation to Java",cljs.core.cst$kw$perspectives,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["implementation"], null),cljs.core.cst$kw$languages,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stratego"], null),cljs.core.cst$kw$technologies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$concepts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Name binding"], null),cljs.core.cst$kw$artifacts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"all",cljs.core.cst$kw$link,"trans/generate.str"], null)], null)], null)], null)], null));
});})(map__25843,map__25843__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25845 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/contributions/Spoofax.html",action__25205__auto___25859);

var action__25205__auto___25885 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25860 = params__25206__auto__;
var map__25860__$1 = ((((!((map__25860 == null)))?((((map__25860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25860):map__25860);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25860,map__25860__$1){
return (function (){
return metadocs.pages.perspective.page("application",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__25860,map__25860__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25862 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/perspectives/application.html",action__25205__auto___25885);


var action__25205__auto___25886 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25865 = params__25206__auto__;
var map__25865__$1 = ((((!((map__25865 == null)))?((((map__25865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25865):map__25865);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25865,map__25865__$1){
return (function (){
return metadocs.pages.perspective.page("implementation",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"javaInfluentInternal"),"EMFXMI"),"HaskellQuasiQuotation"),"pythonExternal"),"EMFXtext"),"javaFluentInternal"),"pythonInternal"),"javaExternal"),"EMFSirius"),"Scala embedded"));
});})(map__25865,map__25865__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25867 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/perspectives/implementation.html",action__25205__auto___25886);


var action__25205__auto___25887 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25870 = params__25206__auto__;
var map__25870__$1 = ((((!((map__25870 == null)))?((((map__25870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25870):map__25870);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25870,map__25870__$1){
return (function (){
return metadocs.pages.perspective.page("capture",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"MPS"),"EMFSirius"));
});})(map__25870,map__25870__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25872 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/perspectives/capture.html",action__25205__auto___25887);


var action__25205__auto___25888 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25875 = params__25206__auto__;
var map__25875__$1 = ((((!((map__25875 == null)))?((((map__25875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25875):map__25875);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25875,map__25875__$1){
return (function (){
return metadocs.pages.perspective.page("data",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"javaInfluentInternal"),"EMFXMI"),"HaskellQuasiQuotation"),"MPS"),"pythonExternal"),"EMFXtext"),"javaFluentInternal"),"pythonInternal"),"javaExternal"),"EMFSirius"),"Scala embedded"));
});})(map__25875,map__25875__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25877 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/perspectives/data.html",action__25205__auto___25888);


var action__25205__auto___25889 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25880 = params__25206__auto__;
var map__25880__$1 = ((((!((map__25880 == null)))?((((map__25880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25880):map__25880);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25880,map__25880__$1){
return (function (){
return metadocs.pages.perspective.page("test",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"pythonExternal"),"javaFluentInternal"),"pythonInternal"),"javaExternal"));
});})(map__25880,map__25880__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25882 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/perspectives/test.html",action__25205__auto___25889);

var action__25205__auto___26020 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25890 = params__25206__auto__;
var map__25890__$1 = ((((!((map__25890 == null)))?((((map__25890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25890):map__25890);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25890,map__25890__$1){
return (function (){
return metadocs.pages.feature.page("Model projection",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(map__25890,map__25890__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25892 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/Model projection.html",action__25205__auto___26020);


var action__25205__auto___26021 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25895 = params__25206__auto__;
var map__25895__$1 = ((((!((map__25895 == null)))?((((map__25895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25895):map__25895);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25895,map__25895__$1){
return (function (){
return metadocs.pages.feature.page("Staging",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"Scala embedded"));
});})(map__25895,map__25895__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25897 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/Staging.html",action__25205__auto___26021);


var action__25205__auto___26022 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25900 = params__25206__auto__;
var map__25900__$1 = ((((!((map__25900 == null)))?((((map__25900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25900):map__25900);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25900,map__25900__$1){
return (function (){
return metadocs.pages.feature.page("Text-to-CST",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(map__25900,map__25900__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25902 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/Text-to-CST.html",action__25205__auto___26022);


var action__25205__auto___26023 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25905 = params__25206__auto__;
var map__25905__$1 = ((((!((map__25905 == null)))?((((map__25905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25905):map__25905);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25905,map__25905__$1){
return (function (){
return metadocs.pages.feature.page("Interpretation",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaFluentInternal"),"pythonInternal"));
});})(map__25905,map__25905__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25907 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/Interpretation.html",action__25205__auto___26023);


var action__25205__auto___26024 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25910 = params__25206__auto__;
var map__25910__$1 = ((((!((map__25910 == null)))?((((map__25910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25910):map__25910);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25910,map__25910__$1){
return (function (){
return metadocs.pages.feature.page("Abstraction",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(map__25910,map__25910__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25912 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/Abstraction.html",action__25205__auto___26024);


var action__25205__auto___26025 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25915 = params__25206__auto__;
var map__25915__$1 = ((((!((map__25915 == null)))?((((map__25915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25915):map__25915);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25915,map__25915__$1){
return (function (){
return metadocs.pages.feature.page("Run-time system?",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__25915,map__25915__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25917 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25917){
return (function (){
return metadocs.pages.feature.page("Run-time system?",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__25917))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Run-time system?.html",action__25205__auto___26025);


var action__25205__auto___26026 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25920 = params__25206__auto__;
var map__25920__$1 = ((((!((map__25920 == null)))?((((map__25920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25920):map__25920);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25920,map__25920__$1){
return (function (){
return metadocs.pages.feature.page("API",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXMI"),"pythonExternal"),"javaFluentInternal"),"pythonInternal"));
});})(map__25920,map__25920__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25922 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/API.html",action__25205__auto___26026);


var action__25205__auto___26027 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25925 = params__25206__auto__;
var map__25925__$1 = ((((!((map__25925 == null)))?((((map__25925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25925):map__25925);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25925,map__25925__$1){
return (function (){
return metadocs.pages.feature.page("Resolution",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFXtext"));
});})(map__25925,map__25925__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25927 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/Resolution.html",action__25205__auto___26027);


var action__25205__auto___26028 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25930 = params__25206__auto__;
var map__25930__$1 = ((((!((map__25930 == null)))?((((map__25930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25930):map__25930);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25930,map__25930__$1){
return (function (){
return metadocs.pages.feature.page("Textual syntax",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"EMFXtext"));
});})(map__25930,map__25930__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25932 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/Textual syntax.html",action__25205__auto___26028);


var action__25205__auto___26029 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25935 = params__25206__auto__;
var map__25935__$1 = ((((!((map__25935 == null)))?((((map__25935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25935):map__25935);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25935,map__25935__$1){
return (function (){
return metadocs.pages.feature.page("Scanning",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"pythonExternal"),"EMFXtext"),"javaExternal"));
});})(map__25935,map__25935__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25937 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/Scanning.html",action__25205__auto___26029);


var action__25205__auto___26030 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25940 = params__25206__auto__;
var map__25940__$1 = ((((!((map__25940 == null)))?((((map__25940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25940):map__25940);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25940,map__25940__$1){
return (function (){
return metadocs.pages.feature.page("Text-to-AST",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"pythonExternal"),"javaExternal"),"Scala embedded"));
});})(map__25940,map__25940__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25942 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/Text-to-AST.html",action__25205__auto___26030);


var action__25205__auto___26031 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25945 = params__25206__auto__;
var map__25945__$1 = ((((!((map__25945 == null)))?((((map__25945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25945):map__25945);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25945,map__25945__$1){
return (function (){
return metadocs.pages.feature.page("Semantic domain",cljs.core._conj(cljs.core.List.EMPTY,"javaFluentInternal"));
});})(map__25945,map__25945__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25947 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/Semantic domain.html",action__25205__auto___26031);


var action__25205__auto___26032 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25950 = params__25206__auto__;
var map__25950__$1 = ((((!((map__25950 == null)))?((((map__25950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25950):map__25950);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25950,map__25950__$1){
return (function (){
return metadocs.pages.feature.page("Text-to-ASG",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__25950,map__25950__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25952 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/Text-to-ASG.html",action__25205__auto___26032);


var action__25205__auto___26033 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25955 = params__25206__auto__;
var map__25955__$1 = ((((!((map__25955 == null)))?((((map__25955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25955):map__25955);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25955,map__25955__$1){
return (function (){
return metadocs.pages.feature.page("Serialization",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"pythonExternal"));
});})(map__25955,map__25955__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25957 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/Serialization.html",action__25205__auto___26033);


var action__25205__auto___26034 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25960 = params__25206__auto__;
var map__25960__$1 = ((((!((map__25960 == null)))?((((map__25960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25960):map__25960);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25960,map__25960__$1){
return (function (){
return metadocs.pages.feature.page("Analysis",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"EMFXMI"),"HaskellQuasiQuotation"),"MPS"),"EMFXtext"),"pythonInternal"),"Scala embedded"));
});})(map__25960,map__25960__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25962 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/Analysis.html",action__25205__auto___26034);


var action__25205__auto___26035 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25965 = params__25206__auto__;
var map__25965__$1 = ((((!((map__25965 == null)))?((((map__25965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25965):map__25965);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25965,map__25965__$1){
return (function (){
return metadocs.pages.feature.page("ASG",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFXtext"),"EMFSirius"));
});})(map__25965,map__25965__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25967 = params__25206__auto__;
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
secretary.core.add_route_BANG_("/metalib/features/ASG.html",action__25205__auto___26035);


var action__25205__auto___26036 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25970 = params__25206__auto__;
var map__25970__$1 = ((((!((map__25970 == null)))?((((map__25970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25970):map__25970);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25970,map__25970__$1){
return (function (){
return metadocs.pages.feature.page("Run-time system",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__25970,map__25970__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25972 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25972){
return (function (){
return metadocs.pages.feature.page("Run-time system",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__25972))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Run-time system.html",action__25205__auto___26036);


var action__25205__auto___26037 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25975 = params__25206__auto__;
var map__25975__$1 = ((((!((map__25975 == null)))?((((map__25975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25975):map__25975);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25975,map__25975__$1){
return (function (){
return metadocs.pages.feature.page("Projectional Syntax",cljs.core._conj(cljs.core.List.EMPTY,"MPS"));
});})(map__25975,map__25975__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25977 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25977){
return (function (){
return metadocs.pages.feature.page("Projectional Syntax",cljs.core._conj(cljs.core.List.EMPTY,"MPS"));
});})(vec__25977))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Projectional Syntax.html",action__25205__auto___26037);


var action__25205__auto___26038 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25980 = params__25206__auto__;
var map__25980__$1 = ((((!((map__25980 == null)))?((((map__25980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25980):map__25980);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25980,map__25980__$1){
return (function (){
return metadocs.pages.feature.page("Piggyback",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"HaskellQuasiQuotation"),"EMFXtext"),"Scala embedded"));
});})(map__25980,map__25980__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25982 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25982){
return (function (){
return metadocs.pages.feature.page("Piggyback",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"HaskellQuasiQuotation"),"EMFXtext"),"Scala embedded"));
});})(vec__25982))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Piggyback.html",action__25205__auto___26038);


var action__25205__auto___26039 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25985 = params__25206__auto__;
var map__25985__$1 = ((((!((map__25985 == null)))?((((map__25985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25985):map__25985);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25985,map__25985__$1){
return (function (){
return metadocs.pages.feature.page("AST",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"javaInfluentInternal"),"EMFXMI"),"HaskellQuasiQuotation"),"MPS"),"pythonExternal"),"pythonInternal"),"javaExternal"),"Scala embedded"));
});})(map__25985,map__25985__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25987 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25987){
return (function (){
return metadocs.pages.feature.page("AST",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"javaInfluentInternal"),"EMFXMI"),"HaskellQuasiQuotation"),"MPS"),"pythonExternal"),"pythonInternal"),"javaExternal"),"Scala embedded"));
});})(vec__25987))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/AST.html",action__25205__auto___26039);


var action__25205__auto___26040 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25990 = params__25206__auto__;
var map__25990__$1 = ((((!((map__25990 == null)))?((((map__25990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25990):map__25990);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25990,map__25990__$1){
return (function (){
return metadocs.pages.feature.page("Concrete syntax",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(map__25990,map__25990__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25992 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25992){
return (function (){
return metadocs.pages.feature.page("Concrete syntax",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(vec__25992))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Concrete syntax.html",action__25205__auto___26040);


var action__25205__auto___26041 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__25995 = params__25206__auto__;
var map__25995__$1 = ((((!((map__25995 == null)))?((((map__25995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25995):map__25995);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__25995,map__25995__$1){
return (function (){
return metadocs.pages.feature.page("Dynamic semantics",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__25995,map__25995__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__25997 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__25997){
return (function (){
return metadocs.pages.feature.page("Dynamic semantics",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__25997))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Dynamic semantics.html",action__25205__auto___26041);


var action__25205__auto___26042 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26000 = params__25206__auto__;
var map__26000__$1 = ((((!((map__26000 == null)))?((((map__26000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26000):map__26000);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26000,map__26000__$1){
return (function (){
return metadocs.pages.feature.page("Parsing",cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"));
});})(map__26000,map__26000__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26002 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26002){
return (function (){
return metadocs.pages.feature.page("Parsing",cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"));
});})(vec__26002))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Parsing.html",action__25205__auto___26042);


var action__25205__auto___26043 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26005 = params__25206__auto__;
var map__26005__$1 = ((((!((map__26005 == null)))?((((map__26005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26005):map__26005);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26005,map__26005__$1){
return (function (){
return metadocs.pages.feature.page("Graph rendering",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"),"pythonInternal"));
});})(map__26005,map__26005__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26007 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26007){
return (function (){
return metadocs.pages.feature.page("Graph rendering",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"),"pythonInternal"));
});})(vec__26007))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Graph rendering.html",action__25205__auto___26043);


var action__25205__auto___26044 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26010 = params__25206__auto__;
var map__26010__$1 = ((((!((map__26010 == null)))?((((map__26010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26010):map__26010);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26010,map__26010__$1){
return (function (){
return metadocs.pages.feature.page("Compilation",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"javaInfluentInternal"),"MPS"),"EMFXtext"),"pythonInternal"),"javaExternal"));
});})(map__26010,map__26010__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26012 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26012){
return (function (){
return metadocs.pages.feature.page("Compilation",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"javaInfluentInternal"),"MPS"),"EMFXtext"),"pythonInternal"),"javaExternal"));
});})(vec__26012))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Compilation.html",action__25205__auto___26044);


var action__25205__auto___26045 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26015 = params__25206__auto__;
var map__26015__$1 = ((((!((map__26015 == null)))?((((map__26015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26015):map__26015);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26015,map__26015__$1){
return (function (){
return metadocs.pages.feature.page("Graph editing",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(map__26015,map__26015__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26017 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26017){
return (function (){
return metadocs.pages.feature.page("Graph editing",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(vec__26017))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/features/Graph editing.html",action__25205__auto___26045);

var action__25205__auto___26141 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26046 = params__25206__auto__;
var map__26046__$1 = ((((!((map__26046 == null)))?((((map__26046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26046):map__26046);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26046,map__26046__$1){
return (function (){
return metadocs.pages.language.page("DOT",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(map__26046,map__26046__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26048 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26048){
return (function (){
return metadocs.pages.language.page("DOT",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(vec__26048))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/DOT.html",action__25205__auto___26141);


var action__25205__auto___26142 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26051 = params__25206__auto__;
var map__26051__$1 = ((((!((map__26051 == null)))?((((map__26051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26051):map__26051);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26051,map__26051__$1){
return (function (){
return metadocs.pages.language.page("NABL",cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"));
});})(map__26051,map__26051__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26053 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26053){
return (function (){
return metadocs.pages.language.page("NABL",cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"));
});})(vec__26053))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/NABL.html",action__25205__auto___26142);


var action__25205__auto___26143 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26056 = params__25206__auto__;
var map__26056__$1 = ((((!((map__26056 == null)))?((((map__26056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26056):map__26056);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26056,map__26056__$1){
return (function (){
return metadocs.pages.language.page("jinja2",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(map__26056,map__26056__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26058 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26058){
return (function (){
return metadocs.pages.language.page("jinja2",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(vec__26058))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/jinja2.html",action__25205__auto___26143);


var action__25205__auto___26144 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26061 = params__25206__auto__;
var map__26061__$1 = ((((!((map__26061 == null)))?((((map__26061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26061):map__26061);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26061,map__26061__$1){
return (function (){
return metadocs.pages.language.page("StringTemplate",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(map__26061,map__26061__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26063 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26063){
return (function (){
return metadocs.pages.language.page("StringTemplate",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(vec__26063))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/StringTemplate.html",action__25205__auto___26144);


var action__25205__auto___26145 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26066 = params__25206__auto__;
var map__26066__$1 = ((((!((map__26066 == null)))?((((map__26066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26066):map__26066);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26066,map__26066__$1){
return (function (){
return metadocs.pages.language.page("ANTLR4",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(map__26066,map__26066__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26068 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26068){
return (function (){
return metadocs.pages.language.page("ANTLR4",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(vec__26068))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/ANTLR4.html",action__25205__auto___26145);


var action__25205__auto___26146 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26071 = params__25206__auto__;
var map__26071__$1 = ((((!((map__26071 == null)))?((((map__26071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26071):map__26071);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26071,map__26071__$1){
return (function (){
return metadocs.pages.language.page("Python",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"pythonInternal"));
});})(map__26071,map__26071__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26073 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26073){
return (function (){
return metadocs.pages.language.page("Python",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"pythonInternal"));
});})(vec__26073))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Python.html",action__25205__auto___26146);


var action__25205__auto___26147 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26076 = params__25206__auto__;
var map__26076__$1 = ((((!((map__26076 == null)))?((((map__26076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26076):map__26076);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26076,map__26076__$1){
return (function (){
return metadocs.pages.language.page("XMI",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26076,map__26076__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26078 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26078){
return (function (){
return metadocs.pages.language.page("XMI",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26078))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/XMI.html",action__25205__auto___26147);


var action__25205__auto___26148 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26081 = params__25206__auto__;
var map__26081__$1 = ((((!((map__26081 == null)))?((((map__26081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26081):map__26081);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26081,map__26081__$1){
return (function (){
return metadocs.pages.language.page("Xtend",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__26081,map__26081__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26083 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26083){
return (function (){
return metadocs.pages.language.page("Xtend",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__26083))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Xtend.html",action__25205__auto___26148);


var action__25205__auto___26149 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26086 = params__25206__auto__;
var map__26086__$1 = ((((!((map__26086 == null)))?((((map__26086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26086):map__26086);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26086,map__26086__$1){
return (function (){
return metadocs.pages.language.page("Scala",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26086,map__26086__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26088 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26088){
return (function (){
return metadocs.pages.language.page("Scala",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26088))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Scala.html",action__25205__auto___26149);


var action__25205__auto___26150 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26091 = params__25206__auto__;
var map__26091__$1 = ((((!((map__26091 == null)))?((((map__26091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26091):map__26091);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26091,map__26091__$1){
return (function (){
return metadocs.pages.language.page("C",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(map__26091,map__26091__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26093 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26093){
return (function (){
return metadocs.pages.language.page("C",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(vec__26093))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/C.html",action__25205__auto___26150);


var action__25205__auto___26151 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26096 = params__25206__auto__;
var map__26096__$1 = ((((!((map__26096 == null)))?((((map__26096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26096):map__26096);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26096,map__26096__$1){
return (function (){
return metadocs.pages.language.page("JSON",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"pythonInternal"));
});})(map__26096,map__26096__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26098 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26098){
return (function (){
return metadocs.pages.language.page("JSON",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"pythonInternal"));
});})(vec__26098))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/JSON.html",action__25205__auto___26151);


var action__25205__auto___26152 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26101 = params__25206__auto__;
var map__26101__$1 = ((((!((map__26101 == null)))?((((map__26101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26101):map__26101);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26101,map__26101__$1){
return (function (){
return metadocs.pages.language.page("Stratego",cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"));
});})(map__26101,map__26101__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26103 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26103){
return (function (){
return metadocs.pages.language.page("Stratego",cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"));
});})(vec__26103))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Stratego.html",action__25205__auto___26152);


var action__25205__auto___26153 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26106 = params__25206__auto__;
var map__26106__$1 = ((((!((map__26106 == null)))?((((map__26106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26106):map__26106);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26106,map__26106__$1){
return (function (){
return metadocs.pages.language.page("Haskell",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26106,map__26106__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26108 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26108){
return (function (){
return metadocs.pages.language.page("Haskell",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26108))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Haskell.html",action__25205__auto___26153);


var action__25205__auto___26154 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26111 = params__25206__auto__;
var map__26111__$1 = ((((!((map__26111 == null)))?((((map__26111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26111):map__26111);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26111,map__26111__$1){
return (function (){
return metadocs.pages.language.page("Ecore",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(map__26111,map__26111__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26113 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26113){
return (function (){
return metadocs.pages.language.page("Ecore",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(vec__26113))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Ecore.html",action__25205__auto___26154);


var action__25205__auto___26155 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26116 = params__25206__auto__;
var map__26116__$1 = ((((!((map__26116 == null)))?((((map__26116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26116):map__26116);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26116,map__26116__$1){
return (function (){
return metadocs.pages.language.page("SDF3",cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"));
});})(map__26116,map__26116__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26118 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26118){
return (function (){
return metadocs.pages.language.page("SDF3",cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"));
});})(vec__26118))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/SDF3.html",action__25205__auto___26155);


var action__25205__auto___26156 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26121 = params__25206__auto__;
var map__26121__$1 = ((((!((map__26121 == null)))?((((map__26121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26121):map__26121);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26121,map__26121__$1){
return (function (){
return metadocs.pages.language.page("Xtext",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__26121,map__26121__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26123 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26123){
return (function (){
return metadocs.pages.language.page("Xtext",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__26123))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Xtext.html",action__25205__auto___26156);


var action__25205__auto___26157 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26126 = params__25206__auto__;
var map__26126__$1 = ((((!((map__26126 == null)))?((((map__26126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26126):map__26126);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26126,map__26126__$1){
return (function (){
return metadocs.pages.language.page("Java",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXMI"),"EMFXtext"),"javaFluentInternal"),"javaExternal"));
});})(map__26126,map__26126__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26128 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26128){
return (function (){
return metadocs.pages.language.page("Java",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXMI"),"EMFXtext"),"javaFluentInternal"),"javaExternal"));
});})(vec__26128))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Java.html",action__25205__auto___26157);


var action__25205__auto___26158 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26131 = params__25206__auto__;
var map__26131__$1 = ((((!((map__26131 == null)))?((((map__26131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26131):map__26131);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26131,map__26131__$1){
return (function (){
return metadocs.pages.language.page("Sirius viewpoint specification",cljs.core._conj(cljs.core.List.EMPTY,"EMFSirius"));
});})(map__26131,map__26131__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26133 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26133){
return (function (){
return metadocs.pages.language.page("Sirius viewpoint specification",cljs.core._conj(cljs.core.List.EMPTY,"EMFSirius"));
});})(vec__26133))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/Sirius viewpoint specification.html",action__25205__auto___26158);


var action__25205__auto___26159 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26136 = params__25206__auto__;
var map__26136__$1 = ((((!((map__26136 == null)))?((((map__26136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26136):map__26136);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26136,map__26136__$1){
return (function (){
return metadocs.pages.language.page("FSML",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"pythonExternal"),"EMFXtext"),"javaExternal"));
});})(map__26136,map__26136__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26138 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26138){
return (function (){
return metadocs.pages.language.page("FSML",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"pythonExternal"),"EMFXtext"),"javaExternal"));
});})(vec__26138))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/languages/FSML.html",action__25205__auto___26159);

var action__25205__auto___26240 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26160 = params__25206__auto__;
var map__26160__$1 = ((((!((map__26160 == null)))?((((map__26160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26160.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26160):map__26160);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26160,map__26160__$1){
return (function (){
return metadocs.pages.technology.page("jinja2",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(map__26160,map__26160__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26162 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26162){
return (function (){
return metadocs.pages.technology.page("jinja2",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(vec__26162))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/jinja2.html",action__25205__auto___26240);


var action__25205__auto___26241 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26165 = params__25206__auto__;
var map__26165__$1 = ((((!((map__26165 == null)))?((((map__26165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26165):map__26165);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26165,map__26165__$1){
return (function (){
return metadocs.pages.technology.page("ANTLR3",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__26165,map__26165__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26167 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26167){
return (function (){
return metadocs.pages.technology.page("ANTLR3",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__26167))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/ANTLR3.html",action__25205__auto___26241);


var action__25205__auto___26242 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26170 = params__25206__auto__;
var map__26170__$1 = ((((!((map__26170 == null)))?((((map__26170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26170):map__26170);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26170,map__26170__$1){
return (function (){
return metadocs.pages.technology.page("StringTemplate",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(map__26170,map__26170__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26172 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26172){
return (function (){
return metadocs.pages.technology.page("StringTemplate",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(vec__26172))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/StringTemplate.html",action__25205__auto___26242);


var action__25205__auto___26243 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26175 = params__25206__auto__;
var map__26175__$1 = ((((!((map__26175 == null)))?((((map__26175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26175):map__26175);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26175,map__26175__$1){
return (function (){
return metadocs.pages.technology.page("ANTLR4",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(map__26175,map__26175__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26177 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26177){
return (function (){
return metadocs.pages.technology.page("ANTLR4",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(vec__26177))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/ANTLR4.html",action__25205__auto___26243);


var action__25205__auto___26244 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26180 = params__25206__auto__;
var map__26180__$1 = ((((!((map__26180 == null)))?((((map__26180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26180):map__26180);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26180,map__26180__$1){
return (function (){
return metadocs.pages.technology.page("Stringtemplate",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(map__26180,map__26180__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26182 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26182){
return (function (){
return metadocs.pages.technology.page("Stringtemplate",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(vec__26182))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/Stringtemplate.html",action__25205__auto___26244);


var action__25205__auto___26245 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26185 = params__25206__auto__;
var map__26185__$1 = ((((!((map__26185 == null)))?((((map__26185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26185):map__26185);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26185,map__26185__$1){
return (function (){
return metadocs.pages.technology.page("JFace",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26185,map__26185__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26187 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26187){
return (function (){
return metadocs.pages.technology.page("JFace",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26187))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/JFace.html",action__25205__auto___26245);


var action__25205__auto___26246 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26190 = params__25206__auto__;
var map__26190__$1 = ((((!((map__26190 == null)))?((((map__26190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26190):map__26190);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26190,map__26190__$1){
return (function (){
return metadocs.pages.technology.page("SWT",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26190,map__26190__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26192 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26192){
return (function (){
return metadocs.pages.technology.page("SWT",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26192))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/SWT.html",action__25205__auto___26246);


var action__25205__auto___26247 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26195 = params__25206__auto__;
var map__26195__$1 = ((((!((map__26195 == null)))?((((map__26195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26195.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26195):map__26195);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26195,map__26195__$1){
return (function (){
return metadocs.pages.technology.page("Parsec",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26195,map__26195__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26197 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26197){
return (function (){
return metadocs.pages.technology.page("Parsec",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26197))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/Parsec.html",action__25205__auto___26247);


var action__25205__auto___26248 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26200 = params__25206__auto__;
var map__26200__$1 = ((((!((map__26200 == null)))?((((map__26200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26200):map__26200);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26200,map__26200__$1){
return (function (){
return metadocs.pages.technology.page("MPS",cljs.core._conj(cljs.core.List.EMPTY,"MPS"));
});})(map__26200,map__26200__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26202 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26202){
return (function (){
return metadocs.pages.technology.page("MPS",cljs.core._conj(cljs.core.List.EMPTY,"MPS"));
});})(vec__26202))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/MPS.html",action__25205__auto___26248);


var action__25205__auto___26249 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26205 = params__25206__auto__;
var map__26205__$1 = ((((!((map__26205 == null)))?((((map__26205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26205):map__26205);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26205,map__26205__$1){
return (function (){
return metadocs.pages.technology.page("SAX",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26205,map__26205__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26207 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26207){
return (function (){
return metadocs.pages.technology.page("SAX",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26207))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/SAX.html",action__25205__auto___26249);


var action__25205__auto___26250 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26210 = params__25206__auto__;
var map__26210__$1 = ((((!((map__26210 == null)))?((((map__26210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26210):map__26210);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26210,map__26210__$1){
return (function (){
return metadocs.pages.technology.page("Xtext",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__26210,map__26210__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26212 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26212){
return (function (){
return metadocs.pages.technology.page("Xtext",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__26212))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/Xtext.html",action__25205__auto___26250);


var action__25205__auto___26251 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26215 = params__25206__auto__;
var map__26215__$1 = ((((!((map__26215 == null)))?((((map__26215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26215):map__26215);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26215,map__26215__$1){
return (function (){
return metadocs.pages.technology.page("Eclipse",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26215,map__26215__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26217 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26217){
return (function (){
return metadocs.pages.technology.page("Eclipse",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26217))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/Eclipse.html",action__25205__auto___26251);


var action__25205__auto___26252 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26220 = params__25206__auto__;
var map__26220__$1 = ((((!((map__26220 == null)))?((((map__26220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26220):map__26220);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26220,map__26220__$1){
return (function (){
return metadocs.pages.technology.page("Template Haskell",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26220,map__26220__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26222 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26222){
return (function (){
return metadocs.pages.technology.page("Template Haskell",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26222))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/Template Haskell.html",action__25205__auto___26252);


var action__25205__auto___26253 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26225 = params__25206__auto__;
var map__26225__$1 = ((((!((map__26225 == null)))?((((map__26225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26225):map__26225);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26225,map__26225__$1){
return (function (){
return metadocs.pages.technology.page("Graphviz",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(map__26225,map__26225__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26227 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26227){
return (function (){
return metadocs.pages.technology.page("Graphviz",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(vec__26227))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/Graphviz.html",action__25205__auto___26253);


var action__25205__auto___26254 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26230 = params__25206__auto__;
var map__26230__$1 = ((((!((map__26230 == null)))?((((map__26230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26230):map__26230);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26230,map__26230__$1){
return (function (){
return metadocs.pages.technology.page("scalameta",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26230,map__26230__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26232 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26232){
return (function (){
return metadocs.pages.technology.page("scalameta",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26232))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/scalameta.html",action__25205__auto___26254);


var action__25205__auto___26255 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26235 = params__25206__auto__;
var map__26235__$1 = ((((!((map__26235 == null)))?((((map__26235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26235):map__26235);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26235,map__26235__$1){
return (function (){
return metadocs.pages.technology.page("JUnit",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaFluentInternal"),"javaExternal"));
});})(map__26235,map__26235__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26237 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26237){
return (function (){
return metadocs.pages.technology.page("JUnit",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaFluentInternal"),"javaExternal"));
});})(vec__26237))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/technologies/JUnit.html",action__25205__auto___26255);

var action__25205__auto___26501 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26256 = params__25206__auto__;
var map__26256__$1 = ((((!((map__26256 == null)))?((((map__26256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26256):map__26256);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26256,map__26256__$1){
return (function (){
return metadocs.pages.concept.page("Persistence",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26256,map__26256__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26258 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26258){
return (function (){
return metadocs.pages.concept.page("Persistence",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26258))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Persistence.html",action__25205__auto___26501);


var action__25205__auto___26502 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26261 = params__25206__auto__;
var map__26261__$1 = ((((!((map__26261 == null)))?((((map__26261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26261):map__26261);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26261,map__26261__$1){
return (function (){
return metadocs.pages.concept.page("Structured Editor",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26261,map__26261__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26263 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26263){
return (function (){
return metadocs.pages.concept.page("Structured Editor",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26263))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Structured Editor.html",action__25205__auto___26502);


var action__25205__auto___26503 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26266 = params__25206__auto__;
var map__26266__$1 = ((((!((map__26266 == null)))?((((map__26266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26266):map__26266);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26266,map__26266__$1){
return (function (){
return metadocs.pages.concept.page("Reference relationship",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__26266,map__26266__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26268 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26268){
return (function (){
return metadocs.pages.concept.page("Reference relationship",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__26268))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Reference relationship.html",action__25205__auto___26503);


var action__25205__auto___26504 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26271 = params__25206__auto__;
var map__26271__$1 = ((((!((map__26271 == null)))?((((map__26271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26271):map__26271);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26271,map__26271__$1){
return (function (){
return metadocs.pages.concept.page("Static annotation",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26271,map__26271__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26273 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26273){
return (function (){
return metadocs.pages.concept.page("Static annotation",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26273))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Static annotation.html",action__25205__auto___26504);


var action__25205__auto___26505 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26276 = params__25206__auto__;
var map__26276__$1 = ((((!((map__26276 == null)))?((((map__26276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26276):map__26276);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26276,map__26276__$1){
return (function (){
return metadocs.pages.concept.page("Acceptor",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(map__26276,map__26276__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26278 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26278){
return (function (){
return metadocs.pages.concept.page("Acceptor",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(vec__26278))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Acceptor.html",action__25205__auto___26505);


var action__25205__auto___26506 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26281 = params__25206__auto__;
var map__26281__$1 = ((((!((map__26281 == null)))?((((map__26281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26281):map__26281);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26281,map__26281__$1){
return (function (){
return metadocs.pages.concept.page("Package",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26281,map__26281__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26283 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26283){
return (function (){
return metadocs.pages.concept.page("Package",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26283))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Package.html",action__25205__auto___26506);


var action__25205__auto___26507 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26286 = params__25206__auto__;
var map__26286__$1 = ((((!((map__26286 == null)))?((((map__26286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26286):map__26286);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26286,map__26286__$1){
return (function (){
return metadocs.pages.concept.page("Name binding",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"EMFXtext"));
});})(map__26286,map__26286__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26288 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26288){
return (function (){
return metadocs.pages.concept.page("Name binding",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"EMFXtext"));
});})(vec__26288))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Name binding.html",action__25205__auto___26507);


var action__25205__auto___26508 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26291 = params__25206__auto__;
var map__26291__$1 = ((((!((map__26291 == null)))?((((map__26291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26291):map__26291);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26291,map__26291__$1){
return (function (){
return metadocs.pages.concept.page("Implicit conversion",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26291,map__26291__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26293 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26293){
return (function (){
return metadocs.pages.concept.page("Implicit conversion",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26293))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Implicit conversion.html",action__25205__auto___26508);


var action__25205__auto___26509 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26296 = params__25206__auto__;
var map__26296__$1 = ((((!((map__26296 == null)))?((((map__26296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26296):map__26296);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26296,map__26296__$1){
return (function (){
return metadocs.pages.concept.page("IDE",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26296,map__26296__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26298 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26298){
return (function (){
return metadocs.pages.concept.page("IDE",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26298))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/IDE.html",action__25205__auto___26509);


var action__25205__auto___26510 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26301 = params__25206__auto__;
var map__26301__$1 = ((((!((map__26301 == null)))?((((map__26301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26301):map__26301);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26301,map__26301__$1){
return (function (){
return metadocs.pages.concept.page("Tree Walker",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(map__26301,map__26301__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26303 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26303){
return (function (){
return metadocs.pages.concept.page("Tree Walker",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(vec__26303))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Tree Walker.html",action__25205__auto___26510);


var action__25205__auto___26511 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26306 = params__25206__auto__;
var map__26306__$1 = ((((!((map__26306 == null)))?((((map__26306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26306):map__26306);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26306,map__26306__$1){
return (function (){
return metadocs.pages.concept.page("Template Processing",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"),"javaExternal"));
});})(map__26306,map__26306__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26308 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26308){
return (function (){
return metadocs.pages.concept.page("Template Processing",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"),"javaExternal"));
});})(vec__26308))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Template Processing.html",action__25205__auto___26511);


var action__25205__auto___26512 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26311 = params__25206__auto__;
var map__26311__$1 = ((((!((map__26311 == null)))?((((map__26311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26311):map__26311);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26311,map__26311__$1){
return (function (){
return metadocs.pages.concept.page("Interpolation",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26311,map__26311__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26313 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26313){
return (function (){
return metadocs.pages.concept.page("Interpolation",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26313))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Interpolation.html",action__25205__auto___26512);


var action__25205__auto___26513 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26316 = params__25206__auto__;
var map__26316__$1 = ((((!((map__26316 == null)))?((((map__26316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26316):map__26316);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26316,map__26316__$1){
return (function (){
return metadocs.pages.concept.page("External DSL",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(map__26316,map__26316__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26318 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26318){
return (function (){
return metadocs.pages.concept.page("External DSL",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(vec__26318))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/External DSL.html",action__25205__auto___26513);


var action__25205__auto___26514 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26321 = params__25206__auto__;
var map__26321__$1 = ((((!((map__26321 == null)))?((((map__26321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26321):map__26321);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26321,map__26321__$1){
return (function (){
return metadocs.pages.concept.page("Record type",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26321,map__26321__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26323 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26323){
return (function (){
return metadocs.pages.concept.page("Record type",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26323))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Record type.html",action__25205__auto___26514);


var action__25205__auto___26515 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26326 = params__25206__auto__;
var map__26326__$1 = ((((!((map__26326 == null)))?((((map__26326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26326):map__26326);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26326,map__26326__$1){
return (function (){
return metadocs.pages.concept.page("Boilerplate code",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(map__26326,map__26326__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26328 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26328){
return (function (){
return metadocs.pages.concept.page("Boilerplate code",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(vec__26328))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Boilerplate code.html",action__25205__auto___26515);


var action__25205__auto___26516 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26331 = params__25206__auto__;
var map__26331__$1 = ((((!((map__26331 == null)))?((((map__26331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26331):map__26331);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26331,map__26331__$1){
return (function (){
return metadocs.pages.concept.page("Parser",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__26331,map__26331__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26333 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26333){
return (function (){
return metadocs.pages.concept.page("Parser",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__26333))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Parser.html",action__25205__auto___26516);


var action__25205__auto___26517 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26336 = params__25206__auto__;
var map__26336__$1 = ((((!((map__26336 == null)))?((((map__26336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26336):map__26336);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26336,map__26336__$1){
return (function (){
return metadocs.pages.concept.page("Batch",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(map__26336,map__26336__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26338 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26338){
return (function (){
return metadocs.pages.concept.page("Batch",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(vec__26338))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Batch.html",action__25205__auto___26517);


var action__25205__auto___26518 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26341 = params__25206__auto__;
var map__26341__$1 = ((((!((map__26341 == null)))?((((map__26341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26341):map__26341);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26341,map__26341__$1){
return (function (){
return metadocs.pages.concept.page("OO Class",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(map__26341,map__26341__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26343 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26343){
return (function (){
return metadocs.pages.concept.page("OO Class",cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"));
});})(vec__26343))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/OO Class.html",action__25205__auto___26518);


var action__25205__auto___26519 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26346 = params__25206__auto__;
var map__26346__$1 = ((((!((map__26346 == null)))?((((map__26346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26346):map__26346);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26346,map__26346__$1){
return (function (){
return metadocs.pages.concept.page("Case Class",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26346,map__26346__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26348 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26348){
return (function (){
return metadocs.pages.concept.page("Case Class",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26348))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Case Class.html",action__25205__auto___26519);


var action__25205__auto___26520 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26351 = params__25206__auto__;
var map__26351__$1 = ((((!((map__26351 == null)))?((((map__26351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26351):map__26351);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26351,map__26351__$1){
return (function (){
return metadocs.pages.concept.page("Semantic action",cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"));
});})(map__26351,map__26351__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26353 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26353){
return (function (){
return metadocs.pages.concept.page("Semantic action",cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"));
});})(vec__26353))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Semantic action.html",action__25205__auto___26520);


var action__25205__auto___26521 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26356 = params__25206__auto__;
var map__26356__$1 = ((((!((map__26356 == null)))?((((map__26356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26356):map__26356);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26356,map__26356__$1){
return (function (){
return metadocs.pages.concept.page("Algebraic data type",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26356,map__26356__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26358 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26358){
return (function (){
return metadocs.pages.concept.page("Algebraic data type",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26358))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Algebraic data type.html",action__25205__auto___26521);


var action__25205__auto___26522 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26361 = params__25206__auto__;
var map__26361__$1 = ((((!((map__26361 == null)))?((((map__26361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26361):map__26361);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26361,map__26361__$1){
return (function (){
return metadocs.pages.concept.page("Adapter",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26361,map__26361__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26363 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26363){
return (function (){
return metadocs.pages.concept.page("Adapter",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26363))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Adapter.html",action__25205__auto___26522);


var action__25205__auto___26523 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26366 = params__25206__auto__;
var map__26366__$1 = ((((!((map__26366 == null)))?((((map__26366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26366):map__26366);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26366,map__26366__$1){
return (function (){
return metadocs.pages.concept.page("OO class",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26366,map__26366__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26368 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26368){
return (function (){
return metadocs.pages.concept.page("OO class",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26368))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/OO class.html",action__25205__auto___26523);


var action__25205__auto___26524 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26371 = params__25206__auto__;
var map__26371__$1 = ((((!((map__26371 == null)))?((((map__26371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26371):map__26371);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26371,map__26371__$1){
return (function (){
return metadocs.pages.concept.page("Metamodel",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(map__26371,map__26371__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26373 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26373){
return (function (){
return metadocs.pages.concept.page("Metamodel",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"),"EMFSirius"));
});})(vec__26373))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Metamodel.html",action__25205__auto___26524);


var action__25205__auto___26525 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26376 = params__25206__auto__;
var map__26376__$1 = ((((!((map__26376 == null)))?((((map__26376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26376):map__26376);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26376,map__26376__$1){
return (function (){
return metadocs.pages.concept.page("Grammar",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"pythonExternal"),"javaExternal"));
});})(map__26376,map__26376__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26378 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26378){
return (function (){
return metadocs.pages.concept.page("Grammar",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"Spoofax"),"pythonExternal"),"javaExternal"));
});})(vec__26378))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Grammar.html",action__25205__auto___26525);


var action__25205__auto___26526 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26381 = params__25206__auto__;
var map__26381__$1 = ((((!((map__26381 == null)))?((((map__26381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26381):map__26381);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26381,map__26381__$1){
return (function (){
return metadocs.pages.concept.page("Code generation",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(map__26381,map__26381__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26383 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26383){
return (function (){
return metadocs.pages.concept.page("Code generation",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(vec__26383))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Code generation.html",action__25205__auto___26526);


var action__25205__auto___26527 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26386 = params__25206__auto__;
var map__26386__$1 = ((((!((map__26386 == null)))?((((map__26386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26386):map__26386);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26386,map__26386__$1){
return (function (){
return metadocs.pages.concept.page("Functional constructor",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaExternal"));
});})(map__26386,map__26386__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26388 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26388){
return (function (){
return metadocs.pages.concept.page("Functional constructor",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"javaExternal"));
});})(vec__26388))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Functional constructor.html",action__25205__auto___26527);


var action__25205__auto___26528 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26391 = params__25206__auto__;
var map__26391__$1 = ((((!((map__26391 == null)))?((((map__26391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26391):map__26391);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26391,map__26391__$1){
return (function (){
return metadocs.pages.concept.page("Listener",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(map__26391,map__26391__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26393 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26393){
return (function (){
return metadocs.pages.concept.page("Listener",cljs.core._conj(cljs.core.List.EMPTY,"javaExternal"));
});})(vec__26393))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Listener.html",action__25205__auto___26528);


var action__25205__auto___26529 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26396 = params__25206__auto__;
var map__26396__$1 = ((((!((map__26396 == null)))?((((map__26396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26396):map__26396);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26396,map__26396__$1){
return (function (){
return metadocs.pages.concept.page("Command",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26396,map__26396__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26398 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26398){
return (function (){
return metadocs.pages.concept.page("Command",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26398))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Command.html",action__25205__auto___26529);


var action__25205__auto___26530 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26401 = params__25206__auto__;
var map__26401__$1 = ((((!((map__26401 == null)))?((((map__26401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26401):map__26401);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26401,map__26401__$1){
return (function (){
return metadocs.pages.concept.page("Internal DSL",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(map__26401,map__26401__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26403 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26403){
return (function (){
return metadocs.pages.concept.page("Internal DSL",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(vec__26403))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Internal DSL.html",action__25205__auto___26530);


var action__25205__auto___26531 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26406 = params__25206__auto__;
var map__26406__$1 = ((((!((map__26406 == null)))?((((map__26406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26406):map__26406);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26406,map__26406__$1){
return (function (){
return metadocs.pages.concept.page("URI",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26406,map__26406__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26408 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26408){
return (function (){
return metadocs.pages.concept.page("URI",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26408))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/URI.html",action__25205__auto___26531);


var action__25205__auto___26532 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26411 = params__25206__auto__;
var map__26411__$1 = ((((!((map__26411 == null)))?((((map__26411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26411):map__26411);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26411,map__26411__$1){
return (function (){
return metadocs.pages.concept.page("Inline Macro",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26411,map__26411__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26413 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26413){
return (function (){
return metadocs.pages.concept.page("Inline Macro",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26413))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Inline Macro.html",action__25205__auto___26532);


var action__25205__auto___26533 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26421 = params__25206__auto__;
var map__26421__$1 = ((((!((map__26421 == null)))?((((map__26421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26421):map__26421);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26421,map__26421__$1){
return (function (){
return metadocs.pages.concept.page("Parser generation",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(map__26421,map__26421__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26423 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26423){
return (function (){
return metadocs.pages.concept.page("Parser generation",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"),"javaExternal"));
});})(vec__26423))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Parser generation.html",action__25205__auto___26533);


var action__25205__auto___26534 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26426 = params__25206__auto__;
var map__26426__$1 = ((((!((map__26426 == null)))?((((map__26426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26426):map__26426);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26426,map__26426__$1){
return (function (){
return metadocs.pages.concept.page("Lexer",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26426,map__26426__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26428 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26428){
return (function (){
return metadocs.pages.concept.page("Lexer",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26428))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Lexer.html",action__25205__auto___26534);


var action__25205__auto___26535 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26431 = params__25206__auto__;
var map__26431__$1 = ((((!((map__26431 == null)))?((((map__26431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26431):map__26431);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26431,map__26431__$1){
return (function (){
return metadocs.pages.concept.page("Language Embedding",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26431,map__26431__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26433 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26433){
return (function (){
return metadocs.pages.concept.page("Language Embedding",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26433))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Language Embedding.html",action__25205__auto___26535);


var action__25205__auto___26536 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26436 = params__25206__auto__;
var map__26436__$1 = ((((!((map__26436 == null)))?((((map__26436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26436):map__26436);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26436,map__26436__$1){
return (function (){
return metadocs.pages.concept.page("Structured editor",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26436,map__26436__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26438 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26438){
return (function (){
return metadocs.pages.concept.page("Structured editor",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26438))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Structured editor.html",action__25205__auto___26536);


var action__25205__auto___26537 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26441 = params__25206__auto__;
var map__26441__$1 = ((((!((map__26441 == null)))?((((map__26441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26441):map__26441);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26441,map__26441__$1){
return (function (){
return metadocs.pages.concept.page("Quasi Quotation",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26441,map__26441__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26443 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26443){
return (function (){
return metadocs.pages.concept.page("Quasi Quotation",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26443))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Quasi Quotation.html",action__25205__auto___26537);


var action__25205__auto___26538 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26446 = params__25206__auto__;
var map__26446__$1 = ((((!((map__26446 == null)))?((((map__26446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26446):map__26446);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26446,map__26446__$1){
return (function (){
return metadocs.pages.concept.page("Quasi-quotation",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"Scala embedded"));
});})(map__26446,map__26446__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26448 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26448){
return (function (){
return metadocs.pages.concept.page("Quasi-quotation",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"),"Scala embedded"));
});})(vec__26448))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Quasi-quotation.html",action__25205__auto___26538);


var action__25205__auto___26539 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26451 = params__25206__auto__;
var map__26451__$1 = ((((!((map__26451 == null)))?((((map__26451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26451):map__26451);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26451,map__26451__$1){
return (function (){
return metadocs.pages.concept.page("Lifting",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(map__26451,map__26451__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26453 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26453){
return (function (){
return metadocs.pages.concept.page("Lifting",cljs.core._conj(cljs.core.List.EMPTY,"Scala embedded"));
});})(vec__26453))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Lifting.html",action__25205__auto___26539);


var action__25205__auto___26540 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26456 = params__25206__auto__;
var map__26456__$1 = ((((!((map__26456 == null)))?((((map__26456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26456):map__26456);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26456,map__26456__$1){
return (function (){
return metadocs.pages.concept.page("Parser combinator",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(map__26456,map__26456__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26458 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26458){
return (function (){
return metadocs.pages.concept.page("Parser combinator",cljs.core._conj(cljs.core.List.EMPTY,"HaskellQuasiQuotation"));
});})(vec__26458))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Parser combinator.html",action__25205__auto___26540);


var action__25205__auto___26541 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26461 = params__25206__auto__;
var map__26461__$1 = ((((!((map__26461 == null)))?((((map__26461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26461):map__26461);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26461,map__26461__$1){
return (function (){
return metadocs.pages.concept.page("OO interface",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26461,map__26461__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26463 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26463){
return (function (){
return metadocs.pages.concept.page("OO interface",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26463))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/OO interface.html",action__25205__auto___26541);


var action__25205__auto___26542 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26466 = params__25206__auto__;
var map__26466__$1 = ((((!((map__26466 == null)))?((((map__26466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26466):map__26466);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26466,map__26466__$1){
return (function (){
return metadocs.pages.concept.page("Template processing",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXtext"),"pythonInternal"));
});})(map__26466,map__26466__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26468 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26468){
return (function (){
return metadocs.pages.concept.page("Template processing",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXtext"),"pythonInternal"));
});})(vec__26468))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Template processing.html",action__25205__auto___26542);


var action__25205__auto___26543 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26471 = params__25206__auto__;
var map__26471__$1 = ((((!((map__26471 == null)))?((((map__26471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26471):map__26471);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26471,map__26471__$1){
return (function (){
return metadocs.pages.concept.page("Fluent API",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaFluentInternal"),"pythonInternal"));
});})(map__26471,map__26471__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26473 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26473){
return (function (){
return metadocs.pages.concept.page("Fluent API",cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaFluentInternal"),"pythonInternal"));
});})(vec__26473))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Fluent API.html",action__25205__auto___26543);


var action__25205__auto___26544 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26476 = params__25206__auto__;
var map__26476__$1 = ((((!((map__26476 == null)))?((((map__26476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26476):map__26476);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26476,map__26476__$1){
return (function (){
return metadocs.pages.concept.page("Factory",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26476,map__26476__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26478 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26478){
return (function (){
return metadocs.pages.concept.page("Factory",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26478))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Factory.html",action__25205__auto___26544);


var action__25205__auto___26545 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26481 = params__25206__auto__;
var map__26481__$1 = ((((!((map__26481 == null)))?((((map__26481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26481):map__26481);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26481,map__26481__$1){
return (function (){
return metadocs.pages.concept.page("Token",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(map__26481,map__26481__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26483 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26483){
return (function (){
return metadocs.pages.concept.page("Token",cljs.core._conj(cljs.core.List.EMPTY,"EMFXtext"));
});})(vec__26483))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Token.html",action__25205__auto___26545);


var action__25205__auto___26546 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26486 = params__25206__auto__;
var map__26486__$1 = ((((!((map__26486 == null)))?((((map__26486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26486):map__26486);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26486,map__26486__$1){
return (function (){
return metadocs.pages.concept.page("Reference",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(map__26486,map__26486__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26488 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26488){
return (function (){
return metadocs.pages.concept.page("Reference",cljs.core._conj(cljs.core.List.EMPTY,"EMFXMI"));
});})(vec__26488))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Reference.html",action__25205__auto___26546);


var action__25205__auto___26547 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26491 = params__25206__auto__;
var map__26491__$1 = ((((!((map__26491 == null)))?((((map__26491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26491):map__26491);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26491,map__26491__$1){
return (function (){
return metadocs.pages.concept.page("Exception",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(map__26491,map__26491__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26493 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26493){
return (function (){
return metadocs.pages.concept.page("Exception",cljs.core._conj(cljs.core.List.EMPTY,"pythonInternal"));
});})(vec__26493))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Exception.html",action__25205__auto___26547);


var action__25205__auto___26548 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26496 = params__25206__auto__;
var map__26496__$1 = ((((!((map__26496 == null)))?((((map__26496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26496):map__26496);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26496,map__26496__$1){
return (function (){
return metadocs.pages.concept.page("Generated code",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXMI"),"pythonExternal"),"EMFXtext"));
});})(map__26496,map__26496__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26498 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26498){
return (function (){
return metadocs.pages.concept.page("Generated code",cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"javaInfluentInternal"),"EMFXMI"),"pythonExternal"),"EMFXtext"));
});})(vec__26498))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/Generated code.html",action__25205__auto___26548);


var action__25205__auto___26549 = (function (params__25206__auto__){
if(cljs.core.map_QMARK_(params__25206__auto__)){
var map__26416 = params__25206__auto__;
var map__26416__$1 = ((((!((map__26416 == null)))?((((map__26416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26416):map__26416);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (map__26416,map__26416__$1){
return (function (){
return metadocs.pages.concept.page("dictionary",cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"));
});})(map__26416,map__26416__$1))
);
} else {
if(cljs.core.vector_QMARK_(params__25206__auto__)){
var vec__26418 = params__25206__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metadocs.state.db,cljs.core.assoc,cljs.core.cst$kw$current_DASH_page,((function (vec__26418){
return (function (){
return metadocs.pages.concept.page("dictionary",cljs.core._conj(cljs.core.List.EMPTY,"pythonExternal"));
});})(vec__26418))
);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/metalib/concepts/dictionary.html",action__25205__auto___26549);

metadocs.router.configure_BANG_ = (function metadocs$router$configure_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
return secretary.core.dispatch_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return secretary.core.locate_route(path);
})], null));

return accountant.core.dispatch_current_BANG_();
});
