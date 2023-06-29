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
var he = function(e) {
  var o = {};
  function n(t) {
    if (o[t])
      return o[t].exports;
    var r = o[t] = { i: t, l: !1, exports: {} };
    return e[t].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }
  return n.m = e, n.c = o, n.d = function(t, r, a) {
    n.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: a });
  }, n.r = function(t) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, n.t = function(t, r) {
    if (1 & r && (t = n(t)), 8 & r || 4 & r && typeof t == "object" && t && t.__esModule)
      return t;
    var a = /* @__PURE__ */ Object.create(null);
    if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & r && typeof t != "string")
      for (var d in t)
        n.d(a, d, function(p) {
          return t[p];
        }.bind(null, d));
    return a;
  }, n.n = function(t) {
    var r = t && t.__esModule ? function() {
      return t.default;
    } : function() {
      return t;
    };
    return n.d(r, "a", r), r;
  }, n.o = function(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }, n.p = "https://cdn.smooch.io/", n(n.s = 6);
}([function(e, o, n) {
  var t = n(3);
  e.exports = new t();
}, function(e, o) {
  e.exports = { isFunction: function(n) {
    return typeof n == "function";
  }, isArray: function(n) {
    return Object.prototype.toString.apply(n) === "[object Array]";
  }, each: function(n, t) {
    for (var r = 0, a = n.length; r < a && t(n[r], r) !== !1; r++)
      ;
  } };
}, function(e, o, n) {
  e.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(e, o, n) {
  var t = n(4), r = n(1), a = r.each, d = r.isFunction, p = r.isArray;
  function f() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  f.prototype = { constructor: f, register: function(u, m, g) {
    var v = this.queries, y = g && this.browserIsIncapable;
    return v[u] || (v[u] = new t(u, y)), d(m) && (m = { match: m }), p(m) || (m = [m]), a(m, function(C) {
      d(C) && (C = { match: C }), v[u].addHandler(C);
    }), this;
  }, unregister: function(u, m) {
    var g = this.queries[u];
    return g && (m ? g.removeHandler(m) : (g.clear(), delete this.queries[u])), this;
  } }, e.exports = f;
}, function(e, o, n) {
  var t = n(5), r = n(1).each;
  function a(d, p) {
    this.query = d, this.isUnconditional = p, this.handlers = [], this.mql = window.matchMedia(d);
    var f = this;
    this.listener = function(u) {
      f.mql = u.currentTarget || u, f.assess();
    }, this.mql.addListener(this.listener);
  }
  a.prototype = { constuctor: a, addHandler: function(d) {
    var p = new t(d);
    this.handlers.push(p), this.matches() && p.on();
  }, removeHandler: function(d) {
    var p = this.handlers;
    r(p, function(f, u) {
      if (f.equals(d))
        return f.destroy(), !p.splice(u, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    r(this.handlers, function(d) {
      d.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var d = this.matches() ? "on" : "off";
    r(this.handlers, function(p) {
      p[d]();
    });
  } }, e.exports = a;
}, function(e, o) {
  function n(t) {
    this.options = t, !t.deferSetup && this.setup();
  }
  n.prototype = { constructor: n, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(t) {
    return this.options === t || this.options.match === t;
  } }, e.exports = n;
}, function(e, o, n) {
  n.r(o);
  var t = n(2), r = n.n(t);
  function a(s) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      s();
    }) : s();
  }
  function d(s) {
    var i = ["screen"];
    return s.minHeight && i.push("(min-height: ".concat(s.minHeight, "px)")), s.maxHeight && i.push("(max-height: ".concat(s.maxHeight, "px)")), s.minWidth && i.push("(min-width: ".concat(s.minWidth, "px)")), s.maxWidth && i.push("(max-width: ".concat(s.maxWidth, "px)")), i.join(" and ");
  }
  var p = n(0), f = n.n(p), u = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, m = ["lg", "md", "sm", "xs"];
  function g(s) {
    for (var i = 0; i < m.length; i++) {
      var c = m[i], l = u[c];
      Object.prototype.toString.call(l) !== "[object Array]" && (l = [l]);
      for (var b = 0; b < l.length; b++)
        s({ rule: l[b], size: c });
    }
  }
  function v() {
    return (v = Object.assign ? Object.assign.bind() : function(s) {
      for (var i = 1; i < arguments.length; i++) {
        var c = arguments[i];
        for (var l in c)
          Object.prototype.hasOwnProperty.call(c, l) && (s[l] = c[l]);
      }
      return s;
    }).apply(this, arguments);
  }
  function y(s) {
    return function(i) {
      if (Array.isArray(i))
        return C(i);
    }(s) || function(i) {
      if (typeof Symbol < "u" && i[Symbol.iterator] != null || i["@@iterator"] != null)
        return Array.from(i);
    }(s) || function(i, c) {
      if (i) {
        if (typeof i == "string")
          return C(i, c);
        var l = Object.prototype.toString.call(i).slice(8, -1);
        if (l === "Object" && i.constructor && (l = i.constructor.name), l === "Map" || l === "Set")
          return Array.from(i);
        if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
          return C(i, c);
      }
    }(s) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function C(s, i) {
    (i == null || i > s.length) && (i = s.length);
    for (var c = 0, l = new Array(i); c < i; c++)
      l[c] = s[c];
    return l;
  }
  var x, h, U, O, R, M = {}, _ = [], I = [], $ = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), le = /PhantomJS/.test(navigator.userAgent) && !0, T = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if ($) {
    var H = document.createElement("a");
    H.href = "https://smooch.io/live-web-chat/?utm_source=widget", H.text = "Powered by Zendesk Sunshine", a(function() {
      document.body.appendChild(H);
    });
  }
  function ce() {
    var s = document.createElement("link");
    s.rel = "stylesheet", s.type = "text/css", s.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(s);
  }
  function ue(s) {
    var i;
    window.__onWebMessengerFrameReady__ = function() {
    }, x = s, U || (i = h, g(function(X) {
      var pe = X.rule, me = X.size;
      f.a.register(d(pe), function() {
        i.contentWindow.postMessage({ type: "sizeChange", value: me }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var c = T[0], l = 0; l < T.length; c = T[++l])
      M[c] = x[c];
    if (I) {
      for (var b = I[0], q = 0; q < I.length; b = I[++q]) {
        var L;
        (L = x).on.apply(L, y(b.args));
      }
      I = void 0;
    }
    if (R) {
      var K, F = (K = x).init.apply(K, y(R));
      R = void 0;
      for (var N = _[0], J = 0; J < _.length; N = _[++J])
        F = N.type === "then" ? F.then(N.next) : F.catch(N.next);
      _ = [];
    }
  }
  var z = function(s) {
    return s.contentWindow && s.contentWindow.document;
  };
  function de() {
    if (!h) {
      var s = null, i = !1;
      (h = document.createElement("iframe")).id = "web-messenger-container", h.frameBorder = 0, h.allowFullscreen = !0, h.allowTransparency = !0, h.scrolling = "no", h.className = r.a.iframe;
      var c = function() {
        i = !0, clearInterval(s), delete h.onload;
        var l = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, b = l ? 'nonce="'.concat(l, '"') : "", q = `
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
          var L = z(h);
          L.open(), L.write(q), L.close();
        }
      };
      s = setInterval(function() {
        var l = z(h);
        i || !l || l.readyState !== "complete" && l.readyState !== "interactive" || c();
      }, 1e3), h.onload = function() {
        i || c();
      };
    }
    U ? O && (O.appendChild(h), O = void 0) : document.body.appendChild(h);
  }
  var fe = { VERSION: "5.5.5", on: function() {
    I || (I = []);
    for (var s = arguments.length, i = new Array(s), c = 0; c < s; c++)
      i[c] = arguments[c];
    I.push({ args: i });
  }, init: function() {
    for (var s = arguments.length, i = new Array(s), c = 0; c < s; c++)
      i[c] = arguments[c];
    R = i, U = i.length > 0 && !!i[0].embedded, $ || le || a(function() {
      ce(), de();
    });
    var l = { then: function(b) {
      return _.push({ type: "then", next: b }), l;
    }, catch: function(b) {
      return _.push({ type: "catch", next: b }), l;
    } };
    return l;
  }, render: function(s) {
    h ? s.appendChild(h) : O = s;
  }, destroy: function() {
    x && (x.destroy(), h.remove ? h.remove() : h.parentNode.removeChild(h), g(function(s) {
      var i = s.rule;
      f.a.unregister(d(i));
    }), Z());
  } };
  function Z() {
    if (!document.getElementById("web-messenger-container")) {
      x = void 0, h = void 0, window.__onWebMessengerFrameReady__ = ue;
      for (var s = T[0], i = 0; i < T.length; s = T[++i])
        M[s] && delete M[s];
      v(M, fe);
    }
  }
  Z(), o.default = M;
}]);
const A = {
  brandColor: "65758e",
  conversationColor: "0099ff",
  actionColor: "0099ff"
}, ge = "zd-chatbot-web", ve = "1.0.10", ye = "module", be = {
  dev: "vite",
  build: "tsc && vite build",
  test: "vitest run",
  coverage: "vitest run --coverage"
}, we = {
  "@types/node": "^18.13.0",
  "@types/smooch": "^5.3.3",
  "@vitest/coverage-c8": "^0.30.1",
  jsdom: "^21.1.1",
  typescript: "^4.9.3",
  vite: "^4.1.0",
  vitest: "^0.30.1"
}, Ce = {
  smooch: "^5.3.3",
  terser: "^5.16.3",
  "vite-require": "^0.2.3"
}, W = {
  name: ge,
  private: !0,
  version: ve,
  type: ye,
  scripts: be,
  devDependencies: we,
  dependencies: Ce
};
var w = /* @__PURE__ */ ((e) => (e.Translation = "translation", e.AnswerBot = "answerBot", e.Agent = "agent", e.Carousel = "carousel", e.Form = "form", e))(w || {});
const S = (e, o) => `${o}:${e}`, xe = (e, o) => {
  localStorage.setItem(e, JSON.stringify([...o]));
}, ne = (e) => {
  const o = localStorage.getItem(e);
  return o ? new Map(JSON.parse(o)) : null;
}, B = (e, o, n) => {
  const t = S(
    e,
    "translation"
    /* Translation */
  ), r = ne(t) ?? /* @__PURE__ */ new Map();
  r.set(o, n), xe(t, r);
}, D = (e, o) => {
  const n = S(
    e,
    "translation"
    /* Translation */
  ), t = ne(n);
  return (t == null ? void 0 : t.get(o)) ?? null;
}, Se = (e) => {
  localStorage.setItem("user-locale", e);
}, Ie = () => {
  const e = localStorage.getItem("user-locale");
  return e == null || e === "" ? null : e;
}, G = (e) => {
  const o = `disable-auto-translate:${e}`;
  localStorage.setItem(o, "true");
}, Q = (e) => {
  const o = `disable-auto-translate:${e}`;
  return localStorage.getItem(o) === "true";
}, _e = (e) => {
  const o = `is-locale-sent-to-server:${e}`;
  return localStorage.getItem(o) === "true";
}, Te = (e) => {
  const o = `is-locale-sent-to-server:${e}`;
  localStorage.setItem(o, "true");
}, j = () => {
  const e = localStorage.getItem("lio-api-key");
  return e ? e === "" ? null : e : null;
}, Le = (e) => {
  e !== "" && localStorage.setItem("lio-api-key", e);
}, V = (e) => localStorage.setItem("lio-chatbot-disable-translate-feature", e ? "true" : "false"), Y = () => {
  const e = localStorage.getItem("lio-chatbot-disable-translate-feature");
  return e && e === "true";
}, Ae = () => {
  localStorage.removeItem("user-locale"), localStorage.removeItem("lio-chatbot-token"), localStorage.removeItem("lio-chatbot-token-expiration"), localStorage.removeItem("lio-access-token-request");
}, oe = "https://dev-agw.golinguist.com", E = "en-us", re = (e) => {
  const o = new XMLHttpRequest(), n = {
    translationType: "machine",
    text: e
  };
  try {
    const t = j();
    return o.open("POST", `${oe}/linguistnow/resources/locale/detectLocale/`, !1), o.setRequestHeader("x-api-key", `${t}`), o.setRequestHeader("Content-Type", "application/json"), o.send(JSON.stringify(n)), o.status === 200 ? JSON.parse(o.responseText).detectedLanguage : null;
  } catch {
    return null;
  }
}, P = (e, o, n) => {
  const t = {
    sourceContent: e,
    sourceLocale: o,
    targetLocale: n,
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
    const r = j(), a = new XMLHttpRequest(), d = `${oe}/linguistnow/resources/v1/translate/`;
    if (a.open("POST", d, !1), a.setRequestHeader("x-api-key", `${r}`), a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify(t)), a.status === 200) {
      const p = JSON.parse(a.responseText);
      return console.debug(`Running LIO Translate API: ${e}`), p.translatedText;
    }
    return null;
  } catch {
    return null;
  }
}, ie = (e) => e.toLocaleLowerCase() !== E, se = () => {
  if (typeof Intl < "u")
    try {
      return Intl.NumberFormat().resolvedOptions().locale.toLocaleLowerCase();
    } catch {
      return console.error("Cannot get locale from Intl"), null;
    }
  return null;
}, ae = (e) => {
  let o = se();
  return ie(o) || (o = re(e)), o;
}, ke = (e) => {
  const o = e == null ? void 0 : e.toLocaleLowerCase().replace("_", "-").split("-");
  if (o) {
    const n = o[0];
    switch (n) {
      case "zh":
        return "zh-hk";
      default:
        return n;
    }
  }
  return null;
}, k = (e, o, n) => {
  const t = S(o, n);
  let r = D(t, e);
  if (r)
    return r;
  const a = localStorage.getItem("user-locale");
  return a != null && a !== E && (r = P(e, E, a), r) ? (B(t, e, r), r) : null;
}, ee = (e, o, n) => {
  const t = S(e.source.id, w.Translation);
  if (!_e(t)) {
    const a = `lang: ${o}`;
    n = `${n}
${a}`, Te(t);
  }
  return n;
}, te = (e, o, n) => {
  let t = D(e, o);
  if (t)
    n.text = t;
  else {
    const r = localStorage.getItem("user-locale"), a = ae(n.text);
    a != null && r !== a && (t = P(o, a, r), t && (B(e, o, t), n.text = t));
  }
}, Me = {
  beforeSend(e, o) {
    if (Y()) {
      if (e.type === "text") {
        let r = se();
        e.text = ee(e, r, e.text);
      }
      return e;
    }
    const n = S(o.conversation.id, w.Agent), t = !Q(n);
    if (e.type === "text" && t) {
      const r = e == null ? void 0 : e.text;
      if (r !== null && r.length > 0) {
        let a = Ie();
        if (a || (a = ae(e.text), Se(a)), a != null && ie(a)) {
          let p = P(r, a, E);
          p != null && (p = ee(e, a, p), e.text = p, B(S(o.conversation.id, w.Translation), p, r));
        }
      }
    }
    return e.type === "formResponse" && t && e.fields.find((d) => d.name === "dataCapture.systemField.requester.email" && d.type === "email") && G(n), e;
  },
  beforeDisplay(e, o) {
    var d, p;
    if (Y())
      return e;
    const n = e.text, t = ((d = e.source) == null ? void 0 : d.type) === "zd:answerBot", r = ((p = e.source) == null ? void 0 : p.type) === "zd:agentWorkspace", a = !Q(S(o.conversation.id, w.Agent));
    switch (e.type) {
      case "text": {
        if (t) {
          let f = k(e.text, o.conversation.id, w.Agent);
          f && (e.text = f);
          const u = e.actions;
          if (u)
            for (const m of u) {
              let g = k(m.text, o.conversation.id, w.AnswerBot);
              g && (m.text = g);
            }
        } else if (r) {
          let f = !1, u = !1, m = !1;
          const g = e.displayName === "Automated Response", v = S(o.conversation.id, w.Agent);
          let y = e;
          !g && y.metadata != null && (f = y.metadata["__zendesk_msg.source_type"] !== null && y.metadata["__zendesk_msg.source_type"] === "sunco_web", u = y.metadata["__zendesk_msg.agent.id"] !== null && y.metadata["__zendesk_msg.agent.id"] === "__trigger", m = u && f), g || m ? te(v, n, e) : a && (G(v), te(v, n, e));
        } else {
          const f = D(S(o.conversation.id, w.Translation), e.text);
          f && (e.text = f);
        }
        return e;
      }
      case "carousel": {
        if (t) {
          let f = e;
          for (const u of f.items) {
            const m = k(u.title, o.conversation.id, w.Carousel);
            m && (u.title = m);
            const g = k(u.description, o.conversation.id, w.Carousel);
            g && (u.description = g);
            for (const v of u.actions) {
              const y = k(v.text, o.conversation.id, w.Carousel);
              y && (v.text = y);
              const C = localStorage.getItem("user-locale"), x = ke(C);
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
              const m = k(u.label, o.conversation.id, w.Form);
              m && (u.label = m);
            }
        }
        return e;
      }
      default:
        return e;
    }
  }
}, qe = () => he, Oe = qe(), Re = Oe.default, Ne = ({ integrationId: e, apiKey: o, chatbotOptions: n }) => {
  const t = {
    integrationId: e,
    delegate: Me,
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
  n && (t.soundNotificationEnabled = n.soundNotificationEnabled ?? !0, t.businessName = n.businessName ?? null, t.businessIconUrl = n.businessIconUrl ?? null, t.backgroundImageUrl = n.backgroundImageUrl ?? null, n.customColors && (t.customColors.brandColor = n.customColors.brandColor ?? A.brandColor, t.customColors.conversationColor = n.customColors.conversationColor ?? A.conversationColor, t.customColors.actionColor = n.customColors.actionColor ?? A.actionColor)), console.info(`Initializing ZD ChatBot plugin version: ${W.version}`), Ae(), Le(o), j() === null || j() === "" ? (console.error(`Failed to initialize ZD ChatBot plugin version: ${W.version}`), V(!0)) : re("hello") === null && (V(!0), console.error(`Failed to initialize ZD ChatBot plugin version: ${W.version}. Invalid api key`)), Re.init(t);
};
export {
  Ne as initLIOChatBot
};
