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
var et = function(n) {
  var a = {};
  function t(e) {
    if (a[e])
      return a[e].exports;
    var r = a[e] = { i: e, l: !1, exports: {} };
    return n[e].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
  }
  return t.m = n, t.c = a, t.d = function(e, r, c) {
    t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: c });
  }, t.r = function(e) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, t.t = function(e, r) {
    if (1 & r && (e = t(e)), 8 & r || 4 & r && typeof e == "object" && e && e.__esModule)
      return e;
    var c = /* @__PURE__ */ Object.create(null);
    if (t.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: e }), 2 & r && typeof e != "string")
      for (var u in e)
        t.d(c, u, function(f) {
          return e[f];
        }.bind(null, u));
    return c;
  }, t.n = function(e) {
    var r = e && e.__esModule ? function() {
      return e.default;
    } : function() {
      return e;
    };
    return t.d(r, "a", r), r;
  }, t.o = function(e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, t.p = "https://cdn.smooch.io/", t(t.s = 6);
}([function(n, a, t) {
  var e = t(3);
  n.exports = new e();
}, function(n, a) {
  n.exports = { isFunction: function(t) {
    return typeof t == "function";
  }, isArray: function(t) {
    return Object.prototype.toString.apply(t) === "[object Array]";
  }, each: function(t, e) {
    for (var r = 0, c = t.length; r < c && e(t[r], r) !== !1; r++)
      ;
  } };
}, function(n, a, t) {
  n.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(n, a, t) {
  var e = t(4), r = t(1), c = r.each, u = r.isFunction, f = r.isArray;
  function m() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  m.prototype = { constructor: m, register: function(h, p, y) {
    var x = this.queries, L = y && this.browserIsIncapable;
    return x[h] || (x[h] = new e(h, L)), u(p) && (p = { match: p }), f(p) || (p = [p]), c(p, function(v) {
      u(v) && (v = { match: v }), x[h].addHandler(v);
    }), this;
  }, unregister: function(h, p) {
    var y = this.queries[h];
    return y && (p ? y.removeHandler(p) : (y.clear(), delete this.queries[h])), this;
  } }, n.exports = m;
}, function(n, a, t) {
  var e = t(5), r = t(1).each;
  function c(u, f) {
    this.query = u, this.isUnconditional = f, this.handlers = [], this.mql = window.matchMedia(u);
    var m = this;
    this.listener = function(h) {
      m.mql = h.currentTarget || h, m.assess();
    }, this.mql.addListener(this.listener);
  }
  c.prototype = { constuctor: c, addHandler: function(u) {
    var f = new e(u);
    this.handlers.push(f), this.matches() && f.on();
  }, removeHandler: function(u) {
    var f = this.handlers;
    r(f, function(m, h) {
      if (m.equals(u))
        return m.destroy(), !f.splice(h, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    r(this.handlers, function(u) {
      u.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var u = this.matches() ? "on" : "off";
    r(this.handlers, function(f) {
      f[u]();
    });
  } }, n.exports = c;
}, function(n, a) {
  function t(e) {
    this.options = e, !e.deferSetup && this.setup();
  }
  t.prototype = { constructor: t, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(e) {
    return this.options === e || this.options.match === e;
  } }, n.exports = t;
}, function(n, a, t) {
  t.r(a);
  var e = t(2), r = t.n(e);
  function c(i) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      i();
    }) : i();
  }
  function u(i) {
    var o = ["screen"];
    return i.minHeight && o.push("(min-height: ".concat(i.minHeight, "px)")), i.maxHeight && o.push("(max-height: ".concat(i.maxHeight, "px)")), i.minWidth && o.push("(min-width: ".concat(i.minWidth, "px)")), i.maxWidth && o.push("(max-width: ".concat(i.maxWidth, "px)")), o.join(" and ");
  }
  var f = t(0), m = t.n(f), h = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, p = ["lg", "md", "sm", "xs"];
  function y(i) {
    for (var o = 0; o < p.length; o++) {
      var l = p[o], s = h[l];
      Object.prototype.toString.call(s) !== "[object Array]" && (s = [s]);
      for (var g = 0; g < s.length; g++)
        i({ rule: s[g], size: l });
    }
  }
  function x() {
    return (x = Object.assign ? Object.assign.bind() : function(i) {
      for (var o = 1; o < arguments.length; o++) {
        var l = arguments[o];
        for (var s in l)
          Object.prototype.hasOwnProperty.call(l, s) && (i[s] = l[s]);
      }
      return i;
    }).apply(this, arguments);
  }
  function L(i) {
    return function(o) {
      if (Array.isArray(o))
        return v(o);
    }(i) || function(o) {
      if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null)
        return Array.from(o);
    }(i) || function(o, l) {
      if (o) {
        if (typeof o == "string")
          return v(o, l);
        var s = Object.prototype.toString.call(o).slice(8, -1);
        if (s === "Object" && o.constructor && (s = o.constructor.name), s === "Map" || s === "Set")
          return Array.from(o);
        if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
          return v(o, l);
      }
    }(i) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function v(i, o) {
    (o == null || o > i.length) && (o = i.length);
    for (var l = 0, s = new Array(o); l < o; l++)
      s[l] = i[l];
    return s;
  }
  var b, d, W, T, A, _ = {}, S = [], w = [], k = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), K = /PhantomJS/.test(navigator.userAgent) && !0, I = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (k) {
    var j = document.createElement("a");
    j.href = "https://smooch.io/live-web-chat/?utm_source=widget", j.text = "Powered by Zendesk Sunshine", c(function() {
      document.body.appendChild(j);
    });
  }
  function V() {
    var i = document.createElement("link");
    i.rel = "stylesheet", i.type = "text/css", i.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(i);
  }
  function X(i) {
    var o;
    window.__onWebMessengerFrameReady__ = function() {
    }, b = i, W || (o = d, y(function(z) {
      var Y = z.rule, tt = z.size;
      m.a.register(u(Y), function() {
        o.contentWindow.postMessage({ type: "sizeChange", value: tt }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var l = I[0], s = 0; s < I.length; l = I[++s])
      _[l] = b[l];
    if (w) {
      for (var g = w[0], C = 0; C < w.length; g = w[++C]) {
        var O;
        (O = b).on.apply(O, L(g.args));
      }
      w = void 0;
    }
    if (A) {
      var J, B = (J = b).init.apply(J, L(A));
      A = void 0;
      for (var M = S[0], D = 0; D < S.length; M = S[++D])
        B = M.type === "then" ? B.then(M.next) : B.catch(M.next);
      S = [];
    }
  }
  var U = function(i) {
    return i.contentWindow && i.contentWindow.document;
  };
  function G() {
    if (!d) {
      var i = null, o = !1;
      (d = document.createElement("iframe")).id = "web-messenger-container", d.frameBorder = 0, d.allowFullscreen = !0, d.allowTransparency = !0, d.scrolling = "no", d.className = r.a.iframe;
      var l = function() {
        o = !0, clearInterval(i), delete d.onload;
        var s = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, g = s ? 'nonce="'.concat(s, '"') : "", C = `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            `.concat("", `
                            <link rel="stylesheet" href="`).concat("https://cdn.smooch.io/frame.5.5.5.css", '" type="text/css" ').concat(g, ` />
                            <script src="`).concat("https://cdn.smooch.io/frame.5.5.5.min.js", '" async crossorigin="anonymous" ').concat(g, `><\/script>
                        </head>
                        <body>
                            <div id="mount"></div>
                        </body>
                    </html>
                    `);
        if ("srcdoc" in d)
          d.srcdoc = C;
        else {
          var O = U(d);
          O.open(), O.write(C), O.close();
        }
      };
      i = setInterval(function() {
        var s = U(d);
        o || !s || s.readyState !== "complete" && s.readyState !== "interactive" || l();
      }, 1e3), d.onload = function() {
        o || l();
      };
    }
    W ? T && (T.appendChild(d), T = void 0) : document.body.appendChild(d);
  }
  var Z = { VERSION: "5.5.5", on: function() {
    w || (w = []);
    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    w.push({ args: o });
  }, init: function() {
    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    A = o, W = o.length > 0 && !!o[0].embedded, k || K || c(function() {
      V(), G();
    });
    var s = { then: function(g) {
      return S.push({ type: "then", next: g }), s;
    }, catch: function(g) {
      return S.push({ type: "catch", next: g }), s;
    } };
    return s;
  }, render: function(i) {
    d ? i.appendChild(d) : T = i;
  }, destroy: function() {
    b && (b.destroy(), d.remove ? d.remove() : d.parentNode.removeChild(d), y(function(i) {
      var o = i.rule;
      m.a.unregister(u(o));
    }), F());
  } };
  function F() {
    if (!document.getElementById("web-messenger-container")) {
      b = void 0, d = void 0, window.__onWebMessengerFrameReady__ = X;
      for (var i = I[0], o = 0; o < I.length; i = I[++o])
        _[i] && delete _[i];
      x(_, Z);
    }
  }
  F(), a.default = _;
}]);
const Q = "Ym9iYmllWkQ6I0Q4WmpHNzk3WWV5ayZmVQ==", $ = "https://dev.golinguist.com", q = "en-us", nt = (n) => {
  const a = new XMLHttpRequest(), t = {
    translationType: "machine",
    text: n
  };
  return a.open("POST", `${$}/linguistnow/resources/locale/detectLocale/`, !1), a.setRequestHeader("Authorization", `Basic ${Q}`), a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify(t)), a.status === 200 ? JSON.parse(a.responseText).detectedLanguage : null;
}, P = (n, a, t) => {
  const e = {
    sourceContent: n,
    sourceLocale: a,
    targetLocale: t,
    rnResponseProjectId: null,
    contentTypeName: "browser",
    translationType: "machine",
    incidentId: "ZD ChatBot Plugin",
    textType: "text",
    threadTypeId: 15,
    translationIterationId: 1,
    userTypeId: 3
  }, r = new XMLHttpRequest();
  if (r.open("POST", `${$}/linguistnow/resources/v1/translate/`, !1), r.setRequestHeader("Authorization", `Basic ${Q}`), r.setRequestHeader("Content-Type", "application/json"), r.send(JSON.stringify(e)), r.status === 200) {
    const c = JSON.parse(r.responseText);
    return console.debug(`Running LIO Translate API: ${n}`), c.translatedText;
  }
  return null;
}, ot = (n) => n.toLocaleLowerCase() !== q;
var H = /* @__PURE__ */ ((n) => (n[n.translation = 0] = "translation", n[n.answerBot = 1] = "answerBot", n))(H || {});
const R = (n, a) => {
  switch (a) {
    case 1:
      return "answerBot:" + n;
    case 0:
      return "translation:" + n;
    default:
      throw Error("Invalid type");
  }
}, N = (n, a, t) => {
  const e = localStorage.getItem(n);
  if (e) {
    const r = new Map(JSON.parse(e));
    r.set(a, t), localStorage.setItem(n, JSON.stringify([...r]));
  } else {
    const r = /* @__PURE__ */ new Map();
    r.set(a, t), localStorage.setItem(n, JSON.stringify([...r]));
  }
}, E = (n, a) => {
  const t = localStorage.getItem(n);
  if (t) {
    const r = new Map(JSON.parse(t)).get(a);
    return r !== null ? r : null;
  }
  return null;
}, rt = () => et, it = rt(), at = it.default, st = "63dd364c057947010e028fa1", ct = () => {
  if (typeof Intl < "u")
    try {
      return Intl.NumberFormat().resolvedOptions().locale.toLocaleLowerCase();
    } catch {
      return console.error("Cannot get locale from Intl"), null;
    }
  return null;
}, lt = (n) => {
  let a = nt(n);
  return a || (console.debug("running fallback locale detection.. checking browser locale"), a = ct()), a;
};
at.init({
  integrationId: st,
  canUserSeeConversationList: !1,
  delegate: {
    beforeSend(n, a) {
      if (n.type === "text") {
        const t = n == null ? void 0 : n.text;
        if (t !== null && t.length > 0) {
          const e = lt(n.text);
          if (e != null && ot(e)) {
            localStorage.setItem("locale", e), console.debug(`Detected Locale: ${e}`);
            const c = P(t, e, q);
            c != null && (n.text = c, N(R(a.conversation.id, H.translation), c, t));
          }
        }
      }
      return n;
    },
    beforeDisplay(n, a) {
      var r;
      const t = n.text, e = ((r = n.source) == null ? void 0 : r.type) === "zd:answerBot";
      if (n.type === "text")
        if (e) {
          const c = R(a.conversation.id, H.answerBot), u = localStorage.getItem("locale");
          let f = E(c, t);
          f ? n.text = f : u != null && (f = P(t, q, u), f && (N(c, t, f), n.text = f));
          const m = n.actions;
          if (m)
            for (const h of m) {
              let p = E(c, h.text);
              p ? h.text = p : (p = P(h.text, q, u), p && (N(c, h.text, p), h.text = p));
            }
        } else {
          const c = E(R(a.conversation.id, H.translation), n.text);
          c && (n.text = c, console.debug(`Text Replaced: "${t}" with "${c}"`));
        }
      return n;
    }
  }
  // webhook
});
