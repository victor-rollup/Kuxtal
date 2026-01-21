import { watch as S_, defineComponent as fe, shallowRef as ib, reactive as ob, inject as dt, computed as De, h as q_, unref as Xe, provide as to, ref as R_, shallowReactive as ub, getCurrentInstance as x_, watchEffect as sb, nextTick as cb, createElementBlock as T, openBlock as D, createBlock as be, createCommentVNode as me, resolveDynamicComponent as lt, toDisplayString as Oe, withModifiers as db, renderSlot as he, withCtx as ze, createElementVNode as b, createVNode as ft, Fragment as ht, renderList as vt, mergeModels as sr, useModel as nf, withDirectives as af, vModelSelect as fb, vModelDynamic as lb, vModelText as hb, onMounted as vb, resolveComponent as mb, mergeProps as _b, createStaticVNode as ae } from "vue";
function gb() {
  return j_().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function j_() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const bb = typeof Proxy == "function", Ob = "devtools-plugin:setup", Mb = "plugin:settings:set";
let $e, Zd;
function pb() {
  var e;
  return $e !== void 0 || (typeof window < "u" && window.performance ? ($e = !0, Zd = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? ($e = !0, Zd = globalThis.perf_hooks.performance) : $e = !1), $e;
}
function wb() {
  return pb() ? Zd.now() : Date.now();
}
class Db {
  constructor(r, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = r, this.hook = n;
    const a = {};
    if (r.settings)
      for (const u in r.settings) {
        const s = r.settings[u];
        a[u] = s.defaultValue;
      }
    const i = `__vue-devtools-plugin-settings__${r.id}`;
    let o = Object.assign({}, a);
    try {
      const u = localStorage.getItem(i), s = JSON.parse(u);
      Object.assign(o, s);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(u) {
        try {
          localStorage.setItem(i, JSON.stringify(u));
        } catch {
        }
        o = u;
      },
      now() {
        return wb();
      }
    }, n && n.on(Mb, (u, s) => {
      u === this.plugin.id && this.fallbacks.setSettings(s);
    }), this.proxiedOn = new Proxy({}, {
      get: (u, s) => this.target ? this.target.on[s] : (...c) => {
        this.onQueue.push({
          method: s,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (u, s) => this.target ? this.target[s] : s === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(s) ? (...c) => (this.targetQueue.push({
        method: s,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[s](...c)) : (...c) => new Promise((l) => {
        this.targetQueue.push({
          method: s,
          args: c,
          resolve: l
        });
      })
    });
  }
  async setRealTarget(r) {
    this.target = r;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Pb(e, r) {
  const n = e, a = j_(), i = gb(), o = bb && n.enableEarlyProxy;
  if (i && (a.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    i.emit(Ob, e, r);
  else {
    const u = o ? new Db(n, i) : null;
    (a.__VUE_DEVTOOLS_PLUGINS__ = a.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: r,
      proxy: u
    }), u && r(u.proxiedTarget);
  }
}
const Ne = typeof document < "u";
function N_(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ib(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && N_(e.default);
}
const G = Object.assign;
function ro(e, r) {
  const n = {};
  for (const a in r) {
    const i = r[a];
    n[a] = Me(i) ? i.map(e) : e(i);
  }
  return n;
}
const ct = () => {
}, Me = Array.isArray;
function Sf(e, r) {
  const n = {};
  for (const a in e) n[a] = a in r ? r[a] : e[a];
  return n;
}
function Q(e) {
  const r = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(r));
}
const Y_ = /#/g, Eb = /&/g, Tb = /\//g, Sb = /=/g, qb = /\?/g, W_ = /\+/g, Rb = /%5B/g, xb = /%5D/g, C_ = /%5E/g, jb = /%60/g, F_ = /%7B/g, Nb = /%7C/g, A_ = /%7D/g, Yb = /%20/g;
function of(e) {
  return e == null ? "" : encodeURI("" + e).replace(Nb, "|").replace(Rb, "[").replace(xb, "]");
}
function Wb(e) {
  return of(e).replace(F_, "{").replace(A_, "}").replace(C_, "^");
}
function Xd(e) {
  return of(e).replace(W_, "%2B").replace(Yb, "+").replace(Y_, "%23").replace(Eb, "%26").replace(jb, "`").replace(F_, "{").replace(A_, "}").replace(C_, "^");
}
function Cb(e) {
  return Xd(e).replace(Sb, "%3D");
}
function Fb(e) {
  return of(e).replace(Y_, "%23").replace(qb, "%3F");
}
function Ab(e) {
  return Fb(e).replace(Tb, "%2F");
}
function tt(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && Q(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const Hb = /\/$/, Lb = (e) => e.replace(Hb, "");
function no(e, r, n = "/") {
  let a, i = {}, o = "", u = "";
  const s = r.indexOf("#");
  let c = r.indexOf("?");
  return c = s >= 0 && c > s ? -1 : c, c >= 0 && (a = r.slice(0, c), o = r.slice(c, s > 0 ? s : r.length), i = e(o.slice(1))), s >= 0 && (a = a || r.slice(0, s), u = r.slice(s, r.length)), a = Bb(a ?? r, n), {
    fullPath: a + o + u,
    path: a,
    query: i,
    hash: tt(u)
  };
}
function yb(e, r) {
  const n = r.query ? e(r.query) : "";
  return r.path + (n && "?") + n + (r.hash || "");
}
function qf(e, r) {
  return !r || !e.toLowerCase().startsWith(r.toLowerCase()) ? e : e.slice(r.length) || "/";
}
function Rf(e, r, n) {
  const a = r.matched.length - 1, i = n.matched.length - 1;
  return a > -1 && a === i && ye(r.matched[a], n.matched[i]) && H_(r.params, n.params) && e(r.query) === e(n.query) && r.hash === n.hash;
}
function ye(e, r) {
  return (e.aliasOf || e) === (r.aliasOf || r);
}
function H_(e, r) {
  if (Object.keys(e).length !== Object.keys(r).length) return !1;
  for (var n in e) if (!zb(e[n], r[n])) return !1;
  return !0;
}
function zb(e, r) {
  return Me(e) ? xf(e, r) : Me(r) ? xf(r, e) : e?.valueOf() === r?.valueOf();
}
function xf(e, r) {
  return Me(r) ? e.length === r.length && e.every((n, a) => n === r[a]) : e.length === 1 && e[0] === r;
}
function Bb(e, r) {
  if (e.startsWith("/")) return e;
  if (process.env.NODE_ENV !== "production" && !r.startsWith("/"))
    return Q(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${r}". It should look like "/${r}".`), e;
  if (!e) return r;
  const n = r.split("/"), a = e.split("/"), i = a[a.length - 1];
  (i === ".." || i === ".") && a.push("");
  let o = n.length - 1, u, s;
  for (u = 0; u < a.length; u++)
    if (s = a[u], s !== ".")
      if (s === "..")
        o > 1 && o--;
      else break;
  return n.slice(0, o).join("/") + "/" + a.slice(u).join("/");
}
const Ae = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
let Kd = /* @__PURE__ */ (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), ao = /* @__PURE__ */ (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
function Qb(e) {
  if (!e) if (Ne) {
    const r = document.querySelector("base");
    e = r && r.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Lb(e);
}
const Vb = /^[^#]+#/;
function Gb(e, r) {
  return e.replace(Vb, "#") + r;
}
function Ub(e, r) {
  const n = document.documentElement.getBoundingClientRect(), a = e.getBoundingClientRect();
  return {
    behavior: r.behavior,
    left: a.left - n.left - (r.left || 0),
    top: a.top - n.top - (r.top || 0)
  };
}
const dr = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Zb(e) {
  let r;
  if ("el" in e) {
    const n = e.el, a = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!a || !document.getElementById(e.el.slice(1))))
      try {
        const o = document.querySelector(e.el);
        if (a && o) {
          Q(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        Q(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const i = typeof n == "string" ? a ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!i) {
      process.env.NODE_ENV !== "production" && Q(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    r = Ub(i, e);
  } else r = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(r) : window.scrollTo(r.left != null ? r.left : window.scrollX, r.top != null ? r.top : window.scrollY);
}
function jf(e, r) {
  return (history.state ? history.state.position - r : -1) + e;
}
const Jd = /* @__PURE__ */ new Map();
function Xb(e, r) {
  Jd.set(e, r);
}
function Kb(e) {
  const r = Jd.get(e);
  return Jd.delete(e), r;
}
function cr(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function L_(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let te = /* @__PURE__ */ (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const $d = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : ""), Jb = {
  [te.MATCHER_NOT_FOUND]({ location: e, currentLocation: r }) {
    return `No match for
 ${JSON.stringify(e)}${r ? `
while being at
` + JSON.stringify(r) : ""}`;
  },
  [te.NAVIGATION_GUARD_REDIRECT]({ from: e, to: r }) {
    return `Redirected from "${e.fullPath}" to "${kb(r)}" via a navigation guard.`;
  },
  [te.NAVIGATION_ABORTED]({ from: e, to: r }) {
    return `Navigation aborted from "${e.fullPath}" to "${r.fullPath}" via a navigation guard.`;
  },
  [te.NAVIGATION_CANCELLED]({ from: e, to: r }) {
    return `Navigation cancelled from "${e.fullPath}" to "${r.fullPath}" with a new navigation.`;
  },
  [te.NAVIGATION_DUPLICATED]({ from: e, to: r }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function rt(e, r) {
  return process.env.NODE_ENV !== "production" ? G(new Error(Jb[e](r)), {
    type: e,
    [$d]: !0
  }, r) : G(/* @__PURE__ */ new Error(), {
    type: e,
    [$d]: !0
  }, r);
}
function xe(e, r) {
  return e instanceof Error && $d in e && (r == null || !!(e.type & r));
}
const $b = [
  "params",
  "query",
  "hash"
];
function kb(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const r = {};
  for (const n of $b) n in e && (r[n] = e[n]);
  return JSON.stringify(r, null, 2);
}
function e1(e) {
  const r = {};
  if (e === "" || e === "?") return r;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let a = 0; a < n.length; ++a) {
    const i = n[a].replace(W_, " "), o = i.indexOf("="), u = tt(o < 0 ? i : i.slice(0, o)), s = o < 0 ? null : tt(i.slice(o + 1));
    if (u in r) {
      let c = r[u];
      Me(c) || (c = r[u] = [c]), c.push(s);
    } else r[u] = s;
  }
  return r;
}
function Nf(e) {
  let r = "";
  for (let n in e) {
    const a = e[n];
    if (n = Cb(n), a == null) {
      a !== void 0 && (r += (r.length ? "&" : "") + n);
      continue;
    }
    (Me(a) ? a.map((i) => i && Xd(i)) : [a && Xd(a)]).forEach((i) => {
      i !== void 0 && (r += (r.length ? "&" : "") + n, i != null && (r += "=" + i));
    });
  }
  return r;
}
function t1(e) {
  const r = {};
  for (const n in e) {
    const a = e[n];
    a !== void 0 && (r[n] = Me(a) ? a.map((i) => i == null ? null : "" + i) : a == null ? a : "" + a);
  }
  return r;
}
const r1 = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), Yf = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), uf = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), y_ = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), kd = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function ot() {
  let e = [];
  function r(a) {
    return e.push(a), () => {
      const i = e.indexOf(a);
      i > -1 && e.splice(i, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: r,
    list: () => e.slice(),
    reset: n
  };
}
function Le(e, r, n, a, i, o = (u) => u()) {
  const u = a && (a.enterCallbacks[i] = a.enterCallbacks[i] || []);
  return () => new Promise((s, c) => {
    const l = (f) => {
      f === !1 ? c(rt(te.NAVIGATION_ABORTED, {
        from: n,
        to: r
      })) : f instanceof Error ? c(f) : cr(f) ? c(rt(te.NAVIGATION_GUARD_REDIRECT, {
        from: r,
        to: f
      })) : (u && a.enterCallbacks[i] === u && typeof f == "function" && u.push(f), s());
    }, v = o(() => e.call(a && a.instances[i], r, n, process.env.NODE_ENV !== "production" ? n1(l, r, n) : l));
    let d = Promise.resolve(v);
    if (e.length < 3 && (d = d.then(l)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const f = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof v == "object" && "then" in v) d = d.then((h) => l._called ? h : (Q(f), Promise.reject(/* @__PURE__ */ new Error("Invalid navigation guard"))));
      else if (v !== void 0 && !l._called) {
        Q(f), c(/* @__PURE__ */ new Error("Invalid navigation guard"));
        return;
      }
    }
    d.catch((f) => c(f));
  });
}
function n1(e, r, n) {
  let a = 0;
  return function() {
    a++ === 1 && Q(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${r.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, a === 1 && e.apply(null, arguments);
  };
}
function io(e, r, n, a, i = (o) => o()) {
  const o = [];
  for (const u of e) {
    process.env.NODE_ENV !== "production" && !u.components && u.children && !u.children.length && Q(`Record with path "${u.path}" is either missing a "component(s)" or "children" property.`);
    for (const s in u.components) {
      let c = u.components[s];
      if (process.env.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw Q(`Component "${s}" in record with path "${u.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          Q(`Component "${s}" in record with path "${u.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const l = c;
          c = () => l;
        } else c.__asyncLoader && !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, Q(`Component "${s}" in record with path "${u.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(r !== "beforeRouteEnter" && !u.instances[s]))
        if (N_(c)) {
          const l = (c.__vccOpts || c)[r];
          l && o.push(Le(l, n, a, u, s, i));
        } else {
          let l = c();
          process.env.NODE_ENV !== "production" && !("catch" in l) && (Q(`Component "${s}" in record with path "${u.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), o.push(() => l.then((v) => {
            if (!v) throw new Error(`Couldn't resolve component "${s}" at "${u.path}"`);
            const d = Ib(v) ? v.default : v;
            u.mods[s] = v, u.components[s] = d;
            const f = (d.__vccOpts || d)[r];
            return f && Le(f, n, a, u, s, i)();
          }));
        }
    }
  }
  return o;
}
function a1(e, r) {
  const n = [], a = [], i = [], o = Math.max(r.matched.length, e.matched.length);
  for (let u = 0; u < o; u++) {
    const s = r.matched[u];
    s && (e.matched.find((l) => ye(l, s)) ? a.push(s) : n.push(s));
    const c = e.matched[u];
    c && (r.matched.find((l) => ye(l, c)) || i.push(c));
  }
  return [
    n,
    a,
    i
  ];
}
function ut(e, r) {
  const n = G({}, e, { matched: e.matched.map((a) => m1(a, [
    "instances",
    "children",
    "aliasOf"
  ])) });
  return { _custom: {
    type: null,
    readOnly: !0,
    display: e.fullPath,
    tooltip: r,
    value: n
  } };
}
function bt(e) {
  return { _custom: { display: e } };
}
let i1 = 0;
function o1(e, r, n) {
  if (r.__hasDevtools) return;
  r.__hasDevtools = !0;
  const a = i1++;
  Pb({
    id: "org.vuejs.router" + (a ? "." + a : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (i) => {
    typeof i.now != "function" && Q("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), i.on.inspectComponent((v, d) => {
      v.instanceData && v.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: ut(r.currentRoute.value, "Current Route")
      });
    }), i.on.visitComponentTree(({ treeNode: v, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const f = d.__vrv_devtools;
        v.tags.push({
          label: (f.name ? `${f.name.toString()}: ` : "") + f.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: z_
        });
      }
      Me(d.__vrl_devtools) && (d.__devtoolsApi = i, d.__vrl_devtools.forEach((f) => {
        let h = f.route.path, m = V_, _ = "", g = 0;
        f.error ? (h = f.error, m = f1, g = l1) : f.isExactActive ? (m = Q_, _ = "This is exactly active") : f.isActive && (m = B_, _ = "This link is active"), v.tags.push({
          label: h,
          textColor: g,
          tooltip: _,
          backgroundColor: m
        });
      }));
    }), S_(r.currentRoute, () => {
      c(), i.notifyComponentUpdate(), i.sendInspectorTree(s), i.sendInspectorState(s);
    });
    const o = "router:navigations:" + a;
    i.addTimelineLayer({
      id: o,
      label: `Router${a ? " " + a : ""} Navigations`,
      color: 4237508
    }), r.onError((v, d) => {
      i.addTimelineEvent({
        layerId: o,
        event: {
          title: "Error during Navigation",
          subtitle: d.fullPath,
          logType: "error",
          time: i.now(),
          data: { error: v },
          groupId: d.meta.__navigationId
        }
      });
    });
    let u = 0;
    r.beforeEach((v, d) => {
      const f = {
        guard: bt("beforeEach"),
        from: ut(d, "Current Location during this navigation"),
        to: ut(v, "Target location")
      };
      Object.defineProperty(v.meta, "__navigationId", { value: u++ }), i.addTimelineEvent({
        layerId: o,
        event: {
          time: i.now(),
          title: "Start of navigation",
          subtitle: v.fullPath,
          data: f,
          groupId: v.meta.__navigationId
        }
      });
    }), r.afterEach((v, d, f) => {
      const h = { guard: bt("afterEach") };
      f ? (h.failure = { _custom: {
        type: Error,
        readOnly: !0,
        display: f ? f.message : "",
        tooltip: "Navigation Failure",
        value: f
      } }, h.status = bt("❌")) : h.status = bt("✅"), h.from = ut(d, "Current Location during this navigation"), h.to = ut(v, "Target location"), i.addTimelineEvent({
        layerId: o,
        event: {
          title: "End of navigation",
          subtitle: v.fullPath,
          time: i.now(),
          data: h,
          logType: f ? "warning" : "default",
          groupId: v.meta.__navigationId
        }
      });
    });
    const s = "router-inspector:" + a;
    i.addInspector({
      id: s,
      label: "Routes" + (a ? " " + a : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function c() {
      if (!l) return;
      const v = l;
      let d = n.getRoutes().filter((f) => !f.parent || !f.parent.record.components);
      d.forEach(Z_), v.filter && (d = d.filter((f) => ef(f, v.filter.toLowerCase()))), d.forEach((f) => U_(f, r.currentRoute.value)), v.rootNodes = d.map(G_);
    }
    let l;
    i.on.getInspectorTree((v) => {
      l = v, v.app === e && v.inspectorId === s && c();
    }), i.on.getInspectorState((v) => {
      if (v.app === e && v.inspectorId === s) {
        const d = n.getRoutes().find((f) => f.record.__vd_id === v.nodeId);
        d && (v.state = { options: s1(d) });
      }
    }), i.sendInspectorTree(s), i.sendInspectorState(s);
  });
}
function u1(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function s1(e) {
  const { record: r } = e, n = [{
    editable: !1,
    key: "path",
    value: r.path
  }];
  return r.name != null && n.push({
    editable: !1,
    key: "name",
    value: r.name
  }), n.push({
    editable: !1,
    key: "regexp",
    value: e.re
  }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: { _custom: {
      type: null,
      readOnly: !0,
      display: e.keys.map((a) => `${a.name}${u1(a)}`).join(" "),
      tooltip: "Param keys",
      value: e.keys
    } }
  }), r.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: r.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((a) => a.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: { _custom: {
      type: null,
      readOnly: !0,
      display: e.score.map((a) => a.join(", ")).join(" | "),
      tooltip: "Score used to sort routes",
      value: e.score
    } }
  }), n;
}
const z_ = 15485081, B_ = 2450411, Q_ = 8702998, c1 = 2282478, V_ = 16486972, d1 = 6710886, f1 = 16704226, l1 = 12131356;
function G_(e) {
  const r = [], { record: n } = e;
  n.name != null && r.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: c1
  }), n.aliasOf && r.push({
    label: "alias",
    textColor: 0,
    backgroundColor: V_
  }), e.__vd_match && r.push({
    label: "matches",
    textColor: 0,
    backgroundColor: z_
  }), e.__vd_exactActive && r.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Q_
  }), e.__vd_active && r.push({
    label: "active",
    textColor: 0,
    backgroundColor: B_
  }), n.redirect && r.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: d1
  });
  let a = n.__vd_id;
  return a == null && (a = String(h1++), n.__vd_id = a), {
    id: a,
    label: n.path,
    tags: r,
    children: e.children.map(G_)
  };
}
let h1 = 0;
const v1 = /^\/(.*)\/([a-z]*)$/;
function U_(e, r) {
  const n = r.matched.length && ye(r.matched[r.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = r.matched.some((a) => ye(a, e.record))), e.children.forEach((a) => U_(a, r));
}
function Z_(e) {
  e.__vd_match = !1, e.children.forEach(Z_);
}
function ef(e, r) {
  const n = String(e.re).match(v1);
  if (e.__vd_match = !1, !n || n.length < 3) return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(r))
    return e.children.forEach((o) => ef(o, r)), e.record.path !== "/" || r === "/" ? (e.__vd_match = e.re.test(r), !0) : !1;
  const a = e.record.path.toLowerCase(), i = tt(a);
  return !r.startsWith("/") && (i.includes(r) || a.includes(r)) || i.startsWith(r) || a.startsWith(r) || e.record.name && String(e.record.name).includes(r) ? !0 : e.children.some((o) => ef(o, r));
}
function m1(e, r) {
  const n = {};
  for (const a in e) r.includes(a) || (n[a] = e[a]);
  return n;
}
let _1 = () => location.protocol + "//" + location.host;
function X_(e, r) {
  const { pathname: n, search: a, hash: i } = r, o = e.indexOf("#");
  if (o > -1) {
    let u = i.includes(e.slice(o)) ? e.slice(o).length : 1, s = i.slice(u);
    return s[0] !== "/" && (s = "/" + s), qf(s, "");
  }
  return qf(n, e) + a + i;
}
function g1(e, r, n, a) {
  let i = [], o = [], u = null;
  const s = ({ state: f }) => {
    const h = X_(e, location), m = n.value, _ = r.value;
    let g = 0;
    if (f) {
      if (n.value = h, r.value = f, u && u === m) {
        u = null;
        return;
      }
      g = _ ? f.position - _.position : 0;
    } else a(h);
    i.forEach((p) => {
      p(n.value, m, {
        delta: g,
        type: Kd.pop,
        direction: g ? g > 0 ? ao.forward : ao.back : ao.unknown
      });
    });
  };
  function c() {
    u = n.value;
  }
  function l(f) {
    i.push(f);
    const h = () => {
      const m = i.indexOf(f);
      m > -1 && i.splice(m, 1);
    };
    return o.push(h), h;
  }
  function v() {
    if (document.visibilityState === "hidden") {
      const { history: f } = window;
      if (!f.state) return;
      f.replaceState(G({}, f.state, { scroll: dr() }), "");
    }
  }
  function d() {
    for (const f of o) f();
    o = [], window.removeEventListener("popstate", s), window.removeEventListener("pagehide", v), document.removeEventListener("visibilitychange", v);
  }
  return window.addEventListener("popstate", s), window.addEventListener("pagehide", v), document.addEventListener("visibilitychange", v), {
    pauseListeners: c,
    listen: l,
    destroy: d
  };
}
function Wf(e, r, n, a = !1, i = !1) {
  return {
    back: e,
    current: r,
    forward: n,
    replaced: a,
    position: window.history.length,
    scroll: i ? dr() : null
  };
}
function b1(e) {
  const { history: r, location: n } = window, a = { value: X_(e, n) }, i = { value: r.state };
  i.value || o(a.value, {
    back: null,
    current: a.value,
    forward: null,
    position: r.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function o(c, l, v) {
    const d = e.indexOf("#"), f = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : _1() + e + c;
    try {
      r[v ? "replaceState" : "pushState"](l, "", f), i.value = l;
    } catch (h) {
      process.env.NODE_ENV !== "production" ? Q("Error with push/replace State", h) : console.error(h), n[v ? "replace" : "assign"](f);
    }
  }
  function u(c, l) {
    o(c, G({}, r.state, Wf(i.value.back, c, i.value.forward, !0), l, { position: i.value.position }), !0), a.value = c;
  }
  function s(c, l) {
    const v = G({}, i.value, r.state, {
      forward: c,
      scroll: dr()
    });
    process.env.NODE_ENV !== "production" && !r.state && Q(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), o(v.current, v, !0), o(c, G({}, Wf(a.value, c, null), { position: v.position + 1 }, l), !1), a.value = c;
  }
  return {
    location: a,
    state: i,
    push: s,
    replace: u
  };
}
function O1(e) {
  e = Qb(e);
  const r = b1(e), n = g1(e, r.state, r.location, r.replace);
  function a(o, u = !0) {
    u || n.pauseListeners(), history.go(o);
  }
  const i = G({
    location: "",
    base: e,
    go: a,
    createHref: Gb.bind(null, e)
  }, r, n);
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => r.location.value
  }), Object.defineProperty(i, "state", {
    enumerable: !0,
    get: () => r.state.value
  }), i;
}
let Ke = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var ue = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(ue || {});
const M1 = {
  type: Ke.Static,
  value: ""
}, p1 = /[a-zA-Z0-9_]/;
function w1(e) {
  if (!e) return [[]];
  if (e === "/") return [[M1]];
  if (!e.startsWith("/")) throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function r(h) {
    throw new Error(`ERR (${n})/"${l}": ${h}`);
  }
  let n = ue.Static, a = n;
  const i = [];
  let o;
  function u() {
    o && i.push(o), o = [];
  }
  let s = 0, c, l = "", v = "";
  function d() {
    l && (n === ue.Static ? o.push({
      type: Ke.Static,
      value: l
    }) : n === ue.Param || n === ue.ParamRegExp || n === ue.ParamRegExpEnd ? (o.length > 1 && (c === "*" || c === "+") && r(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), o.push({
      type: Ke.Param,
      value: l,
      regexp: v,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : r("Invalid state to consume buffer"), l = "");
  }
  function f() {
    l += c;
  }
  for (; s < e.length; ) {
    if (c = e[s++], c === "\\" && n !== ue.ParamRegExp) {
      a = n, n = ue.EscapeNext;
      continue;
    }
    switch (n) {
      case ue.Static:
        c === "/" ? (l && d(), u()) : c === ":" ? (d(), n = ue.Param) : f();
        break;
      case ue.EscapeNext:
        f(), n = a;
        break;
      case ue.Param:
        c === "(" ? n = ue.ParamRegExp : p1.test(c) ? f() : (d(), n = ue.Static, c !== "*" && c !== "?" && c !== "+" && s--);
        break;
      case ue.ParamRegExp:
        c === ")" ? v[v.length - 1] == "\\" ? v = v.slice(0, -1) + c : n = ue.ParamRegExpEnd : v += c;
        break;
      case ue.ParamRegExpEnd:
        d(), n = ue.Static, c !== "*" && c !== "?" && c !== "+" && s--, v = "";
        break;
      default:
        r("Unknown state");
        break;
    }
  }
  return n === ue.ParamRegExp && r(`Unfinished custom RegExp for param "${l}"`), d(), u(), i;
}
const Cf = "[^/]+?", D1 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
};
var ve = /* @__PURE__ */ (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(ve || {});
const P1 = /[.+*?^${}()[\]/\\]/g;
function I1(e, r) {
  const n = G({}, D1, r), a = [];
  let i = n.start ? "^" : "";
  const o = [];
  for (const l of e) {
    const v = l.length ? [] : [ve.Root];
    n.strict && !l.length && (i += "/");
    for (let d = 0; d < l.length; d++) {
      const f = l[d];
      let h = ve.Segment + (n.sensitive ? ve.BonusCaseSensitive : 0);
      if (f.type === Ke.Static)
        d || (i += "/"), i += f.value.replace(P1, "\\$&"), h += ve.Static;
      else if (f.type === Ke.Param) {
        const { value: m, repeatable: _, optional: g, regexp: p } = f;
        o.push({
          name: m,
          repeatable: _,
          optional: g
        });
        const M = p || Cf;
        if (M !== Cf) {
          h += ve.BonusCustomRegExp;
          try {
            `${M}`;
          } catch (F) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${M}): ` + F.message);
          }
        }
        let I = _ ? `((?:${M})(?:/(?:${M}))*)` : `(${M})`;
        d || (I = g && l.length < 2 ? `(?:/${I})` : "/" + I), g && (I += "?"), i += I, h += ve.Dynamic, g && (h += ve.BonusOptional), _ && (h += ve.BonusRepeatable), M === ".*" && (h += ve.BonusWildcard);
      }
      v.push(h);
    }
    a.push(v);
  }
  if (n.strict && n.end) {
    const l = a.length - 1;
    a[l][a[l].length - 1] += ve.BonusStrict;
  }
  n.strict || (i += "/?"), n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
  const u = new RegExp(i, n.sensitive ? "" : "i");
  function s(l) {
    const v = l.match(u), d = {};
    if (!v) return null;
    for (let f = 1; f < v.length; f++) {
      const h = v[f] || "", m = o[f - 1];
      d[m.name] = h && m.repeatable ? h.split("/") : h;
    }
    return d;
  }
  function c(l) {
    let v = "", d = !1;
    for (const f of e) {
      (!d || !v.endsWith("/")) && (v += "/"), d = !1;
      for (const h of f) if (h.type === Ke.Static) v += h.value;
      else if (h.type === Ke.Param) {
        const { value: m, repeatable: _, optional: g } = h, p = m in l ? l[m] : "";
        if (Me(p) && !_) throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
        const M = Me(p) ? p.join("/") : p;
        if (!M) if (g)
          f.length < 2 && (v.endsWith("/") ? v = v.slice(0, -1) : d = !0);
        else throw new Error(`Missing required param "${m}"`);
        v += M;
      }
    }
    return v || "/";
  }
  return {
    re: u,
    score: a,
    keys: o,
    parse: s,
    stringify: c
  };
}
function E1(e, r) {
  let n = 0;
  for (; n < e.length && n < r.length; ) {
    const a = r[n] - e[n];
    if (a) return a;
    n++;
  }
  return e.length < r.length ? e.length === 1 && e[0] === ve.Static + ve.Segment ? -1 : 1 : e.length > r.length ? r.length === 1 && r[0] === ve.Static + ve.Segment ? 1 : -1 : 0;
}
function K_(e, r) {
  let n = 0;
  const a = e.score, i = r.score;
  for (; n < a.length && n < i.length; ) {
    const o = E1(a[n], i[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(i.length - a.length) === 1) {
    if (Ff(a)) return 1;
    if (Ff(i)) return -1;
  }
  return i.length - a.length;
}
function Ff(e) {
  const r = e[e.length - 1];
  return e.length > 0 && r[r.length - 1] < 0;
}
const T1 = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function S1(e, r, n) {
  const a = I1(w1(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const o = /* @__PURE__ */ new Set();
    for (const u of a.keys)
      o.has(u.name) && Q(`Found duplicated params with name "${u.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), o.add(u.name);
  }
  const i = G(a, {
    record: e,
    parent: r,
    children: [],
    alias: []
  });
  return r && !i.record.aliasOf == !r.record.aliasOf && r.children.push(i), i;
}
function q1(e, r) {
  const n = [], a = /* @__PURE__ */ new Map();
  r = Sf(T1, r);
  function i(d) {
    return a.get(d);
  }
  function o(d, f, h) {
    const m = !h, _ = Hf(d);
    process.env.NODE_ENV !== "production" && N1(_, f), _.aliasOf = h && h.record;
    const g = Sf(r, d), p = [_];
    if ("alias" in d) {
      const F = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const W of F) p.push(Hf(G({}, _, {
        components: h ? h.record.components : _.components,
        path: W,
        aliasOf: h ? h.record : _
      })));
    }
    let M, I;
    for (const F of p) {
      const { path: W } = F;
      if (f && W[0] !== "/") {
        const y = f.record.path, P = y[y.length - 1] === "/" ? "" : "/";
        F.path = f.record.path + (W && P + W);
      }
      if (process.env.NODE_ENV !== "production" && F.path === "*") throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (M = S1(F, f, g), process.env.NODE_ENV !== "production" && f && W[0] === "/" && W1(M, f), h ? (h.alias.push(M), process.env.NODE_ENV !== "production" && j1(h, M)) : (I = I || M, I !== M && I.alias.push(M), m && d.name && !Lf(M) && (process.env.NODE_ENV !== "production" && Y1(d, f), u(d.name))), J_(M) && c(M), _.children) {
        const y = _.children;
        for (let P = 0; P < y.length; P++) o(y[P], M, h && h.children[P]);
      }
      h = h || M;
    }
    return I ? () => {
      u(I);
    } : ct;
  }
  function u(d) {
    if (L_(d)) {
      const f = a.get(d);
      f && (a.delete(d), n.splice(n.indexOf(f), 1), f.children.forEach(u), f.alias.forEach(u));
    } else {
      const f = n.indexOf(d);
      f > -1 && (n.splice(f, 1), d.record.name && a.delete(d.record.name), d.children.forEach(u), d.alias.forEach(u));
    }
  }
  function s() {
    return n;
  }
  function c(d) {
    const f = C1(d, n);
    n.splice(f, 0, d), d.record.name && !Lf(d) && a.set(d.record.name, d);
  }
  function l(d, f) {
    let h, m = {}, _, g;
    if ("name" in d && d.name) {
      if (h = a.get(d.name), !h) throw rt(te.MATCHER_NOT_FOUND, { location: d });
      if (process.env.NODE_ENV !== "production") {
        const I = Object.keys(d.params || {}).filter((F) => !h.keys.find((W) => W.name === F));
        I.length && Q(`Discarded invalid param(s) "${I.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      g = h.record.name, m = G(Af(f.params, h.keys.filter((I) => !I.optional).concat(h.parent ? h.parent.keys.filter((I) => I.optional) : []).map((I) => I.name)), d.params && Af(d.params, h.keys.map((I) => I.name))), _ = h.stringify(m);
    } else if (d.path != null)
      _ = d.path, process.env.NODE_ENV !== "production" && !_.startsWith("/") && Q(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), h = n.find((I) => I.re.test(_)), h && (m = h.parse(_), g = h.record.name);
    else {
      if (h = f.name ? a.get(f.name) : n.find((I) => I.re.test(f.path)), !h) throw rt(te.MATCHER_NOT_FOUND, {
        location: d,
        currentLocation: f
      });
      g = h.record.name, m = G({}, f.params, d.params), _ = h.stringify(m);
    }
    const p = [];
    let M = h;
    for (; M; )
      p.unshift(M.record), M = M.parent;
    return {
      name: g,
      path: _,
      params: m,
      matched: p,
      meta: x1(p)
    };
  }
  e.forEach((d) => o(d));
  function v() {
    n.length = 0, a.clear();
  }
  return {
    addRoute: o,
    resolve: l,
    removeRoute: u,
    clearRoutes: v,
    getRoutes: s,
    getRecordMatcher: i
  };
}
function Af(e, r) {
  const n = {};
  for (const a of r) a in e && (n[a] = e[a]);
  return n;
}
function Hf(e) {
  const r = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: R1(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(r, "mods", { value: {} }), r;
}
function R1(e) {
  const r = {}, n = e.props || !1;
  if ("component" in e) r.default = n;
  else for (const a in e.components) r[a] = typeof n == "object" ? n[a] : n;
  return r;
}
function Lf(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function x1(e) {
  return e.reduce((r, n) => G(r, n.meta), {});
}
function tf(e, r) {
  return e.name === r.name && e.optional === r.optional && e.repeatable === r.repeatable;
}
function j1(e, r) {
  for (const n of e.keys) if (!n.optional && !r.keys.find(tf.bind(null, n))) return Q(`Alias "${r.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of r.keys) if (!n.optional && !e.keys.find(tf.bind(null, n))) return Q(`Alias "${r.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function N1(e, r) {
  r && r.record.name && !e.name && !e.path && Q(`The route named "${String(r.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Y1(e, r) {
  for (let n = r; n; n = n.parent) if (n.record.name === e.name) throw new Error(`A route named "${String(e.name)}" has been added as a ${r === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function W1(e, r) {
  for (const n of r.keys) if (!e.keys.find(tf.bind(null, n))) return Q(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${r.record.path}".`);
}
function C1(e, r) {
  let n = 0, a = r.length;
  for (; n !== a; ) {
    const o = n + a >> 1;
    K_(e, r[o]) < 0 ? a = o : n = o + 1;
  }
  const i = F1(e);
  return i && (a = r.lastIndexOf(i, a - 1), process.env.NODE_ENV !== "production" && a < 0 && Q(`Finding ancestor route "${i.record.path}" failed for "${e.record.path}"`)), a;
}
function F1(e) {
  let r = e;
  for (; r = r.parent; ) if (J_(r) && K_(e, r) === 0) return r;
}
function J_({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function yf(e) {
  const r = dt(uf), n = dt(y_);
  let a = !1, i = null;
  const o = De(() => {
    const v = Xe(e.to);
    return process.env.NODE_ENV !== "production" && (!a || v !== i) && (cr(v) || (a ? Q(`Invalid value for prop "to" in useLink()
- to:`, v, `
- previous to:`, i, `
- props:`, e) : Q(`Invalid value for prop "to" in useLink()
- to:`, v, `
- props:`, e)), i = v, a = !0), r.resolve(v);
  }), u = De(() => {
    const { matched: v } = o.value, { length: d } = v, f = v[d - 1], h = n.matched;
    if (!f || !h.length) return -1;
    const m = h.findIndex(ye.bind(null, f));
    if (m > -1) return m;
    const _ = zf(v[d - 2]);
    return d > 1 && zf(f) === _ && h[h.length - 1].path !== _ ? h.findIndex(ye.bind(null, v[d - 2])) : m;
  }), s = De(() => u.value > -1 && y1(n.params, o.value.params)), c = De(() => u.value > -1 && u.value === n.matched.length - 1 && H_(n.params, o.value.params));
  function l(v = {}) {
    if (L1(v)) {
      const d = r[Xe(e.replace) ? "replace" : "push"](Xe(e.to)).catch(ct);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && Ne) {
    const v = x_();
    if (v) {
      const d = {
        route: o.value,
        isActive: s.value,
        isExactActive: c.value,
        error: null
      };
      v.__vrl_devtools = v.__vrl_devtools || [], v.__vrl_devtools.push(d), sb(() => {
        d.route = o.value, d.isActive = s.value, d.isExactActive = c.value, d.error = cr(Xe(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: De(() => o.value.href),
    isActive: s,
    isExactActive: c,
    navigate: l
  };
}
function A1(e) {
  return e.length === 1 ? e[0] : e;
}
const H1 = /* @__PURE__ */ fe({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink: yf,
  setup(e, { slots: r }) {
    const n = ob(yf(e)), { options: a } = dt(uf), i = De(() => ({
      [Bf(e.activeClass, a.linkActiveClass, "router-link-active")]: n.isActive,
      [Bf(e.exactActiveClass, a.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const o = r.default && A1(r.default(n));
      return e.custom ? o : q_("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: i.value
      }, o);
    };
  }
}), $_ = H1;
function L1(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const r = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(r)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function y1(e, r) {
  for (const n in r) {
    const a = r[n], i = e[n];
    if (typeof a == "string") {
      if (a !== i) return !1;
    } else if (!Me(i) || i.length !== a.length || a.some((o, u) => o.valueOf() !== i[u].valueOf())) return !1;
  }
  return !0;
}
function zf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Bf = (e, r, n) => e ?? r ?? n, z1 = /* @__PURE__ */ fe({
  name: "RouterView",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: r, slots: n }) {
    process.env.NODE_ENV !== "production" && B1();
    const a = dt(kd), i = De(() => e.route || a.value), o = dt(Yf, 0), u = De(() => {
      let l = Xe(o);
      const { matched: v } = i.value;
      let d;
      for (; (d = v[l]) && !d.components; ) l++;
      return l;
    }), s = De(() => i.value.matched[u.value]);
    to(Yf, De(() => u.value + 1)), to(r1, s), to(kd, i);
    const c = R_();
    return S_(() => [
      c.value,
      s.value,
      e.name
    ], ([l, v, d], [f, h, m]) => {
      v && (v.instances[d] = l, h && h !== v && l && l === f && (v.leaveGuards.size || (v.leaveGuards = h.leaveGuards), v.updateGuards.size || (v.updateGuards = h.updateGuards))), l && v && (!h || !ye(v, h) || !f) && (v.enterCallbacks[d] || []).forEach((_) => _(l));
    }, { flush: "post" }), () => {
      const l = i.value, v = e.name, d = s.value, f = d && d.components[v];
      if (!f) return Qf(n.default, {
        Component: f,
        route: l
      });
      const h = d.props[v], m = h ? h === !0 ? l.params : typeof h == "function" ? h(l) : h : null, g = q_(f, G({}, m, r, {
        onVnodeUnmounted: (p) => {
          p.component.isUnmounted && (d.instances[v] = null);
        },
        ref: c
      }));
      if (process.env.NODE_ENV !== "production" && Ne && g.ref) {
        const p = {
          depth: u.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (Me(g.ref) ? g.ref.map((M) => M.i) : [g.ref.i]).forEach((M) => {
          M.__vrv_devtools = p;
        });
      }
      return Qf(n.default, {
        Component: g,
        route: l
      }) || g;
    };
  }
});
function Qf(e, r) {
  if (!e) return null;
  const n = e(r);
  return n.length === 1 ? n[0] : n;
}
const k_ = z1;
function B1() {
  const e = x_(), r = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (r && (r === "KeepAlive" || r.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const a = r === "KeepAlive" ? "keep-alive" : "transition";
    Q(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${a}>
    <component :is="Component" />
  </${a}>
</router-view>`);
  }
}
function Q1(e) {
  const r = q1(e.routes, e), n = e.parseQuery || e1, a = e.stringifyQuery || Nf, i = e.history;
  if (process.env.NODE_ENV !== "production" && !i) throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const o = ot(), u = ot(), s = ot(), c = ib(Ae);
  let l = Ae;
  Ne && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const v = ro.bind(null, (O) => "" + O), d = ro.bind(null, Ab), f = ro.bind(null, tt);
  function h(O, q) {
    let S, N;
    return L_(O) ? (S = r.getRecordMatcher(O), process.env.NODE_ENV !== "production" && !S && Q(`Parent route "${String(O)}" not found when adding child route`, q), N = q) : N = O, r.addRoute(N, S);
  }
  function m(O) {
    const q = r.getRecordMatcher(O);
    q ? r.removeRoute(q) : process.env.NODE_ENV !== "production" && Q(`Cannot remove non-existent route "${String(O)}"`);
  }
  function _() {
    return r.getRoutes().map((O) => O.record);
  }
  function g(O) {
    return !!r.getRecordMatcher(O);
  }
  function p(O, q) {
    if (q = G({}, q || c.value), typeof O == "string") {
      const L = no(n, O, q.path), J = r.resolve({ path: L.path }, q), pe = i.createHref(L.fullPath);
      return process.env.NODE_ENV !== "production" && (pe.startsWith("//") ? Q(`Location "${O}" resolved to "${pe}". A resolved location cannot start with multiple slashes.`) : J.matched.length || Q(`No match found for location with path "${O}"`)), G(L, J, {
        params: f(J.params),
        hash: tt(L.hash),
        redirectedFrom: void 0,
        href: pe
      });
    }
    if (process.env.NODE_ENV !== "production" && !cr(O))
      return Q(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, O), p({});
    let S;
    if (O.path != null)
      process.env.NODE_ENV !== "production" && "params" in O && !("name" in O) && Object.keys(O.params).length && Q(`Path "${O.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), S = G({}, O, { path: no(n, O.path, q.path).path });
    else {
      const L = G({}, O.params);
      for (const J in L) L[J] == null && delete L[J];
      S = G({}, O, { params: d(L) }), q.params = d(q.params);
    }
    const N = r.resolve(S, q), H = O.hash || "";
    process.env.NODE_ENV !== "production" && H && !H.startsWith("#") && Q(`A \`hash\` should always start with the character "#". Replace "${H}" with "#${H}".`), N.params = v(f(N.params));
    const $ = yb(a, G({}, O, {
      hash: Wb(H),
      path: N.path
    })), B = i.createHref($);
    return process.env.NODE_ENV !== "production" && (B.startsWith("//") ? Q(`Location "${O}" resolved to "${B}". A resolved location cannot start with multiple slashes.`) : N.matched.length || Q(`No match found for location with path "${O.path != null ? O.path : O}"`)), G({
      fullPath: $,
      hash: H,
      query: a === Nf ? t1(O.query) : O.query || {}
    }, N, {
      redirectedFrom: void 0,
      href: B
    });
  }
  function M(O) {
    return typeof O == "string" ? no(n, O, c.value.path) : G({}, O);
  }
  function I(O, q) {
    if (l !== O) return rt(te.NAVIGATION_CANCELLED, {
      from: q,
      to: O
    });
  }
  function F(O) {
    return P(O);
  }
  function W(O) {
    return F(G(M(O), { replace: !0 }));
  }
  function y(O, q) {
    const S = O.matched[O.matched.length - 1];
    if (S && S.redirect) {
      const { redirect: N } = S;
      let H = typeof N == "function" ? N(O, q) : N;
      if (typeof H == "string" && (H = H.includes("?") || H.includes("#") ? H = M(H) : { path: H }, H.params = {}), process.env.NODE_ENV !== "production" && H.path == null && !("name" in H))
        throw Q(`Invalid redirect found:
${JSON.stringify(H, null, 2)}
 when navigating to "${O.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return G({
        query: O.query,
        hash: O.hash,
        params: H.path != null ? {} : O.params
      }, H);
    }
  }
  function P(O, q) {
    const S = l = p(O), N = c.value, H = O.state, $ = O.force, B = O.replace === !0, L = y(S, N);
    if (L) return P(G(M(L), {
      state: typeof L == "object" ? G({}, H, L.state) : H,
      force: $,
      replace: B
    }), q || S);
    const J = S;
    J.redirectedFrom = q;
    let pe;
    return !$ && Rf(a, N, S) && (pe = rt(te.NAVIGATION_DUPLICATED, {
      to: J,
      from: N
    }), Ie(N, N, !0, !1)), (pe ? Promise.resolve(pe) : j(J, N)).catch((ie) => xe(ie) ? xe(ie, te.NAVIGATION_GUARD_REDIRECT) ? ie : Pe(ie) : Z(ie, J, N)).then((ie) => {
      if (ie) {
        if (xe(ie, te.NAVIGATION_GUARD_REDIRECT))
          return process.env.NODE_ENV !== "production" && Rf(a, p(ie.to), J) && q && (q._count = q._count ? q._count + 1 : 1) > 30 ? (Q(`Detected a possibly infinite redirection in a navigation guard when going from "${N.fullPath}" to "${J.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(/* @__PURE__ */ new Error("Infinite redirect in navigation guard"))) : P(G({ replace: B }, M(ie.to), {
            state: typeof ie.to == "object" ? G({}, H, ie.to.state) : H,
            force: $
          }), q || J);
      } else ie = k(J, N, !0, B, H);
      return z(J, N, ie), ie;
    });
  }
  function E(O, q) {
    const S = I(O, q);
    return S ? Promise.reject(S) : Promise.resolve();
  }
  function x(O) {
    const q = Fe.values().next().value;
    return q && typeof q.runWithContext == "function" ? q.runWithContext(O) : O();
  }
  function j(O, q) {
    let S;
    const [N, H, $] = a1(O, q);
    S = io(N.reverse(), "beforeRouteLeave", O, q);
    for (const L of N) L.leaveGuards.forEach((J) => {
      S.push(Le(J, O, q));
    });
    const B = E.bind(null, O, q);
    return S.push(B), qe(S).then(() => {
      S = [];
      for (const L of o.list()) S.push(Le(L, O, q));
      return S.push(B), qe(S);
    }).then(() => {
      S = io(H, "beforeRouteUpdate", O, q);
      for (const L of H) L.updateGuards.forEach((J) => {
        S.push(Le(J, O, q));
      });
      return S.push(B), qe(S);
    }).then(() => {
      S = [];
      for (const L of $) if (L.beforeEnter) if (Me(L.beforeEnter)) for (const J of L.beforeEnter) S.push(Le(J, O, q));
      else S.push(Le(L.beforeEnter, O, q));
      return S.push(B), qe(S);
    }).then(() => (O.matched.forEach((L) => L.enterCallbacks = {}), S = io($, "beforeRouteEnter", O, q, x), S.push(B), qe(S))).then(() => {
      S = [];
      for (const L of u.list()) S.push(Le(L, O, q));
      return S.push(B), qe(S);
    }).catch((L) => xe(L, te.NAVIGATION_CANCELLED) ? L : Promise.reject(L));
  }
  function z(O, q, S) {
    s.list().forEach((N) => x(() => N(O, q, S)));
  }
  function k(O, q, S, N, H) {
    const $ = I(O, q);
    if ($) return $;
    const B = q === Ae, L = Ne ? history.state : {};
    S && (N || B ? i.replace(O.fullPath, G({ scroll: B && L && L.scroll }, H)) : i.push(O.fullPath, H)), c.value = O, Ie(O, q, S, B), Pe();
  }
  let re;
  function ce() {
    re || (re = i.listen((O, q, S) => {
      if (!Se.listening) return;
      const N = p(O), H = y(N, Se.currentRoute.value);
      if (H) {
        P(G(H, {
          replace: !0,
          force: !0
        }), N).catch(ct);
        return;
      }
      l = N;
      const $ = c.value;
      Ne && Xb(jf($.fullPath, S.delta), dr()), j(N, $).catch((B) => xe(B, te.NAVIGATION_ABORTED | te.NAVIGATION_CANCELLED) ? B : xe(B, te.NAVIGATION_GUARD_REDIRECT) ? (P(G(M(B.to), { force: !0 }), N).then((L) => {
        xe(L, te.NAVIGATION_ABORTED | te.NAVIGATION_DUPLICATED) && !S.delta && S.type === Kd.pop && i.go(-1, !1);
      }).catch(ct), Promise.reject()) : (S.delta && i.go(-S.delta, !1), Z(B, N, $))).then((B) => {
        B = B || k(N, $, !1), B && (S.delta && !xe(B, te.NAVIGATION_CANCELLED) ? i.go(-S.delta, !1) : S.type === Kd.pop && xe(B, te.NAVIGATION_ABORTED | te.NAVIGATION_DUPLICATED) && i.go(-1, !1)), z(N, $, B);
      }).catch(ct);
    }));
  }
  let ne = ot(), ee = ot(), A;
  function Z(O, q, S) {
    Pe(O);
    const N = ee.list();
    return N.length ? N.forEach((H) => H(O, q, S)) : (process.env.NODE_ENV !== "production" && Q("uncaught error during route navigation:"), console.error(O)), Promise.reject(O);
  }
  function le() {
    return A && c.value !== Ae ? Promise.resolve() : new Promise((O, q) => {
      ne.add([O, q]);
    });
  }
  function Pe(O) {
    return A || (A = !O, ce(), ne.list().forEach(([q, S]) => O ? S(O) : q()), ne.reset()), O;
  }
  function Ie(O, q, S, N) {
    const { scrollBehavior: H } = e;
    if (!Ne || !H) return Promise.resolve();
    const $ = !S && Kb(jf(O.fullPath, 0)) || (N || !S) && history.state && history.state.scroll || null;
    return cb().then(() => H(O, q, $)).then((B) => B && Zb(B)).catch((B) => Z(B, O, q));
  }
  const Ee = (O) => i.go(O);
  let Te;
  const Fe = /* @__PURE__ */ new Set(), Se = {
    currentRoute: c,
    listening: !0,
    addRoute: h,
    removeRoute: m,
    clearRoutes: r.clearRoutes,
    hasRoute: g,
    getRoutes: _,
    resolve: p,
    options: e,
    push: F,
    replace: W,
    go: Ee,
    back: () => Ee(-1),
    forward: () => Ee(1),
    beforeEach: o.add,
    beforeResolve: u.add,
    afterEach: s.add,
    onError: ee.add,
    isReady: le,
    install(O) {
      O.component("RouterLink", $_), O.component("RouterView", k_), O.config.globalProperties.$router = Se, Object.defineProperty(O.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Xe(c)
      }), Ne && !Te && c.value === Ae && (Te = !0, F(i.location).catch((N) => {
        process.env.NODE_ENV !== "production" && Q("Unexpected error when starting the router:", N);
      }));
      const q = {};
      for (const N in Ae) Object.defineProperty(q, N, {
        get: () => c.value[N],
        enumerable: !0
      });
      O.provide(uf, Se), O.provide(y_, ub(q)), O.provide(kd, c);
      const S = O.unmount;
      Fe.add(O), O.unmount = function() {
        Fe.delete(O), Fe.size < 1 && (l = Ae, re && re(), re = null, c.value = Ae, Te = !1, A = !1), S();
      }, process.env.NODE_ENV !== "production" && Ne && o1(O, Se, r);
    }
  };
  function qe(O) {
    return O.reduce((q, S) => q.then(() => x(S)), Promise.resolve());
  }
  return Se;
}
const V1 = ["data-mode", "type", "form", "disabled"], G1 = {
  key: 0,
  class: "button__caption"
}, U1 = /* @__PURE__ */ fe({
  __name: "TButton",
  props: {
    type: {},
    mode: {},
    caption: {},
    icon: {},
    disabled: { type: Boolean },
    form: {}
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const n = e, a = r;
    return (i, o) => (D(), T("button", {
      class: "button",
      "data-mode": n.mode ?? "filled",
      type: n.type ?? "button",
      form: n.form,
      disabled: n.disabled,
      onClick: o[0] || (o[0] = (u) => a("click", u))
    }, [
      (D(), be(lt(n.icon), { class: "button__icon" })),
      n.caption ? (D(), T("span", G1, Oe(n.caption), 1)) : me("", !0)
    ], 8, V1));
  }
}), R = (e, r) => {
  const n = e.__vccOpts || e;
  for (const [a, i] of r)
    n[a] = i;
  return n;
}, Z1 = /* @__PURE__ */ R(U1, [["__scopeId", "data-v-7a417823"]]), eg = /* @__PURE__ */ fe({
  __name: "TForm",
  emits: ["submit", "reset"],
  setup(e, { emit: r }) {
    const n = r;
    return (a, i) => (D(), T("form", {
      class: "form",
      onSubmit: i[0] || (i[0] = db((o) => n("submit", o), ["prevent"])),
      onReset: i[1] || (i[1] = (o) => n("reset", o))
    }, [
      he(a.$slots, "default")
    ], 32));
  }
}), X1 = /* @__PURE__ */ fe({
  __name: "THyperlink",
  props: {
    route: {},
    params: {}
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const n = e, a = r;
    return (i, o) => n.route ? (D(), be(Xe($_), {
      key: 0,
      to: { name: e.route, params: e.params },
      class: "hyperlink | text-truncate",
      draggable: "false",
      onClick: o[0] || (o[0] = (u) => a("click", u))
    }, {
      default: ze(() => [
        he(i.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["to"])) : (D(), T("a", {
      key: 1,
      href: "#",
      class: "hyperlink | text-truncate",
      draggable: "false",
      onClick: o[1] || (o[1] = (u) => a("click", u))
    }, [
      he(i.$slots, "default", {}, void 0, !0)
    ]));
  }
}), fr = /* @__PURE__ */ R(X1, [["__scopeId", "data-v-c741c024"]]), K1 = { class: "label" }, J1 = {
  key: 0,
  class: "label__caption"
}, $1 = /* @__PURE__ */ fe({
  __name: "TLabel",
  props: {
    caption: {}
  },
  setup(e) {
    const r = e;
    return (n, a) => (D(), T("label", K1, [
      r.caption ? (D(), T("span", J1, Oe(r.caption), 1)) : me("", !0),
      he(n.$slots, "default", {}, void 0, !0)
    ]));
  }
}), lr = /* @__PURE__ */ R($1, [["__scopeId", "data-v-1bd91740"]]), k1 = { class: "layout" }, eO = {
  key: 0,
  class: "layout__header"
}, tO = { class: "layout__content" }, rO = {
  key: 0,
  class: "layout__sidebar"
}, nO = { class: "layout__section" }, aO = {
  key: 1,
  class: "layout__sidebar"
}, iO = {
  key: 1,
  class: "layout__footer"
}, oO = /* @__PURE__ */ fe({
  __name: "TLayout",
  props: {
    showHeader: { type: Boolean },
    showFooter: { type: Boolean },
    showPrimarySidebar: { type: Boolean },
    showSecondarySidebar: { type: Boolean }
  },
  setup(e) {
    const r = e;
    return (n, a) => (D(), T("div", k1, [
      r.showHeader ? (D(), T("header", eO, [
        he(n.$slots, "TLayoutHeader", {}, void 0, !0)
      ])) : me("", !0),
      b("main", tO, [
        r.showPrimarySidebar ? (D(), T("aside", rO, [
          he(n.$slots, "TLayoutPrimarySidebar", {}, void 0, !0)
        ])) : me("", !0),
        b("div", nO, [
          he(n.$slots, "default", {}, void 0, !0)
        ]),
        r.showSecondarySidebar ? (D(), T("aside", aO, [
          he(n.$slots, "TLayoutSecondarySidebar", {}, void 0, !0)
        ])) : me("", !0)
      ]),
      r.showFooter ? (D(), T("footer", iO, [
        he(n.$slots, "TLayoutFooter", {}, void 0, !0)
      ])) : me("", !0)
    ]));
  }
}), uO = /* @__PURE__ */ R(oO, [["__scopeId", "data-v-ff46500d"]]), sO = { class: "panel" }, cO = {
  key: 0,
  class: "panel__header"
}, dO = { class: "panel__content" }, fO = {
  key: 0,
  class: "panel__sidebar"
}, lO = { class: "panel__section" }, hO = {
  key: 1,
  class: "panel__sidebar"
}, vO = {
  key: 1,
  class: "panel__footer"
}, mO = /* @__PURE__ */ fe({
  __name: "TPanel",
  props: {
    showHeader: { type: Boolean },
    showFooter: { type: Boolean },
    showPrimarySidebar: { type: Boolean },
    showSecondarySidebar: { type: Boolean }
  },
  setup(e) {
    const r = e;
    return (n, a) => (D(), T("div", sO, [
      r.showHeader ? (D(), T("header", cO, [
        he(n.$slots, "TPanelHeader", {}, void 0, !0)
      ])) : me("", !0),
      b("section", dO, [
        r.showPrimarySidebar ? (D(), T("aside", fO, [
          he(n.$slots, "TPanelPrimarySidebar", {}, void 0, !0)
        ])) : me("", !0),
        b("div", lO, [
          he(n.$slots, "default", {}, void 0, !0)
        ]),
        r.showSecondarySidebar ? (D(), T("aside", hO, [
          he(n.$slots, "TPanelSecondarySidebar", {}, void 0, !0)
        ])) : me("", !0)
      ]),
      r.showFooter ? (D(), T("footer", vO, [
        he(n.$slots, "TPanelFooter", {}, void 0, !0)
      ])) : me("", !0)
    ]));
  }
}), _O = /* @__PURE__ */ R(mO, [["__scopeId", "data-v-ec3ecf66"]]), gO = {}, bO = { class: "separator" };
function OO(e, r) {
  return D(), T("div", bO);
}
const MO = /* @__PURE__ */ R(gO, [["render", OO], ["__scopeId", "data-v-02e492b5"]]), pO = {}, wO = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
};
function DO(e, r) {
  return D(), T("svg", wO, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M9 6l6 6l-6 6" }, null, -1)
  ])]);
}
const sf = /* @__PURE__ */ R(pO, [["render", DO]]);
var je = {}, oo = {}, Vf;
function tg() {
  return Vf || (Vf = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.EMPTY_SPACES_EXPRESSION = e.NUMERIC_EXPRESSION = e.NULL = e.TRUE = e.FALSE = e.EMPTY_OBJECT = e.EMPTY_STRING = e.EMPTY_ARRAY = e.ZERO = e.DEFAULT_DATE = void 0, e.DEFAULT_DATE = /* @__PURE__ */ new Date(), e.ZERO = 0, e.EMPTY_ARRAY = Array(), e.EMPTY_STRING = "", e.EMPTY_OBJECT = Object(), e.FALSE = !1, e.TRUE = !e.FALSE, e.NULL = null, e.NUMERIC_EXPRESSION = /^[0-9]*$/, e.EMPTY_SPACES_EXPRESSION = /\s/g;
  })(oo)), oo;
}
var oe = {}, Gf;
function PO() {
  if (Gf) return oe;
  Gf = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.trim = n, oe.compare = a, oe.isEmpty = i, oe.notEmpty = o, oe.assertRegExp = u, oe.isNumber = s, oe.isNegative = c, oe.isPositive = l, oe.toRelativeTime = v, oe.toCurrency = d, oe.formatDate = f, oe.toFullDate = h, oe.toLongDate = m, oe.toMediumDate = _, oe.toShortDate = g, oe.hasElements = p;
  const e = tg(), r = "es-mx";
  function n(M) {
    return M.replace(e.EMPTY_SPACES_EXPRESSION, e.EMPTY_STRING);
  }
  function a(M, I) {
    return M === I;
  }
  function i(M) {
    return a(M, e.EMPTY_STRING);
  }
  function o(M) {
    return !i(M);
  }
  function u(M, I) {
    return new RegExp(I).test(M);
  }
  function s(M) {
    return u(String(M), e.NUMERIC_EXPRESSION);
  }
  function c(M) {
    return M < e.ZERO;
  }
  function l(M) {
    return !c(M);
  }
  function v(M, I = "day") {
    return new Intl.RelativeTimeFormat(r, {
      style: "long",
      numeric: "auto"
    }).format(M, I);
  }
  function d(M, I = "MXN") {
    return Intl.NumberFormat(r, {
      style: "currency",
      currency: I
    }).format(M);
  }
  function f(M = e.DEFAULT_DATE, I) {
    return Intl.DateTimeFormat(r, {
      dateStyle: I
    }).format(M);
  }
  function h(M = e.DEFAULT_DATE) {
    return f(M, "full");
  }
  function m(M = e.DEFAULT_DATE) {
    return f(M, "long");
  }
  function _(M = e.DEFAULT_DATE) {
    return f(M, "medium");
  }
  function g(M = e.DEFAULT_DATE) {
    return f(M, "short");
  }
  function p(M) {
    return M.length > e.ZERO;
  }
  return oe;
}
var uo = {}, so = {}, co = {}, fo = {}, C = {}, Uf;
function V() {
  if (Uf) return C;
  Uf = 1, C.secondsInYear = C.secondsInWeek = C.secondsInQuarter = C.secondsInMonth = C.secondsInMinute = C.secondsInHour = C.secondsInDay = C.quartersInYear = C.monthsInYear = C.monthsInQuarter = C.minutesInYear = C.minutesInMonth = C.minutesInHour = C.minutesInDay = C.minTime = C.millisecondsInWeek = C.millisecondsInSecond = C.millisecondsInMinute = C.millisecondsInHour = C.millisecondsInDay = C.maxTime = C.daysInYear = C.daysInWeek = C.constructFromSymbol = void 0, C.daysInWeek = 7;
  const e = C.daysInYear = 365.2425, r = C.maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
  C.minTime = -r, C.millisecondsInWeek = 6048e5, C.millisecondsInDay = 864e5, C.millisecondsInMinute = 6e4, C.millisecondsInHour = 36e5, C.millisecondsInSecond = 1e3, C.minutesInYear = 525600, C.minutesInMonth = 43200, C.minutesInDay = 1440, C.minutesInHour = 60, C.monthsInQuarter = 3, C.monthsInYear = 12, C.quartersInYear = 4;
  const n = C.secondsInHour = 3600;
  C.secondsInMinute = 60;
  const a = C.secondsInDay = n * 24;
  C.secondsInWeek = a * 7;
  const i = C.secondsInYear = a * e, o = C.secondsInMonth = i / 12;
  return C.secondsInQuarter = o * 3, C.constructFromSymbol = /* @__PURE__ */ Symbol.for("constructDateFrom"), C;
}
var Zf;
function Y() {
  if (Zf) return fo;
  Zf = 1, fo.constructFrom = r;
  var e = /* @__PURE__ */ V();
  function r(n, a) {
    return typeof n == "function" ? n(a) : n && typeof n == "object" && e.constructFromSymbol in n ? n[e.constructFromSymbol](a) : n instanceof Date ? new n.constructor(a) : new Date(a);
  }
  return fo;
}
var lo = {}, Xf;
function w() {
  if (Xf) return lo;
  Xf = 1, lo.toDate = r;
  var e = /* @__PURE__ */ Y();
  function r(n, a) {
    return (0, e.constructFrom)(a || n, n);
  }
  return lo;
}
var Kf;
function Ye() {
  if (Kf) return co;
  Kf = 1, co.addDays = n;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ w();
  function n(a, i, o) {
    const u = (0, r.toDate)(a, o?.in);
    return isNaN(i) ? (0, e.constructFrom)(o?.in || a, NaN) : (i && u.setDate(u.getDate() + i), u);
  }
  return co;
}
var ho = {}, Jf;
function mt() {
  if (Jf) return ho;
  Jf = 1, ho.addMonths = n;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ w();
  function n(a, i, o) {
    const u = (0, r.toDate)(a, o?.in);
    if (isNaN(i)) return (0, e.constructFrom)(o?.in || a, NaN);
    if (!i)
      return u;
    const s = u.getDate(), c = (0, e.constructFrom)(
      o?.in || a,
      u.getTime()
    );
    c.setMonth(u.getMonth() + i + 1, 0);
    const l = c.getDate();
    return s >= l ? c : (u.setFullYear(
      c.getFullYear(),
      c.getMonth(),
      s
    ), u);
  }
  return ho;
}
var $f;
function rg() {
  if ($f) return so;
  $f = 1, so.add = i;
  var e = /* @__PURE__ */ Ye(), r = /* @__PURE__ */ mt(), n = /* @__PURE__ */ Y(), a = /* @__PURE__ */ w();
  function i(o, u, s) {
    const {
      years: c = 0,
      months: l = 0,
      weeks: v = 0,
      days: d = 0,
      hours: f = 0,
      minutes: h = 0,
      seconds: m = 0
    } = u, _ = (0, a.toDate)(o, s?.in), g = l || c ? (0, r.addMonths)(_, l + c * 12) : _, p = d || v ? (0, e.addDays)(g, d + v * 7) : g, M = h + f * 60, F = (m + M * 60) * 1e3;
    return (0, n.constructFrom)(
      s?.in || o,
      +p + F
    );
  }
  return so;
}
var vo = {}, mo = {}, kf;
function ng() {
  if (kf) return mo;
  kf = 1, mo.isSaturday = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n, a?.in).getDay() === 6;
  }
  return mo;
}
var _o = {}, el;
function ag() {
  if (el) return _o;
  el = 1, _o.isSunday = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n, a?.in).getDay() === 0;
  }
  return _o;
}
var go = {}, tl;
function hr() {
  if (tl) return go;
  tl = 1, go.isWeekend = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in).getDay();
    return i === 0 || i === 6;
  }
  return go;
}
var rl;
function ig() {
  if (rl) return vo;
  rl = 1, vo.addBusinessDays = o;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ ng(), n = /* @__PURE__ */ ag(), a = /* @__PURE__ */ hr(), i = /* @__PURE__ */ w();
  function o(u, s, c) {
    const l = (0, i.toDate)(u, c?.in), v = (0, a.isWeekend)(l, c);
    if (isNaN(s)) return (0, e.constructFrom)(c?.in, NaN);
    const d = l.getHours(), f = s < 0 ? -1 : 1, h = Math.trunc(s / 5);
    l.setDate(l.getDate() + h * 7);
    let m = Math.abs(s % 5);
    for (; m > 0; )
      l.setDate(l.getDate() + f), (0, a.isWeekend)(l, c) || (m -= 1);
    return v && (0, a.isWeekend)(l, c) && s !== 0 && ((0, r.isSaturday)(l, c) && l.setDate(l.getDate() + (f < 0 ? 2 : -1)), (0, n.isSunday)(l, c) && l.setDate(l.getDate() + (f < 0 ? 1 : -2))), l.setHours(d), l;
  }
  return vo;
}
var bo = {}, Oo = {}, nl;
function vr() {
  if (nl) return Oo;
  nl = 1, Oo.addMilliseconds = n;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ w();
  function n(a, i, o) {
    return (0, e.constructFrom)(
      o?.in || a,
      +(0, r.toDate)(a) + i
    );
  }
  return Oo;
}
var al;
function og() {
  if (al) return bo;
  al = 1, bo.addHours = n;
  var e = /* @__PURE__ */ vr(), r = /* @__PURE__ */ V();
  function n(a, i, o) {
    return (0, e.addMilliseconds)(
      a,
      i * r.millisecondsInHour,
      o
    );
  }
  return bo;
}
var Mo = {}, po = {}, wo = {}, Do = {}, Ot = {}, il;
function _e() {
  if (il) return Ot;
  il = 1, Ot.getDefaultOptions = r, Ot.setDefaultOptions = n;
  let e = {};
  function r() {
    return e;
  }
  function n(a) {
    e = a;
  }
  return Ot;
}
var ol;
function Re() {
  if (ol) return Do;
  ol = 1, Do.startOfWeek = n;
  var e = /* @__PURE__ */ _e(), r = /* @__PURE__ */ w();
  function n(a, i) {
    const o = (0, e.getDefaultOptions)(), u = i?.weekStartsOn ?? i?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, s = (0, r.toDate)(a, i?.in), c = s.getDay(), l = (c < u ? 7 : 0) + c - u;
    return s.setDate(s.getDate() - l), s.setHours(0, 0, 0, 0), s;
  }
  return Do;
}
var ul;
function We() {
  if (ul) return wo;
  ul = 1, wo.startOfISOWeek = r;
  var e = /* @__PURE__ */ Re();
  function r(n, a) {
    return (0, e.startOfWeek)(n, { ...a, weekStartsOn: 1 });
  }
  return wo;
}
var sl;
function Je() {
  if (sl) return po;
  sl = 1, po.getISOWeekYear = a;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ We(), n = /* @__PURE__ */ w();
  function a(i, o) {
    const u = (0, n.toDate)(i, o?.in), s = u.getFullYear(), c = (0, e.constructFrom)(u, 0);
    c.setFullYear(s + 1, 0, 4), c.setHours(0, 0, 0, 0);
    const l = (0, r.startOfISOWeek)(
      c
    ), v = (0, e.constructFrom)(u, 0);
    v.setFullYear(s, 0, 4), v.setHours(0, 0, 0, 0);
    const d = (0, r.startOfISOWeek)(
      v
    );
    return u.getTime() >= l.getTime() ? s + 1 : u.getTime() >= d.getTime() ? s : s - 1;
  }
  return po;
}
var Po = {}, Io = {}, Eo = {}, cl;
function Be() {
  if (cl) return Eo;
  cl = 1, Eo.getTimezoneOffsetInMilliseconds = r;
  var e = /* @__PURE__ */ w();
  function r(n) {
    const a = (0, e.toDate)(n), i = new Date(
      Date.UTC(
        a.getFullYear(),
        a.getMonth(),
        a.getDate(),
        a.getHours(),
        a.getMinutes(),
        a.getSeconds(),
        a.getMilliseconds()
      )
    );
    return i.setUTCFullYear(a.getFullYear()), +n - +i;
  }
  return Eo;
}
var To = {}, dl;
function K() {
  if (dl) return To;
  dl = 1, To.normalizeDates = r;
  var e = /* @__PURE__ */ Y();
  function r(n, ...a) {
    const i = e.constructFrom.bind(
      null,
      n || a.find((o) => typeof o == "object")
    );
    return a.map(i);
  }
  return To;
}
var So = {}, fl;
function mr() {
  if (fl) return So;
  fl = 1, So.startOfDay = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in);
    return i.setHours(0, 0, 0, 0), i;
  }
  return So;
}
var ll;
function Qe() {
  if (ll) return Io;
  ll = 1, Io.differenceInCalendarDays = i;
  var e = /* @__PURE__ */ Be(), r = /* @__PURE__ */ K(), n = /* @__PURE__ */ V(), a = /* @__PURE__ */ mr();
  function i(o, u, s) {
    const [c, l] = (0, r.normalizeDates)(
      s?.in,
      o,
      u
    ), v = (0, a.startOfDay)(c), d = (0, a.startOfDay)(l), f = +v - (0, e.getTimezoneOffsetInMilliseconds)(v), h = +d - (0, e.getTimezoneOffsetInMilliseconds)(d);
    return Math.round(
      (f - h) / n.millisecondsInDay
    );
  }
  return Io;
}
var qo = {}, hl;
function _t() {
  if (hl) return qo;
  hl = 1, qo.startOfISOWeekYear = a;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ Je(), n = /* @__PURE__ */ We();
  function a(i, o) {
    const u = (0, r.getISOWeekYear)(i, o), s = (0, e.constructFrom)(o?.in || i, 0);
    return s.setFullYear(u, 0, 4), s.setHours(0, 0, 0, 0), (0, n.startOfISOWeek)(s);
  }
  return qo;
}
var vl;
function ug() {
  if (vl) return Po;
  vl = 1, Po.setISOWeekYear = i;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ Qe(), n = /* @__PURE__ */ _t(), a = /* @__PURE__ */ w();
  function i(o, u, s) {
    let c = (0, a.toDate)(o, s?.in);
    const l = (0, r.differenceInCalendarDays)(
      c,
      (0, n.startOfISOWeekYear)(c, s)
    ), v = (0, e.constructFrom)(s?.in || o, 0);
    return v.setFullYear(u, 0, 4), v.setHours(0, 0, 0, 0), c = (0, n.startOfISOWeekYear)(v), c.setDate(c.getDate() + l), c;
  }
  return Po;
}
var ml;
function sg() {
  if (ml) return Mo;
  ml = 1, Mo.addISOWeekYears = n;
  var e = /* @__PURE__ */ Je(), r = /* @__PURE__ */ ug();
  function n(a, i, o) {
    return (0, r.setISOWeekYear)(
      a,
      (0, e.getISOWeekYear)(a, o) + i,
      o
    );
  }
  return Mo;
}
var Ro = {}, _l;
function cf() {
  if (_l) return Ro;
  _l = 1, Ro.addMinutes = n;
  var e = /* @__PURE__ */ V(), r = /* @__PURE__ */ w();
  function n(a, i, o) {
    const u = (0, r.toDate)(a, o?.in);
    return u.setTime(u.getTime() + i * e.millisecondsInMinute), u;
  }
  return Ro;
}
var xo = {}, gl;
function df() {
  if (gl) return xo;
  gl = 1, xo.addQuarters = r;
  var e = /* @__PURE__ */ mt();
  function r(n, a, i) {
    return (0, e.addMonths)(n, a * 3, i);
  }
  return xo;
}
var jo = {}, bl;
function cg() {
  if (bl) return jo;
  bl = 1, jo.addSeconds = r;
  var e = /* @__PURE__ */ vr();
  function r(n, a, i) {
    return (0, e.addMilliseconds)(n, a * 1e3, i);
  }
  return jo;
}
var No = {}, Ol;
function _r() {
  if (Ol) return No;
  Ol = 1, No.addWeeks = r;
  var e = /* @__PURE__ */ Ye();
  function r(n, a, i) {
    return (0, e.addDays)(n, a * 7, i);
  }
  return No;
}
var Yo = {}, Ml;
function dg() {
  if (Ml) return Yo;
  Ml = 1, Yo.addYears = r;
  var e = /* @__PURE__ */ mt();
  function r(n, a, i) {
    return (0, e.addMonths)(n, a * 12, i);
  }
  return Yo;
}
var Wo = {}, pl;
function IO() {
  if (pl) return Wo;
  pl = 1, Wo.areIntervalsOverlapping = r;
  var e = /* @__PURE__ */ w();
  function r(n, a, i) {
    const [o, u] = [
      +(0, e.toDate)(n.start, i?.in),
      +(0, e.toDate)(n.end, i?.in)
    ].sort((l, v) => l - v), [s, c] = [
      +(0, e.toDate)(a.start, i?.in),
      +(0, e.toDate)(a.end, i?.in)
    ].sort((l, v) => l - v);
    return i?.inclusive ? o <= c && s <= u : o < c && s < u;
  }
  return Wo;
}
var Co = {}, Fo = {}, wl;
function fg() {
  if (wl) return Fo;
  wl = 1, Fo.max = n;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ w();
  function n(a, i) {
    let o, u = i?.in;
    return a.forEach((s) => {
      !u && typeof s == "object" && (u = e.constructFrom.bind(null, s));
      const c = (0, r.toDate)(s, u);
      (!o || o < c || isNaN(+c)) && (o = c);
    }), (0, e.constructFrom)(u, o || NaN);
  }
  return Fo;
}
var Ao = {}, Dl;
function lg() {
  if (Dl) return Ao;
  Dl = 1, Ao.min = n;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ w();
  function n(a, i) {
    let o, u = i?.in;
    return a.forEach((s) => {
      !u && typeof s == "object" && (u = e.constructFrom.bind(null, s));
      const c = (0, r.toDate)(s, u);
      (!o || o > c || isNaN(+c)) && (o = c);
    }), (0, e.constructFrom)(u, o || NaN);
  }
  return Ao;
}
var Pl;
function EO() {
  if (Pl) return Co;
  Pl = 1, Co.clamp = a;
  var e = /* @__PURE__ */ K(), r = /* @__PURE__ */ fg(), n = /* @__PURE__ */ lg();
  function a(i, o, u) {
    const [s, c, l] = (0, e.normalizeDates)(
      u?.in,
      i,
      o.start,
      o.end
    );
    return (0, n.min)(
      [(0, r.max)([s, c], u), l],
      u
    );
  }
  return Co;
}
var Ho = {}, Il;
function hg() {
  if (Il) return Ho;
  Il = 1, Ho.closestIndexTo = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = +(0, e.toDate)(n);
    if (isNaN(i)) return NaN;
    let o, u;
    return a.forEach((s, c) => {
      const l = (0, e.toDate)(s);
      if (isNaN(+l)) {
        o = NaN, u = NaN;
        return;
      }
      const v = Math.abs(i - +l);
      (o == null || v < u) && (o = c, u = v);
    }), o;
  }
  return Ho;
}
var Lo = {}, El;
function TO() {
  if (El) return Lo;
  El = 1, Lo.closestTo = a;
  var e = /* @__PURE__ */ K(), r = /* @__PURE__ */ hg(), n = /* @__PURE__ */ Y();
  function a(i, o, u) {
    const [s, ...c] = (0, e.normalizeDates)(
      u?.in,
      i,
      ...o
    ), l = (0, r.closestIndexTo)(s, c);
    if (typeof l == "number" && isNaN(l))
      return (0, n.constructFrom)(s, NaN);
    if (l !== void 0) return c[l];
  }
  return Lo;
}
var yo = {}, Tl;
function nt() {
  if (Tl) return yo;
  Tl = 1, yo.compareAsc = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = +(0, e.toDate)(n) - +(0, e.toDate)(a);
    return i < 0 ? -1 : i > 0 ? 1 : i;
  }
  return yo;
}
var zo = {}, Sl;
function SO() {
  if (Sl) return zo;
  Sl = 1, zo.compareDesc = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = +(0, e.toDate)(n) - +(0, e.toDate)(a);
    return i > 0 ? -1 : i < 0 ? 1 : i;
  }
  return zo;
}
var Bo = {}, ql;
function se() {
  if (ql) return Bo;
  ql = 1, Bo.constructNow = r;
  var e = /* @__PURE__ */ Y();
  function r(n) {
    return (0, e.constructFrom)(n, Date.now());
  }
  return Bo;
}
var Qo = {}, Rl;
function qO() {
  if (Rl) return Qo;
  Rl = 1, Qo.daysToWeeks = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    const a = Math.trunc(n / e.daysInWeek);
    return a === 0 ? 0 : a;
  }
  return Qo;
}
var Vo = {}, Go = {}, xl;
function gt() {
  if (xl) return Go;
  xl = 1, Go.isSameDay = n;
  var e = /* @__PURE__ */ K(), r = /* @__PURE__ */ mr();
  function n(a, i, o) {
    const [u, s] = (0, e.normalizeDates)(
      o?.in,
      a,
      i
    );
    return +(0, r.startOfDay)(u) == +(0, r.startOfDay)(s);
  }
  return Go;
}
var Uo = {}, Zo = {}, jl;
function vg() {
  if (jl) return Zo;
  jl = 1, Zo.isDate = e;
  function e(r) {
    return r instanceof Date || typeof r == "object" && Object.prototype.toString.call(r) === "[object Date]";
  }
  return Zo;
}
var Nl;
function Ve() {
  if (Nl) return Uo;
  Nl = 1, Uo.isValid = n;
  var e = /* @__PURE__ */ vg(), r = /* @__PURE__ */ w();
  function n(a) {
    return !(!(0, e.isDate)(a) && typeof a != "number" || isNaN(+(0, r.toDate)(a)));
  }
  return Uo;
}
var Yl;
function RO() {
  if (Yl) return Vo;
  Yl = 1, Vo.differenceInBusinessDays = u;
  var e = /* @__PURE__ */ K(), r = /* @__PURE__ */ Ye(), n = /* @__PURE__ */ Qe(), a = /* @__PURE__ */ gt(), i = /* @__PURE__ */ Ve(), o = /* @__PURE__ */ hr();
  function u(s, c, l) {
    const [v, d] = (0, e.normalizeDates)(
      l?.in,
      s,
      c
    );
    if (!(0, i.isValid)(v) || !(0, i.isValid)(d))
      return NaN;
    const f = (0, n.differenceInCalendarDays)(v, d), h = f < 0 ? -1 : 1, m = Math.trunc(f / 7);
    let _ = m * 5, g = (0, r.addDays)(d, m * 7);
    for (; !(0, a.isSameDay)(v, g); )
      _ += (0, o.isWeekend)(g, l) ? 0 : h, g = (0, r.addDays)(g, h);
    return _ === 0 ? 0 : _;
  }
  return Vo;
}
var Xo = {}, Wl;
function mg() {
  if (Wl) return Xo;
  Wl = 1, Xo.differenceInCalendarISOWeekYears = n;
  var e = /* @__PURE__ */ K(), r = /* @__PURE__ */ Je();
  function n(a, i, o) {
    const [u, s] = (0, e.normalizeDates)(
      o?.in,
      a,
      i
    );
    return (0, r.getISOWeekYear)(u, o) - (0, r.getISOWeekYear)(s, o);
  }
  return Xo;
}
var Ko = {}, Cl;
function xO() {
  if (Cl) return Ko;
  Cl = 1, Ko.differenceInCalendarISOWeeks = i;
  var e = /* @__PURE__ */ Be(), r = /* @__PURE__ */ K(), n = /* @__PURE__ */ V(), a = /* @__PURE__ */ We();
  function i(o, u, s) {
    const [c, l] = (0, r.normalizeDates)(
      s?.in,
      o,
      u
    ), v = (0, a.startOfISOWeek)(c), d = (0, a.startOfISOWeek)(l), f = +v - (0, e.getTimezoneOffsetInMilliseconds)(v), h = +d - (0, e.getTimezoneOffsetInMilliseconds)(d);
    return Math.round(
      (f - h) / n.millisecondsInWeek
    );
  }
  return Ko;
}
var Jo = {}, Fl;
function ff() {
  if (Fl) return Jo;
  Fl = 1, Jo.differenceInCalendarMonths = r;
  var e = /* @__PURE__ */ K();
  function r(n, a, i) {
    const [o, u] = (0, e.normalizeDates)(
      i?.in,
      n,
      a
    ), s = o.getFullYear() - u.getFullYear(), c = o.getMonth() - u.getMonth();
    return s * 12 + c;
  }
  return Jo;
}
var $o = {}, ko = {}, Al;
function _g() {
  if (Al) return ko;
  Al = 1, ko.getQuarter = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in);
    return Math.trunc(i.getMonth() / 3) + 1;
  }
  return ko;
}
var Hl;
function gg() {
  if (Hl) return $o;
  Hl = 1, $o.differenceInCalendarQuarters = n;
  var e = /* @__PURE__ */ K(), r = /* @__PURE__ */ _g();
  function n(a, i, o) {
    const [u, s] = (0, e.normalizeDates)(
      o?.in,
      a,
      i
    ), c = u.getFullYear() - s.getFullYear(), l = (0, r.getQuarter)(u) - (0, r.getQuarter)(s);
    return c * 4 + l;
  }
  return $o;
}
var eu = {}, Ll;
function lf() {
  if (Ll) return eu;
  Ll = 1, eu.differenceInCalendarWeeks = i;
  var e = /* @__PURE__ */ Be(), r = /* @__PURE__ */ K(), n = /* @__PURE__ */ V(), a = /* @__PURE__ */ Re();
  function i(o, u, s) {
    const [c, l] = (0, r.normalizeDates)(
      s?.in,
      o,
      u
    ), v = (0, a.startOfWeek)(c, s), d = (0, a.startOfWeek)(l, s), f = +v - (0, e.getTimezoneOffsetInMilliseconds)(v), h = +d - (0, e.getTimezoneOffsetInMilliseconds)(d);
    return Math.round(
      (f - h) / n.millisecondsInWeek
    );
  }
  return eu;
}
var tu = {}, yl;
function hf() {
  if (yl) return tu;
  yl = 1, tu.differenceInCalendarYears = r;
  var e = /* @__PURE__ */ K();
  function r(n, a, i) {
    const [o, u] = (0, e.normalizeDates)(
      i?.in,
      n,
      a
    );
    return o.getFullYear() - u.getFullYear();
  }
  return tu;
}
var ru = {}, zl;
function vf() {
  if (zl) return ru;
  zl = 1, ru.differenceInDays = n;
  var e = /* @__PURE__ */ K(), r = /* @__PURE__ */ Qe();
  function n(i, o, u) {
    const [s, c] = (0, e.normalizeDates)(
      u?.in,
      i,
      o
    ), l = a(s, c), v = Math.abs(
      (0, r.differenceInCalendarDays)(s, c)
    );
    s.setDate(s.getDate() - l * v);
    const d = +(a(s, c) === -l), f = l * (v - d);
    return f === 0 ? 0 : f;
  }
  function a(i, o) {
    const u = i.getFullYear() - o.getFullYear() || i.getMonth() - o.getMonth() || i.getDate() - o.getDate() || i.getHours() - o.getHours() || i.getMinutes() - o.getMinutes() || i.getSeconds() - o.getSeconds() || i.getMilliseconds() - o.getMilliseconds();
    return u < 0 ? -1 : u > 0 ? 1 : u;
  }
  return ru;
}
var nu = {}, au = {}, Bl;
function Ge() {
  if (Bl) return au;
  Bl = 1, au.getRoundingMethod = e;
  function e(r) {
    return (n) => {
      const i = (r ? Math[r] : Math.trunc)(n);
      return i === 0 ? 0 : i;
    };
  }
  return au;
}
var Ql;
function mf() {
  if (Ql) return nu;
  Ql = 1, nu.differenceInHours = a;
  var e = /* @__PURE__ */ Ge(), r = /* @__PURE__ */ K(), n = /* @__PURE__ */ V();
  function a(i, o, u) {
    const [s, c] = (0, r.normalizeDates)(
      u?.in,
      i,
      o
    ), l = (+s - +c) / n.millisecondsInHour;
    return (0, e.getRoundingMethod)(u?.roundingMethod)(l);
  }
  return nu;
}
var iu = {}, ou = {}, Vl;
function bg() {
  if (Vl) return ou;
  Vl = 1, ou.subISOWeekYears = r;
  var e = /* @__PURE__ */ sg();
  function r(n, a, i) {
    return (0, e.addISOWeekYears)(n, -a, i);
  }
  return ou;
}
var Gl;
function jO() {
  if (Gl) return iu;
  Gl = 1, iu.differenceInISOWeekYears = i;
  var e = /* @__PURE__ */ K(), r = /* @__PURE__ */ nt(), n = /* @__PURE__ */ mg(), a = /* @__PURE__ */ bg();
  function i(o, u, s) {
    const [c, l] = (0, e.normalizeDates)(
      s?.in,
      o,
      u
    ), v = (0, r.compareAsc)(c, l), d = Math.abs(
      (0, n.differenceInCalendarISOWeekYears)(
        c,
        l,
        s
      )
    ), f = (0, a.subISOWeekYears)(
      c,
      v * d,
      s
    ), h = +((0, r.compareAsc)(f, l) === -v), m = v * (d - h);
    return m === 0 ? 0 : m;
  }
  return iu;
}
var uu = {}, Ul;
function _f() {
  if (Ul) return uu;
  Ul = 1, uu.differenceInMilliseconds = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return +(0, e.toDate)(n) - +(0, e.toDate)(a);
  }
  return uu;
}
var su = {}, Zl;
function gf() {
  if (Zl) return su;
  Zl = 1, su.differenceInMinutes = a;
  var e = /* @__PURE__ */ Ge(), r = /* @__PURE__ */ V(), n = /* @__PURE__ */ _f();
  function a(i, o, u) {
    const s = (0, n.differenceInMilliseconds)(i, o) / r.millisecondsInMinute;
    return (0, e.getRoundingMethod)(u?.roundingMethod)(s);
  }
  return su;
}
var cu = {}, du = {}, fu = {}, Xl;
function bf() {
  if (Xl) return fu;
  Xl = 1, fu.endOfDay = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in);
    return i.setHours(23, 59, 59, 999), i;
  }
  return fu;
}
var lu = {}, Kl;
function Of() {
  if (Kl) return lu;
  Kl = 1, lu.endOfMonth = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in), o = i.getMonth();
    return i.setFullYear(i.getFullYear(), o + 1, 0), i.setHours(23, 59, 59, 999), i;
  }
  return lu;
}
var Jl;
function Og() {
  if (Jl) return du;
  Jl = 1, du.isLastDayOfMonth = a;
  var e = /* @__PURE__ */ bf(), r = /* @__PURE__ */ Of(), n = /* @__PURE__ */ w();
  function a(i, o) {
    const u = (0, n.toDate)(i, o?.in);
    return +(0, e.endOfDay)(u, o) == +(0, r.endOfMonth)(u, o);
  }
  return du;
}
var $l;
function gr() {
  if ($l) return cu;
  $l = 1, cu.differenceInMonths = i;
  var e = /* @__PURE__ */ K(), r = /* @__PURE__ */ nt(), n = /* @__PURE__ */ ff(), a = /* @__PURE__ */ Og();
  function i(o, u, s) {
    const [c, l, v] = (0, e.normalizeDates)(s?.in, o, o, u), d = (0, r.compareAsc)(l, v), f = Math.abs(
      (0, n.differenceInCalendarMonths)(l, v)
    );
    if (f < 1) return 0;
    l.getMonth() === 1 && l.getDate() > 27 && l.setDate(30), l.setMonth(l.getMonth() - d * f);
    let h = (0, r.compareAsc)(l, v) === -d;
    (0, a.isLastDayOfMonth)(c) && f === 1 && (0, r.compareAsc)(c, v) === 1 && (h = !1);
    const m = d * (f - +h);
    return m === 0 ? 0 : m;
  }
  return cu;
}
var hu = {}, kl;
function NO() {
  if (kl) return hu;
  kl = 1, hu.differenceInQuarters = n;
  var e = /* @__PURE__ */ Ge(), r = /* @__PURE__ */ gr();
  function n(a, i, o) {
    const u = (0, r.differenceInMonths)(a, i, o) / 3;
    return (0, e.getRoundingMethod)(o?.roundingMethod)(u);
  }
  return hu;
}
var vu = {}, eh;
function br() {
  if (eh) return vu;
  eh = 1, vu.differenceInSeconds = n;
  var e = /* @__PURE__ */ Ge(), r = /* @__PURE__ */ _f();
  function n(a, i, o) {
    const u = (0, r.differenceInMilliseconds)(a, i) / 1e3;
    return (0, e.getRoundingMethod)(o?.roundingMethod)(u);
  }
  return vu;
}
var mu = {}, th;
function YO() {
  if (th) return mu;
  th = 1, mu.differenceInWeeks = n;
  var e = /* @__PURE__ */ Ge(), r = /* @__PURE__ */ vf();
  function n(a, i, o) {
    const u = (0, r.differenceInDays)(a, i, o) / 7;
    return (0, e.getRoundingMethod)(o?.roundingMethod)(u);
  }
  return mu;
}
var _u = {}, rh;
function Mg() {
  if (rh) return _u;
  rh = 1, _u.differenceInYears = a;
  var e = /* @__PURE__ */ K(), r = /* @__PURE__ */ nt(), n = /* @__PURE__ */ hf();
  function a(i, o, u) {
    const [s, c] = (0, e.normalizeDates)(
      u?.in,
      i,
      o
    ), l = (0, r.compareAsc)(s, c), v = Math.abs(
      (0, n.differenceInCalendarYears)(s, c)
    );
    s.setFullYear(1584), c.setFullYear(1584);
    const d = (0, r.compareAsc)(s, c) === -l, f = l * (v - +d);
    return f === 0 ? 0 : f;
  }
  return _u;
}
var gu = {}, bu = {}, nh;
function Ce() {
  if (nh) return bu;
  nh = 1, bu.normalizeInterval = r;
  var e = /* @__PURE__ */ K();
  function r(n, a) {
    const [i, o] = (0, e.normalizeDates)(
      n,
      a.start,
      a.end
    );
    return { start: i, end: o };
  }
  return bu;
}
var ah;
function pg() {
  if (ah) return gu;
  ah = 1, gu.eachDayOfInterval = n;
  var e = /* @__PURE__ */ Ce(), r = /* @__PURE__ */ Y();
  function n(a, i) {
    const { start: o, end: u } = (0, e.normalizeInterval)(i?.in, a);
    let s = +o > +u;
    const c = s ? +o : +u, l = s ? u : o;
    l.setHours(0, 0, 0, 0);
    let v = i?.step ?? 1;
    if (!v) return [];
    v < 0 && (v = -v, s = !s);
    const d = [];
    for (; +l <= c; )
      d.push((0, r.constructFrom)(o, l)), l.setDate(l.getDate() + v), l.setHours(0, 0, 0, 0);
    return s ? d.reverse() : d;
  }
  return gu;
}
var Ou = {}, ih;
function WO() {
  if (ih) return Ou;
  ih = 1, Ou.eachHourOfInterval = n;
  var e = /* @__PURE__ */ Ce(), r = /* @__PURE__ */ Y();
  function n(a, i) {
    const { start: o, end: u } = (0, e.normalizeInterval)(i?.in, a);
    let s = +o > +u;
    const c = s ? +o : +u, l = s ? u : o;
    l.setMinutes(0, 0, 0);
    let v = i?.step ?? 1;
    if (!v) return [];
    v < 0 && (v = -v, s = !s);
    const d = [];
    for (; +l <= c; )
      d.push((0, r.constructFrom)(o, l)), l.setHours(l.getHours() + v);
    return s ? d.reverse() : d;
  }
  return Ou;
}
var Mu = {}, oh;
function CO() {
  if (oh) return Mu;
  oh = 1, Mu.eachMinuteOfInterval = a;
  var e = /* @__PURE__ */ Ce(), r = /* @__PURE__ */ cf(), n = /* @__PURE__ */ Y();
  function a(i, o) {
    const { start: u, end: s } = (0, e.normalizeInterval)(o?.in, i);
    u.setSeconds(0, 0);
    let c = +u > +s;
    const l = c ? +u : +s;
    let v = c ? s : u, d = o?.step ?? 1;
    if (!d) return [];
    d < 0 && (d = -d, c = !c);
    const f = [];
    for (; +v <= l; )
      f.push((0, n.constructFrom)(u, v)), v = (0, r.addMinutes)(v, d);
    return c ? f.reverse() : f;
  }
  return Mu;
}
var pu = {}, uh;
function FO() {
  if (uh) return pu;
  uh = 1, pu.eachMonthOfInterval = n;
  var e = /* @__PURE__ */ Ce(), r = /* @__PURE__ */ Y();
  function n(a, i) {
    const { start: o, end: u } = (0, e.normalizeInterval)(i?.in, a);
    let s = +o > +u;
    const c = s ? +o : +u, l = s ? u : o;
    l.setHours(0, 0, 0, 0), l.setDate(1);
    let v = i?.step ?? 1;
    if (!v) return [];
    v < 0 && (v = -v, s = !s);
    const d = [];
    for (; +l <= c; )
      d.push((0, r.constructFrom)(o, l)), l.setMonth(l.getMonth() + v);
    return s ? d.reverse() : d;
  }
  return pu;
}
var wu = {}, Du = {}, sh;
function Mf() {
  if (sh) return Du;
  sh = 1, Du.startOfQuarter = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in), o = i.getMonth(), u = o - o % 3;
    return i.setMonth(u, 1), i.setHours(0, 0, 0, 0), i;
  }
  return Du;
}
var ch;
function AO() {
  if (ch) return wu;
  ch = 1, wu.eachQuarterOfInterval = i;
  var e = /* @__PURE__ */ Ce(), r = /* @__PURE__ */ df(), n = /* @__PURE__ */ Y(), a = /* @__PURE__ */ Mf();
  function i(o, u) {
    const { start: s, end: c } = (0, e.normalizeInterval)(u?.in, o);
    let l = +s > +c;
    const v = l ? +(0, a.startOfQuarter)(s) : +(0, a.startOfQuarter)(c);
    let d = l ? (0, a.startOfQuarter)(c) : (0, a.startOfQuarter)(s), f = u?.step ?? 1;
    if (!f) return [];
    f < 0 && (f = -f, l = !l);
    const h = [];
    for (; +d <= v; )
      h.push((0, n.constructFrom)(s, d)), d = (0, r.addQuarters)(d, f);
    return l ? h.reverse() : h;
  }
  return wu;
}
var Pu = {}, dh;
function HO() {
  if (dh) return Pu;
  dh = 1, Pu.eachWeekOfInterval = i;
  var e = /* @__PURE__ */ Ce(), r = /* @__PURE__ */ _r(), n = /* @__PURE__ */ Y(), a = /* @__PURE__ */ Re();
  function i(o, u) {
    const { start: s, end: c } = (0, e.normalizeInterval)(u?.in, o);
    let l = +s > +c;
    const v = l ? (0, a.startOfWeek)(c, u) : (0, a.startOfWeek)(s, u), d = l ? (0, a.startOfWeek)(s, u) : (0, a.startOfWeek)(c, u);
    v.setHours(15), d.setHours(15);
    const f = +d.getTime();
    let h = v, m = u?.step ?? 1;
    if (!m) return [];
    m < 0 && (m = -m, l = !l);
    const _ = [];
    for (; +h <= f; )
      h.setHours(0), _.push((0, n.constructFrom)(s, h)), h = (0, r.addWeeks)(h, m), h.setHours(15);
    return l ? _.reverse() : _;
  }
  return Pu;
}
var Iu = {}, fh;
function pf() {
  if (fh) return Iu;
  fh = 1, Iu.eachWeekendOfInterval = i;
  var e = /* @__PURE__ */ Ce(), r = /* @__PURE__ */ Y(), n = /* @__PURE__ */ pg(), a = /* @__PURE__ */ hr();
  function i(o, u) {
    const { start: s, end: c } = (0, e.normalizeInterval)(u?.in, o), l = (0, n.eachDayOfInterval)({ start: s, end: c }, u), v = [];
    let d = 0;
    for (; d < l.length; ) {
      const f = l[d++];
      (0, a.isWeekend)(f) && v.push((0, r.constructFrom)(s, f));
    }
    return v;
  }
  return Iu;
}
var Eu = {}, Tu = {}, lh;
function Or() {
  if (lh) return Tu;
  lh = 1, Tu.startOfMonth = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in);
    return i.setDate(1), i.setHours(0, 0, 0, 0), i;
  }
  return Tu;
}
var hh;
function LO() {
  if (hh) return Eu;
  hh = 1, Eu.eachWeekendOfMonth = a;
  var e = /* @__PURE__ */ pf(), r = /* @__PURE__ */ Of(), n = /* @__PURE__ */ Or();
  function a(i, o) {
    const u = (0, n.startOfMonth)(i, o), s = (0, r.endOfMonth)(i, o);
    return (0, e.eachWeekendOfInterval)({ start: u, end: s }, o);
  }
  return Eu;
}
var Su = {}, qu = {}, vh;
function wg() {
  if (vh) return qu;
  vh = 1, qu.endOfYear = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in), o = i.getFullYear();
    return i.setFullYear(o + 1, 0, 0), i.setHours(23, 59, 59, 999), i;
  }
  return qu;
}
var Ru = {}, mh;
function wf() {
  if (mh) return Ru;
  mh = 1, Ru.startOfYear = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in);
    return i.setFullYear(i.getFullYear(), 0, 1), i.setHours(0, 0, 0, 0), i;
  }
  return Ru;
}
var _h;
function yO() {
  if (_h) return Su;
  _h = 1, Su.eachWeekendOfYear = a;
  var e = /* @__PURE__ */ pf(), r = /* @__PURE__ */ wg(), n = /* @__PURE__ */ wf();
  function a(i, o) {
    const u = (0, n.startOfYear)(i, o), s = (0, r.endOfYear)(i, o);
    return (0, e.eachWeekendOfInterval)({ start: u, end: s }, o);
  }
  return Su;
}
var xu = {}, gh;
function zO() {
  if (gh) return xu;
  gh = 1, xu.eachYearOfInterval = n;
  var e = /* @__PURE__ */ Ce(), r = /* @__PURE__ */ Y();
  function n(a, i) {
    const { start: o, end: u } = (0, e.normalizeInterval)(i?.in, a);
    let s = +o > +u;
    const c = s ? +o : +u, l = s ? u : o;
    l.setHours(0, 0, 0, 0), l.setMonth(0, 1);
    let v = i?.step ?? 1;
    if (!v) return [];
    v < 0 && (v = -v, s = !s);
    const d = [];
    for (; +l <= c; )
      d.push((0, r.constructFrom)(o, l)), l.setFullYear(l.getFullYear() + v);
    return s ? d.reverse() : d;
  }
  return xu;
}
var ju = {}, bh;
function BO() {
  if (bh) return ju;
  bh = 1, ju.endOfDecade = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in), o = i.getFullYear(), u = 9 + Math.floor(o / 10) * 10;
    return i.setFullYear(u, 11, 31), i.setHours(23, 59, 59, 999), i;
  }
  return ju;
}
var Nu = {}, Oh;
function QO() {
  if (Oh) return Nu;
  Oh = 1, Nu.endOfHour = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in);
    return i.setMinutes(59, 59, 999), i;
  }
  return Nu;
}
var Yu = {}, Wu = {}, Mh;
function Dg() {
  if (Mh) return Wu;
  Mh = 1, Wu.endOfWeek = n;
  var e = /* @__PURE__ */ _e(), r = /* @__PURE__ */ w();
  function n(a, i) {
    const o = (0, e.getDefaultOptions)(), u = i?.weekStartsOn ?? i?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, s = (0, r.toDate)(a, i?.in), c = s.getDay(), l = (c < u ? -7 : 0) + 6 - (c - u);
    return s.setDate(s.getDate() + l), s.setHours(23, 59, 59, 999), s;
  }
  return Wu;
}
var ph;
function VO() {
  if (ph) return Yu;
  ph = 1, Yu.endOfISOWeek = r;
  var e = /* @__PURE__ */ Dg();
  function r(n, a) {
    return (0, e.endOfWeek)(n, { ...a, weekStartsOn: 1 });
  }
  return Yu;
}
var Cu = {}, wh;
function GO() {
  if (wh) return Cu;
  wh = 1, Cu.endOfISOWeekYear = a;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ Je(), n = /* @__PURE__ */ We();
  function a(i, o) {
    const u = (0, r.getISOWeekYear)(i, o), s = (0, e.constructFrom)(
      o?.in || i,
      0
    );
    s.setFullYear(u + 1, 0, 4), s.setHours(0, 0, 0, 0);
    const c = (0, n.startOfISOWeek)(s, o);
    return c.setMilliseconds(c.getMilliseconds() - 1), c;
  }
  return Cu;
}
var Fu = {}, Dh;
function UO() {
  if (Dh) return Fu;
  Dh = 1, Fu.endOfMinute = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in);
    return i.setSeconds(59, 999), i;
  }
  return Fu;
}
var Au = {}, Ph;
function ZO() {
  if (Ph) return Au;
  Ph = 1, Au.endOfQuarter = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in), o = i.getMonth(), u = o - o % 3 + 3;
    return i.setMonth(u, 0), i.setHours(23, 59, 59, 999), i;
  }
  return Au;
}
var Hu = {}, Ih;
function XO() {
  if (Ih) return Hu;
  Ih = 1, Hu.endOfSecond = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in);
    return i.setMilliseconds(999), i;
  }
  return Hu;
}
var Lu = {}, Eh;
function KO() {
  if (Eh) return Lu;
  Eh = 1, Lu.endOfToday = r;
  var e = /* @__PURE__ */ bf();
  function r(n) {
    return (0, e.endOfDay)(Date.now(), n);
  }
  return Lu;
}
var yu = {}, Th;
function JO() {
  if (Th) return yu;
  Th = 1, yu.endOfTomorrow = r;
  var e = /* @__PURE__ */ se();
  function r(n) {
    const a = (0, e.constructNow)(n?.in), i = a.getFullYear(), o = a.getMonth(), u = a.getDate(), s = (0, e.constructNow)(n?.in);
    return s.setFullYear(i, o, u + 1), s.setHours(23, 59, 59, 999), n?.in ? n.in(s) : s;
  }
  return yu;
}
var zu = {}, Sh;
function $O() {
  if (Sh) return zu;
  Sh = 1, zu.endOfYesterday = n;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ se();
  function n(a) {
    const i = (0, r.constructNow)(a?.in), o = (0, e.constructFrom)(a?.in, 0);
    return o.setFullYear(i.getFullYear(), i.getMonth(), i.getDate() - 1), o.setHours(23, 59, 59, 999), o;
  }
  return zu;
}
var Bu = {}, Qu = {}, Mt = {}, pt = {}, qh;
function kO() {
  if (qh) return pt;
  qh = 1, pt.formatDistance = void 0;
  const e = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  }, r = (n, a, i) => {
    let o;
    const u = e[n];
    return typeof u == "string" ? o = u : a === 1 ? o = u.one : o = u.other.replace("{{count}}", a.toString()), i?.addSuffix ? i.comparison && i.comparison > 0 ? "in " + o : o + " ago" : o;
  };
  return pt.formatDistance = r, pt;
}
var wt = {}, Vu = {}, Rh;
function e2() {
  if (Rh) return Vu;
  Rh = 1, Vu.buildFormatLongFn = e;
  function e(r) {
    return (n = {}) => {
      const a = n.width ? String(n.width) : r.defaultWidth;
      return r.formats[a] || r.formats[r.defaultWidth];
    };
  }
  return Vu;
}
var xh;
function t2() {
  if (xh) return wt;
  xh = 1, wt.formatLong = void 0;
  var e = /* @__PURE__ */ e2();
  const r = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  }, n = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  }, a = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  };
  return wt.formatLong = {
    date: (0, e.buildFormatLongFn)({
      formats: r,
      defaultWidth: "full"
    }),
    time: (0, e.buildFormatLongFn)({
      formats: n,
      defaultWidth: "full"
    }),
    dateTime: (0, e.buildFormatLongFn)({
      formats: a,
      defaultWidth: "full"
    })
  }, wt;
}
var Dt = {}, jh;
function r2() {
  if (jh) return Dt;
  jh = 1, Dt.formatRelative = void 0;
  const e = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  }, r = (n, a, i, o) => e[n];
  return Dt.formatRelative = r, Dt;
}
var Pt = {}, Gu = {}, Nh;
function n2() {
  if (Nh) return Gu;
  Nh = 1, Gu.buildLocalizeFn = e;
  function e(r) {
    return (n, a) => {
      const i = a?.context ? String(a.context) : "standalone";
      let o;
      if (i === "formatting" && r.formattingValues) {
        const s = r.defaultFormattingWidth || r.defaultWidth, c = a?.width ? String(a.width) : s;
        o = r.formattingValues[c] || r.formattingValues[s];
      } else {
        const s = r.defaultWidth, c = a?.width ? String(a.width) : r.defaultWidth;
        o = r.values[c] || r.values[s];
      }
      const u = r.argumentCallback ? r.argumentCallback(n) : n;
      return o[u];
    };
  }
  return Gu;
}
var Yh;
function a2() {
  if (Yh) return Pt;
  Yh = 1, Pt.localize = void 0;
  var e = /* @__PURE__ */ n2();
  const r = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  }, n = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  }, a = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  }, i = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  }, o = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  }, u = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  }, s = (c, l) => {
    const v = Number(c), d = v % 100;
    if (d > 20 || d < 10)
      switch (d % 10) {
        case 1:
          return v + "st";
        case 2:
          return v + "nd";
        case 3:
          return v + "rd";
      }
    return v + "th";
  };
  return Pt.localize = {
    ordinalNumber: s,
    era: (0, e.buildLocalizeFn)({
      values: r,
      defaultWidth: "wide"
    }),
    quarter: (0, e.buildLocalizeFn)({
      values: n,
      defaultWidth: "wide",
      argumentCallback: (c) => c - 1
    }),
    month: (0, e.buildLocalizeFn)({
      values: a,
      defaultWidth: "wide"
    }),
    day: (0, e.buildLocalizeFn)({
      values: i,
      defaultWidth: "wide"
    }),
    dayPeriod: (0, e.buildLocalizeFn)({
      values: o,
      defaultWidth: "wide",
      formattingValues: u,
      defaultFormattingWidth: "wide"
    })
  }, Pt;
}
var It = {}, Uu = {}, Wh;
function i2() {
  if (Wh) return Uu;
  Wh = 1, Uu.buildMatchFn = e;
  function e(a) {
    return (i, o = {}) => {
      const u = o.width, s = u && a.matchPatterns[u] || a.matchPatterns[a.defaultMatchWidth], c = i.match(s);
      if (!c)
        return null;
      const l = c[0], v = u && a.parsePatterns[u] || a.parsePatterns[a.defaultParseWidth], d = Array.isArray(v) ? n(v, (m) => m.test(l)) : (
        // [TODO] -- I challenge you to fix the type
        r(v, (m) => m.test(l))
      );
      let f;
      f = a.valueCallback ? a.valueCallback(d) : d, f = o.valueCallback ? (
        // [TODO] -- I challenge you to fix the type
        o.valueCallback(f)
      ) : f;
      const h = i.slice(l.length);
      return { value: f, rest: h };
    };
  }
  function r(a, i) {
    for (const o in a)
      if (Object.prototype.hasOwnProperty.call(a, o) && i(a[o]))
        return o;
  }
  function n(a, i) {
    for (let o = 0; o < a.length; o++)
      if (i(a[o]))
        return o;
  }
  return Uu;
}
var Zu = {}, Ch;
function o2() {
  if (Ch) return Zu;
  Ch = 1, Zu.buildMatchPatternFn = e;
  function e(r) {
    return (n, a = {}) => {
      const i = n.match(r.matchPattern);
      if (!i) return null;
      const o = i[0], u = n.match(r.parsePattern);
      if (!u) return null;
      let s = r.valueCallback ? r.valueCallback(u[0]) : u[0];
      s = a.valueCallback ? a.valueCallback(s) : s;
      const c = n.slice(o.length);
      return { value: s, rest: c };
    };
  }
  return Zu;
}
var Fh;
function u2() {
  if (Fh) return It;
  Fh = 1, It.match = void 0;
  var e = /* @__PURE__ */ i2(), r = /* @__PURE__ */ o2();
  const n = /^(\d+)(th|st|nd|rd)?/i, a = /\d+/i, i = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  }, o = {
    any: [/^b/i, /^(a|c)/i]
  }, u = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  }, s = {
    any: [/1/i, /2/i, /3/i, /4/i]
  }, c = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  }, l = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i
    ]
  }, v = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  }, d = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  }, f = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  }, h = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  return It.match = {
    ordinalNumber: (0, r.buildMatchPatternFn)({
      matchPattern: n,
      parsePattern: a,
      valueCallback: (m) => parseInt(m, 10)
    }),
    era: (0, e.buildMatchFn)({
      matchPatterns: i,
      defaultMatchWidth: "wide",
      parsePatterns: o,
      defaultParseWidth: "any"
    }),
    quarter: (0, e.buildMatchFn)({
      matchPatterns: u,
      defaultMatchWidth: "wide",
      parsePatterns: s,
      defaultParseWidth: "any",
      valueCallback: (m) => m + 1
    }),
    month: (0, e.buildMatchFn)({
      matchPatterns: c,
      defaultMatchWidth: "wide",
      parsePatterns: l,
      defaultParseWidth: "any"
    }),
    day: (0, e.buildMatchFn)({
      matchPatterns: v,
      defaultMatchWidth: "wide",
      parsePatterns: d,
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, e.buildMatchFn)({
      matchPatterns: f,
      defaultMatchWidth: "any",
      parsePatterns: h,
      defaultParseWidth: "any"
    })
  }, It;
}
var Ah;
function s2() {
  if (Ah) return Mt;
  Ah = 1, Mt.enUS = void 0;
  var e = /* @__PURE__ */ kO(), r = /* @__PURE__ */ t2(), n = /* @__PURE__ */ r2(), a = /* @__PURE__ */ a2(), i = /* @__PURE__ */ u2();
  return Mt.enUS = {
    code: "en-US",
    formatDistance: e.formatDistance,
    formatLong: r.formatLong,
    formatRelative: n.formatRelative,
    localize: a.localize,
    match: i.match,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  }, Mt;
}
var Hh;
function at() {
  return Hh || (Hh = 1, (function(e) {
    Object.defineProperty(e, "defaultLocale", {
      enumerable: !0,
      get: function() {
        return r.enUS;
      }
    });
    var r = /* @__PURE__ */ s2();
  })(Qu)), Qu;
}
var Et = {}, Xu = {}, Lh;
function Pg() {
  if (Lh) return Xu;
  Lh = 1, Xu.getDayOfYear = a;
  var e = /* @__PURE__ */ Qe(), r = /* @__PURE__ */ wf(), n = /* @__PURE__ */ w();
  function a(i, o) {
    const u = (0, n.toDate)(i, o?.in);
    return (0, e.differenceInCalendarDays)(
      u,
      (0, r.startOfYear)(u)
    ) + 1;
  }
  return Xu;
}
var Ku = {}, yh;
function Df() {
  if (yh) return Ku;
  yh = 1, Ku.getISOWeek = i;
  var e = /* @__PURE__ */ V(), r = /* @__PURE__ */ We(), n = /* @__PURE__ */ _t(), a = /* @__PURE__ */ w();
  function i(o, u) {
    const s = (0, a.toDate)(o, u?.in), c = +(0, r.startOfISOWeek)(s) - +(0, n.startOfISOWeekYear)(s);
    return Math.round(c / e.millisecondsInWeek) + 1;
  }
  return Ku;
}
var Ju = {}, $u = {}, ku = {}, zh;
function Mr() {
  if (zh) return ku;
  zh = 1, ku.getWeekYear = i;
  var e = /* @__PURE__ */ _e(), r = /* @__PURE__ */ Y(), n = /* @__PURE__ */ Re(), a = /* @__PURE__ */ w();
  function i(o, u) {
    const s = (0, a.toDate)(o, u?.in), c = s.getFullYear(), l = (0, e.getDefaultOptions)(), v = u?.firstWeekContainsDate ?? u?.locale?.options?.firstWeekContainsDate ?? l.firstWeekContainsDate ?? l.locale?.options?.firstWeekContainsDate ?? 1, d = (0, r.constructFrom)(
      u?.in || o,
      0
    );
    d.setFullYear(c + 1, 0, v), d.setHours(0, 0, 0, 0);
    const f = (0, n.startOfWeek)(
      d,
      u
    ), h = (0, r.constructFrom)(
      u?.in || o,
      0
    );
    h.setFullYear(c, 0, v), h.setHours(0, 0, 0, 0);
    const m = (0, n.startOfWeek)(
      h,
      u
    );
    return +s >= +f ? c + 1 : +s >= +m ? c : c - 1;
  }
  return ku;
}
var Bh;
function Pf() {
  if (Bh) return $u;
  Bh = 1, $u.startOfWeekYear = i;
  var e = /* @__PURE__ */ _e(), r = /* @__PURE__ */ Y(), n = /* @__PURE__ */ Mr(), a = /* @__PURE__ */ Re();
  function i(o, u) {
    const s = (0, e.getDefaultOptions)(), c = u?.firstWeekContainsDate ?? u?.locale?.options?.firstWeekContainsDate ?? s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, l = (0, n.getWeekYear)(o, u), v = (0, r.constructFrom)(u?.in || o, 0);
    return v.setFullYear(l, 0, c), v.setHours(0, 0, 0, 0), (0, a.startOfWeek)(v, u);
  }
  return $u;
}
var Qh;
function If() {
  if (Qh) return Ju;
  Qh = 1, Ju.getWeek = i;
  var e = /* @__PURE__ */ V(), r = /* @__PURE__ */ Re(), n = /* @__PURE__ */ Pf(), a = /* @__PURE__ */ w();
  function i(o, u) {
    const s = (0, a.toDate)(o, u?.in), c = +(0, r.startOfWeek)(s, u) - +(0, n.startOfWeekYear)(s, u);
    return Math.round(c / e.millisecondsInWeek) + 1;
  }
  return Ju;
}
var es = {}, Vh;
function it() {
  if (Vh) return es;
  Vh = 1, es.addLeadingZeros = e;
  function e(r, n) {
    const a = r < 0 ? "-" : "", i = Math.abs(r).toString().padStart(n, "0");
    return a + i;
  }
  return es;
}
var Tt = {}, Gh;
function Ig() {
  if (Gh) return Tt;
  Gh = 1, Tt.lightFormatters = void 0;
  var e = /* @__PURE__ */ it();
  return Tt.lightFormatters = {
    // Year
    y(r, n) {
      const a = r.getFullYear(), i = a > 0 ? a : 1 - a;
      return (0, e.addLeadingZeros)(
        n === "yy" ? i % 100 : i,
        n.length
      );
    },
    // Month
    M(r, n) {
      const a = r.getMonth();
      return n === "M" ? String(a + 1) : (0, e.addLeadingZeros)(a + 1, 2);
    },
    // Day of the month
    d(r, n) {
      return (0, e.addLeadingZeros)(r.getDate(), n.length);
    },
    // AM or PM
    a(r, n) {
      const a = r.getHours() / 12 >= 1 ? "pm" : "am";
      switch (n) {
        case "a":
        case "aa":
          return a.toUpperCase();
        case "aaa":
          return a;
        case "aaaaa":
          return a[0];
        default:
          return a === "am" ? "a.m." : "p.m.";
      }
    },
    // Hour [1-12]
    h(r, n) {
      return (0, e.addLeadingZeros)(
        r.getHours() % 12 || 12,
        n.length
      );
    },
    // Hour [0-23]
    H(r, n) {
      return (0, e.addLeadingZeros)(r.getHours(), n.length);
    },
    // Minute
    m(r, n) {
      return (0, e.addLeadingZeros)(r.getMinutes(), n.length);
    },
    // Second
    s(r, n) {
      return (0, e.addLeadingZeros)(r.getSeconds(), n.length);
    },
    // Fraction of second
    S(r, n) {
      const a = n.length, i = r.getMilliseconds(), o = Math.trunc(
        i * Math.pow(10, a - 3)
      );
      return (0, e.addLeadingZeros)(o, n.length);
    }
  }, Tt;
}
var Uh;
function c2() {
  if (Uh) return Et;
  Uh = 1, Et.formatters = void 0;
  var e = /* @__PURE__ */ Pg(), r = /* @__PURE__ */ Df(), n = /* @__PURE__ */ Je(), a = /* @__PURE__ */ If(), i = /* @__PURE__ */ Mr(), o = /* @__PURE__ */ it(), u = /* @__PURE__ */ Ig();
  const s = {
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  };
  Et.formatters = {
    // Era
    G: function(d, f, h) {
      const m = d.getFullYear() > 0 ? 1 : 0;
      switch (f) {
        // AD, BC
        case "G":
        case "GG":
        case "GGG":
          return h.era(m, { width: "abbreviated" });
        // A, B
        case "GGGGG":
          return h.era(m, { width: "narrow" });
        default:
          return h.era(m, { width: "wide" });
      }
    },
    // Year
    y: function(d, f, h) {
      if (f === "yo") {
        const m = d.getFullYear(), _ = m > 0 ? m : 1 - m;
        return h.ordinalNumber(_, { unit: "year" });
      }
      return u.lightFormatters.y(d, f);
    },
    // Local week-numbering year
    Y: function(d, f, h, m) {
      const _ = (0, i.getWeekYear)(d, m), g = _ > 0 ? _ : 1 - _;
      if (f === "YY") {
        const p = g % 100;
        return (0, o.addLeadingZeros)(p, 2);
      }
      return f === "Yo" ? h.ordinalNumber(g, { unit: "year" }) : (0, o.addLeadingZeros)(g, f.length);
    },
    // ISO week-numbering year
    R: function(d, f) {
      const h = (0, n.getISOWeekYear)(d);
      return (0, o.addLeadingZeros)(h, f.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(d, f) {
      const h = d.getFullYear();
      return (0, o.addLeadingZeros)(h, f.length);
    },
    // Quarter
    Q: function(d, f, h) {
      const m = Math.ceil((d.getMonth() + 1) / 3);
      switch (f) {
        // 1, 2, 3, 4
        case "Q":
          return String(m);
        // 01, 02, 03, 04
        case "QQ":
          return (0, o.addLeadingZeros)(m, 2);
        // 1st, 2nd, 3rd, 4th
        case "Qo":
          return h.ordinalNumber(m, { unit: "quarter" });
        // Q1, Q2, Q3, Q4
        case "QQQ":
          return h.quarter(m, {
            width: "abbreviated",
            context: "formatting"
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case "QQQQQ":
          return h.quarter(m, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return h.quarter(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone quarter
    q: function(d, f, h) {
      const m = Math.ceil((d.getMonth() + 1) / 3);
      switch (f) {
        // 1, 2, 3, 4
        case "q":
          return String(m);
        // 01, 02, 03, 04
        case "qq":
          return (0, o.addLeadingZeros)(m, 2);
        // 1st, 2nd, 3rd, 4th
        case "qo":
          return h.ordinalNumber(m, { unit: "quarter" });
        // Q1, Q2, Q3, Q4
        case "qqq":
          return h.quarter(m, {
            width: "abbreviated",
            context: "standalone"
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case "qqqqq":
          return h.quarter(m, {
            width: "narrow",
            context: "standalone"
          });
        default:
          return h.quarter(m, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Month
    M: function(d, f, h) {
      const m = d.getMonth();
      switch (f) {
        case "M":
        case "MM":
          return u.lightFormatters.M(d, f);
        // 1st, 2nd, ..., 12th
        case "Mo":
          return h.ordinalNumber(m + 1, { unit: "month" });
        // Jan, Feb, ..., Dec
        case "MMM":
          return h.month(m, {
            width: "abbreviated",
            context: "formatting"
          });
        // J, F, ..., D
        case "MMMMM":
          return h.month(m, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return h.month(m, { width: "wide", context: "formatting" });
      }
    },
    // Stand-alone month
    L: function(d, f, h) {
      const m = d.getMonth();
      switch (f) {
        // 1, 2, ..., 12
        case "L":
          return String(m + 1);
        // 01, 02, ..., 12
        case "LL":
          return (0, o.addLeadingZeros)(m + 1, 2);
        // 1st, 2nd, ..., 12th
        case "Lo":
          return h.ordinalNumber(m + 1, { unit: "month" });
        // Jan, Feb, ..., Dec
        case "LLL":
          return h.month(m, {
            width: "abbreviated",
            context: "standalone"
          });
        // J, F, ..., D
        case "LLLLL":
          return h.month(m, {
            width: "narrow",
            context: "standalone"
          });
        default:
          return h.month(m, { width: "wide", context: "standalone" });
      }
    },
    // Local week of year
    w: function(d, f, h, m) {
      const _ = (0, a.getWeek)(d, m);
      return f === "wo" ? h.ordinalNumber(_, { unit: "week" }) : (0, o.addLeadingZeros)(_, f.length);
    },
    // ISO week of year
    I: function(d, f, h) {
      const m = (0, r.getISOWeek)(d);
      return f === "Io" ? h.ordinalNumber(m, { unit: "week" }) : (0, o.addLeadingZeros)(m, f.length);
    },
    // Day of the month
    d: function(d, f, h) {
      return f === "do" ? h.ordinalNumber(d.getDate(), { unit: "date" }) : u.lightFormatters.d(d, f);
    },
    // Day of year
    D: function(d, f, h) {
      const m = (0, e.getDayOfYear)(d);
      return f === "Do" ? h.ordinalNumber(m, { unit: "dayOfYear" }) : (0, o.addLeadingZeros)(m, f.length);
    },
    // Day of week
    E: function(d, f, h) {
      const m = d.getDay();
      switch (f) {
        // Tue
        case "E":
        case "EE":
        case "EEE":
          return h.day(m, {
            width: "abbreviated",
            context: "formatting"
          });
        // T
        case "EEEEE":
          return h.day(m, {
            width: "narrow",
            context: "formatting"
          });
        // Tu
        case "EEEEEE":
          return h.day(m, {
            width: "short",
            context: "formatting"
          });
        default:
          return h.day(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Local day of week
    e: function(d, f, h, m) {
      const _ = d.getDay(), g = (_ - m.weekStartsOn + 8) % 7 || 7;
      switch (f) {
        // Numerical value (Nth day of week with current locale or weekStartsOn)
        case "e":
          return String(g);
        // Padded numerical value
        case "ee":
          return (0, o.addLeadingZeros)(g, 2);
        // 1st, 2nd, ..., 7th
        case "eo":
          return h.ordinalNumber(g, { unit: "day" });
        case "eee":
          return h.day(_, {
            width: "abbreviated",
            context: "formatting"
          });
        // T
        case "eeeee":
          return h.day(_, {
            width: "narrow",
            context: "formatting"
          });
        // Tu
        case "eeeeee":
          return h.day(_, {
            width: "short",
            context: "formatting"
          });
        default:
          return h.day(_, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone local day of week
    c: function(d, f, h, m) {
      const _ = d.getDay(), g = (_ - m.weekStartsOn + 8) % 7 || 7;
      switch (f) {
        // Numerical value (same as in `e`)
        case "c":
          return String(g);
        // Padded numerical value
        case "cc":
          return (0, o.addLeadingZeros)(g, f.length);
        // 1st, 2nd, ..., 7th
        case "co":
          return h.ordinalNumber(g, { unit: "day" });
        case "ccc":
          return h.day(_, {
            width: "abbreviated",
            context: "standalone"
          });
        // T
        case "ccccc":
          return h.day(_, {
            width: "narrow",
            context: "standalone"
          });
        // Tu
        case "cccccc":
          return h.day(_, {
            width: "short",
            context: "standalone"
          });
        default:
          return h.day(_, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // ISO day of week
    i: function(d, f, h) {
      const m = d.getDay(), _ = m === 0 ? 7 : m;
      switch (f) {
        // 2
        case "i":
          return String(_);
        // 02
        case "ii":
          return (0, o.addLeadingZeros)(_, f.length);
        // 2nd
        case "io":
          return h.ordinalNumber(_, { unit: "day" });
        // Tue
        case "iii":
          return h.day(m, {
            width: "abbreviated",
            context: "formatting"
          });
        // T
        case "iiiii":
          return h.day(m, {
            width: "narrow",
            context: "formatting"
          });
        // Tu
        case "iiiiii":
          return h.day(m, {
            width: "short",
            context: "formatting"
          });
        default:
          return h.day(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM or PM
    a: function(d, f, h) {
      const _ = d.getHours() / 12 >= 1 ? "pm" : "am";
      switch (f) {
        case "a":
        case "aa":
          return h.dayPeriod(_, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return h.dayPeriod(_, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return h.dayPeriod(_, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return h.dayPeriod(_, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM, PM, midnight, noon
    b: function(d, f, h) {
      const m = d.getHours();
      let _;
      switch (m === 12 ? _ = s.noon : m === 0 ? _ = s.midnight : _ = m / 12 >= 1 ? "pm" : "am", f) {
        case "b":
        case "bb":
          return h.dayPeriod(_, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return h.dayPeriod(_, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return h.dayPeriod(_, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return h.dayPeriod(_, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(d, f, h) {
      const m = d.getHours();
      let _;
      switch (m >= 17 ? _ = s.evening : m >= 12 ? _ = s.afternoon : m >= 4 ? _ = s.morning : _ = s.night, f) {
        case "B":
        case "BB":
        case "BBB":
          return h.dayPeriod(_, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return h.dayPeriod(_, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return h.dayPeriod(_, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Hour [1-12]
    h: function(d, f, h) {
      if (f === "ho") {
        let m = d.getHours() % 12;
        return m === 0 && (m = 12), h.ordinalNumber(m, { unit: "hour" });
      }
      return u.lightFormatters.h(d, f);
    },
    // Hour [0-23]
    H: function(d, f, h) {
      return f === "Ho" ? h.ordinalNumber(d.getHours(), { unit: "hour" }) : u.lightFormatters.H(d, f);
    },
    // Hour [0-11]
    K: function(d, f, h) {
      const m = d.getHours() % 12;
      return f === "Ko" ? h.ordinalNumber(m, { unit: "hour" }) : (0, o.addLeadingZeros)(m, f.length);
    },
    // Hour [1-24]
    k: function(d, f, h) {
      let m = d.getHours();
      return m === 0 && (m = 24), f === "ko" ? h.ordinalNumber(m, { unit: "hour" }) : (0, o.addLeadingZeros)(m, f.length);
    },
    // Minute
    m: function(d, f, h) {
      return f === "mo" ? h.ordinalNumber(d.getMinutes(), { unit: "minute" }) : u.lightFormatters.m(d, f);
    },
    // Second
    s: function(d, f, h) {
      return f === "so" ? h.ordinalNumber(d.getSeconds(), { unit: "second" }) : u.lightFormatters.s(d, f);
    },
    // Fraction of second
    S: function(d, f) {
      return u.lightFormatters.S(d, f);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(d, f, h) {
      const m = d.getTimezoneOffset();
      if (m === 0)
        return "Z";
      switch (f) {
        // Hours and optional minutes
        case "X":
          return l(m);
        // Hours, minutes and optional seconds without `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `XX`
        case "XXXX":
        case "XX":
          return v(m);
        // Hours and minutes with `:` delimiter
        default:
          return v(m, ":");
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(d, f, h) {
      const m = d.getTimezoneOffset();
      switch (f) {
        // Hours and optional minutes
        case "x":
          return l(m);
        // Hours, minutes and optional seconds without `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `xx`
        case "xxxx":
        case "xx":
          return v(m);
        // Hours and minutes with `:` delimiter
        default:
          return v(m, ":");
      }
    },
    // Timezone (GMT)
    O: function(d, f, h) {
      const m = d.getTimezoneOffset();
      switch (f) {
        // Short
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + c(m, ":");
        default:
          return "GMT" + v(m, ":");
      }
    },
    // Timezone (specific non-location)
    z: function(d, f, h) {
      const m = d.getTimezoneOffset();
      switch (f) {
        // Short
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + c(m, ":");
        default:
          return "GMT" + v(m, ":");
      }
    },
    // Seconds timestamp
    t: function(d, f, h) {
      const m = Math.trunc(+d / 1e3);
      return (0, o.addLeadingZeros)(m, f.length);
    },
    // Milliseconds timestamp
    T: function(d, f, h) {
      return (0, o.addLeadingZeros)(+d, f.length);
    }
  };
  function c(d, f = "") {
    const h = d > 0 ? "-" : "+", m = Math.abs(d), _ = Math.trunc(m / 60), g = m % 60;
    return g === 0 ? h + String(_) : h + String(_) + f + (0, o.addLeadingZeros)(g, 2);
  }
  function l(d, f) {
    return d % 60 === 0 ? (d > 0 ? "-" : "+") + (0, o.addLeadingZeros)(Math.abs(d) / 60, 2) : v(d, f);
  }
  function v(d, f = "") {
    const h = d > 0 ? "-" : "+", m = Math.abs(d), _ = (0, o.addLeadingZeros)(Math.trunc(m / 60), 2), g = (0, o.addLeadingZeros)(m % 60, 2);
    return h + _ + f + g;
  }
  return Et;
}
var St = {}, Zh;
function Eg() {
  if (Zh) return St;
  Zh = 1, St.longFormatters = void 0;
  const e = (a, i) => {
    switch (a) {
      case "P":
        return i.date({ width: "short" });
      case "PP":
        return i.date({ width: "medium" });
      case "PPP":
        return i.date({ width: "long" });
      default:
        return i.date({ width: "full" });
    }
  }, r = (a, i) => {
    switch (a) {
      case "p":
        return i.time({ width: "short" });
      case "pp":
        return i.time({ width: "medium" });
      case "ppp":
        return i.time({ width: "long" });
      default:
        return i.time({ width: "full" });
    }
  }, n = (a, i) => {
    const o = a.match(/(P+)(p+)?/) || [], u = o[1], s = o[2];
    if (!s)
      return e(a, i);
    let c;
    switch (u) {
      case "P":
        c = i.dateTime({ width: "short" });
        break;
      case "PP":
        c = i.dateTime({ width: "medium" });
        break;
      case "PPP":
        c = i.dateTime({ width: "long" });
        break;
      default:
        c = i.dateTime({ width: "full" });
        break;
    }
    return c.replace("{{date}}", e(u, i)).replace("{{time}}", r(s, i));
  };
  return St.longFormatters = {
    p: r,
    P: n
  }, St;
}
var st = {}, Xh;
function Tg() {
  if (Xh) return st;
  Xh = 1, st.isProtectedDayOfYearToken = a, st.isProtectedWeekYearToken = i, st.warnOrThrowProtectedError = o;
  const e = /^D+$/, r = /^Y+$/, n = ["D", "DD", "YY", "YYYY"];
  function a(s) {
    return e.test(s);
  }
  function i(s) {
    return r.test(s);
  }
  function o(s, c, l) {
    const v = u(s, c, l);
    if (console.warn(v), n.includes(s)) throw new RangeError(v);
  }
  function u(s, c, l) {
    const v = s[0] === "Y" ? "years" : "days of the month";
    return `Use \`${s.toLowerCase()}\` instead of \`${s}\` (in \`${c}\`) for formatting ${v} to the input \`${l}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
  }
  return st;
}
var Kh;
function Sg() {
  return Kh || (Kh = 1, (function(e) {
    e.format = e.formatDate = h, Object.defineProperty(e, "formatters", {
      enumerable: !0,
      get: function() {
        return a.formatters;
      }
    }), Object.defineProperty(e, "longFormatters", {
      enumerable: !0,
      get: function() {
        return i.longFormatters;
      }
    });
    var r = /* @__PURE__ */ at(), n = /* @__PURE__ */ _e(), a = /* @__PURE__ */ c2(), i = /* @__PURE__ */ Eg(), o = /* @__PURE__ */ Tg(), u = /* @__PURE__ */ Ve(), s = /* @__PURE__ */ w();
    const c = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, l = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, v = /^'([^]*?)'?$/, d = /''/g, f = /[a-zA-Z]/;
    function h(_, g, p) {
      const M = (0, n.getDefaultOptions)(), I = p?.locale ?? M.locale ?? r.defaultLocale, F = p?.firstWeekContainsDate ?? p?.locale?.options?.firstWeekContainsDate ?? M.firstWeekContainsDate ?? M.locale?.options?.firstWeekContainsDate ?? 1, W = p?.weekStartsOn ?? p?.locale?.options?.weekStartsOn ?? M.weekStartsOn ?? M.locale?.options?.weekStartsOn ?? 0, y = (0, s.toDate)(_, p?.in);
      if (!(0, u.isValid)(y))
        throw new RangeError("Invalid time value");
      let P = g.match(l).map((x) => {
        const j = x[0];
        if (j === "p" || j === "P") {
          const z = i.longFormatters[j];
          return z(x, I.formatLong);
        }
        return x;
      }).join("").match(c).map((x) => {
        if (x === "''")
          return { isToken: !1, value: "'" };
        const j = x[0];
        if (j === "'")
          return { isToken: !1, value: m(x) };
        if (a.formatters[j])
          return { isToken: !0, value: x };
        if (j.match(f))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" + j + "`"
          );
        return { isToken: !1, value: x };
      });
      I.localize.preprocessor && (P = I.localize.preprocessor(y, P));
      const E = {
        firstWeekContainsDate: F,
        weekStartsOn: W,
        locale: I
      };
      return P.map((x) => {
        if (!x.isToken) return x.value;
        const j = x.value;
        (!p?.useAdditionalWeekYearTokens && (0, o.isProtectedWeekYearToken)(j) || !p?.useAdditionalDayOfYearTokens && (0, o.isProtectedDayOfYearToken)(j)) && (0, o.warnOrThrowProtectedError)(j, g, String(_));
        const z = a.formatters[j[0]];
        return z(y, j, I.localize, E);
      }).join("");
    }
    function m(_) {
      const g = _.match(v);
      return g ? g[1].replace(d, "'") : _;
    }
  })(Bu)), Bu;
}
var ts = {}, Jh;
function qg() {
  if (Jh) return ts;
  Jh = 1, ts.formatDistance = c;
  var e = /* @__PURE__ */ at(), r = /* @__PURE__ */ _e(), n = /* @__PURE__ */ Be(), a = /* @__PURE__ */ K(), i = /* @__PURE__ */ nt(), o = /* @__PURE__ */ V(), u = /* @__PURE__ */ gr(), s = /* @__PURE__ */ br();
  function c(l, v, d) {
    const f = (0, r.getDefaultOptions)(), h = d?.locale ?? f.locale ?? e.defaultLocale, m = 2520, _ = (0, i.compareAsc)(l, v);
    if (isNaN(_)) throw new RangeError("Invalid time value");
    const g = Object.assign({}, d, {
      addSuffix: d?.addSuffix,
      comparison: _
    }), [p, M] = (0, a.normalizeDates)(
      d?.in,
      ..._ > 0 ? [v, l] : [l, v]
    ), I = (0, s.differenceInSeconds)(M, p), F = ((0, n.getTimezoneOffsetInMilliseconds)(M) - (0, n.getTimezoneOffsetInMilliseconds)(p)) / 1e3, W = Math.round((I - F) / 60);
    let y;
    if (W < 2)
      return d?.includeSeconds ? I < 5 ? h.formatDistance("lessThanXSeconds", 5, g) : I < 10 ? h.formatDistance("lessThanXSeconds", 10, g) : I < 20 ? h.formatDistance("lessThanXSeconds", 20, g) : I < 40 ? h.formatDistance("halfAMinute", 0, g) : I < 60 ? h.formatDistance("lessThanXMinutes", 1, g) : h.formatDistance("xMinutes", 1, g) : W === 0 ? h.formatDistance("lessThanXMinutes", 1, g) : h.formatDistance("xMinutes", W, g);
    if (W < 45)
      return h.formatDistance("xMinutes", W, g);
    if (W < 90)
      return h.formatDistance("aboutXHours", 1, g);
    if (W < o.minutesInDay) {
      const P = Math.round(W / 60);
      return h.formatDistance("aboutXHours", P, g);
    } else {
      if (W < m)
        return h.formatDistance("xDays", 1, g);
      if (W < o.minutesInMonth) {
        const P = Math.round(W / o.minutesInDay);
        return h.formatDistance("xDays", P, g);
      } else if (W < o.minutesInMonth * 2)
        return y = Math.round(W / o.minutesInMonth), h.formatDistance("aboutXMonths", y, g);
    }
    if (y = (0, u.differenceInMonths)(M, p), y < 12) {
      const P = Math.round(W / o.minutesInMonth);
      return h.formatDistance("xMonths", P, g);
    } else {
      const P = y % 12, E = Math.trunc(y / 12);
      return P < 3 ? h.formatDistance("aboutXYears", E, g) : P < 9 ? h.formatDistance("overXYears", E, g) : h.formatDistance("almostXYears", E + 1, g);
    }
  }
  return ts;
}
var rs = {}, $h;
function Rg() {
  if ($h) return rs;
  $h = 1, rs.formatDistanceStrict = s;
  var e = /* @__PURE__ */ at(), r = /* @__PURE__ */ _e(), n = /* @__PURE__ */ Ge(), a = /* @__PURE__ */ Be(), i = /* @__PURE__ */ K(), o = /* @__PURE__ */ nt(), u = /* @__PURE__ */ V();
  function s(c, l, v) {
    const d = (0, r.getDefaultOptions)(), f = v?.locale ?? d.locale ?? e.defaultLocale, h = (0, o.compareAsc)(c, l);
    if (isNaN(h))
      throw new RangeError("Invalid time value");
    const m = Object.assign({}, v, {
      addSuffix: v?.addSuffix,
      comparison: h
    }), [_, g] = (0, i.normalizeDates)(
      v?.in,
      ...h > 0 ? [l, c] : [c, l]
    ), p = (0, n.getRoundingMethod)(
      v?.roundingMethod ?? "round"
    ), M = g.getTime() - _.getTime(), I = M / u.millisecondsInMinute, F = (0, a.getTimezoneOffsetInMilliseconds)(g) - (0, a.getTimezoneOffsetInMilliseconds)(_), W = (M - F) / u.millisecondsInMinute, y = v?.unit;
    let P;
    if (y ? P = y : I < 1 ? P = "second" : I < 60 ? P = "minute" : I < u.minutesInDay ? P = "hour" : W < u.minutesInMonth ? P = "day" : W < u.minutesInYear ? P = "month" : P = "year", P === "second") {
      const E = p(M / 1e3);
      return f.formatDistance("xSeconds", E, m);
    } else if (P === "minute") {
      const E = p(I);
      return f.formatDistance("xMinutes", E, m);
    } else if (P === "hour") {
      const E = p(I / 60);
      return f.formatDistance("xHours", E, m);
    } else if (P === "day") {
      const E = p(W / u.minutesInDay);
      return f.formatDistance("xDays", E, m);
    } else if (P === "month") {
      const E = p(
        W / u.minutesInMonth
      );
      return E === 12 && y !== "month" ? f.formatDistance("xYears", 1, m) : f.formatDistance("xMonths", E, m);
    } else {
      const E = p(W / u.minutesInYear);
      return f.formatDistance("xYears", E, m);
    }
  }
  return rs;
}
var ns = {}, kh;
function d2() {
  if (kh) return ns;
  kh = 1, ns.formatDistanceToNow = n;
  var e = /* @__PURE__ */ se(), r = /* @__PURE__ */ qg();
  function n(a, i) {
    return (0, r.formatDistance)(
      a,
      (0, e.constructNow)(a),
      i
    );
  }
  return ns;
}
var as = {}, e0;
function f2() {
  if (e0) return as;
  e0 = 1, as.formatDistanceToNowStrict = n;
  var e = /* @__PURE__ */ se(), r = /* @__PURE__ */ Rg();
  function n(a, i) {
    return (0, r.formatDistanceStrict)(
      a,
      (0, e.constructNow)(a),
      i
    );
  }
  return as;
}
var is = {}, t0;
function l2() {
  if (t0) return is;
  t0 = 1, is.formatDuration = a;
  var e = /* @__PURE__ */ at(), r = /* @__PURE__ */ _e();
  const n = [
    "years",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds"
  ];
  function a(i, o) {
    const u = (0, r.getDefaultOptions)(), s = o?.locale ?? u.locale ?? e.defaultLocale, c = o?.format ?? n, l = o?.zero ?? !1, v = o?.delimiter ?? " ";
    return s.formatDistance ? c.reduce((f, h) => {
      const m = `x${h.replace(/(^.)/, (g) => g.toUpperCase())}`, _ = i[h];
      return _ !== void 0 && (l || i[h]) ? f.concat(s.formatDistance(m, _)) : f;
    }, []).join(v) : "";
  }
  return is;
}
var os = {}, r0;
function h2() {
  if (r0) return os;
  r0 = 1, os.formatISO = n;
  var e = /* @__PURE__ */ it(), r = /* @__PURE__ */ w();
  function n(a, i) {
    const o = (0, r.toDate)(a, i?.in);
    if (isNaN(+o))
      throw new RangeError("Invalid time value");
    const u = i?.format ?? "extended", s = i?.representation ?? "complete";
    let c = "", l = "";
    const v = u === "extended" ? "-" : "", d = u === "extended" ? ":" : "";
    if (s !== "time") {
      const f = (0, e.addLeadingZeros)(o.getDate(), 2), h = (0, e.addLeadingZeros)(o.getMonth() + 1, 2);
      c = `${(0, e.addLeadingZeros)(o.getFullYear(), 4)}${v}${h}${v}${f}`;
    }
    if (s !== "date") {
      const f = o.getTimezoneOffset();
      if (f !== 0) {
        const M = Math.abs(f), I = (0, e.addLeadingZeros)(
          Math.trunc(M / 60),
          2
        ), F = (0, e.addLeadingZeros)(M % 60, 2);
        l = `${f < 0 ? "+" : "-"}${I}:${F}`;
      } else
        l = "Z";
      const h = (0, e.addLeadingZeros)(o.getHours(), 2), m = (0, e.addLeadingZeros)(o.getMinutes(), 2), _ = (0, e.addLeadingZeros)(o.getSeconds(), 2), g = c === "" ? "" : "T", p = [h, m, _].join(d);
      c = `${c}${g}${p}${l}`;
    }
    return c;
  }
  return os;
}
var us = {}, n0;
function v2() {
  if (n0) return us;
  n0 = 1, us.formatISO9075 = a;
  var e = /* @__PURE__ */ it(), r = /* @__PURE__ */ Ve(), n = /* @__PURE__ */ w();
  function a(i, o) {
    const u = (0, n.toDate)(i, o?.in);
    if (!(0, r.isValid)(u))
      throw new RangeError("Invalid time value");
    const s = o?.format ?? "extended", c = o?.representation ?? "complete";
    let l = "";
    const v = s === "extended" ? "-" : "", d = s === "extended" ? ":" : "";
    if (c !== "time") {
      const f = (0, e.addLeadingZeros)(u.getDate(), 2), h = (0, e.addLeadingZeros)(u.getMonth() + 1, 2);
      l = `${(0, e.addLeadingZeros)(u.getFullYear(), 4)}${v}${h}${v}${f}`;
    }
    if (c !== "date") {
      const f = (0, e.addLeadingZeros)(u.getHours(), 2), h = (0, e.addLeadingZeros)(u.getMinutes(), 2), m = (0, e.addLeadingZeros)(u.getSeconds(), 2);
      l = `${l}${l === "" ? "" : " "}${f}${d}${h}${d}${m}`;
    }
    return l;
  }
  return us;
}
var ss = {}, a0;
function m2() {
  if (a0) return ss;
  a0 = 1, ss.formatISODuration = e;
  function e(r) {
    const {
      years: n = 0,
      months: a = 0,
      days: i = 0,
      hours: o = 0,
      minutes: u = 0,
      seconds: s = 0
    } = r;
    return `P${n}Y${a}M${i}DT${o}H${u}M${s}S`;
  }
  return ss;
}
var cs = {}, i0;
function _2() {
  if (i0) return cs;
  i0 = 1, cs.formatRFC3339 = a;
  var e = /* @__PURE__ */ it(), r = /* @__PURE__ */ Ve(), n = /* @__PURE__ */ w();
  function a(i, o) {
    const u = (0, n.toDate)(i, o?.in);
    if (!(0, r.isValid)(u))
      throw new RangeError("Invalid time value");
    const s = o?.fractionDigits ?? 0, c = (0, e.addLeadingZeros)(u.getDate(), 2), l = (0, e.addLeadingZeros)(u.getMonth() + 1, 2), v = u.getFullYear(), d = (0, e.addLeadingZeros)(u.getHours(), 2), f = (0, e.addLeadingZeros)(u.getMinutes(), 2), h = (0, e.addLeadingZeros)(u.getSeconds(), 2);
    let m = "";
    if (s > 0) {
      const p = u.getMilliseconds(), M = Math.trunc(
        p * Math.pow(10, s - 3)
      );
      m = "." + (0, e.addLeadingZeros)(M, s);
    }
    let _ = "";
    const g = u.getTimezoneOffset();
    if (g !== 0) {
      const p = Math.abs(g), M = (0, e.addLeadingZeros)(
        Math.trunc(p / 60),
        2
      ), I = (0, e.addLeadingZeros)(p % 60, 2);
      _ = `${g < 0 ? "+" : "-"}${M}:${I}`;
    } else
      _ = "Z";
    return `${v}-${l}-${c}T${d}:${f}:${h}${m}${_}`;
  }
  return cs;
}
var ds = {}, o0;
function g2() {
  if (o0) return ds;
  o0 = 1, ds.formatRFC7231 = o;
  var e = /* @__PURE__ */ it(), r = /* @__PURE__ */ Ve(), n = /* @__PURE__ */ w();
  const a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], i = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function o(u) {
    const s = (0, n.toDate)(u);
    if (!(0, r.isValid)(s))
      throw new RangeError("Invalid time value");
    const c = a[s.getUTCDay()], l = (0, e.addLeadingZeros)(s.getUTCDate(), 2), v = i[s.getUTCMonth()], d = s.getUTCFullYear(), f = (0, e.addLeadingZeros)(s.getUTCHours(), 2), h = (0, e.addLeadingZeros)(s.getUTCMinutes(), 2), m = (0, e.addLeadingZeros)(s.getUTCSeconds(), 2);
    return `${c}, ${l} ${v} ${d} ${f}:${h}:${m} GMT`;
  }
  return ds;
}
var fs = {}, u0;
function b2() {
  if (u0) return fs;
  u0 = 1, fs.formatRelative = o;
  var e = /* @__PURE__ */ at(), r = /* @__PURE__ */ _e(), n = /* @__PURE__ */ K(), a = /* @__PURE__ */ Qe(), i = /* @__PURE__ */ Sg();
  function o(u, s, c) {
    const [l, v] = (0, n.normalizeDates)(
      c?.in,
      u,
      s
    ), d = (0, r.getDefaultOptions)(), f = c?.locale ?? d.locale ?? e.defaultLocale, h = c?.weekStartsOn ?? c?.locale?.options?.weekStartsOn ?? d.weekStartsOn ?? d.locale?.options?.weekStartsOn ?? 0, m = (0, a.differenceInCalendarDays)(l, v);
    if (isNaN(m))
      throw new RangeError("Invalid time value");
    let _;
    m < -6 ? _ = "other" : m < -1 ? _ = "lastWeek" : m < 0 ? _ = "yesterday" : m < 1 ? _ = "today" : m < 2 ? _ = "tomorrow" : m < 7 ? _ = "nextWeek" : _ = "other";
    const g = f.formatRelative(_, l, v, {
      locale: f,
      weekStartsOn: h
    });
    return (0, i.format)(l, g, { locale: f, weekStartsOn: h });
  }
  return fs;
}
var ls = {}, s0;
function O2() {
  if (s0) return ls;
  s0 = 1, ls.fromUnixTime = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n * 1e3, a?.in);
  }
  return ls;
}
var hs = {}, c0;
function xg() {
  if (c0) return hs;
  c0 = 1, hs.getDate = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n, a?.in).getDate();
  }
  return hs;
}
var vs = {}, d0;
function pr() {
  if (d0) return vs;
  d0 = 1, vs.getDay = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n, a?.in).getDay();
  }
  return vs;
}
var ms = {}, f0;
function jg() {
  if (f0) return ms;
  f0 = 1, ms.getDaysInMonth = n;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ w();
  function n(a, i) {
    const o = (0, r.toDate)(a, i?.in), u = o.getFullYear(), s = o.getMonth(), c = (0, e.constructFrom)(o, 0);
    return c.setFullYear(u, s + 1, 0), c.setHours(0, 0, 0, 0), c.getDate();
  }
  return ms;
}
var _s = {}, gs = {}, l0;
function Ng() {
  if (l0) return gs;
  l0 = 1, gs.isLeapYear = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const o = (0, e.toDate)(n, a?.in).getFullYear();
    return o % 400 === 0 || o % 4 === 0 && o % 100 !== 0;
  }
  return gs;
}
var h0;
function M2() {
  if (h0) return _s;
  h0 = 1, _s.getDaysInYear = n;
  var e = /* @__PURE__ */ Ng(), r = /* @__PURE__ */ w();
  function n(a, i) {
    const o = (0, r.toDate)(a, i?.in);
    return Number.isNaN(+o) ? NaN : (0, e.isLeapYear)(o) ? 366 : 365;
  }
  return _s;
}
var bs = {}, v0;
function p2() {
  if (v0) return bs;
  v0 = 1, bs.getDecade = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const o = (0, e.toDate)(n, a?.in).getFullYear();
    return Math.floor(o / 10) * 10;
  }
  return bs;
}
var Os = {}, m0;
function Yg() {
  if (m0) return Os;
  m0 = 1, Os.getDefaultOptions = r;
  var e = /* @__PURE__ */ _e();
  function r() {
    return Object.assign({}, (0, e.getDefaultOptions)());
  }
  return Os;
}
var Ms = {}, _0;
function w2() {
  if (_0) return Ms;
  _0 = 1, Ms.getHours = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n, a?.in).getHours();
  }
  return Ms;
}
var ps = {}, g0;
function Wg() {
  if (g0) return ps;
  g0 = 1, ps.getISODay = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in).getDay();
    return i === 0 ? 7 : i;
  }
  return ps;
}
var ws = {}, b0;
function D2() {
  if (b0) return ws;
  b0 = 1, ws.getISOWeeksInYear = a;
  var e = /* @__PURE__ */ _r(), r = /* @__PURE__ */ V(), n = /* @__PURE__ */ _t();
  function a(i, o) {
    const u = (0, n.startOfISOWeekYear)(i, o), c = +(0, n.startOfISOWeekYear)(
      (0, e.addWeeks)(u, 60)
    ) - +u;
    return Math.round(c / r.millisecondsInWeek);
  }
  return ws;
}
var Ds = {}, O0;
function P2() {
  if (O0) return Ds;
  O0 = 1, Ds.getMilliseconds = r;
  var e = /* @__PURE__ */ w();
  function r(n) {
    return (0, e.toDate)(n).getMilliseconds();
  }
  return Ds;
}
var Ps = {}, M0;
function I2() {
  if (M0) return Ps;
  M0 = 1, Ps.getMinutes = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n, a?.in).getMinutes();
  }
  return Ps;
}
var Is = {}, p0;
function E2() {
  if (p0) return Is;
  p0 = 1, Is.getMonth = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n, a?.in).getMonth();
  }
  return Is;
}
var Es = {}, w0;
function T2() {
  if (w0) return Es;
  w0 = 1, Es.getOverlappingDaysInIntervals = a;
  var e = /* @__PURE__ */ Be(), r = /* @__PURE__ */ V(), n = /* @__PURE__ */ w();
  function a(i, o) {
    const [u, s] = [
      +(0, n.toDate)(i.start),
      +(0, n.toDate)(i.end)
    ].sort((_, g) => _ - g), [c, l] = [
      +(0, n.toDate)(o.start),
      +(0, n.toDate)(o.end)
    ].sort((_, g) => _ - g);
    if (!(u < l && c < s)) return 0;
    const d = c < u ? u : c, f = d - (0, e.getTimezoneOffsetInMilliseconds)(d), h = l > s ? s : l, m = h - (0, e.getTimezoneOffsetInMilliseconds)(h);
    return Math.ceil((m - f) / r.millisecondsInDay);
  }
  return Es;
}
var Ts = {}, D0;
function S2() {
  if (D0) return Ts;
  D0 = 1, Ts.getSeconds = r;
  var e = /* @__PURE__ */ w();
  function r(n) {
    return (0, e.toDate)(n).getSeconds();
  }
  return Ts;
}
var Ss = {}, P0;
function q2() {
  if (P0) return Ss;
  P0 = 1, Ss.getTime = r;
  var e = /* @__PURE__ */ w();
  function r(n) {
    return +(0, e.toDate)(n);
  }
  return Ss;
}
var qs = {}, I0;
function R2() {
  if (I0) return qs;
  I0 = 1, qs.getUnixTime = r;
  var e = /* @__PURE__ */ w();
  function r(n) {
    return Math.trunc(+(0, e.toDate)(n) / 1e3);
  }
  return qs;
}
var Rs = {}, E0;
function x2() {
  if (E0) return Rs;
  E0 = 1, Rs.getWeekOfMonth = o;
  var e = /* @__PURE__ */ _e(), r = /* @__PURE__ */ xg(), n = /* @__PURE__ */ pr(), a = /* @__PURE__ */ Or(), i = /* @__PURE__ */ w();
  function o(u, s) {
    const c = (0, e.getDefaultOptions)(), l = s?.weekStartsOn ?? s?.locale?.options?.weekStartsOn ?? c.weekStartsOn ?? c.locale?.options?.weekStartsOn ?? 0, v = (0, r.getDate)(
      (0, i.toDate)(u, s?.in)
    );
    if (isNaN(v)) return NaN;
    const d = (0, n.getDay)(
      (0, a.startOfMonth)(u, s)
    );
    let f = l - d;
    f <= 0 && (f += 7);
    const h = v - f;
    return Math.ceil(h / 7) + 1;
  }
  return Rs;
}
var xs = {}, js = {}, T0;
function Cg() {
  if (T0) return js;
  T0 = 1, js.lastDayOfMonth = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in), o = i.getMonth();
    return i.setFullYear(i.getFullYear(), o + 1, 0), i.setHours(0, 0, 0, 0), (0, e.toDate)(i, a?.in);
  }
  return js;
}
var S0;
function j2() {
  if (S0) return xs;
  S0 = 1, xs.getWeeksInMonth = i;
  var e = /* @__PURE__ */ lf(), r = /* @__PURE__ */ Cg(), n = /* @__PURE__ */ Or(), a = /* @__PURE__ */ w();
  function i(o, u) {
    const s = (0, a.toDate)(o, u?.in);
    return (0, e.differenceInCalendarWeeks)(
      (0, r.lastDayOfMonth)(s, u),
      (0, n.startOfMonth)(s, u),
      u
    ) + 1;
  }
  return xs;
}
var Ns = {}, q0;
function N2() {
  if (q0) return Ns;
  q0 = 1, Ns.getYear = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n, a?.in).getFullYear();
  }
  return Ns;
}
var Ys = {}, R0;
function Y2() {
  if (R0) return Ys;
  R0 = 1, Ys.hoursToMilliseconds = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    return Math.trunc(n * e.millisecondsInHour);
  }
  return Ys;
}
var Ws = {}, x0;
function W2() {
  if (x0) return Ws;
  x0 = 1, Ws.hoursToMinutes = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    return Math.trunc(n * e.minutesInHour);
  }
  return Ws;
}
var Cs = {}, j0;
function C2() {
  if (j0) return Cs;
  j0 = 1, Cs.hoursToSeconds = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    return Math.trunc(n * e.secondsInHour);
  }
  return Cs;
}
var Fs = {}, N0;
function F2() {
  if (N0) return Fs;
  N0 = 1, Fs.interval = r;
  var e = /* @__PURE__ */ K();
  function r(n, a, i) {
    const [o, u] = (0, e.normalizeDates)(i?.in, n, a);
    if (isNaN(+o)) throw new TypeError("Start date is invalid");
    if (isNaN(+u)) throw new TypeError("End date is invalid");
    if (i?.assertPositive && +o > +u)
      throw new TypeError("End date must be after start date");
    return { start: o, end: u };
  }
  return Fs;
}
var As = {}, Y0;
function A2() {
  if (Y0) return As;
  Y0 = 1, As.intervalToDuration = c;
  var e = /* @__PURE__ */ Ce(), r = /* @__PURE__ */ rg(), n = /* @__PURE__ */ vf(), a = /* @__PURE__ */ mf(), i = /* @__PURE__ */ gf(), o = /* @__PURE__ */ gr(), u = /* @__PURE__ */ br(), s = /* @__PURE__ */ Mg();
  function c(l, v) {
    const { start: d, end: f } = (0, e.normalizeInterval)(v?.in, l), h = {}, m = (0, s.differenceInYears)(f, d);
    m && (h.years = m);
    const _ = (0, r.add)(d, { years: h.years }), g = (0, o.differenceInMonths)(f, _);
    g && (h.months = g);
    const p = (0, r.add)(_, {
      months: h.months
    }), M = (0, n.differenceInDays)(f, p);
    M && (h.days = M);
    const I = (0, r.add)(p, {
      days: h.days
    }), F = (0, a.differenceInHours)(f, I);
    F && (h.hours = F);
    const W = (0, r.add)(I, {
      hours: h.hours
    }), y = (0, i.differenceInMinutes)(f, W);
    y && (h.minutes = y);
    const P = (0, r.add)(W, {
      minutes: h.minutes
    }), E = (0, u.differenceInSeconds)(f, P);
    return E && (h.seconds = E), h;
  }
  return As;
}
var Hs = {}, W0;
function H2() {
  if (W0) return Hs;
  W0 = 1, Hs.intlFormat = r;
  var e = /* @__PURE__ */ w();
  function r(a, i, o) {
    let u;
    return n(i) ? u = i : o = i, new Intl.DateTimeFormat(o?.locale, u).format(
      (0, e.toDate)(a)
    );
  }
  function n(a) {
    return a !== void 0 && !("locale" in a);
  }
  return Hs;
}
var Ls = {}, C0;
function L2() {
  if (C0) return Ls;
  C0 = 1, Ls.intlFormatDistance = v;
  var e = /* @__PURE__ */ K(), r = /* @__PURE__ */ V(), n = /* @__PURE__ */ Qe(), a = /* @__PURE__ */ ff(), i = /* @__PURE__ */ gg(), o = /* @__PURE__ */ lf(), u = /* @__PURE__ */ hf(), s = /* @__PURE__ */ mf(), c = /* @__PURE__ */ gf(), l = /* @__PURE__ */ br();
  function v(d, f, h) {
    let m = 0, _;
    const [g, p] = (0, e.normalizeDates)(
      h?.in,
      d,
      f
    );
    if (h?.unit)
      _ = h?.unit, _ === "second" ? m = (0, l.differenceInSeconds)(g, p) : _ === "minute" ? m = (0, c.differenceInMinutes)(g, p) : _ === "hour" ? m = (0, s.differenceInHours)(g, p) : _ === "day" ? m = (0, n.differenceInCalendarDays)(g, p) : _ === "week" ? m = (0, o.differenceInCalendarWeeks)(g, p) : _ === "month" ? m = (0, a.differenceInCalendarMonths)(g, p) : _ === "quarter" ? m = (0, i.differenceInCalendarQuarters)(
        g,
        p
      ) : _ === "year" && (m = (0, u.differenceInCalendarYears)(g, p));
    else {
      const I = (0, l.differenceInSeconds)(
        g,
        p
      );
      Math.abs(I) < r.secondsInMinute ? (m = (0, l.differenceInSeconds)(g, p), _ = "second") : Math.abs(I) < r.secondsInHour ? (m = (0, c.differenceInMinutes)(g, p), _ = "minute") : Math.abs(I) < r.secondsInDay && Math.abs(
        (0, n.differenceInCalendarDays)(g, p)
      ) < 1 ? (m = (0, s.differenceInHours)(g, p), _ = "hour") : Math.abs(I) < r.secondsInWeek && (m = (0, n.differenceInCalendarDays)(
        g,
        p
      )) && Math.abs(m) < 7 ? _ = "day" : Math.abs(I) < r.secondsInMonth ? (m = (0, o.differenceInCalendarWeeks)(g, p), _ = "week") : Math.abs(I) < r.secondsInQuarter ? (m = (0, a.differenceInCalendarMonths)(g, p), _ = "month") : Math.abs(I) < r.secondsInYear && (0, i.differenceInCalendarQuarters)(g, p) < 4 ? (m = (0, i.differenceInCalendarQuarters)(
        g,
        p
      ), _ = "quarter") : (m = (0, u.differenceInCalendarYears)(g, p), _ = "year");
    }
    return new Intl.RelativeTimeFormat(h?.locale, {
      numeric: "auto",
      ...h
    }).format(m, _);
  }
  return Ls;
}
var ys = {}, F0;
function y2() {
  if (F0) return ys;
  F0 = 1, ys.isAfter = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return +(0, e.toDate)(n) > +(0, e.toDate)(a);
  }
  return ys;
}
var zs = {}, A0;
function z2() {
  if (A0) return zs;
  A0 = 1, zs.isBefore = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return +(0, e.toDate)(n) < +(0, e.toDate)(a);
  }
  return zs;
}
var Bs = {}, H0;
function B2() {
  if (H0) return Bs;
  H0 = 1, Bs.isEqual = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return +(0, e.toDate)(n) == +(0, e.toDate)(a);
  }
  return Bs;
}
var Qs = {}, L0;
function Q2() {
  if (L0) return Qs;
  L0 = 1, Qs.isExists = e;
  function e(r, n, a) {
    const i = new Date(r, n, a);
    return i.getFullYear() === r && i.getMonth() === n && i.getDate() === a;
  }
  return Qs;
}
var Vs = {}, y0;
function V2() {
  if (y0) return Vs;
  y0 = 1, Vs.isFirstDayOfMonth = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n, a?.in).getDate() === 1;
  }
  return Vs;
}
var Gs = {}, z0;
function G2() {
  if (z0) return Gs;
  z0 = 1, Gs.isFriday = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n, a?.in).getDay() === 5;
  }
  return Gs;
}
var Us = {}, B0;
function U2() {
  if (B0) return Us;
  B0 = 1, Us.isFuture = r;
  var e = /* @__PURE__ */ w();
  function r(n) {
    return +(0, e.toDate)(n) > Date.now();
  }
  return Us;
}
var Zs = {}, Xs = {}, He = {}, Ks = {}, Q0;
function Fg() {
  if (Q0) return Ks;
  Q0 = 1, Ks.transpose = r;
  var e = /* @__PURE__ */ Y();
  function r(a, i) {
    const o = n(i) ? new i(0) : (0, e.constructFrom)(i, 0);
    return o.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), o.setHours(
      a.getHours(),
      a.getMinutes(),
      a.getSeconds(),
      a.getMilliseconds()
    ), o;
  }
  function n(a) {
    return typeof a == "function" && a.prototype?.constructor === a;
  }
  return Ks;
}
var V0;
function Ag() {
  if (V0) return He;
  V0 = 1, He.ValueSetter = He.Setter = He.DateTimezoneSetter = void 0;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ Fg();
  const n = 10;
  let a = class {
    subPriority = 0;
    validate(s, c) {
      return !0;
    }
  };
  He.Setter = a;
  class i extends a {
    constructor(s, c, l, v, d) {
      super(), this.value = s, this.validateValue = c, this.setValue = l, this.priority = v, d && (this.subPriority = d);
    }
    validate(s, c) {
      return this.validateValue(s, this.value, c);
    }
    set(s, c, l) {
      return this.setValue(s, c, this.value, l);
    }
  }
  He.ValueSetter = i;
  class o extends a {
    priority = n;
    subPriority = -1;
    constructor(s, c) {
      super(), this.context = s || ((l) => (0, e.constructFrom)(c, l));
    }
    set(s, c) {
      return c.timestampIsSet ? s : (0, e.constructFrom)(
        s,
        (0, r.transpose)(s, this.context)
      );
    }
  }
  return He.DateTimezoneSetter = o, He;
}
var qt = {}, Rt = {}, xt = {}, G0;
function U() {
  if (G0) return xt;
  G0 = 1, xt.Parser = void 0;
  var e = /* @__PURE__ */ Ag();
  let r = class {
    run(a, i, o, u) {
      const s = this.parse(a, i, o, u);
      return s ? {
        setter: new e.ValueSetter(
          s.value,
          this.validate,
          this.set,
          this.priority,
          this.subPriority
        ),
        rest: s.rest
      } : null;
    }
    validate(a, i, o) {
      return !0;
    }
  };
  return xt.Parser = r, xt;
}
var U0;
function Z2() {
  if (U0) return Rt;
  U0 = 1, Rt.EraParser = void 0;
  var e = /* @__PURE__ */ U();
  let r = class extends e.Parser {
    priority = 140;
    parse(a, i, o) {
      switch (i) {
        // AD, BC
        case "G":
        case "GG":
        case "GGG":
          return o.era(a, { width: "abbreviated" }) || o.era(a, { width: "narrow" });
        // A, B
        case "GGGGG":
          return o.era(a, { width: "narrow" });
        default:
          return o.era(a, { width: "wide" }) || o.era(a, { width: "abbreviated" }) || o.era(a, { width: "narrow" });
      }
    }
    set(a, i, o) {
      return i.era = o, a.setFullYear(o, 0, 1), a.setHours(0, 0, 0, 0), a;
    }
    incompatibleTokens = ["R", "u", "t", "T"];
  };
  return Rt.EraParser = r, Rt;
}
var jt = {}, we = {}, ke = {}, Z0;
function ge() {
  return Z0 || (Z0 = 1, ke.timezonePatterns = ke.numericPatterns = void 0, ke.numericPatterns = {
    month: /^(1[0-2]|0?\d)/,
    // 0 to 12
    date: /^(3[0-1]|[0-2]?\d)/,
    // 0 to 31
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    // 0 to 366
    week: /^(5[0-3]|[0-4]?\d)/,
    // 0 to 53
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    // 0 to 23
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    // 0 to 24
    hour11h: /^(1[0-1]|0?\d)/,
    // 0 to 11
    hour12h: /^(1[0-2]|0?\d)/,
    // 0 to 12
    minute: /^[0-5]?\d/,
    // 0 to 59
    second: /^[0-5]?\d/,
    // 0 to 59
    singleDigit: /^\d/,
    // 0 to 9
    twoDigits: /^\d{1,2}/,
    // 0 to 99
    threeDigits: /^\d{1,3}/,
    // 0 to 999
    fourDigits: /^\d{1,4}/,
    // 0 to 9999
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    // 0 to 9, -0 to -9
    twoDigitsSigned: /^-?\d{1,2}/,
    // 0 to 99, -0 to -99
    threeDigitsSigned: /^-?\d{1,3}/,
    // 0 to 999, -0 to -999
    fourDigitsSigned: /^-?\d{1,4}/
    // 0 to 9999, -0 to -9999
  }, ke.timezonePatterns = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
  }), ke;
}
var X0;
function X() {
  if (X0) return we;
  X0 = 1, we.dayPeriodEnumToHours = c, we.isLeapYearIndex = v, we.mapValue = n, we.normalizeTwoDigitYear = l, we.parseAnyDigitsSigned = o, we.parseNDigits = u, we.parseNDigitsSigned = s, we.parseNumericPattern = a, we.parseTimezonePattern = i;
  var e = /* @__PURE__ */ V(), r = /* @__PURE__ */ ge();
  function n(d, f) {
    return d && {
      value: f(d.value),
      rest: d.rest
    };
  }
  function a(d, f) {
    const h = f.match(d);
    return h ? {
      value: parseInt(h[0], 10),
      rest: f.slice(h[0].length)
    } : null;
  }
  function i(d, f) {
    const h = f.match(d);
    if (!h)
      return null;
    if (h[0] === "Z")
      return {
        value: 0,
        rest: f.slice(1)
      };
    const m = h[1] === "+" ? 1 : -1, _ = h[2] ? parseInt(h[2], 10) : 0, g = h[3] ? parseInt(h[3], 10) : 0, p = h[5] ? parseInt(h[5], 10) : 0;
    return {
      value: m * (_ * e.millisecondsInHour + g * e.millisecondsInMinute + p * e.millisecondsInSecond),
      rest: f.slice(h[0].length)
    };
  }
  function o(d) {
    return a(
      r.numericPatterns.anyDigitsSigned,
      d
    );
  }
  function u(d, f) {
    switch (d) {
      case 1:
        return a(
          r.numericPatterns.singleDigit,
          f
        );
      case 2:
        return a(
          r.numericPatterns.twoDigits,
          f
        );
      case 3:
        return a(
          r.numericPatterns.threeDigits,
          f
        );
      case 4:
        return a(
          r.numericPatterns.fourDigits,
          f
        );
      default:
        return a(new RegExp("^\\d{1," + d + "}"), f);
    }
  }
  function s(d, f) {
    switch (d) {
      case 1:
        return a(
          r.numericPatterns.singleDigitSigned,
          f
        );
      case 2:
        return a(
          r.numericPatterns.twoDigitsSigned,
          f
        );
      case 3:
        return a(
          r.numericPatterns.threeDigitsSigned,
          f
        );
      case 4:
        return a(
          r.numericPatterns.fourDigitsSigned,
          f
        );
      default:
        return a(new RegExp("^-?\\d{1," + d + "}"), f);
    }
  }
  function c(d) {
    switch (d) {
      case "morning":
        return 4;
      case "evening":
        return 17;
      case "pm":
      case "noon":
      case "afternoon":
        return 12;
      default:
        return 0;
    }
  }
  function l(d, f) {
    const h = f > 0, m = h ? f : 1 - f;
    let _;
    if (m <= 50)
      _ = d || 100;
    else {
      const g = m + 50, p = Math.trunc(g / 100) * 100, M = d >= g % 100;
      _ = d + p - (M ? 100 : 0);
    }
    return h ? _ : 1 - _;
  }
  function v(d) {
    return d % 400 === 0 || d % 4 === 0 && d % 100 !== 0;
  }
  return we;
}
var K0;
function X2() {
  if (K0) return jt;
  K0 = 1, jt.YearParser = void 0;
  var e = /* @__PURE__ */ U(), r = /* @__PURE__ */ X();
  let n = class extends e.Parser {
    priority = 130;
    incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
    parse(i, o, u) {
      const s = (c) => ({
        year: c,
        isTwoDigitYear: o === "yy"
      });
      switch (o) {
        case "y":
          return (0, r.mapValue)(
            (0, r.parseNDigits)(4, i),
            s
          );
        case "yo":
          return (0, r.mapValue)(
            u.ordinalNumber(i, {
              unit: "year"
            }),
            s
          );
        default:
          return (0, r.mapValue)(
            (0, r.parseNDigits)(o.length, i),
            s
          );
      }
    }
    validate(i, o) {
      return o.isTwoDigitYear || o.year > 0;
    }
    set(i, o, u) {
      const s = i.getFullYear();
      if (u.isTwoDigitYear) {
        const l = (0, r.normalizeTwoDigitYear)(
          u.year,
          s
        );
        return i.setFullYear(l, 0, 1), i.setHours(0, 0, 0, 0), i;
      }
      const c = !("era" in o) || o.era === 1 ? u.year : 1 - u.year;
      return i.setFullYear(c, 0, 1), i.setHours(0, 0, 0, 0), i;
    }
  };
  return jt.YearParser = n, jt;
}
var Nt = {}, J0;
function K2() {
  if (J0) return Nt;
  J0 = 1, Nt.LocalWeekYearParser = void 0;
  var e = /* @__PURE__ */ Mr(), r = /* @__PURE__ */ Re(), n = /* @__PURE__ */ U(), a = /* @__PURE__ */ X();
  let i = class extends n.Parser {
    priority = 130;
    parse(u, s, c) {
      const l = (v) => ({
        year: v,
        isTwoDigitYear: s === "YY"
      });
      switch (s) {
        case "Y":
          return (0, a.mapValue)(
            (0, a.parseNDigits)(4, u),
            l
          );
        case "Yo":
          return (0, a.mapValue)(
            c.ordinalNumber(u, {
              unit: "year"
            }),
            l
          );
        default:
          return (0, a.mapValue)(
            (0, a.parseNDigits)(s.length, u),
            l
          );
      }
    }
    validate(u, s) {
      return s.isTwoDigitYear || s.year > 0;
    }
    set(u, s, c, l) {
      const v = (0, e.getWeekYear)(u, l);
      if (c.isTwoDigitYear) {
        const f = (0, a.normalizeTwoDigitYear)(
          c.year,
          v
        );
        return u.setFullYear(
          f,
          0,
          l.firstWeekContainsDate
        ), u.setHours(0, 0, 0, 0), (0, r.startOfWeek)(u, l);
      }
      const d = !("era" in s) || s.era === 1 ? c.year : 1 - c.year;
      return u.setFullYear(d, 0, l.firstWeekContainsDate), u.setHours(0, 0, 0, 0), (0, r.startOfWeek)(u, l);
    }
    incompatibleTokens = [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ];
  };
  return Nt.LocalWeekYearParser = i, Nt;
}
var Yt = {}, $0;
function J2() {
  if ($0) return Yt;
  $0 = 1, Yt.ISOWeekYearParser = void 0;
  var e = /* @__PURE__ */ We(), r = /* @__PURE__ */ Y(), n = /* @__PURE__ */ U(), a = /* @__PURE__ */ X();
  let i = class extends n.Parser {
    priority = 130;
    parse(u, s) {
      return s === "R" ? (0, a.parseNDigitsSigned)(4, u) : (0, a.parseNDigitsSigned)(s.length, u);
    }
    set(u, s, c) {
      const l = (0, r.constructFrom)(u, 0);
      return l.setFullYear(c, 0, 4), l.setHours(0, 0, 0, 0), (0, e.startOfISOWeek)(l);
    }
    incompatibleTokens = [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ];
  };
  return Yt.ISOWeekYearParser = i, Yt;
}
var Wt = {}, k0;
function $2() {
  if (k0) return Wt;
  k0 = 1, Wt.ExtendedYearParser = void 0;
  var e = /* @__PURE__ */ U(), r = /* @__PURE__ */ X();
  let n = class extends e.Parser {
    priority = 130;
    parse(i, o) {
      return o === "u" ? (0, r.parseNDigitsSigned)(4, i) : (0, r.parseNDigitsSigned)(o.length, i);
    }
    set(i, o, u) {
      return i.setFullYear(u, 0, 1), i.setHours(0, 0, 0, 0), i;
    }
    incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
  };
  return Wt.ExtendedYearParser = n, Wt;
}
var Ct = {}, ev;
function k2() {
  if (ev) return Ct;
  ev = 1, Ct.QuarterParser = void 0;
  var e = /* @__PURE__ */ U(), r = /* @__PURE__ */ X();
  let n = class extends e.Parser {
    priority = 120;
    parse(i, o, u) {
      switch (o) {
        // 1, 2, 3, 4
        case "Q":
        case "QQ":
          return (0, r.parseNDigits)(o.length, i);
        // 1st, 2nd, 3rd, 4th
        case "Qo":
          return u.ordinalNumber(i, { unit: "quarter" });
        // Q1, Q2, Q3, Q4
        case "QQQ":
          return u.quarter(i, {
            width: "abbreviated",
            context: "formatting"
          }) || u.quarter(i, {
            width: "narrow",
            context: "formatting"
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case "QQQQQ":
          return u.quarter(i, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return u.quarter(i, {
            width: "wide",
            context: "formatting"
          }) || u.quarter(i, {
            width: "abbreviated",
            context: "formatting"
          }) || u.quarter(i, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
    validate(i, o) {
      return o >= 1 && o <= 4;
    }
    set(i, o, u) {
      return i.setMonth((u - 1) * 3, 1), i.setHours(0, 0, 0, 0), i;
    }
    incompatibleTokens = [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ];
  };
  return Ct.QuarterParser = n, Ct;
}
var Ft = {}, tv;
function eM() {
  if (tv) return Ft;
  tv = 1, Ft.StandAloneQuarterParser = void 0;
  var e = /* @__PURE__ */ U(), r = /* @__PURE__ */ X();
  let n = class extends e.Parser {
    priority = 120;
    parse(i, o, u) {
      switch (o) {
        // 1, 2, 3, 4
        case "q":
        case "qq":
          return (0, r.parseNDigits)(o.length, i);
        // 1st, 2nd, 3rd, 4th
        case "qo":
          return u.ordinalNumber(i, { unit: "quarter" });
        // Q1, Q2, Q3, Q4
        case "qqq":
          return u.quarter(i, {
            width: "abbreviated",
            context: "standalone"
          }) || u.quarter(i, {
            width: "narrow",
            context: "standalone"
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case "qqqqq":
          return u.quarter(i, {
            width: "narrow",
            context: "standalone"
          });
        default:
          return u.quarter(i, {
            width: "wide",
            context: "standalone"
          }) || u.quarter(i, {
            width: "abbreviated",
            context: "standalone"
          }) || u.quarter(i, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
    validate(i, o) {
      return o >= 1 && o <= 4;
    }
    set(i, o, u) {
      return i.setMonth((u - 1) * 3, 1), i.setHours(0, 0, 0, 0), i;
    }
    incompatibleTokens = [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ];
  };
  return Ft.StandAloneQuarterParser = n, Ft;
}
var At = {}, rv;
function tM() {
  if (rv) return At;
  rv = 1, At.MonthParser = void 0;
  var e = /* @__PURE__ */ ge(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  let a = class extends r.Parser {
    incompatibleTokens = [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ];
    priority = 110;
    parse(o, u, s) {
      const c = (l) => l - 1;
      switch (u) {
        // 1, 2, ..., 12
        case "M":
          return (0, n.mapValue)(
            (0, n.parseNumericPattern)(
              e.numericPatterns.month,
              o
            ),
            c
          );
        // 01, 02, ..., 12
        case "MM":
          return (0, n.mapValue)(
            (0, n.parseNDigits)(2, o),
            c
          );
        // 1st, 2nd, ..., 12th
        case "Mo":
          return (0, n.mapValue)(
            s.ordinalNumber(o, {
              unit: "month"
            }),
            c
          );
        // Jan, Feb, ..., Dec
        case "MMM":
          return s.month(o, {
            width: "abbreviated",
            context: "formatting"
          }) || s.month(o, { width: "narrow", context: "formatting" });
        // J, F, ..., D
        case "MMMMM":
          return s.month(o, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return s.month(o, { width: "wide", context: "formatting" }) || s.month(o, {
            width: "abbreviated",
            context: "formatting"
          }) || s.month(o, { width: "narrow", context: "formatting" });
      }
    }
    validate(o, u) {
      return u >= 0 && u <= 11;
    }
    set(o, u, s) {
      return o.setMonth(s, 1), o.setHours(0, 0, 0, 0), o;
    }
  };
  return At.MonthParser = a, At;
}
var Ht = {}, nv;
function rM() {
  if (nv) return Ht;
  nv = 1, Ht.StandAloneMonthParser = void 0;
  var e = /* @__PURE__ */ ge(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  let a = class extends r.Parser {
    priority = 110;
    parse(o, u, s) {
      const c = (l) => l - 1;
      switch (u) {
        // 1, 2, ..., 12
        case "L":
          return (0, n.mapValue)(
            (0, n.parseNumericPattern)(
              e.numericPatterns.month,
              o
            ),
            c
          );
        // 01, 02, ..., 12
        case "LL":
          return (0, n.mapValue)(
            (0, n.parseNDigits)(2, o),
            c
          );
        // 1st, 2nd, ..., 12th
        case "Lo":
          return (0, n.mapValue)(
            s.ordinalNumber(o, {
              unit: "month"
            }),
            c
          );
        // Jan, Feb, ..., Dec
        case "LLL":
          return s.month(o, {
            width: "abbreviated",
            context: "standalone"
          }) || s.month(o, { width: "narrow", context: "standalone" });
        // J, F, ..., D
        case "LLLLL":
          return s.month(o, {
            width: "narrow",
            context: "standalone"
          });
        default:
          return s.month(o, { width: "wide", context: "standalone" }) || s.month(o, {
            width: "abbreviated",
            context: "standalone"
          }) || s.month(o, { width: "narrow", context: "standalone" });
      }
    }
    validate(o, u) {
      return u >= 0 && u <= 11;
    }
    set(o, u, s) {
      return o.setMonth(s, 1), o.setHours(0, 0, 0, 0), o;
    }
    incompatibleTokens = [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ];
  };
  return Ht.StandAloneMonthParser = a, Ht;
}
var Lt = {}, Js = {}, av;
function Hg() {
  if (av) return Js;
  av = 1, Js.setWeek = n;
  var e = /* @__PURE__ */ If(), r = /* @__PURE__ */ w();
  function n(a, i, o) {
    const u = (0, r.toDate)(a, o?.in), s = (0, e.getWeek)(u, o) - i;
    return u.setDate(u.getDate() - s * 7), (0, r.toDate)(u, o?.in);
  }
  return Js;
}
var iv;
function nM() {
  if (iv) return Lt;
  iv = 1, Lt.LocalWeekParser = void 0;
  var e = /* @__PURE__ */ Hg(), r = /* @__PURE__ */ Re(), n = /* @__PURE__ */ ge(), a = /* @__PURE__ */ U(), i = /* @__PURE__ */ X();
  let o = class extends a.Parser {
    priority = 100;
    parse(s, c, l) {
      switch (c) {
        case "w":
          return (0, i.parseNumericPattern)(
            n.numericPatterns.week,
            s
          );
        case "wo":
          return l.ordinalNumber(s, { unit: "week" });
        default:
          return (0, i.parseNDigits)(c.length, s);
      }
    }
    validate(s, c) {
      return c >= 1 && c <= 53;
    }
    set(s, c, l, v) {
      return (0, r.startOfWeek)(
        (0, e.setWeek)(s, l, v),
        v
      );
    }
    incompatibleTokens = [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ];
  };
  return Lt.LocalWeekParser = o, Lt;
}
var yt = {}, $s = {}, ov;
function Lg() {
  if (ov) return $s;
  ov = 1, $s.setISOWeek = n;
  var e = /* @__PURE__ */ Df(), r = /* @__PURE__ */ w();
  function n(a, i, o) {
    const u = (0, r.toDate)(a, o?.in), s = (0, e.getISOWeek)(u, o) - i;
    return u.setDate(u.getDate() - s * 7), u;
  }
  return $s;
}
var uv;
function aM() {
  if (uv) return yt;
  uv = 1, yt.ISOWeekParser = void 0;
  var e = /* @__PURE__ */ Lg(), r = /* @__PURE__ */ We(), n = /* @__PURE__ */ ge(), a = /* @__PURE__ */ U(), i = /* @__PURE__ */ X();
  let o = class extends a.Parser {
    priority = 100;
    parse(s, c, l) {
      switch (c) {
        case "I":
          return (0, i.parseNumericPattern)(
            n.numericPatterns.week,
            s
          );
        case "Io":
          return l.ordinalNumber(s, { unit: "week" });
        default:
          return (0, i.parseNDigits)(c.length, s);
      }
    }
    validate(s, c) {
      return c >= 1 && c <= 53;
    }
    set(s, c, l) {
      return (0, r.startOfISOWeek)((0, e.setISOWeek)(s, l));
    }
    incompatibleTokens = [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ];
  };
  return yt.ISOWeekParser = o, yt;
}
var zt = {}, sv;
function iM() {
  if (sv) return zt;
  sv = 1, zt.DateParser = void 0;
  var e = /* @__PURE__ */ ge(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  const a = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], i = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];
  let o = class extends r.Parser {
    priority = 90;
    subPriority = 1;
    parse(s, c, l) {
      switch (c) {
        case "d":
          return (0, n.parseNumericPattern)(
            e.numericPatterns.date,
            s
          );
        case "do":
          return l.ordinalNumber(s, { unit: "date" });
        default:
          return (0, n.parseNDigits)(c.length, s);
      }
    }
    validate(s, c) {
      const l = s.getFullYear(), v = (0, n.isLeapYearIndex)(l), d = s.getMonth();
      return v ? c >= 1 && c <= i[d] : c >= 1 && c <= a[d];
    }
    set(s, c, l) {
      return s.setDate(l), s.setHours(0, 0, 0, 0), s;
    }
    incompatibleTokens = [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ];
  };
  return zt.DateParser = o, zt;
}
var Bt = {}, cv;
function oM() {
  if (cv) return Bt;
  cv = 1, Bt.DayOfYearParser = void 0;
  var e = /* @__PURE__ */ ge(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  let a = class extends r.Parser {
    priority = 90;
    subpriority = 1;
    parse(o, u, s) {
      switch (u) {
        case "D":
        case "DD":
          return (0, n.parseNumericPattern)(
            e.numericPatterns.dayOfYear,
            o
          );
        case "Do":
          return s.ordinalNumber(o, { unit: "date" });
        default:
          return (0, n.parseNDigits)(u.length, o);
      }
    }
    validate(o, u) {
      const s = o.getFullYear();
      return (0, n.isLeapYearIndex)(s) ? u >= 1 && u <= 366 : u >= 1 && u <= 365;
    }
    set(o, u, s) {
      return o.setMonth(0, s), o.setHours(0, 0, 0, 0), o;
    }
    incompatibleTokens = [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ];
  };
  return Bt.DayOfYearParser = a, Bt;
}
var Qt = {}, ks = {}, dv;
function wr() {
  if (dv) return ks;
  dv = 1, ks.setDay = a;
  var e = /* @__PURE__ */ _e(), r = /* @__PURE__ */ Ye(), n = /* @__PURE__ */ w();
  function a(i, o, u) {
    const s = (0, e.getDefaultOptions)(), c = u?.weekStartsOn ?? u?.locale?.options?.weekStartsOn ?? s.weekStartsOn ?? s.locale?.options?.weekStartsOn ?? 0, l = (0, n.toDate)(i, u?.in), v = l.getDay(), f = (o % 7 + 7) % 7, h = 7 - c, m = o < 0 || o > 6 ? o - (v + h) % 7 : (f + h) % 7 - (v + h) % 7;
    return (0, r.addDays)(l, m, u);
  }
  return ks;
}
var fv;
function uM() {
  if (fv) return Qt;
  fv = 1, Qt.DayParser = void 0;
  var e = /* @__PURE__ */ wr(), r = /* @__PURE__ */ U();
  let n = class extends r.Parser {
    priority = 90;
    parse(i, o, u) {
      switch (o) {
        // Tue
        case "E":
        case "EE":
        case "EEE":
          return u.day(i, {
            width: "abbreviated",
            context: "formatting"
          }) || u.day(i, { width: "short", context: "formatting" }) || u.day(i, { width: "narrow", context: "formatting" });
        // T
        case "EEEEE":
          return u.day(i, {
            width: "narrow",
            context: "formatting"
          });
        // Tu
        case "EEEEEE":
          return u.day(i, { width: "short", context: "formatting" }) || u.day(i, { width: "narrow", context: "formatting" });
        default:
          return u.day(i, { width: "wide", context: "formatting" }) || u.day(i, {
            width: "abbreviated",
            context: "formatting"
          }) || u.day(i, { width: "short", context: "formatting" }) || u.day(i, { width: "narrow", context: "formatting" });
      }
    }
    validate(i, o) {
      return o >= 0 && o <= 6;
    }
    set(i, o, u, s) {
      return i = (0, e.setDay)(i, u, s), i.setHours(0, 0, 0, 0), i;
    }
    incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
  };
  return Qt.DayParser = n, Qt;
}
var Vt = {}, lv;
function sM() {
  if (lv) return Vt;
  lv = 1, Vt.LocalDayParser = void 0;
  var e = /* @__PURE__ */ wr(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  let a = class extends r.Parser {
    priority = 90;
    parse(o, u, s, c) {
      const l = (v) => {
        const d = Math.floor((v - 1) / 7) * 7;
        return (v + c.weekStartsOn + 6) % 7 + d;
      };
      switch (u) {
        // 3
        case "e":
        case "ee":
          return (0, n.mapValue)(
            (0, n.parseNDigits)(u.length, o),
            l
          );
        // 3rd
        case "eo":
          return (0, n.mapValue)(
            s.ordinalNumber(o, {
              unit: "day"
            }),
            l
          );
        // Tue
        case "eee":
          return s.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || s.day(o, { width: "short", context: "formatting" }) || s.day(o, { width: "narrow", context: "formatting" });
        // T
        case "eeeee":
          return s.day(o, {
            width: "narrow",
            context: "formatting"
          });
        // Tu
        case "eeeeee":
          return s.day(o, { width: "short", context: "formatting" }) || s.day(o, { width: "narrow", context: "formatting" });
        default:
          return s.day(o, { width: "wide", context: "formatting" }) || s.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || s.day(o, { width: "short", context: "formatting" }) || s.day(o, { width: "narrow", context: "formatting" });
      }
    }
    validate(o, u) {
      return u >= 0 && u <= 6;
    }
    set(o, u, s, c) {
      return o = (0, e.setDay)(o, s, c), o.setHours(0, 0, 0, 0), o;
    }
    incompatibleTokens = [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ];
  };
  return Vt.LocalDayParser = a, Vt;
}
var Gt = {}, hv;
function cM() {
  if (hv) return Gt;
  hv = 1, Gt.StandAloneLocalDayParser = void 0;
  var e = /* @__PURE__ */ wr(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  let a = class extends r.Parser {
    priority = 90;
    parse(o, u, s, c) {
      const l = (v) => {
        const d = Math.floor((v - 1) / 7) * 7;
        return (v + c.weekStartsOn + 6) % 7 + d;
      };
      switch (u) {
        // 3
        case "c":
        case "cc":
          return (0, n.mapValue)(
            (0, n.parseNDigits)(u.length, o),
            l
          );
        // 3rd
        case "co":
          return (0, n.mapValue)(
            s.ordinalNumber(o, {
              unit: "day"
            }),
            l
          );
        // Tue
        case "ccc":
          return s.day(o, {
            width: "abbreviated",
            context: "standalone"
          }) || s.day(o, { width: "short", context: "standalone" }) || s.day(o, { width: "narrow", context: "standalone" });
        // T
        case "ccccc":
          return s.day(o, {
            width: "narrow",
            context: "standalone"
          });
        // Tu
        case "cccccc":
          return s.day(o, { width: "short", context: "standalone" }) || s.day(o, { width: "narrow", context: "standalone" });
        default:
          return s.day(o, { width: "wide", context: "standalone" }) || s.day(o, {
            width: "abbreviated",
            context: "standalone"
          }) || s.day(o, { width: "short", context: "standalone" }) || s.day(o, { width: "narrow", context: "standalone" });
      }
    }
    validate(o, u) {
      return u >= 0 && u <= 6;
    }
    set(o, u, s, c) {
      return o = (0, e.setDay)(o, s, c), o.setHours(0, 0, 0, 0), o;
    }
    incompatibleTokens = [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ];
  };
  return Gt.StandAloneLocalDayParser = a, Gt;
}
var Ut = {}, ec = {}, vv;
function yg() {
  if (vv) return ec;
  vv = 1, ec.setISODay = a;
  var e = /* @__PURE__ */ Ye(), r = /* @__PURE__ */ Wg(), n = /* @__PURE__ */ w();
  function a(i, o, u) {
    const s = (0, n.toDate)(i, u?.in), c = (0, r.getISODay)(s, u), l = o - c;
    return (0, e.addDays)(s, l, u);
  }
  return ec;
}
var mv;
function dM() {
  if (mv) return Ut;
  mv = 1, Ut.ISODayParser = void 0;
  var e = /* @__PURE__ */ yg(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  let a = class extends r.Parser {
    priority = 90;
    parse(o, u, s) {
      const c = (l) => l === 0 ? 7 : l;
      switch (u) {
        // 2
        case "i":
        case "ii":
          return (0, n.parseNDigits)(u.length, o);
        // 2nd
        case "io":
          return s.ordinalNumber(o, { unit: "day" });
        // Tue
        case "iii":
          return (0, n.mapValue)(
            s.day(o, {
              width: "abbreviated",
              context: "formatting"
            }) || s.day(o, {
              width: "short",
              context: "formatting"
            }) || s.day(o, {
              width: "narrow",
              context: "formatting"
            }),
            c
          );
        // T
        case "iiiii":
          return (0, n.mapValue)(
            s.day(o, {
              width: "narrow",
              context: "formatting"
            }),
            c
          );
        // Tu
        case "iiiiii":
          return (0, n.mapValue)(
            s.day(o, {
              width: "short",
              context: "formatting"
            }) || s.day(o, {
              width: "narrow",
              context: "formatting"
            }),
            c
          );
        default:
          return (0, n.mapValue)(
            s.day(o, {
              width: "wide",
              context: "formatting"
            }) || s.day(o, {
              width: "abbreviated",
              context: "formatting"
            }) || s.day(o, {
              width: "short",
              context: "formatting"
            }) || s.day(o, {
              width: "narrow",
              context: "formatting"
            }),
            c
          );
      }
    }
    validate(o, u) {
      return u >= 1 && u <= 7;
    }
    set(o, u, s) {
      return o = (0, e.setISODay)(o, s), o.setHours(0, 0, 0, 0), o;
    }
    incompatibleTokens = [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ];
  };
  return Ut.ISODayParser = a, Ut;
}
var Zt = {}, _v;
function fM() {
  if (_v) return Zt;
  _v = 1, Zt.AMPMParser = void 0;
  var e = /* @__PURE__ */ U(), r = /* @__PURE__ */ X();
  let n = class extends e.Parser {
    priority = 80;
    parse(i, o, u) {
      switch (o) {
        case "a":
        case "aa":
        case "aaa":
          return u.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting"
          }) || u.dayPeriod(i, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return u.dayPeriod(i, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return u.dayPeriod(i, {
            width: "wide",
            context: "formatting"
          }) || u.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting"
          }) || u.dayPeriod(i, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
    set(i, o, u) {
      return i.setHours((0, r.dayPeriodEnumToHours)(u), 0, 0, 0), i;
    }
    incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
  };
  return Zt.AMPMParser = n, Zt;
}
var Xt = {}, gv;
function lM() {
  if (gv) return Xt;
  gv = 1, Xt.AMPMMidnightParser = void 0;
  var e = /* @__PURE__ */ U(), r = /* @__PURE__ */ X();
  let n = class extends e.Parser {
    priority = 80;
    parse(i, o, u) {
      switch (o) {
        case "b":
        case "bb":
        case "bbb":
          return u.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting"
          }) || u.dayPeriod(i, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return u.dayPeriod(i, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return u.dayPeriod(i, {
            width: "wide",
            context: "formatting"
          }) || u.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting"
          }) || u.dayPeriod(i, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
    set(i, o, u) {
      return i.setHours((0, r.dayPeriodEnumToHours)(u), 0, 0, 0), i;
    }
    incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
  };
  return Xt.AMPMMidnightParser = n, Xt;
}
var Kt = {}, bv;
function hM() {
  if (bv) return Kt;
  bv = 1, Kt.DayPeriodParser = void 0;
  var e = /* @__PURE__ */ U(), r = /* @__PURE__ */ X();
  let n = class extends e.Parser {
    priority = 80;
    parse(i, o, u) {
      switch (o) {
        case "B":
        case "BB":
        case "BBB":
          return u.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting"
          }) || u.dayPeriod(i, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return u.dayPeriod(i, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return u.dayPeriod(i, {
            width: "wide",
            context: "formatting"
          }) || u.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting"
          }) || u.dayPeriod(i, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
    set(i, o, u) {
      return i.setHours((0, r.dayPeriodEnumToHours)(u), 0, 0, 0), i;
    }
    incompatibleTokens = ["a", "b", "t", "T"];
  };
  return Kt.DayPeriodParser = n, Kt;
}
var Jt = {}, Ov;
function vM() {
  if (Ov) return Jt;
  Ov = 1, Jt.Hour1to12Parser = void 0;
  var e = /* @__PURE__ */ ge(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  let a = class extends r.Parser {
    priority = 70;
    parse(o, u, s) {
      switch (u) {
        case "h":
          return (0, n.parseNumericPattern)(
            e.numericPatterns.hour12h,
            o
          );
        case "ho":
          return s.ordinalNumber(o, { unit: "hour" });
        default:
          return (0, n.parseNDigits)(u.length, o);
      }
    }
    validate(o, u) {
      return u >= 1 && u <= 12;
    }
    set(o, u, s) {
      const c = o.getHours() >= 12;
      return c && s < 12 ? o.setHours(s + 12, 0, 0, 0) : !c && s === 12 ? o.setHours(0, 0, 0, 0) : o.setHours(s, 0, 0, 0), o;
    }
    incompatibleTokens = ["H", "K", "k", "t", "T"];
  };
  return Jt.Hour1to12Parser = a, Jt;
}
var $t = {}, Mv;
function mM() {
  if (Mv) return $t;
  Mv = 1, $t.Hour0to23Parser = void 0;
  var e = /* @__PURE__ */ ge(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  let a = class extends r.Parser {
    priority = 70;
    parse(o, u, s) {
      switch (u) {
        case "H":
          return (0, n.parseNumericPattern)(
            e.numericPatterns.hour23h,
            o
          );
        case "Ho":
          return s.ordinalNumber(o, { unit: "hour" });
        default:
          return (0, n.parseNDigits)(u.length, o);
      }
    }
    validate(o, u) {
      return u >= 0 && u <= 23;
    }
    set(o, u, s) {
      return o.setHours(s, 0, 0, 0), o;
    }
    incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
  };
  return $t.Hour0to23Parser = a, $t;
}
var kt = {}, pv;
function _M() {
  if (pv) return kt;
  pv = 1, kt.Hour0To11Parser = void 0;
  var e = /* @__PURE__ */ ge(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  let a = class extends r.Parser {
    priority = 70;
    parse(o, u, s) {
      switch (u) {
        case "K":
          return (0, n.parseNumericPattern)(
            e.numericPatterns.hour11h,
            o
          );
        case "Ko":
          return s.ordinalNumber(o, { unit: "hour" });
        default:
          return (0, n.parseNDigits)(u.length, o);
      }
    }
    validate(o, u) {
      return u >= 0 && u <= 11;
    }
    set(o, u, s) {
      return o.getHours() >= 12 && s < 12 ? o.setHours(s + 12, 0, 0, 0) : o.setHours(s, 0, 0, 0), o;
    }
    incompatibleTokens = ["h", "H", "k", "t", "T"];
  };
  return kt.Hour0To11Parser = a, kt;
}
var er = {}, wv;
function gM() {
  if (wv) return er;
  wv = 1, er.Hour1To24Parser = void 0;
  var e = /* @__PURE__ */ ge(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  let a = class extends r.Parser {
    priority = 70;
    parse(o, u, s) {
      switch (u) {
        case "k":
          return (0, n.parseNumericPattern)(
            e.numericPatterns.hour24h,
            o
          );
        case "ko":
          return s.ordinalNumber(o, { unit: "hour" });
        default:
          return (0, n.parseNDigits)(u.length, o);
      }
    }
    validate(o, u) {
      return u >= 1 && u <= 24;
    }
    set(o, u, s) {
      const c = s <= 24 ? s % 24 : s;
      return o.setHours(c, 0, 0, 0), o;
    }
    incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
  };
  return er.Hour1To24Parser = a, er;
}
var tr = {}, Dv;
function bM() {
  if (Dv) return tr;
  Dv = 1, tr.MinuteParser = void 0;
  var e = /* @__PURE__ */ ge(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  let a = class extends r.Parser {
    priority = 60;
    parse(o, u, s) {
      switch (u) {
        case "m":
          return (0, n.parseNumericPattern)(
            e.numericPatterns.minute,
            o
          );
        case "mo":
          return s.ordinalNumber(o, { unit: "minute" });
        default:
          return (0, n.parseNDigits)(u.length, o);
      }
    }
    validate(o, u) {
      return u >= 0 && u <= 59;
    }
    set(o, u, s) {
      return o.setMinutes(s, 0, 0), o;
    }
    incompatibleTokens = ["t", "T"];
  };
  return tr.MinuteParser = a, tr;
}
var rr = {}, Pv;
function OM() {
  if (Pv) return rr;
  Pv = 1, rr.SecondParser = void 0;
  var e = /* @__PURE__ */ ge(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  let a = class extends r.Parser {
    priority = 50;
    parse(o, u, s) {
      switch (u) {
        case "s":
          return (0, n.parseNumericPattern)(
            e.numericPatterns.second,
            o
          );
        case "so":
          return s.ordinalNumber(o, { unit: "second" });
        default:
          return (0, n.parseNDigits)(u.length, o);
      }
    }
    validate(o, u) {
      return u >= 0 && u <= 59;
    }
    set(o, u, s) {
      return o.setSeconds(s, 0), o;
    }
    incompatibleTokens = ["t", "T"];
  };
  return rr.SecondParser = a, rr;
}
var nr = {}, Iv;
function MM() {
  if (Iv) return nr;
  Iv = 1, nr.FractionOfSecondParser = void 0;
  var e = /* @__PURE__ */ U(), r = /* @__PURE__ */ X();
  let n = class extends e.Parser {
    priority = 30;
    parse(i, o) {
      const u = (s) => Math.trunc(s * Math.pow(10, -o.length + 3));
      return (0, r.mapValue)(
        (0, r.parseNDigits)(o.length, i),
        u
      );
    }
    set(i, o, u) {
      return i.setMilliseconds(u), i;
    }
    incompatibleTokens = ["t", "T"];
  };
  return nr.FractionOfSecondParser = n, nr;
}
var ar = {}, Ev;
function pM() {
  if (Ev) return ar;
  Ev = 1, ar.ISOTimezoneWithZParser = void 0;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ Be(), n = /* @__PURE__ */ ge(), a = /* @__PURE__ */ U(), i = /* @__PURE__ */ X();
  let o = class extends a.Parser {
    priority = 10;
    parse(s, c) {
      switch (c) {
        case "X":
          return (0, i.parseTimezonePattern)(
            n.timezonePatterns.basicOptionalMinutes,
            s
          );
        case "XX":
          return (0, i.parseTimezonePattern)(
            n.timezonePatterns.basic,
            s
          );
        case "XXXX":
          return (0, i.parseTimezonePattern)(
            n.timezonePatterns.basicOptionalSeconds,
            s
          );
        case "XXXXX":
          return (0, i.parseTimezonePattern)(
            n.timezonePatterns.extendedOptionalSeconds,
            s
          );
        default:
          return (0, i.parseTimezonePattern)(
            n.timezonePatterns.extended,
            s
          );
      }
    }
    set(s, c, l) {
      return c.timestampIsSet ? s : (0, e.constructFrom)(
        s,
        s.getTime() - (0, r.getTimezoneOffsetInMilliseconds)(s) - l
      );
    }
    incompatibleTokens = ["t", "T", "x"];
  };
  return ar.ISOTimezoneWithZParser = o, ar;
}
var ir = {}, Tv;
function wM() {
  if (Tv) return ir;
  Tv = 1, ir.ISOTimezoneParser = void 0;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ Be(), n = /* @__PURE__ */ ge(), a = /* @__PURE__ */ U(), i = /* @__PURE__ */ X();
  let o = class extends a.Parser {
    priority = 10;
    parse(s, c) {
      switch (c) {
        case "x":
          return (0, i.parseTimezonePattern)(
            n.timezonePatterns.basicOptionalMinutes,
            s
          );
        case "xx":
          return (0, i.parseTimezonePattern)(
            n.timezonePatterns.basic,
            s
          );
        case "xxxx":
          return (0, i.parseTimezonePattern)(
            n.timezonePatterns.basicOptionalSeconds,
            s
          );
        case "xxxxx":
          return (0, i.parseTimezonePattern)(
            n.timezonePatterns.extendedOptionalSeconds,
            s
          );
        default:
          return (0, i.parseTimezonePattern)(
            n.timezonePatterns.extended,
            s
          );
      }
    }
    set(s, c, l) {
      return c.timestampIsSet ? s : (0, e.constructFrom)(
        s,
        s.getTime() - (0, r.getTimezoneOffsetInMilliseconds)(s) - l
      );
    }
    incompatibleTokens = ["t", "T", "X"];
  };
  return ir.ISOTimezoneParser = o, ir;
}
var or = {}, Sv;
function DM() {
  if (Sv) return or;
  Sv = 1, or.TimestampSecondsParser = void 0;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  let a = class extends r.Parser {
    priority = 40;
    parse(o) {
      return (0, n.parseAnyDigitsSigned)(o);
    }
    set(o, u, s) {
      return [
        (0, e.constructFrom)(o, s * 1e3),
        { timestampIsSet: !0 }
      ];
    }
    incompatibleTokens = "*";
  };
  return or.TimestampSecondsParser = a, or;
}
var ur = {}, qv;
function PM() {
  if (qv) return ur;
  qv = 1, ur.TimestampMillisecondsParser = void 0;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ U(), n = /* @__PURE__ */ X();
  let a = class extends r.Parser {
    priority = 20;
    parse(o) {
      return (0, n.parseAnyDigitsSigned)(o);
    }
    set(o, u, s) {
      return [(0, e.constructFrom)(o, s), { timestampIsSet: !0 }];
    }
    incompatibleTokens = "*";
  };
  return ur.TimestampMillisecondsParser = a, ur;
}
var Rv;
function IM() {
  if (Rv) return qt;
  Rv = 1, qt.parsers = void 0;
  var e = /* @__PURE__ */ Z2(), r = /* @__PURE__ */ X2(), n = /* @__PURE__ */ K2(), a = /* @__PURE__ */ J2(), i = /* @__PURE__ */ $2(), o = /* @__PURE__ */ k2(), u = /* @__PURE__ */ eM(), s = /* @__PURE__ */ tM(), c = /* @__PURE__ */ rM(), l = /* @__PURE__ */ nM(), v = /* @__PURE__ */ aM(), d = /* @__PURE__ */ iM(), f = /* @__PURE__ */ oM(), h = /* @__PURE__ */ uM(), m = /* @__PURE__ */ sM(), _ = /* @__PURE__ */ cM(), g = /* @__PURE__ */ dM(), p = /* @__PURE__ */ fM(), M = /* @__PURE__ */ lM(), I = /* @__PURE__ */ hM(), F = /* @__PURE__ */ vM(), W = /* @__PURE__ */ mM(), y = /* @__PURE__ */ _M(), P = /* @__PURE__ */ gM(), E = /* @__PURE__ */ bM(), x = /* @__PURE__ */ OM(), j = /* @__PURE__ */ MM(), z = /* @__PURE__ */ pM(), k = /* @__PURE__ */ wM(), re = /* @__PURE__ */ DM(), ce = /* @__PURE__ */ PM();
  return qt.parsers = {
    G: new e.EraParser(),
    y: new r.YearParser(),
    Y: new n.LocalWeekYearParser(),
    R: new a.ISOWeekYearParser(),
    u: new i.ExtendedYearParser(),
    Q: new o.QuarterParser(),
    q: new u.StandAloneQuarterParser(),
    M: new s.MonthParser(),
    L: new c.StandAloneMonthParser(),
    w: new l.LocalWeekParser(),
    I: new v.ISOWeekParser(),
    d: new d.DateParser(),
    D: new f.DayOfYearParser(),
    E: new h.DayParser(),
    e: new m.LocalDayParser(),
    c: new _.StandAloneLocalDayParser(),
    i: new g.ISODayParser(),
    a: new p.AMPMParser(),
    b: new M.AMPMMidnightParser(),
    B: new I.DayPeriodParser(),
    h: new F.Hour1to12Parser(),
    H: new W.Hour0to23Parser(),
    K: new y.Hour0To11Parser(),
    k: new P.Hour1To24Parser(),
    m: new E.MinuteParser(),
    s: new x.SecondParser(),
    S: new j.FractionOfSecondParser(),
    X: new z.ISOTimezoneWithZParser(),
    x: new k.ISOTimezoneParser(),
    t: new re.TimestampSecondsParser(),
    T: new ce.TimestampMillisecondsParser()
  }, qt;
}
var xv;
function zg() {
  return xv || (xv = 1, (function(e) {
    Object.defineProperty(e, "longFormatters", {
      enumerable: !0,
      get: function() {
        return n.longFormatters;
      }
    }), e.parse = _, Object.defineProperty(e, "parsers", {
      enumerable: !0,
      get: function() {
        return c.parsers;
      }
    });
    var r = /* @__PURE__ */ at(), n = /* @__PURE__ */ Eg(), a = /* @__PURE__ */ Tg(), i = /* @__PURE__ */ Y(), o = /* @__PURE__ */ Yg(), u = /* @__PURE__ */ w(), s = /* @__PURE__ */ Ag(), c = /* @__PURE__ */ IM();
    const l = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, v = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, d = /^'([^]*?)'?$/, f = /''/g, h = /\S/, m = /[a-zA-Z]/;
    function _(p, M, I, F) {
      const W = () => (0, i.constructFrom)(F?.in || I, NaN), y = (0, o.getDefaultOptions)(), P = F?.locale ?? y.locale ?? r.defaultLocale, E = F?.firstWeekContainsDate ?? F?.locale?.options?.firstWeekContainsDate ?? y.firstWeekContainsDate ?? y.locale?.options?.firstWeekContainsDate ?? 1, x = F?.weekStartsOn ?? F?.locale?.options?.weekStartsOn ?? y.weekStartsOn ?? y.locale?.options?.weekStartsOn ?? 0;
      if (!M)
        return p ? W() : (0, u.toDate)(I, F?.in);
      const j = {
        firstWeekContainsDate: E,
        weekStartsOn: x,
        locale: P
      }, z = [new s.DateTimezoneSetter(F?.in, I)], k = M.match(v).map((A) => {
        const Z = A[0];
        if (Z in n.longFormatters) {
          const le = n.longFormatters[Z];
          return le(A, P.formatLong);
        }
        return A;
      }).join("").match(l), re = [];
      for (let A of k) {
        !F?.useAdditionalWeekYearTokens && (0, a.isProtectedWeekYearToken)(A) && (0, a.warnOrThrowProtectedError)(A, M, p), !F?.useAdditionalDayOfYearTokens && (0, a.isProtectedDayOfYearToken)(A) && (0, a.warnOrThrowProtectedError)(A, M, p);
        const Z = A[0], le = c.parsers[Z];
        if (le) {
          const { incompatibleTokens: Pe } = le;
          if (Array.isArray(Pe)) {
            const Ee = re.find(
              (Te) => Pe.includes(Te.token) || Te.token === Z
            );
            if (Ee)
              throw new RangeError(
                `The format string mustn't contain \`${Ee.fullToken}\` and \`${A}\` at the same time`
              );
          } else if (le.incompatibleTokens === "*" && re.length > 0)
            throw new RangeError(
              `The format string mustn't contain \`${A}\` and any other token at the same time`
            );
          re.push({ token: Z, fullToken: A });
          const Ie = le.run(
            p,
            A,
            P.match,
            j
          );
          if (!Ie)
            return W();
          z.push(Ie.setter), p = Ie.rest;
        } else {
          if (Z.match(m))
            throw new RangeError(
              "Format string contains an unescaped latin alphabet character `" + Z + "`"
            );
          if (A === "''" ? A = "'" : Z === "'" && (A = g(A)), p.indexOf(A) === 0)
            p = p.slice(A.length);
          else
            return W();
        }
      }
      if (p.length > 0 && h.test(p))
        return W();
      const ce = z.map((A) => A.priority).sort((A, Z) => Z - A).filter((A, Z, le) => le.indexOf(A) === Z).map(
        (A) => z.filter((Z) => Z.priority === A).sort((Z, le) => le.subPriority - Z.subPriority)
      ).map((A) => A[0]);
      let ne = (0, u.toDate)(I, F?.in);
      if (isNaN(+ne)) return W();
      const ee = {};
      for (const A of ce) {
        if (!A.validate(ne, j))
          return W();
        const Z = A.set(ne, ee, j);
        Array.isArray(Z) ? (ne = Z[0], Object.assign(ee, Z[1])) : ne = Z;
      }
      return ne;
    }
    function g(p) {
      return p.match(d)[1].replace(f, "'");
    }
  })(Xs)), Xs;
}
var jv;
function EM() {
  if (jv) return Zs;
  jv = 1, Zs.isMatch = n;
  var e = /* @__PURE__ */ Ve(), r = /* @__PURE__ */ zg();
  function n(a, i, o) {
    return (0, e.isValid)(
      (0, r.parse)(a, i, /* @__PURE__ */ new Date(), o)
    );
  }
  return Zs;
}
var tc = {}, Nv;
function TM() {
  if (Nv) return tc;
  Nv = 1, tc.isMonday = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n, a?.in).getDay() === 1;
  }
  return tc;
}
var rc = {}, Yv;
function SM() {
  if (Yv) return rc;
  Yv = 1, rc.isPast = r;
  var e = /* @__PURE__ */ w();
  function r(n) {
    return +(0, e.toDate)(n) < Date.now();
  }
  return rc;
}
var nc = {}, ac = {}, Wv;
function Bg() {
  if (Wv) return ac;
  Wv = 1, ac.startOfHour = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in);
    return i.setMinutes(0, 0, 0), i;
  }
  return ac;
}
var Cv;
function Qg() {
  if (Cv) return nc;
  Cv = 1, nc.isSameHour = n;
  var e = /* @__PURE__ */ K(), r = /* @__PURE__ */ Bg();
  function n(a, i, o) {
    const [u, s] = (0, e.normalizeDates)(
      o?.in,
      a,
      i
    );
    return +(0, r.startOfHour)(u) == +(0, r.startOfHour)(s);
  }
  return nc;
}
var ic = {}, oc = {}, Fv;
function Ef() {
  if (Fv) return oc;
  Fv = 1, oc.isSameWeek = n;
  var e = /* @__PURE__ */ K(), r = /* @__PURE__ */ Re();
  function n(a, i, o) {
    const [u, s] = (0, e.normalizeDates)(
      o?.in,
      a,
      i
    );
    return +(0, r.startOfWeek)(u, o) == +(0, r.startOfWeek)(s, o);
  }
  return oc;
}
var Av;
function Vg() {
  if (Av) return ic;
  Av = 1, ic.isSameISOWeek = r;
  var e = /* @__PURE__ */ Ef();
  function r(n, a, i) {
    return (0, e.isSameWeek)(n, a, {
      ...i,
      weekStartsOn: 1
    });
  }
  return ic;
}
var uc = {}, Hv;
function qM() {
  if (Hv) return uc;
  Hv = 1, uc.isSameISOWeekYear = n;
  var e = /* @__PURE__ */ _t(), r = /* @__PURE__ */ K();
  function n(a, i, o) {
    const [u, s] = (0, r.normalizeDates)(
      o?.in,
      a,
      i
    );
    return +(0, e.startOfISOWeekYear)(u) == +(0, e.startOfISOWeekYear)(s);
  }
  return uc;
}
var sc = {}, cc = {}, Lv;
function Gg() {
  if (Lv) return cc;
  Lv = 1, cc.startOfMinute = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in);
    return i.setSeconds(0, 0), i;
  }
  return cc;
}
var yv;
function Ug() {
  if (yv) return sc;
  yv = 1, sc.isSameMinute = r;
  var e = /* @__PURE__ */ Gg();
  function r(n, a) {
    return +(0, e.startOfMinute)(n) == +(0, e.startOfMinute)(a);
  }
  return sc;
}
var dc = {}, zv;
function Zg() {
  if (zv) return dc;
  zv = 1, dc.isSameMonth = r;
  var e = /* @__PURE__ */ K();
  function r(n, a, i) {
    const [o, u] = (0, e.normalizeDates)(
      i?.in,
      n,
      a
    );
    return o.getFullYear() === u.getFullYear() && o.getMonth() === u.getMonth();
  }
  return dc;
}
var fc = {}, Bv;
function Xg() {
  if (Bv) return fc;
  Bv = 1, fc.isSameQuarter = n;
  var e = /* @__PURE__ */ K(), r = /* @__PURE__ */ Mf();
  function n(a, i, o) {
    const [u, s] = (0, e.normalizeDates)(
      o?.in,
      a,
      i
    );
    return +(0, r.startOfQuarter)(u) == +(0, r.startOfQuarter)(s);
  }
  return fc;
}
var lc = {}, hc = {}, Qv;
function Kg() {
  if (Qv) return hc;
  Qv = 1, hc.startOfSecond = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in);
    return i.setMilliseconds(0), i;
  }
  return hc;
}
var Vv;
function Jg() {
  if (Vv) return lc;
  Vv = 1, lc.isSameSecond = r;
  var e = /* @__PURE__ */ Kg();
  function r(n, a) {
    return +(0, e.startOfSecond)(n) == +(0, e.startOfSecond)(a);
  }
  return lc;
}
var vc = {}, Gv;
function $g() {
  if (Gv) return vc;
  Gv = 1, vc.isSameYear = r;
  var e = /* @__PURE__ */ K();
  function r(n, a, i) {
    const [o, u] = (0, e.normalizeDates)(
      i?.in,
      n,
      a
    );
    return o.getFullYear() === u.getFullYear();
  }
  return vc;
}
var mc = {}, Uv;
function RM() {
  if (Uv) return mc;
  Uv = 1, mc.isThisHour = a;
  var e = /* @__PURE__ */ se(), r = /* @__PURE__ */ Qg(), n = /* @__PURE__ */ w();
  function a(i, o) {
    return (0, r.isSameHour)(
      (0, n.toDate)(i, o?.in),
      (0, e.constructNow)(o?.in || i)
    );
  }
  return mc;
}
var _c = {}, Zv;
function xM() {
  if (Zv) return _c;
  Zv = 1, _c.isThisISOWeek = a;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ se(), n = /* @__PURE__ */ Vg();
  function a(i, o) {
    return (0, n.isSameISOWeek)(
      (0, e.constructFrom)(o?.in || i, i),
      (0, r.constructNow)(o?.in || i)
    );
  }
  return _c;
}
var gc = {}, Xv;
function jM() {
  if (Xv) return gc;
  Xv = 1, gc.isThisMinute = n;
  var e = /* @__PURE__ */ se(), r = /* @__PURE__ */ Ug();
  function n(a) {
    return (0, r.isSameMinute)(a, (0, e.constructNow)(a));
  }
  return gc;
}
var bc = {}, Kv;
function NM() {
  if (Kv) return bc;
  Kv = 1, bc.isThisMonth = a;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ se(), n = /* @__PURE__ */ Zg();
  function a(i, o) {
    return (0, n.isSameMonth)(
      (0, e.constructFrom)(o?.in || i, i),
      (0, r.constructNow)(o?.in || i)
    );
  }
  return bc;
}
var Oc = {}, Jv;
function YM() {
  if (Jv) return Oc;
  Jv = 1, Oc.isThisQuarter = a;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ se(), n = /* @__PURE__ */ Xg();
  function a(i, o) {
    return (0, n.isSameQuarter)(
      (0, e.constructFrom)(o?.in || i, i),
      (0, r.constructNow)(o?.in || i)
    );
  }
  return Oc;
}
var Mc = {}, $v;
function WM() {
  if ($v) return Mc;
  $v = 1, Mc.isThisSecond = n;
  var e = /* @__PURE__ */ se(), r = /* @__PURE__ */ Jg();
  function n(a) {
    return (0, r.isSameSecond)(a, (0, e.constructNow)(a));
  }
  return Mc;
}
var pc = {}, kv;
function CM() {
  if (kv) return pc;
  kv = 1, pc.isThisWeek = a;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ se(), n = /* @__PURE__ */ Ef();
  function a(i, o) {
    return (0, n.isSameWeek)(
      (0, e.constructFrom)(o?.in || i, i),
      (0, r.constructNow)(o?.in || i),
      o
    );
  }
  return pc;
}
var wc = {}, em;
function FM() {
  if (em) return wc;
  em = 1, wc.isThisYear = a;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ se(), n = /* @__PURE__ */ $g();
  function a(i, o) {
    return (0, n.isSameYear)(
      (0, e.constructFrom)(o?.in || i, i),
      (0, r.constructNow)(o?.in || i)
    );
  }
  return wc;
}
var Dc = {}, tm;
function AM() {
  if (tm) return Dc;
  tm = 1, Dc.isThursday = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n, a?.in).getDay() === 4;
  }
  return Dc;
}
var Pc = {}, rm;
function HM() {
  if (rm) return Pc;
  rm = 1, Pc.isToday = a;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ se(), n = /* @__PURE__ */ gt();
  function a(i, o) {
    return (0, n.isSameDay)(
      (0, e.constructFrom)(o?.in || i, i),
      (0, r.constructNow)(o?.in || i)
    );
  }
  return Pc;
}
var Ic = {}, nm;
function LM() {
  if (nm) return Ic;
  nm = 1, Ic.isTomorrow = a;
  var e = /* @__PURE__ */ Ye(), r = /* @__PURE__ */ se(), n = /* @__PURE__ */ gt();
  function a(i, o) {
    return (0, n.isSameDay)(
      i,
      (0, e.addDays)((0, r.constructNow)(o?.in || i), 1),
      o
    );
  }
  return Ic;
}
var Ec = {}, am;
function yM() {
  if (am) return Ec;
  am = 1, Ec.isTuesday = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n, a?.in).getDay() === 2;
  }
  return Ec;
}
var Tc = {}, im;
function zM() {
  if (im) return Tc;
  im = 1, Tc.isWednesday = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    return (0, e.toDate)(n, a?.in).getDay() === 3;
  }
  return Tc;
}
var Sc = {}, om;
function BM() {
  if (om) return Sc;
  om = 1, Sc.isWithinInterval = r;
  var e = /* @__PURE__ */ w();
  function r(n, a, i) {
    const o = +(0, e.toDate)(n, i?.in), [u, s] = [
      +(0, e.toDate)(a.start, i?.in),
      +(0, e.toDate)(a.end, i?.in)
    ].sort((c, l) => c - l);
    return o >= u && o <= s;
  }
  return Sc;
}
var qc = {}, Rc = {}, um;
function Dr() {
  if (um) return Rc;
  um = 1, Rc.subDays = r;
  var e = /* @__PURE__ */ Ye();
  function r(n, a, i) {
    return (0, e.addDays)(n, -a, i);
  }
  return Rc;
}
var sm;
function QM() {
  if (sm) return qc;
  sm = 1, qc.isYesterday = i;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ se(), n = /* @__PURE__ */ gt(), a = /* @__PURE__ */ Dr();
  function i(o, u) {
    return (0, n.isSameDay)(
      (0, e.constructFrom)(u?.in || o, o),
      (0, a.subDays)((0, r.constructNow)(u?.in || o), 1)
    );
  }
  return qc;
}
var xc = {}, cm;
function VM() {
  if (cm) return xc;
  cm = 1, xc.lastDayOfDecade = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in), o = i.getFullYear(), u = 9 + Math.floor(o / 10) * 10;
    return i.setFullYear(u + 1, 0, 0), i.setHours(0, 0, 0, 0), (0, e.toDate)(i, a?.in);
  }
  return xc;
}
var jc = {}, Nc = {}, dm;
function kg() {
  if (dm) return Nc;
  dm = 1, Nc.lastDayOfWeek = n;
  var e = /* @__PURE__ */ _e(), r = /* @__PURE__ */ w();
  function n(a, i) {
    const o = (0, e.getDefaultOptions)(), u = i?.weekStartsOn ?? i?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, s = (0, r.toDate)(a, i?.in), c = s.getDay(), l = (c < u ? -7 : 0) + 6 - (c - u);
    return s.setHours(0, 0, 0, 0), s.setDate(s.getDate() + l), s;
  }
  return Nc;
}
var fm;
function GM() {
  if (fm) return jc;
  fm = 1, jc.lastDayOfISOWeek = r;
  var e = /* @__PURE__ */ kg();
  function r(n, a) {
    return (0, e.lastDayOfWeek)(n, { ...a, weekStartsOn: 1 });
  }
  return jc;
}
var Yc = {}, lm;
function UM() {
  if (lm) return Yc;
  lm = 1, Yc.lastDayOfISOWeekYear = a;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ Je(), n = /* @__PURE__ */ We();
  function a(i, o) {
    const u = (0, r.getISOWeekYear)(i, o), s = (0, e.constructFrom)(o?.in || i, 0);
    s.setFullYear(u + 1, 0, 4), s.setHours(0, 0, 0, 0);
    const c = (0, n.startOfISOWeek)(s, o);
    return c.setDate(c.getDate() - 1), c;
  }
  return Yc;
}
var Wc = {}, hm;
function ZM() {
  if (hm) return Wc;
  hm = 1, Wc.lastDayOfQuarter = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in), o = i.getMonth(), u = o - o % 3 + 3;
    return i.setMonth(u, 0), i.setHours(0, 0, 0, 0), i;
  }
  return Wc;
}
var Cc = {}, vm;
function XM() {
  if (vm) return Cc;
  vm = 1, Cc.lastDayOfYear = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in), o = i.getFullYear();
    return i.setFullYear(o + 1, 0, 0), i.setHours(0, 0, 0, 0), i;
  }
  return Cc;
}
var Fc = {}, mm;
function KM() {
  return mm || (mm = 1, (function(e) {
    e.lightFormat = c, Object.defineProperty(e, "lightFormatters", {
      enumerable: !0,
      get: function() {
        return r.lightFormatters;
      }
    });
    var r = /* @__PURE__ */ Ig(), n = /* @__PURE__ */ Ve(), a = /* @__PURE__ */ w();
    const i = /(\w)\1*|''|'(''|[^'])+('|$)|./g, o = /^'([^]*?)'?$/, u = /''/g, s = /[a-zA-Z]/;
    function c(v, d) {
      const f = (0, a.toDate)(v);
      if (!(0, n.isValid)(f))
        throw new RangeError("Invalid time value");
      const h = d.match(i);
      return h ? h.map((_) => {
        if (_ === "''")
          return "'";
        const g = _[0];
        if (g === "'")
          return l(_);
        const p = r.lightFormatters[g];
        if (p)
          return p(f, _);
        if (g.match(s))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" + g + "`"
          );
        return _;
      }).join("") : "";
    }
    function l(v) {
      const d = v.match(o);
      return d ? d[1].replace(u, "'") : v;
    }
  })(Fc)), Fc;
}
var Ac = {}, _m;
function JM() {
  if (_m) return Ac;
  _m = 1, Ac.milliseconds = r;
  var e = /* @__PURE__ */ V();
  function r({ years: n, months: a, weeks: i, days: o, hours: u, minutes: s, seconds: c }) {
    let l = 0;
    n && (l += n * e.daysInYear), a && (l += a * (e.daysInYear / 12)), i && (l += i * 7), o && (l += o);
    let v = l * 24 * 60 * 60;
    return u && (v += u * 60 * 60), s && (v += s * 60), c && (v += c), Math.trunc(v * 1e3);
  }
  return Ac;
}
var Hc = {}, gm;
function $M() {
  if (gm) return Hc;
  gm = 1, Hc.millisecondsToHours = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    const a = n / e.millisecondsInHour;
    return Math.trunc(a);
  }
  return Hc;
}
var Lc = {}, bm;
function kM() {
  if (bm) return Lc;
  bm = 1, Lc.millisecondsToMinutes = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    const a = n / e.millisecondsInMinute;
    return Math.trunc(a);
  }
  return Lc;
}
var yc = {}, Om;
function ep() {
  if (Om) return yc;
  Om = 1, yc.millisecondsToSeconds = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    const a = n / e.millisecondsInSecond;
    return Math.trunc(a);
  }
  return yc;
}
var zc = {}, Mm;
function tp() {
  if (Mm) return zc;
  Mm = 1, zc.minutesToHours = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    const a = n / e.minutesInHour;
    return Math.trunc(a);
  }
  return zc;
}
var Bc = {}, pm;
function rp() {
  if (pm) return Bc;
  pm = 1, Bc.minutesToMilliseconds = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    return Math.trunc(n * e.millisecondsInMinute);
  }
  return Bc;
}
var Qc = {}, wm;
function np() {
  if (wm) return Qc;
  wm = 1, Qc.minutesToSeconds = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    return Math.trunc(n * e.secondsInMinute);
  }
  return Qc;
}
var Vc = {}, Dm;
function ap() {
  if (Dm) return Vc;
  Dm = 1, Vc.monthsToQuarters = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    const a = n / e.monthsInQuarter;
    return Math.trunc(a);
  }
  return Vc;
}
var Gc = {}, Pm;
function ip() {
  if (Pm) return Gc;
  Pm = 1, Gc.monthsToYears = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    const a = n / e.monthsInYear;
    return Math.trunc(a);
  }
  return Gc;
}
var Uc = {}, Im;
function Ue() {
  if (Im) return Uc;
  Im = 1, Uc.nextDay = n;
  var e = /* @__PURE__ */ Ye(), r = /* @__PURE__ */ pr();
  function n(a, i, o) {
    let u = i - (0, r.getDay)(a, o);
    return u <= 0 && (u += 7), (0, e.addDays)(a, u, o);
  }
  return Uc;
}
var Zc = {}, Em;
function op() {
  if (Em) return Zc;
  Em = 1, Zc.nextFriday = r;
  var e = /* @__PURE__ */ Ue();
  function r(n, a) {
    return (0, e.nextDay)(n, 5, a);
  }
  return Zc;
}
var Xc = {}, Tm;
function up() {
  if (Tm) return Xc;
  Tm = 1, Xc.nextMonday = r;
  var e = /* @__PURE__ */ Ue();
  function r(n, a) {
    return (0, e.nextDay)(n, 1, a);
  }
  return Xc;
}
var Kc = {}, Sm;
function sp() {
  if (Sm) return Kc;
  Sm = 1, Kc.nextSaturday = r;
  var e = /* @__PURE__ */ Ue();
  function r(n, a) {
    return (0, e.nextDay)(n, 6, a);
  }
  return Kc;
}
var Jc = {}, qm;
function cp() {
  if (qm) return Jc;
  qm = 1, Jc.nextSunday = r;
  var e = /* @__PURE__ */ Ue();
  function r(n, a) {
    return (0, e.nextDay)(n, 0, a);
  }
  return Jc;
}
var $c = {}, Rm;
function dp() {
  if (Rm) return $c;
  Rm = 1, $c.nextThursday = r;
  var e = /* @__PURE__ */ Ue();
  function r(n, a) {
    return (0, e.nextDay)(n, 4, a);
  }
  return $c;
}
var kc = {}, xm;
function fp() {
  if (xm) return kc;
  xm = 1, kc.nextTuesday = r;
  var e = /* @__PURE__ */ Ue();
  function r(n, a) {
    return (0, e.nextDay)(n, 2, a);
  }
  return kc;
}
var ed = {}, jm;
function lp() {
  if (jm) return ed;
  jm = 1, ed.nextWednesday = r;
  var e = /* @__PURE__ */ Ue();
  function r(n, a) {
    return (0, e.nextDay)(n, 3, a);
  }
  return ed;
}
var td = {}, Nm;
function hp() {
  if (Nm) return td;
  Nm = 1, td.parseISO = a;
  var e = /* @__PURE__ */ V(), r = /* @__PURE__ */ Y(), n = /* @__PURE__ */ w();
  function a(P, E) {
    const x = () => (0, r.constructFrom)(E?.in, NaN), j = E?.additionalDigits ?? 2, z = c(P);
    let k;
    if (z.date) {
      const ee = l(z.date, j);
      k = v(ee.restDateString, ee.year);
    }
    if (!k || isNaN(+k)) return x();
    const re = +k;
    let ce = 0, ne;
    if (z.time && (ce = f(z.time), isNaN(ce)))
      return x();
    if (z.timezone) {
      if (ne = m(z.timezone), isNaN(ne)) return x();
    } else {
      const ee = new Date(re + ce), A = (0, n.toDate)(0, E?.in);
      return A.setFullYear(
        ee.getUTCFullYear(),
        ee.getUTCMonth(),
        ee.getUTCDate()
      ), A.setHours(
        ee.getUTCHours(),
        ee.getUTCMinutes(),
        ee.getUTCSeconds(),
        ee.getUTCMilliseconds()
      ), A;
    }
    return (0, n.toDate)(re + ce + ne, E?.in);
  }
  const i = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/
  }, o = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, u = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, s = /^([+-])(\d{2})(?::?(\d{2}))?$/;
  function c(P) {
    const E = {}, x = P.split(i.dateTimeDelimiter);
    let j;
    if (x.length > 2)
      return E;
    if (/:/.test(x[0]) ? j = x[0] : (E.date = x[0], j = x[1], i.timeZoneDelimiter.test(E.date) && (E.date = P.split(i.timeZoneDelimiter)[0], j = P.substr(
      E.date.length,
      P.length
    ))), j) {
      const z = i.timezone.exec(j);
      z ? (E.time = j.replace(z[1], ""), E.timezone = z[1]) : E.time = j;
    }
    return E;
  }
  function l(P, E) {
    const x = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" + (4 + E) + "})|(\\d{2}|[+-]\\d{" + (2 + E) + "})$)"
    ), j = P.match(x);
    if (!j) return { year: NaN, restDateString: "" };
    const z = j[1] ? parseInt(j[1]) : null, k = j[2] ? parseInt(j[2]) : null;
    return {
      year: k === null ? z : k * 100,
      restDateString: P.slice((j[1] || j[2]).length)
    };
  }
  function v(P, E) {
    if (E === null) return /* @__PURE__ */ new Date(NaN);
    const x = P.match(o);
    if (!x) return /* @__PURE__ */ new Date(NaN);
    const j = !!x[4], z = d(x[1]), k = d(x[2]) - 1, re = d(x[3]), ce = d(x[4]), ne = d(x[5]) - 1;
    if (j)
      return F(E, ce, ne) ? _(E, ce, ne) : /* @__PURE__ */ new Date(NaN);
    {
      const ee = /* @__PURE__ */ new Date(0);
      return !M(E, k, re) || !I(E, z) ? /* @__PURE__ */ new Date(NaN) : (ee.setUTCFullYear(E, k, Math.max(z, re)), ee);
    }
  }
  function d(P) {
    return P ? parseInt(P) : 1;
  }
  function f(P) {
    const E = P.match(u);
    if (!E) return NaN;
    const x = h(E[1]), j = h(E[2]), z = h(E[3]);
    return W(x, j, z) ? x * e.millisecondsInHour + j * e.millisecondsInMinute + z * 1e3 : NaN;
  }
  function h(P) {
    return P && parseFloat(P.replace(",", ".")) || 0;
  }
  function m(P) {
    if (P === "Z") return 0;
    const E = P.match(s);
    if (!E) return 0;
    const x = E[1] === "+" ? -1 : 1, j = parseInt(E[2]), z = E[3] && parseInt(E[3]) || 0;
    return y(j, z) ? x * (j * e.millisecondsInHour + z * e.millisecondsInMinute) : NaN;
  }
  function _(P, E, x) {
    const j = /* @__PURE__ */ new Date(0);
    j.setUTCFullYear(P, 0, 4);
    const z = j.getUTCDay() || 7, k = (E - 1) * 7 + x + 1 - z;
    return j.setUTCDate(j.getUTCDate() + k), j;
  }
  const g = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function p(P) {
    return P % 400 === 0 || P % 4 === 0 && P % 100 !== 0;
  }
  function M(P, E, x) {
    return E >= 0 && E <= 11 && x >= 1 && x <= (g[E] || (p(P) ? 29 : 28));
  }
  function I(P, E) {
    return E >= 1 && E <= (p(P) ? 366 : 365);
  }
  function F(P, E, x) {
    return E >= 1 && E <= 53 && x >= 0 && x <= 6;
  }
  function W(P, E, x) {
    return P === 24 ? E === 0 && x === 0 : x >= 0 && x < 60 && E >= 0 && E < 60 && P >= 0 && P < 25;
  }
  function y(P, E) {
    return E >= 0 && E <= 59;
  }
  return td;
}
var rd = {}, Ym;
function vp() {
  if (Ym) return rd;
  Ym = 1, rd.parseJSON = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = n.match(
      /(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/
    );
    return i ? (0, e.toDate)(
      Date.UTC(
        +i[1],
        +i[2] - 1,
        +i[3],
        +i[4] - (+i[9] || 0) * (i[8] == "-" ? -1 : 1),
        +i[5] - (+i[10] || 0) * (i[8] == "-" ? -1 : 1),
        +i[6],
        +((i[7] || "0") + "00").substring(0, 3)
      ),
      a?.in
    ) : (0, e.toDate)(NaN, a?.in);
  }
  return rd;
}
var nd = {}, Wm;
function Ze() {
  if (Wm) return nd;
  Wm = 1, nd.previousDay = n;
  var e = /* @__PURE__ */ pr(), r = /* @__PURE__ */ Dr();
  function n(a, i, o) {
    let u = (0, e.getDay)(a, o) - i;
    return u <= 0 && (u += 7), (0, r.subDays)(a, u, o);
  }
  return nd;
}
var ad = {}, Cm;
function mp() {
  if (Cm) return ad;
  Cm = 1, ad.previousFriday = r;
  var e = /* @__PURE__ */ Ze();
  function r(n, a) {
    return (0, e.previousDay)(n, 5, a);
  }
  return ad;
}
var id = {}, Fm;
function _p() {
  if (Fm) return id;
  Fm = 1, id.previousMonday = r;
  var e = /* @__PURE__ */ Ze();
  function r(n, a) {
    return (0, e.previousDay)(n, 1, a);
  }
  return id;
}
var od = {}, Am;
function gp() {
  if (Am) return od;
  Am = 1, od.previousSaturday = r;
  var e = /* @__PURE__ */ Ze();
  function r(n, a) {
    return (0, e.previousDay)(n, 6, a);
  }
  return od;
}
var ud = {}, Hm;
function bp() {
  if (Hm) return ud;
  Hm = 1, ud.previousSunday = r;
  var e = /* @__PURE__ */ Ze();
  function r(n, a) {
    return (0, e.previousDay)(n, 0, a);
  }
  return ud;
}
var sd = {}, Lm;
function Op() {
  if (Lm) return sd;
  Lm = 1, sd.previousThursday = r;
  var e = /* @__PURE__ */ Ze();
  function r(n, a) {
    return (0, e.previousDay)(n, 4, a);
  }
  return sd;
}
var cd = {}, ym;
function Mp() {
  if (ym) return cd;
  ym = 1, cd.previousTuesday = r;
  var e = /* @__PURE__ */ Ze();
  function r(n, a) {
    return (0, e.previousDay)(n, 2, a);
  }
  return cd;
}
var dd = {}, zm;
function pp() {
  if (zm) return dd;
  zm = 1, dd.previousWednesday = r;
  var e = /* @__PURE__ */ Ze();
  function r(n, a) {
    return (0, e.previousDay)(n, 3, a);
  }
  return dd;
}
var fd = {}, Bm;
function wp() {
  if (Bm) return fd;
  Bm = 1, fd.quartersToMonths = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    return Math.trunc(n * e.monthsInQuarter);
  }
  return fd;
}
var ld = {}, Qm;
function Dp() {
  if (Qm) return ld;
  Qm = 1, ld.quartersToYears = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    const a = n / e.quartersInYear;
    return Math.trunc(a);
  }
  return ld;
}
var hd = {}, Vm;
function Pp() {
  if (Vm) return hd;
  Vm = 1, hd.roundToNearestHours = a;
  var e = /* @__PURE__ */ Ge(), r = /* @__PURE__ */ Y(), n = /* @__PURE__ */ w();
  function a(i, o) {
    const u = o?.nearestTo ?? 1;
    if (u < 1 || u > 12)
      return (0, r.constructFrom)(o?.in || i, NaN);
    const s = (0, n.toDate)(i, o?.in), c = s.getMinutes() / 60, l = s.getSeconds() / 60 / 60, v = s.getMilliseconds() / 1e3 / 60 / 60, d = s.getHours() + c + l + v, f = o?.roundingMethod ?? "round", m = (0, e.getRoundingMethod)(f)(d / u) * u;
    return s.setHours(m, 0, 0, 0), s;
  }
  return hd;
}
var vd = {}, Gm;
function Ip() {
  if (Gm) return vd;
  Gm = 1, vd.roundToNearestMinutes = a;
  var e = /* @__PURE__ */ Ge(), r = /* @__PURE__ */ Y(), n = /* @__PURE__ */ w();
  function a(i, o) {
    const u = o?.nearestTo ?? 1;
    if (u < 1 || u > 30)
      return (0, r.constructFrom)(i, NaN);
    const s = (0, n.toDate)(i, o?.in), c = s.getSeconds() / 60, l = s.getMilliseconds() / 1e3 / 60, v = s.getMinutes() + c + l, d = o?.roundingMethod ?? "round", h = (0, e.getRoundingMethod)(d)(v / u) * u;
    return s.setMinutes(h, 0, 0), s;
  }
  return vd;
}
var md = {}, Um;
function Ep() {
  if (Um) return md;
  Um = 1, md.secondsToHours = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    const a = n / e.secondsInHour;
    return Math.trunc(a);
  }
  return md;
}
var _d = {}, Zm;
function Tp() {
  if (Zm) return _d;
  Zm = 1, _d.secondsToMilliseconds = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    return n * e.millisecondsInSecond;
  }
  return _d;
}
var gd = {}, Xm;
function Sp() {
  if (Xm) return gd;
  Xm = 1, gd.secondsToMinutes = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    const a = n / e.secondsInMinute;
    return Math.trunc(a);
  }
  return gd;
}
var bd = {}, Od = {}, Km;
function Tf() {
  if (Km) return Od;
  Km = 1, Od.setMonth = a;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ jg(), n = /* @__PURE__ */ w();
  function a(i, o, u) {
    const s = (0, n.toDate)(i, u?.in), c = s.getFullYear(), l = s.getDate(), v = (0, e.constructFrom)(u?.in || i, 0);
    v.setFullYear(c, o, 15), v.setHours(0, 0, 0, 0);
    const d = (0, r.getDaysInMonth)(v);
    return s.setMonth(o, Math.min(l, d)), s;
  }
  return Od;
}
var Jm;
function qp() {
  if (Jm) return bd;
  Jm = 1, bd.set = a;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ Tf(), n = /* @__PURE__ */ w();
  function a(i, o, u) {
    let s = (0, n.toDate)(i, u?.in);
    return isNaN(+s) ? (0, e.constructFrom)(u?.in || i, NaN) : (o.year != null && s.setFullYear(o.year), o.month != null && (s = (0, r.setMonth)(s, o.month)), o.date != null && s.setDate(o.date), o.hours != null && s.setHours(o.hours), o.minutes != null && s.setMinutes(o.minutes), o.seconds != null && s.setSeconds(o.seconds), o.milliseconds != null && s.setMilliseconds(o.milliseconds), s);
  }
  return bd;
}
var Md = {}, $m;
function Rp() {
  if ($m) return Md;
  $m = 1, Md.setDate = r;
  var e = /* @__PURE__ */ w();
  function r(n, a, i) {
    const o = (0, e.toDate)(n, i?.in);
    return o.setDate(a), o;
  }
  return Md;
}
var pd = {}, km;
function xp() {
  if (km) return pd;
  km = 1, pd.setDayOfYear = r;
  var e = /* @__PURE__ */ w();
  function r(n, a, i) {
    const o = (0, e.toDate)(n, i?.in);
    return o.setMonth(0), o.setDate(a), o;
  }
  return pd;
}
var wd = {}, e_;
function jp() {
  if (e_) return wd;
  e_ = 1, wd.setDefaultOptions = r;
  var e = /* @__PURE__ */ _e();
  function r(n) {
    const a = {}, i = (0, e.getDefaultOptions)();
    for (const o in i)
      Object.prototype.hasOwnProperty.call(i, o) && (a[o] = i[o]);
    for (const o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (n[o] === void 0 ? delete a[o] : a[o] = n[o]);
    (0, e.setDefaultOptions)(a);
  }
  return wd;
}
var Dd = {}, t_;
function Np() {
  if (t_) return Dd;
  t_ = 1, Dd.setHours = r;
  var e = /* @__PURE__ */ w();
  function r(n, a, i) {
    const o = (0, e.toDate)(n, i?.in);
    return o.setHours(a), o;
  }
  return Dd;
}
var Pd = {}, r_;
function Yp() {
  if (r_) return Pd;
  r_ = 1, Pd.setMilliseconds = r;
  var e = /* @__PURE__ */ w();
  function r(n, a, i) {
    const o = (0, e.toDate)(n, i?.in);
    return o.setMilliseconds(a), o;
  }
  return Pd;
}
var Id = {}, n_;
function Wp() {
  if (n_) return Id;
  n_ = 1, Id.setMinutes = r;
  var e = /* @__PURE__ */ w();
  function r(n, a, i) {
    const o = (0, e.toDate)(n, i?.in);
    return o.setMinutes(a), o;
  }
  return Id;
}
var Ed = {}, a_;
function Cp() {
  if (a_) return Ed;
  a_ = 1, Ed.setQuarter = n;
  var e = /* @__PURE__ */ Tf(), r = /* @__PURE__ */ w();
  function n(a, i, o) {
    const u = (0, r.toDate)(a, o?.in), s = Math.trunc(u.getMonth() / 3) + 1, c = i - s;
    return (0, e.setMonth)(u, u.getMonth() + c * 3);
  }
  return Ed;
}
var Td = {}, i_;
function Fp() {
  if (i_) return Td;
  i_ = 1, Td.setSeconds = r;
  var e = /* @__PURE__ */ w();
  function r(n, a, i) {
    const o = (0, e.toDate)(n, i?.in);
    return o.setSeconds(a), o;
  }
  return Td;
}
var Sd = {}, o_;
function Ap() {
  if (o_) return Sd;
  o_ = 1, Sd.setWeekYear = o;
  var e = /* @__PURE__ */ _e(), r = /* @__PURE__ */ Y(), n = /* @__PURE__ */ Qe(), a = /* @__PURE__ */ Pf(), i = /* @__PURE__ */ w();
  function o(u, s, c) {
    const l = (0, e.getDefaultOptions)(), v = c?.firstWeekContainsDate ?? c?.locale?.options?.firstWeekContainsDate ?? l.firstWeekContainsDate ?? l.locale?.options?.firstWeekContainsDate ?? 1, d = (0, n.differenceInCalendarDays)(
      (0, i.toDate)(u, c?.in),
      (0, a.startOfWeekYear)(u, c),
      c
    ), f = (0, r.constructFrom)(c?.in || u, 0);
    f.setFullYear(s, 0, v), f.setHours(0, 0, 0, 0);
    const h = (0, a.startOfWeekYear)(f, c);
    return h.setDate(h.getDate() + d), h;
  }
  return Sd;
}
var qd = {}, u_;
function Hp() {
  if (u_) return qd;
  u_ = 1, qd.setYear = n;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ w();
  function n(a, i, o) {
    const u = (0, r.toDate)(a, o?.in);
    return isNaN(+u) ? (0, e.constructFrom)(o?.in || a, NaN) : (u.setFullYear(i), u);
  }
  return qd;
}
var Rd = {}, s_;
function Lp() {
  if (s_) return Rd;
  s_ = 1, Rd.startOfDecade = r;
  var e = /* @__PURE__ */ w();
  function r(n, a) {
    const i = (0, e.toDate)(n, a?.in), o = i.getFullYear(), u = Math.floor(o / 10) * 10;
    return i.setFullYear(u, 0, 1), i.setHours(0, 0, 0, 0), i;
  }
  return Rd;
}
var xd = {}, c_;
function yp() {
  if (c_) return xd;
  c_ = 1, xd.startOfToday = r;
  var e = /* @__PURE__ */ mr();
  function r(n) {
    return (0, e.startOfDay)(Date.now(), n);
  }
  return xd;
}
var jd = {}, d_;
function zp() {
  if (d_) return jd;
  d_ = 1, jd.startOfTomorrow = n;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ se();
  function n(a) {
    const i = (0, r.constructNow)(a?.in), o = i.getFullYear(), u = i.getMonth(), s = i.getDate(), c = (0, e.constructFrom)(a?.in, 0);
    return c.setFullYear(o, u, s + 1), c.setHours(0, 0, 0, 0), c;
  }
  return jd;
}
var Nd = {}, f_;
function Bp() {
  if (f_) return Nd;
  f_ = 1, Nd.startOfYesterday = r;
  var e = /* @__PURE__ */ se();
  function r(n) {
    const a = (0, e.constructNow)(n?.in), i = a.getFullYear(), o = a.getMonth(), u = a.getDate(), s = (0, e.constructNow)(n?.in);
    return s.setFullYear(i, o, u - 1), s.setHours(0, 0, 0, 0), s;
  }
  return Nd;
}
var Yd = {}, Wd = {}, l_;
function eb() {
  if (l_) return Wd;
  l_ = 1, Wd.subMonths = r;
  var e = /* @__PURE__ */ mt();
  function r(n, a, i) {
    return (0, e.addMonths)(n, -a, i);
  }
  return Wd;
}
var h_;
function Qp() {
  if (h_) return Yd;
  h_ = 1, Yd.sub = a;
  var e = /* @__PURE__ */ Y(), r = /* @__PURE__ */ Dr(), n = /* @__PURE__ */ eb();
  function a(i, o, u) {
    const {
      years: s = 0,
      months: c = 0,
      weeks: l = 0,
      days: v = 0,
      hours: d = 0,
      minutes: f = 0,
      seconds: h = 0
    } = o, m = (0, n.subMonths)(
      i,
      c + s * 12,
      u
    ), _ = (0, r.subDays)(
      m,
      v + l * 7,
      u
    ), g = f + d * 60, M = (h + g * 60) * 1e3;
    return (0, e.constructFrom)(u?.in || i, +_ - M);
  }
  return Yd;
}
var Cd = {}, v_;
function Vp() {
  if (v_) return Cd;
  v_ = 1, Cd.subBusinessDays = r;
  var e = /* @__PURE__ */ ig();
  function r(n, a, i) {
    return (0, e.addBusinessDays)(n, -a, i);
  }
  return Cd;
}
var Fd = {}, m_;
function Gp() {
  if (m_) return Fd;
  m_ = 1, Fd.subHours = r;
  var e = /* @__PURE__ */ og();
  function r(n, a, i) {
    return (0, e.addHours)(n, -a, i);
  }
  return Fd;
}
var Ad = {}, __;
function Up() {
  if (__) return Ad;
  __ = 1, Ad.subMilliseconds = r;
  var e = /* @__PURE__ */ vr();
  function r(n, a, i) {
    return (0, e.addMilliseconds)(n, -a, i);
  }
  return Ad;
}
var Hd = {}, g_;
function Zp() {
  if (g_) return Hd;
  g_ = 1, Hd.subMinutes = r;
  var e = /* @__PURE__ */ cf();
  function r(n, a, i) {
    return (0, e.addMinutes)(n, -a, i);
  }
  return Hd;
}
var Ld = {}, b_;
function Xp() {
  if (b_) return Ld;
  b_ = 1, Ld.subQuarters = r;
  var e = /* @__PURE__ */ df();
  function r(n, a, i) {
    return (0, e.addQuarters)(n, -a, i);
  }
  return Ld;
}
var yd = {}, O_;
function Kp() {
  if (O_) return yd;
  O_ = 1, yd.subSeconds = r;
  var e = /* @__PURE__ */ cg();
  function r(n, a, i) {
    return (0, e.addSeconds)(n, -a, i);
  }
  return yd;
}
var zd = {}, M_;
function Jp() {
  if (M_) return zd;
  M_ = 1, zd.subWeeks = r;
  var e = /* @__PURE__ */ _r();
  function r(n, a, i) {
    return (0, e.addWeeks)(n, -a, i);
  }
  return zd;
}
var Bd = {}, p_;
function $p() {
  if (p_) return Bd;
  p_ = 1, Bd.subYears = r;
  var e = /* @__PURE__ */ dg();
  function r(n, a, i) {
    return (0, e.addYears)(n, -a, i);
  }
  return Bd;
}
var Qd = {}, w_;
function kp() {
  if (w_) return Qd;
  w_ = 1, Qd.weeksToDays = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    return Math.trunc(n * e.daysInWeek);
  }
  return Qd;
}
var Vd = {}, D_;
function ew() {
  if (D_) return Vd;
  D_ = 1, Vd.yearsToDays = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    return Math.trunc(n * e.daysInYear);
  }
  return Vd;
}
var Gd = {}, P_;
function tw() {
  if (P_) return Gd;
  P_ = 1, Gd.yearsToMonths = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    return Math.trunc(n * e.monthsInYear);
  }
  return Gd;
}
var Ud = {}, I_;
function rw() {
  if (I_) return Ud;
  I_ = 1, Ud.yearsToQuarters = r;
  var e = /* @__PURE__ */ V();
  function r(n) {
    return Math.trunc(n * e.quartersInYear);
  }
  return Ud;
}
var E_;
function nw() {
  return E_ || (E_ = 1, (function(e) {
    var r = /* @__PURE__ */ rg();
    Object.keys(r).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === r[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return r[t];
        }
      });
    });
    var n = /* @__PURE__ */ ig();
    Object.keys(n).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === n[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return n[t];
        }
      });
    });
    var a = /* @__PURE__ */ Ye();
    Object.keys(a).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === a[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return a[t];
        }
      });
    });
    var i = /* @__PURE__ */ og();
    Object.keys(i).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === i[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return i[t];
        }
      });
    });
    var o = /* @__PURE__ */ sg();
    Object.keys(o).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === o[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return o[t];
        }
      });
    });
    var u = /* @__PURE__ */ vr();
    Object.keys(u).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === u[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return u[t];
        }
      });
    });
    var s = /* @__PURE__ */ cf();
    Object.keys(s).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === s[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return s[t];
        }
      });
    });
    var c = /* @__PURE__ */ mt();
    Object.keys(c).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === c[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return c[t];
        }
      });
    });
    var l = /* @__PURE__ */ df();
    Object.keys(l).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === l[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return l[t];
        }
      });
    });
    var v = /* @__PURE__ */ cg();
    Object.keys(v).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === v[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return v[t];
        }
      });
    });
    var d = /* @__PURE__ */ _r();
    Object.keys(d).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === d[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return d[t];
        }
      });
    });
    var f = /* @__PURE__ */ dg();
    Object.keys(f).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === f[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return f[t];
        }
      });
    });
    var h = /* @__PURE__ */ IO();
    Object.keys(h).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === h[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return h[t];
        }
      });
    });
    var m = /* @__PURE__ */ EO();
    Object.keys(m).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === m[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return m[t];
        }
      });
    });
    var _ = /* @__PURE__ */ hg();
    Object.keys(_).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === _[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return _[t];
        }
      });
    });
    var g = /* @__PURE__ */ TO();
    Object.keys(g).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === g[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return g[t];
        }
      });
    });
    var p = /* @__PURE__ */ nt();
    Object.keys(p).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === p[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return p[t];
        }
      });
    });
    var M = /* @__PURE__ */ SO();
    Object.keys(M).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === M[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return M[t];
        }
      });
    });
    var I = /* @__PURE__ */ Y();
    Object.keys(I).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === I[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return I[t];
        }
      });
    });
    var F = /* @__PURE__ */ se();
    Object.keys(F).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === F[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return F[t];
        }
      });
    });
    var W = /* @__PURE__ */ qO();
    Object.keys(W).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === W[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return W[t];
        }
      });
    });
    var y = /* @__PURE__ */ RO();
    Object.keys(y).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === y[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return y[t];
        }
      });
    });
    var P = /* @__PURE__ */ Qe();
    Object.keys(P).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === P[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return P[t];
        }
      });
    });
    var E = /* @__PURE__ */ mg();
    Object.keys(E).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === E[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return E[t];
        }
      });
    });
    var x = /* @__PURE__ */ xO();
    Object.keys(x).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === x[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return x[t];
        }
      });
    });
    var j = /* @__PURE__ */ ff();
    Object.keys(j).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === j[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return j[t];
        }
      });
    });
    var z = /* @__PURE__ */ gg();
    Object.keys(z).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === z[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return z[t];
        }
      });
    });
    var k = /* @__PURE__ */ lf();
    Object.keys(k).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === k[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return k[t];
        }
      });
    });
    var re = /* @__PURE__ */ hf();
    Object.keys(re).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === re[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return re[t];
        }
      });
    });
    var ce = /* @__PURE__ */ vf();
    Object.keys(ce).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ce[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ce[t];
        }
      });
    });
    var ne = /* @__PURE__ */ mf();
    Object.keys(ne).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ne[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ne[t];
        }
      });
    });
    var ee = /* @__PURE__ */ jO();
    Object.keys(ee).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ee[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ee[t];
        }
      });
    });
    var A = /* @__PURE__ */ _f();
    Object.keys(A).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === A[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return A[t];
        }
      });
    });
    var Z = /* @__PURE__ */ gf();
    Object.keys(Z).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Z[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Z[t];
        }
      });
    });
    var le = /* @__PURE__ */ gr();
    Object.keys(le).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === le[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return le[t];
        }
      });
    });
    var Pe = /* @__PURE__ */ NO();
    Object.keys(Pe).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Pe[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Pe[t];
        }
      });
    });
    var Ie = /* @__PURE__ */ br();
    Object.keys(Ie).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ie[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ie[t];
        }
      });
    });
    var Ee = /* @__PURE__ */ YO();
    Object.keys(Ee).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ee[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ee[t];
        }
      });
    });
    var Te = /* @__PURE__ */ Mg();
    Object.keys(Te).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Te[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Te[t];
        }
      });
    });
    var Fe = /* @__PURE__ */ pg();
    Object.keys(Fe).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Fe[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Fe[t];
        }
      });
    });
    var Se = /* @__PURE__ */ WO();
    Object.keys(Se).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Se[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Se[t];
        }
      });
    });
    var qe = /* @__PURE__ */ CO();
    Object.keys(qe).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === qe[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return qe[t];
        }
      });
    });
    var O = /* @__PURE__ */ FO();
    Object.keys(O).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === O[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return O[t];
        }
      });
    });
    var q = /* @__PURE__ */ AO();
    Object.keys(q).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === q[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return q[t];
        }
      });
    });
    var S = /* @__PURE__ */ HO();
    Object.keys(S).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === S[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return S[t];
        }
      });
    });
    var N = /* @__PURE__ */ pf();
    Object.keys(N).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === N[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return N[t];
        }
      });
    });
    var H = /* @__PURE__ */ LO();
    Object.keys(H).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === H[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return H[t];
        }
      });
    });
    var $ = /* @__PURE__ */ yO();
    Object.keys($).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === $[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return $[t];
        }
      });
    });
    var B = /* @__PURE__ */ zO();
    Object.keys(B).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === B[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return B[t];
        }
      });
    });
    var L = /* @__PURE__ */ bf();
    Object.keys(L).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === L[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return L[t];
        }
      });
    });
    var J = /* @__PURE__ */ BO();
    Object.keys(J).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === J[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return J[t];
        }
      });
    });
    var pe = /* @__PURE__ */ QO();
    Object.keys(pe).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === pe[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return pe[t];
        }
      });
    });
    var ie = /* @__PURE__ */ VO();
    Object.keys(ie).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ie[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ie[t];
        }
      });
    });
    var Pr = /* @__PURE__ */ GO();
    Object.keys(Pr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Pr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Pr[t];
        }
      });
    });
    var Ir = /* @__PURE__ */ UO();
    Object.keys(Ir).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ir[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ir[t];
        }
      });
    });
    var Er = /* @__PURE__ */ Of();
    Object.keys(Er).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Er[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Er[t];
        }
      });
    });
    var Tr = /* @__PURE__ */ ZO();
    Object.keys(Tr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Tr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Tr[t];
        }
      });
    });
    var Sr = /* @__PURE__ */ XO();
    Object.keys(Sr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Sr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Sr[t];
        }
      });
    });
    var qr = /* @__PURE__ */ KO();
    Object.keys(qr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === qr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return qr[t];
        }
      });
    });
    var Rr = /* @__PURE__ */ JO();
    Object.keys(Rr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Rr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Rr[t];
        }
      });
    });
    var xr = /* @__PURE__ */ Dg();
    Object.keys(xr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === xr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return xr[t];
        }
      });
    });
    var jr = /* @__PURE__ */ wg();
    Object.keys(jr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === jr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return jr[t];
        }
      });
    });
    var Nr = /* @__PURE__ */ $O();
    Object.keys(Nr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Nr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Nr[t];
        }
      });
    });
    var Yr = /* @__PURE__ */ Sg();
    Object.keys(Yr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Yr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Yr[t];
        }
      });
    });
    var Wr = /* @__PURE__ */ qg();
    Object.keys(Wr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Wr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Wr[t];
        }
      });
    });
    var Cr = /* @__PURE__ */ Rg();
    Object.keys(Cr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Cr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Cr[t];
        }
      });
    });
    var Fr = /* @__PURE__ */ d2();
    Object.keys(Fr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Fr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Fr[t];
        }
      });
    });
    var Ar = /* @__PURE__ */ f2();
    Object.keys(Ar).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ar[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ar[t];
        }
      });
    });
    var Hr = /* @__PURE__ */ l2();
    Object.keys(Hr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Hr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Hr[t];
        }
      });
    });
    var Lr = /* @__PURE__ */ h2();
    Object.keys(Lr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Lr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Lr[t];
        }
      });
    });
    var yr = /* @__PURE__ */ v2();
    Object.keys(yr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === yr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return yr[t];
        }
      });
    });
    var zr = /* @__PURE__ */ m2();
    Object.keys(zr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === zr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return zr[t];
        }
      });
    });
    var Br = /* @__PURE__ */ _2();
    Object.keys(Br).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Br[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Br[t];
        }
      });
    });
    var Qr = /* @__PURE__ */ g2();
    Object.keys(Qr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Qr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Qr[t];
        }
      });
    });
    var Vr = /* @__PURE__ */ b2();
    Object.keys(Vr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Vr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Vr[t];
        }
      });
    });
    var Gr = /* @__PURE__ */ O2();
    Object.keys(Gr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Gr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Gr[t];
        }
      });
    });
    var Ur = /* @__PURE__ */ xg();
    Object.keys(Ur).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ur[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ur[t];
        }
      });
    });
    var Zr = /* @__PURE__ */ pr();
    Object.keys(Zr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Zr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Zr[t];
        }
      });
    });
    var Xr = /* @__PURE__ */ Pg();
    Object.keys(Xr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Xr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Xr[t];
        }
      });
    });
    var Kr = /* @__PURE__ */ jg();
    Object.keys(Kr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Kr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Kr[t];
        }
      });
    });
    var Jr = /* @__PURE__ */ M2();
    Object.keys(Jr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Jr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Jr[t];
        }
      });
    });
    var $r = /* @__PURE__ */ p2();
    Object.keys($r).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === $r[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return $r[t];
        }
      });
    });
    var kr = /* @__PURE__ */ Yg();
    Object.keys(kr).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === kr[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return kr[t];
        }
      });
    });
    var en = /* @__PURE__ */ w2();
    Object.keys(en).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === en[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return en[t];
        }
      });
    });
    var tn = /* @__PURE__ */ Wg();
    Object.keys(tn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === tn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return tn[t];
        }
      });
    });
    var rn = /* @__PURE__ */ Df();
    Object.keys(rn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === rn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return rn[t];
        }
      });
    });
    var nn = /* @__PURE__ */ Je();
    Object.keys(nn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === nn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return nn[t];
        }
      });
    });
    var an = /* @__PURE__ */ D2();
    Object.keys(an).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === an[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return an[t];
        }
      });
    });
    var on = /* @__PURE__ */ P2();
    Object.keys(on).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === on[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return on[t];
        }
      });
    });
    var un = /* @__PURE__ */ I2();
    Object.keys(un).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === un[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return un[t];
        }
      });
    });
    var sn = /* @__PURE__ */ E2();
    Object.keys(sn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === sn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return sn[t];
        }
      });
    });
    var cn = /* @__PURE__ */ T2();
    Object.keys(cn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === cn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return cn[t];
        }
      });
    });
    var dn = /* @__PURE__ */ _g();
    Object.keys(dn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === dn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return dn[t];
        }
      });
    });
    var fn = /* @__PURE__ */ S2();
    Object.keys(fn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === fn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return fn[t];
        }
      });
    });
    var ln = /* @__PURE__ */ q2();
    Object.keys(ln).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ln[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ln[t];
        }
      });
    });
    var hn = /* @__PURE__ */ R2();
    Object.keys(hn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === hn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return hn[t];
        }
      });
    });
    var vn = /* @__PURE__ */ If();
    Object.keys(vn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === vn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return vn[t];
        }
      });
    });
    var mn = /* @__PURE__ */ x2();
    Object.keys(mn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === mn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return mn[t];
        }
      });
    });
    var _n = /* @__PURE__ */ Mr();
    Object.keys(_n).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === _n[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return _n[t];
        }
      });
    });
    var gn = /* @__PURE__ */ j2();
    Object.keys(gn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === gn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return gn[t];
        }
      });
    });
    var bn = /* @__PURE__ */ N2();
    Object.keys(bn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === bn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return bn[t];
        }
      });
    });
    var On = /* @__PURE__ */ Y2();
    Object.keys(On).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === On[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return On[t];
        }
      });
    });
    var Mn = /* @__PURE__ */ W2();
    Object.keys(Mn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Mn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Mn[t];
        }
      });
    });
    var pn = /* @__PURE__ */ C2();
    Object.keys(pn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === pn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return pn[t];
        }
      });
    });
    var wn = /* @__PURE__ */ F2();
    Object.keys(wn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === wn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return wn[t];
        }
      });
    });
    var Dn = /* @__PURE__ */ A2();
    Object.keys(Dn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Dn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Dn[t];
        }
      });
    });
    var Pn = /* @__PURE__ */ H2();
    Object.keys(Pn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Pn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Pn[t];
        }
      });
    });
    var In = /* @__PURE__ */ L2();
    Object.keys(In).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === In[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return In[t];
        }
      });
    });
    var En = /* @__PURE__ */ y2();
    Object.keys(En).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === En[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return En[t];
        }
      });
    });
    var Tn = /* @__PURE__ */ z2();
    Object.keys(Tn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Tn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Tn[t];
        }
      });
    });
    var Sn = /* @__PURE__ */ vg();
    Object.keys(Sn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Sn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Sn[t];
        }
      });
    });
    var qn = /* @__PURE__ */ B2();
    Object.keys(qn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === qn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return qn[t];
        }
      });
    });
    var Rn = /* @__PURE__ */ Q2();
    Object.keys(Rn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Rn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Rn[t];
        }
      });
    });
    var xn = /* @__PURE__ */ V2();
    Object.keys(xn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === xn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return xn[t];
        }
      });
    });
    var jn = /* @__PURE__ */ G2();
    Object.keys(jn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === jn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return jn[t];
        }
      });
    });
    var Nn = /* @__PURE__ */ U2();
    Object.keys(Nn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Nn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Nn[t];
        }
      });
    });
    var Yn = /* @__PURE__ */ Og();
    Object.keys(Yn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Yn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Yn[t];
        }
      });
    });
    var Wn = /* @__PURE__ */ Ng();
    Object.keys(Wn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Wn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Wn[t];
        }
      });
    });
    var Cn = /* @__PURE__ */ EM();
    Object.keys(Cn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Cn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Cn[t];
        }
      });
    });
    var Fn = /* @__PURE__ */ TM();
    Object.keys(Fn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Fn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Fn[t];
        }
      });
    });
    var An = /* @__PURE__ */ SM();
    Object.keys(An).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === An[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return An[t];
        }
      });
    });
    var Hn = /* @__PURE__ */ gt();
    Object.keys(Hn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Hn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Hn[t];
        }
      });
    });
    var Ln = /* @__PURE__ */ Qg();
    Object.keys(Ln).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ln[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ln[t];
        }
      });
    });
    var yn = /* @__PURE__ */ Vg();
    Object.keys(yn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === yn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return yn[t];
        }
      });
    });
    var zn = /* @__PURE__ */ qM();
    Object.keys(zn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === zn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return zn[t];
        }
      });
    });
    var Bn = /* @__PURE__ */ Ug();
    Object.keys(Bn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Bn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Bn[t];
        }
      });
    });
    var Qn = /* @__PURE__ */ Zg();
    Object.keys(Qn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Qn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Qn[t];
        }
      });
    });
    var Vn = /* @__PURE__ */ Xg();
    Object.keys(Vn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Vn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Vn[t];
        }
      });
    });
    var Gn = /* @__PURE__ */ Jg();
    Object.keys(Gn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Gn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Gn[t];
        }
      });
    });
    var Un = /* @__PURE__ */ Ef();
    Object.keys(Un).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Un[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Un[t];
        }
      });
    });
    var Zn = /* @__PURE__ */ $g();
    Object.keys(Zn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Zn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Zn[t];
        }
      });
    });
    var Xn = /* @__PURE__ */ ng();
    Object.keys(Xn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Xn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Xn[t];
        }
      });
    });
    var Kn = /* @__PURE__ */ ag();
    Object.keys(Kn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Kn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Kn[t];
        }
      });
    });
    var Jn = /* @__PURE__ */ RM();
    Object.keys(Jn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Jn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Jn[t];
        }
      });
    });
    var $n = /* @__PURE__ */ xM();
    Object.keys($n).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === $n[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return $n[t];
        }
      });
    });
    var kn = /* @__PURE__ */ jM();
    Object.keys(kn).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === kn[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return kn[t];
        }
      });
    });
    var ea = /* @__PURE__ */ NM();
    Object.keys(ea).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ea[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ea[t];
        }
      });
    });
    var ta = /* @__PURE__ */ YM();
    Object.keys(ta).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ta[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ta[t];
        }
      });
    });
    var ra = /* @__PURE__ */ WM();
    Object.keys(ra).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ra[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ra[t];
        }
      });
    });
    var na = /* @__PURE__ */ CM();
    Object.keys(na).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === na[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return na[t];
        }
      });
    });
    var aa = /* @__PURE__ */ FM();
    Object.keys(aa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === aa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return aa[t];
        }
      });
    });
    var ia = /* @__PURE__ */ AM();
    Object.keys(ia).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ia[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ia[t];
        }
      });
    });
    var oa = /* @__PURE__ */ HM();
    Object.keys(oa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === oa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return oa[t];
        }
      });
    });
    var ua = /* @__PURE__ */ LM();
    Object.keys(ua).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ua[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ua[t];
        }
      });
    });
    var sa = /* @__PURE__ */ yM();
    Object.keys(sa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === sa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return sa[t];
        }
      });
    });
    var ca = /* @__PURE__ */ Ve();
    Object.keys(ca).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ca[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ca[t];
        }
      });
    });
    var da = /* @__PURE__ */ zM();
    Object.keys(da).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === da[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return da[t];
        }
      });
    });
    var fa = /* @__PURE__ */ hr();
    Object.keys(fa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === fa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return fa[t];
        }
      });
    });
    var la = /* @__PURE__ */ BM();
    Object.keys(la).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === la[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return la[t];
        }
      });
    });
    var ha = /* @__PURE__ */ QM();
    Object.keys(ha).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ha[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ha[t];
        }
      });
    });
    var va = /* @__PURE__ */ VM();
    Object.keys(va).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === va[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return va[t];
        }
      });
    });
    var ma = /* @__PURE__ */ GM();
    Object.keys(ma).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ma[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ma[t];
        }
      });
    });
    var _a = /* @__PURE__ */ UM();
    Object.keys(_a).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === _a[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return _a[t];
        }
      });
    });
    var ga = /* @__PURE__ */ Cg();
    Object.keys(ga).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ga[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ga[t];
        }
      });
    });
    var ba = /* @__PURE__ */ ZM();
    Object.keys(ba).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ba[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ba[t];
        }
      });
    });
    var Oa = /* @__PURE__ */ kg();
    Object.keys(Oa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Oa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Oa[t];
        }
      });
    });
    var Ma = /* @__PURE__ */ XM();
    Object.keys(Ma).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ma[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ma[t];
        }
      });
    });
    var pa = /* @__PURE__ */ KM();
    Object.keys(pa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === pa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return pa[t];
        }
      });
    });
    var wa = /* @__PURE__ */ fg();
    Object.keys(wa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === wa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return wa[t];
        }
      });
    });
    var Da = /* @__PURE__ */ JM();
    Object.keys(Da).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Da[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Da[t];
        }
      });
    });
    var Pa = /* @__PURE__ */ $M();
    Object.keys(Pa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Pa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Pa[t];
        }
      });
    });
    var Ia = /* @__PURE__ */ kM();
    Object.keys(Ia).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ia[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ia[t];
        }
      });
    });
    var Ea = /* @__PURE__ */ ep();
    Object.keys(Ea).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ea[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ea[t];
        }
      });
    });
    var Ta = /* @__PURE__ */ lg();
    Object.keys(Ta).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ta[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ta[t];
        }
      });
    });
    var Sa = /* @__PURE__ */ tp();
    Object.keys(Sa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Sa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Sa[t];
        }
      });
    });
    var qa = /* @__PURE__ */ rp();
    Object.keys(qa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === qa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return qa[t];
        }
      });
    });
    var Ra = /* @__PURE__ */ np();
    Object.keys(Ra).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ra[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ra[t];
        }
      });
    });
    var xa = /* @__PURE__ */ ap();
    Object.keys(xa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === xa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return xa[t];
        }
      });
    });
    var ja = /* @__PURE__ */ ip();
    Object.keys(ja).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ja[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ja[t];
        }
      });
    });
    var Na = /* @__PURE__ */ Ue();
    Object.keys(Na).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Na[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Na[t];
        }
      });
    });
    var Ya = /* @__PURE__ */ op();
    Object.keys(Ya).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ya[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ya[t];
        }
      });
    });
    var Wa = /* @__PURE__ */ up();
    Object.keys(Wa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Wa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Wa[t];
        }
      });
    });
    var Ca = /* @__PURE__ */ sp();
    Object.keys(Ca).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ca[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ca[t];
        }
      });
    });
    var Fa = /* @__PURE__ */ cp();
    Object.keys(Fa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Fa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Fa[t];
        }
      });
    });
    var Aa = /* @__PURE__ */ dp();
    Object.keys(Aa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Aa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Aa[t];
        }
      });
    });
    var Ha = /* @__PURE__ */ fp();
    Object.keys(Ha).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ha[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ha[t];
        }
      });
    });
    var La = /* @__PURE__ */ lp();
    Object.keys(La).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === La[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return La[t];
        }
      });
    });
    var ya = /* @__PURE__ */ zg();
    Object.keys(ya).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ya[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ya[t];
        }
      });
    });
    var za = /* @__PURE__ */ hp();
    Object.keys(za).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === za[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return za[t];
        }
      });
    });
    var Ba = /* @__PURE__ */ vp();
    Object.keys(Ba).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ba[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ba[t];
        }
      });
    });
    var Qa = /* @__PURE__ */ Ze();
    Object.keys(Qa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Qa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Qa[t];
        }
      });
    });
    var Va = /* @__PURE__ */ mp();
    Object.keys(Va).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Va[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Va[t];
        }
      });
    });
    var Ga = /* @__PURE__ */ _p();
    Object.keys(Ga).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ga[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ga[t];
        }
      });
    });
    var Ua = /* @__PURE__ */ gp();
    Object.keys(Ua).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ua[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ua[t];
        }
      });
    });
    var Za = /* @__PURE__ */ bp();
    Object.keys(Za).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Za[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Za[t];
        }
      });
    });
    var Xa = /* @__PURE__ */ Op();
    Object.keys(Xa).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Xa[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Xa[t];
        }
      });
    });
    var Ka = /* @__PURE__ */ Mp();
    Object.keys(Ka).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ka[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ka[t];
        }
      });
    });
    var Ja = /* @__PURE__ */ pp();
    Object.keys(Ja).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ja[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ja[t];
        }
      });
    });
    var $a = /* @__PURE__ */ wp();
    Object.keys($a).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === $a[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return $a[t];
        }
      });
    });
    var ka = /* @__PURE__ */ Dp();
    Object.keys(ka).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ka[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ka[t];
        }
      });
    });
    var ei = /* @__PURE__ */ Pp();
    Object.keys(ei).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ei[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ei[t];
        }
      });
    });
    var ti = /* @__PURE__ */ Ip();
    Object.keys(ti).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ti[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ti[t];
        }
      });
    });
    var ri = /* @__PURE__ */ Ep();
    Object.keys(ri).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ri[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ri[t];
        }
      });
    });
    var ni = /* @__PURE__ */ Tp();
    Object.keys(ni).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ni[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ni[t];
        }
      });
    });
    var ai = /* @__PURE__ */ Sp();
    Object.keys(ai).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ai[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ai[t];
        }
      });
    });
    var ii = /* @__PURE__ */ qp();
    Object.keys(ii).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ii[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ii[t];
        }
      });
    });
    var oi = /* @__PURE__ */ Rp();
    Object.keys(oi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === oi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return oi[t];
        }
      });
    });
    var ui = /* @__PURE__ */ wr();
    Object.keys(ui).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ui[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ui[t];
        }
      });
    });
    var si = /* @__PURE__ */ xp();
    Object.keys(si).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === si[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return si[t];
        }
      });
    });
    var ci = /* @__PURE__ */ jp();
    Object.keys(ci).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ci[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ci[t];
        }
      });
    });
    var di = /* @__PURE__ */ Np();
    Object.keys(di).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === di[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return di[t];
        }
      });
    });
    var fi = /* @__PURE__ */ yg();
    Object.keys(fi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === fi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return fi[t];
        }
      });
    });
    var li = /* @__PURE__ */ Lg();
    Object.keys(li).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === li[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return li[t];
        }
      });
    });
    var hi = /* @__PURE__ */ ug();
    Object.keys(hi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === hi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return hi[t];
        }
      });
    });
    var vi = /* @__PURE__ */ Yp();
    Object.keys(vi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === vi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return vi[t];
        }
      });
    });
    var mi = /* @__PURE__ */ Wp();
    Object.keys(mi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === mi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return mi[t];
        }
      });
    });
    var _i = /* @__PURE__ */ Tf();
    Object.keys(_i).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === _i[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return _i[t];
        }
      });
    });
    var gi = /* @__PURE__ */ Cp();
    Object.keys(gi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === gi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return gi[t];
        }
      });
    });
    var bi = /* @__PURE__ */ Fp();
    Object.keys(bi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === bi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return bi[t];
        }
      });
    });
    var Oi = /* @__PURE__ */ Hg();
    Object.keys(Oi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Oi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Oi[t];
        }
      });
    });
    var Mi = /* @__PURE__ */ Ap();
    Object.keys(Mi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Mi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Mi[t];
        }
      });
    });
    var pi = /* @__PURE__ */ Hp();
    Object.keys(pi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === pi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return pi[t];
        }
      });
    });
    var wi = /* @__PURE__ */ mr();
    Object.keys(wi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === wi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return wi[t];
        }
      });
    });
    var Di = /* @__PURE__ */ Lp();
    Object.keys(Di).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Di[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Di[t];
        }
      });
    });
    var Pi = /* @__PURE__ */ Bg();
    Object.keys(Pi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Pi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Pi[t];
        }
      });
    });
    var Ii = /* @__PURE__ */ We();
    Object.keys(Ii).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ii[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ii[t];
        }
      });
    });
    var Ei = /* @__PURE__ */ _t();
    Object.keys(Ei).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ei[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ei[t];
        }
      });
    });
    var Ti = /* @__PURE__ */ Gg();
    Object.keys(Ti).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ti[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ti[t];
        }
      });
    });
    var Si = /* @__PURE__ */ Or();
    Object.keys(Si).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Si[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Si[t];
        }
      });
    });
    var qi = /* @__PURE__ */ Mf();
    Object.keys(qi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === qi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return qi[t];
        }
      });
    });
    var Ri = /* @__PURE__ */ Kg();
    Object.keys(Ri).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ri[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ri[t];
        }
      });
    });
    var xi = /* @__PURE__ */ yp();
    Object.keys(xi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === xi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return xi[t];
        }
      });
    });
    var ji = /* @__PURE__ */ zp();
    Object.keys(ji).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ji[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ji[t];
        }
      });
    });
    var Ni = /* @__PURE__ */ Re();
    Object.keys(Ni).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ni[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ni[t];
        }
      });
    });
    var Yi = /* @__PURE__ */ Pf();
    Object.keys(Yi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Yi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Yi[t];
        }
      });
    });
    var Wi = /* @__PURE__ */ wf();
    Object.keys(Wi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Wi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Wi[t];
        }
      });
    });
    var Ci = /* @__PURE__ */ Bp();
    Object.keys(Ci).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ci[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ci[t];
        }
      });
    });
    var Fi = /* @__PURE__ */ Qp();
    Object.keys(Fi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Fi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Fi[t];
        }
      });
    });
    var Ai = /* @__PURE__ */ Vp();
    Object.keys(Ai).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ai[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ai[t];
        }
      });
    });
    var Hi = /* @__PURE__ */ Dr();
    Object.keys(Hi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Hi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Hi[t];
        }
      });
    });
    var Li = /* @__PURE__ */ Gp();
    Object.keys(Li).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Li[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Li[t];
        }
      });
    });
    var yi = /* @__PURE__ */ bg();
    Object.keys(yi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === yi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return yi[t];
        }
      });
    });
    var zi = /* @__PURE__ */ Up();
    Object.keys(zi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === zi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return zi[t];
        }
      });
    });
    var Bi = /* @__PURE__ */ Zp();
    Object.keys(Bi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Bi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Bi[t];
        }
      });
    });
    var Qi = /* @__PURE__ */ eb();
    Object.keys(Qi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Qi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Qi[t];
        }
      });
    });
    var Vi = /* @__PURE__ */ Xp();
    Object.keys(Vi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Vi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Vi[t];
        }
      });
    });
    var Gi = /* @__PURE__ */ Kp();
    Object.keys(Gi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Gi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Gi[t];
        }
      });
    });
    var Ui = /* @__PURE__ */ Jp();
    Object.keys(Ui).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ui[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ui[t];
        }
      });
    });
    var Zi = /* @__PURE__ */ $p();
    Object.keys(Zi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Zi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Zi[t];
        }
      });
    });
    var Xi = /* @__PURE__ */ w();
    Object.keys(Xi).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Xi[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Xi[t];
        }
      });
    });
    var Ki = /* @__PURE__ */ Fg();
    Object.keys(Ki).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ki[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ki[t];
        }
      });
    });
    var Ji = /* @__PURE__ */ kp();
    Object.keys(Ji).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === Ji[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return Ji[t];
        }
      });
    });
    var $i = /* @__PURE__ */ ew();
    Object.keys($i).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === $i[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return $i[t];
        }
      });
    });
    var ki = /* @__PURE__ */ tw();
    Object.keys(ki).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === ki[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return ki[t];
        }
      });
    });
    var eo = /* @__PURE__ */ rw();
    Object.keys(eo).forEach(function(t) {
      t === "default" || t === "__esModule" || t in e && e[t] === eo[t] || Object.defineProperty(e, t, {
        enumerable: !0,
        get: function() {
          return eo[t];
        }
      });
    });
  })(uo)), uo;
}
var T_;
function aw() {
  return T_ || (T_ = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.DateMethods = je.Helper = je.Use = void 0, je.Use = tg(), je.Helper = PO(), je.DateMethods = /* @__PURE__ */ nw()), je;
}
var et = aw();
const iw = ["open"], ow = { class: "accordion__header" }, uw = { class: "accordion__title | text-truncate" }, sw = { class: "accordion__content" }, cw = /* @__PURE__ */ fe({
  __name: "TAccordion",
  props: {
    title: {},
    open: { type: Boolean }
  },
  emits: ["toggle"],
  setup(e, { expose: r, emit: n }) {
    const a = R_(et.Use.NULL), i = e, o = n;
    return r({
      open() {
        a.value && (a.value.open = et.Use.TRUE);
      },
      close() {
        a.value && (a.value.open = et.Use.FALSE);
      }
    }), (u, s) => (D(), T("details", {
      ref_key: "accordion",
      ref: a,
      open: i.open,
      class: "accordion",
      onToggle: s[0] || (s[0] = (c) => o("toggle", c))
    }, [
      b("summary", ow, [
        b("h4", uw, Oe(i.title), 1),
        ft(sf, { class: "accordion__chevron" })
      ]),
      b("div", sw, [
        he(u.$slots, "default", {}, void 0, !0)
      ])
    ], 40, iw));
  }
}), dw = /* @__PURE__ */ R(cw, [["__scopeId", "data-v-3ab839ca"]]), fw = { class: "breadcrumb" }, lw = { class: "breadcrumb__list" }, hw = ["data-divider"], vw = { class: "breadcrumb__route-caption | text-truncate" }, mw = { class: "breadcrumb__current | text-truncate" }, _w = /* @__PURE__ */ fe({
  __name: "TBreadCrumb",
  props: {
    current: {},
    routes: {},
    divider: {}
  },
  setup(e) {
    const r = e;
    return (n, a) => (D(), T("nav", fw, [
      b("ul", lw, [
        (D(!0), T(ht, null, vt(r.routes, (i, o) => (D(), T("li", {
          key: o,
          "data-divider": r.divider ?? "/",
          class: "breadcrumb__route"
        }, [
          ft(fr, {
            route: i.route,
            class: "breadcrumb__route-hyperlink"
          }, {
            default: ze(() => [
              (D(), be(lt(i.icon), { class: "breadcrumb__route-caption" })),
              b("span", vw, Oe(i.caption), 1)
            ]),
            _: 2
          }, 1032, ["route"])
        ], 8, hw))), 128)),
        b("li", mw, Oe(r.current), 1)
      ])
    ]));
  }
}), gw = /* @__PURE__ */ R(_w, [["__scopeId", "data-v-f4ff0974"]]), bw = {
  key: 0,
  class: "combo-box__option",
  value: null
}, Ow = ["value"], Mw = /* @__PURE__ */ fe({
  __name: "TComboBox",
  props: /* @__PURE__ */ sr({
    caption: {},
    allowNull: { type: Boolean },
    options: {}
  }, {
    modelValue: { default: null },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const r = nf(e, "modelValue"), n = e;
    return (a, i) => (D(), be(lr, {
      caption: n.caption
    }, {
      default: ze(() => [
        af(b("select", {
          "onUpdate:modelValue": i[0] || (i[0] = (o) => r.value = o),
          class: "combo-box"
        }, [
          i[1] || (i[1] = b("option", {
            disabled: "",
            class: "combo-box__option",
            value: null
          }, " Selecciona un elemento ", -1)),
          n.allowNull ? (D(), T("option", bw, " Ninguno/a ")) : me("", !0),
          (D(!0), T(ht, null, vt(n.options, (o, u) => (D(), T("option", {
            key: u,
            value: o.value,
            class: "combo-box__option"
          }, Oe(o.label), 9, Ow))), 128))
        ], 512), [
          [fb, r.value]
        ])
      ]),
      _: 1
    }, 8, ["caption"]));
  }
}), pw = /* @__PURE__ */ R(Mw, [["__scopeId", "data-v-d7a7f65e"]]), ww = { class: "edit__container" }, Dw = ["type", "placeholder", "required", "disabled", "min", "max", "minlength", "maxlength", "pattern"], Pw = /* @__PURE__ */ fe({
  __name: "TEdit",
  props: /* @__PURE__ */ sr({
    type: {},
    caption: {},
    icon: {},
    placeholder: {},
    required: { type: Boolean },
    disabled: { type: Boolean },
    min: {},
    max: {},
    minlength: {},
    maxlength: {},
    pattern: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ sr(["input", "beforeinput", "blur", "change", "focus", "click", "paste", "keypress"], ["update:modelValue"]),
  setup(e, { emit: r }) {
    const n = e, a = r, i = nf(e, "modelValue");
    return (o, u) => (D(), be(lr, {
      caption: n.caption,
      class: "edit"
    }, {
      default: ze(() => [
        b("div", ww, [
          (D(), be(lt(n.icon), { class: "edit__icon" })),
          af(b("input", {
            class: "edit__field",
            "onUpdate:modelValue": u[0] || (u[0] = (s) => i.value = s),
            type: n.type,
            placeholder: n.placeholder,
            required: n.required,
            disabled: n.disabled,
            min: n.min,
            max: n.max,
            minlength: n.minlength,
            maxlength: n.maxlength,
            pattern: n.pattern,
            onInput: u[1] || (u[1] = (s) => a("input", s)),
            onBeforeinput: u[2] || (u[2] = (s) => a("beforeinput", s)),
            onBlur: u[3] || (u[3] = (s) => a("blur", s)),
            onChange: u[4] || (u[4] = (s) => a("change", s)),
            onFocus: u[5] || (u[5] = (s) => a("focus", s)),
            onClick: u[6] || (u[6] = (s) => a("click", s)),
            onPaste: u[7] || (u[7] = (s) => a("paste", s)),
            onKeypress: u[8] || (u[8] = (s) => a("keypress", s))
          }, null, 40, Dw), [
            [lb, i.value]
          ])
        ])
      ]),
      _: 1
    }, 8, ["caption"]));
  }
}), Iw = /* @__PURE__ */ R(Pw, [["__scopeId", "data-v-4103ec78"]]), Ew = {}, Tw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-x"
};
function Sw(e, r) {
  return D(), T("svg", Tw, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M18 6l-12 12" }, null, -1),
    b("path", { d: "M6 6l12 12" }, null, -1)
  ])]);
}
const tb = /* @__PURE__ */ R(Ew, [["render", Sw]]), qw = { class: "form-dialog__header" }, Rw = { class: "form-dialog__container" }, xw = { class: "form-dialog__title" }, jw = {
  key: 0,
  class: "form-dialog__description | text-truncate-multiline"
}, Nw = { class: "form-dialog__content" }, Yw = /* @__PURE__ */ fe({
  __name: "TFormDialog",
  props: {
    title: {},
    description: {}
  },
  emits: ["submit", "cancel", "reset"],
  setup(e, { emit: r }) {
    const n = e, a = r;
    return (i, o) => (D(), be(eg, {
      class: "form-dialog",
      onSubmit: o[1] || (o[1] = (u) => a("submit", u)),
      onReset: o[2] || (o[2] = (u) => a("reset", u))
    }, {
      default: ze(() => [
        b("header", qw, [
          b("div", Rw, [
            b("h4", xw, Oe(n.title), 1),
            n.description ? (D(), T("p", jw, Oe(n.description), 1)) : me("", !0)
          ]),
          ft(tb, {
            class: "form-dialog__icon",
            onClick: o[0] || (o[0] = (u) => a("cancel"))
          })
        ]),
        b("div", Nw, [
          he(i.$slots, "default", {}, void 0, !0)
        ])
      ]),
      _: 3
    }));
  }
}), Ww = /* @__PURE__ */ R(Yw, [["__scopeId", "data-v-4c42a30a"]]), Cw = ["maxlength"], Fw = { class: "memo__counter" }, Aw = { key: 0 }, Hw = /* @__PURE__ */ fe({
  __name: "TMemo",
  props: /* @__PURE__ */ sr({
    caption: {},
    maxLength: {}
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const r = nf(e, "modelValue"), n = e, a = De(() => r.value.length);
    return (i, o) => (D(), be(lr, {
      caption: n.caption,
      class: "memo"
    }, {
      default: ze(() => [
        af(b("textarea", {
          "onUpdate:modelValue": o[0] || (o[0] = (u) => r.value = u),
          maxlength: e.maxLength,
          class: "memo__field"
        }, null, 8, Cw), [
          [hb, r.value]
        ]),
        b("small", Fw, [
          b("span", null, Oe(a.value), 1),
          e.maxLength ? (D(), T("span", Aw, " / " + Oe(e.maxLength), 1)) : me("", !0)
        ])
      ]),
      _: 1
    }, 8, ["caption"]));
  }
}), Lw = /* @__PURE__ */ R(Hw, [["__scopeId", "data-v-e55b7f4f"]]), yw = { class: "sidebar-item" }, zw = {
  key: 0,
  class: "sidebar-item__caption"
}, Bw = { class: "sidebar-item__content" }, Qw = { class: "sidebar-item__option-caption" }, Vw = /* @__PURE__ */ fe({
  __name: "TSidebarItem",
  props: {
    caption: {},
    options: {}
  },
  setup(e) {
    const r = e;
    return (n, a) => (D(), T("li", yw, [
      r.caption ? (D(), T("h6", zw, Oe(r.caption), 1)) : me("", !0),
      b("div", Bw, [
        (D(!0), T(ht, null, vt(r.options, (i) => (D(), be(fr, {
          route: i.route,
          class: "sidebar-item__option"
        }, {
          default: ze(() => [
            (D(), be(lt(i.icon))),
            b("span", Qw, Oe(i.caption), 1)
          ]),
          _: 2
        }, 1032, ["route"]))), 256))
      ])
    ]));
  }
}), rb = /* @__PURE__ */ R(Vw, [["__scopeId", "data-v-7a2d8c71"]]), Gw = ["data-orientation"], Uw = ["onClick"], Zw = { class: "menu-item__hyperlink-container" }, Xw = { class: "menu-item__caption | text-truncate" }, Kw = /* @__PURE__ */ fe({
  __name: "TMenu",
  props: {
    items: {},
    orientation: {}
  },
  setup(e) {
    const r = e;
    return vb(() => {
      if (r.orientation === "vertical")
        return;
      document.querySelectorAll('.menu[data-orientation="horizontal"] .menu-item').forEach((i) => {
        if (i.parentElement?.classList.contains("submenu"))
          return;
        const u = i.querySelector(".menu-item__chevron");
        u.style.display = "none";
      });
    }), (n, a) => {
      const i = mb("TMenu", !0);
      return D(), T("ul", {
        class: "menu |",
        "data-orientation": r.orientation ?? "vertical"
      }, [
        (D(!0), T(ht, null, vt(r.items, (o, u) => (D(), T("li", {
          class: "menu-item",
          onClick: o.onClick
        }, [
          ft(fr, {
            route: o.route,
            "data-use-separator": o.useSeparator,
            title: o.caption,
            class: "menu-item__hyperlink | text-truncate"
          }, {
            default: ze(() => [
              b("div", Zw, [
                (D(), be(lt(o.icon), { class: "menu-item__icon" })),
                b("span", Xw, Oe(o.caption), 1)
              ]),
              ft(sf, { class: "menu-item__icon | menu-item__chevron" })
            ]),
            _: 2
          }, 1032, ["route", "data-use-separator", "title"]),
          o.submenu && o.submenu.length ? (D(), be(i, {
            key: u,
            items: o.submenu,
            class: "submenu"
          }, null, 8, ["items"])) : me("", !0)
        ], 8, Uw))), 256))
      ], 8, Gw);
    };
  }
}), Jw = /* @__PURE__ */ R(Kw, [["__scopeId", "data-v-a748fe38"]]), $w = { class: "sidebar" }, kw = /* @__PURE__ */ fe({
  __name: "TSidebar",
  props: {
    items: {}
  },
  setup(e) {
    const r = e;
    return (n, a) => (D(), T("ul", $w, [
      (D(!0), T(ht, null, vt(r.items, (i) => (D(), be(rb, _b({ ref_for: !0 }, i), null, 16))), 256))
    ]));
  }
}), eD = /* @__PURE__ */ R(kw, [["__scopeId", "data-v-55c7629d"]]), tD = {}, rD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-cash"
};
function nD(e, r) {
  return D(), T("svg", rD, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3" }, null, -1),
    b("path", { d: "M7 9m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" }, null, -1),
    b("path", { d: "M12 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1)
  ])]);
}
const aD = /* @__PURE__ */ R(tD, [["render", nD]]), iD = {}, oD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-cash-register"
};
function uD(e, r) {
  return D(), T("svg", oD, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M21 15h-2.5c-.398 0 -.779 .158 -1.061 .439c-.281 .281 -.439 .663 -.439 1.061c0 .398 .158 .779 .439 1.061c.281 .281 .663 .439 1.061 .439h1c.398 0 .779 .158 1.061 .439c.281 .281 .439 .663 .439 1.061c0 .398 -.158 .779 -.439 1.061c-.281 .281 -.663 .439 -1.061 .439h-2.5"></path><path d="M19 21v1m0 -8v1"></path><path d="M13 21h-7c-.53 0 -1.039 -.211 -1.414 -.586c-.375 -.375 -.586 -.884 -.586 -1.414v-10c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h2m12 3.12v-1.12c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2"></path><path d="M16 10v-6c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-4c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414v6m8 0h-8m8 0h1m-9 0h-1"></path><path d="M8 14v.01"></path><path d="M8 17v.01"></path><path d="M12 13.99v.01"></path><path d="M12 17v.01"></path>', 9)
  ])]);
}
const sD = /* @__PURE__ */ R(iD, [["render", uD]]), cD = {}, dD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-calendar-dollar"
};
function fD(e, r) {
  return D(), T("svg", dD, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 21h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3"></path><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M4 11h12.5"></path><path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path><path d="M19 21v1m0 -8v1"></path>', 7)
  ])]);
}
const lD = /* @__PURE__ */ R(cD, [["render", fD]]), hD = {}, vD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-device-desktop"
};
function mD(e, r) {
  return D(), T("svg", vD, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path><path d="M7 20h10"></path><path d="M9 16v4"></path><path d="M15 16v4"></path>', 5)
  ])]);
}
const _D = /* @__PURE__ */ R(hD, [["render", mD]]), gD = {}, bD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-eye"
};
function OD(e, r) {
  return D(), T("svg", bD, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1),
    b("path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" }, null, -1)
  ])]);
}
const MD = /* @__PURE__ */ R(gD, [["render", OD]]), pD = {}, wD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
};
function DD(e, r) {
  return D(), T("svg", wD, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828" }, null, -1),
    b("path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" }, null, -1),
    b("path", { d: "M3 3l18 18" }, null, -1)
  ])]);
}
const PD = /* @__PURE__ */ R(pD, [["render", DD]]), ID = {}, ED = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-search"
};
function TD(e, r) {
  return D(), T("svg", ED, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, null, -1),
    b("path", { d: "M21 21l-6 -6" }, null, -1)
  ])]);
}
const SD = /* @__PURE__ */ R(ID, [["render", TD]]), qD = {}, RD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-tag"
};
function xD(e, r) {
  return D(), T("svg", RD, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    b("path", { d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" }, null, -1)
  ])]);
}
const jD = /* @__PURE__ */ R(qD, [["render", xD]]), ND = {}, YD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-report"
};
function WD(e, r) {
  return D(), T("svg", YD, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"></path><path d="M18 14v4h4"></path><path d="M18 11v-4a2 2 0 0 0 -2 -2h-2"></path><path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M8 11h4"></path><path d="M8 15h3"></path>', 8)
  ])]);
}
const CD = /* @__PURE__ */ R(ND, [["render", WD]]), FD = {}, AD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
};
function HD(e, r) {
  return D(), T("svg", AD, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path>', 5)
  ])]);
}
const LD = /* @__PURE__ */ R(FD, [["render", HD]]), yD = {}, zD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
};
function BD(e, r) {
  return D(), T("svg", zD, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    b("path", { d: "M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, null, -1),
    b("path", { d: "M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" }, null, -1)
  ])]);
}
const QD = /* @__PURE__ */ R(yD, [["render", BD]]), VD = {}, GD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-settings"
};
function UD(e, r) {
  return D(), T("svg", GD, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" }, null, -1),
    b("path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }, null, -1)
  ])]);
}
const ZD = /* @__PURE__ */ R(VD, [["render", UD]]), XD = {}, KD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-plus"
};
function JD(e, r) {
  return D(), T("svg", KD, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M12 5l0 14" }, null, -1),
    b("path", { d: "M5 12l14 0" }, null, -1)
  ])]);
}
const $D = /* @__PURE__ */ R(XD, [["render", JD]]), kD = {}, eP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-pencil"
};
function tP(e, r) {
  return D(), T("svg", eP, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" }, null, -1),
    b("path", { d: "M13.5 6.5l4 4" }, null, -1)
  ])]);
}
const rP = /* @__PURE__ */ R(kD, [["render", tP]]), nP = {}, aP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-receipt-2"
};
function iP(e, r) {
  return D(), T("svg", aP, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" }, null, -1),
    b("path", { d: "M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" }, null, -1)
  ])]);
}
const oP = /* @__PURE__ */ R(nP, [["render", iP]]), uP = {}, sP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-reload"
};
function cP(e, r) {
  return D(), T("svg", sP, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" }, null, -1),
    b("path", { d: "M20 4v5h-5" }, null, -1)
  ])]);
}
const dP = /* @__PURE__ */ R(uP, [["render", cP]]), fP = {}, lP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
};
function hP(e, r) {
  return D(), T("svg", lP, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M5 12l14 0" }, null, -1),
    b("path", { d: "M15 16l4 -4" }, null, -1),
    b("path", { d: "M15 8l4 4" }, null, -1)
  ])]);
}
const vP = /* @__PURE__ */ R(fP, [["render", hP]]), mP = {}, _P = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-receipt"
};
function gP(e, r) {
  return D(), T("svg", _P, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" }, null, -1)
  ])]);
}
const bP = /* @__PURE__ */ R(mP, [["render", gP]]), OP = {}, MP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-credit-card"
};
function pP(e, r) {
  return D(), T("svg", MP, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path><path d="M3 10l18 0"></path><path d="M7 15l.01 0"></path><path d="M11 15l2 0"></path>', 5)
  ])]);
}
const wP = /* @__PURE__ */ R(OP, [["render", pP]]), DP = {}, PP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-lock"
};
function IP(e, r) {
  return D(), T("svg", PP, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" }, null, -1),
    b("path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, null, -1),
    b("path", { d: "M8 11v-4a4 4 0 1 1 8 0v4" }, null, -1)
  ])]);
}
const EP = /* @__PURE__ */ R(DP, [["render", IP]]), TP = {}, SP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-bell"
};
function qP(e, r) {
  return D(), T("svg", SP, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" }, null, -1),
    b("path", { d: "M9 17v1a3 3 0 0 0 6 0v-1" }, null, -1)
  ])]);
}
const RP = /* @__PURE__ */ R(TP, [["render", qP]]), xP = {}, jP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-help"
};
function NP(e, r) {
  return D(), T("svg", jP, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    b("path", { d: "M12 17l0 .01" }, null, -1),
    b("path", { d: "M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" }, null, -1)
  ])]);
}
const YP = /* @__PURE__ */ R(xP, [["render", NP]]), WP = {}, CP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-plug-connected"
};
function FP(e, r) {
  return D(), T("svg", CP, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"></path><path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"></path><path d="M3 21l2.5 -2.5"></path><path d="M18.5 5.5l2.5 -2.5"></path><path d="M10 11l-2 2"></path><path d="M13 14l-2 2"></path>', 7)
  ])]);
}
const AP = /* @__PURE__ */ R(WP, [["render", FP]]), HP = {}, LP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-apps"
};
function yP(e, r) {
  return D(), T("svg", LP, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M14 7l6 0"></path><path d="M17 4l0 6"></path>', 6)
  ])]);
}
const zP = /* @__PURE__ */ R(HP, [["render", yP]]), BP = {}, QP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-building-bank"
};
function VP(e, r) {
  return D(), T("svg", QP, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21l18 0"></path><path d="M3 10l18 0"></path><path d="M5 6l7 -3l7 3"></path><path d="M4 10l0 11"></path><path d="M20 10l0 11"></path><path d="M8 14l0 3"></path><path d="M12 14l0 3"></path><path d="M16 14l0 3"></path>', 9)
  ])]);
}
const GP = /* @__PURE__ */ R(BP, [["render", VP]]), UP = {}, ZP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-check"
};
function XP(e, r) {
  return D(), T("svg", ZP, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M5 12l5 5l10 -10" }, null, -1)
  ])]);
}
const KP = /* @__PURE__ */ R(UP, [["render", XP]]), JP = {}, $P = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-list"
};
function kP(e, r) {
  return D(), T("svg", $P, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l11 0"></path><path d="M9 12l11 0"></path><path d="M9 18l11 0"></path><path d="M5 6l0 .01"></path><path d="M5 12l0 .01"></path><path d="M5 18l0 .01"></path>', 7)
  ])]);
}
const eI = /* @__PURE__ */ R(JP, [["render", kP]]), tI = {}, rI = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-meat"
};
function nI(e, r) {
  return D(), T("svg", rI, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821"></path><path d="M5.904 18.596c2.733 2.734 5.9 4 7.07 2.829c1.172 -1.172 -.094 -4.338 -2.828 -7.071c-2.733 -2.734 -5.9 -4 -7.07 -2.829c-1.172 1.172 .094 4.338 2.828 7.071z"></path><path d="M7.5 16l1 1"></path><path d="M12.975 21.425c3.905 -3.906 4.855 -9.288 2.121 -12.021c-2.733 -2.734 -8.115 -1.784 -12.02 2.121"></path>', 5)
  ])]);
}
const aI = /* @__PURE__ */ R(tI, [["render", nI]]), iI = {}, oI = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-dots"
};
function uI(e, r) {
  return D(), T("svg", oI, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    b("path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    b("path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1)
  ])]);
}
const sI = /* @__PURE__ */ R(iI, [["render", uI]]), cI = {}, dI = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
};
function fI(e, r) {
  return D(), T("svg", dI, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M4 6l16 0" }, null, -1),
    b("path", { d: "M4 12l16 0" }, null, -1),
    b("path", { d: "M4 18l16 0" }, null, -1)
  ])]);
}
const lI = /* @__PURE__ */ R(cI, [["render", fI]]), hI = {}, vI = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-circle-x"
};
function mI(e, r) {
  return D(), T("svg", vI, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    b("path", { d: "M10 10l4 4m0 -4l-4 4" }, null, -1)
  ])]);
}
const _I = /* @__PURE__ */ R(hI, [["render", mI]]), gI = {}, bI = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-trash"
};
function OI(e, r) {
  return D(), T("svg", bI, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7l16 0"></path><path d="M10 11l0 6"></path><path d="M14 11l0 6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>', 6)
  ])]);
}
const MI = /* @__PURE__ */ R(gI, [["render", OI]]), pI = {}, wI = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-calendar"
};
function DI(e, r) {
  return D(), T("svg", wI, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M4 11h16"></path><path d="M11 15h1"></path><path d="M12 15v3"></path>', 7)
  ])]);
}
const PI = /* @__PURE__ */ R(pI, [["render", DI]]), II = {}, EI = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-logout"
};
function TI(e, r) {
  return D(), T("svg", EI, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" }, null, -1),
    b("path", { d: "M9 12h12l-3 -3" }, null, -1),
    b("path", { d: "M18 15l3 -3" }, null, -1)
  ])]);
}
const SI = /* @__PURE__ */ R(II, [["render", TI]]), qI = {}, RI = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-mail"
};
function xI(e, r) {
  return D(), T("svg", RI, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" }, null, -1),
    b("path", { d: "M3 7l9 6l9 -6" }, null, -1)
  ])]);
}
const jI = /* @__PURE__ */ R(qI, [["render", xI]]), NI = {}, YI = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-phone"
};
function WI(e, r) {
  return D(), T("svg", YI, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" }, null, -1)
  ])]);
}
const CI = /* @__PURE__ */ R(NI, [["render", WI]]), FI = {}, AI = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-users-group"
};
function HI(e, r) {
  return D(), T("svg", AI, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M17 10h2a2 2 0 0 1 2 2v1"></path><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path>', 7)
  ])]);
}
const LI = /* @__PURE__ */ R(FI, [["render", HI]]), yI = {}, zI = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-scan"
};
function BI(e, r) {
  return D(), T("svg", zI, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7v-1a2 2 0 0 1 2 -2h2"></path><path d="M4 17v1a2 2 0 0 0 2 2h2"></path><path d="M16 4h2a2 2 0 0 1 2 2v1"></path><path d="M16 20h2a2 2 0 0 0 2 -2v-1"></path><path d="M5 12l14 0"></path>', 6)
  ])]);
}
const QI = /* @__PURE__ */ R(yI, [["render", BI]]), VI = {}, GI = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-abc"
};
function UI(e, r) {
  return D(), T("svg", GI, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 16v-6a2 2 0 1 1 4 0v6"></path><path d="M3 13h4"></path><path d="M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1"></path><path d="M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01"></path>', 5)
  ])]);
}
const ZI = /* @__PURE__ */ R(VI, [["render", UI]]), XI = {}, KI = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-number-123"
};
function JI(e, r) {
  return D(), T("svg", KI, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M3 10l2 -2v8" }, null, -1),
    b("path", { d: "M9 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" }, null, -1),
    b("path", { d: "M17 8h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5" }, null, -1)
  ])]);
}
const $I = /* @__PURE__ */ R(XI, [["render", JI]]), kI = {}, eE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-currency-dollar"
};
function tE(e, r) {
  return D(), T("svg", eE, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" }, null, -1),
    b("path", { d: "M12 3v3m0 12v3" }, null, -1)
  ])]);
}
const rE = /* @__PURE__ */ R(kI, [["render", tE]]), nE = {}, aE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"
};
function iE(e, r) {
  return D(), T("svg", aE, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M5 12l14 0" }, null, -1),
    b("path", { d: "M5 12l4 4" }, null, -1),
    b("path", { d: "M5 12l4 -4" }, null, -1)
  ])]);
}
const oE = /* @__PURE__ */ R(nE, [["render", iE]]), uE = {}, sE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up"
};
function cE(e, r) {
  return D(), T("svg", sE, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M12 5l0 14" }, null, -1),
    b("path", { d: "M16 9l-4 -4" }, null, -1),
    b("path", { d: "M8 9l4 -4" }, null, -1)
  ])]);
}
const dE = /* @__PURE__ */ R(uE, [["render", cE]]), fE = {}, lE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-down"
};
function hE(e, r) {
  return D(), T("svg", lE, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M12 5l0 14" }, null, -1),
    b("path", { d: "M16 15l-4 4" }, null, -1),
    b("path", { d: "M8 15l4 4" }, null, -1)
  ])]);
}
const vE = /* @__PURE__ */ R(fE, [["render", hE]]), mE = {}, _E = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-home"
};
function gE(e, r) {
  return D(), T("svg", _E, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M5 12l-2 0l9 -9l9 9l-2 0" }, null, -1),
    b("path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" }, null, -1),
    b("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" }, null, -1)
  ])]);
}
const bE = /* @__PURE__ */ R(mE, [["render", gE]]), OE = {}, ME = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-ruler-measure-2"
};
function pE(e, r) {
  return D(), T("svg", ME, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 19.875c0 .621 -.512 1.125 -1.143 1.125h-5.714a1.134 1.134 0 0 1 -1.143 -1.125v-15.875a1 1 0 0 1 1 -1h5.857c.631 0 1.143 .504 1.143 1.125l0 15.75"></path><path d="M12 9h-2"></path><path d="M12 6h-3"></path><path d="M12 12h-3"></path><path d="M12 18h-3"></path><path d="M12 15h-2"></path><path d="M21 3h-4"></path><path d="M19 3v18"></path><path d="M21 21h-4"></path>', 10)
  ])]);
}
const wE = /* @__PURE__ */ R(OE, [["render", pE]]), DE = {}, PE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-scale"
};
function IE(e, r) {
  return D(), T("svg", PE, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 20l10 0"></path><path d="M6 6l6 -1l6 1"></path><path d="M12 3l0 17"></path><path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path><path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path>', 6)
  ])]);
}
const EE = /* @__PURE__ */ R(DE, [["render", IE]]), TE = {}, SE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-list-search"
};
function qE(e, r) {
  return D(), T("svg", SE, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M18.5 18.5l2.5 2.5"></path><path d="M4 6h16"></path><path d="M4 12h4"></path><path d="M4 18h4"></path>', 6)
  ])]);
}
const RE = /* @__PURE__ */ R(TE, [["render", qE]]), xE = {}, jE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-list-check"
};
function NE(e, r) {
  return D(), T("svg", jE, [...r[0] || (r[0] = [
    ae('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path><path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path><path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path><path d="M11 6l9 0"></path><path d="M11 12l9 0"></path><path d="M11 18l9 0"></path>', 7)
  ])]);
}
const YE = /* @__PURE__ */ R(xE, [["render", NE]]), WE = {}, CE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon icon-tabler icons-tabler-outline icon-tabler-clock"
};
function FE(e, r) {
  return D(), T("svg", CE, [...r[0] || (r[0] = [
    b("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    b("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }, null, -1),
    b("path", { d: "M12 7v5l3 3" }, null, -1)
  ])]);
}
const AE = /* @__PURE__ */ R(WE, [["render", FE]]), MT = {
  Clock: AE,
  ListSearch: RE,
  ListCheck: YE,
  Scale: EE,
  RuleMeasure: wE,
  Home: bE,
  Currency: rE,
  Numbers: $I,
  Scan: QI,
  Abc: ZI,
  Email: jI,
  Phone: CI,
  X: tb,
  LogOut: SI,
  Calendar: PI,
  Trash: MI,
  Cancel: _I,
  Menu: lI,
  Dots: sI,
  Meat: aI,
  Cash: aD,
  CashReceipt: oP,
  CashRegister: sD,
  CashCalendar: lD,
  Computer: _D,
  Eye: MD,
  EyeOff: PD,
  Search: SD,
  Tag: jD,
  Report: CD,
  ShoppingCart: LD,
  UserCircle: QD,
  UserGroup: LI,
  Configuration: ZD,
  Plus: $D,
  Pencil: rP,
  Reload: dP,
  ArrowRight: vP,
  ArrowLeft: oE,
  ArrowUp: dE,
  ArrowDown: vE,
  Receipt: bP,
  CreditCard: wP,
  Lock: EP,
  Bell: RP,
  Help: YP,
  Connection: AP,
  Apps: zP,
  Chevron: sf,
  Bank: GP,
  Check: KP,
  List: eI
}, nb = "data-theme";
var ab = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.MIDNIGHT = "midnight", e))(ab || {});
function rf(e) {
  document.documentElement.setAttribute(nb, e);
}
function HE() {
  if (document.documentElement.getAttribute(nb) !== "dark") {
    rf(
      "dark"
      /* DARK */
    );
    return;
  }
  rf(
    "light"
    /* LIGHT */
  );
}
const pT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Type: ab,
  setTheme: rf,
  toggleDarkMode: HE
}, Symbol.toStringTag, { value: "Module" })), wT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), DT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), PT = {
  create: Q1,
  createWebHistory: O1
}, de = {
  Page: k_,
  Hyperlink: fr,
  Accordion: dw,
  Button: Z1,
  Form: eg,
  Label: lr,
  Layout: uO,
  Panel: _O,
  Separator: MO,
  BreadCrumb: gw,
  ComboBox: pw,
  Edit: Iw,
  FormDialog: Ww,
  Memo: Lw,
  SidebarItem: rb,
  Menu: Jw,
  Sidebar: eD
}, IT = {
  install(e) {
    e.component("ui-accordion", de.Accordion), e.component("ui-breadcrumb", de.BreadCrumb), e.component("ui-button", de.Button), e.component("ui-combo-box", de.ComboBox), e.component("ui-edit", de.Edit), e.component("ui-form", de.Form), e.component("ui-form-dialog", de.FormDialog), e.component("ui-hyperlink", de.Hyperlink), e.component("ui-label", de.Label), e.component("ui-layout", de.Layout), e.component("ui-memo", de.Memo), e.component("ui-menu", de.Menu), e.component("ui-page", de.Page), e.component("ui-panel", de.Panel), e.component("ui-separator", de.Separator), e.component("ui-sidebar", de.Sidebar), e.component("ui-sidebar-item", de.SidebarItem);
  }
}, ET = et.DateMethods, TT = et.Helper, ST = et.Use;
export {
  DT as Component,
  ET as DateMethods,
  TT as Helper,
  MT as Icon,
  IT as Kuxtal,
  PT as Router,
  wT as Schema,
  pT as Theme,
  de as UI,
  ST as Use
};
