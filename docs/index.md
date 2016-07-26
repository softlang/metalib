---
layout: page
title: "metalib"
---

Welcome to the metalib
a collection of language implementations utilizing metaprogramming languages and language workbenches.

[Software languages - A slightly Haskell-biased introduction](http://www.softlang.org/book){:target="_blank"}

## Introduction

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

## Technologies

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

## Resources

### Key Publications:
- [Sebastian Erdweg et al., The State of the Art in Language Workbenches](http://dblp.org/rec/conf/sle/ErdwegSVBBCGHKLKMPPSSSVVVWW13){:target="blank"}

### Wikipedia:
- [Metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming){:target="_blank"}
- [Language Workbench](https://en.wikipedia.org/wiki/Language_workbench){:target="_blank"}
