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
var ye = function(e) {
  var n = {};
  function o(t) {
    if (n[t])
      return n[t].exports;
    var r = n[t] = { i: t, l: !1, exports: {} };
    return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
  }
  return o.m = e, o.c = n, o.d = function(t, r, i) {
    o.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: i });
  }, o.r = function(t) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, o.t = function(t, r) {
    if (1 & r && (t = o(t)), 8 & r || 4 & r && typeof t == "object" && t && t.__esModule)
      return t;
    var i = /* @__PURE__ */ Object.create(null);
    if (o.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & r && typeof t != "string")
      for (var d in t)
        o.d(i, d, function(m) {
          return t[m];
        }.bind(null, d));
    return i;
  }, o.n = function(t) {
    var r = t && t.__esModule ? function() {
      return t.default;
    } : function() {
      return t;
    };
    return o.d(r, "a", r), r;
  }, o.o = function(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }, o.p = "https://cdn.smooch.io/", o(o.s = 6);
}([function(e, n, o) {
  var t = o(3);
  e.exports = new t();
}, function(e, n) {
  e.exports = { isFunction: function(o) {
    return typeof o == "function";
  }, isArray: function(o) {
    return Object.prototype.toString.apply(o) === "[object Array]";
  }, each: function(o, t) {
    for (var r = 0, i = o.length; r < i && t(o[r], r) !== !1; r++)
      ;
  } };
}, function(e, n, o) {
  e.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(e, n, o) {
  var t = o(4), r = o(1), i = r.each, d = r.isFunction, m = r.isArray;
  function f() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  f.prototype = { constructor: f, register: function(u, p, g) {
    var v = this.queries, y = g && this.browserIsIncapable;
    return v[u] || (v[u] = new t(u, y)), d(p) && (p = { match: p }), m(p) || (p = [p]), i(p, function(S) {
      d(S) && (S = { match: S }), v[u].addHandler(S);
    }), this;
  }, unregister: function(u, p) {
    var g = this.queries[u];
    return g && (p ? g.removeHandler(p) : (g.clear(), delete this.queries[u])), this;
  } }, e.exports = f;
}, function(e, n, o) {
  var t = o(5), r = o(1).each;
  function i(d, m) {
    this.query = d, this.isUnconditional = m, this.handlers = [], this.mql = window.matchMedia(d);
    var f = this;
    this.listener = function(u) {
      f.mql = u.currentTarget || u, f.assess();
    }, this.mql.addListener(this.listener);
  }
  i.prototype = { constuctor: i, addHandler: function(d) {
    var m = new t(d);
    this.handlers.push(m), this.matches() && m.on();
  }, removeHandler: function(d) {
    var m = this.handlers;
    r(m, function(f, u) {
      if (f.equals(d))
        return f.destroy(), !m.splice(u, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    r(this.handlers, function(d) {
      d.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var d = this.matches() ? "on" : "off";
    r(this.handlers, function(m) {
      m[d]();
    });
  } }, e.exports = i;
}, function(e, n) {
  function o(t) {
    this.options = t, !t.deferSetup && this.setup();
  }
  o.prototype = { constructor: o, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(t) {
    return this.options === t || this.options.match === t;
  } }, e.exports = o;
}, function(e, n, o) {
  o.r(n);
  var t = o(2), r = o.n(t);
  function i(a) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      a();
    }) : a();
  }
  function d(a) {
    var s = ["screen"];
    return a.minHeight && s.push("(min-height: ".concat(a.minHeight, "px)")), a.maxHeight && s.push("(max-height: ".concat(a.maxHeight, "px)")), a.minWidth && s.push("(min-width: ".concat(a.minWidth, "px)")), a.maxWidth && s.push("(max-width: ".concat(a.maxWidth, "px)")), s.join(" and ");
  }
  var m = o(0), f = o.n(m), u = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, p = ["lg", "md", "sm", "xs"];
  function g(a) {
    for (var s = 0; s < p.length; s++) {
      var l = p[s], c = u[l];
      Object.prototype.toString.call(c) !== "[object Array]" && (c = [c]);
      for (var b = 0; b < c.length; b++)
        a({ rule: c[b], size: l });
    }
  }
  function v() {
    return (v = Object.assign ? Object.assign.bind() : function(a) {
      for (var s = 1; s < arguments.length; s++) {
        var l = arguments[s];
        for (var c in l)
          Object.prototype.hasOwnProperty.call(l, c) && (a[c] = l[c]);
      }
      return a;
    }).apply(this, arguments);
  }
  function y(a) {
    return function(s) {
      if (Array.isArray(s))
        return S(s);
    }(a) || function(s) {
      if (typeof Symbol < "u" && s[Symbol.iterator] != null || s["@@iterator"] != null)
        return Array.from(s);
    }(a) || function(s, l) {
      if (s) {
        if (typeof s == "string")
          return S(s, l);
        var c = Object.prototype.toString.call(s).slice(8, -1);
        if (c === "Object" && s.constructor && (c = s.constructor.name), c === "Map" || c === "Set")
          return Array.from(s);
        if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
          return S(s, l);
      }
    }(a) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function S(a, s) {
    (s == null || s > a.length) && (s = a.length);
    for (var l = 0, c = new Array(s); l < s; l++)
      c[l] = a[l];
    return c;
  }
  var x, h, D, R, E, M = {}, I = [], T = [], F = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), de = /PhantomJS/.test(navigator.userAgent) && !0, _ = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (F) {
    var N = document.createElement("a");
    N.href = "https://smooch.io/live-web-chat/?utm_source=widget", N.text = "Powered by Zendesk Sunshine", i(function() {
      document.body.appendChild(N);
    });
  }
  function fe() {
    var a = document.createElement("link");
    a.rel = "stylesheet", a.type = "text/css", a.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(a);
  }
  function pe(a) {
    var s;
    window.__onWebMessengerFrameReady__ = function() {
    }, x = a, D || (s = h, g(function(K) {
      var ge = K.rule, ve = K.size;
      f.a.register(d(ge), function() {
        s.contentWindow.postMessage({ type: "sizeChange", value: ve }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var l = _[0], c = 0; c < _.length; l = _[++c])
      M[l] = x[l];
    if (T) {
      for (var b = T[0], q = 0; q < T.length; b = T[++q]) {
        var k;
        (k = x).on.apply(k, y(b.args));
      }
      T = void 0;
    }
    if (E) {
      var X, j = (X = x).init.apply(X, y(E));
      E = void 0;
      for (var H = I[0], J = 0; J < I.length; H = I[++J])
        j = H.type === "then" ? j.then(H.next) : j.catch(H.next);
      I = [];
    }
  }
  var z = function(a) {
    return a.contentWindow && a.contentWindow.document;
  };
  function me() {
    if (!h) {
      var a = null, s = !1;
      (h = document.createElement("iframe")).id = "web-messenger-container", h.frameBorder = 0, h.allowFullscreen = !0, h.allowTransparency = !0, h.scrolling = "no", h.className = r.a.iframe;
      var l = function() {
        s = !0, clearInterval(a), delete h.onload;
        var c = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, b = c ? 'nonce="'.concat(c, '"') : "", q = `
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
        if ("srcdoc" in h)
          h.srcdoc = q;
        else {
          var k = z(h);
          k.open(), k.write(q), k.close();
        }
      };
      a = setInterval(function() {
        var c = z(h);
        s || !c || c.readyState !== "complete" && c.readyState !== "interactive" || l();
      }, 1e3), h.onload = function() {
        s || l();
      };
    }
    D ? R && (R.appendChild(h), R = void 0) : document.body.appendChild(h);
  }
  var he = { VERSION: "5.5.5", on: function() {
    T || (T = []);
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    T.push({ args: s });
  }, init: function() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    E = s, D = s.length > 0 && !!s[0].embedded, F || de || i(function() {
      fe(), me();
    });
    var c = { then: function(b) {
      return I.push({ type: "then", next: b }), c;
    }, catch: function(b) {
      return I.push({ type: "catch", next: b }), c;
    } };
    return c;
  }, render: function(a) {
    h ? a.appendChild(h) : R = a;
  }, destroy: function() {
    x && (x.destroy(), h.remove ? h.remove() : h.parentNode.removeChild(h), g(function(a) {
      var s = a.rule;
      f.a.unregister(d(s));
    }), Z());
  } };
  function Z() {
    if (!document.getElementById("web-messenger-container")) {
      x = void 0, h = void 0, window.__onWebMessengerFrameReady__ = pe;
      for (var a = _[0], s = 0; s < _.length; a = _[++s])
        M[a] && delete M[a];
      v(M, he);
    }
  }
  Z(), n.default = M;
}]);
const A = {
  brandColor: "65758e",
  conversationColor: "0099ff",
  actionColor: "0099ff"
}, be = "zd-chatbot-web", we = "1.0.9", Se = "module", xe = {
  dev: "vite",
  build: "tsc && vite build",
  test: "vitest run",
  coverage: "vitest run --coverage"
}, Ce = {
  "@types/node": "^18.13.0",
  "@types/smooch": "^5.3.3",
  "@vitest/coverage-c8": "^0.30.1",
  jsdom: "^21.1.1",
  typescript: "^4.9.3",
  vite: "^4.1.0",
  vitest: "^0.30.1"
}, Te = {
  smooch: "^5.3.3",
  terser: "^5.16.3",
  "vite-require": "^0.2.3"
}, V = {
  name: be,
  private: !0,
  version: we,
  type: Se,
  scripts: xe,
  devDependencies: Ce,
  dependencies: Te
};
var w = /* @__PURE__ */ ((e) => (e.Translation = "translation", e.AnswerBot = "answerBot", e.Agent = "agent", e.Carousel = "carousel", e.Form = "form", e))(w || {});
const C = (e, n) => `${n}:${e}`, Ie = (e, n) => {
  localStorage.setItem(e, JSON.stringify([...n]));
}, ne = (e) => {
  const n = localStorage.getItem(e);
  return n ? new Map(JSON.parse(n)) : null;
}, B = (e, n, o) => {
  const t = C(
    e,
    "translation"
    /* Translation */
  ), r = ne(t) ?? /* @__PURE__ */ new Map();
  r.set(n, o), Ie(t, r);
}, P = (e, n) => {
  const o = C(
    e,
    "translation"
    /* Translation */
  ), t = ne(o);
  return (t == null ? void 0 : t.get(n)) ?? null;
}, _e = (e) => {
  localStorage.setItem("user-locale", e);
}, ke = () => {
  const e = localStorage.getItem("user-locale");
  return e == null || e === "" ? null : e;
}, G = (e) => {
  const n = `disable-auto-translate:${e}`;
  localStorage.setItem(n, "true");
}, Q = (e) => {
  const n = `disable-auto-translate:${e}`;
  return localStorage.getItem(n) === "true";
}, Ae = (e) => {
  const n = `is-locale-sent-to-server:${e}`;
  return localStorage.getItem(n) === "true";
}, Le = (e) => {
  const n = `is-locale-sent-to-server:${e}`;
  localStorage.setItem(n, "true");
}, $ = () => {
  const e = localStorage.getItem("lio-chatbot-token");
  return e ? e === "" ? null : JSON.parse(e).access_token : null;
}, oe = () => {
  const e = localStorage.getItem("lio-chatbot-token-expiration");
  return e ? new Date(e) < new Date() : !0;
}, re = (e, n = "") => {
  n !== "" && localStorage.setItem("lio-access-token-request", n), localStorage.setItem("lio-chatbot-token", e);
  const r = new Date().getTime() + 1 * 60 * 60 * 1e3, i = new Date(r);
  localStorage.setItem("lio-chatbot-token-expiration", i.toISOString());
}, O = (e) => localStorage.setItem("lio-chatbot-disable-translate-feature", e ? "true" : "false"), Y = () => {
  const e = localStorage.getItem("lio-chatbot-disable-translate-feature");
  return e && e === "true";
}, Me = () => {
  localStorage.removeItem("user-locale"), localStorage.removeItem("lio-chatbot-token"), localStorage.removeItem("lio-chatbot-token-expiration"), localStorage.removeItem("lio-access-token-request");
}, se = {}.VITE_OAUTH_BASE_URL, qe = {}.VITE_OAUTH_SCOPE, Oe = (e, n) => {
  const o = `${se}/oauth2/token`, t = qe.replace(",", " "), r = new XMLHttpRequest();
  r.open("POST", `${o}`, !1), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const i = `grant_type=client_credentials&client_id=${e}&client_secret=${n}&scope=${encodeURIComponent(t)}`;
  r.send(i), r.status === 200 ? (re(r.responseText, i), O(!1)) : (console.error(r.responseText), O(!0));
}, ae = () => {
  const e = `${se}/oauth2/token`, n = new XMLHttpRequest();
  n.open("POST", `${e}`, !1), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const o = localStorage.getItem("lio-access-token-request");
  o !== "" && (n.send(o), n.status === 200 ? (re(n.responseText), O(!1)) : (console.error(n.responseText), O(!0)));
}, ie = "https://dev-agw.golinguist.com", U = "en-us", Re = (e) => {
  const n = new XMLHttpRequest(), o = {
    translationType: "machine",
    text: e
  };
  oe() && ae();
  const t = $();
  return n.open("POST", `${ie}/linguistnow/resources/locale/detectLocale/`, !1), n.setRequestHeader("Authorization", `${t}`), n.setRequestHeader("Content-Type", "application/json"), n.send(JSON.stringify(o)), n.status === 200 ? JSON.parse(n.responseText).detectedLanguage : null;
}, W = (e, n, o) => {
  const t = {
    sourceContent: e,
    sourceLocale: n,
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
  oe() && ae();
  const r = $(), i = new XMLHttpRequest();
  if (i.open("POST", `${ie}/linguistnow/resources/v1/translate/`, !1), i.setRequestHeader("Authorization", `${r}`), i.setRequestHeader("Content-Type", "application/json"), i.send(JSON.stringify(t)), i.status === 200) {
    const d = JSON.parse(i.responseText);
    return console.debug(`Running LIO Translate API: ${e}`), d.translatedText;
  }
  return null;
}, ce = (e) => e.toLocaleLowerCase() !== U, le = () => {
  if (typeof Intl < "u")
    try {
      return Intl.NumberFormat().resolvedOptions().locale.toLocaleLowerCase();
    } catch {
      return console.error("Cannot get locale from Intl"), null;
    }
  return null;
}, ue = (e) => {
  let n = le();
  return ce(n) || (n = Re(e)), n;
}, Ee = (e) => {
  const n = e == null ? void 0 : e.toLocaleLowerCase().replace("_", "-").split("-");
  if (n) {
    const o = n[0];
    switch (o) {
      case "zh":
        return "zh-hk";
      default:
        return o;
    }
  }
  return null;
}, L = (e, n, o) => {
  const t = C(n, o);
  let r = P(t, e);
  if (r)
    return r;
  const i = localStorage.getItem("user-locale");
  return i != null && i !== U && (r = W(e, U, i), r) ? (B(t, e, r), r) : null;
}, ee = (e, n, o) => {
  const t = C(e.source.id, w.Translation);
  if (!Ae(t)) {
    const i = `lang: ${n}`;
    o = `${o}
${i}`, Le(t);
  }
  return o;
}, te = (e, n, o) => {
  let t = P(e, n);
  if (t)
    o.text = t;
  else {
    const r = localStorage.getItem("user-locale"), i = ue(o.text);
    i != null && r !== i && (t = W(n, i, r), t && (B(e, n, t), o.text = t));
  }
}, He = {
  beforeSend(e, n) {
    if (Y()) {
      if (e.type === "text") {
        let r = le();
        e.text = ee(e, r, e.text);
      }
      return e;
    }
    const o = C(n.conversation.id, w.Agent), t = !Q(o);
    if (e.type === "text" && t) {
      const r = e == null ? void 0 : e.text;
      if (r !== null && r.length > 0) {
        let i = ke();
        if (i || (i = ue(e.text), _e(i)), i != null && ce(i)) {
          let m = W(r, i, U);
          m != null && (m = ee(e, i, m), e.text = m, B(C(n.conversation.id, w.Translation), m, r));
        }
      }
    }
    return e.type === "formResponse" && t && e.fields.find((d) => d.name === "dataCapture.systemField.requester.email" && d.type === "email") && G(o), e;
  },
  beforeDisplay(e, n) {
    var d, m;
    if (Y())
      return e;
    const o = e.text, t = ((d = e.source) == null ? void 0 : d.type) === "zd:answerBot", r = ((m = e.source) == null ? void 0 : m.type) === "zd:agentWorkspace", i = !Q(C(n.conversation.id, w.Agent));
    switch (e.type) {
      case "text": {
        if (t) {
          let f = L(e.text, n.conversation.id, w.Agent);
          f && (e.text = f);
          const u = e.actions;
          if (u)
            for (const p of u) {
              let g = L(p.text, n.conversation.id, w.AnswerBot);
              g && (p.text = g);
            }
        } else if (r) {
          let f = !1, u = !1, p = !1;
          const g = e.displayName === "Automated Response", v = C(n.conversation.id, w.Agent);
          let y = e;
          !g && y.metadata != null && (f = y.metadata["__zendesk_msg.source_type"] !== null && y.metadata["__zendesk_msg.source_type"] === "sunco_web", u = y.metadata["__zendesk_msg.agent.id"] !== null && y.metadata["__zendesk_msg.agent.id"] === "__trigger", p = u && f), g || p ? te(v, o, e) : i && (G(v), te(v, o, e));
        } else {
          const f = P(C(n.conversation.id, w.Translation), e.text);
          f && (e.text = f);
        }
        return e;
      }
      case "carousel": {
        if (t) {
          let f = e;
          for (const u of f.items) {
            const p = L(u.title, n.conversation.id, w.Carousel);
            p && (u.title = p);
            const g = L(u.description, n.conversation.id, w.Carousel);
            g && (u.description = g);
            for (const v of u.actions) {
              const y = L(v.text, n.conversation.id, w.Carousel);
              y && (v.text = y);
              const S = localStorage.getItem("user-locale"), x = Ee(S);
              x && (v.uri = v.uri.replace("en-us", x));
            }
          }
          return f;
        }
        return e;
      }
      case "form": {
        if (t) {
          const f = e;
          if (f.fields.length > 0)
            for (const u of f.fields) {
              const p = L(u.label, n.conversation.id, w.Form);
              p && (u.label = p);
            }
        }
        return e;
      }
      default:
        return e;
    }
  }
}, Ue = () => ye, De = Ue(), Ne = De.default, je = ({ integrationId: e, clientId: n, clientSecret: o, chatbotOptions: t }) => {
  const r = {
    integrationId: e,
    delegate: He,
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
  t && (r.soundNotificationEnabled = t.soundNotificationEnabled ?? !0, r.businessName = t.businessName ?? null, r.businessIconUrl = t.businessIconUrl ?? null, r.backgroundImageUrl = t.backgroundImageUrl ?? null, t.customColors && (r.customColors.brandColor = t.customColors.brandColor ?? A.brandColor, r.customColors.conversationColor = t.customColors.conversationColor ?? A.conversationColor, r.customColors.actionColor = t.customColors.actionColor ?? A.actionColor)), console.info(`Initializing ZD ChatBot plugin version: ${V.version}`), Me(), Oe(n, o), $() === null && (console.error(`Failed to initialize OAuth2 of ZD ChatBot plugin version: ${V.version}`), O(!0)), Ne.init(r);
};
export {
  je as initLIOChatBot
};
