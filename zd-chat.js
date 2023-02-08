/*!
 * smooch 5.5.5 
 * License : https://smooch.io/terms
 * 
 * All files located in the node_modules and external directories are
 * externally maintained libraries used by this software which have their
 * own licenses; we recommend you read them, as their terms may differ from
 * the terms above.
 * 
 */
var V = function(c) {
  var d = {};
  function o(t) {
    if (d[t])
      return d[t].exports;
    var r = d[t] = { i: t, l: !1, exports: {} };
    return c[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
  }
  return o.m = c, o.c = d, o.d = function(t, r, l) {
    o.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: l });
  }, o.r = function(t) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, o.t = function(t, r) {
    if (1 & r && (t = o(t)), 8 & r || 4 & r && typeof t == "object" && t && t.__esModule)
      return t;
    var l = /* @__PURE__ */ Object.create(null);
    if (o.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: t }), 2 & r && typeof t != "string")
      for (var u in t)
        o.d(l, u, function(h) {
          return t[h];
        }.bind(null, u));
    return l;
  }, o.n = function(t) {
    var r = t && t.__esModule ? function() {
      return t.default;
    } : function() {
      return t;
    };
    return o.d(r, "a", r), r;
  }, o.o = function(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }, o.p = "https://cdn.smooch.io/", o(o.s = 6);
}([function(c, d, o) {
  var t = o(3);
  c.exports = new t();
}, function(c, d) {
  c.exports = { isFunction: function(o) {
    return typeof o == "function";
  }, isArray: function(o) {
    return Object.prototype.toString.apply(o) === "[object Array]";
  }, each: function(o, t) {
    for (var r = 0, l = o.length; r < l && t(o[r], r) !== !1; r++)
      ;
  } };
}, function(c, d, o) {
  c.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(c, d, o) {
  var t = o(4), r = o(1), l = r.each, u = r.isFunction, h = r.isArray;
  function g() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  g.prototype = { constructor: g, register: function(f, p, y) {
    var x = this.queries, M = y && this.browserIsIncapable;
    return x[f] || (x[f] = new t(f, M)), u(p) && (p = { match: p }), h(p) || (p = [p]), l(p, function(v) {
      u(v) && (v = { match: v }), x[f].addHandler(v);
    }), this;
  }, unregister: function(f, p) {
    var y = this.queries[f];
    return y && (p ? y.removeHandler(p) : (y.clear(), delete this.queries[f])), this;
  } }, c.exports = g;
}, function(c, d, o) {
  var t = o(5), r = o(1).each;
  function l(u, h) {
    this.query = u, this.isUnconditional = h, this.handlers = [], this.mql = window.matchMedia(u);
    var g = this;
    this.listener = function(f) {
      g.mql = f.currentTarget || f, g.assess();
    }, this.mql.addListener(this.listener);
  }
  l.prototype = { constuctor: l, addHandler: function(u) {
    var h = new t(u);
    this.handlers.push(h), this.matches() && h.on();
  }, removeHandler: function(u) {
    var h = this.handlers;
    r(h, function(g, f) {
      if (g.equals(u))
        return g.destroy(), !h.splice(f, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    r(this.handlers, function(u) {
      u.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var u = this.matches() ? "on" : "off";
    r(this.handlers, function(h) {
      h[u]();
    });
  } }, c.exports = l;
}, function(c, d) {
  function o(t) {
    this.options = t, !t.deferSetup && this.setup();
  }
  o.prototype = { constructor: o, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(t) {
    return this.options === t || this.options.match === t;
  } }, c.exports = o;
}, function(c, d, o) {
  o.r(d);
  var t = o(2), r = o.n(t);
  function l(n) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      n();
    }) : n();
  }
  function u(n) {
    var e = ["screen"];
    return n.minHeight && e.push("(min-height: ".concat(n.minHeight, "px)")), n.maxHeight && e.push("(max-height: ".concat(n.maxHeight, "px)")), n.minWidth && e.push("(min-width: ".concat(n.minWidth, "px)")), n.maxWidth && e.push("(max-width: ".concat(n.maxWidth, "px)")), e.join(" and ");
  }
  var h = o(0), g = o.n(h), f = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, p = ["lg", "md", "sm", "xs"];
  function y(n) {
    for (var e = 0; e < p.length; e++) {
      var a = p[e], i = f[a];
      Object.prototype.toString.call(i) !== "[object Array]" && (i = [i]);
      for (var m = 0; m < i.length; m++)
        n({ rule: i[m], size: a });
    }
  }
  function x() {
    return (x = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var i in a)
          Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
      }
      return n;
    }).apply(this, arguments);
  }
  function M(n) {
    return function(e) {
      if (Array.isArray(e))
        return v(e);
    }(n) || function(e) {
      if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e);
    }(n) || function(e, a) {
      if (e) {
        if (typeof e == "string")
          return v(e, a);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set")
          return Array.from(e);
        if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
          return v(e, a);
      }
    }(n) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function v(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var a = 0, i = new Array(e); a < e; a++)
      i[a] = n[a];
    return i;
  }
  var w, s, H, W, A, O = {}, _ = [], b = [], E = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), B = /PhantomJS/.test(navigator.userAgent) && !0, S = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (E) {
    var I = document.createElement("a");
    I.href = "https://smooch.io/live-web-chat/?utm_source=widget", I.text = "Powered by Zendesk Sunshine", l(function() {
      document.body.appendChild(I);
    });
  }
  function L() {
    var n = document.createElement("link");
    n.rel = "stylesheet", n.type = "text/css", n.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(n);
  }
  function R(n) {
    var e;
    window.__onWebMessengerFrameReady__ = function() {
    }, w = n, H || (e = s, y(function(U) {
      var K = U.rule, N = U.size;
      g.a.register(u(K), function() {
        e.contentWindow.postMessage({ type: "sizeChange", value: N }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var a = S[0], i = 0; i < S.length; a = S[++i])
      O[a] = w[a];
    if (b) {
      for (var m = b[0], j = 0; j < b.length; m = b[++j]) {
        var C;
        (C = w).on.apply(C, M(m.args));
      }
      b = void 0;
    }
    if (A) {
      var D, P = (D = w).init.apply(D, M(A));
      A = void 0;
      for (var q = _[0], F = 0; F < _.length; q = _[++F])
        P = q.type === "then" ? P.then(q.next) : P.catch(q.next);
      _ = [];
    }
  }
  var k = function(n) {
    return n.contentWindow && n.contentWindow.document;
  };
  function G() {
    if (!s) {
      var n = null, e = !1;
      (s = document.createElement("iframe")).id = "web-messenger-container", s.frameBorder = 0, s.allowFullscreen = !0, s.allowTransparency = !0, s.scrolling = "no", s.className = r.a.iframe;
      var a = function() {
        e = !0, clearInterval(n), delete s.onload;
        var i = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, m = i ? 'nonce="'.concat(i, '"') : "", j = `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            `.concat("", `
                            <link rel="stylesheet" href="`).concat("https://cdn.smooch.io/frame.5.5.5.css", '" type="text/css" ').concat(m, ` />
                            <script src="`).concat("https://cdn.smooch.io/frame.5.5.5.min.js", '" async crossorigin="anonymous" ').concat(m, `><\/script>
                        </head>
                        <body>
                            <div id="mount"></div>
                        </body>
                    </html>
                    `);
        if ("srcdoc" in s)
          s.srcdoc = j;
        else {
          var C = k(s);
          C.open(), C.write(j), C.close();
        }
      };
      n = setInterval(function() {
        var i = k(s);
        e || !i || i.readyState !== "complete" && i.readyState !== "interactive" || a();
      }, 1e3), s.onload = function() {
        e || a();
      };
    }
    H ? W && (W.appendChild(s), W = void 0) : document.body.appendChild(s);
  }
  var Q = { VERSION: "5.5.5", on: function() {
    b || (b = []);
    for (var n = arguments.length, e = new Array(n), a = 0; a < n; a++)
      e[a] = arguments[a];
    b.push({ args: e });
  }, init: function() {
    for (var n = arguments.length, e = new Array(n), a = 0; a < n; a++)
      e[a] = arguments[a];
    A = e, H = e.length > 0 && !!e[0].embedded, E || B || l(function() {
      L(), G();
    });
    var i = { then: function(m) {
      return _.push({ type: "then", next: m }), i;
    }, catch: function(m) {
      return _.push({ type: "catch", next: m }), i;
    } };
    return i;
  }, render: function(n) {
    s ? n.appendChild(s) : W = n;
  }, destroy: function() {
    w && (w.destroy(), s.remove ? s.remove() : s.parentNode.removeChild(s), y(function(n) {
      var e = n.rule;
      g.a.unregister(u(e));
    }), T());
  } };
  function T() {
    if (!document.getElementById("web-messenger-container")) {
      w = void 0, s = void 0, window.__onWebMessengerFrameReady__ = R;
      for (var n = S[0], e = 0; e < S.length; n = S[++e])
        O[n] && delete O[n];
      x(O, Q);
    }
  }
  T(), d.default = O;
}]);
const z = V.init({
  integrationId: "63dd364c057947010e028fa1",
  canUserSeeConversationList: !0,
  delegate: {
    beforeDisplay(c, d) {
      return console.log("beforeDisplay:message", c), console.log("beforeDisplay:data", d), c;
    },
    beforeSend(c, d) {
      return console.log("beforeSend:message", c), console.log("beforeSend:data", d), c;
    }
  }
}).then(function() {
});
export {
  z as init
};
