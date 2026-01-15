import { watch as Et, defineComponent as H, reactive as tn, inject as Ee, computed as Z, h as Mt, unref as ee, provide as He, ref as xt, shallowRef as nn, getCurrentInstance as $t, watchEffect as on, shallowReactive as rn, nextTick as sn, createElementBlock as _, openBlock as f, createBlock as W, createCommentVNode as K, resolveDynamicComponent as _e, toDisplayString as Q, withModifiers as an, renderSlot as q, withCtx as te, createElementVNode as a, Fragment as ve, renderList as ge, createVNode as Te, mergeModels as Ie, useModel as tt, withDirectives as nt, vModelSelect as ln, vModelDynamic as cn, vModelText as un, onMounted as dn, resolveComponent as hn, mergeProps as pn, createStaticVNode as V } from "vue";
function fn() {
  return Ct().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Ct() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const mn = typeof Proxy == "function", _n = "devtools-plugin:setup", vn = "plugin:settings:set";
let pe, qe;
function gn() {
  var e;
  return pe !== void 0 || (typeof window < "u" && window.performance ? (pe = !0, qe = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (pe = !0, qe = globalThis.perf_hooks.performance) : pe = !1), pe;
}
function wn() {
  return gn() ? qe.now() : Date.now();
}
class bn {
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
        return wn();
      }
    }, n && n.on(vn, (i, h) => {
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
function kn(e, t) {
  const n = e, o = Ct(), r = fn(), s = mn && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    r.emit(_n, e, t);
  else {
    const i = s ? new bn(n, r) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
const oe = typeof document < "u";
function Nt(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function yn(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Nt(e.default);
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
const ye = () => {
}, Y = Array.isArray;
function it(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n;
}
function C(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Rt = /#/g, En = /&/g, Mn = /\//g, xn = /=/g, $n = /\?/g, Tt = /\+/g, Cn = /%5B/g, Nn = /%5D/g, It = /%5E/g, Rn = /%60/g, At = /%7B/g, Tn = /%7C/g, St = /%7D/g, In = /%20/g;
function ot(e) {
  return e == null ? "" : encodeURI("" + e).replace(Tn, "|").replace(Cn, "[").replace(Nn, "]");
}
function An(e) {
  return ot(e).replace(At, "{").replace(St, "}").replace(It, "^");
}
function Ke(e) {
  return ot(e).replace(Tt, "%2B").replace(In, "+").replace(Rt, "%23").replace(En, "%26").replace(Rn, "`").replace(At, "{").replace(St, "}").replace(It, "^");
}
function Sn(e) {
  return Ke(e).replace(xn, "%3D");
}
function On(e) {
  return ot(e).replace(Rt, "%23").replace($n, "%3F");
}
function Pn(e) {
  return On(e).replace(Mn, "%2F");
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
const Dn = /\/$/, Bn = (e) => e.replace(Dn, "");
function Ge(e, t, n = "/") {
  let o, r = {}, s = "", i = "";
  const h = t.indexOf("#");
  let p = t.indexOf("?");
  return p = h >= 0 && p > h ? -1 : p, p >= 0 && (o = t.slice(0, p), s = t.slice(p, h > 0 ? h : t.length), r = e(s.slice(1))), h >= 0 && (o = o || t.slice(0, h), i = t.slice(h, t.length)), o = jn(o ?? t, n), {
    fullPath: o + s + i,
    path: o,
    query: r,
    hash: fe(i)
  };
}
function Vn(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function at(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function lt(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && ie(t.matched[o], n.matched[r]) && Ot(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ie(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ot(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!Ln(e[n], t[n])) return !1;
  return !0;
}
function Ln(e, t) {
  return Y(e) ? ct(e, t) : Y(t) ? ct(t, e) : e?.valueOf() === t?.valueOf();
}
function ct(e, t) {
  return Y(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function jn(e, t) {
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
const re = {
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
let We = /* @__PURE__ */ (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), Ue = /* @__PURE__ */ (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
function Hn(e) {
  if (!e) if (oe) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Bn(e);
}
const zn = /^[^#]+#/;
function Gn(e, t) {
  return e.replace(zn, "#") + t;
}
function Un(e, t) {
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
function Fn(e) {
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
    t = Un(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function ut(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Qe = /* @__PURE__ */ new Map();
function qn(e, t) {
  Qe.set(e, t);
}
function Kn(e) {
  const t = Qe.get(e);
  return Qe.delete(e), t;
}
function Ae(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Pt(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let P = /* @__PURE__ */ (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const Ye = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : ""), Wn = {
  [P.MATCHER_NOT_FOUND]({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  [P.NAVIGATION_GUARD_REDIRECT]({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Yn(t)}" via a navigation guard.`;
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
  return process.env.NODE_ENV !== "production" ? A(new Error(Wn[e](t)), {
    type: e,
    [Ye]: !0
  }, t) : A(/* @__PURE__ */ new Error(), {
    type: e,
    [Ye]: !0
  }, t);
}
function ne(e, t) {
  return e instanceof Error && Ye in e && (t == null || !!(e.type & t));
}
const Qn = [
  "params",
  "query",
  "hash"
];
function Yn(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of Qn) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
function Xn(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < n.length; ++o) {
    const r = n[o].replace(Tt, " "), s = r.indexOf("="), i = fe(s < 0 ? r : r.slice(0, s)), h = s < 0 ? null : fe(r.slice(s + 1));
    if (i in t) {
      let p = t[i];
      Y(p) || (p = t[i] = [p]), p.push(h);
    } else t[i] = h;
  }
  return t;
}
function dt(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = Sn(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Y(o) ? o.map((r) => r && Ke(r)) : [o && Ke(o)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function Jn(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Y(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const Zn = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), ht = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), rt = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Dt = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), Xe = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function be() {
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
function se(e, t, n, o, r, s = (i) => i()) {
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
    }, d = s(() => e.call(o && o.instances[r], t, n, process.env.NODE_ENV !== "production" ? eo(v, t, n) : v));
    let l = Promise.resolve(d);
    if (e.length < 3 && (l = l.then(v)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const u = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d) l = l.then((m) => v._called ? m : (C(u), Promise.reject(/* @__PURE__ */ new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !v._called) {
        C(u), p(/* @__PURE__ */ new Error("Invalid navigation guard"));
        return;
      }
    }
    l.catch((u) => p(u));
  });
}
function eo(e, t, n) {
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
        if (Nt(p)) {
          const v = (p.__vccOpts || p)[t];
          v && s.push(se(v, n, o, i, h, r));
        } else {
          let v = p();
          process.env.NODE_ENV !== "production" && !("catch" in v) && (C(`Component "${h}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), v = Promise.resolve(v)), s.push(() => v.then((d) => {
            if (!d) throw new Error(`Couldn't resolve component "${h}" at "${i.path}"`);
            const l = yn(d) ? d.default : d;
            i.mods[h] = d, i.components[h] = l;
            const u = (l.__vccOpts || l)[t];
            return u && se(u, n, o, i, h, r)();
          }));
        }
    }
  }
  return s;
}
function to(e, t) {
  const n = [], o = [], r = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const h = t.matched[i];
    h && (e.matched.find((v) => ie(v, h)) ? o.push(h) : n.push(h));
    const p = e.matched[i];
    p && (t.matched.find((v) => ie(v, p)) || r.push(p));
  }
  return [
    n,
    o,
    r
  ];
}
function ke(e, t) {
  const n = A({}, e, { matched: e.matched.map((o) => po(o, [
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
function Re(e) {
  return { _custom: { display: e } };
}
let no = 0;
function oo(e, t, n) {
  if (t.__hasDevtools) return;
  t.__hasDevtools = !0;
  const o = no++;
  kn({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (r) => {
    typeof r.now != "function" && C("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.on.inspectComponent((d, l) => {
      d.instanceData && d.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: ke(t.currentRoute.value, "Current Route")
      });
    }), r.on.visitComponentTree(({ treeNode: d, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const u = l.__vrv_devtools;
        d.tags.push({
          label: (u.name ? `${u.name.toString()}: ` : "") + u.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Bt
        });
      }
      Y(l.__vrl_devtools) && (l.__devtoolsApi = r, l.__vrl_devtools.forEach((u) => {
        let m = u.route.path, M = jt, E = "", T = 0;
        u.error ? (m = u.error, M = lo, T = co) : u.isExactActive ? (M = Lt, E = "This is exactly active") : u.isActive && (M = Vt, E = "This link is active"), d.tags.push({
          label: m,
          textColor: T,
          tooltip: E,
          backgroundColor: M
        });
      }));
    }), Et(t.currentRoute, () => {
      p(), r.notifyComponentUpdate(), r.sendInspectorTree(h), r.sendInspectorState(h);
    });
    const s = "router:navigations:" + o;
    r.addTimelineLayer({
      id: s,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((d, l) => {
      r.addTimelineEvent({
        layerId: s,
        event: {
          title: "Error during Navigation",
          subtitle: l.fullPath,
          logType: "error",
          time: r.now(),
          data: { error: d },
          groupId: l.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((d, l) => {
      const u = {
        guard: Re("beforeEach"),
        from: ke(l, "Current Location during this navigation"),
        to: ke(d, "Target location")
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
    }), t.afterEach((d, l, u) => {
      const m = { guard: Re("afterEach") };
      u ? (m.failure = { _custom: {
        type: Error,
        readOnly: !0,
        display: u ? u.message : "",
        tooltip: "Navigation Failure",
        value: u
      } }, m.status = Re("❌")) : m.status = Re("✅"), m.from = ke(l, "Current Location during this navigation"), m.to = ke(d, "Target location"), r.addTimelineEvent({
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
      let l = n.getRoutes().filter((u) => !u.parent || !u.parent.record.components);
      l.forEach(Gt), d.filter && (l = l.filter((u) => Je(u, d.filter.toLowerCase()))), l.forEach((u) => zt(u, t.currentRoute.value)), d.rootNodes = l.map(Ht);
    }
    let v;
    r.on.getInspectorTree((d) => {
      v = d, d.app === e && d.inspectorId === h && p();
    }), r.on.getInspectorState((d) => {
      if (d.app === e && d.inspectorId === h) {
        const l = n.getRoutes().find((u) => u.record.__vd_id === d.nodeId);
        l && (d.state = { options: so(l) });
      }
    }), r.sendInspectorTree(h), r.sendInspectorState(h);
  });
}
function ro(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function so(e) {
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
      display: e.keys.map((o) => `${o.name}${ro(o)}`).join(" "),
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
const Bt = 15485081, Vt = 2450411, Lt = 8702998, io = 2282478, jt = 16486972, ao = 6710886, lo = 16704226, co = 12131356;
function Ht(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: io
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: jt
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Bt
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Lt
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Vt
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: ao
  });
  let o = n.__vd_id;
  return o == null && (o = String(uo++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Ht)
  };
}
let uo = 0;
const ho = /^\/(.*)\/([a-z]*)$/;
function zt(e, t) {
  const n = t.matched.length && ie(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => ie(o, e.record))), e.children.forEach((o) => zt(o, t));
}
function Gt(e) {
  e.__vd_match = !1, e.children.forEach(Gt);
}
function Je(e, t) {
  const n = String(e.re).match(ho);
  if (e.__vd_match = !1, !n || n.length < 3) return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((s) => Je(s, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), r = fe(o);
  return !t.startsWith("/") && (r.includes(t) || o.includes(t)) || r.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((s) => Je(s, t));
}
function po(e, t) {
  const n = {};
  for (const o in e) t.includes(o) || (n[o] = e[o]);
  return n;
}
let fo = () => location.protocol + "//" + location.host;
function Ut(e, t) {
  const { pathname: n, search: o, hash: r } = t, s = e.indexOf("#");
  if (s > -1) {
    let i = r.includes(e.slice(s)) ? e.slice(s).length : 1, h = r.slice(i);
    return h[0] !== "/" && (h = "/" + h), at(h, "");
  }
  return at(n, e) + o + r;
}
function mo(e, t, n, o) {
  let r = [], s = [], i = null;
  const h = ({ state: u }) => {
    const m = Ut(e, location), M = n.value, E = t.value;
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
        type: We.pop,
        direction: T ? T > 0 ? Ue.forward : Ue.back : Ue.unknown
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
  function l() {
    for (const u of s) u();
    s = [], window.removeEventListener("popstate", h), window.removeEventListener("pagehide", d), document.removeEventListener("visibilitychange", d);
  }
  return window.addEventListener("popstate", h), window.addEventListener("pagehide", d), document.addEventListener("visibilitychange", d), {
    pauseListeners: p,
    listen: v,
    destroy: l
  };
}
function pt(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? Se() : null
  };
}
function _o(e) {
  const { history: t, location: n } = window, o = { value: Ut(e, n) }, r = { value: t.state };
  r.value || s(o.value, {
    back: null,
    current: o.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function s(p, v, d) {
    const l = e.indexOf("#"), u = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + p : fo() + e + p;
    try {
      t[d ? "replaceState" : "pushState"](v, "", u), r.value = v;
    } catch (m) {
      process.env.NODE_ENV !== "production" ? C("Error with push/replace State", m) : console.error(m), n[d ? "replace" : "assign"](u);
    }
  }
  function i(p, v) {
    s(p, A({}, t.state, pt(r.value.back, p, r.value.forward, !0), v, { position: r.value.position }), !0), o.value = p;
  }
  function h(p, v) {
    const d = A({}, r.value, t.state, {
      forward: p,
      scroll: Se()
    });
    process.env.NODE_ENV !== "production" && !t.state && C(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), s(d.current, d, !0), s(p, A({}, pt(o.value, p, null), { position: d.position + 1 }, v), !1), o.value = p;
  }
  return {
    location: o,
    state: r,
    push: h,
    replace: i
  };
}
function nc(e) {
  e = Hn(e);
  const t = _o(e), n = mo(e, t.state, t.location, t.replace);
  function o(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const r = A({
    location: "",
    base: e,
    go: o,
    createHref: Gn.bind(null, e)
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
const vo = {
  type: ce.Static,
  value: ""
}, go = /[a-zA-Z0-9_]/;
function wo(e) {
  if (!e) return [[]];
  if (e === "/") return [[vo]];
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
  function l() {
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
        p === "/" ? (v && l(), i()) : p === ":" ? (l(), n = L.Param) : u();
        break;
      case L.EscapeNext:
        u(), n = o;
        break;
      case L.Param:
        p === "(" ? n = L.ParamRegExp : go.test(p) ? u() : (l(), n = L.Static, p !== "*" && p !== "?" && p !== "+" && h--);
        break;
      case L.ParamRegExp:
        p === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + p : n = L.ParamRegExpEnd : d += p;
        break;
      case L.ParamRegExpEnd:
        l(), n = L.Static, p !== "*" && p !== "?" && p !== "+" && h--, d = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === L.ParamRegExp && t(`Unfinished custom RegExp for param "${v}"`), l(), i(), r;
}
const ft = "[^/]+?", bo = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
};
var F = /* @__PURE__ */ (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(F || {});
const ko = /[.+*?^${}()[\]/\\]/g;
function yo(e, t) {
  const n = A({}, bo, t), o = [];
  let r = n.start ? "^" : "";
  const s = [];
  for (const v of e) {
    const d = v.length ? [] : [F.Root];
    n.strict && !v.length && (r += "/");
    for (let l = 0; l < v.length; l++) {
      const u = v[l];
      let m = F.Segment + (n.sensitive ? F.BonusCaseSensitive : 0);
      if (u.type === ce.Static)
        l || (r += "/"), r += u.value.replace(ko, "\\$&"), m += F.Static;
      else if (u.type === ce.Param) {
        const { value: M, repeatable: E, optional: T, regexp: S } = u;
        s.push({
          name: M,
          repeatable: E,
          optional: T
        });
        const x = S || ft;
        if (x !== ft) {
          m += F.BonusCustomRegExp;
          try {
            `${x}`;
          } catch (z) {
            throw new Error(`Invalid custom RegExp for param "${M}" (${x}): ` + z.message);
          }
        }
        let I = E ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        l || (I = T && v.length < 2 ? `(?:/${I})` : "/" + I), T && (I += "?"), r += I, m += F.Dynamic, T && (m += F.BonusOptional), E && (m += F.BonusRepeatable), x === ".*" && (m += F.BonusWildcard);
      }
      d.push(m);
    }
    o.push(d);
  }
  if (n.strict && n.end) {
    const v = o.length - 1;
    o[v][o[v].length - 1] += F.BonusStrict;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
  const i = new RegExp(r, n.sensitive ? "" : "i");
  function h(v) {
    const d = v.match(i), l = {};
    if (!d) return null;
    for (let u = 1; u < d.length; u++) {
      const m = d[u] || "", M = s[u - 1];
      l[M.name] = m && M.repeatable ? m.split("/") : m;
    }
    return l;
  }
  function p(v) {
    let d = "", l = !1;
    for (const u of e) {
      (!l || !d.endsWith("/")) && (d += "/"), l = !1;
      for (const m of u) if (m.type === ce.Static) d += m.value;
      else if (m.type === ce.Param) {
        const { value: M, repeatable: E, optional: T } = m, S = M in v ? v[M] : "";
        if (Y(S) && !E) throw new Error(`Provided param "${M}" is an array but it is not repeatable (* or + modifiers)`);
        const x = Y(S) ? S.join("/") : S;
        if (!x) if (T)
          u.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : l = !0);
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
function Eo(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o) return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === F.Static + F.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === F.Static + F.Segment ? 1 : -1 : 0;
}
function Ft(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const s = Eo(o[n], r[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (mt(o)) return 1;
    if (mt(r)) return -1;
  }
  return r.length - o.length;
}
function mt(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Mo = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function xo(e, t, n) {
  const o = yo(wo(e.path), n);
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
function $o(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = it(Mo, t);
  function r(l) {
    return o.get(l);
  }
  function s(l, u, m) {
    const M = !m, E = vt(l);
    process.env.NODE_ENV !== "production" && To(E, u), E.aliasOf = m && m.record;
    const T = it(t, l), S = [E];
    if ("alias" in l) {
      const z = typeof l.alias == "string" ? [l.alias] : l.alias;
      for (const X of z) S.push(vt(A({}, E, {
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
      if (x = xo(z, u, T), process.env.NODE_ENV !== "production" && u && X[0] === "/" && Ao(x, u), m ? (m.alias.push(x), process.env.NODE_ENV !== "production" && Ro(m, x)) : (I = I || x, I !== x && I.alias.push(x), M && l.name && !gt(x) && (process.env.NODE_ENV !== "production" && Io(l, u), i(l.name))), qt(x) && p(x), E.children) {
        const J = E.children;
        for (let G = 0; G < J.length; G++) s(J[G], x, m && m.children[G]);
      }
      m = m || x;
    }
    return I ? () => {
      i(I);
    } : ye;
  }
  function i(l) {
    if (Pt(l)) {
      const u = o.get(l);
      u && (o.delete(l), n.splice(n.indexOf(u), 1), u.children.forEach(i), u.alias.forEach(i));
    } else {
      const u = n.indexOf(l);
      u > -1 && (n.splice(u, 1), l.record.name && o.delete(l.record.name), l.children.forEach(i), l.alias.forEach(i));
    }
  }
  function h() {
    return n;
  }
  function p(l) {
    const u = So(l, n);
    n.splice(u, 0, l), l.record.name && !gt(l) && o.set(l.record.name, l);
  }
  function v(l, u) {
    let m, M = {}, E, T;
    if ("name" in l && l.name) {
      if (m = o.get(l.name), !m) throw me(P.MATCHER_NOT_FOUND, { location: l });
      if (process.env.NODE_ENV !== "production") {
        const I = Object.keys(l.params || {}).filter((z) => !m.keys.find((X) => X.name === z));
        I.length && C(`Discarded invalid param(s) "${I.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      T = m.record.name, M = A(_t(u.params, m.keys.filter((I) => !I.optional).concat(m.parent ? m.parent.keys.filter((I) => I.optional) : []).map((I) => I.name)), l.params && _t(l.params, m.keys.map((I) => I.name))), E = m.stringify(M);
    } else if (l.path != null)
      E = l.path, process.env.NODE_ENV !== "production" && !E.startsWith("/") && C(`The Matcher cannot resolve relative paths but received "${E}". Unless you directly called \`matcher.resolve("${E}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), m = n.find((I) => I.re.test(E)), m && (M = m.parse(E), T = m.record.name);
    else {
      if (m = u.name ? o.get(u.name) : n.find((I) => I.re.test(u.path)), !m) throw me(P.MATCHER_NOT_FOUND, {
        location: l,
        currentLocation: u
      });
      T = m.record.name, M = A({}, u.params, l.params), E = m.stringify(M);
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
      meta: No(S)
    };
  }
  e.forEach((l) => s(l));
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
function _t(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n;
}
function vt(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Co(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Co(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function gt(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function No(e) {
  return e.reduce((t, n) => A(t, n.meta), {});
}
function Ze(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Ro(e, t) {
  for (const n of e.keys) if (!n.optional && !t.keys.find(Ze.bind(null, n))) return C(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys) if (!n.optional && !e.keys.find(Ze.bind(null, n))) return C(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function To(e, t) {
  t && t.record.name && !e.name && !e.path && C(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Io(e, t) {
  for (let n = t; n; n = n.parent) if (n.record.name === e.name) throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function Ao(e, t) {
  for (const n of t.keys) if (!e.keys.find(Ze.bind(null, n))) return C(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function So(e, t) {
  let n = 0, o = t.length;
  for (; n !== o; ) {
    const s = n + o >> 1;
    Ft(e, t[s]) < 0 ? o = s : n = s + 1;
  }
  const r = Oo(e);
  return r && (o = t.lastIndexOf(r, o - 1), process.env.NODE_ENV !== "production" && o < 0 && C(`Finding ancestor route "${r.record.path}" failed for "${e.record.path}"`)), o;
}
function Oo(e) {
  let t = e;
  for (; t = t.parent; ) if (qt(t) && Ft(e, t) === 0) return t;
}
function qt({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function wt(e) {
  const t = Ee(rt), n = Ee(Dt);
  let o = !1, r = null;
  const s = Z(() => {
    const d = ee(e.to);
    return process.env.NODE_ENV !== "production" && (!o || d !== r) && (Ae(d) || (o ? C(`Invalid value for prop "to" in useLink()
- to:`, d, `
- previous to:`, r, `
- props:`, e) : C(`Invalid value for prop "to" in useLink()
- to:`, d, `
- props:`, e)), r = d, o = !0), t.resolve(d);
  }), i = Z(() => {
    const { matched: d } = s.value, { length: l } = d, u = d[l - 1], m = n.matched;
    if (!u || !m.length) return -1;
    const M = m.findIndex(ie.bind(null, u));
    if (M > -1) return M;
    const E = bt(d[l - 2]);
    return l > 1 && bt(u) === E && m[m.length - 1].path !== E ? m.findIndex(ie.bind(null, d[l - 2])) : M;
  }), h = Z(() => i.value > -1 && Vo(n.params, s.value.params)), p = Z(() => i.value > -1 && i.value === n.matched.length - 1 && Ot(n.params, s.value.params));
  function v(d = {}) {
    if (Bo(d)) {
      const l = t[ee(e.replace) ? "replace" : "push"](ee(e.to)).catch(ye);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => l), l;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && oe) {
    const d = $t();
    if (d) {
      const l = {
        route: s.value,
        isActive: h.value,
        isExactActive: p.value,
        error: null
      };
      d.__vrl_devtools = d.__vrl_devtools || [], d.__vrl_devtools.push(l), on(() => {
        l.route = s.value, l.isActive = h.value, l.isExactActive = p.value, l.error = Ae(ee(e.to)) ? null : 'Invalid "to" value';
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
function Po(e) {
  return e.length === 1 ? e[0] : e;
}
const Do = /* @__PURE__ */ H({
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
  useLink: wt,
  setup(e, { slots: t }) {
    const n = tn(wt(e)), { options: o } = Ee(rt), r = Z(() => ({
      [kt(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      [kt(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && Po(t.default(n));
      return e.custom ? s : Mt("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: r.value
      }, s);
    };
  }
}), Kt = Do;
function Bo(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Vo(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r) return !1;
    } else if (!Y(r) || r.length !== o.length || o.some((s, i) => s.valueOf() !== r[i].valueOf())) return !1;
  }
  return !0;
}
function bt(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const kt = (e, t, n) => e ?? t ?? n, Lo = /* @__PURE__ */ H({
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
    process.env.NODE_ENV !== "production" && jo();
    const o = Ee(Xe), r = Z(() => e.route || o.value), s = Ee(ht, 0), i = Z(() => {
      let v = ee(s);
      const { matched: d } = r.value;
      let l;
      for (; (l = d[v]) && !l.components; ) v++;
      return v;
    }), h = Z(() => r.value.matched[i.value]);
    He(ht, Z(() => i.value + 1)), He(Zn, h), He(Xe, r);
    const p = xt();
    return Et(() => [
      p.value,
      h.value,
      e.name
    ], ([v, d, l], [u, m, M]) => {
      d && (d.instances[l] = v, m && m !== d && v && v === u && (d.leaveGuards.size || (d.leaveGuards = m.leaveGuards), d.updateGuards.size || (d.updateGuards = m.updateGuards))), v && d && (!m || !ie(d, m) || !u) && (d.enterCallbacks[l] || []).forEach((E) => E(v));
    }, { flush: "post" }), () => {
      const v = r.value, d = e.name, l = h.value, u = l && l.components[d];
      if (!u) return yt(n.default, {
        Component: u,
        route: v
      });
      const m = l.props[d], M = m ? m === !0 ? v.params : typeof m == "function" ? m(v) : m : null, T = Mt(u, A({}, M, t, {
        onVnodeUnmounted: (S) => {
          S.component.isUnmounted && (l.instances[d] = null);
        },
        ref: p
      }));
      if (process.env.NODE_ENV !== "production" && oe && T.ref) {
        const S = {
          depth: i.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (Y(T.ref) ? T.ref.map((x) => x.i) : [T.ref.i]).forEach((x) => {
          x.__vrv_devtools = S;
        });
      }
      return yt(n.default, {
        Component: T,
        route: v
      }) || T;
    };
  }
});
function yt(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Wt = Lo;
function jo() {
  const e = $t(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function oc(e) {
  const t = $o(e.routes, e), n = e.parseQuery || Xn, o = e.stringifyQuery || dt, r = e.history;
  if (process.env.NODE_ENV !== "production" && !r) throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const s = be(), i = be(), h = be(), p = nn(re);
  let v = re;
  oe && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const d = ze.bind(null, (c) => "" + c), l = ze.bind(null, Pn), u = ze.bind(null, fe);
  function m(c, b) {
    let g, y;
    return Pt(c) ? (g = t.getRecordMatcher(c), process.env.NODE_ENV !== "production" && !g && C(`Parent route "${String(c)}" not found when adding child route`, b), y = b) : y = c, t.addRoute(y, g);
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
      const N = Ge(n, c, b.path), O = t.resolve({ path: N.path }, b), le = r.createHref(N.fullPath);
      return process.env.NODE_ENV !== "production" && (le.startsWith("//") ? C(`Location "${c}" resolved to "${le}". A resolved location cannot start with multiple slashes.`) : O.matched.length || C(`No match found for location with path "${c}"`)), A(N, O, {
        params: u(O.params),
        hash: fe(N.hash),
        redirectedFrom: void 0,
        href: le
      });
    }
    if (process.env.NODE_ENV !== "production" && !Ae(c))
      return C(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, c), S({});
    let g;
    if (c.path != null)
      process.env.NODE_ENV !== "production" && "params" in c && !("name" in c) && Object.keys(c.params).length && C(`Path "${c.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), g = A({}, c, { path: Ge(n, c.path, b.path).path });
    else {
      const N = A({}, c.params);
      for (const O in N) N[O] == null && delete N[O];
      g = A({}, c, { params: l(N) }), b.params = l(b.params);
    }
    const y = t.resolve(g, b), $ = c.hash || "";
    process.env.NODE_ENV !== "production" && $ && !$.startsWith("#") && C(`A \`hash\` should always start with the character "#". Replace "${$}" with "#${$}".`), y.params = d(u(y.params));
    const B = Vn(o, A({}, c, {
      hash: An($),
      path: y.path
    })), R = r.createHref(B);
    return process.env.NODE_ENV !== "production" && (R.startsWith("//") ? C(`Location "${c}" resolved to "${R}". A resolved location cannot start with multiple slashes.`) : y.matched.length || C(`No match found for location with path "${c.path != null ? c.path : c}"`)), A({
      fullPath: B,
      hash: $,
      query: o === dt ? Jn(c.query) : c.query || {}
    }, y, {
      redirectedFrom: void 0,
      href: R
    });
  }
  function x(c) {
    return typeof c == "string" ? Ge(n, c, p.value.path) : A({}, c);
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
    let le;
    return !B && lt(o, y, g) && (le = me(P.NAVIGATION_DUPLICATED, {
      to: O,
      from: y
    }), st(y, y, !0, !1)), (le ? Promise.resolve(le) : Me(O, y)).catch((U) => ne(U) ? ne(U, P.NAVIGATION_GUARD_REDIRECT) ? U : Ve(U) : Be(U, O, y)).then((U) => {
      if (U) {
        if (ne(U, P.NAVIGATION_GUARD_REDIRECT))
          return process.env.NODE_ENV !== "production" && lt(o, S(U.to), O) && b && (b._count = b._count ? b._count + 1 : 1) > 30 ? (C(`Detected a possibly infinite redirection in a navigation guard when going from "${y.fullPath}" to "${O.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(/* @__PURE__ */ new Error("Infinite redirect in navigation guard"))) : G(A({ replace: R }, x(U.to), {
            state: typeof U.to == "object" ? A({}, $, U.to.state) : $,
            force: B
          }), b || O);
      } else U = $e(O, y, !0, R, $);
      return xe(O, y, U), U;
    });
  }
  function De(c, b) {
    const g = I(c, b);
    return g ? Promise.reject(g) : Promise.resolve();
  }
  function we(c) {
    const b = Ne.values().next().value;
    return b && typeof b.runWithContext == "function" ? b.runWithContext(c) : c();
  }
  function Me(c, b) {
    let g;
    const [y, $, B] = to(c, b);
    g = Fe(y.reverse(), "beforeRouteLeave", c, b);
    for (const N of y) N.leaveGuards.forEach((O) => {
      g.push(se(O, c, b));
    });
    const R = De.bind(null, c, b);
    return g.push(R), he(g).then(() => {
      g = [];
      for (const N of s.list()) g.push(se(N, c, b));
      return g.push(R), he(g);
    }).then(() => {
      g = Fe($, "beforeRouteUpdate", c, b);
      for (const N of $) N.updateGuards.forEach((O) => {
        g.push(se(O, c, b));
      });
      return g.push(R), he(g);
    }).then(() => {
      g = [];
      for (const N of B) if (N.beforeEnter) if (Y(N.beforeEnter)) for (const O of N.beforeEnter) g.push(se(O, c, b));
      else g.push(se(N.beforeEnter, c, b));
      return g.push(R), he(g);
    }).then(() => (c.matched.forEach((N) => N.enterCallbacks = {}), g = Fe(B, "beforeRouteEnter", c, b, we), g.push(R), he(g))).then(() => {
      g = [];
      for (const N of i.list()) g.push(se(N, c, b));
      return g.push(R), he(g);
    }).catch((N) => ne(N, P.NAVIGATION_CANCELLED) ? N : Promise.reject(N));
  }
  function xe(c, b, g) {
    h.list().forEach((y) => we(() => y(c, b, g)));
  }
  function $e(c, b, g, y, $) {
    const B = I(c, b);
    if (B) return B;
    const R = b === re, N = oe ? history.state : {};
    g && (y || R ? r.replace(c.fullPath, A({ scroll: R && N && N.scroll }, $)) : r.push(c.fullPath, $)), p.value = c, st(c, b, g, R), Ve();
  }
  let ae;
  function k() {
    ae || (ae = r.listen((c, b, g) => {
      if (!de.listening) return;
      const y = S(c), $ = J(y, de.currentRoute.value);
      if ($) {
        G(A($, {
          replace: !0,
          force: !0
        }), y).catch(ye);
        return;
      }
      v = y;
      const B = p.value;
      oe && qn(ut(B.fullPath, g.delta), Se()), Me(y, B).catch((R) => ne(R, P.NAVIGATION_ABORTED | P.NAVIGATION_CANCELLED) ? R : ne(R, P.NAVIGATION_GUARD_REDIRECT) ? (G(A(x(R.to), { force: !0 }), y).then((N) => {
        ne(N, P.NAVIGATION_ABORTED | P.NAVIGATION_DUPLICATED) && !g.delta && g.type === We.pop && r.go(-1, !1);
      }).catch(ye), Promise.reject()) : (g.delta && r.go(-g.delta, !1), Be(R, y, B))).then((R) => {
        R = R || $e(y, B, !1), R && (g.delta && !ne(R, P.NAVIGATION_CANCELLED) ? r.go(-g.delta, !1) : g.type === We.pop && ne(R, P.NAVIGATION_ABORTED | P.NAVIGATION_DUPLICATED) && r.go(-1, !1)), xe(y, B, R);
      }).catch(ye);
    }));
  }
  let D = be(), Ce = be(), ue;
  function Be(c, b, g) {
    Ve(c);
    const y = Ce.list();
    return y.length ? y.forEach(($) => $(c, b, g)) : (process.env.NODE_ENV !== "production" && C("uncaught error during route navigation:"), console.error(c)), Promise.reject(c);
  }
  function en() {
    return ue && p.value !== re ? Promise.resolve() : new Promise((c, b) => {
      D.add([c, b]);
    });
  }
  function Ve(c) {
    return ue || (ue = !c, k(), D.list().forEach(([b, g]) => c ? g(c) : b()), D.reset()), c;
  }
  function st(c, b, g, y) {
    const { scrollBehavior: $ } = e;
    if (!oe || !$) return Promise.resolve();
    const B = !g && Kn(ut(c.fullPath, 0)) || (y || !g) && history.state && history.state.scroll || null;
    return sn().then(() => $(c, b, B)).then((R) => R && Fn(R)).catch((R) => Be(R, c, b));
  }
  const Le = (c) => r.go(c);
  let je;
  const Ne = /* @__PURE__ */ new Set(), de = {
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
    onError: Ce.add,
    isReady: en,
    install(c) {
      c.component("RouterLink", Kt), c.component("RouterView", Wt), c.config.globalProperties.$router = de, Object.defineProperty(c.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ee(p)
      }), oe && !je && p.value === re && (je = !0, z(r.location).catch((y) => {
        process.env.NODE_ENV !== "production" && C("Unexpected error when starting the router:", y);
      }));
      const b = {};
      for (const y in re) Object.defineProperty(b, y, {
        get: () => p.value[y],
        enumerable: !0
      });
      c.provide(rt, de), c.provide(Dt, rn(b)), c.provide(Xe, p);
      const g = c.unmount;
      Ne.add(c), c.unmount = function() {
        Ne.delete(c), Ne.size < 1 && (v = re, ae && ae(), ae = null, p.value = re, je = !1, ue = !1), g();
      }, process.env.NODE_ENV !== "production" && oe && oo(c, de, t);
    }
  };
  function he(c) {
    return c.reduce((b, g) => b.then(() => we(g)), Promise.resolve());
  }
  return de;
}
const Ho = ["data-mode", "type", "form", "disabled"], zo = { key: 0 }, Go = /* @__PURE__ */ H({
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
      (f(), W(_e(n.icon), { class: "button__icon" })),
      n.caption ? (f(), _("span", zo, Q(n.caption), 1)) : K("", !0)
    ], 8, Ho));
  }
}), w = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Uo = /* @__PURE__ */ w(Go, [["__scopeId", "data-v-309a8074"]]), Qt = /* @__PURE__ */ H({
  __name: "TForm",
  emits: ["submit", "reset"],
  setup(e, { emit: t }) {
    const n = t;
    return (o, r) => (f(), _("form", {
      class: "form",
      onSubmit: r[0] || (r[0] = an((s) => n("submit", s), ["prevent"])),
      onReset: r[1] || (r[1] = (s) => n("reset", s))
    }, [
      q(o.$slots, "default")
    ], 32));
  }
}), Oe = /* @__PURE__ */ H({
  __name: "THyperlink",
  props: {
    route: {},
    params: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    return (r, s) => n.route ? (f(), W(ee(Kt), {
      key: 0,
      to: { name: e.route, params: e.params },
      class: "hyperlink",
      draggable: "false",
      onClick: s[0] || (s[0] = (i) => o("click", i))
    }, {
      default: te(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["to"])) : (f(), _("a", {
      key: 1,
      href: "#",
      class: "hyperlink",
      draggable: "false",
      onClick: s[1] || (s[1] = (i) => o("click", i))
    }, [
      q(r.$slots, "default")
    ]));
  }
}), Fo = { class: "label" }, qo = {
  key: 0,
  class: "label__caption"
}, Ko = /* @__PURE__ */ H({
  __name: "TLabel",
  props: {
    caption: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (f(), _("label", Fo, [
      t.caption ? (f(), _("span", qo, Q(t.caption), 1)) : K("", !0),
      q(n.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Pe = /* @__PURE__ */ w(Ko, [["__scopeId", "data-v-1bd91740"]]), Wo = { class: "layout" }, Qo = {
  key: 0,
  class: "layout__header"
}, Yo = { class: "layout__content" }, Xo = {
  key: 0,
  class: "layout__sidebar"
}, Jo = { class: "layout__section" }, Zo = {
  key: 1,
  class: "layout__sidebar"
}, er = {
  key: 1,
  class: "layout__footer"
}, tr = /* @__PURE__ */ H({
  __name: "TLayout",
  props: {
    showHeader: { type: Boolean },
    showFooter: { type: Boolean },
    showPrimarySidebar: { type: Boolean },
    showSecondarySidebar: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (f(), _("div", Wo, [
      t.showHeader ? (f(), _("header", Qo, [
        q(n.$slots, "TLayoutHeader", {}, void 0, !0)
      ])) : K("", !0),
      a("main", Yo, [
        t.showPrimarySidebar ? (f(), _("aside", Xo, [
          q(n.$slots, "TLayoutPrimarySidebar", {}, void 0, !0)
        ])) : K("", !0),
        a("div", Jo, [
          q(n.$slots, "default", {}, void 0, !0)
        ]),
        t.showSecondarySidebar ? (f(), _("aside", Zo, [
          q(n.$slots, "TLayoutSecondarySidebar", {}, void 0, !0)
        ])) : K("", !0)
      ]),
      t.showFooter ? (f(), _("footer", er, [
        q(n.$slots, "TLayoutFooter", {}, void 0, !0)
      ])) : K("", !0)
    ]));
  }
}), nr = /* @__PURE__ */ w(tr, [["__scopeId", "data-v-6b791cc6"]]), or = { class: "panel" }, rr = {
  key: 0,
  class: "panel__header"
}, sr = { class: "panel__content" }, ir = {
  key: 0,
  class: "panel__sidebar"
}, ar = { class: "panel__section" }, lr = {
  key: 1,
  class: "panel__sidebar"
}, cr = {
  key: 1,
  class: "panel__footer"
}, ur = /* @__PURE__ */ H({
  __name: "TPanel",
  props: {
    showHeader: { type: Boolean },
    showFooter: { type: Boolean },
    showPrimarySidebar: { type: Boolean },
    showSecondarySidebar: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (f(), _("div", or, [
      t.showHeader ? (f(), _("header", rr, [
        q(n.$slots, "TPanelHeader", {}, void 0, !0)
      ])) : K("", !0),
      a("section", sr, [
        t.showPrimarySidebar ? (f(), _("aside", ir, [
          q(n.$slots, "TPanelPrimarySidebar", {}, void 0, !0)
        ])) : K("", !0),
        a("div", ar, [
          q(n.$slots, "default", {}, void 0, !0)
        ]),
        t.showSecondarySidebar ? (f(), _("aside", lr, [
          q(n.$slots, "TPanelSecondarySidebar", {}, void 0, !0)
        ])) : K("", !0)
      ]),
      t.showFooter ? (f(), _("footer", cr, [
        q(n.$slots, "TPanelFooter", {}, void 0, !0)
      ])) : K("", !0)
    ]));
  }
}), Yt = /* @__PURE__ */ w(ur, [["__scopeId", "data-v-ce59918a"]]), dr = {}, hr = { class: "separator" };
function pr(e, t) {
  return f(), _("div", hr);
}
const fr = /* @__PURE__ */ w(dr, [["render", pr], ["__scopeId", "data-v-e0f0dbc5"]]), mr = { class: "breadcrumb" }, _r = { class: "breadcrumb__list" }, vr = ["data-divider"], gr = { class: "breadcrumb__route-caption | text-truncate" }, wr = { class: "breadcrumb__current | text-truncate" }, br = /* @__PURE__ */ H({
  __name: "TBreadCrumb",
  props: {
    current: {},
    routes: {},
    divider: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (f(), _("nav", mr, [
      a("ul", _r, [
        (f(!0), _(ve, null, ge(t.routes, (r, s) => (f(), _("li", {
          key: s,
          "data-divider": t.divider ?? "/",
          class: "breadcrumb__route"
        }, [
          Te(Oe, {
            route: r.route,
            class: "breadcrumb__route-hyperlink"
          }, {
            default: te(() => [
              (f(), W(_e(r.icon), { class: "breadcrumb__route-caption" })),
              a("span", gr, Q(r.caption), 1)
            ]),
            _: 2
          }, 1032, ["route"])
        ], 8, vr))), 128)),
        a("li", wr, Q(t.current), 1)
      ])
    ]));
  }
}), kr = /* @__PURE__ */ w(br, [["__scopeId", "data-v-9d242250"]]), yr = {
  key: 0,
  class: "combo-box__option",
  value: null
}, Er = ["value"], Mr = /* @__PURE__ */ H({
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
    const t = tt(e, "modelValue"), n = e;
    return (o, r) => (f(), W(Pe, {
      caption: n.caption
    }, {
      default: te(() => [
        nt(a("select", {
          "onUpdate:modelValue": r[0] || (r[0] = (s) => t.value = s),
          class: "combo-box"
        }, [
          r[1] || (r[1] = a("option", {
            disabled: "",
            class: "combo-box__option",
            value: null
          }, " Selecciona un elemento ", -1)),
          n.allowNull ? (f(), _("option", yr, " Ninguno/a ")) : K("", !0),
          (f(!0), _(ve, null, ge(n.options, (s, i) => (f(), _("option", {
            key: i,
            value: s.value,
            class: "combo-box__option"
          }, Q(s.label), 9, Er))), 128))
        ], 512), [
          [ln, t.value]
        ])
      ]),
      _: 1
    }, 8, ["caption"]));
  }
}), xr = /* @__PURE__ */ w(Mr, [["__scopeId", "data-v-5f70a990"]]), $r = { class: "edit__container" }, Cr = ["type", "placeholder", "required", "disabled", "min", "max", "minlength", "maxlength", "pattern"], Nr = /* @__PURE__ */ H({
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
    const n = e, o = t, r = tt(e, "modelValue");
    return (s, i) => (f(), W(Pe, {
      caption: n.caption,
      class: "edit"
    }, {
      default: te(() => [
        a("div", $r, [
          (f(), W(_e(n.icon), { class: "edit__icon" })),
          nt(a("input", {
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
          }, null, 40, Cr), [
            [cn, r.value]
          ])
        ])
      ]),
      _: 1
    }, 8, ["caption"]));
  }
}), Rr = /* @__PURE__ */ w(Nr, [["__scopeId", "data-v-ae2aad87"]]), Tr = {}, Ir = {
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
function Ar(e, t) {
  return f(), _("svg", Ir, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M18 6l-12 12" }, null, -1),
    a("path", { d: "M6 6l12 12" }, null, -1)
  ])]);
}
const Xt = /* @__PURE__ */ w(Tr, [["render", Ar]]), Sr = { class: "form-dialog__header" }, Or = { class: "form-dialog__container" }, Pr = { class: "form-dialog__title" }, Dr = {
  key: 0,
  class: "form-dialog__description"
}, Br = { class: "form-dialog__content" }, Vr = /* @__PURE__ */ H({
  __name: "TFormDialog",
  props: {
    title: {},
    description: {}
  },
  emits: ["submit", "cancel", "reset"],
  setup(e, { emit: t }) {
    const n = e, o = t;
    return (r, s) => (f(), W(Qt, {
      class: "form-dialog",
      onSubmit: s[1] || (s[1] = (i) => o("submit", i)),
      onReset: s[2] || (s[2] = (i) => o("reset", i))
    }, {
      default: te(() => [
        a("header", Sr, [
          a("div", Or, [
            a("h4", Pr, Q(n.title), 1),
            n.description ? (f(), _("p", Dr, Q(n.description), 1)) : K("", !0)
          ]),
          Te(Xt, {
            class: "form-dialog__icon",
            onClick: s[0] || (s[0] = (i) => o("cancel"))
          })
        ]),
        a("div", Br, [
          q(r.$slots, "default", {}, void 0, !0)
        ])
      ]),
      _: 3
    }));
  }
}), Lr = /* @__PURE__ */ w(Vr, [["__scopeId", "data-v-f31251b5"]]), jr = ["maxlength"], Hr = { class: "memo__counter" }, zr = { key: 0 }, Gr = /* @__PURE__ */ H({
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
    const t = tt(e, "modelValue"), n = e, o = Z(() => t.value.length);
    return (r, s) => (f(), W(Pe, {
      caption: n.caption,
      class: "memo"
    }, {
      default: te(() => [
        nt(a("textarea", {
          "onUpdate:modelValue": s[0] || (s[0] = (i) => t.value = i),
          maxlength: e.maxLength,
          class: "memo__field"
        }, null, 8, jr), [
          [un, t.value]
        ]),
        a("small", Hr, [
          a("span", null, Q(o.value), 1),
          e.maxLength ? (f(), _("span", zr, " / " + Q(e.maxLength), 1)) : K("", !0)
        ])
      ]),
      _: 1
    }, 8, ["caption"]));
  }
}), Ur = /* @__PURE__ */ w(Gr, [["__scopeId", "data-v-6b3b5744"]]), Fr = { class: "sidebar-item" }, qr = {
  key: 0,
  class: "sidebar-item__caption"
}, Kr = { class: "sidebar-item__content" }, Wr = { class: "sidebar-item__option-caption" }, Qr = /* @__PURE__ */ H({
  __name: "TSidebarItem",
  props: {
    caption: {},
    options: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (f(), _("li", Fr, [
      t.caption ? (f(), _("h6", qr, Q(t.caption), 1)) : K("", !0),
      a("div", Kr, [
        (f(!0), _(ve, null, ge(t.options, (r) => (f(), W(Oe, {
          route: r.route,
          class: "sidebar-item__option"
        }, {
          default: te(() => [
            (f(), W(_e(r.icon))),
            a("span", Wr, Q(r.caption), 1)
          ]),
          _: 2
        }, 1032, ["route"]))), 256))
      ])
    ]));
  }
}), Jt = /* @__PURE__ */ w(Qr, [["__scopeId", "data-v-1e2345b3"]]);
function Yr(e) {
  const t = xt(e);
  return [t, (o) => {
    t.value = o;
  }];
}
var et;
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
  function l(k) {
    return !d(k);
  }
  e.notEmpty = l;
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
  function we(k) {
    return G(k).close();
  }
  e.closeDialog = we;
  function Me(k) {
    return J(k).select();
  }
  e.inputSelect = Me;
  function xe(k) {
    return J(k).focus();
  }
  e.inputFocus = xe;
  function $e(k) {
    !u(k.key) && k.key != "." && k.preventDefault();
  }
  e.preventIfNumeric = $e;
  function ae(k) {
    u(k.key) || k.preventDefault();
  }
  e.preventIfExclusiveNumeric = ae;
})(et || (et = {}));
const Xr = et, Jr = { class: "tab-panel__navigation" }, Zr = { class: "tab-panel__list" }, es = ["onClick"], ts = ["active-tab"], ns = { class: "tab-panel__content" }, os = /* @__PURE__ */ H({
  __name: "TTabPanel",
  props: {
    tabs: {}
  },
  setup(e) {
    const t = e, [n, o] = Yr(Xr.Use.ZERO);
    return (r, s) => (f(), W(Yt, {
      class: "tab-panel",
      "show-header": ""
    }, {
      TPanelHeader: te(() => [
        a("nav", Jr, [
          a("ul", Zr, [
            (f(!0), _(ve, null, ge(t.tabs, (i, h) => (f(), _("li", {
              key: h,
              onClick: (p) => ee(o)(h),
              class: "tab-panel__list-item"
            }, [
              a("span", {
                "active-tab": h === ee(n),
                class: "tab-panel__tab"
              }, Q(i.title), 9, ts)
            ], 8, es))), 128))
          ])
        ])
      ]),
      default: te(() => [
        a("div", ns, [
          (f(), W(_e(t.tabs[ee(n)]?.content)))
        ])
      ]),
      _: 1
    }));
  }
}), rs = /* @__PURE__ */ w(os, [["__scopeId", "data-v-bfecdcf4"]]), ss = {}, is = {
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
function as(e, t) {
  return f(), _("svg", is, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M9 6l6 6l-6 6" }, null, -1)
  ])]);
}
const Zt = /* @__PURE__ */ w(ss, [["render", as]]), ls = ["data-orientation"], cs = ["onClick"], us = { class: "menu-item__hyperlink-container" }, ds = { class: "menu-item__caption | text-truncate" }, hs = /* @__PURE__ */ H({
  __name: "TMenu",
  props: {
    items: {},
    orientation: {}
  },
  setup(e) {
    const t = e;
    return dn(() => {
      if (t.orientation === "vertical")
        return;
      document.querySelectorAll('.menu[data-orientation="horizontal"] .menu-item').forEach((r) => {
        if (r.parentElement?.classList.contains("submenu"))
          return;
        const i = r.querySelector(".menu-item__chevron");
        i.style.display = "none";
      });
    }), (n, o) => {
      const r = hn("TMenu", !0);
      return f(), _("ul", {
        class: "menu |",
        "data-orientation": t.orientation ?? "vertical"
      }, [
        (f(!0), _(ve, null, ge(t.items, (s, i) => (f(), _("li", {
          class: "menu-item",
          onClick: s.onClick
        }, [
          Te(Oe, {
            route: s.route,
            "data-use-separator": s.useSeparator,
            title: s.caption,
            class: "menu-item__hyperlink"
          }, {
            default: te(() => [
              a("div", us, [
                (f(), W(_e(s.icon), { class: "menu-item__icon" })),
                a("span", ds, Q(s.caption), 1)
              ]),
              Te(Zt, { class: "menu-item__icon | menu-item__chevron" })
            ]),
            _: 2
          }, 1032, ["route", "data-use-separator", "title"]),
          s.submenu && s.submenu.length ? (f(), W(r, {
            key: i,
            items: s.submenu,
            class: "submenu"
          }, null, 8, ["items"])) : K("", !0)
        ], 8, cs))), 256))
      ], 8, ls);
    };
  }
}), ps = /* @__PURE__ */ w(hs, [["__scopeId", "data-v-8f79e952"]]), fs = { class: "sidebar" }, ms = /* @__PURE__ */ H({
  __name: "TSidebar",
  props: {
    items: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (f(), _("ul", fs, [
      (f(!0), _(ve, null, ge(t.items, (r) => (f(), W(Jt, pn({ ref_for: !0 }, r), null, 16))), 256))
    ]));
  }
}), _s = /* @__PURE__ */ w(ms, [["__scopeId", "data-v-5b38146a"]]), vs = {}, gs = {
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
function ws(e, t) {
  return f(), _("svg", gs, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3" }, null, -1),
    a("path", { d: "M7 9m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" }, null, -1),
    a("path", { d: "M12 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1)
  ])]);
}
const bs = /* @__PURE__ */ w(vs, [["render", ws]]), ks = {}, ys = {
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
function Es(e, t) {
  return f(), _("svg", ys, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M21 15h-2.5c-.398 0 -.779 .158 -1.061 .439c-.281 .281 -.439 .663 -.439 1.061c0 .398 .158 .779 .439 1.061c.281 .281 .663 .439 1.061 .439h1c.398 0 .779 .158 1.061 .439c.281 .281 .439 .663 .439 1.061c0 .398 -.158 .779 -.439 1.061c-.281 .281 -.663 .439 -1.061 .439h-2.5"></path><path d="M19 21v1m0 -8v1"></path><path d="M13 21h-7c-.53 0 -1.039 -.211 -1.414 -.586c-.375 -.375 -.586 -.884 -.586 -1.414v-10c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h2m12 3.12v-1.12c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2"></path><path d="M16 10v-6c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-4c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414v6m8 0h-8m8 0h1m-9 0h-1"></path><path d="M8 14v.01"></path><path d="M8 17v.01"></path><path d="M12 13.99v.01"></path><path d="M12 17v.01"></path>', 9)
  ])]);
}
const Ms = /* @__PURE__ */ w(ks, [["render", Es]]), xs = {}, $s = {
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
function Cs(e, t) {
  return f(), _("svg", $s, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 21h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3"></path><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M4 11h12.5"></path><path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path><path d="M19 21v1m0 -8v1"></path>', 7)
  ])]);
}
const Ns = /* @__PURE__ */ w(xs, [["render", Cs]]), Rs = {}, Ts = {
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
function Is(e, t) {
  return f(), _("svg", Ts, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path><path d="M7 20h10"></path><path d="M9 16v4"></path><path d="M15 16v4"></path>', 5)
  ])]);
}
const As = /* @__PURE__ */ w(Rs, [["render", Is]]), Ss = {}, Os = {
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
function Ps(e, t) {
  return f(), _("svg", Os, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }, null, -1),
    a("path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" }, null, -1)
  ])]);
}
const Ds = /* @__PURE__ */ w(Ss, [["render", Ps]]), Bs = {}, Vs = {
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
function Ls(e, t) {
  return f(), _("svg", Vs, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828" }, null, -1),
    a("path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" }, null, -1),
    a("path", { d: "M3 3l18 18" }, null, -1)
  ])]);
}
const js = /* @__PURE__ */ w(Bs, [["render", Ls]]), Hs = {}, zs = {
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
function Gs(e, t) {
  return f(), _("svg", zs, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" }, null, -1),
    a("path", { d: "M21 21l-6 -6" }, null, -1)
  ])]);
}
const Us = /* @__PURE__ */ w(Hs, [["render", Gs]]), Fs = {}, qs = {
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
function Ks(e, t) {
  return f(), _("svg", qs, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    a("path", { d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" }, null, -1)
  ])]);
}
const Ws = /* @__PURE__ */ w(Fs, [["render", Ks]]), Qs = {}, Ys = {
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
function Xs(e, t) {
  return f(), _("svg", Ys, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"></path><path d="M18 14v4h4"></path><path d="M18 11v-4a2 2 0 0 0 -2 -2h-2"></path><path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M8 11h4"></path><path d="M8 15h3"></path>', 8)
  ])]);
}
const Js = /* @__PURE__ */ w(Qs, [["render", Xs]]), Zs = {}, ei = {
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
function ti(e, t) {
  return f(), _("svg", ei, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path>', 5)
  ])]);
}
const ni = /* @__PURE__ */ w(Zs, [["render", ti]]), oi = {}, ri = {
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
function si(e, t) {
  return f(), _("svg", ri, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    a("path", { d: "M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, null, -1),
    a("path", { d: "M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" }, null, -1)
  ])]);
}
const ii = /* @__PURE__ */ w(oi, [["render", si]]), ai = {}, li = {
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
function ci(e, t) {
  return f(), _("svg", li, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" }, null, -1),
    a("path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" }, null, -1)
  ])]);
}
const ui = /* @__PURE__ */ w(ai, [["render", ci]]), di = {}, hi = {
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
function pi(e, t) {
  return f(), _("svg", hi, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M12 5l0 14" }, null, -1),
    a("path", { d: "M5 12l14 0" }, null, -1)
  ])]);
}
const fi = /* @__PURE__ */ w(di, [["render", pi]]), mi = {}, _i = {
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
function vi(e, t) {
  return f(), _("svg", _i, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" }, null, -1),
    a("path", { d: "M13.5 6.5l4 4" }, null, -1)
  ])]);
}
const gi = /* @__PURE__ */ w(mi, [["render", vi]]), wi = {}, bi = {
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
function ki(e, t) {
  return f(), _("svg", bi, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" }, null, -1),
    a("path", { d: "M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" }, null, -1)
  ])]);
}
const yi = /* @__PURE__ */ w(wi, [["render", ki]]), Ei = {}, Mi = {
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
function xi(e, t) {
  return f(), _("svg", Mi, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747" }, null, -1),
    a("path", { d: "M20 4v5h-5" }, null, -1)
  ])]);
}
const $i = /* @__PURE__ */ w(Ei, [["render", xi]]), Ci = {}, Ni = {
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
function Ri(e, t) {
  return f(), _("svg", Ni, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M5 12l14 0" }, null, -1),
    a("path", { d: "M15 16l4 -4" }, null, -1),
    a("path", { d: "M15 8l4 4" }, null, -1)
  ])]);
}
const Ti = /* @__PURE__ */ w(Ci, [["render", Ri]]), Ii = {}, Ai = {
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
function Si(e, t) {
  return f(), _("svg", Ai, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" }, null, -1)
  ])]);
}
const Oi = /* @__PURE__ */ w(Ii, [["render", Si]]), Pi = {}, Di = {
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
function Bi(e, t) {
  return f(), _("svg", Di, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path><path d="M3 10l18 0"></path><path d="M7 15l.01 0"></path><path d="M11 15l2 0"></path>', 5)
  ])]);
}
const Vi = /* @__PURE__ */ w(Pi, [["render", Bi]]), Li = {}, ji = {
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
function Hi(e, t) {
  return f(), _("svg", ji, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" }, null, -1),
    a("path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" }, null, -1),
    a("path", { d: "M8 11v-4a4 4 0 1 1 8 0v4" }, null, -1)
  ])]);
}
const zi = /* @__PURE__ */ w(Li, [["render", Hi]]), Gi = {}, Ui = {
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
function Fi(e, t) {
  return f(), _("svg", Ui, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" }, null, -1),
    a("path", { d: "M9 17v1a3 3 0 0 0 6 0v-1" }, null, -1)
  ])]);
}
const qi = /* @__PURE__ */ w(Gi, [["render", Fi]]), Ki = {}, Wi = {
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
function Qi(e, t) {
  return f(), _("svg", Wi, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    a("path", { d: "M12 17l0 .01" }, null, -1),
    a("path", { d: "M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" }, null, -1)
  ])]);
}
const Yi = /* @__PURE__ */ w(Ki, [["render", Qi]]), Xi = {}, Ji = {
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
function Zi(e, t) {
  return f(), _("svg", Ji, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"></path><path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"></path><path d="M3 21l2.5 -2.5"></path><path d="M18.5 5.5l2.5 -2.5"></path><path d="M10 11l-2 2"></path><path d="M13 14l-2 2"></path>', 7)
  ])]);
}
const ea = /* @__PURE__ */ w(Xi, [["render", Zi]]), ta = {}, na = {
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
function oa(e, t) {
  return f(), _("svg", na, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path><path d="M14 7l6 0"></path><path d="M17 4l0 6"></path>', 6)
  ])]);
}
const ra = /* @__PURE__ */ w(ta, [["render", oa]]), sa = {}, ia = {
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
function aa(e, t) {
  return f(), _("svg", ia, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21l18 0"></path><path d="M3 10l18 0"></path><path d="M5 6l7 -3l7 3"></path><path d="M4 10l0 11"></path><path d="M20 10l0 11"></path><path d="M8 14l0 3"></path><path d="M12 14l0 3"></path><path d="M16 14l0 3"></path>', 9)
  ])]);
}
const la = /* @__PURE__ */ w(sa, [["render", aa]]), ca = {}, ua = {
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
function da(e, t) {
  return f(), _("svg", ua, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M5 12l5 5l10 -10" }, null, -1)
  ])]);
}
const ha = /* @__PURE__ */ w(ca, [["render", da]]), pa = {}, fa = {
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
function ma(e, t) {
  return f(), _("svg", fa, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 6l11 0"></path><path d="M9 12l11 0"></path><path d="M9 18l11 0"></path><path d="M5 6l0 .01"></path><path d="M5 12l0 .01"></path><path d="M5 18l0 .01"></path>', 7)
  ])]);
}
const _a = /* @__PURE__ */ w(pa, [["render", ma]]), va = {}, ga = {
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
function wa(e, t) {
  return f(), _("svg", ga, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821"></path><path d="M5.904 18.596c2.733 2.734 5.9 4 7.07 2.829c1.172 -1.172 -.094 -4.338 -2.828 -7.071c-2.733 -2.734 -5.9 -4 -7.07 -2.829c-1.172 1.172 .094 4.338 2.828 7.071z"></path><path d="M7.5 16l1 1"></path><path d="M12.975 21.425c3.905 -3.906 4.855 -9.288 2.121 -12.021c-2.733 -2.734 -8.115 -1.784 -12.02 2.121"></path>', 5)
  ])]);
}
const ba = /* @__PURE__ */ w(va, [["render", wa]]), ka = {}, ya = {
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
function Ea(e, t) {
  return f(), _("svg", ya, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    a("path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1),
    a("path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }, null, -1)
  ])]);
}
const Ma = /* @__PURE__ */ w(ka, [["render", Ea]]), xa = {}, $a = {
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
function Ca(e, t) {
  return f(), _("svg", $a, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M4 6l16 0" }, null, -1),
    a("path", { d: "M4 12l16 0" }, null, -1),
    a("path", { d: "M4 18l16 0" }, null, -1)
  ])]);
}
const Na = /* @__PURE__ */ w(xa, [["render", Ca]]), Ra = {}, Ta = {
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
function Ia(e, t) {
  return f(), _("svg", Ta, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }, null, -1),
    a("path", { d: "M10 10l4 4m0 -4l-4 4" }, null, -1)
  ])]);
}
const Aa = /* @__PURE__ */ w(Ra, [["render", Ia]]), Sa = {}, Oa = {
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
function Pa(e, t) {
  return f(), _("svg", Oa, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7l16 0"></path><path d="M10 11l0 6"></path><path d="M14 11l0 6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>', 6)
  ])]);
}
const Da = /* @__PURE__ */ w(Sa, [["render", Pa]]), Ba = {}, Va = {
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
function La(e, t) {
  return f(), _("svg", Va, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M4 11h16"></path><path d="M11 15h1"></path><path d="M12 15v3"></path>', 7)
  ])]);
}
const ja = /* @__PURE__ */ w(Ba, [["render", La]]), Ha = {}, za = {
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
function Ga(e, t) {
  return f(), _("svg", za, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" }, null, -1),
    a("path", { d: "M9 12h12l-3 -3" }, null, -1),
    a("path", { d: "M18 15l3 -3" }, null, -1)
  ])]);
}
const Ua = /* @__PURE__ */ w(Ha, [["render", Ga]]), Fa = {}, qa = {
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
function Ka(e, t) {
  return f(), _("svg", qa, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" }, null, -1),
    a("path", { d: "M3 7l9 6l9 -6" }, null, -1)
  ])]);
}
const Wa = /* @__PURE__ */ w(Fa, [["render", Ka]]), Qa = {}, Ya = {
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
function Xa(e, t) {
  return f(), _("svg", Ya, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" }, null, -1)
  ])]);
}
const Ja = /* @__PURE__ */ w(Qa, [["render", Xa]]), Za = {}, el = {
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
function tl(e, t) {
  return f(), _("svg", el, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M17 10h2a2 2 0 0 1 2 2v1"></path><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path>', 7)
  ])]);
}
const nl = /* @__PURE__ */ w(Za, [["render", tl]]), ol = {}, rl = {
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
function sl(e, t) {
  return f(), _("svg", rl, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7v-1a2 2 0 0 1 2 -2h2"></path><path d="M4 17v1a2 2 0 0 0 2 2h2"></path><path d="M16 4h2a2 2 0 0 1 2 2v1"></path><path d="M16 20h2a2 2 0 0 0 2 -2v-1"></path><path d="M5 12l14 0"></path>', 6)
  ])]);
}
const il = /* @__PURE__ */ w(ol, [["render", sl]]), al = {}, ll = {
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
function cl(e, t) {
  return f(), _("svg", ll, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 16v-6a2 2 0 1 1 4 0v6"></path><path d="M3 13h4"></path><path d="M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1"></path><path d="M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01"></path>', 5)
  ])]);
}
const ul = /* @__PURE__ */ w(al, [["render", cl]]), dl = {}, hl = {
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
function pl(e, t) {
  return f(), _("svg", hl, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M3 10l2 -2v8" }, null, -1),
    a("path", { d: "M9 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" }, null, -1),
    a("path", { d: "M17 8h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5" }, null, -1)
  ])]);
}
const fl = /* @__PURE__ */ w(dl, [["render", pl]]), ml = {}, _l = {
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
function vl(e, t) {
  return f(), _("svg", _l, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" }, null, -1),
    a("path", { d: "M12 3v3m0 12v3" }, null, -1)
  ])]);
}
const gl = /* @__PURE__ */ w(ml, [["render", vl]]), wl = {}, bl = {
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
function kl(e, t) {
  return f(), _("svg", bl, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M5 12l14 0" }, null, -1),
    a("path", { d: "M5 12l4 4" }, null, -1),
    a("path", { d: "M5 12l4 -4" }, null, -1)
  ])]);
}
const yl = /* @__PURE__ */ w(wl, [["render", kl]]), El = {}, Ml = {
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
function xl(e, t) {
  return f(), _("svg", Ml, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M12 5l0 14" }, null, -1),
    a("path", { d: "M16 9l-4 -4" }, null, -1),
    a("path", { d: "M8 9l4 -4" }, null, -1)
  ])]);
}
const $l = /* @__PURE__ */ w(El, [["render", xl]]), Cl = {}, Nl = {
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
function Rl(e, t) {
  return f(), _("svg", Nl, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M12 5l0 14" }, null, -1),
    a("path", { d: "M16 15l-4 4" }, null, -1),
    a("path", { d: "M8 15l4 4" }, null, -1)
  ])]);
}
const Tl = /* @__PURE__ */ w(Cl, [["render", Rl]]), Il = {}, Al = {
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
function Sl(e, t) {
  return f(), _("svg", Al, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M5 12l-2 0l9 -9l9 9l-2 0" }, null, -1),
    a("path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" }, null, -1),
    a("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" }, null, -1)
  ])]);
}
const Ol = /* @__PURE__ */ w(Il, [["render", Sl]]), Pl = {}, Dl = {
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
function Bl(e, t) {
  return f(), _("svg", Dl, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 19.875c0 .621 -.512 1.125 -1.143 1.125h-5.714a1.134 1.134 0 0 1 -1.143 -1.125v-15.875a1 1 0 0 1 1 -1h5.857c.631 0 1.143 .504 1.143 1.125l0 15.75"></path><path d="M12 9h-2"></path><path d="M12 6h-3"></path><path d="M12 12h-3"></path><path d="M12 18h-3"></path><path d="M12 15h-2"></path><path d="M21 3h-4"></path><path d="M19 3v18"></path><path d="M21 21h-4"></path>', 10)
  ])]);
}
const Vl = /* @__PURE__ */ w(Pl, [["render", Bl]]), Ll = {}, jl = {
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
function Hl(e, t) {
  return f(), _("svg", jl, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 20l10 0"></path><path d="M6 6l6 -1l6 1"></path><path d="M12 3l0 17"></path><path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path><path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0"></path>', 6)
  ])]);
}
const zl = /* @__PURE__ */ w(Ll, [["render", Hl]]), Gl = {}, Ul = {
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
function Fl(e, t) {
  return f(), _("svg", Ul, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M18.5 18.5l2.5 2.5"></path><path d="M4 6h16"></path><path d="M4 12h4"></path><path d="M4 18h4"></path>', 6)
  ])]);
}
const ql = /* @__PURE__ */ w(Gl, [["render", Fl]]), Kl = {}, Wl = {
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
function Ql(e, t) {
  return f(), _("svg", Wl, [...t[0] || (t[0] = [
    V('<path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path><path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path><path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path><path d="M11 6l9 0"></path><path d="M11 12l9 0"></path><path d="M11 18l9 0"></path>', 7)
  ])]);
}
const Yl = /* @__PURE__ */ w(Kl, [["render", Ql]]), Xl = {}, Jl = {
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
function Zl(e, t) {
  return f(), _("svg", Jl, [...t[0] || (t[0] = [
    a("path", {
      stroke: "none",
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    a("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }, null, -1),
    a("path", { d: "M12 7v5l3 3" }, null, -1)
  ])]);
}
const ec = /* @__PURE__ */ w(Xl, [["render", Zl]]), rc = {
  Clock: ec,
  ListSearch: ql,
  ListCheck: Yl,
  Scale: zl,
  RuleMeasure: Vl,
  Home: Ol,
  Currency: gl,
  Numbers: fl,
  Scan: il,
  Abc: ul,
  Email: Wa,
  Phone: Ja,
  X: Xt,
  LogOut: Ua,
  Calendar: ja,
  Trash: Da,
  Cancel: Aa,
  Menu: Na,
  Dots: Ma,
  Meat: ba,
  Cash: bs,
  CashReceipt: yi,
  CashRegister: Ms,
  CashCalendar: Ns,
  Computer: As,
  Eye: Ds,
  EyeOff: js,
  Search: Us,
  Tag: Ws,
  Report: Js,
  ShoppingCart: ni,
  UserCircle: ii,
  UserGroup: nl,
  Configuration: ui,
  Plus: fi,
  Pencil: gi,
  Reload: $i,
  ArrowRight: Ti,
  ArrowLeft: yl,
  ArrowUp: $l,
  ArrowDown: Tl,
  Receipt: Oi,
  CreditCard: Vi,
  Lock: zi,
  Bell: qi,
  Help: Yi,
  Connection: ea,
  Apps: ra,
  Chevron: Zt,
  Bank: la,
  Check: ha,
  List: _a
}, j = {
  Page: Wt,
  Hyperlink: Oe,
  Button: Uo,
  Form: Qt,
  Label: Pe,
  Layout: nr,
  Panel: Yt,
  Separator: fr,
  BreadCrumb: kr,
  ComboBox: xr,
  Edit: Rr,
  FormDialog: Lr,
  Memo: Ur,
  SidebarItem: Jt,
  TabPanel: rs,
  Menu: ps,
  Sidebar: _s
}, sc = {
  install(e) {
    e.component("ui-breadcrumb", j.BreadCrumb), e.component("ui-button", j.Button), e.component("ui-combo-box", j.ComboBox), e.component("ui-edit", j.Edit), e.component("ui-form", j.Form), e.component("ui-form-dialog", j.FormDialog), e.component("ui-hyperlink", j.Hyperlink), e.component("ui-label", j.Label), e.component("ui-layout", j.Layout), e.component("ui-memo", j.Memo), e.component("ui-menu", j.Menu), e.component("ui-page", j.Page), e.component("ui-panel", j.Panel), e.component("ui-separator", j.Separator), e.component("ui-sidebar", j.Sidebar), e.component("ui-sidebar-item", j.SidebarItem), e.component("ui-tab-panel", j.TabPanel);
  }
};
export {
  rc as Icon,
  sc as Kuxtal,
  j as UI,
  oc as createRouter,
  nc as createWebHistory
};
