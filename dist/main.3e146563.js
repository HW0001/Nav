// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var items = window.localStorage.getItem("navSite");
console.log(items);

if (!items) {
  var _items = [{
    log: "A",
    logType: 'text',
    url: "https://www.acfun.cn/",
    alias: "acfun"
  }, {
    log: "B",
    logType: 'text',
    url: "https://www.bilibili.com/",
    alias: "bilibili"
  }];
  window.localStorage.setItem("navSite", JSON.stringify(_items));
} else {
  items = JSON.parse(items);
}

buildCard();

function buildCard() {
  $("ol>li:not(#last)").remove();
  items.forEach(function (node) {
    $("\n    <li>\n    <a href=\"".concat(node.url, "\"><div>\n    <div>").concat(node.log[0], "</div>\n    <span>").concat(node.alias, "</span>\n    </div></a></li>\n")).insertBefore($("#last"));
  });
}

$("#addsite").on("click", function () {
  var url = prompt("请输入添加网址");
  if (!url) return;

  if (url.indexOf('http://') === -1) {
    url = 'http://' + url;
  }

  var b = url.match(/http:\/\/w*\.*(\w*)/);
  var obj = {
    log: b[1][0],
    logType: 'text',
    url: "https://www.acfun.cn/",
    alias: b[1]
  };
  items.push(obj);
  window.localStorage.setItem("navSite", JSON.stringify(items));
  buildCard();
});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.3e146563.js.map