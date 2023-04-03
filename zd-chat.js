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
var rt = function(r) {
  var o = {};
  function n(t) {
    if (o[t])
      return o[t].exports;
    var e = o[t] = { i: t, l: !1, exports: {} };
    return r[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports;
  }
  return n.m = r, n.c = o, n.d = function(t, e, u) {
    n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: u });
  }, n.r = function(t) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, n.t = function(t, e) {
    if (1 & e && (t = n(t)), 8 & e || 4 & e && typeof t == "object" && t && t.__esModule)
      return t;
    var u = /* @__PURE__ */ Object.create(null);
    if (n.r(u), Object.defineProperty(u, "default", { enumerable: !0, value: t }), 2 & e && typeof t != "string")
      for (var d in t)
        n.d(u, d, function(g) {
          return t[g];
        }.bind(null, d));
    return u;
  }, n.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default;
    } : function() {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "https://cdn.smooch.io/", n(n.s = 6);
}([function(r, o, n) {
  var t = n(3);
  r.exports = new t();
}, function(r, o) {
  r.exports = { isFunction: function(n) {
    return typeof n == "function";
  }, isArray: function(n) {
    return Object.prototype.toString.apply(n) === "[object Array]";
  }, each: function(n, t) {
    for (var e = 0, u = n.length; e < u && t(n[e], e) !== !1; e++)
      ;
  } };
}, function(r, o, n) {
  r.exports = { iframe: "_2ChX4GFAl1-UBiWknYZyEQ", displayButton: "avcHn2VQJenBvoR5hilPG", widgetClosed: "_3fQbteJd3oQu4il3LpMKkX", "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7", "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0", "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV", "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M", displayTab: "_3dtqBiGeC8k3yop4A-9Lwm", widgetOpened: "_2TELtk5nDKlQudVSivRjpt", widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn" };
}, function(r, o, n) {
  var t = n(4), e = n(1), u = e.each, d = e.isFunction, g = e.isArray;
  function f() {
    if (!window.matchMedia)
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  f.prototype = { constructor: f, register: function(c, h, m) {
    var v = this.queries, O = m && this.browserIsIncapable;
    return v[c] || (v[c] = new t(c, O)), d(h) && (h = { match: h }), g(h) || (h = [h]), u(h, function(w) {
      d(w) && (w = { match: w }), v[c].addHandler(w);
    }), this;
  }, unregister: function(c, h) {
    var m = this.queries[c];
    return m && (h ? m.removeHandler(h) : (m.clear(), delete this.queries[c])), this;
  } }, r.exports = f;
}, function(r, o, n) {
  var t = n(5), e = n(1).each;
  function u(d, g) {
    this.query = d, this.isUnconditional = g, this.handlers = [], this.mql = window.matchMedia(d);
    var f = this;
    this.listener = function(c) {
      f.mql = c.currentTarget || c, f.assess();
    }, this.mql.addListener(this.listener);
  }
  u.prototype = { constuctor: u, addHandler: function(d) {
    var g = new t(d);
    this.handlers.push(g), this.matches() && g.on();
  }, removeHandler: function(d) {
    var g = this.handlers;
    e(g, function(f, c) {
      if (f.equals(d))
        return f.destroy(), !g.splice(c, 1);
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    e(this.handlers, function(d) {
      d.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var d = this.matches() ? "on" : "off";
    e(this.handlers, function(g) {
      g[d]();
    });
  } }, r.exports = u;
}, function(r, o) {
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
  } }, r.exports = n;
}, function(r, o, n) {
  n.r(o);
  var t = n(2), e = n.n(t);
  function u(a) {
    document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive" || !document.body ? document.addEventListener("DOMContentLoaded", function() {
      a();
    }) : a();
  }
  function d(a) {
    var i = ["screen"];
    return a.minHeight && i.push("(min-height: ".concat(a.minHeight, "px)")), a.maxHeight && i.push("(max-height: ".concat(a.maxHeight, "px)")), a.minWidth && i.push("(min-width: ".concat(a.minWidth, "px)")), a.maxWidth && i.push("(max-width: ".concat(a.maxWidth, "px)")), i.join(" and ");
  }
  var g = n(0), f = n.n(g), c = { lg: { minHeight: 668, minWidth: 1200 }, md: [{ minHeight: 508, minWidth: 768, maxWidth: 1199 }, { minHeight: 508, maxHeight: 667, minWidth: 768 }], sm: { maxHeight: 507, minWidth: 768 }, xs: { maxWidth: 767 } }, h = ["lg", "md", "sm", "xs"];
  function m(a) {
    for (var i = 0; i < h.length; i++) {
      var l = h[i], s = c[l];
      Object.prototype.toString.call(s) !== "[object Array]" && (s = [s]);
      for (var y = 0; y < s.length; y++)
        a({ rule: s[y], size: l });
    }
  }
  function v() {
    return (v = Object.assign ? Object.assign.bind() : function(a) {
      for (var i = 1; i < arguments.length; i++) {
        var l = arguments[i];
        for (var s in l)
          Object.prototype.hasOwnProperty.call(l, s) && (a[s] = l[s]);
      }
      return a;
    }).apply(this, arguments);
  }
  function O(a) {
    return function(i) {
      if (Array.isArray(i))
        return w(i);
    }(a) || function(i) {
      if (typeof Symbol < "u" && i[Symbol.iterator] != null || i["@@iterator"] != null)
        return Array.from(i);
    }(a) || function(i, l) {
      if (i) {
        if (typeof i == "string")
          return w(i, l);
        var s = Object.prototype.toString.call(i).slice(8, -1);
        if (s === "Object" && i.constructor && (s = i.constructor.name), s === "Map" || s === "Set")
          return Array.from(i);
        if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
          return w(i, l);
      }
    }(a) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function w(a, i) {
    (i == null || i > a.length) && (i = a.length);
    for (var l = 0, s = new Array(i); l < i; l++)
      s[l] = a[l];
    return s;
  }
  var b, p, j, M, q, L = {}, _ = [], S = [], $ = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), X = /PhantomJS/.test(navigator.userAgent) && !0, C = ["init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "createConversation", "updateConversation", "updateUser", "getDisplayedConversation", "getConversationById", "getConversations", "getMoreConversations", "hasMoreConversations", "getUser", "open", "close", "isOpened", "loadConversation", "setDelegate", "markAllAsRead", "showNotificationChannelPrompt", "setPredefinedMessage", "startTyping", "stopTyping"];
  if ($) {
    var B = document.createElement("a");
    B.href = "https://smooch.io/live-web-chat/?utm_source=widget", B.text = "Powered by Zendesk Sunshine", u(function() {
      document.body.appendChild(B);
    });
  }
  function G() {
    var a = document.createElement("link");
    a.rel = "stylesheet", a.type = "text/css", a.href = "https://cdn.smooch.io/smooch.5.5.5.css", document.body.appendChild(a);
  }
  function Y(a) {
    var i;
    window.__onWebMessengerFrameReady__ = function() {
    }, b = a, j || (i = p, m(function(Q) {
      var nt = Q.rule, ot = Q.size;
      f.a.register(d(nt), function() {
        i.contentWindow.postMessage({ type: "sizeChange", value: ot }, "".concat(location.protocol, "//").concat(location.host));
      });
    }));
    for (var l = C[0], s = 0; s < C.length; l = C[++s])
      L[l] = b[l];
    if (S) {
      for (var y = S[0], T = 0; T < S.length; y = S[++T]) {
        var I;
        (I = b).on.apply(I, O(y.args));
      }
      S = void 0;
    }
    if (q) {
      var z, P = (z = b).init.apply(z, O(q));
      q = void 0;
      for (var W = _[0], J = 0; J < _.length; W = _[++J])
        P = W.type === "then" ? P.then(W.next) : P.catch(W.next);
      _ = [];
    }
  }
  var k = function(a) {
    return a.contentWindow && a.contentWindow.document;
  };
  function tt() {
    if (!p) {
      var a = null, i = !1;
      (p = document.createElement("iframe")).id = "web-messenger-container", p.frameBorder = 0, p.allowFullscreen = !0, p.allowTransparency = !0, p.scrolling = "no", p.className = e.a.iframe;
      var l = function() {
        i = !0, clearInterval(a), delete p.onload;
        var s = window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null, y = s ? 'nonce="'.concat(s, '"') : "", T = `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            `.concat("", `
                            <link rel="stylesheet" href="`).concat("https://cdn.smooch.io/frame.5.5.5.css", '" type="text/css" ').concat(y, ` />
                            <script src="`).concat("https://cdn.smooch.io/frame.5.5.5.min.js", '" async crossorigin="anonymous" ').concat(y, `><\/script>
                        </head>
                        <body>
                            <div id="mount"></div>
                        </body>
                    </html>
                    `);
        if ("srcdoc" in p)
          p.srcdoc = T;
        else {
          var I = k(p);
          I.open(), I.write(T), I.close();
        }
      };
      a = setInterval(function() {
        var s = k(p);
        i || !s || s.readyState !== "complete" && s.readyState !== "interactive" || l();
      }, 1e3), p.onload = function() {
        i || l();
      };
    }
    j ? M && (M.appendChild(p), M = void 0) : document.body.appendChild(p);
  }
  var et = { VERSION: "5.5.5", on: function() {
    S || (S = []);
    for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
      i[l] = arguments[l];
    S.push({ args: i });
  }, init: function() {
    for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
      i[l] = arguments[l];
    q = i, j = i.length > 0 && !!i[0].embedded, $ || X || u(function() {
      G(), tt();
    });
    var s = { then: function(y) {
      return _.push({ type: "then", next: y }), s;
    }, catch: function(y) {
      return _.push({ type: "catch", next: y }), s;
    } };
    return s;
  }, render: function(a) {
    p ? a.appendChild(p) : M = a;
  }, destroy: function() {
    b && (b.destroy(), p.remove ? p.remove() : p.parentNode.removeChild(p), m(function(a) {
      var i = a.rule;
      f.a.unregister(d(i));
    }), F());
  } };
  function F() {
    if (!document.getElementById("web-messenger-container")) {
      b = void 0, p = void 0, window.__onWebMessengerFrameReady__ = Y;
      for (var a = C[0], i = 0; i < C.length; a = C[++i])
        L[a] && delete L[a];
      v(L, et);
    }
  }
  F(), o.default = L;
}]);
const D = "Ym9iYmllWkQ6I0Q4WmpHNzk3WWV5ayZmVQ==", K = "https://dev.golinguist.com", R = "en-us", it = (r) => {
  const o = new XMLHttpRequest(), n = {
    translationType: "machine",
    text: r
  };
  return o.open("POST", `${K}/linguistnow/resources/locale/detectLocale/`, !1), o.setRequestHeader("Authorization", `Basic ${D}`), o.setRequestHeader("Content-Type", "application/json"), o.send(JSON.stringify(n)), o.status === 200 ? JSON.parse(o.responseText).detectedLanguage : null;
}, N = (r, o, n) => {
  const t = {
    sourceContent: r,
    sourceLocale: o,
    targetLocale: n,
    rnResponseProjectId: null,
    contentTypeName: "browser",
    translationType: "machine",
    incidentId: "ZD ChatBot Plugin",
    textType: "text",
    threadTypeId: 15,
    translationIterationId: 1,
    userTypeId: 3
  }, e = new XMLHttpRequest();
  if (e.open("POST", `${K}/linguistnow/resources/v1/translate/`, !1), e.setRequestHeader("Authorization", `Basic ${D}`), e.setRequestHeader("Content-Type", "application/json"), e.send(JSON.stringify(t)), e.status === 200) {
    const u = JSON.parse(e.responseText);
    return console.debug(`Running LIO Translate API: ${r}`), u.translatedText;
  }
  return null;
}, V = (r) => r.toLocaleLowerCase() !== R;
var x = /* @__PURE__ */ ((r) => (r[r.translation = 0] = "translation", r[r.answerBot = 1] = "answerBot", r[r.agent = 2] = "agent", r[r.carousel = 3] = "carousel", r))(x || {});
const H = (r, o) => {
  switch (o) {
    case 1:
      return "answerBot:" + r;
    case 0:
      return "translation:" + r;
    case 2:
      return "agent:" + r;
    case 3:
      return "carousel:" + r;
    default:
      throw Error("Invalid type");
  }
}, E = (r, o, n) => {
  const t = localStorage.getItem(r);
  if (t) {
    const e = new Map(JSON.parse(t));
    e.set(o, n), localStorage.setItem(r, JSON.stringify([...e]));
  } else {
    const e = /* @__PURE__ */ new Map();
    e.set(o, n), localStorage.setItem(r, JSON.stringify([...e]));
  }
}, U = (r, o) => {
  const n = localStorage.getItem(r);
  if (n) {
    const e = new Map(JSON.parse(n)).get(o);
    return e !== null ? e : null;
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
}, Z = (r) => {
  let o = lt();
  return V(o) || (o = it(r)), o;
}, A = (r, o, n) => {
  const t = H(o, n);
  let e = U(t, r);
  if (e)
    return e;
  const u = localStorage.getItem("user-locale");
  return u != null && u !== R && (e = N(r, R, u), e) ? (E(t, r, e), e) : null;
}, ut = (r) => {
  const o = r == null ? void 0 : r.toLocaleLowerCase().replace("_", "-").split("-");
  return o ? dt(o[0]) : null;
}, dt = (r) => {
  switch (r) {
    case "zh":
      return "zh-hk";
    default:
      return r;
  }
}, ft = (r) => {
  ct.init({
    integrationId: r,
    canUserSeeConversationList: !1,
    delegate: {
      beforeSend(o, n) {
        if (o.type === "text") {
          const t = o == null ? void 0 : o.text;
          if (t !== null && t.length > 0) {
            const e = Z(o.text);
            if (e != null && V(e)) {
              localStorage.setItem("user-locale", e), console.debug(`Detected User Locale: ${e}`);
              const d = N(t, e, R);
              d != null && (o.text = d, E(H(n.conversation.id, x.translation), d, t));
            }
          }
        }
        return o;
      },
      beforeDisplay(o, n) {
        var d, g;
        const t = o.text, e = ((d = o.source) == null ? void 0 : d.type) === "zd:answerBot", u = ((g = o.source) == null ? void 0 : g.type) === "zd:agentWorkspace";
        if (o.type === "text")
          if (e) {
            let f = A(o.text, n.conversation.id, x.answerBot);
            f && (o.text = f, console.debug(`Original Text: "${t}" Replaced with: "${f}"`));
            const c = o.actions;
            if (c)
              for (const h of c) {
                let m = A(h.text, n.conversation.id, x.answerBot);
                m && (h.text = m, console.debug(`Original Text: "${h.text}" Replaced with: "${m}"`));
              }
          } else if (u) {
            const f = H(n.conversation.id, x.agent);
            let c = U(f, t);
            if (c)
              o.text = c, console.debug(`Original Text: "${t}" Replaced with: "${c}"`);
            else {
              const h = localStorage.getItem("user-locale"), m = Z(o.text);
              m != null && h !== m && (c = N(t, m, h), c && (E(f, t, c), o.text = c, console.debug(`Original Text: "${t}" Replaced with: "${c}"`)));
            }
          } else {
            const f = U(H(n.conversation.id, x.translation), o.text);
            f && (o.text = f, console.debug(`Original Text: "${t}" Replaced with: "${f}"`));
          }
        else if (o.type === "carousel" && e) {
          let f = o;
          for (const c of f.items) {
            const h = A(c.title, n.conversation.id, x.carousel);
            h && (c.title = h);
            const m = A(c.description, n.conversation.id, x.carousel);
            m && (c.description = m);
            for (const v of c.actions) {
              const O = A(v.text, n.conversation.id, x.carousel);
              O && (v.text = O);
              const w = localStorage.getItem("user-locale"), b = ut(w);
              b && (v.uri = v.uri.replace("en-us", b));
            }
          }
          return f;
        }
        return o;
      }
    }
  });
};
export {
  ft as initChatBot
};
