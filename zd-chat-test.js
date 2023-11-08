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
var Se = function(e) {
  var t = {};
  function o(n) {
    if (t[n])
      return t[n].exports;
    var r = t[n] = { i: n, l: !1, exports: {} };
    return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
  }
  return o.m = e, o.c = t, o.d = function(n, r, s) {
    o.o(n, r) || Object.defineProperty(n, r, { enumerable: !0, get: s });
  }, o.r = function(n) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
  }, o.t = function(n, r) {
    if (1 & r && (n = o(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule)
      return n;
    var s = /* @__PURE__ */ Object.create(null);
    if (o.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: n }), 2 & r && typeof n != "string")
      for (var d in n)
        o.d(s, d, function(c) {
          return n[c];
        }.bind(null, d));
    return s;
  }, o.n = function(n) {
    var r = n && n.__esModule ? function() {
      return n.default;
    } : function() {
      return n;
    };
    return o.d(r, "a", r), r;
  }, o.o = function(n, r) {
    return Object.prototype.hasOwnProperty.call(n, r);
  }, o.p = "https://cdn.smooch.io/", o(o.s = 6);
}([function(e, t, o) {
  var n = o(3);
  e.exports = new n();
}, function(e, t) {
  e.exports = { isFunction: function(o) {
    return typeof o == "function";
  }, isArray: function(o) {
    return Object.prototype.toString.apply(o) === "[object Array]";
  }, each: function(o, n) {
    for (var r = 0, s = o.length; r < s && n(o[r], r) !== !1; r++)
      ;
  } };
}, function(e, t, o) {
  e.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(e, t, o) {
  var n = o(4), r = o(1), s = r.each, d = r.isFunction, c = r.isArray;
  function p() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  p.prototype = { constructor: p, register: function(f, h, g) {
    var v = this.queries, b = g && this.browserIsIncapable;
    return v[f] || (v[f] = new n(f, b)), d(h) && (h = { match: h }), c(h) || (h = [h]), s(h, function(x) {
      d(x) && (x = { match: x }), v[f].addHandler(x);
    }), this;
  }, unregister: function(f, h) {
    var g = this.queries[f];
    return g && (h ? g.removeHandler(h) : (g.clear(), delete this.queries[f])), this;
  } }, e.exports = p;
}, function(e, t, o) {
  var n = o(5), r = o(1).each;
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
    r(c, function(p, f) {
      if (p.equals(d))
        return p.destroy(), !c.splice(f, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    r(this.handlers, function(d) {
      d.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var d = this.matches() ? "on" : "off";
    r(this.handlers, function(c) {
      c[d]();
    });
  } }, e.exports = s;
}, function(e, t) {
  function o(n) {
    this.options = n, !n.deferSetup && this.setup();
  }
  o.prototype = { constructor: o, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(n) {
    return this.options === n || this.options.match === n;
  } }, e.exports = o;
}, function(e, t, o) {
  o.r(t);
  var n = o(2), r = o.n(n);
  function s(i) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      i();
    }) : i();
  }
  function d(i) {
    var a = ["screen"];
    return i.minHeight && a.push("(min-height: ".concat(i.minHeight, "px)")), i.maxHeight && a.push("(max-height: ".concat(i.maxHeight, "px)")), i.minWidth && a.push("(min-width: ".concat(i.minWidth, "px)")), i.maxWidth && a.push("(max-width: ".concat(i.maxWidth, "px)")), a.join(" and ");
  }
  var c = o(0), p = o.n(c), f = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, h = ["lg", "md", "sm", "xs"];
  function g(i) {
    for (var a = 0; a < h.length; a++) {
      var u = h[a], l = f[u];
      Object.prototype.toString.call(l) !== "[object Array]" && (l = [l]);
      for (var w = 0; w < l.length; w++)
        i({ rule: l[w], size: u });
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
  var C, m, $, O, H, M = {}, T = [], I = [], X = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), he = /PhantomJS/.test(navigator.userAgent) && !0, k = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (X) {
    var N = document.createElement("a");
    N.href = "https://smooch.io/live-web-chat/?utm_source=widget", N.text = "Powered by Zendesk Sunshine", s(function() {
      document.body.appendChild(N);
    });
  }
  function me() {
    var i = document.createElement("link");
    i.rel = "stylesheet", i.type = "text/css", i.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(i);
  }
  function ge(i) {
    var a;
    window.__onWebMessengerFrameReady__ = function() {
    }, C = i, $ || (a = m, g(function(Q) {
      var be = Q.rule, we = Q.size;
      p.a.register(d(be), function() {
        a.contentWindow.postMessage({ type: "sizeChange", value: we }, "".concat(location.protocol, "//").concat(location.host));
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
    if (H) {
      var J, j = (J = C).init.apply(J, b(H));
      H = void 0;
      for (var D = T[0], G = 0; G < T.length; D = T[++G])
        j = D.type === "then" ? j.then(D.next) : j.catch(D.next);
      T = [];
    }
  }
  var Z = function(i) {
    return i.contentWindow && i.contentWindow.document;
  };
  function ve() {
    if (!m) {
      var i = null, a = !1;
      (m = document.createElement("iframe")).id = "web-messenger-container", m.frameBorder = 0, m.allowFullscreen = !0, m.allowTransparency = !0, m.scrolling = "no", m.className = r.a.iframe;
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
  var ye = { VERSION: "5.5.5", on: function() {
    I || (I = []);
    for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
      a[u] = arguments[u];
    I.push({ args: a });
  }, init: function() {
    for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
      a[u] = arguments[u];
    H = a, $ = a.length > 0 && !!a[0].embedded, X || he || s(function() {
      me(), ve();
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
      C = void 0, m = void 0, window.__onWebMessengerFrameReady__ = ge;
      for (var i = k[0], a = 0; a < k.length; i = k[++a])
        M[i] && delete M[i];
      v(M, ye);
    }
  }
  V(), t.default = M;
}]);
const A = {
  brandColor: "65758e",
  conversationColor: "0099ff",
  actionColor: "0099ff"
}, xe = "zd-chatbot-web", Ce = "1.0.11", Ie = "module", Te = {
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
}, F = {
  name: xe,
  private: !0,
  version: Ce,
  type: Ie,
  scripts: Te,
  devDependencies: ke,
  dependencies: _e
};
var y = /* @__PURE__ */ ((e) => (e.Translation = "translation", e.AnswerBot = "answerBot", e.Agent = "agent", e.Carousel = "carousel", e.Form = "form", e))(y || {});
const S = (e, t) => `${t}:${e}`, Ae = (e, t) => {
  localStorage.setItem(e, JSON.stringify([...t]));
}, B = (e) => {
  const t = localStorage.getItem(e);
  return t ? new Map(JSON.parse(t)) : null;
}, W = (e, t, o) => {
  const n = S(
    e,
    "translation"
    /* Translation */
  ), r = B(n) ?? /* @__PURE__ */ new Map();
  r.set(t, o), Ae(n, r);
}, P = (e, t) => {
  const o = S(
    e,
    "translation"
    /* Translation */
  ), n = B(o);
  return (n == null ? void 0 : n.get(t)) ?? null;
}, Le = (e) => {
  localStorage.setItem("user-locale", e);
}, qe = () => {
  const e = localStorage.getItem("user-locale");
  return e == null || e === "" ? null : e;
}, Y = (e) => {
  const t = `disable-auto-translate:${e}`;
  localStorage.setItem(t, "true");
}, ee = (e) => {
  const t = `disable-auto-translate:${e}`;
  return localStorage.getItem(t) === "true";
}, Me = (e) => {
  const t = `is-locale-sent-to-server:${e}`;
  return localStorage.getItem(t) === "true";
}, Re = (e) => {
  const t = `is-locale-sent-to-server:${e}`;
  localStorage.setItem(t, "true");
}, E = () => {
  const e = localStorage.getItem("lio-api-key");
  return e ? e === "" ? null : e : null;
}, z = () => {
  const e = localStorage.getItem("lio-chatbot-token");
  return e ? e === "" ? null : JSON.parse(e).access_token : null;
}, re = () => {
  const e = localStorage.getItem("lio-chatbot-token-expiration");
  return e ? new Date(e) < new Date() : !0;
}, se = (e, t = "") => {
  t !== "" && localStorage.setItem("lio-access-token-request", t), localStorage.setItem("lio-chatbot-token", e);
  const r = new Date().getTime() + 1 * 60 * 60 * 1e3, s = new Date(r);
  localStorage.setItem("lio-chatbot-token-expiration", s.toISOString());
}, Oe = (e) => {
  e !== "" && localStorage.setItem("lio-api-key", e);
}, q = (e) => localStorage.setItem("lio-chatbot-disable-translate-feature", e ? "true" : "false"), te = () => {
  const e = localStorage.getItem("lio-chatbot-disable-translate-feature");
  return e && e === "true";
}, He = () => localStorage.getItem("lio-debug-conversationId"), De = () => {
  localStorage.removeItem("user-locale"), localStorage.removeItem("lio-chatbot-token"), localStorage.removeItem("lio-chatbot-token-expiration"), localStorage.removeItem("lio-access-token-request"), localStorage.removeItem("lio-debug-conversationId");
}, ae = "https://lio-oauth2-localhost.auth.us-east-2.amazoncognito.com", Be = "http://local.golinguist.com/read,http://local.golinguist.com/write", Ee = (e, t) => {
  const o = `${ae}/oauth2/token`, n = Be.replace(",", " "), r = new XMLHttpRequest();
  r.open("POST", `${o}`, !1), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const s = `grant_type=client_credentials&client_id=${e}&client_secret=${t}&scope=${encodeURIComponent(n)}`;
  r.send(s), r.status === 200 ? (se(r.responseText, s), q(!1)) : (console.error(r.responseText), q(!0));
}, ie = () => {
  const e = `${ae}/oauth2/token`, t = new XMLHttpRequest();
  t.open("POST", `${e}`, !1), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const o = localStorage.getItem("lio-access-token-request");
  o !== "" && (t.send(o), t.status === 200 ? (se(t.responseText), q(!1)) : (console.error(t.responseText), q(!0)));
}, ce = "https://pbbxp1o6qg.execute-api.us-east-2.amazonaws.com/dev", U = "en-us", le = () => {
  let e;
  try {
    return e = window.initSync ? window.initSync() : void 0, e;
  } catch {
    return "";
  }
}, ue = (e) => {
  const t = new XMLHttpRequest(), o = {
    translationType: "machine",
    text: e
  };
  try {
    re() && ie();
    const n = z(), r = E(), s = le();
    return t.open("POST", `${ce}/linguistnow/resources/locale/detectLocale/`, !1), t.setRequestHeader("x-api-key", `${r}`), t.setRequestHeader("Authorization", `Bearer ${n}`), t.setRequestHeader("X-Request-ID", `${s}`), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(o)), t.status === 200 ? JSON.parse(t.responseText).detectedLanguage : null;
  } catch {
    return null;
  }
}, K = (e, t, o) => {
  const n = {
    sourceContent: e,
    sourceLocale: t,
    targetLocale: o,
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
    const r = z(), s = E(), d = le(), c = new XMLHttpRequest(), p = `${ce}/linguistnow/resources/v1/translate/`;
    return c.open("POST", p, !1), c.setRequestHeader("x-api-key", `${s}`), c.setRequestHeader("Authorization", `Bearer ${r}`), c.setRequestHeader("X-Request-ID", `${d}`), c.setRequestHeader("Content-Type", "application/json"), c.send(JSON.stringify(n)), c.status === 200 ? JSON.parse(c.responseText).translatedText : null;
  } catch {
    return null;
  }
}, de = (e) => e.toLocaleLowerCase() !== U, fe = () => {
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
}, Ue = (e) => {
  const t = e == null ? void 0 : e.toLocaleLowerCase().replace("_", "-").split("-");
  if (t) {
    const o = t[0];
    switch (o) {
      case "zh":
        return "zh-hk";
      default:
        return o;
    }
  }
  return null;
}, L = (e, t, o) => {
  const n = S(t, o);
  let r = P(n, e);
  if (r)
    return r;
  const s = localStorage.getItem("user-locale");
  return s != null && s !== U && (r = K(e, U, s), r) ? (W(n, e, r), r) : null;
}, ne = (e, t, o) => {
  const n = S(e.source.id, y.Translation);
  if (!Me(n)) {
    const s = `lang: ${t}`;
    o = `${o}
${s}`, Re(n);
  }
  return o;
}, oe = (e, t, o) => {
  let n = P(e, t);
  if (n)
    o.text = n;
  else {
    const r = localStorage.getItem("user-locale"), s = pe(o.text);
    s != null && r !== s && (n = K(t, s, r), n && (W(e, t, n), o.text = n));
  }
}, $e = {
  beforeSend(e, t) {
    if (te()) {
      if (e.type === "text") {
        let r = fe();
        e.text = ne(e, r, e.text);
      }
      return e;
    }
    const o = S(t.conversation.id, y.Agent), n = !ee(o);
    if (e.type === "text" && n) {
      const r = e == null ? void 0 : e.text;
      if (r !== null && r.length > 0) {
        let s = qe();
        if (s || (s = pe(e.text), Le(s)), s != null && de(s)) {
          let c = K(r, s, U);
          c != null && (c = ne(e, s, c), e.text = c, W(S(t.conversation.id, y.Translation), c, r));
        }
      }
    }
    return e.type === "formResponse" && n && e.fields.find((d) => d.name === "dataCapture.systemField.requester.email" && d.type === "email") && Y(o), e;
  },
  beforeDisplay(e, t) {
    var d, c;
    if (te())
      return e;
    const o = e.text, n = ((d = e.source) == null ? void 0 : d.type) === "zd:answerBot", r = ((c = e.source) == null ? void 0 : c.type) === "zd:agentWorkspace", s = !ee(S(t.conversation.id, y.Agent));
    switch (e.type) {
      case "text": {
        if (n) {
          let p = L(e.text, t.conversation.id, y.Agent);
          p && (e.text = p);
          const f = e.actions;
          if (f)
            for (const h of f) {
              let g = L(h.text, t.conversation.id, y.AnswerBot);
              g && (h.text = g);
            }
        } else if (r) {
          let p = !1, f = !1, h = !1;
          const g = e.displayName === "Automated Response", v = S(t.conversation.id, y.Agent);
          let b = e;
          !g && b.metadata != null && (p = b.metadata["__zendesk_msg.source_type"] !== null && b.metadata["__zendesk_msg.source_type"] === "sunco_web", f = b.metadata["__zendesk_msg.agent.id"] !== null && b.metadata["__zendesk_msg.agent.id"] === "__trigger", h = f && p), g || h ? oe(v, o, e) : s && (Y(v), oe(v, o, e));
        } else {
          const p = P(S(t.conversation.id, y.Translation), e.text);
          p && (e.text = p);
        }
        return e;
      }
      case "carousel": {
        if (n) {
          let p = e;
          for (const f of p.items) {
            const h = L(f.title, t.conversation.id, y.Carousel);
            h && (f.title = h);
            const g = L(f.description, t.conversation.id, y.Carousel);
            g && (f.description = g);
            for (const v of f.actions) {
              const b = L(v.text, t.conversation.id, y.Carousel);
              b && (v.text = b);
              const x = localStorage.getItem("user-locale"), C = Ue(x);
              C && (v.uri = v.uri.replace("en-us", C));
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
              const h = L(f.label, t.conversation.id, y.Form);
              h && (f.label = h);
            }
        }
        return e;
      }
      default:
        return e;
    }
  }
}, Ne = () => Se, je = Ne(), Fe = je.default, Pe = ({ integrationId: e, apiKey: t, clientId: o, clientSecret: n, chatbotOptions: r }) => {
  const s = {
    integrationId: e,
    delegate: $e,
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
  r && (s.soundNotificationEnabled = r.soundNotificationEnabled ?? !0, s.businessName = r.businessName ?? null, s.businessIconUrl = r.businessIconUrl ?? null, s.backgroundImageUrl = r.backgroundImageUrl ?? null, r.customColors && (s.customColors.brandColor = r.customColors.brandColor ?? A.brandColor, s.customColors.conversationColor = r.customColors.conversationColor ?? A.conversationColor, s.customColors.actionColor = r.customColors.actionColor ?? A.actionColor)), console.info(`Initializing ZD ChatBot plugin version: ${F.version}`), De(), Ee(o, n), Oe(t), E() === null || E() === "" || z() === null ? (console.error(`Failed to initialize ZD ChatBot plugin version: ${F.version}. Missing api key, clientId or clientSecret`), q(!0)) : ue("hello") === null && (q(!0), console.error(`Failed to initialize ZD ChatBot plugin version: ${F.version}. Invalid api key or oAuth2 token`)), Fe.init(s);
}, We = () => {
  const e = He();
  if (e) {
    const t = B(S(e, y.Agent));
    if (console.debug("AnswerBot Translations"), t)
      for (const n of t)
        console.debug(n);
    const o = B(S(e, y.Translation));
    if (o && (console.debug("User Translations"), t))
      for (const n of o)
        console.debug(n);
  }
};
window.debugModeViewLogs = We;
export {
  We as debugModeViewLogs,
  Pe as initLIOChatBot
};
