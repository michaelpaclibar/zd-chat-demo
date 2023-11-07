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
  function r(o) {
    if (t[o])
      return t[o].exports;
    var n = t[o] = { i: o, l: !1, exports: {} };
    return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
  }
  return r.m = e, r.c = t, r.d = function(o, n, s) {
    r.o(o, n) || Object.defineProperty(o, n, { enumerable: !0, get: s });
  }, r.r = function(o) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
  }, r.t = function(o, n) {
    if (1 & n && (o = r(o)), 8 & n || 4 & n && typeof o == "object" && o && o.__esModule)
      return o;
    var s = /* @__PURE__ */ Object.create(null);
    if (r.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: o }), 2 & n && typeof o != "string")
      for (var c in o)
        r.d(s, c, function(p) {
          return o[p];
        }.bind(null, c));
    return s;
  }, r.n = function(o) {
    var n = o && o.__esModule ? function() {
      return o.default;
    } : function() {
      return o;
    };
    return r.d(n, "a", n), n;
  }, r.o = function(o, n) {
    return Object.prototype.hasOwnProperty.call(o, n);
  }, r.p = "https://cdn.smooch.io/", r(r.s = 6);
}([function(e, t, r) {
  var o = r(3);
  e.exports = new o();
}, function(e, t) {
  e.exports = { isFunction: function(r) {
    return typeof r == "function";
  }, isArray: function(r) {
    return Object.prototype.toString.apply(r) === "[object Array]";
  }, each: function(r, o) {
    for (var n = 0, s = r.length; n < s && o(r[n], n) !== !1; n++)
      ;
  } };
}, function(e, t, r) {
  e.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(e, t, r) {
  var o = r(4), n = r(1), s = n.each, c = n.isFunction, p = n.isArray;
  function f() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  f.prototype = { constructor: f, register: function(u, h, g) {
    var v = this.queries, y = g && this.browserIsIncapable;
    return v[u] || (v[u] = new o(u, y)), c(h) && (h = { match: h }), p(h) || (h = [h]), s(h, function(x) {
      c(x) && (x = { match: x }), v[u].addHandler(x);
    }), this;
  }, unregister: function(u, h) {
    var g = this.queries[u];
    return g && (h ? g.removeHandler(h) : (g.clear(), delete this.queries[u])), this;
  } }, e.exports = f;
}, function(e, t, r) {
  var o = r(5), n = r(1).each;
  function s(c, p) {
    this.query = c, this.isUnconditional = p, this.handlers = [], this.mql = window.matchMedia(c);
    var f = this;
    this.listener = function(u) {
      f.mql = u.currentTarget || u, f.assess();
    }, this.mql.addListener(this.listener);
  }
  s.prototype = { constuctor: s, addHandler: function(c) {
    var p = new o(c);
    this.handlers.push(p), this.matches() && p.on();
  }, removeHandler: function(c) {
    var p = this.handlers;
    n(p, function(f, u) {
      if (f.equals(c))
        return f.destroy(), !p.splice(u, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    n(this.handlers, function(c) {
      c.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var c = this.matches() ? "on" : "off";
    n(this.handlers, function(p) {
      p[c]();
    });
  } }, e.exports = s;
}, function(e, t) {
  function r(o) {
    this.options = o, !o.deferSetup && this.setup();
  }
  r.prototype = { constructor: r, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(o) {
    return this.options === o || this.options.match === o;
  } }, e.exports = r;
}, function(e, t, r) {
  r.r(t);
  var o = r(2), n = r.n(o);
  function s(i) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      i();
    }) : i();
  }
  function c(i) {
    var a = ["screen"];
    return i.minHeight && a.push("(min-height: ".concat(i.minHeight, "px)")), i.maxHeight && a.push("(max-height: ".concat(i.maxHeight, "px)")), i.minWidth && a.push("(min-width: ".concat(i.minWidth, "px)")), i.maxWidth && a.push("(max-width: ".concat(i.maxWidth, "px)")), a.join(" and ");
  }
  var p = r(0), f = r.n(p), u = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, h = ["lg", "md", "sm", "xs"];
  function g(i) {
    for (var a = 0; a < h.length; a++) {
      var d = h[a], l = u[d];
      Object.prototype.toString.call(l) !== "[object Array]" && (l = [l]);
      for (var b = 0; b < l.length; b++)
        i({ rule: l[b], size: d });
    }
  }
  function v() {
    return (v = Object.assign ? Object.assign.bind() : function(i) {
      for (var a = 1; a < arguments.length; a++) {
        var d = arguments[a];
        for (var l in d)
          Object.prototype.hasOwnProperty.call(d, l) && (i[l] = d[l]);
      }
      return i;
    }).apply(this, arguments);
  }
  function y(i) {
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
        var l = Object.prototype.toString.call(a).slice(8, -1);
        if (l === "Object" && a.constructor && (l = a.constructor.name), l === "Map" || l === "Set")
          return Array.from(a);
        if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
          return x(a, d);
      }
    }(i) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function x(i, a) {
    (a == null || a > i.length) && (a = i.length);
    for (var d = 0, l = new Array(a); d < a; d++)
      l[d] = i[d];
    return l;
  }
  var S, m, N, O, H, R = {}, I = [], T = [], K = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), he = /PhantomJS/.test(navigator.userAgent) && !0, k = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (K) {
    var U = document.createElement("a");
    U.href = "https://smooch.io/live-web-chat/?utm_source=widget", U.text = "Powered by Zendesk Sunshine", s(function() {
      document.body.appendChild(U);
    });
  }
  function me() {
    var i = document.createElement("link");
    i.rel = "stylesheet", i.type = "text/css", i.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(i);
  }
  function ge(i) {
    var a;
    window.__onWebMessengerFrameReady__ = function() {
    }, S = i, N || (a = m, g(function(G) {
      var be = G.rule, we = G.size;
      f.a.register(c(be), function() {
        a.contentWindow.postMessage({ type: "sizeChange", value: we }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var d = k[0], l = 0; l < k.length; d = k[++l])
      R[d] = S[d];
    if (T) {
      for (var b = T[0], M = 0; M < T.length; b = T[++M]) {
        var _;
        (_ = S).on.apply(_, y(b.args));
      }
      T = void 0;
    }
    if (H) {
      var J, j = (J = S).init.apply(J, y(H));
      H = void 0;
      for (var D = I[0], V = 0; V < I.length; D = I[++V])
        j = D.type === "then" ? j.then(D.next) : j.catch(D.next);
      I = [];
    }
  }
  var Z = function(i) {
    return i.contentWindow && i.contentWindow.document;
  };
  function ve() {
    if (!m) {
      var i = null, a = !1;
      (m = document.createElement("iframe")).id = "web-messenger-container", m.frameBorder = 0, m.allowFullscreen = !0, m.allowTransparency = !0, m.scrolling = "no", m.className = n.a.iframe;
      var d = function() {
        a = !0, clearInterval(i), delete m.onload;
        var l = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, b = l ? 'nonce="'.concat(l, '"') : "", M = `
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
        if ("srcdoc" in m)
          m.srcdoc = M;
        else {
          var _ = Z(m);
          _.open(), _.write(M), _.close();
        }
      };
      i = setInterval(function() {
        var l = Z(m);
        a || !l || l.readyState !== "complete" && l.readyState !== "interactive" || d();
      }, 1e3), m.onload = function() {
        a || d();
      };
    }
    N ? O && (O.appendChild(m), O = void 0) : document.body.appendChild(m);
  }
  var ye = { VERSION: "5.5.5", on: function() {
    T || (T = []);
    for (var i = arguments.length, a = new Array(i), d = 0; d < i; d++)
      a[d] = arguments[d];
    T.push({ args: a });
  }, init: function() {
    for (var i = arguments.length, a = new Array(i), d = 0; d < i; d++)
      a[d] = arguments[d];
    H = a, N = a.length > 0 && !!a[0].embedded, K || he || s(function() {
      me(), ve();
    });
    var l = { then: function(b) {
      return I.push({ type: "then", next: b }), l;
    }, catch: function(b) {
      return I.push({ type: "catch", next: b }), l;
    } };
    return l;
  }, render: function(i) {
    m ? i.appendChild(m) : O = i;
  }, destroy: function() {
    S && (S.destroy(), m.remove ? m.remove() : m.parentNode.removeChild(m), g(function(i) {
      var a = i.rule;
      f.a.unregister(c(a));
    }), X());
  } };
  function X() {
    if (!document.getElementById("web-messenger-container")) {
      S = void 0, m = void 0, window.__onWebMessengerFrameReady__ = ge;
      for (var i = k[0], a = 0; a < k.length; i = k[++a])
        R[i] && delete R[i];
      v(R, ye);
    }
  }
  X(), t.default = R;
}]);
const A = {
  brandColor: "65758e",
  conversationColor: "0099ff",
  actionColor: "0099ff"
}, Se = "zd-chatbot-web", Ce = "1.0.10", Te = "module", Ie = {
  dev: "vite",
  build: "tsc && vite build",
  test: "vitest run",
  coverage: "vitest run --coverage"
}, ke = {
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
}, $ = {
  name: Se,
  private: !0,
  version: Ce,
  type: Te,
  scripts: Ie,
  devDependencies: ke,
  dependencies: _e
};
var w = /* @__PURE__ */ ((e) => (e.Translation = "translation", e.AnswerBot = "answerBot", e.Agent = "agent", e.Carousel = "carousel", e.Form = "form", e))(w || {});
const C = (e, t) => `${t}:${e}`, Ae = (e, t) => {
  localStorage.setItem(e, JSON.stringify([...t]));
}, oe = (e) => {
  const t = localStorage.getItem(e);
  return t ? new Map(JSON.parse(t)) : null;
}, F = (e, t, r) => {
  const o = C(
    e,
    "translation"
    /* Translation */
  ), n = oe(o) ?? /* @__PURE__ */ new Map();
  n.set(t, r), Ae(o, n);
}, P = (e, t) => {
  const r = C(
    e,
    "translation"
    /* Translation */
  ), o = oe(r);
  return (o == null ? void 0 : o.get(t)) ?? null;
}, Le = (e) => {
  localStorage.setItem("user-locale", e);
}, qe = () => {
  const e = localStorage.getItem("user-locale");
  return e == null || e === "" ? null : e;
}, Q = (e) => {
  const t = `disable-auto-translate:${e}`;
  localStorage.setItem(t, "true");
}, Y = (e) => {
  const t = `disable-auto-translate:${e}`;
  return localStorage.getItem(t) === "true";
}, Re = (e) => {
  const t = `is-locale-sent-to-server:${e}`;
  return localStorage.getItem(t) === "true";
}, Me = (e) => {
  const t = `is-locale-sent-to-server:${e}`;
  localStorage.setItem(t, "true");
}, E = () => {
  const e = localStorage.getItem("lio-api-key");
  return e ? e === "" ? null : e : null;
}, W = () => {
  const e = localStorage.getItem("lio-chatbot-token");
  return e ? e === "" ? null : JSON.parse(e).access_token : null;
}, re = () => {
  const e = localStorage.getItem("lio-chatbot-token-expiration");
  return e ? new Date(e) < new Date() : !0;
}, se = (e, t = "") => {
  t !== "" && localStorage.setItem("lio-access-token-request", t), localStorage.setItem("lio-chatbot-token", e);
  const n = new Date().getTime() + 1 * 60 * 60 * 1e3, s = new Date(n);
  localStorage.setItem("lio-chatbot-token-expiration", s.toISOString());
}, Oe = (e) => {
  e !== "" && localStorage.setItem("lio-api-key", e);
}, q = (e) => localStorage.setItem("lio-chatbot-disable-translate-feature", e ? "true" : "false"), ee = () => {
  const e = localStorage.getItem("lio-chatbot-disable-translate-feature");
  return e && e === "true";
}, He = () => {
  localStorage.removeItem("user-locale"), localStorage.removeItem("lio-chatbot-token"), localStorage.removeItem("lio-chatbot-token-expiration"), localStorage.removeItem("lio-access-token-request");
}, ae = "https://lio-oauth2-localhost.auth.us-east-2.amazoncognito.com", De = "http://local.golinguist.com/read,http://local.golinguist.com/write", $e = (e, t) => {
  const r = `${ae}/oauth2/token`, o = De.replace(",", " "), n = new XMLHttpRequest();
  n.open("POST", `${r}`, !1), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const s = `grant_type=client_credentials&client_id=${e}&client_secret=${t}&scope=${encodeURIComponent(o)}`;
  n.send(s), n.status === 200 ? (se(n.responseText, s), q(!1)) : (console.error(n.responseText), q(!0));
}, ie = () => {
  const e = `${ae}/oauth2/token`, t = new XMLHttpRequest();
  t.open("POST", `${e}`, !1), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const r = localStorage.getItem("lio-access-token-request");
  r !== "" && (t.send(r), t.status === 200 ? (se(t.responseText), q(!1)) : (console.error(t.responseText), q(!0)));
}, ce = "https://pbbxp1o6qg.execute-api.us-east-2.amazonaws.com/dev", B = "en-us", le = () => {
  let e;
  try {
    return e = window.getRequestToken ? window.getRequestToken() : void 0, e;
  } catch {
    return "";
  }
}, ue = (e) => {
  const t = new XMLHttpRequest(), r = le();
  t.setRequestHeader("X-Request-ID", `${r}`);
  const o = {
    translationType: "machine",
    text: e
  };
  try {
    re() && ie();
    const n = W(), s = E();
    return t.open("POST", `${ce}/linguistnow/resources/locale/detectLocale/`, !1), t.setRequestHeader("x-api-key", `${s}`), t.setRequestHeader("Authorization", `Bearer ${n}`), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(o)), t.status === 200 ? JSON.parse(t.responseText).detectedLanguage : null;
  } catch {
    return null;
  }
}, z = (e, t, r) => {
  const o = {
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
    re() && ie();
    const n = W(), s = E(), c = new XMLHttpRequest(), p = le();
    c.setRequestHeader("X-Request-ID", `${p}`);
    const f = `${ce}/linguistnow/resources/v1/translate/`;
    if (c.open("POST", f, !1), c.setRequestHeader("x-api-key", `${s}`), c.setRequestHeader("Authorization", `Bearer ${n}`), c.setRequestHeader("Content-Type", "application/json"), c.send(JSON.stringify(o)), c.status === 200) {
      const u = JSON.parse(c.responseText);
      return console.debug(`Running LIO Translate API: ${e}`), u.translatedText;
    }
    return null;
  } catch {
    return null;
  }
}, de = (e) => e.toLocaleLowerCase() !== B, fe = () => {
  if (typeof Intl < "u")
    try {
      return Intl.NumberFormat().resolvedOptions().locale.toLocaleLowerCase();
    } catch {
      return console.error("Cannot get locale from Intl"), null;
    }
  return null;
}, pe = (e) => {
  let t = fe();
  return de(t) || (t = ue(e)), t;
}, Ee = (e) => {
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
  const o = C(t, r);
  let n = P(o, e);
  if (n)
    return n;
  const s = localStorage.getItem("user-locale");
  return s != null && s !== B && (n = z(e, B, s), n) ? (F(o, e, n), n) : null;
}, te = (e, t, r) => {
  const o = C(e.source.id, w.Translation);
  if (!Re(o)) {
    const s = `lang: ${t}`;
    r = `${r}
${s}`, Me(o);
  }
  return r;
}, ne = (e, t, r) => {
  let o = P(e, t);
  if (o)
    r.text = o;
  else {
    const n = localStorage.getItem("user-locale"), s = pe(r.text);
    s != null && n !== s && (o = z(t, s, n), o && (F(e, t, o), r.text = o));
  }
}, Be = {
  beforeSend(e, t) {
    if (ee()) {
      if (e.type === "text") {
        let n = fe();
        e.text = te(e, n, e.text);
      }
      return e;
    }
    const r = C(t.conversation.id, w.Agent), o = !Y(r);
    if (e.type === "text" && o) {
      const n = e == null ? void 0 : e.text;
      if (n !== null && n.length > 0) {
        let s = qe();
        if (s || (s = pe(e.text), Le(s)), s != null && de(s)) {
          let p = z(n, s, B);
          p != null && (p = te(e, s, p), e.text = p, F(C(t.conversation.id, w.Translation), p, n));
        }
      }
    }
    return e.type === "formResponse" && o && e.fields.find((c) => c.name === "dataCapture.systemField.requester.email" && c.type === "email") && Q(r), e;
  },
  beforeDisplay(e, t) {
    var c, p;
    if (ee())
      return e;
    const r = e.text, o = ((c = e.source) == null ? void 0 : c.type) === "zd:answerBot", n = ((p = e.source) == null ? void 0 : p.type) === "zd:agentWorkspace", s = !Y(C(t.conversation.id, w.Agent));
    switch (e.type) {
      case "text": {
        if (o) {
          let f = L(e.text, t.conversation.id, w.Agent);
          f && (e.text = f);
          const u = e.actions;
          if (u)
            for (const h of u) {
              let g = L(h.text, t.conversation.id, w.AnswerBot);
              g && (h.text = g);
            }
        } else if (n) {
          let f = !1, u = !1, h = !1;
          const g = e.displayName === "Automated Response", v = C(t.conversation.id, w.Agent);
          let y = e;
          !g && y.metadata != null && (f = y.metadata["__zendesk_msg.source_type"] !== null && y.metadata["__zendesk_msg.source_type"] === "sunco_web", u = y.metadata["__zendesk_msg.agent.id"] !== null && y.metadata["__zendesk_msg.agent.id"] === "__trigger", h = u && f), g || h ? ne(v, r, e) : s && (Q(v), ne(v, r, e));
        } else {
          const f = P(C(t.conversation.id, w.Translation), e.text);
          f && (e.text = f);
        }
        return e;
      }
      case "carousel": {
        if (o) {
          let f = e;
          for (const u of f.items) {
            const h = L(u.title, t.conversation.id, w.Carousel);
            h && (u.title = h);
            const g = L(u.description, t.conversation.id, w.Carousel);
            g && (u.description = g);
            for (const v of u.actions) {
              const y = L(v.text, t.conversation.id, w.Carousel);
              y && (v.text = y);
              const x = localStorage.getItem("user-locale"), S = Ee(x);
              S && (v.uri = v.uri.replace("en-us", S));
            }
          }
          return f;
        }
        return e;
      }
      case "form": {
        if (o) {
          const f = e;
          if (f.fields.length > 0)
            for (const u of f.fields) {
              const h = L(u.label, t.conversation.id, w.Form);
              h && (u.label = h);
            }
        }
        return e;
      }
      default:
        return e;
    }
  }
}, Ne = () => xe, Ue = Ne(), je = Ue.default, Fe = ({ integrationId: e, apiKey: t, clientId: r, clientSecret: o, chatbotOptions: n }) => {
  const s = {
    integrationId: e,
    delegate: Be,
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
      brandColor: A.brandColor,
      conversationColor: A.conversationColor,
      actionColor: A.actionColor
    }
  };
  n && (s.soundNotificationEnabled = n.soundNotificationEnabled ?? !0, s.businessName = n.businessName ?? null, s.businessIconUrl = n.businessIconUrl ?? null, s.backgroundImageUrl = n.backgroundImageUrl ?? null, n.customColors && (s.customColors.brandColor = n.customColors.brandColor ?? A.brandColor, s.customColors.conversationColor = n.customColors.conversationColor ?? A.conversationColor, s.customColors.actionColor = n.customColors.actionColor ?? A.actionColor)), console.info(`Initializing ZD ChatBot plugin version: ${$.version}`), He(), $e(r, o), Oe(t), E() === null || E() === "" || W() === null ? (console.error(`Failed to initialize OAuth2 of ZD ChatBot plugin version: ${$.version}`), console.error(`Failed to initialize ZD ChatBot plugin version: ${$.version}`), q(!0)) : ue("hello") === null && (q(!0), console.error(`Failed to initialize ZD ChatBot plugin version: ${$.version}. Invalid api key`)), je.init(s);
};
export {
  Fe as initLIOChatBot
};
