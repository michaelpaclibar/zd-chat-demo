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
var xe = function(e) {
  var t = {};
  function r(n) {
    if (t[n])
      return t[n].exports;
    var o = t[n] = { i: n, l: !1, exports: {} };
    return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }
  return r.m = e, r.c = t, r.d = function(n, o, s) {
    r.o(n, o) || Object.defineProperty(n, o, { enumerable: !0, get: s });
  }, r.r = function(n) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
  }, r.t = function(n, o) {
    if (1 & o && (n = r(n)), 8 & o || 4 & o && typeof n == "object" && n && n.__esModule)
      return n;
    var s = /* @__PURE__ */ Object.create(null);
    if (r.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: n }), 2 & o && typeof n != "string")
      for (var l in n)
        r.d(s, l, function(c) {
          return n[c];
        }.bind(null, l));
    return s;
  }, r.n = function(n) {
    var o = n && n.__esModule ? function() {
      return n.default;
    } : function() {
      return n;
    };
    return r.d(o, "a", o), o;
  }, r.o = function(n, o) {
    return Object.prototype.hasOwnProperty.call(n, o);
  }, r.p = "https://cdn.smooch.io/", r(r.s = 6);
}([function(e, t, r) {
  var n = r(3);
  e.exports = new n();
}, function(e, t) {
  e.exports = { isFunction: function(r) {
    return typeof r == "function";
  }, isArray: function(r) {
    return Object.prototype.toString.apply(r) === "[object Array]";
  }, each: function(r, n) {
    for (var o = 0, s = r.length; o < s && n(r[o], o) !== !1; o++)
      ;
  } };
}, function(e, t, r) {
  e.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(e, t, r) {
  var n = r(4), o = r(1), s = o.each, l = o.isFunction, c = o.isArray;
  function p() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  p.prototype = { constructor: p, register: function(f, h, v) {
    var y = this.queries, w = v && this.browserIsIncapable;
    return y[f] || (y[f] = new n(f, w)), l(h) && (h = { match: h }), c(h) || (h = [h]), s(h, function(x) {
      l(x) && (x = { match: x }), y[f].addHandler(x);
    }), this;
  }, unregister: function(f, h) {
    var v = this.queries[f];
    return v && (h ? v.removeHandler(h) : (v.clear(), delete this.queries[f])), this;
  } }, e.exports = p;
}, function(e, t, r) {
  var n = r(5), o = r(1).each;
  function s(l, c) {
    this.query = l, this.isUnconditional = c, this.handlers = [], this.mql = window.matchMedia(l);
    var p = this;
    this.listener = function(f) {
      p.mql = f.currentTarget || f, p.assess();
    }, this.mql.addListener(this.listener);
  }
  s.prototype = { constuctor: s, addHandler: function(l) {
    var c = new n(l);
    this.handlers.push(c), this.matches() && c.on();
  }, removeHandler: function(l) {
    var c = this.handlers;
    o(c, function(p, f) {
      if (p.equals(l))
        return p.destroy(), !c.splice(f, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    o(this.handlers, function(l) {
      l.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var l = this.matches() ? "on" : "off";
    o(this.handlers, function(c) {
      c[l]();
    });
  } }, e.exports = s;
}, function(e, t) {
  function r(n) {
    this.options = n, !n.deferSetup && this.setup();
  }
  r.prototype = { constructor: r, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(n) {
    return this.options === n || this.options.match === n;
  } }, e.exports = r;
}, function(e, t, r) {
  r.r(t);
  var n = r(2), o = r.n(n);
  function s(i) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      i();
    }) : i();
  }
  function l(i) {
    var a = ["screen"];
    return i.minHeight && a.push("(min-height: ".concat(i.minHeight, "px)")), i.maxHeight && a.push("(max-height: ".concat(i.maxHeight, "px)")), i.minWidth && a.push("(min-width: ".concat(i.minWidth, "px)")), i.maxWidth && a.push("(max-width: ".concat(i.maxWidth, "px)")), a.join(" and ");
  }
  var c = r(0), p = r.n(c), f = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, h = ["lg", "md", "sm", "xs"];
  function v(i) {
    for (var a = 0; a < h.length; a++) {
      var d = h[a], u = f[d];
      Object.prototype.toString.call(u) !== "[object Array]" && (u = [u]);
      for (var S = 0; S < u.length; S++)
        i({ rule: u[S], size: d });
    }
  }
  function y() {
    return (y = Object.assign ? Object.assign.bind() : function(i) {
      for (var a = 1; a < arguments.length; a++) {
        var d = arguments[a];
        for (var u in d)
          Object.prototype.hasOwnProperty.call(d, u) && (i[u] = d[u]);
      }
      return i;
    }).apply(this, arguments);
  }
  function w(i) {
    return function(a) {
      if (Array.isArray(a))
        return x(a);
    }(i) || function(a) {
      if (typeof Symbol < "u" && a[Symbol.iterator] != null || a["@@iterator"] != null)
        return Array.from(a);
    }(i) || function(a, d) {
      if (a) {
        if (typeof a == "string")
          return x(a, d);
        var u = Object.prototype.toString.call(a).slice(8, -1);
        if (u === "Object" && a.constructor && (u = a.constructor.name), u === "Map" || u === "Set")
          return Array.from(a);
        if (u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
          return x(a, d);
      }
    }(i) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function x(i, a) {
    (a == null || a > i.length) && (a = i.length);
    for (var d = 0, u = new Array(a); d < a; d++)
      u[d] = i[d];
    return u;
  }
  var C, m, N, O, H, M = {}, T = [], I = [], X = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), me = /PhantomJS/.test(navigator.userAgent) && !0, k = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (X) {
    var U = document.createElement("a");
    U.href = "https://smooch.io/live-web-chat/?utm_source=widget", U.text = "Powered by Zendesk Sunshine", s(function() {
      document.body.appendChild(U);
    });
  }
  function ge() {
    var i = document.createElement("link");
    i.rel = "stylesheet", i.type = "text/css", i.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(i);
  }
  function ve(i) {
    var a;
    window.__onWebMessengerFrameReady__ = function() {
    }, C = i, N || (a = m, v(function(Q) {
      var we = Q.rule, Se = Q.size;
      p.a.register(l(we), function() {
        a.contentWindow.postMessage({ type: "sizeChange", value: Se }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var d = k[0], u = 0; u < k.length; d = k[++u])
      M[d] = C[d];
    if (I) {
      for (var S = I[0], R = 0; R < I.length; S = I[++R]) {
        var A;
        (A = C).on.apply(A, w(S.args));
      }
      I = void 0;
    }
    if (H) {
      var J, j = (J = C).init.apply(J, w(H));
      H = void 0;
      for (var $ = T[0], G = 0; G < T.length; $ = T[++G])
        j = $.type === "then" ? j.then($.next) : j.catch($.next);
      T = [];
    }
  }
  var Z = function(i) {
    return i.contentWindow && i.contentWindow.document;
  };
  function ye() {
    if (!m) {
      var i = null, a = !1;
      (m = document.createElement("iframe")).id = "web-messenger-container", m.frameBorder = 0, m.allowFullscreen = !0, m.allowTransparency = !0, m.scrolling = "no", m.className = o.a.iframe;
      var d = function() {
        a = !0, clearInterval(i), delete m.onload;
        var u = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, S = u ? 'nonce="'.concat(u, '"') : "", R = `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            `.concat("", `
                            <link rel="stylesheet" href="`).concat("https://cdn.smooch.io/frame.5.5.5.css", '" type="text/css" ').concat(S, ` />
                            <script src="`).concat("https://cdn.smooch.io/frame.5.5.5.min.js", '" async crossorigin="anonymous" ').concat(S, `><\/script>
                        </head>
                        <body>
                            <div id="mount"></div>
                        </body>
                    </html>
                    `);
        if ("srcdoc" in m)
          m.srcdoc = R;
        else {
          var A = Z(m);
          A.open(), A.write(R), A.close();
        }
      };
      i = setInterval(function() {
        var u = Z(m);
        a || !u || u.readyState !== "complete" && u.readyState !== "interactive" || d();
      }, 1e3), m.onload = function() {
        a || d();
      };
    }
    N ? O && (O.appendChild(m), O = void 0) : document.body.appendChild(m);
  }
  var be = { VERSION: "5.5.5", on: function() {
    I || (I = []);
    for (var i = arguments.length, a = new Array(i), d = 0; d < i; d++)
      a[d] = arguments[d];
    I.push({ args: a });
  }, init: function() {
    for (var i = arguments.length, a = new Array(i), d = 0; d < i; d++)
      a[d] = arguments[d];
    H = a, N = a.length > 0 && !!a[0].embedded, X || me || s(function() {
      ge(), ye();
    });
    var u = { then: function(S) {
      return T.push({ type: "then", next: S }), u;
    }, catch: function(S) {
      return T.push({ type: "catch", next: S }), u;
    } };
    return u;
  }, render: function(i) {
    m ? i.appendChild(m) : O = i;
  }, destroy: function() {
    C && (C.destroy(), m.remove ? m.remove() : m.parentNode.removeChild(m), v(function(i) {
      var a = i.rule;
      p.a.unregister(l(a));
    }), V());
  } };
  function V() {
    if (!document.getElementById("web-messenger-container")) {
      C = void 0, m = void 0, window.__onWebMessengerFrameReady__ = ve;
      for (var i = k[0], a = 0; a < k.length; i = k[++a])
        M[i] && delete M[i];
      y(M, be);
    }
  }
  V(), t.default = M;
}]);
const _ = {
  brandColor: "65758e",
  conversationColor: "0099ff",
  actionColor: "0099ff"
}, Ce = "zd-chatbot-web", Ie = "1.0.11", Te = "module", ke = {
  dev: "vite",
  build: "tsc && vite build",
  test: "vitest run",
  coverage: "vitest run --coverage"
}, Ae = {
  "@types/node": "^18.13.0",
  "@types/smooch": "^5.3.3",
  "@vitest/coverage-c8": "^0.30.1",
  jsdom: "^21.1.1",
  typescript: "^4.9.3",
  vite: "^4.1.0",
  vitest: "^0.30.1"
}, _e = {
  smooch: "^5.3.3",
  terser: "^5.16.3",
  "vite-require": "^0.2.3"
}, F = {
  name: Ce,
  private: !0,
  version: Ie,
  type: Te,
  scripts: ke,
  devDependencies: Ae,
  dependencies: _e
};
var g = /* @__PURE__ */ ((e) => (e.Translation = "translation", e.AnswerBot = "answerBot", e.Agent = "agent", e.Carousel = "carousel", e.Form = "form", e))(g || {});
const b = (e, t) => `${t}:${e}`, Le = (e, t) => {
  localStorage.setItem(e, JSON.stringify([...t]));
}, D = (e) => {
  const t = localStorage.getItem(e);
  return t ? new Map(JSON.parse(t)) : null;
}, P = (e, t, r) => {
  const n = b(
    e,
    "translation"
    /* Translation */
  ), o = D(n) ?? /* @__PURE__ */ new Map();
  o.set(t, r), Le(n, o);
}, W = (e, t) => {
  const r = b(
    e,
    "translation"
    /* Translation */
  ), n = D(r);
  return (n == null ? void 0 : n.get(t)) ?? null;
}, qe = (e) => {
  localStorage.setItem("user-locale", e);
}, Me = () => {
  const e = localStorage.getItem("user-locale");
  return e == null || e === "" ? null : e;
}, Y = (e) => {
  const t = `disable-auto-translate:${e}`;
  localStorage.setItem(t, "true");
}, ee = (e) => {
  const t = `disable-auto-translate:${e}`;
  return localStorage.getItem(t) === "true";
}, Re = (e) => {
  const t = `is-locale-sent-to-server:${e}`;
  return localStorage.getItem(t) === "true";
}, De = (e) => {
  const t = `is-locale-sent-to-server:${e}`;
  localStorage.setItem(t, "true");
}, B = () => {
  const e = localStorage.getItem("lio-api-key");
  return e ? e === "" ? null : e : null;
}, z = () => {
  const e = localStorage.getItem("lio-chatbot-token");
  return e ? e === "" ? null : JSON.parse(e).access_token : null;
}, se = () => {
  const e = localStorage.getItem("lio-chatbot-token-expiration");
  return e ? new Date(e) < new Date() : !0;
}, ae = (e, t = "") => {
  t !== "" && localStorage.setItem("lio-access-token-request", t), localStorage.setItem("lio-chatbot-token", e);
  const o = new Date().getTime() + 1 * 60 * 60 * 1e3, s = new Date(o);
  localStorage.setItem("lio-chatbot-token-expiration", s.toISOString());
}, Oe = (e) => {
  e !== "" && localStorage.setItem("lio-api-key", e);
}, q = (e) => localStorage.setItem("lio-chatbot-disable-translate-feature", e ? "true" : "false"), te = () => {
  const e = localStorage.getItem("lio-chatbot-disable-translate-feature");
  return e && e === "true";
}, He = () => localStorage.getItem("lio-debug-conversationId"), ne = (e) => {
  localStorage.setItem("lio-debug-conversationId", e);
}, $e = () => {
  localStorage.removeItem("user-locale"), localStorage.removeItem("lio-chatbot-token"), localStorage.removeItem("lio-chatbot-token-expiration"), localStorage.removeItem("lio-access-token-request"), localStorage.removeItem("lio-debug-conversationId");
}, ie = "https://lio-oauth2-localhost.auth.us-east-2.amazoncognito.com", Be = "http://local.golinguist.com/read,http://local.golinguist.com/write", Ee = (e, t) => {
  const r = `${ie}/oauth2/token`, n = Be.replace(",", " "), o = new XMLHttpRequest();
  o.open("POST", `${r}`, !1), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const s = `grant_type=client_credentials&client_id=${e}&client_secret=${t}&scope=${encodeURIComponent(n)}`;
  o.send(s), o.status === 200 ? (ae(o.responseText, s), q(!1)) : (console.error(o.responseText), q(!0));
}, ce = () => {
  const e = `${ie}/oauth2/token`, t = new XMLHttpRequest();
  t.open("POST", `${e}`, !1), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const r = localStorage.getItem("lio-access-token-request");
  r !== "" && (t.send(r), t.status === 200 ? (ae(t.responseText), q(!1)) : (console.error(t.responseText), q(!0)));
}, le = "https://pbbxp1o6qg.execute-api.us-east-2.amazonaws.com/dev", E = "en-us", ue = () => {
  let e;
  try {
    return e = window.initSync ? window.initSync() : void 0, e;
  } catch {
    return "";
  }
}, de = (e) => {
  const t = new XMLHttpRequest(), r = {
    translationType: "machine",
    text: e
  };
  try {
    se() && ce();
    const n = z(), o = B(), s = ue();
    return t.open("POST", `${le}/linguistnow/resources/locale/detectLocale/`, !1), t.setRequestHeader("x-api-key", `${o}`), t.setRequestHeader("Authorization", `Bearer ${n}`), t.setRequestHeader("X-Request-ID", `${s}`), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(r)), t.status === 200 ? JSON.parse(t.responseText).detectedLanguage : null;
  } catch {
    return null;
  }
}, K = (e, t, r) => {
  const n = {
    sourceContent: e,
    sourceLocale: t,
    targetLocale: r,
    rnResponseProjectId: null,
    contentTypeName: "bot",
    translationType: "machine",
    incidentId: "ZD ChatBot Plugin",
    textType: "text",
    threadTypeId: 15,
    translationIterationId: 1,
    userTypeId: 3
  };
  try {
    se() && ce();
    const o = z(), s = B(), l = ue(), c = new XMLHttpRequest(), p = `${le}/linguistnow/resources/v1/translate/`;
    return c.open("POST", p, !1), c.setRequestHeader("x-api-key", `${s}`), c.setRequestHeader("Authorization", `Bearer ${o}`), c.setRequestHeader("X-Request-ID", `${l}`), c.setRequestHeader("Content-Type", "application/json"), c.send(JSON.stringify(n)), c.status === 200 ? JSON.parse(c.responseText).translatedText : null;
  } catch {
    return null;
  }
}, fe = (e) => e.toLocaleLowerCase() !== E, pe = () => {
  if (typeof Intl < "u")
    try {
      return Intl.NumberFormat().resolvedOptions().locale.toLocaleLowerCase();
    } catch {
      return console.error("Cannot get locale from Intl"), null;
    }
  return null;
}, he = (e) => {
  let t = pe();
  return fe(t) || (t = de(e)), t;
}, Ne = (e) => {
  const t = e == null ? void 0 : e.toLocaleLowerCase().replace("_", "-").split("-");
  if (t) {
    const r = t[0];
    switch (r) {
      case "zh":
        return "zh-hk";
      default:
        return r;
    }
  }
  return null;
}, L = (e, t, r) => {
  const n = b(t, r);
  let o = W(n, e);
  if (o)
    return o;
  const s = localStorage.getItem("user-locale");
  return s != null && s !== E && (o = K(e, E, s), o) ? (P(n, e, o), o) : null;
}, oe = (e, t, r) => {
  const n = b(e.source.id, g.Translation);
  if (!Re(n)) {
    const s = `lang: ${t}`;
    r = `${r}
${s}`, De(n);
  }
  return r;
}, re = (e, t, r) => {
  let n = W(e, t);
  if (n)
    r.text = n;
  else {
    const o = localStorage.getItem("user-locale"), s = he(r.text);
    s != null && o !== s && (n = K(t, s, o), n && (P(e, t, n), r.text = n));
  }
}, Ue = {
  beforeSend(e, t) {
    if (ne(t.conversation.id), te()) {
      if (e.type === "text") {
        let o = pe();
        e.text = oe(e, o, e.text);
      }
      return e;
    }
    const r = b(t.conversation.id, g.Agent), n = !ee(r);
    if (e.type === "text" && n) {
      const o = e == null ? void 0 : e.text;
      if (o !== null && o.length > 0) {
        let s = Me();
        if (s || (s = he(e.text), qe(s)), s != null && fe(s)) {
          let c = K(o, s, E);
          c != null && (c = oe(e, s, c), e.text = c, P(b(t.conversation.id, g.Translation), c, o));
        }
      }
    }
    return e.type === "formResponse" && n && e.fields.find((l) => l.name === "dataCapture.systemField.requester.email" && l.type === "email") && Y(r), e;
  },
  beforeDisplay(e, t) {
    var l, c;
    if (ne(t.conversation.id), te())
      return e;
    const r = e.text, n = ((l = e.source) == null ? void 0 : l.type) === "zd:answerBot", o = ((c = e.source) == null ? void 0 : c.type) === "zd:agentWorkspace", s = !ee(b(t.conversation.id, g.Agent));
    switch (e.type) {
      case "text": {
        if (n) {
          let p = L(e.text, t.conversation.id, g.Agent);
          p && (e.text = p);
          const f = e.actions;
          if (f)
            for (const h of f) {
              let v = L(h.text, t.conversation.id, g.AnswerBot);
              v && (h.text = v);
            }
        } else if (o) {
          let p = !1, f = !1, h = !1;
          const v = e.displayName === "Automated Response", y = b(t.conversation.id, g.Agent);
          let w = e;
          !v && w.metadata != null && (p = w.metadata["__zendesk_msg.source_type"] !== null && w.metadata["__zendesk_msg.source_type"] === "sunco_web", f = w.metadata["__zendesk_msg.agent.id"] !== null && w.metadata["__zendesk_msg.agent.id"] === "__trigger", h = f && p), v || h ? re(y, r, e) : s && (Y(y), re(y, r, e));
        } else {
          const p = W(b(t.conversation.id, g.Translation), e.text);
          p && (e.text = p);
        }
        return e;
      }
      case "carousel": {
        if (n) {
          let p = e;
          for (const f of p.items) {
            const h = L(f.title, t.conversation.id, g.Carousel);
            h && (f.title = h);
            const v = L(f.description, t.conversation.id, g.Carousel);
            v && (f.description = v);
            for (const y of f.actions) {
              const w = L(y.text, t.conversation.id, g.Carousel);
              w && (y.text = w);
              const x = localStorage.getItem("user-locale"), C = Ne(x);
              C && (y.uri = y.uri.replace("en-us", C));
            }
          }
          return p;
        }
        return e;
      }
      case "form": {
        if (n) {
          const p = e;
          if (p.fields.length > 0)
            for (const f of p.fields) {
              const h = L(f.label, t.conversation.id, g.Form);
              h && (f.label = h);
            }
        }
        return e;
      }
      default:
        return e;
    }
  }
}, je = () => xe, Fe = je(), Pe = Fe.default, ze = ({ integrationId: e, apiKey: t, clientId: r, clientSecret: n, chatbotOptions: o }) => {
  const s = {
    integrationId: e,
    delegate: Ue,
    canUserSeeConversationList: !1,
    imageUploadEnabled: !1,
    prechatCapture: {
      enabled: !1
    },
    menuItems: {
      imageUpload: !1,
      fileUpload: !1,
      shareLocation: !1
    },
    soundNotificationEnabled: !0,
    businessName: null,
    businessIconUrl: null,
    backgroundImageUrl: null,
    customColors: {
      brandColor: _.brandColor,
      conversationColor: _.conversationColor,
      actionColor: _.actionColor
    }
  };
  o && (s.soundNotificationEnabled = o.soundNotificationEnabled ?? !0, s.businessName = o.businessName ?? null, s.businessIconUrl = o.businessIconUrl ?? null, s.backgroundImageUrl = o.backgroundImageUrl ?? null, o.customColors && (s.customColors.brandColor = o.customColors.brandColor ?? _.brandColor, s.customColors.conversationColor = o.customColors.conversationColor ?? _.conversationColor, s.customColors.actionColor = o.customColors.actionColor ?? _.actionColor)), console.info(`Initializing ZD ChatBot plugin version: ${F.version}`), $e(), Ee(r, n), Oe(t), B() === null || B() === "" || z() === null ? (console.error(`Failed to initialize ZD ChatBot plugin version: ${F.version}. Missing api key, clientId or clientSecret`), q(!0)) : de("hello") === null && (q(!0), console.error(`Failed to initialize ZD ChatBot plugin version: ${F.version}. Invalid api key or oAuth2 token`)), Pe.init(s);
}, We = () => {
  const e = He();
  if (console.info("LIO ChatBot Debug - Display Logs"), console.info("-----------------------------------"), e) {
    const t = b(e, g.AnswerBot), r = b(e, g.Agent), n = D(b(t, g.Translation)), o = D(b(r, g.Translation));
    if (o) {
      console.info("ChatBot - Messages");
      for (const c of o)
        console.info(`Before: ${c[0]}

After: ${c[1]}`);
    }
    if (console.info("-----------------------------------"), n) {
      console.info("ChatBot - Prompts");
      for (const c of n)
        console.info(`Before: ${c[0]}

After: ${c[1]}`);
    }
    console.info("-----------------------------------");
    const s = b(e, g.Translation), l = D(b(s, g.Translation));
    if (l && (console.info("Customer Messages: (First message always include lang: {detected language} metadata"), l))
      for (const c of l)
        console.info(`Before: ${c[0]}

After: ${c[1]}`);
  }
};
window.debugModeViewLogs = We;
export {
  We as debugModeViewLogs,
  ze as initLIOChatBot
};
