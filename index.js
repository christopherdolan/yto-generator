#!/usr/bin/env node
var enUS = require('dictionary-en-us');

enUS(function(err, result) {
  var dict = result.dic.toString()
  var dictAry = dict.split("\n")
  var result = {"y": false, "t": false, "o": false}
  shuffle(dictAry).forEach(function(el) {
    if (!result["y"] && el.match('^y','i')) {
      if (el.match('/')) {
        el = el.substring(0, el.indexOf('/'))
      }
      result["y"] = el
    }
    if (!result["t"] && el.match('^t','i')) {
      if (el.match('/')) {
        el = el.substring(0, el.indexOf('/'))
      }
      result["t"] = el
    }
    if (!result["o"] && el.match('^o','i')) {
      if (el.match('/')) {
        el = el.substring(0, el.indexOf('/'))
      }
      result["o"] = el
    }
    if (result["y"] && result["t"] && result["o"]) {
      console.log(result["y"], result["t"], result["o"])
      process.exit(0)
    }
  })
});

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
