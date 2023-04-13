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
var se = function(o) {
  var i = {};
  function n(e) {
    if (i[e])
      return i[e].exports;
    var t = i[e] = { i: e, l: !1, exports: {} };
    return o[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports;
  }
  return n.m = o, n.c = i, n.d = function(e, t, a) {
    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
  }, n.r = function(e) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t || 4 & t && typeof e == "object" && e && e.__esModule)
      return e;
    var a = /* @__PURE__ */ Object.create(null);
    if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && typeof e != "string")
      for (var u in e)
        n.d(a, u, function(m) {
          return e[m];
        }.bind(null, u));
    return a;
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default;
    } : function() {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "https://cdn.smooch.io/", n(n.s = 6);
}([function(o, i, n) {
  var e = n(3);
  o.exports = new e();
}, function(o, i) {
  o.exports = { isFunction: function(n) {
    return typeof n == "function";
  }, isArray: function(n) {
    return Object.prototype.toString.apply(n) === "[object Array]";
  }, each: function(n, e) {
    for (var t = 0, a = n.length; t < a && e(n[t], t) !== !1; t++)
      ;
  } };
}, function(o, i, n) {
  o.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(o, i, n) {
  var e = n(4), t = n(1), a = t.each, u = t.isFunction, m = t.isArray;
  function h() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  h.prototype = { constructor: h, register: function(g, d, p) {
    var v = this.queries, y = p && this.browserIsIncapable;
    return v[g] || (v[g] = new e(g, y)), u(d) && (d = { match: d }), m(d) || (d = [d]), a(d, function(b) {
      u(b) && (b = { match: b }), v[g].addHandler(b);
    }), this;
  }, unregister: function(g, d) {
    var p = this.queries[g];
    return p && (d ? p.removeHandler(d) : (p.clear(), delete this.queries[g])), this;
  } }, o.exports = h;
}, function(o, i, n) {
  var e = n(5), t = n(1).each;
  function a(u, m) {
    this.query = u, this.isUnconditional = m, this.handlers = [], this.mql = window.matchMedia(u);
    var h = this;
    this.listener = function(g) {
      h.mql = g.currentTarget || g, h.assess();
    }, this.mql.addListener(this.listener);
  }
  a.prototype = { constuctor: a, addHandler: function(u) {
    var m = new e(u);
    this.handlers.push(m), this.matches() && m.on();
  }, removeHandler: function(u) {
    var m = this.handlers;
    t(m, function(h, g) {
      if (h.equals(u))
        return h.destroy(), !m.splice(g, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    t(this.handlers, function(u) {
      u.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var u = this.matches() ? "on" : "off";
    t(this.handlers, function(m) {
      m[u]();
    });
  } }, o.exports = a;
}, function(o, i) {
  function n(e) {
    this.options = e, !e.deferSetup && this.setup();
  }
  n.prototype = { constructor: n, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(e) {
    return this.options === e || this.options.match === e;
  } }, o.exports = n;
}, function(o, i, n) {
  n.r(i);
  var e = n(2), t = n.n(e);
  function a(s) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      s();
    }) : s();
  }
  function u(s) {
    var r = ["screen"];
    return s.minHeight && r.push("(min-height: ".concat(s.minHeight, "px)")), s.maxHeight && r.push("(max-height: ".concat(s.maxHeight, "px)")), s.minWidth && r.push("(min-width: ".concat(s.minWidth, "px)")), s.maxWidth && r.push("(max-width: ".concat(s.maxWidth, "px)")), r.join(" and ");
  }
  var m = n(0), h = n.n(m), g = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, d = ["lg", "md", "sm", "xs"];
  function p(s) {
    for (var r = 0; r < d.length; r++) {
      var l = d[r], c = g[l];
      Object.prototype.toString.call(c) !== "[object Array]" && (c = [c]);
      for (var w = 0; w < c.length; w++)
        s({ rule: c[w], size: l });
    }
  }
  function v() {
    return (v = Object.assign ? Object.assign.bind() : function(s) {
      for (var r = 1; r < arguments.length; r++) {
        var l = arguments[r];
        for (var c in l)
          Object.prototype.hasOwnProperty.call(l, c) && (s[c] = l[c]);
      }
      return s;
    }).apply(this, arguments);
  }
  function y(s) {
    return function(r) {
      if (Array.isArray(r))
        return b(r);
    }(s) || function(r) {
      if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
        return Array.from(r);
    }(s) || function(r, l) {
      if (r) {
        if (typeof r == "string")
          return b(r, l);
        var c = Object.prototype.toString.call(r).slice(8, -1);
        if (c === "Object" && r.constructor && (c = r.constructor.name), c === "Map" || c === "Set")
          return Array.from(r);
        if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
          return b(r, l);
      }
    }(s) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function b(s, r) {
    (r == null || r > s.length) && (r = s.length);
    for (var l = 0, c = new Array(r); l < r; l++)
      c[l] = s[l];
    return c;
  }
  var x, f, S, H, j, q = {}, T = [], I = [], J = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), V = /PhantomJS/.test(navigator.userAgent) && !0, L = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (J) {
    var P = document.createElement("a");
    P.href = "https://smooch.io/live-web-chat/?utm_source=widget", P.text = "Powered by Zendesk Sunshine", a(function() {
      document.body.appendChild(P);
    });
  }
  function Y() {
    var s = document.createElement("link");
    s.rel = "stylesheet", s.type = "text/css", s.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(s);
  }
  function ee(s) {
    var r;
    window.__onWebMessengerFrameReady__ = function() {
    }, x = s, S || (r = f, p(function($) {
      var oe = $.rule, re = $.size;
      h.a.register(u(oe), function() {
        r.contentWindow.postMessage({ type: "sizeChange", value: re }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var l = L[0], c = 0; c < L.length; l = L[++c])
      q[l] = x[l];
    if (I) {
      for (var w = I[0], A = 0; A < I.length; w = I[++A]) {
        var _;
        (_ = x).on.apply(_, y(w.args));
      }
      I = void 0;
    }
    if (j) {
      var X, U = (X = x).init.apply(X, y(j));
      j = void 0;
      for (var N = T[0], Z = 0; Z < T.length; N = T[++Z])
        U = N.type === "then" ? U.then(N.next) : U.catch(N.next);
      T = [];
    }
  }
  var D = function(s) {
    return s.contentWindow && s.contentWindow.document;
  };
  function te() {
    if (!f) {
      var s = null, r = !1;
      (f = document.createElement("iframe")).id = "web-messenger-container", f.frameBorder = 0, f.allowFullscreen = !0, f.allowTransparency = !0, f.scrolling = "no", f.className = t.a.iframe;
      var l = function() {
        r = !0, clearInterval(s), delete f.onload;
        var c = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, w = c ? 'nonce="'.concat(c, '"') : "", A = `
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
        if ("srcdoc" in f)
          f.srcdoc = A;
        else {
          var _ = D(f);
          _.open(), _.write(A), _.close();
        }
      };
      s = setInterval(function() {
        var c = D(f);
        r || !c || c.readyState !== "complete" && c.readyState !== "interactive" || l();
      }, 1e3), f.onload = function() {
        r || l();
      };
    }
    S ? H && (H.appendChild(f), H = void 0) : document.body.appendChild(f);
  }
  var ne = { VERSION: "5.5.5", on: function() {
    I || (I = []);
    for (var s = arguments.length, r = new Array(s), l = 0; l < s; l++)
      r[l] = arguments[l];
    I.push({ args: r });
  }, init: function() {
    for (var s = arguments.length, r = new Array(s), l = 0; l < s; l++)
      r[l] = arguments[l];
    j = r, S = r.length > 0 && !!r[0].embedded, J || V || a(function() {
      Y(), te();
    });
    var c = { then: function(w) {
      return T.push({ type: "then", next: w }), c;
    }, catch: function(w) {
      return T.push({ type: "catch", next: w }), c;
    } };
    return c;
  }, render: function(s) {
    f ? s.appendChild(f) : H = s;
  }, destroy: function() {
    x && (x.destroy(), f.remove ? f.remove() : f.parentNode.removeChild(f), p(function(s) {
      var r = s.rule;
      h.a.unregister(u(r));
    }), F());
  } };
  function F() {
    if (!document.getElementById("web-messenger-container")) {
      x = void 0, f = void 0, window.__onWebMessengerFrameReady__ = ee;
      for (var s = L[0], r = 0; r < L.length; s = L[++r])
        q[s] && delete q[s];
      v(q, ne);
    }
  }
  F(), i.default = q;
}]);
const z = "", G = "", B = "en-us", ie = (o) => {
  const i = new XMLHttpRequest(), n = {
    translationType: "machine",
    text: o
  };
  return i.open("POST", `${G}/linguistnow/resources/locale/detectLocale/`, !1), i.setRequestHeader("Authorization", `Basic ${z}`), i.setRequestHeader("Content-Type", "application/json"), i.send(JSON.stringify(n)), i.status === 200 ? JSON.parse(i.responseText).detectedLanguage : null;
}, ae = (o, i, n) => {
  const e = {
    sourceContent: o,
    sourceLocale: i,
    targetLocale: n,
    rnResponseProjectId: null,
    contentTypeName: "bot",
    translationType: "machine",
    incidentId: "ZD ChatBot Plugin",
    textType: "text",
    threadTypeId: 15,
    translationIterationId: 1,
    userTypeId: 3
  }, t = new XMLHttpRequest();
  if (t.open("POST", "https://teslbmjnhh.execute-api.us-east-1.amazonaws.com/dev/translate", !1), t.setRequestHeader("Authorization", `Basic ${z}`), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(e)), t.status === 200) {
    const a = JSON.parse(t.responseText);
    return console.debug(`Running LIO Translate API: ${o}`), a.translatedText;
  }
  return null;
}, E = (o, i, n) => {
  const e = {
    sourceContent: o,
    sourceLocale: i,
    targetLocale: n,
    rnResponseProjectId: null,
    contentTypeName: "bot",
    translationType: "machine",
    incidentId: "ZD ChatBot Plugin",
    textType: "text",
    threadTypeId: 15,
    translationIterationId: 1,
    userTypeId: 3
  }, t = new XMLHttpRequest();
  if (t.open("POST", `${G}/linguistnow/resources/v1/translate/`, !1), t.setRequestHeader("Authorization", `Basic ${z}`), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(e)), t.status === 200) {
    const a = JSON.parse(t.responseText);
    return console.debug(`Running LIO Translate API: ${o}`), a.translatedText;
  }
  return null;
}, Q = (o) => o.toLocaleLowerCase() !== B;
var C = /* @__PURE__ */ ((o) => (o[o.translation = 0] = "translation", o[o.answerBot = 1] = "answerBot", o[o.agent = 2] = "agent", o[o.carousel = 3] = "carousel", o))(C || {});
const R = (o, i) => {
  switch (i) {
    case 1:
      return "answerBot:" + o;
    case 0:
      return "translation:" + o;
    case 2:
      return "agent:" + o;
    case 3:
      return "carousel:" + o;
    default:
      throw Error("Invalid type");
  }
}, W = (o, i, n) => {
  const e = localStorage.getItem(o);
  if (e) {
    const t = new Map(JSON.parse(e));
    t.set(i, n), localStorage.setItem(o, JSON.stringify([...t]));
  } else {
    const t = /* @__PURE__ */ new Map();
    t.set(i, n), localStorage.setItem(o, JSON.stringify([...t]));
  }
}, k = (o, i) => {
  const n = localStorage.getItem(o);
  if (n) {
    const t = new Map(JSON.parse(n)).get(i);
    return t !== null ? t : null;
  }
  return null;
}, O = {
  brandColor: "65758e",
  conversationColor: "0099ff",
  actionColor: "0099ff"
}, ce = "zd-chatbot-web", le = "1.0.0", ue = "module", de = {
  dev: "vite",
  build: "tsc && vite build",
  test: "vitest run",
  coverage: "vitest run --c overage"
}, fe = {
  "@types/node": "^18.13.0",
  "@types/smooch": "^5.3.3",
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
}, me = () => se, ge = me(), ve = ge.default, ye = () => {
  if (typeof Intl < "u")
    try {
      return Intl.NumberFormat().resolvedOptions().locale.toLocaleLowerCase();
    } catch {
      return console.error("Cannot get locale from Intl"), null;
    }
  return null;
}, K = (o) => {
  let i = ye();
  return Q(i) || (i = ie(o)), i;
}, M = (o, i, n) => {
  const e = R(i, n);
  let t = k(e, o);
  if (t)
    return t;
  const a = localStorage.getItem("user-locale");
  return a != null && a !== B && (t = E(o, B, a), t) ? (W(e, o, t), t) : null;
}, be = (o) => {
  const i = o == null ? void 0 : o.toLocaleLowerCase().replace("_", "-").split("-");
  if (i) {
    const n = i[0];
    switch (n) {
      case "zh":
        return "zh-hk";
      default:
        return n;
    }
  }
  return null;
}, we = ({ apiKey: o, chatbotOptions: i }) => {
  const n = {
    integrationId: o,
    canUserSeeConversationList: !1,
    imageUploadEnabled: !1,
    delegate: {
      beforeSend(e, t) {
        if (e.type === "text") {
          const a = e == null ? void 0 : e.text;
          if (a !== null && a.length > 0) {
            const u = K(e.text);
            if (u != null && Q(u)) {
              localStorage.setItem("user-locale", u);
              const h = E(a, u, B);
              h != null && (e.text = h, W(R(t.conversation.id, C.translation), h, a));
            }
          }
        }
        return e;
      },
      beforeDisplay(e, t) {
        var h, g;
        const a = e.text, u = ((h = e.source) == null ? void 0 : h.type) === "zd:answerBot", m = ((g = e.source) == null ? void 0 : g.type) === "zd:agentWorkspace";
        if (e.type === "text")
          if (u) {
            let d = M(e.text, t.conversation.id, C.answerBot);
            d && (e.text = d);
            const p = e.actions;
            if (p)
              for (const v of p) {
                let y = M(v.text, t.conversation.id, C.answerBot);
                y && (v.text = y);
              }
          } else if (m) {
            const d = R(t.conversation.id, C.agent);
            let p = k(d, a);
            if (p)
              e.text = p;
            else {
              const v = localStorage.getItem("user-locale"), y = K(e.text);
              y != null && v !== y && (p = E(a, y, v), p && (W(d, a, p), e.text = p));
            }
          } else {
            const d = k(R(t.conversation.id, C.translation), e.text);
            d && (e.text = d);
          }
        else if (e.type === "carousel" && u) {
          let d = e;
          for (const p of d.items) {
            const v = M(p.title, t.conversation.id, C.carousel);
            v && (p.title = v);
            const y = M(p.description, t.conversation.id, C.carousel);
            y && (p.description = y);
            for (const b of p.actions) {
              const x = M(b.text, t.conversation.id, C.carousel);
              x && (b.text = x);
              const f = localStorage.getItem("user-locale"), S = be(f);
              S && (b.uri = b.uri.replace("en-us", S));
            }
          }
          return d;
        }
        return e;
      }
    },
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
      brandColor: O.brandColor,
      conversationColor: O.conversationColor,
      actionColor: O.actionColor
    }
  };
  i && (n.soundNotificationEnabled = i.soundNotificationEnabled ?? !0, n.businessName = i.businessName ?? null, n.businessIconUrl = i.businessIconUrl ?? null, n.backgroundImageUrl = i.backgroundImageUrl ?? null, i.customColors && (n.customColors.brandColor = i.customColors.brandColor ?? O.brandColor, n.customColors.conversationColor = i.customColors.conversationColor ?? O.conversationColor, n.customColors.actionColor = i.customColors.actionColor ?? O.actionColor)), console.info(`Initializing ZD ChatBot plugin version: ${he.version}`), ae("hello", "en-us", "es"), ve.init(n);
};
export {
  we as initLIOChatBot
};
