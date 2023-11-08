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
      for (var d in n)
        r.d(s, d, function(c) {
          return n[c];
        }.bind(null, d));
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
  var n = r(4), o = r(1), s = o.each, d = o.isFunction, c = o.isArray;
  function p() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  p.prototype = { constructor: p, register: function(f, h, g) {
    var y = this.queries, b = g && this.browserIsIncapable;
    return y[f] || (y[f] = new n(f, b)), d(h) && (h = { match: h }), c(h) || (h = [h]), s(h, function(x) {
      d(x) && (x = { match: x }), y[f].addHandler(x);
    }), this;
  }, unregister: function(f, h) {
    var g = this.queries[f];
    return g && (h ? g.removeHandler(h) : (g.clear(), delete this.queries[f])), this;
  } }, e.exports = p;
}, function(e, t, r) {
  var n = r(5), o = r(1).each;
  function s(d, c) {
    this.query = d, this.isUnconditional = c, this.handlers = [], this.mql = window.matchMedia(d);
    var p = this;
    this.listener = function(f) {
      p.mql = f.currentTarget || f, p.assess();
    }, this.mql.addListener(this.listener);
  }
  s.prototype = { constuctor: s, addHandler: function(d) {
    var c = new n(d);
    this.handlers.push(c), this.matches() && c.on();
  }, removeHandler: function(d) {
    var c = this.handlers;
    o(c, function(p, f) {
      if (p.equals(d))
        return p.destroy(), !c.splice(f, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    o(this.handlers, function(d) {
      d.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var d = this.matches() ? "on" : "off";
    o(this.handlers, function(c) {
      c[d]();
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
  function d(i) {
    var a = ["screen"];
    return i.minHeight && a.push("(min-height: ".concat(i.minHeight, "px)")), i.maxHeight && a.push("(max-height: ".concat(i.maxHeight, "px)")), i.minWidth && a.push("(min-width: ".concat(i.minWidth, "px)")), i.maxWidth && a.push("(max-width: ".concat(i.maxWidth, "px)")), a.join(" and ");
  }
  var c = r(0), p = r.n(c), f = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, h = ["lg", "md", "sm", "xs"];
  function g(i) {
    for (var a = 0; a < h.length; a++) {
      var u = h[a], l = f[u];
      Object.prototype.toString.call(l) !== "[object Array]" && (l = [l]);
      for (var w = 0; w < l.length; w++)
        i({ rule: l[w], size: u });
    }
  }
  function y() {
    return (y = Object.assign ? Object.assign.bind() : function(i) {
      for (var a = 1; a < arguments.length; a++) {
        var u = arguments[a];
        for (var l in u)
          Object.prototype.hasOwnProperty.call(u, l) && (i[l] = u[l]);
      }
      return i;
    }).apply(this, arguments);
  }
  function b(i) {
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
  var C, m, $, O, D, M = {}, T = [], I = [], X = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), me = /PhantomJS/.test(navigator.userAgent) && !0, k = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (X) {
    var N = document.createElement("a");
    N.href = "https://smooch.io/live-web-chat/?utm_source=widget", N.text = "Powered by Zendesk Sunshine", s(function() {
      document.body.appendChild(N);
    });
  }
  function ge() {
    var i = document.createElement("link");
    i.rel = "stylesheet", i.type = "text/css", i.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(i);
  }
  function ve(i) {
    var a;
    window.__onWebMessengerFrameReady__ = function() {
    }, C = i, $ || (a = m, g(function(Q) {
      var we = Q.rule, Se = Q.size;
      p.a.register(d(we), function() {
        a.contentWindow.postMessage({ type: "sizeChange", value: Se }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var u = k[0], l = 0; l < k.length; u = k[++l])
      M[u] = C[u];
    if (I) {
      for (var w = I[0], R = 0; R < I.length; w = I[++R]) {
        var _;
        (_ = C).on.apply(_, b(w.args));
      }
      I = void 0;
    }
    if (D) {
      var J, j = (J = C).init.apply(J, b(D));
      D = void 0;
      for (var H = T[0], G = 0; G < T.length; H = T[++G])
        j = H.type === "then" ? j.then(H.next) : j.catch(H.next);
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
      var u = function() {
        a = !0, clearInterval(i), delete m.onload;
        var l = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, w = l ? 'nonce="'.concat(l, '"') : "", R = `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            `.concat("", `
                            <link rel="stylesheet" href="`).concat("https://cdn.smooch.io/frame.5.5.5.css", '" type="text/css" ').concat(w, ` />
                            <script src="`).concat("https://cdn.smooch.io/frame.5.5.5.min.js", '" async crossorigin="anonymous" ').concat(w, `><\/script>
                        </head>
                        <body>
                            <div id="mount"></div>
                        </body>
                    </html>
                    `);
        if ("srcdoc" in m)
          m.srcdoc = R;
        else {
          var _ = Z(m);
          _.open(), _.write(R), _.close();
        }
      };
      i = setInterval(function() {
        var l = Z(m);
        a || !l || l.readyState !== "complete" && l.readyState !== "interactive" || u();
      }, 1e3), m.onload = function() {
        a || u();
      };
    }
    $ ? O && (O.appendChild(m), O = void 0) : document.body.appendChild(m);
  }
  var be = { VERSION: "5.5.5", on: function() {
    I || (I = []);
    for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
      a[u] = arguments[u];
    I.push({ args: a });
  }, init: function() {
    for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
      a[u] = arguments[u];
    D = a, $ = a.length > 0 && !!a[0].embedded, X || me || s(function() {
      ge(), ye();
    });
    var l = { then: function(w) {
      return T.push({ type: "then", next: w }), l;
    }, catch: function(w) {
      return T.push({ type: "catch", next: w }), l;
    } };
    return l;
  }, render: function(i) {
    m ? i.appendChild(m) : O = i;
  }, destroy: function() {
    C && (C.destroy(), m.remove ? m.remove() : m.parentNode.removeChild(m), g(function(i) {
      var a = i.rule;
      p.a.unregister(d(a));
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
const A = {
  brandColor: "65758e",
  conversationColor: "0099ff",
  actionColor: "0099ff"
}, Ce = "zd-chatbot-web", Ie = "1.0.11", Te = "module", ke = {
  dev: "vite",
  build: "tsc && vite build",
  test: "vitest run",
  coverage: "vitest run --coverage"
}, _e = {
  "@types/node": "^18.13.0",
  "@types/smooch": "^5.3.3",
  "@vitest/coverage-c8": "^0.30.1",
  jsdom: "^21.1.1",
  typescript: "^4.9.3",
  vite: "^4.1.0",
  vitest: "^0.30.1"
}, Ae = {
  smooch: "^5.3.3",
  terser: "^5.16.3",
  "vite-require": "^0.2.3"
}, F = {
  name: Ce,
  private: !0,
  version: Ie,
  type: Te,
  scripts: ke,
  devDependencies: _e,
  dependencies: Ae
};
var v = /* @__PURE__ */ ((e) => (e.Translation = "translation", e.AnswerBot = "answerBot", e.Agent = "agent", e.Carousel = "carousel", e.Form = "form", e))(v || {});
const S = (e, t) => `${t}:${e}`, Le = (e, t) => {
  localStorage.setItem(e, JSON.stringify([...t]));
}, B = (e) => {
  const t = localStorage.getItem(e);
  return t ? new Map(JSON.parse(t)) : null;
}, W = (e, t, r) => {
  const n = S(
    e,
    "translation"
    /* Translation */
  ), o = B(n) ?? /* @__PURE__ */ new Map();
  o.set(t, r), Le(n, o);
}, P = (e, t) => {
  const r = S(
    e,
    "translation"
    /* Translation */
  ), n = B(r);
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
}, Oe = (e) => {
  const t = `is-locale-sent-to-server:${e}`;
  localStorage.setItem(t, "true");
}, E = () => {
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
}, De = (e) => {
  e !== "" && localStorage.setItem("lio-api-key", e);
}, q = (e) => localStorage.setItem("lio-chatbot-disable-translate-feature", e ? "true" : "false"), te = () => {
  const e = localStorage.getItem("lio-chatbot-disable-translate-feature");
  return e && e === "true";
}, He = () => localStorage.getItem("lio-debug-conversationId"), ne = (e) => {
  localStorage.setItem("lio-debug-conversationId", e);
}, Be = () => {
  localStorage.removeItem("user-locale"), localStorage.removeItem("lio-chatbot-token"), localStorage.removeItem("lio-chatbot-token-expiration"), localStorage.removeItem("lio-access-token-request"), localStorage.removeItem("lio-debug-conversationId");
}, ie = "https://lio-oauth2-localhost.auth.us-east-2.amazoncognito.com", Ee = "http://local.golinguist.com/read,http://local.golinguist.com/write", Ue = (e, t) => {
  const r = `${ie}/oauth2/token`, n = Ee.replace(",", " "), o = new XMLHttpRequest();
  o.open("POST", `${r}`, !1), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const s = `grant_type=client_credentials&client_id=${e}&client_secret=${t}&scope=${encodeURIComponent(n)}`;
  o.send(s), o.status === 200 ? (ae(o.responseText, s), q(!1)) : (console.error(o.responseText), q(!0));
}, ce = () => {
  const e = `${ie}/oauth2/token`, t = new XMLHttpRequest();
  t.open("POST", `${e}`, !1), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const r = localStorage.getItem("lio-access-token-request");
  r !== "" && (t.send(r), t.status === 200 ? (ae(t.responseText), q(!1)) : (console.error(t.responseText), q(!0)));
}, le = "https://pbbxp1o6qg.execute-api.us-east-2.amazonaws.com/dev", U = "en-us", ue = () => {
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
    const n = z(), o = E(), s = ue();
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
    const o = z(), s = E(), d = ue(), c = new XMLHttpRequest(), p = `${le}/linguistnow/resources/v1/translate/`;
    return c.open("POST", p, !1), c.setRequestHeader("x-api-key", `${s}`), c.setRequestHeader("Authorization", `Bearer ${o}`), c.setRequestHeader("X-Request-ID", `${d}`), c.setRequestHeader("Content-Type", "application/json"), c.send(JSON.stringify(n)), c.status === 200 ? JSON.parse(c.responseText).translatedText : null;
  } catch {
    return null;
  }
}, fe = (e) => e.toLocaleLowerCase() !== U, pe = () => {
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
}, $e = (e) => {
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
  const n = S(t, r);
  let o = P(n, e);
  if (o)
    return o;
  const s = localStorage.getItem("user-locale");
  return s != null && s !== U && (o = K(e, U, s), o) ? (W(n, e, o), o) : null;
}, oe = (e, t, r) => {
  const n = S(e.source.id, v.Translation);
  if (!Re(n)) {
    const s = `lang: ${t}`;
    r = `${r}
${s}`, Oe(n);
  }
  return r;
}, re = (e, t, r) => {
  let n = P(e, t);
  if (n)
    r.text = n;
  else {
    const o = localStorage.getItem("user-locale"), s = he(r.text);
    s != null && o !== s && (n = K(t, s, o), n && (W(e, t, n), r.text = n));
  }
}, Ne = {
  beforeSend(e, t) {
    if (ne(t.conversation.id), te()) {
      if (e.type === "text") {
        let o = pe();
        e.text = oe(e, o, e.text);
      }
      return e;
    }
    const r = S(t.conversation.id, v.Agent), n = !ee(r);
    if (e.type === "text" && n) {
      const o = e == null ? void 0 : e.text;
      if (o !== null && o.length > 0) {
        let s = Me();
        if (s || (s = he(e.text), qe(s)), s != null && fe(s)) {
          let c = K(o, s, U);
          c != null && (c = oe(e, s, c), e.text = c, W(S(t.conversation.id, v.Translation), c, o));
        }
      }
    }
    return e.type === "formResponse" && n && e.fields.find((d) => d.name === "dataCapture.systemField.requester.email" && d.type === "email") && Y(r), e;
  },
  beforeDisplay(e, t) {
    var d, c;
    if (ne(t.conversation.id), te())
      return e;
    const r = e.text, n = ((d = e.source) == null ? void 0 : d.type) === "zd:answerBot", o = ((c = e.source) == null ? void 0 : c.type) === "zd:agentWorkspace", s = !ee(S(t.conversation.id, v.Agent));
    switch (e.type) {
      case "text": {
        if (n) {
          let p = L(e.text, t.conversation.id, v.Agent);
          p && (e.text = p);
          const f = e.actions;
          if (f)
            for (const h of f) {
              let g = L(h.text, t.conversation.id, v.AnswerBot);
              g && (h.text = g);
            }
        } else if (o) {
          let p = !1, f = !1, h = !1;
          const g = e.displayName === "Automated Response", y = S(t.conversation.id, v.Agent);
          let b = e;
          !g && b.metadata != null && (p = b.metadata["__zendesk_msg.source_type"] !== null && b.metadata["__zendesk_msg.source_type"] === "sunco_web", f = b.metadata["__zendesk_msg.agent.id"] !== null && b.metadata["__zendesk_msg.agent.id"] === "__trigger", h = f && p), g || h ? re(y, r, e) : s && (Y(y), re(y, r, e));
        } else {
          const p = P(S(t.conversation.id, v.Translation), e.text);
          p && (e.text = p);
        }
        return e;
      }
      case "carousel": {
        if (n) {
          let p = e;
          for (const f of p.items) {
            const h = L(f.title, t.conversation.id, v.Carousel);
            h && (f.title = h);
            const g = L(f.description, t.conversation.id, v.Carousel);
            g && (f.description = g);
            for (const y of f.actions) {
              const b = L(y.text, t.conversation.id, v.Carousel);
              b && (y.text = b);
              const x = localStorage.getItem("user-locale"), C = $e(x);
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
              const h = L(f.label, t.conversation.id, v.Form);
              h && (f.label = h);
            }
        }
        return e;
      }
      default:
        return e;
    }
  }
}, je = () => xe, Fe = je(), We = Fe.default, ze = ({ integrationId: e, apiKey: t, clientId: r, clientSecret: n, chatbotOptions: o }) => {
  const s = {
    integrationId: e,
    delegate: Ne,
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
  o && (s.soundNotificationEnabled = o.soundNotificationEnabled ?? !0, s.businessName = o.businessName ?? null, s.businessIconUrl = o.businessIconUrl ?? null, s.backgroundImageUrl = o.backgroundImageUrl ?? null, o.customColors && (s.customColors.brandColor = o.customColors.brandColor ?? A.brandColor, s.customColors.conversationColor = o.customColors.conversationColor ?? A.conversationColor, s.customColors.actionColor = o.customColors.actionColor ?? A.actionColor)), console.info(`Initializing ZD ChatBot plugin version: ${F.version}`), Be(), Ue(r, n), De(t), E() === null || E() === "" || z() === null ? (console.error(`Failed to initialize ZD ChatBot plugin version: ${F.version}. Missing api key, clientId or clientSecret`), q(!0)) : de("hello") === null && (q(!0), console.error(`Failed to initialize ZD ChatBot plugin version: ${F.version}. Invalid api key or oAuth2 token`)), We.init(s);
}, Pe = () => {
  const e = He();
  if (e) {
    const t = S(e, v.AnswerBot), r = B(S(t, v.Translation));
    if (r) {
      console.info("AnswerBot Translations");
      for (const s of r)
        console.info(s);
    }
    const n = S(e, v.Agent), o = B(S(n, v.Translation));
    if (o && (console.info("User Translations"), r))
      for (const s of o)
        console.info(s);
  }
};
window.debugModeViewLogs = Pe;
export {
  Pe as debugModeViewLogs,
  ze as initLIOChatBot
};
