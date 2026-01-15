import { watch as $t, defineComponent as H, reactive as rn, inject as be, computed as Z, h as Ct, unref as le, provide as He, ref as Nt, shallowRef as sn, getCurrentInstance as Rt, watchEffect as an, shallowReactive as ln, nextTick as cn, createElementBlock as _, openBlock as f, createBlock as W, createCommentVNode as K, resolveDynamicComponent as ye, toDisplayString as Q, withModifiers as un, renderSlot as U, withCtx as se, createElementVNode as l, createVNode as ke, Fragment as Ee, renderList as Me, mergeModels as Ie, useModel as ot, withDirectives as rt, vModelSelect as dn, vModelDynamic as hn, vModelText as pn, onMounted as fn, resolveComponent as mn, mergeProps as _n, createStaticVNode as V } from "vue";
function vn() {
  return Tt().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Tt() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const gn = typeof Proxy == "function", wn = "devtools-plugin:setup", bn = "plugin:settings:set";
let pe, Ke;
function kn() {
  var e;
  return pe !== void 0 || (typeof window < "u" && window.performance ? (pe = !0, Ke = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (pe = !0, Ke = globalThis.perf_hooks.performance) : pe = !1), pe;
}
function yn() {
  return kn() ? Ke.now() : Date.now();
}
class En {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const h = t.settings[i];
        o[i] = h.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, o);
    try {
      const i = localStorage.getItem(r), h = JSON.parse(i);
      Object.assign(s, h);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(r, JSON.stringify(i));
        } catch {
        }
        s = i;
      },
      now() {
        return yn();
      }
    }, n && n.on(bn, (i, h) => {
      i === this.plugin.id && this.fallbacks.setSettings(h);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, h) => this.target ? this.target.on[h] : (...p) => {
        this.onQueue.push({
          method: h,
          args: p
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, h) => this.target ? this.target[h] : h === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(h) ? (...p) => (this.targetQueue.push({
        method: h,
        args: p,
        resolve: () => {
        }
      }), this.fallbacks[h](...p)) : (...p) => new Promise((v) => {
        this.targetQueue.push({
          method: h,
          args: p,
          resolve: v
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Mn(e, t) {
  const n = e, o = Tt(), r = vn(), s = gn && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    r.emit(wn, e, t);
  else {
    const i = s ? new En(n, r) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
const te = typeof document < "u";
function It(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function xn(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && It(e.default);
}
const A = Object.assign;
function ze(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = Y(r) ? r.map(e) : e(r);
  }
  return n;
}
const we = () => {
}, Y = Array.isArray;
function ct(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n;
}
function C(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const At = /#/g, $n = /&/g, Cn = /\//g, Nn = /=/g, Rn = /\?/g, St = /\+/g, Tn = /%5B/g, In = /%5D/g, Ot = /%5E/g, An = /%60/g, Pt = /%7B/g, Sn = /%7C/g, Dt = /%7D/g, On = /%20/g;
function st(e) {
  return e == null ? "" : encodeURI("" + e).replace(Sn, "|").replace(Tn, "[").replace(In, "]");
}
function Pn(e) {
  return st(e).replace(Pt, "{").replace(Dt, "}").replace(Ot, "^");
}
function We(e) {
  return st(e).replace(St, "%2B").replace(On, "+").replace(At, "%23").replace($n, "%26").replace(An, "`").replace(Pt, "{").replace(Dt, "}").replace(Ot, "^");
}
function Dn(e) {
  return We(e).replace(Nn, "%3D");
}
function Bn(e) {
  return st(e).replace(At, "%23").replace(Rn, "%3F");
}
function Vn(e) {
  return Bn(e).replace(Cn, "%2F");
}
function fe(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && C(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const Ln = /\/$/, jn = (e) => e.replace(Ln, "");
function Ue(e, t, n = "/") {
  let o, r = {}, s = "", i = "";
  const h = t.indexOf("#");
  let p = t.indexOf("?");
  return p = h >= 0 && p > h ? -1 : p, p >= 0 && (o = t.slice(0, p), s = t.slice(p, h > 0 ? h : t.length), r = e(s.slice(1))), h >= 0 && (o = o || t.slice(0, h), i = t.slice(h, t.length)), o = Un(o ?? t, n), {
    fullPath: o + s + i,
    path: o,
    query: r,
    hash: fe(i)
  };
}
function Hn(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ut(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function dt(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && re(t.matched[o], n.matched[r]) && Bt(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function re(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Bt(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!zn(e[n], t[n])) return !1;
  return !0;
}
function zn(e, t) {
  return Y(e) ? ht(e, t) : Y(t) ? ht(t, e) : e?.valueOf() === t?.valueOf();
}
function ht(e, t) {
  return Y(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Un(e, t) {
  if (e.startsWith("/")) return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return C(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e) return t;
  const n = t.split("/"), o = e.split("/"), r = o[o.length - 1];
  (r === ".." || r === ".") && o.push("");
  let s = n.length - 1, i, h;
  for (i = 0; i < o.length; i++)
    if (h = o[i], h !== ".")
      if (h === "..")
        s > 1 && s--;
      else break;
  return n.slice(0, s).join("/") + "/" + o.slice(i).join("/");
}
const ne = {
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
let Qe = /* @__PURE__ */ (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), Ge = /* @__PURE__ */ (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
function Gn(e) {
  if (!e) if (te) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), jn(e);
}
const Fn = /^[^#]+#/;
function qn(e, t) {
  return e.replace(Fn, "#") + t;
}
function Kn(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Se = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Wn(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const s = document.querySelector(e.el);
        if (o && s) {
          C(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        C(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) {
      process.env.NODE_ENV !== "production" && C(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Kn(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function pt(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Ye = /* @__PURE__ */ new Map();
function Qn(e, t) {
  Ye.set(e, t);
}
function Yn(e) {
  const t = Ye.get(e);
  return Ye.delete(e), t;
}
function Ae(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Vt(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let P = /* @__PURE__ */ (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const Xe = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : ""), Xn = {
  [P.MATCHER_NOT_FOUND]({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  [P.NAVIGATION_GUARD_REDIRECT]({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Zn(t)}" via a navigation guard.`;
  },
  [P.NAVIGATION_ABORTED]({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  [P.NAVIGATION_CANCELLED]({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  [P.NAVIGATION_DUPLICATED]({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function me(e, t) {
  return process.env.NODE_ENV !== "production" ? A(new Error(Xn[e](t)), {
    type: e,
    [Xe]: !0
  }, t) : A(/* @__PURE__ */ new Error(), {
    type: e,
    [Xe]: !0
  }, t);
}
function ee(e, t) {
  return e instanceof Error && Xe in e && (t == null || !!(e.type & t));
}
const Jn = [
  "params",
  "query",
  "hash"
];
function Zn(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of Jn) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function eo(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < n.length; ++o) {
    const r = n[o].replace(St, " "), s = r.indexOf("="), i = fe(s < 0 ? r : r.slice(0, s)), h = s < 0 ? null : fe(r.slice(s + 1));
    if (i in t) {
      let p = t[i];
      Y(p) || (p = t[i] = [p]), p.push(h);
    } else t[i] = h;
  }
  return t;
}
function ft(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = Dn(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Y(o) ? o.map((r) => r && We(r)) : [o && We(o)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function to(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Y(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const no = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), mt = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), it = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Lt = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), Je = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function ve() {
  let e = [];
  function t(o) {
    return e.push(o), () => {
      const r = e.indexOf(o);
      r > -1 && e.splice(r, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function oe(e, t, n, o, r, s = (i) => i()) {
  const i = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () => new Promise((h, p) => {
    const v = (u) => {
      u === !1 ? p(me(P.NAVIGATION_ABORTED, {
        from: n,
        to: t
      })) : u instanceof Error ? p(u) : Ae(u) ? p(me(P.NAVIGATION_GUARD_REDIRECT, {
        from: t,
        to: u
      })) : (i && o.enterCallbacks[r] === i && typeof u == "function" && i.push(u), h());
    }, d = s(() => e.call(o && o.instances[r], t, n, process.env.NODE_ENV !== "production" ? oo(v, t, n) : v));
    let a = Promise.resolve(d);
    if (e.length < 3 && (a = a.then(v)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const u = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d) a = a.then((m) => v._called ? m : (C(u), Promise.reject(/* @__PURE__ */ new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !v._called) {
        C(u), p(/* @__PURE__ */ new Error("Invalid navigation guard"));
        return;
      }
    }
    a.catch((u) => p(u));
  });
}
function oo(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && C(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Fe(e, t, n, o, r = (s) => s()) {
  const s = [];
  for (const i of e) {
    process.env.NODE_ENV !== "production" && !i.components && i.children && !i.children.length && C(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const h in i.components) {
      let p = i.components[h];
      if (process.env.NODE_ENV !== "production") {
        if (!p || typeof p != "object" && typeof p != "function")
          throw C(`Component "${h}" in record with path "${i.path}" is not a valid component. Received "${String(p)}".`), new Error("Invalid route component");
        if ("then" in p) {
          C(`Component "${h}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const v = p;
          p = () => v;
        } else p.__asyncLoader && !p.__warnedDefineAsync && (p.__warnedDefineAsync = !0, C(`Component "${h}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[h]))
        if (It(p)) {
          const v = (p.__vccOpts || p)[t];
          v && s.push(oe(v, n, o, i, h, r));
        } else {
          let v = p();
          process.env.NODE_ENV !== "production" && !("catch" in v) && (C(`Component "${h}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), v = Promise.resolve(v)), s.push(() => v.then((d) => {
            if (!d) throw new Error(`Couldn't resolve component "${h}" at "${i.path}"`);
            const a = xn(d) ? d.default : d;
            i.mods[h] = d, i.components[h] = a;
            const u = (a.__vccOpts || a)[t];
            return u && oe(u, n, o, i, h, r)();
          }));
        }
    }
  }
  return s;
}
function ro(e, t) {
  const n = [], o = [], r = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const h = t.matched[i];
    h && (e.matched.find((v) => re(v, h)) ? o.push(h) : n.push(h));
    const p = e.matched[i];
    p && (t.matched.find((v) => re(v, p)) || r.push(p));
  }
  return [
    n,
    o,
    r
  ];
}
function ge(e, t) {
  const n = A({}, e, { matched: e.matched.map((o) => _o(o, [
    "instances",
    "children",
    "aliasOf"
  ])) });
  return { _custom: {
    type: null,
    readOnly: !0,
    display: e.fullPath,
    tooltip: t,
    value: n
  } };
}
function Te(e) {
  return { _custom: { display: e } };
}
let so = 0;
function io(e, t, n) {
  if (t.__hasDevtools) return;
  t.__hasDevtools = !0;
  const o = so++;
  Mn({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (r) => {
    typeof r.now != "function" && C("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.on.inspectComponent((d, a) => {
      d.instanceData && d.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: ge(t.currentRoute.value, "Current Route")
      });
    }), r.on.visitComponentTree(({ treeNode: d, componentInstance: a }) => {
      if (a.__vrv_devtools) {
        const u = a.__vrv_devtools;
        d.tags.push({
          label: (u.name ? `${u.name.toString()}: ` : "") + u.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: jt
        });
      }
      Y(a.__vrl_devtools) && (a.__devtoolsApi = r, a.__vrl_devtools.forEach((u) => {
        let m = u.route.path, M = Ut, E = "", T = 0;
        u.error ? (m = u.error, M = ho, T = po) : u.isExactActive ? (M = zt, E = "This is exactly active") : u.isActive && (M = Ht, E = "This link is active"), d.tags.push({
          label: m,
          textColor: T,
          tooltip: E,
          backgroundColor: M
        });
      }));
    }), $t(t.currentRoute, () => {
      p(), r.notifyComponentUpdate(), r.sendInspectorTree(h), r.sendInspectorState(h);
    });
    const s = "router:navigations:" + o;
    r.addTimelineLayer({
      id: s,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((d, a) => {
      r.addTimelineEvent({
        layerId: s,
        event: {
          title: "Error during Navigation",
          subtitle: a.fullPath,
          logType: "error",
          time: r.now(),
          data: { error: d },
          groupId: a.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((d, a) => {
      const u = {
        guard: Te("beforeEach"),
        from: ge(a, "Current Location during this navigation"),
        to: ge(d, "Target location")
      };
      Object.defineProperty(d.meta, "__navigationId", { value: i++ }), r.addTimelineEvent({
        layerId: s,
        event: {
          time: r.now(),
          title: "Start of navigation",
          subtitle: d.fullPath,
          data: u,
          groupId: d.meta.__navigationId
        }
      });
    }), t.afterEach((d, a, u) => {
      const m = { guard: Te("afterEach") };
      u ? (m.failure = { _custom: {
        type: Error,
        readOnly: !0,
        display: u ? u.message : "",
        tooltip: "Navigation Failure",
        value: u
      } }, m.status = Te("❌")) : m.status = Te("✅"), m.from = ge(a, "Current Location during this navigation"), m.to = ge(d, "Target location"), r.addTimelineEvent({
        layerId: s,
        event: {
          title: "End of navigation",
          subtitle: d.fullPath,
          time: r.now(),
          data: m,
          logType: u ? "warning" : "default",
          groupId: d.meta.__navigationId
        }
      });
    });
    const h = "router-inspector:" + o;
    r.addInspector({
      id: h,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function p() {
      if (!v) return;
      const d = v;
      let a = n.getRoutes().filter((u) => !u.parent || !u.parent.record.components);
      a.forEach(qt), d.filter && (a = a.filter((u) => Ze(u, d.filter.toLowerCase()))), a.forEach((u) => Ft(u, t.currentRoute.value)), d.rootNodes = a.map(Gt);
    }
    let v;
    r.on.getInspectorTree((d) => {
      v = d, d.app === e && d.inspectorId === h && p();
    }), r.on.getInspectorState((d) => {
      if (d.app === e && d.inspectorId === h) {
        const a = n.getRoutes().find((u) => u.record.__vd_id === d.nodeId);
        a && (d.state = { options: lo(a) });
      }
    }), r.sendInspectorTree(h), r.sendInspectorState(h);
  });
}
function ao(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function lo(e) {
  const { record: t } = e, n = [{
    editable: !1,
    key: "path",
    value: t.path
  }];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
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
      display: e.keys.map((o) => `${o.name}${ao(o)}`).join(" "),
      tooltip: "Param keys",
      value: e.keys
    } }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((o) => o.record.path)
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
      display: e.score.map((o) => o.join(", ")).join(" | "),
      tooltip: "Score used to sort routes",
      value: e.score
    } }
  }), n;
}
const jt = 15485081, Ht = 2450411, zt = 8702998, co = 2282478, Ut = 16486972, uo = 6710886, ho = 16704226, po = 12131356;
function Gt(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: co
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Ut
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: jt
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: zt
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Ht
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: uo
  });
  let o = n.__vd_id;
  return o == null && (o = String(fo++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Gt)
  };
}
let fo = 0;
const mo = /^\/(.*)\/([a-z]*)$/;
function Ft(e, t) {
  const n = t.matched.length && re(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => re(o, e.record))), e.children.forEach((o) => Ft(o, t));
}
function qt(e) {
  e.__vd_match = !1, e.children.forEach(qt);
}
function Ze(e, t) {
  const n = String(e.re).match(mo);
  if (e.__vd_match = !1, !n || n.length < 3) return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((s) => Ze(s, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), r = fe(o);
  return !t.startsWith("/") && (r.includes(t) || o.includes(t)) || r.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((s) => Ze(s, t));
}
function _o(e, t) {
  const n = {};
  for (const o in e) t.includes(o) || (n[o] = e[o]);
  return n;
}
let vo = () => location.protocol + "//" + location.host;
function Kt(e, t) {
  const { pathname: n, search: o, hash: r } = t, s = e.indexOf("#");
  if (s > -1) {
    let i = r.includes(e.slice(s)) ? e.slice(s).length : 1, h = r.slice(i);
    return h[0] !== "/" && (h = "/" + h), ut(h, "");
  }
  return ut(n, e) + o + r;
}
function go(e, t, n, o) {
  let r = [], s = [], i = null;
  const h = ({ state: u }) => {
    const m = Kt(e, location), M = n.value, E = t.value;
    let T = 0;
    if (u) {
      if (n.value = m, t.value = u, i && i === M) {
        i = null;
        return;
      }
      T = E ? u.position - E.position : 0;
    } else o(m);
    r.forEach((S) => {
      S(n.value, M, {
        delta: T,
        type: Qe.pop,
        direction: T ? T > 0 ? Ge.forward : Ge.back : Ge.unknown
      });
    });
  };
  function p() {
    i = n.value;
  }
  function v(u) {
    r.push(u);
    const m = () => {
      const M = r.indexOf(u);
      M > -1 && r.splice(M, 1);
    };
    return s.push(m), m;
  }
  function d() {
    if (document.visibilityState === "hidden") {
      const { history: u } = window;
      if (!u.state) return;
      u.replaceState(A({}, u.state, { scroll: Se() }), "");
    }
  }
  function a() {
    for (const u of s) u();
    s = [], window.removeEventListener("popstate", h), window.removeEventListener("pagehide", d), document.removeEventListener("visibilitychange", d);
  }
  return window.addEventListener("popstate", h), window.addEventListener("pagehide", d), document.addEventListener("visibilitychange", d), {
    pauseListeners: p,
    listen: v,
    destroy: a
  };
}
function _t(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? Se() : null
  };
}
function wo(e) {
  const { history: t, location: n } = window, o = { value: Kt(e, n) }, r = { value: t.state };
  r.value || s(o.value, {
    back: null,
    current: o.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function s(p, v, d) {
    const a = e.indexOf("#"), u = a > -1 ? (n.host && document.querySelector("base") ? e : e.slice(a)) + p : vo() + e + p;
    try {
      t[d ? "replaceState" : "pushState"](v, "", u), r.value = v;
    } catch (m) {
      process.env.NODE_ENV !== "production" ? C("Error with push/replace State", m) : console.error(m), n[d ? "replace" : "assign"](u);
    }
  }
  function i(p, v) {
    s(p, A({}, t.state, _t(r.value.back, p, r.value.forward, !0), v, { position: r.value.position }), !0), o.value = p;
  }
  function h(p, v) {
    const d = A({}, r.value, t.state, {
      forward: p,
      scroll: Se()
    });
    process.env.NODE_ENV !== "production" && !t.state && C(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), s(d.current, d, !0), s(p, A({}, _t(o.value, p, null), { position: d.position + 1 }, v), !1), o.value = p;
  }
  return {
    location: o,
    state: r,
    push: h,
    replace: i
  };
}
function sc(e) {
  e = Gn(e);
  const t = wo(e), n = go(e, t.state, t.location, t.replace);
  function o(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const r = A({
    location: "",
    base: e,
    go: o,
    createHref: qn.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
let ce = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var L = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(L || {});
const bo = {
  type: ce.Static,
  value: ""
}, ko = /[a-zA-Z0-9_]/;
function yo(e) {
  if (!e) return [[]];
  if (e === "/") return [[bo]];
  if (!e.startsWith("/")) throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${v}": ${m}`);
  }
  let n = L.Static, o = n;
  const r = [];
  let s;
  function i() {
    s && r.push(s), s = [];
  }
  let h = 0, p, v = "", d = "";
  function a() {
    v && (n === L.Static ? s.push({
      type: ce.Static,
      value: v
    }) : n === L.Param || n === L.ParamRegExp || n === L.ParamRegExpEnd ? (s.length > 1 && (p === "*" || p === "+") && t(`A repeatable param (${v}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: ce.Param,
      value: v,
      regexp: d,
      repeatable: p === "*" || p === "+",
      optional: p === "*" || p === "?"
    })) : t("Invalid state to consume buffer"), v = "");
  }
  function u() {
    v += p;
  }
  for (; h < e.length; ) {
    if (p = e[h++], p === "\\" && n !== L.ParamRegExp) {
      o = n, n = L.EscapeNext;
      continue;
    }
    switch (n) {
      case L.Static:
        p === "/" ? (v && a(), i()) : p === ":" ? (a(), n = L.Param) : u();
        break;
      case L.EscapeNext:
        u(), n = o;
        break;
      case L.Param:
        p === "(" ? n = L.ParamRegExp : ko.test(p) ? u() : (a(), n = L.Static, p !== "*" && p !== "?" && p !== "+" && h--);
        break;
      case L.ParamRegExp:
        p === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + p : n = L.ParamRegExpEnd : d += p;
        break;
      case L.ParamRegExpEnd:
        a(), n = L.Static, p !== "*" && p !== "?" && p !== "+" && h--, d = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === L.ParamRegExp && t(`Unfinished custom RegExp for param "${v}"`), a(), i(), r;
}
const vt = "[^/]+?", Eo = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
};
var q = /* @__PURE__ */ (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(q || {});
const Mo = /[.+*?^${}()[\]/\\]/g;
function xo(e, t) {
  const n = A({}, Eo, t), o = [];
  let r = n.start ? "^" : "";
  const s = [];
  for (const v of e) {
    const d = v.length ? [] : [q.Root];
    n.strict && !v.length && (r += "/");
    for (let a = 0; a < v.length; a++) {
      const u = v[a];
      let m = q.Segment + (n.sensitive ? q.BonusCaseSensitive : 0);
      if (u.type === ce.Static)
        a || (r += "/"), r += u.value.replace(Mo, "\\$&"), m += q.Static;
      else if (u.type === ce.Param) {
        const { value: M, repeatable: E, optional: T, regexp: S } = u;
        s.push({
          name: M,
          repeatable: E,
          optional: T
        });
        const x = S || vt;
        if (x !== vt) {
          m += q.BonusCustomRegExp;
          try {
            `${x}`;
          } catch (z) {
            throw new Error(`Invalid custom RegExp for param "${M}" (${x}): ` + z.message);
          }
        }
        let I = E ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        a || (I = T && v.length < 2 ? `(?:/${I})` : "/" + I), T && (I += "?"), r += I, m += q.Dynamic, T && (m += q.BonusOptional), E && (m += q.BonusRepeatable), x === ".*" && (m += q.BonusWildcard);
      }
      d.push(m);
    }
    o.push(d);
  }
  if (n.strict && n.end) {
    const v = o.length - 1;
    o[v][o[v].length - 1] += q.BonusStrict;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const i = new RegExp(r, n.sensitive ? "" : "i");
  function h(v) {
    const d = v.match(i), a = {};
    if (!d) return null;
    for (let u = 1; u < d.length; u++) {
      const m = d[u] || "", M = s[u - 1];
      a[M.name] = m && M.repeatable ? m.split("/") : m;
    }
    return a;
  }
  function p(v) {
    let d = "", a = !1;
    for (const u of e) {
      (!a || !d.endsWith("/")) && (d += "/"), a = !1;
      for (const m of u) if (m.type === ce.Static) d += m.value;
      else if (m.type === ce.Param) {
        const { value: M, repeatable: E, optional: T } = m, S = M in v ? v[M] : "";
        if (Y(S) && !E) throw new Error(`Provided param "${M}" is an array but it is not repeatable (* or + modifiers)`);
        const x = Y(S) ? S.join("/") : S;
        if (!x) if (T)
          u.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : a = !0);
        else throw new Error(`Missing required param "${M}"`);
        d += x;
      }
    }
    return d || "/";
  }
  return {
    re: i,
    score: o,
    keys: s,
    parse: h,
    stringify: p
  };
}
function $o(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o) return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === q.Static + q.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === q.Static + q.Segment ? 1 : -1 : 0;
}
function Wt(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const s = $o(o[n], r[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (gt(o)) return 1;
    if (gt(r)) return -1;
  }
  return r.length - o.length;
}
function gt(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Co = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function No(e, t, n) {
  const o = xo(yo(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const s = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      s.has(i.name) && C(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), s.add(i.name);
  }
  const r = A(o, {
    record: e,
    parent: t,
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Ro(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = ct(Co, t);
  function r(a) {
    return o.get(a);
  }
  function s(a, u, m) {
    const M = !m, E = bt(a);
    process.env.NODE_ENV !== "production" && So(E, u), E.aliasOf = m && m.record;
    const T = ct(t, a), S = [E];
    if ("alias" in a) {
      const z = typeof a.alias == "string" ? [a.alias] : a.alias;
      for (const X of z) S.push(bt(A({}, E, {
        components: m ? m.record.components : E.components,
        path: X,
        aliasOf: m ? m.record : E
      })));
    }
    let x, I;
    for (const z of S) {
      const { path: X } = z;
      if (u && X[0] !== "/") {
        const J = u.record.path, G = J[J.length - 1] === "/" ? "" : "/";
        z.path = u.record.path + (X && G + X);
      }
      if (process.env.NODE_ENV !== "production" && z.path === "*") throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (x = No(z, u, T), process.env.NODE_ENV !== "production" && u && X[0] === "/" && Po(x, u), m ? (m.alias.push(x), process.env.NODE_ENV !== "production" && Ao(m, x)) : (I = I || x, I !== x && I.alias.push(x), M && a.name && !kt(x) && (process.env.NODE_ENV !== "production" && Oo(a, u), i(a.name))), Qt(x) && p(x), E.children) {
        const J = E.children;
        for (let G = 0; G < J.length; G++) s(J[G], x, m && m.children[G]);
      }
      m = m || x;
    }
    return I ? () => {
      i(I);
    } : we;
  }
  function i(a) {
    if (Vt(a)) {
      const u = o.get(a);
      u && (o.delete(a), n.splice(n.indexOf(u), 1), u.children.forEach(i), u.alias.forEach(i));
    } else {
      const u = n.indexOf(a);
      u > -1 && (n.splice(u, 1), a.record.name && o.delete(a.record.name), a.children.forEach(i), a.alias.forEach(i));
    }
  }
  function h() {
    return n;
  }
  function p(a) {
    const u = Do(a, n);
    n.splice(u, 0, a), a.record.name && !kt(a) && o.set(a.record.name, a);
  }
  function v(a, u) {
    let m, M = {}, E, T;
    if ("name" in a && a.name) {
      if (m = o.get(a.name), !m) throw me(P.MATCHER_NOT_FOUND, { location: a });
      if (process.env.NODE_ENV !== "production") {
        const I = Object.keys(a.params || {}).filter((z) => !m.keys.find((X) => X.name === z));
        I.length && C(`Discarded invalid param(s) "${I.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      T = m.record.name, M = A(wt(u.params, m.keys.filter((I) => !I.optional).concat(m.parent ? m.parent.keys.filter((I) => I.optional) : []).map((I) => I.name)), a.params && wt(a.params, m.keys.map((I) => I.name))), E = m.stringify(M);
    } else if (a.path != null)
      E = a.path, process.env.NODE_ENV !== "production" && !E.startsWith("/") && C(`The Matcher cannot resolve relative paths but received "${E}". Unless you directly called \`matcher.resolve("${E}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), m = n.find((I) => I.re.test(E)), m && (M = m.parse(E), T = m.record.name);
    else {
      if (m = u.name ? o.get(u.name) : n.find((I) => I.re.test(u.path)), !m) throw me(P.MATCHER_NOT_FOUND, {
        location: a,
        currentLocation: u
      });
      T = m.record.name, M = A({}, u.params, a.params), E = m.stringify(M);
    }
    const S = [];
    let x = m;
    for (; x; )
      S.unshift(x.record), x = x.parent;
    return {
      name: T,
      path: E,
      params: M,
      matched: S,
      meta: Io(S)
    };
  }
  e.forEach((a) => s(a));
  function d() {
    n.length = 0, o.clear();
  }
  return {
    addRoute: s,
    resolve: v,
    removeRoute: i,
    clearRoutes: d,
    getRoutes: h,
    getRecordMatcher: r
  };
}
function wt(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n;
}
function bt(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: To(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function To(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function kt(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Io(e) {
  return e.reduce((t, n) => A(t, n.meta), {});
}
function et(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Ao(e, t) {
  for (const n of e.keys) if (!n.optional && !t.keys.find(et.bind(null, n))) return C(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys) if (!n.optional && !e.keys.find(et.bind(null, n))) return C(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function So(e, t) {
  t && t.record.name && !e.name && !e.path && C(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Oo(e, t) {
  for (let n = t; n; n = n.parent) if (n.record.name === e.name) throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function Po(e, t) {
  for (const n of t.keys) if (!e.keys.find(et.bind(null, n))) return C(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Do(e, t) {
  let n = 0, o = t.length;
  for (; n !== o; ) {
    const s = n + o >> 1;
    Wt(e, t[s]) < 0 ? o = s : n = s + 1;
  }
  const r = Bo(e);
  return r && (o = t.lastIndexOf(r, o - 1), process.env.NODE_ENV !== "production" && o < 0 && C(`Finding ancestor route "${r.record.path}" failed for "${e.record.path}"`)), o;
}
function Bo(e) {
  let t = e;
  for (; t = t.parent; ) if (Qt(t) && Wt(e, t) === 0) return t;
}
function Qt({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function yt(e) {
  const t = be(it), n = be(Lt);
  let o = !1, r = null;
  const s = Z(() => {
    const d = le(e.to);
    return process.env.NODE_ENV !== "production" && (!o || d !== r) && (Ae(d) || (o ? C(`Invalid value for prop "to" in useLink()
- to:`, d, `
- previous to:`, r, `
- props:`, e) : C(`Invalid value for prop "to" in useLink()
- to:`, d, `
- props:`, e)), r = d, o = !0), t.resolve(d);
  }), i = Z(() => {
    const { matched: d } = s.value, { length: a } = d, u = d[a - 1], m = n.matched;
    if (!u || !m.length) return -1;
    const M = m.findIndex(re.bind(null, u));
    if (M > -1) return M;
    const E = Et(d[a - 2]);
    return a > 1 && Et(u) === E && m[m.length - 1].path !== E ? m.findIndex(re.bind(null, d[a - 2])) : M;
  }), h = Z(() => i.value > -1 && Ho(n.params, s.value.params)), p = Z(() => i.value > -1 && i.value === n.matched.length - 1 && Bt(n.params, s.value.params));
  function v(d = {}) {
    if (jo(d)) {
      const a = t[le(e.replace) ? "replace" : "push"](le(e.to)).catch(we);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => a), a;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && te) {
    const d = Rt();
    if (d) {
      const a = {
        route: s.value,
        isActive: h.value,
        isExactActive: p.value,
        error: null
      };
      d.__vrl_devtools = d.__vrl_devtools || [], d.__vrl_devtools.push(a), an(() => {
        a.route = s.value, a.isActive = h.value, a.isExactActive = p.value, a.error = Ae(le(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: Z(() => s.value.href),
    isActive: h,
    isExactActive: p,
    navigate: v
  };
}
function Vo(e) {
  return e.length === 1 ? e[0] : e;
}
const Lo = /* @__PURE__ */ H({
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
  useLink: yt,
  setup(e, { slots: t }) {
    const n = rn(yt(e)), { options: o } = be(it), r = Z(() => ({
      [Mt(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      [Mt(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && Vo(t.default(n));
      return e.custom ? s : Ct("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: r.value
      }, s);
    };
  }
}), Yt = Lo;
function jo(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Ho(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r) return !1;
    } else if (!Y(r) || r.length !== o.length || o.some((s, i) => s.valueOf() !== r[i].valueOf())) return !1;
  }
  return !0;
}
function Et(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Mt = (e, t, n) => e ?? t ?? n, zo = /* @__PURE__ */ H({
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
  setup(e, { attrs: t, slots: n }) {
    process.env.NODE_ENV !== "production" && Uo();
    const o = be(Je), r = Z(() => e.route || o.value), s = be(mt, 0), i = Z(() => {
      let v = le(s);
      const { matched: d } = r.value;
      let a;
      for (; (a = d[v]) && !a.components; ) v++;
      return v;
    }), h = Z(() => r.value.matched[i.value]);
    He(mt, Z(() => i.value + 1)), He(no, h), He(Je, r);
    const p = Nt();
    return $t(() => [
      p.value,
      h.value,
      e.name
    ], ([v, d, a], [u, m, M]) => {
      d && (d.instances[a] = v, m && m !== d && v && v === u && (d.leaveGuards.size || (d.leaveGuards = m.leaveGuards), d.updateGuards.size || (d.updateGuards = m.updateGuards))), v && d && (!m || !re(d, m) || !u) && (d.enterCallbacks[a] || []).forEach((E) => E(v));
    }, { flush: "post" }), () => {
      const v = r.value, d = e.name, a = h.value, u = a && a.components[d];
      if (!u) return xt(n.default, {
        Component: u,
        route: v
      });
      const m = a.props[d], M = m ? m === !0 ? v.params : typeof m == "function" ? m(v) : m : null, T = Ct(u, A({}, M, t, {
        onVnodeUnmounted: (S) => {
          S.component.isUnmounted && (a.instances[d] = null);
        },
        ref: p
      }));
      if (process.env.NODE_ENV !== "production" && te && T.ref) {
        const S = {
          depth: i.value,
          name: a.name,
          path: a.path,
          meta: a.meta
        };
        (Y(T.ref) ? T.ref.map((x) => x.i) : [T.ref.i]).forEach((x) => {
          x.__vrv_devtools = S;
        });
      }
      return xt(n.default, {
        Component: T,
        route: v
      }) || T;
    };
  }
});
function xt(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Xt = zo;
function Uo() {
  const e = Rt(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    C(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function ic(e) {
  const t = Ro(e.routes, e), n = e.parseQuery || eo, o = e.stringifyQuery || ft, r = e.history;
  if (process.env.NODE_ENV !== "production" && !r) throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const s = ve(), i = ve(), h = ve(), p = sn(ne);
  let v = ne;
  te && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const d = ze.bind(null, (c) => "" + c), a = ze.bind(null, Vn), u = ze.bind(null, fe);
  function m(c, b) {
    let g, y;
    return Vt(c) ? (g = t.getRecordMatcher(c), process.env.NODE_ENV !== "production" && !g && C(`Parent route "${String(c)}" not found when adding child route`, b), y = b) : y = c, t.addRoute(y, g);
  }
  function M(c) {
    const b = t.getRecordMatcher(c);
    b ? t.removeRoute(b) : process.env.NODE_ENV !== "production" && C(`Cannot remove non-existent route "${String(c)}"`);
  }
  function E() {
    return t.getRoutes().map((c) => c.record);
  }
  function T(c) {
    return !!t.getRecordMatcher(c);
  }
  function S(c, b) {
    if (b = A({}, b || p.value), typeof c == "string") {
      const N = Ue(n, c, b.path), O = t.resolve({ path: N.path }, b), ae = r.createHref(N.fullPath);
      return process.env.NODE_ENV !== "production" && (ae.startsWith("//") ? C(`Location "${c}" resolved to "${ae}". A resolved location cannot start with multiple slashes.`) : O.matched.length || C(`No match found for location with path "${c}"`)), A(N, O, {
        params: u(O.params),
        hash: fe(N.hash),
        redirectedFrom: void 0,
        href: ae
      });
    }
    if (process.env.NODE_ENV !== "production" && !Ae(c))
      return C(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, c), S({});
    let g;
    if (c.path != null)
      process.env.NODE_ENV !== "production" && "params" in c && !("name" in c) && Object.keys(c.params).length && C(`Path "${c.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), g = A({}, c, { path: Ue(n, c.path, b.path).path });
    else {
      const N = A({}, c.params);
      for (const O in N) N[O] == null && delete N[O];
      g = A({}, c, { params: a(N) }), b.params = a(b.params);
    }
    const y = t.resolve(g, b), $ = c.hash || "";
    process.env.NODE_ENV !== "production" && $ && !$.startsWith("#") && C(`A \`hash\` should always start with the character "#". Replace "${$}" with "#${$}".`), y.params = d(u(y.params));
    const B = Hn(o, A({}, c, {
      hash: Pn($),
      path: y.path
    })), R = r.createHref(B);
    return process.env.NODE_ENV !== "production" && (R.startsWith("//") ? C(`Location "${c}" resolved to "${R}". A resolved location cannot start with multiple slashes.`) : y.matched.length || C(`No match found for location with path "${c.path != null ? c.path : c}"`)), A({
      fullPath: B,
      hash: $,
      query: o === ft ? to(c.query) : c.query || {}
    }, y, {
      redirectedFrom: void 0,
      href: R
    });
  }
  function x(c) {
    return typeof c == "string" ? Ue(n, c, p.value.path) : A({}, c);
  }
  function I(c, b) {
    if (v !== c) return me(P.NAVIGATION_CANCELLED, {
      from: b,
      to: c
    });
  }
  function z(c) {
    return G(c);
  }
  function X(c) {
    return z(A(x(c), { replace: !0 }));
  }
  function J(c, b) {
    const g = c.matched[c.matched.length - 1];
    if (g && g.redirect) {
      const { redirect: y } = g;
      let $ = typeof y == "function" ? y(c, b) : y;
      if (typeof $ == "string" && ($ = $.includes("?") || $.includes("#") ? $ = x($) : { path: $ }, $.params = {}), process.env.NODE_ENV !== "production" && $.path == null && !("name" in $))
        throw C(`Invalid redirect found:
${JSON.stringify($, null, 2)}
 when navigating to "${c.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return A({
        query: c.query,
        hash: c.hash,
        params: $.path != null ? {} : c.params
      }, $);
    }
  }
  function G(c, b) {
    const g = v = S(c), y = p.value, $ = c.state, B = c.force, R = c.replace === !0, N = J(g, y);
    if (N) return G(A(x(N), {
      state: typeof N == "object" ? A({}, $, N.state) : $,
      force: B,
      replace: R
    }), b || g);
    const O = g;
    O.redirectedFrom = b;
    let ae;
    return !B && dt(o, y, g) && (ae = me(P.NAVIGATION_DUPLICATED, {
      to: O,
      from: y
    }), lt(y, y, !0, !1)), (ae ? Promise.resolve(ae) : xe(O, y)).catch((F) => ee(F) ? ee(F, P.NAVIGATION_GUARD_REDIRECT) ? F : Ve(F) : Be(F, O, y)).then((F) => {
      if (F) {
        if (ee(F, P.NAVIGATION_GUARD_REDIRECT))
          return process.env.NODE_ENV !== "production" && dt(o, S(F.to), O) && b && (b._count = b._count ? b._count + 1 : 1) > 30 ? (C(`Detected a possibly infinite redirection in a navigation guard when going from "${y.fullPath}" to "${O.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(/* @__PURE__ */ new Error("Infinite redirect in navigation guard"))) : G(A({ replace: R }, x(F.to), {
            state: typeof F.to == "object" ? A({}, $, F.to.state) : $,
            force: B
          }), b || O);
      } else F = Ce(O, y, !0, R, $);
      return $e(O, y, F), F;
    });
  }
  function De(c, b) {
    const g = I(c, b);
    return g ? Promise.reject(g) : Promise.resolve();
  }
  function _e(c) {
    const b = Re.values().next().value;
    return b && typeof b.runWithContext == "function" ? b.runWithContext(c) : c();
  }
  function xe(c, b) {
    let g;
    const [y, $, B] = ro(c, b);
    g = Fe(y.reverse(), "beforeRouteLeave", c, b);
    for (const N of y) N.leaveGuards.forEach((O) => {
      g.push(oe(O, c, b));
    });
    const R = De.bind(null, c, b);
    return g.push(R), he(g).then(() => {
      g = [];
      for (const N of s.list()) g.push(oe(N, c, b));
      return g.push(R), he(g);
    }).then(() => {
      g = Fe($, "beforeRouteUpdate", c, b);
      for (const N of $) N.updateGuards.forEach((O) => {
        g.push(oe(O, c, b));
      });
      return g.push(R), he(g);
    }).then(() => {
      g = [];
      for (const N of B) if (N.beforeEnter) if (Y(N.beforeEnter)) for (const O of N.beforeEnter) g.push(oe(O, c, b));
      else g.push(oe(N.beforeEnter, c, b));
      return g.push(R), he(g);
    }).then(() => (c.matched.forEach((N) => N.enterCallbacks = {}), g = Fe(B, "beforeRouteEnter", c, b, _e), g.push(R), he(g))).then(() => {
      g = [];
      for (const N of i.list()) g.push(oe(N, c, b));
      return g.push(R), he(g);
    }).catch((N) => ee(N, P.NAVIGATION_CANCELLED) ? N : Promise.reject(N));
  }
  function $e(c, b, g) {
    h.list().forEach((y) => _e(() => y(c, b, g)));
  }
  function Ce(c, b, g, y, $) {
    const B = I(c, b);
    if (B) return B;
    const R = b === ne, N = te ? history.state : {};
    g && (y || R ? r.replace(c.fullPath, A({ scroll: R && N && N.scroll }, $)) : r.push(c.fullPath, $)), p.value = c, lt(c, b, g, R), Ve();
  }
  let ie;
  function k() {
    ie || (ie = r.listen((c, b, g) => {
      if (!de.listening) return;
      const y = S(c), $ = J(y, de.currentRoute.value);
      if ($) {
        G(A($, {
          replace: !0,
          force: !0
        }), y).catch(we);
        return;
      }
      v = y;
      const B = p.value;
      te && Qn(pt(B.fullPath, g.delta), Se()), xe(y, B).catch((R) => ee(R, P.NAVIGATION_ABORTED | P.NAVIGATION_CANCELLED) ? R : ee(R, P.NAVIGATION_GUARD_REDIRECT) ? (G(A(x(R.to), { force: !0 }), y).then((N) => {
        ee(N, P.NAVIGATION_ABORTED | P.NAVIGATION_DUPLICATED) && !g.delta && g.type === Qe.pop && r.go(-1, !1);
      }).catch(we), Promise.reject()) : (g.delta && r.go(-g.delta, !1), Be(R, y, B))).then((R) => {
        R = R || Ce(y, B, !1), R && (g.delta && !ee(R, P.NAVIGATION_CANCELLED) ? r.go(-g.delta, !1) : g.type === Qe.pop && ee(R, P.NAVIGATION_ABORTED | P.NAVIGATION_DUPLICATED) && r.go(-1, !1)), $e(y, B, R);
      }).catch(we);
    }));
  }
  let D = ve(), Ne = ve(), ue;
  function Be(c, b, g) {
    Ve(c);
    const y = Ne.list();
    return y.length ? y.forEach(($) => $(c, b, g)) : (process.env.NODE_ENV !== "production" && C("uncaught error during route navigation:"), console.error(c)), Promise.reject(c);
  }
  function on() {
    return ue && p.value !== ne ? Promise.resolve() : new Promise((c, b) => {
      D.add([c, b]);
    });
  }
  function Ve(c) {
    return ue || (ue = !c, k(), D.list().forEach(([b, g]) => c ? g(c) : b()), D.reset()), c;
  }
  function lt(c, b, g, y) {
    const { scrollBehavior: $ } = e;
    if (!te || !$) return Promise.resolve();
    const B = !g && Yn(pt(c.fullPath, 0)) || (y || !g) && history.state && history.state.scroll || null;
    return cn().then(() => $(c, b, B)).then((R) => R && Wn(R)).catch((R) => Be(R, c, b));
  }
  const Le = (c) => r.go(c);
  let je;
  const Re = /* @__PURE__ */ new Set(), de = {
    currentRoute: p,
    listening: !0,
    addRoute: m,
    removeRoute: M,
    clearRoutes: t.clearRoutes,
    hasRoute: T,
    getRoutes: E,
    resolve: S,
    options: e,
    push: z,
    replace: X,
    go: Le,
    back: () => Le(-1),
    forward: () => Le(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: h.add,
    onError: Ne.add,
    isReady: on,
    install(c) {
      c.component("RouterLink", Yt), c.component("RouterView", Xt), c.config.globalProperties.$router = de, Object.defineProperty(c.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => le(p)
      }), te && !je && p.value === ne && (je = !0, z(r.location).catch((y) => {
        process.env.NODE_ENV !== "production" && C("Unexpected error when starting the router:", y);
      }));
      const b = {};
      for (const y in ne) Object.defineProperty(b, y, {
        get: () => p.value[y],
        enumerable: !0
      });
      c.provide(it, de), c.provide(Lt, ln(b)), c.provide(Je, p);
      const g = c.unmount;
      Re.add(c), c.unmount = function() {
        Re.delete(c), Re.size < 1 && (v = ne, ie && ie(), ie = null, p.value = ne, je = !1, ue = !1), g();
      }, process.env.NODE_ENV !== "production" && te && io(c, de, t);
    }
  };
  function he(c) {
    return c.reduce((b, g) => b.then(() => _e(g)), Promise.resolve());
  }
  return de;
}
const Go = ["data-mode", "type", "form", "disabled"], Fo = {
  key: 0,
  class: "button__caption"
}, qo = /* @__PURE__ */ H({
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
  setup(e, { emit: t }) {
    const n = e, o = t;
    return (r, s) => (f(), _("button", {
      class: "button",
      "data-mode": n.mode ?? "filled",
      type: n.type ?? "button",
      form: n.form,
      disabled: n.disabled,
      onClick: s[0] || (s[0] = (i) => o("click", i))
    }, [
      (f(), W(ye(n.icon), { class: "button__icon" })),
      n.caption ? (f(), _("span", Fo, Q(n.caption), 1)) : K("", !0)
    ], 8, Go));
  }
}), w = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Ko = /* @__PURE__ */ w(qo, [["__scopeId", "data-v-b3b85ddf"]]), Jt = /* @__PURE__ */ H({
  __name: "TForm",
  emits: ["submit", "reset"],
  setup(e, { emit: t }) {
    const n = t;
    return (o, r) => (f(), _("form", {
      class: "form",
      onSubmit: r[0] || (r[0] = un((s) => n("submit", s), ["prevent"])),
      onReset: r[1] || (r[1] = (s) => n("reset", s))
    }, [
      U(o.$slots, "default")
    ], 32));
  }
}), Wo = /* @__PURE__ */ H({
  __name: "THyperlink",
  props: {
    route: {},
    params: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    return (r, s) => n.route ? (f(), W(le(Yt), {
      key: 0,
      to: { name: e.route, params: e.params },
      class: "hyperlink | text-truncate",
      draggable: "false",
      onClick: s[0] || (s[0] = (i) => o("click", i))
    }, {
      default: se(() => [
        U(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["to"])) : (f(), _("a", {
      key: 1,
      href: "#",
      class: "hyperlink | text-truncate",
      draggable: "false",
      onClick: s[1] || (s[1] = (i) => o("click", i))
    }, [
      U(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Oe = /* @__PURE__ */ w(Wo, [["__scopeId", "data-v-2eb573e4"]]), Qo = { class: "label" }, Yo = {
  key: 0,
  class: "label__caption"
}, Xo = /* @__PURE__ */ H({
  __name: "TLabel",
  props: {
    caption: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (f(), _("label", Qo, [
      t.caption ? (f(), _("span", Yo, Q(t.caption), 1)) : K("", !0),
      U(n.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Pe = /* @__PURE__ */ w(Xo, [["__scopeId", "data-v-1bd91740"]]), Jo = { class: "layout" }, Zo = {
  key: 0,
  class: "layout__header"
}, er = { class: "layout__content" }, tr = {
  key: 0,
  class: "layout__sidebar"
}, nr = { class: "layout__section" }, or = {
  key: 1,
  class: "layout__sidebar"
}, rr = {
  key: 1,
  class: "layout__footer"
}, sr = /* @__PURE__ */ H({
  __name: "TLayout",
  props: {
    showHeader: { type: Boolean },
    showFooter: { type: Boolean },
    showPrimarySidebar: { type: Boolean },
    showSecondarySidebar: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (f(), _("div", Jo, [
      t.showHeader ? (f(), _("header", Zo, [
        U(n.$slots, "TLayoutHeader", {}, void 0, !0)
      ])) : K("", !0),
      l("main", er, [
        t.showPrimarySidebar ? (f(), _("aside", tr, [
          U(n.$slots, "TLayoutPrimarySidebar", {}, void 0, !0)
        ])) : K("", !0),
        l("div", nr, [
          U(n.$slots, "default", {}, void 0, !0)
        ]),
        t.showSecondarySidebar ? (f(), _("aside", or, [
          U(n.$slots, "TLayoutSecondarySidebar", {}, void 0, !0)
        ])) : K("", !0)
      ]),
      t.showFooter ? (f(), _("footer", rr, [
        U(n.$slots, "TLayoutFooter", {}, void 0, !0)
      ])) : K("", !0)
    ]));
  }
}), ir = /* @__PURE__ */ w(sr, [["__scopeId", "data-v-6b791cc6"]]), ar = { class: "panel" }, lr = {
  key: 0,
  class: "panel__header"
}, cr = { class: "panel__content" }, ur = {
  key: 0,
  class: "panel__sidebar"
}, dr = { class: "panel__section" }, hr = {
  key: 1,
  class: "panel__sidebar"
}, pr = {
  key: 1,
  class: "panel__footer"
}, fr = /* @__PURE__ */ H({
  __name: "TPanel",
  props: {
    showHeader: { type: Boolean },
    showFooter: { type: Boolean },
    showPrimarySidebar: { type: Boolean },
    showSecondarySidebar: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (f(), _("div", ar, [
      t.showHeader ? (f(), _("header", lr, [
        U(n.$slots, "TPanelHeader", {}, void 0, !0)
      ])) : K("", !0),
      l("section", cr, [
        t.showPrimarySidebar ? (f(), _("aside", ur, [
          U(n.$slots, "TPanelPrimarySidebar", {}, void 0, !0)
        ])) : K("", !0),
        l("div", dr, [
          U(n.$slots, "default", {}, void 0, !0)
        ]),
        t.showSecondarySidebar ? (f(), _("aside", hr, [
          U(n.$slots, "TPanelSecondarySidebar", {}, void 0, !0)
        ])) : K("", !0)
      ]),
      t.showFooter ? (f(), _("footer", pr, [
        U(n.$slots, "TPanelFooter", {}, void 0, !0)
      ])) : K("", !0)
    ]));
  }
}), mr = /* @__PURE__ */ w(fr, [["__scopeId", "data-v-ce59918a"]]), _r = {}, vr = { class: "separator" };
function gr(e, t) {
  return f(), _("div", vr);
}
const wr = /* @__PURE__ */ w(_r, [["render", gr], ["__scopeId", "data-v-02e492b5"]]), br = {}, kr = {
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
function yr(e, t) {
  return f(), _("svg", kr, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M9 6l6 6l-6 6" }, null, -1)
  ])]);
}
const at = /* @__PURE__ */ w(br, [["render", yr]]);
var tt;
((e) => {
  const t = "es-mx", o = /^[0-9]*$/, r = /\s/g;
  let s;
  ((k) => {
    k.DEFAULT_DATE = /* @__PURE__ */ new Date(), k.ZERO = 0, k.EMPTY_ARRAY = Array(), k.EMPTY_STRING = "", k.EMPTY_OBJECT = Object(), k.FALSE = !1, k.TRUE = !k.FALSE, k.NULL = null;
  })(s = e.Use || (e.Use = {}));
  function i(k, D = "day") {
    return new Intl.RelativeTimeFormat(t, {
      style: "long",
      numeric: "auto"
    }).format(k, D);
  }
  e.toRelativeTime = i;
  function h(k = s.ZERO, D = "MXN") {
    return Intl.NumberFormat("es-mx", {
      style: "currency",
      currency: D
    }).format(k);
  }
  e.toCurrency = h;
  function p(k) {
    return String(k).replace(r, s.EMPTY_STRING);
  }
  e.trim = p;
  function v(k = s.EMPTY_STRING, D = s.EMPTY_STRING) {
    return String(k) === String(D);
  }
  e.compare = v;
  function d(k) {
    return v(k);
  }
  e.isEmpty = d;
  function a(k) {
    return !d(k);
  }
  e.notEmpty = a;
  function u(k) {
    return E(k, o);
  }
  e.isNumber = u;
  function m(k) {
    if (!u(k)) throw Error("Value must be a number");
    return k < s.ZERO;
  }
  e.isNegative = m;
  function M(k) {
    return !m(k);
  }
  e.isPositive = M;
  function E(k, D) {
    return new RegExp(D).test(String(k));
  }
  e.assertRegularExpression = E;
  function T(k, D) {
    return !D.includes(k);
  }
  e.isUnique = T;
  function S(k, D) {
    T(k, D) && D.push(k);
  }
  e.addTargetToCollection = S;
  function x(k, D) {
    const ue = D.indexOf(k);
    D.splice(ue, 1);
  }
  e.removeTargetFromCollection = x;
  function I(k, D = s.ZERO) {
    return k.length === D;
  }
  e.hasLength = I;
  function z(k) {
    return !I(k);
  }
  e.hasElements = z;
  function X([k]) {
    return k;
  }
  e.selectFirstElement = X;
  function J(k) {
    return document.querySelector(`#${k}`);
  }
  function G(k) {
    return document.querySelector(`#${String(k)}`);
  }
  function De(k) {
    return G(k).show();
  }
  e.openDialog = De;
  function _e(k) {
    return G(k).close();
  }
  e.closeDialog = _e;
  function xe(k) {
    return J(k).select();
  }
  e.inputSelect = xe;
  function $e(k) {
    return J(k).focus();
  }
  e.inputFocus = $e;
  function Ce(k) {
    !u(k.key) && k.key != "." && k.preventDefault();
  }
  e.preventIfNumeric = Ce;
  function ie(k) {
    u(k.key) || k.preventDefault();
  }
  e.preventIfExclusiveNumeric = ie;
})(tt || (tt = {}));
const qe = tt, Er = ["open"], Mr = { class: "accordion__header" }, xr = { class: "accordion__title | text-truncate" }, $r = { class: "accordion__content" }, Cr = /* @__PURE__ */ H({
  __name: "TAccordion",
  props: {
    title: {},
    open: { type: Boolean }
  },
  emits: ["toggle"],
  setup(e, { expose: t, emit: n }) {
    const o = Nt(qe.Use.NULL), r = e, s = n;
    return t({
      open() {
        o.value && (o.value.open = qe.Use.TRUE);
      },
      close() {
        o.value && (o.value.open = qe.Use.FALSE);
      }
    }), (i, h) => (f(), _("details", {
      ref_key: "accordion",
      ref: o,
      open: r.open,
      class: "accordion",
      onToggle: h[0] || (h[0] = (p) => s("toggle", p))
    }, [
      l("summary", Mr, [
        l("h4", xr, Q(r.title), 1),
        ke(at, { class: "accordion__chevron" })
      ]),
      l("div", $r, [
        U(i.$slots, "default", {}, void 0, !0)
      ])
    ], 40, Er));
  }
}), Nr = /* @__PURE__ */ w(Cr, [["__scopeId", "data-v-e4873ec6"]]), Rr = { class: "breadcrumb" }, Tr = { class: "breadcrumb__list" }, Ir = ["data-divider"], Ar = { class: "breadcrumb__route-caption | text-truncate" }, Sr = { class: "breadcrumb__current | text-truncate" }, Or = /* @__PURE__ */ H({
  __name: "TBreadCrumb",
  props: {
    current: {},
    routes: {},
    divider: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (f(), _("nav", Rr, [
      l("ul", Tr, [
        (f(!0), _(Ee, null, Me(t.routes, (r, s) => (f(), _("li", {
          key: s,
          "data-divider": t.divider ?? "/",
          class: "breadcrumb__route"
        }, [
          ke(Oe, {
            route: r.route,
            class: "breadcrumb__route-hyperlink"
          }, {
            default: se(() => [
              (f(), W(ye(r.icon), { class: "breadcrumb__route-caption" })),
              l("span", Ar, Q(r.caption), 1)
            ]),
            _: 2
          }, 1032, ["route"])
        ], 8, Ir))), 128)),
        l("li", Sr, Q(t.current), 1)
      ])
    ]));
  }
}), Pr = /* @__PURE__ */ w(Or, [["__scopeId", "data-v-faa8e711"]]), Dr = {
  key: 0,
  class: "combo-box__option",
  value: null
}, Br = ["value"], Vr = /* @__PURE__ */ H({
  __name: "TComboBox",
  props: /* @__PURE__ */ Ie({
    caption: {},
    allowNull: { type: Boolean },
    options: {}
  }, {
    modelValue: { default: null },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = ot(e, "modelValue"), n = e;
    return (o, r) => (f(), W(Pe, {
      caption: n.caption
    }, {
      default: se(() => [
        rt(l("select", {
          "onUpdate:modelValue": r[0] || (r[0] = (s) => t.value = s),
          class: "combo-box"
        }, [
          r[1] || (r[1] = l("option", {
            disabled: "",
            class: "combo-box__option",
            value: null
          }, " Selecciona un elemento ", -1)),
          n.allowNull ? (f(), _("option", Dr, " Ninguno/a ")) : K("", !0),
          (f(!0), _(Ee, null, Me(n.options, (s, i) => (f(), _("option", {
            key: i,
            value: s.value,
            class: "combo-box__option"
          }, Q(s.label), 9, Br))), 128))
        ], 512), [
          [dn, t.value]
        ])
      ]),
      _: 1
    }, 8, ["caption"]));
  }
}), Lr = /* @__PURE__ */ w(Vr, [["__scopeId", "data-v-5f70a990"]]), jr = { class: "edit__container" }, Hr = ["type", "placeholder", "required", "disabled", "min", "max", "minlength", "maxlength", "pattern"], zr = /* @__PURE__ */ H({
  __name: "TEdit",
  props: /* @__PURE__ */ Ie({
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
  emits: /* @__PURE__ */ Ie(["input", "beforeinput", "blur", "change", "focus", "click", "paste", "keypress"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, o = t, r = ot(e, "modelValue");
    return (s, i) => (f(), W(Pe, {
      caption: n.caption,
      class: "edit"
    }, {
      default: se(() => [
        l("div", jr, [
          (f(), W(ye(n.icon), { class: "edit__icon" })),
          rt(l("input", {
            class: "edit__field",
            "onUpdate:modelValue": i[0] || (i[0] = (h) => r.value = h),
            type: n.type,
            placeholder: n.placeholder,
            required: n.required,
            disabled: n.disabled,
            min: n.min,
            max: n.max,
            minlength: n.minlength,
            maxlength: n.maxlength,
            pattern: n.pattern,
            onInput: i[1] || (i[1] = (h) => o("input", h)),
            onBeforeinput: i[2] || (i[2] = (h) => o("beforeinput", h)),
            onBlur: i[3] || (i[3] = (h) => o("blur", h)),
            onChange: i[4] || (i[4] = (h) => o("change", h)),
            onFocus: i[5] || (i[5] = (h) => o("focus", h)),
            onClick: i[6] || (i[6] = (h) => o("click", h)),
            onPaste: i[7] || (i[7] = (h) => o("paste", h)),
            onKeypress: i[8] || (i[8] = (h) => o("keypress", h))
          }, null, 40, Hr), [
            [hn, r.value]
          ])
        ])
      ]),
      _: 1
    }, 8, ["caption"]));
  }
}), Ur = /* @__PURE__ */ w(zr, [["__scopeId", "data-v-88ba82c9"]]), Gr = {}, Fr = {
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
function qr(e, t) {
  return f(), _("svg", Fr, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M18 6l-12 12" }, null, -1),
    l("path", { d: "M6 6l12 12" }, null, -1)
  ])]);
}
const Zt = /* @__PURE__ */ w(Gr, [["render", qr]]), Kr = { class: "form-dialog__header" }, Wr = { class: "form-dialog__container" }, Qr = { class: "form-dialog__title" }, Yr = {
  key: 0,
  class: "form-dialog__description | text-truncate-multiline"
}, Xr = { class: "form-dialog__content" }, Jr = /* @__PURE__ */ H({
  __name: "TFormDialog",
  props: {
    title: {},
    description: {}
  },
  emits: ["submit", "cancel", "reset"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    return (r, s) => (f(), W(Jt, {
      class: "form-dialog",
      onSubmit: s[1] || (s[1] = (i) => o("submit", i)),
      onReset: s[2] || (s[2] = (i) => o("reset", i))
    }, {
      default: se(() => [
        l("header", Kr, [
          l("div", Wr, [
            l("h4", Qr, Q(n.title), 1),
            n.description ? (f(), _("p", Yr, Q(n.description), 1)) : K("", !0)
          ]),
          ke(Zt, {
            class: "form-dialog__icon",
            onClick: s[0] || (s[0] = (i) => o("cancel"))
          })
        ]),
        l("div", Xr, [
          U(r.$slots, "default", {}, void 0, !0)
        ])
      ]),
      _: 3
    }));
  }
}), Zr = /* @__PURE__ */ w(Jr, [["__scopeId", "data-v-05413daa"]]), es = ["maxlength"], ts = { class: "memo__counter" }, ns = { key: 0 }, os = /* @__PURE__ */ H({
  __name: "TMemo",
  props: /* @__PURE__ */ Ie({
    caption: {},
    maxLength: {}
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = ot(e, "modelValue"), n = e, o = Z(() => t.value.length);
    return (r, s) => (f(), W(Pe, {
      caption: n.caption,
      class: "memo"
    }, {
      default: se(() => [
        rt(l("textarea", {
          "onUpdate:modelValue": s[0] || (s[0] = (i) => t.value = i),
          maxlength: e.maxLength,
          class: "memo__field"
        }, null, 8, es), [
          [pn, t.value]
        ]),
        l("small", ts, [
          l("span", null, Q(o.value), 1),
          e.maxLength ? (f(), _("span", ns, " / " + Q(e.maxLength), 1)) : K("", !0)
        ])
      ]),
      _: 1
    }, 8, ["caption"]));
  }
}), rs = /* @__PURE__ */ w(os, [["__scopeId", "data-v-6b3b5744"]]), ss = { class: "sidebar-item" }, is = {
  key: 0,
  class: "sidebar-item__caption"
}, as = { class: "sidebar-item__content" }, ls = { class: "sidebar-item__option-caption" }, cs = /* @__PURE__ */ H({
  __name: "TSidebarItem",
  props: {
    caption: {},
    options: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (f(), _("li", ss, [
      t.caption ? (f(), _("h6", is, Q(t.caption), 1)) : K("", !0),
      l("div", as, [
        (f(!0), _(Ee, null, Me(t.options, (r) => (f(), W(Oe, {
          route: r.route,
          class: "sidebar-item__option"
        }, {
          default: se(() => [
            (f(), W(ye(r.icon))),
            l("span", ls, Q(r.caption), 1)
          ]),
          _: 2
        }, 1032, ["route"]))), 256))
      ])
    ]));
  }
}), en = /* @__PURE__ */ w(cs, [["__scopeId", "data-v-e027506a"]]), us = ["data-orientation"], ds = ["onClick"], hs = { class: "menu-item__hyperlink-container" }, ps = { class: "menu-item__caption | text-truncate" }, fs = /* @__PURE__ */ H({
  __name: "TMenu",
  props: {
    items: {},
    orientation: {}
  },
  setup(e) {
    const t = e;
    return fn(() => {
      if (t.orientation === "vertical")
        return;
      document.querySelectorAll('.menu[data-orientation="horizontal"] .menu-item').forEach((r) => {
        if (r.parentElement?.classList.contains("submenu"))
          return;
        const i = r.querySelector(".menu-item__chevron");
        i.style.display = "none";
      });
    }), (n, o) => {
      const r = mn("TMenu", !0);
      return f(), _("ul", {
        class: "menu |",
        "data-orientation": t.orientation ?? "vertical"
      }, [
        (f(!0), _(Ee, null, Me(t.items, (s, i) => (f(), _("li", {
          class: "menu-item",
          onClick: s.onClick
        }, [
          ke(Oe, {
            route: s.route,
            "data-use-separator": s.useSeparator,
            title: s.caption,
            class: "menu-item__hyperlink | text-truncate"
          }, {
            default: se(() => [
              l("div", hs, [
                (f(), W(ye(s.icon), { class: "menu-item__icon" })),
                l("span", ps, Q(s.caption), 1)
              ]),
              ke(at, { class: "menu-item__icon | menu-item__chevron" })
            ]),
            _: 2
          }, 1032, ["route", "data-use-separator", "title"]),
          s.submenu && s.submenu.length ? (f(), W(r, {
            key: i,
            items: s.submenu,
            class: "submenu"
          }, null, 8, ["items"])) : K("", !0)
        ], 8, ds))), 256))
      ], 8, us);
    };
  }
}), ms = /* @__PURE__ */ w(fs, [["__scopeId", "data-v-00dbad3c"]]), _s = { class: "sidebar" }, vs = /* @__PURE__ */ H({
  __name: "TSidebar",
  props: {
    items: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (f(), _("ul", _s, [
      (f(!0), _(Ee, null, Me(t.items, (r) => (f(), W(en, _n({ ref_for: !0 }, r), null, 16))), 256))
    ]));
  }
}), gs = /* @__PURE__ */ w(vs, [["__scopeId", "data-v-28ff9ad2"]]), ws = {}, bs = {
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
function ks(e, t) {
  return f(), _("svg", bs, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3" }, null, -1),
    l("path", { d: "M7 9m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" }, null, -1),
    l("path", { d: "M12 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1)
  ])]);
}
const ys = /* @__PURE__ */ w(ws, [["render", ks]]), Es = {}, Ms = {
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
function xs(e, t) {
  return f(), _("svg", Ms, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M21 15h-2.5c-.398 0 -.779 .158 -1.061 .439c-.281 .281 -.439 .663 -.439 1.061c0 .398 .158 .779 .439 1.061c.281 .281 .663 .439 1.061 .439h1c.398 0 .779 .158 1.061 .439c.281 .281 .439 .663 .439 1.061c0 .398 -.158 .779 -.439 1.061c-.281 .281 -.663 .439 -1.061 .439h-2.5"></path><path d="M19 21v1m0 -8v1"></path><path d="M13 21h-7c-.53 0 -1.039 -.211 -1.414 -.586c-.375 -.375 -.586 -.884 -.586 -1.414v-10c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h2m12 3.12v-1.12c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2"></path><path d="M16 10v-6c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-4c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414v6m8 0h-8m8 0h1m-9 0h-1"></path><path d="M8 14v.01"></path><path d="M8 17v.01"></path><path d="M12 13.99v.01"></path><path d="M12 17v.01"></path>', 9)
  ])]);
}
const $s = /* @__PURE__ */ w(Es, [["render", xs]]), Cs = {}, Ns = {
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
function Rs(e, t) {
  return f(), _("svg", Ns, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 21h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3"></path><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M4 11h12.5"></path><path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path><path d="M19 21v1m0 -8v1"></path>', 7)
  ])]);
}
const Ts = /* @__PURE__ */ w(Cs, [["render", Rs]]), Is = {}, As = {
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
function Ss(e, t) {
  return f(), _("svg", As, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path><path d="M7 20h10"></path><path d="M9 16v4"></path><path d="M15 16v4"></path>', 5)
  ])]);
}
const Os = /* @__PURE__ */ w(Is, [["render", Ss]]), Ps = {}, Ds = {
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
function Bs(e, t) {
  return f(), _("svg", Ds, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1),
    l("path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" }, null, -1)
  ])]);
}
const Vs = /* @__PURE__ */ w(Ps, [["render", Bs]]), Ls = {}, js = {
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
function Hs(e, t) {
  return f(), _("svg", js, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828" }, null, -1),
    l("path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" }, null, -1),
    l("path", { d: "M3 3l18 18" }, null, -1)
  ])]);
}
const zs = /* @__PURE__ */ w(Ls, [["render", Hs]]), Us = {}, Gs = {
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
function Fs(e, t) {
  return f(), _("svg", Gs, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, null, -1),
    l("path", { d: "M21 21l-6 -6" }, null, -1)
  ])]);
}
const qs = /* @__PURE__ */ w(Us, [["render", Fs]]), Ks = {}, Ws = {
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
function Qs(e, t) {
  return f(), _("svg", Ws, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    l("path", { d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" }, null, -1)
  ])]);
}
const Ys = /* @__PURE__ */ w(Ks, [["render", Qs]]), Xs = {}, Js = {
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
function Zs(e, t) {
  return f(), _("svg", Js, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"></path><path d="M18 14v4h4"></path><path d="M18 11v-4a2 2 0 0 0 -2 -2h-2"></path><path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M8 11h4"></path><path d="M8 15h3"></path>', 8)
  ])]);
}
const ei = /* @__PURE__ */ w(Xs, [["render", Zs]]), ti = {}, ni = {
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
function oi(e, t) {
  return f(), _("svg", ni, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path>', 5)
  ])]);
}
const ri = /* @__PURE__ */ w(ti, [["render", oi]]), si = {}, ii = {
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
function ai(e, t) {
  return f(), _("svg", ii, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    l("path", { d: "M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, null, -1),
    l("path", { d: "M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" }, null, -1)
  ])]);
}
const li = /* @__PURE__ */ w(si, [["render", ai]]), ci = {}, ui = {
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
function di(e, t) {
  return f(), _("svg", ui, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" }, null, -1),
    l("path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }, null, -1)
  ])]);
}
const hi = /* @__PURE__ */ w(ci, [["render", di]]), pi = {}, fi = {
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
function mi(e, t) {
  return f(), _("svg", fi, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M12 5l0 14" }, null, -1),
    l("path", { d: "M5 12l14 0" }, null, -1)
  ])]);
}
const _i = /* @__PURE__ */ w(pi, [["render", mi]]), vi = {}, gi = {
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
function wi(e, t) {
  return f(), _("svg", gi, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" }, null, -1),
    l("path", { d: "M13.5 6.5l4 4" }, null, -1)
  ])]);
}
const bi = /* @__PURE__ */ w(vi, [["render", wi]]), ki = {}, yi = {
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
function Ei(e, t) {
  return f(), _("svg", yi, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" }, null, -1),
    l("path", { d: "M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" }, null, -1)
  ])]);
}
const Mi = /* @__PURE__ */ w(ki, [["render", Ei]]), xi = {}, $i = {
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
function Ci(e, t) {
  return f(), _("svg", $i, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" }, null, -1),
    l("path", { d: "M20 4v5h-5" }, null, -1)
  ])]);
}
const Ni = /* @__PURE__ */ w(xi, [["render", Ci]]), Ri = {}, Ti = {
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
function Ii(e, t) {
  return f(), _("svg", Ti, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M5 12l14 0" }, null, -1),
    l("path", { d: "M15 16l4 -4" }, null, -1),
    l("path", { d: "M15 8l4 4" }, null, -1)
  ])]);
}
const Ai = /* @__PURE__ */ w(Ri, [["render", Ii]]), Si = {}, Oi = {
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
function Pi(e, t) {
  return f(), _("svg", Oi, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" }, null, -1)
  ])]);
}
const Di = /* @__PURE__ */ w(Si, [["render", Pi]]), Bi = {}, Vi = {
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
function Li(e, t) {
  return f(), _("svg", Vi, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path><path d="M3 10l18 0"></path><path d="M7 15l.01 0"></path><path d="M11 15l2 0"></path>', 5)
  ])]);
}
const ji = /* @__PURE__ */ w(Bi, [["render", Li]]), Hi = {}, zi = {
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
function Ui(e, t) {
  return f(), _("svg", zi, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" }, null, -1),
    l("path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, null, -1),
    l("path", { d: "M8 11v-4a4 4 0 1 1 8 0v4" }, null, -1)
  ])]);
}
const Gi = /* @__PURE__ */ w(Hi, [["render", Ui]]), Fi = {}, qi = {
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
function Ki(e, t) {
  return f(), _("svg", qi, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" }, null, -1),
    l("path", { d: "M9 17v1a3 3 0 0 0 6 0v-1" }, null, -1)
  ])]);
}
const Wi = /* @__PURE__ */ w(Fi, [["render", Ki]]), Qi = {}, Yi = {
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
function Xi(e, t) {
  return f(), _("svg", Yi, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    l("path", { d: "M12 17l0 .01" }, null, -1),
    l("path", { d: "M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" }, null, -1)
  ])]);
}
const Ji = /* @__PURE__ */ w(Qi, [["render", Xi]]), Zi = {}, ea = {
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
function ta(e, t) {
  return f(), _("svg", ea, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"></path><path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"></path><path d="M3 21l2.5 -2.5"></path><path d="M18.5 5.5l2.5 -2.5"></path><path d="M10 11l-2 2"></path><path d="M13 14l-2 2"></path>', 7)
  ])]);
}
const na = /* @__PURE__ */ w(Zi, [["render", ta]]), oa = {}, ra = {
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
function sa(e, t) {
  return f(), _("svg", ra, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M14 7l6 0"></path><path d="M17 4l0 6"></path>', 6)
  ])]);
}
const ia = /* @__PURE__ */ w(oa, [["render", sa]]), aa = {}, la = {
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
function ca(e, t) {
  return f(), _("svg", la, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21l18 0"></path><path d="M3 10l18 0"></path><path d="M5 6l7 -3l7 3"></path><path d="M4 10l0 11"></path><path d="M20 10l0 11"></path><path d="M8 14l0 3"></path><path d="M12 14l0 3"></path><path d="M16 14l0 3"></path>', 9)
  ])]);
}
const ua = /* @__PURE__ */ w(aa, [["render", ca]]), da = {}, ha = {
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
function pa(e, t) {
  return f(), _("svg", ha, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M5 12l5 5l10 -10" }, null, -1)
  ])]);
}
const fa = /* @__PURE__ */ w(da, [["render", pa]]), ma = {}, _a = {
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
function va(e, t) {
  return f(), _("svg", _a, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l11 0"></path><path d="M9 12l11 0"></path><path d="M9 18l11 0"></path><path d="M5 6l0 .01"></path><path d="M5 12l0 .01"></path><path d="M5 18l0 .01"></path>', 7)
  ])]);
}
const ga = /* @__PURE__ */ w(ma, [["render", va]]), wa = {}, ba = {
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
function ka(e, t) {
  return f(), _("svg", ba, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821"></path><path d="M5.904 18.596c2.733 2.734 5.9 4 7.07 2.829c1.172 -1.172 -.094 -4.338 -2.828 -7.071c-2.733 -2.734 -5.9 -4 -7.07 -2.829c-1.172 1.172 .094 4.338 2.828 7.071z"></path><path d="M7.5 16l1 1"></path><path d="M12.975 21.425c3.905 -3.906 4.855 -9.288 2.121 -12.021c-2.733 -2.734 -8.115 -1.784 -12.02 2.121"></path>', 5)
  ])]);
}
const ya = /* @__PURE__ */ w(wa, [["render", ka]]), Ea = {}, Ma = {
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
function xa(e, t) {
  return f(), _("svg", Ma, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    l("path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    l("path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1)
  ])]);
}
const $a = /* @__PURE__ */ w(Ea, [["render", xa]]), Ca = {}, Na = {
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
function Ra(e, t) {
  return f(), _("svg", Na, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M4 6l16 0" }, null, -1),
    l("path", { d: "M4 12l16 0" }, null, -1),
    l("path", { d: "M4 18l16 0" }, null, -1)
  ])]);
}
const Ta = /* @__PURE__ */ w(Ca, [["render", Ra]]), Ia = {}, Aa = {
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
function Sa(e, t) {
  return f(), _("svg", Aa, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    l("path", { d: "M10 10l4 4m0 -4l-4 4" }, null, -1)
  ])]);
}
const Oa = /* @__PURE__ */ w(Ia, [["render", Sa]]), Pa = {}, Da = {
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
function Ba(e, t) {
  return f(), _("svg", Da, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7l16 0"></path><path d="M10 11l0 6"></path><path d="M14 11l0 6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>', 6)
  ])]);
}
const Va = /* @__PURE__ */ w(Pa, [["render", Ba]]), La = {}, ja = {
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
function Ha(e, t) {
  return f(), _("svg", ja, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M4 11h16"></path><path d="M11 15h1"></path><path d="M12 15v3"></path>', 7)
  ])]);
}
const za = /* @__PURE__ */ w(La, [["render", Ha]]), Ua = {}, Ga = {
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
function Fa(e, t) {
  return f(), _("svg", Ga, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" }, null, -1),
    l("path", { d: "M9 12h12l-3 -3" }, null, -1),
    l("path", { d: "M18 15l3 -3" }, null, -1)
  ])]);
}
const qa = /* @__PURE__ */ w(Ua, [["render", Fa]]), Ka = {}, Wa = {
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
function Qa(e, t) {
  return f(), _("svg", Wa, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" }, null, -1),
    l("path", { d: "M3 7l9 6l9 -6" }, null, -1)
  ])]);
}
const Ya = /* @__PURE__ */ w(Ka, [["render", Qa]]), Xa = {}, Ja = {
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
function Za(e, t) {
  return f(), _("svg", Ja, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" }, null, -1)
  ])]);
}
const el = /* @__PURE__ */ w(Xa, [["render", Za]]), tl = {}, nl = {
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
function ol(e, t) {
  return f(), _("svg", nl, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M17 10h2a2 2 0 0 1 2 2v1"></path><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path>', 7)
  ])]);
}
const rl = /* @__PURE__ */ w(tl, [["render", ol]]), sl = {}, il = {
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
function al(e, t) {
  return f(), _("svg", il, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7v-1a2 2 0 0 1 2 -2h2"></path><path d="M4 17v1a2 2 0 0 0 2 2h2"></path><path d="M16 4h2a2 2 0 0 1 2 2v1"></path><path d="M16 20h2a2 2 0 0 0 2 -2v-1"></path><path d="M5 12l14 0"></path>', 6)
  ])]);
}
const ll = /* @__PURE__ */ w(sl, [["render", al]]), cl = {}, ul = {
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
function dl(e, t) {
  return f(), _("svg", ul, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 16v-6a2 2 0 1 1 4 0v6"></path><path d="M3 13h4"></path><path d="M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1"></path><path d="M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01"></path>', 5)
  ])]);
}
const hl = /* @__PURE__ */ w(cl, [["render", dl]]), pl = {}, fl = {
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
function ml(e, t) {
  return f(), _("svg", fl, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M3 10l2 -2v8" }, null, -1),
    l("path", { d: "M9 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" }, null, -1),
    l("path", { d: "M17 8h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5" }, null, -1)
  ])]);
}
const _l = /* @__PURE__ */ w(pl, [["render", ml]]), vl = {}, gl = {
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
function wl(e, t) {
  return f(), _("svg", gl, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" }, null, -1),
    l("path", { d: "M12 3v3m0 12v3" }, null, -1)
  ])]);
}
const bl = /* @__PURE__ */ w(vl, [["render", wl]]), kl = {}, yl = {
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
function El(e, t) {
  return f(), _("svg", yl, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M5 12l14 0" }, null, -1),
    l("path", { d: "M5 12l4 4" }, null, -1),
    l("path", { d: "M5 12l4 -4" }, null, -1)
  ])]);
}
const Ml = /* @__PURE__ */ w(kl, [["render", El]]), xl = {}, $l = {
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
function Cl(e, t) {
  return f(), _("svg", $l, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M12 5l0 14" }, null, -1),
    l("path", { d: "M16 9l-4 -4" }, null, -1),
    l("path", { d: "M8 9l4 -4" }, null, -1)
  ])]);
}
const Nl = /* @__PURE__ */ w(xl, [["render", Cl]]), Rl = {}, Tl = {
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
function Il(e, t) {
  return f(), _("svg", Tl, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M12 5l0 14" }, null, -1),
    l("path", { d: "M16 15l-4 4" }, null, -1),
    l("path", { d: "M8 15l4 4" }, null, -1)
  ])]);
}
const Al = /* @__PURE__ */ w(Rl, [["render", Il]]), Sl = {}, Ol = {
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
function Pl(e, t) {
  return f(), _("svg", Ol, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M5 12l-2 0l9 -9l9 9l-2 0" }, null, -1),
    l("path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" }, null, -1),
    l("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" }, null, -1)
  ])]);
}
const Dl = /* @__PURE__ */ w(Sl, [["render", Pl]]), Bl = {}, Vl = {
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
function Ll(e, t) {
  return f(), _("svg", Vl, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 19.875c0 .621 -.512 1.125 -1.143 1.125h-5.714a1.134 1.134 0 0 1 -1.143 -1.125v-15.875a1 1 0 0 1 1 -1h5.857c.631 0 1.143 .504 1.143 1.125l0 15.75"></path><path d="M12 9h-2"></path><path d="M12 6h-3"></path><path d="M12 12h-3"></path><path d="M12 18h-3"></path><path d="M12 15h-2"></path><path d="M21 3h-4"></path><path d="M19 3v18"></path><path d="M21 21h-4"></path>', 10)
  ])]);
}
const jl = /* @__PURE__ */ w(Bl, [["render", Ll]]), Hl = {}, zl = {
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
function Ul(e, t) {
  return f(), _("svg", zl, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 20l10 0"></path><path d="M6 6l6 -1l6 1"></path><path d="M12 3l0 17"></path><path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path><path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path>', 6)
  ])]);
}
const Gl = /* @__PURE__ */ w(Hl, [["render", Ul]]), Fl = {}, ql = {
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
function Kl(e, t) {
  return f(), _("svg", ql, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M18.5 18.5l2.5 2.5"></path><path d="M4 6h16"></path><path d="M4 12h4"></path><path d="M4 18h4"></path>', 6)
  ])]);
}
const Wl = /* @__PURE__ */ w(Fl, [["render", Kl]]), Ql = {}, Yl = {
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
function Xl(e, t) {
  return f(), _("svg", Yl, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path><path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path><path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path><path d="M11 6l9 0"></path><path d="M11 12l9 0"></path><path d="M11 18l9 0"></path>', 7)
  ])]);
}
const Jl = /* @__PURE__ */ w(Ql, [["render", Xl]]), Zl = {}, ec = {
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
function tc(e, t) {
  return f(), _("svg", ec, [...t[0] || (t[0] = [
    l("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    l("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }, null, -1),
    l("path", { d: "M12 7v5l3 3" }, null, -1)
  ])]);
}
const nc = /* @__PURE__ */ w(Zl, [["render", tc]]), ac = {
  Clock: nc,
  ListSearch: Wl,
  ListCheck: Jl,
  Scale: Gl,
  RuleMeasure: jl,
  Home: Dl,
  Currency: bl,
  Numbers: _l,
  Scan: ll,
  Abc: hl,
  Email: Ya,
  Phone: el,
  X: Zt,
  LogOut: qa,
  Calendar: za,
  Trash: Va,
  Cancel: Oa,
  Menu: Ta,
  Dots: $a,
  Meat: ya,
  Cash: ys,
  CashReceipt: Mi,
  CashRegister: $s,
  CashCalendar: Ts,
  Computer: Os,
  Eye: Vs,
  EyeOff: zs,
  Search: qs,
  Tag: Ys,
  Report: ei,
  ShoppingCart: ri,
  UserCircle: li,
  UserGroup: rl,
  Configuration: hi,
  Plus: _i,
  Pencil: bi,
  Reload: Ni,
  ArrowRight: Ai,
  ArrowLeft: Ml,
  ArrowUp: Nl,
  ArrowDown: Al,
  Receipt: Di,
  CreditCard: ji,
  Lock: Gi,
  Bell: Wi,
  Help: Ji,
  Connection: na,
  Apps: ia,
  Chevron: at,
  Bank: ua,
  Check: fa,
  List: ga
}, tn = "data-theme";
var nn = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.AQUA = "aqua", e.SOLARIS = "solaris", e))(nn || {});
function nt(e) {
  document.body.setAttribute(tn, e);
}
function oc() {
  if (document.body.getAttribute(tn) !== "dark") {
    nt(
      "dark"
      /* DARK */
    );
    return;
  }
  nt(
    "light"
    /* LIGHT */
  );
}
const lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Type: nn,
  setTheme: nt,
  toggleDarkMode: oc
}, Symbol.toStringTag, { value: "Module" })), cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), j = {
  Page: Xt,
  Hyperlink: Oe,
  Accordion: Nr,
  Button: Ko,
  Form: Jt,
  Label: Pe,
  Layout: ir,
  Panel: mr,
  Separator: wr,
  BreadCrumb: Pr,
  ComboBox: Lr,
  Edit: Ur,
  FormDialog: Zr,
  Memo: rs,
  SidebarItem: en,
  Menu: ms,
  Sidebar: gs
}, dc = {
  install(e) {
    e.component("ui-accordion", j.Accordion), e.component("ui-breadcrumb", j.BreadCrumb), e.component("ui-button", j.Button), e.component("ui-combo-box", j.ComboBox), e.component("ui-edit", j.Edit), e.component("ui-form", j.Form), e.component("ui-form-dialog", j.FormDialog), e.component("ui-hyperlink", j.Hyperlink), e.component("ui-label", j.Label), e.component("ui-layout", j.Layout), e.component("ui-memo", j.Memo), e.component("ui-menu", j.Menu), e.component("ui-page", j.Page), e.component("ui-panel", j.Panel), e.component("ui-separator", j.Separator), e.component("ui-sidebar", j.Sidebar), e.component("ui-sidebar-item", j.SidebarItem);
  }
};
export {
  uc as Component,
  ac as Icon,
  dc as Kuxtal,
  cc as Schema,
  lc as Theme,
  j as UI,
  ic as createRouter,
  sc as createWebHistory
};
