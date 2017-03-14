---
layout: page
title: Scala
---

# Feature Configuration

- Concrete Syntax: Pidgin
- Abstract Syntax: AST<sup>-</sup>
- Static Semantics: Check<sup>O</sup>, Check<sup>M</sup>
- Dynamic Semantics: Run<sup>M</sup>
- Translation Semantics: Stage

# Language Implementation

## Concrete Syntax

### Pidgin

<pre>
    <code from="15" to="33" src="https://raw.githubusercontent.com/softlang/metalib/master/scala/fsml/core/src/main/scala/org/softlang/fsml/FsmMacro.scala" class="scala"></code>
</pre>

## Abstract Syntax

### AST<sup>-</sup>

<pre>
    <code from="3" src="https://raw.githubusercontent.com/softlang/metalib/master/scala/fsml/core/src/main/scala/org/softlang/fsml/Ast.scala" class="scala"></code>
</pre>

## Static Semantics

### Check<sup>O</sup>

#### Single Initial

<pre>
    <code from="15" to="22" src="https://raw.githubusercontent.com/softlang/metalib/master/scala/fsml/core/src/main/scala/org/softlang/fsml/Checker.scala" class="scala"></code>
</pre>

#### Reachability

<pre>
    <code from="24" to="45" src="https://raw.githubusercontent.com/softlang/metalib/master/scala/fsml/core/src/main/scala/org/softlang/fsml/Checker.scala" class="scala"></code>
</pre>

### Check<sup>M</sup>

#### Distinct IDs

#### Distinct Events

#### Resolution

## Dynamic Semantics

### Run<sup>M</sup>

## Translation Semantics

### Stage

<hr>

# Resources

## Key Publications:
- [Eugene Burmako, Scala Macros: Let Our Powers Combine!](http://dblp.org/rec/conf/ecoop/Burmako13){:target="_blank"}
    
## Wikipedia:
- [Abstract Syntax](https://en.wikipedia.org/wiki/Abstract_syntax){:target="_blank"}
- [Concrete Syntax](https://en.wikipedia.org/wiki/Concrete_syntax){:target="_blank"}
- [Scala (programming language)](https://en.wikipedia.org/wiki/Scala_(programming_language)){:target="_blank"}