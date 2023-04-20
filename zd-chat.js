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
var ae = function(e) {
  var t = {};
  function n(o) {
    if (t[o])
      return t[o].exports;
    var r = t[o] = { i: o, l: !1, exports: {} };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }
  return n.m = e, n.c = t, n.d = function(o, r, f) {
    n.o(o, r) || Object.defineProperty(o, r, { enumerable: !0, get: f });
  }, n.r = function(o) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
  }, n.t = function(o, r) {
    if (1 & r && (o = n(o)), 8 & r || 4 & r && typeof o == "object" && o && o.__esModule)
      return o;
    var f = /* @__PURE__ */ Object.create(null);
    if (n.r(f), Object.defineProperty(f, "default", { enumerable: !0, value: o }), 2 & r && typeof o != "string")
      for (var u in o)
        n.d(f, u, function(m) {
          return o[m];
        }.bind(null, u));
    return f;
  }, n.n = function(o) {
    var r = o && o.__esModule ? function() {
      return o.default;
    } : function() {
      return o;
    };
    return n.d(r, "a", r), r;
  }, n.o = function(o, r) {
    return Object.prototype.hasOwnProperty.call(o, r);
  }, n.p = "https://cdn.smooch.io/", n(n.s = 6);
}([function(e, t, n) {
  var o = n(3);
  e.exports = new o();
}, function(e, t) {
  e.exports = { isFunction: function(n) {
    return typeof n == "function";
  }, isArray: function(n) {
    return Object.prototype.toString.apply(n) === "[object Array]";
  }, each: function(n, o) {
    for (var r = 0, f = n.length; r < f && o(n[r], r) !== !1; r++)
      ;
  } };
}, function(e, t, n) {
  e.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(e, t, n) {
  var o = n(4), r = n(1), f = r.each, u = r.isFunction, m = r.isArray;
  function d() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  d.prototype = { constructor: d, register: function(l, h, g) {
    var b = this.queries, I = g && this.browserIsIncapable;
    return b[l] || (b[l] = new o(l, I)), u(h) && (h = { match: h }), m(h) || (h = [h]), f(h, function(w) {
      u(w) && (w = { match: w }), b[l].addHandler(w);
    }), this;
  }, unregister: function(l, h) {
    var g = this.queries[l];
    return g && (h ? g.removeHandler(h) : (g.clear(), delete this.queries[l])), this;
  } }, e.exports = d;
}, function(e, t, n) {
  var o = n(5), r = n(1).each;
  function f(u, m) {
    this.query = u, this.isUnconditional = m, this.handlers = [], this.mql = window.matchMedia(u);
    var d = this;
    this.listener = function(l) {
      d.mql = l.currentTarget || l, d.assess();
    }, this.mql.addListener(this.listener);
  }
  f.prototype = { constuctor: f, addHandler: function(u) {
    var m = new o(u);
    this.handlers.push(m), this.matches() && m.on();
  }, removeHandler: function(u) {
    var m = this.handlers;
    r(m, function(d, l) {
      if (d.equals(u))
        return d.destroy(), !m.splice(l, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    r(this.handlers, function(u) {
      u.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var u = this.matches() ? "on" : "off";
    r(this.handlers, function(m) {
      m[u]();
    });
  } }, e.exports = f;
}, function(e, t) {
  function n(o) {
    this.options = o, !o.deferSetup && this.setup();
  }
  n.prototype = { constructor: n, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(o) {
    return this.options === o || this.options.match === o;
  } }, e.exports = n;
}, function(e, t, n) {
  n.r(t);
  var o = n(2), r = n.n(o);
  function f(i) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      i();
    }) : i();
  }
  function u(i) {
    var s = ["screen"];
    return i.minHeight && s.push("(min-height: ".concat(i.minHeight, "px)")), i.maxHeight && s.push("(max-height: ".concat(i.maxHeight, "px)")), i.minWidth && s.push("(min-width: ".concat(i.minWidth, "px)")), i.maxWidth && s.push("(max-width: ".concat(i.maxWidth, "px)")), s.join(" and ");
  }
  var m = n(0), d = n.n(m), l = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, h = ["lg", "md", "sm", "xs"];
  function g(i) {
    for (var s = 0; s < h.length; s++) {
      var c = h[s], a = l[c];
      Object.prototype.toString.call(a) !== "[object Array]" && (a = [a]);
      for (var v = 0; v < a.length; v++)
        i({ rule: a[v], size: c });
    }
  }
  function b() {
    return (b = Object.assign ? Object.assign.bind() : function(i) {
      for (var s = 1; s < arguments.length; s++) {
        var c = arguments[s];
        for (var a in c)
          Object.prototype.hasOwnProperty.call(c, a) && (i[a] = c[a]);
      }
      return i;
    }).apply(this, arguments);
  }
  function I(i) {
    return function(s) {
      if (Array.isArray(s))
        return w(s);
    }(i) || function(s) {
      if (typeof Symbol < "u" && s[Symbol.iterator] != null || s["@@iterator"] != null)
        return Array.from(s);
    }(i) || function(s, c) {
      if (s) {
        if (typeof s == "string")
          return w(s, c);
        var a = Object.prototype.toString.call(s).slice(8, -1);
        if (a === "Object" && s.constructor && (a = s.constructor.name), a === "Map" || a === "Set")
          return Array.from(s);
        if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return w(s, c);
      }
    }(i) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function w(i, s) {
    (s == null || s > i.length) && (s = i.length);
    for (var c = 0, a = new Array(s); c < s; c++)
      a[c] = i[c];
    return a;
  }
  var C, p, U, k, W, M = {}, T = [], S = [], D = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), ee = /PhantomJS/.test(navigator.userAgent) && !0, L = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (D) {
    var E = document.createElement("a");
    E.href = "https://smooch.io/live-web-chat/?utm_source=widget", E.text = "Powered by Zendesk Sunshine", f(function() {
      document.body.appendChild(E);
    });
  }
  function te() {
    var i = document.createElement("link");
    i.rel = "stylesheet", i.type = "text/css", i.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(i);
  }
  function ne(i) {
    var s;
    window.__onWebMessengerFrameReady__ = function() {
    }, C = i, U || (s = p, g(function(Q) {
      var se = Q.rule, ie = Q.size;
      d.a.register(u(se), function() {
        s.contentWindow.postMessage({ type: "sizeChange", value: ie }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var c = L[0], a = 0; a < L.length; c = L[++a])
      M[c] = C[c];
    if (S) {
      for (var v = S[0], O = 0; O < S.length; v = S[++O]) {
        var A;
        (A = C).on.apply(A, I(v.args));
      }
      S = void 0;
    }
    if (W) {
      var F, N = (F = C).init.apply(F, I(W));
      W = void 0;
      for (var j = T[0], J = 0; J < T.length; j = T[++J])
        N = j.type === "then" ? N.then(j.next) : N.catch(j.next);
      T = [];
    }
  }
  var $ = function(i) {
    return i.contentWindow && i.contentWindow.document;
  };
  function oe() {
    if (!p) {
      var i = null, s = !1;
      (p = document.createElement("iframe")).id = "web-messenger-container", p.frameBorder = 0, p.allowFullscreen = !0, p.allowTransparency = !0, p.scrolling = "no", p.className = r.a.iframe;
      var c = function() {
        s = !0, clearInterval(i), delete p.onload;
        var a = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, v = a ? 'nonce="'.concat(a, '"') : "", O = `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            `.concat("", `
                            <link rel="stylesheet" href="`).concat("https://cdn.smooch.io/frame.5.5.5.css", '" type="text/css" ').concat(v, ` />
                            <script src="`).concat("https://cdn.smooch.io/frame.5.5.5.min.js", '" async crossorigin="anonymous" ').concat(v, `><\/script>
                        </head>
                        <body>
                            <div id="mount"></div>
                        </body>
                    </html>
                    `);
        if ("srcdoc" in p)
          p.srcdoc = O;
        else {
          var A = $(p);
          A.open(), A.write(O), A.close();
        }
      };
      i = setInterval(function() {
        var a = $(p);
        s || !a || a.readyState !== "complete" && a.readyState !== "interactive" || c();
      }, 1e3), p.onload = function() {
        s || c();
      };
    }
    U ? k && (k.appendChild(p), k = void 0) : document.body.appendChild(p);
  }
  var re = { VERSION: "5.5.5", on: function() {
    S || (S = []);
    for (var i = arguments.length, s = new Array(i), c = 0; c < i; c++)
      s[c] = arguments[c];
    S.push({ args: s });
  }, init: function() {
    for (var i = arguments.length, s = new Array(i), c = 0; c < i; c++)
      s[c] = arguments[c];
    W = s, U = s.length > 0 && !!s[0].embedded, D || ee || f(function() {
      te(), oe();
    });
    var a = { then: function(v) {
      return T.push({ type: "then", next: v }), a;
    }, catch: function(v) {
      return T.push({ type: "catch", next: v }), a;
    } };
    return a;
  }, render: function(i) {
    p ? i.appendChild(p) : k = i;
  }, destroy: function() {
    C && (C.destroy(), p.remove ? p.remove() : p.parentNode.removeChild(p), g(function(i) {
      var s = i.rule;
      d.a.unregister(u(s));
    }), z());
  } };
  function z() {
    if (!document.getElementById("web-messenger-container")) {
      C = void 0, p = void 0, window.__onWebMessengerFrameReady__ = ne;
      for (var i = L[0], s = 0; s < L.length; i = L[++s])
        M[i] && delete M[i];
      b(M, re);
    }
  }
  z(), t.default = M;
}]);
const _ = {
  brandColor: "65758e",
  conversationColor: "0099ff",
  actionColor: "0099ff"
}, ce = "zd-chatbot-web", le = "1.0.1", ue = "module", de = {
  dev: "vite",
  build: "tsc && vite build",
  test: "vitest run",
  coverage: "vitest run --coverage"
}, fe = {
  "@types/node": "^18.13.0",
  "@types/smooch": "^5.3.3",
  "@vitest/coverage-c8": "^0.30.1",
  jsdom: "^21.1.1",
  typescript: "^4.9.3",
  vite: "^4.1.0",
  vitest: "^0.30.1"
}, pe = {
  smooch: "^5.3.3",
  terser: "^5.16.3",
  "vite-require": "^0.2.3"
}, he = {
  name: ce,
  private: !0,
  version: le,
  type: ue,
  scripts: de,
  devDependencies: fe,
  dependencies: pe
}, V = "Ym9iYmllWkQ6I0Q4WmpHNzk3WWV5ayZmVQ==", X = "https://dev.golinguist.com", H = "en-us", me = (e) => {
  const t = new XMLHttpRequest(), n = {
    translationType: "machine",
    text: e
  };
  return t.open("POST", `${X}/linguistnow/resources/locale/detectLocale/`, !1), t.setRequestHeader("Authorization", `Basic ${V}`), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(n)), t.status === 200 ? JSON.parse(t.responseText).detectedLanguage : null;
}, B = (e, t, n) => {
  const o = {
    sourceContent: e,
    sourceLocale: t,
    targetLocale: n,
    rnResponseProjectId: null,
    contentTypeName: "bot",
    translationType: "machine",
    incidentId: "ZD ChatBot Plugin",
    textType: "text",
    threadTypeId: 15,
    translationIterationId: 1,
    userTypeId: 3
  }, r = new XMLHttpRequest();
  if (r.open("POST", `${X}/linguistnow/resources/v1/translate/`, !1), r.setRequestHeader("Authorization", `Basic ${V}`), r.setRequestHeader("Content-Type", "application/json"), r.send(JSON.stringify(o)), r.status === 200) {
    const f = JSON.parse(r.responseText);
    return console.debug(`Running LIO Translate API: ${e}`), f.translatedText;
  }
  return null;
}, G = (e) => e.toLocaleLowerCase() !== H;
var y = /* @__PURE__ */ ((e) => (e.Translation = "translation", e.AnswerBot = "answerBot", e.Agent = "agent", e.Carousel = "carousel", e))(y || {});
const x = (e, t) => `${t}:${e}`, ge = (e, t) => {
  localStorage.setItem(e, JSON.stringify([...t]));
}, Y = (e) => {
  const t = localStorage.getItem(e);
  return t ? new Map(JSON.parse(t)) : null;
}, P = (e, t, n) => {
  const o = x(
    e,
    "translation"
    /* Translation */
  ), r = Y(o) ?? /* @__PURE__ */ new Map();
  r.set(t, n), ge(o, r);
}, R = (e, t) => {
  const n = x(
    e,
    "translation"
    /* Translation */
  ), o = Y(n);
  return (o == null ? void 0 : o.get(t)) ?? null;
}, ve = (e) => {
  localStorage.setItem("user-locale", e);
}, ye = (e) => {
  const t = `disable-auto-translate:${e}`;
  localStorage.setItem(t, "true");
}, Z = (e) => {
  const t = `disable-auto-translate:${e}`;
  return localStorage.getItem(t) === "true";
}, be = (e) => {
  const t = `is-locale-sent-to-server:${e}`;
  return localStorage.getItem(t) === "true";
}, we = (e) => {
  const t = `is-locale-sent-to-server:${e}`;
  localStorage.setItem(t, "true");
}, Ce = () => {
  if (typeof Intl < "u")
    try {
      return Intl.NumberFormat().resolvedOptions().locale.toLocaleLowerCase();
    } catch {
      return console.error("Cannot get locale from Intl"), null;
    }
  return null;
}, K = (e) => {
  let t = Ce();
  return G(t) || (t = me(e)), t;
}, xe = (e) => {
  const t = e == null ? void 0 : e.toLocaleLowerCase().replace("_", "-").split("-");
  if (t) {
    const n = t[0];
    switch (n) {
      case "zh":
        return "zh-hk";
      default:
        return n;
    }
  }
  return null;
}, q = (e, t, n) => {
  const o = x(t, n);
  let r = R(o, e);
  if (r)
    return r;
  const f = localStorage.getItem("user-locale");
  return f != null && f !== H && (r = B(e, H, f), r) ? (P(o, e, r), r) : null;
}, Se = {
  beforeSend(e, t) {
    const n = !Z(x(t.conversation.id, y.Agent));
    if (e.type === "text" && n) {
      const o = e == null ? void 0 : e.text;
      if (o !== null && o.length > 0) {
        const r = K(e.text);
        if (r != null && G(r)) {
          ve(r);
          let u = B(o, r, H);
          if (u != null) {
            if (!be(x(t.conversation.id, y.Translation))) {
              const d = `
lang: ${r}`;
              u = u + d, we(t.conversation.id);
            }
            e.text = u, P(x(t.conversation.id, y.Translation), u, o);
          }
        }
      }
    }
    return e;
  },
  beforeDisplay(e, t) {
    var u, m;
    const n = e.text, o = ((u = e.source) == null ? void 0 : u.type) === "zd:answerBot", r = ((m = e.source) == null ? void 0 : m.type) === "zd:agentWorkspace", f = !Z(x(t.conversation.id, y.Agent));
    switch (e.type) {
      case "text": {
        if (o) {
          let d = q(e.text, t.conversation.id, y.Agent);
          d && (e.text = d);
          const l = e.actions;
          if (l)
            for (const h of l) {
              let g = q(h.text, t.conversation.id, y.AnswerBot);
              g && (h.text = g);
            }
        } else if (r && f) {
          const d = x(t.conversation.id, y.Agent);
          ye(d);
          let l = R(d, n);
          if (l)
            e.text = l;
          else {
            const h = localStorage.getItem("user-locale"), g = K(e.text);
            g != null && h !== g && (l = B(n, g, h), l && (P(d, n, l), e.text = l));
          }
        } else {
          const d = R(x(t.conversation.id, y.Translation), e.text);
          d && (e.text = d);
        }
        return e;
      }
      case "carousel": {
        if (o) {
          let d = e;
          for (const l of d.items) {
            const h = q(l.title, t.conversation.id, y.Carousel);
            h && (l.title = h);
            const g = q(l.description, t.conversation.id, y.Carousel);
            g && (l.description = g);
            for (const b of l.actions) {
              const I = q(b.text, t.conversation.id, y.Carousel);
              I && (b.text = I);
              const w = localStorage.getItem("user-locale"), C = xe(w);
              C && (b.uri = b.uri.replace("en-us", C));
            }
          }
          return d;
        }
        return e;
      }
      default:
        return e;
    }
  }
}, Ie = () => ae, Te = Ie(), Le = Te.default, Ae = ({ apiKey: e, chatbotOptions: t }) => {
  const n = {
    integrationId: e,
    delegate: Se,
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
  t && (n.soundNotificationEnabled = t.soundNotificationEnabled ?? !0, n.businessName = t.businessName ?? null, n.businessIconUrl = t.businessIconUrl ?? null, n.backgroundImageUrl = t.backgroundImageUrl ?? null, t.customColors && (n.customColors.brandColor = t.customColors.brandColor ?? _.brandColor, n.customColors.conversationColor = t.customColors.conversationColor ?? _.conversationColor, n.customColors.actionColor = t.customColors.actionColor ?? _.actionColor)), console.info(`Initializing ZD ChatBot plugin version: ${he.version}`), Le.init(n);
};
export {
  Ae as initLIOChatBot
};
