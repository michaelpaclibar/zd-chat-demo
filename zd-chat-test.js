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
  function u(c) {
    if (a[c])
      return a[c].exports;
    var l = a[c] = { i: c, l: !1, exports: {} };
    return s[c].call(l.exports, l, l.exports, u), l.l = !0, l.exports;
  }
  return u.m = s, u.c = a, u.d = function(c, l, w) {
    u.o(c, l) || Object.defineProperty(c, l, { enumerable: !0, get: w });
  }, u.r = function(c) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(c, "__esModule", { value: !0 });
  }, u.t = function(c, l) {
    if (1 & l && (c = u(c)), 8 & l || 4 & l && typeof c == "object" && c && c.__esModule)
      return c;
    var w = /* @__PURE__ */ Object.create(null);
    if (u.r(w), Object.defineProperty(w, "default", { enumerable: !0, value: c }), 2 & l && typeof c != "string")
      for (var x in c)
        u.d(w, x, function(g) {
          return c[g];
        }.bind(null, x));
    return w;
  }, u.n = function(c) {
    var l = c && c.__esModule ? function() {
      return c.default;
    } : function() {
      return c;
    };
    return u.d(l, "a", l), l;
  }, u.o = function(c, l) {
    return Object.prototype.hasOwnProperty.call(c, l);
  }, u.p = "https://cdn.smooch.io/", u(u.s = 6);
}([function(s, a, u) {
  var c = u(3);
  s.exports = new c();
}, function(s, a) {
  s.exports = { isFunction: function(u) {
    return typeof u == "function";
  }, isArray: function(u) {
    return Object.prototype.toString.apply(u) === "[object Array]";
  }, each: function(u, c) {
    for (var l = 0, w = u.length; l < w && c(u[l], l) !== !1; l++)
      ;
  } };
}, function(s, a, u) {
  s.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(s, a, u) {
  var c = u(4), l = u(1), w = l.each, x = l.isFunction, g = l.isArray;
  function k() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  k.prototype = { constructor: k, register: function(y, d, O) {
    var H = this.queries, D = O && this.browserIsIncapable;
    return H[y] || (H[y] = new c(y, D)), x(d) && (d = { match: d }), g(d) || (d = [d]), w(d, function(Z) {
      x(Z) && (Z = { match: Z }), H[y].addHandler(Z);
    }), this;
  }, unregister: function(y, d) {
    var O = this.queries[y];
    return O && (d ? O.removeHandler(d) : (O.clear(), delete this.queries[y])), this;
  } }, s.exports = k;
}, function(s, a, u) {
  var c = u(5), l = u(1).each;
  function w(x, g) {
    this.query = x, this.isUnconditional = g, this.handlers = [], this.mql = window.matchMedia(x);
    var k = this;
    this.listener = function(y) {
      k.mql = y.currentTarget || y, k.assess();
    }, this.mql.addListener(this.listener);
  }
  w.prototype = { constuctor: w, addHandler: function(x) {
    var g = new c(x);
    this.handlers.push(g), this.matches() && g.on();
  }, removeHandler: function(x) {
    var g = this.handlers;
    l(g, function(k, y) {
      if (k.equals(x))
        return k.destroy(), !g.splice(y, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    l(this.handlers, function(x) {
      x.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var x = this.matches() ? "on" : "off";
    l(this.handlers, function(g) {
      g[x]();
    });
  } }, s.exports = w;
}, function(s, a) {
  function u(c) {
    this.options = c, !c.deferSetup && this.setup();
  }
  u.prototype = { constructor: u, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(c) {
    return this.options === c || this.options.match === c;
  } }, s.exports = u;
}, function(s, a, u) {
  u.r(a);
  var c = u(2), l = u.n(c);
  function w(f) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      f();
    }) : f();
  }
  function x(f) {
    var h = ["screen"];
    return f.minHeight && h.push("(min-height: ".concat(f.minHeight, "px)")), f.maxHeight && h.push("(max-height: ".concat(f.maxHeight, "px)")), f.minWidth && h.push("(min-width: ".concat(f.minWidth, "px)")), f.maxWidth && h.push("(max-width: ".concat(f.maxWidth, "px)")), h.join(" and ");
  }
  var g = u(0), k = u.n(g), y = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, d = ["lg", "md", "sm", "xs"];
  function O(f) {
    for (var h = 0; h < d.length; h++) {
      var b = d[h], m = y[b];
      Object.prototype.toString.call(m) !== "[object Array]" && (m = [m]);
      for (var q = 0; q < m.length; q++)
        f({ rule: m[q], size: b });
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
      k.a.register(x(fe), function() {
        h.contentWindow.postMessage({ type: "sizeChange", value: He }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var b = X[0], m = 0; m < X.length; b = X[++m])
      L[b] = i[b];
    if (K) {
      for (var q = K[0], ee = 0; ee < K.length; q = K[++ee]) {
        var Y;
        (Y = i).on.apply(Y, D(q.args));
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
      (B = document.createElement("iframe")).id = "web-messenger-container", B.frameBorder = 0, B.allowFullscreen = !0, B.allowTransparency = !0, B.scrolling = "no", B.className = l.a.iframe;
      var b = function() {
        h = !0, clearInterval(f), delete B.onload;
        var m = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, q = m ? 'nonce="'.concat(m, '"') : "", ee = `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            `.concat("", `
                            <link rel="stylesheet" href="`).concat("https://cdn.smooch.io/frame.5.5.5.css", '" type="text/css" ').concat(q, ` />
                            <script src="`).concat("https://cdn.smooch.io/frame.5.5.5.min.js", '" async crossorigin="anonymous" ').concat(q, `><\/script>
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
    var m = { then: function(q) {
      return F.push({ type: "then", next: q }), m;
    }, catch: function(q) {
      return F.push({ type: "catch", next: q }), m;
    } };
    return m;
  }, render: function(f) {
    B ? f.appendChild(B) : ce = f;
  }, destroy: function() {
    i && (i.destroy(), B.remove ? B.remove() : B.parentNode.removeChild(B), O(function(f) {
      var h = f.rule;
      k.a.unregister(x(h));
    }), C());
  } };
  function C() {
    if (!document.getElementById("web-messenger-container")) {
      i = void 0, B = void 0, window.__onWebMessengerFrameReady__ = Te;
      for (var f = X[0], h = 0; h < X.length; f = X[++h])
        L[f] && delete L[f];
      H(L, z);
    }
  }
  C(), a.default = L;
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
var $ = /* @__PURE__ */ ((s) => (s.Translation = "translation", s.AnswerBot = "answerBot", s.Agent = "agent", s.Carousel = "carousel", s.Form = "form", s))($ || {});
const ne = (s, a) => `${a}:${s}`, oi = (s, a) => {
  localStorage.setItem(s, JSON.stringify([...a]));
}, uo = (s) => {
  const a = localStorage.getItem(s);
  return a ? new Map(JSON.parse(a)) : null;
}, ct = (s, a, u) => {
  const c = ne(
    s,
    "translation"
    /* Translation */
  ), l = uo(c) ?? /* @__PURE__ */ new Map();
  l.set(a, u), oi(c, l);
}, ut = (s, a) => {
  const u = ne(
    s,
    "translation"
    /* Translation */
  ), c = uo(u);
  return (c == null ? void 0 : c.get(a)) ?? null;
}, ni = (s) => {
  localStorage.setItem("user-locale", s);
}, si = () => {
  const s = localStorage.getItem("user-locale");
  return s == null || s === "" ? null : s;
}, io = (s) => {
  const a = `disable-auto-translate:${s}`;
  localStorage.setItem(a, "true");
}, ro = (s) => {
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
}, wo = () => {
  const s = localStorage.getItem("lio-chatbot-token-expiration");
  return s ? new Date(s) < new Date() : !0;
}, fo = (s, a = "") => {
  a !== "" && localStorage.setItem("lio-access-token-request", a), localStorage.setItem("lio-chatbot-token", s);
  const l = new Date().getTime() + 1 * 60 * 60 * 1e3, w = new Date(l);
  localStorage.setItem("lio-chatbot-token-expiration", w.toISOString());
}, ai = (s) => {
  s !== "" && localStorage.setItem("lio-api-key", s);
}, Se = (s) => localStorage.setItem("lio-chatbot-disable-translate-feature", s ? "true" : "false"), ao = () => {
  const s = localStorage.getItem("lio-chatbot-disable-translate-feature");
  return s && s === "true";
}, $e = (s) => {
  let a = po();
  a == null && (a = new Array()), a.push(s), localStorage.setItem("lio-log-entries", JSON.stringify(a));
}, po = () => {
  const s = localStorage.getItem("lio-log-entries");
  return s ? JSON.parse(s) : null;
}, li = () => {
  localStorage.removeItem("user-locale"), localStorage.removeItem("lio-chatbot-token"), localStorage.removeItem("lio-chatbot-token-expiration"), localStorage.removeItem("lio-access-token-request"), localStorage.removeItem("lio-log-entries");
}, ho = "https://lio-oauth2-localhost.auth.us-east-2.amazoncognito.com", ci = "http://local.golinguist.com/read,http://local.golinguist.com/write", ui = (s, a) => {
  const u = `${ho}/oauth2/token`, c = ci.replace(",", " "), l = new XMLHttpRequest();
  l.open("POST", `${u}`, !1), l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const w = `grant_type=client_credentials&client_id=${s}&client_secret=${a}&scope=${encodeURIComponent(c)}`;
  l.send(w), l.status === 200 ? (fo(l.responseText, w), Se(!1)) : (console.error(l.responseText), Se(!0));
}, mo = () => {
  const s = `${ho}/oauth2/token`, a = new XMLHttpRequest();
  a.open("POST", `${s}`, !1), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const u = localStorage.getItem("lio-access-token-request");
  u !== "" && (a.send(u), a.status === 200 ? (fo(a.responseText), Se(!1)) : (console.error(a.responseText), Se(!0)));
}, go = "https://pbbxp1o6qg.execute-api.us-east-2.amazonaws.com/dev", Ue = "en-us", bo = () => {
  let s;
  try {
    return s = window.initSync ? window.initSync() : void 0, s;
  } catch {
    return "";
  }
}, yo = (s) => {
  const a = new XMLHttpRequest(), u = {
    translationType: "machine",
    text: s
  };
  try {
    wo() && mo();
    const c = dt(), l = Ne(), w = bo();
    return a.open("POST", `${go}/linguistnow/resources/locale/detectLocale/`, !1), a.setRequestHeader("x-api-key", `${l}`), a.setRequestHeader("Authorization", `Bearer ${c}`), a.setRequestHeader("X-Request-ID", `${w}`), a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify(u)), a.status === 200 ? JSON.parse(a.responseText).detectedLanguage : null;
  } catch {
    return null;
  }
}, wt = (s, a, u) => {
  const c = {
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
    wo() && mo();
    const l = dt(), w = Ne(), x = bo(), g = new XMLHttpRequest(), k = `${go}/linguistnow/resources/v1/translate/`;
    if (g.open("POST", k, !1), g.setRequestHeader("x-api-key", `${w}`), g.setRequestHeader("Authorization", `Bearer ${l}`), g.setRequestHeader("X-Request-ID", `${x}`), g.setRequestHeader("Content-Type", "application/json"), g.send(JSON.stringify(c)), g.status === 200) {
      const y = JSON.parse(g.responseText);
      return console.debug(`Running LIO Translate API: ${s}`), y.translatedText;
    }
    return null;
  } catch {
    return null;
  }
}, vo = (s) => s.toLocaleLowerCase() !== Ue, xo = () => {
  if (typeof Intl < "u")
    try {
      return Intl.NumberFormat().resolvedOptions().locale.toLocaleLowerCase();
    } catch {
      return console.error("Cannot get locale from Intl"), null;
    }
  return null;
}, Co = (s) => {
  let a = xo();
  return vo(a) || (a = yo(s)), a;
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
  const c = ne(a, u);
  let l = ut(c, s);
  if (l)
    return l;
  const w = localStorage.getItem("user-locale");
  return w != null && w !== Ue && (l = wt(s, Ue, w), l) ? (ct(c, s, l), l) : null;
}, lo = (s, a, u) => {
  const c = ne(s.source.id, $.Translation);
  if (!ii(c)) {
    const w = `lang: ${a}`;
    u = `${u}
${w}`, ri(c);
  }
  return u;
}, co = (s, a, u) => {
  let c = ut(s, a);
  if (c)
    u.text = c;
  else {
    const l = localStorage.getItem("user-locale"), w = Co(u.text);
    w != null && l !== w && (c = wt(a, w, l), c && (ct(s, a, c), u.text = c));
  }
}, wi = {
  beforeSend(s, a) {
    if (ao()) {
      if (s.type === "text") {
        let l = xo();
        s.text = lo(s, l, s.text);
      }
      return s;
    }
    const u = ne(a.conversation.id, $.Agent), c = !ro(u);
    if (s.type === "text" && c) {
      const l = s == null ? void 0 : s.text;
      if (l !== null && l.length > 0) {
        let w = si();
        if (w || (w = Co(s.text), ni(w)), w != null && vo(w)) {
          let g = wt(l, w, Ue);
          g != null && (g = lo(s, w, g), s.text = g, ct(ne(a.conversation.id, $.Translation), g, l));
        }
      }
    }
    return s.type === "formResponse" && c && s.fields.find((x) => x.name === "dataCapture.systemField.requester.email" && x.type === "email") && io(u), s;
  },
  beforeDisplay(s, a) {
    var x, g;
    if (ao())
      return s;
    const u = s.text, c = ((x = s.source) == null ? void 0 : x.type) === "zd:answerBot", l = ((g = s.source) == null ? void 0 : g.type) === "zd:agentWorkspace", w = !ro(ne(a.conversation.id, $.Agent));
    switch (s.type) {
      case "text": {
        if (c) {
          let k = Ae(s.text, a.conversation.id, $.Agent);
          k && (s.text = k);
          const y = s.actions;
          if (y)
            for (const d of y) {
              let O = Ae(d.text, a.conversation.id, $.AnswerBot);
              O && (d.text = O);
            }
        } else if (l) {
          let k = !1, y = !1, d = !1;
          const O = s.displayName === "Automated Response", H = ne(a.conversation.id, $.Agent);
          let D = s;
          !O && D.metadata != null && (k = D.metadata["__zendesk_msg.source_type"] !== null && D.metadata["__zendesk_msg.source_type"] === "sunco_web", y = D.metadata["__zendesk_msg.agent.id"] !== null && D.metadata["__zendesk_msg.agent.id"] === "__trigger", d = y && k), O || d ? co(H, u, s) : w && (io(H), co(H, u, s));
        } else {
          const k = ut(ne(a.conversation.id, $.Translation), s.text);
          k && (s.text = k);
        }
        return s;
      }
      case "carousel": {
        if (c) {
          let k = s;
          for (const y of k.items) {
            const d = Ae(y.title, a.conversation.id, $.Carousel);
            d && (y.title = d);
            const O = Ae(y.description, a.conversation.id, $.Carousel);
            O && (y.description = O);
            for (const H of y.actions) {
              const D = Ae(H.text, a.conversation.id, $.Carousel);
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
        if (c) {
          const k = s;
          if (k.fields.length > 0)
            for (const y of k.fields) {
              const d = Ae(y.label, a.conversation.id, $.Form);
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
  (function(u, c) {
    s.exports = c();
  })(le, function() {
    function u(e, t) {
      var o = l(e, t, "get");
      return w(e, o);
    }
    function c(e, t, o) {
      var n = l(e, t, "set");
      return x(e, n, o), o;
    }
    function l(e, t, o) {
      if (!t.has(e))
        throw new TypeError("attempted to " + o + " private field on non-instance");
      return t.get(e);
    }
    function w(e, t) {
      return t.get ? t.get.call(e) : t.value;
    }
    function x(e, t, o) {
      if (t.set)
        t.set.call(e, o);
      else {
        if (!t.writable)
          throw new TypeError("attempted to set read only private field");
        t.value = o;
      }
    }
    function g(e, t) {
      if (t.has(e))
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
    function k(e, t, o) {
      g(e, t), t.set(e, o);
    }
    const y = 100, d = {}, O = () => {
      d.previousActiveElement instanceof HTMLElement ? (d.previousActiveElement.focus(), d.previousActiveElement = null) : document.body && document.body.focus();
    }, H = (e) => new Promise((t) => {
      if (!e)
        return t();
      const o = window.scrollX, n = window.scrollY;
      d.restoreFocusTimeout = setTimeout(() => {
        O(), t();
      }, y), window.scrollTo(o, n);
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
    }, z = (e) => we(".".concat(e)), C = () => z(i.popup), f = () => z(i.icon), h = () => z(i["icon-content"]), b = () => z(i.title), m = () => z(i["html-container"]), q = () => z(i.image), ee = () => z(i["progress-steps"]), Y = () => z(i["validation-message"]), R = () => (
      /** @type {HTMLButtonElement} */
      we(".".concat(i.actions, " .").concat(i.confirm))
    ), J = () => (
      /** @type {HTMLButtonElement} */
      we(".".concat(i.actions, " .").concat(i.cancel))
    ), N = () => (
      /** @type {HTMLButtonElement} */
      we(".".concat(i.actions, " .").concat(i.deny))
    ), Me = () => z(i["input-label"]), te = () => we(".".concat(i.loader)), fe = () => z(i.actions), He = () => z(i.footer), je = () => z(i["timer-progress-bar"]), Ke = () => z(i.close), ko = `
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
      const e = C();
      if (!e)
        return [];
      const t = e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'), o = Array.from(t).sort((p, A) => {
        const T = parseInt(p.getAttribute("tabindex") || "0"), I = parseInt(A.getAttribute("tabindex") || "0");
        return T > I ? 1 : T < I ? -1 : 0;
      }), n = e.querySelectorAll(ko), r = Array.from(n).filter((p) => p.getAttribute("tabindex") !== "-1");
      return [...new Set(o.concat(r))].filter((p) => W(p));
    }, Ye = () => oe(document.body, i.shown) && !oe(document.body, i["toast-shown"]) && !oe(document.body, i["no-backdrop"]), De = () => {
      const e = C();
      return e ? oe(e, i.toast) : !1;
    }, Ao = () => {
      const e = C();
      return e ? e.hasAttribute("data-loading") : !1;
    }, V = (e, t) => {
      if (e.textContent = "", t) {
        const n = new DOMParser().parseFromString(t, "text/html"), r = n.querySelector("head");
        r && Array.from(r.childNodes).forEach((A) => {
          e.appendChild(A);
        });
        const p = n.querySelector("body");
        p && Array.from(p.childNodes).forEach((A) => {
          A instanceof HTMLVideoElement || A instanceof HTMLAudioElement ? e.appendChild(A.cloneNode(!0)) : e.appendChild(A);
        });
      }
    }, oe = (e, t) => {
      if (!t)
        return !1;
      const o = t.split(/\s+/);
      for (let n = 0; n < o.length; n++)
        if (!e.classList.contains(o[n]))
          return !1;
      return !0;
    }, So = (e, t) => {
      Array.from(e.classList).forEach((o) => {
        !Object.values(i).includes(o) && !Object.values(se).includes(o) && !Object.values(t.showClass || {}).includes(o) && e.classList.remove(o);
      });
    }, U = (e, t, o) => {
      if (So(e, t), t.customClass && t.customClass[o]) {
        if (typeof t.customClass[o] != "string" && !t.customClass[o].forEach) {
          L("Invalid type of customClass.".concat(o, '! Expected string or iterable object, got "').concat(typeof t.customClass[o], '"'));
          return;
        }
        v(e, t.customClass[o]);
      }
    }, qe = (e, t) => {
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
    }, pt = (e, t, o) => {
      !e || !t || (typeof t == "string" && (t = t.split(/\s+/).filter(Boolean)), t.forEach((n) => {
        Array.isArray(e) ? e.forEach((r) => {
          o ? r.classList.add(n) : r.classList.remove(n);
        }) : o ? e.classList.add(n) : e.classList.remove(n);
      }));
    }, v = (e, t) => {
      pt(e, t, !0);
    }, G = (e, t) => {
      pt(e, t, !1);
    }, re = (e, t) => {
      const o = Array.from(e.children);
      for (let n = 0; n < o.length; n++) {
        const r = o[n];
        if (r instanceof HTMLElement && oe(r, t))
          return r;
      }
    }, pe = (e, t, o) => {
      o === "".concat(parseInt(o)) && (o = parseInt(o)), o || parseInt(o) === 0 ? e.style[t] = typeof o == "number" ? "".concat(o, "px") : o : e.style.removeProperty(t);
    }, j = function(e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
      e && (e.style.display = t);
    }, _ = (e) => {
      e && (e.style.display = "none");
    }, Je = function(e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "block";
      e && new MutationObserver(() => {
        Be(e, e.innerHTML, t);
      }).observe(e, {
        childList: !0,
        subtree: !0
      });
    }, ht = (e, t, o, n) => {
      const r = e.querySelector(t);
      r && (r.style[o] = n);
    }, Be = function(e, t) {
      let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
      t ? j(e, o) : _(e);
    }, W = (e) => !!(e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length)), To = () => !W(R()) && !W(N()) && !W(J()), mt = (e) => e.scrollHeight > e.clientHeight, gt = (e) => {
      const t = window.getComputedStyle(e), o = parseFloat(t.getPropertyValue("animation-duration") || "0"), n = parseFloat(t.getPropertyValue("transition-duration") || "0");
      return o > 0 || n > 0;
    }, Ge = function(e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      const o = je();
      o && W(o) && (t && (o.style.transition = "none", o.style.width = "100%"), setTimeout(() => {
        o.style.transition = "width ".concat(e / 1e3, "s linear"), o.style.width = "0%";
      }, 10));
    }, Bo = () => {
      const e = je();
      if (!e)
        return;
      const t = parseInt(window.getComputedStyle(e).width);
      e.style.removeProperty("transition"), e.style.width = "100%";
      const o = parseInt(window.getComputedStyle(e).width), n = t / o * 100;
      e.style.width = "".concat(n, "%");
    }, bt = () => typeof window > "u" || typeof document > "u", Io = `
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
`).replace(/(^|\n)\s*/g, ""), Po = () => {
      const e = M();
      return e ? (e.remove(), G([document.documentElement, document.body], [i["no-backdrop"], i["toast-shown"], i["has-column"]]), !0) : !1;
    }, he = () => {
      d.currentInstance.resetValidationMessage();
    }, Eo = () => {
      const e = C(), t = re(e, i.input), o = re(e, i.file), n = e.querySelector(".".concat(i.range, " input")), r = e.querySelector(".".concat(i.range, " output")), p = re(e, i.select), A = e.querySelector(".".concat(i.checkbox, " input")), T = re(e, i.textarea);
      t.oninput = he, o.onchange = he, p.onchange = he, A.onchange = he, T.oninput = he, n.oninput = () => {
        he(), r.value = n.value;
      }, n.onchange = () => {
        he(), r.value = n.value;
      };
    }, Lo = (e) => typeof e == "string" ? document.querySelector(e) : e, Oo = (e) => {
      const t = C();
      t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true");
    }, Mo = (e) => {
      window.getComputedStyle(e).direction === "rtl" && v(M(), i.rtl);
    }, Ho = (e) => {
      const t = Po();
      if (bt()) {
        F("SweetAlert2 requires document to initialize");
        return;
      }
      const o = document.createElement("div");
      o.className = i.container, t && v(o, i["no-transition"]), V(o, Io);
      const n = Lo(e.target);
      n.appendChild(o), Oo(e), Mo(n), Eo();
    }, Qe = (e, t) => {
      e instanceof HTMLElement ? t.appendChild(e) : typeof e == "object" ? jo(e, t) : e && V(t, e);
    }, jo = (e, t) => {
      e.jquery ? Do(t, e) : V(t, e.toString());
    }, Do = (e, t) => {
      if (e.textContent = "", 0 in t)
        for (let o = 0; o in t; o++)
          e.appendChild(t[o].cloneNode(!0));
      else
        e.appendChild(t.cloneNode(!0));
    }, me = (() => {
      if (bt())
        return !1;
      const e = document.createElement("div");
      return typeof e.style.webkitAnimation < "u" ? "webkitAnimationEnd" : typeof e.style.animation < "u" ? "animationend" : !1;
    })(), qo = (e, t) => {
      const o = fe(), n = te();
      !o || !n || (!t.showConfirmButton && !t.showDenyButton && !t.showCancelButton ? _(o) : j(o), U(o, t, "actions"), _o(o, n, t), V(n, t.loaderHtml || ""), U(n, t, "loader"));
    };
    function _o(e, t, o) {
      const n = R(), r = N(), p = J();
      !n || !r || !p || (et(n, "confirm", o), et(r, "deny", o), et(p, "cancel", o), zo(n, r, p, o), o.reverseButtons && (o.toast ? (e.insertBefore(p, n), e.insertBefore(r, n)) : (e.insertBefore(p, t), e.insertBefore(r, t), e.insertBefore(n, t))));
    }
    function zo(e, t, o, n) {
      if (!n.buttonsStyling) {
        G([e, t, o], i.styled);
        return;
      }
      v([e, t, o], i.styled), n.confirmButtonColor && (e.style.backgroundColor = n.confirmButtonColor, v(e, i["default-outline"])), n.denyButtonColor && (t.style.backgroundColor = n.denyButtonColor, v(t, i["default-outline"])), n.cancelButtonColor && (o.style.backgroundColor = n.cancelButtonColor, v(o, i["default-outline"]));
    }
    function et(e, t, o) {
      const n = (
        /** @type {'Confirm' | 'Deny' | 'Cancel'} */
        ie(t)
      );
      Be(e, o["show".concat(n, "Button")], "inline-block"), V(e, o["".concat(t, "ButtonText")] || ""), e.setAttribute("aria-label", o["".concat(t, "ButtonAriaLabel")] || ""), e.className = i[t], U(e, o, "".concat(t, "Button"));
    }
    const Fo = (e, t) => {
      const o = Ke();
      o && (V(o, t.closeButtonHtml || ""), U(o, t, "closeButton"), Be(o, t.showCloseButton), o.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
    }, Ro = (e, t) => {
      const o = M();
      o && (Vo(o, t.backdrop), Wo(o, t.position), $o(o, t.grow), U(o, t, "container"));
    };
    function Vo(e, t) {
      typeof t == "string" ? e.style.background = t : t || v([document.documentElement, document.body], i["no-backdrop"]);
    }
    function Wo(e, t) {
      t && (t in i ? v(e, i[t]) : (L('The "position" parameter is not valid, defaulting to "center"'), v(e, i.center)));
    }
    function $o(e, t) {
      t && v(e, i["grow-".concat(t)]);
    }
    var S = {
      innerParams: /* @__PURE__ */ new WeakMap(),
      domCache: /* @__PURE__ */ new WeakMap()
    };
    const No = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], Uo = (e, t) => {
      const o = C();
      if (!o)
        return;
      const n = S.innerParams.get(e), r = !n || t.input !== n.input;
      No.forEach((p) => {
        const A = re(o, i[p]);
        A && (Xo(p, t.inputAttributes), A.className = i[p], r && _(A));
      }), t.input && (r && Zo(t), Yo(t));
    }, Zo = (e) => {
      if (!e.input)
        return;
      if (!P[e.input]) {
        F("Unexpected type of input! Expected ".concat(Object.keys(P).join(" | "), ', got "').concat(e.input, '"'));
        return;
      }
      const t = yt(e.input), o = P[e.input](t, e);
      j(t), e.inputAutoFocus && setTimeout(() => {
        ft(o);
      });
    }, Ko = (e) => {
      for (let t = 0; t < e.attributes.length; t++) {
        const o = e.attributes[t].name;
        ["id", "type", "value", "style"].includes(o) || e.removeAttribute(o);
      }
    }, Xo = (e, t) => {
      const o = qe(C(), e);
      if (o) {
        Ko(o);
        for (const n in t)
          o.setAttribute(n, t[n]);
      }
    }, Yo = (e) => {
      const t = yt(e.input);
      typeof e.customClass == "object" && v(t, e.customClass.input);
    }, tt = (e, t) => {
      (!e.placeholder || t.inputPlaceholder) && (e.placeholder = t.inputPlaceholder);
    }, Ie = (e, t, o) => {
      if (o.inputLabel) {
        const n = document.createElement("label"), r = i["input-label"];
        n.setAttribute("for", e.id), n.className = r, typeof o.customClass == "object" && v(n, o.customClass.inputLabel), n.innerText = o.inputLabel, t.insertAdjacentElement("beforebegin", n);
      }
    }, yt = (e) => re(C(), i[e] || i.input), _e = (e, t) => {
      ["string", "number"].includes(typeof t) ? e.value = "".concat(t) : Te(t) || L('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t, '"'));
    }, P = {};
    P.text = P.email = P.password = P.number = P.tel = P.url = P.search = P.date = P["datetime-local"] = P.time = P.week = P.month = (e, t) => (_e(e, t.inputValue), Ie(e, e, t), tt(e, t), e.type = t.input, e), P.file = (e, t) => (Ie(e, e, t), tt(e, t), e), P.range = (e, t) => {
      const o = e.querySelector("input"), n = e.querySelector("output");
      return _e(o, t.inputValue), o.type = t.input, _e(n, t.inputValue), Ie(o, e, t), e;
    }, P.select = (e, t) => {
      if (e.textContent = "", t.inputPlaceholder) {
        const o = document.createElement("option");
        V(o, t.inputPlaceholder), o.value = "", o.disabled = !0, o.selected = !0, e.appendChild(o);
      }
      return Ie(e, e, t), e;
    }, P.radio = (e) => (e.textContent = "", e), P.checkbox = (e, t) => {
      const o = qe(C(), "checkbox");
      o.value = "1", o.checked = Boolean(t.inputValue);
      const n = e.querySelector("span");
      return V(n, t.inputPlaceholder), o;
    }, P.textarea = (e, t) => {
      _e(e, t.inputValue), tt(e, t), Ie(e, e, t);
      const o = (n) => parseInt(window.getComputedStyle(n).marginLeft) + parseInt(window.getComputedStyle(n).marginRight);
      return setTimeout(() => {
        if ("MutationObserver" in window) {
          const n = parseInt(window.getComputedStyle(C()).width), r = () => {
            if (!document.body.contains(e))
              return;
            const p = e.offsetWidth + o(e);
            p > n ? C().style.width = "".concat(p, "px") : pe(C(), "width", t.width);
          };
          new MutationObserver(r).observe(e, {
            attributes: !0,
            attributeFilter: ["style"]
          });
        }
      }), e;
    };
    const Jo = (e, t) => {
      const o = m();
      o && (Je(o), U(o, t, "htmlContainer"), t.html ? (Qe(t.html, o), j(o, "block")) : t.text ? (o.textContent = t.text, j(o, "block")) : _(o), Uo(e, t));
    }, Go = (e, t) => {
      const o = He();
      o && (Je(o), Be(o, t.footer, "block"), t.footer && Qe(t.footer, o), U(o, t, "footer"));
    }, Qo = (e, t) => {
      const o = S.innerParams.get(e), n = f();
      if (n) {
        if (o && t.icon === o.icon) {
          xt(n, t), vt(n, t);
          return;
        }
        if (!t.icon && !t.iconHtml) {
          _(n);
          return;
        }
        if (t.icon && Object.keys(se).indexOf(t.icon) === -1) {
          F('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon, '"')), _(n);
          return;
        }
        j(n), xt(n, t), vt(n, t), v(n, t.showClass && t.showClass.icon);
      }
    }, vt = (e, t) => {
      for (const [o, n] of Object.entries(se))
        t.icon !== o && G(e, n);
      v(e, t.icon && se[t.icon]), nn(e, t), en(), U(e, t, "icon");
    }, en = () => {
      const e = C();
      if (!e)
        return;
      const t = window.getComputedStyle(e).getPropertyValue("background-color"), o = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
      for (let n = 0; n < o.length; n++)
        o[n].style.backgroundColor = t;
    }, tn = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`, on = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`, xt = (e, t) => {
      if (!t.icon && !t.iconHtml)
        return;
      let o = e.innerHTML, n = "";
      t.iconHtml ? n = Ct(t.iconHtml) : t.icon === "success" ? (n = tn, o = o.replace(/ style=".*?"/g, "")) : t.icon === "error" ? n = on : t.icon && (n = Ct({
        question: "?",
        warning: "!",
        info: "i"
      }[t.icon])), o.trim() !== n.trim() && V(e, n);
    }, nn = (e, t) => {
      if (t.iconColor) {
        e.style.color = t.iconColor, e.style.borderColor = t.iconColor;
        for (const o of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"])
          ht(e, o, "backgroundColor", t.iconColor);
        ht(e, ".swal2-success-ring", "borderColor", t.iconColor);
      }
    }, Ct = (e) => '<div class="'.concat(i["icon-content"], '">').concat(e, "</div>"), sn = (e, t) => {
      const o = q();
      if (o) {
        if (!t.imageUrl) {
          _(o);
          return;
        }
        j(o, ""), o.setAttribute("src", t.imageUrl), o.setAttribute("alt", t.imageAlt || ""), pe(o, "width", t.imageWidth), pe(o, "height", t.imageHeight), o.className = i.image, U(o, t, "image");
      }
    }, rn = (e, t) => {
      const o = M(), n = C();
      if (!(!o || !n)) {
        if (t.toast) {
          pe(o, "width", t.width), n.style.width = "100%";
          const r = te();
          r && n.insertBefore(r, f());
        } else
          pe(n, "width", t.width);
        pe(n, "padding", t.padding), t.color && (n.style.color = t.color), t.background && (n.style.background = t.background), _(Y()), an(n, t);
      }
    }, an = (e, t) => {
      const o = t.showClass || {};
      e.className = "".concat(i.popup, " ").concat(W(e) ? o.popup : ""), t.toast ? (v([document.documentElement, document.body], i["toast-shown"]), v(e, i.toast)) : v(e, i.modal), U(e, t, "popup"), typeof t.customClass == "string" && v(e, t.customClass), t.icon && v(e, i["icon-".concat(t.icon)]);
    }, ln = (e, t) => {
      const o = ee();
      if (!o)
        return;
      const {
        progressSteps: n,
        currentProgressStep: r
      } = t;
      if (!n || n.length === 0 || r === void 0) {
        _(o);
        return;
      }
      j(o), o.textContent = "", r >= n.length && L("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), n.forEach((p, A) => {
        const T = cn(p);
        if (o.appendChild(T), A === r && v(T, i["active-progress-step"]), A !== n.length - 1) {
          const I = un(t);
          o.appendChild(I);
        }
      });
    }, cn = (e) => {
      const t = document.createElement("li");
      return v(t, i["progress-step"]), V(t, e), t;
    }, un = (e) => {
      const t = document.createElement("li");
      return v(t, i["progress-step-line"]), e.progressStepsDistance && pe(t, "width", e.progressStepsDistance), t;
    }, dn = (e, t) => {
      const o = b();
      o && (Je(o), Be(o, t.title || t.titleText, "block"), t.title && Qe(t.title, o), t.titleText && (o.innerText = t.titleText), U(o, t, "title"));
    }, kt = (e, t) => {
      rn(e, t), Ro(e, t), ln(e, t), Qo(e, t), sn(e, t), dn(e, t), Fo(e, t), Jo(e, t), qo(e, t), Go(e, t);
      const o = C();
      typeof t.didRender == "function" && o && t.didRender(o);
    }, wn = () => W(C()), At = () => {
      var e;
      return (e = R()) === null || e === void 0 ? void 0 : e.click();
    }, fn = () => {
      var e;
      return (e = N()) === null || e === void 0 ? void 0 : e.click();
    }, pn = () => {
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
    }, hn = (e, t, o) => {
      St(e), t.toast || (e.keydownHandler = (n) => gn(t, n, o), e.keydownTarget = t.keydownListenerCapture ? window : C(), e.keydownListenerCapture = t.keydownListenerCapture, e.keydownTarget.addEventListener("keydown", e.keydownHandler, {
        capture: e.keydownListenerCapture
      }), e.keydownHandlerAdded = !0);
    }, ot = (e, t) => {
      var o;
      const n = Xe();
      if (n.length) {
        e = e + t, e === n.length ? e = 0 : e === -1 && (e = n.length - 1), n[e].focus();
        return;
      }
      (o = C()) === null || o === void 0 || o.focus();
    }, Tt = ["ArrowRight", "ArrowDown"], mn = ["ArrowLeft", "ArrowUp"], gn = (e, t, o) => {
      e && (t.isComposing || t.keyCode === 229 || (e.stopKeydownPropagation && t.stopPropagation(), t.key === "Enter" ? bn(t, e) : t.key === "Tab" ? yn(t) : [...Tt, ...mn].includes(t.key) ? vn(t.key) : t.key === "Escape" && xn(t, e, o)));
    }, bn = (e, t) => {
      if (!X(t.allowEnterKey))
        return;
      const o = qe(C(), t.input);
      if (e.target && o && e.target instanceof HTMLElement && e.target.outerHTML === o.outerHTML) {
        if (["textarea", "file"].includes(t.input))
          return;
        At(), e.preventDefault();
      }
    }, yn = (e) => {
      const t = e.target, o = Xe();
      let n = -1;
      for (let r = 0; r < o.length; r++)
        if (t === o[r]) {
          n = r;
          break;
        }
      e.shiftKey ? ot(n, -1) : ot(n, 1), e.stopPropagation(), e.preventDefault();
    }, vn = (e) => {
      const t = fe(), o = R(), n = N(), r = J();
      if (!t || !o || !n || !r)
        return;
      const p = [o, n, r];
      if (document.activeElement instanceof HTMLElement && !p.includes(document.activeElement))
        return;
      const A = Tt.includes(e) ? "nextElementSibling" : "previousElementSibling";
      let T = document.activeElement;
      if (T) {
        for (let I = 0; I < t.children.length; I++) {
          if (T = T[A], !T)
            return;
          if (T instanceof HTMLButtonElement && W(T))
            break;
        }
        T instanceof HTMLButtonElement && T.focus();
      }
    }, xn = (e, t, o) => {
      X(t.allowEscapeKey) && (e.preventDefault(), o(be.esc));
    };
    var Pe = {
      swalPromiseResolve: /* @__PURE__ */ new WeakMap(),
      swalPromiseReject: /* @__PURE__ */ new WeakMap()
    };
    const Cn = () => {
      Array.from(document.body.children).forEach((t) => {
        t === M() || t.contains(M()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden") || ""), t.setAttribute("aria-hidden", "true"));
      });
    }, Bt = () => {
      Array.from(document.body.children).forEach((t) => {
        t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden") || ""), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden");
      });
    }, It = typeof window < "u" && !!window.GestureEvent, kn = () => {
      if (It && !oe(document.body, i.iosfix)) {
        const e = document.body.scrollTop;
        document.body.style.top = "".concat(e * -1, "px"), v(document.body, i.iosfix), An();
      }
    }, An = () => {
      const e = M();
      if (!e)
        return;
      let t;
      e.ontouchstart = (o) => {
        t = Sn(o);
      }, e.ontouchmove = (o) => {
        t && (o.preventDefault(), o.stopPropagation());
      };
    }, Sn = (e) => {
      const t = e.target, o = M(), n = m();
      return !o || !n || Tn(e) || Bn(e) ? !1 : t === o || !mt(o) && t instanceof HTMLElement && t.tagName !== "INPUT" && // #1603
      t.tagName !== "TEXTAREA" && // #2266
      !(mt(n) && // #1944
      n.contains(t));
    }, Tn = (e) => e.touches && e.touches.length && e.touches[0].touchType === "stylus", Bn = (e) => e.touches && e.touches.length > 1, In = () => {
      if (oe(document.body, i.iosfix)) {
        const e = parseInt(document.body.style.top, 10);
        G(document.body, i.iosfix), document.body.style.top = "", document.body.scrollTop = e * -1;
      }
    }, Pn = () => {
      const e = document.createElement("div");
      e.className = i["scrollbar-measure"], document.body.appendChild(e);
      const t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    };
    let ye = null;
    const En = (e) => {
      ye === null && (document.body.scrollHeight > window.innerHeight || e === "scroll") && (ye = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(ye + Pn(), "px"));
    }, Ln = () => {
      ye !== null && (document.body.style.paddingRight = "".concat(ye, "px"), ye = null);
    };
    function Pt(e, t, o, n) {
      De() ? Lt(e, n) : (H(o).then(() => Lt(e, n)), St(d)), It ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), Ye() && (Ln(), In(), Bt()), On();
    }
    function On() {
      G([document.documentElement, document.body], [i.shown, i["height-auto"], i["no-backdrop"], i["toast-shown"]]);
    }
    function ae(e) {
      e = Hn(e);
      const t = Pe.swalPromiseResolve.get(this), o = Mn(this);
      this.isAwaitingPromise ? e.isDismissed || (Ee(this), t(e)) : o && t(e);
    }
    const Mn = (e) => {
      const t = C();
      if (!t)
        return !1;
      const o = S.innerParams.get(e);
      if (!o || oe(t, o.hideClass.popup))
        return !1;
      G(t, o.showClass.popup), v(t, o.hideClass.popup);
      const n = M();
      return G(n, o.showClass.backdrop), v(n, o.hideClass.backdrop), jn(e, t, o), !0;
    };
    function Et(e) {
      const t = Pe.swalPromiseReject.get(this);
      Ee(this), t && t(e);
    }
    const Ee = (e) => {
      e.isAwaitingPromise && (delete e.isAwaitingPromise, S.innerParams.get(e) || e._destroy());
    }, Hn = (e) => typeof e > "u" ? {
      isConfirmed: !1,
      isDenied: !1,
      isDismissed: !0
    } : Object.assign({
      isConfirmed: !1,
      isDenied: !1,
      isDismissed: !1
    }, e), jn = (e, t, o) => {
      const n = M(), r = me && gt(t);
      typeof o.willClose == "function" && o.willClose(t), r ? Dn(e, t, n, o.returnFocus, o.didClose) : Pt(e, n, o.returnFocus, o.didClose);
    }, Dn = (e, t, o, n, r) => {
      me && (d.swalCloseEventFinishedCallback = Pt.bind(null, e, o, n, r), t.addEventListener(me, function(p) {
        p.target === t && (d.swalCloseEventFinishedCallback(), delete d.swalCloseEventFinishedCallback);
      }));
    }, Lt = (e, t) => {
      setTimeout(() => {
        typeof t == "function" && t.bind(e.params)(), e._destroy && e._destroy();
      });
    }, ve = (e) => {
      let t = C();
      if (t || new We(), t = C(), !t)
        return;
      const o = te();
      De() ? _(f()) : qn(t, e), j(o), t.setAttribute("data-loading", "true"), t.setAttribute("aria-busy", "true"), t.focus();
    }, qn = (e, t) => {
      const o = fe(), n = te();
      !o || !n || (!t && W(R()) && (t = R()), j(o), t && (_(t), n.setAttribute("data-button-to-replace", t.className), o.insertBefore(n, t)), v([e, o], i.loading));
    }, _n = (e, t) => {
      t.input === "select" || t.input === "radio" ? Wn(e, t) : ["text", "email", "number", "tel", "textarea"].some((o) => o === t.input) && (ue(t.inputValue) || Te(t.inputValue)) && (ve(R()), $n(e, t));
    }, zn = (e, t) => {
      const o = e.getInput();
      if (!o)
        return null;
      switch (t.input) {
        case "checkbox":
          return Fn(o);
        case "radio":
          return Rn(o);
        case "file":
          return Vn(o);
        default:
          return t.inputAutoTrim ? o.value.trim() : o.value;
      }
    }, Fn = (e) => e.checked ? 1 : 0, Rn = (e) => e.checked ? e.value : null, Vn = (e) => e.files && e.files.length ? e.getAttribute("multiple") !== null ? e.files : e.files[0] : null, Wn = (e, t) => {
      const o = C();
      if (!o)
        return;
      const n = (r) => {
        t.input === "select" ? Nn(o, ze(r), t) : t.input === "radio" && Un(o, ze(r), t);
      };
      ue(t.inputOptions) || Te(t.inputOptions) ? (ve(R()), de(t.inputOptions).then((r) => {
        e.hideLoading(), n(r);
      })) : typeof t.inputOptions == "object" ? n(t.inputOptions) : F("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof t.inputOptions));
    }, $n = (e, t) => {
      const o = e.getInput();
      o && (_(o), de(t.inputValue).then((n) => {
        o.value = t.input === "number" ? "".concat(parseFloat(n) || 0) : "".concat(n), j(o), o.focus(), e.hideLoading();
      }).catch((n) => {
        F("Error in inputValue promise: ".concat(n)), o.value = "", j(o), o.focus(), e.hideLoading();
      }));
    };
    function Nn(e, t, o) {
      const n = re(e, i.select);
      if (!n)
        return;
      const r = (p, A, T) => {
        const I = document.createElement("option");
        I.value = T, V(I, A), I.selected = Ot(T, o.inputValue), p.appendChild(I);
      };
      t.forEach((p) => {
        const A = p[0], T = p[1];
        if (Array.isArray(T)) {
          const I = document.createElement("optgroup");
          I.label = A, I.disabled = !1, n.appendChild(I), T.forEach((Ce) => r(I, Ce[1], Ce[0]));
        } else
          r(n, T, A);
      }), n.focus();
    }
    function Un(e, t, o) {
      const n = re(e, i.radio);
      if (!n)
        return;
      t.forEach((p) => {
        const A = p[0], T = p[1], I = document.createElement("input"), Ce = document.createElement("label");
        I.type = "radio", I.name = i.radio, I.value = A, Ot(A, o.inputValue) && (I.checked = !0);
        const at = document.createElement("span");
        V(at, T), at.className = i.label, Ce.appendChild(I), Ce.appendChild(at), n.appendChild(Ce);
      });
      const r = n.querySelectorAll("input");
      r.length && r[0].focus();
    }
    const ze = (e) => {
      const t = [];
      return e instanceof Map ? e.forEach((o, n) => {
        let r = o;
        typeof r == "object" && (r = ze(r)), t.push([n, r]);
      }) : Object.keys(e).forEach((o) => {
        let n = e[o];
        typeof n == "object" && (n = ze(n)), t.push([o, n]);
      }), t;
    }, Ot = (e, t) => !!t && t.toString() === e.toString(), Zn = (e) => {
      const t = S.innerParams.get(e);
      e.disableButtons(), t.input ? Mt(e, "confirm") : st(e, !0);
    }, Kn = (e) => {
      const t = S.innerParams.get(e);
      e.disableButtons(), t.returnInputValueOnDeny ? Mt(e, "deny") : nt(e, !1);
    }, Xn = (e, t) => {
      e.disableButtons(), t(be.cancel);
    }, Mt = (e, t) => {
      const o = S.innerParams.get(e);
      if (!o.input) {
        F('The "input" parameter is needed to be set when using returnInputValueOn'.concat(ie(t)));
        return;
      }
      const n = e.getInput(), r = zn(e, o);
      o.inputValidator ? Yn(e, r, t) : n && !n.checkValidity() ? (e.enableButtons(), e.showValidationMessage(o.validationMessage)) : t === "deny" ? nt(e, r) : st(e, r);
    }, Yn = (e, t, o) => {
      const n = S.innerParams.get(e);
      e.disableInput(), Promise.resolve().then(() => de(n.inputValidator(t, n.validationMessage))).then((p) => {
        e.enableButtons(), e.enableInput(), p ? e.showValidationMessage(p) : o === "deny" ? nt(e, t) : st(e, t);
      });
    }, nt = (e, t) => {
      const o = S.innerParams.get(e || void 0);
      o.showLoaderOnDeny && ve(N()), o.preDeny ? (e.isAwaitingPromise = !0, Promise.resolve().then(() => de(o.preDeny(t, o.validationMessage))).then((r) => {
        r === !1 ? (e.hideLoading(), Ee(e)) : e.close({
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
      const o = S.innerParams.get(e || void 0);
      o.showLoaderOnConfirm && ve(), o.preConfirm ? (e.resetValidationMessage(), e.isAwaitingPromise = !0, Promise.resolve().then(() => de(o.preConfirm(t, o.validationMessage))).then((r) => {
        W(Y()) || r === !1 ? (e.hideLoading(), Ee(e)) : Ht(e, typeof r > "u" ? t : r);
      }).catch((r) => jt(e || void 0, r))) : Ht(e, t);
    };
    function Fe() {
      const e = S.innerParams.get(this);
      if (!e)
        return;
      const t = S.domCache.get(this);
      _(t.loader), De() ? e.icon && j(f()) : Jn(t), G([t.popup, t.actions], i.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.denyButton.disabled = !1, t.cancelButton.disabled = !1;
    }
    const Jn = (e) => {
      const t = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));
      t.length ? j(t[0], "inline-block") : To() && _(e.actions);
    };
    function Dt() {
      const e = S.innerParams.get(this), t = S.domCache.get(this);
      return t ? qe(t.popup, e.input) : null;
    }
    function qt(e, t, o) {
      const n = S.domCache.get(e);
      t.forEach((r) => {
        n[r].disabled = o;
      });
    }
    function _t(e, t) {
      const o = C();
      if (!(!o || !e))
        if (e.type === "radio") {
          const n = o.querySelectorAll('[name="'.concat(i.radio, '"]'));
          for (let r = 0; r < n.length; r++)
            n[r].disabled = t;
        } else
          e.disabled = t;
    }
    function zt() {
      qt(this, ["confirmButton", "denyButton", "cancelButton"], !1);
    }
    function Ft() {
      qt(this, ["confirmButton", "denyButton", "cancelButton"], !0);
    }
    function Rt() {
      _t(this.getInput(), !1);
    }
    function Vt() {
      _t(this.getInput(), !0);
    }
    function Wt(e) {
      const t = S.domCache.get(this), o = S.innerParams.get(this);
      V(t.validationMessage, e), t.validationMessage.className = i["validation-message"], o.customClass && o.customClass.validationMessage && v(t.validationMessage, o.customClass.validationMessage), j(t.validationMessage);
      const n = this.getInput();
      n && (n.setAttribute("aria-invalid", "true"), n.setAttribute("aria-describedby", i["validation-message"]), ft(n), v(n, i.inputerror));
    }
    function $t() {
      const e = S.domCache.get(this);
      e.validationMessage && _(e.validationMessage);
      const t = this.getInput();
      t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedby"), G(t, i.inputerror));
    }
    const xe = {
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
    }, Gn = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"], Qn = {}, es = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"], Nt = (e) => Object.prototype.hasOwnProperty.call(xe, e), Ut = (e) => Gn.indexOf(e) !== -1, Zt = (e) => Qn[e], ts = (e) => {
      Nt(e) || L('Unknown parameter "'.concat(e, '"'));
    }, os = (e) => {
      es.includes(e) && L('The parameter "'.concat(e, '" is incompatible with toasts'));
    }, ns = (e) => {
      const t = Zt(e);
      t && Ze(e, t);
    }, ss = (e) => {
      e.backdrop === !1 && e.allowOutsideClick && L('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
      for (const t in e)
        ts(t), e.toast && os(t), ns(t);
    };
    function Kt(e) {
      const t = C(), o = S.innerParams.get(this);
      if (!t || oe(t, o.hideClass.popup)) {
        L("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
        return;
      }
      const n = is(e), r = Object.assign({}, o, n);
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
      return Object.keys(e).forEach((o) => {
        Ut(o) ? t[o] = e[o] : L("Invalid parameter to update: ".concat(o));
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
      e.isAwaitingPromise ? (it(S, e), e.isAwaitingPromise = !0) : (it(Pe, e), it(S, e), delete e.isAwaitingPromise, delete e.disableButtons, delete e.enableButtons, delete e.getInput, delete e.disableInput, delete e.enableInput, delete e.hideLoading, delete e.disableLoading, delete e.showValidationMessage, delete e.resetValidationMessage, delete e.close, delete e.closePopup, delete e.closeModal, delete e.closeToast, delete e.rejectPromise, delete e.update, delete e._destroy);
    }, it = (e, t) => {
      for (const o in e)
        e[o].delete(t);
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
      handleAwaitingPromise: Ee,
      hideLoading: Fe,
      rejectPromise: Et,
      resetValidationMessage: $t,
      showValidationMessage: Wt,
      update: Kt
    });
    const ls = (e, t, o) => {
      e.toast ? cs(e, t, o) : (ds(t), ws(t), fs(e, t, o));
    }, cs = (e, t, o) => {
      t.popup.onclick = () => {
        e && (us(e) || e.timer || e.input) || o(be.close);
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
    }, fs = (e, t, o) => {
      t.container.onclick = (n) => {
        if (Re) {
          Re = !1;
          return;
        }
        n.target === t.container && X(e.allowOutsideClick) && o(be.backdrop);
      };
    }, ps = (e) => typeof e == "object" && e.jquery, Jt = (e) => e instanceof Element || ps(e), hs = (e) => {
      const t = {};
      return typeof e[0] == "object" && !Jt(e[0]) ? Object.assign(t, e[0]) : ["title", "html", "icon"].forEach((o, n) => {
        const r = e[n];
        typeof r == "string" || Jt(r) ? t[o] = r : r !== void 0 && F("Unexpected type of ".concat(o, '! Expected "string" or "Element", got ').concat(typeof r));
      }), t;
    };
    function ms() {
      const e = this;
      for (var t = arguments.length, o = new Array(t), n = 0; n < t; n++)
        o[n] = arguments[n];
      return new e(...o);
    }
    function gs(e) {
      class t extends this {
        _main(n, r) {
          return super._main(n, Object.assign({}, e, r));
        }
      }
      return t;
    }
    const bs = () => d.timeout && d.timeout.getTimerLeft(), Gt = () => {
      if (d.timeout)
        return Bo(), d.timeout.stop();
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
    }, xs = () => !!(d.timeout && d.timeout.isRunning());
    let eo = !1;
    const rt = {};
    function Cs() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
      rt[e] = this, eo || (document.body.addEventListener("click", ks), eo = !0);
    }
    const ks = (e) => {
      for (let t = e.target; t && t !== document; t = t.parentNode)
        for (const o in rt) {
          const n = t.getAttribute(o);
          if (n) {
            rt[o].fire({
              template: n
            });
            return;
          }
        }
    };
    var As = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      argsToParams: hs,
      bindClickHandler: Cs,
      clickCancel: pn,
      clickConfirm: At,
      clickDeny: fn,
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
      getImage: q,
      getInputLabel: Me,
      getLoader: te,
      getPopup: C,
      getProgressSteps: ee,
      getTimerLeft: bs,
      getTimerProgressBar: je,
      getTitle: b,
      getValidationMessage: Y,
      increaseTimer: vs,
      isDeprecatedParameter: Zt,
      isLoading: Ao,
      isTimerRunning: xs,
      isUpdatableParameter: Ut,
      isValidParameter: Nt,
      isVisible: wn,
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
      constructor(t, o) {
        this.callback = t, this.remaining = o, this.running = !1, this.start();
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
        const o = this.running;
        return o && this.stop(), this.remaining += t, o && this.start(), this.remaining;
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
    const to = ["swal-title", "swal-html", "swal-footer"], Ts = (e) => {
      const t = typeof e.template == "string" ? document.querySelector(e.template) : e.template;
      if (!t)
        return {};
      const o = t.content;
      return Hs(o), Object.assign(Bs(o), Is(o), Ps(o), Es(o), Ls(o), Os(o), Ms(o, to));
    }, Bs = (e) => {
      const t = {};
      return Array.from(e.querySelectorAll("swal-param")).forEach((n) => {
        ge(n, ["name", "value"]);
        const r = n.getAttribute("name"), p = n.getAttribute("value");
        typeof xe[r] == "boolean" ? t[r] = p !== "false" : typeof xe[r] == "object" ? t[r] = JSON.parse(p) : t[r] = p;
      }), t;
    }, Is = (e) => {
      const t = {};
      return Array.from(e.querySelectorAll("swal-function-param")).forEach((n) => {
        const r = n.getAttribute("name"), p = n.getAttribute("value");
        t[r] = new Function("return ".concat(p))();
      }), t;
    }, Ps = (e) => {
      const t = {};
      return Array.from(e.querySelectorAll("swal-button")).forEach((n) => {
        ge(n, ["type", "color", "aria-label"]);
        const r = n.getAttribute("type");
        t["".concat(r, "ButtonText")] = n.innerHTML, t["show".concat(ie(r), "Button")] = !0, n.hasAttribute("color") && (t["".concat(r, "ButtonColor")] = n.getAttribute("color")), n.hasAttribute("aria-label") && (t["".concat(r, "ButtonAriaLabel")] = n.getAttribute("aria-label"));
      }), t;
    }, Es = (e) => {
      const t = {}, o = e.querySelector("swal-image");
      return o && (ge(o, ["src", "width", "height", "alt"]), o.hasAttribute("src") && (t.imageUrl = o.getAttribute("src")), o.hasAttribute("width") && (t.imageWidth = o.getAttribute("width")), o.hasAttribute("height") && (t.imageHeight = o.getAttribute("height")), o.hasAttribute("alt") && (t.imageAlt = o.getAttribute("alt"))), t;
    }, Ls = (e) => {
      const t = {}, o = e.querySelector("swal-icon");
      return o && (ge(o, ["type", "color"]), o.hasAttribute("type") && (t.icon = o.getAttribute("type")), o.hasAttribute("color") && (t.iconColor = o.getAttribute("color")), t.iconHtml = o.innerHTML), t;
    }, Os = (e) => {
      const t = {}, o = e.querySelector("swal-input");
      o && (ge(o, ["type", "label", "placeholder", "value"]), t.input = o.getAttribute("type") || "text", o.hasAttribute("label") && (t.inputLabel = o.getAttribute("label")), o.hasAttribute("placeholder") && (t.inputPlaceholder = o.getAttribute("placeholder")), o.hasAttribute("value") && (t.inputValue = o.getAttribute("value")));
      const n = Array.from(e.querySelectorAll("swal-input-option"));
      return n.length && (t.inputOptions = {}, n.forEach((r) => {
        ge(r, ["value"]);
        const p = r.getAttribute("value"), A = r.innerHTML;
        t.inputOptions[p] = A;
      })), t;
    }, Ms = (e, t) => {
      const o = {};
      for (const n in t) {
        const r = t[n], p = e.querySelector(r);
        p && (ge(p, []), o[r.replace(/^swal-/, "")] = p.innerHTML.trim());
      }
      return o;
    }, Hs = (e) => {
      const t = to.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
      Array.from(e.children).forEach((o) => {
        const n = o.tagName.toLowerCase();
        t.includes(n) || L("Unrecognized element <".concat(n, ">"));
      });
    }, ge = (e, t) => {
      Array.from(e.attributes).forEach((o) => {
        t.indexOf(o.name) === -1 && L(['Unrecognized attribute "'.concat(o.name, '" on <').concat(e.tagName.toLowerCase(), ">."), "".concat(t.length ? "Allowed attributes are: ".concat(t.join(", ")) : "To set the value, use HTML within the element.")]);
      });
    }, oo = 10, js = (e) => {
      const t = M(), o = C();
      typeof e.willOpen == "function" && e.willOpen(o);
      const r = window.getComputedStyle(document.body).overflowY;
      _s(t, o, e), setTimeout(() => {
        Ds(t, o);
      }, oo), Ye() && (qs(t, e.scrollbarPadding, r), Cn()), !De() && !d.previousActiveElement && (d.previousActiveElement = document.activeElement), typeof e.didOpen == "function" && setTimeout(() => e.didOpen(o)), G(t, i["no-transition"]);
    }, no = (e) => {
      const t = C();
      if (e.target !== t || !me)
        return;
      const o = M();
      t.removeEventListener(me, no), o.style.overflowY = "auto";
    }, Ds = (e, t) => {
      me && gt(t) ? (e.style.overflowY = "hidden", t.addEventListener(me, no)) : e.style.overflowY = "auto";
    }, qs = (e, t, o) => {
      kn(), t && o !== "hidden" && En(o), setTimeout(() => {
        e.scrollTop = 0;
      });
    }, _s = (e, t, o) => {
      v(e, o.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), j(t, "grid"), setTimeout(() => {
        v(t, o.showClass.popup), t.style.removeProperty("opacity");
      }, oo), v([document.documentElement, document.body], i.shown), o.heightAuto && o.backdrop && !o.toast && v([document.documentElement, document.body], i["height-auto"]);
    };
    var so = {
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
      e.inputValidator || (e.input === "email" && (e.inputValidator = so.email), e.input === "url" && (e.inputValidator = so.url));
    }
    function Fs(e) {
      (!e.target || typeof e.target == "string" && !document.querySelector(e.target) || typeof e.target != "string" && !e.target.appendChild) && (L('Target parameter is not valid, defaulting to "body"'), e.target = "body");
    }
    function Rs(e) {
      zs(e), e.showLoaderOnConfirm && !e.preConfirm && L(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Fs(e), typeof e.title == "string" && (e.title = e.title.split(`
`).join("<br />")), Ho(e);
    }
    let Q;
    var Ve = /* @__PURE__ */ new WeakMap();
    class E {
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
        for (var t = arguments.length, o = new Array(t), n = 0; n < t; n++)
          o[n] = arguments[n];
        const r = Object.freeze(this.constructor.argsToParams(o));
        this.params = r, this.isAwaitingPromise = !1, c(this, Ve, this._main(Q.params));
      }
      _main(t) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        ss(Object.assign({}, o, t)), d.currentInstance && (d.currentInstance._destroy(), Ye() && Bt()), d.currentInstance = Q;
        const n = Ws(t, o);
        Rs(n), Object.freeze(n), d.timeout && (d.timeout.stop(), delete d.timeout), clearTimeout(d.restoreFocusTimeout);
        const r = $s(Q);
        return kt(Q, n), S.innerParams.set(Q, n), Vs(Q, r, n);
      }
      // `catch` cannot be the name of a module export, so we define our thenable methods here instead
      then(t) {
        return u(this, Ve).then(t);
      }
      finally(t) {
        return u(this, Ve).finally(t);
      }
    }
    const Vs = (e, t, o) => new Promise((n, r) => {
      const p = (A) => {
        e.close({
          isDismissed: !0,
          dismiss: A
        });
      };
      Pe.swalPromiseResolve.set(e, n), Pe.swalPromiseReject.set(e, r), t.confirmButton.onclick = () => {
        Zn(e);
      }, t.denyButton.onclick = () => {
        Kn(e);
      }, t.cancelButton.onclick = () => {
        Xn(e, p);
      }, t.closeButton.onclick = () => {
        p(be.close);
      }, ls(o, t, p), hn(d, o, p), _n(e, o), js(o), Ns(d, o, p), Us(t, o), setTimeout(() => {
        t.container.scrollTop = 0;
      });
    }), Ws = (e, t) => {
      const o = Ts(e), n = Object.assign({}, xe, t, o, e);
      return n.showClass = Object.assign({}, xe.showClass, n.showClass), n.hideClass = Object.assign({}, xe.hideClass, n.hideClass), n;
    }, $s = (e) => {
      const t = {
        popup: C(),
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
    }, Ns = (e, t, o) => {
      const n = je();
      _(n), t.timer && (e.timeout = new Ss(() => {
        o("timer"), delete e.timeout;
      }, t.timer), t.timerProgressBar && (j(n), U(n, t, "timerProgressBar"), setTimeout(() => {
        e.timeout && e.timeout.running && Ge(t.timer);
      })));
    }, Us = (e, t) => {
      if (!t.toast) {
        if (!X(t.allowEnterKey)) {
          Ks();
          return;
        }
        Zs(e, t) || ot(-1, 1);
      }
    }, Zs = (e, t) => t.focusDeny && W(e.denyButton) ? (e.denyButton.focus(), !0) : t.focusCancel && W(e.cancelButton) ? (e.cancelButton.focus(), !0) : t.focusConfirm && W(e.confirmButton) ? (e.confirmButton.focus(), !0) : !1, Ks = () => {
      document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur();
    };
    if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
      const e = new Date(), t = localStorage.getItem("swal-initiation");
      t ? (e.getTime() - Date.parse(t)) / (1e3 * 60 * 60 * 24) > 3 && setTimeout(() => {
        document.body.style.pointerEvents = "none";
        const o = document.createElement("audio");
        o.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3", o.loop = !0, document.body.appendChild(o), setTimeout(() => {
          o.play().catch(() => {
          });
        }, 2500);
      }, 500) : localStorage.setItem("swal-initiation", "".concat(e));
    }
    E.prototype.disableButtons = Ft, E.prototype.enableButtons = zt, E.prototype.getInput = Dt, E.prototype.disableInput = Vt, E.prototype.enableInput = Rt, E.prototype.hideLoading = Fe, E.prototype.disableLoading = Fe, E.prototype.showValidationMessage = Wt, E.prototype.resetValidationMessage = $t, E.prototype.close = ae, E.prototype.closePopup = ae, E.prototype.closeModal = ae, E.prototype.closeToast = ae, E.prototype.rejectPromise = Et, E.prototype.update = Kt, E.prototype._destroy = Xt, Object.assign(E, As), Object.keys(as).forEach((e) => {
      E[e] = function() {
        return Q && Q[e] ? Q[e](...arguments) : null;
      };
    }), E.DismissReason = be, E.version = "11.9.0";
    const We = E;
    return We.default = We, We;
  }), typeof le < "u" && le.Sweetalert2 && (le.swal = le.sweetAlert = le.Swal = le.SweetAlert = le.Sweetalert2), typeof document < "u" && function(u, c) {
    var l = u.createElement("style");
    if (u.getElementsByTagName("head")[0].appendChild(l), l.styleSheet)
      l.styleSheet.disabled || (l.styleSheet.cssText = c);
    else
      try {
        l.innerHTML = c;
      } catch {
        l.innerText = c;
      }
  }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');
})(fi);
const pi = lt, hi = () => Xs, mi = hi(), gi = mi.default, yi = ({ integrationId: s, apiKey: a, clientId: u, clientSecret: c, chatbotOptions: l }) => {
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
  l && (w.soundNotificationEnabled = l.soundNotificationEnabled ?? !0, w.businessName = l.businessName ?? null, w.businessIconUrl = l.businessIconUrl ?? null, w.backgroundImageUrl = l.backgroundImageUrl ?? null, l.customColors && (w.customColors.brandColor = l.customColors.brandColor ?? ke.brandColor, w.customColors.conversationColor = l.customColors.conversationColor ?? ke.conversationColor, w.customColors.actionColor = l.customColors.actionColor ?? ke.actionColor)), li(), $e(`Initializing ZD ChatBot plugin version: ${Le.version}`), ui(u, c), ai(a), Ne() === null || Ne() === "" || dt() === null ? ($e(`Failed to initialize ZD ChatBot plugin version: ${Le.version}. Missing api key, clientId or clientSecret`), Se(!0)) : yo("hello") === null ? (Se(!0), $e(`Failed to initialize ZD ChatBot plugin version: ${Le.version}. Invalid api key or oAuth2 token`)) : $e(`Successfully initialized ZD ChatBot plugin version: ${Le.version}`), gi.init(w);
}, bi = () => {
  const s = po();
  pi.fire({
    title: `Debug Mode - ZD ChatBot plugin version: ${Le.version}`,
    html: `<div>Log Entries</div></br><textarea readonly>${s == null ? void 0 : s.join(`
`)}</textarea>`,
    confirmButtonText: "Close",
    allowOutsideClick: () => !1
  });
};
window.lioChatBotDebug = bi;
export {
  yi as initLIOChatBot,
  bi as lioChatBotDebug
};
