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
var rt = function(e) {
  var a = {};
  function o(n) {
    if (a[n])
      return a[n].exports;
    var t = a[n] = { i: n, l: !1, exports: {} };
    return e[n].call(t.exports, t, t.exports, o), t.l = !0, t.exports;
  }
  return o.m = e, o.c = a, o.d = function(n, t, s) {
    o.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: s });
  }, o.r = function(n) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
  }, o.t = function(n, t) {
    if (1 & t && (n = o(n)), 8 & t || 4 & t && typeof n == "object" && n && n.__esModule)
      return n;
    var s = /* @__PURE__ */ Object.create(null);
    if (o.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: n }), 2 & t && typeof n != "string")
      for (var l in n)
        o.d(s, l, function(f) {
          return n[f];
        }.bind(null, l));
    return s;
  }, o.n = function(n) {
    var t = n && n.__esModule ? function() {
      return n.default;
    } : function() {
      return n;
    };
    return o.d(t, "a", t), t;
  }, o.o = function(n, t) {
    return Object.prototype.hasOwnProperty.call(n, t);
  }, o.p = "https://cdn.smooch.io/", o(o.s = 6);
}([function(e, a, o) {
  var n = o(3);
  e.exports = new n();
}, function(e, a) {
  e.exports = { isFunction: function(o) {
    return typeof o == "function";
  }, isArray: function(o) {
    return Object.prototype.toString.apply(o) === "[object Array]";
  }, each: function(o, n) {
    for (var t = 0, s = o.length; t < s && n(o[t], t) !== !1; t++)
      ;
  } };
}, function(e, a, o) {
  e.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(e, a, o) {
  var n = o(4), t = o(1), s = t.each, l = t.isFunction, f = t.isArray;
  function v() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  v.prototype = { constructor: v, register: function(m, y, p) {
    var h = this.queries, w = p && this.browserIsIncapable;
    return h[m] || (h[m] = new n(m, w)), l(y) && (y = { match: y }), f(y) || (y = [y]), s(y, function(g) {
      l(g) && (g = { match: g }), h[m].addHandler(g);
    }), this;
  }, unregister: function(m, y) {
    var p = this.queries[m];
    return p && (y ? p.removeHandler(y) : (p.clear(), delete this.queries[m])), this;
  } }, e.exports = v;
}, function(e, a, o) {
  var n = o(5), t = o(1).each;
  function s(l, f) {
    this.query = l, this.isUnconditional = f, this.handlers = [], this.mql = window.matchMedia(l);
    var v = this;
    this.listener = function(m) {
      v.mql = m.currentTarget || m, v.assess();
    }, this.mql.addListener(this.listener);
  }
  s.prototype = { constuctor: s, addHandler: function(l) {
    var f = new n(l);
    this.handlers.push(f), this.matches() && f.on();
  }, removeHandler: function(l) {
    var f = this.handlers;
    t(f, function(v, m) {
      if (v.equals(l))
        return v.destroy(), !f.splice(m, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    t(this.handlers, function(l) {
      l.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var l = this.matches() ? "on" : "off";
    t(this.handlers, function(f) {
      f[l]();
    });
  } }, e.exports = s;
}, function(e, a) {
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
}, function(e, a, o) {
  o.r(a);
  var n = o(2), t = o.n(n);
  function s(i) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      i();
    }) : i();
  }
  function l(i) {
    var r = ["screen"];
    return i.minHeight && r.push("(min-height: ".concat(i.minHeight, "px)")), i.maxHeight && r.push("(max-height: ".concat(i.maxHeight, "px)")), i.minWidth && r.push("(min-width: ".concat(i.minWidth, "px)")), i.maxWidth && r.push("(max-width: ".concat(i.maxWidth, "px)")), r.join(" and ");
  }
  var f = o(0), v = o.n(f), m = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, y = ["lg", "md", "sm", "xs"];
  function p(i) {
    for (var r = 0; r < y.length; r++) {
      var u = y[r], c = m[u];
      Object.prototype.toString.call(c) !== "[object Array]" && (c = [c]);
      for (var b = 0; b < c.length; b++)
        i({ rule: c[b], size: u });
    }
  }
  function h() {
    return (h = Object.assign ? Object.assign.bind() : function(i) {
      for (var r = 1; r < arguments.length; r++) {
        var u = arguments[r];
        for (var c in u)
          Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
      }
      return i;
    }).apply(this, arguments);
  }
  function w(i) {
    return function(r) {
      if (Array.isArray(r))
        return g(r);
    }(i) || function(r) {
      if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
        return Array.from(r);
    }(i) || function(r, u) {
      if (r) {
        if (typeof r == "string")
          return g(r, u);
        var c = Object.prototype.toString.call(r).slice(8, -1);
        if (c === "Object" && r.constructor && (c = r.constructor.name), c === "Map" || c === "Set")
          return Array.from(r);
        if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
          return g(r, u);
      }
    }(i) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function g(i, r) {
    (r == null || r > i.length) && (r = i.length);
    for (var u = 0, c = new Array(r); u < r; u++)
      c[u] = i[u];
    return c;
  }
  var x, d, T, _, W, A = {}, C = [], O = [], $ = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), X = /PhantomJS/.test(navigator.userAgent) && !0, I = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if ($) {
    var B = document.createElement("a");
    B.href = "https://smooch.io/live-web-chat/?utm_source=widget", B.text = "Powered by Zendesk Sunshine", s(function() {
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
    }, x = i, T || (r = d, p(function(Q) {
      var nt = Q.rule, ot = Q.size;
      v.a.register(l(nt), function() {
        r.contentWindow.postMessage({ type: "sizeChange", value: ot }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var u = I[0], c = 0; c < I.length; u = I[++c])
      A[u] = x[u];
    if (O) {
      for (var b = O[0], M = 0; M < O.length; b = O[++M]) {
        var L;
        (L = x).on.apply(L, w(b.args));
      }
      O = void 0;
    }
    if (W) {
      var z, P = (z = x).init.apply(z, w(W));
      W = void 0;
      for (var H = C[0], J = 0; J < C.length; H = C[++J])
        P = H.type === "then" ? P.then(H.next) : P.catch(H.next);
      C = [];
    }
  }
  var k = function(i) {
    return i.contentWindow && i.contentWindow.document;
  };
  function tt() {
    if (!d) {
      var i = null, r = !1;
      (d = document.createElement("iframe")).id = "web-messenger-container", d.frameBorder = 0, d.allowFullscreen = !0, d.allowTransparency = !0, d.scrolling = "no", d.className = t.a.iframe;
      var u = function() {
        r = !0, clearInterval(i), delete d.onload;
        var c = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, b = c ? 'nonce="'.concat(c, '"') : "", M = `
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
        if ("srcdoc" in d)
          d.srcdoc = M;
        else {
          var L = k(d);
          L.open(), L.write(M), L.close();
        }
      };
      i = setInterval(function() {
        var c = k(d);
        r || !c || c.readyState !== "complete" && c.readyState !== "interactive" || u();
      }, 1e3), d.onload = function() {
        r || u();
      };
    }
    T ? _ && (_.appendChild(d), _ = void 0) : document.body.appendChild(d);
  }
  var et = { VERSION: "5.5.5", on: function() {
    O || (O = []);
    for (var i = arguments.length, r = new Array(i), u = 0; u < i; u++)
      r[u] = arguments[u];
    O.push({ args: r });
  }, init: function() {
    for (var i = arguments.length, r = new Array(i), u = 0; u < i; u++)
      r[u] = arguments[u];
    W = r, T = r.length > 0 && !!r[0].embedded, $ || X || s(function() {
      G(), tt();
    });
    var c = { then: function(b) {
      return C.push({ type: "then", next: b }), c;
    }, catch: function(b) {
      return C.push({ type: "catch", next: b }), c;
    } };
    return c;
  }, render: function(i) {
    d ? i.appendChild(d) : _ = i;
  }, destroy: function() {
    x && (x.destroy(), d.remove ? d.remove() : d.parentNode.removeChild(d), p(function(i) {
      var r = i.rule;
      v.a.unregister(l(r));
    }), F());
  } };
  function F() {
    if (!document.getElementById("web-messenger-container")) {
      x = void 0, d = void 0, window.__onWebMessengerFrameReady__ = Y;
      for (var i = I[0], r = 0; r < I.length; i = I[++r])
        A[i] && delete A[i];
      h(A, et);
    }
  }
  F(), a.default = A;
}]);
const D = "Ym9iYmllWkQ6I0Q4WmpHNzk3WWV5ayZmVQ==", K = "https://dev.golinguist.com", j = "en-us", it = (e) => {
  const a = new XMLHttpRequest(), o = {
    translationType: "machine",
    text: e
  };
  return a.open("POST", `${K}/linguistnow/resources/locale/detectLocale/`, !1), a.setRequestHeader("Authorization", `Basic ${D}`), a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify(o)), a.status === 200 ? JSON.parse(a.responseText).detectedLanguage : null;
}, N = (e, a, o) => {
  const n = {
    sourceContent: e,
    sourceLocale: a,
    targetLocale: o,
    rnResponseProjectId: null,
    contentTypeName: "browser",
    translationType: "machine",
    incidentId: "ZD ChatBot Plugin",
    textType: "text",
    threadTypeId: 15,
    translationIterationId: 1,
    userTypeId: 3
  }, t = new XMLHttpRequest();
  if (t.open("POST", `${K}/linguistnow/resources/v1/translate/`, !1), t.setRequestHeader("Authorization", `Basic ${D}`), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(n)), t.status === 200) {
    const s = JSON.parse(t.responseText);
    return console.debug(`Running LIO Translate API: ${e}`), s.translatedText;
  }
  return null;
}, V = (e) => e.toLocaleLowerCase() !== j;
var S = /* @__PURE__ */ ((e) => (e[e.translation = 0] = "translation", e[e.answerBot = 1] = "answerBot", e[e.agent = 2] = "agent", e[e.carousel = 3] = "carousel", e))(S || {});
const R = (e, a) => {
  switch (a) {
    case 1:
      return "answerBot:" + e;
    case 0:
      return "translation:" + e;
    case 2:
      return "agent:" + e;
    case 3:
      return "carousel:" + e;
    default:
      throw Error("Invalid type");
  }
}, E = (e, a, o) => {
  const n = localStorage.getItem(e);
  if (n) {
    const t = new Map(JSON.parse(n));
    t.set(a, o), localStorage.setItem(e, JSON.stringify([...t]));
  } else {
    const t = /* @__PURE__ */ new Map();
    t.set(a, o), localStorage.setItem(e, JSON.stringify([...t]));
  }
}, U = (e, a) => {
  const o = localStorage.getItem(e);
  if (o) {
    const t = new Map(JSON.parse(o)).get(a);
    return t !== null ? t : null;
  }
  return null;
}, at = () => rt, st = at(), ct = st.default, lt = () => {
  if (typeof Intl < "u")
    try {
      return Intl.NumberFormat().resolvedOptions().locale.toLocaleLowerCase();
    } catch {
      return console.error("Cannot get locale from Intl"), null;
    }
  return null;
}, Z = (e) => {
  let a = lt();
  return V(a) || (a = it(e)), a;
}, q = (e, a, o) => {
  const n = R(a, o);
  let t = U(n, e);
  if (t)
    return t;
  const s = localStorage.getItem("user-locale");
  return s != null && s !== j && (t = N(e, j, s), t) ? (E(n, e, t), t) : null;
}, ut = (e) => {
  const a = e == null ? void 0 : e.toLocaleLowerCase().replace("_", "-").split("-");
  return a ? dt(a[0]) : null;
}, dt = (e) => {
  switch (e) {
    case "zh":
      return "zh-hk";
    default:
      return e;
  }
}, ft = ({ apiKey: e, chatbotOptions: a }) => {
  const o = {
    integrationId: e,
    delegate: {
      beforeSend(t, s) {
        if (t.type === "text") {
          const l = t == null ? void 0 : t.text;
          if (l !== null && l.length > 0) {
            const f = Z(t.text);
            if (f != null && V(f)) {
              localStorage.setItem("user-locale", f), console.debug(`Detected User Locale: ${f}`);
              const m = N(l, f, j);
              m != null && (t.text = m, E(R(s.conversation.id, S.translation), m, l));
            }
          }
        }
        return t;
      },
      beforeDisplay(t, s) {
        var m, y;
        const l = t.text, f = ((m = t.source) == null ? void 0 : m.type) === "zd:answerBot", v = ((y = t.source) == null ? void 0 : y.type) === "zd:agentWorkspace";
        if (t.type === "text")
          if (f) {
            let p = q(t.text, s.conversation.id, S.answerBot);
            p && (t.text = p, console.debug(`Original Text: "${l}" Replaced with: "${p}"`));
            const h = t.actions;
            if (h)
              for (const w of h) {
                let g = q(w.text, s.conversation.id, S.answerBot);
                g && (w.text = g, console.debug(`Original Text: "${w.text}" Replaced with: "${g}"`));
              }
          } else if (v) {
            const p = R(s.conversation.id, S.agent);
            let h = U(p, l);
            if (h)
              t.text = h, console.debug(`Original Text: "${l}" Replaced with: "${h}"`);
            else {
              const w = localStorage.getItem("user-locale"), g = Z(t.text);
              g != null && w !== g && (h = N(l, g, w), h && (E(p, l, h), t.text = h, console.debug(`Original Text: "${l}" Replaced with: "${h}"`)));
            }
          } else {
            const p = U(R(s.conversation.id, S.translation), t.text);
            p && (t.text = p, console.debug(`Original Text: "${l}" Replaced with: "${p}"`));
          }
        else if (t.type === "carousel" && f) {
          let p = t;
          for (const h of p.items) {
            const w = q(h.title, s.conversation.id, S.carousel);
            w && (h.title = w);
            const g = q(h.description, s.conversation.id, S.carousel);
            g && (h.description = g);
            for (const x of h.actions) {
              const d = q(x.text, s.conversation.id, S.carousel);
              d && (x.text = d);
              const T = localStorage.getItem("user-locale"), _ = ut(T);
              _ && (x.uri = x.uri.replace("en-us", _));
            }
          }
          return p;
        }
        return t;
      }
    },
    canUserSeeConversationList: !1
  }, n = a ? { ...o, ...a } : o;
  ct.init(n);
};
export {
  ft as initLIOChatBot
};
