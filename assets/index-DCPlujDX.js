(function () {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const R of document.querySelectorAll('link[rel="modulepreload"]')) le(R);
  new MutationObserver((R) => {
    for (const D of R)
      if (D.type === "childList")
        for (const pe of D.addedNodes)
          pe.tagName === "LINK" && pe.rel === "modulepreload" && le(pe);
  }).observe(document, { childList: !0, subtree: !0 });
  function p(R) {
    const D = {};
    return (
      R.integrity && (D.integrity = R.integrity),
      R.referrerPolicy && (D.referrerPolicy = R.referrerPolicy),
      R.crossOrigin === "use-credentials"
        ? (D.credentials = "include")
        : R.crossOrigin === "anonymous"
        ? (D.credentials = "omit")
        : (D.credentials = "same-origin"),
      D
    );
  }
  function le(R) {
    if (R.ep) return;
    R.ep = !0;
    const D = p(R);
    fetch(R.href, D);
  }
})();
var Es = { exports: {} },
  wr = {},
  _s = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _a;
function zd() {
  if (_a) return I;
  _a = 1;
  var g = Symbol.for("react.element"),
    S = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    le = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    D = Symbol.for("react.provider"),
    pe = Symbol.for("react.context"),
    oe = Symbol.for("react.forward_ref"),
    A = Symbol.for("react.suspense"),
    ve = Symbol.for("react.memo"),
    ye = Symbol.for("react.lazy"),
    ne = Symbol.iterator;
  function J(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = (ne && d[ne]) || d["@@iterator"]),
        typeof d == "function" ? d : null);
  }
  var Ke = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ze = Object.assign,
    q = {};
  function K(d, y, O) {
    (this.props = d),
      (this.context = y),
      (this.refs = q),
      (this.updater = O || Ke);
  }
  (K.prototype.isReactComponent = {}),
    (K.prototype.setState = function (d, y) {
      if (typeof d != "object" && typeof d != "function" && d != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, d, y, "setState");
    }),
    (K.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate");
    });
  function jn() {}
  jn.prototype = K.prototype;
  function fn(d, y, O) {
    (this.props = d),
      (this.context = y),
      (this.refs = q),
      (this.updater = O || Ke);
  }
  var nn = (fn.prototype = new jn());
  (nn.constructor = fn), Ze(nn, K.prototype), (nn.isPureReactComponent = !0);
  var ke = Array.isArray,
    tn = Object.prototype.hasOwnProperty,
    Le = { current: null },
    Re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ye(d, y, O) {
    var H,
      B = {},
      Q = null,
      Z = null;
    if (y != null)
      for (H in (y.ref !== void 0 && (Z = y.ref),
      y.key !== void 0 && (Q = "" + y.key),
      y))
        tn.call(y, H) && !Re.hasOwnProperty(H) && (B[H] = y[H]);
    var W = arguments.length - 2;
    if (W === 1) B.children = O;
    else if (1 < W) {
      for (var b = Array(W), Qe = 0; Qe < W; Qe++) b[Qe] = arguments[Qe + 2];
      B.children = b;
    }
    if (d && d.defaultProps)
      for (H in ((W = d.defaultProps), W)) B[H] === void 0 && (B[H] = W[H]);
    return {
      $$typeof: g,
      type: d,
      key: Q,
      ref: Z,
      props: B,
      _owner: Le.current,
    };
  }
  function zn(d, y) {
    return {
      $$typeof: g,
      type: d.type,
      key: y,
      ref: d.ref,
      props: d.props,
      _owner: d._owner,
    };
  }
  function wn(d) {
    return typeof d == "object" && d !== null && d.$$typeof === g;
  }
  function Jn(d) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      d.replace(/[=:]/g, function (O) {
        return y[O];
      })
    );
  }
  var pn = /\/+/g;
  function Be(d, y) {
    return typeof d == "object" && d !== null && d.key != null
      ? Jn("" + d.key)
      : y.toString(36);
  }
  function rn(d, y, O, H, B) {
    var Q = typeof d;
    (Q === "undefined" || Q === "boolean") && (d = null);
    var Z = !1;
    if (d === null) Z = !0;
    else
      switch (Q) {
        case "string":
        case "number":
          Z = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case g:
            case S:
              Z = !0;
          }
      }
    if (Z)
      return (
        (Z = d),
        (B = B(Z)),
        (d = H === "" ? "." + Be(Z, 0) : H),
        ke(B)
          ? ((O = ""),
            d != null && (O = d.replace(pn, "$&/") + "/"),
            rn(B, y, O, "", function (Qe) {
              return Qe;
            }))
          : B != null &&
            (wn(B) &&
              (B = zn(
                B,
                O +
                  (!B.key || (Z && Z.key === B.key)
                    ? ""
                    : ("" + B.key).replace(pn, "$&/") + "/") +
                  d
              )),
            y.push(B)),
        1
      );
    if (((Z = 0), (H = H === "" ? "." : H + ":"), ke(d)))
      for (var W = 0; W < d.length; W++) {
        Q = d[W];
        var b = H + Be(Q, W);
        Z += rn(Q, y, O, b, B);
      }
    else if (((b = J(d)), typeof b == "function"))
      for (d = b.call(d), W = 0; !(Q = d.next()).done; )
        (Q = Q.value), (b = H + Be(Q, W++)), (Z += rn(Q, y, O, b, B));
    else if (Q === "object")
      throw (
        ((y = String(d)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]"
              ? "object with keys {" + Object.keys(d).join(", ") + "}"
              : y) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Z;
  }
  function hn(d, y, O) {
    if (d == null) return d;
    var H = [],
      B = 0;
    return (
      rn(d, H, "", "", function (Q) {
        return y.call(O, Q, B++);
      }),
      H
    );
  }
  function Fe(d) {
    if (d._status === -1) {
      var y = d._result;
      (y = y()),
        y.then(
          function (O) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = O));
          },
          function (O) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = O));
          }
        ),
        d._status === -1 && ((d._status = 0), (d._result = y));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var ie = { current: null },
    k = { transition: null },
    F = {
      ReactCurrentDispatcher: ie,
      ReactCurrentBatchConfig: k,
      ReactCurrentOwner: Le,
    };
  function E() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (I.Children = {
      map: hn,
      forEach: function (d, y, O) {
        hn(
          d,
          function () {
            y.apply(this, arguments);
          },
          O
        );
      },
      count: function (d) {
        var y = 0;
        return (
          hn(d, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (d) {
        return (
          hn(d, function (y) {
            return y;
          }) || []
        );
      },
      only: function (d) {
        if (!wn(d))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return d;
      },
    }),
    (I.Component = K),
    (I.Fragment = p),
    (I.Profiler = R),
    (I.PureComponent = fn),
    (I.StrictMode = le),
    (I.Suspense = A),
    (I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
    (I.act = E),
    (I.cloneElement = function (d, y, O) {
      if (d == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            d +
            "."
        );
      var H = Ze({}, d.props),
        B = d.key,
        Q = d.ref,
        Z = d._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((Q = y.ref), (Z = Le.current)),
          y.key !== void 0 && (B = "" + y.key),
          d.type && d.type.defaultProps)
        )
          var W = d.type.defaultProps;
        for (b in y)
          tn.call(y, b) &&
            !Re.hasOwnProperty(b) &&
            (H[b] = y[b] === void 0 && W !== void 0 ? W[b] : y[b]);
      }
      var b = arguments.length - 2;
      if (b === 1) H.children = O;
      else if (1 < b) {
        W = Array(b);
        for (var Qe = 0; Qe < b; Qe++) W[Qe] = arguments[Qe + 2];
        H.children = W;
      }
      return { $$typeof: g, type: d.type, key: B, ref: Q, props: H, _owner: Z };
    }),
    (I.createContext = function (d) {
      return (
        (d = {
          $$typeof: pe,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (d.Provider = { $$typeof: D, _context: d }),
        (d.Consumer = d)
      );
    }),
    (I.createElement = Ye),
    (I.createFactory = function (d) {
      var y = Ye.bind(null, d);
      return (y.type = d), y;
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (d) {
      return { $$typeof: oe, render: d };
    }),
    (I.isValidElement = wn),
    (I.lazy = function (d) {
      return { $$typeof: ye, _payload: { _status: -1, _result: d }, _init: Fe };
    }),
    (I.memo = function (d, y) {
      return { $$typeof: ve, type: d, compare: y === void 0 ? null : y };
    }),
    (I.startTransition = function (d) {
      var y = k.transition;
      k.transition = {};
      try {
        d();
      } finally {
        k.transition = y;
      }
    }),
    (I.unstable_act = E),
    (I.useCallback = function (d, y) {
      return ie.current.useCallback(d, y);
    }),
    (I.useContext = function (d) {
      return ie.current.useContext(d);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (d) {
      return ie.current.useDeferredValue(d);
    }),
    (I.useEffect = function (d, y) {
      return ie.current.useEffect(d, y);
    }),
    (I.useId = function () {
      return ie.current.useId();
    }),
    (I.useImperativeHandle = function (d, y, O) {
      return ie.current.useImperativeHandle(d, y, O);
    }),
    (I.useInsertionEffect = function (d, y) {
      return ie.current.useInsertionEffect(d, y);
    }),
    (I.useLayoutEffect = function (d, y) {
      return ie.current.useLayoutEffect(d, y);
    }),
    (I.useMemo = function (d, y) {
      return ie.current.useMemo(d, y);
    }),
    (I.useReducer = function (d, y, O) {
      return ie.current.useReducer(d, y, O);
    }),
    (I.useRef = function (d) {
      return ie.current.useRef(d);
    }),
    (I.useState = function (d) {
      return ie.current.useState(d);
    }),
    (I.useSyncExternalStore = function (d, y, O) {
      return ie.current.useSyncExternalStore(d, y, O);
    }),
    (I.useTransition = function () {
      return ie.current.useTransition();
    }),
    (I.version = "18.3.1"),
    I
  );
}
var La;
function zs() {
  return La || ((La = 1), (_s.exports = zd())), _s.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function Rd() {
  if (Ta) return wr;
  Ta = 1;
  var g = zs(),
    S = Symbol.for("react.element"),
    p = Symbol.for("react.fragment"),
    le = Object.prototype.hasOwnProperty,
    R = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(oe, A, ve) {
    var ye,
      ne = {},
      J = null,
      Ke = null;
    ve !== void 0 && (J = "" + ve),
      A.key !== void 0 && (J = "" + A.key),
      A.ref !== void 0 && (Ke = A.ref);
    for (ye in A) le.call(A, ye) && !D.hasOwnProperty(ye) && (ne[ye] = A[ye]);
    if (oe && oe.defaultProps)
      for (ye in ((A = oe.defaultProps), A))
        ne[ye] === void 0 && (ne[ye] = A[ye]);
    return {
      $$typeof: S,
      type: oe,
      key: J,
      ref: Ke,
      props: ne,
      _owner: R.current,
    };
  }
  return (wr.Fragment = p), (wr.jsx = pe), (wr.jsxs = pe), wr;
}
var Pa;
function Fd() {
  return Pa || ((Pa = 1), (Es.exports = Rd())), Es.exports;
}
var i = Fd(),
  Pn = zs(),
  Rl = {},
  Ls = { exports: {} },
  Ue = {},
  Ts = { exports: {} },
  Ps = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Md() {
  return (
    za ||
      ((za = 1),
      (function (g) {
        function S(k, F) {
          var E = k.length;
          k.push(F);
          e: for (; 0 < E; ) {
            var d = (E - 1) >>> 1,
              y = k[d];
            if (0 < R(y, F)) (k[d] = F), (k[E] = y), (E = d);
            else break e;
          }
        }
        function p(k) {
          return k.length === 0 ? null : k[0];
        }
        function le(k) {
          if (k.length === 0) return null;
          var F = k[0],
            E = k.pop();
          if (E !== F) {
            k[0] = E;
            e: for (var d = 0, y = k.length, O = y >>> 1; d < O; ) {
              var H = 2 * (d + 1) - 1,
                B = k[H],
                Q = H + 1,
                Z = k[Q];
              if (0 > R(B, E))
                Q < y && 0 > R(Z, B)
                  ? ((k[d] = Z), (k[Q] = E), (d = Q))
                  : ((k[d] = B), (k[H] = E), (d = H));
              else if (Q < y && 0 > R(Z, E)) (k[d] = Z), (k[Q] = E), (d = Q);
              else break e;
            }
          }
          return F;
        }
        function R(k, F) {
          var E = k.sortIndex - F.sortIndex;
          return E !== 0 ? E : k.id - F.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var D = performance;
          g.unstable_now = function () {
            return D.now();
          };
        } else {
          var pe = Date,
            oe = pe.now();
          g.unstable_now = function () {
            return pe.now() - oe;
          };
        }
        var A = [],
          ve = [],
          ye = 1,
          ne = null,
          J = 3,
          Ke = !1,
          Ze = !1,
          q = !1,
          K = typeof setTimeout == "function" ? setTimeout : null,
          jn = typeof clearTimeout == "function" ? clearTimeout : null,
          fn = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function nn(k) {
          for (var F = p(ve); F !== null; ) {
            if (F.callback === null) le(ve);
            else if (F.startTime <= k)
              le(ve), (F.sortIndex = F.expirationTime), S(A, F);
            else break;
            F = p(ve);
          }
        }
        function ke(k) {
          if (((q = !1), nn(k), !Ze))
            if (p(A) !== null) (Ze = !0), Fe(tn);
            else {
              var F = p(ve);
              F !== null && ie(ke, F.startTime - k);
            }
        }
        function tn(k, F) {
          (Ze = !1), q && ((q = !1), jn(Ye), (Ye = -1)), (Ke = !0);
          var E = J;
          try {
            for (
              nn(F), ne = p(A);
              ne !== null && (!(ne.expirationTime > F) || (k && !Jn()));

            ) {
              var d = ne.callback;
              if (typeof d == "function") {
                (ne.callback = null), (J = ne.priorityLevel);
                var y = d(ne.expirationTime <= F);
                (F = g.unstable_now()),
                  typeof y == "function"
                    ? (ne.callback = y)
                    : ne === p(A) && le(A),
                  nn(F);
              } else le(A);
              ne = p(A);
            }
            if (ne !== null) var O = !0;
            else {
              var H = p(ve);
              H !== null && ie(ke, H.startTime - F), (O = !1);
            }
            return O;
          } finally {
            (ne = null), (J = E), (Ke = !1);
          }
        }
        var Le = !1,
          Re = null,
          Ye = -1,
          zn = 5,
          wn = -1;
        function Jn() {
          return !(g.unstable_now() - wn < zn);
        }
        function pn() {
          if (Re !== null) {
            var k = g.unstable_now();
            wn = k;
            var F = !0;
            try {
              F = Re(!0, k);
            } finally {
              F ? Be() : ((Le = !1), (Re = null));
            }
          } else Le = !1;
        }
        var Be;
        if (typeof fn == "function")
          Be = function () {
            fn(pn);
          };
        else if (typeof MessageChannel < "u") {
          var rn = new MessageChannel(),
            hn = rn.port2;
          (rn.port1.onmessage = pn),
            (Be = function () {
              hn.postMessage(null);
            });
        } else
          Be = function () {
            K(pn, 0);
          };
        function Fe(k) {
          (Re = k), Le || ((Le = !0), Be());
        }
        function ie(k, F) {
          Ye = K(function () {
            k(g.unstable_now());
          }, F);
        }
        (g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (g.unstable_continueExecution = function () {
            Ze || Ke || ((Ze = !0), Fe(tn));
          }),
          (g.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (zn = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (g.unstable_getFirstCallbackNode = function () {
            return p(A);
          }),
          (g.unstable_next = function (k) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var F = 3;
                break;
              default:
                F = J;
            }
            var E = J;
            J = F;
            try {
              return k();
            } finally {
              J = E;
            }
          }),
          (g.unstable_pauseExecution = function () {}),
          (g.unstable_requestPaint = function () {}),
          (g.unstable_runWithPriority = function (k, F) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var E = J;
            J = k;
            try {
              return F();
            } finally {
              J = E;
            }
          }),
          (g.unstable_scheduleCallback = function (k, F, E) {
            var d = g.unstable_now();
            switch (
              (typeof E == "object" && E !== null
                ? ((E = E.delay),
                  (E = typeof E == "number" && 0 < E ? d + E : d))
                : (E = d),
              k)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = E + y),
              (k = {
                id: ye++,
                callback: F,
                priorityLevel: k,
                startTime: E,
                expirationTime: y,
                sortIndex: -1,
              }),
              E > d
                ? ((k.sortIndex = E),
                  S(ve, k),
                  p(A) === null &&
                    k === p(ve) &&
                    (q ? (jn(Ye), (Ye = -1)) : (q = !0), ie(ke, E - d)))
                : ((k.sortIndex = y), S(A, k), Ze || Ke || ((Ze = !0), Fe(tn))),
              k
            );
          }),
          (g.unstable_shouldYield = Jn),
          (g.unstable_wrapCallback = function (k) {
            var F = J;
            return function () {
              var E = J;
              J = F;
              try {
                return k.apply(this, arguments);
              } finally {
                J = E;
              }
            };
          });
      })(Ps)),
    Ps
  );
}
var Ra;
function Od() {
  return Ra || ((Ra = 1), (Ts.exports = Md())), Ts.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fa;
function Id() {
  if (Fa) return Ue;
  Fa = 1;
  var g = zs(),
    S = Od();
  function p(e) {
    for (
      var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        t = 1;
      t < arguments.length;
      t++
    )
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var le = new Set(),
    R = {};
  function D(e, n) {
    pe(e, n), pe(e + "Capture", n);
  }
  function pe(e, n) {
    for (R[e] = n, e = 0; e < n.length; e++) le.add(n[e]);
  }
  var oe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    A = Object.prototype.hasOwnProperty,
    ve =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ye = {},
    ne = {};
  function J(e) {
    return A.call(ne, e)
      ? !0
      : A.call(ye, e)
      ? !1
      : ve.test(e)
      ? (ne[e] = !0)
      : ((ye[e] = !0), !1);
  }
  function Ke(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : t !== null
          ? !t.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Ze(e, n, t, r) {
    if (n === null || typeof n > "u" || Ke(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function q(e, n, t, r, l, s, o) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = t),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = s),
      (this.removeEmptyString = o);
  }
  var K = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      K[e] = new q(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var n = e[0];
      K[n] = new q(n, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      K[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      K[e] = new q(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        K[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      K[e] = new q(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      K[e] = new q(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      K[e] = new q(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      K[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var jn = /[\-:]([a-z])/g;
  function fn(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var n = e.replace(jn, fn);
      K[n] = new q(n, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(jn, fn);
        K[n] = new q(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var n = e.replace(jn, fn);
      K[n] = new q(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      K[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (K.xlinkHref = new q(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      K[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function nn(e, n, t, r) {
    var l = K.hasOwnProperty(n) ? K[n] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
      (Ze(n, t, l, r) && (t = null),
      r || l === null
        ? J(n) &&
          (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
        : l.mustUseProperty
        ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
        : ((n = l.attributeName),
          (r = l.attributeNamespace),
          t === null
            ? e.removeAttribute(n)
            : ((l = l.type),
              (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
              r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var ke = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    tn = Symbol.for("react.element"),
    Le = Symbol.for("react.portal"),
    Re = Symbol.for("react.fragment"),
    Ye = Symbol.for("react.strict_mode"),
    zn = Symbol.for("react.profiler"),
    wn = Symbol.for("react.provider"),
    Jn = Symbol.for("react.context"),
    pn = Symbol.for("react.forward_ref"),
    Be = Symbol.for("react.suspense"),
    rn = Symbol.for("react.suspense_list"),
    hn = Symbol.for("react.memo"),
    Fe = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    k = Symbol.iterator;
  function F(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (k && e[k]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var E = Object.assign,
    d;
  function y(e) {
    if (d === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        d = (n && n[1]) || "";
      }
    return (
      `
` +
      d +
      e
    );
  }
  var O = !1;
  function H(e, n) {
    if (!e || O) return "";
    O = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (m) {
            var r = m;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (m) {
            r = m;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (m) {
          r = m;
        }
        e();
      }
    } catch (m) {
      if (m && r && typeof m.stack == "string") {
        for (
          var l = m.stack.split(`
`),
            s = r.stack.split(`
`),
            o = l.length - 1,
            u = s.length - 1;
          1 <= o && 0 <= u && l[o] !== s[u];

        )
          u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (l[o] !== s[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || l[o] !== s[u])) {
                  var a =
                    `
` + l[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      a.includes("<anonymous>") &&
                      (a = a.replace("<anonymous>", e.displayName)),
                    a
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      (O = !1), (Error.prepareStackTrace = t);
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function B(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = H(e.type, !1)), e;
      case 11:
        return (e = H(e.type.render, !1)), e;
      case 1:
        return (e = H(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Q(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Re:
        return "Fragment";
      case Le:
        return "Portal";
      case zn:
        return "Profiler";
      case Ye:
        return "StrictMode";
      case Be:
        return "Suspense";
      case rn:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Jn:
          return (e.displayName || "Context") + ".Consumer";
        case wn:
          return (e._context.displayName || "Context") + ".Provider";
        case pn:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case hn:
          return (
            (n = e.displayName || null), n !== null ? n : Q(e.type) || "Memo"
          );
        case Fe:
          (n = e._payload), (e = e._init);
          try {
            return Q(e(n));
          } catch {}
      }
    return null;
  }
  function Z(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ""),
          n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Q(n);
      case 8:
        return n === Ye ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function W(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function b(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Qe(e) {
    var n = b(e) ? "checked" : "value",
      t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      r = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof t < "u" &&
      typeof t.get == "function" &&
      typeof t.set == "function"
    ) {
      var l = t.get,
        s = t.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            (r = "" + o), s.call(this, o);
          },
        }),
        Object.defineProperty(e, n, { enumerable: t.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function Sr(e) {
    e._valueTracker || (e._valueTracker = Qe(e));
  }
  function Rs(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
      r = "";
    return (
      e && (r = b(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== t ? (n.setValue(e), !0) : !1
    );
  }
  function kr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Fl(e, n) {
    var t = n.checked;
    return E({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: t ?? e._wrapperState.initialChecked,
    });
  }
  function Fs(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue,
      r = n.checked != null ? n.checked : n.defaultChecked;
    (t = W(n.value != null ? n.value : t)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: t,
        controlled:
          n.type === "checkbox" || n.type === "radio"
            ? n.checked != null
            : n.value != null,
      });
  }
  function Ms(e, n) {
    (n = n.checked), n != null && nn(e, "checked", n, !1);
  }
  function Ml(e, n) {
    Ms(e, n);
    var t = W(n.value),
      r = n.type;
    if (t != null)
      r === "number"
        ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
        : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value")
      ? Ol(e, n.type, t)
      : n.hasOwnProperty("defaultValue") && Ol(e, n.type, W(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked);
  }
  function Os(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      (n = "" + e._wrapperState.initialValue),
        t || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (t = e.name),
      t !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      t !== "" && (e.name = t);
  }
  function Ol(e, n, t) {
    (n !== "number" || kr(e.ownerDocument) !== e) &&
      (t == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var It = Array.isArray;
  function dt(e, n, t, r) {
    if (((e = e.options), n)) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        (l = n.hasOwnProperty("$" + e[t].value)),
          e[t].selected !== l && (e[t].selected = l),
          l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + W(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Il(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(p(91));
    return E({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Is(e, n) {
    var t = n.value;
    if (t == null) {
      if (((t = n.children), (n = n.defaultValue), t != null)) {
        if (n != null) throw Error(p(92));
        if (It(t)) {
          if (1 < t.length) throw Error(p(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), (t = n);
    }
    e._wrapperState = { initialValue: W(t) };
  }
  function Ds(e, n) {
    var t = W(n.value),
      r = W(n.defaultValue);
    t != null &&
      ((t = "" + t),
      t !== e.value && (e.value = t),
      n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
      r != null && (e.defaultValue = "" + r);
  }
  function Hs(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
      n !== "" &&
      n !== null &&
      (e.value = n);
  }
  function Us(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dl(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Us(n)
      : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Nr,
    Bs = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (n, t, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, t, r, l);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = n;
      else {
        for (
          Nr = Nr || document.createElement("div"),
            Nr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = Nr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function Dt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Ht = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ia = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ht).forEach(function (e) {
    Ia.forEach(function (n) {
      (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Ht[n] = Ht[e]);
    });
  });
  function Qs(e, n, t) {
    return n == null || typeof n == "boolean" || n === ""
      ? ""
      : t || typeof n != "number" || n === 0 || (Ht.hasOwnProperty(e) && Ht[e])
      ? ("" + n).trim()
      : n + "px";
  }
  function Vs(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0,
          l = Qs(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
      }
  }
  var Da = E(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Hl(e, n) {
    if (n) {
      if (Da[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(p(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(p(60));
        if (
          typeof n.dangerouslySetInnerHTML != "object" ||
          !("__html" in n.dangerouslySetInnerHTML)
        )
          throw Error(p(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(p(62));
    }
  }
  function Ul(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Bl = null;
  function Ql(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Vl = null,
    ft = null,
    pt = null;
  function As(e) {
    if ((e = sr(e))) {
      if (typeof Vl != "function") throw Error(p(280));
      var n = e.stateNode;
      n && ((n = Zr(n)), Vl(e.stateNode, e.type, n));
    }
  }
  function Ws(e) {
    ft ? (pt ? pt.push(e) : (pt = [e])) : (ft = e);
  }
  function $s() {
    if (ft) {
      var e = ft,
        n = pt;
      if (((pt = ft = null), As(e), n)) for (e = 0; e < n.length; e++) As(n[e]);
    }
  }
  function Ks(e, n) {
    return e(n);
  }
  function Zs() {}
  var Al = !1;
  function Ys(e, n, t) {
    if (Al) return e(n, t);
    Al = !0;
    try {
      return Ks(e, n, t);
    } finally {
      (Al = !1), (ft !== null || pt !== null) && (Zs(), $s());
    }
  }
  function Ut(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = Zr(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(p(231, n, typeof t));
    return t;
  }
  var Wl = !1;
  if (oe)
    try {
      var Bt = {};
      Object.defineProperty(Bt, "passive", {
        get: function () {
          Wl = !0;
        },
      }),
        window.addEventListener("test", Bt, Bt),
        window.removeEventListener("test", Bt, Bt);
    } catch {
      Wl = !1;
    }
  function Ha(e, n, t, r, l, s, o, u, a) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, m);
    } catch (x) {
      this.onError(x);
    }
  }
  var Qt = !1,
    Cr = null,
    Er = !1,
    $l = null,
    Ua = {
      onError: function (e) {
        (Qt = !0), (Cr = e);
      },
    };
  function Ba(e, n, t, r, l, s, o, u, a) {
    (Qt = !1), (Cr = null), Ha.apply(Ua, arguments);
  }
  function Qa(e, n, t, r, l, s, o, u, a) {
    if ((Ba.apply(this, arguments), Qt)) {
      if (Qt) {
        var m = Cr;
        (Qt = !1), (Cr = null);
      } else throw Error(p(198));
      Er || ((Er = !0), ($l = m));
    }
  }
  function qn(e) {
    var n = e,
      t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Gs(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function Xs(e) {
    if (qn(e) !== e) throw Error(p(188));
  }
  function Va(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = qn(e)), n === null)) throw Error(p(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var s = l.alternate;
      if (s === null) {
        if (((r = l.return), r !== null)) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === s.child) {
        for (s = l.child; s; ) {
          if (s === t) return Xs(l), e;
          if (s === r) return Xs(l), n;
          s = s.sibling;
        }
        throw Error(p(188));
      }
      if (t.return !== r.return) (t = l), (r = s);
      else {
        for (var o = !1, u = l.child; u; ) {
          if (u === t) {
            (o = !0), (t = l), (r = s);
            break;
          }
          if (u === r) {
            (o = !0), (r = l), (t = s);
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = s.child; u; ) {
            if (u === t) {
              (o = !0), (t = s), (r = l);
              break;
            }
            if (u === r) {
              (o = !0), (r = s), (t = l);
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(p(189));
        }
      }
      if (t.alternate !== r) throw Error(p(190));
    }
    if (t.tag !== 3) throw Error(p(188));
    return t.stateNode.current === t ? e : n;
  }
  function Js(e) {
    return (e = Va(e)), e !== null ? qs(e) : null;
  }
  function qs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = qs(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var bs = S.unstable_scheduleCallback,
    eo = S.unstable_cancelCallback,
    Aa = S.unstable_shouldYield,
    Wa = S.unstable_requestPaint,
    ue = S.unstable_now,
    $a = S.unstable_getCurrentPriorityLevel,
    Kl = S.unstable_ImmediatePriority,
    no = S.unstable_UserBlockingPriority,
    _r = S.unstable_NormalPriority,
    Ka = S.unstable_LowPriority,
    to = S.unstable_IdlePriority,
    Lr = null,
    mn = null;
  function Za(e) {
    if (mn && typeof mn.onCommitFiberRoot == "function")
      try {
        mn.onCommitFiberRoot(Lr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ln = Math.clz32 ? Math.clz32 : Xa,
    Ya = Math.log,
    Ga = Math.LN2;
  function Xa(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ya(e) / Ga) | 0)) | 0;
  }
  var Tr = 64,
    Pr = 4194304;
  function Vt(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function zr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      s = e.pingedLanes,
      o = t & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? (r = Vt(u)) : ((s &= o), s !== 0 && (r = Vt(s)));
    } else (o = t & ~l), o !== 0 ? (r = Vt(o)) : s !== 0 && (r = Vt(s));
    if (r === 0) return 0;
    if (
      n !== 0 &&
      n !== r &&
      !(n & l) &&
      ((l = r & -r), (s = n & -n), l >= s || (l === 16 && (s & 4194240) !== 0))
    )
      return n;
    if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= r; 0 < n; )
        (t = 31 - ln(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
    return r;
  }
  function Ja(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function qa(e, n) {
    for (
      var t = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        s = e.pendingLanes;
      0 < s;

    ) {
      var o = 31 - ln(s),
        u = 1 << o,
        a = l[o];
      a === -1
        ? (!(u & t) || u & r) && (l[o] = Ja(u, n))
        : a <= n && (e.expiredLanes |= u),
        (s &= ~u);
    }
  }
  function Zl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ro() {
    var e = Tr;
    return (Tr <<= 1), !(Tr & 4194240) && (Tr = 64), e;
  }
  function Yl(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function At(e, n, t) {
    (e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - ln(n)),
      (e[n] = t);
  }
  function ba(e, n) {
    var t = e.pendingLanes & ~n;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - ln(t),
        s = 1 << l;
      (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~s);
    }
  }
  function Gl(e, n) {
    var t = (e.entangledLanes |= n);
    for (e = e.entanglements; t; ) {
      var r = 31 - ln(t),
        l = 1 << r;
      (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
    }
  }
  var $ = 0;
  function lo(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var io,
    Xl,
    so,
    oo,
    uo,
    Jl = !1,
    Rr = [],
    Rn = null,
    Fn = null,
    Mn = null,
    Wt = new Map(),
    $t = new Map(),
    On = [],
    ec =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function ao(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Rn = null;
        break;
      case "dragenter":
      case "dragleave":
        Fn = null;
        break;
      case "mouseover":
      case "mouseout":
        Mn = null;
        break;
      case "pointerover":
      case "pointerout":
        Wt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $t.delete(n.pointerId);
    }
  }
  function Kt(e, n, t, r, l, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: n,
          domEventName: t,
          eventSystemFlags: r,
          nativeEvent: s,
          targetContainers: [l],
        }),
        n !== null && ((n = sr(n)), n !== null && Xl(n)),
        e)
      : ((e.eventSystemFlags |= r),
        (n = e.targetContainers),
        l !== null && n.indexOf(l) === -1 && n.push(l),
        e);
  }
  function nc(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return (Rn = Kt(Rn, e, n, t, r, l)), !0;
      case "dragenter":
        return (Fn = Kt(Fn, e, n, t, r, l)), !0;
      case "mouseover":
        return (Mn = Kt(Mn, e, n, t, r, l)), !0;
      case "pointerover":
        var s = l.pointerId;
        return Wt.set(s, Kt(Wt.get(s) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return (
          (s = l.pointerId), $t.set(s, Kt($t.get(s) || null, e, n, t, r, l)), !0
        );
    }
    return !1;
  }
  function co(e) {
    var n = bn(e.target);
    if (n !== null) {
      var t = qn(n);
      if (t !== null) {
        if (((n = t.tag), n === 13)) {
          if (((n = Gs(t)), n !== null)) {
            (e.blockedOn = n),
              uo(e.priority, function () {
                so(t);
              });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Fr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = bl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        (Bl = r), t.target.dispatchEvent(r), (Bl = null);
      } else return (n = sr(t)), n !== null && Xl(n), (e.blockedOn = t), !1;
      n.shift();
    }
    return !0;
  }
  function fo(e, n, t) {
    Fr(e) && t.delete(n);
  }
  function tc() {
    (Jl = !1),
      Rn !== null && Fr(Rn) && (Rn = null),
      Fn !== null && Fr(Fn) && (Fn = null),
      Mn !== null && Fr(Mn) && (Mn = null),
      Wt.forEach(fo),
      $t.forEach(fo);
  }
  function Zt(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Jl ||
        ((Jl = !0),
        S.unstable_scheduleCallback(S.unstable_NormalPriority, tc)));
  }
  function Yt(e) {
    function n(l) {
      return Zt(l, e);
    }
    if (0 < Rr.length) {
      Zt(Rr[0], e);
      for (var t = 1; t < Rr.length; t++) {
        var r = Rr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Rn !== null && Zt(Rn, e),
        Fn !== null && Zt(Fn, e),
        Mn !== null && Zt(Mn, e),
        Wt.forEach(n),
        $t.forEach(n),
        t = 0;
      t < On.length;
      t++
    )
      (r = On[t]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < On.length && ((t = On[0]), t.blockedOn === null); )
      co(t), t.blockedOn === null && On.shift();
  }
  var ht = ke.ReactCurrentBatchConfig,
    Mr = !0;
  function rc(e, n, t, r) {
    var l = $,
      s = ht.transition;
    ht.transition = null;
    try {
      ($ = 1), ql(e, n, t, r);
    } finally {
      ($ = l), (ht.transition = s);
    }
  }
  function lc(e, n, t, r) {
    var l = $,
      s = ht.transition;
    ht.transition = null;
    try {
      ($ = 4), ql(e, n, t, r);
    } finally {
      ($ = l), (ht.transition = s);
    }
  }
  function ql(e, n, t, r) {
    if (Mr) {
      var l = bl(e, n, t, r);
      if (l === null) vi(e, n, r, Or, t), ao(e, r);
      else if (nc(l, e, n, t, r)) r.stopPropagation();
      else if ((ao(e, r), n & 4 && -1 < ec.indexOf(e))) {
        for (; l !== null; ) {
          var s = sr(l);
          if (
            (s !== null && io(s),
            (s = bl(e, n, t, r)),
            s === null && vi(e, n, r, Or, t),
            s === l)
          )
            break;
          l = s;
        }
        l !== null && r.stopPropagation();
      } else vi(e, n, r, null, t);
    }
  }
  var Or = null;
  function bl(e, n, t, r) {
    if (((Or = null), (e = Ql(r)), (e = bn(e)), e !== null))
      if (((n = qn(e)), n === null)) e = null;
      else if (((t = n.tag), t === 13)) {
        if (((e = Gs(n)), e !== null)) return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return (Or = e), null;
  }
  function po(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch ($a()) {
          case Kl:
            return 1;
          case no:
            return 4;
          case _r:
          case Ka:
            return 16;
          case to:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var In = null,
    ei = null,
    Ir = null;
  function ho() {
    if (Ir) return Ir;
    var e,
      n = ei,
      t = n.length,
      r,
      l = "value" in In ? In.value : In.textContent,
      s = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var o = t - e;
    for (r = 1; r <= o && n[t - r] === l[s - r]; r++);
    return (Ir = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Dr(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Hr() {
    return !0;
  }
  function mo() {
    return !1;
  }
  function Ve(e) {
    function n(t, r, l, s, o) {
      (this._reactName = t),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = s),
        (this.target = o),
        (this.currentTarget = null);
      for (var u in e)
        e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(s) : s[u]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? Hr
          : mo),
        (this.isPropagationStopped = mo),
        this
      );
    }
    return (
      E(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            (this.isDefaultPrevented = Hr));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = Hr));
        },
        persist: function () {},
        isPersistent: Hr,
      }),
      n
    );
  }
  var mt = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ni = Ve(mt),
    Gt = E({}, mt, { view: 0, detail: 0 }),
    ic = Ve(Gt),
    ti,
    ri,
    Xt,
    Ur = E({}, Gt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ii,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Xt &&
              (Xt && e.type === "mousemove"
                ? ((ti = e.screenX - Xt.screenX), (ri = e.screenY - Xt.screenY))
                : (ri = ti = 0),
              (Xt = e)),
            ti);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ri;
      },
    }),
    vo = Ve(Ur),
    sc = E({}, Ur, { dataTransfer: 0 }),
    oc = Ve(sc),
    uc = E({}, Gt, { relatedTarget: 0 }),
    li = Ve(uc),
    ac = E({}, mt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cc = Ve(ac),
    dc = E({}, mt, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    fc = Ve(dc),
    pc = E({}, mt, { data: 0 }),
    yo = Ve(pc),
    hc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    mc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    vc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function yc(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = vc[e])
      ? !!n[e]
      : !1;
  }
  function ii() {
    return yc;
  }
  var xc = E({}, Gt, {
      key: function (e) {
        if (e.key) {
          var n = hc[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = Dr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? mc[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ii,
      charCode: function (e) {
        return e.type === "keypress" ? Dr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Dr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    gc = Ve(xc),
    jc = E({}, Ur, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    xo = Ve(jc),
    wc = E({}, Gt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ii,
    }),
    Sc = Ve(wc),
    kc = E({}, mt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nc = Ve(kc),
    Cc = E({}, Ur, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ec = Ve(Cc),
    _c = [9, 13, 27, 32],
    si = oe && "CompositionEvent" in window,
    Jt = null;
  oe && "documentMode" in document && (Jt = document.documentMode);
  var Lc = oe && "TextEvent" in window && !Jt,
    go = oe && (!si || (Jt && 8 < Jt && 11 >= Jt)),
    jo = " ",
    wo = !1;
  function So(e, n) {
    switch (e) {
      case "keyup":
        return _c.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ko(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var vt = !1;
  function Tc(e, n) {
    switch (e) {
      case "compositionend":
        return ko(n);
      case "keypress":
        return n.which !== 32 ? null : ((wo = !0), jo);
      case "textInput":
        return (e = n.data), e === jo && wo ? null : e;
      default:
        return null;
    }
  }
  function Pc(e, n) {
    if (vt)
      return e === "compositionend" || (!si && So(e, n))
        ? ((e = ho()), (Ir = ei = In = null), (vt = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return go && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var zc = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function No(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!zc[e.type] : n === "textarea";
  }
  function Co(e, n, t, r) {
    Ws(r),
      (n = Wr(n, "onChange")),
      0 < n.length &&
        ((t = new ni("onChange", "change", null, t, r)),
        e.push({ event: t, listeners: n }));
  }
  var qt = null,
    bt = null;
  function Rc(e) {
    Ao(e, 0);
  }
  function Br(e) {
    var n = wt(e);
    if (Rs(n)) return e;
  }
  function Fc(e, n) {
    if (e === "change") return n;
  }
  var Eo = !1;
  if (oe) {
    var oi;
    if (oe) {
      var ui = "oninput" in document;
      if (!ui) {
        var _o = document.createElement("div");
        _o.setAttribute("oninput", "return;"),
          (ui = typeof _o.oninput == "function");
      }
      oi = ui;
    } else oi = !1;
    Eo = oi && (!document.documentMode || 9 < document.documentMode);
  }
  function Lo() {
    qt && (qt.detachEvent("onpropertychange", To), (bt = qt = null));
  }
  function To(e) {
    if (e.propertyName === "value" && Br(bt)) {
      var n = [];
      Co(n, bt, e, Ql(e)), Ys(Rc, n);
    }
  }
  function Mc(e, n, t) {
    e === "focusin"
      ? (Lo(), (qt = n), (bt = t), qt.attachEvent("onpropertychange", To))
      : e === "focusout" && Lo();
  }
  function Oc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Br(bt);
  }
  function Ic(e, n) {
    if (e === "click") return Br(n);
  }
  function Dc(e, n) {
    if (e === "input" || e === "change") return Br(n);
  }
  function Hc(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var sn = typeof Object.is == "function" ? Object.is : Hc;
  function er(e, n) {
    if (sn(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var t = Object.keys(e),
      r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!A.call(n, l) || !sn(e[l], n[l])) return !1;
    }
    return !0;
  }
  function Po(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function zo(e, n) {
    var t = Po(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (((r = e + t.textContent.length), e <= n && r >= n))
          return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Po(t);
    }
  }
  function Ro(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? Ro(e, n.parentNode)
        : "contains" in e
        ? e.contains(n)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function Fo() {
    for (var e = window, n = kr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = kr(e.document);
    }
    return n;
  }
  function ai(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Uc(e) {
    var n = Fo(),
      t = e.focusedElem,
      r = e.selectionRange;
    if (
      n !== t &&
      t &&
      t.ownerDocument &&
      Ro(t.ownerDocument.documentElement, t)
    ) {
      if (r !== null && ai(t)) {
        if (
          ((n = r.start),
          (e = r.end),
          e === void 0 && (e = n),
          "selectionStart" in t)
        )
          (t.selectionStart = n),
            (t.selectionEnd = Math.min(e, t.value.length));
        else if (
          ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = t.textContent.length,
            s = Math.min(r.start, l);
          (r = r.end === void 0 ? s : Math.min(r.end, l)),
            !e.extend && s > r && ((l = r), (r = s), (s = l)),
            (l = zo(t, s));
          var o = zo(t, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((n = n.createRange()),
            n.setStart(l.node, l.offset),
            e.removeAllRanges(),
            s > r
              ? (e.addRange(n), e.extend(o.node, o.offset))
              : (n.setEnd(o.node, o.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; (e = e.parentNode); )
        e.nodeType === 1 &&
          n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        (e = n[t]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Bc = oe && "documentMode" in document && 11 >= document.documentMode,
    yt = null,
    ci = null,
    nr = null,
    di = !1;
  function Mo(e, n, t) {
    var r =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    di ||
      yt == null ||
      yt !== kr(r) ||
      ((r = yt),
      "selectionStart" in r && ai(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (nr && er(nr, r)) ||
        ((nr = r),
        (r = Wr(ci, "onSelect")),
        0 < r.length &&
          ((n = new ni("onSelect", "select", null, n, t)),
          e.push({ event: n, listeners: r }),
          (n.target = yt))));
  }
  function Qr(e, n) {
    var t = {};
    return (
      (t[e.toLowerCase()] = n.toLowerCase()),
      (t["Webkit" + e] = "webkit" + n),
      (t["Moz" + e] = "moz" + n),
      t
    );
  }
  var xt = {
      animationend: Qr("Animation", "AnimationEnd"),
      animationiteration: Qr("Animation", "AnimationIteration"),
      animationstart: Qr("Animation", "AnimationStart"),
      transitionend: Qr("Transition", "TransitionEnd"),
    },
    fi = {},
    Oo = {};
  oe &&
    ((Oo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete xt.animationend.animation,
      delete xt.animationiteration.animation,
      delete xt.animationstart.animation),
    "TransitionEvent" in window || delete xt.transitionend.transition);
  function Vr(e) {
    if (fi[e]) return fi[e];
    if (!xt[e]) return e;
    var n = xt[e],
      t;
    for (t in n) if (n.hasOwnProperty(t) && t in Oo) return (fi[e] = n[t]);
    return e;
  }
  var Io = Vr("animationend"),
    Do = Vr("animationiteration"),
    Ho = Vr("animationstart"),
    Uo = Vr("transitionend"),
    Bo = new Map(),
    Qo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Dn(e, n) {
    Bo.set(e, n), D(n, [e]);
  }
  for (var pi = 0; pi < Qo.length; pi++) {
    var hi = Qo[pi],
      Qc = hi.toLowerCase(),
      Vc = hi[0].toUpperCase() + hi.slice(1);
    Dn(Qc, "on" + Vc);
  }
  Dn(Io, "onAnimationEnd"),
    Dn(Do, "onAnimationIteration"),
    Dn(Ho, "onAnimationStart"),
    Dn("dblclick", "onDoubleClick"),
    Dn("focusin", "onFocus"),
    Dn("focusout", "onBlur"),
    Dn(Uo, "onTransitionEnd"),
    pe("onMouseEnter", ["mouseout", "mouseover"]),
    pe("onMouseLeave", ["mouseout", "mouseover"]),
    pe("onPointerEnter", ["pointerout", "pointerover"]),
    pe("onPointerLeave", ["pointerout", "pointerover"]),
    D(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    D(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    D("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    D(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    D(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    D(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var tr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Ac = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(tr)
    );
  function Vo(e, n, t) {
    var r = e.type || "unknown-event";
    (e.currentTarget = t), Qa(r, n, void 0, e), (e.currentTarget = null);
  }
  function Ao(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (n)
          for (var o = r.length - 1; 0 <= o; o--) {
            var u = r[o],
              a = u.instance,
              m = u.currentTarget;
            if (((u = u.listener), a !== s && l.isPropagationStopped()))
              break e;
            Vo(l, u, m), (s = a);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((u = r[o]),
              (a = u.instance),
              (m = u.currentTarget),
              (u = u.listener),
              a !== s && l.isPropagationStopped())
            )
              break e;
            Vo(l, u, m), (s = a);
          }
      }
    }
    if (Er) throw ((e = $l), (Er = !1), ($l = null), e);
  }
  function G(e, n) {
    var t = n[Si];
    t === void 0 && (t = n[Si] = new Set());
    var r = e + "__bubble";
    t.has(r) || (Wo(n, e, 2, !1), t.add(r));
  }
  function mi(e, n, t) {
    var r = 0;
    n && (r |= 4), Wo(t, e, r, n);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function rr(e) {
    if (!e[Ar]) {
      (e[Ar] = !0),
        le.forEach(function (t) {
          t !== "selectionchange" && (Ac.has(t) || mi(t, !1, e), mi(t, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ar] || ((n[Ar] = !0), mi("selectionchange", !1, n));
    }
  }
  function Wo(e, n, t, r) {
    switch (po(n)) {
      case 1:
        var l = rc;
        break;
      case 4:
        l = lc;
        break;
      default:
        l = ql;
    }
    (t = l.bind(null, n, t, e)),
      (l = void 0),
      !Wl ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(n, t, { capture: !0, passive: l })
          : e.addEventListener(n, t, !0)
        : l !== void 0
        ? e.addEventListener(n, t, { passive: l })
        : e.addEventListener(n, t, !1);
  }
  function vi(e, n, t, r, l) {
    var s = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var a = o.tag;
              if (
                (a === 3 || a === 4) &&
                ((a = o.stateNode.containerInfo),
                a === l || (a.nodeType === 8 && a.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; u !== null; ) {
            if (((o = bn(u)), o === null)) return;
            if (((a = o.tag), a === 5 || a === 6)) {
              r = s = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Ys(function () {
      var m = s,
        x = Ql(t),
        j = [];
      e: {
        var v = Bo.get(e);
        if (v !== void 0) {
          var N = ni,
            _ = e;
          switch (e) {
            case "keypress":
              if (Dr(t) === 0) break e;
            case "keydown":
            case "keyup":
              N = gc;
              break;
            case "focusin":
              (_ = "focus"), (N = li);
              break;
            case "focusout":
              (_ = "blur"), (N = li);
              break;
            case "beforeblur":
            case "afterblur":
              N = li;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = vo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = oc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = Sc;
              break;
            case Io:
            case Do:
            case Ho:
              N = cc;
              break;
            case Uo:
              N = Nc;
              break;
            case "scroll":
              N = ic;
              break;
            case "wheel":
              N = Ec;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = fc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = xo;
          }
          var L = (n & 4) !== 0,
            ae = !L && e === "scroll",
            f = L ? (v !== null ? v + "Capture" : null) : v;
          L = [];
          for (var c = m, h; c !== null; ) {
            h = c;
            var w = h.stateNode;
            if (
              (h.tag === 5 &&
                w !== null &&
                ((h = w),
                f !== null &&
                  ((w = Ut(c, f)), w != null && L.push(lr(c, w, h)))),
              ae)
            )
              break;
            c = c.return;
          }
          0 < L.length &&
            ((v = new N(v, _, null, t, x)), j.push({ event: v, listeners: L }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (N = e === "mouseout" || e === "pointerout"),
            v &&
              t !== Bl &&
              (_ = t.relatedTarget || t.fromElement) &&
              (bn(_) || _[Sn]))
          )
            break e;
          if (
            (N || v) &&
            ((v =
              x.window === x
                ? x
                : (v = x.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
            N
              ? ((_ = t.relatedTarget || t.toElement),
                (N = m),
                (_ = _ ? bn(_) : null),
                _ !== null &&
                  ((ae = qn(_)), _ !== ae || (_.tag !== 5 && _.tag !== 6)) &&
                  (_ = null))
              : ((N = null), (_ = m)),
            N !== _)
          ) {
            if (
              ((L = vo),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (c = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((L = xo),
                (w = "onPointerLeave"),
                (f = "onPointerEnter"),
                (c = "pointer")),
              (ae = N == null ? v : wt(N)),
              (h = _ == null ? v : wt(_)),
              (v = new L(w, c + "leave", N, t, x)),
              (v.target = ae),
              (v.relatedTarget = h),
              (w = null),
              bn(x) === m &&
                ((L = new L(f, c + "enter", _, t, x)),
                (L.target = h),
                (L.relatedTarget = ae),
                (w = L)),
              (ae = w),
              N && _)
            )
              n: {
                for (L = N, f = _, c = 0, h = L; h; h = gt(h)) c++;
                for (h = 0, w = f; w; w = gt(w)) h++;
                for (; 0 < c - h; ) (L = gt(L)), c--;
                for (; 0 < h - c; ) (f = gt(f)), h--;
                for (; c--; ) {
                  if (L === f || (f !== null && L === f.alternate)) break n;
                  (L = gt(L)), (f = gt(f));
                }
                L = null;
              }
            else L = null;
            N !== null && $o(j, v, N, L, !1),
              _ !== null && ae !== null && $o(j, ae, _, L, !0);
          }
        }
        e: {
          if (
            ((v = m ? wt(m) : window),
            (N = v.nodeName && v.nodeName.toLowerCase()),
            N === "select" || (N === "input" && v.type === "file"))
          )
            var T = Fc;
          else if (No(v))
            if (Eo) T = Dc;
            else {
              T = Oc;
              var P = Mc;
            }
          else
            (N = v.nodeName) &&
              N.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (T = Ic);
          if (T && (T = T(e, m))) {
            Co(j, T, t, x);
            break e;
          }
          P && P(e, v, m),
            e === "focusout" &&
              (P = v._wrapperState) &&
              P.controlled &&
              v.type === "number" &&
              Ol(v, "number", v.value);
        }
        switch (((P = m ? wt(m) : window), e)) {
          case "focusin":
            (No(P) || P.contentEditable === "true") &&
              ((yt = P), (ci = m), (nr = null));
            break;
          case "focusout":
            nr = ci = yt = null;
            break;
          case "mousedown":
            di = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (di = !1), Mo(j, t, x);
            break;
          case "selectionchange":
            if (Bc) break;
          case "keydown":
          case "keyup":
            Mo(j, t, x);
        }
        var z;
        if (si)
          e: {
            switch (e) {
              case "compositionstart":
                var M = "onCompositionStart";
                break e;
              case "compositionend":
                M = "onCompositionEnd";
                break e;
              case "compositionupdate":
                M = "onCompositionUpdate";
                break e;
            }
            M = void 0;
          }
        else
          vt
            ? So(e, t) && (M = "onCompositionEnd")
            : e === "keydown" &&
              t.keyCode === 229 &&
              (M = "onCompositionStart");
        M &&
          (go &&
            t.locale !== "ko" &&
            (vt || M !== "onCompositionStart"
              ? M === "onCompositionEnd" && vt && (z = ho())
              : ((In = x),
                (ei = "value" in In ? In.value : In.textContent),
                (vt = !0))),
          (P = Wr(m, M)),
          0 < P.length &&
            ((M = new yo(M, e, null, t, x)),
            j.push({ event: M, listeners: P }),
            z ? (M.data = z) : ((z = ko(t)), z !== null && (M.data = z)))),
          (z = Lc ? Tc(e, t) : Pc(e, t)) &&
            ((m = Wr(m, "onBeforeInput")),
            0 < m.length &&
              ((x = new yo("onBeforeInput", "beforeinput", null, t, x)),
              j.push({ event: x, listeners: m }),
              (x.data = z)));
      }
      Ao(j, n);
    });
  }
  function lr(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Wr(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e,
        s = l.stateNode;
      l.tag === 5 &&
        s !== null &&
        ((l = s),
        (s = Ut(e, t)),
        s != null && r.unshift(lr(e, s, l)),
        (s = Ut(e, n)),
        s != null && r.push(lr(e, s, l))),
        (e = e.return);
    }
    return r;
  }
  function gt(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function $o(e, n, t, r, l) {
    for (var s = n._reactName, o = []; t !== null && t !== r; ) {
      var u = t,
        a = u.alternate,
        m = u.stateNode;
      if (a !== null && a === r) break;
      u.tag === 5 &&
        m !== null &&
        ((u = m),
        l
          ? ((a = Ut(t, s)), a != null && o.unshift(lr(t, a, u)))
          : l || ((a = Ut(t, s)), a != null && o.push(lr(t, a, u)))),
        (t = t.return);
    }
    o.length !== 0 && e.push({ event: n, listeners: o });
  }
  var Wc = /\r\n?/g,
    $c = /\u0000|\uFFFD/g;
  function Ko(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Wc,
        `
`
      )
      .replace($c, "");
  }
  function $r(e, n, t) {
    if (((n = Ko(n)), Ko(e) !== n && t)) throw Error(p(425));
  }
  function Kr() {}
  var yi = null,
    xi = null;
  function gi(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ji = typeof setTimeout == "function" ? setTimeout : void 0,
    Kc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zo = typeof Promise == "function" ? Promise : void 0,
    Zc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zo < "u"
        ? function (e) {
            return Zo.resolve(null).then(e).catch(Yc);
          }
        : ji;
  function Yc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wi(e, n) {
    var t = n,
      r = 0;
    do {
      var l = t.nextSibling;
      if ((e.removeChild(t), l && l.nodeType === 8))
        if (((t = l.data), t === "/$")) {
          if (r === 0) {
            e.removeChild(l), Yt(n);
            return;
          }
          r--;
        } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
      t = l;
    } while (t);
    Yt(n);
  }
  function Hn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Yo(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var jt = Math.random().toString(36).slice(2),
    vn = "__reactFiber$" + jt,
    ir = "__reactProps$" + jt,
    Sn = "__reactContainer$" + jt,
    Si = "__reactEvents$" + jt,
    Gc = "__reactListeners$" + jt,
    Xc = "__reactHandles$" + jt;
  function bn(e) {
    var n = e[vn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if ((n = t[Sn] || t[vn])) {
        if (
          ((t = n.alternate),
          n.child !== null || (t !== null && t.child !== null))
        )
          for (e = Yo(e); e !== null; ) {
            if ((t = e[vn])) return t;
            e = Yo(e);
          }
        return n;
      }
      (e = t), (t = e.parentNode);
    }
    return null;
  }
  function sr(e) {
    return (
      (e = e[vn] || e[Sn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function wt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33));
  }
  function Zr(e) {
    return e[ir] || null;
  }
  var ki = [],
    St = -1;
  function Un(e) {
    return { current: e };
  }
  function X(e) {
    0 > St || ((e.current = ki[St]), (ki[St] = null), St--);
  }
  function Y(e, n) {
    St++, (ki[St] = e.current), (e.current = n);
  }
  var Bn = {},
    Ne = Un(Bn),
    Me = Un(!1),
    et = Bn;
  function kt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Bn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      s;
    for (s in t) l[s] = n[s];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Oe(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Yr() {
    X(Me), X(Ne);
  }
  function Go(e, n, t) {
    if (Ne.current !== Bn) throw Error(p(168));
    Y(Ne, n), Y(Me, t);
  }
  function Xo(e, n, t) {
    var r = e.stateNode;
    if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
      return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(p(108, Z(e) || "Unknown", l));
    return E({}, t, r);
  }
  function Gr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Bn),
      (et = Ne.current),
      Y(Ne, e),
      Y(Me, Me.current),
      !0
    );
  }
  function Jo(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    t
      ? ((e = Xo(e, n, et)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        X(Me),
        X(Ne),
        Y(Ne, e))
      : X(Me),
      Y(Me, t);
  }
  var kn = null,
    Xr = !1,
    Ni = !1;
  function qo(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  function Jc(e) {
    (Xr = !0), qo(e);
  }
  function Qn() {
    if (!Ni && kn !== null) {
      Ni = !0;
      var e = 0,
        n = $;
      try {
        var t = kn;
        for ($ = 1; e < t.length; e++) {
          var r = t[e];
          do r = r(!0);
          while (r !== null);
        }
        (kn = null), (Xr = !1);
      } catch (l) {
        throw (kn !== null && (kn = kn.slice(e + 1)), bs(Kl, Qn), l);
      } finally {
        ($ = n), (Ni = !1);
      }
    }
    return null;
  }
  var Nt = [],
    Ct = 0,
    Jr = null,
    qr = 0,
    Ge = [],
    Xe = 0,
    nt = null,
    Nn = 1,
    Cn = "";
  function tt(e, n) {
    (Nt[Ct++] = qr), (Nt[Ct++] = Jr), (Jr = e), (qr = n);
  }
  function bo(e, n, t) {
    (Ge[Xe++] = Nn), (Ge[Xe++] = Cn), (Ge[Xe++] = nt), (nt = e);
    var r = Nn;
    e = Cn;
    var l = 32 - ln(r) - 1;
    (r &= ~(1 << l)), (t += 1);
    var s = 32 - ln(n) + l;
    if (30 < s) {
      var o = l - (l % 5);
      (s = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (Nn = (1 << (32 - ln(n) + l)) | (t << l) | r),
        (Cn = s + e);
    } else (Nn = (1 << s) | (t << l) | r), (Cn = e);
  }
  function Ci(e) {
    e.return !== null && (tt(e, 1), bo(e, 1, 0));
  }
  function Ei(e) {
    for (; e === Jr; )
      (Jr = Nt[--Ct]), (Nt[Ct] = null), (qr = Nt[--Ct]), (Nt[Ct] = null);
    for (; e === nt; )
      (nt = Ge[--Xe]),
        (Ge[Xe] = null),
        (Cn = Ge[--Xe]),
        (Ge[Xe] = null),
        (Nn = Ge[--Xe]),
        (Ge[Xe] = null);
  }
  var Ae = null,
    We = null,
    ee = !1,
    on = null;
  function eu(e, n) {
    var t = en(5, null, null, 0);
    (t.elementType = "DELETED"),
      (t.stateNode = n),
      (t.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
  }
  function nu(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return (
          (n =
            n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (Ae = e), (We = Hn(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (Ae = e), (We = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((t = nt !== null ? { id: Nn, overflow: Cn } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: t,
                retryLane: 1073741824,
              }),
              (t = en(18, null, null, 0)),
              (t.stateNode = n),
              (t.return = e),
              (e.child = t),
              (Ae = e),
              (We = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function _i(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Li(e) {
    if (ee) {
      var n = We;
      if (n) {
        var t = n;
        if (!nu(e, n)) {
          if (_i(e)) throw Error(p(418));
          n = Hn(t.nextSibling);
          var r = Ae;
          n && nu(e, n)
            ? eu(r, t)
            : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ae = e));
        }
      } else {
        if (_i(e)) throw Error(p(418));
        (e.flags = (e.flags & -4097) | 2), (ee = !1), (Ae = e);
      }
    }
  }
  function tu(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ae = e;
  }
  function br(e) {
    if (e !== Ae) return !1;
    if (!ee) return tu(e), (ee = !0), !1;
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== "head" && n !== "body" && !gi(e.type, e.memoizedProps))),
      n && (n = We))
    ) {
      if (_i(e)) throw (ru(), Error(p(418)));
      for (; n; ) eu(e, n), (n = Hn(n.nextSibling));
    }
    if ((tu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(p(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                We = Hn(e.nextSibling);
                break e;
              }
              n--;
            } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
          }
          e = e.nextSibling;
        }
        We = null;
      }
    } else We = Ae ? Hn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ru() {
    for (var e = We; e; ) e = Hn(e.nextSibling);
  }
  function Et() {
    (We = Ae = null), (ee = !1);
  }
  function Ti(e) {
    on === null ? (on = [e]) : on.push(e);
  }
  var qc = ke.ReactCurrentBatchConfig;
  function or(e, n, t) {
    if (
      ((e = t.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (t._owner) {
        if (((t = t._owner), t)) {
          if (t.tag !== 1) throw Error(p(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(p(147, e));
        var l = r,
          s = "" + e;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == "function" &&
          n.ref._stringRef === s
          ? n.ref
          : ((n = function (o) {
              var u = l.refs;
              o === null ? delete u[s] : (u[s] = o);
            }),
            (n._stringRef = s),
            n);
      }
      if (typeof e != "string") throw Error(p(284));
      if (!t._owner) throw Error(p(290, e));
    }
    return e;
  }
  function el(e, n) {
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        p(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function lu(e) {
    var n = e._init;
    return n(e._payload);
  }
  function iu(e) {
    function n(f, c) {
      if (e) {
        var h = f.deletions;
        h === null ? ((f.deletions = [c]), (f.flags |= 16)) : h.push(c);
      }
    }
    function t(f, c) {
      if (!e) return null;
      for (; c !== null; ) n(f, c), (c = c.sibling);
      return null;
    }
    function r(f, c) {
      for (f = new Map(); c !== null; )
        c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
      return f;
    }
    function l(f, c) {
      return (f = Gn(f, c)), (f.index = 0), (f.sibling = null), f;
    }
    function s(f, c, h) {
      return (
        (f.index = h),
        e
          ? ((h = f.alternate),
            h !== null
              ? ((h = h.index), h < c ? ((f.flags |= 2), c) : h)
              : ((f.flags |= 2), c))
          : ((f.flags |= 1048576), c)
      );
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, c, h, w) {
      return c === null || c.tag !== 6
        ? ((c = js(h, f.mode, w)), (c.return = f), c)
        : ((c = l(c, h)), (c.return = f), c);
    }
    function a(f, c, h, w) {
      var T = h.type;
      return T === Re
        ? x(f, c, h.props.children, w, h.key)
        : c !== null &&
          (c.elementType === T ||
            (typeof T == "object" &&
              T !== null &&
              T.$$typeof === Fe &&
              lu(T) === c.type))
        ? ((w = l(c, h.props)), (w.ref = or(f, c, h)), (w.return = f), w)
        : ((w = Nl(h.type, h.key, h.props, null, f.mode, w)),
          (w.ref = or(f, c, h)),
          (w.return = f),
          w);
    }
    function m(f, c, h, w) {
      return c === null ||
        c.tag !== 4 ||
        c.stateNode.containerInfo !== h.containerInfo ||
        c.stateNode.implementation !== h.implementation
        ? ((c = ws(h, f.mode, w)), (c.return = f), c)
        : ((c = l(c, h.children || [])), (c.return = f), c);
    }
    function x(f, c, h, w, T) {
      return c === null || c.tag !== 7
        ? ((c = ct(h, f.mode, w, T)), (c.return = f), c)
        : ((c = l(c, h)), (c.return = f), c);
    }
    function j(f, c, h) {
      if ((typeof c == "string" && c !== "") || typeof c == "number")
        return (c = js("" + c, f.mode, h)), (c.return = f), c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case tn:
            return (
              (h = Nl(c.type, c.key, c.props, null, f.mode, h)),
              (h.ref = or(f, null, c)),
              (h.return = f),
              h
            );
          case Le:
            return (c = ws(c, f.mode, h)), (c.return = f), c;
          case Fe:
            var w = c._init;
            return j(f, w(c._payload), h);
        }
        if (It(c) || F(c))
          return (c = ct(c, f.mode, h, null)), (c.return = f), c;
        el(f, c);
      }
      return null;
    }
    function v(f, c, h, w) {
      var T = c !== null ? c.key : null;
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return T !== null ? null : u(f, c, "" + h, w);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case tn:
            return h.key === T ? a(f, c, h, w) : null;
          case Le:
            return h.key === T ? m(f, c, h, w) : null;
          case Fe:
            return (T = h._init), v(f, c, T(h._payload), w);
        }
        if (It(h) || F(h)) return T !== null ? null : x(f, c, h, w, null);
        el(f, h);
      }
      return null;
    }
    function N(f, c, h, w, T) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (f = f.get(h) || null), u(c, f, "" + w, T);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case tn:
            return (
              (f = f.get(w.key === null ? h : w.key) || null), a(c, f, w, T)
            );
          case Le:
            return (
              (f = f.get(w.key === null ? h : w.key) || null), m(c, f, w, T)
            );
          case Fe:
            var P = w._init;
            return N(f, c, h, P(w._payload), T);
        }
        if (It(w) || F(w)) return (f = f.get(h) || null), x(c, f, w, T, null);
        el(c, w);
      }
      return null;
    }
    function _(f, c, h, w) {
      for (
        var T = null, P = null, z = c, M = (c = 0), je = null;
        z !== null && M < h.length;
        M++
      ) {
        z.index > M ? ((je = z), (z = null)) : (je = z.sibling);
        var V = v(f, z, h[M], w);
        if (V === null) {
          z === null && (z = je);
          break;
        }
        e && z && V.alternate === null && n(f, z),
          (c = s(V, c, M)),
          P === null ? (T = V) : (P.sibling = V),
          (P = V),
          (z = je);
      }
      if (M === h.length) return t(f, z), ee && tt(f, M), T;
      if (z === null) {
        for (; M < h.length; M++)
          (z = j(f, h[M], w)),
            z !== null &&
              ((c = s(z, c, M)),
              P === null ? (T = z) : (P.sibling = z),
              (P = z));
        return ee && tt(f, M), T;
      }
      for (z = r(f, z); M < h.length; M++)
        (je = N(z, f, M, h[M], w)),
          je !== null &&
            (e &&
              je.alternate !== null &&
              z.delete(je.key === null ? M : je.key),
            (c = s(je, c, M)),
            P === null ? (T = je) : (P.sibling = je),
            (P = je));
      return (
        e &&
          z.forEach(function (Xn) {
            return n(f, Xn);
          }),
        ee && tt(f, M),
        T
      );
    }
    function L(f, c, h, w) {
      var T = F(h);
      if (typeof T != "function") throw Error(p(150));
      if (((h = T.call(h)), h == null)) throw Error(p(151));
      for (
        var P = (T = null), z = c, M = (c = 0), je = null, V = h.next();
        z !== null && !V.done;
        M++, V = h.next()
      ) {
        z.index > M ? ((je = z), (z = null)) : (je = z.sibling);
        var Xn = v(f, z, V.value, w);
        if (Xn === null) {
          z === null && (z = je);
          break;
        }
        e && z && Xn.alternate === null && n(f, z),
          (c = s(Xn, c, M)),
          P === null ? (T = Xn) : (P.sibling = Xn),
          (P = Xn),
          (z = je);
      }
      if (V.done) return t(f, z), ee && tt(f, M), T;
      if (z === null) {
        for (; !V.done; M++, V = h.next())
          (V = j(f, V.value, w)),
            V !== null &&
              ((c = s(V, c, M)),
              P === null ? (T = V) : (P.sibling = V),
              (P = V));
        return ee && tt(f, M), T;
      }
      for (z = r(f, z); !V.done; M++, V = h.next())
        (V = N(z, f, M, V.value, w)),
          V !== null &&
            (e && V.alternate !== null && z.delete(V.key === null ? M : V.key),
            (c = s(V, c, M)),
            P === null ? (T = V) : (P.sibling = V),
            (P = V));
      return (
        e &&
          z.forEach(function (Pd) {
            return n(f, Pd);
          }),
        ee && tt(f, M),
        T
      );
    }
    function ae(f, c, h, w) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === Re &&
          h.key === null &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case tn:
            e: {
              for (var T = h.key, P = c; P !== null; ) {
                if (P.key === T) {
                  if (((T = h.type), T === Re)) {
                    if (P.tag === 7) {
                      t(f, P.sibling),
                        (c = l(P, h.props.children)),
                        (c.return = f),
                        (f = c);
                      break e;
                    }
                  } else if (
                    P.elementType === T ||
                    (typeof T == "object" &&
                      T !== null &&
                      T.$$typeof === Fe &&
                      lu(T) === P.type)
                  ) {
                    t(f, P.sibling),
                      (c = l(P, h.props)),
                      (c.ref = or(f, P, h)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                  t(f, P);
                  break;
                } else n(f, P);
                P = P.sibling;
              }
              h.type === Re
                ? ((c = ct(h.props.children, f.mode, w, h.key)),
                  (c.return = f),
                  (f = c))
                : ((w = Nl(h.type, h.key, h.props, null, f.mode, w)),
                  (w.ref = or(f, c, h)),
                  (w.return = f),
                  (f = w));
            }
            return o(f);
          case Le:
            e: {
              for (P = h.key; c !== null; ) {
                if (c.key === P)
                  if (
                    c.tag === 4 &&
                    c.stateNode.containerInfo === h.containerInfo &&
                    c.stateNode.implementation === h.implementation
                  ) {
                    t(f, c.sibling),
                      (c = l(c, h.children || [])),
                      (c.return = f),
                      (f = c);
                    break e;
                  } else {
                    t(f, c);
                    break;
                  }
                else n(f, c);
                c = c.sibling;
              }
              (c = ws(h, f.mode, w)), (c.return = f), (f = c);
            }
            return o(f);
          case Fe:
            return (P = h._init), ae(f, c, P(h._payload), w);
        }
        if (It(h)) return _(f, c, h, w);
        if (F(h)) return L(f, c, h, w);
        el(f, h);
      }
      return (typeof h == "string" && h !== "") || typeof h == "number"
        ? ((h = "" + h),
          c !== null && c.tag === 6
            ? (t(f, c.sibling), (c = l(c, h)), (c.return = f), (f = c))
            : (t(f, c), (c = js(h, f.mode, w)), (c.return = f), (f = c)),
          o(f))
        : t(f, c);
    }
    return ae;
  }
  var _t = iu(!0),
    su = iu(!1),
    nl = Un(null),
    tl = null,
    Lt = null,
    Pi = null;
  function zi() {
    Pi = Lt = tl = null;
  }
  function Ri(e) {
    var n = nl.current;
    X(nl), (e._currentValue = n);
  }
  function Fi(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
          : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
        e === t)
      )
        break;
      e = e.return;
    }
  }
  function Tt(e, n) {
    (tl = e),
      (Pi = Lt = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & n && (Ie = !0), (e.firstContext = null));
  }
  function Je(e) {
    var n = e._currentValue;
    if (Pi !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), Lt === null)) {
        if (tl === null) throw Error(p(308));
        (Lt = e), (tl.dependencies = { lanes: 0, firstContext: e });
      } else Lt = Lt.next = e;
    return n;
  }
  var rt = null;
  function Mi(e) {
    rt === null ? (rt = [e]) : rt.push(e);
  }
  function ou(e, n, t, r) {
    var l = n.interleaved;
    return (
      l === null ? ((t.next = t), Mi(n)) : ((t.next = l.next), (l.next = t)),
      (n.interleaved = t),
      En(e, r)
    );
  }
  function En(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      (e.childLanes |= n),
        (t = e.alternate),
        t !== null && (t.childLanes |= n),
        (t = e),
        (e = e.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Vn = !1;
  function Oi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function uu(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function _n(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function An(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), U & 2)) {
      var l = r.pending;
      return (
        l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
        (r.pending = n),
        En(e, t)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((n.next = n), Mi(r)) : ((n.next = l.next), (l.next = n)),
      (r.interleaved = n),
      En(e, t)
    );
  }
  function rl(e, n, t) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
    ) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Gl(e, t);
    }
  }
  function au(e, n) {
    var t = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), t === r)) {
      var l = null,
        s = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var o = {
            eventTime: t.eventTime,
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: t.callback,
            next: null,
          };
          s === null ? (l = s = o) : (s = s.next = o), (t = t.next);
        } while (t !== null);
        s === null ? (l = s = n) : (s = s.next = n);
      } else l = s = n;
      (t = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: s,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = t);
      return;
    }
    (e = t.lastBaseUpdate),
      e === null ? (t.firstBaseUpdate = n) : (e.next = n),
      (t.lastBaseUpdate = n);
  }
  function ll(e, n, t, r) {
    var l = e.updateQueue;
    Vn = !1;
    var s = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var a = u,
        m = a.next;
      (a.next = null), o === null ? (s = m) : (o.next = m), (o = a);
      var x = e.alternate;
      x !== null &&
        ((x = x.updateQueue),
        (u = x.lastBaseUpdate),
        u !== o &&
          (u === null ? (x.firstBaseUpdate = m) : (u.next = m),
          (x.lastBaseUpdate = a)));
    }
    if (s !== null) {
      var j = l.baseState;
      (o = 0), (x = m = a = null), (u = s);
      do {
        var v = u.lane,
          N = u.eventTime;
        if ((r & v) === v) {
          x !== null &&
            (x = x.next =
              {
                eventTime: N,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var _ = e,
              L = u;
            switch (((v = n), (N = t), L.tag)) {
              case 1:
                if (((_ = L.payload), typeof _ == "function")) {
                  j = _.call(N, j, v);
                  break e;
                }
                j = _;
                break e;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = L.payload),
                  (v = typeof _ == "function" ? _.call(N, j, v) : _),
                  v == null)
                )
                  break e;
                j = E({}, j, v);
                break e;
              case 2:
                Vn = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64),
            (v = l.effects),
            v === null ? (l.effects = [u]) : v.push(u));
        } else
          (N = {
            eventTime: N,
            lane: v,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            x === null ? ((m = x = N), (a = j)) : (x = x.next = N),
            (o |= v);
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          (v = u),
            (u = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (x === null && (a = j),
        (l.baseState = a),
        (l.firstBaseUpdate = m),
        (l.lastBaseUpdate = x),
        (n = l.shared.interleaved),
        n !== null)
      ) {
        l = n;
        do (o |= l.lane), (l = l.next);
        while (l !== n);
      } else s === null && (l.shared.lanes = 0);
      (st |= o), (e.lanes = o), (e.memoizedState = j);
    }
  }
  function cu(e, n, t) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var r = e[n],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = t), typeof l != "function"))
            throw Error(p(191, l));
          l.call(r);
        }
      }
  }
  var ur = {},
    yn = Un(ur),
    ar = Un(ur),
    cr = Un(ur);
  function lt(e) {
    if (e === ur) throw Error(p(174));
    return e;
  }
  function Ii(e, n) {
    switch ((Y(cr, n), Y(ar, e), Y(yn, ur), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Dl(null, "");
        break;
      default:
        (e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Dl(n, e));
    }
    X(yn), Y(yn, n);
  }
  function Pt() {
    X(yn), X(ar), X(cr);
  }
  function du(e) {
    lt(cr.current);
    var n = lt(yn.current),
      t = Dl(n, e.type);
    n !== t && (Y(ar, e), Y(yn, t));
  }
  function Di(e) {
    ar.current === e && (X(yn), X(ar));
  }
  var te = Un(0);
  function il(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (
          t !== null &&
          ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Hi = [];
  function Ui() {
    for (var e = 0; e < Hi.length; e++)
      Hi[e]._workInProgressVersionPrimary = null;
    Hi.length = 0;
  }
  var sl = ke.ReactCurrentDispatcher,
    Bi = ke.ReactCurrentBatchConfig,
    it = 0,
    re = null,
    he = null,
    xe = null,
    ol = !1,
    dr = !1,
    fr = 0,
    bc = 0;
  function Ce() {
    throw Error(p(321));
  }
  function Qi(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!sn(e[t], n[t])) return !1;
    return !0;
  }
  function Vi(e, n, t, r, l, s) {
    if (
      ((it = s),
      (re = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (sl.current = e === null || e.memoizedState === null ? rd : ld),
      (e = t(r, l)),
      dr)
    ) {
      s = 0;
      do {
        if (((dr = !1), (fr = 0), 25 <= s)) throw Error(p(301));
        (s += 1),
          (xe = he = null),
          (n.updateQueue = null),
          (sl.current = id),
          (e = t(r, l));
      } while (dr);
    }
    if (
      ((sl.current = cl),
      (n = he !== null && he.next !== null),
      (it = 0),
      (xe = he = re = null),
      (ol = !1),
      n)
    )
      throw Error(p(300));
    return e;
  }
  function Ai() {
    var e = fr !== 0;
    return (fr = 0), e;
  }
  function xn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return xe === null ? (re.memoizedState = xe = e) : (xe = xe.next = e), xe;
  }
  function qe() {
    if (he === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = he.next;
    var n = xe === null ? re.memoizedState : xe.next;
    if (n !== null) (xe = n), (he = e);
    else {
      if (e === null) throw Error(p(310));
      (he = e),
        (e = {
          memoizedState: he.memoizedState,
          baseState: he.baseState,
          baseQueue: he.baseQueue,
          queue: he.queue,
          next: null,
        }),
        xe === null ? (re.memoizedState = xe = e) : (xe = xe.next = e);
    }
    return xe;
  }
  function pr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Wi(e) {
    var n = qe(),
      t = n.queue;
    if (t === null) throw Error(p(311));
    t.lastRenderedReducer = e;
    var r = he,
      l = r.baseQueue,
      s = t.pending;
    if (s !== null) {
      if (l !== null) {
        var o = l.next;
        (l.next = s.next), (s.next = o);
      }
      (r.baseQueue = l = s), (t.pending = null);
    }
    if (l !== null) {
      (s = l.next), (r = r.baseState);
      var u = (o = null),
        a = null,
        m = s;
      do {
        var x = m.lane;
        if ((it & x) === x)
          a !== null &&
            (a = a.next =
              {
                lane: 0,
                action: m.action,
                hasEagerState: m.hasEagerState,
                eagerState: m.eagerState,
                next: null,
              }),
            (r = m.hasEagerState ? m.eagerState : e(r, m.action));
        else {
          var j = {
            lane: x,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          };
          a === null ? ((u = a = j), (o = r)) : (a = a.next = j),
            (re.lanes |= x),
            (st |= x);
        }
        m = m.next;
      } while (m !== null && m !== s);
      a === null ? (o = r) : (a.next = u),
        sn(r, n.memoizedState) || (Ie = !0),
        (n.memoizedState = r),
        (n.baseState = o),
        (n.baseQueue = a),
        (t.lastRenderedState = r);
    }
    if (((e = t.interleaved), e !== null)) {
      l = e;
      do (s = l.lane), (re.lanes |= s), (st |= s), (l = l.next);
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function $i(e) {
    var n = qe(),
      t = n.queue;
    if (t === null) throw Error(p(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
      l = t.pending,
      s = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var o = (l = l.next);
      do (s = e(s, o.action)), (o = o.next);
      while (o !== l);
      sn(s, n.memoizedState) || (Ie = !0),
        (n.memoizedState = s),
        n.baseQueue === null && (n.baseState = s),
        (t.lastRenderedState = s);
    }
    return [s, r];
  }
  function fu() {}
  function pu(e, n) {
    var t = re,
      r = qe(),
      l = n(),
      s = !sn(r.memoizedState, l);
    if (
      (s && ((r.memoizedState = l), (Ie = !0)),
      (r = r.queue),
      Ki(vu.bind(null, t, r, e), [e]),
      r.getSnapshot !== n || s || (xe !== null && xe.memoizedState.tag & 1))
    ) {
      if (
        ((t.flags |= 2048),
        hr(9, mu.bind(null, t, r, l, n), void 0, null),
        ge === null)
      )
        throw Error(p(349));
      it & 30 || hu(t, n, l);
    }
    return l;
  }
  function hu(e, n, t) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: t }),
      (n = re.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (re.updateQueue = n),
          (n.stores = [e]))
        : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
  }
  function mu(e, n, t, r) {
    (n.value = t), (n.getSnapshot = r), yu(n) && xu(e);
  }
  function vu(e, n, t) {
    return t(function () {
      yu(n) && xu(e);
    });
  }
  function yu(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !sn(e, t);
    } catch {
      return !0;
    }
  }
  function xu(e) {
    var n = En(e, 1);
    n !== null && dn(n, e, 1, -1);
  }
  function gu(e) {
    var n = xn();
    return (
      typeof e == "function" && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pr,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = td.bind(null, re, e)),
      [n.memoizedState, e]
    );
  }
  function hr(e, n, t, r) {
    return (
      (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
      (n = re.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (re.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((t = n.lastEffect),
          t === null
            ? (n.lastEffect = e.next = e)
            : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
      e
    );
  }
  function ju() {
    return qe().memoizedState;
  }
  function ul(e, n, t, r) {
    var l = xn();
    (re.flags |= e),
      (l.memoizedState = hr(1 | n, t, void 0, r === void 0 ? null : r));
  }
  function al(e, n, t, r) {
    var l = qe();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (he !== null) {
      var o = he.memoizedState;
      if (((s = o.destroy), r !== null && Qi(r, o.deps))) {
        l.memoizedState = hr(n, t, s, r);
        return;
      }
    }
    (re.flags |= e), (l.memoizedState = hr(1 | n, t, s, r));
  }
  function wu(e, n) {
    return ul(8390656, 8, e, n);
  }
  function Ki(e, n) {
    return al(2048, 8, e, n);
  }
  function Su(e, n) {
    return al(4, 2, e, n);
  }
  function ku(e, n) {
    return al(4, 4, e, n);
  }
  function Nu(e, n) {
    if (typeof n == "function")
      return (
        (e = e()),
        n(e),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function Cu(e, n, t) {
    return (
      (t = t != null ? t.concat([e]) : null), al(4, 4, Nu.bind(null, n, e), t)
    );
  }
  function Zi() {}
  function Eu(e, n) {
    var t = qe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Qi(n, r[1])
      ? r[0]
      : ((t.memoizedState = [e, n]), e);
  }
  function _u(e, n) {
    var t = qe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Qi(n, r[1])
      ? r[0]
      : ((e = e()), (t.memoizedState = [e, n]), e);
  }
  function Lu(e, n, t) {
    return it & 21
      ? (sn(t, n) ||
          ((t = ro()), (re.lanes |= t), (st |= t), (e.baseState = !0)),
        n)
      : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = t));
  }
  function ed(e, n) {
    var t = $;
    ($ = t !== 0 && 4 > t ? t : 4), e(!0);
    var r = Bi.transition;
    Bi.transition = {};
    try {
      e(!1), n();
    } finally {
      ($ = t), (Bi.transition = r);
    }
  }
  function Tu() {
    return qe().memoizedState;
  }
  function nd(e, n, t) {
    var r = Zn(e);
    if (
      ((t = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Pu(e))
    )
      zu(n, t);
    else if (((t = ou(e, n, t, r)), t !== null)) {
      var l = Pe();
      dn(t, e, r, l), Ru(t, n, r);
    }
  }
  function td(e, n, t) {
    var r = Zn(e),
      l = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Pu(e)) zu(n, l);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = n.lastRenderedReducer), s !== null)
      )
        try {
          var o = n.lastRenderedState,
            u = s(o, t);
          if (((l.hasEagerState = !0), (l.eagerState = u), sn(u, o))) {
            var a = n.interleaved;
            a === null
              ? ((l.next = l), Mi(n))
              : ((l.next = a.next), (a.next = l)),
              (n.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (t = ou(e, n, l, r)),
        t !== null && ((l = Pe()), dn(t, e, r, l), Ru(t, n, r));
    }
  }
  function Pu(e) {
    var n = e.alternate;
    return e === re || (n !== null && n === re);
  }
  function zu(e, n) {
    dr = ol = !0;
    var t = e.pending;
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
      (e.pending = n);
  }
  function Ru(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Gl(e, t);
    }
  }
  var cl = {
      readContext: Je,
      useCallback: Ce,
      useContext: Ce,
      useEffect: Ce,
      useImperativeHandle: Ce,
      useInsertionEffect: Ce,
      useLayoutEffect: Ce,
      useMemo: Ce,
      useReducer: Ce,
      useRef: Ce,
      useState: Ce,
      useDebugValue: Ce,
      useDeferredValue: Ce,
      useTransition: Ce,
      useMutableSource: Ce,
      useSyncExternalStore: Ce,
      useId: Ce,
      unstable_isNewReconciler: !1,
    },
    rd = {
      readContext: Je,
      useCallback: function (e, n) {
        return (xn().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: Je,
      useEffect: wu,
      useImperativeHandle: function (e, n, t) {
        return (
          (t = t != null ? t.concat([e]) : null),
          ul(4194308, 4, Nu.bind(null, n, e), t)
        );
      },
      useLayoutEffect: function (e, n) {
        return ul(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return ul(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var t = xn();
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (t.memoizedState = [e, n]),
          e
        );
      },
      useReducer: function (e, n, t) {
        var r = xn();
        return (
          (n = t !== void 0 ? t(n) : n),
          (r.memoizedState = r.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (r.queue = e),
          (e = e.dispatch = nd.bind(null, re, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = xn();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: gu,
      useDebugValue: Zi,
      useDeferredValue: function (e) {
        return (xn().memoizedState = e);
      },
      useTransition: function () {
        var e = gu(!1),
          n = e[0];
        return (e = ed.bind(null, e[1])), (xn().memoizedState = e), [n, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, t) {
        var r = re,
          l = xn();
        if (ee) {
          if (t === void 0) throw Error(p(407));
          t = t();
        } else {
          if (((t = n()), ge === null)) throw Error(p(349));
          it & 30 || hu(r, n, t);
        }
        l.memoizedState = t;
        var s = { value: t, getSnapshot: n };
        return (
          (l.queue = s),
          wu(vu.bind(null, r, s, e), [e]),
          (r.flags |= 2048),
          hr(9, mu.bind(null, r, s, t, n), void 0, null),
          t
        );
      },
      useId: function () {
        var e = xn(),
          n = ge.identifierPrefix;
        if (ee) {
          var t = Cn,
            r = Nn;
          (t = (r & ~(1 << (32 - ln(r) - 1))).toString(32) + t),
            (n = ":" + n + "R" + t),
            (t = fr++),
            0 < t && (n += "H" + t.toString(32)),
            (n += ":");
        } else (t = bc++), (n = ":" + n + "r" + t.toString(32) + ":");
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    ld = {
      readContext: Je,
      useCallback: Eu,
      useContext: Je,
      useEffect: Ki,
      useImperativeHandle: Cu,
      useInsertionEffect: Su,
      useLayoutEffect: ku,
      useMemo: _u,
      useReducer: Wi,
      useRef: ju,
      useState: function () {
        return Wi(pr);
      },
      useDebugValue: Zi,
      useDeferredValue: function (e) {
        var n = qe();
        return Lu(n, he.memoizedState, e);
      },
      useTransition: function () {
        var e = Wi(pr)[0],
          n = qe().memoizedState;
        return [e, n];
      },
      useMutableSource: fu,
      useSyncExternalStore: pu,
      useId: Tu,
      unstable_isNewReconciler: !1,
    },
    id = {
      readContext: Je,
      useCallback: Eu,
      useContext: Je,
      useEffect: Ki,
      useImperativeHandle: Cu,
      useInsertionEffect: Su,
      useLayoutEffect: ku,
      useMemo: _u,
      useReducer: $i,
      useRef: ju,
      useState: function () {
        return $i(pr);
      },
      useDebugValue: Zi,
      useDeferredValue: function (e) {
        var n = qe();
        return he === null ? (n.memoizedState = e) : Lu(n, he.memoizedState, e);
      },
      useTransition: function () {
        var e = $i(pr)[0],
          n = qe().memoizedState;
        return [e, n];
      },
      useMutableSource: fu,
      useSyncExternalStore: pu,
      useId: Tu,
      unstable_isNewReconciler: !1,
    };
  function un(e, n) {
    if (e && e.defaultProps) {
      (n = E({}, n)), (e = e.defaultProps);
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Yi(e, n, t, r) {
    (n = e.memoizedState),
      (t = t(r, n)),
      (t = t == null ? n : E({}, n, t)),
      (e.memoizedState = t),
      e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var dl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? qn(e) === e : !1;
    },
    enqueueSetState: function (e, n, t) {
      e = e._reactInternals;
      var r = Pe(),
        l = Zn(e),
        s = _n(r, l);
      (s.payload = n),
        t != null && (s.callback = t),
        (n = An(e, s, l)),
        n !== null && (dn(n, e, l, r), rl(n, e, l));
    },
    enqueueReplaceState: function (e, n, t) {
      e = e._reactInternals;
      var r = Pe(),
        l = Zn(e),
        s = _n(r, l);
      (s.tag = 1),
        (s.payload = n),
        t != null && (s.callback = t),
        (n = An(e, s, l)),
        n !== null && (dn(n, e, l, r), rl(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var t = Pe(),
        r = Zn(e),
        l = _n(t, r);
      (l.tag = 2),
        n != null && (l.callback = n),
        (n = An(e, l, r)),
        n !== null && (dn(n, e, r, t), rl(n, e, r));
    },
  };
  function Fu(e, n, t, r, l, s, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, s, o)
        : n.prototype && n.prototype.isPureReactComponent
        ? !er(t, r) || !er(l, s)
        : !0
    );
  }
  function Mu(e, n, t) {
    var r = !1,
      l = Bn,
      s = n.contextType;
    return (
      typeof s == "object" && s !== null
        ? (s = Je(s))
        : ((l = Oe(n) ? et : Ne.current),
          (r = n.contextTypes),
          (s = (r = r != null) ? kt(e, l) : Bn)),
      (n = new n(t, s)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = dl),
      (e.stateNode = n),
      (n._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      n
    );
  }
  function Ou(e, n, t, r) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(t, r),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(t, r),
      n.state !== e && dl.enqueueReplaceState(n, n.state, null);
  }
  function Gi(e, n, t, r) {
    var l = e.stateNode;
    (l.props = t), (l.state = e.memoizedState), (l.refs = {}), Oi(e);
    var s = n.contextType;
    typeof s == "object" && s !== null
      ? (l.context = Je(s))
      : ((s = Oe(n) ? et : Ne.current), (l.context = kt(e, s))),
      (l.state = e.memoizedState),
      (s = n.getDerivedStateFromProps),
      typeof s == "function" && (Yi(e, n, s, t), (l.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((n = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        n !== l.state && dl.enqueueReplaceState(l, l.state, null),
        ll(e, t, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zt(e, n) {
    try {
      var t = "",
        r = n;
      do (t += B(r)), (r = r.return);
      while (r);
      var l = t;
    } catch (s) {
      l =
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Xi(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Ji(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }
  }
  var sd = typeof WeakMap == "function" ? WeakMap : Map;
  function Iu(e, n, t) {
    (t = _n(-1, t)), (t.tag = 3), (t.payload = { element: null });
    var r = n.value;
    return (
      (t.callback = function () {
        xl || ((xl = !0), (fs = r)), Ji(e, n);
      }),
      t
    );
  }
  function Du(e, n, t) {
    (t = _n(-1, t)), (t.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      (t.payload = function () {
        return r(l);
      }),
        (t.callback = function () {
          Ji(e, n);
        });
    }
    var s = e.stateNode;
    return (
      s !== null &&
        typeof s.componentDidCatch == "function" &&
        (t.callback = function () {
          Ji(e, n),
            typeof r != "function" &&
              ($n === null ? ($n = new Set([this])) : $n.add(this));
          var o = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      t
    );
  }
  function Hu(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new sd();
      var l = new Set();
      r.set(n, l);
    } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
    l.has(t) || (l.add(t), (e = jd.bind(null, e, n, t)), n.then(e, e));
  }
  function Uu(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Bu(e, n, t, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (t.flags |= 131072),
            (t.flags &= -52805),
            t.tag === 1 &&
              (t.alternate === null
                ? (t.tag = 17)
                : ((n = _n(-1, 1)), (n.tag = 2), An(t, n, 1))),
            (t.lanes |= 1)),
        e);
  }
  var od = ke.ReactCurrentOwner,
    Ie = !1;
  function Te(e, n, t, r) {
    n.child = e === null ? su(n, null, t, r) : _t(n, e.child, t, r);
  }
  function Qu(e, n, t, r, l) {
    t = t.render;
    var s = n.ref;
    return (
      Tt(n, l),
      (r = Vi(e, n, t, r, s, l)),
      (t = Ai()),
      e !== null && !Ie
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          Ln(e, n, l))
        : (ee && t && Ci(n), (n.flags |= 1), Te(e, n, r, l), n.child)
    );
  }
  function Vu(e, n, t, r, l) {
    if (e === null) {
      var s = t.type;
      return typeof s == "function" &&
        !gs(s) &&
        s.defaultProps === void 0 &&
        t.compare === null &&
        t.defaultProps === void 0
        ? ((n.tag = 15), (n.type = s), Au(e, n, s, r, l))
        : ((e = Nl(t.type, null, r, n, n.mode, l)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((s = e.child), !(e.lanes & l))) {
      var o = s.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : er), t(o, r) && e.ref === n.ref)
      )
        return Ln(e, n, l);
    }
    return (
      (n.flags |= 1),
      (e = Gn(s, r)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Au(e, n, t, r, l) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (er(s, r) && e.ref === n.ref)
        if (((Ie = !1), (n.pendingProps = r = s), (e.lanes & l) !== 0))
          e.flags & 131072 && (Ie = !0);
        else return (n.lanes = e.lanes), Ln(e, n, l);
    }
    return qi(e, n, t, r, l);
  }
  function Wu(e, n, t) {
    var r = n.pendingProps,
      l = r.children,
      s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Y(Ft, $e),
          ($e |= t);
      else {
        if (!(t & 1073741824))
          return (
            (e = s !== null ? s.baseLanes | t : t),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            Y(Ft, $e),
            ($e |= e),
            null
          );
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = s !== null ? s.baseLanes : t),
          Y(Ft, $e),
          ($e |= r);
      }
    else
      s !== null ? ((r = s.baseLanes | t), (n.memoizedState = null)) : (r = t),
        Y(Ft, $e),
        ($e |= r);
    return Te(e, n, l, t), n.child;
  }
  function $u(e, n) {
    var t = n.ref;
    ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function qi(e, n, t, r, l) {
    var s = Oe(t) ? et : Ne.current;
    return (
      (s = kt(n, s)),
      Tt(n, l),
      (t = Vi(e, n, t, r, s, l)),
      (r = Ai()),
      e !== null && !Ie
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          Ln(e, n, l))
        : (ee && r && Ci(n), (n.flags |= 1), Te(e, n, t, l), n.child)
    );
  }
  function Ku(e, n, t, r, l) {
    if (Oe(t)) {
      var s = !0;
      Gr(n);
    } else s = !1;
    if ((Tt(n, l), n.stateNode === null))
      pl(e, n), Mu(n, t, r), Gi(n, t, r, l), (r = !0);
    else if (e === null) {
      var o = n.stateNode,
        u = n.memoizedProps;
      o.props = u;
      var a = o.context,
        m = t.contextType;
      typeof m == "object" && m !== null
        ? (m = Je(m))
        : ((m = Oe(t) ? et : Ne.current), (m = kt(n, m)));
      var x = t.getDerivedStateFromProps,
        j =
          typeof x == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      j ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== r || a !== m) && Ou(n, o, r, m)),
        (Vn = !1);
      var v = n.memoizedState;
      (o.state = v),
        ll(n, r, o, l),
        (a = n.memoizedState),
        u !== r || v !== a || Me.current || Vn
          ? (typeof x == "function" && (Yi(n, t, x, r), (a = n.memoizedState)),
            (u = Vn || Fu(n, t, u, r, v, a, m))
              ? (j ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = r),
                (n.memoizedState = a)),
            (o.props = r),
            (o.state = a),
            (o.context = m),
            (r = u))
          : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
            (r = !1));
    } else {
      (o = n.stateNode),
        uu(e, n),
        (u = n.memoizedProps),
        (m = n.type === n.elementType ? u : un(n.type, u)),
        (o.props = m),
        (j = n.pendingProps),
        (v = o.context),
        (a = t.contextType),
        typeof a == "object" && a !== null
          ? (a = Je(a))
          : ((a = Oe(t) ? et : Ne.current), (a = kt(n, a)));
      var N = t.getDerivedStateFromProps;
      (x =
        typeof N == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== j || v !== a) && Ou(n, o, r, a)),
        (Vn = !1),
        (v = n.memoizedState),
        (o.state = v),
        ll(n, r, o, l);
      var _ = n.memoizedState;
      u !== j || v !== _ || Me.current || Vn
        ? (typeof N == "function" && (Yi(n, t, N, r), (_ = n.memoizedState)),
          (m = Vn || Fu(n, t, m, r, v, _, a) || !1)
            ? (x ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, _, a),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, _, a)),
              typeof o.componentDidUpdate == "function" && (n.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === e.memoizedProps && v === e.memoizedState) ||
                (n.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && v === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = r),
              (n.memoizedState = _)),
          (o.props = r),
          (o.state = _),
          (o.context = a),
          (r = m))
        : (typeof o.componentDidUpdate != "function" ||
            (u === e.memoizedProps && v === e.memoizedState) ||
            (n.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && v === e.memoizedState) ||
            (n.flags |= 1024),
          (r = !1));
    }
    return bi(e, n, t, r, s, l);
  }
  function bi(e, n, t, r, l, s) {
    $u(e, n);
    var o = (n.flags & 128) !== 0;
    if (!r && !o) return l && Jo(n, t, !1), Ln(e, n, s);
    (r = n.stateNode), (od.current = n);
    var u =
      o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (n.flags |= 1),
      e !== null && o
        ? ((n.child = _t(n, e.child, null, s)), (n.child = _t(n, null, u, s)))
        : Te(e, n, u, s),
      (n.memoizedState = r.state),
      l && Jo(n, t, !0),
      n.child
    );
  }
  function Zu(e) {
    var n = e.stateNode;
    n.pendingContext
      ? Go(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && Go(e, n.context, !1),
      Ii(e, n.containerInfo);
  }
  function Yu(e, n, t, r, l) {
    return Et(), Ti(l), (n.flags |= 256), Te(e, n, t, r), n.child;
  }
  var es = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ns(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Gu(e, n, t) {
    var r = n.pendingProps,
      l = te.current,
      s = !1,
      o = (n.flags & 128) !== 0,
      u;
    if (
      ((u = o) ||
        (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u
        ? ((s = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      Y(te, l & 1),
      e === null)
    )
      return (
        Li(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (n.mode & 1
              ? e.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824)
              : (n.lanes = 1),
            null)
          : ((o = r.children),
            (e = r.fallback),
            s
              ? ((r = n.mode),
                (s = n.child),
                (o = { mode: "hidden", children: o }),
                !(r & 1) && s !== null
                  ? ((s.childLanes = 0), (s.pendingProps = o))
                  : (s = Cl(o, r, 0, null)),
                (e = ct(e, r, t, null)),
                (s.return = n),
                (e.return = n),
                (s.sibling = e),
                (n.child = s),
                (n.child.memoizedState = ns(t)),
                (n.memoizedState = es),
                e)
              : ts(n, o))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return ud(e, n, o, r, u, l, t);
    if (s) {
      (s = r.fallback), (o = n.mode), (l = e.child), (u = l.sibling);
      var a = { mode: "hidden", children: r.children };
      return (
        !(o & 1) && n.child !== l
          ? ((r = n.child),
            (r.childLanes = 0),
            (r.pendingProps = a),
            (n.deletions = null))
          : ((r = Gn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (s = Gn(u, s)) : ((s = ct(s, o, t, null)), (s.flags |= 2)),
        (s.return = n),
        (r.return = n),
        (r.sibling = s),
        (n.child = r),
        (r = s),
        (s = n.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? ns(t)
            : {
                baseLanes: o.baseLanes | t,
                cachePool: null,
                transitions: o.transitions,
              }),
        (s.memoizedState = o),
        (s.childLanes = e.childLanes & ~t),
        (n.memoizedState = es),
        r
      );
    }
    return (
      (s = e.child),
      (e = s.sibling),
      (r = Gn(s, { mode: "visible", children: r.children })),
      !(n.mode & 1) && (r.lanes = t),
      (r.return = n),
      (r.sibling = null),
      e !== null &&
        ((t = n.deletions),
        t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
      (n.child = r),
      (n.memoizedState = null),
      r
    );
  }
  function ts(e, n) {
    return (
      (n = Cl({ mode: "visible", children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function fl(e, n, t, r) {
    return (
      r !== null && Ti(r),
      _t(n, e.child, null, t),
      (e = ts(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function ud(e, n, t, r, l, s, o) {
    if (t)
      return n.flags & 256
        ? ((n.flags &= -257), (r = Xi(Error(p(422)))), fl(e, n, o, r))
        : n.memoizedState !== null
        ? ((n.child = e.child), (n.flags |= 128), null)
        : ((s = r.fallback),
          (l = n.mode),
          (r = Cl({ mode: "visible", children: r.children }, l, 0, null)),
          (s = ct(s, l, o, null)),
          (s.flags |= 2),
          (r.return = n),
          (s.return = n),
          (r.sibling = s),
          (n.child = r),
          n.mode & 1 && _t(n, e.child, null, o),
          (n.child.memoizedState = ns(o)),
          (n.memoizedState = es),
          s);
    if (!(n.mode & 1)) return fl(e, n, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return (
        (r = u), (s = Error(p(419))), (r = Xi(s, r, void 0)), fl(e, n, o, r)
      );
    }
    if (((u = (o & e.childLanes) !== 0), Ie || u)) {
      if (((r = ge), r !== null)) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | o) ? 0 : l),
          l !== 0 &&
            l !== s.retryLane &&
            ((s.retryLane = l), En(e, l), dn(r, e, l, -1));
      }
      return xs(), (r = Xi(Error(p(421)))), fl(e, n, o, r);
    }
    return l.data === "$?"
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = wd.bind(null, e)),
        (l._reactRetry = n),
        null)
      : ((e = s.treeContext),
        (We = Hn(l.nextSibling)),
        (Ae = n),
        (ee = !0),
        (on = null),
        e !== null &&
          ((Ge[Xe++] = Nn),
          (Ge[Xe++] = Cn),
          (Ge[Xe++] = nt),
          (Nn = e.id),
          (Cn = e.overflow),
          (nt = n)),
        (n = ts(n, r.children)),
        (n.flags |= 4096),
        n);
  }
  function Xu(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Fi(e.return, n, t);
  }
  function rs(e, n, t, r, l) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: t,
          tailMode: l,
        })
      : ((s.isBackwards = n),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = r),
        (s.tail = t),
        (s.tailMode = l));
  }
  function Ju(e, n, t) {
    var r = n.pendingProps,
      l = r.revealOrder,
      s = r.tail;
    if ((Te(e, n, r.children, t), (r = te.current), r & 2))
      (r = (r & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Xu(e, t, n);
          else if (e.tag === 19) Xu(e, t, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Y(te, r), !(n.mode & 1))) n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            (e = t.alternate),
              e !== null && il(e) === null && (l = t),
              (t = t.sibling);
          (t = l),
            t === null
              ? ((l = n.child), (n.child = null))
              : ((l = t.sibling), (t.sibling = null)),
            rs(n, !1, l, t, s);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && il(e) === null)) {
              n.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = t), (t = l), (l = e);
          }
          rs(n, !0, t, null, s);
          break;
        case "together":
          rs(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function pl(e, n) {
    !(n.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function Ln(e, n, t) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (st |= n.lanes),
      !(t & n.childLanes))
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(p(153));
    if (n.child !== null) {
      for (
        e = n.child, t = Gn(e, e.pendingProps), n.child = t, t.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (t = t.sibling = Gn(e, e.pendingProps)),
          (t.return = n);
      t.sibling = null;
    }
    return n.child;
  }
  function ad(e, n, t) {
    switch (n.tag) {
      case 3:
        Zu(n), Et();
        break;
      case 5:
        du(n);
        break;
      case 1:
        Oe(n.type) && Gr(n);
        break;
      case 4:
        Ii(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context,
          l = n.memoizedProps.value;
        Y(nl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = n.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Y(te, te.current & 1), (n.flags |= 128), null)
            : t & n.child.childLanes
            ? Gu(e, n, t)
            : (Y(te, te.current & 1),
              (e = Ln(e, n, t)),
              e !== null ? e.sibling : null);
        Y(te, te.current & 1);
        break;
      case 19:
        if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
          if (r) return Ju(e, n, t);
          n.flags |= 128;
        }
        if (
          ((l = n.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Y(te, te.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Wu(e, n, t);
    }
    return Ln(e, n, t);
  }
  var qu, ls, bu, ea;
  (qu = function (e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }),
    (ls = function () {}),
    (bu = function (e, n, t, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = n.stateNode), lt(yn.current);
        var s = null;
        switch (t) {
          case "input":
            (l = Fl(e, l)), (r = Fl(e, r)), (s = []);
            break;
          case "select":
            (l = E({}, l, { value: void 0 })),
              (r = E({}, r, { value: void 0 })),
              (s = []);
            break;
          case "textarea":
            (l = Il(e, l)), (r = Il(e, r)), (s = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Kr);
        }
        Hl(t, r);
        var o;
        t = null;
        for (m in l)
          if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null)
            if (m === "style") {
              var u = l[m];
              for (o in u) u.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
            } else
              m !== "dangerouslySetInnerHTML" &&
                m !== "children" &&
                m !== "suppressContentEditableWarning" &&
                m !== "suppressHydrationWarning" &&
                m !== "autoFocus" &&
                (R.hasOwnProperty(m)
                  ? s || (s = [])
                  : (s = s || []).push(m, null));
        for (m in r) {
          var a = r[m];
          if (
            ((u = l != null ? l[m] : void 0),
            r.hasOwnProperty(m) && a !== u && (a != null || u != null))
          )
            if (m === "style")
              if (u) {
                for (o in u)
                  !u.hasOwnProperty(o) ||
                    (a && a.hasOwnProperty(o)) ||
                    (t || (t = {}), (t[o] = ""));
                for (o in a)
                  a.hasOwnProperty(o) &&
                    u[o] !== a[o] &&
                    (t || (t = {}), (t[o] = a[o]));
              } else t || (s || (s = []), s.push(m, t)), (t = a);
            else
              m === "dangerouslySetInnerHTML"
                ? ((a = a ? a.__html : void 0),
                  (u = u ? u.__html : void 0),
                  a != null && u !== a && (s = s || []).push(m, a))
                : m === "children"
                ? (typeof a != "string" && typeof a != "number") ||
                  (s = s || []).push(m, "" + a)
                : m !== "suppressContentEditableWarning" &&
                  m !== "suppressHydrationWarning" &&
                  (R.hasOwnProperty(m)
                    ? (a != null && m === "onScroll" && G("scroll", e),
                      s || u === a || (s = []))
                    : (s = s || []).push(m, a));
        }
        t && (s = s || []).push("style", t);
        var m = s;
        (n.updateQueue = m) && (n.flags |= 4);
      }
    }),
    (ea = function (e, n, t, r) {
      t !== r && (n.flags |= 4);
    });
  function mr(e, n) {
    if (!ee)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), (n = n.sibling);
          t === null ? (e.tail = null) : (t.sibling = null);
          break;
        case "collapsed":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ee(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      t = 0,
      r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = t), n;
  }
  function cd(e, n, t) {
    var r = n.pendingProps;
    switch ((Ei(n), n.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ee(n), null;
      case 1:
        return Oe(n.type) && Yr(), Ee(n), null;
      case 3:
        return (
          (r = n.stateNode),
          Pt(),
          X(Me),
          X(Ne),
          Ui(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (br(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), on !== null && (ms(on), (on = null)))),
          ls(e, n),
          Ee(n),
          null
        );
      case 5:
        Di(n);
        var l = lt(cr.current);
        if (((t = n.type), e !== null && n.stateNode != null))
          bu(e, n, t, r, l),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(p(166));
            return Ee(n), null;
          }
          if (((e = lt(yn.current)), br(n))) {
            (r = n.stateNode), (t = n.type);
            var s = n.memoizedProps;
            switch (((r[vn] = n), (r[ir] = s), (e = (n.mode & 1) !== 0), t)) {
              case "dialog":
                G("cancel", r), G("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < tr.length; l++) G(tr[l], r);
                break;
              case "source":
                G("error", r);
                break;
              case "img":
              case "image":
              case "link":
                G("error", r), G("load", r);
                break;
              case "details":
                G("toggle", r);
                break;
              case "input":
                Fs(r, s), G("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!s.multiple }),
                  G("invalid", r);
                break;
              case "textarea":
                Is(r, s), G("invalid", r);
            }
            Hl(t, s), (l = null);
            for (var o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (s.suppressHydrationWarning !== !0 &&
                        $r(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (s.suppressHydrationWarning !== !0 &&
                        $r(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : R.hasOwnProperty(o) &&
                    u != null &&
                    o === "onScroll" &&
                    G("scroll", r);
              }
            switch (t) {
              case "input":
                Sr(r), Os(r, s, !0);
                break;
              case "textarea":
                Sr(r), Hs(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = Kr);
            }
            (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
          } else {
            (o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Us(t)),
              e === "http://www.w3.org/1999/xhtml"
                ? t === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = o.createElement(t, { is: r.is }))
                  : ((e = o.createElement(t)),
                    t === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, t)),
              (e[vn] = n),
              (e[ir] = r),
              qu(e, n, !1, !1),
              (n.stateNode = e);
            e: {
              switch (((o = Ul(t, r)), t)) {
                case "dialog":
                  G("cancel", e), G("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  G("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < tr.length; l++) G(tr[l], e);
                  l = r;
                  break;
                case "source":
                  G("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  G("error", e), G("load", e), (l = r);
                  break;
                case "details":
                  G("toggle", e), (l = r);
                  break;
                case "input":
                  Fs(e, r), (l = Fl(e, r)), G("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = E({}, r, { value: void 0 })),
                    G("invalid", e);
                  break;
                case "textarea":
                  Is(e, r), (l = Il(e, r)), G("invalid", e);
                  break;
                default:
                  l = r;
              }
              Hl(t, l), (u = l);
              for (s in u)
                if (u.hasOwnProperty(s)) {
                  var a = u[s];
                  s === "style"
                    ? Vs(e, a)
                    : s === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Bs(e, a))
                    : s === "children"
                    ? typeof a == "string"
                      ? (t !== "textarea" || a !== "") && Dt(e, a)
                      : typeof a == "number" && Dt(e, "" + a)
                    : s !== "suppressContentEditableWarning" &&
                      s !== "suppressHydrationWarning" &&
                      s !== "autoFocus" &&
                      (R.hasOwnProperty(s)
                        ? a != null && s === "onScroll" && G("scroll", e)
                        : a != null && nn(e, s, a, o));
                }
              switch (t) {
                case "input":
                  Sr(e), Os(e, r, !1);
                  break;
                case "textarea":
                  Sr(e), Hs(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + W(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (s = r.value),
                    s != null
                      ? dt(e, !!r.multiple, s, !1)
                      : r.defaultValue != null &&
                        dt(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Kr);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return Ee(n), null;
      case 6:
        if (e && n.stateNode != null) ea(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(p(166));
          if (((t = lt(cr.current)), lt(yn.current), br(n))) {
            if (
              ((r = n.stateNode),
              (t = n.memoizedProps),
              (r[vn] = n),
              (s = r.nodeValue !== t) && ((e = Ae), e !== null))
            )
              switch (e.tag) {
                case 3:
                  $r(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    $r(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            s && (n.flags |= 4);
          } else
            (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
              (r[vn] = n),
              (n.stateNode = r);
        }
        return Ee(n), null;
      case 13:
        if (
          (X(te),
          (r = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ee && We !== null && n.mode & 1 && !(n.flags & 128))
            ru(), Et(), (n.flags |= 98560), (s = !1);
          else if (((s = br(n)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(p(318));
              if (
                ((s = n.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(p(317));
              s[vn] = n;
            } else
              Et(),
                !(n.flags & 128) && (n.memoizedState = null),
                (n.flags |= 4);
            Ee(n), (s = !1);
          } else on !== null && (ms(on), (on = null)), (s = !0);
          if (!s) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128
          ? ((n.lanes = t), n)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((n.child.flags |= 8192),
              n.mode & 1 &&
                (e === null || te.current & 1 ? me === 0 && (me = 3) : xs())),
            n.updateQueue !== null && (n.flags |= 4),
            Ee(n),
            null);
      case 4:
        return (
          Pt(),
          ls(e, n),
          e === null && rr(n.stateNode.containerInfo),
          Ee(n),
          null
        );
      case 10:
        return Ri(n.type._context), Ee(n), null;
      case 17:
        return Oe(n.type) && Yr(), Ee(n), null;
      case 19:
        if ((X(te), (s = n.memoizedState), s === null)) return Ee(n), null;
        if (((r = (n.flags & 128) !== 0), (o = s.rendering), o === null))
          if (r) mr(s, !1);
          else {
            if (me !== 0 || (e !== null && e.flags & 128))
              for (e = n.child; e !== null; ) {
                if (((o = il(e)), o !== null)) {
                  for (
                    n.flags |= 128,
                      mr(s, !1),
                      r = o.updateQueue,
                      r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      r = t,
                      t = n.child;
                    t !== null;

                  )
                    (s = t),
                      (e = r),
                      (s.flags &= 14680066),
                      (o = s.alternate),
                      o === null
                        ? ((s.childLanes = 0),
                          (s.lanes = e),
                          (s.child = null),
                          (s.subtreeFlags = 0),
                          (s.memoizedProps = null),
                          (s.memoizedState = null),
                          (s.updateQueue = null),
                          (s.dependencies = null),
                          (s.stateNode = null))
                        : ((s.childLanes = o.childLanes),
                          (s.lanes = o.lanes),
                          (s.child = o.child),
                          (s.subtreeFlags = 0),
                          (s.deletions = null),
                          (s.memoizedProps = o.memoizedProps),
                          (s.memoizedState = o.memoizedState),
                          (s.updateQueue = o.updateQueue),
                          (s.type = o.type),
                          (e = o.dependencies),
                          (s.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (t = t.sibling);
                  return Y(te, (te.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            s.tail !== null &&
              ue() > Mt &&
              ((n.flags |= 128), (r = !0), mr(s, !1), (n.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = il(o)), e !== null)) {
              if (
                ((n.flags |= 128),
                (r = !0),
                (t = e.updateQueue),
                t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                mr(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !o.alternate &&
                  !ee)
              )
                return Ee(n), null;
            } else
              2 * ue() - s.renderingStartTime > Mt &&
                t !== 1073741824 &&
                ((n.flags |= 128), (r = !0), mr(s, !1), (n.lanes = 4194304));
          s.isBackwards
            ? ((o.sibling = n.child), (n.child = o))
            : ((t = s.last),
              t !== null ? (t.sibling = o) : (n.child = o),
              (s.last = o));
        }
        return s.tail !== null
          ? ((n = s.tail),
            (s.rendering = n),
            (s.tail = n.sibling),
            (s.renderingStartTime = ue()),
            (n.sibling = null),
            (t = te.current),
            Y(te, r ? (t & 1) | 2 : t & 1),
            n)
          : (Ee(n), null);
      case 22:
      case 23:
        return (
          ys(),
          (r = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
          r && n.mode & 1
            ? $e & 1073741824 &&
              (Ee(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Ee(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, n.tag));
  }
  function dd(e, n) {
    switch ((Ei(n), n.tag)) {
      case 1:
        return (
          Oe(n.type) && Yr(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Pt(),
          X(Me),
          X(Ne),
          Ui(),
          (e = n.flags),
          e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 5:
        return Di(n), null;
      case 13:
        if (
          (X(te), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(p(340));
          Et();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return X(te), null;
      case 4:
        return Pt(), null;
      case 10:
        return Ri(n.type._context), null;
      case 22:
      case 23:
        return ys(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hl = !1,
    _e = !1,
    fd = typeof WeakSet == "function" ? WeakSet : Set,
    C = null;
  function Rt(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          se(e, n, r);
        }
      else t.current = null;
  }
  function is(e, n, t) {
    try {
      t();
    } catch (r) {
      se(e, n, r);
    }
  }
  var na = !1;
  function pd(e, n) {
    if (((yi = Mr), (e = Fo()), ai(e))) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = ((t = e.ownerDocument) && t.defaultView) || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset,
              s = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, s.nodeType;
            } catch {
              t = null;
              break e;
            }
            var o = 0,
              u = -1,
              a = -1,
              m = 0,
              x = 0,
              j = e,
              v = null;
            n: for (;;) {
              for (
                var N;
                j !== t || (l !== 0 && j.nodeType !== 3) || (u = o + l),
                  j !== s || (r !== 0 && j.nodeType !== 3) || (a = o + r),
                  j.nodeType === 3 && (o += j.nodeValue.length),
                  (N = j.firstChild) !== null;

              )
                (v = j), (j = N);
              for (;;) {
                if (j === e) break n;
                if (
                  (v === t && ++m === l && (u = o),
                  v === s && ++x === r && (a = o),
                  (N = j.nextSibling) !== null)
                )
                  break;
                (j = v), (v = j.parentNode);
              }
              j = N;
            }
            t = u === -1 || a === -1 ? null : { start: u, end: a };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      xi = { focusedElem: e, selectionRange: t }, Mr = !1, C = n;
      C !== null;

    )
      if (((n = C), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = n), (C = e);
      else
        for (; C !== null; ) {
          n = C;
          try {
            var _ = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_ !== null) {
                    var L = _.memoizedProps,
                      ae = _.memoizedState,
                      f = n.stateNode,
                      c = f.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? L : un(n.type, L),
                        ae
                      );
                    f.__reactInternalSnapshotBeforeUpdate = c;
                  }
                  break;
                case 3:
                  var h = n.stateNode.containerInfo;
                  h.nodeType === 1
                    ? (h.textContent = "")
                    : h.nodeType === 9 &&
                      h.documentElement &&
                      h.removeChild(h.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p(163));
              }
          } catch (w) {
            se(n, n.return, w);
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (C = e);
            break;
          }
          C = n.return;
        }
    return (_ = na), (na = !1), _;
  }
  function vr(e, n, t) {
    var r = n.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var s = l.destroy;
          (l.destroy = void 0), s !== void 0 && is(n, t, s);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ml(e, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var t = (n = n.next);
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function ss(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : (n.current = e);
    }
  }
  function ta(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), ta(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[vn],
          delete n[ir],
          delete n[Si],
          delete n[Gc],
          delete n[Xc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ra(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function la(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ra(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function os(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        n
          ? t.nodeType === 8
            ? t.parentNode.insertBefore(e, n)
            : t.insertBefore(e, n)
          : (t.nodeType === 8
              ? ((n = t.parentNode), n.insertBefore(e, t))
              : ((n = t), n.appendChild(e)),
            (t = t._reactRootContainer),
            t != null || n.onclick !== null || (n.onclick = Kr));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (os(e, n, t), e = e.sibling; e !== null; )
        os(e, n, t), (e = e.sibling);
  }
  function us(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (us(e, n, t), e = e.sibling; e !== null; )
        us(e, n, t), (e = e.sibling);
  }
  var we = null,
    an = !1;
  function Wn(e, n, t) {
    for (t = t.child; t !== null; ) ia(e, n, t), (t = t.sibling);
  }
  function ia(e, n, t) {
    if (mn && typeof mn.onCommitFiberUnmount == "function")
      try {
        mn.onCommitFiberUnmount(Lr, t);
      } catch {}
    switch (t.tag) {
      case 5:
        _e || Rt(t, n);
      case 6:
        var r = we,
          l = an;
        (we = null),
          Wn(e, n, t),
          (we = r),
          (an = l),
          we !== null &&
            (an
              ? ((e = we),
                (t = t.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(t)
                  : e.removeChild(t))
              : we.removeChild(t.stateNode));
        break;
      case 18:
        we !== null &&
          (an
            ? ((e = we),
              (t = t.stateNode),
              e.nodeType === 8
                ? wi(e.parentNode, t)
                : e.nodeType === 1 && wi(e, t),
              Yt(e))
            : wi(we, t.stateNode));
        break;
      case 4:
        (r = we),
          (l = an),
          (we = t.stateNode.containerInfo),
          (an = !0),
          Wn(e, n, t),
          (we = r),
          (an = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !_e &&
          ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var s = l,
              o = s.destroy;
            (s = s.tag),
              o !== void 0 && (s & 2 || s & 4) && is(t, n, o),
              (l = l.next);
          } while (l !== r);
        }
        Wn(e, n, t);
        break;
      case 1:
        if (
          !_e &&
          (Rt(t, n),
          (r = t.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = t.memoizedProps),
              (r.state = t.memoizedState),
              r.componentWillUnmount();
          } catch (u) {
            se(t, n, u);
          }
        Wn(e, n, t);
        break;
      case 21:
        Wn(e, n, t);
        break;
      case 22:
        t.mode & 1
          ? ((_e = (r = _e) || t.memoizedState !== null), Wn(e, n, t), (_e = r))
          : Wn(e, n, t);
        break;
      default:
        Wn(e, n, t);
    }
  }
  function sa(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new fd()),
        n.forEach(function (r) {
          var l = Sd.bind(null, e, r);
          t.has(r) || (t.add(r), r.then(l, l));
        });
    }
  }
  function cn(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r];
        try {
          var s = e,
            o = n,
            u = o;
          e: for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                (we = u.stateNode), (an = !1);
                break e;
              case 3:
                (we = u.stateNode.containerInfo), (an = !0);
                break e;
              case 4:
                (we = u.stateNode.containerInfo), (an = !0);
                break e;
            }
            u = u.return;
          }
          if (we === null) throw Error(p(160));
          ia(s, o, l), (we = null), (an = !1);
          var a = l.alternate;
          a !== null && (a.return = null), (l.return = null);
        } catch (m) {
          se(l, n, m);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) oa(n, e), (n = n.sibling);
  }
  function oa(e, n) {
    var t = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((cn(n, e), gn(e), r & 4)) {
          try {
            vr(3, e, e.return), ml(3, e);
          } catch (L) {
            se(e, e.return, L);
          }
          try {
            vr(5, e, e.return);
          } catch (L) {
            se(e, e.return, L);
          }
        }
        break;
      case 1:
        cn(n, e), gn(e), r & 512 && t !== null && Rt(t, t.return);
        break;
      case 5:
        if (
          (cn(n, e),
          gn(e),
          r & 512 && t !== null && Rt(t, t.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Dt(l, "");
          } catch (L) {
            se(e, e.return, L);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var s = e.memoizedProps,
            o = t !== null ? t.memoizedProps : s,
            u = e.type,
            a = e.updateQueue;
          if (((e.updateQueue = null), a !== null))
            try {
              u === "input" && s.type === "radio" && s.name != null && Ms(l, s),
                Ul(u, o);
              var m = Ul(u, s);
              for (o = 0; o < a.length; o += 2) {
                var x = a[o],
                  j = a[o + 1];
                x === "style"
                  ? Vs(l, j)
                  : x === "dangerouslySetInnerHTML"
                  ? Bs(l, j)
                  : x === "children"
                  ? Dt(l, j)
                  : nn(l, x, j, m);
              }
              switch (u) {
                case "input":
                  Ml(l, s);
                  break;
                case "textarea":
                  Ds(l, s);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!s.multiple;
                  var N = s.value;
                  N != null
                    ? dt(l, !!s.multiple, N, !1)
                    : v !== !!s.multiple &&
                      (s.defaultValue != null
                        ? dt(l, !!s.multiple, s.defaultValue, !0)
                        : dt(l, !!s.multiple, s.multiple ? [] : "", !1));
              }
              l[ir] = s;
            } catch (L) {
              se(e, e.return, L);
            }
        }
        break;
      case 6:
        if ((cn(n, e), gn(e), r & 4)) {
          if (e.stateNode === null) throw Error(p(162));
          (l = e.stateNode), (s = e.memoizedProps);
          try {
            l.nodeValue = s;
          } catch (L) {
            se(e, e.return, L);
          }
        }
        break;
      case 3:
        if (
          (cn(n, e), gn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Yt(n.containerInfo);
          } catch (L) {
            se(e, e.return, L);
          }
        break;
      case 4:
        cn(n, e), gn(e);
        break;
      case 13:
        cn(n, e),
          gn(e),
          (l = e.child),
          l.flags & 8192 &&
            ((s = l.memoizedState !== null),
            (l.stateNode.isHidden = s),
            !s ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ds = ue())),
          r & 4 && sa(e);
        break;
      case 22:
        if (
          ((x = t !== null && t.memoizedState !== null),
          e.mode & 1 ? ((_e = (m = _e) || x), cn(n, e), (_e = m)) : cn(n, e),
          gn(e),
          r & 8192)
        ) {
          if (
            ((m = e.memoizedState !== null),
            (e.stateNode.isHidden = m) && !x && e.mode & 1)
          )
            for (C = e, x = e.child; x !== null; ) {
              for (j = C = x; C !== null; ) {
                switch (((v = C), (N = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    vr(4, v, v.return);
                    break;
                  case 1:
                    Rt(v, v.return);
                    var _ = v.stateNode;
                    if (typeof _.componentWillUnmount == "function") {
                      (r = v), (t = v.return);
                      try {
                        (n = r),
                          (_.props = n.memoizedProps),
                          (_.state = n.memoizedState),
                          _.componentWillUnmount();
                      } catch (L) {
                        se(r, t, L);
                      }
                    }
                    break;
                  case 5:
                    Rt(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      ca(j);
                      continue;
                    }
                }
                N !== null ? ((N.return = v), (C = N)) : ca(j);
              }
              x = x.sibling;
            }
          e: for (x = null, j = e; ; ) {
            if (j.tag === 5) {
              if (x === null) {
                x = j;
                try {
                  (l = j.stateNode),
                    m
                      ? ((s = l.style),
                        typeof s.setProperty == "function"
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none"))
                      : ((u = j.stateNode),
                        (a = j.memoizedProps.style),
                        (o =
                          a != null && a.hasOwnProperty("display")
                            ? a.display
                            : null),
                        (u.style.display = Qs("display", o)));
                } catch (L) {
                  se(e, e.return, L);
                }
              }
            } else if (j.tag === 6) {
              if (x === null)
                try {
                  j.stateNode.nodeValue = m ? "" : j.memoizedProps;
                } catch (L) {
                  se(e, e.return, L);
                }
            } else if (
              ((j.tag !== 22 && j.tag !== 23) ||
                j.memoizedState === null ||
                j === e) &&
              j.child !== null
            ) {
              (j.child.return = j), (j = j.child);
              continue;
            }
            if (j === e) break e;
            for (; j.sibling === null; ) {
              if (j.return === null || j.return === e) break e;
              x === j && (x = null), (j = j.return);
            }
            x === j && (x = null),
              (j.sibling.return = j.return),
              (j = j.sibling);
          }
        }
        break;
      case 19:
        cn(n, e), gn(e), r & 4 && sa(e);
        break;
      case 21:
        break;
      default:
        cn(n, e), gn(e);
    }
  }
  function gn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (ra(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(p(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dt(l, ""), (r.flags &= -33));
            var s = la(e);
            us(e, s, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              u = la(e);
            os(e, u, o);
            break;
          default:
            throw Error(p(161));
        }
      } catch (a) {
        se(e, e.return, a);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function hd(e, n, t) {
    (C = e), ua(e);
  }
  function ua(e, n, t) {
    for (var r = (e.mode & 1) !== 0; C !== null; ) {
      var l = C,
        s = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || hl;
        if (!o) {
          var u = l.alternate,
            a = (u !== null && u.memoizedState !== null) || _e;
          u = hl;
          var m = _e;
          if (((hl = o), (_e = a) && !m))
            for (C = l; C !== null; )
              (o = C),
                (a = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? da(l)
                  : a !== null
                  ? ((a.return = o), (C = a))
                  : da(l);
          for (; s !== null; ) (C = s), ua(s), (s = s.sibling);
          (C = l), (hl = u), (_e = m);
        }
        aa(e);
      } else
        l.subtreeFlags & 8772 && s !== null ? ((s.return = l), (C = s)) : aa(e);
    }
  }
  function aa(e) {
    for (; C !== null; ) {
      var n = C;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                _e || ml(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !_e)
                  if (t === null) r.componentDidMount();
                  else {
                    var l =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : un(n.type, t.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      t.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var s = n.updateQueue;
                s !== null && cu(n, s, r);
                break;
              case 3:
                var o = n.updateQueue;
                if (o !== null) {
                  if (((t = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  cu(n, o, t);
                }
                break;
              case 5:
                var u = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = u;
                  var a = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      a.autoFocus && t.focus();
                      break;
                    case "img":
                      a.src && (t.src = a.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var m = n.alternate;
                  if (m !== null) {
                    var x = m.memoizedState;
                    if (x !== null) {
                      var j = x.dehydrated;
                      j !== null && Yt(j);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
          _e || (n.flags & 512 && ss(n));
        } catch (v) {
          se(n, n.return, v);
        }
      }
      if (n === e) {
        C = null;
        break;
      }
      if (((t = n.sibling), t !== null)) {
        (t.return = n.return), (C = t);
        break;
      }
      C = n.return;
    }
  }
  function ca(e) {
    for (; C !== null; ) {
      var n = C;
      if (n === e) {
        C = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        (t.return = n.return), (C = t);
        break;
      }
      C = n.return;
    }
  }
  function da(e) {
    for (; C !== null; ) {
      var n = C;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              ml(4, n);
            } catch (a) {
              se(n, t, a);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (a) {
                se(n, l, a);
              }
            }
            var s = n.return;
            try {
              ss(n);
            } catch (a) {
              se(n, s, a);
            }
            break;
          case 5:
            var o = n.return;
            try {
              ss(n);
            } catch (a) {
              se(n, o, a);
            }
        }
      } catch (a) {
        se(n, n.return, a);
      }
      if (n === e) {
        C = null;
        break;
      }
      var u = n.sibling;
      if (u !== null) {
        (u.return = n.return), (C = u);
        break;
      }
      C = n.return;
    }
  }
  var md = Math.ceil,
    vl = ke.ReactCurrentDispatcher,
    as = ke.ReactCurrentOwner,
    be = ke.ReactCurrentBatchConfig,
    U = 0,
    ge = null,
    ce = null,
    Se = 0,
    $e = 0,
    Ft = Un(0),
    me = 0,
    yr = null,
    st = 0,
    yl = 0,
    cs = 0,
    xr = null,
    De = null,
    ds = 0,
    Mt = 1 / 0,
    Tn = null,
    xl = !1,
    fs = null,
    $n = null,
    gl = !1,
    Kn = null,
    jl = 0,
    gr = 0,
    ps = null,
    wl = -1,
    Sl = 0;
  function Pe() {
    return U & 6 ? ue() : wl !== -1 ? wl : (wl = ue());
  }
  function Zn(e) {
    return e.mode & 1
      ? U & 2 && Se !== 0
        ? Se & -Se
        : qc.transition !== null
        ? (Sl === 0 && (Sl = ro()), Sl)
        : ((e = $),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : po(e.type))),
          e)
      : 1;
  }
  function dn(e, n, t, r) {
    if (50 < gr) throw ((gr = 0), (ps = null), Error(p(185)));
    At(e, t, r),
      (!(U & 2) || e !== ge) &&
        (e === ge && (!(U & 2) && (yl |= t), me === 4 && Yn(e, Se)),
        He(e, r),
        t === 1 && U === 0 && !(n.mode & 1) && ((Mt = ue() + 500), Xr && Qn()));
  }
  function He(e, n) {
    var t = e.callbackNode;
    qa(e, n);
    var r = zr(e, e === ge ? Se : 0);
    if (r === 0)
      t !== null && eo(t), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = r & -r), e.callbackPriority !== n)) {
      if ((t != null && eo(t), n === 1))
        e.tag === 0 ? Jc(pa.bind(null, e)) : qo(pa.bind(null, e)),
          Zc(function () {
            !(U & 6) && Qn();
          }),
          (t = null);
      else {
        switch (lo(r)) {
          case 1:
            t = Kl;
            break;
          case 4:
            t = no;
            break;
          case 16:
            t = _r;
            break;
          case 536870912:
            t = to;
            break;
          default:
            t = _r;
        }
        t = wa(t, fa.bind(null, e));
      }
      (e.callbackPriority = n), (e.callbackNode = t);
    }
  }
  function fa(e, n) {
    if (((wl = -1), (Sl = 0), U & 6)) throw Error(p(327));
    var t = e.callbackNode;
    if (Ot() && e.callbackNode !== t) return null;
    var r = zr(e, e === ge ? Se : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = kl(e, r);
    else {
      n = r;
      var l = U;
      U |= 2;
      var s = ma();
      (ge !== e || Se !== n) && ((Tn = null), (Mt = ue() + 500), ut(e, n));
      do
        try {
          xd();
          break;
        } catch (u) {
          ha(e, u);
        }
      while (!0);
      zi(),
        (vl.current = s),
        (U = l),
        ce !== null ? (n = 0) : ((ge = null), (Se = 0), (n = me));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((l = Zl(e)), l !== 0 && ((r = l), (n = hs(e, l)))),
        n === 1)
      )
        throw ((t = yr), ut(e, 0), Yn(e, r), He(e, ue()), t);
      if (n === 6) Yn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !vd(l) &&
            ((n = kl(e, r)),
            n === 2 && ((s = Zl(e)), s !== 0 && ((r = s), (n = hs(e, s)))),
            n === 1))
        )
          throw ((t = yr), ut(e, 0), Yn(e, r), He(e, ue()), t);
        switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            at(e, De, Tn);
            break;
          case 3:
            if (
              (Yn(e, r),
              (r & 130023424) === r && ((n = ds + 500 - ue()), 10 < n))
            ) {
              if (zr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Pe(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = ji(at.bind(null, e, De, Tn), n);
              break;
            }
            at(e, De, Tn);
            break;
          case 4:
            if ((Yn(e, r), (r & 4194240) === r)) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - ln(r);
              (s = 1 << o), (o = n[o]), o > l && (l = o), (r &= ~s);
            }
            if (
              ((r = l),
              (r = ue() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * md(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ji(at.bind(null, e, De, Tn), r);
              break;
            }
            at(e, De, Tn);
            break;
          case 5:
            at(e, De, Tn);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return He(e, ue()), e.callbackNode === t ? fa.bind(null, e) : null;
  }
  function hs(e, n) {
    var t = xr;
    return (
      e.current.memoizedState.isDehydrated && (ut(e, n).flags |= 256),
      (e = kl(e, n)),
      e !== 2 && ((n = De), (De = t), n !== null && ms(n)),
      e
    );
  }
  function ms(e) {
    De === null ? (De = e) : De.push.apply(De, e);
  }
  function vd(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && ((t = t.stores), t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r],
              s = l.getSnapshot;
            l = l.value;
            try {
              if (!sn(s(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
        (t.return = n), (n = t);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Yn(e, n) {
    for (
      n &= ~cs,
        n &= ~yl,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;

    ) {
      var t = 31 - ln(n),
        r = 1 << t;
      (e[t] = -1), (n &= ~r);
    }
  }
  function pa(e) {
    if (U & 6) throw Error(p(327));
    Ot();
    var n = zr(e, 0);
    if (!(n & 1)) return He(e, ue()), null;
    var t = kl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Zl(e);
      r !== 0 && ((n = r), (t = hs(e, r)));
    }
    if (t === 1) throw ((t = yr), ut(e, 0), Yn(e, n), He(e, ue()), t);
    if (t === 6) throw Error(p(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      at(e, De, Tn),
      He(e, ue()),
      null
    );
  }
  function vs(e, n) {
    var t = U;
    U |= 1;
    try {
      return e(n);
    } finally {
      (U = t), U === 0 && ((Mt = ue() + 500), Xr && Qn());
    }
  }
  function ot(e) {
    Kn !== null && Kn.tag === 0 && !(U & 6) && Ot();
    var n = U;
    U |= 1;
    var t = be.transition,
      r = $;
    try {
      if (((be.transition = null), ($ = 1), e)) return e();
    } finally {
      ($ = r), (be.transition = t), (U = n), !(U & 6) && Qn();
    }
  }
  function ys() {
    ($e = Ft.current), X(Ft);
  }
  function ut(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var t = e.timeoutHandle;
    if ((t !== -1 && ((e.timeoutHandle = -1), Kc(t)), ce !== null))
      for (t = ce.return; t !== null; ) {
        var r = t;
        switch ((Ei(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Yr();
            break;
          case 3:
            Pt(), X(Me), X(Ne), Ui();
            break;
          case 5:
            Di(r);
            break;
          case 4:
            Pt();
            break;
          case 13:
            X(te);
            break;
          case 19:
            X(te);
            break;
          case 10:
            Ri(r.type._context);
            break;
          case 22:
          case 23:
            ys();
        }
        t = t.return;
      }
    if (
      ((ge = e),
      (ce = e = Gn(e.current, null)),
      (Se = $e = n),
      (me = 0),
      (yr = null),
      (cs = yl = st = 0),
      (De = xr = null),
      rt !== null)
    ) {
      for (n = 0; n < rt.length; n++)
        if (((t = rt[n]), (r = t.interleaved), r !== null)) {
          t.interleaved = null;
          var l = r.next,
            s = t.pending;
          if (s !== null) {
            var o = s.next;
            (s.next = l), (r.next = o);
          }
          t.pending = r;
        }
      rt = null;
    }
    return e;
  }
  function ha(e, n) {
    do {
      var t = ce;
      try {
        if ((zi(), (sl.current = cl), ol)) {
          for (var r = re.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          ol = !1;
        }
        if (
          ((it = 0),
          (xe = he = re = null),
          (dr = !1),
          (fr = 0),
          (as.current = null),
          t === null || t.return === null)
        ) {
          (me = 1), (yr = n), (ce = null);
          break;
        }
        e: {
          var s = e,
            o = t.return,
            u = t,
            a = n;
          if (
            ((n = Se),
            (u.flags |= 32768),
            a !== null && typeof a == "object" && typeof a.then == "function")
          ) {
            var m = a,
              x = u,
              j = x.tag;
            if (!(x.mode & 1) && (j === 0 || j === 11 || j === 15)) {
              var v = x.alternate;
              v
                ? ((x.updateQueue = v.updateQueue),
                  (x.memoizedState = v.memoizedState),
                  (x.lanes = v.lanes))
                : ((x.updateQueue = null), (x.memoizedState = null));
            }
            var N = Uu(o);
            if (N !== null) {
              (N.flags &= -257),
                Bu(N, o, u, s, n),
                N.mode & 1 && Hu(s, m, n),
                (n = N),
                (a = m);
              var _ = n.updateQueue;
              if (_ === null) {
                var L = new Set();
                L.add(a), (n.updateQueue = L);
              } else _.add(a);
              break e;
            } else {
              if (!(n & 1)) {
                Hu(s, m, n), xs();
                break e;
              }
              a = Error(p(426));
            }
          } else if (ee && u.mode & 1) {
            var ae = Uu(o);
            if (ae !== null) {
              !(ae.flags & 65536) && (ae.flags |= 256),
                Bu(ae, o, u, s, n),
                Ti(zt(a, u));
              break e;
            }
          }
          (s = a = zt(a, u)),
            me !== 4 && (me = 2),
            xr === null ? (xr = [s]) : xr.push(s),
            (s = o);
          do {
            switch (s.tag) {
              case 3:
                (s.flags |= 65536), (n &= -n), (s.lanes |= n);
                var f = Iu(s, a, n);
                au(s, f);
                break e;
              case 1:
                u = a;
                var c = s.type,
                  h = s.stateNode;
                if (
                  !(s.flags & 128) &&
                  (typeof c.getDerivedStateFromError == "function" ||
                    (h !== null &&
                      typeof h.componentDidCatch == "function" &&
                      ($n === null || !$n.has(h))))
                ) {
                  (s.flags |= 65536), (n &= -n), (s.lanes |= n);
                  var w = Du(s, u, n);
                  au(s, w);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        ya(t);
      } catch (T) {
        (n = T), ce === t && t !== null && (ce = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ma() {
    var e = vl.current;
    return (vl.current = cl), e === null ? cl : e;
  }
  function xs() {
    (me === 0 || me === 3 || me === 2) && (me = 4),
      ge === null || (!(st & 268435455) && !(yl & 268435455)) || Yn(ge, Se);
  }
  function kl(e, n) {
    var t = U;
    U |= 2;
    var r = ma();
    (ge !== e || Se !== n) && ((Tn = null), ut(e, n));
    do
      try {
        yd();
        break;
      } catch (l) {
        ha(e, l);
      }
    while (!0);
    if ((zi(), (U = t), (vl.current = r), ce !== null)) throw Error(p(261));
    return (ge = null), (Se = 0), me;
  }
  function yd() {
    for (; ce !== null; ) va(ce);
  }
  function xd() {
    for (; ce !== null && !Aa(); ) va(ce);
  }
  function va(e) {
    var n = ja(e.alternate, e, $e);
    (e.memoizedProps = e.pendingProps),
      n === null ? ya(e) : (ce = n),
      (as.current = null);
  }
  function ya(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (((e = n.return), n.flags & 32768)) {
        if (((t = dd(t, n)), t !== null)) {
          (t.flags &= 32767), (ce = t);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (me = 6), (ce = null);
          return;
        }
      } else if (((t = cd(t, n, $e)), t !== null)) {
        ce = t;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        ce = n;
        return;
      }
      ce = n = e;
    } while (n !== null);
    me === 0 && (me = 5);
  }
  function at(e, n, t) {
    var r = $,
      l = be.transition;
    try {
      (be.transition = null), ($ = 1), gd(e, n, t, r);
    } finally {
      (be.transition = l), ($ = r);
    }
    return null;
  }
  function gd(e, n, t, r) {
    do Ot();
    while (Kn !== null);
    if (U & 6) throw Error(p(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
      throw Error(p(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var s = t.lanes | t.childLanes;
    if (
      (ba(e, s),
      e === ge && ((ce = ge = null), (Se = 0)),
      (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
        gl ||
        ((gl = !0),
        wa(_r, function () {
          return Ot(), null;
        })),
      (s = (t.flags & 15990) !== 0),
      t.subtreeFlags & 15990 || s)
    ) {
      (s = be.transition), (be.transition = null);
      var o = $;
      $ = 1;
      var u = U;
      (U |= 4),
        (as.current = null),
        pd(e, t),
        oa(t, e),
        Uc(xi),
        (Mr = !!yi),
        (xi = yi = null),
        (e.current = t),
        hd(t),
        Wa(),
        (U = u),
        ($ = o),
        (be.transition = s);
    } else e.current = t;
    if (
      (gl && ((gl = !1), (Kn = e), (jl = l)),
      (s = e.pendingLanes),
      s === 0 && ($n = null),
      Za(t.stateNode),
      He(e, ue()),
      n !== null)
    )
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (xl) throw ((xl = !1), (e = fs), (fs = null), e);
    return (
      jl & 1 && e.tag !== 0 && Ot(),
      (s = e.pendingLanes),
      s & 1 ? (e === ps ? gr++ : ((gr = 0), (ps = e))) : (gr = 0),
      Qn(),
      null
    );
  }
  function Ot() {
    if (Kn !== null) {
      var e = lo(jl),
        n = be.transition,
        t = $;
      try {
        if (((be.transition = null), ($ = 16 > e ? 16 : e), Kn === null))
          var r = !1;
        else {
          if (((e = Kn), (Kn = null), (jl = 0), U & 6)) throw Error(p(331));
          var l = U;
          for (U |= 4, C = e.current; C !== null; ) {
            var s = C,
              o = s.child;
            if (C.flags & 16) {
              var u = s.deletions;
              if (u !== null) {
                for (var a = 0; a < u.length; a++) {
                  var m = u[a];
                  for (C = m; C !== null; ) {
                    var x = C;
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vr(8, x, s);
                    }
                    var j = x.child;
                    if (j !== null) (j.return = x), (C = j);
                    else
                      for (; C !== null; ) {
                        x = C;
                        var v = x.sibling,
                          N = x.return;
                        if ((ta(x), x === m)) {
                          C = null;
                          break;
                        }
                        if (v !== null) {
                          (v.return = N), (C = v);
                          break;
                        }
                        C = N;
                      }
                  }
                }
                var _ = s.alternate;
                if (_ !== null) {
                  var L = _.child;
                  if (L !== null) {
                    _.child = null;
                    do {
                      var ae = L.sibling;
                      (L.sibling = null), (L = ae);
                    } while (L !== null);
                  }
                }
                C = s;
              }
            }
            if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (C = o);
            else
              e: for (; C !== null; ) {
                if (((s = C), s.flags & 2048))
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(9, s, s.return);
                  }
                var f = s.sibling;
                if (f !== null) {
                  (f.return = s.return), (C = f);
                  break e;
                }
                C = s.return;
              }
          }
          var c = e.current;
          for (C = c; C !== null; ) {
            o = C;
            var h = o.child;
            if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (C = h);
            else
              e: for (o = c; C !== null; ) {
                if (((u = C), u.flags & 2048))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ml(9, u);
                    }
                  } catch (T) {
                    se(u, u.return, T);
                  }
                if (u === o) {
                  C = null;
                  break e;
                }
                var w = u.sibling;
                if (w !== null) {
                  (w.return = u.return), (C = w);
                  break e;
                }
                C = u.return;
              }
          }
          if (
            ((U = l), Qn(), mn && typeof mn.onPostCommitFiberRoot == "function")
          )
            try {
              mn.onPostCommitFiberRoot(Lr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ($ = t), (be.transition = n);
      }
    }
    return !1;
  }
  function xa(e, n, t) {
    (n = zt(t, n)),
      (n = Iu(e, n, 1)),
      (e = An(e, n, 1)),
      (n = Pe()),
      e !== null && (At(e, 1, n), He(e, n));
  }
  function se(e, n, t) {
    if (e.tag === 3) xa(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          xa(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              ($n === null || !$n.has(r)))
          ) {
            (e = zt(t, e)),
              (e = Du(n, e, 1)),
              (n = An(n, e, 1)),
              (e = Pe()),
              n !== null && (At(n, 1, e), He(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function jd(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n),
      (n = Pe()),
      (e.pingedLanes |= e.suspendedLanes & t),
      ge === e &&
        (Se & t) === t &&
        (me === 4 || (me === 3 && (Se & 130023424) === Se && 500 > ue() - ds)
          ? ut(e, 0)
          : (cs |= t)),
      He(e, n);
  }
  function ga(e, n) {
    n === 0 &&
      (e.mode & 1
        ? ((n = Pr), (Pr <<= 1), !(Pr & 130023424) && (Pr = 4194304))
        : (n = 1));
    var t = Pe();
    (e = En(e, n)), e !== null && (At(e, n, t), He(e, t));
  }
  function wd(e) {
    var n = e.memoizedState,
      t = 0;
    n !== null && (t = n.retryLane), ga(e, t);
  }
  function Sd(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    r !== null && r.delete(n), ga(e, t);
  }
  var ja;
  ja = function (e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || Me.current) Ie = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128)) return (Ie = !1), ad(e, n, t);
        Ie = !!(e.flags & 131072);
      }
    else (Ie = !1), ee && n.flags & 1048576 && bo(n, qr, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var r = n.type;
        pl(e, n), (e = n.pendingProps);
        var l = kt(n, Ne.current);
        Tt(n, t), (l = Vi(null, n, r, e, l, t));
        var s = Ai();
        return (
          (n.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              Oe(r) ? ((s = !0), Gr(n)) : (s = !1),
              (n.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Oi(n),
              (l.updater = dl),
              (n.stateNode = l),
              (l._reactInternals = n),
              Gi(n, r, e, t),
              (n = bi(null, n, r, !0, s, t)))
            : ((n.tag = 0), ee && s && Ci(n), Te(null, n, l, t), (n = n.child)),
          n
        );
      case 16:
        r = n.elementType;
        e: {
          switch (
            (pl(e, n),
            (e = n.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (n.type = r),
            (l = n.tag = Nd(r)),
            (e = un(r, e)),
            l)
          ) {
            case 0:
              n = qi(null, n, r, e, t);
              break e;
            case 1:
              n = Ku(null, n, r, e, t);
              break e;
            case 11:
              n = Qu(null, n, r, e, t);
              break e;
            case 14:
              n = Vu(null, n, r, un(r.type, e), t);
              break e;
          }
          throw Error(p(306, r, ""));
        }
        return n;
      case 0:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : un(r, l)),
          qi(e, n, r, l, t)
        );
      case 1:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : un(r, l)),
          Ku(e, n, r, l, t)
        );
      case 3:
        e: {
          if ((Zu(n), e === null)) throw Error(p(387));
          (r = n.pendingProps),
            (s = n.memoizedState),
            (l = s.element),
            uu(e, n),
            ll(n, r, null, t);
          var o = n.memoizedState;
          if (((r = o.element), s.isDehydrated))
            if (
              ((s = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (n.updateQueue.baseState = s),
              (n.memoizedState = s),
              n.flags & 256)
            ) {
              (l = zt(Error(p(423)), n)), (n = Yu(e, n, r, t, l));
              break e;
            } else if (r !== l) {
              (l = zt(Error(p(424)), n)), (n = Yu(e, n, r, t, l));
              break e;
            } else
              for (
                We = Hn(n.stateNode.containerInfo.firstChild),
                  Ae = n,
                  ee = !0,
                  on = null,
                  t = su(n, null, r, t),
                  n.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
          else {
            if ((Et(), r === l)) {
              n = Ln(e, n, t);
              break e;
            }
            Te(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          du(n),
          e === null && Li(n),
          (r = n.type),
          (l = n.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (o = l.children),
          gi(r, l) ? (o = null) : s !== null && gi(r, s) && (n.flags |= 32),
          $u(e, n),
          Te(e, n, o, t),
          n.child
        );
      case 6:
        return e === null && Li(n), null;
      case 13:
        return Gu(e, n, t);
      case 4:
        return (
          Ii(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          e === null ? (n.child = _t(n, null, r, t)) : Te(e, n, r, t),
          n.child
        );
      case 11:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : un(r, l)),
          Qu(e, n, r, l, t)
        );
      case 7:
        return Te(e, n, n.pendingProps, t), n.child;
      case 8:
        return Te(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Te(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (
            ((r = n.type._context),
            (l = n.pendingProps),
            (s = n.memoizedProps),
            (o = l.value),
            Y(nl, r._currentValue),
            (r._currentValue = o),
            s !== null)
          )
            if (sn(s.value, o)) {
              if (s.children === l.children && !Me.current) {
                n = Ln(e, n, t);
                break e;
              }
            } else
              for (s = n.child, s !== null && (s.return = n); s !== null; ) {
                var u = s.dependencies;
                if (u !== null) {
                  o = s.child;
                  for (var a = u.firstContext; a !== null; ) {
                    if (a.context === r) {
                      if (s.tag === 1) {
                        (a = _n(-1, t & -t)), (a.tag = 2);
                        var m = s.updateQueue;
                        if (m !== null) {
                          m = m.shared;
                          var x = m.pending;
                          x === null
                            ? (a.next = a)
                            : ((a.next = x.next), (x.next = a)),
                            (m.pending = a);
                        }
                      }
                      (s.lanes |= t),
                        (a = s.alternate),
                        a !== null && (a.lanes |= t),
                        Fi(s.return, t, n),
                        (u.lanes |= t);
                      break;
                    }
                    a = a.next;
                  }
                } else if (s.tag === 10) o = s.type === n.type ? null : s.child;
                else if (s.tag === 18) {
                  if (((o = s.return), o === null)) throw Error(p(341));
                  (o.lanes |= t),
                    (u = o.alternate),
                    u !== null && (u.lanes |= t),
                    Fi(o, t, n),
                    (o = s.sibling);
                } else o = s.child;
                if (o !== null) o.return = s;
                else
                  for (o = s; o !== null; ) {
                    if (o === n) {
                      o = null;
                      break;
                    }
                    if (((s = o.sibling), s !== null)) {
                      (s.return = o.return), (o = s);
                      break;
                    }
                    o = o.return;
                  }
                s = o;
              }
          Te(e, n, l.children, t), (n = n.child);
        }
        return n;
      case 9:
        return (
          (l = n.type),
          (r = n.pendingProps.children),
          Tt(n, t),
          (l = Je(l)),
          (r = r(l)),
          (n.flags |= 1),
          Te(e, n, r, t),
          n.child
        );
      case 14:
        return (
          (r = n.type),
          (l = un(r, n.pendingProps)),
          (l = un(r.type, l)),
          Vu(e, n, r, l, t)
        );
      case 15:
        return Au(e, n, n.type, n.pendingProps, t);
      case 17:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : un(r, l)),
          pl(e, n),
          (n.tag = 1),
          Oe(r) ? ((e = !0), Gr(n)) : (e = !1),
          Tt(n, t),
          Mu(n, r, l),
          Gi(n, r, l, t),
          bi(null, n, r, !0, e, t)
        );
      case 19:
        return Ju(e, n, t);
      case 22:
        return Wu(e, n, t);
    }
    throw Error(p(156, n.tag));
  };
  function wa(e, n) {
    return bs(e, n);
  }
  function kd(e, n, t, r) {
    (this.tag = e),
      (this.key = t),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function en(e, n, t, r) {
    return new kd(e, n, t, r);
  }
  function gs(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Nd(e) {
    if (typeof e == "function") return gs(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === pn)) return 11;
      if (e === hn) return 14;
    }
    return 2;
  }
  function Gn(e, n) {
    var t = e.alternate;
    return (
      t === null
        ? ((t = en(e.tag, n, e.key, e.mode)),
          (t.elementType = e.elementType),
          (t.type = e.type),
          (t.stateNode = e.stateNode),
          (t.alternate = e),
          (e.alternate = t))
        : ((t.pendingProps = n),
          (t.type = e.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = e.flags & 14680064),
      (t.childLanes = e.childLanes),
      (t.lanes = e.lanes),
      (t.child = e.child),
      (t.memoizedProps = e.memoizedProps),
      (t.memoizedState = e.memoizedState),
      (t.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (t.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (t.sibling = e.sibling),
      (t.index = e.index),
      (t.ref = e.ref),
      t
    );
  }
  function Nl(e, n, t, r, l, s) {
    var o = 2;
    if (((r = e), typeof e == "function")) gs(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case Re:
          return ct(t.children, l, s, n);
        case Ye:
          (o = 8), (l |= 8);
          break;
        case zn:
          return (
            (e = en(12, t, n, l | 2)), (e.elementType = zn), (e.lanes = s), e
          );
        case Be:
          return (e = en(13, t, n, l)), (e.elementType = Be), (e.lanes = s), e;
        case rn:
          return (e = en(19, t, n, l)), (e.elementType = rn), (e.lanes = s), e;
        case ie:
          return Cl(t, l, s, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case wn:
                o = 10;
                break e;
              case Jn:
                o = 9;
                break e;
              case pn:
                o = 11;
                break e;
              case hn:
                o = 14;
                break e;
              case Fe:
                (o = 16), (r = null);
                break e;
            }
          throw Error(p(130, e == null ? e : typeof e, ""));
      }
    return (
      (n = en(o, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = s), n
    );
  }
  function ct(e, n, t, r) {
    return (e = en(7, e, r, n)), (e.lanes = t), e;
  }
  function Cl(e, n, t, r) {
    return (
      (e = en(22, e, r, n)),
      (e.elementType = ie),
      (e.lanes = t),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function js(e, n, t) {
    return (e = en(6, e, null, n)), (e.lanes = t), e;
  }
  function ws(e, n, t) {
    return (
      (n = en(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = t),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function Cd(e, n, t, r, l) {
    (this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Yl(0)),
      (this.expirationTimes = Yl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Yl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ss(e, n, t, r, l, s, o, u, a) {
    return (
      (e = new Cd(e, n, t, u, a)),
      n === 1 ? ((n = 1), s === !0 && (n |= 8)) : (n = 0),
      (s = en(3, null, null, n)),
      (e.current = s),
      (s.stateNode = e),
      (s.memoizedState = {
        element: r,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Oi(s),
      e
    );
  }
  function Ed(e, n, t) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Le,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: n,
      implementation: t,
    };
  }
  function Sa(e) {
    if (!e) return Bn;
    e = e._reactInternals;
    e: {
      if (qn(e) !== e || e.tag !== 1) throw Error(p(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Oe(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(p(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Oe(t)) return Xo(e, t, n);
    }
    return n;
  }
  function ka(e, n, t, r, l, s, o, u, a) {
    return (
      (e = Ss(t, r, !0, e, l, s, o, u, a)),
      (e.context = Sa(null)),
      (t = e.current),
      (r = Pe()),
      (l = Zn(t)),
      (s = _n(r, l)),
      (s.callback = n ?? null),
      An(t, s, l),
      (e.current.lanes = l),
      At(e, l, r),
      He(e, r),
      e
    );
  }
  function El(e, n, t, r) {
    var l = n.current,
      s = Pe(),
      o = Zn(l);
    return (
      (t = Sa(t)),
      n.context === null ? (n.context = t) : (n.pendingContext = t),
      (n = _n(s, o)),
      (n.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (n.callback = r),
      (e = An(l, n, o)),
      e !== null && (dn(e, l, o, s), rl(e, l, o)),
      o
    );
  }
  function _l(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Na(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function ks(e, n) {
    Na(e, n), (e = e.alternate) && Na(e, n);
  }
  var Ca =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ns(e) {
    this._internalRoot = e;
  }
  (Ll.prototype.render = Ns.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(p(409));
      El(e, n, null, null);
    }),
    (Ll.prototype.unmount = Ns.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          ot(function () {
            El(null, e, null, null);
          }),
            (n[Sn] = null);
        }
      });
  function Ll(e) {
    this._internalRoot = e;
  }
  Ll.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = oo();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < On.length && n !== 0 && n < On[t].priority; t++);
      On.splice(t, 0, e), t === 0 && co(e);
    }
  };
  function Cs(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Tl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ea() {}
  function _d(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var s = r;
        r = function () {
          var m = _l(o);
          s.call(m);
        };
      }
      var o = ka(n, r, e, 0, null, !1, !1, "", Ea);
      return (
        (e._reactRootContainer = o),
        (e[Sn] = o.current),
        rr(e.nodeType === 8 ? e.parentNode : e),
        ot(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var m = _l(a);
        u.call(m);
      };
    }
    var a = Ss(e, 0, !1, null, null, !1, !1, "", Ea);
    return (
      (e._reactRootContainer = a),
      (e[Sn] = a.current),
      rr(e.nodeType === 8 ? e.parentNode : e),
      ot(function () {
        El(n, a, t, r);
      }),
      a
    );
  }
  function Pl(e, n, t, r, l) {
    var s = t._reactRootContainer;
    if (s) {
      var o = s;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var a = _l(o);
          u.call(a);
        };
      }
      El(n, o, e, l);
    } else o = _d(t, n, e, l, r);
    return _l(o);
  }
  (io = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = Vt(n.pendingLanes);
          t !== 0 &&
            (Gl(n, t | 1), He(n, ue()), !(U & 6) && ((Mt = ue() + 500), Qn()));
        }
        break;
      case 13:
        ot(function () {
          var r = En(e, 1);
          if (r !== null) {
            var l = Pe();
            dn(r, e, 1, l);
          }
        }),
          ks(e, 1);
    }
  }),
    (Xl = function (e) {
      if (e.tag === 13) {
        var n = En(e, 134217728);
        if (n !== null) {
          var t = Pe();
          dn(n, e, 134217728, t);
        }
        ks(e, 134217728);
      }
    }),
    (so = function (e) {
      if (e.tag === 13) {
        var n = Zn(e),
          t = En(e, n);
        if (t !== null) {
          var r = Pe();
          dn(t, e, n, r);
        }
        ks(e, n);
      }
    }),
    (oo = function () {
      return $;
    }),
    (uo = function (e, n) {
      var t = $;
      try {
        return ($ = e), n();
      } finally {
        $ = t;
      }
    }),
    (Vl = function (e, n, t) {
      switch (n) {
        case "input":
          if ((Ml(e, t), (n = t.name), t.type === "radio" && n != null)) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
              ),
                n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n];
              if (r !== e && r.form === e.form) {
                var l = Zr(r);
                if (!l) throw Error(p(90));
                Rs(r), Ml(r, l);
              }
            }
          }
          break;
        case "textarea":
          Ds(e, t);
          break;
        case "select":
          (n = t.value), n != null && dt(e, !!t.multiple, n, !1);
      }
    }),
    (Ks = vs),
    (Zs = ot);
  var Ld = { usingClientEntryPoint: !1, Events: [sr, wt, Zr, Ws, $s, vs] },
    jr = {
      findFiberByHostInstance: bn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Td = {
      bundleType: jr.bundleType,
      version: jr.version,
      rendererPackageName: jr.rendererPackageName,
      rendererConfig: jr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ke.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Js(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: jr.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber)
      try {
        (Lr = zl.inject(Td)), (mn = zl);
      } catch {}
  }
  return (
    (Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ld),
    (Ue.createPortal = function (e, n) {
      var t =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Cs(n)) throw Error(p(200));
      return Ed(e, n, null, t);
    }),
    (Ue.createRoot = function (e, n) {
      if (!Cs(e)) throw Error(p(299));
      var t = !1,
        r = "",
        l = Ca;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (t = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (n = Ss(e, 1, !1, null, null, t, !1, r, l)),
        (e[Sn] = n.current),
        rr(e.nodeType === 8 ? e.parentNode : e),
        new Ns(n)
      );
    }),
    (Ue.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == "function"
          ? Error(p(188))
          : ((e = Object.keys(e).join(",")), Error(p(268, e)));
      return (e = Js(n)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ue.flushSync = function (e) {
      return ot(e);
    }),
    (Ue.hydrate = function (e, n, t) {
      if (!Tl(n)) throw Error(p(200));
      return Pl(null, e, n, !0, t);
    }),
    (Ue.hydrateRoot = function (e, n, t) {
      if (!Cs(e)) throw Error(p(405));
      var r = (t != null && t.hydratedSources) || null,
        l = !1,
        s = "",
        o = Ca;
      if (
        (t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (n = ka(n, null, e, 1, t ?? null, l, !1, s, o)),
        (e[Sn] = n.current),
        rr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (t = r[e]),
            (l = t._getVersion),
            (l = l(t._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [t, l])
              : n.mutableSourceEagerHydrationData.push(t, l);
      return new Ll(n);
    }),
    (Ue.render = function (e, n, t) {
      if (!Tl(n)) throw Error(p(200));
      return Pl(null, e, n, !1, t);
    }),
    (Ue.unmountComponentAtNode = function (e) {
      if (!Tl(e)) throw Error(p(40));
      return e._reactRootContainer
        ? (ot(function () {
            Pl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Sn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ue.unstable_batchedUpdates = vs),
    (Ue.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
      if (!Tl(t)) throw Error(p(200));
      if (e == null || e._reactInternals === void 0) throw Error(p(38));
      return Pl(e, n, t, !1, r);
    }),
    (Ue.version = "18.3.1-next-f1338f8080-20240426"),
    Ue
  );
}
var Ma;
function Dd() {
  if (Ma) return Ls.exports;
  Ma = 1;
  function g() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (S) {
        console.error(S);
      }
  }
  return g(), (Ls.exports = Id()), Ls.exports;
}
var Oa;
function Hd() {
  if (Oa) return Rl;
  Oa = 1;
  var g = Dd();
  return (Rl.createRoot = g.createRoot), (Rl.hydrateRoot = g.hydrateRoot), Rl;
}
var Ud = Hd();
const Bd = ({ isOpen: g, closeModal: S }) => (
    Pn.useEffect(() => {
      const p = document.querySelectorAll(".lightbox-btn"),
        le = document.querySelectorAll(".lightbox-close-btn");
      if (
        (p.forEach((R) => {
          R.addEventListener("click", () => {
            const D = R.nextElementSibling;
            D && D.classList.add("light-box-open");
          });
        }),
        le.forEach((R) => {
          R.addEventListener("click", () => {
            const D = R.closest(".light-box-popup");
            D && D.classList.remove("light-box-open");
          });
        }),
        g)
      ) {
        (document.body.style.overflow = "hidden"),
          (document.body.style.position = "fixed"),
          (document.body.style.width = "100%");
        const R = (D) => {
          D.key === "Escape" && S();
        };
        return (
          document.addEventListener("keydown", R),
          () => {
            document.removeEventListener("keydown", R),
              (document.body.style.overflow = ""),
              (document.body.style.position = ""),
              (document.body.style.width = "");
          }
        );
      }
    }, [g, S]),
    null
  ),
  Qd = "assets/baseball-open-B1ARgnB7.png",
  Vd = "assets/jrep-open-U2w48dkK.png",
  Ad = "assets/kikkake-open-BqMuID9i.png",
  Wd = "assets/kikkakeShop-open-B00Ku5tE.png",
  $d = "assets/Next-open--FihjH7x.png",
  Kd = "assets/ZeroIchi-open-B4-Ju-SL.png",
  Zd = "assets/libaty-open-CT07Zh2j.png",
  Yd = "assets/eyecarelabo-open-Dhdv-bM2.png",
  Gd = "assets/vie-huit-open-DWQ-zBP7.png",
  Xd = "assets/zeroOne-open-B0Zlu5VJ.png",
  Jd = "assets/it-plus-open-u3C57RQs.png",
  qd = "assets/orange-group-open-BP6kdd8c.png",
  bd = "assets/comingSoon-open-ydrWcG4n.png",
  ef = "assets/lessonOne-open-DZkr6ZXp.png",
  nf = "assets/lessonTwo-open-BVddw04l.png",
  tf = "assets/lessonThree-open-ZDz1a7JT.png",
  rf = "assets/lessonFour-open-C_SxQHbd.png",
  lf = "assets/lessonFive-open-Bun9LUzp.png",
  sf = "assets/libatyLp-open-Dgy8OERH.png",
  of = "assets/react-open-BmC7ObPF.png",
  uf = [
    { id: 1, open: Qd },
    { id: 2, open: Vd },
    { id: 3, open: Ad },
    { id: 4, open: Wd },
    { id: 5, open: $d },
    { id: 6, open: Kd },
    { id: 7, open: Zd },
    { id: 8, open: Yd },
    { id: 9, open: Gd },
    { id: 10, open: Xd },
    { id: 11, open: bd },
    { id: 12, open: Jd },
    { id: 13, open: qd },
    { id: 14, open: ef },
    { id: 15, open: nf },
    { id: 16, open: tf },
    { id: 17, open: rf },
    { id: 18, open: lf },
    { id: 19, open: sf },
    { id: 20, open: of },
  ],
  af = ({ id: g }) => {
    const S = uf.find((p) => p.id === g);
    return S
      ? i.jsx("img", {
          className:
            "light-box-popup-in-img border border-white border-3 open-scroll",
          src: S.open,
          alt: "作品表示",
        })
      : null;
  },
  de = ({ id: g }) => {
    const [S, p] = Pn.useState(!1),
      le = () => {
        p(!0);
      },
      R = () => {
        p(!1);
      };
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx(Bd, { isOpen: S, closeModal: R }),
        i.jsxs("div", {
          className: "modal-btn",
          children: [
            i.jsx("div", {
              className:
                "modal-btn-4 js-modal-button hover btn d-inline-block bg-dark outline-dark text-white px-2 py-1 cursor",
              onClick: le,
              children: "詳細を見る",
            }),
            S &&
              i.jsxs("div", {
                className: "light-box-popup light-box-open",
                children: [
                  i.jsx("div", {
                    className: "light-box-popup-in",
                    children: i.jsx("div", {
                      className: "margin-center",
                      children: i.jsx(af, { id: g }),
                    }),
                  }),
                  i.jsx("div", { className: "bg-gray-clear", onClick: R }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  cf = "assets/baseball-close-D-yqhlxE.png",
  fe = [
    { title: "少年野球連盟HP" },
    { title: "株式会社J-REP HP" },
    { title: "合同会社キッカケ HP" },
    { title: "キッカケ専用販売 HP" },
    { title: "パワーグレード販売 LP" },
    { title: "WEB制作ゼロイチ HP" },
    { title: "RIBREC LP" },
    { title: "eyecarelabo LP" },
    { title: "株式会社 Vie Huit LP" },
    { title: "ゼロワン LP" },
    { title: "現在作成中 HP" },
    { title: "株式会社ITプラス HP" },
    { title: "オレンジグループ HP" },
    { title: "ITカリキュラム 1" },
    { title: "ITカリキュラム 2" },
    { title: "ITカリキュラム 3" },
    { title: "ITカリキュラム 4" },
    { title: "ITカリキュラム 5" },
    { title: "RIBREC LP 2" },
    { title: "React ポートフォリオ" },
  ],
  ze = [
    { link: "http://kjbc1.com/" },
    { link: "https://www.j-rep.jp/" },
    { link: "https://kikkake-movie.com/" },
    { link: "https://shop-kikkake.com/" },
    { link: "https://shop-kikkake.com/power-grade/" },
    { link: "https://web-zero-ichi.com/" },
    { link: "https://liberty-bridge.co.jp/librec/" },
    { link: "https://eyecarelabo.com/eyecarelabo/" },
    { link: "https://viehuit.com/" },
    { link: "https://shop-kikkake.com/video-01/" },
    { link: "https://example.com/" },
    { link: "https://it-plus.jp/" },
    { link: "https://www.orangegroup.jp/" },
    { link: "https://liberty-bridge.co.jp/lp/ad-001/01/" },
    { link: "https://kengo-react-portfolio.netlify.app/" },
  ],
  df = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[0],
      p = ze[0];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: cf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・WordPress" }),
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "人生で初めて自分がコーディングして",
                i.jsx("br", {}),
                "公開したHPです。",
                i.jsx("br", {}),
                "デザインの要望も何もなく、",
                i.jsx("br", {}),
                "「強いていうならシンプルに」と",
                i.jsx("br", {}),
                "仰っていました。",
                i.jsx("br", {}),
                "依頼してくださった方が親戚で",
                i.jsx("br", {}),
                "「好きに作っちゃっていいよ。」",
                i.jsx("br", {}),
                "と言われたのでシンプルに作りました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 1 }),
        }),
      ],
    });
  },
  ff = "assets/jrep-close-pRmQ9_ne.png",
  pf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[1],
      p = ze[1];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: ff,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・FileZila" }),
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "デザインは既に決まっていて、",
                i.jsx("br", {}),
                "後はコーディングのみという状態の",
                i.jsx("br", {}),
                "お仕事でした。",
                i.jsx("br", {}),
                "初めて社長さんから頂いたお仕事で",
                i.jsx("br", {}),
                "コーディング力もない中必死で",
                i.jsx("br", {}),
                "デザインの通りに",
                i.jsx("br", {}),
                "コーディングしました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 2 }),
        }),
      ],
    });
  },
  hf = "assets/kikkake-close-CEBW0LuZ.png",
  mf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[2],
      p = ze[2];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: hf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・WordPress" }),
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "まず先に参考サイトと",
                i.jsx("br", {}),
                "載せたい画像と情報を",
                i.jsx("br", {}),
                "GoogleDocumentで 送っていただき、",
                i.jsx("br", {}),
                "その参考サイトの",
                i.jsx("br", {}),
                "デザインに情報や画像を",
                i.jsx("br", {}),
                "当てはめてコーディングをして、",
                i.jsx("br", {}),
                "その後「ここはこうしてほしい」",
                i.jsx("br", {}),
                "などの要望に沿う形で",
                i.jsx("br", {}),
                "修正を加えていき",
                i.jsx("br", {}),
                "完成した作品です。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 3 }),
        }),
      ],
    });
  },
  vf = "assets/kikkakeShop-close-BtPxJ_xI.png",
  yf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[3],
      p = ze[3];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: vf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・FileZila" }),
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "合同会社キッカケの、",
                i.jsx("br", {}),
                "商品を売るための専用のHPです。",
                i.jsx("br", {}),
                "こちらも参考にしたシンプルな",
                i.jsx("br", {}),
                "ショッピングサイトのページが",
                i.jsx("br", {}),
                "送られてきて",
                i.jsx("br", {}),
                "それの通りに一度情報や画像を",
                i.jsx("br", {}),
                "当てはめて作った後に",
                i.jsx("br", {}),
                "要望に沿って修正して作成しました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 4 }),
        }),
      ],
    });
  },
  xf = "assets/next-close-CSvf_FJR.png",
  gf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[4],
      p = ze[4];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: xf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・FileZila" }),
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "こちらは合同会社キッカケが出している",
                i.jsx("br", {}),
                "パワーグレードという商品を",
                i.jsx("br", {}),
                "売るためのLPになります。",
                i.jsx("br", {}),
                "以前は別の見た目をしていましたが",
                i.jsx("br", {}),
                "昨年2024年後半ごろに今の見た目に",
                i.jsx("br", {}),
                "変更しました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 5 }),
        }),
      ],
    });
  },
  jf = "assets/webZeroichi-close-BVY11mWF.png",
  wf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[5],
      p = ze[5];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: jf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・FileZila" }),
                  i.jsx("li", { children: "・WordPress" }),
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "自分が大学生の時に",
                i.jsx("br", {}),
                "WEBコーディングの仕事を",
                i.jsx("br", {}),
                "とっていくために",
                i.jsx("br", {}),
                "形式上作成したHPです。",
                i.jsx("br", {}),
                "参考にしたデザインはなく、",
                i.jsx("br", {}),
                "自由に作りました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 6 }),
        }),
      ],
    });
  },
  Sf = "assets/libertyBridge-close-i0F2-3pl.png",
  kf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[6],
      p = ze[6];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Sf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・Gmail" }),
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "株式会社Liberty Bridgeの、",
                i.jsx("br", {}),
                "RIBRECというサービス専用の",
                i.jsx("br", {}),
                "LPです。 元々別の方が作った",
                i.jsx("br", {}),
                "画像コーディングの",
                i.jsx("br", {}),
                "LPだったのですが",
                i.jsx("br", {}),
                "テキストコーディングにしたい",
                i.jsx("br", {}),
                "とのことで自分がコーディング",
                i.jsx("br", {}),
                "しました。",
                i.jsx("br", {}),
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 7 }),
        }),
      ],
    });
  },
  Nf = "assets/eyecarelabo-close-CGGea83U.png",
  Cf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[7],
      p = ze[7];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Nf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・FileZila" }),
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "画像コーディングの一部のみ",
                i.jsx("br", {}),
                "コーディングさせていただきまいた。",
                i.jsx("br", {}),
                "このLPを作った方が",
                i.jsx("br", {}),
                "コーディングができない方で",
                i.jsx("br", {}),
                "一部どうしてもコーディングが必要",
                i.jsx("br", {}),
                "な箇所があり、",
                i.jsx("br", {}),
                "その部分だけお手伝いしました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 8 }),
        }),
      ],
    });
  },
  Ef = "assets/vieHuit-close-CpYMaNmR.png",
  _f = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[8],
      p = ze[8];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Ef,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・FileZila" }),
                  i.jsx("li", { children: "・WordPress" }),
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "お知り合いの紹介で",
                i.jsx("br", {}),
                "知り合った社長さんが",
                i.jsx("br", {}),
                "新しく会社を作ることになり",
                i.jsx("br", {}),
                "コーディングさせていただいたHPです。",
                i.jsx("br", {}),
                "会社員の仕事が一番忙しい時期で",
                i.jsx("br", {}),
                "途中から別の方にコーディングを",
                i.jsx("br", {}),
                "バトンタッチすることになってしまい",
                i.jsx("br", {}),
                "申し訳ない気持ちでしたが",
                i.jsx("br", {}),
                "参考サイトも修正依頼も細かく",
                i.jsx("br", {}),
                "作成に携わらせていただけて",
                i.jsx("br", {}),
                "とても良い経験になりました。",
                i.jsx("br", {}),
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 9 }),
        }),
      ],
    });
  },
  Lf = "assets/ZeroOne-close-DNLjBP83.png",
  Tf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[9],
      p = ze[9];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Lf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・FileZila" }),
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "合同会社キッカケの、",
                i.jsx("br", {}),
                "ゼロワンという商品の",
                i.jsx("br", {}),
                "販売用LPです。",
                i.jsx("br", {}),
                "こちらは参考デザインのLPがあって",
                i.jsx("br", {}),
                "そのLPのデザインに沿って",
                i.jsx("br", {}),
                "一度情報や画像を当てはめて",
                i.jsx("br", {}),
                "作った後",
                i.jsx("br", {}),
                "要望に沿って修正して作成しました。",
                i.jsx("br", {}),
                "社長さんがこのデザインを",
                i.jsx("br", {}),
                "とてもよく気に入ってくださり",
                i.jsx("br", {}),
                "元々別の見た目をしていた",
                i.jsx("br", {}),
                "パワーグレードのLPも",
                i.jsx("br", {}),
                "これと同じ見た目になりました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 10 }),
        }),
      ],
    });
  },
  Pf = "assets/comingSoon-open-ydrWcG4n.png",
  zf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[10],
      p = ze[10];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Pf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・FileZila" }),
                  i.jsx("li", { children: "・Figma" }),
                  i.jsx("li", { children: "・WordPress" }),
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsx("div", {
              style: g,
              children: "現在デザイン、コーディング中です。",
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 11 }),
        }),
      ],
    });
  },
  Rf = "assets/it-plus-close-C-eZlnRJ.png",
  Ff = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[11],
      p = ze[11];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Rf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・FileZila" }),
                  i.jsx("li", { children: "・WordPress" }),
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "私が学生時代にWEB制作の",
                i.jsx("br", {}),
                "アルバイトでお世話になった",
                i.jsx("br", {}),
                "会社のHPです。",
                i.jsx("br", {}),
                "このHPは元々あったのですが",
                i.jsx("br", {}),
                "以前は少し違う見た目を",
                i.jsx("br", {}),
                "していて",
                i.jsx("br", {}),
                "WEB制作の知識が全くない",
                i.jsx("br", {}),
                "社員さんや社長さんの",
                i.jsx("br", {}),
                "ここはもっとこうしてほしい",
                i.jsx("br", {}),
                "などの要望の通りに",
                i.jsx("br", {}),
                "修正をしたり、",
                i.jsx("br", {}),
                "WordPressの新規記事投稿の",
                i.jsx("br", {}),
                "作成や、一部ページの作成など",
                i.jsx("br", {}),
                "保守運用、修正、一部作成を",
                i.jsx("br", {}),
                "しました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 12 }),
        }),
      ],
    });
  },
  Mf = "assets/orange-group-CTbAUBWX.png",
  Of = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[12],
      p = ze[12];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Mf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・FileZila" }),
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "大学時代にお世話になった",
                i.jsx("br", {}),
                "株式会社ITプラスの子会社にあたる",
                i.jsx("br", {}),
                "自動車の事業のHPです。",
                i.jsx("br", {}),
                "このHPも保守運用や修正、",
                i.jsx("br", {}),
                "一部作成をしました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 13 }),
        }),
      ],
    });
  },
  If = "assets/lessonOne-close-CrBiiPT9.png",
  Df = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[13];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: If,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "以前いた会社の",
                i.jsx("br", {}),
                "ITのカリキュラム一つ目の作品です。",
                i.jsx("br", {}),
                "実際に公開されていないので",
                i.jsx("br", {}),
                "リンクはありませんが",
                i.jsx("br", {}),
                "詳細ボタンから画像1ページ分のみ",
                i.jsx("br", {}),
                "ご覧ください。",
                i.jsx("br", {}),
                "デザインは決められていて",
                i.jsx("br", {}),
                "その決められたデザインを",
                i.jsx("br", {}),
                "コーディングする内容だったので",
                i.jsx("br", {}),
                "比較的簡単にすぐ終えることができ、",
                i.jsx("br", {}),
                "周りの新卒の同期は",
                i.jsx("br", {}),
                "2025年1月現在も終わっていない",
                i.jsx("br", {}),
                "人もいる中、自分はこの",
                i.jsx("br", {}),
                "カリキュラム1〜5を",
                i.jsx("br", {}),
                "1ヶ月半で終わらせました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 14 }),
        }),
      ],
    });
  },
  Hf = "assets/lessonTwo-close-DrP4nUb1.png",
  Uf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[14];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Hf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "以前いた会社の",
                i.jsx("br", {}),
                "ITのカリキュラム二つ目の作品です。",
                i.jsx("br", {}),
                "実際に公開されていないので",
                i.jsx("br", {}),
                "リンクはありませんが",
                i.jsx("br", {}),
                "詳細ボタンから画像1ページ分のみ",
                i.jsx("br", {}),
                "ご覧ください。",
                i.jsx("br", {}),
                "デザインは決められていて",
                i.jsx("br", {}),
                "その決められたデザインを",
                i.jsx("br", {}),
                "コーディングする内容だったので",
                i.jsx("br", {}),
                "比較的簡単にすぐ終えることができ、",
                i.jsx("br", {}),
                "周りの新卒の同期は",
                i.jsx("br", {}),
                "2025年1月現在も終わっていない",
                i.jsx("br", {}),
                "人もいる中、自分はこの",
                i.jsx("br", {}),
                "カリキュラム1〜5を",
                i.jsx("br", {}),
                "1ヶ月半で終わらせました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 15 }),
        }),
      ],
    });
  },
  Bf = "assets/lessonThree-close-YQJVYj2y.png",
  Qf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[15];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Bf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "以前いた会社の",
                i.jsx("br", {}),
                "ITのカリキュラム三つ目の作品です。",
                i.jsx("br", {}),
                "実際に公開されていないので",
                i.jsx("br", {}),
                "リンクはありませんが",
                i.jsx("br", {}),
                "詳細ボタンから画像1ページ分のみ",
                i.jsx("br", {}),
                "ご覧ください。",
                i.jsx("br", {}),
                "デザインは決められていて",
                i.jsx("br", {}),
                "その決められたデザインを",
                i.jsx("br", {}),
                "コーディングする内容だったので",
                i.jsx("br", {}),
                "比較的簡単にすぐ終えることができ、",
                i.jsx("br", {}),
                "周りの新卒の同期は",
                i.jsx("br", {}),
                "2025年1月現在も終わっていない",
                i.jsx("br", {}),
                "人もいる中、自分はこの",
                i.jsx("br", {}),
                "カリキュラム1〜5を",
                i.jsx("br", {}),
                "1ヶ月半で終わらせました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 16 }),
        }),
      ],
    });
  },
  Vf = "assets/lessonFour-close-BHVnvfiG.png",
  Af = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[16];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Vf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・SCSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "以前いた会社の",
                i.jsx("br", {}),
                "ITのカリキュラム四つ目の作品です。",
                i.jsx("br", {}),
                "実際に公開されていないので",
                i.jsx("br", {}),
                "リンクはありませんが",
                i.jsx("br", {}),
                "詳細ボタンから画像1ページ分のみ",
                i.jsx("br", {}),
                "ご覧ください。",
                i.jsx("br", {}),
                "デザインは決められていて",
                i.jsx("br", {}),
                "その決められたデザインを",
                i.jsx("br", {}),
                "コーディングする内容だったので",
                i.jsx("br", {}),
                "比較的簡単にすぐ終えることができ、",
                i.jsx("br", {}),
                "周りの新卒の同期は",
                i.jsx("br", {}),
                "2025年1月現在も終わっていない",
                i.jsx("br", {}),
                "人もいる中、自分はこの",
                i.jsx("br", {}),
                "カリキュラム1〜5を",
                i.jsx("br", {}),
                "1ヶ月半で終わらせました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 17 }),
        }),
      ],
    });
  },
  Wf = "assets/lessonFive-close-CQf_AGLY.png",
  $f = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[17];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Wf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・SCSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "以前いた会社の",
                i.jsx("br", {}),
                "ITのカリキュラム五つ目の作品です。",
                i.jsx("br", {}),
                "実際に公開されていないので",
                i.jsx("br", {}),
                "リンクはありませんが",
                i.jsx("br", {}),
                "詳細ボタンから画像1ページ分のみ",
                i.jsx("br", {}),
                "ご覧ください。",
                i.jsx("br", {}),
                "デザインは決められていて",
                i.jsx("br", {}),
                "その決められたデザインを",
                i.jsx("br", {}),
                "コーディングする内容だったので",
                i.jsx("br", {}),
                "比較的簡単にすぐ終えることができ、",
                i.jsx("br", {}),
                "周りの新卒の同期は",
                i.jsx("br", {}),
                "2025年1月現在も終わっていない",
                i.jsx("br", {}),
                "人もいる中、自分はこの",
                i.jsx("br", {}),
                "カリキュラム1〜5を",
                i.jsx("br", {}),
                "1ヶ月半で終わらせました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 18 }),
        }),
      ],
    });
  },
  Kf = "assets/libatyLp-close-DipLbW3R.png",
  Zf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[18],
      p = ze[13];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Kf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsxs("ul", {
                className: "fw-bold",
                id: "ul",
                children: [
                  i.jsx("li", { children: "・HTML" }),
                  i.jsx("li", { children: "・CSS" }),
                  i.jsx("li", { children: "・jQuery" }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "株式会社liberty bridgeの",
                i.jsx("br", {}),
                "既存LPの修正に携わらせて",
                i.jsx("br", {}),
                "いただきました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 19 }),
        }),
      ],
    });
  },
  Yf = "assets/react-close-PNqccqRM.png",
  Gf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      S = fe[19],
      p = ze[14];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Yf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: S.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                className: "hover",
                href: p.link,
                children: "実際のサイトリンクはこちら",
              }),
            }),
            i.jsx("div", {
              className: "pb-3",
              children: i.jsx("ul", {
                className: "fw-bold",
                id: "ul",
                children: i.jsx("li", { children: "・React" }),
              }),
            }),
          ],
        }),
        i.jsx("div", {
          className: "px-3",
          children: i.jsx("div", {
            className: "container border py-2",
            children: i.jsxs("div", {
              style: g,
              children: [
                "このポートフォリオサイトです。",
                i.jsx("br", {}),
                "独学で調べながらReactで作りました。",
                i.jsx("br", {}),
                "VSコードから直接GitHubにpushしたり、",
                i.jsx("br", {}),
                "buildしてGitHubにあげたものを",
                i.jsx("br", {}),
                "netlifyで公開しました。",
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "text-center py-3",
          children: i.jsx(de, { id: 20 }),
        }),
      ],
    });
  },
  Xf = [
    { card: i.jsx(df, {}) },
    { card: i.jsx(pf, {}) },
    { card: i.jsx(mf, {}) },
    { card: i.jsx(yf, {}) },
    { card: i.jsx(gf, {}) },
    { card: i.jsx(wf, {}) },
    { card: i.jsx(kf, {}) },
    { card: i.jsx(Cf, {}) },
    { card: i.jsx(_f, {}) },
    { card: i.jsx(Tf, {}) },
    { card: i.jsx(zf, {}) },
    { card: i.jsx(Ff, {}) },
    { card: i.jsx(Of, {}) },
    { card: i.jsx(Df, {}) },
    { card: i.jsx(Uf, {}) },
    { card: i.jsx(Qf, {}) },
    { card: i.jsx(Af, {}) },
    { card: i.jsx($f, {}) },
    { card: i.jsx(Zf, {}) },
    { card: i.jsx(Gf, {}) },
  ],
  Jf = () =>
    i.jsxs("section", {
      className: "py-5",
      children: [
        i.jsx("h1", { className: "fw-bold text-center", children: "制作実績" }),
        i.jsx("div", {
          className: "bg-white",
          style: { overflowX: "auto", whiteSpace: "nowrap" },
          children: i.jsx("ul", {
            id: "ul",
            className: "d-inline-flex",
            children: Xf.map((g, S) =>
              i.jsx(
                "li",
                { style: { display: "inline-block" }, children: g.card },
                S
              )
            ),
          }),
        }),
      ],
    }),
  qf = () =>
    i.jsxs("footer", {
      className: "bg-dark",
      children: [
        i.jsx("ul", { children: i.jsx("li", {}) }),
        i.jsx("div", {
          className: "text-center py-5",
          children: i.jsx("small", {
            className: "text-white fw-bold",
            children: "Kengo Masunari",
          }),
        }),
      ],
    }),
  bf =
    "data:image/svg+xml,%3csvg%20width='330'%20height='330'%20viewBox='0%200%20330%20330'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M85.07%20165.61C84.65%20166.07%2084.65%20166.53%2085.07%20166.99L123.89%20210.03C124.665%20210.896%20125.16%20211.977%20125.31%20213.13C125.88%20217.58%20127.18%20223.84%20126.69%20228.54C126.673%20228.716%20126.603%20228.882%20126.488%20229.016C126.374%20229.15%20126.221%20229.246%20126.05%20229.29C122.33%20230.3%20113.4%20227.7%20109.56%20226.93C108.696%20226.755%20107.912%20226.31%20107.32%20225.66C92.5%20209.347%2077.66%20192.883%2062.8%20176.27C57.44%20170.27%2057.34%20162.34%2062.79%20156.3C77.6833%20139.78%2092.4167%20123.443%20106.99%20107.29C107.77%20106.425%20108.803%20105.83%20109.94%20105.59L124.06%20102.61C124.445%20102.529%20124.844%20102.542%20125.223%20102.646C125.602%20102.751%20125.951%20102.945%20126.241%20103.211C126.531%20103.478%20126.754%20103.81%20126.891%20104.18C127.029%20104.55%20127.076%20104.948%20127.03%20105.34L125.19%20120.75C125.151%20121.056%20125.022%20121.342%20124.82%20121.57L85.07%20165.61Z'%20fill='white'/%3e%3cpath%20d='M249.4%20165.88L209.89%20121.99C209.441%20121.489%20209.158%20120.86%20209.08%20120.19L207.38%20105.23C207.336%20104.845%20207.385%20104.455%20207.522%20104.093C207.659%20103.73%20207.88%20103.406%20208.167%20103.146C208.455%20102.886%20208.8%20102.698%20209.174%20102.598C209.548%20102.498%20209.941%20102.488%20210.32%20102.57L224.78%20105.69C225.683%20105.885%20226.502%20106.361%20227.12%20107.05C241.513%20123.01%20255.96%20139.053%20270.46%20155.18C277.81%20163.35%20276.87%20170.38%20269.81%20178.2C255.35%20194.213%20240.907%20210.243%20226.48%20226.29C226.26%20226.537%20225.987%20226.69%20225.66%20226.75C220.51%20227.75%20214.09%20229.75%20208.9%20229.46C208.56%20229.447%20208.307%20229.29%20208.14%20228.99C207.553%20227.917%20207.333%20226.75%20207.48%20225.49C208.26%20218.83%20208.4%20212.11%20211%20209.25C223.833%20195.11%20236.633%20180.94%20249.4%20166.74C249.66%20166.453%20249.66%20166.167%20249.4%20165.88Z'%20fill='white'/%3e%3cpath%20d='M145.53%20162.97L144.14%20174.37C144.111%20174.617%20144.018%20174.852%20143.868%20175.05C143.719%20175.249%20143.519%20175.404%20143.29%20175.5L132.91%20179.87C132.684%20179.963%20132.438%20179.995%20132.196%20179.964C131.954%20179.932%20131.724%20179.838%20131.53%20179.69L122.49%20172.87C122.29%20172.721%20122.133%20172.52%20122.036%20172.29C121.94%20172.06%20121.906%20171.808%20121.94%20171.56L123.52%20160.24C123.554%20159.999%20123.65%20159.77%20123.799%20159.577C123.948%20159.384%20124.145%20159.233%20124.37%20159.14L134.72%20154.86C134.946%20154.767%20135.192%20154.735%20135.434%20154.766C135.676%20154.798%20135.906%20154.892%20136.1%20155.04L144.98%20161.67C145.179%20161.819%20145.334%20162.017%20145.431%20162.246C145.527%20162.474%20145.562%20162.724%20145.53%20162.97Z'%20fill='%23EE8786'/%3e%3cpath%20d='M179.48%20161.34C179.784%20161.562%20180.024%20161.861%20180.177%20162.206C180.33%20162.552%20180.389%20162.933%20180.35%20163.31L179.3%20173.72C179.268%20174.031%20179.13%20174.32%20178.91%20174.54C176.44%20177%20171.05%20178.37%20167.8%20180.05C167.507%20180.203%20167.227%20180.183%20166.96%20179.99L157.41%20172.88C157.279%20172.783%20157.175%20172.654%20157.109%20172.505C157.042%20172.356%20157.015%20172.192%20157.03%20172.03L158.12%20160.49C158.139%20160.313%20158.202%20160.144%20158.304%20160C158.405%20159.856%20158.542%20159.743%20158.7%20159.67L169.6%20154.7C169.761%20154.627%20169.939%20154.599%20170.115%20154.618C170.291%20154.638%20170.458%20154.704%20170.6%20154.81L179.48%20161.34Z'%20fill='%23F7D15C'/%3e%3cpath%20d='M215.49%20163.14L214.06%20174.26C214.023%20174.548%20213.91%20174.821%20213.732%20175.052C213.555%20175.282%20213.319%20175.461%20213.05%20175.57L202.8%20179.72C202.538%20179.826%20202.253%20179.862%20201.972%20179.825C201.692%20179.789%20201.426%20179.68%20201.2%20179.51L192.78%20173.12C192.556%20172.952%20192.379%20172.73%20192.265%20172.475C192.151%20172.219%20192.105%20171.939%20192.13%20171.66L193.14%20160.71C193.166%20160.416%20193.271%20160.135%20193.443%20159.895C193.616%20159.656%20193.849%20159.468%20194.12%20159.35L204.31%20154.93C204.572%20154.816%20204.86%20154.773%20205.144%20154.804C205.428%20154.836%20205.699%20154.941%20205.93%20155.11L214.83%20161.61C215.067%20161.783%20215.253%20162.016%20215.369%20162.285C215.485%20162.554%20215.527%20162.849%20215.49%20163.14Z'%20fill='%2355B7DD'/%3e%3c/svg%3e",
  ep = () => {
    const g = [
      { FileName: "src/React/Footer/Footer.tsx" },
      { FileName: "src/React/Fv/BgImages.tsx" },
      { FileName: "src/React/Fv/FirstView.tsx" },
      { FileName: "src/React/Header/Detail.tsx" },
      { FileName: "src/React/Header/Header.tsx" },
      { FileName: "src/React/SlickSlider/Card/Cards.tsx" },
      { FileName: "src/React/SlickSlider/Card/EightCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/EighteenCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/ElevenCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/FifteenCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/FiveCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/FourCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/FourteenCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/NineCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/NineteenCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/OneCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/SevenCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/SeventeenCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/SixCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/SixteenCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/TenCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/ThirteenCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/ThreeCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/TwelveCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/TwentyCard.tsx" },
      { FileName: "src/React/SlickSlider/Card/TwoCard.tsx" },
      { FileName: "src/React/SlickSlider/Infomation/Links.tsx" },
      { FileName: "src/React/SlickSlider/Infomation/Titles.tsx" },
      { FileName: "src/React/SlickSlider/Modal/Modal.tsx" },
      { FileName: "src/React/SlickSlider/Modal/ModalImg.tsx" },
      { FileName: "src/React/SlickSlider/Modal/ModalLogic.tsx" },
      { FileName: "src/React/SlickSlider/SlickSlider.tsx" },
      { FileName: "src/React/Kengo.tsx" },
      { FileName: "src/App.tsx" },
      { FileName: "src/index.css" },
      { FileName: "src/main.tsx" },
      { FileName: "index.html" },
      { FileName: "jquery.js" },
      { FileName: "jquery.mb.YTPlayer.min.js" },
      { FileName: "main.js" },
    ];
    return i.jsx("div", {
      className: "bg-dark",
      children: i.jsx("div", {
        className: "py-5 bg-white",
        id: "ul",
        children: g.map((S, p) =>
          i.jsx(
            "div",
            {
              className: "hover mx-4 py-2 container border-bottom",
              children: i.jsx("div", {
                className: "file-name-size",
                children: S.FileName,
              }),
            },
            p
          )
        ),
      }),
    });
  },
  np = () =>
    i.jsx("div", {
      className: "margin-center",
      children: i.jsx("div", {
        className: "bg-white py-5 card body detail-card position-absolute",
        children: i.jsxs("div", {
          className: "scroll",
          children: [
            i.jsxs("div", {
              className:
                "file-name-size text-center oshare-font text-dark border-bottom border-1 pb-5",
              children: [
                "このportfolioサイトは、",
                i.jsx("br", {}),
                "ReactとjQueryとVanilla.jsを使って作成しました。",
                i.jsx("br", {}),
                "構成は以下のようになっています。",
              ],
            }),
            i.jsx(ep, {}),
          ],
        }),
      }),
    }),
  tp = () => {
    const [g, S] = Pn.useState(!1),
      p = () => {
        S((R) => !R);
      };
    Pn.useEffect(() => {
      g
        ? ((document.body.style.overflow = "hidden"),
          (document.body.style.position = "fixed"),
          (document.body.style.width = "100%"),
          document.body.classList.add("html-bg-dark"))
        : ((document.body.style.overflow = ""),
          (document.body.style.position = ""),
          (document.body.style.width = ""),
          document.body.classList.remove("html-bg-dark"));
      const R = (D) => {
        D.key === "Escape" && S(!1);
      };
      return (
        document.addEventListener("keydown", R),
        () => {
          document.removeEventListener("keydown", R);
        }
      );
    }, [g]);
    const le = {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.61)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e3,
    };
    return i.jsxs("div", {
      className: "position-absolute top-0 end-0 mt-2 pt-1 pt-md-0 mt-md-3 mx-4",
      children: [
        i.jsx("div", {
          onClick: p,
          className:
            "detail-btn hover fw-bold d-inline-block text-white px-3 py-1 border border-white border-1 oshare-font",
          children: "Detail",
        }),
        g &&
          i.jsx("div", {
            className: "bgBtnOpenClose",
            style: le,
            onClick: p,
            children: i.jsx("div", {
              onClick: (R) => R.stopPropagation(),
              children: i.jsx(np, {}),
            }),
          }),
      ],
    });
  },
  rp = () =>
    i.jsx(i.Fragment, {
      children: i.jsx("header", {
        className: "bg-dark fixed-top",
        children: i.jsxs("div", {
          className: "position-relative",
          children: [
            i.jsx("div", {
              className: "d-flex align-items-start",
              children: i.jsx("div", {
                className: "py-md-1 ps-2",
                children: i.jsx("a", {
                  className: "hover",
                  href: "",
                  children: i.jsx("img", { className: "header-logo", src: bf }),
                }),
              }),
            }),
            i.jsx(tp, {}),
          ],
        }),
      }),
    }),
  lp = "assets/Fv-Wc14AL0I.jpg",
  ip = () => {
    const [g, S] = Pn.useState(""),
      p = Pn.useRef(!1),
      le = Pn.useRef(null);
    Pn.useEffect(() => {
      ((oe) => {
        p.current ||
          ((p.current = !0),
          S(""),
          oe.split("").forEach((A, ve) => {
            setTimeout(() => {
              S((ye) => ye + A),
                ve === oe.length - 1 &&
                  setTimeout(() => {
                    p.current = !1;
                  }, 500);
            }, 80 * ve);
          }));
      })("React & jQuery");
    }, []);
    const R = {
        backgroundImage: `url(${lp})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 1,
      },
      D = { whiteSpace: "nowrap" };
    return i.jsx("div", {
      className: "video-container bg-dark",
      id: "top",
      style: R,
      children: i.jsx("div", {
        className: "overlay-text",
        children: i.jsx("h2", {
          className: "copy",
          children: i.jsx("p", {
            className: "fw-bold oshare-font",
            ref: le,
            style: D,
            children: g,
          }),
        }),
      }),
    });
  },
  sp = () =>
    i.jsxs("div", {
      className: "bg-white",
      children: [i.jsx(rp, {}), i.jsx(ip, {}), i.jsx(Jf, {}), i.jsx(qf, {})],
    }),
  op = () => i.jsx(sp, {});
Ud.createRoot(document.getElementById("root")).render(
  i.jsx(Pn.StrictMode, { children: i.jsx(op, {}) })
);
