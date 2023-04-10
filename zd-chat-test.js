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
var ot = function(o) {
  var a = {};
  function e(t) {
    if (a[t])
      return a[t].exports;
    var n = a[t] = { i: t, l: !1, exports: {} };
    return o[t].call(n.exports, n, n.exports, e), n.l = !0, n.exports;
  }
  return e.m = o, e.c = a, e.d = function(t, n, c) {
    e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: c });
  }, e.r = function(t) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, e.t = function(t, n) {
    if (1 & n && (t = e(t)), 8 & n || 4 & n && typeof t == "object" && t && t.__esModule)
      return t;
    var c = /* @__PURE__ */ Object.create(null);
    if (e.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: t }), 2 & n && typeof t != "string")
      for (var u in t)
        e.d(c, u, function(m) {
          return t[m];
        }.bind(null, u));
    return c;
  }, e.n = function(t) {
    var n = t && t.__esModule ? function() {
      return t.default;
    } : function() {
      return t;
    };
    return e.d(n, "a", n), n;
  }, e.o = function(t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }, e.p = "https://cdn.smooch.io/", e(e.s = 6);
}([function(o, a, e) {
  var t = e(3);
  o.exports = new t();
}, function(o, a) {
  o.exports = { isFunction: function(e) {
    return typeof e == "function";
  }, isArray: function(e) {
    return Object.prototype.toString.apply(e) === "[object Array]";
  }, each: function(e, t) {
    for (var n = 0, c = e.length; n < c && t(e[n], n) !== !1; n++)
      ;
  } };
}, function(o, a, e) {
  o.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(o, a, e) {
  var t = e(4), n = e(1), c = n.each, u = n.isFunction, m = n.isArray;
  function p() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  p.prototype = { constructor: p, register: function(g, d, h) {
    var v = this.queries, y = h && this.browserIsIncapable;
    return v[g] || (v[g] = new t(g, y)), u(d) && (d = { match: d }), m(d) || (d = [d]), c(d, function(b) {
      u(b) && (b = { match: b }), v[g].addHandler(b);
    }), this;
  }, unregister: function(g, d) {
    var h = this.queries[g];
    return h && (d ? h.removeHandler(d) : (h.clear(), delete this.queries[g])), this;
  } }, o.exports = p;
}, function(o, a, e) {
  var t = e(5), n = e(1).each;
  function c(u, m) {
    this.query = u, this.isUnconditional = m, this.handlers = [], this.mql = window.matchMedia(u);
    var p = this;
    this.listener = function(g) {
      p.mql = g.currentTarget || g, p.assess();
    }, this.mql.addListener(this.listener);
  }
  c.prototype = { constuctor: c, addHandler: function(u) {
    var m = new t(u);
    this.handlers.push(m), this.matches() && m.on();
  }, removeHandler: function(u) {
    var m = this.handlers;
    n(m, function(p, g) {
      if (p.equals(u))
        return p.destroy(), !m.splice(g, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    n(this.handlers, function(u) {
      u.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var u = this.matches() ? "on" : "off";
    n(this.handlers, function(m) {
      m[u]();
    });
  } }, o.exports = c;
}, function(o, a) {
  function e(t) {
    this.options = t, !t.deferSetup && this.setup();
  }
  e.prototype = { constructor: e, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(t) {
    return this.options === t || this.options.match === t;
  } }, o.exports = e;
}, function(o, a, e) {
  e.r(a);
  var t = e(2), n = e.n(t);
  function c(i) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      i();
    }) : i();
  }
  function u(i) {
    var r = ["screen"];
    return i.minHeight && r.push("(min-height: ".concat(i.minHeight, "px)")), i.maxHeight && r.push("(max-height: ".concat(i.maxHeight, "px)")), i.minWidth && r.push("(min-width: ".concat(i.minWidth, "px)")), i.maxWidth && r.push("(max-width: ".concat(i.maxWidth, "px)")), r.join(" and ");
  }
  var m = e(0), p = e.n(m), g = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, d = ["lg", "md", "sm", "xs"];
  function h(i) {
    for (var r = 0; r < d.length; r++) {
      var l = d[r], s = g[l];
      Object.prototype.toString.call(s) !== "[object Array]" && (s = [s]);
      for (var w = 0; w < s.length; w++)
        i({ rule: s[w], size: l });
    }
  }
  function v() {
    return (v = Object.assign ? Object.assign.bind() : function(i) {
      for (var r = 1; r < arguments.length; r++) {
        var l = arguments[r];
        for (var s in l)
          Object.prototype.hasOwnProperty.call(l, s) && (i[s] = l[s]);
      }
      return i;
    }).apply(this, arguments);
  }
  function y(i) {
    return function(r) {
      if (Array.isArray(r))
        return b(r);
    }(i) || function(r) {
      if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
        return Array.from(r);
    }(i) || function(r, l) {
      if (r) {
        if (typeof r == "string")
          return b(r, l);
        var s = Object.prototype.toString.call(r).slice(8, -1);
        if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
          return Array.from(r);
        if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
          return b(r, l);
      }
    }(i) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function b(i, r) {
    (r == null || r > i.length) && (r = i.length);
    for (var l = 0, s = new Array(r); l < r; l++)
      s[l] = i[l];
    return s;
  }
  var x, f, I, W, N, A = {}, _ = [], S = [], F = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), X = /PhantomJS/.test(navigator.userAgent) && !0, L = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (F) {
    var B = document.createElement("a");
    B.href = "https://smooch.io/live-web-chat/?utm_source=widget", B.text = "Powered by Zendesk Sunshine", c(function() {
      document.body.appendChild(B);
    });
  }
  function G() {
    var i = document.createElement("link");
    i.rel = "stylesheet", i.type = "text/css", i.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(i);
  }
  function Y(i) {
    var r;
    window.__onWebMessengerFrameReady__ = function() {
    }, x = i, I || (r = f, h(function(K) {
      var et = K.rule, nt = K.size;
      p.a.register(u(et), function() {
        r.contentWindow.postMessage({ type: "sizeChange", value: nt }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var l = L[0], s = 0; s < L.length; l = L[++s])
      A[l] = x[l];
    if (S) {
      for (var w = S[0], M = 0; M < S.length; w = S[++M]) {
        var O;
        (O = x).on.apply(O, y(w.args));
      }
      S = void 0;
    }
    if (N) {
      var Q, E = (Q = x).init.apply(Q, y(N));
      N = void 0;
      for (var U = _[0], D = 0; D < _.length; U = _[++D])
        E = U.type === "then" ? E.then(U.next) : E.catch(U.next);
      _ = [];
    }
  }
  var z = function(i) {
    return i.contentWindow && i.contentWindow.document;
  };
  function $() {
    if (!f) {
      var i = null, r = !1;
      (f = document.createElement("iframe")).id = "web-messenger-container", f.frameBorder = 0, f.allowFullscreen = !0, f.allowTransparency = !0, f.scrolling = "no", f.className = n.a.iframe;
      var l = function() {
        r = !0, clearInterval(i), delete f.onload;
        var s = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, w = s ? 'nonce="'.concat(s, '"') : "", M = `
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
          f.srcdoc = M;
        else {
          var O = z(f);
          O.open(), O.write(M), O.close();
        }
      };
      i = setInterval(function() {
        var s = z(f);
        r || !s || s.readyState !== "complete" && s.readyState !== "interactive" || l();
      }, 1e3), f.onload = function() {
        r || l();
      };
    }
    I ? W && (W.appendChild(f), W = void 0) : document.body.appendChild(f);
  }
  var tt = { VERSION: "5.5.5", on: function() {
    S || (S = []);
    for (var i = arguments.length, r = new Array(i), l = 0; l < i; l++)
      r[l] = arguments[l];
    S.push({ args: r });
  }, init: function() {
    for (var i = arguments.length, r = new Array(i), l = 0; l < i; l++)
      r[l] = arguments[l];
    N = r, I = r.length > 0 && !!r[0].embedded, F || X || c(function() {
      G(), $();
    });
    var s = { then: function(w) {
      return _.push({ type: "then", next: w }), s;
    }, catch: function(w) {
      return _.push({ type: "catch", next: w }), s;
    } };
    return s;
  }, render: function(i) {
    f ? i.appendChild(f) : W = i;
  }, destroy: function() {
    x && (x.destroy(), f.remove ? f.remove() : f.parentNode.removeChild(f), h(function(i) {
      var r = i.rule;
      p.a.unregister(u(r));
    }), J());
  } };
  function J() {
    if (!document.getElementById("web-messenger-container")) {
      x = void 0, f = void 0, window.__onWebMessengerFrameReady__ = Y;
      for (var i = L[0], r = 0; r < L.length; i = L[++r])
        A[i] && delete A[i];
      v(A, tt);
    }
  }
  J(), a.default = A;
}]);
const rt = "Ym9iYmllWkQ6I0Q4WmpHNzk3WWV5ayZmVQ==", it = "https://dev.golinguist.com", H = "en-us", at = (o) => {
  const a = new XMLHttpRequest(), e = {
    translationType: "machine",
    text: o
  };
  return a.open("POST", `${it}/linguistnow/resources/locale/detectLocale/`, !1), a.setRequestHeader("Authorization", `Basic ${rt}`), a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify(e)), a.status === 200 ? JSON.parse(a.responseText).detectedLanguage : null;
}, P = (o, a, e) => {
  const t = {
    sourceContent: o,
    sourceLocale: a,
    targetLocale: e,
    rnResponseProjectId: null,
    contentTypeName: "browser",
    translationType: "machine",
    incidentId: "ZD ChatBot Plugin",
    textType: "text",
    threadTypeId: 15,
    translationIterationId: 1,
    userTypeId: 3
  }, n = new XMLHttpRequest();
  if (n.open("POST", "zendesk.michaelryandev.com/translate", !1), n.setRequestHeader("Content-Type", "application/json"), n.send(JSON.stringify(t)), n.status === 200) {
    const c = JSON.parse(n.responseText);
    return console.debug(`Running LIO Translate API: ${o}`), c.translatedText;
  }
  return null;
}, V = (o) => o.toLocaleLowerCase() !== H;
var C = /* @__PURE__ */ ((o) => (o[o.translation = 0] = "translation", o[o.answerBot = 1] = "answerBot", o[o.agent = 2] = "agent", o[o.carousel = 3] = "carousel", o))(C || {});
const j = (o, a) => {
  switch (a) {
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
}, R = (o, a, e) => {
  const t = localStorage.getItem(o);
  if (t) {
    const n = new Map(JSON.parse(t));
    n.set(a, e), localStorage.setItem(o, JSON.stringify([...n]));
  } else {
    const n = /* @__PURE__ */ new Map();
    n.set(a, e), localStorage.setItem(o, JSON.stringify([...n]));
  }
}, k = (o, a) => {
  const e = localStorage.getItem(o);
  if (e) {
    const n = new Map(JSON.parse(e)).get(a);
    return n !== null ? n : null;
  }
  return null;
}, T = {
  brandColor: "65758e",
  conversationColor: "0099ff",
  actionColor: "0099ff"
}, st = () => ot, ct = st(), lt = ct.default, ut = () => {
  if (typeof Intl < "u")
    try {
      return Intl.NumberFormat().resolvedOptions().locale.toLocaleLowerCase();
    } catch {
      return console.error("Cannot get locale from Intl"), null;
    }
  return null;
}, Z = (o) => {
  let a = ut();
  return V(a) || (a = at(o)), a;
}, q = (o, a, e) => {
  const t = j(a, e);
  let n = k(t, o);
  if (n)
    return n;
  const c = localStorage.getItem("user-locale");
  return c != null && c !== H && (n = P(o, H, c), n) ? (R(t, o, n), n) : null;
}, dt = (o) => {
  const a = o == null ? void 0 : o.toLocaleLowerCase().replace("_", "-").split("-");
  if (a) {
    const e = a[0];
    switch (e) {
      case "zh":
        return "zh-hk";
      default:
        return e;
    }
  }
  return null;
}, ft = ({ apiKey: o, chatbotOptions: a }) => {
  const e = {
    integrationId: o,
    canUserSeeConversationList: !1,
    imageUploadEnabled: !1,
    delegate: {
      beforeSend(t, n) {
        if (t.type === "text") {
          const c = t == null ? void 0 : t.text;
          if (c !== null && c.length > 0) {
            const u = Z(t.text);
            if (u != null && V(u)) {
              localStorage.setItem("user-locale", u);
              const p = P(c, u, H);
              p != null && (t.text = p, R(j(n.conversation.id, C.translation), p, c));
            }
          }
        }
        return t;
      },
      beforeDisplay(t, n) {
        var p, g;
        const c = t.text, u = ((p = t.source) == null ? void 0 : p.type) === "zd:answerBot", m = ((g = t.source) == null ? void 0 : g.type) === "zd:agentWorkspace";
        if (t.type === "text")
          if (u) {
            let d = q(t.text, n.conversation.id, C.answerBot);
            d && (t.text = d);
            const h = t.actions;
            if (h)
              for (const v of h) {
                let y = q(v.text, n.conversation.id, C.answerBot);
                y && (v.text = y);
              }
          } else if (m) {
            const d = j(n.conversation.id, C.agent);
            let h = k(d, c);
            if (h)
              t.text = h;
            else {
              const v = localStorage.getItem("user-locale"), y = Z(t.text);
              y != null && v !== y && (h = P(c, y, v), h && (R(d, c, h), t.text = h));
            }
          } else {
            const d = k(j(n.conversation.id, C.translation), t.text);
            d && (t.text = d);
          }
        else if (t.type === "carousel" && u) {
          let d = t;
          for (const h of d.items) {
            const v = q(h.title, n.conversation.id, C.carousel);
            v && (h.title = v);
            const y = q(h.description, n.conversation.id, C.carousel);
            y && (h.description = y);
            for (const b of h.actions) {
              const x = q(b.text, n.conversation.id, C.carousel);
              x && (b.text = x);
              const f = localStorage.getItem("user-locale"), I = dt(f);
              I && (b.uri = b.uri.replace("en-us", I));
            }
          }
          return d;
        }
        return t;
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
      brandColor: T.brandColor,
      conversationColor: T.conversationColor,
      actionColor: T.actionColor
    }
  };
  a && (e.soundNotificationEnabled = a.soundNotificationEnabled ?? !0, e.businessName = a.businessName ?? null, e.businessIconUrl = a.businessIconUrl ?? null, e.backgroundImageUrl = a.backgroundImageUrl ?? null, a.customColors && (e.customColors.brandColor = a.customColors.brandColor ?? T.brandColor, e.customColors.conversationColor = a.customColors.conversationColor ?? T.conversationColor, e.customColors.actionColor = a.customColors.actionColor ?? T.actionColor)), lt.init(e);
};
export {
  ft as initLIOChatBot
};
