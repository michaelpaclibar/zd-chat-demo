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
var ot = function(e) {
  var a = {};
  function t(n) {
    if (a[n])
      return a[n].exports;
    var r = a[n] = { i: n, l: !1, exports: {} };
    return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
  }
  return t.m = e, t.c = a, t.d = function(n, r, f) {
    t.o(n, r) || Object.defineProperty(n, r, { enumerable: !0, get: f });
  }, t.r = function(n) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
  }, t.t = function(n, r) {
    if (1 & r && (n = t(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule)
      return n;
    var f = /* @__PURE__ */ Object.create(null);
    if (t.r(f), Object.defineProperty(f, "default", { enumerable: !0, value: n }), 2 & r && typeof n != "string")
      for (var p in n)
        t.d(f, p, function(u) {
          return n[u];
        }.bind(null, p));
    return f;
  }, t.n = function(n) {
    var r = n && n.__esModule ? function() {
      return n.default;
    } : function() {
      return n;
    };
    return t.d(r, "a", r), r;
  }, t.o = function(n, r) {
    return Object.prototype.hasOwnProperty.call(n, r);
  }, t.p = "https://cdn.smooch.io/", t(t.s = 6);
}([function(e, a, t) {
  var n = t(3);
  e.exports = new n();
}, function(e, a) {
  e.exports = { isFunction: function(t) {
    return typeof t == "function";
  }, isArray: function(t) {
    return Object.prototype.toString.apply(t) === "[object Array]";
  }, each: function(t, n) {
    for (var r = 0, f = t.length; r < f && n(t[r], r) !== !1; r++)
      ;
  } };
}, function(e, a, t) {
  e.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(e, a, t) {
  var n = t(4), r = t(1), f = r.each, p = r.isFunction, u = r.isArray;
  function l() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  l.prototype = { constructor: l, register: function(d, m, g) {
    var y = this.queries, A = g && this.browserIsIncapable;
    return y[d] || (y[d] = new n(d, A)), p(m) && (m = { match: m }), u(m) || (m = [m]), f(m, function(w) {
      p(w) && (w = { match: w }), y[d].addHandler(w);
    }), this;
  }, unregister: function(d, m) {
    var g = this.queries[d];
    return g && (m ? g.removeHandler(m) : (g.clear(), delete this.queries[d])), this;
  } }, e.exports = l;
}, function(e, a, t) {
  var n = t(5), r = t(1).each;
  function f(p, u) {
    this.query = p, this.isUnconditional = u, this.handlers = [], this.mql = window.matchMedia(p);
    var l = this;
    this.listener = function(d) {
      l.mql = d.currentTarget || d, l.assess();
    }, this.mql.addListener(this.listener);
  }
  f.prototype = { constuctor: f, addHandler: function(p) {
    var u = new n(p);
    this.handlers.push(u), this.matches() && u.on();
  }, removeHandler: function(p) {
    var u = this.handlers;
    r(u, function(l, d) {
      if (l.equals(p))
        return l.destroy(), !u.splice(d, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    r(this.handlers, function(p) {
      p.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var p = this.matches() ? "on" : "off";
    r(this.handlers, function(u) {
      u[p]();
    });
  } }, e.exports = f;
}, function(e, a) {
  function t(n) {
    this.options = n, !n.deferSetup && this.setup();
  }
  t.prototype = { constructor: t, setup: function() {
    this.options.setup && this.options.setup(), this.initialised = !0;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(n) {
    return this.options === n || this.options.match === n;
  } }, e.exports = t;
}, function(e, a, t) {
  t.r(a);
  var n = t(2), r = t.n(n);
  function f(i) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      i();
    }) : i();
  }
  function p(i) {
    var o = ["screen"];
    return i.minHeight && o.push("(min-height: ".concat(i.minHeight, "px)")), i.maxHeight && o.push("(max-height: ".concat(i.maxHeight, "px)")), i.minWidth && o.push("(min-width: ".concat(i.minWidth, "px)")), i.maxWidth && o.push("(max-width: ".concat(i.maxWidth, "px)")), o.join(" and ");
  }
  var u = t(0), l = t.n(u), d = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, m = ["lg", "md", "sm", "xs"];
  function g(i) {
    for (var o = 0; o < m.length; o++) {
      var c = m[o], s = d[c];
      Object.prototype.toString.call(s) !== "[object Array]" && (s = [s]);
      for (var v = 0; v < s.length; v++)
        i({ rule: s[v], size: c });
    }
  }
  function y() {
    return (y = Object.assign ? Object.assign.bind() : function(i) {
      for (var o = 1; o < arguments.length; o++) {
        var c = arguments[o];
        for (var s in c)
          Object.prototype.hasOwnProperty.call(c, s) && (i[s] = c[s]);
      }
      return i;
    }).apply(this, arguments);
  }
  function A(i) {
    return function(o) {
      if (Array.isArray(o))
        return w(o);
    }(i) || function(o) {
      if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null)
        return Array.from(o);
    }(i) || function(o, c) {
      if (o) {
        if (typeof o == "string")
          return w(o, c);
        var s = Object.prototype.toString.call(o).slice(8, -1);
        if (s === "Object" && o.constructor && (s = o.constructor.name), s === "Map" || s === "Set")
          return Array.from(o);
        if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
          return w(o, c);
      }
    }(i) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function w(i, o) {
    (o == null || o > i.length) && (o = i.length);
    for (var c = 0, s = new Array(o); c < o; c++)
      s[c] = i[c];
    return s;
  }
  var x, h, $, M, q, T = {}, O = [], b = [], E = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), X = /PhantomJS/.test(navigator.userAgent) && !0, S = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if (E) {
    var B = document.createElement("a");
    B.href = "https://smooch.io/live-web-chat/?utm_source=widget", B.text = "Powered by Zendesk Sunshine", f(function() {
      document.body.appendChild(B);
    });
  }
  function Z() {
    var i = document.createElement("link");
    i.rel = "stylesheet", i.type = "text/css", i.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(i);
  }
  function G(i) {
    var o;
    window.__onWebMessengerFrameReady__ = function() {
    }, x = i, $ || (o = h, g(function(z) {
      var et = z.rule, nt = z.size;
      l.a.register(p(et), function() {
        o.contentWindow.postMessage({ type: "sizeChange", value: nt }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var c = S[0], s = 0; s < S.length; c = S[++s])
      T[c] = x[c];
    if (b) {
      for (var v = b[0], C = 0; C < b.length; v = b[++C]) {
        var I;
        (I = x).on.apply(I, A(v.args));
      }
      b = void 0;
    }
    if (q) {
      var F, N = (F = x).init.apply(F, A(q));
      q = void 0;
      for (var R = O[0], J = 0; J < O.length; R = O[++J])
        N = R.type === "then" ? N.then(R.next) : N.catch(R.next);
      O = [];
    }
  }
  var U = function(i) {
    return i.contentWindow && i.contentWindow.document;
  };
  function Y() {
    if (!h) {
      var i = null, o = !1;
      (h = document.createElement("iframe")).id = "web-messenger-container", h.frameBorder = 0, h.allowFullscreen = !0, h.allowTransparency = !0, h.scrolling = "no", h.className = r.a.iframe;
      var c = function() {
        o = !0, clearInterval(i), delete h.onload;
        var s = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, v = s ? 'nonce="'.concat(s, '"') : "", C = `
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
        if ("srcdoc" in h)
          h.srcdoc = C;
        else {
          var I = U(h);
          I.open(), I.write(C), I.close();
        }
      };
      i = setInterval(function() {
        var s = U(h);
        o || !s || s.readyState !== "complete" && s.readyState !== "interactive" || c();
      }, 1e3), h.onload = function() {
        o || c();
      };
    }
    $ ? M && (M.appendChild(h), M = void 0) : document.body.appendChild(h);
  }
  var tt = { VERSION: "5.5.5", on: function() {
    b || (b = []);
    for (var i = arguments.length, o = new Array(i), c = 0; c < i; c++)
      o[c] = arguments[c];
    b.push({ args: o });
  }, init: function() {
    for (var i = arguments.length, o = new Array(i), c = 0; c < i; c++)
      o[c] = arguments[c];
    q = o, $ = o.length > 0 && !!o[0].embedded, E || X || f(function() {
      Z(), Y();
    });
    var s = { then: function(v) {
      return O.push({ type: "then", next: v }), s;
    }, catch: function(v) {
      return O.push({ type: "catch", next: v }), s;
    } };
    return s;
  }, render: function(i) {
    h ? i.appendChild(h) : M = i;
  }, destroy: function() {
    x && (x.destroy(), h.remove ? h.remove() : h.parentNode.removeChild(h), g(function(i) {
      var o = i.rule;
      l.a.unregister(p(o));
    }), k());
  } };
  function k() {
    if (!document.getElementById("web-messenger-container")) {
      x = void 0, h = void 0, window.__onWebMessengerFrameReady__ = G;
      for (var i = S[0], o = 0; o < S.length; i = S[++o])
        T[i] && delete T[i];
      y(T, tt);
    }
  }
  k(), a.default = T;
}]);
const Q = "Ym9iYmllWkQ6I0Q4WmpHNzk3WWV5ayZmVQ==", K = "https://dev.golinguist.com", _ = "en-us", rt = (e) => {
  const a = new XMLHttpRequest(), t = {
    translationType: "machine",
    text: e
  };
  return a.open("POST", `${K}/linguistnow/resources/locale/detectLocale/`, !1), a.setRequestHeader("Authorization", `Basic ${Q}`), a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify(t)), a.status === 200 ? JSON.parse(a.responseText).detectedLanguage : null;
}, W = (e, a, t) => {
  const n = {
    sourceContent: e,
    sourceLocale: a,
    targetLocale: t,
    rnResponseProjectId: null,
    contentTypeName: "browser",
    translationType: "machine",
    incidentId: "ZD ChatBot Plugin",
    textType: "text",
    threadTypeId: 15,
    translationIterationId: 1,
    userTypeId: 3
  }, r = new XMLHttpRequest();
  if (r.open("POST", `${K}/linguistnow/resources/v1/translate/`, !1), r.setRequestHeader("Authorization", `Basic ${Q}`), r.setRequestHeader("Content-Type", "application/json"), r.send(JSON.stringify(n)), r.status === 200) {
    const f = JSON.parse(r.responseText);
    return console.debug(`Running LIO Translate API: ${e}`), f.translatedText;
  }
  return null;
}, V = (e) => e.toLocaleLowerCase() !== _;
var L = /* @__PURE__ */ ((e) => (e[e.translation = 0] = "translation", e[e.answerBot = 1] = "answerBot", e[e.agent = 2] = "agent", e))(L || {});
const H = (e, a) => {
  switch (a) {
    case 1:
      return "answerBot:" + e;
    case 0:
      return "translation:" + e;
    case 2:
      return "agent:" + e;
    default:
      throw Error("Invalid type");
  }
}, j = (e, a, t) => {
  const n = localStorage.getItem(e);
  if (n) {
    const r = new Map(JSON.parse(n));
    r.set(a, t), localStorage.setItem(e, JSON.stringify([...r]));
  } else {
    const r = /* @__PURE__ */ new Map();
    r.set(a, t), localStorage.setItem(e, JSON.stringify([...r]));
  }
}, P = (e, a) => {
  const t = localStorage.getItem(e);
  if (t) {
    const r = new Map(JSON.parse(t)).get(a);
    return r !== null ? r : null;
  }
  return null;
}, it = () => ot, at = it(), st = at.default, ct = "63dd364c057947010e028fa1", lt = () => {
  if (typeof Intl < "u")
    try {
      return Intl.NumberFormat().resolvedOptions().locale.toLocaleLowerCase();
    } catch {
      return console.error("Cannot get locale from Intl"), null;
    }
  return null;
}, D = (e) => {
  let a = lt();
  return V(a) || (a = rt(e)), a;
};
st.init({
  integrationId: ct,
  canUserSeeConversationList: !1,
  delegate: {
    beforeSend(e, a) {
      if (e.type === "text") {
        const t = e == null ? void 0 : e.text;
        if (t !== null && t.length > 0) {
          const n = D(e.text);
          if (n != null && V(n)) {
            localStorage.setItem("user-locale", n), console.debug(`Detected User Locale: ${n}`);
            const f = W(t, n, _);
            f != null && (e.text = f, j(H(a.conversation.id, L.translation), f, t));
          }
        }
      }
      return e;
    },
    beforeDisplay(e, a) {
      var f, p;
      const t = e.text, n = ((f = e.source) == null ? void 0 : f.type) === "zd:answerBot", r = ((p = e.source) == null ? void 0 : p.type) === "zd:agentWorkspace";
      if (e.type === "text")
        if (n) {
          const u = H(a.conversation.id, L.answerBot), l = localStorage.getItem("user-locale");
          let d = P(u, t);
          d ? (e.text = d, console.debug(`Original Text: "${t}" Replaced with: "${d}"`)) : l != null && l !== _ && (d = W(t, _, l), d && (j(u, t, d), e.text = d, console.debug(`Original Text: "${t}" Replaced with: "${d}"`)));
          const m = e.actions;
          if (m)
            for (const g of m) {
              let y = P(u, g.text);
              y ? (g.text = y, console.debug(`Original Text: "${g.text}" Replaced with: "${y}"`)) : l != null && l !== _ && (y = W(g.text, _, l), y && (j(u, g.text, y), g.text = y, console.debug(`Original Text: "${g.text}" Replaced with: "${y}"`)));
            }
        } else if (r) {
          const u = H(a.conversation.id, L.agent);
          let l = P(u, t);
          if (l)
            e.text = l, console.debug(`Original Text: "${t}" Replaced with: "${l}"`);
          else {
            const d = localStorage.getItem("user-locale"), m = D(e.text);
            m != null && d !== d && (l = W(t, m, d), l && (j(u, t, l), e.text = l, console.debug(`Original Text: "${t}" Replaced with: "${l}"`)));
          }
        } else {
          const u = P(H(a.conversation.id, L.translation), e.text);
          u && (e.text = u, console.debug(`Original Text: "${t}" Replaced with: "${u}"`));
        }
      return e;
    }
  }
});
