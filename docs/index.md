---
layout: page
title: "metalib"
---
<div class="hero">
    <p class="hero-element">metalib</p>
    <p class="hero-element">A collection of language implementations utilizing metaprogramming languages and language workbenches.</p>
</div>

<hr>

## Introduction

At its current state we only provide implementations for the Finite State Machine language (FSML).
The FSML is, as its name suggests, a tiny language to describe state machines.
As an example for such a state machine use the following representation of a turnstile in the FSML's textual syntax we 
want to implement.

{% highlight text %}
initial state locked {
    ticket / collect -> unlocked;
    pass / alarm -> exception;
}

state unlocked {
    ticket / eject;
    pass -> locked;
}

state exception {
    ticket / eject;
    pass;
    mute;
    release -> locked;
}
{% endhighlight %}

For each technology we want to provide a guide with the same underlying template.
The template consists of the following steps:

- Abstract Syntax Tree
- Parser
- AST Transformation
- Constraint Checking
- Interpreter
- Source Code Generation
- Pretty Printing
- Visualization
- Integrated Development Environment Services

Not all technologies need or can make use of all the described steps due to the nature of realization
differences of metaprogramming facilities.


Because the scope of this repository is limited to the specific implementation details, explanations of most basic
patterns and concepts are not covered.
To deepen the knowledge of these patterns and concepts take a look into the upcoming book
[Software languages - A slightly Haskell-biased introduction](http://www.softlang.org/book){:target="_blank"}
by Ralf Lämmel.


## Technologies

The list of technologies does not claim to cover the whole space of metaprogramming languages
and language workspaces.
The work done so far includes:

<ul>
{% for technology in site.technologies %}
<li>
    <a href="{{ site.baseurl }}{{ technology.url }}">
        {{ technology.title }}
    </a>
</li>
{% endfor %}
</ul>

## Related Work

### Language Workbenches

### Metaprograming Languages

## Resources

### Key Publications:
- [Sebastian Erdweg et al., The State of the Art in Language Workbenches](http://dblp.org/rec/conf/sle/ErdwegSVBBCGHKLKMPPSSSVVVWW13){:target="blank"}

### Wikipedia:
- [Abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree){:target="_blank"}
- [Interpreter](https://en.wikipedia.org/wiki/Interpreter_(computing)){:target="_blank"}
- [Integrated Development Environment](https://en.wikipedia.org/wiki/Integrated_development_environment){:target="_blank"}
- [Language Workbench](https://en.wikipedia.org/wiki/Language_workbench){:target="_blank"}
- [Metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming){:target="_blank"}
- [Parser](https://en.wikipedia.org/wiki/Parser){:target="_blank"}
- [Pretty Printing](https://en.wikipedia.org/wiki/Prettyprint){:target="_blank"}
- [Source Code Generation](https://en.wikipedia.org/wiki/Source_code_generation){:target="_blank"}
