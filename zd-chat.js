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
var rt = function(o) {
  var a = {};
  function e(n) {
    if (a[n])
      return a[n].exports;
    var t = a[n] = { i: n, l: !1, exports: {} };
    return o[n].call(t.exports, t, t.exports, e), t.l = !0, t.exports;
  }
  return e.m = o, e.c = a, e.d = function(n, t, s) {
    e.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: s });
  }, e.r = function(n) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
  }, e.t = function(n, t) {
    if (1 & t && (n = e(n)), 8 & t || 4 & t && typeof n == "object" && n && n.__esModule)
      return n;
    var s = /* @__PURE__ */ Object.create(null);
    if (e.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: n }), 2 & t && typeof n != "string")
      for (var u in n)
        e.d(s, u, function(f) {
          return n[f];
        }.bind(null, u));
    return s;
  }, e.n = function(n) {
    var t = n && n.__esModule ? function() {
      return n.default;
    } : function() {
      return n;
    };
    return e.d(t, "a", t), t;
  }, e.o = function(n, t) {
    return Object.prototype.hasOwnProperty.call(n, t);
  }, e.p = "https://cdn.smooch.io/", e(e.s = 6);
}([function(o, a, e) {
  var n = e(3);
  o.exports = new n();
}, function(o, a) {
  o.exports = { isFunction: function(e) {
    return typeof e == "function";
  }, isArray: function(e) {
    return Object.prototype.toString.apply(e) === "[object Array]";
  }, each: function(e, n) {
    for (var t = 0, s = e.length; t < s && n(e[t], t) !== !1; t++)
      ;
  } };
}, function(o, a, e) {
  o.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(o, a, e) {
  var n = e(4), t = e(1), s = t.each, u = t.isFunction, f = t.isArray;
  function v() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  v.prototype = { constructor: v, register: function(p, y, m) {
    var h = this.queries, w = m && this.browserIsIncapable;
    return h[p] || (h[p] = new n(p, w)), u(y) && (y = { match: y }), f(y) || (y = [y]), s(y, function(g) {
      u(g) && (g = { match: g }), h[p].addHandler(g);
    }), this;
  }, unregister: function(p, y) {
    var m = this.queries[p];
    return m && (y ? m.removeHandler(y) : (m.clear(), delete this.queries[p])), this;
  } }, o.exports = v;
}, function(o, a, e) {
  var n = e(5), t = e(1).each;
  function s(u, f) {
    this.query = u, this.isUnconditional = f, this.handlers = [], this.mql = window.matchMedia(u);
    var v = this;
    this.listener = function(p) {
      v.mql = p.currentTarget || p, v.assess();
    }, this.mql.addListener(this.listener);
  }
  s.prototype = { constuctor: s, addHandler: function(u) {
    var f = new n(u);
    this.handlers.push(f), this.matches() && f.on();
  }, removeHandler: function(u) {
    var f = this.handlers;
    t(f, function(v, p) {
      if (v.equals(u))
        return v.destroy(), !f.splice(p, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    t(this.handlers, function(u) {
      u.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var u = this.matches() ? "on" : "off";
    t(this.handlers, function(f) {
      f[u]();
    });
  } }, o.exports = s;
}, function(o, a) {
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
  } }, o.exports = e;
}, function(o, a, e) {
  e.r(a);
  var n = e(2), t = e.n(n);
  function s(i) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      i();
    }) : i();
  }
  function u(i) {
    var r = ["screen"];
    return i.minHeight && r.push("(min-height: ".concat(i.minHeight, "px)")), i.maxHeight && r.push("(max-height: ".concat(i.maxHeight, "px)")), i.minWidth && r.push("(min-width: ".concat(i.minWidth, "px)")), i.maxWidth && r.push("(max-width: ".concat(i.maxWidth, "px)")), r.join(" and ");
  }
  var f = e(0), v = e.n(f), p = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, y = ["lg", "md", "sm", "xs"];
  function m(i) {
    for (var r = 0; r < y.length; r++) {
      var l = y[r], c = p[l];
      Object.prototype.toString.call(c) !== "[object Array]" && (c = [c]);
      for (var b = 0; b < c.length; b++)
        i({ rule: c[b], size: l });
    }
  }
  function h() {
    return (h = Object.assign ? Object.assign.bind() : function(i) {
      for (var r = 1; r < arguments.length; r++) {
        var l = arguments[r];
        for (var c in l)
          Object.prototype.hasOwnProperty.call(l, c) && (i[c] = l[c]);
      }
      return i;
    }).apply(this, arguments);
  }
  function w(i) {
    return function(r) {
      if (Array.isArray(r))
        return g(r);
    }(i) || function(r) {
      if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
        return Array.from(r);
    }(i) || function(r, l) {
      if (r) {
        if (typeof r == "string")
          return g(r, l);
        var c = Object.prototype.toString.call(r).slice(8, -1);
        if (c === "Object" && r.constructor && (c = r.constructor.name), c === "Map" || c === "Set")
          return Array.from(r);
        if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
          return g(r, l);
      }
    }(i) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function g(i, r) {
    (r == null || r > i.length) && (r = i.length);
    for (var l = 0, c = new Array(r); l < r; l++)
      c[l] = i[l];
    return c;
  }
  var x, d, T, _, W, A = {}, I = [], O = [], k = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), G = /PhantomJS/.test(navigator.userAgent) && !0, C = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (k) {
    var P = document.createElement("a");
    P.href = "https://smooch.io/live-web-chat/?utm_source=widget", P.text = "Powered by Zendesk Sunshine", s(function() {
      document.body.appendChild(P);
    });
  }
  function $() {
    var i = document.createElement("link");
    i.rel = "stylesheet", i.type = "text/css", i.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(i);
  }
  function Y(i) {
    var r;
    window.__onWebMessengerFrameReady__ = function() {
    }, x = i, T || (r = d, m(function(K) {
      var nt = K.rule, ot = K.size;
      v.a.register(u(nt), function() {
        r.contentWindow.postMessage({ type: "sizeChange", value: ot }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var l = C[0], c = 0; c < C.length; l = C[++c])
      A[l] = x[l];
    if (O) {
      for (var b = O[0], M = 0; M < O.length; b = O[++M]) {
        var L;
        (L = x).on.apply(L, w(b.args));
      }
      O = void 0;
    }
    if (W) {
      var J, R = (J = x).init.apply(J, w(W));
      W = void 0;
      for (var H = I[0], Q = 0; Q < I.length; H = I[++Q])
        R = H.type === "then" ? R.then(H.next) : R.catch(H.next);
      I = [];
    }
  }
  var F = function(i) {
    return i.contentWindow && i.contentWindow.document;
  };
  function tt() {
    if (!d) {
      var i = null, r = !1;
      (d = document.createElement("iframe")).id = "web-messenger-container", d.frameBorder = 0, d.allowFullscreen = !0, d.allowTransparency = !0, d.scrolling = "no", d.className = t.a.iframe;
      var l = function() {
        r = !0, clearInterval(i), delete d.onload;
        var c = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, b = c ? 'nonce="'.concat(c, '"') : "", M = `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            `.concat("", `
                            <link rel="stylesheet" href="`).concat("https://cdn.smooch.io/frame.5.5.5.css", '" type="text/css" ').concat(b, ` />
                            <script src="`).concat("https://cdn.smooch.io/frame.5.5.5.min.js", '" async crossorigin="anonymous" ').concat(b, `><\/script>
                        </head>
                        <body>
                            <div id="mount"></div>
                        </body>
                    </html>
                    `);
        if ("srcdoc" in d)
          d.srcdoc = M;
        else {
          var L = F(d);
          L.open(), L.write(M), L.close();
        }
      };
      i = setInterval(function() {
        var c = F(d);
        r || !c || c.readyState !== "complete" && c.readyState !== "interactive" || l();
      }, 1e3), d.onload = function() {
        r || l();
      };
    }
    T ? _ && (_.appendChild(d), _ = void 0) : document.body.appendChild(d);
  }
  var et = { VERSION: "5.5.5", on: function() {
    O || (O = []);
    for (var i = arguments.length, r = new Array(i), l = 0; l < i; l++)
      r[l] = arguments[l];
    O.push({ args: r });
  }, init: function() {
    for (var i = arguments.length, r = new Array(i), l = 0; l < i; l++)
      r[l] = arguments[l];
    W = r, T = r.length > 0 && !!r[0].embedded, k || G || s(function() {
      $(), tt();
    });
    var c = { then: function(b) {
      return I.push({ type: "then", next: b }), c;
    }, catch: function(b) {
      return I.push({ type: "catch", next: b }), c;
    } };
    return c;
  }, render: function(i) {
    d ? i.appendChild(d) : _ = i;
  }, destroy: function() {
    x && (x.destroy(), d.remove ? d.remove() : d.parentNode.removeChild(d), m(function(i) {
      var r = i.rule;
      v.a.unregister(u(r));
    }), z());
  } };
  function z() {
    if (!document.getElementById("web-messenger-container")) {
      x = void 0, d = void 0, window.__onWebMessengerFrameReady__ = Y;
      for (var i = C[0], r = 0; r < C.length; i = C[++r])
        A[i] && delete A[i];
      h(A, et);
    }
  }
  z(), a.default = A;
}]);
const D = "Ym9iYmllWkQ6I0Q4WmpHNzk3WWV5ayZmVQ==", V = "https://dev.golinguist.com", B = "en-us", it = (o) => {
  const a = new XMLHttpRequest(), e = {
    translationType: "machine",
    text: o
  };
  return a.open("POST", `${V}/linguistnow/resources/locale/detectLocale/`, !1), a.setRequestHeader("Authorization", `Basic ${D}`), a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify(e)), a.status === 200 ? JSON.parse(a.responseText).detectedLanguage : null;
}, N = (o, a, e) => {
  const n = {
    sourceContent: o,
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
  }, t = new XMLHttpRequest();
  if (t.open("POST", `${V}/linguistnow/resources/v1/translate/`, !1), t.setRequestHeader("Authorization", `Basic ${D}`), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(n)), t.status === 200) {
    const s = JSON.parse(t.responseText);
    return console.debug(`Running LIO Translate API: ${o}`), s.translatedText;
  }
  return null;
}, X = (o) => o.toLocaleLowerCase() !== B;
var S = /* @__PURE__ */ ((o) => (o[o.translation = 0] = "translation", o[o.answerBot = 1] = "answerBot", o[o.agent = 2] = "agent", o[o.carousel = 3] = "carousel", o))(S || {});
const j = (o, a) => {
  switch (a) {
    case 1:
      return "answerBot:" + o;
    case 0:
      return "translation:" + o;
    case 2:
      return "agent:" + o;
    case 3:
      return "carousel:" + o;
    default:
      throw Error("Invalid type");
  }
}, E = (o, a, e) => {
  const n = localStorage.getItem(o);
  if (n) {
    const t = new Map(JSON.parse(n));
    t.set(a, e), localStorage.setItem(o, JSON.stringify([...t]));
  } else {
    const t = /* @__PURE__ */ new Map();
    t.set(a, e), localStorage.setItem(o, JSON.stringify([...t]));
  }
}, U = (o, a) => {
  const e = localStorage.getItem(o);
  if (e) {
    const t = new Map(JSON.parse(e)).get(a);
    return t !== null ? t : null;
  }
  return null;
}, at = () => rt, st = at(), ct = st.default, lt = () => {
  if (typeof Intl < "u")
    try {
      return Intl.NumberFormat().resolvedOptions().locale.toLocaleLowerCase();
    } catch {
      return console.error("Cannot get locale from Intl"), null;
    }
  return null;
}, Z = (o) => {
  let a = lt();
  return X(a) || (a = it(o)), a;
}, q = (o, a, e) => {
  const n = j(a, e);
  let t = U(n, o);
  if (t)
    return t;
  const s = localStorage.getItem("user-locale");
  return s != null && s !== B && (t = N(o, B, s), t) ? (E(n, o, t), t) : null;
}, ut = (o) => {
  const a = o == null ? void 0 : o.toLocaleLowerCase().replace("_", "-").split("-");
  if (a) {
    const e = a[0];
    switch (e) {
      case "zh":
        return "zh-hk";
      default:
        return e;
    }
  }
  return null;
}, dt = ({ apiKey: o, chatbotOptions: a }) => {
  const e = {
    integrationId: o,
    delegate: {
      beforeSend(t, s) {
        if (t.type === "text") {
          const u = t == null ? void 0 : t.text;
          if (u !== null && u.length > 0) {
            const f = Z(t.text);
            if (f != null && X(f)) {
              localStorage.setItem("user-locale", f);
              const p = N(u, f, B);
              p != null && (t.text = p, E(j(s.conversation.id, S.translation), p, u));
            }
          }
        }
        return t;
      },
      beforeDisplay(t, s) {
        var p, y;
        const u = t.text, f = ((p = t.source) == null ? void 0 : p.type) === "zd:answerBot", v = ((y = t.source) == null ? void 0 : y.type) === "zd:agentWorkspace";
        if (t.type === "text")
          if (f) {
            let m = q(t.text, s.conversation.id, S.answerBot);
            m && (t.text = m);
            const h = t.actions;
            if (h)
              for (const w of h) {
                let g = q(w.text, s.conversation.id, S.answerBot);
                g && (w.text = g);
              }
          } else if (v) {
            const m = j(s.conversation.id, S.agent);
            let h = U(m, u);
            if (h)
              t.text = h;
            else {
              const w = localStorage.getItem("user-locale"), g = Z(t.text);
              g != null && w !== g && (h = N(u, g, w), h && (E(m, u, h), t.text = h));
            }
          } else {
            const m = U(j(s.conversation.id, S.translation), t.text);
            m && (t.text = m);
          }
        else if (t.type === "carousel" && f) {
          let m = t;
          for (const h of m.items) {
            const w = q(h.title, s.conversation.id, S.carousel);
            w && (h.title = w);
            const g = q(h.description, s.conversation.id, S.carousel);
            g && (h.description = g);
            for (const x of h.actions) {
              const d = q(x.text, s.conversation.id, S.carousel);
              d && (x.text = d);
              const T = localStorage.getItem("user-locale"), _ = ut(T);
              _ && (x.uri = x.uri.replace("en-us", _));
            }
          }
          return m;
        }
        return t;
      }
    }
  }, n = a ? { ...e, ...a } : e;
  ct.init(n);
};
export {
  dt as initLIOChatBot
};
