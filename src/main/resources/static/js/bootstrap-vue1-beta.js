!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t["bootstrap-vue"] = e()
}(this, function () {
    "use strict";
    function t() {
        return Array.prototype.concat.apply([], arguments)
    }

    function e(t) {
        return t
    }

    function n(t, n) {
        if (void 0 === n && (n = e), oe(t))return t.map(n);
        var i = {};
        for (var r in t)t.hasOwnProperty(r) && (i[n(r)] = "object" == typeof r ? se({}, t[r]) : t[r]);
        return i
    }

    function i(t) {
        return "string" != typeof t && (t = String(t)), t.charAt(0).toLowerCase() + t.slice(1)
    }

    function r() {
        return Array.prototype.concat.apply([], arguments)
    }

    function o(t, e, n) {
        var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, r = window.addEventListener;
        i ? new i(function (t) {
            (t[0].addedNodes.length > 0 || t[0].removedNodes.length > 0) && e()
        }).observe(t, se({
            childList: !0,
            subtree: !0
        }, n)) : r && (t.addEventListener("DOMNodeInserted", e, !1), t.addEventListener("DOMNodeRemoved", e, !1))
    }

    function a(t, n, i) {
        return void 0 === i && (i = e), (oe(t) ? t.slice() : le(t)).reduce(function (t, e) {
            return t[i(e)] = n[e], t
        }, {})
    }

    function s(t) {
        return "string" != typeof t && (t = String(t)), t.charAt(0).toUpperCase() + t.slice(1)
    }

    function l(t, e) {
        return t + s(e)
    }

    function u(t, e) {
        return e + (t ? s(t) : "")
    }

    function d(t, e) {
        return i(e.replace(t, ""))
    }

    function c(t) {
        console.warn("[Bootstrap-Vue warn]: " + t)
    }

    function f() {
        return {
            href: {type: String, default: null},
            rel: {type: String, default: null},
            target: {type: String, default: "_self"},
            active: {type: Boolean, default: !1},
            activeClass: {type: String, default: "active"},
            append: {type: Boolean, default: !1},
            disabled: {type: Boolean, default: !1},
            event: {type: [String, Array], default: "click"},
            exact: {type: Boolean, default: !1},
            exactActiveClass: {type: String, default: "active"},
            replace: {type: Boolean, default: !1},
            routerTag: {type: String, default: "a"},
            to: {type: [String, Object], default: null}
        }
    }

    function p(t) {
        return t.to && !t.disabled ? "router-link" : "a"
    }

    function h(t) {
        var e = t.disabled, n = t.href, i = t.to;
        return e ? "#" : n || (i && "string" == typeof i ? i : "#")
    }

    function g(t) {
        var e = t.target, n = t.rel;
        return "_blank" === e && null === n ? "noopener" : n || null
    }

    function m(t) {
        var e = t.disabled, n = t.tag, i = t.href, r = t.suppliedHandler, o = t.parent, a = "router-link" === n;
        return function (t) {
            e && t instanceof Event ? (t.stopPropagation(), t.stopImmediatePropagation()) : (o.$root.$emit("clicked::link", t), a && t.target.__vue__ && t.target.__vue__.$emit("click", t), "function" == typeof r && r.apply(void 0, arguments)), (!a && "#" === i || e) && t.preventDefault()
        }
    }

    function v(t) {
        "focusin" === t.type ? t.target.classList.add("focus") : "focusout" === t.type && t.target.classList.remove("focus")
    }

    function b(t) {
        return t && (t.offsetWidth > 0 || t.offsetHeight > 0)
    }

    function y(t) {
        var e = {};
        return t && "[object Function]" === e.toString.call(t)
    }

    function _(t, e) {
        if (1 !== t.nodeType)return [];
        var n = window.getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function w(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function S(t) {
        if (!t || -1 !== ["HTML", "BODY", "#document"].indexOf(t.nodeName))return window.document.body;
        var e = _(t), n = e.overflow, i = e.overflowX, r = e.overflowY;
        return /(auto|scroll)/.test(n + r + i) ? t : S(w(t))
    }

    function k(t) {
        var e = t && t.offsetParent, n = e && e.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) && "static" === _(e, "position") ? k(e) : e : window.document.documentElement
    }

    function C(t) {
        var e = t.nodeName;
        return "BODY" !== e && ("HTML" === e || k(t.firstElementChild) === t)
    }

    function T(t) {
        return null !== t.parentNode ? T(t.parentNode) : t
    }

    function x(t, e) {
        if (!(t && t.nodeType && e && e.nodeType))return window.document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? t : e, r = n ? e : t, o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var a = o.commonAncestorContainer;
        if (t !== a && e !== a || i.contains(r))return C(a) ? a : k(a);
        var s = T(t);
        return s.host ? x(s.host, e) : x(t, T(e).host)
    }

    function $(t) {
        var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft", n = t.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = window.document.documentElement;
            return (window.document.scrollingElement || i)[e]
        }
        return t[e]
    }

    function B(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = $(e, "top"), r = $(e, "left"), o = n ? -1 : 1;
        return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t
    }

    function E(t, e) {
        var n = "x" === e ? "Left" : "Top", i = "Left" === n ? "Right" : "Bottom";
        return +t["border" + n + "Width"].split("px")[0] + +t["border" + i + "Width"].split("px")[0]
    }

    function P(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], je() ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
    }

    function O() {
        var t = window.document.body, e = window.document.documentElement, n = je() && window.getComputedStyle(e);
        return {height: P("Height", t, e, n), width: P("Width", t, e, n)}
    }

    function L(t) {
        return qe({}, t, {right: t.left + t.width, bottom: t.top + t.height})
    }

    function I(t) {
        var e = {};
        if (je())try {
            e = t.getBoundingClientRect();
            var n = $(t, "top"), i = $(t, "left");
            e.top += n, e.left += i, e.bottom += n, e.right += i
        } catch (t) {
        } else e = t.getBoundingClientRect();
        var r = {
            left: e.left,
            top: e.top,
            width: e.right - e.left,
            height: e.bottom - e.top
        }, o = "HTML" === t.nodeName ? O() : {}, a = o.width || t.clientWidth || r.right - r.left, s = o.height || t.clientHeight || r.bottom - r.top, l = t.offsetWidth - a, u = t.offsetHeight - s;
        if (l || u) {
            var d = _(t);
            l -= E(d, "x"), u -= E(d, "y"), r.width -= l, r.height -= u
        }
        return L(r)
    }

    function A(t, e) {
        var n = je(), i = "HTML" === e.nodeName, r = I(t), o = I(e), a = S(t), s = _(e), l = +s.borderTopWidth.split("px")[0], u = +s.borderLeftWidth.split("px")[0], d = L({
            top: r.top - o.top - l,
            left: r.left - o.left - u,
            width: r.width,
            height: r.height
        });
        if (d.marginTop = 0, d.marginLeft = 0, !n && i) {
            var c = +s.marginTop.split("px")[0], f = +s.marginLeft.split("px")[0];
            d.top -= l - c, d.bottom -= l - c, d.left -= u - f, d.right -= u - f, d.marginTop = c, d.marginLeft = f
        }
        return (n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (d = B(d, e)), d
    }

    function F(t) {
        var e = window.document.documentElement, n = A(t, e), i = Math.max(e.clientWidth, window.innerWidth || 0), r = Math.max(e.clientHeight, window.innerHeight || 0), o = $(e), a = $(e, "left");
        return L({top: o - n.top + n.marginTop, left: a - n.left + n.marginLeft, width: i, height: r})
    }

    function D(t) {
        var e = t.nodeName;
        return "BODY" !== e && "HTML" !== e && ("fixed" === _(t, "position") || D(w(t)))
    }

    function N(t, e, n, i) {
        var r = {top: 0, left: 0}, o = x(t, e);
        if ("viewport" === i)r = F(o); else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = S(w(t))).nodeName && (a = window.document.documentElement) : a = "window" === i ? window.document.documentElement : i;
            var s = A(a, o);
            if ("HTML" !== a.nodeName || D(o))r = s; else {
                var l = O(), u = l.height, d = l.width;
                r.top += s.top - s.marginTop, r.bottom = u + s.top, r.left += s.left - s.marginLeft, r.right = d + s.left
            }
        }
        return r.left += n, r.top += n, r.right -= n, r.bottom -= n, r
    }

    function V(t) {
        return t.width * t.height
    }

    function H(t, e, n, i, r) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto"))return t;
        var a = N(n, i, o, r), s = {
            top: {width: a.width, height: e.top - a.top},
            right: {width: a.right - e.right, height: a.height},
            bottom: {width: a.width, height: a.bottom - e.bottom},
            left: {width: e.left - a.left, height: a.height}
        }, l = Object.keys(s).map(function (t) {
            return qe({key: t}, s[t], {area: V(s[t])})
        }).sort(function (t, e) {
            return e.area - t.area
        }), u = l.filter(function (t) {
            var e = t.width, i = t.height;
            return e >= n.clientWidth && i >= n.clientHeight
        }), d = u.length > 0 ? u[0].key : l[0].key, c = t.split("-")[1];
        return d + (c ? "-" + c : "")
    }

    function M(t, e, n) {
        return A(n, x(e, n))
    }

    function j(t) {
        var e = window.getComputedStyle(t), n = parseFloat(e.marginTop) + parseFloat(e.marginBottom), i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
        return {width: t.offsetWidth + i, height: t.offsetHeight + n}
    }

    function R(t) {
        var e = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return t.replace(/left|right|bottom|top/g, function (t) {
            return e[t]
        })
    }

    function z(t, e, n) {
        n = n.split("-")[0];
        var i = j(t), r = {
            width: i.width,
            height: i.height
        }, o = -1 !== ["right", "left"].indexOf(n), a = o ? "top" : "left", s = o ? "left" : "top", l = o ? "height" : "width", u = o ? "width" : "height";
        return r[a] = e[a] + e[l] / 2 - i[l] / 2, r[s] = n === s ? e[s] - i[u] : e[R(s)], r
    }

    function W(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function q(t, e, n) {
        if (Array.prototype.findIndex)return t.findIndex(function (t) {
            return t[e] === n
        });
        var i = W(t, function (t) {
            return t[e] === n
        });
        return t.indexOf(i)
    }

    function G(t, e, n) {
        return (void 0 === n ? t : t.slice(0, q(t, "name", n))).forEach(function (t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && y(n) && (e.offsets.popper = L(e.offsets.popper), e.offsets.reference = L(e.offsets.reference), e = n(e, t))
        }), e
    }

    function U() {
        if (!this.state.isDestroyed) {
            var t = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
            t.offsets.reference = M(this.state, this.popper, this.reference), t.placement = H(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = z(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = G(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
        }
    }

    function K(t, e) {
        return t.some(function (t) {
            var n = t.name;
            return t.enabled && n === e
        })
    }

    function Y(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length - 1; i++) {
            var r = e[i], o = r ? "" + r + n : t;
            if (void 0 !== window.document.body.style[o])return o
        }
        return null
    }

    function Z() {
        return this.state.isDestroyed = !0, K(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[Y("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function J(t, e, n, i) {
        var r = "BODY" === t.nodeName, o = r ? window : t;
        o.addEventListener(e, n, {passive: !0}), r || J(S(o.parentNode), e, n, i), i.push(o)
    }

    function X(t, e, n, i) {
        n.updateBound = i, window.addEventListener("resize", n.updateBound, {passive: !0});
        var r = S(t);
        return J(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function Q() {
        this.state.eventsEnabled || (this.state = X(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function tt(t, e) {
        return window.removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
            t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e
    }

    function et() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = tt(this.reference, this.state))
    }

    function nt(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function it(t, e) {
        Object.keys(e).forEach(function (n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && nt(e[n]) && (i = "px"), t.style[n] = e[n] + i
        })
    }

    function rt(t, e) {
        Object.keys(e).forEach(function (n) {
            !1 !== e[n] ? t.setAttribute(n, e[n]) : t.removeAttribute(n)
        })
    }

    function ot(t, e, n) {
        var i = W(t, function (t) {
            return t.name === e
        }), r = !!i && t.some(function (t) {
                return t.name === n && t.enabled && t.order < i.order
            });
        if (!r) {
            var o = "`" + e + "`", a = "`" + n + "`";
            console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    function at(t) {
        return "end" === t ? "start" : "start" === t ? "end" : t
    }

    function st(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = Ue.indexOf(t), i = Ue.slice(n + 1).concat(Ue.slice(0, n));
        return e ? i.reverse() : i
    }

    function lt(t, e, n, i) {
        var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], a = r[2];
        if (!o)return t;
        if (0 === a.indexOf("%")) {
            var s = void 0;
            switch (a) {
                case"%p":
                    s = n;
                    break;
                case"%":
                case"%r":
                default:
                    s = i
            }
            return L(s)[e] / 100 * o
        }
        if ("vh" === a || "vw" === a) {
            return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
        }
        return o
    }

    function ut(t, e, n, i) {
        var r = [0, 0], o = -1 !== ["right", "left"].indexOf(i), a = t.split(/(\+|\-)/).map(function (t) {
            return t.trim()
        }), s = a.indexOf(W(a, function (t) {
            return -1 !== t.search(/,|\s/)
        }));
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/, u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
        return (u = u.map(function (t, i) {
            var r = (1 === i ? !o : o) ? "height" : "width", a = !1;
            return t.reduce(function (t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e)
            }, []).map(function (t) {
                return lt(t, r, e, n)
            })
        })).forEach(function (t, e) {
            t.forEach(function (n, i) {
                nt(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1))
            })
        }), r
    }

    function dt(t) {
        return t && (t.offsetWidth > 0 || t.offsetHeight > 0)
    }

    function ct(t) {
        return (t || []).filter(dt)
    }

    function ft(t) {
        for (var e in Sn)if (void 0 !== t.style[e])return Sn[e];
        return null
    }

    function pt(t, e, n) {
        return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(Cn.replace("%{w}", String(t)).replace("%{h}", String(e)).replace("%{f}", n))
    }

    function ht() {
        return {type: [Boolean, String, Number], default: !1}
    }

    function gt() {
        return {type: [String, Number], default: null}
    }

    function mt(t) {
        return t && (t.offsetWidth > 0 || t.offsetHeight > 0)
    }

    function vt(t, e) {
        if (!t || !t.querySelectorAll || !e)return null;
        for (var n = re(t.querySelectorAll(e)), i = n.find ? n.find(function (t) {
            return mt(t)
        }) : null, r = 0; !i && r < n.length; r++)mt(n[r]) && (i = n[r]);
        return i
    }

    function bt(t) {
        return t && (t.offsetWidth > 0 || t.offsetHeight > 0)
    }

    function yt(t, e) {
        return wi(e).map(function (e, n) {
            return {number: n + t, className: null}
        })
    }

    function _t(t) {
        return t && (t.offsetWidth > 0 || t.offsetHeight > 0)
    }

    function wt(t, e) {
        return wi(e).map(function (e, n) {
            return {number: n + t, className: null}
        })
    }

    function St(t) {
        return "__BV_" + t + "_" + Fi++ + "__"
    }

    function kt(t) {
        return t && (null !== t.offsetParent || !(t.offsetWidth > 0 || t.offsetHeight > 0))
    }

    function Ct(t) {
        return !t || t.disabled || t.classList.contains("disabled") || Boolean(t.getAttribute("disabled"))
    }

    function Tt(t, e, n, i) {
        var r = -1, o = t ? t.length : 0;
        for (i && o && (n = t[++r]); ++r < o;)n = e(n, t[r], r, t);
        return n
    }

    function xt(t) {
        return t.split("")
    }

    function $t(t) {
        return t.match(Zi) || []
    }

    function Bt(t) {
        return mr.test(t)
    }

    function Et(t) {
        return vr.test(t)
    }

    function Pt(t) {
        return Bt(t) ? Ot(t) : xt(t)
    }

    function Ot(t) {
        return t.match(hr) || []
    }

    function Lt(t) {
        return t.match(gr) || []
    }

    function It(t, e, n) {
        var i = -1, r = t.length;
        e < 0 && (e = -e > r ? 0 : r + e), (n = n > r ? r : n) < 0 && (n += r), r = e > n ? 0 : n - e >>> 0, e >>>= 0;
        for (var o = Array(r); ++i < r;)o[i] = t[i + e];
        return o
    }

    function At(t) {
        if ("string" == typeof t)return t;
        if (Nt(t))return xr ? xr.call(t) : "";
        var e = t + "";
        return "0" == e && 1 / t == -Ki ? "-0" : e
    }

    function Ft(t, e, n) {
        var i = t.length;
        return n = void 0 === n ? i : n, !e && n >= i ? t : It(t, e, n)
    }

    function Dt(t) {
        return !!t && "object" == typeof t
    }

    function Nt(t) {
        return "symbol" == typeof t || Dt(t) && kr.call(t) == Yi
    }

    function Vt(t) {
        return null == t ? "" : At(t)
    }

    function Ht(t) {
        return (t = Vt(t)) && t.replace(Ji, Sr).replace(pr, "")
    }

    function Mt(t, e, n) {
        return t = Vt(t), void 0 === (e = n ? void 0 : e) ? Et(t) ? Lt(t) : $t(t) : t.match(e) || []
    }

    function jt(t, e, n, i) {
        var r = le(e.modifiers || {}).filter(function (t) {
            return !Vr[t]
        });
        e.value && r.push(e.value);
        var o = function () {
            i({targets: r, vnode: t})
        };
        return le(Vr).forEach(function (i) {
            (n[i] || e.modifiers[i]) && t.elm.addEventListener(i, o)
        }), r
    }

    function Rt(t) {
        return t.nodeType
    }

    function zt(t, e) {
        var n = t.closest(e);
        return n === t ? null : n
    }

    function Wt(t, e) {
        return e || (e = document), Rt(e) ? re(e.querySelectorAll(t)) : []
    }

    function qt(t, e) {
        return e || (e = document), Rt(e) ? e.querySelector(t) || null : null
    }

    function Gt(t) {
        return t ? t.__vue__ : null
    }

    function Ut(t) {
        return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }

    function Kt(t, e, n) {
        for (var i in n)if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i], o = e[i], a = o && Rt(o) ? "element" : Ut(o);
            new RegExp(r).test(a) || console.error(t + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '"')
        }
    }

    function Yt(t, e, n) {
        this._$el = t, this._selector = [Jr.NAV_LINKS, Jr.LIST_ITEMS, Jr.DROPDOWN_ITEMS].join(","), this._config = se({}, Kr), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, this._$root = n.context.$root || null, this._resizeTimeout = null, this.updateConfig(e)
    }

    function Zt(t, e, n) {
        return t[Ur] ? t[Ur].updateConfig(e).listen() : (t[Ur] = new Yt(t, e, n), t[Ur].listen()), t[Ur]
    }

    function Jt(t) {
        t[Ur] && (t[Ur].unListen().dispose(), t[Ur] = null)
    }

    function Xt(t) {
        var e = {};
        "string" == typeof t.value ? e.title = t.value : "function" == typeof t.value ? e.title = t.value : "object" == typeof t.value && (e = se(t.value)), t.arg && (e.container = "#" + t.arg), le(t.modifiers).forEach(function (t) {
            if (/^html$/.test(t))e.html = !0; else if (/^nofade$/.test(t))e.animation = !1; else if (/^(auto|top|bottom|left|right)$/.test(t))e.placement = t; else if (/^d\d+$/.test(t)) {
                var n = parseInt(t.slice(1), 10) || 0;
                n && (e.delay = n)
            } else if (/^o-?\d+$/.test(t)) {
                var i = parseInt(t.slice(1), 10) || 0;
                i && (e.offset = i)
            }
        });
        var n = {};
        return ("string" == typeof e.trigger ? e.trigger.trim().split(/\s+/) : []).forEach(function (t) {
            no[t] && (n[t] = !0)
        }), le(no).forEach(function (e) {
            t.modifiers[e] && (n[e] = !0)
        }), e.trigger = le(n).join(" "), "blur" === e.trigger && (e.trigger = "focus"), e.trigger || delete e.trigger, e
    }

    function Qt(t, e, n) {
        to && (Ze ? t[eo] ? t[eo].updateConfig(Xt(e)) : t[eo] = new Di(t, Xt(e), n.context.$root) : c("v-b-tooltip: Popper.js is required for tooltips to work"))
    }

    function te(t) {
        to && t[eo] && (t[eo].destroy(), t[eo] = null, delete t[eo])
    }

    function ee(t) {
        var e = {};
        "string" == typeof t.value ? e.content = t.value : "function" == typeof t.value ? e.content = t.value : "object" == typeof t.value && (e = se(t.value)), t.arg && (e.container = "#" + t.arg), le(t.modifiers).forEach(function (t) {
            if (/^html$/.test(t))e.html = !0; else if (/^nofade$/.test(t))e.animation = !1; else if (/^(auto|top|bottom|left|right)$/.test(t))e.placement = t; else if (/^d\d+$/.test(t)) {
                var n = parseInt(t.slice(1), 10) || 0;
                n && (e.delay = n)
            } else if (/^o-?\d+$/.test(t)) {
                var i = parseInt(t.slice(1), 10) || 0;
                i && (e.offset = i)
            }
        });
        var n = {};
        return ("string" == typeof e.trigger ? e.trigger.trim().split(/\s+/) : []).forEach(function (t) {
            ao[t] && (n[t] = !0)
        }), le(ao).forEach(function (e) {
            t.modifiers[e] && (n[e] = !0)
        }), e.trigger = le(n).join(" "), "blur" === e.trigger && (e.trigger = "focus"), e.trigger || delete e.trigger, e
    }

    function ne(t, e, n) {
        ro && (Ze ? t[oo] ? t[oo].updateConfig(ee(e)) : t[oo] = new zi(t, ee(e), n.context.$root) : c("v-b-popover: Popper.js is required for popovers to work"))
    }

    function ie(t) {
        ro && t[oo] && (t[oo].destroy(), t[oo] = null, delete t[oo])
    }

    Array.from || (Array.from = function () {
        var t = Object.prototype.toString, e = function (e) {
            return "function" == typeof e || "[object Function]" === t.call(e)
        }, n = function (t) {
            var e = Number(t);
            return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e
        }, i = Math.pow(2, 53) - 1, r = function (t) {
            return Math.min(Math.max(n(t), 0), i)
        };
        return function (t) {
            var n = this, i = Object(t);
            if (null == t)throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var o, a = arguments.length > 1 ? arguments[1] : void 0;
            if (void 0 !== a) {
                if (!e(a))throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (o = arguments[2])
            }
            for (var s, l = r(i.length), u = e(n) ? Object(new n(l)) : new Array(l), d = 0; d < l;)s = i[d], u[d] = a ? void 0 === o ? a(s, d) : a.call(o, s, d) : s, d += 1;
            return u.length = l, u
        }
    }()), Array.isArray || (Array.isArray = function (t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    });
    var re = Array.from, oe = Array.isArray, ae = function (t, e) {
        return -1 !== t.indexOf(e)
    };
    "function" != typeof Object.assign && (Object.assign = function (t, e) {
        var n = arguments;
        if (null == t)throw new TypeError("Cannot convert undefined or null to object");
        for (var i = Object(t), r = 1; r < arguments.length; r++) {
            var o = n[r];
            if (null != o)for (var a in o)Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a])
        }
        return i
    });
    var se = Object.assign, le = Object.keys, ue = Object.defineProperties, de = Object.defineProperty, ce = Object.create, fe = Object.assign || function (t) {
            for (var e, n = arguments, i = 1, r = arguments.length; i < r; i++) {
                e = n[i];
                for (var o in e)Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            }
            return t
        }, pe = Object.keys, he = function () {
        for (var t = arguments, e = fe({}, arguments[0]), n = 1; n < arguments.length; n++)for (var i = 0, o = pe(arguments[n]); i < o.length; i++) {
            var a = o[i];
            if (void 0 !== e[a])switch (a) {
                case"class":
                case"style":
                case"directives":
                    e[a] = r(e[a], t[n][a]);
                    break;
                case"staticClass":
                    e[a] && (e[a] = e[a].trim() + " "), e[a] += t[n][a].trim();
                    break;
                case"on":
                case"nativeOn":
                    for (var s = 0, l = pe(arguments[n][a]); s < l.length; s++) {
                        var u = l[s];
                        e[a][u] ? e[a][u] = r(t[n][a][u], e[a][u]) : e[a][u] = t[n][a][u]
                    }
                    break;
                case"attrs":
                case"props":
                case"domProps":
                case"scopedSlots":
                case"staticStyle":
                case"hook":
                case"transition":
                    e[a] = fe({}, e[a], t[n][a]);
                    break;
                case"slot":
                case"key":
                case"ref":
                case"tag":
                case"show":
                case"keepAlive":
                default:
                    e[a] = t[n][a]
            } else e[a] = t[n][a]
        }
        return e
    }, ge = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.localShow ? n("div", {
                class: t.classObject,
                attrs: {role: "alert", "aria-live": "polite", "aria-atomic": "true"}
            }, [t.dismissible ? n("button", {
                staticClass: "close",
                attrs: {type: "button", "data-dismiss": "alert", "aria-label": t.dismissLabel},
                on: {
                    click: function (e) {
                        e.stopPropagation(), e.preventDefault(), t.dismiss(e)
                    }
                }
            }, [n("span", {
                staticClass: "d-inline-block",
                attrs: {"aria-hidden": "true"}
            }, [t._t("dismiss", [t._v("Г—")])], 2)]) : t._e(), t._t("default")], 2) : t._e()
        },
        staticRenderFns: [],
        model: {prop: "show", event: "input"},
        data: function () {
            return {countDownTimerId: null, dismissed: !1}
        },
        computed: {
            classObject: function () {
                return ["alert", this.alertVariant, this.dismissible ? "alert-dismissible" : ""]
            }, alertVariant: function () {
                return "alert-" + this.variant
            }, localShow: function () {
                return !this.dismissed && (this.countDownTimerId || this.show)
            }
        },
        props: {
            variant: {type: String, default: "info"},
            dismissible: {type: Boolean, default: !1},
            dismissLabel: {type: String, default: "Close"},
            show: {type: [Boolean, Number], default: !1}
        },
        watch: {
            show: function () {
                this.showChanged()
            }
        },
        mounted: function () {
            this.showChanged()
        },
        destroyed: function () {
            this.clearCounter()
        },
        methods: {
            dismiss: function () {
                this.clearCounter(), this.dismissed = !0, this.$emit("dismissed"), this.$emit("input", !1), "number" == typeof this.show ? (this.$emit("dismiss-count-down", 0), this.$emit("input", 0)) : this.$emit("input", !1)
            }, clearCounter: function () {
                this.countDownTimerId && (clearInterval(this.countDownTimerId), this.countDownTimerId = null)
            }, showChanged: function () {
                var t = this;
                if (this.clearCounter(), this.dismissed = !1, !0 !== this.show && !1 !== this.show && null !== this.show && 0 !== this.show) {
                    var e = this.show;
                    this.countDownTimerId = setInterval(function () {
                        e < 1 ? t.dismiss() : (e--, t.$emit("dismiss-count-down", e), t.$emit("input", e))
                    }, 1e3)
                }
            }
        }
    }, me = {
        functional: !0,
        props: {
            tag: {type: String, default: "span"},
            variant: {type: String, default: "secondary"},
            pill: {type: Boolean, default: !1}
        },
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(n.tag, he(i, {
                staticClass: "badge",
                class: [n.variant ? "badge-" + n.variant : "badge-secondary", {"badge-pill": Boolean(n.pill)}]
            }), r)
        }
    }, ve = (f(), {
        functional: !0, props: f(), render: function (t, e) {
            var n = e.props, i = e.data, r = e.parent, o = e.children, a = p(n), s = g(n), l = h(n), u = "router-link" === a ? "nativeOn" : "on", d = (i[u] || {}).click, c = {
                click: m({
                    tag: a,
                    href: l,
                    disabled: n.disabled,
                    suppliedHandler: d,
                    parent: r
                })
            }, f = he(i, {
                class: [n.active ? n.exact ? n.exactActiveClass : n.activeClass : null, {disabled: n.disabled}],
                attrs: {
                    rel: s,
                    href: l,
                    target: n.target,
                    "aria-disabled": "a" === a ? n.disabled ? "true" : "false" : null
                },
                props: se(n, {tag: n.routerTag})
            });
            return f[u] = se(f[u] || {}, c), t(a, f, o)
        }
    }), be = se(f(), {
        text: {type: String, default: null},
        active: {type: Boolean, default: !1},
        href: {type: String, default: "#"},
        ariaCurrent: {type: String, default: "location"}
    }), ye = {
        functional: !0, props: be, render: function (t, e) {
            var n = e.props, i = e.data, r = e.children, o = n.active ? "span" : ve, s = {
                props: a(be, n),
                domProps: {innerHTML: n.text}
            };
            return n.active ? s.attrs = {"aria-current": n.ariaCurrent} : s.attrs = {href: n.href}, t(o, he(i, s), r)
        }
    }, _e = {
        functional: !0,
        props: se({}, be, {text: {type: String, default: null}, href: {type: String, default: null}}),
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t("li", he(i, {
                staticClass: "breadcrumb-item",
                class: {active: n.active},
                attrs: {role: "presentation"}
            }), [t(ye, {props: n}, r)])
        }
    }, we = {
        functional: !0, props: {items: {type: Array, default: null}}, render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            if (oe(n.items)) {
                var o = !1;
                r = n.items.map(function (e, i) {
                    "object" != typeof e && (e = {text: e});
                    var r = e.active;
                    return r && (o = !0), r || o || (r = i + 1 === n.items.length), t(_e, {props: se({}, e, {active: r})})
                })
            }
            return t("ol", he(i, {staticClass: "breadcrumb"}), r)
        }
    }, Se = {
        block: {type: Boolean, default: !1},
        disabled: {type: Boolean, default: !1},
        size: {
            type: String, default: null, validator: function (t) {
                return ae(["sm", "", "lg"], t)
            }
        },
        variant: {type: String, default: null},
        type: {type: String, default: "button"},
        pressed: {type: Boolean, default: null}
    }, ke = f();
    delete ke.href.default, delete ke.to.default;
    for (var Ce = le(ke), Te = {
        functional: !0, props: se(ke, Se), render: function (e, n) {
            var i = n.props, r = n.data, o = n.listeners, s = n.children, l = Boolean(i.href || i.to), u = "boolean" == typeof i.pressed, d = {
                click: function (e) {
                    i.disabled && e instanceof Event ? (e.stopPropagation(), e.preventDefault()) : u && t(o["update:pressed"]).forEach(function (t) {
                        "function" == typeof t && t(!i.pressed)
                    })
                }
            };
            u && (d.focusin = v, d.focusout = v);
            var c, f = {
                staticClass: "btn",
                class: [i.variant ? "btn-" + i.variant : "btn-secondary", (c = {
                    "btn-block": i.block,
                    disabled: i.disabled,
                    active: i.pressed
                }, c["btn-" + i.size] = Boolean(i.size), c)],
                props: l ? a(Ce, i) : null,
                attrs: {
                    type: l ? null : i.type,
                    disabled: l ? null : i.disabled,
                    "data-toggle": u ? "button" : null,
                    "aria-pressed": u ? String(i.pressed) : null,
                    tabindex: i.disabled && l ? "-1" : null
                },
                on: d
            };
            return e(l ? ve : "button", he(r, f), s)
        }
    }, xe = [".btn:not(.disabled):not([disabled])", ".form-control:not(.disabled):not([disabled])", "select:not(.disabled):not([disabled])", 'input[type="checkbox"]:not(.disabled)', 'input[type="radio"]:not(.disabled)'].join(","), $e = {
        render: function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("div", {
                class: t.classObject,
                attrs: {role: "toolbar", tabindex: t.keyNav ? "0" : null},
                on: {
                    focusin: function (e) {
                        if (e.target !== e.currentTarget)return null;
                        t.focusFirst(e)
                    }, keydown: [function (e) {
                        return "button" in e || !t._k(e.keyCode, "left", 37) ? "button" in e && 0 !== e.button ? null : void t.focusNext(e, !0) : null
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "up", 38))return null;
                        t.focusNext(e, !0)
                    }, function (e) {
                        return "button" in e || !t._k(e.keyCode, "right", 39) ? "button" in e && 2 !== e.button ? null : void t.focusNext(e, !1) : null
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "down", 40))return null;
                        t.focusNext(e, !1)
                    }, function (e) {
                        return ("button" in e || !t._k(e.keyCode, "left", 37)) && e.shiftKey ? "button" in e && 0 !== e.button ? null : void t.focusFirst(e) : null
                    }, function (e) {
                        return ("button" in e || !t._k(e.keyCode, "up", 38)) && e.shiftKey ? void t.focusFirst(e) : null
                    }, function (e) {
                        return ("button" in e || !t._k(e.keyCode, "right", 39)) && e.shiftKey ? "button" in e && 2 !== e.button ? null : void t.focusLast(e) : null
                    }, function (e) {
                        return ("button" in e || !t._k(e.keyCode, "down", 40)) && e.shiftKey ? void t.focusLast(e) : null
                    }]
                }
            }, [t._t("default")], 2)
        },
        staticRenderFns: [],
        computed: {
            classObject: function () {
                return ["btn-toolbar", this.justify && !this.vertical ? "justify-content-between" : ""]
            }
        },
        props: {justify: {type: Boolean, default: !1}, keyNav: {type: Boolean, default: !1}},
        methods: {
            setItemFocus: function (t) {
                this.$nextTick(function () {
                    t.focus()
                })
            }, focusNext: function (t, e) {
                if (this.keyNav) {
                    t.preventDefault(), t.stopPropagation();
                    var n = this.getItems();
                    if (!(n.length < 1)) {
                        var i = n.indexOf(t.target);
                        e && i > 0 ? i-- : !e && i < n.length - 1 && i++, i < 0 && (i = 0), this.setItemFocus(n[i])
                    }
                }
            }, focusFirst: function (t) {
                if (this.keyNav) {
                    t.preventDefault(), t.stopPropagation();
                    var e = this.getItems();
                    e.length > 0 && this.setItemFocus(e[0])
                }
            }, focusLast: function (t) {
                if (this.keyNav) {
                    t.preventDefault(), t.stopPropagation();
                    var e = this.getItems();
                    e.length > 0 && this.setItemFocus([e.length - 1])
                }
            }, getItems: function () {
                var t = re(this.$el.querySelectorAll(xe));
                return t.forEach(function (t) {
                    t.tabIndex = -1
                }), t.filter(function (t) {
                    return b(t)
                })
            }
        },
        mounted: function () {
            this.keyNav && this.getItems()
        }
    }, Be = {
        functional: !0,
        props: {
            vertical: {type: Boolean, default: !1}, size: {
                type: String, default: null, validator: function (t) {
                    return ae(["sm", "", "lg"], t)
                }
            }, tag: {type: String, default: "div"}, ariaRole: {type: String, default: "group"}
        },
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(n.tag, he(i, {
                staticClass: "btn-group",
                class: (o = {"btn-group-vertical": n.vertical}, o["btn-group-" + n.size] = Boolean(n.size), o),
                attrs: {role: n.ariaRole}
            }), r);
            var o
        }
    }, Ee = {
        functional: !0,
        props: {id: {type: String, default: null}, tag: {type: String, default: "div"}},
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(n.tag, he(i, {staticClass: "input-group-addon", attrs: {id: n.id}}), r)
        }
    }, Pe = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n(t.tag, {
                tag: "component",
                class: t.classObject,
                attrs: {id: t.id || null, role: "group"}
            }, [t._t("left", [t.left ? n("b-input-group-addon", {
                attrs: {id: t.id ? t.id + "_BV_addon_left_" : null},
                domProps: {innerHTML: t._s(t.left)}
            }) : t._e()]), t._t("default"), t._t("right", [t.right ? n("b-input-group-addon", {
                attrs: {id: t.id ? t.id + "_BV_addon_right_" : null},
                domProps: {innerHTML: t._s(t.right)}
            }) : t._e()])], 2)
        },
        staticRenderFns: [],
        components: {bInputGroupAddon: Ee},
        computed: {
            classObject: function () {
                return ["input-group", this.size ? "input-group-" + this.size : "", this.state ? "has-" + this.state : ""]
            }
        },
        props: {
            id: {type: String, defualt: null},
            size: {type: String, default: null},
            state: {type: String, default: null},
            left: {type: String, default: null},
            right: {type: String, default: null},
            tag: {type: String, default: "div"}
        }
    }, Oe = {
        functional: !0,
        props: {id: {type: String, default: null}, tag: {type: String, default: "div"}},
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(n.tag, he(i, {staticClass: "input-group-btn", attrs: {id: n.id}}), r)
        }
    }, Le = {
        props: {
            tag: {type: String, default: "div"},
            bgVariant: {type: String, default: null},
            borderVariant: {type: String, default: null},
            textVariant: {type: String, default: null}
        }
    }, Ie = {
        mounted: function () {
            "undefined" != typeof document && document.documentElement.addEventListener("click", this._clickOutListener)
        }, destroyed: function () {
            "undefined" != typeof document && document.removeEventListener("click", this._clickOutListener)
        }, methods: {
            _clickOutListener: function (t) {
                this.$el.contains(t.target) || this.clickOutListener && this.clickOutListener()
            }
        }
    }, Ae = ["native code", "[object MutationObserverConstructor]"], Fe = "undefined" != typeof window, De = ["Edge", "Trident", "Firefox"], Ne = 0, Ve = 0; Ve < De.length; Ve += 1)if (Fe && navigator.userAgent.indexOf(De[Ve]) >= 0) {
        Ne = 1;
        break
    }
    var He = Fe && function (t) {
        return Ae.some(function (e) {
            return (t || "").toString().indexOf(e) > -1
        })
    }(window.MutationObserver) ? function (t) {
        var e = !1, n = 0, i = document.createElement("span");
        return new MutationObserver(function () {
            t(), e = !1
        }).observe(i, {attributes: !0}), function () {
            e || (e = !0, i.setAttribute("x-index", n), n += 1)
        }
    } : function (t) {
        var e = !1;
        return function () {
            e || (e = !0, setTimeout(function () {
                e = !1, t()
            }, Ne))
        }
    }, Me = void 0, je = function () {
        return void 0 === Me && (Me = -1 !== navigator.appVersion.indexOf("MSIE 10")), Me
    }, Re = function (t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }, ze = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }(), We = function (t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }, qe = Object.assign || function (t) {
            for (var e = arguments, n = 1; n < arguments.length; n++) {
                var i = e[n];
                for (var r in i)Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
            }
            return t
        }, Ge = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], Ue = Ge.slice(3), Ke = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    }, Ye = {
        placement: "bottom", eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (t) {
                    var e = t.placement, n = e.split("-")[0], i = e.split("-")[1];
                    if (i) {
                        var r = t.offsets, o = r.reference, a = r.popper, s = -1 !== ["bottom", "top"].indexOf(n), l = s ? "left" : "top", u = s ? "width" : "height", d = {
                            start: We({}, l, o[l]),
                            end: We({}, l, o[l] + o[u] - a[u])
                        };
                        t.offsets.popper = qe({}, a, d[i])
                    }
                    return t
                }
            }, offset: {
                order: 200, enabled: !0, fn: function (t, e) {
                    var n = e.offset, i = t.placement, r = t.offsets, o = r.popper, a = r.reference, s = i.split("-")[0], l = void 0;
                    return l = nt(+n) ? [+n, 0] : ut(n, o, a, s), "left" === s ? (o.top += l[0], o.left -= l[1]) : "right" === s ? (o.top += l[0], o.left += l[1]) : "top" === s ? (o.left += l[0], o.top -= l[1]) : "bottom" === s && (o.left += l[0], o.top += l[1]), t.popper = o, t
                }, offset: 0
            }, preventOverflow: {
                order: 300, enabled: !0, fn: function (t, e) {
                    var n = e.boundariesElement || k(t.instance.popper);
                    t.instance.reference === n && (n = k(n));
                    var i = N(t.instance.popper, t.instance.reference, e.padding, n);
                    e.boundaries = i;
                    var r = e.priority, o = t.offsets.popper, a = {
                        primary: function (t) {
                            var n = o[t];
                            return o[t] < i[t] && !e.escapeWithReference && (n = Math.max(o[t], i[t])), We({}, t, n)
                        }, secondary: function (t) {
                            var n = "right" === t ? "left" : "top", r = o[n];
                            return o[t] > i[t] && !e.escapeWithReference && (r = Math.min(o[n], i[t] - ("right" === t ? o.width : o.height))), We({}, n, r)
                        }
                    };
                    return r.forEach(function (t) {
                        var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                        o = qe({}, o, a[e](t))
                    }), t.offsets.popper = o, t
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            }, keepTogether: {
                order: 400, enabled: !0, fn: function (t) {
                    var e = t.offsets, n = e.popper, i = e.reference, r = t.placement.split("-")[0], o = Math.floor, a = -1 !== ["top", "bottom"].indexOf(r), s = a ? "right" : "bottom", l = a ? "left" : "top", u = a ? "width" : "height";
                    return n[s] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[s]) && (t.offsets.popper[l] = o(i[s])), t
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function (t, e) {
                    if (!ot(t.instance.modifiers, "arrow", "keepTogether"))return t;
                    var n = e.element;
                    if ("string" == typeof n) {
                        if (!(n = t.instance.popper.querySelector(n)))return t
                    } else if (!t.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                    var i = t.placement.split("-")[0], r = t.offsets, o = r.popper, a = r.reference, s = -1 !== ["left", "right"].indexOf(i), l = s ? "height" : "width", u = s ? "Top" : "Left", d = u.toLowerCase(), c = s ? "left" : "top", f = s ? "bottom" : "right", p = j(n)[l];
                    a[f] - p < o[d] && (t.offsets.popper[d] -= o[d] - (a[f] - p)), a[d] + p > o[f] && (t.offsets.popper[d] += a[d] + p - o[f]);
                    var h = a[d] + a[l] / 2 - p / 2, g = _(t.instance.popper, "margin" + u).replace("px", ""), m = h - L(t.offsets.popper)[d] - g;
                    return m = Math.max(Math.min(o[l] - p, m), 0), t.arrowElement = n, t.offsets.arrow = {}, t.offsets.arrow[d] = Math.round(m), t.offsets.arrow[c] = "", t
                }, element: "[x-arrow]"
            }, flip: {
                order: 600, enabled: !0, fn: function (t, e) {
                    if (K(t.instance.modifiers, "inner"))return t;
                    if (t.flipped && t.placement === t.originalPlacement)return t;
                    var n = N(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement), i = t.placement.split("-")[0], r = R(i), o = t.placement.split("-")[1] || "", a = [];
                    switch (e.behavior) {
                        case Ke.FLIP:
                            a = [i, r];
                            break;
                        case Ke.CLOCKWISE:
                            a = st(i);
                            break;
                        case Ke.COUNTERCLOCKWISE:
                            a = st(i, !0);
                            break;
                        default:
                            a = e.behavior
                    }
                    return a.forEach(function (s, l) {
                        if (i !== s || a.length === l + 1)return t;
                        i = t.placement.split("-")[0], r = R(i);
                        var u = t.offsets.popper, d = t.offsets.reference, c = Math.floor, f = "left" === i && c(u.right) > c(d.left) || "right" === i && c(u.left) < c(d.right) || "top" === i && c(u.bottom) > c(d.top) || "bottom" === i && c(u.top) < c(d.bottom), p = c(u.left) < c(n.left), h = c(u.right) > c(n.right), g = c(u.top) < c(n.top), m = c(u.bottom) > c(n.bottom), v = "left" === i && p || "right" === i && h || "top" === i && g || "bottom" === i && m, b = -1 !== ["top", "bottom"].indexOf(i), y = !!e.flipVariations && (b && "start" === o && p || b && "end" === o && h || !b && "start" === o && g || !b && "end" === o && m);
                        (f || v || y) && (t.flipped = !0, (f || v) && (i = a[l + 1]), y && (o = at(o)), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = qe({}, t.offsets.popper, z(t.instance.popper, t.offsets.reference, t.placement)), t = G(t.instance.modifiers, t, "flip"))
                    }), t
                }, behavior: "flip", padding: 5, boundariesElement: "viewport"
            }, inner: {
                order: 700, enabled: !1, fn: function (t) {
                    var e = t.placement, n = e.split("-")[0], i = t.offsets, r = i.popper, o = i.reference, a = -1 !== ["left", "right"].indexOf(n), s = -1 === ["top", "left"].indexOf(n);
                    return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), t.placement = R(e), t.offsets.popper = L(r), t
                }
            }, hide: {
                order: 800, enabled: !0, fn: function (t) {
                    if (!ot(t.instance.modifiers, "hide", "preventOverflow"))return t;
                    var e = t.offsets.reference, n = W(t.instance.modifiers, function (t) {
                        return "preventOverflow" === t.name
                    }).boundaries;
                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                        if (!0 === t.hide)return t;
                        t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide)return t;
                        t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function (t, e) {
                    var n = e.x, i = e.y, r = t.offsets.popper, o = W(t.instance.modifiers, function (t) {
                        return "applyStyle" === t.name
                    }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a = void 0 !== o ? o : e.gpuAcceleration, s = I(k(t.instance.popper)), l = {position: r.position}, u = {
                        left: Math.floor(r.left),
                        top: Math.floor(r.top),
                        bottom: Math.floor(r.bottom),
                        right: Math.floor(r.right)
                    }, d = "bottom" === n ? "top" : "bottom", c = "right" === i ? "left" : "right", f = Y("transform"), p = void 0, h = void 0;
                    if (h = "bottom" === d ? -s.height + u.bottom : u.top, p = "right" === c ? -s.width + u.right : u.left, a && f)l[f] = "translate3d(" + p + "px, " + h + "px, 0)", l[d] = 0, l[c] = 0, l.willChange = "transform"; else {
                        var g = "bottom" === d ? -1 : 1, m = "right" === c ? -1 : 1;
                        l[d] = h * g, l[c] = p * m, l.willChange = d + ", " + c
                    }
                    var v = {"x-placement": t.placement};
                    return t.attributes = qe({}, v, t.attributes), t.styles = qe({}, l, t.styles), t.arrowStyles = qe({}, t.offsets.arrow, t.arrowStyles), t
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            }, applyStyle: {
                order: 900, enabled: !0, fn: function (t) {
                    return it(t.instance.popper, t.styles), rt(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && it(t.arrowElement, t.arrowStyles), t
                }, onLoad: function (t, e, n, i, r) {
                    var o = M(r, e, t), a = H(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return e.setAttribute("x-placement", a), it(e, {position: "absolute"}), n
                }, gpuAcceleration: void 0
            }
        }
    }, Ze = function () {
        function t(e, n) {
            var i = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Re(this, t), this.scheduleUpdate = function () {
                return requestAnimationFrame(i.update)
            }, this.update = He(this.update.bind(this)), this.options = qe({}, t.Defaults, r), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = e.jquery ? e[0] : e, this.popper = n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(qe({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                i.options.modifiers[e] = qe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
                return qe({name: t}, i.options.modifiers[t])
            }).sort(function (t, e) {
                return t.order - e.order
            }), this.modifiers.forEach(function (t) {
                t.enabled && y(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
            }), this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(), this.state.eventsEnabled = o
        }

        return ze(t, [{
            key: "update", value: function () {
                return U.call(this)
            }
        }, {
            key: "destroy", value: function () {
                return Z.call(this)
            }
        }, {
            key: "enableEventListeners", value: function () {
                return Q.call(this)
            }
        }, {
            key: "disableEventListeners", value: function () {
                return et.call(this)
            }
        }]), t
    }();
    Ze.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ze.placements = Ge, Ze.Defaults = Ye;
    var Je = "__BV_root_listeners__", Xe = {
        methods: {
            listenOnRoot: function (t, e) {
                return this[Je] && oe(this[Je]) || (this[Je] = []), this[Je].push({
                    event: t,
                    callback: e
                }), this.$root.$on(t, e), this
            }, emitOnRoot: function (t) {
                for (var e = [], n = arguments.length - 1; n-- > 0;)e[n] = arguments[n + 1];
                return (i = this.$root).$emit.apply(i, [t].concat(e)), this;
                var i
            }
        }, destroyed: function () {
            var t = this;
            if (this[Je] && oe(this[Je]))for (; this[Je].length > 0;) {
                var e = t[Je].shift(), n = e.event, i = e.callback;
                t.$root.$off(n, i)
            }
        }
    };
    "undefined" != typeof document && window.Element && !Element.prototype.closest && (Element.prototype.closest = function (t) {
        var e, n = (this.document || this.ownerDocument).querySelectorAll(t), i = this;
        do {
            for (e = n.length; --e >= 0 && n.item(e) !== i;);
        } while (e < 0 && (i = i.parentElement));
        return i
    });
    var Qe = {
        TOP: "top-start",
        TOPEND: "top-end",
        BOTTOM: "bottom-start",
        BOTTOMEND: "bottom-end"
    }, tn = {
        mixins: [Ie, Xe],
        props: {
            disabled: {type: Boolean, default: !1},
            text: {type: String, default: ""},
            dropup: {type: Boolean, default: !1},
            right: {type: Boolean, default: !1},
            offset: {type: [Number, String], default: 0},
            noFlip: {type: Boolean, default: !1},
            popperOpts: {
                type: Object, default: function () {
                }
            }
        },
        data: function () {
            return {visible: !1, _popper: null, inNavbar: null}
        },
        created: function () {
            var t = this, e = function (e) {
                e !== t && (t.visible = !1)
            };
            this.listenOnRoot("bv::dropdown::shown", e), this.listenOnRoot("clicked::link", e), this.listenOnRoot("bv::link::clicked", e)
        },
        watch: {
            visible: function (t, e) {
                t !== e && (t ? this.showMenu() : this.hideMenu())
            }
        },
        computed: {
            toggler: function () {
                return this.$refs.toggle.$el || this.$refs.toggle
            }
        },
        destroyed: function () {
            this._popper && this._popper.destroy(), this._popper = null, this.setTouchStart(!1)
        },
        methods: {
            showMenu: function () {
                if (!this.disabled) {
                    if (this.$emit("show"), this.emitOnRoot("bv::dropdown::shown", this), "function" == typeof Ze) {
                        null === this.inNavbar && this.isNav && (this.inNavbar = Boolean(this.$el.closest(".navbar")));
                        var t = this.dropup && this.right || this.split || this.inNavbar ? this.$el : this.$refs.toggle;
                        t = t.$el || t, this._popper = new Ze(t, this.$refs.menu, this.getPopperConfig())
                    }
                    this.setTouchStart(!0), this.$emit("shown"), this.$nextTick(this.focusFirstItem)
                }
            }, hideMenu: function () {
                this.$emit("hide"), this._popper && this._popper.destroy(), this._popper = null, this.setTouchStart(!1), this.emitOnRoot("bv::dropdown::hidden", this), this.$emit("hidden")
            }, getPopperConfig: function () {
                var t = Qe.BOTTOM;
                this.dropup && this.right ? t = Qe.TOPEND : this.dropup ? t = Qe.TOP : this.right && (t = Qe.BOTTOMEND);
                var e = {
                    placement: t,
                    modifiers: {
                        offset: {offset: this.offset || 0},
                        flip: {enabled: !this.noFlip},
                        applyStyle: {enabled: !this.inNavbar}
                    }
                };
                return se(e, this.popperOpts || {})
            }, setTouchStart: function (t) {
                var e = this;
                "ontouchstart" in document.documentElement && re(document.body.children).forEach(function (n) {
                    t ? n.addEventListener("mouseover", e.noop) : n.removeEventListener("mouseover", e.noop)
                })
            }, noop: function () {
            }, clickOutListener: function () {
                this.visible = !1
            }, click: function (t) {
                this.disabled ? this.visible = !1 : this.$emit("click", t)
            }, toggle: function () {
                this.disabled ? this.visible = !1 : this.visible = !this.visible
            }, onTab: function () {
                this.visible && (this.visible = !1)
            }, onEsc: function (t) {
                this.visible && (this.visible = !1, t.preventDefault(), t.stopPropagation(), this.$nextTick(this.focusToggler))
            }, onFocusOut: function (t) {
                this.$refs.menu.contains(t.relatedTarget) || (this.visible = !1)
            }, onMouseOver: function (t) {
                var e = t.target;
                e.classList.contains("dropdown-item") && !e.disabled && !e.classList.contains("disabled") && e.focus && e.focus()
            }, focusNext: function (t, e) {
                var n = this;
                this.visible && (t.preventDefault(), t.stopPropagation(), this.$nextTick(function () {
                    var i = n.getItems();
                    if (!(i.length < 1)) {
                        var r = i.indexOf(t.target);
                        e && r > 0 ? r-- : !e && r < i.length - 1 && r++, r < 0 && (r = 0), n.focusItem(r, i)
                    }
                }))
            }, focusItem: function (t, e) {
                var n = e.find(function (e, n) {
                    return n === t
                });
                n && "-1" !== n.getAttribute("tabindex") && n.focus()
            }, getItems: function () {
                return ct(re(this.$refs.menu.querySelectorAll(".dropdown-item:not(.disabled):not([disabled])")))
            }, getFirstItem: function () {
                return this.getItems()[0] || null
            }, focusFirstItem: function () {
                var t = this.getFirstItem();
                t && this.focusItem(0, [t])
            }, focusToggler: function () {
                var t = this.toggler;
                t && t.focus && t.focus()
            }
        }
    }, en = {
        props: {
            name: {type: String},
            id: {type: String},
            disabled: {type: Boolean},
            required: {type: Boolean, default: !1}
        }
    }, nn = {
        computed: {
            checkboxClass: function () {
                return {"custom-control": this.custom, "form-check-inline": this.inline}
            }
        }
    }, rn = {
        computed: {
            custom: function () {
                return !this.plain
            }
        }, props: {plain: {type: Boolean, default: !1}}
    }, on = {
        computed: {
            formOptions: function () {
                var t = this, e = this.options || {};
                return e = oe(e) ? e.map(function (e) {
                    return "object" == typeof e ? {
                        value: e[t.valueField],
                        text: e[t.textField],
                        disabled: e.disabled || !1
                    } : {text: String(e), value: e || {}}
                }) : le(e).map(function (n) {
                    var i = e[n] || {};
                    return "object" != typeof i && (i = {text: String(i)}), i.value = i[t.valueField] || n, i.text = i[t.textField] || n, i
                })
            }, selectedValue: function () {
                var t = this, e = this.formOptions;
                if (this.returnObject && !this.multiple) {
                    for (var n = 0; n < e.length; n++)if (e[n].value === t.localValue)return e[n];
                    return null
                }
                return this.localValue
            }
        },
        props: {valueField: {type: String, default: "value"}, textField: {type: String, default: "text"}},
        watch: {
            localValue: function (t, e) {
                t !== e && this.$emit("input", this.selectedValue)
            }, value: function (t, e) {
                t !== e && (this.localValue = t)
            }
        }
    }, an = {
        props: {size: {type: String, default: null}}, computed: {
            sizeFormClass: function () {
                return [this.size ? "form-control-" + this.size : null]
            }, sizeBtnClass: function () {
                return [this.size ? "btn-" + this.size : null]
            }
        }
    }, sn = {
        props: {state: {type: [Boolean, String], default: null}}, computed: {
            computedState: function () {
                var t = this.state;
                return !0 === t || "valid" === t || !1 !== t && "invalid" !== t && null
            }, stateClass: function () {
                var t = this.computedState;
                return !0 === t ? "is-valid" : !1 === t ? "is-invalid" : null
            }
        }
    }, ln = {
        props: {id: {typ: String, default: null}}, data: function () {
            return {localId_: null}
        }, mounted: function () {
            this.$isServer || this.id || !this._uid || (this.localId_ = "__BVID__" + this._uid + "_")
        }, methods: {
            safeId: function (t) {
                void 0 === t && (t = "");
                var e = this.id || this.localId_ || null;
                return e ? (t = String(t).replace(/\s+/g, "_"), Boolean(t) ? e + "_" + t : e) : null
            }
        }
    }, un = f(), dn = se({}, n(Le.props, l.bind(null, "body")), {
        title: {type: String, default: null},
        titleTag: {type: String, default: "h4"},
        subTitle: {type: String, default: null},
        subTitleTag: {type: String, default: "h6"},
        overlay: {type: Boolean, default: !1}
    }), cn = {
        functional: !0, props: dn, render: function (t, e) {
            var n = e.props, i = e.data, r = e.slots, o = [];
            return n.title && o.push(t(n.titleTag, {
                staticClass: "card-title",
                domProps: {innerHTML: n.title}
            })), n.subTitle && o.push(t(n.subTitleTag, {
                staticClass: "card-subtitle mb-2 text-muted",
                domProps: {innerHTML: n.subTitle}
            })), o.push(r().default), t(n.bodyTag, he(i, {
                staticClass: "card-body",
                class: (a = {"card-img-overlay": n.overlay}, a["bg-" + n.bodyBgVariant] = Boolean(n.bodyBgVariant), a["border-" + n.bodyBorderVariant] = Boolean(n.bodyBorderVariant), a["text-" + n.bodyTextVariant] = Boolean(n.bodyTextVariant), a)
            }), o);
            var a
        }
    }, fn = se({}, n(Le.props, l.bind(null, "header")), {
        header: {type: String, default: null},
        headerClass: {type: [String, Object, Array], default: null}
    }), pn = {
        functional: !0, props: fn, render: function (t, e) {
            var n = e.props, i = e.data, r = e.slots;
            return t(n.headerTag, he(i, {
                staticClass: "card-header",
                class: [n.headerClass, (o = {}, o["bg-" + n.headerBgVariant] = Boolean(n.headerBgVariant), o["border-" + n.headerBorderVariant] = Boolean(n.headerBorderVariant), o["text-" + n.headerTextVariant] = Boolean(n.headerTextVariant), o)]
            }), r().default || [t("div", {domProps: {innerHTML: n.header}})]);
            var o
        }
    }, hn = se({}, n(Le.props, l.bind(null, "footer")), {
        footer: {type: String, default: null},
        footerClass: {type: [String, Object, Array], default: null}
    }), gn = {
        functional: !0, props: hn, render: function (t, e) {
            var n = e.props, i = e.data, r = e.slots;
            return t(n.footerTag, he(i, {
                staticClass: "card-footer",
                class: [n.footerClass, (o = {}, o["bg-" + n.footerBgVariant] = Boolean(n.footerBgVariant), o["border-" + n.footerBorderVariant] = Boolean(n.footerBorderVariant), o["text-" + n.footerTextVariant] = Boolean(n.footerTextVariant), o)]
            }), r().default || [t("div", {domProps: {innerHTML: n.footer}})]);
            var o
        }
    }, mn = {
        src: {type: String, default: null, required: !0},
        alt: {type: String, default: null},
        top: {type: Boolean, default: !1},
        bottom: {type: Boolean, default: !1},
        fluid: {type: Boolean, default: !1}
    }, vn = {
        functional: !0, props: mn, render: function (t, e) {
            var n = e.props, i = e.data, r = "card-img";
            return n.top ? r += "-top" : n.bottom && (r += "-bottom"), t("img", he(i, {
                staticClass: r,
                class: {"img-fluid": n.fluid},
                attrs: {src: n.src, alt: n.alt}
            }))
        }
    }, bn = n(mn, l.bind(null, "img"));
    bn.imgSrc.required = !1;
    var yn = {
        functional: !0,
        props: se({}, dn, fn, hn, bn, n(Le.props), {
            align: {type: String, default: null},
            noBody: {type: Boolean, default: !1}
        }),
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.slots, o = [], s = n.imgSrc ? t(vn, {props: a(bn, n, d.bind(null, "img"))}) : null;
            return s && (!n.imgTop && n.imgBottom || o.push(s)), (n.header || r().header) && o.push(t(pn, {props: a(fn, n)}, r().header)), n.noBody ? o.push(r().default) : o.push(t(cn, {props: a(dn, n)}, r().default)), (n.footer || r().footer) && o.push(t(gn, {props: a(hn, n)}, r().footer)), s && n.imgBottom && o.push(s), t(n.tag, he(i, {
                staticClass: "card",
                class: (l = {}, l["text-" + n.align] = Boolean(n.align), l["bg-" + n.bgVariant] = Boolean(n.bgVariant), l["border-" + n.borderVariant] = Boolean(n.borderVariant), l["text-" + n.textVariant] = Boolean(n.textVariant), l)
            }), o);
            var l
        }
    }, _n = {
        functional: !0,
        props: {
            tag: {type: String, default: "div"},
            deck: {type: Boolean, default: !1},
            columns: {type: Boolean, default: !1}
        },
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children, o = "card-group";
            return n.columns && (o = "card-columns"), n.deck && (o = "card-deck"), t(n.tag, he(i, {staticClass: o}), r)
        }
    }, wn = {
        next: {dirClass: "carousel-item-left", overlayClass: "carousel-item-next"},
        prev: {dirClass: "carousel-item-right", overlayClass: "carousel-item-prev"}
    }, Sn = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend oTransitionEnd",
        transition: "transitionend"
    }, kn = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "carousel slide",
                style: {background: t.background},
                attrs: {role: "region", id: t.safeId(), "aria-busy": t.isSliding ? "true" : "false"},
                on: {
                    mouseenter: t.pause,
                    mouseleave: t.start,
                    focusin: t.pause,
                    focusout: t.restart,
                    keydown: [function (e) {
                        return "button" in e || !t._k(e.keyCode, "left", 37) ? "button" in e && 0 !== e.button ? null : (e.stopPropagation(), e.preventDefault(), void t.prev(e)) : null
                    }, function (e) {
                        return "button" in e || !t._k(e.keyCode, "right", 39) ? "button" in e && 2 !== e.button ? null : (e.stopPropagation(), e.preventDefault(), void t.next(e)) : null
                    }]
                }
            }, [n("div", {
                ref: "inner",
                staticClass: "carousel-inner",
                attrs: {role: "list", id: t.safeId("__BV_inner_")}
            }, [t._t("default")], 2), t.controls ? [n("a", {
                staticClass: "carousel-control-prev",
                attrs: {href: "#", role: "button", "aria-controls": t.safeId("__BV_inner_")},
                on: {
                    click: function (e) {
                        e.stopPropagation(), e.preventDefault(), t.prev(e)
                    }, keydown: [function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13))return null;
                        e.stopPropagation(), e.preventDefault(), t.prev(e)
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "space", 32))return null;
                        e.stopPropagation(), e.preventDefault(), t.prev(e)
                    }]
                }
            }, [n("span", {
                staticClass: "carousel-control-prev-icon",
                attrs: {"aria-hidden": "true"}
            }), t._v(" "), n("span", {staticClass: "sr-only"}, [t._v(t._s(t.labelPrev))])]), n("a", {
                staticClass: "carousel-control-next",
                attrs: {href: "#", role: "button", "aria-controls": t.safeId("__BV_inner_")},
                on: {
                    click: function (e) {
                        e.stopPropagation(), e.preventDefault(), t.next(e)
                    }, keydown: [function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13))return null;
                        e.stopPropagation(), e.preventDefault(), t.next(e)
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "space", 32))return null;
                        e.stopPropagation(), e.preventDefault(), t.next(e)
                    }]
                }
            }, [n("span", {
                staticClass: "carousel-control-next-icon",
                attrs: {"aria-hidden": "true"}
            }), t._v(" "), n("span", {staticClass: "sr-only"}, [t._v(t._s(t.labelNext))])])] : t._e(), n("ol", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.indicators,
                    expression: "indicators"
                }],
                staticClass: "carousel-indicators",
                attrs: {
                    role: "group",
                    id: t.indicators ? t.safeId("__BV_indicators_") : null,
                    "aria-hidden": t.indicators ? "false" : "true",
                    "aria-label": t.indicators && t.labelIndicators ? t.labelIndicators : null,
                    "aria-owns": t.indicators ? t.safeId("__BV_inner_") : null
                }
            }, t._l(t.slides.length, function (e) {
                return n("li", {
                    key: "slide_" + e,
                    class: {active: e - 1 === t.index},
                    attrs: {
                        role: "button",
                        id: t.safeId("__BV_indicator_" + e + "_"),
                        tabindex: t.indicators ? "0" : "-1",
                        "aria-current": e - 1 === t.index ? "true" : "false",
                        "aria-label": t.labelGotoSlide + " " + e,
                        "aria-describedby": t.slides[e - 1].id || null,
                        "aria-controls": t.safeId("__BV_inner_")
                    },
                    on: {
                        click: function (n) {
                            t.setSlide(e - 1)
                        }, keydown: [function (n) {
                            if (!("button" in n) && t._k(n.keyCode, "enter", 13))return null;
                            n.stopPropagation(), n.preventDefault(), t.setSlide(e - 1)
                        }, function (n) {
                            if (!("button" in n) && t._k(n.keyCode, "space", 32))return null;
                            n.stopPropagation(), n.preventDefault(), t.setSlide(e - 1)
                        }]
                    }
                })
            }))], 2)
        },
        staticRenderFns: [],
        mixins: [ln],
        data: function () {
            return {index: this.value || 0, isSliding: !1, intervalId: null, transitionEndEvent: null, slides: []}
        },
        props: {
            labelPrev: {type: String, default: "Previous Slide"},
            labelNext: {type: String, default: "Next Slide"},
            labelGotoSlide: {type: String, default: "Goto Slide"},
            labelIndicators: {type: String, default: "Select a slide to display"},
            interval: {type: Number, default: 5e3},
            indicators: {type: Boolean, default: !1},
            controls: {type: Boolean, default: !1},
            imgWidth: {type: [Number, String]},
            imgHeight: {type: [Number, String]},
            background: {type: String},
            value: {type: Number, default: 0}
        },
        computed: {
            isCycling: function () {
                return Boolean(this.intervalId)
            }
        },
        methods: {
            setSlide: function (t) {
                var e = this;
                if ("undefined" == typeof document || !document.visibilityState || !document.hidden) {
                    var n = this.slides.length;
                    0 !== n && (this.isSliding ? this.$once("sliding-end", function () {
                        return e.setSlide(t)
                    }) : (t = Math.floor(t), this.index = t >= n ? 0 : t >= 0 ? t : n - 1))
                }
            }, prev: function () {
                this.setSlide(this.index - 1)
            }, next: function () {
                this.setSlide(this.index + 1)
            }, pause: function () {
                this.isCycling && (clearInterval(this.intervalId), this.intervalId = null, this.slides[this.index].tabIndex = 0)
            }, start: function () {
                var t = this;
                Boolean(this.interval) && !this.isCycling && (this.slides.forEach(function (t) {
                    t.tabIndex = -1
                }), this.intervalId = setInterval(function () {
                    t.next()
                }, Math.max(1e3, this.interval)))
            }, restart: function (t) {
                t.relatedTarget && this.$el.contains(t.relatedTarget) || this.start()
            }, updateSlides: function () {
                var t = this;
                this.pause(), this.slides = re(this.$refs.inner.querySelectorAll(".carousel-item"));
                var e = this.slides.length, n = Math.max(0, Math.min(Math.floor(this.index), e - 1));
                this.slides.forEach(function (i, r) {
                    var o = r + 1, a = t.safeId("__BV_indicator_" + o + "_");
                    i.classList[r === n ? "add" : "remove"]("active"), i.setAttribute("aria-current", r === n ? "true" : "false"), i.setAttribute("aria-posinset", String(o)), i.setAttribute("aria-setsize", String(e)), i.tabIndex = -1, a && i.setAttribute("aria-controlledby", a)
                }), this.setSlide(n), this.start()
            }
        },
        watch: {
            value: function (t, e) {
                t !== e && this.setSlide(t)
            }, interval: function (t, e) {
                t !== e && (Boolean(t) ? (this.pause(), this.start()) : this.pause())
            }, index: function (t, e) {
                var n = this;
                if (t !== e && !this.isSliding) {
                    var i = t > e ? wn.next : wn.prev;
                    0 === e && t === this.slides.length - 1 ? i = wn.prev : e === this.slides.length - 1 && 0 === t && (i = wn.next);
                    var r = this.slides[e], o = this.slides[t];
                    if (r && o) {
                        this.isSliding = !0, this.$emit("sliding-start", t), this.$emit("input", this.index), o.classList.add(i.overlayClass), r.classList.add(i.dirClass), o.classList.add(i.dirClass);
                        var a = !1, s = function (e) {
                            a || (a = !0, n.transitionEndEvent && n.transitionEndEvent.split(/\s+/).forEach(function (t) {
                                r.removeEventListener(t, s)
                            }), n._animationTimeout = null, o.classList.remove(i.dirClass), o.classList.remove(i.overlayClass), o.classList.add("active"), r.classList.remove("active"), r.classList.remove(i.dirClass), r.classList.remove(i.overlayClass), r.setAttribute("aria-current", "false"), o.setAttribute("aria-current", "true"), r.setAttribute("aria-hidden", "true"), o.setAttribute("aria-hidden", "false"), r.tabIndex = -1, o.tabIndex = -1, n.isCycling || (o.tabIndex = 0, n.$nextTick(function () {
                                o.focus()
                            })), n.isSliding = !1, n.$nextTick(function () {
                                return n.$emit("sliding-end", t)
                            }))
                        };
                        this.transitionEndEvent && this.transitionEndEvent.split(/\s+/).forEach(function (t) {
                            r.addEventListener(t, s)
                        }), this._animationTimeout = setTimeout(s, 650)
                    }
                }
            }
        },
        created: function () {
            this._animationTimeout = null
        },
        mounted: function () {
            this.transitionEndEvent = ft(this.$el) || null, this.updateSlides(), o(this.$refs.inner, this.updateSlides.bind(this), {
                subtree: !1,
                childList: !0,
                attributes: !0,
                attributeFilter: ["id"]
            })
        },
        destroyed: function () {
            clearInterval(this.intervalId), clearTimeout(this._animationTimeout), this._animationTimeout = null
        }
    }, Cn = '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>', Tn = {
        functional: !0,
        props: {
            src: {type: String, default: null},
            alt: {type: String, default: null},
            width: {type: [Number, String], default: null},
            height: {type: [Number, String], default: null},
            block: {type: Boolean, default: !1},
            fluid: {type: Boolean, default: !1},
            fluidGrow: {type: Boolean, default: !1},
            rounded: {type: [Boolean, String], default: !1},
            thumbnail: {type: Boolean, default: !1},
            left: {type: Boolean, default: !1},
            right: {type: Boolean, default: !1},
            center: {type: Boolean, default: !1},
            blank: {type: Boolean, default: !1},
            blankColor: {type: String, default: "transparent"}
        },
        render: function (t, e) {
            var n = e.props, i = e.data, r = n.src, o = Boolean(parseInt(n.width, 10)) ? parseInt(n.width, 10) : null, a = Boolean(parseInt(n.height, 10)) ? parseInt(n.height, 10) : null, s = null, l = n.block;
            return n.blank && (!a && Boolean(o) ? a = o : !o && Boolean(a) && (o = a), o || a || (o = 1, a = 1), r = pt(o, a, n.blankColor || "transparent")), n.left ? s = "float-left" : n.right ? s = "float-right" : n.center && (s = "mx-auto", l = !0), t("img", he(i, {
                attrs: {
                    src: r,
                    alt: n.alt,
                    width: o ? String(o) : null,
                    height: a ? String(a) : null
                },
                class: (u = {
                    "img-thumbnail": n.thumbnail,
                    "img-fluid": n.fluid || n.fluidGrow,
                    "w-100": n.fluidGrow,
                    rounded: "" === n.rounded || !0 === n.rounded,
                    "d-block": l
                }, u["rounded-" + n.rounded] = "string" == typeof n.rounded && "" !== n.rounded, u[s] = Boolean(s), u)
            }));
            var u
        }
    }, xn = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "carousel-item",
                style: {background: t.background},
                attrs: {role: "listitem", id: t.safeId()}
            }, [t._t("img", [t.imgSrc || t.imgBlank ? n("b-img", {
                attrs: {
                    "fluid-grow": "",
                    block: "",
                    blank: t.imgBlank,
                    "blank-color": t.imgBlankColor,
                    src: t.imgSrc,
                    width: t.computedWidth,
                    height: t.computedHeight,
                    alt: t.imgAlt
                }
            }) : t._e()]), n(t.contentTag, {tag: "div", class: t.contentClasses}, [t.caption ? n(t.captionTag, {
                tag: "h3",
                domProps: {innerHTML: t._s(t.caption)}
            }) : t._e(), t.text ? n(t.textTag, {
                tag: "p",
                domProps: {innerHTML: t._s(t.text)}
            }) : t._e(), t._t("default")], 2)], 2)
        }, staticRenderFns: [], components: {bImg: Tn}, mixins: [ln], props: {
            imgSrc: {
                type: String, default: function () {
                    return this && this.src ? (c("b-carousel-slide: prop 'src' has been deprecated. Use 'img-src' instead"), this.src) : null
                }
            },
            src: {type: String},
            imgAlt: {type: String},
            imgWidth: {type: [Number, String]},
            imgHeight: {type: [Number, String]},
            imgBlank: {type: Boolean, default: !1},
            imgBlankColor: {type: String, default: "transparent"},
            contentVisibleUp: {type: String},
            contentTag: {type: String, default: "div"},
            caption: {type: String},
            captionTag: {type: String, default: "h3"},
            text: {type: String},
            textTag: {type: String, default: "p"},
            background: {type: String}
        }, computed: {
            contentClasses: function () {
                return ["carousel-caption", this.contentVisibleUp ? "d-none" : "", this.contentVisibleUp ? "d-" + this.contentVisibleUp + "-block" : ""]
            }, computedWidth: function () {
                return this.imgWidth || this.$parent.imgWidth
            }, computedHeight: function () {
                return this.imgHeight || this.$parent.imgHeight
            }
        }
    }, $n = function (t) {
        var e = ce(null);
        return function () {
            var n = JSON.stringify(arguments);
            return e[n] = e[n] || t.apply(null, arguments)
        }
    }(function (t, e, n) {
        var i = t;
        return e && (i += "-" + e), !0 === n ? i.toLowerCase() : (i += "-" + n).toLowerCase()
    }), Bn = ["sm", "md", "lg", "xl"], En = Bn.reduce(function (t, e) {
        return t[e] = ht(), t
    }, ce(null)), Pn = Bn.reduce(function (t, e) {
        return t[u(e, "offset")] = gt(), t
    }, ce(null)), On = Bn.reduce(function (t, e) {
        return t[u(e, "order")] = gt(), t
    }, ce(null)), Ln = se(ce(null), {col: le(En), offset: le(Pn), order: le(On)}), In = {
        functional: !0,
        props: se({}, En, Pn, On, {
            tag: {type: String, default: "div"},
            col: {type: Boolean, default: !1},
            cols: gt(),
            offset: gt(),
            order: gt(),
            alignSelf: {
                type: String, default: null, validator: function (t) {
                    return ae(["auto", "start", "end", "center", "baseline", "stretch"], t)
                }
            }
        }),
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children, o = [];
            for (var a in Ln)for (var s = Ln[a], l = 0; l < s.length; l++)n[s[l]] && o.push($n(a, s[l].replace(a, ""), n[s[l]]));
            o.push((u = {col: n.col || 0 === o.length && !n.cols}, u["col-" + n.cols] = n.cols, u["offset-" + n.offset] = n.offset, u["order-" + n.order] = n.order, u["align-self-" + n.alignSelf] = n.alignSelf, u));
            var u;
            return t(n.tag, he(i, {class: o}), r)
        }
    }, An = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("transition", {
                attrs: {
                    "enter-class": "",
                    "enter-active-class": "collapsing",
                    "enter-to-class": "",
                    "leave-class": "",
                    "leave-active-class": "collapsing",
                    "leave-to-class": ""
                },
                on: {enter: t.onEnter, "after-enter": t.onAfterEnter, leave: t.onLeave, "after-leave": t.onAfterLeave}
            }, [n(t.tag, {
                directives: [{name: "show", rawName: "v-show", value: t.show, expression: "show"}],
                tag: "component",
                class: t.classObject,
                attrs: {id: t.id || null},
                on: {click: t.clickHandler}
            }, [t._t("default")], 2)], 1)
        },
        staticRenderFns: [],
        mixins: [Xe],
        data: function () {
            return {show: this.visible, transitioning: !1}
        },
        model: {prop: "visible", event: "input"},
        props: {
            id: {type: String, required: !0},
            isNav: {type: Boolean, default: !1},
            accordion: {type: String, default: null},
            visible: {type: Boolean, default: !1},
            tag: {type: String, default: "div"}
        },
        watch: {
            visible: function (t) {
                t !== this.show && (this.show = t)
            }, show: function (t, e) {
                t !== e && this.emitState()
            }
        },
        computed: {
            classObject: function () {
                return {
                    "navbar-collapse": this.isNav,
                    collapse: !this.transitioning,
                    show: this.show && !this.transitioning
                }
            }
        },
        methods: {
            toggle: function () {
                this.show = !this.show
            }, onEnter: function (t) {
                t.style.height = 0, this.reflow(t), t.style.height = t.scrollHeight + "px", this.transitioning = !0, this.$emit("show")
            }, onAfterEnter: function (t) {
                t.style.height = null, this.transitioning = !1, this.$emit("shown")
            }, onLeave: function (t) {
                t.style.height = "auto", t.style.display = "block", t.style.height = t.getBoundingClientRect().height + "px", this.reflow(t), this.transitioning = !0, t.style.height = 0, this.$emit("hide")
            }, onAfterLeave: function (t) {
                t.style.height = null, this.transitioning = !1, this.$emit("hidden")
            }, reflow: function (t) {
                t.offsetHeight
            }, emitState: function () {
                this.$emit("input", this.show), this.$root.$emit("collapse::toggle::state", this.id, this.show), this.accordion && this.show && this.$root.$emit("accordion::toggle", this.id, this.accordion)
            }, clickHandler: function (t) {
                var e = t.target;
                this.isNav && e && "block" === getComputedStyle(this.$el).display && (e.classList.contains("nav-link") || e.classList.contains("dropdown-item")) && (this.show = !1)
            }, handleToggleEvt: function (t) {
                t === this.id && this.toggle()
            }, handleAccordionEvt: function (t, e) {
                this.accordion && e === this.accordion && (t === this.id ? this.show || this.toggle() : this.show && this.toggle())
            }, handleResize: function () {
                this.show = "block" === getComputedStyle(this.$el).display
            }
        },
        created: function () {
            this.listenOnRoot("collapse::toggle", this.handleToggleEvt), this.listenOnRoot("accordion::toggle", this.handleAccordionEvt)
        },
        mounted: function () {
            this.isNav && "undefined" != typeof document && (window.addEventListener("resize", this.handleResize, !1), window.addEventListener("orientationchange", this.handleResize, !1), this.handleResize()), this.emitState()
        },
        destroyed: function () {
            this.isNav && "undefined" != typeof document && (window.removeEventListener("resize", this.handleResize, !1), window.removeEventListener("orientationchange", this.handleResize, !1))
        }
    }, Fn = {
        functional: !0,
        props: {tag: {type: String, default: "div"}, fluid: {type: Boolean, default: !1}},
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(n.tag, he(i, {class: {container: !n.fluid, "container-fluid": n.fluid}}), r)
        }
    }, Dn = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {class: t.dropdownClasses, attrs: {id: t.safeId()}}, [t.split ? n("b-button", {
                ref: "button",
                attrs: {
                    id: t.safeId("_BV_button_"),
                    "aria-haspopup": t.split ? "true" : null,
                    "aria-expanded": t.split ? t.visible ? "true" : "false" : null,
                    variant: t.variant,
                    size: t.size,
                    disabled: t.disabled
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), e.preventDefault(), t.click(e)
                    }
                }
            }, [t._t("button-content", [t._t("text", [t._v(t._s(t.text))])])], 2) : t._e(), n("b-button", {
                ref: "toggle",
                class: ["dropdown-toggle", {"dropdown-toggle-split": t.split}],
                attrs: {
                    id: t.safeId("_BV_toggle_"),
                    "aria-haspopup": t.split ? null : "true",
                    "aria-expanded": t.split ? null : t.visible ? "true" : "false",
                    variant: t.variant,
                    size: t.size,
                    disabled: t.disabled
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), e.preventDefault(), t.toggle(e)
                    }
                }
            }, [t.split ? n("span", {staticClass: "sr-only"}, [t._v(t._s(t.toggleText))]) : t._t("button-content", [t._t("text", [t._v(t._s(t.text))])])], 2), n("div", {
                ref: "menu",
                class: t.menuClasses,
                attrs: {role: t.role, "aria-labelledby": t.safeId(t.split ? "_BV_toggle_" : "_BV_button_")},
                on: {
                    mouseover: t.onMouseOver, keyup: function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "esc", 27))return null;
                        t.onEsc(e)
                    }, keydown: [function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "tab", 9))return null;
                        t.onTab(e)
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "up", 38))return null;
                        t.focusNext(e, !0)
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "down", 40))return null;
                        t.focusNext(e, !1)
                    }]
                }
            }, [t._t("default")], 2)], 1)
        },
        staticRenderFns: [],
        mixins: [ln, tn],
        components: {bButton: Te},
        props: {
            split: {type: Boolean, default: !1},
            toggleText: {type: String, default: "Toggle Dropdown"},
            size: {type: String, default: null},
            variant: {type: String, default: null},
            role: {type: String, default: "menu"}
        },
        computed: {
            dropdownClasses: function () {
                return ["btn-group", "b-dropdown", "dropdown", this.dropup ? "dropup" : "", this.visible ? "show" : ""]
            }, menuClasses: function () {
                return ["dropdown-menu", this.right ? "dropdown-menu-right" : "", this.visible ? "show" : ""]
            }
        }
    }, Nn = {
        functional: !0, props: f(), render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(ve, he(i, {props: n, staticClass: "dropdown-item", attrs: {role: "menuitem"}}), r)
        }
    }, Vn = {
        functional: !0, props: {disabled: {type: Boolean, default: !1}}, render: function (t, e) {
            var n = e.props, i = e.data, r = e.parent, o = e.children;
            return t("button", he(i, {
                props: n,
                staticClass: "dropdown-item",
                attrs: {role: "menuitem", type: "button", disabled: n.disabled},
                on: {
                    click: function (t) {
                        r.$root.$emit("clicked::link", t)
                    }
                }
            }), o)
        }
    }, Hn = {
        functional: !0, props: {tag: {type: String, default: "div"}}, render: function (t, e) {
            var n = e.props, i = e.data;
            return t(n.tag, he(i, {staticClass: "dropdown-divider", attrs: {role: "separator"}}))
        }
    }, Mn = {
        functional: !0,
        props: {id: {type: String, default: null}, tag: {type: String, default: "h6"}},
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(n.tag, he(i, {staticClass: "dropdown-header", attrs: {id: n.id || null}}), r)
        }
    }, jn = {
        functional: !0,
        props: {
            id: {type: String, default: null},
            inline: {type: Boolean, default: !1},
            novalidate: {type: Boolean, default: !1},
            validated: {type: Boolean, default: !1}
        },
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t("form", he(i, {
                class: {"form-inline": n.inline, "was-validated": n.validated},
                attrs: {id: n.id, novalidate: n.novalidate}
            }), r)
        }
    }, Rn = {
        functional: !0, props: {tag: {type: String, default: "div"}}, render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(n.tag, he(i, {staticClass: "form-row"}), r)
        }
    }, zn = {
        functional: !0,
        props: {
            id: {type: String, default: null},
            tag: {type: String, default: "small"},
            textVariant: {type: String, default: "muted"},
            inline: {type: Boolean, default: !1}
        },
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(n.tag, he(i, {
                class: (o = {"form-text": !Boolean(n.inline)}, o["text-" + n.textVariant] = Boolean(n.textVariant), o),
                attrs: {id: n.id}
            }), r);
            var o
        }
    }, Wn = {
        functional: !0,
        props: {id: {type: String, default: null}, tag: {type: String, default: "div"}},
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(n.tag, he(i, {staticClass: "invalid-feedback", attrs: {id: n.id}}), r)
        }
    }, qn = ['[role="radiogroup"][id]', "input[id]", "select[id]", "textarea[id]", ".form-control[id]", ".form-control-plaintext[id]", ".dropdown[id]", ".dropup[id]"].join(","), Gn = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("b-form-row", {
                class: t.groupClasses,
                attrs: {id: t.safeId(), role: "group", "aria-describedby": t.describedByIds}
            }, [t.label || t.$slots.label || t.horizontal ? n("label", {
                class: t.labelClasses,
                attrs: {for: t.targetId, id: t.labelId}
            }, [t._t("label", [n("span", {domProps: {innerHTML: t._s(t.label)}})])], 2) : t._e(), n("div", {
                ref: "content",
                class: t.inputLayoutClasses
            }, [t._t("default"), n("b-form-feedback", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.feedback || t.$slots.feedback,
                    expression: "feedback || $slots['feedback']"
                }], attrs: {id: t.feedbackId, role: "alert", "aria-live": "assertive", "aria-atomic": "true"}
            }, [t._t("feedback", [n("span", {domProps: {innerHTML: t._s(t.feedback)}})])], 2), t.description || t.$slots.description ? n("b-form-text", {attrs: {id: t.descriptionId}}, [t._t("description", [n("span", {domProps: {innerHTML: t._s(t.description)}})])], 2) : t._e()], 2)])
        },
        staticRenderFns: [],
        mixins: [ln, sn],
        components: {bFormRow: Rn, bFormText: zn, bFormFeedback: Wn},
        data: function () {
            return {targetId: null}
        },
        props: {
            labelFor: {type: String, default: null},
            validated: {type: Boolean, value: !1},
            horizontal: {type: Boolean, default: !1},
            labelCols: {
                type: Number, default: 3, validator: function (t) {
                    return t >= 1 && t <= 11 || (c("b-form-group: label-cols must be a value between 1 and 11"), !1)
                }
            },
            breakpoint: {type: String, default: "sm"},
            labelTextAlign: {type: String, default: null},
            label: {type: String, default: null},
            labelSrOnly: {type: Boolean, default: !1},
            description: {type: String, default: null},
            feedback: {type: String, default: null}
        },
        computed: {
            inputState: function () {
                return this.stateClass
            }, groupClasses: function () {
                return ["b-form-group", "form-group", this.validated ? "was-validated" : null, this.inputState]
            }, labelClasses: function () {
                return [this.labelSrOnly ? "sr-only" : "col-form-label", this.labelLayout, this.labelAlignClass]
            }, labelLayout: function () {
                return this.labelSrOnly ? null : this.horizontal ? "col-" + this.breakpoint + "-" + this.labelCols : "col-12"
            }, labelAlignClass: function () {
                return this.labelSrOnly ? null : this.labelTextAlign ? "text-" + this.labelTextAlign : null
            }, inputLayoutClasses: function () {
                return [this.horizontal ? "col-" + this.breakpoint + "-" + (12 - this.labelCols) : "col-12"]
            }, labelId: function () {
                return this.label || this.$slots.label ? this.safeId("_BV_label_") : null
            }, descriptionId: function () {
                return this.description || this.$slots.description ? this.safeId("_BV_description_") : null
            }, feedbackId: function () {
                return this.feedback || this.$slots.feedback ? this.safeId("_BV_feedback_") : null
            }, describedByIds: function () {
                return this.id ? [this.labelId, this.descriptionId, this.feedbackId].filter(function (t) {
                    return t
                }).join(" ") : null
            }
        },
        methods: {
            updateTargetId: function () {
                if (this.labelFor)return this.labelFor;
                var t = this.$refs.content;
                if (!t)return null;
                var e = t.querySelector(qn);
                this.targetId = e && e.id ? e.id : null
            }
        },
        mounted: function () {
            var t = this;
            this.$nextTick(function () {
                return t.updateTargetId()
            })
        },
        updated: function () {
            var t = this;
            this.$nextTick(function () {
                return t.updateTargetId()
            })
        }
    }, Un = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("label", {
                class: t.button ? t.btnLabelClasses : t.labelClasses,
                attrs: {"aria-pressed": t.button ? t.isChecked ? "true" : "false" : null}
            }, [n("input", {
                ref: "check",
                class: t.checkClasses,
                attrs: {
                    type: "checkbox",
                    id: t.safeId(),
                    name: t.name,
                    disabled: t.disabled,
                    required: t.required,
                    autocomplete: "off",
                    "aria-required": t.required ? "true" : null
                },
                domProps: {value: t.value, checked: t.isChecked},
                on: {focus: t.handleFocus, blur: t.handleFocus, change: t.handleChange}
            }), t._v(" "), t.custom && !t.button ? n("span", {
                staticClass: "custom-control-indicator",
                attrs: {"aria-hidden": "true"}
            }) : t._e(), t._v(" "), n("span", {class: t.custom && !t.button ? "custom-control-description" : null}, [t._t("default")], 2)])
        },
        staticRenderFns: [],
        mixins: [ln, en, an, sn, rn, nn],
        model: {prop: "checked", event: "change"},
        props: {
            value: {default: !0},
            uncheckedValue: {default: !1},
            checked: {default: !0},
            indeterminate: {type: Boolean, default: !1},
            button: {type: Boolean, default: !1},
            buttonVariant: {type: String, default: "secondary"}
        },
        computed: {
            labelClasses: function () {
                return [this.sizeFormClass, this.custom ? "custom-checkbox" : "", this.checkboxClass]
            }, btnLabelClasses: function () {
                return ["btn", "btn-" + this.buttonVariant, this.sizeBtnClass, this.isChecked ? "active" : "", this.disabled ? "disabled" : ""]
            }, checkClasses: function () {
                return [this.custom && !this.button ? "custom-control-input" : null, this.stateClass]
            }, isChecked: function () {
                return oe(this.checked) ? ae(this.checked, this.value) : this.checked === this.value
            }
        },
        watch: {
            indeterminate: function (t, e) {
                this.setIndeterminate(t)
            }
        },
        methods: {
            handleChange: function (t) {
                var e = this, n = t.target.checked;
                oe(this.checked) ? this.isChecked ? this.$emit("change", this.checked.filter(function (t) {
                    return t !== e.value
                })) : this.$emit("change", this.checked.concat([this.value])) : this.$emit("change", n ? this.value : this.uncheckedValue), this.$emit("update:indeterminate", this.$refs.check.indeterminate)
            }, setIndeterminate: function (t) {
                this.$refs.check.indeterminate = t, this.$emit("update:indeterminate", this.$refs.check.indeterminate)
            }, handleFocus: function (t) {
                if (this.button && t.target && t.target.parentElement) {
                    var e = t.target.parentElement;
                    "focus" === t.type ? e.classList.add("focus") : "blur" === t.type && e.classList.remove("focus")
                }
            }
        },
        mounted: function () {
            this.setIndeterminate(this.indeterminate)
        }
    }, Kn = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                class: t.buttons ? t.btnGroupClasses : t.radioGroupClasses,
                attrs: {
                    id: t.safeId(),
                    role: "radiogroup",
                    tabindex: "-1",
                    "data-toggle": t.buttons ? "buttons" : null,
                    "aria-required": t.required ? "true" : null,
                    "aria-invalid": t.computedAriaInvalid
                }
            }, t._l(t.formOptions, function (e, i) {
                return n("label", {
                    key: "radio_" + i,
                    class: t.buttons ? t.btnLabelClasses(e, i) : t.labelClasses,
                    attrs: {"aria-pressed": t.buttons ? e.value === t.localValue ? "true" : "false" : null}
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.localValue,
                        expression: "localValue"
                    }],
                    ref: "inputs",
                    refInFor: !0,
                    class: t.radioClasses,
                    attrs: {
                        id: t.safeId("_BV_radio_" + i),
                        type: "radio",
                        autocomplete: "off",
                        name: t.name,
                        required: t.name && t.required,
                        disabled: e.disabled || t.disabled
                    },
                    domProps: {value: e.value, checked: t._q(t.localValue, e.value)},
                    on: {
                        focus: t.handleFocus, blur: t.handleFocus, change: function (n) {
                            t.$emit("change", t.returnObject ? e : e.value)
                        }, __c: function (n) {
                            t.localValue = e.value
                        }
                    }
                }), t._v(" "), t.custom && !t.buttons ? n("span", {
                    staticClass: "custom-control-indicator",
                    attrs: {"aria-hidden": "true"}
                }) : t._e(), t._v(" "), n("span", {
                    class: t.custom && !t.buttons ? "custom-control-description" : null,
                    domProps: {innerHTML: t._s(e.text)}
                })])
            }))
        },
        staticRenderFns: [],
        mixins: [ln, en, an, sn, rn, nn, on],
        data: function () {
            return {localValue: this.value, localState: this.state}
        },
        props: {
            value: {},
            options: {type: [Array, Object], default: null, required: !0},
            validated: {type: Boolean, default: !1},
            ariaInvalid: {type: [Boolean, String], default: !1},
            stacked: {type: Boolean, default: !1},
            buttons: {type: Boolean, default: !1},
            buttonVariant: {type: String, default: "secondary"}
        },
        computed: {
            radioGroupClasses: function () {
                return [this.validated ? "was-validated" : "", this.sizeFormClass, this.stacked ? "custom-controls-stacked" : ""]
            }, btnGroupClasses: function () {
                return ["btn-group", this.validated ? "was-validated" : "", this.sizeBtnClass, this.stacked ? "btn-group-vertical" : ""]
            }, radioClasses: function () {
                return [this.custom && !this.buttons ? "custom-control-input" : null, this.stateClass]
            }, labelClasses: function () {
                return [this.checkboxClass, this.custom ? "custom-radio" : null]
            }, computedAriaInvalid: function () {
                return !0 === this.ariaInvalid || "true" === this.AriaInvalid ? "true" : !1 === this.computedState ? "true" : null
            }, inline: function () {
                return !this.stacked
            }
        },
        methods: {
            btnLabelClasses: function (t, e) {
                return ["btn", "btn-" + this.buttonVariant, t.disabled || this.disabled ? "disabled" : "", t.value === this.localValue ? "active" : null, this.stacked && e === this.formOptions.length - 1 ? "" : "mb-0"]
            }, handleFocus: function (t) {
                if (this.buttons && t.target && t.target.parentElement) {
                    var e = t.target.parentElement;
                    "focus" === t.type ? e.classList.add("focus") : "blur" === t.type && e.classList.remove("focus")
                }
            }
        }
    }, Yn = {
        render: function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("input", {
                class: t.inputClass,
                attrs: {
                    id: t.safeId(),
                    name: t.name,
                    type: t.localType,
                    disabled: t.disabled,
                    required: t.required,
                    readonly: t.readonly || t.plaintext,
                    placeholder: t.placeholder,
                    autocomplete: t.autocomplete || null,
                    "aria-required": t.required ? "true" : null,
                    "aria-invalid": t.computedAriaInvalid
                },
                domProps: {value: t.localValue},
                on: {
                    input: function (e) {
                        t.onInput(e.target.value, e)
                    }, change: function (e) {
                        t.onChange(e.target.value, e)
                    }
                }
            })
        },
        staticRenderFns: [],
        mixins: [ln, en, an, sn],
        data: function () {
            return {localValue: this.value}
        },
        props: {
            value: {default: null},
            type: {type: String, default: "text"},
            ariaInvalid: {type: [Boolean, String], default: !1},
            readonly: {type: Boolean, default: !1},
            plaintext: {type: Boolean, default: !1},
            autocomplete: {type: String, default: null},
            placeholder: {type: String, default: null},
            formatter: {type: Function},
            lazyFormatter: {type: Boolean, default: !1}
        },
        computed: {
            localType: function () {
                return "radio" === this.type || "checkbox" === this.type ? "text" : this.type || "text"
            }, inputClass: function () {
                return [this.plaintext ? "form-control-plaintext" : "form-control", this.sizeFormClass, this.stateClass]
            }, computedAriaInvalid: function () {
                return Boolean(this.ariaInvalid) && "false" !== this.ariaInvalid ? !0 === this.ariaInvalid ? "true" : this.ariaInvalid : !1 === this.computedState ? "true" : null
            }
        },
        watch: {
            value: function (t, e) {
                t !== e && (this.localValue = t)
            }, localValue: function (t, e) {
                t !== e && this.$emit("input", t)
            }
        },
        methods: {
            format: function (t, e) {
                if (this.formatter) {
                    var n = this.formatter(t, e);
                    if (n !== t)return n
                }
                return t
            }, onInput: function (t, e) {
                this.lazyFormatter || (this.localValue = this.format(t, e))
            }, onChange: function (t, e) {
                this.localValue = this.format(t, e), this.$emit("change", this.localValue)
            }, focus: function () {
                this.disabled || this.$el.focus()
            }
        }
    }, Zn = {
        render: function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.localValue,
                    expression: "localValue"
                }],
                class: t.inputClass,
                attrs: {
                    id: t.safeId(),
                    name: t.name,
                    disabled: t.disabled,
                    placeholder: t.placeholder,
                    required: t.required,
                    autocomplete: t.autocomplete || null,
                    readonly: t.readonly || t.plaintext,
                    rows: t.rowsCount,
                    wrap: t.wrap || null,
                    "aria-required": t.required ? "true" : null,
                    "aria-invalid": t.computedAriaInvalid
                },
                domProps: {value: t.localValue},
                on: {
                    input: function (e) {
                        e.target.composing || (t.localValue = e.target.value)
                    }
                }
            })
        },
        staticRenderFns: [],
        mixins: [ln, en, an, sn],
        data: function () {
            return {localValue: this.value}
        },
        props: {
            value: {type: String, default: ""},
            ariaInvalid: {type: [Boolean, String], default: !1},
            readonly: {type: Boolean, default: !1},
            plaintext: {type: Boolean, default: !1},
            autocomplete: {type: String, default: null},
            placeholder: {type: String, default: null},
            rows: {type: Number, default: null},
            maxRows: {type: Number, default: null},
            wrap: {type: String, default: "soft"}
        },
        computed: {
            rowsCount: function () {
                var t = this.rows || 1, e = (this.value || "").toString().split("\n").length;
                return this.maxRows ? Math.min(this.maxRows, Math.max(t, e)) : Math.max(t, e)
            }, inputClass: function () {
                return [this.plaintext ? "form-control-plaintext" : "form-control", this.sizeFormClass, this.stateClass]
            }, computedAriaInvalid: function () {
                return Boolean(this.ariaInvalid) && "false" !== this.ariaInvalid ? !0 === this.ariaInvalid ? "true" : this.ariaInvalid : !1 === this.computedState ? "true" : null
            }
        },
        watch: {
            value: function (t, e) {
                t !== e && (this.localValue = t)
            }, localValue: function (t, e) {
                t !== e && this.$emit("input", t)
            }
        },
        methods: {
            focus: function () {
                this.disabled || this.$el.focus()
            }
        }
    }, Jn = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                class: [t.custom ? "custom-file" : null, t.state ? "is-" + t.state : null],
                attrs: {id: t.safeId("_BV_file_outer_")},
                on: {
                    dragover: function (e) {
                        e.stopPropagation(), e.preventDefault(), t.dragover(e)
                    }
                }
            }, [t.dragging && t.custom ? n("span", {
                staticClass: "drop-here",
                attrs: {"data-drop": t.dropLabel},
                on: {
                    dragover: function (e) {
                        e.stopPropagation(), e.preventDefault(), t.dragover(e)
                    }, drop: function (e) {
                        e.stopPropagation(), e.preventDefault(), t.drop(e)
                    }, dragleave: function (e) {
                        e.stopPropagation(), e.preventDefault(), t.dragging = !1
                    }
                }
            }) : t._e(), n("input", {
                ref: "input",
                class: [t.custom ? "custom-file-input" : "form-control-file", t.stateClass],
                attrs: {
                    type: "file",
                    id: t.safeId(),
                    name: t.name,
                    disabled: t.disabled,
                    required: t.required,
                    capture: t.capture || null,
                    "aria-required": t.required ? "true" : null,
                    accept: t.accept || null,
                    multiple: t.multiple,
                    webkitdirectory: t.directory,
                    "aria-describedby": t.custom ? t.safeId("_BV_file_control_") : null
                },
                on: {change: t.onFileChange}
            }), t._v(" "), t.custom ? n("span", {
                class: ["custom-file-control", t.dragging ? "dragging" : null],
                attrs: {
                    id: t.safeId("_BV_file_control_"),
                    "data-choose": t.computedChooseLabel,
                    "data-selected": t.selectedLabel
                }
            }) : t._e()])
        },
        staticRenderFns: [],
        _scopeId: "data-v-c68bd5f8",
        mixins: [ln, en, sn, rn],
        data: function () {
            return {selectedFile: null, dragging: !1}
        },
        props: {
            accept: {type: String, default: ""},
            capture: {type: Boolean, default: !1},
            placeholder: {type: String, default: null},
            chooseLabel: {type: String, default: null},
            multiple: {type: Boolean, default: !1},
            directory: {type: Boolean, default: !1},
            noTraverse: {type: Boolean, default: !1},
            selectedFormat: {type: String, default: ":count Files"},
            noDrop: {type: Boolean, default: !1},
            dropLabel: {type: String, default: "Drop files here"}
        },
        computed: {
            selectedLabel: function () {
                return this.selectedFile && 0 !== this.selectedFile.length ? this.multiple ? 1 === this.selectedFile.length ? this.selectedFile[0].name : this.selectedFormat.replace(":names", this.selectedFile.map(function (t) {
                    return t.name
                }).join(",")).replace(":count", this.selectedFile.length) : this.selectedFile.name : this.placeholder || "No file chosen"
            }, computedChooseLabel: function () {
                return this.chooseLabel || (this.multiple ? "Choose Files" : "Choose File")
            }
        },
        watch: {
            selectedFile: function (t, e) {
                t !== e && (!t && this.multiple ? this.$emit("input", []) : this.$emit("input", t))
            }
        },
        methods: {
            reset: function () {
                try {
                    this.$refs.input.value = ""
                } catch (t) {
                }
                this.$refs.input.type = "", this.$refs.input.type = "file", this.selectedFile = this.multiple ? [] : null
            }, onFileChange: function (t) {
                var e = this;
                this.$emit("change", t);
                var n = t.dataTransfer && t.dataTransfer.items;
                if (!n || this.noTraverse)this.setFiles(t.target.files || t.dataTransfer.files); else {
                    for (var i = [], r = 0; r < n.length; r++) {
                        var o = n[r].webkitGetAsEntry();
                        o && i.push(e.traverseFileTree(o))
                    }
                    Promise.all(i).then(function (t) {
                        e.setFiles(re(t))
                    })
                }
            }, setFiles: function (t) {
                var e = this;
                if (t)if (this.multiple) {
                    for (var n = [], i = 0; i < t.length; i++)t[i].type.match(e.accept) && n.push(t[i]);
                    this.selectedFile = n
                } else this.selectedFile = t[0]; else this.selectedFile = null
            }, dragover: function (t) {
                !this.noDrop && this.custom && (this.dragging = !0, t.dataTransfer.dropEffect = "copy")
            }, drop: function (t) {
                this.noDrop || (this.dragging = !1, t.dataTransfer.files && t.dataTransfer.files.length > 0 && this.onFileChange(t))
            }, traverseFileTree: function (t, e) {
                var n = this;
                return new Promise(function (i) {
                    e = e || "", t.isFile ? t.file(function (t) {
                        t.$path = e, i(t)
                    }) : t.isDirectory && t.createReader().readEntries(function (r) {
                        for (var o = [], a = 0; a < r.length; a++)o.push(n.traverseFileTree(r[a], e + t.name + "/"));
                        Promise.all(o).then(function (t) {
                            i(re(t))
                        })
                    })
                })
            }
        }
    }, Xn = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.localValue,
                    expression: "localValue"
                }],
                ref: "input",
                class: t.inputClass,
                attrs: {
                    name: t.name,
                    id: t.safeId(),
                    multiple: t.multiple || null,
                    size: t.multiple || t.selectSize > 1 ? t.selectSize : null,
                    disabled: t.disabled,
                    required: t.required,
                    "aria-required": t.required ? "true" : null,
                    "aria-invalid": t.computedAriaInvalid
                },
                on: {
                    change: function (e) {
                        var n = Array.prototype.filter.call(e.target.options, function (t) {
                            return t.selected
                        }).map(function (t) {
                            return "_value" in t ? t._value : t.value
                        });
                        t.localValue = e.target.multiple ? n : n[0]
                    }
                }
            }, [t._l(t.formOptions, function (e) {
                return n("option", {
                    key: e.value || e.text,
                    attrs: {disabled: e.disabled},
                    domProps: {value: e.value, innerHTML: t._s(e.text)}
                })
            }), t._t("default")], 2)
        },
        staticRenderFns: [],
        mixins: [ln, en, an, sn, rn, on],
        data: function () {
            return {localValue: this.multiple ? this.value || [] : this.value}
        },
        props: {
            value: {},
            options: {type: [Array, Object], required: !0},
            multiple: {type: Boolean, default: !1},
            selectSize: {type: Number, default: 0},
            ariaInvalid: {type: [Boolean, String], default: !1}
        },
        computed: {
            inputClass: function () {
                return ["form-control", this.stateClass, this.sizeFormClass, this.plain || this.multiple || this.selectSize > 1 ? null : "custom-select"]
            }, computedAriaInvalid: function () {
                return !0 === this.ariaInvalid || "true" === this.ariaInvalid ? "true" : !1 === this.computedState ? "true" : null
            }
        }
    }, Qn = {
        render: function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("b-img", {
                attrs: {
                    src: t.computedSrc,
                    blank: t.computedBlank,
                    "blank-color": t.blankColor,
                    width: t.computedWidth,
                    height: t.computedHeight,
                    fluid: t.fluid,
                    "fluid-grow": t.fluidGrow,
                    block: t.block,
                    thumbnail: t.thumbnail,
                    rounded: t.rounded,
                    left: t.left,
                    right: t.right,
                    center: t.center
                }
            })
        },
        staticRenderFns: [],
        components: {bImg: Tn},
        data: function () {
            return {isShown: !1, scrollTimeout: null}
        },
        props: {
            src: {type: String, default: null, rqeuired: !0},
            width: {type: [Number, String], default: null},
            height: {type: [Number, String], default: null},
            blankSrc: {type: String, default: null},
            blankColor: {type: String, default: "transparent"},
            blankWidth: {type: [Number, String], default: null},
            blankHeight: {type: [Number, String], default: null},
            fluid: {type: Boolean, default: !1},
            fluidGrow: {type: Boolean, default: !1},
            block: {type: Boolean, default: !1},
            thumbnail: {type: Boolean, default: !1},
            rounded: {type: [Boolean, String], default: !1},
            left: {type: Boolean, default: !1},
            right: {type: Boolean, default: !1},
            center: {type: Boolean, default: !1},
            offset: {type: [Number, String], default: 360},
            throttle: {type: [Number, String], default: 100}
        },
        computed: {
            computedSrc: function () {
                return !this.blankSrc || this.isShown ? this.src : this.blankSrc
            }, computedBlank: function () {
                return !this.isShown && !this.blankSrc
            }, computedWidth: function () {
                return this.isShown ? this.width : this.blankWidth || this.width
            }, computedHeight: function () {
                return this.isShown ? this.height : this.blankHeight || this.height
            }
        },
        mounted: function () {
            this.setListeners(!0), this.checkView()
        },
        beforeDdestroy: function () {
            this.setListeners(flase)
        },
        methods: {
            setListeners: function (t) {
                var e = window;
                t ? (e.addEventListener("scroll", this.onScroll), e.addEventListener("resize", this.onScroll), e.addEventListener("orientationchange", this.onScroll)) : (e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onScroll), e.removeEventListener("orientationchange", this.onScroll), clearTimeout(this.scrollTimer), this.scrollTimout = null)
            }, checkView: function () {
                if (null !== this.$el.offsetParent && (this.$el.offsetWidth > 0 || this.$el.offsetHeight > 0)) {
                    var t = parseInt(this.offset, 10) || 0, e = {
                        left: 0 - t,
                        top: 0 - t,
                        bottom: document.documentElement.clientHeight + t,
                        right: document.documentElement.clientWidth + t
                    }, n = this.$el.getBoundingClientRect();
                    n.right >= e.left && n.bottom >= e.top && n.left <= e.right && n.top <= e.bottom && (this.isShown = !0, this.setListeners(!1))
                }
            }, onScroll: function () {
                this.isShown ? this.setListeners(!1) : (clearTimeout(this.scrollTimeout), this.scrollTimeout = setTimeout(this.checkView, parseInt(this.throttle, 10) || 100))
            }
        }
    }, ti = {
        functional: !0,
        props: {
            fluid: {type: Boolean, default: !1},
            containerFluid: {type: Boolean, default: !1},
            header: {type: String, default: null},
            headerTag: {type: String, default: "h1"},
            headerLevel: {type: Number, default: 3},
            lead: {type: String, default: null},
            leadTag: {type: String, default: "p"},
            tag: {type: String, default: "div"},
            bgVariant: {type: String, default: null},
            borderVariant: {type: String, default: null},
            textVariant: {type: String, default: null}
        },
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.slots, o = [];
            if (n.header || r().header) {
                o.push(t(n.headerTag, {class: (a = {}, a["display-" + n.headerLevel] = Boolean(n.headerLevel), a)}, r().header || n.header));
                var a
            }
            return (n.lead || r().lead) && o.push(t(n.leadTag, {staticClass: "lead"}, r().lead || n.lead)), r().default && o.push(r().default), n.fluid && (o = [t(Fn, {props: {fluid: n.containerFluid}}, o)]), t(n.tag, he(i, {
                staticClass: "jumbotron",
                class: (s = {
                    "jumbotron-fluid": n.fluid,
                    border: Boolean(n.borderVariant)
                }, s["text-" + n.textVariant] = Boolean(n.textVariant), s["bg-" + n.bgVariant] = Boolean(n.bgVariant), s["border-" + n.borderVariant] = Boolean(n.borderVariant), s)
            }), o);
            var s
        }
    }, ei = {
        functional: !0,
        props: {tag: {type: String, default: "div"}, flush: {type: Boolean, default: !1}},
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children, o = {
                staticClass: "list-group",
                class: {"list-group-flush": n.flush}
            };
            return t(n.tag, he(i, o), r)
        }
    }, ni = ["a", "router-link", "button", "b-link"], ii = f();
    delete ii.href.default, delete ii.to.default;
    var ri = {
        functional: !0,
        props: se(ii, {
            tag: {type: String, default: "div"},
            action: {type: Boolean, default: null},
            variant: {type: String, default: null}
        }),
        render: function (t, e) {
            var n, i = e.props, r = e.data, o = e.children, s = i.href || i.to ? ve : i.tag, l = {
                staticClass: "list-group-item",
                class: (n = {
                    "list-group-flush": i.flush,
                    active: i.active,
                    disabled: i.disabled,
                    "list-group-item-action": Boolean(i.href || i.to || i.action || ae(ni, i.tag))
                }, n["list-group-item-" + i.variant] = Boolean(i.variant), n),
                props: a(ii, i)
            };
            return t(s, he(r, l), o)
        }
    }, oi = {
        functional: !0, props: {tag: {type: String, default: "div"}}, render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(n.tag, he(i, {staticClass: "media-body"}), r)
        }
    }, ai = {
        functional: !0,
        props: {tag: {type: String, default: "div"}, verticalAlign: {type: String, default: "top"}},
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(n.tag, he(i, {
                staticClass: "d-flex",
                class: (o = {}, o["align-self-" + n.verticalAlign] = n.verticalAlign, o)
            }), r);
            var o
        }
    }, si = {
        functional: !0,
        props: {
            tag: {type: String, default: "div"},
            rightAlign: {type: Boolean, default: !1},
            verticalAlign: {type: String, default: "top"},
            noBody: {type: Boolean, default: !1}
        },
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.slots, o = e.children, a = n.noBody ? o : [];
            return n.noBody || (r().aside && !n.rightAlign && a.push(t(ai, {
                staticClass: "mr-3",
                props: {verticalAlign: n.verticalAlign}
            }, r().aside)), a.push(t(oi, r().default)), r().aside && n.rightAlign && a.push(t(ai, {
                staticClass: "ml-3",
                props: {verticalAlign: n.verticalAlign}
            }, r().aside))), t(n.tag, he(i, {staticClass: "media"}), a)
        }
    }, li = ["button:not([disabled])", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "a:not([disabled]):not(.disabled)", "[tabindex]:not([disabled]):not(.disabled)"].join(","), ui = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("transition-group", {
                attrs: {
                    "enter-class": "hidden",
                    "enter-to-class": "",
                    "enter-active-class": "",
                    "leave-class": "show",
                    "leave-active-class": "",
                    "leave-to-class": "hidden"
                }, on: {"after-enter": t.focusFirst}
            }, [n("div", {
                directives: [{name: "show", rawName: "v-show", value: t.is_visible, expression: "is_visible"}],
                key: "modal",
                ref: "modal",
                class: ["modal", {fade: !t.noFade, show: t.is_visible}],
                attrs: {id: t.id || null, role: "dialog"},
                on: {
                    click: function (e) {
                        t.onClickOut()
                    }, keyup: function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "esc", 27))return null;
                        t.onEsc()
                    }
                }
            }, [n("div", {class: ["modal-dialog", "modal-" + t.size]}, [n("div", {
                ref: "content",
                staticClass: "modal-content",
                attrs: {
                    tabindex: "-1",
                    role: "document",
                    "aria-labelledby": t.hideHeader || !t.id ? null : t.id + "__BV_header_",
                    "aria-describedby": t.id ? t.id + "__BV_body_" : null
                },
                on: {
                    click: function (t) {
                        t.stopPropagation()
                    }
                }
            }, [t.hideHeader ? t._e() : n("header", {
                ref: "header",
                staticClass: "modal-header",
                attrs: {id: t.id ? t.id + "__BV_header_" : null}
            }, [t._t("modal-header", [n(t.titleTag, {
                tag: "h5",
                staticClass: "modal-title"
            }, [t._t("modal-title", [t._v(t._s(t.title))])], 2), t.hideHeaderClose ? t._e() : n("button", {
                staticClass: "close",
                attrs: {type: "button", "aria-label": t.headerCloseLabel},
                on: {click: t.hide}
            }, [n("span", {attrs: {"aria-hidden": "true"}}, [t._v("Ã—")])])])], 2), n("div", {
                ref: "body",
                staticClass: "modal-body",
                attrs: {id: t.id ? t.id + "__BV_body_" : null}
            }, [t._t("default")], 2), t.hideFooter ? t._e() : n("footer", {
                ref: "footer",
                staticClass: "modal-footer"
            }, [t._t("modal-footer", [t.okOnly ? t._e() : n("b-btn", {
                attrs: {variant: "secondary", size: t.buttonSize},
                on: {
                    click: function (e) {
                        t.hide(!1)
                    }
                }
            }, [t._t("modal-cancel", [t._v(t._s(t.closeTitle))])], 2), n("b-btn", {
                attrs: {
                    variant: "primary",
                    size: t.buttonSize,
                    disabled: t.okDisabled
                }, on: {
                    click: function (e) {
                        t.hide(!0)
                    }
                }
            }, [t._t("modal-ok", [t._v(t._s(t.okTitle))])], 2)])], 2)])])]), t.is_visible ? n("div", {
                key: "modal-backdrop",
                class: ["modal-backdrop", {fade: !t.noFade, show: t.is_visible}]
            }) : t._e()])], 1)
        },
        staticRenderFns: [],
        _scopeId: "data-v-1b4cbb68",
        mixins: [Xe],
        components: {bBtn: Te},
        data: function () {
            return {is_visible: !1, return_focus: this.returnFocus || null}
        },
        model: {prop: "visible", event: "change"},
        computed: {
            body: function () {
                if ("undefined" != typeof document)return document.querySelector("body")
            }
        },
        watch: {
            visible: function (t, e) {
                t !== e && (t ? this.show() : this.hide())
            }
        },
        props: {
            id: {type: String, default: null},
            title: {type: String, default: ""},
            titleTag: {type: String, default: "h5"},
            size: {type: String, default: "md"},
            buttonSize: {type: String, default: ""},
            noFade: {type: Boolean, default: !1},
            noCloseOnBackdrop: {type: Boolean, default: !1},
            noCloseOnEsc: {type: Boolean, default: !1},
            noAutoFocus: {type: Boolean, default: !1},
            noEnforceFocus: {type: Boolean, default: !1},
            hideHeader: {type: Boolean, default: !1},
            hideFooter: {type: Boolean, default: !1},
            hideHeaderClose: {type: Boolean, default: !1},
            okOnly: {type: Boolean, default: !1},
            okDisabled: {type: Boolean, default: !1},
            visible: {type: Boolean, default: !1},
            returnFocus: {default: null},
            headerCloseLabel: {type: String, default: "Close"},
            closeTitle: {type: String, default: "Close"},
            okTitle: {type: String, default: "OK"}
        },
        methods: {
            show: function () {
                this.is_visible || (this.$emit("show"), this.is_visible = !0, this.$root.$emit("shown::modal", this.id), this.body.classList.add("modal-open"), this.$emit("shown"), this.$emit("change", !0), "undefined" != typeof document && (document.removeEventListener("focusin", this.enforceFocus, !1), document.addEventListener("focusin", this.enforceFocus, !1)))
            }, hide: function (t) {
                if (this.is_visible) {
                    var e = !1, n = {
                        isOK: t, cancel: function () {
                            e = !0
                        }
                    };
                    this.$emit("change", !1), this.$emit("hide", n), !0 === t ? this.$emit("ok", n) : !1 === t && this.$emit("cancel", n), e || ("undefined" != typeof document && (document.removeEventListener("focusin", this.enforceFocus, !1), this.returnFocusTo()), this.is_visible = !1, this.$root.$emit("hidden::modal", this.id), this.$emit("hidden", n), this.body.classList.remove("modal-open"))
                }
            }, onClickOut: function () {
                this.is_visible && !this.noCloseOnBackdrop && this.hide()
            }, onEsc: function () {
                this.is_visible && !this.noCloseOnEsc && this.hide()
            }, focusFirst: function () {
                var t = this;
                "undefined" != typeof document && this.$nextTick(function () {
                    if (!document.activeElement || !t.$refs.content.contains(document.activeElement)) {
                        var e;
                        t.noAutoFocus || (t.$refs.body && (e = vt(t.$refs.body, li)), !e && t.$refs.footer && (e = vt(t.$refs.footer, li)), !e && t.$refs.header && (e = vt(t.$refs.header, li))), e || (e = t.$refs.content), e && e.focus && e.focus()
                    }
                })
            }, returnFocusTo: function () {
                var t = this.returnFocus || this.return_focus || null;
                t && ("string" == typeof t && (t = document.querySelector(t)), t && t.$el && "function" == typeof t.$el.focus ? t.$el.focus() : t && "function" == typeof t.focus && t.focus())
            }, enforceFocus: function (t) {
                !this.noEnforceFocus && this.is_visible && document !== t.target && this.$refs.content && this.$refs.content !== t.target && !this.$refs.content.contains(t.target) && this.$refs.content.focus()
            }, showHandler: function (t, e) {
                t === this.id && (this.return_focus = e || null, this.show())
            }, hideHandler: function (t) {
                t === this.id && this.hide()
            }
        },
        created: function () {
            this.listenOnRoot("show::modal", this.showHandler), this.listenOnRoot("hide::modal", this.hideHandler)
        },
        mounted: function () {
            !0 === this.visible && this.show()
        },
        destroyed: function () {
            "undefined" != typeof document && document.removeEventListener("focusin", this.enforceFocus, !1)
        }
    }, di = {
        functional: !0,
        props: {
            tag: {type: String, default: "ul"},
            fill: {type: Boolean, default: !1},
            justified: {type: Boolean, default: !1},
            tabs: {type: Boolean, default: !1},
            pills: {type: Boolean, default: !1},
            vertical: {type: Boolean, default: !1},
            isNavBar: {type: Boolean, default: !1}
        },
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(n.tag, he(i, {
                staticClass: "nav",
                class: {
                    "navbar-nav": n.isNavBar,
                    "nav-tabs": n.tabs,
                    "nav-pills": n.pills,
                    "flex-column": n.vertical,
                    "nav-fill": n.fill,
                    "nav-justified": n.justified
                }
            }), r)
        }
    }, ci = {
        functional: !0, props: f(), render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t("li", he(i, {staticClass: "nav-item"}), [t(ve, {staticClass: "nav-link", props: n}, r)])
        }
    }, fi = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("li", {class: t.dropdownClasses, attrs: {id: t.safeId()}}, [n("a", {
                ref: "toggle",
                class: t.toggleClasses,
                attrs: {
                    href: "#",
                    id: t.safeId("_BV_button_"),
                    "aria-haspopup": "true",
                    "aria-expanded": t.visible ? "true" : "false",
                    disabled: t.disabled
                },
                on: {
                    click: function (e) {
                        e.stopPropagation(), e.preventDefault(), t.toggle(e)
                    }, keydown: [function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13))return null;
                        e.stopPropagation(), e.preventDefault(), t.toggle(e)
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "space", 32))return null;
                        e.stopPropagation(), e.preventDefault(), t.toggle(e)
                    }]
                }
            }, [t._t("button-content", [t._t("text", [n("span", {domProps: {innerHTML: t._s(t.text)}})])])], 2), n("div", {
                ref: "menu",
                class: t.menuClasses,
                attrs: {role: t.role, "aria-labelledby": t.safeId("_BV_button_")},
                on: {
                    mouseover: t.onMouseOver, keyup: function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "esc", 27))return null;
                        t.onEsc(e)
                    }, keydown: [function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "tab", 9))return null;
                        t.onTab(e)
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "up", 38))return null;
                        t.focusNext(e, !0)
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "down", 40))return null;
                        t.focusNext(e, !1)
                    }]
                }
            }, [t._t("default")], 2)])
        }, staticRenderFns: [], mixins: [ln, tn], computed: {
            isNav: function () {
                return !0
            }, dropdownClasses: function () {
                return ["nav-item", "b-nav-dropdown", "dropdown", this.dropup ? "dropup" : "", this.visible ? "show" : ""]
            }, toggleClasses: function () {
                return ["nav-link", this.noCaret ? "" : "dropdown-toggle", this.disabled ? disabled : ""]
            }, menuClasses: function () {
                return ["dropdown-menu", this.right ? "dropdown-menu-right" : "dropdown-menu-left", this.visible ? "show" : ""]
            }
        }, props: {noCaret: {type: Boolean, default: !1}, role: {type: String, default: "menu"}}
    }, pi = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("button", {
                class: t.classObject,
                attrs: {
                    type: "button",
                    "aria-label": t.label,
                    "aria-controls": t.target.id ? t.target.id : t.target,
                    "aria-expanded": t.toggleState ? "true" : "false"
                },
                on: {click: t.onclick}
            }, [t._t("default", [n("span", {staticClass: "navbar-toggler-icon"})])], 2)
        },
        staticRenderFns: [],
        mixins: [Xe],
        computed: {
            classObject: function () {
                return ["navbar-toggler", "navbar-toggler-" + this.position]
            }
        },
        data: function () {
            return {toggleState: !1}
        },
        props: {
            label: {type: String, default: "Toggle navigation"},
            position: {type: String, default: "right"},
            target: {required: !0}
        },
        methods: {
            onclick: function () {
                var t = this.target;
                t.toggle && t.toggle(), this.$root.$emit("collapse::toggle", this.target)
            }, handleStateEvt: function (t, e) {
                t !== this.target && t !== this.target.id || (this.toggleState = e)
            }
        },
        created: function () {
            this.listenOnRoot("collapse::toggle::state", this.handleStateEvt)
        }
    }, hi = {
        functional: !0,
        props: {
            tag: {type: String, default: "nav"},
            type: {type: String, default: "light"},
            variant: {type: String},
            toggleable: {type: [Boolean, String], default: !1},
            toggleBreakpoint: {type: String, default: null},
            fixed: {type: String},
            sticky: {type: Boolean, default: !1}
        },
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children, o = n.toggleBreakpoint || (!0 === n.toggleable ? "sm" : n.toggleable) || "sm";
            return t(n.tag, he(i, {
                staticClass: "navbar",
                class: (a = {"sticky-top": n.sticky}, a["navbar-" + n.type] = Boolean(n.type), a["bg-" + n.variant] = Boolean(n.variant), a["fixed-" + n.fixed] = Boolean(n.fixed), a["navbar-expand-" + o] = !1 !== n.toggleable, a)
            }), r);
            var a
        }
    }, gi = f();
    gi.href.default = void 0, gi.to.default = void 0;
    var mi = {
        functional: !0, props: se(gi, {tag: {type: String, default: "div"}}), render: function (t, e) {
            var n = e.props, i = e.data, r = e.children, o = Boolean(n.to || n.href);
            return t(o ? ve : n.tag, he(i, {staticClass: "navbar-brand", props: o ? a(gi, n) : {}}), r)
        }
    }, vi = {
        functional: !0, props: {tag: {type: String, default: "span"}}, render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(n.tag, he(i, {staticClass: "navbar-text"}), r)
        }
    }, bi = {
        functional: !0, props: {id: {type: String, default: null}}, render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(jn, he(i, {attrs: {id: n.id}, props: {inline: !0}}), r)
        }
    }, yi = ["start", "end", "center"], _i = {
        functional: !0,
        props: {
            tag: {type: String, default: "div"},
            noGutters: {type: Boolean, default: !1},
            alignV: {
                type: String, default: null, validator: function (t) {
                    return ae(yi.concat(["baseline", "stretch"]), t)
                }
            },
            alignH: {
                type: String, default: null, validator: function (t) {
                    return ae(yi.concat(["between", "around"]), t)
                }
            },
            alignContent: {
                type: String, default: null, validator: function (t) {
                    return ae(yi.concat(["between", "around", "stretch"]), t)
                }
            }
        },
        render: function (t, e) {
            var n = e.props, i = e.data, r = e.children;
            return t(n.tag, he(i, {
                staticClass: "row",
                class: (o = {"no-gutters": n.noGutters}, o["align-items-" + n.alignV] = n.alignV, o["justify-content-" + n.alignH] = n.alignH, o["align-content-" + n.alignContent] = n.alignContent, o)
            }), r);
            var o
        }
    }, wi = function (t) {
        return Array.apply(null, {length: t})
    }, Si = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("ul", {
                class: ["pagination", t.btnSize, t.alignment],
                attrs: {
                    "aria-disabled": t.disabled ? "true" : "false",
                    "aria-label": t.ariaLabel ? t.ariaLabel : null,
                    role: "menubar"
                },
                on: {
                    focusin: function (e) {
                        if (e.target !== e.currentTarget)return null;
                        t.focusCurrent(e)
                    }, keydown: [function (e) {
                        return "button" in e || !t._k(e.keyCode, "left", 37) ? "button" in e && 0 !== e.button ? null : (e.preventDefault(), void t.focusPrev(e)) : null
                    }, function (e) {
                        return "button" in e || !t._k(e.keyCode, "right", 39) ? "button" in e && 2 !== e.button ? null : (e.preventDefault(), void t.focusNext(e)) : null
                    }, function (e) {
                        return ("button" in e || !t._k(e.keyCode, "left", 37)) && e.shiftKey ? "button" in e && 0 !== e.button ? null : (e.preventDefault(), void t.focusFirst(e)) : null
                    }, function (e) {
                        return ("button" in e || !t._k(e.keyCode, "right", 39)) && e.shiftKey ? "button" in e && 2 !== e.button ? null : (e.preventDefault(), void t.focusLast(e)) : null
                    }]
                }
            }, [t.hideGotoEndButtons ? t._e() : [t.isActive(1) || t.disabled ? n("li", {
                staticClass: "page-item disabled",
                attrs: {role: "none presentation", "aria-hidden": "true"}
            }, [n("span", {
                staticClass: "page-link",
                domProps: {innerHTML: t._s(t.firstText)}
            })]) : n("li", {
                staticClass: "page-item",
                attrs: {role: "none presentation"}
            }, [n("a", {
                staticClass: "page-link",
                attrs: {
                    "aria-label": t.labelFirstPage,
                    "aria-controls": t.ariaControls || null,
                    role: "menuitem",
                    href: "#",
                    tabindex: "-1"
                },
                on: {
                    click: function (e) {
                        e.preventDefault(), t.setPage(e, 1)
                    }, keydown: [function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13))return null;
                        e.preventDefault(), t.setPage(e, 1)
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "space", 32))return null;
                        e.preventDefault(), t.setPage(e, 1)
                    }]
                }
            }, [n("span", {
                attrs: {"aria-hidden": "true"},
                domProps: {innerHTML: t._s(t.firstText)}
            })])])], t.isActive(1) || t.disabled ? n("li", {
                staticClass: "page-item disabled",
                attrs: {role: "none presentation", "aria-hidden": "true"}
            }, [n("span", {
                staticClass: "page-link",
                domProps: {innerHTML: t._s(t.prevText)}
            })]) : n("li", {
                staticClass: "page-item",
                attrs: {role: "none presentation"}
            }, [n("a", {
                staticClass: "page-link",
                attrs: {
                    "aria-label": t.labelPrevPage,
                    "aria-controls": t.ariaControls || null,
                    role: "menuitem",
                    href: "#",
                    tabindex: "-1"
                },
                on: {
                    click: function (e) {
                        e.preventDefault(), t.setPage(e, t.currentPage - 1)
                    }, keydown: [function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13))return null;
                        e.preventDefault(), t.setPage(e, t.currentPage - 1)
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "space", 32))return null;
                        e.preventDefault(), t.setPage(e, t.currentPage - 1)
                    }]
                }
            }, [n("span", {
                attrs: {"aria-hidden": "true"},
                domProps: {innerHTML: t._s(t.prevText)}
            })])]), t.showFirstDots ? n("li", {
                staticClass: "page-item disabled d-none d-sm-flex",
                attrs: {role: "separator"}
            }, [n("span", {
                staticClass: "page-link",
                domProps: {innerHTML: t._s(t.ellipsisText)}
            })]) : t._e(), t._l(t.pageList, function (e) {
                return n("li", {
                    key: e.number,
                    class: t.pageItemClasses(e),
                    attrs: {role: "none presentation"}
                }, [n("a", {
                    class: t.pageLinkClasses(e),
                    attrs: {
                        disabled: t.disabled,
                        "aria-disabled": t.disabled ? "true" : null,
                        "aria-label": t.labelPage + " " + e.number,
                        "aria-checked": t.isActive(e.number) ? "true" : "false",
                        "aria-controls": t.ariaControls || null,
                        "aria-posinset": e.number,
                        "aria-setsize": t.numberOfPages,
                        role: "menuitemradio",
                        href: "#",
                        tabindex: "-1"
                    },
                    on: {
                        click: function (n) {
                            n.preventDefault(), t.setPage(n, e.number)
                        }, keydown: [function (n) {
                            if (!("button" in n) && t._k(n.keyCode, "enter", 13))return null;
                            n.preventDefault(), t.setPage(n, e.number)
                        }, function (n) {
                            if (!("button" in n) && t._k(n.keyCode, "space", 32))return null;
                            n.preventDefault(), t.setPage(n, e.number)
                        }]
                    }
                }, [t._v(t._s(e.number))])])
            }), t.showLastDots ? n("li", {
                staticClass: "page-item disabled d-none d-sm-flex",
                attrs: {role: "separator"}
            }, [n("span", {
                staticClass: "page-link",
                domProps: {innerHTML: t._s(t.ellipsisText)}
            })]) : t._e(), t.isActive(t.numberOfPages) || t.disabled ? n("li", {
                staticClass: "page-item disabled",
                attrs: {role: "none presentation", "aria-hidden": "true"}
            }, [n("span", {
                staticClass: "page-link",
                domProps: {innerHTML: t._s(t.nextText)}
            })]) : n("li", {
                staticClass: "page-item",
                attrs: {role: "none presentation"}
            }, [n("a", {
                staticClass: "page-link",
                attrs: {
                    "aria-label": t.labelNextPage,
                    "aria-controls": t.ariaControls || null,
                    role: "menuitem",
                    href: "#",
                    tabindex: "-1"
                },
                on: {
                    click: function (e) {
                        e.preventDefault(), t.setPage(e, t.currentPage + 1)
                    }, keydown: [function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13))return null;
                        e.preventDefault(), t.setPage(e, t.currentPage + 1)
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "space", 32))return null;
                        e.preventDefault(), t.setPage(e, t.currentPage + 1)
                    }]
                }
            }, [n("span", {
                attrs: {"aria-hidden": "true"},
                domProps: {innerHTML: t._s(t.nextText)}
            })])]), t.hideGotoEndButtons ? t._e() : [t.isActive(t.numberOfPages) || t.disabled ? n("li", {
                staticClass: "page-item disabled",
                attrs: {role: "none presentation", "aria-hidden": "true"}
            }, [n("span", {
                staticClass: "page-link",
                domProps: {innerHTML: t._s(t.lastText)}
            })]) : n("li", {
                staticClass: "page-item",
                attrs: {role: "none presentation"}
            }, [n("a", {
                staticClass: "page-link",
                attrs: {
                    "aria-label": t.labelLastPage,
                    "aria-controls": t.ariaControls || null,
                    role: "menuitem",
                    href: "#",
                    tabindex: "-1"
                },
                on: {
                    click: function (e) {
                        e.preventDefault(), t.setPage(e, t.numberOfPages)
                    }, keydown: [function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13))return null;
                        e.preventDefault(), t.setPage(e, t.numberOfPages)
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "space", 32))return null;
                        e.preventDefault(), t.setPage(e, t.numberOfPages)
                    }]
                }
            }, [n("span", {attrs: {"aria-hidden": "true"}, domProps: {innerHTML: t._s(t.lastText)}})])])]], 2)
        },
        staticRenderFns: [],
        _scopeId: "data-v-2792960b",
        data: function () {
            return {showFirstDots: !1, showLastDots: !1, currentPage: this.value}
        },
        computed: {
            numberOfPages: function () {
                var t = Math.ceil(this.totalRows / this.perPage);
                return t < 1 ? 1 : t
            }, btnSize: function () {
                return this.size ? "pagination-" + this.size : ""
            }, alignment: function () {
                return "center" === this.align ? "justify-content-center" : "end" === this.align || "right" === this.align ? "justify-content-end" : ""
            }, pageList: function () {
                this.currentPage > this.numberOfPages ? this.currentPage = this.numberOfPages : this.currentPage < 1 && (this.currentPage = 1), this.showFirstDots = !1, this.showLastDots = !1;
                var t = this.limit, e = 1;
                this.numberOfPages <= this.limit ? t = this.numberOfPages : this.currentPage < this.limit - 1 && this.limit > 3 ? this.hideEllipsis || (t = this.limit - 1, this.showLastDots = !0) : this.numberOfPages - this.currentPage + 2 < this.limit && this.limit > 3 ? (this.hideEllipsis || (this.showFirstDots = !0, t = this.limit - 1), e = this.numberOfPages - t + 1) : (this.limit > 3 && !this.hideEllipsis && (this.showFirstDots = !0, this.showLastDots = !0, t = this.limit - 2), e = this.currentPage - Math.floor(t / 2)), e < 1 ? e = 1 : e > this.numberOfPages - t && (e = this.numberOfPages - t + 1);
                var n = yt(e, t);
                if (n.length > 3) {
                    var i = this.currentPage - e;
                    if (0 === i)for (var r = 3; r < n.length; r++)n[r].className = "d-none d-sm-flex"; else if (i === n.length - 1)for (var o = 0; o < n.length - 3; o++)n[o].className = "d-none d-sm-flex"; else {
                        for (var a = 0; a < i - 1; a++)n[a].className = "d-none d-sm-flex";
                        for (var s = n.length - 1; s > i + 1; s--)n[s].className = "d-none d-sm-flex"
                    }
                }
                return n
            }
        },
        methods: {
            isActive: function (t) {
                return t === this.currentPage
            }, pageItemClasses: function (t) {
                var e = this.isActive(t.number);
                return ["page-item", this.disabled ? "disabled" : "", e ? "active" : "", t.className]
            }, pageLinkClasses: function (t) {
                var e = this.isActive(t.number);
                return ["page-link", this.disabled ? "disabled" : "", e ? "active" : ""]
            }, setPage: function (t, e) {
                var n = this;
                if (this.disabled)return t.preventDefault(), void t.stopPropagation();
                e > this.numberOfPages ? this.currentPage = this.numberOfPages : e < 1 ? this.currentpage = 1 : this.currentPage = e, this.$nextTick(function () {
                    bt(t.target) && t.target.focus ? t.target.focus() : n.focusCurrent()
                }), this.$emit("change", this.currentPage)
            }, getButtons: function () {
                return re(this.$el.querySelectorAll("a.page-link")).filter(function (t) {
                    return bt(t)
                })
            }, setBtnFocus: function (t) {
                this.$nextTick(function () {
                    t.focus()
                })
            }, focusFirst: function () {
                var t = this.getButtons().find(function (t) {
                    return !t.disabled
                });
                t && t.focus && t !== document.activeElement && this.setBtnFocus(t)
            }, focusLast: function () {
                var t = this.getButtons().reverse().find(function (t) {
                    return !t.disabled
                });
                t && t.focus && t !== document.activeElement && this.setBtnFocus(t)
            }, focusCurrent: function () {
                var t = this, e = this.getButtons().find(function (e) {
                    return parseInt(e.getAttribute("aria-posinset"), 10) === t.currentPage
                });
                e && e.focus ? this.setBtnFocus(e) : this.focusFirst()
            }, focusPrev: function () {
                var t = this.getButtons(), e = t.indexOf(document.activeElement);
                e > 0 && !t[e - 1].disabled && t[e - 1].focus && this.setBtnFocus(t[e - 1])
            }, focusNext: function () {
                var t = this.getButtons(), e = t.indexOf(document.activeElement);
                e < t.length - 1 && !t[e + 1].disabled && t[e + 1].focus && this.setBtnFocus(t[e + 1])
            }
        },
        watch: {
            currentPage: function (t, e) {
                t !== e && this.$emit("input", t)
            }, value: function (t, e) {
                t !== e && (this.currentPage = t)
            }
        },
        props: {
            disabled: {type: Boolean, default: !1},
            value: {type: Number, default: 1},
            limit: {type: Number, default: 5},
            perPage: {type: Number, default: 20},
            totalRows: {type: Number, default: 20},
            size: {type: String, default: "md"},
            align: {type: String, default: "left"},
            hideGotoEndButtons: {type: Boolean, default: !1},
            ariaLabel: {type: String, default: "Pagination"},
            labelFirstPage: {type: String, default: "Goto first page"},
            firstText: {type: String, default: "&laquo;"},
            labelPrevPage: {type: String, default: "Goto previous page"},
            prevText: {type: String, default: "&lsaquo;"},
            labelNextPage: {type: String, default: "Goto next page"},
            nextText: {type: String, default: "&rsaquo;"},
            labelLastPage: {type: String, default: "Goto last page"},
            lastText: {type: String, default: "&raquo;"},
            labelPage: {type: String, default: "Goto page"},
            hideEllipsis: {type: Boolean, default: !1},
            ellipsisText: {type: String, default: "&hellip;"},
            ariaControls: {type: String, default: null}
        }
    }, ki = function () {
        for (var t = [], e = arguments.length; e--;)t[e] = arguments[e];
        return le(un).reduce(function (e, n) {
            return ae(t, n) && (e[n] = un[n]), e
        }, {})
    }("activeClass", "exactActiveClass", "append", "exact", "replace", "target", "rel"), Ci = se({
        numberOfPages: {
            type: Number,
            default: 1
        },
        baseUrl: {type: String, default: "/"},
        useRouter: {type: Boolean, default: !1},
        linkGen: {type: Function, default: null},
        pageGen: {type: Function, default: null}
    }, {
        disabled: {type: Boolean, default: !1},
        value: {type: Number, default: 1},
        limit: {type: Number, default: 5},
        size: {type: String, default: "md"},
        align: {type: String, default: "left"},
        hideGotoEndButtons: {type: Boolean, default: !1},
        ariaLabel: {type: String, default: "Pagination"},
        labelFirstPage: {type: String, default: "Goto first page"},
        firstText: {type: String, default: "&laquo;"},
        labelPrevPage: {type: String, default: "Goto previous page"},
        prevText: {type: String, default: "&lsaquo;"},
        labelNextPage: {type: String, default: "Goto next page"},
        nextText: {type: String, default: "&rsaquo;"},
        labelLastPage: {type: String, default: "Goto last page"},
        lastText: {type: String, default: "&raquo;"},
        labelPage: {type: String, default: "Goto page"},
        hideEllipsis: {type: Boolean, default: !1},
        ellipsisText: {type: String, default: "&hellip;"}
    }, ki), Ti = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("nav", [n("ul", {
                class: ["pagination", t.btnSize, t.alignment],
                attrs: {
                    "aria-disabled": t.disabled ? "true" : "false",
                    "aria-label": t.ariaLabel ? t.ariaLabel : null,
                    role: "menubar"
                },
                on: {
                    focusin: function (e) {
                        if (e.target !== e.currentTarget)return null;
                        t.focusCurrent(e)
                    }, keydown: [function (e) {
                        return "button" in e || !t._k(e.keyCode, "left", 37) ? "button" in e && 0 !== e.button ? null : (e.preventDefault(), void t.focusPrev(e)) : null
                    }, function (e) {
                        return "button" in e || !t._k(e.keyCode, "right", 39) ? "button" in e && 2 !== e.button ? null : (e.preventDefault(), void t.focusNext(e)) : null
                    }, function (e) {
                        return ("button" in e || !t._k(e.keyCode, "left", 37)) && e.shiftKey ? "button" in e && 0 !== e.button ? null : (e.preventDefault(), void t.focusFirst(e)) : null
                    }, function (e) {
                        return ("button" in e || !t._k(e.keyCode, "right", 39)) && e.shiftKey ? "button" in e && 2 !== e.button ? null : (e.preventDefault(), void t.focusLast(e)) : null
                    }]
                }
            }, [t.hideGotoEndButtons ? t._e() : [t.isActive(1) || t.disabled ? n("li", {
                staticClass: "page-item disabled",
                attrs: {role: "none presentation", "aria-hidden": "true"}
            }, [n("span", {
                staticClass: "page-link",
                domProps: {innerHTML: t._s(t.firstText)}
            })]) : n("li", {
                staticClass: "page-item",
                attrs: {role: "none presentation"}
            }, [n("b-link", t._b({
                staticClass: "page-link",
                attrs: {"aria-label": t.labelFirstPage, role: "menuitem", tabindex: "-1"},
                on: {
                    click: function (e) {
                        t.onClick(1)
                    }
                }
            }, "b-link", t.linkProps(1), !1), [n("span", {
                attrs: {"aria-hidden": "true"},
                domProps: {innerHTML: t._s(t.firstText)}
            })])], 1)], t.isActive(1) || t.disabled ? n("li", {
                staticClass: "page-item disabled",
                attrs: {role: "none presentation", "aria-hidden": "true"}
            }, [n("span", {
                staticClass: "page-link",
                domProps: {innerHTML: t._s(t.prevText)}
            })]) : n("li", {
                staticClass: "page-item",
                attrs: {role: "none presentation"}
            }, [n("b-link", t._b({
                staticClass: "page-link",
                attrs: {"aria-label": t.labelPrevPage, role: "menuitem", tabindex: "-1"},
                on: {
                    click: function (e) {
                        t.onClick(t.currentPage - 1)
                    }
                }
            }, "b-link", t.linkProps(t.currentPage - 1), !1), [n("span", {
                attrs: {"aria-hidden": "true"},
                domProps: {innerHTML: t._s(t.prevText)}
            })])], 1), t.showFirstDots ? n("li", {
                staticClass: "page-item disabled d-none d-sm-flex",
                attrs: {role: "separator"}
            }, [n("span", {
                staticClass: "page-link",
                domProps: {innerHTML: t._s(t.ellipsisText)}
            })]) : t._e(), t._l(t.pageList, function (e) {
                return n("li", {
                    key: e.number,
                    class: t.pageItemClasses(e),
                    attrs: {role: "none presentation"}
                }, [t.disabled ? n("span", {staticClass: "page-link"}, [t._v(t._s(e.number))]) : n("b-link", t._b({
                    class: t.pageLinkClasses(e),
                    attrs: {
                        disabled: t.disabled,
                        "aria-disabled": t.disabled ? "true" : null,
                        "aria-label": t.labelPage + " " + e.number,
                        "aria-checked": t.isActive(e.number) ? "true" : "false",
                        "aria-posinset": e.number,
                        "aria-setsize": t.numberOfPages,
                        role: "menuitemradio",
                        tabindex: "-1"
                    },
                    domProps: {innerHTML: t._s(t.makePage(e.number))},
                    on: {
                        click: function (n) {
                            t.onClick(e.number)
                        }
                    }
                }, "b-link", t.linkProps(e.number), !1))], 1)
            }), t.showLastDots ? n("li", {
                staticClass: "page-item disabled d-none d-sm-flex",
                attrs: {role: "separator"}
            }, [n("span", {
                staticClass: "page-link",
                domProps: {innerHTML: t._s(t.ellipsisText)}
            })]) : t._e(), t.isActive(t.numberOfPages) || t.disabled ? n("li", {
                staticClass: "page-item disabled",
                attrs: {role: "none presentation", "aria-hidden": "true"}
            }, [n("span", {
                staticClass: "page-link",
                domProps: {innerHTML: t._s(t.nextText)}
            })]) : n("li", {
                staticClass: "page-item",
                attrs: {role: "none presentation"}
            }, [n("b-link", t._b({
                staticClass: "page-link",
                attrs: {"aria-label": t.labelNextPage, role: "menuitem", tabindex: "-1"},
                on: {
                    click: function (e) {
                        t.onClick(t.currentPage + 1)
                    }
                }
            }, "b-link", t.linkProps(t.currentPage + 1), !1), [n("span", {
                attrs: {"aria-hidden": "true"},
                domProps: {innerHTML: t._s(t.nextText)}
            })])], 1), t.hideGotoEndButtons ? t._e() : [t.isActive(t.numberOfPages) || t.disabled ? n("li", {
                staticClass: "page-item disabled",
                attrs: {role: "none presentation", "aria-hidden": "true"}
            }, [n("span", {
                staticClass: "page-link",
                domProps: {innerHTML: t._s(t.lastText)}
            })]) : n("li", {
                staticClass: "page-item",
                attrs: {role: "none presentation"}
            }, [n("b-link", t._b({
                staticClass: "page-link",
                attrs: {"aria-label": t.labelLastPage, role: "menuitem"},
                on: {
                    click: function (e) {
                        t.onClick(t.numberOfPages)
                    }
                }
            }, "b-link", t.linkProps(t.numberOfPages), !1), [n("span", {
                attrs: {"aria-hidden": "true"},
                domProps: {innerHTML: t._s(t.lastText)}
            })])], 1)]], 2)])
        }, staticRenderFns: [], _scopeId: "data-v-20c4e761", components: {bLink: ve}, data: function () {
            return {showFirstDots: !1, showLastDots: !1, currentPage: this.value}
        }, props: Ci, watch: {
            currentPage: function (t, e) {
                t !== e && this.$emit("input", t)
            }, value: function (t, e) {
                t !== e && (this.currentPage = t)
            }
        }, computed: {
            btnSize: function () {
                return this.size ? "pagination-" + this.size : ""
            }, alignment: function () {
                return "center" === this.align ? "justify-content-center" : "end" === this.align || "right" === this.align ? "justify-content-end" : ""
            }, pageList: function () {
                this.currentPage > this.numberOfPages ? this.currentPage = this.numberOfPages : this.currentPage < 1 && (this.currentPage = 1), this.showFirstDots = !1, this.showLastDots = !1;
                var t = this.limit, e = 1;
                this.numberOfPages <= this.limit ? t = this.numberOfPages : this.currentPage < this.limit - 1 && this.limit > 3 ? this.hideEllipsis || (t = this.limit - 1, this.showLastDots = !0) : this.numberOfPages - this.currentPage + 2 < this.limit && this.limit > 3 ? (this.hideEllipsis || (this.showFirstDots = !0, t = this.limit - 1), e = this.numberOfPages - t + 1) : (this.limit > 3 && !this.hideEllipsis && (this.showFirstDots = !0, this.showLastDots = !0, t = this.limit - 2), e = this.currentPage - Math.floor(t / 2)), e < 1 ? e = 1 : e > this.numberOfPages - t && (e = this.numberOfPages - t + 1);
                var n = wt(e, t);
                if (n.length > 3) {
                    var i = this.currentPage - e;
                    if (0 === i)for (var r = 3; r < n.length; r++)n[r].className = "d-none d-sm-flex"; else if (i === n.length - 1)for (var o = 0; o < n.length - 3; o++)n[o].className = "d-none d-sm-flex"; else {
                        for (var a = 0; a < i - 1; a++)n[a].className = "d-none d-sm-flex";
                        for (var s = n.length - 1; s > i + 1; s--)n[s].className = "d-none d-sm-flex"
                    }
                }
                return n
            }
        }, methods: {
            onClick: function (t) {
                this.currentPage = t
            }, makeLink: function (t) {
                if (this.linkGen && "function" == typeof this.linkGen)return this.linkGen(t);
                var e = "" + this.baseUrl + t;
                return this.useRouter ? {path: e} : e
            }, makePage: function (t) {
                return this.pageGen && "function" == typeof this.pageGen ? this.pageGen(t) : t
            }, linkProps: function (t) {
                var e = this.makeLink(t), n = {
                    href: "string" == typeof e ? e : null,
                    target: this.target || null,
                    rel: this.rel || null,
                    disabled: this.disabled
                };
                return (this.useRouter || "object" == typeof e) && (n = se(n, {
                    to: e,
                    exact: this.exact,
                    activeClass: this.activeClass,
                    exactActiveClass: this.exactActiveClass,
                    append: this.append,
                    replace: this.replace
                })), n
            }, isActive: function (t) {
                return t === this.currentPage
            }, pageItemClasses: function (t) {
                return ["page-item", this.disabled ? "disabled" : "", this.isActive(t.number) ? "active" : "", t.className]
            }, pageLinkClasses: function (t) {
                return ["page-link", this.disabled ? "disabled" : "", this.isActive(t.number) ? "active" : ""]
            }, getButtons: function () {
                return re(this.$el.querySelectorAll("a.page-link")).filter(function (t) {
                    return _t(t)
                })
            }, setBtnFocus: function (t) {
                this.$nextTick(function () {
                    t.focus()
                })
            }, focusFirst: function () {
                var t = this.getButtons().find(function (t) {
                    return !t.disabled
                });
                t && t.focus && t !== document.activeElement && this.setBtnFocus(t)
            }, focusLast: function () {
                var t = this.getButtons().reverse().find(function (t) {
                    return !t.disabled
                });
                t && t.focus && t !== document.activeElement && this.setBtnFocus(t)
            }, focusCurrent: function () {
                var t = this, e = this.getButtons().find(function (e) {
                    return parseInt(e.getAttribute("aria-posinset"), 10) === t.currentPage
                });
                e && e.focus ? this.setBtnFocus(e) : this.focusFirst()
            }, focusPrev: function () {
                var t = this.getButtons(), e = t.indexOf(document.activeElement);
                e > 0 && !t[e - 1].disabled && t[e - 1].focus && this.setBtnFocus(t[e - 1])
            }, focusNext: function () {
                var t = this.getButtons(), e = t.indexOf(document.activeElement);
                e < t.length - 1 && !t[e + 1].disabled && t[e + 1].focus && this.setBtnFocus(t[e + 1])
            }
        }
    }, xi = "undefined" != typeof window && "undefined" != typeof document, $i = new RegExp("\\bbs-tooltip\\S+", "g"), Bi = ["bv::modal::hidden", "hidden::modal"], Ei = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }, Pi = {SHOW: "show", OUT: "out"}, Oi = {FADE: "fade", SHOW: "show"}, Li = {
        TOOLTIP: ".tooltip",
        TOOLTIP_INNER: ".tooltip-inner",
        ARROW: ".arrow"
    }, Ii = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        callbacks: {}
    }, Ai = {
        WebkitTransition: ["webkitTransitionEnd"],
        MozTransition: ["transitionend"],
        OTransition: ["otransitionend", "oTransitionEnd"],
        transition: ["transitionend"]
    }, Fi = 1;
    xi && window.Element && !Element.prototype.closest && (Element.prototype.closest = function (t) {
        var e, n = (this.document || this.ownerDocument).querySelectorAll(t), i = this;
        do {
            for (e = n.length; --e >= 0 && n.item(e) !== i;);
        } while (e < 0 && (i = i.parentElement));
        return i
    });
    var Di = function (t, e, n) {
        this.$fadeTimeout = null, this.$hoverTimeout = null, this.$visibleInterval = null, this.$hoverState = "", this.$activeTrigger = {}, this.$popper = null, this.$element = t, this.$tip = null, this.$id = St(this.constructor.NAME), this.$root = n || null, this.$routeWatcher = null, this.updateConfig(e)
    }, Ni = {Default: {}, NAME: {}};
    Ni.Default.get = function () {
        return Ii
    }, Ni.NAME.get = function () {
        return "tooltp"
    }, Di.prototype.updateConfig = function (t) {
        var e = se({}, this.constructor.Default, t);
        t.delay && "number" == typeof t.delay && (e.delay = {
            show: t.delay,
            hide: t.delay
        }), t.title && "number" == typeof t.title && (e.title = t.title.toString()), t.content && "number" == typeof t.content && (e.content = t.content.toString()), this.fixTitle(), this.$config = e, this.unListen(), this.listen()
    }, Di.prototype.destroy = function () {
        clearInterval(this.$visibleInterval), this.$visibleInterval = null, clearTimeout(this.$hoverTimeout), this.$hoverTimeout = null, clearTimeout(this.$fadeTimeout), this.$fadeTimeout = null, this.unListen(), this.setOnTouchStartListener(!1), this.$popper && this.$popper.destroy(), this.$popper = null, this.$tip && this.$tip.parentElement && this.$tip.parentElement.removeChild(this.$tip), this.$tip = null, this.$id = null, this.$root = null, this.$element = null, this.$config = null, this.$hoverState = null, this.$activeTrigger = null
    }, Di.prototype.toggle = function (t) {
        t ? (this.$activeTrigger.click = !this.$activeTrigger.click, this.isWithActiveTrigger() ? this.enter(null) : this.leave(null)) : this.getTipElement().classList.contains(Oi.SHOW) ? this.leave(null) : this.enter(null)
    }, Di.prototype.show = function () {
        var t = this;
        if (document.body.contains(this.$element)) {
            var e = this.getTipElement();
            if (this.fixTitle(), this.setContent(e), this.isWithContent(e)) {
                e.setAttribute("id", this.$id), this.addAriaDescribedby(), e.classList[this.$config.animation ? "add" : "remove"](Oi.FADE);
                var n = this.getPlacement(), i = this.constructor.getAttachment(n);
                this.addAttachmentClass(this.constructor.getAttachment(i));
                var r = new Vi("show", {cancelable: !0, target: this.$element, relatedTarget: e});
                if (this.emitEvent(r), !r.defaultPrevented) {
                    var o = this.getContainer();
                    document.body.contains(e) || o.appendChild(e), this.removePopper(), this.$popper = new Ze(this.$element, e, this.getPopperConfig(i));
                    e.classList.add(Oi.SHOW), this.setOnTouchStartListener(!0), this.$visibleInterval = setInterval(function () {
                        t.$tip && !kt(t.$element) && t.$tip.classList.contains(Oi.SHOW) && t.forceHide()
                    }, 1e3), this.transitionOnce(e, function () {
                        t.$config.animation && t.fixTransition(e);
                        var n = t.$hoverState;
                        t.$hoverState = null, n === Pi.OUT && t.leave(null);
                        var i = new Vi("shown", {cancelable: !1, target: t.$element, relatedTarget: e});
                        t.emitEvent(i)
                    })
                }
            } else this.$tip = null
        }
    }, Di.prototype.forceHide = function () {
        this.getTipElement();
        this.$tip.classList.remove(Oi.FADE), clearTimeout(this.$hoverTimeout), this.$hoverTimeout = null, this.$hoverState = "", this.hide(null, !0)
    }, Di.prototype.hide = function (t, e) {
        var n = this, i = this.getTipElement(), r = new Vi("hide", {
            cancelable: !Boolean(e),
            target: this.$element,
            relatedTarget: i
        });
        if (this.emitEvent(r), !r.defaultPrevented) {
            clearInterval(this.$visibleInterval), this.$visibleInterval = null;
            this.setOnTouchStartListener(!1), i.classList.remove(Oi.SHOW), this.$activeTrigger.click = !1, this.$activeTrigger.focus = !1, this.$activeTrigger.hover = !1, this.transitionOnce(i, function () {
                n.$hoverState !== Pi.SHOW && i.parentNode && i.parentNode.removeChild(i), n.removeAriaDescribedby(), n.removePopper(), n.$tip = null, t && t();
                var e = new Vi("hidden", {cancelable: !1, target: n.$element, relatedTarget: i});
                n.emitEvent(e)
            }), this.$hoverState = ""
        }
    }, Di.prototype.emitEvent = function (t) {
        var e = t.type;
        this.$root && this.$root.$emit && this.$root.$emit("bv::" + this.constructor.NAME + "::" + e, t);
        var n = this.$config.callbacks || {};
        "function" == typeof n[e] && n[e](t)
    }, Di.prototype.getContainer = function () {
        var t = this.$config.container, e = document.body;
        return !1 === t ? e : e.querySelector(t) || e
    }, Di.prototype.addAriaDescribedby = function () {
        var t = this.$element.getAttribute("aria-describedby") || "";
        t = t.split(/\s+/).concat(this.$id).join(" ").trim(), this.$element.setAttribute("aria-describedby", t)
    }, Di.prototype.removeAriaDescribedby = function () {
        var t = this.$element.getAttribute("aria-describedby") || "";
        (t = t.replace(this.$id, "").replace(/\s+/g, " ").trim()) ? this.$element.setAttribute("aria-describedby", t) : this.$element.removeAttribute("aria-describedby")
    }, Di.prototype.removePopper = function () {
        this.$popper && this.$popper.destroy(), this.$popper = null
    }, Di.prototype.transitionOnce = function (t, e) {
        var n = this, i = this.getTransitionEndEvents(), r = !1;
        clearTimeout(this.$fadeTimeout), this.$fadeTimeout = null;
        var o = function () {
            r || (r = !0, clearTimeout(n.$fadeTimeout), n.$fadeTimeout = null, i.forEach(function (e) {
                t.removeEventListener(e, o)
            }), e())
        };
        t.classList.contains(Oi.FADE) ? (i.forEach(function (t) {
            n.$tip.addEventListener(t, o)
        }), this.$fadeTimeout = setTimeout(o, 150)) : o()
    }, Di.prototype.getTransitionEndEvents = function () {
        var t = this;
        for (var e in Ai)if (void 0 !== t.$element.style[e])return Ai[e];
        return []
    }, Di.prototype.update = function () {
        null !== this.$popper && this.$popper.scheduleUpdate()
    }, Di.prototype.isWithContent = function (t) {
        return !!(t = t || this.$tip) && Boolean((t.querySelector(Li.TOOLTIP_INNER) || {}).innerHTML)
    }, Di.prototype.addAttachmentClass = function (t) {
        this.getTipElement().classList.add("bs-tooltip-" + t)
    }, Di.prototype.getTipElement = function () {
        return this.$tip || (this.$tip = this.compileTemplate(this.$config.template) || this.compileTemplate(this.constructor.Default.template)), this.$tip
    }, Di.prototype.compileTemplate = function (t) {
        if (!t || "string" != typeof t)return null;
        var e = document.createElement("div");
        e.innerHTML = t.trim();
        var n = e.firstElementChild ? e.removeChild(e.firstElementChild) : null;
        return e = null, n
    }, Di.prototype.setContent = function (t) {
        this.setElementContent(t.querySelector(Li.TOOLTIP_INNER), this.getTitle()), t.classList.remove(Oi.FADE), t.classList.remove(Oi.SHOW)
    }, Di.prototype.setElementContent = function (t, e) {
        if (t) {
            var n = this.$config.html;
            "object" == typeof e && e.nodeType ? n ? e.parentElement !== t && (t.innerHtml = "", t.appendChild(e)) : t.innerText = e.innerText : t[n ? "innerHTML" : "innerText"] = e
        }
    }, Di.prototype.getTitle = function () {
        var t = this.$config.title || "";
        return "function" == typeof t && (t = t(this.$element)), "object" == typeof t && t.nodeType && !t.innerHTML.trim() && (t = ""), "string" == typeof t && (t = t.trim()), t || (t = (t = this.$element.getAttribute("title") || this.$element.getAttribute("data-original-title") || "").trim()), t
    }, Di.getAttachment = function (t) {
        return Ei[t.toUpperCase()]
    }, Di.prototype.listen = function () {
        var t = this;
        this.$config.trigger.trim().split(/\s+/).forEach(function (e) {
            "click" === e ? t.$element.addEventListener("click", t) : "focus" === e ? (t.$element.addEventListener("focusin", t), t.$element.addEventListener("focusout", t)) : "blur" === e ? t.$element.addEventListener("focusout", t) : "hover" === e && (t.$element.addEventListener("mouseenter", t), t.$element.addEventListener("mouseleave", t))
        }, this), this.setModalListener(!0), this.setRouteWatcher(!0)
    }, Di.prototype.unListen = function () {
        var t = this;
        ["click", "focusin", "focusout", "mouseenter", "mouseleave"].forEach(function (e) {
            t.$element.removeEventListener(e, t)
        }, this), this.setModalListener(!1), this.setRouteWatcher(!1)
    }, Di.prototype.handleEvent = function (t) {
        t.target && t.target === this.$element && (Ct(this.$element) || ("click" === t.type ? this.toggle(t) : "focusin" === t.type || "mouseenter" === t.type ? this.enter(t) : "focusout" !== t.type && "mouseleave" !== t.type || this.leave(t)))
    }, Di.prototype.setRouteWatcher = function (t) {
        var e = this;
        t ? (this.setRouteWatcher(!1), this.$root && Boolean(this.$root.$route) && (this.$routeWatcher = this.$root.$watch("$route", function (t, n) {
            t !== n && e.forceHide()
        }))) : this.$routeWatcher && (this.$routeWatcher(), this.$routeWatcher = null)
    }, Di.prototype.setModalListener = function (t) {
        var e = this;
        this.$element.closest(".modal") && this.$root && (t ? Bi.forEach(function (t) {
            e.$root.$on(t, e.forceHide.bind(e))
        }) : Bi.forEach(function (t) {
            e.$root.$off(t, e.forceHide.bind(e))
        }))
    }, Di.prototype.setOnTouchStartListener = function (t) {
        var e = this;
        "ontouchstart" in document.documentElement && re(document.body.children).forEach(function (n) {
            t ? n.addEventListener("mouseover", e.noop) : n.removeEventListener("mouseover", e.noop)
        })
    }, Di.prototype.noop = function () {
    }, Di.prototype.fixTitle = function () {
        var t = this.$element, e = typeof t.getAttribute("data-original-title");
        (t.getAttribute("title") || "string" !== e) && (t.setAttribute("data-original-title", t.getAttribute("title") || ""), t.setAttribute("title", ""))
    }, Di.prototype.enter = function (t) {
        var e = this;
        t && (this.$activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), this.getTipElement().classList.contains(Oi.SHOW) || this.$hoverState === Pi.SHOW ? this.$hoverState = Pi.SHOW : (clearTimeout(this.$hoverTimeout), this.$hoverState = Pi.SHOW, this.$config.delay && this.$config.delay.show ? this.$hoverTimeout = setTimeout(function () {
            e.$hoverState === Pi.SHOW && e.show()
        }, this.$config.delay.show) : this.show())
    }, Di.prototype.leave = function (t) {
        var e = this;
        t && (this.$activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1, "focusout" === t.type && /blur/.test(this.$config.trigger) && (this.$activeTrigger.click = !1, this.$activeTrigger.hover = !1)), this.isWithActiveTrigger() || (clearTimeout(this.$hoverTimeout), this.$hoverState = Pi.OUT, this.$config.delay && this.$config.delay.hide ? this.$hoverTimeout = setTimeout(function () {
            e.$hoverState === Pi.OUT && e.hide()
        }, this.$config.delay.hide) : this.hide())
    }, Di.prototype.getPopperConfig = function (t) {
        var e = this;
        return {
            placement: t,
            modifiers: {
                offset: {offset: this.$config.offset || 0},
                flip: {behavior: this.$config.fallbackPlacement},
                arrow: {element: ".arrow"}
            },
            onCreate: function (t) {
                t.originalPlacement !== t.placement && e.handlePopperPlacementChange(t)
            },
            onUpdate: function (t) {
                e.handlePopperPlacementChange(t)
            }
        }
    }, Di.prototype.getPlacement = function () {
        var t = this.$config.placement;
        return "function" == typeof t ? t.call(this, this.$tip, this.$element) : t
    }, Di.prototype.isWithActiveTrigger = function () {
        var t = this;
        for (var e in t.$activeTrigger)if (t.$activeTrigger[e])return !0;
        return !1
    }, Di.prototype.cleanTipClass = function () {
        var t = this.getTipElement(), e = t.className.match($i);
        null !== e && e.length > 0 && e.forEach(function (e) {
            t.classList.remove(e)
        })
    }, Di.prototype.handlePopperPlacementChange = function (t) {
        this.cleanTipClass(), this.addAttachmentClass(this.constructor.getAttachment(t.placement))
    }, Di.prototype.fixTransition = function (t) {
        var e = this.$config.animation || !1;
        null === t.getAttribute("x-placement") && (t.classList.remove(Oi.FADE), this.$config.animation = !1, this.hide(), this.show(), this.$config.animation = e)
    }, Object.defineProperties(Di, Ni);
    var Vi = function t(e, n) {
        if (void 0 === n && (n = {}), !e)throw new TypeError("Failed to construct '" + this.constructor.name + "'. 1 argument required, " + arguments.length + " given.");
        se(this, t.defaults(), n, {type: e}), ue(this, {
            type: {enumerable: !0, configurable: !1, writable: !1},
            cancelable: {enumerable: !0, configurable: !1, writable: !1},
            nativeEvent: {enumerable: !0, configurable: !1, writable: !1},
            target: {enumerable: !0, configurable: !1, writable: !1},
            relatedTarget: {enumerable: !0, configurable: !1, writable: !1},
            vueTarget: {enumerable: !0, configurable: !1, writable: !1}
        });
        var i = !1;
        this.preventDefault = function () {
            this.cancelable && (i = !0)
        }, de(this, "defaultPrevented", {
            enumerable: !0, get: function () {
                return i
            }
        })
    };
    Vi.defaults = function () {
        return {type: "", cancelable: !0, nativeEvent: null, target: null, relatedTarget: null, vueTarget: null}
    };
    var Hi = new RegExp("\\bbs-popover\\S+", "g"), Mi = se({}, Di.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), ji = {FADE: "fade", SHOW: "show"}, Ri = {
        TITLE: ".popover-header",
        CONTENT: ".popover-body"
    }, zi = function (t) {
        function e() {
            t.apply(this, arguments)
        }

        t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
        var n = {Default: {}, NAME: {}};
        return n.Default.get = function () {
            return Mi
        }, n.NAME.get = function () {
            return "popover"
        }, e.prototype.isWithContent = function (t) {
            if (!(t = t || this.$tip))return !1;
            var e = Boolean((t.querySelector(Ri.TITLE) || {}).innerHTML), n = Boolean((t.querySelector(Ri.CONTENT) || {}).innerHTML);
            return e || n
        }, e.prototype.addAttachmentClass = function (t) {
            this.getTipElement().classList.add("bs-popover-" + t)
        }, e.prototype.setContent = function (t) {
            this.setElementContent(t.querySelector(Ri.TITLE), this.getTitle()), this.setElementContent(t.querySelector(Ri.CONTENT), this.getContent()), t.classList.remove(ji.FADE), t.classList.remove(ji.SHOW)
        }, e.prototype.cleanTipClass = function () {
            var t = this.getTipElement(), e = t.className.match(Hi);
            null !== e && e.length > 0 && e.forEach(function (e) {
                t.classList.remove(e)
            })
        }, e.prototype.getTitle = function () {
            var t = this.$config.title || "";
            return "function" == typeof t && (t = t(this.$element)), "object" == typeof t && t.nodeType && !t.innerHTML.trim() && (t = ""), "string" == typeof t && (t = t.trim()), t || (t = (t = this.$element.getAttribute("title") || this.$element.getAttribute("data-original-title") || "").trim()), t
        }, e.prototype.getContent = function () {
            var t = this.$config.content || "";
            return "function" == typeof t && (t = t(this.$element)), "object" == typeof t && t.nodeType && !t.innerHTML.trim() && (t = ""), "string" == typeof t && (t = t.trim()), t
        }, Object.defineProperties(e, n), e
    }(Di), Wi = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                directives: [{name: "show", rawName: "v-show", value: !1, expression: "false"}],
                staticClass: "d-none",
                attrs: {"aria-hidden": "true"}
            }, [n("div", {ref: "title"}, [t._t("title")], 2), n("div", {ref: "content"}, [t._t("default")], 2)])
        },
        staticRenderFns: [],
        data: function () {
            return {popOver: null}
        },
        props: {
            target: {type: [String, Object]},
            targetId: {type: String, default: null},
            title: {type: String, default: ""},
            content: {type: String, default: ""},
            triggers: {type: [String, Array], default: "click"},
            placement: {type: String, default: "right"},
            delay: {type: Number, default: 0},
            offset: {type: [Number, String], default: 0},
            noFade: {type: Boolean, default: !1}
        },
        mounted: function () {
            var t = this;
            this.$nextTick(function () {
                var e = t.getTarget();
                e ? (t.popOver = new zi(e, t.getConfig(), t.$root), t.$on("close", t.onClose), o(t.$refs.content, t.updatePosition.bind(t), {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    attributeFilter: ["class", "style"]
                })) : c("b-popover: 'target' element not found!")
            })
        },
        updated: function () {
            this.popOver && this.popOver.updateConfig(this.getConfig())
        },
        beforeDestroyed: function () {
            this.$off("close", this.onClose), this.popOver && (this.popOver.destroy(), this.popOver = null), this.bringItBack()
        },
        computed: {
            baseConfig: function () {
                return {
                    title: this.title.trim() || "",
                    content: this.content.trim() || "",
                    placement: this.placement || "top",
                    delay: parseInt(this.delay, 10) || 0,
                    offset: this.offset || 0,
                    animation: Boolean(this.noFade),
                    trigger: oe(this.triggers) ? this.triggers.join(" ") : this.triggers
                }
            }
        },
        methods: {
            onClose: function (t) {
                this.popOver ? this.popOver.hide(t) : "function" == typeof t && t()
            }, updatePosition: function () {
                this.popOver && this.popOver.update()
            }, getConfig: function () {
                var t = se({}, this.baseConfig);
                return this.$refs.title.innerHTML.trim() && (t.title = this.$refs.title, t.html = !0), this.$refs.content.innerHTML.trim() && (t.content = this.$refs.content, t.html = !0), t.callbacks = {
                    show: this.onShow,
                    shown: this.onShown,
                    hide: this.onHide,
                    hidden: this.onHidden
                }, t
            }, getTarget: function () {
                var t = this.target;
                return "string" == typeof t ? document.getElementById(/^#/.test(t) ? t.slice(1) : t) || null : "object" == typeof t && t.$el ? t.$el : "object" == typeof t && t.tagName ? t : null
            }, onShow: function (t) {
                this.$emit("show", t)
            }, onShown: function (t) {
                this.$emit("shown", t)
            }, onHide: function (t) {
                this.$emit("hide", t)
            }, onHidden: function (t) {
                this.bringItBack(), this.$emit("hidden", t)
            }, bringItBack: function () {
                this.$el && (this.$refs.title && this.$el.appendChild(this.$refs.title), this.$refs.content && this.$el.appendChild(this.$refs.content))
            }
        }
    }, qi = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                class: t.progressBarClasses,
                style: t.progressBarStyles,
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": t.value.toFixed(t.computedPrecision),
                    "aria-valuemin": "0",
                    "aria-valuemax": t.computedMax
                }
            }, [t._t("default", [t.label ? n("span", {domProps: {innerHTML: t._s(t.label)}}) : t.computedShowProgress ? [t._v(t._s(t.progress.toFixed(t.computedPrecision)) + "%")] : t.computedShowValue ? [t._v(t._s(t.value.toFixed(t.computedPrecision)))] : t._e()])], 2)
        },
        staticRenderFns: [],
        computed: {
            progressBarClasses: function () {
                return ["progress-bar", this.computedVariant ? "bg-" + this.computedVariant : "", this.computedStriped || this.computedAnimated ? "progress-bar-striped" : "", this.computedAnimated ? "progress-bar-animated" : ""]
            }, progressBarStyles: function () {
                return {
                    width: this.value / this.computedMax * 100 + "%",
                    height: this.computedHeight,
                    lineHeight: this.computedHeight
                }
            }, progress: function () {
                var t = Math.pow(10, this.computedPrecision);
                return Math.round(100 * t * this.value / this.computedMax) / t
            }, computedMax: function () {
                return "number" == typeof this.max ? this.max : this.$parent.max || 100
            }, computedHeight: function () {
                return this.$parent.height || this.height || "1rem"
            }, computedVariant: function () {
                return this.variant || this.$parent.variant
            }, computedPrecision: function () {
                return "number" == typeof this.precision ? this.precision : this.$parent.precision || 0
            }, computedStriped: function () {
                return "boolean" == typeof this.striped ? this.striped : this.$parent.striped || !1
            }, computedAnimated: function () {
                return "boolean" == typeof this.animated ? this.animated : this.$parent.animated || !1
            }, computedShowProgress: function () {
                return "boolean" == typeof this.showProgress ? this.showProgress : this.$parent.showProgress || !1
            }, computedShowValue: function () {
                return "boolean" == typeof this.showValue ? this.showValue : this.$parent.showValue || !1
            }
        },
        props: {
            value: {type: Number, default: 0},
            label: {type: String, value: null},
            max: {type: Number, default: null},
            precision: {type: Number, default: null},
            variant: {type: String, default: null},
            striped: {type: Boolean, default: null},
            animated: {type: Boolean, default: null},
            showProgress: {type: Boolean, default: null},
            showValue: {type: Boolean, default: null},
            height: {type: String, default: null}
        }
    }, Gi = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "progress"}, [t._t("default", [n("b-progress-bar", {
                attrs: {
                    value: t.value,
                    max: t.max,
                    precision: t.precision,
                    variant: t.variant,
                    animated: t.animated,
                    striped: t.striped,
                    "show-progress": t.showProgress,
                    "show-value": t.showValue,
                    height: t.height
                }
            })])], 2)
        },
        staticRenderFns: [],
        components: {bProgressBar: qi},
        props: {
            variant: {type: String, default: null},
            striped: {type: Boolean, default: !1},
            animated: {type: Boolean, default: !1},
            height: {type: String, default: "1rem"},
            precision: {type: Number, default: 0},
            showProgress: {type: Boolean, default: !1},
            showValue: {type: Boolean, default: !1},
            max: {type: Number, default: 100},
            value: {type: Number, default: 0}
        }
    }, Ui = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, Ki = 1 / 0, Yi = "[object Symbol]", Zi = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ji = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Xi = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Qi = "[" + Xi + "]", tr = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]", er = "[a-z\\xdf-\\xf6\\xf8-\\xff]", nr = "[^\\ud800-\\udfff" + Xi + "\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]", ir = "\\ud83c[\\udffb-\\udfff]", rr = "(?:\\ud83c[\\udde6-\\uddff]){2}", or = "[\\ud800-\\udbff][\\udc00-\\udfff]", ar = "[A-Z\\xc0-\\xd6\\xd8-\\xde]", sr = "(?:" + er + "|" + nr + ")", lr = "(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?", ur = "[\\ufe0e\\ufe0f]?" + lr + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", rr, or].join("|") + ")[\\ufe0e\\ufe0f]?" + lr + ")*"), dr = "(?:" + ["[\\u2700-\\u27bf]", rr, or].join("|") + ")" + ur, cr = "(?:" + ["[^\\ud800-\\udfff]" + tr + "?", tr, rr, or, "[\\ud800-\\udfff]"].join("|") + ")", fr = RegExp("['â€™]", "g"), pr = RegExp(tr, "g"), hr = RegExp(ir + "(?=" + ir + ")|" + cr + ur, "g"), gr = RegExp([ar + "?" + er + "+(?:['â€™](?:d|ll|m|re|s|t|ve))?(?=" + [Qi, ar, "$"].join("|") + ")", "(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['â€™](?:D|LL|M|RE|S|T|VE))?(?=" + [Qi, ar + sr, "$"].join("|") + ")", ar + "?" + sr + "+(?:['â€™](?:d|ll|m|re|s|t|ve))?", ar + "+(?:['â€™](?:D|LL|M|RE|S|T|VE))?", "\\d+", dr].join("|"), "g"), mr = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"), vr = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, br = {
        "Ã€": "A",
        "Ã": "A",
        "Ã‚": "A",
        "Ãƒ": "A",
        "Ã„": "A",
        "Ã…": "A",
        "Ã ": "a",
        "Ã¡": "a",
        "Ã¢": "a",
        "Ã£": "a",
        "Ã¤": "a",
        "Ã¥": "a",
        "Ã‡": "C",
        "Ã§": "c",
        "Ã": "D",
        "Ã°": "d",
        "Ãˆ": "E",
        "Ã‰": "E",
        "ÃŠ": "E",
        "Ã‹": "E",
        "Ã¨": "e",
        "Ã©": "e",
        "Ãª": "e",
        "Ã«": "e",
        "ÃŒ": "I",
        "Ã": "I",
        "ÃŽ": "I",
        "Ã": "I",
        "Ã¬": "i",
        "Ã­": "i",
        "Ã®": "i",
        "Ã¯": "i",
        "Ã‘": "N",
        "Ã±": "n",
        "Ã’": "O",
        "Ã“": "O",
        "Ã”": "O",
        "Ã•": "O",
        "Ã–": "O",
        "Ã˜": "O",
        "Ã²": "o",
        "Ã³": "o",
        "Ã´": "o",
        "Ãµ": "o",
        "Ã¶": "o",
        "Ã¸": "o",
        "Ã™": "U",
        "Ãš": "U",
        "Ã›": "U",
        "Ãœ": "U",
        "Ã¹": "u",
        "Ãº": "u",
        "Ã»": "u",
        "Ã¼": "u",
        "Ã": "Y",
        "Ã½": "y",
        "Ã¿": "y",
        "Ã†": "Ae",
        "Ã¦": "ae",
        "Ãž": "Th",
        "Ã¾": "th",
        "ÃŸ": "ss",
        "Ä€": "A",
        "Ä‚": "A",
        "Ä„": "A",
        "Ä": "a",
        "Äƒ": "a",
        "Ä…": "a",
        "Ä†": "C",
        "Äˆ": "C",
        "ÄŠ": "C",
        "ÄŒ": "C",
        "Ä‡": "c",
        "Ä‰": "c",
        "Ä‹": "c",
        "Ä": "c",
        "ÄŽ": "D",
        "Ä": "D",
        "Ä": "d",
        "Ä‘": "d",
        "Ä’": "E",
        "Ä”": "E",
        "Ä–": "E",
        "Ä˜": "E",
        "Äš": "E",
        "Ä“": "e",
        "Ä•": "e",
        "Ä—": "e",
        "Ä™": "e",
        "Ä›": "e",
        "Äœ": "G",
        "Äž": "G",
        "Ä ": "G",
        "Ä¢": "G",
        "Ä": "g",
        "ÄŸ": "g",
        "Ä¡": "g",
        "Ä£": "g",
        "Ä¤": "H",
        "Ä¦": "H",
        "Ä¥": "h",
        "Ä§": "h",
        "Ä¨": "I",
        "Äª": "I",
        "Ä¬": "I",
        "Ä®": "I",
        "Ä°": "I",
        "Ä©": "i",
        "Ä«": "i",
        "Ä­": "i",
        "Ä¯": "i",
        "Ä±": "i",
        "Ä´": "J",
        "Äµ": "j",
        "Ä¶": "K",
        "Ä·": "k",
        "Ä¸": "k",
        "Ä¹": "L",
        "Ä»": "L",
        "Ä½": "L",
        "Ä¿": "L",
        "Å": "L",
        "Äº": "l",
        "Ä¼": "l",
        "Ä¾": "l",
        "Å€": "l",
        "Å‚": "l",
        "Åƒ": "N",
        "Å…": "N",
        "Å‡": "N",
        "ÅŠ": "N",
        "Å„": "n",
        "Å†": "n",
        "Åˆ": "n",
        "Å‹": "n",
        "ÅŒ": "O",
        "ÅŽ": "O",
        "Å": "O",
        "Å": "o",
        "Å": "o",
        "Å‘": "o",
        "Å”": "R",
        "Å–": "R",
        "Å˜": "R",
        "Å•": "r",
        "Å—": "r",
        "Å™": "r",
        "Åš": "S",
        "Åœ": "S",
        "Åž": "S",
        "Å ": "S",
        "Å›": "s",
        "Å": "s",
        "ÅŸ": "s",
        "Å¡": "s",
        "Å¢": "T",
        "Å¤": "T",
        "Å¦": "T",
        "Å£": "t",
        "Å¥": "t",
        "Å§": "t",
        "Å¨": "U",
        "Åª": "U",
        "Å¬": "U",
        "Å®": "U",
        "Å°": "U",
        "Å²": "U",
        "Å©": "u",
        "Å«": "u",
        "Å­": "u",
        "Å¯": "u",
        "Å±": "u",
        "Å³": "u",
        "Å´": "W",
        "Åµ": "w",
        "Å¶": "Y",
        "Å·": "y",
        "Å¸": "Y",
        "Å¹": "Z",
        "Å»": "Z",
        "Å½": "Z",
        "Åº": "z",
        "Å¼": "z",
        "Å¾": "z",
        "Ä²": "IJ",
        "Ä³": "ij",
        "Å’": "Oe",
        "Å“": "oe",
        "Å‰": "'n",
        "Å¿": "ss"
    }, yr = "object" == typeof Ui && Ui && Ui.Object === Object && Ui, _r = "object" == typeof self && self && self.Object === Object && self, wr = yr || _r || Function("return this")(), Sr = function (t) {
        return function (e) {
            return null == t ? void 0 : t[e]
        }
    }(br), kr = Object.prototype.toString, Cr = wr.Symbol, Tr = Cr ? Cr.prototype : void 0, xr = Tr ? Tr.toString : void 0, $r = function (t) {
        return function (e) {
            return Tt(Mt(Ht(e).replace(fr, "")), t, "")
        }
    }(function (t, e, n) {
        return t + (n ? " " : "") + Br(e)
    }), Br = function (t) {
        return function (e) {
            var n = Bt(e = Vt(e)) ? Pt(e) : void 0, i = n ? n[0] : e.charAt(0), r = n ? Ft(n, 1).join("") : e.slice(1);
            return i[t]() + r
        }
    }("toUpperCase"), Er = $r, Pr = function (t) {
        return t ? t instanceof Object ? le(t).map(function (e) {
            return Pr(t[e])
        }).join(" ") : String(t) : ""
    }, Or = function (t) {
        return t instanceof Object ? Pr(le(t).reduce(function (e, n) {
            return /^_/.test(n) || "state" === n || (e[n] = t[n]), e
        }, {})) : ""
    }, Lr = function (t, e, n) {
        return "number" == typeof t[n] && "number" == typeof e[n] ? t[n] < e[n] && -1 || t[n] > e[n] && 1 || 0 : Pr(t[n]).localeCompare(Pr(e[n]), void 0, {numeric: !0})
    }, Ir = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("table", {
                class: t.tableClass,
                attrs: {id: t.id || null, "aria-busy": t.computedBusy ? "true" : "false"}
            }, [n("thead", {class: t.headClass}, [n("tr", t._l(t.computedFields, function (e, i) {
                return n("th", {
                    key: i,
                    class: t.fieldClass(e, i),
                    style: e.thStyle || {},
                    attrs: {
                        "aria-label": e.sortable ? t.localSortDesc && t.localSortBy === i ? t.labelSortAsc : t.labelSortDesc : null,
                        "aria-sort": e.sortable && t.localSortBy === i ? t.localSortDesc ? "descending" : "ascending" : null,
                        tabindex: e.sortable ? "0" : null
                    },
                    on: {
                        click: function (n) {
                            n.stopPropagation(), n.preventDefault(), t.headClicked(n, e, i)
                        }, keydown: [function (n) {
                            if (!("button" in n) && t._k(n.keyCode, "enter", 13))return null;
                            n.stopPropagation(), n.preventDefault(), t.headClicked(n, e, i)
                        }, function (n) {
                            if (!("button" in n) && t._k(n.keyCode, "space", 32))return null;
                            n.stopPropagation(), n.preventDefault(), t.headClicked(n, e, i)
                        }]
                    }
                }, [t._t("HEAD_" + i, [n("div", {domProps: {innerHTML: t._s(e.label)}})], {
                    label: e.label,
                    column: i,
                    field: e
                })], 2)
            }))]), t.footClone ? n("tfoot", {class: t.footClass}, [n("tr", t._l(t.computedFields, function (e, i) {
                return n("th", {
                    key: i,
                    class: t.fieldClass(e, i),
                    style: e.thStyle || {},
                    attrs: {
                        "aria-label": e.sortable ? t.localSortDesc && t.localSortBy === i ? t.labelSortAsc : t.labelSortDesc : null,
                        "aria-sort": e.sortable && t.localSortBy === i ? t.localSortDesc ? "descending" : "ascending" : null,
                        tabindex: e.sortable ? "0" : null
                    },
                    on: {
                        click: function (n) {
                            n.stopPropagation(), n.preventDefault(), t.headClicked(n, e, i)
                        }, keydown: [function (n) {
                            if (!("button" in n) && t._k(n.keyCode, "enter", 13))return null;
                            n.stopPropagation(), n.preventDefault(), t.headClicked(n, e, i)
                        }, function (n) {
                            if (!("button" in n) && t._k(n.keyCode, "space", 32))return null;
                            n.stopPropagation(), n.preventDefault(), t.headClicked(n, e, i)
                        }]
                    }
                }, [t.$scopedSlots["FOOT_" + i] ? t._t("FOOT_" + i, [n("div", {domProps: {innerHTML: t._s(e.label)}})], {
                    label: e.label,
                    column: i,
                    field: e
                }) : t._t("HEAD_" + i, [n("div", {domProps: {innerHTML: t._s(e.label)}})], {
                    label: e.label,
                    column: i,
                    field: e
                })], 2)
            }))]) : t._e(), n("tbody", [t.$scopedSlots["top-row"] ? n("tr", [t._t("top-row", null, {
                columns: t.keys(t.fields).length,
                fields: t.fields
            })], 2) : t._e(), t._l(t.computedItems, function (e, i) {
                return n("tr", {
                    key: i, class: t.rowClass(e), on: {
                        click: function (n) {
                            t.rowClicked(n, e, i)
                        }, dblclick: function (n) {
                            t.rowDblClicked(n, e, i)
                        }, mouseenter: function (n) {
                            t.rowHovered(n, e, i)
                        }
                    }
                }, [t._l(t.computedFields, function (r, o) {
                    return [n("td", {key: o, class: t.tdClass(r, e, o)}, [t._t(o, [t._v(t._s(e[o]))], {
                        value: e[o],
                        item: e,
                        index: i
                    })], 2)]
                })], 2)
            }), !t.showEmpty || t.computedItems && 0 !== t.computedItems.length ? t._e() : n("tr", [n("td", {attrs: {colspan: t.keys(t.computedFields).length}}, [t.filter ? n("div", {
                attrs: {
                    role: "alert",
                    "aria-live": "polite"
                }
            }, [t._t("emptyfiltered", [n("div", {
                staticClass: "text-center my-2",
                domProps: {innerHTML: t._s(t.emptyFilteredText)}
            })])], 2) : n("div", {
                attrs: {
                    role: "alert",
                    "aria-live": "polite"
                }
            }, [t._t("empty", [n("div", {
                staticClass: "text-center my-2",
                domProps: {innerHTML: t._s(t.emptyText)}
            })])], 2)])]), t.$scopedSlots["bottom-row"] ? n("tr", [t._t("bottom-row", null, {
                columns: t.keys(t.fields).length,
                fields: t.fields
            })], 2) : t._e()], 2)])
        }, staticRenderFns: [], mixins: [Xe], data: function () {
            return {
                localSortBy: this.sortBy || "",
                localSortDesc: this.sortDesc || !1,
                localItems: [],
                filteredItems: [],
                localBusy: this.busy
            }
        }, props: {
            id: {type: String, default: ""},
            items: {
                type: [Array, Function], default: function () {
                    return []
                }
            },
            sortBy: {type: String, default: null},
            sortDesc: {type: Boolean, default: !1},
            apiUrl: {type: String, default: ""},
            fields: {type: [Object, Array], default: null},
            striped: {type: Boolean, default: !1},
            bordered: {type: Boolean, default: !1},
            inverse: {type: Boolean, default: !1},
            hover: {type: Boolean, default: !1},
            small: {type: Boolean, default: !1},
            responsive: {type: Boolean, default: !1},
            headVariant: {type: String, default: ""},
            footVariant: {type: String, default: ""},
            perPage: {type: Number, default: null},
            currentPage: {type: Number, default: 1},
            filter: {type: [String, RegExp, Function], default: null},
            sortCompare: {type: Function, default: null},
            noProviderPaging: {type: Boolean, default: !1},
            noProviderSorting: {type: Boolean, default: !1},
            noProviderFiltering: {type: Boolean, default: !1},
            busy: {type: Boolean, default: !1},
            value: {
                type: Array, default: function () {
                    return []
                }
            },
            footClone: {type: Boolean, default: !1},
            labelSortAsc: {type: String, default: "Click to sort Ascending"},
            labelSortDesc: {type: String, default: "Click to sort Descending"},
            showEmpty: {type: Boolean, default: !1},
            emptyText: {type: String, default: "There are no records to show"},
            emptyFilteredText: {type: String, default: "There are no records matching your request"}
        }, watch: {
            items: function (t, e) {
                e !== t && this._providerUpdate()
            }, filteredItems: function (t, e) {
                this.providerFiltering || t.length === e.length || this.$emit("filtered", t)
            }, sortDesc: function (t, e) {
                t !== this.localSortDesc && (this.localSortDesc = t || !1)
            }, localSortDesc: function (t, e) {
                t !== e && (this.$emit("update:sortDesc", t), this.noProviderSorting || this._providerUpdate())
            }, sortBy: function (t, e) {
                t !== this.localSortBy && (this.localSortBy = t || null)
            }, localSortBy: function (t, e) {
                t !== e && (this.$emit("update:sortBy", t), this.noProviderSorting || this._providerUpdate())
            }, perPage: function (t, e) {
                e === t || this.noProviderPaging || this._providerUpdate()
            }, currentPage: function (t, e) {
                e === t || this.noProviderPaging || this._providerUpdate()
            }, filter: function (t, e) {
                e === t || this.noProviderFiltering || this._providerUpdate()
            }, localBusy: function (t, e) {
                t !== e && this.$emit("update:busy", t)
            }
        }, mounted: function () {
            var t = this;
            this.localSortBy = this.sortBy, this.localSortDesc = this.sortDesc, this.localBusy = this.busy, this.hasProvider && this._providerUpdate(), this.listenOnRoot("table::refresh", function (e) {
                e === t.id && t._providerUpdate()
            })
        }, computed: {
            tableClass: function () {
                return ["table", "b-table", this.striped ? "table-striped" : "", this.hover ? "table-hover" : "", this.inverse ? "table-inverse" : "", this.bordered ? "table-bordered" : "", this.responsive ? "table-responsive" : "", this.small ? "table-sm" : ""]
            }, headClass: function () {
                return this.headVariant ? "thead-" + this.headVariant : ""
            }, footClass: function () {
                var t = this.footVariant || this.headVariant || null;
                return t ? "thead-" + t : ""
            }, hasProvider: function () {
                return this.items instanceof Function
            }, providerFiltering: function () {
                return Boolean(this.hasProvider && !this.noProviderFiltering)
            }, providerSorting: function () {
                return Boolean(this.hasProvider && !this.noProviderSorting)
            }, providerPaging: function () {
                return Boolean(this.hasProvider && !this.noProviderPaging)
            }, context: function () {
                return {
                    perPage: this.perPage,
                    currentPage: this.currentPage,
                    filter: this.filter,
                    apiUrl: this.apiUrl,
                    sortBy: this.localSortBy,
                    sortDesc: this.localSortDesc
                }
            }, computedFields: function () {
                var t;
                if (oe(this.fields) ? (t = {}, this.fields.filter(function (t) {
                        return t
                    }).forEach(function (e) {
                        t[e.key || e] = e
                    })) : t = this.fields || {}, 0 === le(t).length && this.computedItems.length > 0) {
                    var e = this.computedItems[0];
                    le(e).forEach(function (e) {
                        t[e] = !0
                    })
                }
                return le(t).forEach(function (e) {
                    !1 !== t[e] ? !0 !== t[e] ? "function" != typeof t[e] ? "string" == typeof t[e] && (t[e] = {label: Er(e)}) : t[e] = {
                        label: Er(e),
                        formatter: t[e]
                    } : t[e] = {label: Er(e)} : delete t[e]
                }), t
            }, computedItems: function () {
                var t = this, e = this.perPage, n = this.currentPage, i = this.filter, r = this.localSortBy, o = this.localSortDesc, a = this.sortCompare || Lr, s = this.hasProvider ? this.localItems : this.items;
                if (!s)return this.$nextTick(this._providerUpdate), [];
                if (s = JSON.parse(JSON.stringify(s)), this.fields && "[object Object]" === this.fields.toString() && le(this.fields).filter(function (e, n, i) {
                        return t.hasFormatter(t.fields[e])
                    }).forEach(function (e) {
                        s.forEach(function (n) {
                            n[e] = t.callFormatter(n, e, t.fields[e])
                        }, t)
                    }, this), i && !this.providerFiltering)if (i instanceof Function)s = s.filter(i); else {
                    var l;
                    l = i instanceof RegExp ? i : new RegExp(".*" + i + ".*", "ig"), s = s.filter(function (t) {
                        var e = l.test(Or(t));
                        return l.lastIndex = 0, e
                    })
                }
                return this.providerFiltering || (this.filteredItems = s.slice()), r && !this.providerSorting && (s = s.sort(function (t, e) {
                    var n = a(t, e, r);
                    return o ? -1 * n : n
                })), e && !this.providerPaging && (s = s.slice((n - 1) * e, n * e)), this.$emit("input", s), s
            }, computedBusy: function () {
                return this.busy || this.localBusy
            }
        }, methods: {
            keys: le, fieldClass: function (t, e) {
                return [t.sortable ? "sorting" : "", t.sortable && this.localSortBy === e ? "sorting_" + (this.localSortDesc ? "desc" : "asc") : "", t.variant ? "table-" + t.variant : "", t.class ? t.class : "", t.thClass ? t.thClass : ""]
            }, tdClass: function (t, e, n) {
                var i = "";
                return e._cellVariants && e._cellVariants[n] && (i = (this.inverse ? "bg-" : "table-") + e._cellVariants[n]), [t.variant && !i ? (this.inverse ? "bg-" : "table-") + t.variant : "", i, t.class ? t.class : "", t.tdClass ? t.tdClass : ""]
            }, rowClass: function (t) {
                return [t._rowVariant ? (this.inverse ? "bg-" : "table-") + t._rowVariant : ""]
            }, rowClicked: function (t, e, n) {
                if (this.computedBusy)return t.preventDefault(), void t.stopPropagation();
                this.$emit("row-clicked", e, n, t)
            }, rowDblClicked: function (t, e, n) {
                if (this.computedBusy)return t.preventDefault(), void t.stopPropagation();
                this.$emit("row-dblclicked", e, n, t)
            }, rowHovered: function (t, e, n) {
                if (this.computedBusy)return t.preventDefault(), void t.stopPropagation();
                this.$emit("row-hovered", e, n, t)
            }, headClicked: function (t, e, n) {
                if (this.computedBusy)return t.preventDefault(), void t.stopPropagation();
                var i = !1;
                e.sortable ? (n === this.localSortBy ? this.localSortDesc = !this.localSortDesc : (this.localSortBy = n, this.localSortDesc = !1), i = !0) : this.localSortBy && (this.localSortBy = null, this.localSortDesc = !1, i = !0), this.$emit("head-clicked", n, e, t), i && this.$emit("sort-changed", this.context)
            }, refresh: function () {
                this.hasProvider && this._providerUpdate()
            }, _providerSetLocal: function (t) {
                this.localItems = t && t.length > 0 ? t.slice() : [], this.localBusy = !1, this.$emit("refreshed"), this.emitOnRoot("table::refreshed", this.id)
            }, _providerUpdate: function () {
                var t = this;
                if (!this.computedBusy && this.hasProvider) {
                    this.localBusy = !0;
                    var e = this.items(this.context, this._providerSetLocal);
                    e && (e.then && "function" == typeof e.then ? e.then(function (e) {
                        t._providerSetLocal(e)
                    }) : this._providerSetLocal(e))
                }
            }, hasFormatter: function (t) {
                return t.formatter && ("function" == typeof t.formatter || "string" == typeof t.formatter)
            }, callFormatter: function (t, e, n) {
                return n.formatter && "function" == typeof n.formatter ? n.formatter(t[e], e, t) : n.formatter && "function" == typeof this.$parent[n.formatter] ? this.$parent[n.formatter](t[e], e, t) : void 0
            }
        }
    }, Ar = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n(t.tag, {
                tag: "component",
                staticClass: "tabs",
                attrs: {id: t.safeId()}
            }, [t.bottom ? n("div", {
                ref: "tabsContainer",
                class: ["tab-content", {"card-body": t.card}],
                attrs: {id: t.safeId("_BV_tab_container_")}
            }, [t._t("default"), t.tabs && t.tabs.length ? t._e() : t._t("empty")], 2) : t._e(), n("div", {class: {"card-header": t.card}}, [n("ul", {
                class: ["nav", "nav-" + t.navStyle, t.card ? "card-header-" + t.navStyle : null],
                attrs: {role: "tablist", tabindex: "0"},
                on: {
                    keydown: [function (e) {
                        return "button" in e || !t._k(e.keyCode, "left", 37) ? "button" in e && 0 !== e.button ? null : void t.previousTab(e) : null
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "up", 38))return null;
                        t.previousTab(e)
                    }, function (e) {
                        return "button" in e || !t._k(e.keyCode, "right", 39) ? "button" in e && 2 !== e.button ? null : void t.nextTab(e) : null
                    }, function (e) {
                        if (!("button" in e) && t._k(e.keyCode, "down", 40))return null;
                        t.nextTab(e)
                    }, function (e) {
                        return ("button" in e || !t._k(e.keyCode, "left", 37)) && e.shiftKey ? "button" in e && 0 !== e.button ? null : void t.setTab(0, !1, 1) : null
                    }, function (e) {
                        return ("button" in e || !t._k(e.keyCode, "up", 38)) && e.shiftKey ? void t.setTab(0, !1, 1) : null
                    }, function (e) {
                        return ("button" in e || !t._k(e.keyCode, "right", 39)) && e.shiftKey ? "button" in e && 2 !== e.button ? null : void t.setTab(t.tabs.length - 1, !1, -1) : null
                    }, function (e) {
                        return ("button" in e || !t._k(e.keyCode, "down", 40)) && e.shiftKey ? void t.setTab(t.tabs.length - 1, !1, -1) : null
                    }]
                }
            }, [t._l(t.tabs, function (e, i) {
                return n("li", {
                    staticClass: "nav-item",
                    attrs: {role: "presentation"}
                }, [e.headHtml ? n("div", {
                    class: ["tab-head", {
                        small: t.small,
                        active: e.localActive,
                        disabled: e.disabled
                    }], attrs: {role: "heading", tabindex: "-1"}, domProps: {innerHTML: t._s(e.headHtml)}
                }) : n("a", {
                    class: ["nav-link", {small: t.small, active: e.localActive, disabled: e.disabled}],
                    attrs: {
                        href: e.href,
                        role: "tab",
                        "aria-setsize": t.tabs.length,
                        "aria-posinset": t.currentTab + 1,
                        "aria-selected": e.localActive ? "true" : "false",
                        "aria-expanded": e.localActive ? "true" : "false",
                        "aria-controls": t.safeId("_BV_tab_container_"),
                        "aria-disabled": e.disabled,
                        id: e.controlledBy || t.safeId("_BV_tab_${index+1}_"),
                        tabindex: "-1"
                    },
                    domProps: {innerHTML: t._s(e.title)},
                    on: {
                        click: function (e) {
                            e.preventDefault(), e.stopPropagation(), t.setTab(i)
                        }, keydown: [function (e) {
                            if (!("button" in e) && t._k(e.keyCode, "space", 32))return null;
                            e.preventDefault(), e.stopPropagation(), t.setTab(i)
                        }, function (e) {
                            if (!("button" in e) && t._k(e.keyCode, "enter", 13))return null;
                            e.preventDefault(), e.stopPropagation(), t.setTab(i)
                        }]
                    }
                })])
            }), t._t("tabs")], 2)]), t.bottom ? t._e() : n("div", {
                ref: "tabsContainer",
                class: ["tab-content", {"card-body": t.card}],
                attrs: {id: t.safeId("_BV_tab_container_")}
            }, [t._t("default"), t.tabs && t.tabs.length ? t._e() : t._t("empty")], 2)])
        },
        staticRenderFns: [],
        mixins: [ln],
        data: function () {
            return {currentTab: this.value, tabs: []}
        },
        props: {
            tag: {type: String, default: "div"},
            card: {type: Boolean, default: !1},
            small: {type: Boolean, default: !1},
            value: {type: Number, default: null},
            pills: {type: Boolean, default: !1},
            bottom: {type: Boolean, default: !1},
            noFade: {type: Boolean, default: !1},
            lazy: {type: Boolean, default: !1}
        },
        watch: {
            currentTab: function (t, e) {
                t !== e && (this.$root.$emit("changed::tab", this, t, this.tabs[t]), this.$emit("input", t), this.tabs[t].$emit("click"))
            }, value: function (t, e) {
                if (t !== e) {
                    "number" != typeof e && (e = 0);
                    var n = t < e ? -1 : 1;
                    this.setTab(t, !1, n)
                }
            }
        },
        computed: {
            fade: function () {
                return !this.noFade
            }, navStyle: function () {
                return this.pills ? "pills" : "tabs"
            }
        },
        methods: {
            sign: function (t) {
                return 0 === t ? 0 : t > 0 ? 1 : -1
            }, nextTab: function () {
                this.setTab(this.currentTab + 1, !1, 1)
            }, previousTab: function () {
                this.setTab(this.currentTab - 1, !1, -1)
            }, setTab: function (t, e, n) {
                var i = this;
                if (n = this.sign(n || 0), t = t || 0, e || t !== this.currentTab) {
                    var r = this.tabs[t];
                    r ? r.disabled ? n && this.setTab(t + n, e, n) : (this.tabs.forEach(function (t) {
                        t === r ? i.$set(t, "localActive", !0) : i.$set(t, "localActive", !1)
                    }), this.currentTab = t) : this.$emit("input", this.currentTab)
                }
            }, updateTabs: function () {
                this.tabs = this.$children.filter(function (t) {
                    return t._isTab
                });
                var t = null;
                if (this.tabs.forEach(function (e, n) {
                        e.localActive && !e.disabled && (t = n)
                    }), null === t) {
                    if (this.currentTab >= this.tabs.length)return void this.setTab(this.tabs.length - 1, !0, -1);
                    this.tabs[this.currentTab] && !this.tabs[this.currentTab].disabled && (t = this.currentTab)
                }
                null === t && this.tabs.forEach(function (e, n) {
                    e.disabled || null !== t || (t = n)
                }), this.setTab(t || 0, !0, 0)
            }
        },
        mounted: function () {
            this.updateTabs(), o(this.$refs.tabsContainer, this.updateTabs.bind(this), {subtree: !1})
        }
    }, Fr = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("transition", {
                attrs: {mode: "out-in"},
                on: {"before-enter": t.beforeEnter, "after-enter": t.afterEnter, "after-leave": t.afterLeave}
            }, [t.localActive || !t.computedLazy ? n(t.tag, {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.localActive,
                    expression: "localActive"
                }],
                ref: "panel",
                tag: "component",
                class: t.tabClasses,
                attrs: {
                    id: t.safeId(),
                    role: "tabpanel",
                    "aria-hidden": t.localActive ? "false" : "true",
                    "aria-expanded": t.localActive ? "true" : "false",
                    "aria-lablelledby": t.controlledBy || null
                }
            }, [t._t("default")], 2) : t._e()], 1)
        },
        staticRenderFns: [],
        mixins: [ln],
        methods: {
            beforeEnter: function () {
                this.show = !1
            }, afterEnter: function () {
                this.show = !0
            }, afterLeave: function () {
                this.show = !1
            }
        },
        data: function () {
            return {localActive: this.active && !this.disabled, show: !1}
        },
        mounted: function () {
            this.show = this.localActive
        },
        computed: {
            tabClasses: function () {
                return ["tab-pane", this.show ? "show" : "", this.computedFade ? "fade" : "", this.disabled ? "disabled" : "", this.localActive ? "active" : ""]
            }, controlledBy: function () {
                return this.buttonId || this.safeId("__BV_tab_button__")
            }, computedFade: function () {
                return this.$parent.fade
            }, computedLazy: function () {
                return this.$parent.lazy
            }, _isTab: function () {
                return !0
            }
        },
        props: {
            active: {type: Boolean, default: !1},
            tag: {type: String, default: "div"},
            buttonId: {type: String, default: ""},
            title: {type: String, default: ""},
            headHtml: {type: String, default: null},
            disabled: {type: Boolean, default: !1},
            href: {type: String, default: "#"}
        }
    }, Dr = {
        render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                directives: [{name: "show", rawName: "v-show", value: !1, expression: "false"}],
                staticClass: "d-none",
                attrs: {"aria-hidden": "true"}
            }, [n("div", {ref: "title"}, [t._t("default")], 2)])
        },
        staticRenderFns: [],
        data: function () {
            return {toolTip: null}
        },
        props: {
            target: {type: [String, Object]},
            targetId: {type: String, default: null},
            title: {type: String, default: ""},
            triggers: {type: [String, Array], default: "hover focus"},
            placement: {type: String, default: "top"},
            delay: {type: Number, default: 0},
            offset: {type: [Number, String], default: 0},
            noFade: {type: Boolean, default: !1}
        },
        mounted: function () {
            var t = this;
            this.$nextTick(function () {
                var e = t.getTarget();
                e ? (t.toolTip = new Di(e, t.getConfig(), t.$root), t.$on("close", t.onClose), o(t.$refs.title, t.updatePosition.bind(t), {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    attributeFilter: ["class", "style"]
                })) : c("b-tooltip: 'target' element not found!")
            })
        },
        updated: function () {
            this.toolTip && this.toolTip.updateConfig(this.getConfig())
        },
        beforeDestroy: function () {
            this.$off("close", this.onClose), this.toolTip && (this.toolTip.destroy(), this.tooltip = null), this.bringItBack()
        },
        computed: {
            baseConfig: function () {
                return {
                    title: this.title.trim() || "",
                    placement: this.placement || "top",
                    delay: parseInt(this.delay, 10) || 0,
                    offset: this.offset || 0,
                    animation: Boolean(this.noFade),
                    trigger: oe(this.triggers) ? this.triggers.join(" ") : this.triggers
                }
            }
        },
        methods: {
            onClose: function (t) {
                this.toolTip ? this.toolTip.hide(t) : "function" == typeof t && t()
            }, updatePosition: function () {
                this.toolTip && this.toolTip.update()
            }, getConfig: function () {
                var t = se({}, this.baseConfig);
                return this.$refs.title.innerHTML.trim() && (t.title = this.$refs.title, t.html = !0), t.callbacks = {
                    show: this.onShow,
                    shown: this.onShown,
                    hide: this.onHide,
                    hidden: this.onHidden
                }, t
            }, getTarget: function () {
                var t = this.target;
                return "string" == typeof t ? document.getElementById(/^#/.test(t) ? t.slice(1) : t) || null : "object" == typeof t && t.$el ? t.$el : "object" == typeof t && t.tagName ? t : null
            }, onShow: function (t) {
                this.$emit("show", t)
            }, onShown: function (t) {
                this.$emit("shown", t)
            }, onHide: function (t) {
                this.$emit("hide", t)
            }, onHidden: function (t) {
                this.bringItBack(), this.$emit("hidden", t)
            }, bringItBack: function () {
                this.$el && this.$refs.title && this.$el.appendChild(this.$refs.title)
            }
        }
    }, Nr = Object.freeze({
        bAlert: ge,
        bBreadcrumb: we,
        bBreadcrumbItem: _e,
        bBreadcrumbLink: ye,
        bButton: Te,
        bBtn: Te,
        bButtonToolbar: $e,
        bBtnToolbar: $e,
        bButtonGroup: Be,
        bBtnGroup: Be,
        bInputGroup: Pe,
        bInputGroupAddon: Ee,
        bInputGroupButton: Oe,
        bInputGroupBtn: Oe,
        bCol: In,
        bContainer: Fn,
        bCard: yn,
        bCardBody: cn,
        bCardHeader: pn,
        bCardFooter: gn,
        bCardGroup: _n,
        bCardImg: vn,
        bDropdown: Dn,
        bDd: Dn,
        bDropdownItem: Nn,
        bDdItem: Nn,
        bDropdownItemButton: Vn,
        bDdItemBtn: Vn,
        bDdItemButton: Vn,
        bDropdownItemBtn: Vn,
        bDropdownDivider: Hn,
        bDdDivider: Hn,
        bDropdownHeader: Mn,
        bDdHeader: Mn,
        bForm: jn,
        bFormRow: Rn,
        bFormText: zn,
        bFormFeedback: Wn,
        bFormCheckbox: Un,
        bFormGroup: Gn,
        bFormFieldset: Gn,
        bFormFile: Jn,
        bFormRadio: Kn,
        bFormInput: Yn,
        bFormTextarea: Zn,
        bFormSelect: Xn,
        bImg: Tn,
        bImgLazy: Qn,
        bJumbotron: ti,
        bBadge: me,
        bMedia: si,
        bMediaBody: oi,
        bMediaAside: ai,
        bModal: ui,
        bNavbar: hi,
        bNavbarBrand: mi,
        bNavText: vi,
        bNavForm: bi,
        bRow: _i,
        bPagination: Si,
        bPaginationNav: Ti,
        bPopover: Wi,
        bProgressBar: qi,
        bProgress: Gi,
        bTable: Ir,
        bTooltip: Dr,
        bTab: Fr,
        bTabs: Ar,
        bNav: di,
        bNavItem: ci,
        bNavItemDropdown: fi,
        bNavToggle: pi,
        bListGroupItem: ri,
        bListGroup: ei,
        bCarouselSlide: xn,
        bCarousel: kn,
        bCollapse: An,
        bLink: ve
    }), Vr = {
        hover: !0,
        click: !0,
        focus: !0
    }, Hr = "undefined" != typeof window, Mr = {click: !0}, jr = "__BV_toggle__", Rr = {
        bind: function (t, e, n) {
            var i = jt(n, e, Mr, function (t) {
                var e = t.targets, n = t.vnode;
                e.forEach(function (t) {
                    n.context.$root.$emit("collapse::toggle", t)
                })
            });
            Hr && n.context && i.length > 0 && (t.setAttribute("aria-controls", i.join(" ")), t.setAttribute("aria-expanded", "false"), t[jr] = function (e, n) {
                -1 !== i.indexOf(e) && (t.setAttribute("aria-expanded", n ? "true" : "false"), n ? t.classList.remove("collapsed") : t.classList.add("collapsed"))
            }, n.context.$root.$on("collapse::toggle::state", t[jr]))
        }, unbind: function (t, e, n) {
            t[jr] && (n.context.$root.$off("collapse::toggle::state", t[jr]), t[jr] = null)
        }
    }, zr = {click: !0}, Wr = {
        bind: function (t, e, n) {
            jt(n, e, zr, function (t) {
                var e = t.targets, n = t.vnode;
                e.forEach(function (t) {
                    n.context.$root.$emit("show::modal", t, n.elm)
                })
            })
        }
    }, qr = "undefined" != typeof window, Gr = !qr;
    qr && window.Element && !Element.prototype.closest && (Element.prototype.closest = function (t) {
        var e, n = (this.document || this.ownerDocument).querySelectorAll(t), i = this;
        do {
            for (e = n.length; --e >= 0 && n.item(e) !== i;);
        } while (e < 0 && (i = i.parentElement));
        return i
    });
    var Ur = "__BV_ScrollSpy__", Kr = {
        element: "body",
        offset: 10,
        method: "auto",
        throttle: 100
    }, Yr = {
        element: "(string|element)",
        offset: "number",
        method: "string",
        throttle: "number"
    }, Zr = {
        DROPDOWN_ITEM: "dropdown-item",
        DROPDOWN_MENU: "dropdown-menu",
        DROPDOWN_TOGGLE: "dropdown-toggle",
        NAV_LINK: "nav-link",
        LIST_ITEM: "list-group-item",
        ACTIVE: "active"
    }, Jr = {
        ACTIVE: ".active",
        NAV_LIST_GROUP: ".nav, .list-group",
        NAV: ".nav",
        LIST_GROUP: ".list-group",
        NAV_LINKS: ".nav-link",
        LIST_ITEMS: ".list-group-item",
        DROPDOWN: ".dropdown",
        DROPDOWN_ITEMS: ".dropdown-item",
        DROPDOWN_TOGGLE: ".dropdown-toggle"
    }, Xr = {OFFSET: "offset", POSITION: "position"};
    Yt.prototype.updateConfig = function (t) {
        var e = this;
        t.arg && (this._config.element = "#" + t.arg), le(t.modifiers).forEach(function (t) {
            /^\d+$/.test(t) ? e._config.offset = parseInt(t, 10) : /^(auto|position|offset)$/.test(t) && (e._config.method = t)
        }), "string" == typeof t.value ? this._config.element = t.value : "number" == typeof t.value ? this._config.offset = Math.round(t.value) : "object" == typeof t.value && le(t.value).filter(function (t) {
            return Boolean(Yr[t])
        }).forEach(function (n) {
            e._config[n] = t.value[n]
        }), Kt("v-b-scrollspy", this._config, Yr);
        var n = Gt(this._$el);
        return !this._$root && n && n.$root && (this._$root = n.$root), this
    }, Yt.prototype.listen = function () {
        var t = this._getScroller();
        return t && ("BODY" !== t.tagName && t.addEventListener("scroll", this, !1), window.addEventListener("scroll", this, !1), window.addEventListener("orientationchange", this, !1), window.addEventListener("resize", this, !1)), this
    }, Yt.prototype.unListen = function () {
        var t = this._getScroller();
        return t && ("BODY" !== t.tagName && t.removeEventListener("scroll", this, !1), window.removeEventListener("scroll", this, !1), window.removeEventListener("orientationchange", this, !1), window.removeEventListener("resize", this, !1)), this
    }, Yt.prototype.refresh = function () {
        var t = this, e = this._getScroller();
        if (!e)return this;
        var n = "BODY" === e.tagName ? Xr.OFFSET : Xr.POSITION, i = "auto" === this._config.method ? n : this._config.method, r = i === Xr.OFFSET ? 0 : this._getScrollTop();
        return this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Wt(this._selector, this._$el).map(function (t) {
            var n = t.getAttribute("href");
            if (n && "#" === n.charAt(0) && "#" !== n && -1 === n.indexOf("#/")) {
                var o = qt(n, e);
                if (!o)return null;
                var a = o.getBoundingClientRect();
                if (a.width || a.height)return {offset: (i === Xr.OFFSET ? a.top : o.offsetTop) + r, href: n}
            }
            return null
        }).filter(function (t) {
            return t
        }).sort(function (t, e) {
            return t.offset - e.offset
        }).forEach(function (e) {
            t._offsets.push(e.offset), t._targets.push(e.href)
        }), this
    }, Yt.prototype.process = function () {
        var t = this;
        if (!this._getScroller)return this;
        var e = this._getScrollTop() + this._config.offset, n = this._getScrollHeight(), i = this._config.offset + n - this._getOffsetHeight();
        if (this._scrollHeight !== n && this.refresh(), e >= i) {
            var r = this._targets[this._targets.length - 1];
            return this._activeTarget !== r && this._activate(r), this
        }
        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)return this._activeTarget = null, this._clear(), this;
        for (var o = this._offsets.length; o--;)t._activeTarget !== t._targets[o] && e >= t._offsets[o] && (void 0 === t._offsets[o + 1] || e < t._offsets[o + 1]) && t._activate(t._targets[o]);
        return this
    }, Yt.prototype.scheduleRefresh = function () {
        return this.handleEvent({type: "resize"}), this
    }, Yt.prototype.dispose = function () {
        this.unListen(), clearTimeout(this._resizeTimeout), this._resizeTimeout = null, this._$el = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null, this._$root = null
    }, Yt.prototype.handleEvent = function (t) {
        var e = this;
        "scroll" === t.type ? this.process() : "orientationchange" !== t.type && "resize" !== t.type || (clearTimeout(e._resizeTimeout), e._resizeTimeout = setTimeout(function () {
            e.refresh().process()
        }, e._config.throttle || Kr.throttle))
    }, Yt.prototype._getScroller = function () {
        if (Gr)return null;
        var t = this._config.element;
        return t ? t && Rt(t) ? t : "string" == typeof t ? "body" === t ? document.body : qt(t) : null : null
    }, Yt.prototype._getScrollTop = function () {
        var t = this._getScroller();
        return t ? "BODY" === t.tagName ? window.pageYOffset : t.scrollTop : 0
    }, Yt.prototype._getScrollHeight = function () {
        var t = this._getScroller();
        return t ? "BODY" === t.tagName ? Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) : t.scrollHeight : 0
    }, Yt.prototype._getOffsetHeight = function () {
        var t = this._getScroller();
        return t ? "BODY" === t.tagName ? window.innerHeight : t.getBoundingClientRect().height : 0
    }, Yt.prototype._activate = function (t) {
        var e = this;
        this._activeTarget = t, this._clear();
        var n = this._selector.split(","), i = Wt((n = n.map(function (e) {
            return e + '[href="' + t + '"]'
        })).join(","), this._$el);
        i.forEach(function (t) {
            if (t.classList.contains(Zr.DROPDOWN_ITEM)) {
                var n = zt(t, Jr.DROPDOWN);
                if (n) {
                    var i = qt(Jr.DROPDOWN_TOGGLE, n);
                    i && e._setActiveState(i, !0)
                }
                e._setActiveState(t, !0)
            } else e._setActiveState(t, !0), e._setParentsSiblingActiveState(t, Jr.NAV_LIST_GROUP, [Zr.NAV_LINK, Zr.LIST_ITEM], !0)
        }), i && i.length > 0 && this._$root && this._$root.$emit && this._$root.$emit("scrollspy::activate", t)
    }, Yt.prototype._clear = function () {
        var t = this;
        Wt(this._selector, this._$el).filter(function (t) {
            if (t.classList.contains(Zr.ACTIVE)) {
                var e = t.getAttribute("href");
                return "#" === e.charAt(0) && 0 !== e.indexOf("#/")
            }
            return !1
        }).forEach(function (e) {
            t._setActiveState(e, !1)
        })
    }, Yt.prototype._setActiveState = function (t, e) {
        if (t) {
            var n = Gt(t);
            n && Object.prototype.hasOwnProperty.call(n.$props, "active") ? n.$props.active = e : t.classList[e ? "add" : "remove"](Zr.ACTIVE)
        }
    }, Yt.prototype._setParentsSiblingActiveState = function (t, e, n, i) {
        var r = this;
        if (n) {
            oe(n) || (n = [n]);
            for (var o = t; o;)if ((o = zt(o, e)) && o.previousElementSibling)for (var a = 0; a < n.length - 1; a++)o.previousElementSibling.classList.contains(n[a]) && r._setActiveState(o, i)
        }
    };
    var Qr = {
        bind: function (t, e, n) {
            Gr || Zt(t, e, n).scheduleRefresh()
        }, inserted: function (t, e, n) {
            Gr || Zt(t, e, n).refresh().process().scheduleRefresh()
        }, update: function (t, e, n) {
            Gr || Zt(t, e, n).refresh().process().scheduleRefresh()
        }, componentUpdated: function (t, e, n) {
            Gr || Zt(t, e, n).refresh().process().scheduleRefresh()
        }, unbind: function (t) {
            Gr || Jt(t)
        }
    }, to = "undefined" != typeof window && "undefined" != typeof document, eo = "__BV_ToolTip__", no = {
        focus: !0,
        hover: !0,
        click: !0,
        blur: !0
    }, io = {
        bind: function (t, e, n) {
            Qt(t, e, n)
        }, inserted: function (t, e, n) {
            Qt(t, e, n)
        }, update: function (t, e, n) {
            e.value !== e.oldValue && Qt(t, e, n)
        }, componentUpdated: function (t, e, n) {
            e.value !== e.oldValue && Qt(t, e, n)
        }, unbind: function (t) {
            te(t)
        }
    }, ro = "undefined" != typeof window && "undefined" != typeof document, oo = "__BV_PopOver__", ao = {
        focus: !0,
        hover: !0,
        click: !0,
        blur: !0
    }, so = {
        bind: function (t, e, n) {
            ne(t, e, n)
        }, inserted: function (t, e, n) {
            ne(t, e, n)
        }, update: function (t, e, n) {
            e.value !== e.oldValue && ne(t, e, n)
        }, componentUpdated: function (t, e, n) {
            e.value !== e.oldValue && ne(t, e, n)
        }, unbind: function (t) {
            ie(t)
        }
    }, lo = Object.freeze({
        bToggle: Rr,
        bModal: Wr,
        bScrollspy: Qr,
        bTooltip: io,
        bPopover: so
    }), uo = {
        install: function (t) {
            if (!t._bootstrap_vue_installed) {
                t._bootstrap_vue_installed = !0;
                for (var e in Nr)t.component(e, Nr[e]);
                for (var n in lo)t.directive(n, lo[n])
            }
        }
    };
    return "undefined" != typeof window && window.Vue && window.Vue.use(uo), uo
});
//# sourceMappingURL=bootstrap-vue.js.map