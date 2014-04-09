A module that only contains a directive for adding the "active" class on the
active tab in the bootstrap navbar. (It'll work in any framework that uses the
"active" class on the active tab in the navbar).

This is a pure angular module (no jquery), and it will also work with hash urls containing data. ([i.g.][1] `#/this/is/path?this=is&some=data`)

You just add the module as a dependency and `auto-active` to one of the ancestors of the menu. Like this:

    <ul auto-active>
        <li><a href="#/">main</a></li>
        <li><a href="#/first">first</a></li>
        <li><a href="#/second">second</a></li>
        <li><a href="#/third">third</a></li>
    </ul>

And the module look like this:
https://github.com/Karl-Gustav/autoActive/blob/master/autoActive.js

\* (You can of course just use the directive part)

\** It's also worth noticing that this doesn't work for empty hashes ([i.g.][1] `example.com/#` or just `example.com`) it needs to have at least `example.com/#/` or just `example.com#/`. But this happens automatically with ngResource and the like.

And here is the fiddle: http://jsfiddle.net/gy2an/8/


  [1]: http://www.elearnenglishlanguage.com/blog/english-mistakes/eg-vs-ie/