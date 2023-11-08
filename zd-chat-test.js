var le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Xs = function(s) {
  var a = {};
  function u(l) {
    if (a[l])
      return a[l].exports;
    var c = a[l] = { i: l, l: !1, exports: {} };
    return s[l].call(c.exports, c, c.exports, u), c.l = !0, c.exports;
  }
  return u.m = s, u.c = a, u.d = function(l, c, w) {
    u.o(l, c) || Object.defineProperty(l, c, { enumerable: !0, get: w });
  }, u.r = function(l) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 });
  }, u.t = function(l, c) {
    if (1 & c && (l = u(l)), 8 & c || 4 & c && typeof l == "object" && l && l.__esModule)
      return l;
    var w = /* @__PURE__ */ Object.create(null);
    if (u.r(w), Object.defineProperty(w, "default", { enumerable: !0, value: l }), 2 & c && typeof l != "string")
      for (var C in l)
        u.d(w, C, function(g) {
          return l[g];
        }.bind(null, C));
    return w;
  }, u.n = function(l) {
    var c = l && l.__esModule ? function() {
      return l.default;
    } : function() {
      return l;
    };
    return u.d(c, "a", c), c;
  }, u.o = function(l, c) {
    return Object.prototype.hasOwnProperty.call(l, c);
  }, u.p = "https://cdn.smooch.io/", u(u.s = 6);
}([function(s, a, u) {
  var l = u(3);
  s.exports = new l();
}, function(s, a) {
  s.exports = { isFunction: function(u) {
    return typeof u == "function";
  }, isArray: function(u) {
    return Object.prototype.toString.apply(u) === "[object Array]";
  }, each: function(u, l) {
    for (var c = 0, w = u.length; c < w && l(u[c], c) !== !1; c++)
      ;
  } };
}, function(s, a, u) {
  s.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(s, a, u) {
  var l = u(4), c = u(1), w = c.each, C = c.isFunction, g = c.isArray;
  function k() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  k.prototype = { constructor: k, register: function(y, d, O) {
    var H = this.queries, D = O && this.browserIsIncapable;
    return H[y] || (H[y] = new l(y, D)), C(d) && (d = { match: d }), g(d) || (d = [d]), w(d, function(Z) {
      C(Z) && (Z = { match: Z }), H[y].addHandler(Z);
    }), this;
  }, unregister: function(y, d) {
    var O = this.queries[y];
    return O && (d ? O.removeHandler(d) : (O.clear(), delete this.queries[y])), this;
  } }, s.exports = k;
}, function(s, a, u) {
  var l = u(5), c = u(1).each;
  function w(C, g) {
    this.query = C, this.isUnconditional = g, this.handlers = [], this.mql = window.matchMedia(C);
    var k = this;
    this.listener = function(y) {
      k.mql = y.currentTarget || y, k.assess();
    }, this.mql.addListener(this.listener);
  }
  w.prototype = { constuctor: w, addHandler: function(C) {
    var g = new l(C);
    this.handlers.push(g), this.matches() && g.on();
  }, removeHandler: function(C) {
    var g = this.handlers;
    c(g, function(k, y) {
      if (k.equals(C))
        return k.destroy(), !g.splice(y, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    c(this.handlers, function(C) {
      C.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var C = this.matches() ? "on" : "off";
    c(this.handlers, function(g) {
      g[C]();
    });
  } }, s.exports = w;
}, function(s, a) {
  function u(l) {
    this.options = l, !l.deferSetup && this.setup();
  }
  u.prototype = { constructor: u, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(l) {
    return this.options === l || this.options.match === l;
  } }, s.exports = u;
}, function(s, a, u) {
  u.r(a);
  var l = u(2), c = u.n(l);
  function w(f) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      f();
    }) : f();
  }
  function C(f) {
    var h = ["screen"];
    return f.minHeight && h.push("(min-height: ".concat(f.minHeight, "px)")), f.maxHeight && h.push("(max-height: ".concat(f.maxHeight, "px)")), f.minWidth && h.push("(min-width: ".concat(f.minWidth, "px)")), f.maxWidth && h.push("(max-width: ".concat(f.maxWidth, "px)")), h.join(" and ");
  }
  var g = u(0), k = u.n(g), y = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, d = ["lg", "md", "sm", "xs"];
  function O(f) {
    for (var h = 0; h < d.length; h++) {
      var b = d[h], m = y[b];
      Object.prototype.toString.call(m) !== "[object Array]" && (m = [m]);
      for (var _ = 0; _ < m.length; _++)
        f({ rule: m[_], size: b });
    }
  }
  function H() {
    return (H = Object.assign ? Object.assign.bind() : function(f) {
      for (var h = 1; h < arguments.length; h++) {
        var b = arguments[h];
        for (var m in b)
          Object.prototype.hasOwnProperty.call(b, m) && (f[m] = b[m]);
      }
      return f;
    }).apply(this, arguments);
  }
  function D(f) {
    return function(h) {
      if (Array.isArray(h))
        return Z(h);
    }(f) || function(h) {
      if (typeof Symbol < "u" && h[Symbol.iterator] != null || h["@@iterator"] != null)
        return Array.from(h);
    }(f) || function(h, b) {
      if (h) {
        if (typeof h == "string")
          return Z(h, b);
        var m = Object.prototype.toString.call(h).slice(8, -1);
        if (m === "Object" && h.constructor && (m = h.constructor.name), m === "Map" || m === "Set")
          return Array.from(h);
        if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))
          return Z(h, b);
      }
    }(f) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function Z(f, h) {
    (h == null || h > f.length) && (h = f.length);
    for (var b = 0, m = new Array(h); b < h; b++)
      m[b] = f[b];
    return m;
  }
  var i, B, se, ce, ie, L = {}, F = [], K = [], Oe = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), Ze = /PhantomJS/.test(navigator.userAgent) && !0, X = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (Oe) {
    var ue = document.createElement("a");
    ue.href = "https://smooch.io/live-web-chat/?utm_source=widget", ue.text = "Powered by Zendesk Sunshine", w(function() {
      document.body.appendChild(ue);
    });
  }
  function de() {
    var f = document.createElement("link");
    f.rel = "stylesheet", f.type = "text/css", f.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(f);
  }
  function Te(f) {
    var h;
    window.__onWebMessengerFrameReady__ = function() {
    }, i = f, se || (h = B, O(function(te) {
      var fe = te.rule, He = te.size;
      k.a.register(C(fe), function() {
        h.contentWindow.postMessage({ type: "sizeChange", value: He }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var b = X[0], m = 0; m < X.length; b = X[++m])
      L[b] = i[b];
    if (K) {
      for (var _ = K[0], ee = 0; ee < K.length; _ = K[++ee]) {
        var Y;
        (Y = i).on.apply(Y, D(_.args));
      }
      K = void 0;
    }
    if (ie) {
      var R, J = (R = i).init.apply(R, D(ie));
      ie = void 0;
      for (var N = F[0], Me = 0; Me < F.length; N = F[++Me])
        J = N.type === "then" ? J.then(N.next) : J.catch(N.next);
      F = [];
    }
  }
  var M = function(f) {
    return f.contentWindow && f.contentWindow.document;
  };
  function we() {
    if (!B) {
      var f = null, h = !1;
      (B = document.createElement("iframe")).id = "web-messenger-container", B.frameBorder = 0, B.allowFullscreen = !0, B.allowTransparency = !0, B.scrolling = "no", B.className = c.a.iframe;
      var b = function() {
        h = !0, clearInterval(f), delete B.onload;
        var m = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, _ = m ? 'nonce="'.concat(m, '"') : "", ee = `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            `.concat("", `
                            <link rel="stylesheet" href="`).concat("https://cdn.smooch.io/frame.5.5.5.css", '" type="text/css" ').concat(_, ` />
                            <script src="`).concat("https://cdn.smooch.io/frame.5.5.5.min.js", '" async crossorigin="anonymous" ').concat(_, `><\/script>
                        </head>
                        <body>
                            <div id="mount"></div>
                        </body>
                    </html>
                    `);
        if ("srcdoc" in B)
          B.srcdoc = ee;
        else {
          var Y = M(B);
          Y.open(), Y.write(ee), Y.close();
        }
      };
      f = setInterval(function() {
        var m = M(B);
        h || !m || m.readyState !== "complete" && m.readyState !== "interactive" || b();
      }, 1e3), B.onload = function() {
        h || b();
      };
    }
    se ? ce && (ce.appendChild(B), ce = void 0) : document.body.appendChild(B);
  }
  var z = { VERSION: "5.5.5", on: function() {
    K || (K = []);
    for (var f = arguments.length, h = new Array(f), b = 0; b < f; b++)
      h[b] = arguments[b];
    K.push({ args: h });
  }, init: function() {
    for (var f = arguments.length, h = new Array(f), b = 0; b < f; b++)
      h[b] = arguments[b];
    ie = h, se = h.length > 0 && !!h[0].embedded, Oe || Ze || w(function() {
      de(), we();
    });
    var m = { then: function(_) {
      return F.push({ type: "then", next: _ }), m;
    }, catch: function(_) {
      return F.push({ type: "catch", next: _ }), m;
    } };
    return m;
  }, render: function(f) {
    B ? f.appendChild(B) : ce = f;
  }, destroy: function() {
    i && (i.destroy(), B.remove ? B.remove() : B.parentNode.removeChild(B), O(function(f) {
      var h = f.rule;
      k.a.unregister(C(h));
    }), x());
  } };
  function x() {
    if (!document.getElementById("web-messenger-container")) {
      i = void 0, B = void 0, window.__onWebMessengerFrameReady__ = Te;
      for (var f = X[0], h = 0; h < X.length; f = X[++h])
        L[f] && delete L[f];
      H(L, z);
    }
  }
  x(), a.default = L;
}]);
const ke = {
  brandColor: "65758e",
  conversationColor: "0099ff",
  actionColor: "0099ff"
}, Ys = "zd-chatbot-web", Js = "1.0.11", Gs = "module", Qs = {
  dev: "vite",
  build: "tsc && vite build",
  test: "vitest run",
  coverage: "vitest run --coverage"
}, ei = {
  "@types/node": "^18.13.0",
  "@types/smooch": "^5.3.3",
  "@vitest/coverage-c8": "^0.30.1",
  jsdom: "^21.1.1",
  typescript: "^4.9.3",
  vite: "^4.1.0",
  vitest: "^0.30.1"
}, ti = {
  smooch: "^5.3.3",
  sweetalert2: "^11.9.0",
  terser: "^5.16.3",
  "vite-require": "^0.2.3"
}, Le = {
  name: Ys,
  private: !0,
  version: Js,
  type: Gs,
  scripts: Qs,
  devDependencies: ei,
  dependencies: ti
};
var W = /* @__PURE__ */ ((s) => (s.Translation = "translation", s.AnswerBot = "answerBot", s.Agent = "agent", s.Carousel = "carousel", s.Form = "form", s))(W || {});
const oe = (s, a) => `${a}:${s}`, ni = (s, a) => {
  localStorage.setItem(s, JSON.stringify([...a]));
}, dn = (s) => {
  const a = localStorage.getItem(s);
  return a ? new Map(JSON.parse(a)) : null;
}, ct = (s, a, u) => {
  const l = oe(
    s,
    "translation"
    /* Translation */
  ), c = dn(l) ?? /* @__PURE__ */ new Map();
  c.set(a, u), ni(l, c);
}, ut = (s, a) => {
  const u = oe(
    s,
    "translation"
    /* Translation */
  ), l = dn(u);
  return (l == null ? void 0 : l.get(a)) ?? null;
}, oi = (s) => {
  localStorage.setItem("user-locale", s);
}, si = () => {
  const s = localStorage.getItem("user-locale");
  return s == null || s === "" ? null : s;
}, rn = (s) => {
  const a = `disable-auto-translate:${s}`;
  localStorage.setItem(a, "true");
}, an = (s) => {
  const a = `disable-auto-translate:${s}`;
  return localStorage.getItem(a) === "true";
}, ii = (s) => {
  const a = `is-locale-sent-to-server:${s}`;
  return localStorage.getItem(a) === "true";
}, ri = (s) => {
  const a = `is-locale-sent-to-server:${s}`;
  localStorage.setItem(a, "true");
}, Ne = () => {
  const s = localStorage.getItem("lio-api-key");
  return s ? s === "" ? null : s : null;
}, dt = () => {
  const s = localStorage.getItem("lio-chatbot-token");
  return s ? s === "" ? null : JSON.parse(s).access_token : null;
}, wn = () => {
  const s = localStorage.getItem("lio-chatbot-token-expiration");
  return s ? new Date(s) < new Date() : !0;
}, fn = (s, a = "") => {
  a !== "" && localStorage.setItem("lio-access-token-request", a), localStorage.setItem("lio-chatbot-token", s);
  const c = new Date().getTime() + 1 * 60 * 60 * 1e3, w = new Date(c);
  localStorage.setItem("lio-chatbot-token-expiration", w.toISOString());
}, ai = (s) => {
  s !== "" && localStorage.setItem("lio-api-key", s);
}, Se = (s) => localStorage.setItem("lio-chatbot-disable-translate-feature", s ? "true" : "false"), ln = () => {
  const s = localStorage.getItem("lio-chatbot-disable-translate-feature");
  return s && s === "true";
}, We = (s) => {
  let a = pn();
  a == null && (a = new Array()), a.push(s), localStorage.setItem("lio-log-entries", JSON.stringify(a));
}, pn = () => {
  const s = localStorage.getItem("lio-log-entries");
  return s ? JSON.parse(s) : null;
}, li = () => {
  localStorage.removeItem("user-locale"), localStorage.removeItem("lio-chatbot-token"), localStorage.removeItem("lio-chatbot-token-expiration"), localStorage.removeItem("lio-access-token-request"), localStorage.removeItem("lio-log-entries");
}, hn = "aws_oauth_url", ci = "aws_oauth_scopes (comma separated)", ui = (s, a) => {
  const u = `${hn}/oauth2/token`, l = ci.replace(",", " "), c = new XMLHttpRequest();
  c.open("POST", `${u}`, !1), c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const w = `grant_type=client_credentials&client_id=${s}&client_secret=${a}&scope=${encodeURIComponent(l)}`;
  c.send(w), c.status === 200 ? (fn(c.responseText, w), Se(!1)) : (console.error(c.responseText), Se(!0));
}, mn = () => {
  const s = `${hn}/oauth2/token`, a = new XMLHttpRequest();
  a.open("POST", `${s}`, !1), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const u = localStorage.getItem("lio-access-token-request");
  u !== "" && (a.send(u), a.status === 200 ? (fn(a.responseText), Se(!1)) : (console.error(a.responseText), Se(!0)));
}, gn = "https://dev-agw.golinguist.com", Ue = "en-us", bn = () => {
  let s;
  try {
    return s = window.initSync ? window.initSync() : void 0, s;
  } catch {
    return "";
  }
}, yn = (s) => {
  const a = new XMLHttpRequest(), u = {
    translationType: "machine",
    text: s
  };
  try {
    wn() && mn();
    const l = dt(), c = Ne(), w = bn();
    return a.open("POST", `${gn}/linguistnow/resources/locale/detectLocale/`, !1), a.setRequestHeader("x-api-key", `${c}`), a.setRequestHeader("Authorization", `Bearer ${l}`), a.setRequestHeader("X-Request-ID", `${w}`), a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify(u)), a.status === 200 ? JSON.parse(a.responseText).detectedLanguage : null;
  } catch {
    return null;
  }
}, wt = (s, a, u) => {
  const l = {
    sourceContent: s,
    sourceLocale: a,
    targetLocale: u,
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
    wn() && mn();
    const c = dt(), w = Ne(), C = bn(), g = new XMLHttpRequest(), k = `${gn}/linguistnow/resources/v1/translate/`;
    if (g.open("POST", k, !1), g.setRequestHeader("x-api-key", `${w}`), g.setRequestHeader("Authorization", `Bearer ${c}`), g.setRequestHeader("X-Request-ID", `${C}`), g.setRequestHeader("Content-Type", "application/json"), g.send(JSON.stringify(l)), g.status === 200) {
      const y = JSON.parse(g.responseText);
      return console.debug(`Running LIO Translate API: ${s}`), y.translatedText;
    }
    return null;
  } catch {
    return null;
  }
}, vn = (s) => s.toLocaleLowerCase() !== Ue, Cn = () => {
  if (typeof Intl < "u")
    try {
      return Intl.NumberFormat().resolvedOptions().locale.toLocaleLowerCase();
    } catch {
      return console.error("Cannot get locale from Intl"), null;
    }
  return null;
}, xn = (s) => {
  let a = Cn();
  return vn(a) || (a = yn(s)), a;
}, di = (s) => {
  const a = s == null ? void 0 : s.toLocaleLowerCase().replace("_", "-").split("-");
  if (a) {
    const u = a[0];
    switch (u) {
      case "zh":
        return "zh-hk";
      default:
        return u;
    }
  }
  return null;
}, Ae = (s, a, u) => {
  const l = oe(a, u);
  let c = ut(l, s);
  if (c)
    return c;
  const w = localStorage.getItem("user-locale");
  return w != null && w !== Ue && (c = wt(s, Ue, w), c) ? (ct(l, s, c), c) : null;
}, cn = (s, a, u) => {
  const l = oe(s.source.id, W.Translation);
  if (!ii(l)) {
    const w = `lang: ${a}`;
    u = `${u}
${w}`, ri(l);
  }
  return u;
}, un = (s, a, u) => {
  let l = ut(s, a);
  if (l)
    u.text = l;
  else {
    const c = localStorage.getItem("user-locale"), w = xn(u.text);
    w != null && c !== w && (l = wt(a, w, c), l && (ct(s, a, l), u.text = l));
  }
}, wi = {
  beforeSend(s, a) {
    if (ln()) {
      if (s.type === "text") {
        let c = Cn();
        s.text = cn(s, c, s.text);
      }
      return s;
    }
    const u = oe(a.conversation.id, W.Agent), l = !an(u);
    if (s.type === "text" && l) {
      const c = s == null ? void 0 : s.text;
      if (c !== null && c.length > 0) {
        let w = si();
        if (w || (w = xn(s.text), oi(w)), w != null && vn(w)) {
          let g = wt(c, w, Ue);
          g != null && (g = cn(s, w, g), s.text = g, ct(oe(a.conversation.id, W.Translation), g, c));
        }
      }
    }
    return s.type === "formResponse" && l && s.fields.find((C) => C.name === "dataCapture.systemField.requester.email" && C.type === "email") && rn(u), s;
  },
  beforeDisplay(s, a) {
    var C, g;
    if (ln())
      return s;
    const u = s.text, l = ((C = s.source) == null ? void 0 : C.type) === "zd:answerBot", c = ((g = s.source) == null ? void 0 : g.type) === "zd:agentWorkspace", w = !an(oe(a.conversation.id, W.Agent));
    switch (s.type) {
      case "text": {
        if (l) {
          let k = Ae(s.text, a.conversation.id, W.Agent);
          k && (s.text = k);
          const y = s.actions;
          if (y)
            for (const d of y) {
              let O = Ae(d.text, a.conversation.id, W.AnswerBot);
              O && (d.text = O);
            }
        } else if (c) {
          let k = !1, y = !1, d = !1;
          const O = s.displayName === "Automated Response", H = oe(a.conversation.id, W.Agent);
          let D = s;
          !O && D.metadata != null && (k = D.metadata["__zendesk_msg.source_type"] !== null && D.metadata["__zendesk_msg.source_type"] === "sunco_web", y = D.metadata["__zendesk_msg.agent.id"] !== null && D.metadata["__zendesk_msg.agent.id"] === "__trigger", d = y && k), O || d ? un(H, u, s) : w && (rn(H), un(H, u, s));
        } else {
          const k = ut(oe(a.conversation.id, W.Translation), s.text);
          k && (s.text = k);
        }
        return s;
      }
      case "carousel": {
        if (l) {
          let k = s;
          for (const y of k.items) {
            const d = Ae(y.title, a.conversation.id, W.Carousel);
            d && (y.title = d);
            const O = Ae(y.description, a.conversation.id, W.Carousel);
            O && (y.description = O);
            for (const H of y.actions) {
              const D = Ae(H.text, a.conversation.id, W.Carousel);
              D && (H.text = D);
              const Z = localStorage.getItem("user-locale"), i = di(Z);
              i && (H.uri = H.uri.replace("en-us", i));
            }
          }
          return k;
        }
        return s;
      }
      case "form": {
        if (l) {
          const k = s;
          if (k.fields.length > 0)
            for (const y of k.fields) {
              const d = Ae(y.label, a.conversation.id, W.Form);
              d && (y.label = d);
            }
        }
        return s;
      }
      default:
        return s;
    }
  }
};
var lt = {}, fi = {
  get exports() {
    return lt;
  },
  set exports(s) {
    lt = s;
  }
};
/*!
* sweetalert2 v11.9.0
* Released under the MIT License.
*/
(function(s, a) {
  (function(u, l) {
    s.exports = l();
  })(le, function() {
    function u(e, t) {
      var n = c(e, t, "get");
      return w(e, n);
    }
    function l(e, t, n) {
      var o = c(e, t, "set");
      return C(e, o, n), n;
    }
    function c(e, t, n) {
      if (!t.has(e))
        throw new TypeError("attempted to " + n + " private field on non-instance");
      return t.get(e);
    }
    function w(e, t) {
      return t.get ? t.get.call(e) : t.value;
    }
    function C(e, t, n) {
      if (t.set)
        t.set.call(e, n);
      else {
        if (!t.writable)
          throw new TypeError("attempted to set read only private field");
        t.value = n;
      }
    }
    function g(e, t) {
      if (t.has(e))
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
    function k(e, t, n) {
      g(e, t), t.set(e, n);
    }
    const y = 100, d = {}, O = () => {
      d.previousActiveElement instanceof HTMLElement ? (d.previousActiveElement.focus(), d.previousActiveElement = null) : document.body && document.body.focus();
    }, H = (e) => new Promise((t) => {
      if (!e)
        return t();
      const n = window.scrollX, o = window.scrollY;
      d.restoreFocusTimeout = setTimeout(() => {
        O(), t();
      }, y), window.scrollTo(n, o);
    }), D = "swal2-", i = ["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"].reduce(
      (e, t) => (e[t] = D + t, e),
      /** @type {SwalClasses} */
      {}
    ), se = ["success", "warning", "info", "question", "error"].reduce(
      (e, t) => (e[t] = D + t, e),
      /** @type {SwalIcons} */
      {}
    ), ce = "SweetAlert2:", ie = (e) => e.charAt(0).toUpperCase() + e.slice(1), L = (e) => {
      console.warn("".concat(ce, " ").concat(typeof e == "object" ? e.join(" ") : e));
    }, F = (e) => {
      console.error("".concat(ce, " ").concat(e));
    }, K = [], Oe = (e) => {
      K.includes(e) || (K.push(e), L(e));
    }, Ze = (e, t) => {
      Oe('"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.'));
    }, X = (e) => typeof e == "function" ? e() : e, ue = (e) => e && typeof e.toPromise == "function", de = (e) => ue(e) ? e.toPromise() : Promise.resolve(e), Te = (e) => e && Promise.resolve(e) === e, M = () => document.body.querySelector(".".concat(i.container)), we = (e) => {
      const t = M();
      return t ? t.querySelector(e) : null;
    }, z = (e) => we(".".concat(e)), x = () => z(i.popup), f = () => z(i.icon), h = () => z(i["icon-content"]), b = () => z(i.title), m = () => z(i["html-container"]), _ = () => z(i.image), ee = () => z(i["progress-steps"]), Y = () => z(i["validation-message"]), R = () => (
      /** @type {HTMLButtonElement} */
      we(".".concat(i.actions, " .").concat(i.confirm))
    ), J = () => (
      /** @type {HTMLButtonElement} */
      we(".".concat(i.actions, " .").concat(i.cancel))
    ), N = () => (
      /** @type {HTMLButtonElement} */
      we(".".concat(i.actions, " .").concat(i.deny))
    ), Me = () => z(i["input-label"]), te = () => we(".".concat(i.loader)), fe = () => z(i.actions), He = () => z(i.footer), je = () => z(i["timer-progress-bar"]), Ke = () => z(i.close), kn = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`, Xe = () => {
      const e = x();
      if (!e)
        return [];
      const t = e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'), n = Array.from(t).sort((p, A) => {
        const T = parseInt(p.getAttribute("tabindex") || "0"), I = parseInt(A.getAttribute("tabindex") || "0");
        return T > I ? 1 : T < I ? -1 : 0;
      }), o = e.querySelectorAll(kn), r = Array.from(o).filter((p) => p.getAttribute("tabindex") !== "-1");
      return [...new Set(n.concat(r))].filter((p) => $(p));
    }, Ye = () => ne(document.body, i.shown) && !ne(document.body, i["toast-shown"]) && !ne(document.body, i["no-backdrop"]), De = () => {
      const e = x();
      return e ? ne(e, i.toast) : !1;
    }, An = () => {
      const e = x();
      return e ? e.hasAttribute("data-loading") : !1;
    }, V = (e, t) => {
      if (e.textContent = "", t) {
        const o = new DOMParser().parseFromString(t, "text/html"), r = o.querySelector("head");
        r && Array.from(r.childNodes).forEach((A) => {
          e.appendChild(A);
        });
        const p = o.querySelector("body");
        p && Array.from(p.childNodes).forEach((A) => {
          A instanceof HTMLVideoElement || A instanceof HTMLAudioElement ? e.appendChild(A.cloneNode(!0)) : e.appendChild(A);
        });
      }
    }, ne = (e, t) => {
      if (!t)
        return !1;
      const n = t.split(/\s+/);
      for (let o = 0; o < n.length; o++)
        if (!e.classList.contains(n[o]))
          return !1;
      return !0;
    }, Sn = (e, t) => {
      Array.from(e.classList).forEach((n) => {
        !Object.values(i).includes(n) && !Object.values(se).includes(n) && !Object.values(t.showClass || {}).includes(n) && e.classList.remove(n);
      });
    }, U = (e, t, n) => {
      if (Sn(e, t), t.customClass && t.customClass[n]) {
        if (typeof t.customClass[n] != "string" && !t.customClass[n].forEach) {
          L("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(typeof t.customClass[n], '"'));
          return;
        }
        v(e, t.customClass[n]);
      }
    }, _e = (e, t) => {
      if (!t)
        return null;
      switch (t) {
        case "select":
        case "textarea":
        case "file":
          return e.querySelector(".".concat(i.popup, " > .").concat(i[t]));
        case "checkbox":
          return e.querySelector(".".concat(i.popup, " > .").concat(i.checkbox, " input"));
        case "radio":
          return e.querySelector(".".concat(i.popup, " > .").concat(i.radio, " input:checked")) || e.querySelector(".".concat(i.popup, " > .").concat(i.radio, " input:first-child"));
        case "range":
          return e.querySelector(".".concat(i.popup, " > .").concat(i.range, " input"));
        default:
          return e.querySelector(".".concat(i.popup, " > .").concat(i.input));
      }
    }, ft = (e) => {
      if (e.focus(), e.type !== "file") {
        const t = e.value;
        e.value = "", e.value = t;
      }
    }, pt = (e, t, n) => {
      !e || !t || (typeof t == "string" && (t = t.split(/\s+/).filter(Boolean)), t.forEach((o) => {
        Array.isArray(e) ? e.forEach((r) => {
          n ? r.classList.add(o) : r.classList.remove(o);
        }) : n ? e.classList.add(o) : e.classList.remove(o);
      }));
    }, v = (e, t) => {
      pt(e, t, !0);
    }, G = (e, t) => {
      pt(e, t, !1);
    }, re = (e, t) => {
      const n = Array.from(e.children);
      for (let o = 0; o < n.length; o++) {
        const r = n[o];
        if (r instanceof HTMLElement && ne(r, t))
          return r;
      }
    }, pe = (e, t, n) => {
      n === "".concat(parseInt(n)) && (n = parseInt(n)), n || parseInt(n) === 0 ? e.style[t] = typeof n == "number" ? "".concat(n, "px") : n : e.style.removeProperty(t);
    }, j = function(e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
      e && (e.style.display = t);
    }, q = (e) => {
      e && (e.style.display = "none");
    }, Je = function(e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "block";
      e && new MutationObserver(() => {
        Be(e, e.innerHTML, t);
      }).observe(e, {
        childList: !0,
        subtree: !0
      });
    }, ht = (e, t, n, o) => {
      const r = e.querySelector(t);
      r && (r.style[n] = o);
    }, Be = function(e, t) {
      let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
      t ? j(e, n) : q(e);
    }, $ = (e) => !!(e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length)), Tn = () => !$(R()) && !$(N()) && !$(J()), mt = (e) => e.scrollHeight > e.clientHeight, gt = (e) => {
      const t = window.getComputedStyle(e), n = parseFloat(t.getPropertyValue("animation-duration") || "0"), o = parseFloat(t.getPropertyValue("transition-duration") || "0");
      return n > 0 || o > 0;
    }, Ge = function(e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      const n = je();
      n && $(n) && (t && (n.style.transition = "none", n.style.width = "100%"), setTimeout(() => {
        n.style.transition = "width ".concat(e / 1e3, "s linear"), n.style.width = "0%";
      }, 10));
    }, Bn = () => {
      const e = je();
      if (!e)
        return;
      const t = parseInt(window.getComputedStyle(e).width);
      e.style.removeProperty("transition"), e.style.width = "100%";
      const n = parseInt(window.getComputedStyle(e).width), o = t / n * 100;
      e.style.width = "".concat(o, "%");
    }, bt = () => typeof window > "u" || typeof document > "u", In = `
 <div aria-labelledby="`.concat(i.title, '" aria-describedby="').concat(i["html-container"], '" class="').concat(i.popup, `" tabindex="-1">
   <button type="button" class="`).concat(i.close, `"></button>
   <ul class="`).concat(i["progress-steps"], `"></ul>
   <div class="`).concat(i.icon, `"></div>
   <img class="`).concat(i.image, `" />
   <h2 class="`).concat(i.title, '" id="').concat(i.title, `"></h2>
   <div class="`).concat(i["html-container"], '" id="').concat(i["html-container"], `"></div>
   <input class="`).concat(i.input, '" id="').concat(i.input, `" />
   <input type="file" class="`).concat(i.file, `" />
   <div class="`).concat(i.range, `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(i.select, '" id="').concat(i.select, `"></select>
   <div class="`).concat(i.radio, `"></div>
   <label class="`).concat(i.checkbox, `">
     <input type="checkbox" id="`).concat(i.checkbox, `" />
     <span class="`).concat(i.label, `"></span>
   </label>
   <textarea class="`).concat(i.textarea, '" id="').concat(i.textarea, `"></textarea>
   <div class="`).concat(i["validation-message"], '" id="').concat(i["validation-message"], `"></div>
   <div class="`).concat(i.actions, `">
     <div class="`).concat(i.loader, `"></div>
     <button type="button" class="`).concat(i.confirm, `"></button>
     <button type="button" class="`).concat(i.deny, `"></button>
     <button type="button" class="`).concat(i.cancel, `"></button>
   </div>
   <div class="`).concat(i.footer, `"></div>
   <div class="`).concat(i["timer-progress-bar-container"], `">
     <div class="`).concat(i["timer-progress-bar"], `"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g, ""), En = () => {
      const e = M();
      return e ? (e.remove(), G([document.documentElement, document.body], [i["no-backdrop"], i["toast-shown"], i["has-column"]]), !0) : !1;
    }, he = () => {
      d.currentInstance.resetValidationMessage();
    }, Pn = () => {
      const e = x(), t = re(e, i.input), n = re(e, i.file), o = e.querySelector(".".concat(i.range, " input")), r = e.querySelector(".".concat(i.range, " output")), p = re(e, i.select), A = e.querySelector(".".concat(i.checkbox, " input")), T = re(e, i.textarea);
      t.oninput = he, n.onchange = he, p.onchange = he, A.onchange = he, T.oninput = he, o.oninput = () => {
        he(), r.value = o.value;
      }, o.onchange = () => {
        he(), r.value = o.value;
      };
    }, Ln = (e) => typeof e == "string" ? document.querySelector(e) : e, On = (e) => {
      const t = x();
      t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true");
    }, Mn = (e) => {
      window.getComputedStyle(e).direction === "rtl" && v(M(), i.rtl);
    }, Hn = (e) => {
      const t = En();
      if (bt()) {
        F("SweetAlert2 requires document to initialize");
        return;
      }
      const n = document.createElement("div");
      n.className = i.container, t && v(n, i["no-transition"]), V(n, In);
      const o = Ln(e.target);
      o.appendChild(n), On(e), Mn(o), Pn();
    }, Qe = (e, t) => {
      e instanceof HTMLElement ? t.appendChild(e) : typeof e == "object" ? jn(e, t) : e && V(t, e);
    }, jn = (e, t) => {
      e.jquery ? Dn(t, e) : V(t, e.toString());
    }, Dn = (e, t) => {
      if (e.textContent = "", 0 in t)
        for (let n = 0; n in t; n++)
          e.appendChild(t[n].cloneNode(!0));
      else
        e.appendChild(t.cloneNode(!0));
    }, me = (() => {
      if (bt())
        return !1;
      const e = document.createElement("div");
      return typeof e.style.webkitAnimation < "u" ? "webkitAnimationEnd" : typeof e.style.animation < "u" ? "animationend" : !1;
    })(), _n = (e, t) => {
      const n = fe(), o = te();
      !n || !o || (!t.showConfirmButton && !t.showDenyButton && !t.showCancelButton ? q(n) : j(n), U(n, t, "actions"), qn(n, o, t), V(o, t.loaderHtml || ""), U(o, t, "loader"));
    };
    function qn(e, t, n) {
      const o = R(), r = N(), p = J();
      !o || !r || !p || (et(o, "confirm", n), et(r, "deny", n), et(p, "cancel", n), zn(o, r, p, n), n.reverseButtons && (n.toast ? (e.insertBefore(p, o), e.insertBefore(r, o)) : (e.insertBefore(p, t), e.insertBefore(r, t), e.insertBefore(o, t))));
    }
    function zn(e, t, n, o) {
      if (!o.buttonsStyling) {
        G([e, t, n], i.styled);
        return;
      }
      v([e, t, n], i.styled), o.confirmButtonColor && (e.style.backgroundColor = o.confirmButtonColor, v(e, i["default-outline"])), o.denyButtonColor && (t.style.backgroundColor = o.denyButtonColor, v(t, i["default-outline"])), o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor, v(n, i["default-outline"]));
    }
    function et(e, t, n) {
      const o = (
        /** @type {'Confirm' | 'Deny' | 'Cancel'} */
        ie(t)
      );
      Be(e, n["show".concat(o, "Button")], "inline-block"), V(e, n["".concat(t, "ButtonText")] || ""), e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")] || ""), e.className = i[t], U(e, n, "".concat(t, "Button"));
    }
    const Fn = (e, t) => {
      const n = Ke();
      n && (V(n, t.closeButtonHtml || ""), U(n, t, "closeButton"), Be(n, t.showCloseButton), n.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
    }, Rn = (e, t) => {
      const n = M();
      n && (Vn(n, t.backdrop), $n(n, t.position), Wn(n, t.grow), U(n, t, "container"));
    };
    function Vn(e, t) {
      typeof t == "string" ? e.style.background = t : t || v([document.documentElement, document.body], i["no-backdrop"]);
    }
    function $n(e, t) {
      t && (t in i ? v(e, i[t]) : (L('The "position" parameter is not valid, defaulting to "center"'), v(e, i.center)));
    }
    function Wn(e, t) {
      t && v(e, i["grow-".concat(t)]);
    }
    var S = {
      innerParams: /* @__PURE__ */ new WeakMap(),
      domCache: /* @__PURE__ */ new WeakMap()
    };
    const Nn = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], Un = (e, t) => {
      const n = x();
      if (!n)
        return;
      const o = S.innerParams.get(e), r = !o || t.input !== o.input;
      Nn.forEach((p) => {
        const A = re(n, i[p]);
        A && (Xn(p, t.inputAttributes), A.className = i[p], r && q(A));
      }), t.input && (r && Zn(t), Yn(t));
    }, Zn = (e) => {
      if (!e.input)
        return;
      if (!E[e.input]) {
        F("Unexpected type of input! Expected ".concat(Object.keys(E).join(" | "), ', got "').concat(e.input, '"'));
        return;
      }
      const t = yt(e.input), n = E[e.input](t, e);
      j(t), e.inputAutoFocus && setTimeout(() => {
        ft(n);
      });
    }, Kn = (e) => {
      for (let t = 0; t < e.attributes.length; t++) {
        const n = e.attributes[t].name;
        ["id", "type", "value", "style"].includes(n) || e.removeAttribute(n);
      }
    }, Xn = (e, t) => {
      const n = _e(x(), e);
      if (n) {
        Kn(n);
        for (const o in t)
          n.setAttribute(o, t[o]);
      }
    }, Yn = (e) => {
      const t = yt(e.input);
      typeof e.customClass == "object" && v(t, e.customClass.input);
    }, tt = (e, t) => {
      (!e.placeholder || t.inputPlaceholder) && (e.placeholder = t.inputPlaceholder);
    }, Ie = (e, t, n) => {
      if (n.inputLabel) {
        const o = document.createElement("label"), r = i["input-label"];
        o.setAttribute("for", e.id), o.className = r, typeof n.customClass == "object" && v(o, n.customClass.inputLabel), o.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", o);
      }
    }, yt = (e) => re(x(), i[e] || i.input), qe = (e, t) => {
      ["string", "number"].includes(typeof t) ? e.value = "".concat(t) : Te(t) || L('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t, '"'));
    }, E = {};
    E.text = E.email = E.password = E.number = E.tel = E.url = E.search = E.date = E["datetime-local"] = E.time = E.week = E.month = (e, t) => (qe(e, t.inputValue), Ie(e, e, t), tt(e, t), e.type = t.input, e), E.file = (e, t) => (Ie(e, e, t), tt(e, t), e), E.range = (e, t) => {
      const n = e.querySelector("input"), o = e.querySelector("output");
      return qe(n, t.inputValue), n.type = t.input, qe(o, t.inputValue), Ie(n, e, t), e;
    }, E.select = (e, t) => {
      if (e.textContent = "", t.inputPlaceholder) {
        const n = document.createElement("option");
        V(n, t.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, e.appendChild(n);
      }
      return Ie(e, e, t), e;
    }, E.radio = (e) => (e.textContent = "", e), E.checkbox = (e, t) => {
      const n = _e(x(), "checkbox");
      n.value = "1", n.checked = Boolean(t.inputValue);
      const o = e.querySelector("span");
      return V(o, t.inputPlaceholder), n;
    }, E.textarea = (e, t) => {
      qe(e, t.inputValue), tt(e, t), Ie(e, e, t);
      const n = (o) => parseInt(window.getComputedStyle(o).marginLeft) + parseInt(window.getComputedStyle(o).marginRight);
      return setTimeout(() => {
        if ("MutationObserver" in window) {
          const o = parseInt(window.getComputedStyle(x()).width), r = () => {
            if (!document.body.contains(e))
              return;
            const p = e.offsetWidth + n(e);
            p > o ? x().style.width = "".concat(p, "px") : pe(x(), "width", t.width);
          };
          new MutationObserver(r).observe(e, {
            attributes: !0,
            attributeFilter: ["style"]
          });
        }
      }), e;
    };
    const Jn = (e, t) => {
      const n = m();
      n && (Je(n), U(n, t, "htmlContainer"), t.html ? (Qe(t.html, n), j(n, "block")) : t.text ? (n.textContent = t.text, j(n, "block")) : q(n), Un(e, t));
    }, Gn = (e, t) => {
      const n = He();
      n && (Je(n), Be(n, t.footer, "block"), t.footer && Qe(t.footer, n), U(n, t, "footer"));
    }, Qn = (e, t) => {
      const n = S.innerParams.get(e), o = f();
      if (o) {
        if (n && t.icon === n.icon) {
          Ct(o, t), vt(o, t);
          return;
        }
        if (!t.icon && !t.iconHtml) {
          q(o);
          return;
        }
        if (t.icon && Object.keys(se).indexOf(t.icon) === -1) {
          F('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon, '"')), q(o);
          return;
        }
        j(o), Ct(o, t), vt(o, t), v(o, t.showClass && t.showClass.icon);
      }
    }, vt = (e, t) => {
      for (const [n, o] of Object.entries(se))
        t.icon !== n && G(e, o);
      v(e, t.icon && se[t.icon]), oo(e, t), eo(), U(e, t, "icon");
    }, eo = () => {
      const e = x();
      if (!e)
        return;
      const t = window.getComputedStyle(e).getPropertyValue("background-color"), n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
      for (let o = 0; o < n.length; o++)
        n[o].style.backgroundColor = t;
    }, to = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`, no = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`, Ct = (e, t) => {
      if (!t.icon && !t.iconHtml)
        return;
      let n = e.innerHTML, o = "";
      t.iconHtml ? o = xt(t.iconHtml) : t.icon === "success" ? (o = to, n = n.replace(/ style=".*?"/g, "")) : t.icon === "error" ? o = no : t.icon && (o = xt({
        question: "?",
        warning: "!",
        info: "i"
      }[t.icon])), n.trim() !== o.trim() && V(e, o);
    }, oo = (e, t) => {
      if (t.iconColor) {
        e.style.color = t.iconColor, e.style.borderColor = t.iconColor;
        for (const n of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"])
          ht(e, n, "backgroundColor", t.iconColor);
        ht(e, ".swal2-success-ring", "borderColor", t.iconColor);
      }
    }, xt = (e) => '<div class="'.concat(i["icon-content"], '">').concat(e, "</div>"), so = (e, t) => {
      const n = _();
      if (n) {
        if (!t.imageUrl) {
          q(n);
          return;
        }
        j(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt || ""), pe(n, "width", t.imageWidth), pe(n, "height", t.imageHeight), n.className = i.image, U(n, t, "image");
      }
    }, io = (e, t) => {
      const n = M(), o = x();
      if (!(!n || !o)) {
        if (t.toast) {
          pe(n, "width", t.width), o.style.width = "100%";
          const r = te();
          r && o.insertBefore(r, f());
        } else
          pe(o, "width", t.width);
        pe(o, "padding", t.padding), t.color && (o.style.color = t.color), t.background && (o.style.background = t.background), q(Y()), ro(o, t);
      }
    }, ro = (e, t) => {
      const n = t.showClass || {};
      e.className = "".concat(i.popup, " ").concat($(e) ? n.popup : ""), t.toast ? (v([document.documentElement, document.body], i["toast-shown"]), v(e, i.toast)) : v(e, i.modal), U(e, t, "popup"), typeof t.customClass == "string" && v(e, t.customClass), t.icon && v(e, i["icon-".concat(t.icon)]);
    }, ao = (e, t) => {
      const n = ee();
      if (!n)
        return;
      const {
        progressSteps: o,
        currentProgressStep: r
      } = t;
      if (!o || o.length === 0 || r === void 0) {
        q(n);
        return;
      }
      j(n), n.textContent = "", r >= o.length && L("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), o.forEach((p, A) => {
        const T = lo(p);
        if (n.appendChild(T), A === r && v(T, i["active-progress-step"]), A !== o.length - 1) {
          const I = co(t);
          n.appendChild(I);
        }
      });
    }, lo = (e) => {
      const t = document.createElement("li");
      return v(t, i["progress-step"]), V(t, e), t;
    }, co = (e) => {
      const t = document.createElement("li");
      return v(t, i["progress-step-line"]), e.progressStepsDistance && pe(t, "width", e.progressStepsDistance), t;
    }, uo = (e, t) => {
      const n = b();
      n && (Je(n), Be(n, t.title || t.titleText, "block"), t.title && Qe(t.title, n), t.titleText && (n.innerText = t.titleText), U(n, t, "title"));
    }, kt = (e, t) => {
      io(e, t), Rn(e, t), ao(e, t), Qn(e, t), so(e, t), uo(e, t), Fn(e, t), Jn(e, t), _n(e, t), Gn(e, t);
      const n = x();
      typeof t.didRender == "function" && n && t.didRender(n);
    }, wo = () => $(x()), At = () => {
      var e;
      return (e = R()) === null || e === void 0 ? void 0 : e.click();
    }, fo = () => {
      var e;
      return (e = N()) === null || e === void 0 ? void 0 : e.click();
    }, po = () => {
      var e;
      return (e = J()) === null || e === void 0 ? void 0 : e.click();
    }, be = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer"
    }), St = (e) => {
      e.keydownTarget && e.keydownHandlerAdded && (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
        capture: e.keydownListenerCapture
      }), e.keydownHandlerAdded = !1);
    }, ho = (e, t, n) => {
      St(e), t.toast || (e.keydownHandler = (o) => go(t, o, n), e.keydownTarget = t.keydownListenerCapture ? window : x(), e.keydownListenerCapture = t.keydownListenerCapture, e.keydownTarget.addEventListener("keydown", e.keydownHandler, {
        capture: e.keydownListenerCapture
      }), e.keydownHandlerAdded = !0);
    }, nt = (e, t) => {
      var n;
      const o = Xe();
      if (o.length) {
        e = e + t, e === o.length ? e = 0 : e === -1 && (e = o.length - 1), o[e].focus();
        return;
      }
      (n = x()) === null || n === void 0 || n.focus();
    }, Tt = ["ArrowRight", "ArrowDown"], mo = ["ArrowLeft", "ArrowUp"], go = (e, t, n) => {
      e && (t.isComposing || t.keyCode === 229 || (e.stopKeydownPropagation && t.stopPropagation(), t.key === "Enter" ? bo(t, e) : t.key === "Tab" ? yo(t) : [...Tt, ...mo].includes(t.key) ? vo(t.key) : t.key === "Escape" && Co(t, e, n)));
    }, bo = (e, t) => {
      if (!X(t.allowEnterKey))
        return;
      const n = _e(x(), t.input);
      if (e.target && n && e.target instanceof HTMLElement && e.target.outerHTML === n.outerHTML) {
        if (["textarea", "file"].includes(t.input))
          return;
        At(), e.preventDefault();
      }
    }, yo = (e) => {
      const t = e.target, n = Xe();
      let o = -1;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) {
          o = r;
          break;
        }
      e.shiftKey ? nt(o, -1) : nt(o, 1), e.stopPropagation(), e.preventDefault();
    }, vo = (e) => {
      const t = fe(), n = R(), o = N(), r = J();
      if (!t || !n || !o || !r)
        return;
      const p = [n, o, r];
      if (document.activeElement instanceof HTMLElement && !p.includes(document.activeElement))
        return;
      const A = Tt.includes(e) ? "nextElementSibling" : "previousElementSibling";
      let T = document.activeElement;
      if (T) {
        for (let I = 0; I < t.children.length; I++) {
          if (T = T[A], !T)
            return;
          if (T instanceof HTMLButtonElement && $(T))
            break;
        }
        T instanceof HTMLButtonElement && T.focus();
      }
    }, Co = (e, t, n) => {
      X(t.allowEscapeKey) && (e.preventDefault(), n(be.esc));
    };
    var Ee = {
      swalPromiseResolve: /* @__PURE__ */ new WeakMap(),
      swalPromiseReject: /* @__PURE__ */ new WeakMap()
    };
    const xo = () => {
      Array.from(document.body.children).forEach((t) => {
        t === M() || t.contains(M()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden") || ""), t.setAttribute("aria-hidden", "true"));
      });
    }, Bt = () => {
      Array.from(document.body.children).forEach((t) => {
        t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden") || ""), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden");
      });
    }, It = typeof window < "u" && !!window.GestureEvent, ko = () => {
      if (It && !ne(document.body, i.iosfix)) {
        const e = document.body.scrollTop;
        document.body.style.top = "".concat(e * -1, "px"), v(document.body, i.iosfix), Ao();
      }
    }, Ao = () => {
      const e = M();
      if (!e)
        return;
      let t;
      e.ontouchstart = (n) => {
        t = So(n);
      }, e.ontouchmove = (n) => {
        t && (n.preventDefault(), n.stopPropagation());
      };
    }, So = (e) => {
      const t = e.target, n = M(), o = m();
      return !n || !o || To(e) || Bo(e) ? !1 : t === n || !mt(n) && t instanceof HTMLElement && t.tagName !== "INPUT" && // #1603
      t.tagName !== "TEXTAREA" && // #2266
      !(mt(o) && // #1944
      o.contains(t));
    }, To = (e) => e.touches && e.touches.length && e.touches[0].touchType === "stylus", Bo = (e) => e.touches && e.touches.length > 1, Io = () => {
      if (ne(document.body, i.iosfix)) {
        const e = parseInt(document.body.style.top, 10);
        G(document.body, i.iosfix), document.body.style.top = "", document.body.scrollTop = e * -1;
      }
    }, Eo = () => {
      const e = document.createElement("div");
      e.className = i["scrollbar-measure"], document.body.appendChild(e);
      const t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    };
    let ye = null;
    const Po = (e) => {
      ye === null && (document.body.scrollHeight > window.innerHeight || e === "scroll") && (ye = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(ye + Eo(), "px"));
    }, Lo = () => {
      ye !== null && (document.body.style.paddingRight = "".concat(ye, "px"), ye = null);
    };
    function Et(e, t, n, o) {
      De() ? Lt(e, o) : (H(n).then(() => Lt(e, o)), St(d)), It ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), Ye() && (Lo(), Io(), Bt()), Oo();
    }
    function Oo() {
      G([document.documentElement, document.body], [i.shown, i["height-auto"], i["no-backdrop"], i["toast-shown"]]);
    }
    function ae(e) {
      e = Ho(e);
      const t = Ee.swalPromiseResolve.get(this), n = Mo(this);
      this.isAwaitingPromise ? e.isDismissed || (Pe(this), t(e)) : n && t(e);
    }
    const Mo = (e) => {
      const t = x();
      if (!t)
        return !1;
      const n = S.innerParams.get(e);
      if (!n || ne(t, n.hideClass.popup))
        return !1;
      G(t, n.showClass.popup), v(t, n.hideClass.popup);
      const o = M();
      return G(o, n.showClass.backdrop), v(o, n.hideClass.backdrop), jo(e, t, n), !0;
    };
    function Pt(e) {
      const t = Ee.swalPromiseReject.get(this);
      Pe(this), t && t(e);
    }
    const Pe = (e) => {
      e.isAwaitingPromise && (delete e.isAwaitingPromise, S.innerParams.get(e) || e._destroy());
    }, Ho = (e) => typeof e > "u" ? {
      isConfirmed: !1,
      isDenied: !1,
      isDismissed: !0
    } : Object.assign({
      isConfirmed: !1,
      isDenied: !1,
      isDismissed: !1
    }, e), jo = (e, t, n) => {
      const o = M(), r = me && gt(t);
      typeof n.willClose == "function" && n.willClose(t), r ? Do(e, t, o, n.returnFocus, n.didClose) : Et(e, o, n.returnFocus, n.didClose);
    }, Do = (e, t, n, o, r) => {
      me && (d.swalCloseEventFinishedCallback = Et.bind(null, e, n, o, r), t.addEventListener(me, function(p) {
        p.target === t && (d.swalCloseEventFinishedCallback(), delete d.swalCloseEventFinishedCallback);
      }));
    }, Lt = (e, t) => {
      setTimeout(() => {
        typeof t == "function" && t.bind(e.params)(), e._destroy && e._destroy();
      });
    }, ve = (e) => {
      let t = x();
      if (t || new $e(), t = x(), !t)
        return;
      const n = te();
      De() ? q(f()) : _o(t, e), j(n), t.setAttribute("data-loading", "true"), t.setAttribute("aria-busy", "true"), t.focus();
    }, _o = (e, t) => {
      const n = fe(), o = te();
      !n || !o || (!t && $(R()) && (t = R()), j(n), t && (q(t), o.setAttribute("data-button-to-replace", t.className), n.insertBefore(o, t)), v([e, n], i.loading));
    }, qo = (e, t) => {
      t.input === "select" || t.input === "radio" ? $o(e, t) : ["text", "email", "number", "tel", "textarea"].some((n) => n === t.input) && (ue(t.inputValue) || Te(t.inputValue)) && (ve(R()), Wo(e, t));
    }, zo = (e, t) => {
      const n = e.getInput();
      if (!n)
        return null;
      switch (t.input) {
        case "checkbox":
          return Fo(n);
        case "radio":
          return Ro(n);
        case "file":
          return Vo(n);
        default:
          return t.inputAutoTrim ? n.value.trim() : n.value;
      }
    }, Fo = (e) => e.checked ? 1 : 0, Ro = (e) => e.checked ? e.value : null, Vo = (e) => e.files && e.files.length ? e.getAttribute("multiple") !== null ? e.files : e.files[0] : null, $o = (e, t) => {
      const n = x();
      if (!n)
        return;
      const o = (r) => {
        t.input === "select" ? No(n, ze(r), t) : t.input === "radio" && Uo(n, ze(r), t);
      };
      ue(t.inputOptions) || Te(t.inputOptions) ? (ve(R()), de(t.inputOptions).then((r) => {
        e.hideLoading(), o(r);
      })) : typeof t.inputOptions == "object" ? o(t.inputOptions) : F("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof t.inputOptions));
    }, Wo = (e, t) => {
      const n = e.getInput();
      n && (q(n), de(t.inputValue).then((o) => {
        n.value = t.input === "number" ? "".concat(parseFloat(o) || 0) : "".concat(o), j(n), n.focus(), e.hideLoading();
      }).catch((o) => {
        F("Error in inputValue promise: ".concat(o)), n.value = "", j(n), n.focus(), e.hideLoading();
      }));
    };
    function No(e, t, n) {
      const o = re(e, i.select);
      if (!o)
        return;
      const r = (p, A, T) => {
        const I = document.createElement("option");
        I.value = T, V(I, A), I.selected = Ot(T, n.inputValue), p.appendChild(I);
      };
      t.forEach((p) => {
        const A = p[0], T = p[1];
        if (Array.isArray(T)) {
          const I = document.createElement("optgroup");
          I.label = A, I.disabled = !1, o.appendChild(I), T.forEach((xe) => r(I, xe[1], xe[0]));
        } else
          r(o, T, A);
      }), o.focus();
    }
    function Uo(e, t, n) {
      const o = re(e, i.radio);
      if (!o)
        return;
      t.forEach((p) => {
        const A = p[0], T = p[1], I = document.createElement("input"), xe = document.createElement("label");
        I.type = "radio", I.name = i.radio, I.value = A, Ot(A, n.inputValue) && (I.checked = !0);
        const at = document.createElement("span");
        V(at, T), at.className = i.label, xe.appendChild(I), xe.appendChild(at), o.appendChild(xe);
      });
      const r = o.querySelectorAll("input");
      r.length && r[0].focus();
    }
    const ze = (e) => {
      const t = [];
      return e instanceof Map ? e.forEach((n, o) => {
        let r = n;
        typeof r == "object" && (r = ze(r)), t.push([o, r]);
      }) : Object.keys(e).forEach((n) => {
        let o = e[n];
        typeof o == "object" && (o = ze(o)), t.push([n, o]);
      }), t;
    }, Ot = (e, t) => !!t && t.toString() === e.toString(), Zo = (e) => {
      const t = S.innerParams.get(e);
      e.disableButtons(), t.input ? Mt(e, "confirm") : st(e, !0);
    }, Ko = (e) => {
      const t = S.innerParams.get(e);
      e.disableButtons(), t.returnInputValueOnDeny ? Mt(e, "deny") : ot(e, !1);
    }, Xo = (e, t) => {
      e.disableButtons(), t(be.cancel);
    }, Mt = (e, t) => {
      const n = S.innerParams.get(e);
      if (!n.input) {
        F('The "input" parameter is needed to be set when using returnInputValueOn'.concat(ie(t)));
        return;
      }
      const o = e.getInput(), r = zo(e, n);
      n.inputValidator ? Yo(e, r, t) : o && !o.checkValidity() ? (e.enableButtons(), e.showValidationMessage(n.validationMessage)) : t === "deny" ? ot(e, r) : st(e, r);
    }, Yo = (e, t, n) => {
      const o = S.innerParams.get(e);
      e.disableInput(), Promise.resolve().then(() => de(o.inputValidator(t, o.validationMessage))).then((p) => {
        e.enableButtons(), e.enableInput(), p ? e.showValidationMessage(p) : n === "deny" ? ot(e, t) : st(e, t);
      });
    }, ot = (e, t) => {
      const n = S.innerParams.get(e || void 0);
      n.showLoaderOnDeny && ve(N()), n.preDeny ? (e.isAwaitingPromise = !0, Promise.resolve().then(() => de(n.preDeny(t, n.validationMessage))).then((r) => {
        r === !1 ? (e.hideLoading(), Pe(e)) : e.close({
          isDenied: !0,
          value: typeof r > "u" ? t : r
        });
      }).catch((r) => jt(e || void 0, r))) : e.close({
        isDenied: !0,
        value: t
      });
    }, Ht = (e, t) => {
      e.close({
        isConfirmed: !0,
        value: t
      });
    }, jt = (e, t) => {
      e.rejectPromise(t);
    }, st = (e, t) => {
      const n = S.innerParams.get(e || void 0);
      n.showLoaderOnConfirm && ve(), n.preConfirm ? (e.resetValidationMessage(), e.isAwaitingPromise = !0, Promise.resolve().then(() => de(n.preConfirm(t, n.validationMessage))).then((r) => {
        $(Y()) || r === !1 ? (e.hideLoading(), Pe(e)) : Ht(e, typeof r > "u" ? t : r);
      }).catch((r) => jt(e || void 0, r))) : Ht(e, t);
    };
    function Fe() {
      const e = S.innerParams.get(this);
      if (!e)
        return;
      const t = S.domCache.get(this);
      q(t.loader), De() ? e.icon && j(f()) : Jo(t), G([t.popup, t.actions], i.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.denyButton.disabled = !1, t.cancelButton.disabled = !1;
    }
    const Jo = (e) => {
      const t = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));
      t.length ? j(t[0], "inline-block") : Tn() && q(e.actions);
    };
    function Dt() {
      const e = S.innerParams.get(this), t = S.domCache.get(this);
      return t ? _e(t.popup, e.input) : null;
    }
    function _t(e, t, n) {
      const o = S.domCache.get(e);
      t.forEach((r) => {
        o[r].disabled = n;
      });
    }
    function qt(e, t) {
      const n = x();
      if (!(!n || !e))
        if (e.type === "radio") {
          const o = n.querySelectorAll('[name="'.concat(i.radio, '"]'));
          for (let r = 0; r < o.length; r++)
            o[r].disabled = t;
        } else
          e.disabled = t;
    }
    function zt() {
      _t(this, ["confirmButton", "denyButton", "cancelButton"], !1);
    }
    function Ft() {
      _t(this, ["confirmButton", "denyButton", "cancelButton"], !0);
    }
    function Rt() {
      qt(this.getInput(), !1);
    }
    function Vt() {
      qt(this.getInput(), !0);
    }
    function $t(e) {
      const t = S.domCache.get(this), n = S.innerParams.get(this);
      V(t.validationMessage, e), t.validationMessage.className = i["validation-message"], n.customClass && n.customClass.validationMessage && v(t.validationMessage, n.customClass.validationMessage), j(t.validationMessage);
      const o = this.getInput();
      o && (o.setAttribute("aria-invalid", "true"), o.setAttribute("aria-describedby", i["validation-message"]), ft(o), v(o, i.inputerror));
    }
    function Wt() {
      const e = S.domCache.get(this);
      e.validationMessage && q(e.validationMessage);
      const t = this.getInput();
      t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedby"), G(t, i.inputerror));
    }
    const Ce = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: !1,
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show"
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide"
      },
      customClass: {},
      target: "body",
      color: void 0,
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showDenyButton: !1,
      showCancelButton: !1,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusDeny: !1,
      focusCancel: !1,
      returnFocus: !0,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: !1,
      showLoaderOnDeny: !1,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: !1,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoFocus: !0,
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: !1,
      validationMessage: void 0,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: !0
    }, Go = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"], Qo = {}, es = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"], Nt = (e) => Object.prototype.hasOwnProperty.call(Ce, e), Ut = (e) => Go.indexOf(e) !== -1, Zt = (e) => Qo[e], ts = (e) => {
      Nt(e) || L('Unknown parameter "'.concat(e, '"'));
    }, ns = (e) => {
      es.includes(e) && L('The parameter "'.concat(e, '" is incompatible with toasts'));
    }, os = (e) => {
      const t = Zt(e);
      t && Ze(e, t);
    }, ss = (e) => {
      e.backdrop === !1 && e.allowOutsideClick && L('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
      for (const t in e)
        ts(t), e.toast && ns(t), os(t);
    };
    function Kt(e) {
      const t = x(), n = S.innerParams.get(this);
      if (!t || ne(t, n.hideClass.popup)) {
        L("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
        return;
      }
      const o = is(e), r = Object.assign({}, n, o);
      kt(this, r), S.innerParams.set(this, r), Object.defineProperties(this, {
        params: {
          value: Object.assign({}, this.params, e),
          writable: !1,
          enumerable: !0
        }
      });
    }
    const is = (e) => {
      const t = {};
      return Object.keys(e).forEach((n) => {
        Ut(n) ? t[n] = e[n] : L("Invalid parameter to update: ".concat(n));
      }), t;
    };
    function Xt() {
      const e = S.domCache.get(this), t = S.innerParams.get(this);
      if (!t) {
        Yt(this);
        return;
      }
      e.popup && d.swalCloseEventFinishedCallback && (d.swalCloseEventFinishedCallback(), delete d.swalCloseEventFinishedCallback), typeof t.didDestroy == "function" && t.didDestroy(), rs(this);
    }
    const rs = (e) => {
      Yt(e), delete e.params, delete d.keydownHandler, delete d.keydownTarget, delete d.currentInstance;
    }, Yt = (e) => {
      e.isAwaitingPromise ? (it(S, e), e.isAwaitingPromise = !0) : (it(Ee, e), it(S, e), delete e.isAwaitingPromise, delete e.disableButtons, delete e.enableButtons, delete e.getInput, delete e.disableInput, delete e.enableInput, delete e.hideLoading, delete e.disableLoading, delete e.showValidationMessage, delete e.resetValidationMessage, delete e.close, delete e.closePopup, delete e.closeModal, delete e.closeToast, delete e.rejectPromise, delete e.update, delete e._destroy);
    }, it = (e, t) => {
      for (const n in e)
        e[n].delete(t);
    };
    var as = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      _destroy: Xt,
      close: ae,
      closeModal: ae,
      closePopup: ae,
      closeToast: ae,
      disableButtons: Ft,
      disableInput: Vt,
      disableLoading: Fe,
      enableButtons: zt,
      enableInput: Rt,
      getInput: Dt,
      handleAwaitingPromise: Pe,
      hideLoading: Fe,
      rejectPromise: Pt,
      resetValidationMessage: Wt,
      showValidationMessage: $t,
      update: Kt
    });
    const ls = (e, t, n) => {
      e.toast ? cs(e, t, n) : (ds(t), ws(t), fs(e, t, n));
    }, cs = (e, t, n) => {
      t.popup.onclick = () => {
        e && (us(e) || e.timer || e.input) || n(be.close);
      };
    }, us = (e) => !!(e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton);
    let Re = !1;
    const ds = (e) => {
      e.popup.onmousedown = () => {
        e.container.onmouseup = function(t) {
          e.container.onmouseup = () => {
          }, t.target === e.container && (Re = !0);
        };
      };
    }, ws = (e) => {
      e.container.onmousedown = () => {
        e.popup.onmouseup = function(t) {
          e.popup.onmouseup = () => {
          }, (t.target === e.popup || t.target instanceof HTMLElement && e.popup.contains(t.target)) && (Re = !0);
        };
      };
    }, fs = (e, t, n) => {
      t.container.onclick = (o) => {
        if (Re) {
          Re = !1;
          return;
        }
        o.target === t.container && X(e.allowOutsideClick) && n(be.backdrop);
      };
    }, ps = (e) => typeof e == "object" && e.jquery, Jt = (e) => e instanceof Element || ps(e), hs = (e) => {
      const t = {};
      return typeof e[0] == "object" && !Jt(e[0]) ? Object.assign(t, e[0]) : ["title", "html", "icon"].forEach((n, o) => {
        const r = e[o];
        typeof r == "string" || Jt(r) ? t[n] = r : r !== void 0 && F("Unexpected type of ".concat(n, '! Expected "string" or "Element", got ').concat(typeof r));
      }), t;
    };
    function ms() {
      const e = this;
      for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
        n[o] = arguments[o];
      return new e(...n);
    }
    function gs(e) {
      class t extends this {
        _main(o, r) {
          return super._main(o, Object.assign({}, e, r));
        }
      }
      return t;
    }
    const bs = () => d.timeout && d.timeout.getTimerLeft(), Gt = () => {
      if (d.timeout)
        return Bn(), d.timeout.stop();
    }, Qt = () => {
      if (d.timeout) {
        const e = d.timeout.start();
        return Ge(e), e;
      }
    }, ys = () => {
      const e = d.timeout;
      return e && (e.running ? Gt() : Qt());
    }, vs = (e) => {
      if (d.timeout) {
        const t = d.timeout.increase(e);
        return Ge(t, !0), t;
      }
    }, Cs = () => !!(d.timeout && d.timeout.isRunning());
    let en = !1;
    const rt = {};
    function xs() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
      rt[e] = this, en || (document.body.addEventListener("click", ks), en = !0);
    }
    const ks = (e) => {
      for (let t = e.target; t && t !== document; t = t.parentNode)
        for (const n in rt) {
          const o = t.getAttribute(n);
          if (o) {
            rt[n].fire({
              template: o
            });
            return;
          }
        }
    };
    var As = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      argsToParams: hs,
      bindClickHandler: xs,
      clickCancel: po,
      clickConfirm: At,
      clickDeny: fo,
      enableLoading: ve,
      fire: ms,
      getActions: fe,
      getCancelButton: J,
      getCloseButton: Ke,
      getConfirmButton: R,
      getContainer: M,
      getDenyButton: N,
      getFocusableElements: Xe,
      getFooter: He,
      getHtmlContainer: m,
      getIcon: f,
      getIconContent: h,
      getImage: _,
      getInputLabel: Me,
      getLoader: te,
      getPopup: x,
      getProgressSteps: ee,
      getTimerLeft: bs,
      getTimerProgressBar: je,
      getTitle: b,
      getValidationMessage: Y,
      increaseTimer: vs,
      isDeprecatedParameter: Zt,
      isLoading: An,
      isTimerRunning: Cs,
      isUpdatableParameter: Ut,
      isValidParameter: Nt,
      isVisible: wo,
      mixin: gs,
      resumeTimer: Qt,
      showLoading: ve,
      stopTimer: Gt,
      toggleTimer: ys
    });
    class Ss {
      /**
       * @param {Function} callback
       * @param {number} delay
       */
      constructor(t, n) {
        this.callback = t, this.remaining = n, this.running = !1, this.start();
      }
      /**
       * @returns {number}
       */
      start() {
        return this.running || (this.running = !0, this.started = new Date(), this.id = setTimeout(this.callback, this.remaining)), this.remaining;
      }
      /**
       * @returns {number}
       */
      stop() {
        return this.started && this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining;
      }
      /**
       * @param {number} n
       * @returns {number}
       */
      increase(t) {
        const n = this.running;
        return n && this.stop(), this.remaining += t, n && this.start(), this.remaining;
      }
      /**
       * @returns {number}
       */
      getTimerLeft() {
        return this.running && (this.stop(), this.start()), this.remaining;
      }
      /**
       * @returns {boolean}
       */
      isRunning() {
        return this.running;
      }
    }
    const tn = ["swal-title", "swal-html", "swal-footer"], Ts = (e) => {
      const t = typeof e.template == "string" ? document.querySelector(e.template) : e.template;
      if (!t)
        return {};
      const n = t.content;
      return Hs(n), Object.assign(Bs(n), Is(n), Es(n), Ps(n), Ls(n), Os(n), Ms(n, tn));
    }, Bs = (e) => {
      const t = {};
      return Array.from(e.querySelectorAll("swal-param")).forEach((o) => {
        ge(o, ["name", "value"]);
        const r = o.getAttribute("name"), p = o.getAttribute("value");
        typeof Ce[r] == "boolean" ? t[r] = p !== "false" : typeof Ce[r] == "object" ? t[r] = JSON.parse(p) : t[r] = p;
      }), t;
    }, Is = (e) => {
      const t = {};
      return Array.from(e.querySelectorAll("swal-function-param")).forEach((o) => {
        const r = o.getAttribute("name"), p = o.getAttribute("value");
        t[r] = new Function("return ".concat(p))();
      }), t;
    }, Es = (e) => {
      const t = {};
      return Array.from(e.querySelectorAll("swal-button")).forEach((o) => {
        ge(o, ["type", "color", "aria-label"]);
        const r = o.getAttribute("type");
        t["".concat(r, "ButtonText")] = o.innerHTML, t["show".concat(ie(r), "Button")] = !0, o.hasAttribute("color") && (t["".concat(r, "ButtonColor")] = o.getAttribute("color")), o.hasAttribute("aria-label") && (t["".concat(r, "ButtonAriaLabel")] = o.getAttribute("aria-label"));
      }), t;
    }, Ps = (e) => {
      const t = {}, n = e.querySelector("swal-image");
      return n && (ge(n, ["src", "width", "height", "alt"]), n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")), n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")), n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")), n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))), t;
    }, Ls = (e) => {
      const t = {}, n = e.querySelector("swal-icon");
      return n && (ge(n, ["type", "color"]), n.hasAttribute("type") && (t.icon = n.getAttribute("type")), n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")), t.iconHtml = n.innerHTML), t;
    }, Os = (e) => {
      const t = {}, n = e.querySelector("swal-input");
      n && (ge(n, ["type", "label", "placeholder", "value"]), t.input = n.getAttribute("type") || "text", n.hasAttribute("label") && (t.inputLabel = n.getAttribute("label")), n.hasAttribute("placeholder") && (t.inputPlaceholder = n.getAttribute("placeholder")), n.hasAttribute("value") && (t.inputValue = n.getAttribute("value")));
      const o = Array.from(e.querySelectorAll("swal-input-option"));
      return o.length && (t.inputOptions = {}, o.forEach((r) => {
        ge(r, ["value"]);
        const p = r.getAttribute("value"), A = r.innerHTML;
        t.inputOptions[p] = A;
      })), t;
    }, Ms = (e, t) => {
      const n = {};
      for (const o in t) {
        const r = t[o], p = e.querySelector(r);
        p && (ge(p, []), n[r.replace(/^swal-/, "")] = p.innerHTML.trim());
      }
      return n;
    }, Hs = (e) => {
      const t = tn.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
      Array.from(e.children).forEach((n) => {
        const o = n.tagName.toLowerCase();
        t.includes(o) || L("Unrecognized element <".concat(o, ">"));
      });
    }, ge = (e, t) => {
      Array.from(e.attributes).forEach((n) => {
        t.indexOf(n.name) === -1 && L(['Unrecognized attribute "'.concat(n.name, '" on <').concat(e.tagName.toLowerCase(), ">."), "".concat(t.length ? "Allowed attributes are: ".concat(t.join(", ")) : "To set the value, use HTML within the element.")]);
      });
    }, nn = 10, js = (e) => {
      const t = M(), n = x();
      typeof e.willOpen == "function" && e.willOpen(n);
      const r = window.getComputedStyle(document.body).overflowY;
      qs(t, n, e), setTimeout(() => {
        Ds(t, n);
      }, nn), Ye() && (_s(t, e.scrollbarPadding, r), xo()), !De() && !d.previousActiveElement && (d.previousActiveElement = document.activeElement), typeof e.didOpen == "function" && setTimeout(() => e.didOpen(n)), G(t, i["no-transition"]);
    }, on = (e) => {
      const t = x();
      if (e.target !== t || !me)
        return;
      const n = M();
      t.removeEventListener(me, on), n.style.overflowY = "auto";
    }, Ds = (e, t) => {
      me && gt(t) ? (e.style.overflowY = "hidden", t.addEventListener(me, on)) : e.style.overflowY = "auto";
    }, _s = (e, t, n) => {
      ko(), t && n !== "hidden" && Po(n), setTimeout(() => {
        e.scrollTop = 0;
      });
    }, qs = (e, t, n) => {
      v(e, n.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), j(t, "grid"), setTimeout(() => {
        v(t, n.showClass.popup), t.style.removeProperty("opacity");
      }, nn), v([document.documentElement, document.body], i.shown), n.heightAuto && n.backdrop && !n.toast && v([document.documentElement, document.body], i["height-auto"]);
    };
    var sn = {
      /**
       * @param {string} string
       * @param {string} [validationMessage]
       * @returns {Promise<string | void>}
       */
      email: (e, t) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"),
      /**
       * @param {string} string
       * @param {string} [validationMessage]
       * @returns {Promise<string | void>}
       */
      url: (e, t) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
    };
    function zs(e) {
      e.inputValidator || (e.input === "email" && (e.inputValidator = sn.email), e.input === "url" && (e.inputValidator = sn.url));
    }
    function Fs(e) {
      (!e.target || typeof e.target == "string" && !document.querySelector(e.target) || typeof e.target != "string" && !e.target.appendChild) && (L('Target parameter is not valid, defaulting to "body"'), e.target = "body");
    }
    function Rs(e) {
      zs(e), e.showLoaderOnConfirm && !e.preConfirm && L(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Fs(e), typeof e.title == "string" && (e.title = e.title.split(`
`).join("<br />")), Hn(e);
    }
    let Q;
    var Ve = /* @__PURE__ */ new WeakMap();
    class P {
      /**
       * @param {...any} args
       * @this {SweetAlert}
       */
      constructor() {
        if (k(this, Ve, {
          writable: !0,
          value: void 0
        }), typeof window > "u")
          return;
        Q = this;
        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
          n[o] = arguments[o];
        const r = Object.freeze(this.constructor.argsToParams(n));
        this.params = r, this.isAwaitingPromise = !1, l(this, Ve, this._main(Q.params));
      }
      _main(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        ss(Object.assign({}, n, t)), d.currentInstance && (d.currentInstance._destroy(), Ye() && Bt()), d.currentInstance = Q;
        const o = $s(t, n);
        Rs(o), Object.freeze(o), d.timeout && (d.timeout.stop(), delete d.timeout), clearTimeout(d.restoreFocusTimeout);
        const r = Ws(Q);
        return kt(Q, o), S.innerParams.set(Q, o), Vs(Q, r, o);
      }
      // `catch` cannot be the name of a module export, so we define our thenable methods here instead
      then(t) {
        return u(this, Ve).then(t);
      }
      finally(t) {
        return u(this, Ve).finally(t);
      }
    }
    const Vs = (e, t, n) => new Promise((o, r) => {
      const p = (A) => {
        e.close({
          isDismissed: !0,
          dismiss: A
        });
      };
      Ee.swalPromiseResolve.set(e, o), Ee.swalPromiseReject.set(e, r), t.confirmButton.onclick = () => {
        Zo(e);
      }, t.denyButton.onclick = () => {
        Ko(e);
      }, t.cancelButton.onclick = () => {
        Xo(e, p);
      }, t.closeButton.onclick = () => {
        p(be.close);
      }, ls(n, t, p), ho(d, n, p), qo(e, n), js(n), Ns(d, n, p), Us(t, n), setTimeout(() => {
        t.container.scrollTop = 0;
      });
    }), $s = (e, t) => {
      const n = Ts(e), o = Object.assign({}, Ce, t, n, e);
      return o.showClass = Object.assign({}, Ce.showClass, o.showClass), o.hideClass = Object.assign({}, Ce.hideClass, o.hideClass), o;
    }, Ws = (e) => {
      const t = {
        popup: x(),
        container: M(),
        actions: fe(),
        confirmButton: R(),
        denyButton: N(),
        cancelButton: J(),
        loader: te(),
        closeButton: Ke(),
        validationMessage: Y(),
        progressSteps: ee()
      };
      return S.domCache.set(e, t), t;
    }, Ns = (e, t, n) => {
      const o = je();
      q(o), t.timer && (e.timeout = new Ss(() => {
        n("timer"), delete e.timeout;
      }, t.timer), t.timerProgressBar && (j(o), U(o, t, "timerProgressBar"), setTimeout(() => {
        e.timeout && e.timeout.running && Ge(t.timer);
      })));
    }, Us = (e, t) => {
      if (!t.toast) {
        if (!X(t.allowEnterKey)) {
          Ks();
          return;
        }
        Zs(e, t) || nt(-1, 1);
      }
    }, Zs = (e, t) => t.focusDeny && $(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && $(e.cancelButton) ? (e.cancelButton.focus(), !0) : t.focusConfirm && $(e.confirmButton) ? (e.confirmButton.focus(), !0) : !1, Ks = () => {
      document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur();
    };
    if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
      const e = new Date(), t = localStorage.getItem("swal-initiation");
      t ? (e.getTime() - Date.parse(t)) / (1e3 * 60 * 60 * 24) > 3 && setTimeout(() => {
        document.body.style.pointerEvents = "none";
        const n = document.createElement("audio");
        n.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3", n.loop = !0, document.body.appendChild(n), setTimeout(() => {
          n.play().catch(() => {
          });
        }, 2500);
      }, 500) : localStorage.setItem("swal-initiation", "".concat(e));
    }
    P.prototype.disableButtons = Ft, P.prototype.enableButtons = zt, P.prototype.getInput = Dt, P.prototype.disableInput = Vt, P.prototype.enableInput = Rt, P.prototype.hideLoading = Fe, P.prototype.disableLoading = Fe, P.prototype.showValidationMessage = $t, P.prototype.resetValidationMessage = Wt, P.prototype.close = ae, P.prototype.closePopup = ae, P.prototype.closeModal = ae, P.prototype.closeToast = ae, P.prototype.rejectPromise = Pt, P.prototype.update = Kt, P.prototype._destroy = Xt, Object.assign(P, As), Object.keys(as).forEach((e) => {
      P[e] = function() {
        return Q && Q[e] ? Q[e](...arguments) : null;
      };
    }), P.DismissReason = be, P.version = "11.9.0";
    const $e = P;
    return $e.default = $e, $e;
  }), typeof le < "u" && le.Sweetalert2 && (le.swal = le.sweetAlert = le.Swal = le.SweetAlert = le.Sweetalert2), typeof document < "u" && function(u, l) {
    var c = u.createElement("style");
    if (u.getElementsByTagName("head")[0].appendChild(c), c.styleSheet)
      c.styleSheet.disabled || (c.styleSheet.cssText = l);
    else
      try {
        c.innerHTML = l;
      } catch {
        c.innerText = l;
      }
  }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');
})(fi);
const pi = lt, hi = () => Xs, mi = hi(), gi = mi.default, yi = ({ integrationId: s, apiKey: a, clientId: u, clientSecret: l, chatbotOptions: c }) => {
  const w = {
    integrationId: s,
    delegate: wi,
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
      brandColor: ke.brandColor,
      conversationColor: ke.conversationColor,
      actionColor: ke.actionColor
    }
  };
  c && (w.soundNotificationEnabled = c.soundNotificationEnabled ?? !0, w.businessName = c.businessName ?? null, w.businessIconUrl = c.businessIconUrl ?? null, w.backgroundImageUrl = c.backgroundImageUrl ?? null, c.customColors && (w.customColors.brandColor = c.customColors.brandColor ?? ke.brandColor, w.customColors.conversationColor = c.customColors.conversationColor ?? ke.conversationColor, w.customColors.actionColor = c.customColors.actionColor ?? ke.actionColor)), li(), We(`Initializing ZD ChatBot plugin version: ${Le.version}`), ui(u, l), ai(a), Ne() === null || Ne() === "" || dt() === null ? (We(`Failed to initialize ZD ChatBot plugin version: ${Le.version}. Missing api key, clientId or clientSecret`), Se(!0)) : yn("hello") === null ? (Se(!0), We(`Failed to initialize ZD ChatBot plugin version: ${Le.version}. Invalid api key or oAuth2 token`)) : We(`Successfully initialized ZD ChatBot plugin version: ${Le.version}`), gi.init(w);
}, bi = () => {
  const s = pn();
  let a = "<table>";
  s && (s.forEach((u) => {
    a += "<tr>";
    for (const l of u)
      a += `<td>${l}</td>`;
    a += "</tr>";
  }), a += "</table>"), pi.fire({
    title: `Debug Mode - ZD ChatBot plugin version: ${Le.version}`,
    html: `<div>Log Entries</div></br>${a}`,
    confirmButtonText: "Close",
    allowOutsideClick: () => !1
  });
};
window.lioChatBotDebug = bi;
export {
  yi as initLIOChatBot,
  bi as lioChatBotDebug
};
