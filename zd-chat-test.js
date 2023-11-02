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
      for (var c in n)
        r.d(s, c, function(p) {
          return n[p];
        }.bind(null, c));
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
  var n = r(4), o = r(1), s = o.each, c = o.isFunction, p = o.isArray;
  function d() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  d.prototype = { constructor: d, register: function(f, h, g) {
    var v = this.queries, y = g && this.browserIsIncapable;
    return v[f] || (v[f] = new n(f, y)), c(h) && (h = { match: h }), p(h) || (h = [h]), s(h, function(x) {
      c(x) && (x = { match: x }), v[f].addHandler(x);
    }), this;
  }, unregister: function(f, h) {
    var g = this.queries[f];
    return g && (h ? g.removeHandler(h) : (g.clear(), delete this.queries[f])), this;
  } }, e.exports = d;
}, function(e, t, r) {
  var n = r(5), o = r(1).each;
  function s(c, p) {
    this.query = c, this.isUnconditional = p, this.handlers = [], this.mql = window.matchMedia(c);
    var d = this;
    this.listener = function(f) {
      d.mql = f.currentTarget || f, d.assess();
    }, this.mql.addListener(this.listener);
  }
  s.prototype = { constuctor: s, addHandler: function(c) {
    var p = new n(c);
    this.handlers.push(p), this.matches() && p.on();
  }, removeHandler: function(c) {
    var p = this.handlers;
    o(p, function(d, f) {
      if (d.equals(c))
        return d.destroy(), !p.splice(f, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    o(this.handlers, function(c) {
      c.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var c = this.matches() ? "on" : "off";
    o(this.handlers, function(p) {
      p[c]();
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
  function c(i) {
    var a = ["screen"];
    return i.minHeight && a.push("(min-height: ".concat(i.minHeight, "px)")), i.maxHeight && a.push("(max-height: ".concat(i.maxHeight, "px)")), i.minWidth && a.push("(min-width: ".concat(i.minWidth, "px)")), i.maxWidth && a.push("(max-width: ".concat(i.maxWidth, "px)")), a.join(" and ");
  }
  var p = r(0), d = r.n(p), f = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, h = ["lg", "md", "sm", "xs"];
  function g(i) {
    for (var a = 0; a < h.length; a++) {
      var u = h[a], l = f[u];
      Object.prototype.toString.call(l) !== "[object Array]" && (l = [l]);
      for (var b = 0; b < l.length; b++)
        i({ rule: l[b], size: u });
    }
  }
  function v() {
    return (v = Object.assign ? Object.assign.bind() : function(i) {
      for (var a = 1; a < arguments.length; a++) {
        var u = arguments[a];
        for (var l in u)
          Object.prototype.hasOwnProperty.call(u, l) && (i[l] = u[l]);
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
    }(i) || function(a, u) {
      if (a) {
        if (typeof a == "string")
          return x(a, u);
        var l = Object.prototype.toString.call(a).slice(8, -1);
        if (l === "Object" && a.constructor && (l = a.constructor.name), l === "Map" || l === "Set")
          return Array.from(a);
        if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
          return x(a, u);
      }
    }(i) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function x(i, a) {
    (a == null || a > i.length) && (a = i.length);
    for (var u = 0, l = new Array(a); u < a; u++)
      l[u] = i[u];
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
      d.a.register(c(be), function() {
        a.contentWindow.postMessage({ type: "sizeChange", value: we }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var u = k[0], l = 0; l < k.length; u = k[++l])
      R[u] = S[u];
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
      (m = document.createElement("iframe")).id = "web-messenger-container", m.frameBorder = 0, m.allowFullscreen = !0, m.allowTransparency = !0, m.scrolling = "no", m.className = o.a.iframe;
      var u = function() {
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
        a || !l || l.readyState !== "complete" && l.readyState !== "interactive" || u();
      }, 1e3), m.onload = function() {
        a || u();
      };
    }
    N ? O && (O.appendChild(m), O = void 0) : document.body.appendChild(m);
  }
  var ye = { VERSION: "5.5.5", on: function() {
    T || (T = []);
    for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
      a[u] = arguments[u];
    T.push({ args: a });
  }, init: function() {
    for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
      a[u] = arguments[u];
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
      d.a.unregister(c(a));
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
  const n = C(
    e,
    "translation"
    /* Translation */
  ), o = oe(n) ?? /* @__PURE__ */ new Map();
  o.set(t, r), Ae(n, o);
}, P = (e, t) => {
  const r = C(
    e,
    "translation"
    /* Translation */
  ), n = oe(r);
  return (n == null ? void 0 : n.get(t)) ?? null;
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
  const o = new Date().getTime() + 1 * 60 * 60 * 1e3, s = new Date(o);
  localStorage.setItem("lio-chatbot-token-expiration", s.toISOString());
}, Oe = (e) => {
  e !== "" && localStorage.setItem("lio-api-key", e);
}, q = (e) => localStorage.setItem("lio-chatbot-disable-translate-feature", e ? "true" : "false"), ee = () => {
  const e = localStorage.getItem("lio-chatbot-disable-translate-feature");
  return e && e === "true";
}, He = () => {
  localStorage.removeItem("user-locale"), localStorage.removeItem("lio-chatbot-token"), localStorage.removeItem("lio-chatbot-token-expiration"), localStorage.removeItem("lio-access-token-request");
}, ae = "https://lio-oauth2-localhost.auth.us-east-2.amazoncognito.com", De = "local.golinguist.com/read,local.golinguist.com/write", $e = (e, t) => {
  const r = `${ae}/oauth2/token`, n = De.replace(",", " "), o = new XMLHttpRequest();
  o.open("POST", `${r}`, !1), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const s = `grant_type=client_credentials&client_id=${e}&client_secret=${t}&scope=${encodeURIComponent(n)}`;
  o.send(s), o.status === 200 ? (se(o.responseText, s), q(!1)) : (console.error(o.responseText), q(!0));
}, ie = () => {
  const e = `${ae}/oauth2/token`, t = new XMLHttpRequest();
  t.open("POST", `${e}`, !1), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const r = localStorage.getItem("lio-access-token-request");
  r !== "" && (t.send(r), t.status === 200 ? (se(t.responseText), q(!1)) : (console.error(t.responseText), q(!0)));
}, ce = "https://pbbxp1o6qg.execute-api.us-east-2.amazonaws.com/dev", B = "en-us", le = () => {
  let e;
  try {
    return e = window.getRequestToken ? window.getRequestToken() : void 0, e;
  } catch (t) {
    return console.log(`Failed to retrieve token: ${t}`), "";
  }
}, ue = (e) => {
  const t = new XMLHttpRequest(), r = {
    translationType: "machine",
    text: e
  };
  try {
    re() && ie();
    const n = W(), o = E();
    return t.open("POST", `${ce}/linguistnow/resources/locale/detectLocale/`, !1), t.setRequestHeader("x-api-key", `${o}`), t.setRequestHeader("Authorization", `Bearer ${n}`), t.setRequestHeader("X-Request-ID", `${le()}`), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(r)), t.status === 200 ? JSON.parse(t.responseText).detectedLanguage : null;
  } catch {
    return null;
  }
}, z = (e, t, r) => {
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
    re() && ie();
    const o = W(), s = E(), c = new XMLHttpRequest(), p = `${ce}/linguistnow/resources/v1/translate/`;
    if (c.open("POST", p, !1), c.setRequestHeader("x-api-key", `${s}`), c.setRequestHeader("Authorization", `Bearer ${o}`), c.setRequestHeader("X-Request-ID", `${le()}`), c.setRequestHeader("Content-Type", "application/json"), c.send(JSON.stringify(n)), c.status === 200) {
      const d = JSON.parse(c.responseText);
      return console.debug(`Running LIO Translate API: ${e}`), d.translatedText;
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
  const n = C(t, r);
  let o = P(n, e);
  if (o)
    return o;
  const s = localStorage.getItem("user-locale");
  return s != null && s !== B && (o = z(e, B, s), o) ? (F(n, e, o), o) : null;
}, te = (e, t, r) => {
  const n = C(e.source.id, w.Translation);
  if (!Re(n)) {
    const s = `lang: ${t}`;
    r = `${r}
${s}`, Me(n);
  }
  return r;
}, ne = (e, t, r) => {
  let n = P(e, t);
  if (n)
    r.text = n;
  else {
    const o = localStorage.getItem("user-locale"), s = pe(r.text);
    s != null && o !== s && (n = z(t, s, o), n && (F(e, t, n), r.text = n));
  }
}, Be = {
  beforeSend(e, t) {
    if (ee()) {
      if (e.type === "text") {
        let o = fe();
        e.text = te(e, o, e.text);
      }
      return e;
    }
    const r = C(t.conversation.id, w.Agent), n = !Y(r);
    if (e.type === "text" && n) {
      const o = e == null ? void 0 : e.text;
      if (o !== null && o.length > 0) {
        let s = qe();
        if (s || (s = pe(e.text), Le(s)), s != null && de(s)) {
          let p = z(o, s, B);
          p != null && (p = te(e, s, p), e.text = p, F(C(t.conversation.id, w.Translation), p, o));
        }
      }
    }
    return e.type === "formResponse" && n && e.fields.find((c) => c.name === "dataCapture.systemField.requester.email" && c.type === "email") && Q(r), e;
  },
  beforeDisplay(e, t) {
    var c, p;
    if (ee())
      return e;
    const r = e.text, n = ((c = e.source) == null ? void 0 : c.type) === "zd:answerBot", o = ((p = e.source) == null ? void 0 : p.type) === "zd:agentWorkspace", s = !Y(C(t.conversation.id, w.Agent));
    switch (e.type) {
      case "text": {
        if (n) {
          let d = L(e.text, t.conversation.id, w.Agent);
          d && (e.text = d);
          const f = e.actions;
          if (f)
            for (const h of f) {
              let g = L(h.text, t.conversation.id, w.AnswerBot);
              g && (h.text = g);
            }
        } else if (o) {
          let d = !1, f = !1, h = !1;
          const g = e.displayName === "Automated Response", v = C(t.conversation.id, w.Agent);
          let y = e;
          !g && y.metadata != null && (d = y.metadata["__zendesk_msg.source_type"] !== null && y.metadata["__zendesk_msg.source_type"] === "sunco_web", f = y.metadata["__zendesk_msg.agent.id"] !== null && y.metadata["__zendesk_msg.agent.id"] === "__trigger", h = f && d), g || h ? ne(v, r, e) : s && (Q(v), ne(v, r, e));
        } else {
          const d = P(C(t.conversation.id, w.Translation), e.text);
          d && (e.text = d);
        }
        return e;
      }
      case "carousel": {
        if (n) {
          let d = e;
          for (const f of d.items) {
            const h = L(f.title, t.conversation.id, w.Carousel);
            h && (f.title = h);
            const g = L(f.description, t.conversation.id, w.Carousel);
            g && (f.description = g);
            for (const v of f.actions) {
              const y = L(v.text, t.conversation.id, w.Carousel);
              y && (v.text = y);
              const x = localStorage.getItem("user-locale"), S = Ee(x);
              S && (v.uri = v.uri.replace("en-us", S));
            }
          }
          return d;
        }
        return e;
      }
      case "form": {
        if (n) {
          const d = e;
          if (d.fields.length > 0)
            for (const f of d.fields) {
              const h = L(f.label, t.conversation.id, w.Form);
              h && (f.label = h);
            }
        }
        return e;
      }
      default:
        return e;
    }
  }
}, Ne = () => xe, Ue = Ne(), je = Ue.default, Fe = ({ integrationId: e, apiKey: t, clientId: r, clientSecret: n, chatbotOptions: o }) => {
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
  o && (s.soundNotificationEnabled = o.soundNotificationEnabled ?? !0, s.businessName = o.businessName ?? null, s.businessIconUrl = o.businessIconUrl ?? null, s.backgroundImageUrl = o.backgroundImageUrl ?? null, o.customColors && (s.customColors.brandColor = o.customColors.brandColor ?? A.brandColor, s.customColors.conversationColor = o.customColors.conversationColor ?? A.conversationColor, s.customColors.actionColor = o.customColors.actionColor ?? A.actionColor)), console.info(`Initializing ZD ChatBot plugin version: ${$.version}`), He(), $e(r, n), Oe(t), E() === null || E() === "" || W() === null ? (console.error(`Failed to initialize OAuth2 of ZD ChatBot plugin version: ${$.version}`), console.error(`Failed to initialize ZD ChatBot plugin version: ${$.version}`), q(!0)) : ue("hello") === null && (q(!0), console.error(`Failed to initialize ZD ChatBot plugin version: ${$.version}. Invalid api key`)), je.init(s);
};
export {
  Fe as initLIOChatBot
};
