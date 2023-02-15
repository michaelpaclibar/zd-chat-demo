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
var G = function(a) {
  var c = {};
  function o(e) {
    if (c[e])
      return c[e].exports;
    var r = c[e] = { i: e, l: !1, exports: {} };
    return a[e].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
  }
  return o.m = a, o.c = c, o.d = function(e, r, d) {
    o.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: d });
  }, o.r = function(e) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, o.t = function(e, r) {
    if (1 & r && (e = o(e)), 8 & r || 4 & r && typeof e == "object" && e && e.__esModule)
      return e;
    var d = /* @__PURE__ */ Object.create(null);
    if (o.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: e }), 2 & r && typeof e != "string")
      for (var l in e)
        o.d(d, l, function(h) {
          return e[h];
        }.bind(null, l));
    return d;
  }, o.n = function(e) {
    var r = e && e.__esModule ? function() {
      return e.default;
    } : function() {
      return e;
    };
    return o.d(r, "a", r), r;
  }, o.o = function(e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, o.p = "https://cdn.smooch.io/", o(o.s = 6);
}([function(a, c, o) {
  var e = o(3);
  a.exports = new e();
}, function(a, c) {
  a.exports = { isFunction: function(o) {
    return typeof o == "function";
  }, isArray: function(o) {
    return Object.prototype.toString.apply(o) === "[object Array]";
  }, each: function(o, e) {
    for (var r = 0, d = o.length; r < d && e(o[r], r) !== !1; r++)
      ;
  } };
}, function(a, c, o) {
  a.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(a, c, o) {
  var e = o(4), r = o(1), d = r.each, l = r.isFunction, h = r.isArray;
  function g() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  g.prototype = { constructor: g, register: function(f, p, y) {
    var x = this.queries, q = y && this.browserIsIncapable;
    return x[f] || (x[f] = new e(f, q)), l(p) && (p = { match: p }), h(p) || (p = [p]), d(p, function(v) {
      l(v) && (v = { match: v }), x[f].addHandler(v);
    }), this;
  }, unregister: function(f, p) {
    var y = this.queries[f];
    return y && (p ? y.removeHandler(p) : (y.clear(), delete this.queries[f])), this;
  } }, a.exports = g;
}, function(a, c, o) {
  var e = o(5), r = o(1).each;
  function d(l, h) {
    this.query = l, this.isUnconditional = h, this.handlers = [], this.mql = window.matchMedia(l);
    var g = this;
    this.listener = function(f) {
      g.mql = f.currentTarget || f, g.assess();
    }, this.mql.addListener(this.listener);
  }
  d.prototype = { constuctor: d, addHandler: function(l) {
    var h = new e(l);
    this.handlers.push(h), this.matches() && h.on();
  }, removeHandler: function(l) {
    var h = this.handlers;
    r(h, function(g, f) {
      if (g.equals(l))
        return g.destroy(), !h.splice(f, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    r(this.handlers, function(l) {
      l.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var l = this.matches() ? "on" : "off";
    r(this.handlers, function(h) {
      h[l]();
    });
  } }, a.exports = d;
}, function(a, c) {
  function o(e) {
    this.options = e, !e.deferSetup && this.setup();
  }
  o.prototype = { constructor: o, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(e) {
    return this.options === e || this.options.match === e;
  } }, a.exports = o;
}, function(a, c, o) {
  o.r(c);
  var e = o(2), r = o.n(e);
  function d(n) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      n();
    }) : n();
  }
  function l(n) {
    var t = ["screen"];
    return n.minHeight && t.push("(min-height: ".concat(n.minHeight, "px)")), n.maxHeight && t.push("(max-height: ".concat(n.maxHeight, "px)")), n.minWidth && t.push("(min-width: ".concat(n.minWidth, "px)")), n.maxWidth && t.push("(max-width: ".concat(n.maxWidth, "px)")), t.join(" and ");
  }
  var h = o(0), g = o.n(h), f = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, p = ["lg", "md", "sm", "xs"];
  function y(n) {
    for (var t = 0; t < p.length; t++) {
      var s = p[t], i = f[s];
      Object.prototype.toString.call(i) !== "[object Array]" && (i = [i]);
      for (var m = 0; m < i.length; m++)
        n({ rule: i[m], size: s });
    }
  }
  function x() {
    return (x = Object.assign ? Object.assign.bind() : function(n) {
      for (var t = 1; t < arguments.length; t++) {
        var s = arguments[t];
        for (var i in s)
          Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i]);
      }
      return n;
    }).apply(this, arguments);
  }
  function q(n) {
    return function(t) {
      if (Array.isArray(t))
        return v(t);
    }(n) || function(t) {
      if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
        return Array.from(t);
    }(n) || function(t, s) {
      if (t) {
        if (typeof t == "string")
          return v(t, s);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        if (i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set")
          return Array.from(t);
        if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
          return v(t, s);
      }
    }(n) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function v(n, t) {
    (t == null || t > n.length) && (t = n.length);
    for (var s = 0, i = new Array(t); s < t; s++)
      i[s] = n[s];
    return i;
  }
  var w, u, W, T, M, I = {}, S = [], b = [], L = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), F = /PhantomJS/.test(navigator.userAgent) && !0, _ = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (L) {
    var j = document.createElement("a");
    j.href = "https://smooch.io/live-web-chat/?utm_source=widget", j.text = "Powered by Zendesk Sunshine", d(function() {
      document.body.appendChild(j);
    });
  }
  function D() {
    var n = document.createElement("link");
    n.rel = "stylesheet", n.type = "text/css", n.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(n);
  }
  function Q(n) {
    var t;
    window.__onWebMessengerFrameReady__ = function() {
    }, w = n, W || (t = u, y(function(B) {
      var V = B.rule, X = B.size;
      g.a.register(l(V), function() {
        t.contentWindow.postMessage({ type: "sizeChange", value: X }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var s = _[0], i = 0; i < _.length; s = _[++i])
      I[s] = w[s];
    if (b) {
      for (var m = b[0], O = 0; O < b.length; m = b[++O]) {
        var C;
        (C = w).on.apply(C, q(m.args));
      }
      b = void 0;
    }
    if (M) {
      var k, A = (k = w).init.apply(k, q(M));
      M = void 0;
      for (var H = S[0], E = 0; E < S.length; H = S[++E])
        A = H.type === "then" ? A.then(H.next) : A.catch(H.next);
      S = [];
    }
  }
  var P = function(n) {
    return n.contentWindow && n.contentWindow.document;
  };
  function z() {
    if (!u) {
      var n = null, t = !1;
      (u = document.createElement("iframe")).id = "web-messenger-container", u.frameBorder = 0, u.allowFullscreen = !0, u.allowTransparency = !0, u.scrolling = "no", u.className = r.a.iframe;
      var s = function() {
        t = !0, clearInterval(n), delete u.onload;
        var i = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, m = i ? 'nonce="'.concat(i, '"') : "", O = `
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
        if ("srcdoc" in u)
          u.srcdoc = O;
        else {
          var C = P(u);
          C.open(), C.write(O), C.close();
        }
      };
      n = setInterval(function() {
        var i = P(u);
        t || !i || i.readyState !== "complete" && i.readyState !== "interactive" || s();
      }, 1e3), u.onload = function() {
        t || s();
      };
    }
    W ? T && (T.appendChild(u), T = void 0) : document.body.appendChild(u);
  }
  var J = { VERSION: "5.5.5", on: function() {
    b || (b = []);
    for (var n = arguments.length, t = new Array(n), s = 0; s < n; s++)
      t[s] = arguments[s];
    b.push({ args: t });
  }, init: function() {
    for (var n = arguments.length, t = new Array(n), s = 0; s < n; s++)
      t[s] = arguments[s];
    M = t, W = t.length > 0 && !!t[0].embedded, L || F || d(function() {
      D(), z();
    });
    var i = { then: function(m) {
      return S.push({ type: "then", next: m }), i;
    }, catch: function(m) {
      return S.push({ type: "catch", next: m }), i;
    } };
    return i;
  }, render: function(n) {
    u ? n.appendChild(u) : T = n;
  }, destroy: function() {
    w && (w.destroy(), u.remove ? u.remove() : u.parentNode.removeChild(u), y(function(n) {
      var t = n.rule;
      g.a.unregister(l(t));
    }), R());
  } };
  function R() {
    if (!document.getElementById("web-messenger-container")) {
      w = void 0, u = void 0, window.__onWebMessengerFrameReady__ = Q;
      for (var n = _[0], t = 0; t < _.length; n = _[++t])
        I[n] && delete I[n];
      x(I, J);
    }
  }
  R(), c.default = I;
}]);
const N = "Ym9iYmllWkQ6I0Q4WmpHNzk3WWV5ayZmVQ==", U = "https://dev.golinguist.com", Z = (a) => {
  const c = new XMLHttpRequest(), o = {
    translationType: "machine",
    text: a
  };
  return c.open("POST", `${U}/linguistnow/resources/locale/detectLocale/`, !1), c.setRequestHeader("Authorization", `Basic ${N}`), c.setRequestHeader("Content-Type", "application/json"), c.send(JSON.stringify(o)), c.status === 200 ? JSON.parse(c.responseText).detectedLanguage : null;
}, K = (a, c) => {
  const o = {
    sourceContent: a,
    sourceLocale: c,
    targetLocale: "en-us",
    // We always translate back to english
    rnResponseProjectId: null,
    contentTypeName: "browser",
    translationType: "machine",
    incidentId: "ZD ChatBot Plugin",
    textType: "text",
    threadTypeId: 15,
    translationIterationId: 1,
    userTypeId: 3
  }, e = new XMLHttpRequest();
  return e.open("POST", `${U}/linguistnow/resources/v1/translate/`, !1), e.setRequestHeader("Authorization", `Basic ${N}`), e.setRequestHeader("Content-Type", "application/json"), e.send(JSON.stringify(o)), e.status === 200 ? JSON.parse(e.responseText).translatedText : null;
}, $ = () => G, Y = $(), ee = Y.default, te = "63dd364c057947010e028fa1";
ee.init({
  integrationId: te,
  canUserSeeConversationList: !1,
  delegate: {
    beforeSend(a, c) {
      const o = a.text, e = Z(o);
      if (e != null) {
        const r = K(o, e);
        r != null && (a.text = r, c.conversation.metadata = {
          original: o,
          translation: r
        }, localStorage.setItem(a.source.id, o));
      }
      return a;
    },
    beforeDisplay(a) {
      const c = localStorage.getItem(a.source.id);
      return c && (a.text = c), a;
    }
  }
});
