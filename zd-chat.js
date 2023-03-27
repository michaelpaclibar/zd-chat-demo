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
var rt = function(t) {
  var a = {};
  function e(n) {
    if (a[n])
      return a[n].exports;
    var o = a[n] = { i: n, l: !1, exports: {} };
    return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
  }
  return e.m = t, e.c = a, e.d = function(n, o, l) {
    e.o(n, o) || Object.defineProperty(n, o, { enumerable: !0, get: l });
  }, e.r = function(n) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
  }, e.t = function(n, o) {
    if (1 & o && (n = e(n)), 8 & o || 4 & o && typeof n == "object" && n && n.__esModule)
      return n;
    var l = /* @__PURE__ */ Object.create(null);
    if (e.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: n }), 2 & o && typeof n != "string")
      for (var m in n)
        e.d(l, m, function(d) {
          return n[d];
        }.bind(null, m));
    return l;
  }, e.n = function(n) {
    var o = n && n.__esModule ? function() {
      return n.default;
    } : function() {
      return n;
    };
    return e.d(o, "a", o), o;
  }, e.o = function(n, o) {
    return Object.prototype.hasOwnProperty.call(n, o);
  }, e.p = "https://cdn.smooch.io/", e(e.s = 6);
}([function(t, a, e) {
  var n = e(3);
  t.exports = new n();
}, function(t, a) {
  t.exports = { isFunction: function(e) {
    return typeof e == "function";
  }, isArray: function(e) {
    return Object.prototype.toString.apply(e) === "[object Array]";
  }, each: function(e, n) {
    for (var o = 0, l = e.length; o < l && n(e[o], o) !== !1; o++)
      ;
  } };
}, function(t, a, e) {
  t.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(t, a, e) {
  var n = e(4), o = e(1), l = o.each, m = o.isFunction, d = o.isArray;
  function u() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  u.prototype = { constructor: u, register: function(f, h, g) {
    var w = this.queries, O = g && this.browserIsIncapable;
    return w[f] || (w[f] = new n(f, O)), m(h) && (h = { match: h }), d(h) || (h = [h]), l(h, function(v) {
      m(v) && (v = { match: v }), w[f].addHandler(v);
    }), this;
  }, unregister: function(f, h) {
    var g = this.queries[f];
    return g && (h ? g.removeHandler(h) : (g.clear(), delete this.queries[f])), this;
  } }, t.exports = u;
}, function(t, a, e) {
  var n = e(5), o = e(1).each;
  function l(m, d) {
    this.query = m, this.isUnconditional = d, this.handlers = [], this.mql = window.matchMedia(m);
    var u = this;
    this.listener = function(f) {
      u.mql = f.currentTarget || f, u.assess();
    }, this.mql.addListener(this.listener);
  }
  l.prototype = { constuctor: l, addHandler: function(m) {
    var d = new n(m);
    this.handlers.push(d), this.matches() && d.on();
  }, removeHandler: function(m) {
    var d = this.handlers;
    o(d, function(u, f) {
      if (u.equals(m))
        return u.destroy(), !d.splice(f, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    o(this.handlers, function(m) {
      m.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var m = this.matches() ? "on" : "off";
    o(this.handlers, function(d) {
      d[m]();
    });
  } }, t.exports = l;
}, function(t, a) {
  function e(n) {
    this.options = n, !n.deferSetup && this.setup();
  }
  e.prototype = { constructor: e, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(n) {
    return this.options === n || this.options.match === n;
  } }, t.exports = e;
}, function(t, a, e) {
  e.r(a);
  var n = e(2), o = e.n(n);
  function l(i) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      i();
    }) : i();
  }
  function m(i) {
    var r = ["screen"];
    return i.minHeight && r.push("(min-height: ".concat(i.minHeight, "px)")), i.maxHeight && r.push("(max-height: ".concat(i.maxHeight, "px)")), i.minWidth && r.push("(min-width: ".concat(i.minWidth, "px)")), i.maxWidth && r.push("(max-width: ".concat(i.maxWidth, "px)")), r.join(" and ");
  }
  var d = e(0), u = e.n(d), f = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, h = ["lg", "md", "sm", "xs"];
  function g(i) {
    for (var r = 0; r < h.length; r++) {
      var c = h[r], s = f[c];
      Object.prototype.toString.call(s) !== "[object Array]" && (s = [s]);
      for (var y = 0; y < s.length; y++)
        i({ rule: s[y], size: c });
    }
  }
  function w() {
    return (w = Object.assign ? Object.assign.bind() : function(i) {
      for (var r = 1; r < arguments.length; r++) {
        var c = arguments[r];
        for (var s in c)
          Object.prototype.hasOwnProperty.call(c, s) && (i[s] = c[s]);
      }
      return i;
    }).apply(this, arguments);
  }
  function O(i) {
    return function(r) {
      if (Array.isArray(r))
        return v(r);
    }(i) || function(r) {
      if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
        return Array.from(r);
    }(i) || function(r, c) {
      if (r) {
        if (typeof r == "string")
          return v(r, c);
        var s = Object.prototype.toString.call(r).slice(8, -1);
        if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
          return Array.from(r);
        if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
          return v(r, c);
      }
    }(i) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function v(i, r) {
    (r == null || r > i.length) && (r = i.length);
    for (var c = 0, s = new Array(r); c < r; c++)
      s[c] = i[c];
    return s;
  }
  var S, p, j, M, q, T = {}, I = [], x = [], $ = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), X = /PhantomJS/.test(navigator.userAgent) && !0, _ = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if ($) {
    var B = document.createElement("a");
    B.href = "https://smooch.io/live-web-chat/?utm_source=widget", B.text = "Powered by Zendesk Sunshine", l(function() {
      document.body.appendChild(B);
    });
  }
  function G() {
    var i = document.createElement("link");
    i.rel = "stylesheet", i.type = "text/css", i.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(i);
  }
  function Y(i) {
    var r;
    window.__onWebMessengerFrameReady__ = function() {
    }, S = i, j || (r = p, g(function(Q) {
      var nt = Q.rule, ot = Q.size;
      u.a.register(m(nt), function() {
        r.contentWindow.postMessage({ type: "sizeChange", value: ot }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var c = _[0], s = 0; s < _.length; c = _[++s])
      T[c] = S[c];
    if (x) {
      for (var y = x[0], C = 0; C < x.length; y = x[++C]) {
        var L;
        (L = S).on.apply(L, O(y.args));
      }
      x = void 0;
    }
    if (q) {
      var F, P = (F = S).init.apply(F, O(q));
      q = void 0;
      for (var W = I[0], J = 0; J < I.length; W = I[++J])
        P = W.type === "then" ? P.then(W.next) : P.catch(W.next);
      I = [];
    }
  }
  var k = function(i) {
    return i.contentWindow && i.contentWindow.document;
  };
  function tt() {
    if (!p) {
      var i = null, r = !1;
      (p = document.createElement("iframe")).id = "web-messenger-container", p.frameBorder = 0, p.allowFullscreen = !0, p.allowTransparency = !0, p.scrolling = "no", p.className = o.a.iframe;
      var c = function() {
        r = !0, clearInterval(i), delete p.onload;
        var s = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, y = s ? 'nonce="'.concat(s, '"') : "", C = `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            `.concat("", `
                            <link rel="stylesheet" href="`).concat("https://cdn.smooch.io/frame.5.5.5.css", '" type="text/css" ').concat(y, ` />
                            <script src="`).concat("https://cdn.smooch.io/frame.5.5.5.min.js", '" async crossorigin="anonymous" ').concat(y, `><\/script>
                        </head>
                        <body>
                            <div id="mount"></div>
                        </body>
                    </html>
                    `);
        if ("srcdoc" in p)
          p.srcdoc = C;
        else {
          var L = k(p);
          L.open(), L.write(C), L.close();
        }
      };
      i = setInterval(function() {
        var s = k(p);
        r || !s || s.readyState !== "complete" && s.readyState !== "interactive" || c();
      }, 1e3), p.onload = function() {
        r || c();
      };
    }
    j ? M && (M.appendChild(p), M = void 0) : document.body.appendChild(p);
  }
  var et = { VERSION: "5.5.5", on: function() {
    x || (x = []);
    for (var i = arguments.length, r = new Array(i), c = 0; c < i; c++)
      r[c] = arguments[c];
    x.push({ args: r });
  }, init: function() {
    for (var i = arguments.length, r = new Array(i), c = 0; c < i; c++)
      r[c] = arguments[c];
    q = r, j = r.length > 0 && !!r[0].embedded, $ || X || l(function() {
      G(), tt();
    });
    var s = { then: function(y) {
      return I.push({ type: "then", next: y }), s;
    }, catch: function(y) {
      return I.push({ type: "catch", next: y }), s;
    } };
    return s;
  }, render: function(i) {
    p ? i.appendChild(p) : M = i;
  }, destroy: function() {
    S && (S.destroy(), p.remove ? p.remove() : p.parentNode.removeChild(p), g(function(i) {
      var r = i.rule;
      u.a.unregister(m(r));
    }), z());
  } };
  function z() {
    if (!document.getElementById("web-messenger-container")) {
      S = void 0, p = void 0, window.__onWebMessengerFrameReady__ = Y;
      for (var i = _[0], r = 0; r < _.length; i = _[++r])
        T[i] && delete T[i];
      w(T, et);
    }
  }
  z(), a.default = T;
}]);
const D = "Ym9iYmllWkQ6I0Q4WmpHNzk3WWV5ayZmVQ==", K = "https://dev.golinguist.com", R = "en-us", it = (t) => {
  const a = new XMLHttpRequest(), e = {
    translationType: "machine",
    text: t
  };
  return a.open("POST", `${K}/linguistnow/resources/locale/detectLocale/`, !1), a.setRequestHeader("Authorization", `Basic ${D}`), a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify(e)), a.status === 200 ? JSON.parse(a.responseText).detectedLanguage : null;
}, N = (t, a, e) => {
  const n = {
    sourceContent: t,
    sourceLocale: a,
    targetLocale: e,
    rnResponseProjectId: null,
    contentTypeName: "browser",
    translationType: "machine",
    incidentId: "ZD ChatBot Plugin",
    textType: "text",
    threadTypeId: 15,
    translationIterationId: 1,
    userTypeId: 3
  }, o = new XMLHttpRequest();
  if (o.open("POST", `${K}/linguistnow/resources/v1/translate/`, !1), o.setRequestHeader("Authorization", `Basic ${D}`), o.setRequestHeader("Content-Type", "application/json"), o.send(JSON.stringify(n)), o.status === 200) {
    const l = JSON.parse(o.responseText);
    return console.debug(`Running LIO Translate API: ${t}`), l.translatedText;
  }
  return null;
}, V = (t) => t.toLocaleLowerCase() !== R;
var b = /* @__PURE__ */ ((t) => (t[t.translation = 0] = "translation", t[t.answerBot = 1] = "answerBot", t[t.agent = 2] = "agent", t[t.carousel = 3] = "carousel", t))(b || {});
const H = (t, a) => {
  switch (a) {
    case 1:
      return "answerBot:" + t;
    case 0:
      return "translation:" + t;
    case 2:
      return "agent:" + t;
    case 3:
      return "carousel:" + t;
    default:
      throw Error("Invalid type");
  }
}, E = (t, a, e) => {
  const n = localStorage.getItem(t);
  if (n) {
    const o = new Map(JSON.parse(n));
    o.set(a, e), localStorage.setItem(t, JSON.stringify([...o]));
  } else {
    const o = /* @__PURE__ */ new Map();
    o.set(a, e), localStorage.setItem(t, JSON.stringify([...o]));
  }
}, U = (t, a) => {
  const e = localStorage.getItem(t);
  if (e) {
    const o = new Map(JSON.parse(e)).get(a);
    return o !== null ? o : null;
  }
  return null;
}, at = () => rt, st = at(), ct = st.default, lt = "63dd364c057947010e028fa1", ut = () => {
  if (typeof Intl < "u")
    try {
      return Intl.NumberFormat().resolvedOptions().locale.toLocaleLowerCase();
    } catch {
      return console.error("Cannot get locale from Intl"), null;
    }
  return null;
}, Z = (t) => {
  let a = ut();
  return V(a) || (a = it(t)), a;
}, A = (t, a, e) => {
  const n = H(a, e);
  let o = U(n, t);
  if (o)
    return o;
  const l = localStorage.getItem("user-locale");
  return l != null && l !== R && (o = N(t, R, l), o) ? (E(n, t, o), o) : null;
}, dt = (t) => {
  const a = t == null ? void 0 : t.toLocaleLowerCase().replace("_", "-").split("-");
  return a ? ft(a[0]) : null;
}, ft = (t) => {
  switch (t) {
    case "zh":
      return "zh-hk";
    default:
      return t;
  }
};
ct.init({
  integrationId: lt,
  canUserSeeConversationList: !1,
  delegate: {
    beforeSend(t, a) {
      if (t.type === "text") {
        const e = t == null ? void 0 : t.text;
        if (e !== null && e.length > 0) {
          const n = Z(t.text);
          if (n != null && V(n)) {
            localStorage.setItem("user-locale", n), console.debug(`Detected User Locale: ${n}`);
            const l = N(e, n, R);
            l != null && (t.text = l, E(H(a.conversation.id, b.translation), l, e));
          }
        }
      }
      return t;
    },
    beforeDisplay(t, a) {
      var l, m;
      const e = t.text, n = ((l = t.source) == null ? void 0 : l.type) === "zd:answerBot", o = ((m = t.source) == null ? void 0 : m.type) === "zd:agentWorkspace";
      if (t.type === "text")
        if (n) {
          let d = A(t.text, a.conversation.id, b.answerBot);
          d && (t.text = d, console.debug(`Original Text: "${e}" Replaced with: "${d}"`));
          const u = t.actions;
          if (u)
            for (const f of u) {
              let h = A(f.text, a.conversation.id, b.answerBot);
              h && (f.text = h, console.debug(`Original Text: "${f.text}" Replaced with: "${h}"`));
            }
        } else if (o) {
          const d = H(a.conversation.id, b.agent);
          let u = U(d, e);
          if (u)
            t.text = u, console.debug(`Original Text: "${e}" Replaced with: "${u}"`);
          else {
            const f = localStorage.getItem("user-locale"), h = Z(t.text);
            h != null && f !== h && (u = N(e, h, f), u && (E(d, e, u), t.text = u, console.debug(`Original Text: "${e}" Replaced with: "${u}"`)));
          }
        } else {
          const d = U(H(a.conversation.id, b.translation), t.text);
          d && (t.text = d, console.debug(`Original Text: "${e}" Replaced with: "${d}"`));
        }
      else if (t.type === "carousel" && n) {
        let d = t;
        for (const u of d.items) {
          const f = A(u.title, a.conversation.id, b.carousel);
          f && (u.title = f);
          const h = A(u.description, a.conversation.id, b.carousel);
          h && (u.description = h);
          for (const g of u.actions) {
            const w = A(g.text, a.conversation.id, b.carousel);
            w && (g.text = w);
            const O = localStorage.getItem("user-locale"), v = dt(O);
            v && (g.uri = g.uri.replace("en-us", v));
          }
        }
        return d;
      }
      return t;
    }
  }
});
