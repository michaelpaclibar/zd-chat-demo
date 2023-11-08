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
      for (var f in n)
        r.d(s, f, function(c) {
          return n[c];
        }.bind(null, f));
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
  var n = r(4), o = r(1), s = o.each, f = o.isFunction, c = o.isArray;
  function p() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  p.prototype = { constructor: p, register: function(u, h, g) {
    var y = this.queries, v = g && this.browserIsIncapable;
    return y[u] || (y[u] = new n(u, v)), f(h) && (h = { match: h }), c(h) || (h = [h]), s(h, function(x) {
      f(x) && (x = { match: x }), y[u].addHandler(x);
    }), this;
  }, unregister: function(u, h) {
    var g = this.queries[u];
    return g && (h ? g.removeHandler(h) : (g.clear(), delete this.queries[u])), this;
  } }, e.exports = p;
}, function(e, t, r) {
  var n = r(5), o = r(1).each;
  function s(f, c) {
    this.query = f, this.isUnconditional = c, this.handlers = [], this.mql = window.matchMedia(f);
    var p = this;
    this.listener = function(u) {
      p.mql = u.currentTarget || u, p.assess();
    }, this.mql.addListener(this.listener);
  }
  s.prototype = { constuctor: s, addHandler: function(f) {
    var c = new n(f);
    this.handlers.push(c), this.matches() && c.on();
  }, removeHandler: function(f) {
    var c = this.handlers;
    o(c, function(p, u) {
      if (p.equals(f))
        return p.destroy(), !c.splice(u, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    o(this.handlers, function(f) {
      f.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var f = this.matches() ? "on" : "off";
    o(this.handlers, function(c) {
      c[f]();
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
  function s(a) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      a();
    }) : a();
  }
  function f(a) {
    var i = ["screen"];
    return a.minHeight && i.push("(min-height: ".concat(a.minHeight, "px)")), a.maxHeight && i.push("(max-height: ".concat(a.maxHeight, "px)")), a.minWidth && i.push("(min-width: ".concat(a.minWidth, "px)")), a.maxWidth && i.push("(max-width: ".concat(a.maxWidth, "px)")), i.join(" and ");
  }
  var c = r(0), p = r.n(c), u = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, h = ["lg", "md", "sm", "xs"];
  function g(a) {
    for (var i = 0; i < h.length; i++) {
      var d = h[i], l = u[d];
      Object.prototype.toString.call(l) !== "[object Array]" && (l = [l]);
      for (var b = 0; b < l.length; b++)
        a({ rule: l[b], size: d });
    }
  }
  function y() {
    return (y = Object.assign ? Object.assign.bind() : function(a) {
      for (var i = 1; i < arguments.length; i++) {
        var d = arguments[i];
        for (var l in d)
          Object.prototype.hasOwnProperty.call(d, l) && (a[l] = d[l]);
      }
      return a;
    }).apply(this, arguments);
  }
  function v(a) {
    return function(i) {
      if (Array.isArray(i))
        return x(i);
    }(a) || function(i) {
      if (typeof Symbol < "u" && i[Symbol.iterator] != null || i["@@iterator"] != null)
        return Array.from(i);
    }(a) || function(i, d) {
      if (i) {
        if (typeof i == "string")
          return x(i, d);
        var l = Object.prototype.toString.call(i).slice(8, -1);
        if (l === "Object" && i.constructor && (l = i.constructor.name), l === "Map" || l === "Set")
          return Array.from(i);
        if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
          return x(i, d);
      }
    }(a) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function x(a, i) {
    (i == null || i > a.length) && (i = a.length);
    for (var d = 0, l = new Array(i); d < i; d++)
      l[d] = a[d];
    return l;
  }
  var S, m, N, O, D, M = {}, T = [], I = [], K = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), he = /PhantomJS/.test(navigator.userAgent) && !0, k = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (K) {
    var U = document.createElement("a");
    U.href = "https://smooch.io/live-web-chat/?utm_source=widget", U.text = "Powered by Zendesk Sunshine", s(function() {
      document.body.appendChild(U);
    });
  }
  function me() {
    var a = document.createElement("link");
    a.rel = "stylesheet", a.type = "text/css", a.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(a);
  }
  function ge(a) {
    var i;
    window.__onWebMessengerFrameReady__ = function() {
    }, S = a, N || (i = m, g(function(G) {
      var be = G.rule, we = G.size;
      p.a.register(f(be), function() {
        i.contentWindow.postMessage({ type: "sizeChange", value: we }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var d = k[0], l = 0; l < k.length; d = k[++l])
      M[d] = S[d];
    if (I) {
      for (var b = I[0], R = 0; R < I.length; b = I[++R]) {
        var _;
        (_ = S).on.apply(_, v(b.args));
      }
      I = void 0;
    }
    if (D) {
      var J, j = (J = S).init.apply(J, v(D));
      D = void 0;
      for (var H = T[0], V = 0; V < T.length; H = T[++V])
        j = H.type === "then" ? j.then(H.next) : j.catch(H.next);
      T = [];
    }
  }
  var Z = function(a) {
    return a.contentWindow && a.contentWindow.document;
  };
  function ye() {
    if (!m) {
      var a = null, i = !1;
      (m = document.createElement("iframe")).id = "web-messenger-container", m.frameBorder = 0, m.allowFullscreen = !0, m.allowTransparency = !0, m.scrolling = "no", m.className = o.a.iframe;
      var d = function() {
        i = !0, clearInterval(a), delete m.onload;
        var l = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, b = l ? 'nonce="'.concat(l, '"') : "", R = `
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
          m.srcdoc = R;
        else {
          var _ = Z(m);
          _.open(), _.write(R), _.close();
        }
      };
      a = setInterval(function() {
        var l = Z(m);
        i || !l || l.readyState !== "complete" && l.readyState !== "interactive" || d();
      }, 1e3), m.onload = function() {
        i || d();
      };
    }
    N ? O && (O.appendChild(m), O = void 0) : document.body.appendChild(m);
  }
  var ve = { VERSION: "5.5.5", on: function() {
    I || (I = []);
    for (var a = arguments.length, i = new Array(a), d = 0; d < a; d++)
      i[d] = arguments[d];
    I.push({ args: i });
  }, init: function() {
    for (var a = arguments.length, i = new Array(a), d = 0; d < a; d++)
      i[d] = arguments[d];
    D = i, N = i.length > 0 && !!i[0].embedded, K || he || s(function() {
      me(), ye();
    });
    var l = { then: function(b) {
      return T.push({ type: "then", next: b }), l;
    }, catch: function(b) {
      return T.push({ type: "catch", next: b }), l;
    } };
    return l;
  }, render: function(a) {
    m ? a.appendChild(m) : O = a;
  }, destroy: function() {
    S && (S.destroy(), m.remove ? m.remove() : m.parentNode.removeChild(m), g(function(a) {
      var i = a.rule;
      p.a.unregister(f(i));
    }), X());
  } };
  function X() {
    if (!document.getElementById("web-messenger-container")) {
      S = void 0, m = void 0, window.__onWebMessengerFrameReady__ = ge;
      for (var a = k[0], i = 0; i < k.length; a = k[++i])
        M[a] && delete M[a];
      y(M, ve);
    }
  }
  X(), t.default = M;
}]);
const A = {
  brandColor: "65758e",
  conversationColor: "0099ff",
  actionColor: "0099ff"
}, Se = "zd-chatbot-web", Ce = "1.0.11", Ie = "module", Te = {
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
  type: Ie,
  scripts: Te,
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
}, Me = (e) => {
  const t = `is-locale-sent-to-server:${e}`;
  return localStorage.getItem(t) === "true";
}, Re = (e) => {
  const t = `is-locale-sent-to-server:${e}`;
  localStorage.setItem(t, "true");
}, B = () => {
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
}, De = () => {
  localStorage.removeItem("user-locale"), localStorage.removeItem("lio-chatbot-token"), localStorage.removeItem("lio-chatbot-token-expiration"), localStorage.removeItem("lio-access-token-request");
}, ie = "aws_oauth_url", He = "aws_oauth_scopes (comma separated)", $e = (e, t) => {
  const r = `${ie}/oauth2/token`, n = He.replace(",", " "), o = new XMLHttpRequest();
  o.open("POST", `${r}`, !1), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const s = `grant_type=client_credentials&client_id=${e}&client_secret=${t}&scope=${encodeURIComponent(n)}`;
  o.send(s), o.status === 200 ? (se(o.responseText, s), q(!1)) : (console.error(o.responseText), q(!0));
}, ae = () => {
  const e = `${ie}/oauth2/token`, t = new XMLHttpRequest();
  t.open("POST", `${e}`, !1), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const r = localStorage.getItem("lio-access-token-request");
  r !== "" && (t.send(r), t.status === 200 ? (se(t.responseText), q(!1)) : (console.error(t.responseText), q(!0)));
}, ce = "https://dev-agw.golinguist.com", E = "en-us", le = () => {
  let e;
  try {
    return e = window.initSync ? window.initSync() : void 0, e;
  } catch {
    return "";
  }
}, ue = (e) => {
  const t = new XMLHttpRequest(), r = {
    translationType: "machine",
    text: e
  };
  try {
    re() && ae();
    const n = W(), o = B(), s = le();
    return t.open("POST", `${ce}/linguistnow/resources/locale/detectLocale/`, !1), t.setRequestHeader("x-api-key", `${o}`), t.setRequestHeader("Authorization", `Bearer ${n}`), t.setRequestHeader("X-Request-ID", `${s}`), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(r)), t.status === 200 ? JSON.parse(t.responseText).detectedLanguage : null;
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
    re() && ae();
    const o = W(), s = B(), f = le(), c = new XMLHttpRequest(), p = `${ce}/linguistnow/resources/v1/translate/`;
    if (c.open("POST", p, !1), c.setRequestHeader("x-api-key", `${s}`), c.setRequestHeader("Authorization", `Bearer ${o}`), c.setRequestHeader("X-Request-ID", `${f}`), c.setRequestHeader("Content-Type", "application/json"), c.send(JSON.stringify(n)), c.status === 200) {
      const u = JSON.parse(c.responseText);
      return console.debug(`Running LIO Translate API: ${e}`), u.translatedText;
    }
    return null;
  } catch {
    return null;
  }
}, de = (e) => e.toLocaleLowerCase() !== E, fe = () => {
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
}, Be = (e) => {
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
  return s != null && s !== E && (o = z(e, E, s), o) ? (F(n, e, o), o) : null;
}, te = (e, t, r) => {
  const n = C(e.source.id, w.Translation);
  if (!Me(n)) {
    const s = `lang: ${t}`;
    r = `${r}
${s}`, Re(n);
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
}, Ee = {
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
          let c = z(o, s, E);
          c != null && (c = te(e, s, c), e.text = c, F(C(t.conversation.id, w.Translation), c, o));
        }
      }
    }
    return e.type === "formResponse" && n && e.fields.find((f) => f.name === "dataCapture.systemField.requester.email" && f.type === "email") && Q(r), e;
  },
  beforeDisplay(e, t) {
    var f, c;
    if (ee())
      return e;
    const r = e.text, n = ((f = e.source) == null ? void 0 : f.type) === "zd:answerBot", o = ((c = e.source) == null ? void 0 : c.type) === "zd:agentWorkspace", s = !Y(C(t.conversation.id, w.Agent));
    switch (e.type) {
      case "text": {
        if (n) {
          let p = L(e.text, t.conversation.id, w.Agent);
          p && (e.text = p);
          const u = e.actions;
          if (u)
            for (const h of u) {
              let g = L(h.text, t.conversation.id, w.AnswerBot);
              g && (h.text = g);
            }
        } else if (o) {
          let p = !1, u = !1, h = !1;
          const g = e.displayName === "Automated Response", y = C(t.conversation.id, w.Agent);
          let v = e;
          !g && v.metadata != null && (p = v.metadata["__zendesk_msg.source_type"] !== null && v.metadata["__zendesk_msg.source_type"] === "sunco_web", u = v.metadata["__zendesk_msg.agent.id"] !== null && v.metadata["__zendesk_msg.agent.id"] === "__trigger", h = u && p), g || h ? ne(y, r, e) : s && (Q(y), ne(y, r, e));
        } else {
          const p = P(C(t.conversation.id, w.Translation), e.text);
          p && (e.text = p);
        }
        return e;
      }
      case "carousel": {
        if (n) {
          let p = e;
          for (const u of p.items) {
            const h = L(u.title, t.conversation.id, w.Carousel);
            h && (u.title = h);
            const g = L(u.description, t.conversation.id, w.Carousel);
            g && (u.description = g);
            for (const y of u.actions) {
              const v = L(y.text, t.conversation.id, w.Carousel);
              v && (y.text = v);
              const x = localStorage.getItem("user-locale"), S = Be(x);
              S && (y.uri = y.uri.replace("en-us", S));
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
            for (const u of p.fields) {
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
}, Ne = () => xe, Ue = Ne(), je = Ue.default, Pe = ({ integrationId: e, apiKey: t, clientId: r, clientSecret: n, chatbotOptions: o }) => {
  const s = {
    integrationId: e,
    delegate: Ee,
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
  o && (s.soundNotificationEnabled = o.soundNotificationEnabled ?? !0, s.businessName = o.businessName ?? null, s.businessIconUrl = o.businessIconUrl ?? null, s.backgroundImageUrl = o.backgroundImageUrl ?? null, o.customColors && (s.customColors.brandColor = o.customColors.brandColor ?? A.brandColor, s.customColors.conversationColor = o.customColors.conversationColor ?? A.conversationColor, s.customColors.actionColor = o.customColors.actionColor ?? A.actionColor)), console.info(`Initializing ZD ChatBot plugin version: ${$.version}`), De(), $e(r, n), Oe(t), B() === null || B() === "" || W() === null ? (console.error(`Failed to initialize ZD ChatBot plugin version: ${$.version}. Missing api key, clientId or clientSecret`), q(!0)) : ue("hello") === null && (q(!0), console.error(`Failed to initialize ZD ChatBot plugin version: ${$.version}. Invalid api key or oAuth2 token`)), je.init(s);
}, Fe = () => {
  const t = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #333;">${`Initializing ZD ChatBot plugin version: ${$.version}`}</h2>
            <table border="1" style="border-collapse: collapse; width: 100%;">
                <tr>
                    <th style="padding: 10px;">Name</th>
                    <th style="padding: 10px;">Age</th>
                </tr>
                <tr>
                    <td style="padding: 10px;">John</td>
                    <td style="padding: 10px;">30</td>
                </tr>
                <tr>
                    <td style="padding: 10px;">Doe</td>
                    <td style="padding: 10px;">35</td>
                </tr>
            </table>
        </div>
    `;
  window.alert(t);
};
window.lioChatBotDebug = Fe;
export {
  Pe as initLIOChatBot,
  Fe as lioChatBotDebug
};
