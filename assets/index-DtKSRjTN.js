(function () {
  const j = document.createElement("link").relList;
  if (j && j.supports && j.supports("modulepreload")) return;
  for (const P of document.querySelectorAll('link[rel="modulepreload"]')) $(P);
  new MutationObserver((P) => {
    for (const R of P)
      if (R.type === "childList")
        for (const pe of R.addedNodes)
          pe.tagName === "LINK" && pe.rel === "modulepreload" && $(pe);
  }).observe(document, { childList: !0, subtree: !0 });
  function p(P) {
    const R = {};
    return (
      P.integrity && (R.integrity = P.integrity),
      P.referrerPolicy && (R.referrerPolicy = P.referrerPolicy),
      P.crossOrigin === "use-credentials"
        ? (R.credentials = "include")
        : P.crossOrigin === "anonymous"
        ? (R.credentials = "omit")
        : (R.credentials = "same-origin"),
      R
    );
  }
  function $(P) {
    if (P.ep) return;
    P.ep = !0;
    const R = p(P);
    fetch(P.href, R);
  }
})();
var Ts = { exports: {} },
  wr = {},
  Es = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eu;
function _d() {
  if (Eu) return O;
  Eu = 1;
  var g = Symbol.for("react.element"),
    j = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    $ = Symbol.for("react.strict_mode"),
    P = Symbol.for("react.profiler"),
    R = Symbol.for("react.provider"),
    pe = Symbol.for("react.context"),
    oe = Symbol.for("react.forward_ref"),
    V = Symbol.for("react.suspense"),
    ve = Symbol.for("react.memo"),
    ye = Symbol.for("react.lazy"),
    ne = Symbol.iterator;
  function J(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = (ne && d[ne]) || d["@@iterator"]),
        typeof d == "function" ? d : null);
  }
  var $e = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ke = Object.assign,
    q = {};
  function K(d, y, I) {
    (this.props = d),
      (this.context = y),
      (this.refs = q),
      (this.updater = I || $e);
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
  function kt() {}
  kt.prototype = K.prototype;
  function dt(d, y, I) {
    (this.props = d),
      (this.context = y),
      (this.refs = q),
      (this.updater = I || $e);
  }
  var tt = (dt.prototype = new kt());
  (tt.constructor = dt), Ke(tt, K.prototype), (tt.isPureReactComponent = !0);
  var Se = Array.isArray,
    nt = Object.prototype.hasOwnProperty,
    Le = { current: null },
    be = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ze(d, y, I) {
    var H,
      B = {},
      U = null,
      Z = null;
    if (y != null)
      for (H in (y.ref !== void 0 && (Z = y.ref),
      y.key !== void 0 && (U = "" + y.key),
      y))
        nt.call(y, H) && !be.hasOwnProperty(H) && (B[H] = y[H]);
    var W = arguments.length - 2;
    if (W === 1) B.children = I;
    else if (1 < W) {
      for (var ee = Array(W), Ue = 0; Ue < W; Ue++) ee[Ue] = arguments[Ue + 2];
      B.children = ee;
    }
    if (d && d.defaultProps)
      for (H in ((W = d.defaultProps), W)) B[H] === void 0 && (B[H] = W[H]);
    return {
      $$typeof: g,
      type: d,
      key: U,
      ref: Z,
      props: B,
      _owner: Le.current,
    };
  }
  function Pt(d, y) {
    return {
      $$typeof: g,
      type: d.type,
      key: y,
      ref: d.ref,
      props: d.props,
      _owner: d._owner,
    };
  }
  function wt(d) {
    return typeof d == "object" && d !== null && d.$$typeof === g;
  }
  function Gt(d) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      d.replace(/[=:]/g, function (I) {
        return y[I];
      })
    );
  }
  var ft = /\/+/g;
  function Be(d, y) {
    return typeof d == "object" && d !== null && d.key != null
      ? Gt("" + d.key)
      : y.toString(36);
  }
  function rt(d, y, I, H, B) {
    var U = typeof d;
    (U === "undefined" || U === "boolean") && (d = null);
    var Z = !1;
    if (d === null) Z = !0;
    else
      switch (U) {
        case "string":
        case "number":
          Z = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case g:
            case j:
              Z = !0;
          }
      }
    if (Z)
      return (
        (Z = d),
        (B = B(Z)),
        (d = H === "" ? "." + Be(Z, 0) : H),
        Se(B)
          ? ((I = ""),
            d != null && (I = d.replace(ft, "$&/") + "/"),
            rt(B, y, I, "", function (Ue) {
              return Ue;
            }))
          : B != null &&
            (wt(B) &&
              (B = Pt(
                B,
                I +
                  (!B.key || (Z && Z.key === B.key)
                    ? ""
                    : ("" + B.key).replace(ft, "$&/") + "/") +
                  d
              )),
            y.push(B)),
        1
      );
    if (((Z = 0), (H = H === "" ? "." : H + ":"), Se(d)))
      for (var W = 0; W < d.length; W++) {
        U = d[W];
        var ee = H + Be(U, W);
        Z += rt(U, y, I, ee, B);
      }
    else if (((ee = J(d)), typeof ee == "function"))
      for (d = ee.call(d), W = 0; !(U = d.next()).done; )
        (U = U.value), (ee = H + Be(U, W++)), (Z += rt(U, y, I, ee, B));
    else if (U === "object")
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
  function pt(d, y, I) {
    if (d == null) return d;
    var H = [],
      B = 0;
    return (
      rt(d, H, "", "", function (U) {
        return y.call(I, U, B++);
      }),
      H
    );
  }
  function ze(d) {
    if (d._status === -1) {
      var y = d._result;
      (y = y()),
        y.then(
          function (I) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = I));
          },
          function (I) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = I));
          }
        ),
        d._status === -1 && ((d._status = 0), (d._result = y));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var ie = { current: null },
    S = { transition: null },
    z = {
      ReactCurrentDispatcher: ie,
      ReactCurrentBatchConfig: S,
      ReactCurrentOwner: Le,
    };
  function T() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (O.Children = {
      map: pt,
      forEach: function (d, y, I) {
        pt(
          d,
          function () {
            y.apply(this, arguments);
          },
          I
        );
      },
      count: function (d) {
        var y = 0;
        return (
          pt(d, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (d) {
        return (
          pt(d, function (y) {
            return y;
          }) || []
        );
      },
      only: function (d) {
        if (!wt(d))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return d;
      },
    }),
    (O.Component = K),
    (O.Fragment = p),
    (O.Profiler = P),
    (O.PureComponent = dt),
    (O.StrictMode = $),
    (O.Suspense = V),
    (O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
    (O.act = T),
    (O.cloneElement = function (d, y, I) {
      if (d == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            d +
            "."
        );
      var H = Ke({}, d.props),
        B = d.key,
        U = d.ref,
        Z = d._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((U = y.ref), (Z = Le.current)),
          y.key !== void 0 && (B = "" + y.key),
          d.type && d.type.defaultProps)
        )
          var W = d.type.defaultProps;
        for (ee in y)
          nt.call(y, ee) &&
            !be.hasOwnProperty(ee) &&
            (H[ee] = y[ee] === void 0 && W !== void 0 ? W[ee] : y[ee]);
      }
      var ee = arguments.length - 2;
      if (ee === 1) H.children = I;
      else if (1 < ee) {
        W = Array(ee);
        for (var Ue = 0; Ue < ee; Ue++) W[Ue] = arguments[Ue + 2];
        H.children = W;
      }
      return { $$typeof: g, type: d.type, key: B, ref: U, props: H, _owner: Z };
    }),
    (O.createContext = function (d) {
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
        (d.Provider = { $$typeof: R, _context: d }),
        (d.Consumer = d)
      );
    }),
    (O.createElement = Ze),
    (O.createFactory = function (d) {
      var y = Ze.bind(null, d);
      return (y.type = d), y;
    }),
    (O.createRef = function () {
      return { current: null };
    }),
    (O.forwardRef = function (d) {
      return { $$typeof: oe, render: d };
    }),
    (O.isValidElement = wt),
    (O.lazy = function (d) {
      return { $$typeof: ye, _payload: { _status: -1, _result: d }, _init: ze };
    }),
    (O.memo = function (d, y) {
      return { $$typeof: ve, type: d, compare: y === void 0 ? null : y };
    }),
    (O.startTransition = function (d) {
      var y = S.transition;
      S.transition = {};
      try {
        d();
      } finally {
        S.transition = y;
      }
    }),
    (O.unstable_act = T),
    (O.useCallback = function (d, y) {
      return ie.current.useCallback(d, y);
    }),
    (O.useContext = function (d) {
      return ie.current.useContext(d);
    }),
    (O.useDebugValue = function () {}),
    (O.useDeferredValue = function (d) {
      return ie.current.useDeferredValue(d);
    }),
    (O.useEffect = function (d, y) {
      return ie.current.useEffect(d, y);
    }),
    (O.useId = function () {
      return ie.current.useId();
    }),
    (O.useImperativeHandle = function (d, y, I) {
      return ie.current.useImperativeHandle(d, y, I);
    }),
    (O.useInsertionEffect = function (d, y) {
      return ie.current.useInsertionEffect(d, y);
    }),
    (O.useLayoutEffect = function (d, y) {
      return ie.current.useLayoutEffect(d, y);
    }),
    (O.useMemo = function (d, y) {
      return ie.current.useMemo(d, y);
    }),
    (O.useReducer = function (d, y, I) {
      return ie.current.useReducer(d, y, I);
    }),
    (O.useRef = function (d) {
      return ie.current.useRef(d);
    }),
    (O.useState = function (d) {
      return ie.current.useState(d);
    }),
    (O.useSyncExternalStore = function (d, y, I) {
      return ie.current.useSyncExternalStore(d, y, I);
    }),
    (O.useTransition = function () {
      return ie.current.useTransition();
    }),
    (O.version = "18.3.1"),
    O
  );
}
var Lu;
function _s() {
  return Lu || ((Lu = 1), (Es.exports = _d())), Es.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mu;
function bd() {
  if (Mu) return wr;
  Mu = 1;
  var g = _s(),
    j = Symbol.for("react.element"),
    p = Symbol.for("react.fragment"),
    $ = Object.prototype.hasOwnProperty,
    P = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(oe, V, ve) {
    var ye,
      ne = {},
      J = null,
      $e = null;
    ve !== void 0 && (J = "" + ve),
      V.key !== void 0 && (J = "" + V.key),
      V.ref !== void 0 && ($e = V.ref);
    for (ye in V) $.call(V, ye) && !R.hasOwnProperty(ye) && (ne[ye] = V[ye]);
    if (oe && oe.defaultProps)
      for (ye in ((V = oe.defaultProps), V))
        ne[ye] === void 0 && (ne[ye] = V[ye]);
    return {
      $$typeof: j,
      type: oe,
      key: J,
      ref: $e,
      props: ne,
      _owner: P.current,
    };
  }
  return (wr.Fragment = p), (wr.jsx = pe), (wr.jsxs = pe), wr;
}
var Pu;
function zd() {
  return Pu || ((Pu = 1), (Ts.exports = bd())), Ts.exports;
}
var i = zd(),
  gt = _s(),
  bl = {},
  Ls = { exports: {} },
  De = {},
  Ms = { exports: {} },
  Ps = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _u;
function Fd() {
  return (
    _u ||
      ((_u = 1),
      (function (g) {
        function j(S, z) {
          var T = S.length;
          S.push(z);
          e: for (; 0 < T; ) {
            var d = (T - 1) >>> 1,
              y = S[d];
            if (0 < P(y, z)) (S[d] = z), (S[T] = y), (T = d);
            else break e;
          }
        }
        function p(S) {
          return S.length === 0 ? null : S[0];
        }
        function $(S) {
          if (S.length === 0) return null;
          var z = S[0],
            T = S.pop();
          if (T !== z) {
            S[0] = T;
            e: for (var d = 0, y = S.length, I = y >>> 1; d < I; ) {
              var H = 2 * (d + 1) - 1,
                B = S[H],
                U = H + 1,
                Z = S[U];
              if (0 > P(B, T))
                U < y && 0 > P(Z, B)
                  ? ((S[d] = Z), (S[U] = T), (d = U))
                  : ((S[d] = B), (S[H] = T), (d = H));
              else if (U < y && 0 > P(Z, T)) (S[d] = Z), (S[U] = T), (d = U);
              else break e;
            }
          }
          return z;
        }
        function P(S, z) {
          var T = S.sortIndex - z.sortIndex;
          return T !== 0 ? T : S.id - z.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var R = performance;
          g.unstable_now = function () {
            return R.now();
          };
        } else {
          var pe = Date,
            oe = pe.now();
          g.unstable_now = function () {
            return pe.now() - oe;
          };
        }
        var V = [],
          ve = [],
          ye = 1,
          ne = null,
          J = 3,
          $e = !1,
          Ke = !1,
          q = !1,
          K = typeof setTimeout == "function" ? setTimeout : null,
          kt = typeof clearTimeout == "function" ? clearTimeout : null,
          dt = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function tt(S) {
          for (var z = p(ve); z !== null; ) {
            if (z.callback === null) $(ve);
            else if (z.startTime <= S)
              $(ve), (z.sortIndex = z.expirationTime), j(V, z);
            else break;
            z = p(ve);
          }
        }
        function Se(S) {
          if (((q = !1), tt(S), !Ke))
            if (p(V) !== null) (Ke = !0), ze(nt);
            else {
              var z = p(ve);
              z !== null && ie(Se, z.startTime - S);
            }
        }
        function nt(S, z) {
          (Ke = !1), q && ((q = !1), kt(Ze), (Ze = -1)), ($e = !0);
          var T = J;
          try {
            for (
              tt(z), ne = p(V);
              ne !== null && (!(ne.expirationTime > z) || (S && !Gt()));

            ) {
              var d = ne.callback;
              if (typeof d == "function") {
                (ne.callback = null), (J = ne.priorityLevel);
                var y = d(ne.expirationTime <= z);
                (z = g.unstable_now()),
                  typeof y == "function"
                    ? (ne.callback = y)
                    : ne === p(V) && $(V),
                  tt(z);
              } else $(V);
              ne = p(V);
            }
            if (ne !== null) var I = !0;
            else {
              var H = p(ve);
              H !== null && ie(Se, H.startTime - z), (I = !1);
            }
            return I;
          } finally {
            (ne = null), (J = T), ($e = !1);
          }
        }
        var Le = !1,
          be = null,
          Ze = -1,
          Pt = 5,
          wt = -1;
        function Gt() {
          return !(g.unstable_now() - wt < Pt);
        }
        function ft() {
          if (be !== null) {
            var S = g.unstable_now();
            wt = S;
            var z = !0;
            try {
              z = be(!0, S);
            } finally {
              z ? Be() : ((Le = !1), (be = null));
            }
          } else Le = !1;
        }
        var Be;
        if (typeof dt == "function")
          Be = function () {
            dt(ft);
          };
        else if (typeof MessageChannel < "u") {
          var rt = new MessageChannel(),
            pt = rt.port2;
          (rt.port1.onmessage = ft),
            (Be = function () {
              pt.postMessage(null);
            });
        } else
          Be = function () {
            K(ft, 0);
          };
        function ze(S) {
          (be = S), Le || ((Le = !0), Be());
        }
        function ie(S, z) {
          Ze = K(function () {
            S(g.unstable_now());
          }, z);
        }
        (g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (g.unstable_continueExecution = function () {
            Ke || $e || ((Ke = !0), ze(nt));
          }),
          (g.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Pt = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (g.unstable_getFirstCallbackNode = function () {
            return p(V);
          }),
          (g.unstable_next = function (S) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var z = 3;
                break;
              default:
                z = J;
            }
            var T = J;
            J = z;
            try {
              return S();
            } finally {
              J = T;
            }
          }),
          (g.unstable_pauseExecution = function () {}),
          (g.unstable_requestPaint = function () {}),
          (g.unstable_runWithPriority = function (S, z) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var T = J;
            J = S;
            try {
              return z();
            } finally {
              J = T;
            }
          }),
          (g.unstable_scheduleCallback = function (S, z, T) {
            var d = g.unstable_now();
            switch (
              (typeof T == "object" && T !== null
                ? ((T = T.delay),
                  (T = typeof T == "number" && 0 < T ? d + T : d))
                : (T = d),
              S)
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
              (y = T + y),
              (S = {
                id: ye++,
                callback: z,
                priorityLevel: S,
                startTime: T,
                expirationTime: y,
                sortIndex: -1,
              }),
              T > d
                ? ((S.sortIndex = T),
                  j(ve, S),
                  p(V) === null &&
                    S === p(ve) &&
                    (q ? (kt(Ze), (Ze = -1)) : (q = !0), ie(Se, T - d)))
                : ((S.sortIndex = y), j(V, S), Ke || $e || ((Ke = !0), ze(nt))),
              S
            );
          }),
          (g.unstable_shouldYield = Gt),
          (g.unstable_wrapCallback = function (S) {
            var z = J;
            return function () {
              var T = J;
              J = z;
              try {
                return S.apply(this, arguments);
              } finally {
                J = T;
              }
            };
          });
      })(Ps)),
    Ps
  );
}
var bu;
function Id() {
  return bu || ((bu = 1), (Ms.exports = Fd())), Ms.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zu;
function Od() {
  if (zu) return De;
  zu = 1;
  var g = _s(),
    j = Id();
  function p(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var $ = new Set(),
    P = {};
  function R(e, t) {
    pe(e, t), pe(e + "Capture", t);
  }
  function pe(e, t) {
    for (P[e] = t, e = 0; e < t.length; e++) $.add(t[e]);
  }
  var oe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    V = Object.prototype.hasOwnProperty,
    ve =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ye = {},
    ne = {};
  function J(e) {
    return V.call(ne, e)
      ? !0
      : V.call(ye, e)
      ? !1
      : ve.test(e)
      ? (ne[e] = !0)
      : ((ye[e] = !0), !1);
  }
  function $e(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Ke(e, t, n, r) {
    if (t === null || typeof t > "u" || $e(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function q(e, t, n, r, l, s, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
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
      var t = e[0];
      K[t] = new q(t, 1, !1, e[1], null, !1, !1);
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
  var kt = /[\-:]([a-z])/g;
  function dt(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(kt, dt);
      K[t] = new q(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(kt, dt);
        K[t] = new q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(kt, dt);
      K[t] = new q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
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
  function tt(e, t, n, r) {
    var l = K.hasOwnProperty(t) ? K[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Ke(t, n, l, r) && (n = null),
      r || l === null
        ? J(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Se = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    nt = Symbol.for("react.element"),
    Le = Symbol.for("react.portal"),
    be = Symbol.for("react.fragment"),
    Ze = Symbol.for("react.strict_mode"),
    Pt = Symbol.for("react.profiler"),
    wt = Symbol.for("react.provider"),
    Gt = Symbol.for("react.context"),
    ft = Symbol.for("react.forward_ref"),
    Be = Symbol.for("react.suspense"),
    rt = Symbol.for("react.suspense_list"),
    pt = Symbol.for("react.memo"),
    ze = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    S = Symbol.iterator;
  function z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (S && e[S]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var T = Object.assign,
    d;
  function y(e) {
    if (d === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        d = (t && t[1]) || "";
      }
    return (
      `
` +
      d +
      e
    );
  }
  var I = !1;
  function H(e, t) {
    if (!e || I) return "";
    I = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (h) {
            var r = h;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (h) {
            r = h;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (
          var l = h.stack.split(`
`),
            s = r.stack.split(`
`),
            o = l.length - 1,
            a = s.length - 1;
          1 <= o && 0 <= a && l[o] !== s[a];

        )
          a--;
        for (; 1 <= o && 0 <= a; o--, a--)
          if (l[o] !== s[a]) {
            if (o !== 1 || a !== 1)
              do
                if ((o--, a--, 0 > a || l[o] !== s[a])) {
                  var u =
                    `
` + l[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      u.includes("<anonymous>") &&
                      (u = u.replace("<anonymous>", e.displayName)),
                    u
                  );
                }
              while (1 <= o && 0 <= a);
            break;
          }
      }
    } finally {
      (I = !1), (Error.prepareStackTrace = n);
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
  function U(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case be:
        return "Fragment";
      case Le:
        return "Portal";
      case Pt:
        return "Profiler";
      case Ze:
        return "StrictMode";
      case Be:
        return "Suspense";
      case rt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Gt:
          return (e.displayName || "Context") + ".Consumer";
        case wt:
          return (e._context.displayName || "Context") + ".Provider";
        case ft:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case pt:
          return (
            (t = e.displayName || null), t !== null ? t : U(e.type) || "Memo"
          );
        case ze:
          (t = e._payload), (e = e._init);
          try {
            return U(e(t));
          } catch {}
      }
    return null;
  }
  function Z(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return U(t);
      case 8:
        return t === Ze ? "StrictMode" : "Mode";
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
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
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
  function ee(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ue(e) {
    var t = ee(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        s = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            (r = "" + o), s.call(this, o);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function jr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function bs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = ee(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Sr(e) {
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
  function zl(e, t) {
    var n = t.checked;
    return T({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function zs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = W(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Fs(e, t) {
    (t = t.checked), t != null && tt(e, "checked", t, !1);
  }
  function Fl(e, t) {
    Fs(e, t);
    var n = W(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Il(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Il(e, t.type, W(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Is(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Il(e, t, n) {
    (t !== "number" || Sr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var On = Array.isArray;
  function dn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + W(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ol(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return T({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Os(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(p(92));
        if (On(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: W(n) };
  }
  function Rs(e, t) {
    var n = W(t.value),
      r = W(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Hs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Ds(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Rl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ds(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Nr,
    Bs = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Nr = Nr || document.createElement("div"),
            Nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Nr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Rn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Hn = {
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
    Ou = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Hn).forEach(function (e) {
    Ou.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hn[t] = Hn[e]);
    });
  });
  function Us(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Hn.hasOwnProperty(e) && Hn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Qs(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Us(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Ru = T(
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
  function Hl(e, t) {
    if (t) {
      if (Ru[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(p(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(p(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(p(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(p(62));
    }
  }
  function Dl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
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
  function Ul(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ql = null,
    fn = null,
    pn = null;
  function Vs(e) {
    if ((e = sr(e))) {
      if (typeof Ql != "function") throw Error(p(280));
      var t = e.stateNode;
      t && ((t = Kr(t)), Ql(e.stateNode, e.type, t));
    }
  }
  function Ws(e) {
    fn ? (pn ? pn.push(e) : (pn = [e])) : (fn = e);
  }
  function As() {
    if (fn) {
      var e = fn,
        t = pn;
      if (((pn = fn = null), Vs(e), t)) for (e = 0; e < t.length; e++) Vs(t[e]);
    }
  }
  function $s(e, t) {
    return e(t);
  }
  function Ks() {}
  var Vl = !1;
  function Zs(e, t, n) {
    if (Vl) return e(t, n);
    Vl = !0;
    try {
      return $s(e, t, n);
    } finally {
      (Vl = !1), (fn !== null || pn !== null) && (Ks(), As());
    }
  }
  function Dn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Kr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
    if (n && typeof n != "function") throw Error(p(231, t, typeof n));
    return n;
  }
  var Wl = !1;
  if (oe)
    try {
      var Bn = {};
      Object.defineProperty(Bn, "passive", {
        get: function () {
          Wl = !0;
        },
      }),
        window.addEventListener("test", Bn, Bn),
        window.removeEventListener("test", Bn, Bn);
    } catch {
      Wl = !1;
    }
  function Hu(e, t, n, r, l, s, o, a, u) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (x) {
      this.onError(x);
    }
  }
  var Un = !1,
    Cr = null,
    Tr = !1,
    Al = null,
    Du = {
      onError: function (e) {
        (Un = !0), (Cr = e);
      },
    };
  function Bu(e, t, n, r, l, s, o, a, u) {
    (Un = !1), (Cr = null), Hu.apply(Du, arguments);
  }
  function Uu(e, t, n, r, l, s, o, a, u) {
    if ((Bu.apply(this, arguments), Un)) {
      if (Un) {
        var h = Cr;
        (Un = !1), (Cr = null);
      } else throw Error(p(198));
      Tr || ((Tr = !0), (Al = h));
    }
  }
  function Xt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ys(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Gs(e) {
    if (Xt(e) !== e) throw Error(p(188));
  }
  function Qu(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Xt(e)), t === null)) throw Error(p(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var s = l.alternate;
      if (s === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === s.child) {
        for (s = l.child; s; ) {
          if (s === n) return Gs(l), e;
          if (s === r) return Gs(l), t;
          s = s.sibling;
        }
        throw Error(p(188));
      }
      if (n.return !== r.return) (n = l), (r = s);
      else {
        for (var o = !1, a = l.child; a; ) {
          if (a === n) {
            (o = !0), (n = l), (r = s);
            break;
          }
          if (a === r) {
            (o = !0), (r = l), (n = s);
            break;
          }
          a = a.sibling;
        }
        if (!o) {
          for (a = s.child; a; ) {
            if (a === n) {
              (o = !0), (n = s), (r = l);
              break;
            }
            if (a === r) {
              (o = !0), (r = s), (n = l);
              break;
            }
            a = a.sibling;
          }
          if (!o) throw Error(p(189));
        }
      }
      if (n.alternate !== r) throw Error(p(190));
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t;
  }
  function Xs(e) {
    return (e = Qu(e)), e !== null ? Js(e) : null;
  }
  function Js(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Js(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var qs = j.unstable_scheduleCallback,
    eo = j.unstable_cancelCallback,
    Vu = j.unstable_shouldYield,
    Wu = j.unstable_requestPaint,
    ae = j.unstable_now,
    Au = j.unstable_getCurrentPriorityLevel,
    $l = j.unstable_ImmediatePriority,
    to = j.unstable_UserBlockingPriority,
    Er = j.unstable_NormalPriority,
    $u = j.unstable_LowPriority,
    no = j.unstable_IdlePriority,
    Lr = null,
    mt = null;
  function Ku(e) {
    if (mt && typeof mt.onCommitFiberRoot == "function")
      try {
        mt.onCommitFiberRoot(Lr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var lt = Math.clz32 ? Math.clz32 : Gu,
    Zu = Math.log,
    Yu = Math.LN2;
  function Gu(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Zu(e) / Yu) | 0)) | 0;
  }
  var Mr = 64,
    Pr = 4194304;
  function Qn(e) {
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
  function _r(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      s = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var a = o & ~l;
      a !== 0 ? (r = Qn(a)) : ((s &= o), s !== 0 && (r = Qn(s)));
    } else (o = n & ~l), o !== 0 ? (r = Qn(o)) : s !== 0 && (r = Qn(s));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (s = t & -t), l >= s || (l === 16 && (s & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - lt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function Xu(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
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
        return t + 5e3;
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
  function Ju(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        s = e.pendingLanes;
      0 < s;

    ) {
      var o = 31 - lt(s),
        a = 1 << o,
        u = l[o];
      u === -1
        ? (!(a & n) || a & r) && (l[o] = Xu(a, t))
        : u <= t && (e.expiredLanes |= a),
        (s &= ~a);
    }
  }
  function Kl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ro() {
    var e = Mr;
    return (Mr <<= 1), !(Mr & 4194240) && (Mr = 64), e;
  }
  function Zl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - lt(t)),
      (e[t] = n);
  }
  function qu(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - lt(n),
        s = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s);
    }
  }
  function Yl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - lt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var A = 0;
  function lo(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var io,
    Gl,
    so,
    oo,
    ao,
    Xl = !1,
    br = [],
    _t = null,
    bt = null,
    zt = null,
    Wn = new Map(),
    An = new Map(),
    Ft = [],
    ec =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function uo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        _t = null;
        break;
      case "dragenter":
      case "dragleave":
        bt = null;
        break;
      case "mouseover":
      case "mouseout":
        zt = null;
        break;
      case "pointerover":
      case "pointerout":
        Wn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        An.delete(t.pointerId);
    }
  }
  function $n(e, t, n, r, l, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: s,
          targetContainers: [l],
        }),
        t !== null && ((t = sr(t)), t !== null && Gl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function tc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (_t = $n(_t, e, t, n, r, l)), !0;
      case "dragenter":
        return (bt = $n(bt, e, t, n, r, l)), !0;
      case "mouseover":
        return (zt = $n(zt, e, t, n, r, l)), !0;
      case "pointerover":
        var s = l.pointerId;
        return Wn.set(s, $n(Wn.get(s) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (s = l.pointerId), An.set(s, $n(An.get(s) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function co(e) {
    var t = Jt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ys(n)), t !== null)) {
            (e.blockedOn = t),
              ao(e.priority, function () {
                so(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function zr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Bl = r), n.target.dispatchEvent(r), (Bl = null);
      } else return (t = sr(n)), t !== null && Gl(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function fo(e, t, n) {
    zr(e) && n.delete(t);
  }
  function nc() {
    (Xl = !1),
      _t !== null && zr(_t) && (_t = null),
      bt !== null && zr(bt) && (bt = null),
      zt !== null && zr(zt) && (zt = null),
      Wn.forEach(fo),
      An.forEach(fo);
  }
  function Kn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Xl ||
        ((Xl = !0),
        j.unstable_scheduleCallback(j.unstable_NormalPriority, nc)));
  }
  function Zn(e) {
    function t(l) {
      return Kn(l, e);
    }
    if (0 < br.length) {
      Kn(br[0], e);
      for (var n = 1; n < br.length; n++) {
        var r = br[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      _t !== null && Kn(_t, e),
        bt !== null && Kn(bt, e),
        zt !== null && Kn(zt, e),
        Wn.forEach(t),
        An.forEach(t),
        n = 0;
      n < Ft.length;
      n++
    )
      (r = Ft[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ft.length && ((n = Ft[0]), n.blockedOn === null); )
      co(n), n.blockedOn === null && Ft.shift();
  }
  var mn = Se.ReactCurrentBatchConfig,
    Fr = !0;
  function rc(e, t, n, r) {
    var l = A,
      s = mn.transition;
    mn.transition = null;
    try {
      (A = 1), Jl(e, t, n, r);
    } finally {
      (A = l), (mn.transition = s);
    }
  }
  function lc(e, t, n, r) {
    var l = A,
      s = mn.transition;
    mn.transition = null;
    try {
      (A = 4), Jl(e, t, n, r);
    } finally {
      (A = l), (mn.transition = s);
    }
  }
  function Jl(e, t, n, r) {
    if (Fr) {
      var l = ql(e, t, n, r);
      if (l === null) vi(e, t, r, Ir, n), uo(e, r);
      else if (tc(l, e, t, n, r)) r.stopPropagation();
      else if ((uo(e, r), t & 4 && -1 < ec.indexOf(e))) {
        for (; l !== null; ) {
          var s = sr(l);
          if (
            (s !== null && io(s),
            (s = ql(e, t, n, r)),
            s === null && vi(e, t, r, Ir, n),
            s === l)
          )
            break;
          l = s;
        }
        l !== null && r.stopPropagation();
      } else vi(e, t, r, null, n);
    }
  }
  var Ir = null;
  function ql(e, t, n, r) {
    if (((Ir = null), (e = Ul(r)), (e = Jt(e)), e !== null))
      if (((t = Xt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ys(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Ir = e), null;
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
        switch (Au()) {
          case $l:
            return 1;
          case to:
            return 4;
          case Er:
          case $u:
            return 16;
          case no:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var It = null,
    ei = null,
    Or = null;
  function mo() {
    if (Or) return Or;
    var e,
      t = ei,
      n = t.length,
      r,
      l = "value" in It ? It.value : It.textContent,
      s = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[s - r]; r++);
    return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Rr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Hr() {
    return !0;
  }
  function ho() {
    return !1;
  }
  function Qe(e) {
    function t(n, r, l, s, o) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = s),
        (this.target = o),
        (this.currentTarget = null);
      for (var a in e)
        e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? Hr
          : ho),
        (this.isPropagationStopped = ho),
        this
      );
    }
    return (
      T(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Hr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Hr));
        },
        persist: function () {},
        isPersistent: Hr,
      }),
      t
    );
  }
  var hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ti = Qe(hn),
    Yn = T({}, hn, { view: 0, detail: 0 }),
    ic = Qe(Yn),
    ni,
    ri,
    Gn,
    Dr = T({}, Yn, {
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
          : (e !== Gn &&
              (Gn && e.type === "mousemove"
                ? ((ni = e.screenX - Gn.screenX), (ri = e.screenY - Gn.screenY))
                : (ri = ni = 0),
              (Gn = e)),
            ni);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ri;
      },
    }),
    vo = Qe(Dr),
    sc = T({}, Dr, { dataTransfer: 0 }),
    oc = Qe(sc),
    ac = T({}, Yn, { relatedTarget: 0 }),
    li = Qe(ac),
    uc = T({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cc = Qe(uc),
    dc = T({}, hn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    fc = Qe(dc),
    pc = T({}, hn, { data: 0 }),
    yo = Qe(pc),
    mc = {
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
    hc = {
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
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = vc[e])
      ? !!t[e]
      : !1;
  }
  function ii() {
    return yc;
  }
  var xc = T({}, Yn, {
      key: function (e) {
        if (e.key) {
          var t = mc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Rr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? hc[e.keyCode] || "Unidentified"
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
        return e.type === "keypress" ? Rr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Rr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    gc = Qe(xc),
    kc = T({}, Dr, {
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
    xo = Qe(kc),
    wc = T({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ii,
    }),
    jc = Qe(wc),
    Sc = T({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nc = Qe(Sc),
    Cc = T({}, Dr, {
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
    Tc = Qe(Cc),
    Ec = [9, 13, 27, 32],
    si = oe && "CompositionEvent" in window,
    Xn = null;
  oe && "documentMode" in document && (Xn = document.documentMode);
  var Lc = oe && "TextEvent" in window && !Xn,
    go = oe && (!si || (Xn && 8 < Xn && 11 >= Xn)),
    ko = " ",
    wo = !1;
  function jo(e, t) {
    switch (e) {
      case "keyup":
        return Ec.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function So(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var vn = !1;
  function Mc(e, t) {
    switch (e) {
      case "compositionend":
        return So(t);
      case "keypress":
        return t.which !== 32 ? null : ((wo = !0), ko);
      case "textInput":
        return (e = t.data), e === ko && wo ? null : e;
      default:
        return null;
    }
  }
  function Pc(e, t) {
    if (vn)
      return e === "compositionend" || (!si && jo(e, t))
        ? ((e = mo()), (Or = ei = It = null), (vn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return go && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _c = {
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
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_c[e.type] : t === "textarea";
  }
  function Co(e, t, n, r) {
    Ws(r),
      (t = Wr(t, "onChange")),
      0 < t.length &&
        ((n = new ti("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Jn = null,
    qn = null;
  function bc(e) {
    Vo(e, 0);
  }
  function Br(e) {
    var t = wn(e);
    if (bs(t)) return e;
  }
  function zc(e, t) {
    if (e === "change") return t;
  }
  var To = !1;
  if (oe) {
    var oi;
    if (oe) {
      var ai = "oninput" in document;
      if (!ai) {
        var Eo = document.createElement("div");
        Eo.setAttribute("oninput", "return;"),
          (ai = typeof Eo.oninput == "function");
      }
      oi = ai;
    } else oi = !1;
    To = oi && (!document.documentMode || 9 < document.documentMode);
  }
  function Lo() {
    Jn && (Jn.detachEvent("onpropertychange", Mo), (qn = Jn = null));
  }
  function Mo(e) {
    if (e.propertyName === "value" && Br(qn)) {
      var t = [];
      Co(t, qn, e, Ul(e)), Zs(bc, t);
    }
  }
  function Fc(e, t, n) {
    e === "focusin"
      ? (Lo(), (Jn = t), (qn = n), Jn.attachEvent("onpropertychange", Mo))
      : e === "focusout" && Lo();
  }
  function Ic(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Br(qn);
  }
  function Oc(e, t) {
    if (e === "click") return Br(t);
  }
  function Rc(e, t) {
    if (e === "input" || e === "change") return Br(t);
  }
  function Hc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var it = typeof Object.is == "function" ? Object.is : Hc;
  function er(e, t) {
    if (it(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!V.call(t, l) || !it(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Po(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function _o(e, t) {
    var n = Po(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Po(n);
    }
  }
  function bo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? bo(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function zo() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function ui(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Dc(e) {
    var t = zo(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      bo(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ui(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            s = Math.min(r.start, l);
          (r = r.end === void 0 ? s : Math.min(r.end, l)),
            !e.extend && s > r && ((l = r), (r = s), (s = l)),
            (l = _o(n, s));
          var o = _o(n, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            s > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Bc = oe && "documentMode" in document && 11 >= document.documentMode,
    yn = null,
    ci = null,
    tr = null,
    di = !1;
  function Fo(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    di ||
      yn == null ||
      yn !== Sr(r) ||
      ((r = yn),
      "selectionStart" in r && ui(r)
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
      (tr && er(tr, r)) ||
        ((tr = r),
        (r = Wr(ci, "onSelect")),
        0 < r.length &&
          ((t = new ti("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = yn))));
  }
  function Ur(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var xn = {
      animationend: Ur("Animation", "AnimationEnd"),
      animationiteration: Ur("Animation", "AnimationIteration"),
      animationstart: Ur("Animation", "AnimationStart"),
      transitionend: Ur("Transition", "TransitionEnd"),
    },
    fi = {},
    Io = {};
  oe &&
    ((Io = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete xn.animationend.animation,
      delete xn.animationiteration.animation,
      delete xn.animationstart.animation),
    "TransitionEvent" in window || delete xn.transitionend.transition);
  function Qr(e) {
    if (fi[e]) return fi[e];
    if (!xn[e]) return e;
    var t = xn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Io) return (fi[e] = t[n]);
    return e;
  }
  var Oo = Qr("animationend"),
    Ro = Qr("animationiteration"),
    Ho = Qr("animationstart"),
    Do = Qr("transitionend"),
    Bo = new Map(),
    Uo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ot(e, t) {
    Bo.set(e, t), R(t, [e]);
  }
  for (var pi = 0; pi < Uo.length; pi++) {
    var mi = Uo[pi],
      Uc = mi.toLowerCase(),
      Qc = mi[0].toUpperCase() + mi.slice(1);
    Ot(Uc, "on" + Qc);
  }
  Ot(Oo, "onAnimationEnd"),
    Ot(Ro, "onAnimationIteration"),
    Ot(Ho, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot(Do, "onTransitionEnd"),
    pe("onMouseEnter", ["mouseout", "mouseover"]),
    pe("onMouseLeave", ["mouseout", "mouseover"]),
    pe("onPointerEnter", ["pointerout", "pointerover"]),
    pe("onPointerLeave", ["pointerout", "pointerover"]),
    R(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    R(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    R("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    R(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    R(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    R(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var nr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Vc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(nr)
    );
  function Qo(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Uu(r, t, void 0, e), (e.currentTarget = null);
  }
  function Vo(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var a = r[o],
              u = a.instance,
              h = a.currentTarget;
            if (((a = a.listener), u !== s && l.isPropagationStopped()))
              break e;
            Qo(l, a, h), (s = u);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((a = r[o]),
              (u = a.instance),
              (h = a.currentTarget),
              (a = a.listener),
              u !== s && l.isPropagationStopped())
            )
              break e;
            Qo(l, a, h), (s = u);
          }
      }
    }
    if (Tr) throw ((e = Al), (Tr = !1), (Al = null), e);
  }
  function G(e, t) {
    var n = t[ji];
    n === void 0 && (n = t[ji] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Wo(t, e, 2, !1), n.add(r));
  }
  function hi(e, t, n) {
    var r = 0;
    t && (r |= 4), Wo(n, e, r, t);
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function rr(e) {
    if (!e[Vr]) {
      (e[Vr] = !0),
        $.forEach(function (n) {
          n !== "selectionchange" && (Vc.has(n) || hi(n, !1, e), hi(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || ((t[Vr] = !0), hi("selectionchange", !1, t));
    }
  }
  function Wo(e, t, n, r) {
    switch (po(t)) {
      case 1:
        var l = rc;
        break;
      case 4:
        l = lc;
        break;
      default:
        l = Jl;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Wl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function vi(e, t, n, r, l) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var a = r.stateNode.containerInfo;
          if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var u = o.tag;
              if (
                (u === 3 || u === 4) &&
                ((u = o.stateNode.containerInfo),
                u === l || (u.nodeType === 8 && u.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; a !== null; ) {
            if (((o = Jt(a)), o === null)) return;
            if (((u = o.tag), u === 5 || u === 6)) {
              r = s = o;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
    Zs(function () {
      var h = s,
        x = Ul(n),
        k = [];
      e: {
        var v = Bo.get(e);
        if (v !== void 0) {
          var N = ti,
            E = e;
          switch (e) {
            case "keypress":
              if (Rr(n) === 0) break e;
            case "keydown":
            case "keyup":
              N = gc;
              break;
            case "focusin":
              (E = "focus"), (N = li);
              break;
            case "focusout":
              (E = "blur"), (N = li);
              break;
            case "beforeblur":
            case "afterblur":
              N = li;
              break;
            case "click":
              if (n.button === 2) break e;
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
              N = jc;
              break;
            case Oo:
            case Ro:
            case Ho:
              N = cc;
              break;
            case Do:
              N = Nc;
              break;
            case "scroll":
              N = ic;
              break;
            case "wheel":
              N = Tc;
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
          var L = (t & 4) !== 0,
            ue = !L && e === "scroll",
            f = L ? (v !== null ? v + "Capture" : null) : v;
          L = [];
          for (var c = h, m; c !== null; ) {
            m = c;
            var w = m.stateNode;
            if (
              (m.tag === 5 &&
                w !== null &&
                ((m = w),
                f !== null &&
                  ((w = Dn(c, f)), w != null && L.push(lr(c, w, m)))),
              ue)
            )
              break;
            c = c.return;
          }
          0 < L.length &&
            ((v = new N(v, E, null, n, x)), k.push({ event: v, listeners: L }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((v = e === "mouseover" || e === "pointerover"),
            (N = e === "mouseout" || e === "pointerout"),
            v &&
              n !== Bl &&
              (E = n.relatedTarget || n.fromElement) &&
              (Jt(E) || E[jt]))
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
              ? ((E = n.relatedTarget || n.toElement),
                (N = h),
                (E = E ? Jt(E) : null),
                E !== null &&
                  ((ue = Xt(E)), E !== ue || (E.tag !== 5 && E.tag !== 6)) &&
                  (E = null))
              : ((N = null), (E = h)),
            N !== E)
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
              (ue = N == null ? v : wn(N)),
              (m = E == null ? v : wn(E)),
              (v = new L(w, c + "leave", N, n, x)),
              (v.target = ue),
              (v.relatedTarget = m),
              (w = null),
              Jt(x) === h &&
                ((L = new L(f, c + "enter", E, n, x)),
                (L.target = m),
                (L.relatedTarget = ue),
                (w = L)),
              (ue = w),
              N && E)
            )
              t: {
                for (L = N, f = E, c = 0, m = L; m; m = gn(m)) c++;
                for (m = 0, w = f; w; w = gn(w)) m++;
                for (; 0 < c - m; ) (L = gn(L)), c--;
                for (; 0 < m - c; ) (f = gn(f)), m--;
                for (; c--; ) {
                  if (L === f || (f !== null && L === f.alternate)) break t;
                  (L = gn(L)), (f = gn(f));
                }
                L = null;
              }
            else L = null;
            N !== null && Ao(k, v, N, L, !1),
              E !== null && ue !== null && Ao(k, ue, E, L, !0);
          }
        }
        e: {
          if (
            ((v = h ? wn(h) : window),
            (N = v.nodeName && v.nodeName.toLowerCase()),
            N === "select" || (N === "input" && v.type === "file"))
          )
            var M = zc;
          else if (No(v))
            if (To) M = Rc;
            else {
              M = Ic;
              var _ = Fc;
            }
          else
            (N = v.nodeName) &&
              N.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") &&
              (M = Oc);
          if (M && (M = M(e, h))) {
            Co(k, M, n, x);
            break e;
          }
          _ && _(e, v, h),
            e === "focusout" &&
              (_ = v._wrapperState) &&
              _.controlled &&
              v.type === "number" &&
              Il(v, "number", v.value);
        }
        switch (((_ = h ? wn(h) : window), e)) {
          case "focusin":
            (No(_) || _.contentEditable === "true") &&
              ((yn = _), (ci = h), (tr = null));
            break;
          case "focusout":
            tr = ci = yn = null;
            break;
          case "mousedown":
            di = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (di = !1), Fo(k, n, x);
            break;
          case "selectionchange":
            if (Bc) break;
          case "keydown":
          case "keyup":
            Fo(k, n, x);
        }
        var b;
        if (si)
          e: {
            switch (e) {
              case "compositionstart":
                var F = "onCompositionStart";
                break e;
              case "compositionend":
                F = "onCompositionEnd";
                break e;
              case "compositionupdate":
                F = "onCompositionUpdate";
                break e;
            }
            F = void 0;
          }
        else
          vn
            ? jo(e, n) && (F = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (F = "onCompositionStart");
        F &&
          (go &&
            n.locale !== "ko" &&
            (vn || F !== "onCompositionStart"
              ? F === "onCompositionEnd" && vn && (b = mo())
              : ((It = x),
                (ei = "value" in It ? It.value : It.textContent),
                (vn = !0))),
          (_ = Wr(h, F)),
          0 < _.length &&
            ((F = new yo(F, e, null, n, x)),
            k.push({ event: F, listeners: _ }),
            b ? (F.data = b) : ((b = So(n)), b !== null && (F.data = b)))),
          (b = Lc ? Mc(e, n) : Pc(e, n)) &&
            ((h = Wr(h, "onBeforeInput")),
            0 < h.length &&
              ((x = new yo("onBeforeInput", "beforeinput", null, n, x)),
              k.push({ event: x, listeners: h }),
              (x.data = b)));
      }
      Vo(k, t);
    });
  }
  function lr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Wr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        s = l.stateNode;
      l.tag === 5 &&
        s !== null &&
        ((l = s),
        (s = Dn(e, n)),
        s != null && r.unshift(lr(e, s, l)),
        (s = Dn(e, t)),
        s != null && r.push(lr(e, s, l))),
        (e = e.return);
    }
    return r;
  }
  function gn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ao(e, t, n, r, l) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
      var a = n,
        u = a.alternate,
        h = a.stateNode;
      if (u !== null && u === r) break;
      a.tag === 5 &&
        h !== null &&
        ((a = h),
        l
          ? ((u = Dn(n, s)), u != null && o.unshift(lr(n, u, a)))
          : l || ((u = Dn(n, s)), u != null && o.push(lr(n, u, a)))),
        (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Wc = /\r\n?/g,
    Ac = /\u0000|\uFFFD/g;
  function $o(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Wc,
        `
`
      )
      .replace(Ac, "");
  }
  function Ar(e, t, n) {
    if (((t = $o(t)), $o(e) !== t && n)) throw Error(p(425));
  }
  function $r() {}
  var yi = null,
    xi = null;
  function gi(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ki = typeof setTimeout == "function" ? setTimeout : void 0,
    $c = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ko = typeof Promise == "function" ? Promise : void 0,
    Kc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ko < "u"
        ? function (e) {
            return Ko.resolve(null).then(e).catch(Zc);
          }
        : ki;
  function Zc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wi(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), Zn(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Zn(t);
  }
  function Rt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Zo(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var kn = Math.random().toString(36).slice(2),
    ht = "__reactFiber$" + kn,
    ir = "__reactProps$" + kn,
    jt = "__reactContainer$" + kn,
    ji = "__reactEvents$" + kn,
    Yc = "__reactListeners$" + kn,
    Gc = "__reactHandles$" + kn;
  function Jt(e) {
    var t = e[ht];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[jt] || n[ht])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Zo(e); e !== null; ) {
            if ((n = e[ht])) return n;
            e = Zo(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function sr(e) {
    return (
      (e = e[ht] || e[jt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33));
  }
  function Kr(e) {
    return e[ir] || null;
  }
  var Si = [],
    jn = -1;
  function Ht(e) {
    return { current: e };
  }
  function X(e) {
    0 > jn || ((e.current = Si[jn]), (Si[jn] = null), jn--);
  }
  function Y(e, t) {
    jn++, (Si[jn] = e.current), (e.current = t);
  }
  var Dt = {},
    Ne = Ht(Dt),
    Fe = Ht(!1),
    qt = Dt;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Dt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      s;
    for (s in n) l[s] = t[s];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ie(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Zr() {
    X(Fe), X(Ne);
  }
  function Yo(e, t, n) {
    if (Ne.current !== Dt) throw Error(p(168));
    Y(Ne, t), Y(Fe, n);
  }
  function Go(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(p(108, Z(e) || "Unknown", l));
    return T({}, n, r);
  }
  function Yr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Dt),
      (qt = Ne.current),
      Y(Ne, e),
      Y(Fe, Fe.current),
      !0
    );
  }
  function Xo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    n
      ? ((e = Go(e, t, qt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        X(Fe),
        X(Ne),
        Y(Ne, e))
      : X(Fe),
      Y(Fe, n);
  }
  var St = null,
    Gr = !1,
    Ni = !1;
  function Jo(e) {
    St === null ? (St = [e]) : St.push(e);
  }
  function Xc(e) {
    (Gr = !0), Jo(e);
  }
  function Bt() {
    if (!Ni && St !== null) {
      Ni = !0;
      var e = 0,
        t = A;
      try {
        var n = St;
        for (A = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (St = null), (Gr = !1);
      } catch (l) {
        throw (St !== null && (St = St.slice(e + 1)), qs($l, Bt), l);
      } finally {
        (A = t), (Ni = !1);
      }
    }
    return null;
  }
  var Nn = [],
    Cn = 0,
    Xr = null,
    Jr = 0,
    Ye = [],
    Ge = 0,
    en = null,
    Nt = 1,
    Ct = "";
  function tn(e, t) {
    (Nn[Cn++] = Jr), (Nn[Cn++] = Xr), (Xr = e), (Jr = t);
  }
  function qo(e, t, n) {
    (Ye[Ge++] = Nt), (Ye[Ge++] = Ct), (Ye[Ge++] = en), (en = e);
    var r = Nt;
    e = Ct;
    var l = 32 - lt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var s = 32 - lt(t) + l;
    if (30 < s) {
      var o = l - (l % 5);
      (s = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (Nt = (1 << (32 - lt(t) + l)) | (n << l) | r),
        (Ct = s + e);
    } else (Nt = (1 << s) | (n << l) | r), (Ct = e);
  }
  function Ci(e) {
    e.return !== null && (tn(e, 1), qo(e, 1, 0));
  }
  function Ti(e) {
    for (; e === Xr; )
      (Xr = Nn[--Cn]), (Nn[Cn] = null), (Jr = Nn[--Cn]), (Nn[Cn] = null);
    for (; e === en; )
      (en = Ye[--Ge]),
        (Ye[Ge] = null),
        (Ct = Ye[--Ge]),
        (Ye[Ge] = null),
        (Nt = Ye[--Ge]),
        (Ye[Ge] = null);
  }
  var Ve = null,
    We = null,
    te = !1,
    st = null;
  function ea(e, t) {
    var n = et(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function ta(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ve = e), (We = Rt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ve = e), (We = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = en !== null ? { id: Nt, overflow: Ct } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = et(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ve = e),
              (We = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ei(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Li(e) {
    if (te) {
      var t = We;
      if (t) {
        var n = t;
        if (!ta(e, t)) {
          if (Ei(e)) throw Error(p(418));
          t = Rt(n.nextSibling);
          var r = Ve;
          t && ta(e, t)
            ? ea(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ve = e));
        }
      } else {
        if (Ei(e)) throw Error(p(418));
        (e.flags = (e.flags & -4097) | 2), (te = !1), (Ve = e);
      }
    }
  }
  function na(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ve = e;
  }
  function qr(e) {
    if (e !== Ve) return !1;
    if (!te) return na(e), (te = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps))),
      t && (t = We))
    ) {
      if (Ei(e)) throw (ra(), Error(p(418)));
      for (; t; ) ea(e, t), (t = Rt(t.nextSibling));
    }
    if ((na(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(p(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                We = Rt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        We = null;
      }
    } else We = Ve ? Rt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ra() {
    for (var e = We; e; ) e = Rt(e.nextSibling);
  }
  function Tn() {
    (We = Ve = null), (te = !1);
  }
  function Mi(e) {
    st === null ? (st = [e]) : st.push(e);
  }
  var Jc = Se.ReactCurrentBatchConfig;
  function or(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(p(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(p(147, e));
        var l = r,
          s = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === s
          ? t.ref
          : ((t = function (o) {
              var a = l.refs;
              o === null ? delete a[s] : (a[s] = o);
            }),
            (t._stringRef = s),
            t);
      }
      if (typeof e != "string") throw Error(p(284));
      if (!n._owner) throw Error(p(290, e));
    }
    return e;
  }
  function el(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        p(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function la(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ia(e) {
    function t(f, c) {
      if (e) {
        var m = f.deletions;
        m === null ? ((f.deletions = [c]), (f.flags |= 16)) : m.push(c);
      }
    }
    function n(f, c) {
      if (!e) return null;
      for (; c !== null; ) t(f, c), (c = c.sibling);
      return null;
    }
    function r(f, c) {
      for (f = new Map(); c !== null; )
        c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
      return f;
    }
    function l(f, c) {
      return (f = Zt(f, c)), (f.index = 0), (f.sibling = null), f;
    }
    function s(f, c, m) {
      return (
        (f.index = m),
        e
          ? ((m = f.alternate),
            m !== null
              ? ((m = m.index), m < c ? ((f.flags |= 2), c) : m)
              : ((f.flags |= 2), c))
          : ((f.flags |= 1048576), c)
      );
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function a(f, c, m, w) {
      return c === null || c.tag !== 6
        ? ((c = ks(m, f.mode, w)), (c.return = f), c)
        : ((c = l(c, m)), (c.return = f), c);
    }
    function u(f, c, m, w) {
      var M = m.type;
      return M === be
        ? x(f, c, m.props.children, w, m.key)
        : c !== null &&
          (c.elementType === M ||
            (typeof M == "object" &&
              M !== null &&
              M.$$typeof === ze &&
              la(M) === c.type))
        ? ((w = l(c, m.props)), (w.ref = or(f, c, m)), (w.return = f), w)
        : ((w = Nl(m.type, m.key, m.props, null, f.mode, w)),
          (w.ref = or(f, c, m)),
          (w.return = f),
          w);
    }
    function h(f, c, m, w) {
      return c === null ||
        c.tag !== 4 ||
        c.stateNode.containerInfo !== m.containerInfo ||
        c.stateNode.implementation !== m.implementation
        ? ((c = ws(m, f.mode, w)), (c.return = f), c)
        : ((c = l(c, m.children || [])), (c.return = f), c);
    }
    function x(f, c, m, w, M) {
      return c === null || c.tag !== 7
        ? ((c = cn(m, f.mode, w, M)), (c.return = f), c)
        : ((c = l(c, m)), (c.return = f), c);
    }
    function k(f, c, m) {
      if ((typeof c == "string" && c !== "") || typeof c == "number")
        return (c = ks("" + c, f.mode, m)), (c.return = f), c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case nt:
            return (
              (m = Nl(c.type, c.key, c.props, null, f.mode, m)),
              (m.ref = or(f, null, c)),
              (m.return = f),
              m
            );
          case Le:
            return (c = ws(c, f.mode, m)), (c.return = f), c;
          case ze:
            var w = c._init;
            return k(f, w(c._payload), m);
        }
        if (On(c) || z(c))
          return (c = cn(c, f.mode, m, null)), (c.return = f), c;
        el(f, c);
      }
      return null;
    }
    function v(f, c, m, w) {
      var M = c !== null ? c.key : null;
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return M !== null ? null : a(f, c, "" + m, w);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case nt:
            return m.key === M ? u(f, c, m, w) : null;
          case Le:
            return m.key === M ? h(f, c, m, w) : null;
          case ze:
            return (M = m._init), v(f, c, M(m._payload), w);
        }
        if (On(m) || z(m)) return M !== null ? null : x(f, c, m, w, null);
        el(f, m);
      }
      return null;
    }
    function N(f, c, m, w, M) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (f = f.get(m) || null), a(c, f, "" + w, M);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case nt:
            return (
              (f = f.get(w.key === null ? m : w.key) || null), u(c, f, w, M)
            );
          case Le:
            return (
              (f = f.get(w.key === null ? m : w.key) || null), h(c, f, w, M)
            );
          case ze:
            var _ = w._init;
            return N(f, c, m, _(w._payload), M);
        }
        if (On(w) || z(w)) return (f = f.get(m) || null), x(c, f, w, M, null);
        el(c, w);
      }
      return null;
    }
    function E(f, c, m, w) {
      for (
        var M = null, _ = null, b = c, F = (c = 0), ke = null;
        b !== null && F < m.length;
        F++
      ) {
        b.index > F ? ((ke = b), (b = null)) : (ke = b.sibling);
        var Q = v(f, b, m[F], w);
        if (Q === null) {
          b === null && (b = ke);
          break;
        }
        e && b && Q.alternate === null && t(f, b),
          (c = s(Q, c, F)),
          _ === null ? (M = Q) : (_.sibling = Q),
          (_ = Q),
          (b = ke);
      }
      if (F === m.length) return n(f, b), te && tn(f, F), M;
      if (b === null) {
        for (; F < m.length; F++)
          (b = k(f, m[F], w)),
            b !== null &&
              ((c = s(b, c, F)),
              _ === null ? (M = b) : (_.sibling = b),
              (_ = b));
        return te && tn(f, F), M;
      }
      for (b = r(f, b); F < m.length; F++)
        (ke = N(b, f, F, m[F], w)),
          ke !== null &&
            (e &&
              ke.alternate !== null &&
              b.delete(ke.key === null ? F : ke.key),
            (c = s(ke, c, F)),
            _ === null ? (M = ke) : (_.sibling = ke),
            (_ = ke));
      return (
        e &&
          b.forEach(function (Yt) {
            return t(f, Yt);
          }),
        te && tn(f, F),
        M
      );
    }
    function L(f, c, m, w) {
      var M = z(m);
      if (typeof M != "function") throw Error(p(150));
      if (((m = M.call(m)), m == null)) throw Error(p(151));
      for (
        var _ = (M = null), b = c, F = (c = 0), ke = null, Q = m.next();
        b !== null && !Q.done;
        F++, Q = m.next()
      ) {
        b.index > F ? ((ke = b), (b = null)) : (ke = b.sibling);
        var Yt = v(f, b, Q.value, w);
        if (Yt === null) {
          b === null && (b = ke);
          break;
        }
        e && b && Yt.alternate === null && t(f, b),
          (c = s(Yt, c, F)),
          _ === null ? (M = Yt) : (_.sibling = Yt),
          (_ = Yt),
          (b = ke);
      }
      if (Q.done) return n(f, b), te && tn(f, F), M;
      if (b === null) {
        for (; !Q.done; F++, Q = m.next())
          (Q = k(f, Q.value, w)),
            Q !== null &&
              ((c = s(Q, c, F)),
              _ === null ? (M = Q) : (_.sibling = Q),
              (_ = Q));
        return te && tn(f, F), M;
      }
      for (b = r(f, b); !Q.done; F++, Q = m.next())
        (Q = N(b, f, F, Q.value, w)),
          Q !== null &&
            (e && Q.alternate !== null && b.delete(Q.key === null ? F : Q.key),
            (c = s(Q, c, F)),
            _ === null ? (M = Q) : (_.sibling = Q),
            (_ = Q));
      return (
        e &&
          b.forEach(function (Pd) {
            return t(f, Pd);
          }),
        te && tn(f, F),
        M
      );
    }
    function ue(f, c, m, w) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === be &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case nt:
            e: {
              for (var M = m.key, _ = c; _ !== null; ) {
                if (_.key === M) {
                  if (((M = m.type), M === be)) {
                    if (_.tag === 7) {
                      n(f, _.sibling),
                        (c = l(_, m.props.children)),
                        (c.return = f),
                        (f = c);
                      break e;
                    }
                  } else if (
                    _.elementType === M ||
                    (typeof M == "object" &&
                      M !== null &&
                      M.$$typeof === ze &&
                      la(M) === _.type)
                  ) {
                    n(f, _.sibling),
                      (c = l(_, m.props)),
                      (c.ref = or(f, _, m)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                  n(f, _);
                  break;
                } else t(f, _);
                _ = _.sibling;
              }
              m.type === be
                ? ((c = cn(m.props.children, f.mode, w, m.key)),
                  (c.return = f),
                  (f = c))
                : ((w = Nl(m.type, m.key, m.props, null, f.mode, w)),
                  (w.ref = or(f, c, m)),
                  (w.return = f),
                  (f = w));
            }
            return o(f);
          case Le:
            e: {
              for (_ = m.key; c !== null; ) {
                if (c.key === _)
                  if (
                    c.tag === 4 &&
                    c.stateNode.containerInfo === m.containerInfo &&
                    c.stateNode.implementation === m.implementation
                  ) {
                    n(f, c.sibling),
                      (c = l(c, m.children || [])),
                      (c.return = f),
                      (f = c);
                    break e;
                  } else {
                    n(f, c);
                    break;
                  }
                else t(f, c);
                c = c.sibling;
              }
              (c = ws(m, f.mode, w)), (c.return = f), (f = c);
            }
            return o(f);
          case ze:
            return (_ = m._init), ue(f, c, _(m._payload), w);
        }
        if (On(m)) return E(f, c, m, w);
        if (z(m)) return L(f, c, m, w);
        el(f, m);
      }
      return (typeof m == "string" && m !== "") || typeof m == "number"
        ? ((m = "" + m),
          c !== null && c.tag === 6
            ? (n(f, c.sibling), (c = l(c, m)), (c.return = f), (f = c))
            : (n(f, c), (c = ks(m, f.mode, w)), (c.return = f), (f = c)),
          o(f))
        : n(f, c);
    }
    return ue;
  }
  var En = ia(!0),
    sa = ia(!1),
    tl = Ht(null),
    nl = null,
    Ln = null,
    Pi = null;
  function _i() {
    Pi = Ln = nl = null;
  }
  function bi(e) {
    var t = tl.current;
    X(tl), (e._currentValue = t);
  }
  function zi(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Mn(e, t) {
    (nl = e),
      (Pi = Ln = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Oe = !0), (e.firstContext = null));
  }
  function Xe(e) {
    var t = e._currentValue;
    if (Pi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Ln === null)) {
        if (nl === null) throw Error(p(308));
        (Ln = e), (nl.dependencies = { lanes: 0, firstContext: e });
      } else Ln = Ln.next = e;
    return t;
  }
  var nn = null;
  function Fi(e) {
    nn === null ? (nn = [e]) : nn.push(e);
  }
  function oa(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Fi(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Tt(e, r)
    );
  }
  function Tt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ut = !1;
  function Ii(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function aa(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Et(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), D & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Tt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Fi(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Tt(e, n)
    );
  }
  function rl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n);
    }
  }
  function ua(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          s === null ? (l = s = o) : (s = s.next = o), (n = n.next);
        } while (n !== null);
        s === null ? (l = s = t) : (s = s.next = t);
      } else l = s = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: s,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function ll(e, t, n, r) {
    var l = e.updateQueue;
    Ut = !1;
    var s = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      a = l.shared.pending;
    if (a !== null) {
      l.shared.pending = null;
      var u = a,
        h = u.next;
      (u.next = null), o === null ? (s = h) : (o.next = h), (o = u);
      var x = e.alternate;
      x !== null &&
        ((x = x.updateQueue),
        (a = x.lastBaseUpdate),
        a !== o &&
          (a === null ? (x.firstBaseUpdate = h) : (a.next = h),
          (x.lastBaseUpdate = u)));
    }
    if (s !== null) {
      var k = l.baseState;
      (o = 0), (x = h = u = null), (a = s);
      do {
        var v = a.lane,
          N = a.eventTime;
        if ((r & v) === v) {
          x !== null &&
            (x = x.next =
              {
                eventTime: N,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var E = e,
              L = a;
            switch (((v = t), (N = n), L.tag)) {
              case 1:
                if (((E = L.payload), typeof E == "function")) {
                  k = E.call(N, k, v);
                  break e;
                }
                k = E;
                break e;
              case 3:
                E.flags = (E.flags & -65537) | 128;
              case 0:
                if (
                  ((E = L.payload),
                  (v = typeof E == "function" ? E.call(N, k, v) : E),
                  v == null)
                )
                  break e;
                k = T({}, k, v);
                break e;
              case 2:
                Ut = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64),
            (v = l.effects),
            v === null ? (l.effects = [a]) : v.push(a));
        } else
          (N = {
            eventTime: N,
            lane: v,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            x === null ? ((h = x = N), (u = k)) : (x = x.next = N),
            (o |= v);
        if (((a = a.next), a === null)) {
          if (((a = l.shared.pending), a === null)) break;
          (v = a),
            (a = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (x === null && (u = k),
        (l.baseState = u),
        (l.firstBaseUpdate = h),
        (l.lastBaseUpdate = x),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (o |= l.lane), (l = l.next);
        while (l !== t);
      } else s === null && (l.shared.lanes = 0);
      (sn |= o), (e.lanes = o), (e.memoizedState = k);
    }
  }
  function ca(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(p(191, l));
          l.call(r);
        }
      }
  }
  var ar = {},
    vt = Ht(ar),
    ur = Ht(ar),
    cr = Ht(ar);
  function rn(e) {
    if (e === ar) throw Error(p(174));
    return e;
  }
  function Oi(e, t) {
    switch ((Y(cr, t), Y(ur, e), Y(vt, ar), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Rl(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Rl(t, e));
    }
    X(vt), Y(vt, t);
  }
  function Pn() {
    X(vt), X(ur), X(cr);
  }
  function da(e) {
    rn(cr.current);
    var t = rn(vt.current),
      n = Rl(t, e.type);
    t !== n && (Y(ur, e), Y(vt, n));
  }
  function Ri(e) {
    ur.current === e && (X(vt), X(ur));
  }
  var re = Ht(0);
  function il(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Hi = [];
  function Di() {
    for (var e = 0; e < Hi.length; e++)
      Hi[e]._workInProgressVersionPrimary = null;
    Hi.length = 0;
  }
  var sl = Se.ReactCurrentDispatcher,
    Bi = Se.ReactCurrentBatchConfig,
    ln = 0,
    le = null,
    me = null,
    xe = null,
    ol = !1,
    dr = !1,
    fr = 0,
    qc = 0;
  function Ce() {
    throw Error(p(321));
  }
  function Ui(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!it(e[n], t[n])) return !1;
    return !0;
  }
  function Qi(e, t, n, r, l, s) {
    if (
      ((ln = s),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (sl.current = e === null || e.memoizedState === null ? rd : ld),
      (e = n(r, l)),
      dr)
    ) {
      s = 0;
      do {
        if (((dr = !1), (fr = 0), 25 <= s)) throw Error(p(301));
        (s += 1),
          (xe = me = null),
          (t.updateQueue = null),
          (sl.current = id),
          (e = n(r, l));
      } while (dr);
    }
    if (
      ((sl.current = cl),
      (t = me !== null && me.next !== null),
      (ln = 0),
      (xe = me = le = null),
      (ol = !1),
      t)
    )
      throw Error(p(300));
    return e;
  }
  function Vi() {
    var e = fr !== 0;
    return (fr = 0), e;
  }
  function yt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return xe === null ? (le.memoizedState = xe = e) : (xe = xe.next = e), xe;
  }
  function Je() {
    if (me === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = me.next;
    var t = xe === null ? le.memoizedState : xe.next;
    if (t !== null) (xe = t), (me = e);
    else {
      if (e === null) throw Error(p(310));
      (me = e),
        (e = {
          memoizedState: me.memoizedState,
          baseState: me.baseState,
          baseQueue: me.baseQueue,
          queue: me.queue,
          next: null,
        }),
        xe === null ? (le.memoizedState = xe = e) : (xe = xe.next = e);
    }
    return xe;
  }
  function pr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wi(e) {
    var t = Je(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = me,
      l = r.baseQueue,
      s = n.pending;
    if (s !== null) {
      if (l !== null) {
        var o = l.next;
        (l.next = s.next), (s.next = o);
      }
      (r.baseQueue = l = s), (n.pending = null);
    }
    if (l !== null) {
      (s = l.next), (r = r.baseState);
      var a = (o = null),
        u = null,
        h = s;
      do {
        var x = h.lane;
        if ((ln & x) === x)
          u !== null &&
            (u = u.next =
              {
                lane: 0,
                action: h.action,
                hasEagerState: h.hasEagerState,
                eagerState: h.eagerState,
                next: null,
              }),
            (r = h.hasEagerState ? h.eagerState : e(r, h.action));
        else {
          var k = {
            lane: x,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          };
          u === null ? ((a = u = k), (o = r)) : (u = u.next = k),
            (le.lanes |= x),
            (sn |= x);
        }
        h = h.next;
      } while (h !== null && h !== s);
      u === null ? (o = r) : (u.next = a),
        it(r, t.memoizedState) || (Oe = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = u),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (s = l.lane), (le.lanes |= s), (sn |= s), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ai(e) {
    var t = Je(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      s = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do (s = e(s, o.action)), (o = o.next);
      while (o !== l);
      it(s, t.memoizedState) || (Oe = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (n.lastRenderedState = s);
    }
    return [s, r];
  }
  function fa() {}
  function pa(e, t) {
    var n = le,
      r = Je(),
      l = t(),
      s = !it(r.memoizedState, l);
    if (
      (s && ((r.memoizedState = l), (Oe = !0)),
      (r = r.queue),
      $i(va.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || s || (xe !== null && xe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        mr(9, ha.bind(null, n, r, l, t), void 0, null),
        ge === null)
      )
        throw Error(p(349));
      ln & 30 || ma(n, t, l);
    }
    return l;
  }
  function ma(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (le.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function ha(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), ya(t) && xa(e);
  }
  function va(e, t, n) {
    return n(function () {
      ya(t) && xa(e);
    });
  }
  function ya(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !it(e, n);
    } catch {
      return !0;
    }
  }
  function xa(e) {
    var t = Tt(e, 1);
    t !== null && ct(t, e, 1, -1);
  }
  function ga(e) {
    var t = yt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = nd.bind(null, le, e)),
      [t.memoizedState, e]
    );
  }
  function mr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (le.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ka() {
    return Je().memoizedState;
  }
  function al(e, t, n, r) {
    var l = yt();
    (le.flags |= e),
      (l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function ul(e, t, n, r) {
    var l = Je();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (me !== null) {
      var o = me.memoizedState;
      if (((s = o.destroy), r !== null && Ui(r, o.deps))) {
        l.memoizedState = mr(t, n, s, r);
        return;
      }
    }
    (le.flags |= e), (l.memoizedState = mr(1 | t, n, s, r));
  }
  function wa(e, t) {
    return al(8390656, 8, e, t);
  }
  function $i(e, t) {
    return ul(2048, 8, e, t);
  }
  function ja(e, t) {
    return ul(4, 2, e, t);
  }
  function Sa(e, t) {
    return ul(4, 4, e, t);
  }
  function Na(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ca(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), ul(4, 4, Na.bind(null, t, e), n)
    );
  }
  function Ki() {}
  function Ta(e, t) {
    var n = Je();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ui(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ea(e, t) {
    var n = Je();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ui(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function La(e, t, n) {
    return ln & 21
      ? (it(n, t) ||
          ((n = ro()), (le.lanes |= n), (sn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n));
  }
  function ed(e, t) {
    var n = A;
    (A = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Bi.transition;
    Bi.transition = {};
    try {
      e(!1), t();
    } finally {
      (A = n), (Bi.transition = r);
    }
  }
  function Ma() {
    return Je().memoizedState;
  }
  function td(e, t, n) {
    var r = $t(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Pa(e))
    )
      _a(t, n);
    else if (((n = oa(e, t, n, r)), n !== null)) {
      var l = Pe();
      ct(n, e, r, l), ba(n, t, r);
    }
  }
  function nd(e, t, n) {
    var r = $t(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Pa(e)) _a(t, l);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var o = t.lastRenderedState,
            a = s(o, n);
          if (((l.hasEagerState = !0), (l.eagerState = a), it(a, o))) {
            var u = t.interleaved;
            u === null
              ? ((l.next = l), Fi(t))
              : ((l.next = u.next), (u.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = oa(e, t, l, r)),
        n !== null && ((l = Pe()), ct(n, e, r, l), ba(n, t, r));
    }
  }
  function Pa(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function _a(e, t) {
    dr = ol = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function ba(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n);
    }
  }
  var cl = {
      readContext: Xe,
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
      readContext: Xe,
      useCallback: function (e, t) {
        return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Xe,
      useEffect: wa,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          al(4194308, 4, Na.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return al(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return al(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = yt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = yt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = td.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = yt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: ga,
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        return (yt().memoizedState = e);
      },
      useTransition: function () {
        var e = ga(!1),
          t = e[0];
        return (e = ed.bind(null, e[1])), (yt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = le,
          l = yt();
        if (te) {
          if (n === void 0) throw Error(p(407));
          n = n();
        } else {
          if (((n = t()), ge === null)) throw Error(p(349));
          ln & 30 || ma(r, t, n);
        }
        l.memoizedState = n;
        var s = { value: n, getSnapshot: t };
        return (
          (l.queue = s),
          wa(va.bind(null, r, s, e), [e]),
          (r.flags |= 2048),
          mr(9, ha.bind(null, r, s, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = yt(),
          t = ge.identifierPrefix;
        if (te) {
          var n = Ct,
            r = Nt;
          (n = (r & ~(1 << (32 - lt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = fr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = qc++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    ld = {
      readContext: Xe,
      useCallback: Ta,
      useContext: Xe,
      useEffect: $i,
      useImperativeHandle: Ca,
      useInsertionEffect: ja,
      useLayoutEffect: Sa,
      useMemo: Ea,
      useReducer: Wi,
      useRef: ka,
      useState: function () {
        return Wi(pr);
      },
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        var t = Je();
        return La(t, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Wi(pr)[0],
          t = Je().memoizedState;
        return [e, t];
      },
      useMutableSource: fa,
      useSyncExternalStore: pa,
      useId: Ma,
      unstable_isNewReconciler: !1,
    },
    id = {
      readContext: Xe,
      useCallback: Ta,
      useContext: Xe,
      useEffect: $i,
      useImperativeHandle: Ca,
      useInsertionEffect: ja,
      useLayoutEffect: Sa,
      useMemo: Ea,
      useReducer: Ai,
      useRef: ka,
      useState: function () {
        return Ai(pr);
      },
      useDebugValue: Ki,
      useDeferredValue: function (e) {
        var t = Je();
        return me === null ? (t.memoizedState = e) : La(t, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Ai(pr)[0],
          t = Je().memoizedState;
        return [e, t];
      },
      useMutableSource: fa,
      useSyncExternalStore: pa,
      useId: Ma,
      unstable_isNewReconciler: !1,
    };
  function ot(e, t) {
    if (e && e.defaultProps) {
      (t = T({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Zi(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : T({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var dl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = $t(e),
        s = Et(r, l);
      (s.payload = t),
        n != null && (s.callback = n),
        (t = Qt(e, s, l)),
        t !== null && (ct(t, e, l, r), rl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = $t(e),
        s = Et(r, l);
      (s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = Qt(e, s, l)),
        t !== null && (ct(t, e, l, r), rl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Pe(),
        r = $t(e),
        l = Et(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Qt(e, l, r)),
        t !== null && (ct(t, e, r, n), rl(t, e, r));
    },
  };
  function za(e, t, n, r, l, s, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, s, o)
        : t.prototype && t.prototype.isPureReactComponent
        ? !er(n, r) || !er(l, s)
        : !0
    );
  }
  function Fa(e, t, n) {
    var r = !1,
      l = Dt,
      s = t.contextType;
    return (
      typeof s == "object" && s !== null
        ? (s = Xe(s))
        : ((l = Ie(t) ? qt : Ne.current),
          (r = t.contextTypes),
          (s = (r = r != null) ? Sn(e, l) : Dt)),
      (t = new t(n, s)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = dl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      t
    );
  }
  function Ia(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && dl.enqueueReplaceState(t, t.state, null);
  }
  function Yi(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ii(e);
    var s = t.contextType;
    typeof s == "object" && s !== null
      ? (l.context = Xe(s))
      : ((s = Ie(t) ? qt : Ne.current), (l.context = Sn(e, s))),
      (l.state = e.memoizedState),
      (s = t.getDerivedStateFromProps),
      typeof s == "function" && (Zi(e, t, s, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && dl.enqueueReplaceState(l, l.state, null),
        ll(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function _n(e, t) {
    try {
      var n = "",
        r = t;
      do (n += B(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (s) {
      l =
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Gi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Xi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var sd = typeof WeakMap == "function" ? WeakMap : Map;
  function Oa(e, t, n) {
    (n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        xl || ((xl = !0), (fs = r)), Xi(e, t);
      }),
      n
    );
  }
  function Ra(e, t, n) {
    (n = Et(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Xi(e, t);
        });
    }
    var s = e.stateNode;
    return (
      s !== null &&
        typeof s.componentDidCatch == "function" &&
        (n.callback = function () {
          Xi(e, t),
            typeof r != "function" &&
              (Wt === null ? (Wt = new Set([this])) : Wt.add(this));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function Ha(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new sd();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = kd.bind(null, e, t, n)), t.then(e, e));
  }
  function Da(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ba(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Et(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var od = Se.ReactCurrentOwner,
    Oe = !1;
  function Me(e, t, n, r) {
    t.child = e === null ? sa(t, null, n, r) : En(t, e.child, n, r);
  }
  function Ua(e, t, n, r, l) {
    n = n.render;
    var s = t.ref;
    return (
      Mn(t, l),
      (r = Qi(e, t, n, r, s, l)),
      (n = Vi()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Lt(e, t, l))
        : (te && n && Ci(t), (t.flags |= 1), Me(e, t, r, l), t.child)
    );
  }
  function Qa(e, t, n, r, l) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" &&
        !gs(s) &&
        s.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = s), Va(e, t, s, r, l))
        : ((e = Nl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), !(e.lanes & l))) {
      var o = s.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : er), n(o, r) && e.ref === t.ref)
      )
        return Lt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Zt(s, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Va(e, t, n, r, l) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (er(s, r) && e.ref === t.ref)
        if (((Oe = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
          e.flags & 131072 && (Oe = !0);
        else return (t.lanes = e.lanes), Lt(e, t, l);
    }
    return Ji(e, t, n, r, l);
  }
  function Wa(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Y(zn, Ae),
          (Ae |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = s !== null ? s.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Y(zn, Ae),
            (Ae |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = s !== null ? s.baseLanes : n),
          Y(zn, Ae),
          (Ae |= r);
      }
    else
      s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Y(zn, Ae),
        (Ae |= r);
    return Me(e, t, l, n), t.child;
  }
  function Aa(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ji(e, t, n, r, l) {
    var s = Ie(n) ? qt : Ne.current;
    return (
      (s = Sn(t, s)),
      Mn(t, l),
      (n = Qi(e, t, n, r, s, l)),
      (r = Vi()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Lt(e, t, l))
        : (te && r && Ci(t), (t.flags |= 1), Me(e, t, n, l), t.child)
    );
  }
  function $a(e, t, n, r, l) {
    if (Ie(n)) {
      var s = !0;
      Yr(t);
    } else s = !1;
    if ((Mn(t, l), t.stateNode === null))
      pl(e, t), Fa(t, n, r), Yi(t, n, r, l), (r = !0);
    else if (e === null) {
      var o = t.stateNode,
        a = t.memoizedProps;
      o.props = a;
      var u = o.context,
        h = n.contextType;
      typeof h == "object" && h !== null
        ? (h = Xe(h))
        : ((h = Ie(n) ? qt : Ne.current), (h = Sn(t, h)));
      var x = n.getDerivedStateFromProps,
        k =
          typeof x == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      k ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((a !== r || u !== h) && Ia(t, o, r, h)),
        (Ut = !1);
      var v = t.memoizedState;
      (o.state = v),
        ll(t, r, o, l),
        (u = t.memoizedState),
        a !== r || v !== u || Fe.current || Ut
          ? (typeof x == "function" && (Zi(t, n, x, r), (u = t.memoizedState)),
            (a = Ut || za(t, n, a, r, v, u, h))
              ? (k ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = u)),
            (o.props = r),
            (o.state = u),
            (o.context = h),
            (r = a))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (o = t.stateNode),
        aa(e, t),
        (a = t.memoizedProps),
        (h = t.type === t.elementType ? a : ot(t.type, a)),
        (o.props = h),
        (k = t.pendingProps),
        (v = o.context),
        (u = n.contextType),
        typeof u == "object" && u !== null
          ? (u = Xe(u))
          : ((u = Ie(n) ? qt : Ne.current), (u = Sn(t, u)));
      var N = n.getDerivedStateFromProps;
      (x =
        typeof N == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((a !== k || v !== u) && Ia(t, o, r, u)),
        (Ut = !1),
        (v = t.memoizedState),
        (o.state = v),
        ll(t, r, o, l);
      var E = t.memoizedState;
      a !== k || v !== E || Fe.current || Ut
        ? (typeof N == "function" && (Zi(t, n, N, r), (E = t.memoizedState)),
          (h = Ut || za(t, n, h, r, v, E, u) || !1)
            ? (x ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, E, u),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, E, u)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (a === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (a === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = E)),
          (o.props = r),
          (o.state = E),
          (o.context = u),
          (r = h))
        : (typeof o.componentDidUpdate != "function" ||
            (a === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return qi(e, t, n, r, s, l);
  }
  function qi(e, t, n, r, l, s) {
    Aa(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Xo(t, n, !1), Lt(e, t, s);
    (r = t.stateNode), (od.current = t);
    var a =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = En(t, e.child, null, s)), (t.child = En(t, null, a, s)))
        : Me(e, t, a, s),
      (t.memoizedState = r.state),
      l && Xo(t, n, !0),
      t.child
    );
  }
  function Ka(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Yo(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Yo(e, t.context, !1),
      Oi(e, t.containerInfo);
  }
  function Za(e, t, n, r, l) {
    return Tn(), Mi(l), (t.flags |= 256), Me(e, t, n, r), t.child;
  }
  var es = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ts(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ya(e, t, n) {
    var r = t.pendingProps,
      l = re.current,
      s = !1,
      o = (t.flags & 128) !== 0,
      a;
    if (
      ((a = o) ||
        (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      a
        ? ((s = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      Y(re, l & 1),
      e === null)
    )
      return (
        Li(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((o = r.children),
            (e = r.fallback),
            s
              ? ((r = t.mode),
                (s = t.child),
                (o = { mode: "hidden", children: o }),
                !(r & 1) && s !== null
                  ? ((s.childLanes = 0), (s.pendingProps = o))
                  : (s = Cl(o, r, 0, null)),
                (e = cn(e, r, n, null)),
                (s.return = t),
                (e.return = t),
                (s.sibling = e),
                (t.child = s),
                (t.child.memoizedState = ts(n)),
                (t.memoizedState = es),
                e)
              : ns(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
      return ad(e, t, o, r, a, l, n);
    if (s) {
      (s = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
      var u = { mode: "hidden", children: r.children };
      return (
        !(o & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = u),
            (t.deletions = null))
          : ((r = Zt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        a !== null ? (s = Zt(a, s)) : ((s = cn(s, o, n, null)), (s.flags |= 2)),
        (s.return = t),
        (r.return = t),
        (r.sibling = s),
        (t.child = r),
        (r = s),
        (s = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? ts(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (s.memoizedState = o),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = es),
        r
      );
    }
    return (
      (s = e.child),
      (e = s.sibling),
      (r = Zt(s, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ns(e, t) {
    return (
      (t = Cl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function fl(e, t, n, r) {
    return (
      r !== null && Mi(r),
      En(t, e.child, null, n),
      (e = ns(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ad(e, t, n, r, l, s, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Gi(Error(p(422)))), fl(e, t, o, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (l = t.mode),
          (r = Cl({ mode: "visible", children: r.children }, l, 0, null)),
          (s = cn(s, l, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && En(t, e.child, null, o),
          (t.child.memoizedState = ts(o)),
          (t.memoizedState = es),
          s);
    if (!(t.mode & 1)) return fl(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
      return (
        (r = a), (s = Error(p(419))), (r = Gi(s, r, void 0)), fl(e, t, o, r)
      );
    }
    if (((a = (o & e.childLanes) !== 0), Oe || a)) {
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
            ((s.retryLane = l), Tt(e, l), ct(r, e, l, -1));
      }
      return xs(), (r = Gi(Error(p(421)))), fl(e, t, o, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = wd.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = s.treeContext),
        (We = Rt(l.nextSibling)),
        (Ve = t),
        (te = !0),
        (st = null),
        e !== null &&
          ((Ye[Ge++] = Nt),
          (Ye[Ge++] = Ct),
          (Ye[Ge++] = en),
          (Nt = e.id),
          (Ct = e.overflow),
          (en = t)),
        (t = ns(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ga(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), zi(e.return, t, n);
  }
  function rs(e, t, n, r, l) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = r),
        (s.tail = n),
        (s.tailMode = l));
  }
  function Xa(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      s = r.tail;
    if ((Me(e, t, r.children, n), (r = re.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ga(e, n, t);
          else if (e.tag === 19) Ga(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Y(re, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && il(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            rs(t, !1, l, n, s);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && il(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          rs(t, !0, n, null, s);
          break;
        case "together":
          rs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function pl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Lt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (sn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(p(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Zt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function ud(e, t, n) {
    switch (t.tag) {
      case 3:
        Ka(t), Tn();
        break;
      case 5:
        da(t);
        break;
      case 1:
        Ie(t.type) && Yr(t);
        break;
      case 4:
        Oi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        Y(tl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Y(re, re.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Ya(e, t, n)
            : (Y(re, re.current & 1),
              (e = Lt(e, t, n)),
              e !== null ? e.sibling : null);
        Y(re, re.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Xa(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Y(re, re.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Wa(e, t, n);
    }
    return Lt(e, t, n);
  }
  var Ja, ls, qa, eu;
  (Ja = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (ls = function () {}),
    (qa = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), rn(vt.current);
        var s = null;
        switch (n) {
          case "input":
            (l = zl(e, l)), (r = zl(e, r)), (s = []);
            break;
          case "select":
            (l = T({}, l, { value: void 0 })),
              (r = T({}, r, { value: void 0 })),
              (s = []);
            break;
          case "textarea":
            (l = Ol(e, l)), (r = Ol(e, r)), (s = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = $r);
        }
        Hl(n, r);
        var o;
        n = null;
        for (h in l)
          if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null)
            if (h === "style") {
              var a = l[h];
              for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              h !== "dangerouslySetInnerHTML" &&
                h !== "children" &&
                h !== "suppressContentEditableWarning" &&
                h !== "suppressHydrationWarning" &&
                h !== "autoFocus" &&
                (P.hasOwnProperty(h)
                  ? s || (s = [])
                  : (s = s || []).push(h, null));
        for (h in r) {
          var u = r[h];
          if (
            ((a = l != null ? l[h] : void 0),
            r.hasOwnProperty(h) && u !== a && (u != null || a != null))
          )
            if (h === "style")
              if (a) {
                for (o in a)
                  !a.hasOwnProperty(o) ||
                    (u && u.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in u)
                  u.hasOwnProperty(o) &&
                    a[o] !== u[o] &&
                    (n || (n = {}), (n[o] = u[o]));
              } else n || (s || (s = []), s.push(h, n)), (n = u);
            else
              h === "dangerouslySetInnerHTML"
                ? ((u = u ? u.__html : void 0),
                  (a = a ? a.__html : void 0),
                  u != null && a !== u && (s = s || []).push(h, u))
                : h === "children"
                ? (typeof u != "string" && typeof u != "number") ||
                  (s = s || []).push(h, "" + u)
                : h !== "suppressContentEditableWarning" &&
                  h !== "suppressHydrationWarning" &&
                  (P.hasOwnProperty(h)
                    ? (u != null && h === "onScroll" && G("scroll", e),
                      s || a === u || (s = []))
                    : (s = s || []).push(h, u));
        }
        n && (s = s || []).push("style", n);
        var h = s;
        (t.updateQueue = h) && (t.flags |= 4);
      }
    }),
    (eu = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function hr(e, t) {
    if (!te)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function cd(e, t, n) {
    var r = t.pendingProps;
    switch ((Ti(t), t.tag)) {
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
        return Te(t), null;
      case 1:
        return Ie(t.type) && Zr(), Te(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Pn(),
          X(Fe),
          X(Ne),
          Di(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (qr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), st !== null && (hs(st), (st = null)))),
          ls(e, t),
          Te(t),
          null
        );
      case 5:
        Ri(t);
        var l = rn(cr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          qa(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166));
            return Te(t), null;
          }
          if (((e = rn(vt.current)), qr(t))) {
            (r = t.stateNode), (n = t.type);
            var s = t.memoizedProps;
            switch (((r[ht] = t), (r[ir] = s), (e = (t.mode & 1) !== 0), n)) {
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
                for (l = 0; l < nr.length; l++) G(nr[l], r);
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
                zs(r, s), G("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!s.multiple }),
                  G("invalid", r);
                break;
              case "textarea":
                Os(r, s), G("invalid", r);
            }
            Hl(n, s), (l = null);
            for (var o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "children"
                  ? typeof a == "string"
                    ? r.textContent !== a &&
                      (s.suppressHydrationWarning !== !0 &&
                        Ar(r.textContent, a, e),
                      (l = ["children", a]))
                    : typeof a == "number" &&
                      r.textContent !== "" + a &&
                      (s.suppressHydrationWarning !== !0 &&
                        Ar(r.textContent, a, e),
                      (l = ["children", "" + a]))
                  : P.hasOwnProperty(o) &&
                    a != null &&
                    o === "onScroll" &&
                    G("scroll", r);
              }
            switch (n) {
              case "input":
                jr(r), Is(r, s, !0);
                break;
              case "textarea":
                jr(r), Hs(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = $r);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ds(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[ht] = t),
              (e[ir] = r),
              Ja(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((o = Dl(n, r)), n)) {
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
                  for (l = 0; l < nr.length; l++) G(nr[l], e);
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
                  zs(e, r), (l = zl(e, r)), G("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = T({}, r, { value: void 0 })),
                    G("invalid", e);
                  break;
                case "textarea":
                  Os(e, r), (l = Ol(e, r)), G("invalid", e);
                  break;
                default:
                  l = r;
              }
              Hl(n, l), (a = l);
              for (s in a)
                if (a.hasOwnProperty(s)) {
                  var u = a[s];
                  s === "style"
                    ? Qs(e, u)
                    : s === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Bs(e, u))
                    : s === "children"
                    ? typeof u == "string"
                      ? (n !== "textarea" || u !== "") && Rn(e, u)
                      : typeof u == "number" && Rn(e, "" + u)
                    : s !== "suppressContentEditableWarning" &&
                      s !== "suppressHydrationWarning" &&
                      s !== "autoFocus" &&
                      (P.hasOwnProperty(s)
                        ? u != null && s === "onScroll" && G("scroll", e)
                        : u != null && tt(e, s, u, o));
                }
              switch (n) {
                case "input":
                  jr(e), Is(e, r, !1);
                  break;
                case "textarea":
                  jr(e), Hs(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + W(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (s = r.value),
                    s != null
                      ? dn(e, !!r.multiple, s, !1)
                      : r.defaultValue != null &&
                        dn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $r);
              }
              switch (n) {
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
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Te(t), null;
      case 6:
        if (e && t.stateNode != null) eu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(p(166));
          if (((n = rn(cr.current)), rn(vt.current), qr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[ht] = t),
              (s = r.nodeValue !== n) && ((e = Ve), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ar(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ar(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            s && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[ht] = t),
              (t.stateNode = r);
        }
        return Te(t), null;
      case 13:
        if (
          (X(re),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && We !== null && t.mode & 1 && !(t.flags & 128))
            ra(), Tn(), (t.flags |= 98560), (s = !1);
          else if (((s = qr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(p(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(p(317));
              s[ht] = t;
            } else
              Tn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Te(t), (s = !1);
          } else st !== null && (hs(st), (st = null)), (s = !0);
          if (!s) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || re.current & 1 ? he === 0 && (he = 3) : xs())),
            t.updateQueue !== null && (t.flags |= 4),
            Te(t),
            null);
      case 4:
        return (
          Pn(),
          ls(e, t),
          e === null && rr(t.stateNode.containerInfo),
          Te(t),
          null
        );
      case 10:
        return bi(t.type._context), Te(t), null;
      case 17:
        return Ie(t.type) && Zr(), Te(t), null;
      case 19:
        if ((X(re), (s = t.memoizedState), s === null)) return Te(t), null;
        if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
          if (r) hr(s, !1);
          else {
            if (he !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((o = il(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      hr(s, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (s = n),
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
                      (n = n.sibling);
                  return Y(re, (re.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            s.tail !== null &&
              ae() > Fn &&
              ((t.flags |= 128), (r = !0), hr(s, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = il(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                hr(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !o.alternate &&
                  !te)
              )
                return Te(t), null;
            } else
              2 * ae() - s.renderingStartTime > Fn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), hr(s, !1), (t.lanes = 4194304));
          s.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = s.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (s.last = o));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = ae()),
            (t.sibling = null),
            (n = re.current),
            Y(re, r ? (n & 1) | 2 : n & 1),
            t)
          : (Te(t), null);
      case 22:
      case 23:
        return (
          ys(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Ae & 1073741824 &&
              (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Te(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, t.tag));
  }
  function dd(e, t) {
    switch ((Ti(t), t.tag)) {
      case 1:
        return (
          Ie(t.type) && Zr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Pn(),
          X(Fe),
          X(Ne),
          Di(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Ri(t), null;
      case 13:
        if (
          (X(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(p(340));
          Tn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return X(re), null;
      case 4:
        return Pn(), null;
      case 10:
        return bi(t.type._context), null;
      case 22:
      case 23:
        return ys(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ml = !1,
    Ee = !1,
    fd = typeof WeakSet == "function" ? WeakSet : Set,
    C = null;
  function bn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          se(e, t, r);
        }
      else n.current = null;
  }
  function is(e, t, n) {
    try {
      n();
    } catch (r) {
      se(e, t, r);
    }
  }
  var tu = !1;
  function pd(e, t) {
    if (((yi = Fr), (e = zo()), ui(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              s = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              a = -1,
              u = -1,
              h = 0,
              x = 0,
              k = e,
              v = null;
            t: for (;;) {
              for (
                var N;
                k !== n || (l !== 0 && k.nodeType !== 3) || (a = o + l),
                  k !== s || (r !== 0 && k.nodeType !== 3) || (u = o + r),
                  k.nodeType === 3 && (o += k.nodeValue.length),
                  (N = k.firstChild) !== null;

              )
                (v = k), (k = N);
              for (;;) {
                if (k === e) break t;
                if (
                  (v === n && ++h === l && (a = o),
                  v === s && ++x === r && (u = o),
                  (N = k.nextSibling) !== null)
                )
                  break;
                (k = v), (v = k.parentNode);
              }
              k = N;
            }
            n = a === -1 || u === -1 ? null : { start: a, end: u };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      xi = { focusedElem: e, selectionRange: n }, Fr = !1, C = t;
      C !== null;

    )
      if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (C = e);
      else
        for (; C !== null; ) {
          t = C;
          try {
            var E = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (E !== null) {
                    var L = E.memoizedProps,
                      ue = E.memoizedState,
                      f = t.stateNode,
                      c = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? L : ot(t.type, L),
                        ue
                      );
                    f.__reactInternalSnapshotBeforeUpdate = c;
                  }
                  break;
                case 3:
                  var m = t.stateNode.containerInfo;
                  m.nodeType === 1
                    ? (m.textContent = "")
                    : m.nodeType === 9 &&
                      m.documentElement &&
                      m.removeChild(m.documentElement);
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
            se(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (C = e);
            break;
          }
          C = t.return;
        }
    return (E = tu), (tu = !1), E;
  }
  function vr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var s = l.destroy;
          (l.destroy = void 0), s !== void 0 && is(t, n, s);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function hl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ss(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function nu(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), nu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[ht],
          delete t[ir],
          delete t[ji],
          delete t[Yc],
          delete t[Gc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ru(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function lu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ru(e.return)) return null;
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
  function os(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = $r));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (os(e, t, n), e = e.sibling; e !== null; )
        os(e, t, n), (e = e.sibling);
  }
  function as(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (as(e, t, n), e = e.sibling; e !== null; )
        as(e, t, n), (e = e.sibling);
  }
  var we = null,
    at = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null; ) iu(e, t, n), (n = n.sibling);
  }
  function iu(e, t, n) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(Lr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ee || bn(n, t);
      case 6:
        var r = we,
          l = at;
        (we = null),
          Vt(e, t, n),
          (we = r),
          (at = l),
          we !== null &&
            (at
              ? ((e = we),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : we.removeChild(n.stateNode));
        break;
      case 18:
        we !== null &&
          (at
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8
                ? wi(e.parentNode, n)
                : e.nodeType === 1 && wi(e, n),
              Zn(e))
            : wi(we, n.stateNode));
        break;
      case 4:
        (r = we),
          (l = at),
          (we = n.stateNode.containerInfo),
          (at = !0),
          Vt(e, t, n),
          (we = r),
          (at = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ee &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var s = l,
              o = s.destroy;
            (s = s.tag),
              o !== void 0 && (s & 2 || s & 4) && is(n, t, o),
              (l = l.next);
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (
          !Ee &&
          (bn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (a) {
            se(n, t, a);
          }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ee = (r = Ee) || n.memoizedState !== null), Vt(e, t, n), (Ee = r))
          : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function su(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new fd()),
        t.forEach(function (r) {
          var l = jd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function ut(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var s = e,
            o = t,
            a = o;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                (we = a.stateNode), (at = !1);
                break e;
              case 3:
                (we = a.stateNode.containerInfo), (at = !0);
                break e;
              case 4:
                (we = a.stateNode.containerInfo), (at = !0);
                break e;
            }
            a = a.return;
          }
          if (we === null) throw Error(p(160));
          iu(s, o, l), (we = null), (at = !1);
          var u = l.alternate;
          u !== null && (u.return = null), (l.return = null);
        } catch (h) {
          se(l, t, h);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) ou(t, e), (t = t.sibling);
  }
  function ou(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ut(t, e), xt(e), r & 4)) {
          try {
            vr(3, e, e.return), hl(3, e);
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
        ut(t, e), xt(e), r & 512 && n !== null && bn(n, n.return);
        break;
      case 5:
        if (
          (ut(t, e),
          xt(e),
          r & 512 && n !== null && bn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Rn(l, "");
          } catch (L) {
            se(e, e.return, L);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var s = e.memoizedProps,
            o = n !== null ? n.memoizedProps : s,
            a = e.type,
            u = e.updateQueue;
          if (((e.updateQueue = null), u !== null))
            try {
              a === "input" && s.type === "radio" && s.name != null && Fs(l, s),
                Dl(a, o);
              var h = Dl(a, s);
              for (o = 0; o < u.length; o += 2) {
                var x = u[o],
                  k = u[o + 1];
                x === "style"
                  ? Qs(l, k)
                  : x === "dangerouslySetInnerHTML"
                  ? Bs(l, k)
                  : x === "children"
                  ? Rn(l, k)
                  : tt(l, x, k, h);
              }
              switch (a) {
                case "input":
                  Fl(l, s);
                  break;
                case "textarea":
                  Rs(l, s);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!s.multiple;
                  var N = s.value;
                  N != null
                    ? dn(l, !!s.multiple, N, !1)
                    : v !== !!s.multiple &&
                      (s.defaultValue != null
                        ? dn(l, !!s.multiple, s.defaultValue, !0)
                        : dn(l, !!s.multiple, s.multiple ? [] : "", !1));
              }
              l[ir] = s;
            } catch (L) {
              se(e, e.return, L);
            }
        }
        break;
      case 6:
        if ((ut(t, e), xt(e), r & 4)) {
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
          (ut(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Zn(t.containerInfo);
          } catch (L) {
            se(e, e.return, L);
          }
        break;
      case 4:
        ut(t, e), xt(e);
        break;
      case 13:
        ut(t, e),
          xt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((s = l.memoizedState !== null),
            (l.stateNode.isHidden = s),
            !s ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ds = ae())),
          r & 4 && su(e);
        break;
      case 22:
        if (
          ((x = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ee = (h = Ee) || x), ut(t, e), (Ee = h)) : ut(t, e),
          xt(e),
          r & 8192)
        ) {
          if (
            ((h = e.memoizedState !== null),
            (e.stateNode.isHidden = h) && !x && e.mode & 1)
          )
            for (C = e, x = e.child; x !== null; ) {
              for (k = C = x; C !== null; ) {
                switch (((v = C), (N = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    vr(4, v, v.return);
                    break;
                  case 1:
                    bn(v, v.return);
                    var E = v.stateNode;
                    if (typeof E.componentWillUnmount == "function") {
                      (r = v), (n = v.return);
                      try {
                        (t = r),
                          (E.props = t.memoizedProps),
                          (E.state = t.memoizedState),
                          E.componentWillUnmount();
                      } catch (L) {
                        se(r, n, L);
                      }
                    }
                    break;
                  case 5:
                    bn(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      cu(k);
                      continue;
                    }
                }
                N !== null ? ((N.return = v), (C = N)) : cu(k);
              }
              x = x.sibling;
            }
          e: for (x = null, k = e; ; ) {
            if (k.tag === 5) {
              if (x === null) {
                x = k;
                try {
                  (l = k.stateNode),
                    h
                      ? ((s = l.style),
                        typeof s.setProperty == "function"
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none"))
                      : ((a = k.stateNode),
                        (u = k.memoizedProps.style),
                        (o =
                          u != null && u.hasOwnProperty("display")
                            ? u.display
                            : null),
                        (a.style.display = Us("display", o)));
                } catch (L) {
                  se(e, e.return, L);
                }
              }
            } else if (k.tag === 6) {
              if (x === null)
                try {
                  k.stateNode.nodeValue = h ? "" : k.memoizedProps;
                } catch (L) {
                  se(e, e.return, L);
                }
            } else if (
              ((k.tag !== 22 && k.tag !== 23) ||
                k.memoizedState === null ||
                k === e) &&
              k.child !== null
            ) {
              (k.child.return = k), (k = k.child);
              continue;
            }
            if (k === e) break e;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === e) break e;
              x === k && (x = null), (k = k.return);
            }
            x === k && (x = null),
              (k.sibling.return = k.return),
              (k = k.sibling);
          }
        }
        break;
      case 19:
        ut(t, e), xt(e), r & 4 && su(e);
        break;
      case 21:
        break;
      default:
        ut(t, e), xt(e);
    }
  }
  function xt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ru(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(p(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
            var s = lu(e);
            as(e, s, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              a = lu(e);
            os(e, a, o);
            break;
          default:
            throw Error(p(161));
        }
      } catch (u) {
        se(e, e.return, u);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function md(e, t, n) {
    (C = e), au(e);
  }
  function au(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null; ) {
      var l = C,
        s = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || ml;
        if (!o) {
          var a = l.alternate,
            u = (a !== null && a.memoizedState !== null) || Ee;
          a = ml;
          var h = Ee;
          if (((ml = o), (Ee = u) && !h))
            for (C = l; C !== null; )
              (o = C),
                (u = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? du(l)
                  : u !== null
                  ? ((u.return = o), (C = u))
                  : du(l);
          for (; s !== null; ) (C = s), au(s), (s = s.sibling);
          (C = l), (ml = a), (Ee = h);
        }
        uu(e);
      } else
        l.subtreeFlags & 8772 && s !== null ? ((s.return = l), (C = s)) : uu(e);
    }
  }
  function uu(e) {
    for (; C !== null; ) {
      var t = C;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ee || hl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ee)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ot(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var s = t.updateQueue;
                s !== null && ca(t, s, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ca(t, o, n);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = a;
                  var u = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      u.autoFocus && n.focus();
                      break;
                    case "img":
                      u.src && (n.src = u.src);
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
                if (t.memoizedState === null) {
                  var h = t.alternate;
                  if (h !== null) {
                    var x = h.memoizedState;
                    if (x !== null) {
                      var k = x.dehydrated;
                      k !== null && Zn(k);
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
          Ee || (t.flags & 512 && ss(t));
        } catch (v) {
          se(t, t.return, v);
        }
      }
      if (t === e) {
        C = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (C = n);
        break;
      }
      C = t.return;
    }
  }
  function cu(e) {
    for (; C !== null; ) {
      var t = C;
      if (t === e) {
        C = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (C = n);
        break;
      }
      C = t.return;
    }
  }
  function du(e) {
    for (; C !== null; ) {
      var t = C;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              hl(4, t);
            } catch (u) {
              se(t, n, u);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (u) {
                se(t, l, u);
              }
            }
            var s = t.return;
            try {
              ss(t);
            } catch (u) {
              se(t, s, u);
            }
            break;
          case 5:
            var o = t.return;
            try {
              ss(t);
            } catch (u) {
              se(t, o, u);
            }
        }
      } catch (u) {
        se(t, t.return, u);
      }
      if (t === e) {
        C = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        (a.return = t.return), (C = a);
        break;
      }
      C = t.return;
    }
  }
  var hd = Math.ceil,
    vl = Se.ReactCurrentDispatcher,
    us = Se.ReactCurrentOwner,
    qe = Se.ReactCurrentBatchConfig,
    D = 0,
    ge = null,
    ce = null,
    je = 0,
    Ae = 0,
    zn = Ht(0),
    he = 0,
    yr = null,
    sn = 0,
    yl = 0,
    cs = 0,
    xr = null,
    Re = null,
    ds = 0,
    Fn = 1 / 0,
    Mt = null,
    xl = !1,
    fs = null,
    Wt = null,
    gl = !1,
    At = null,
    kl = 0,
    gr = 0,
    ps = null,
    wl = -1,
    jl = 0;
  function Pe() {
    return D & 6 ? ae() : wl !== -1 ? wl : (wl = ae());
  }
  function $t(e) {
    return e.mode & 1
      ? D & 2 && je !== 0
        ? je & -je
        : Jc.transition !== null
        ? (jl === 0 && (jl = ro()), jl)
        : ((e = A),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : po(e.type))),
          e)
      : 1;
  }
  function ct(e, t, n, r) {
    if (50 < gr) throw ((gr = 0), (ps = null), Error(p(185)));
    Vn(e, n, r),
      (!(D & 2) || e !== ge) &&
        (e === ge && (!(D & 2) && (yl |= n), he === 4 && Kt(e, je)),
        He(e, r),
        n === 1 && D === 0 && !(t.mode & 1) && ((Fn = ae() + 500), Gr && Bt()));
  }
  function He(e, t) {
    var n = e.callbackNode;
    Ju(e, t);
    var r = _r(e, e === ge ? je : 0);
    if (r === 0)
      n !== null && eo(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && eo(n), t === 1))
        e.tag === 0 ? Xc(pu.bind(null, e)) : Jo(pu.bind(null, e)),
          Kc(function () {
            !(D & 6) && Bt();
          }),
          (n = null);
      else {
        switch (lo(r)) {
          case 1:
            n = $l;
            break;
          case 4:
            n = to;
            break;
          case 16:
            n = Er;
            break;
          case 536870912:
            n = no;
            break;
          default:
            n = Er;
        }
        n = wu(n, fu.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function fu(e, t) {
    if (((wl = -1), (jl = 0), D & 6)) throw Error(p(327));
    var n = e.callbackNode;
    if (In() && e.callbackNode !== n) return null;
    var r = _r(e, e === ge ? je : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Sl(e, r);
    else {
      t = r;
      var l = D;
      D |= 2;
      var s = hu();
      (ge !== e || je !== t) && ((Mt = null), (Fn = ae() + 500), an(e, t));
      do
        try {
          xd();
          break;
        } catch (a) {
          mu(e, a);
        }
      while (!0);
      _i(),
        (vl.current = s),
        (D = l),
        ce !== null ? (t = 0) : ((ge = null), (je = 0), (t = he));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Kl(e)), l !== 0 && ((r = l), (t = ms(e, l)))),
        t === 1)
      )
        throw ((n = yr), an(e, 0), Kt(e, r), He(e, ae()), n);
      if (t === 6) Kt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !vd(l) &&
            ((t = Sl(e, r)),
            t === 2 && ((s = Kl(e)), s !== 0 && ((r = s), (t = ms(e, s)))),
            t === 1))
        )
          throw ((n = yr), an(e, 0), Kt(e, r), He(e, ae()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            un(e, Re, Mt);
            break;
          case 3:
            if (
              (Kt(e, r),
              (r & 130023424) === r && ((t = ds + 500 - ae()), 10 < t))
            ) {
              if (_r(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Pe(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = ki(un.bind(null, e, Re, Mt), t);
              break;
            }
            un(e, Re, Mt);
            break;
          case 4:
            if ((Kt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - lt(r);
              (s = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~s);
            }
            if (
              ((r = l),
              (r = ae() - r),
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
                  : 1960 * hd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ki(un.bind(null, e, Re, Mt), r);
              break;
            }
            un(e, Re, Mt);
            break;
          case 5:
            un(e, Re, Mt);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return He(e, ae()), e.callbackNode === n ? fu.bind(null, e) : null;
  }
  function ms(e, t) {
    var n = xr;
    return (
      e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
      (e = Sl(e, t)),
      e !== 2 && ((t = Re), (Re = n), t !== null && hs(t)),
      e
    );
  }
  function hs(e) {
    Re === null ? (Re = e) : Re.push.apply(Re, e);
  }
  function vd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              s = l.getSnapshot;
            l = l.value;
            try {
              if (!it(s(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Kt(e, t) {
    for (
      t &= ~cs,
        t &= ~yl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - lt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function pu(e) {
    if (D & 6) throw Error(p(327));
    In();
    var t = _r(e, 0);
    if (!(t & 1)) return He(e, ae()), null;
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Kl(e);
      r !== 0 && ((t = r), (n = ms(e, r)));
    }
    if (n === 1) throw ((n = yr), an(e, 0), Kt(e, t), He(e, ae()), n);
    if (n === 6) throw Error(p(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      un(e, Re, Mt),
      He(e, ae()),
      null
    );
  }
  function vs(e, t) {
    var n = D;
    D |= 1;
    try {
      return e(t);
    } finally {
      (D = n), D === 0 && ((Fn = ae() + 500), Gr && Bt());
    }
  }
  function on(e) {
    At !== null && At.tag === 0 && !(D & 6) && In();
    var t = D;
    D |= 1;
    var n = qe.transition,
      r = A;
    try {
      if (((qe.transition = null), (A = 1), e)) return e();
    } finally {
      (A = r), (qe.transition = n), (D = t), !(D & 6) && Bt();
    }
  }
  function ys() {
    (Ae = zn.current), X(zn);
  }
  function an(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), $c(n)), ce !== null))
      for (n = ce.return; n !== null; ) {
        var r = n;
        switch ((Ti(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Zr();
            break;
          case 3:
            Pn(), X(Fe), X(Ne), Di();
            break;
          case 5:
            Ri(r);
            break;
          case 4:
            Pn();
            break;
          case 13:
            X(re);
            break;
          case 19:
            X(re);
            break;
          case 10:
            bi(r.type._context);
            break;
          case 22:
          case 23:
            ys();
        }
        n = n.return;
      }
    if (
      ((ge = e),
      (ce = e = Zt(e.current, null)),
      (je = Ae = t),
      (he = 0),
      (yr = null),
      (cs = yl = sn = 0),
      (Re = xr = null),
      nn !== null)
    ) {
      for (t = 0; t < nn.length; t++)
        if (((n = nn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            s = n.pending;
          if (s !== null) {
            var o = s.next;
            (s.next = l), (r.next = o);
          }
          n.pending = r;
        }
      nn = null;
    }
    return e;
  }
  function mu(e, t) {
    do {
      var n = ce;
      try {
        if ((_i(), (sl.current = cl), ol)) {
          for (var r = le.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          ol = !1;
        }
        if (
          ((ln = 0),
          (xe = me = le = null),
          (dr = !1),
          (fr = 0),
          (us.current = null),
          n === null || n.return === null)
        ) {
          (he = 1), (yr = t), (ce = null);
          break;
        }
        e: {
          var s = e,
            o = n.return,
            a = n,
            u = t;
          if (
            ((t = je),
            (a.flags |= 32768),
            u !== null && typeof u == "object" && typeof u.then == "function")
          ) {
            var h = u,
              x = a,
              k = x.tag;
            if (!(x.mode & 1) && (k === 0 || k === 11 || k === 15)) {
              var v = x.alternate;
              v
                ? ((x.updateQueue = v.updateQueue),
                  (x.memoizedState = v.memoizedState),
                  (x.lanes = v.lanes))
                : ((x.updateQueue = null), (x.memoizedState = null));
            }
            var N = Da(o);
            if (N !== null) {
              (N.flags &= -257),
                Ba(N, o, a, s, t),
                N.mode & 1 && Ha(s, h, t),
                (t = N),
                (u = h);
              var E = t.updateQueue;
              if (E === null) {
                var L = new Set();
                L.add(u), (t.updateQueue = L);
              } else E.add(u);
              break e;
            } else {
              if (!(t & 1)) {
                Ha(s, h, t), xs();
                break e;
              }
              u = Error(p(426));
            }
          } else if (te && a.mode & 1) {
            var ue = Da(o);
            if (ue !== null) {
              !(ue.flags & 65536) && (ue.flags |= 256),
                Ba(ue, o, a, s, t),
                Mi(_n(u, a));
              break e;
            }
          }
          (s = u = _n(u, a)),
            he !== 4 && (he = 2),
            xr === null ? (xr = [s]) : xr.push(s),
            (s = o);
          do {
            switch (s.tag) {
              case 3:
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var f = Oa(s, u, t);
                ua(s, f);
                break e;
              case 1:
                a = u;
                var c = s.type,
                  m = s.stateNode;
                if (
                  !(s.flags & 128) &&
                  (typeof c.getDerivedStateFromError == "function" ||
                    (m !== null &&
                      typeof m.componentDidCatch == "function" &&
                      (Wt === null || !Wt.has(m))))
                ) {
                  (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                  var w = Ra(s, a, t);
                  ua(s, w);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        yu(n);
      } catch (M) {
        (t = M), ce === n && n !== null && (ce = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function hu() {
    var e = vl.current;
    return (vl.current = cl), e === null ? cl : e;
  }
  function xs() {
    (he === 0 || he === 3 || he === 2) && (he = 4),
      ge === null || (!(sn & 268435455) && !(yl & 268435455)) || Kt(ge, je);
  }
  function Sl(e, t) {
    var n = D;
    D |= 2;
    var r = hu();
    (ge !== e || je !== t) && ((Mt = null), an(e, t));
    do
      try {
        yd();
        break;
      } catch (l) {
        mu(e, l);
      }
    while (!0);
    if ((_i(), (D = n), (vl.current = r), ce !== null)) throw Error(p(261));
    return (ge = null), (je = 0), he;
  }
  function yd() {
    for (; ce !== null; ) vu(ce);
  }
  function xd() {
    for (; ce !== null && !Vu(); ) vu(ce);
  }
  function vu(e) {
    var t = ku(e.alternate, e, Ae);
    (e.memoizedProps = e.pendingProps),
      t === null ? yu(e) : (ce = t),
      (us.current = null);
  }
  function yu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = dd(n, t)), n !== null)) {
          (n.flags &= 32767), (ce = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (he = 6), (ce = null);
          return;
        }
      } else if (((n = cd(n, t, Ae)), n !== null)) {
        ce = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ce = t;
        return;
      }
      ce = t = e;
    } while (t !== null);
    he === 0 && (he = 5);
  }
  function un(e, t, n) {
    var r = A,
      l = qe.transition;
    try {
      (qe.transition = null), (A = 1), gd(e, t, n, r);
    } finally {
      (qe.transition = l), (A = r);
    }
    return null;
  }
  function gd(e, t, n, r) {
    do In();
    while (At !== null);
    if (D & 6) throw Error(p(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(p(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var s = n.lanes | n.childLanes;
    if (
      (qu(e, s),
      e === ge && ((ce = ge = null), (je = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        gl ||
        ((gl = !0),
        wu(Er, function () {
          return In(), null;
        })),
      (s = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || s)
    ) {
      (s = qe.transition), (qe.transition = null);
      var o = A;
      A = 1;
      var a = D;
      (D |= 4),
        (us.current = null),
        pd(e, n),
        ou(n, e),
        Dc(xi),
        (Fr = !!yi),
        (xi = yi = null),
        (e.current = n),
        md(n),
        Wu(),
        (D = a),
        (A = o),
        (qe.transition = s);
    } else e.current = n;
    if (
      (gl && ((gl = !1), (At = e), (kl = l)),
      (s = e.pendingLanes),
      s === 0 && (Wt = null),
      Ku(n.stateNode),
      He(e, ae()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (xl) throw ((xl = !1), (e = fs), (fs = null), e);
    return (
      kl & 1 && e.tag !== 0 && In(),
      (s = e.pendingLanes),
      s & 1 ? (e === ps ? gr++ : ((gr = 0), (ps = e))) : (gr = 0),
      Bt(),
      null
    );
  }
  function In() {
    if (At !== null) {
      var e = lo(kl),
        t = qe.transition,
        n = A;
      try {
        if (((qe.transition = null), (A = 16 > e ? 16 : e), At === null))
          var r = !1;
        else {
          if (((e = At), (At = null), (kl = 0), D & 6)) throw Error(p(331));
          var l = D;
          for (D |= 4, C = e.current; C !== null; ) {
            var s = C,
              o = s.child;
            if (C.flags & 16) {
              var a = s.deletions;
              if (a !== null) {
                for (var u = 0; u < a.length; u++) {
                  var h = a[u];
                  for (C = h; C !== null; ) {
                    var x = C;
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vr(8, x, s);
                    }
                    var k = x.child;
                    if (k !== null) (k.return = x), (C = k);
                    else
                      for (; C !== null; ) {
                        x = C;
                        var v = x.sibling,
                          N = x.return;
                        if ((nu(x), x === h)) {
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
                var E = s.alternate;
                if (E !== null) {
                  var L = E.child;
                  if (L !== null) {
                    E.child = null;
                    do {
                      var ue = L.sibling;
                      (L.sibling = null), (L = ue);
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
            var m = o.child;
            if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (C = m);
            else
              e: for (o = c; C !== null; ) {
                if (((a = C), a.flags & 2048))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hl(9, a);
                    }
                  } catch (M) {
                    se(a, a.return, M);
                  }
                if (a === o) {
                  C = null;
                  break e;
                }
                var w = a.sibling;
                if (w !== null) {
                  (w.return = a.return), (C = w);
                  break e;
                }
                C = a.return;
              }
          }
          if (
            ((D = l), Bt(), mt && typeof mt.onPostCommitFiberRoot == "function")
          )
            try {
              mt.onPostCommitFiberRoot(Lr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (A = n), (qe.transition = t);
      }
    }
    return !1;
  }
  function xu(e, t, n) {
    (t = _n(n, t)),
      (t = Oa(e, t, 1)),
      (e = Qt(e, t, 1)),
      (t = Pe()),
      e !== null && (Vn(e, 1, t), He(e, t));
  }
  function se(e, t, n) {
    if (e.tag === 3) xu(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          xu(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Wt === null || !Wt.has(r)))
          ) {
            (e = _n(n, e)),
              (e = Ra(t, e, 1)),
              (t = Qt(t, e, 1)),
              (e = Pe()),
              t !== null && (Vn(t, 1, e), He(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function kd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Pe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ge === e &&
        (je & n) === n &&
        (he === 4 || (he === 3 && (je & 130023424) === je && 500 > ae() - ds)
          ? an(e, 0)
          : (cs |= n)),
      He(e, t);
  }
  function gu(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Pr), (Pr <<= 1), !(Pr & 130023424) && (Pr = 4194304))
        : (t = 1));
    var n = Pe();
    (e = Tt(e, t)), e !== null && (Vn(e, t, n), He(e, n));
  }
  function wd(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), gu(e, n);
  }
  function jd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    r !== null && r.delete(t), gu(e, n);
  }
  var ku;
  ku = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Fe.current) Oe = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Oe = !1), ud(e, t, n);
        Oe = !!(e.flags & 131072);
      }
    else (Oe = !1), te && t.flags & 1048576 && qo(t, Jr, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        pl(e, t), (e = t.pendingProps);
        var l = Sn(t, Ne.current);
        Mn(t, n), (l = Qi(null, t, r, e, l, n));
        var s = Vi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ie(r) ? ((s = !0), Yr(t)) : (s = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ii(t),
              (l.updater = dl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Yi(t, r, e, n),
              (t = qi(null, t, r, !0, s, n)))
            : ((t.tag = 0), te && s && Ci(t), Me(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (pl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Nd(r)),
            (e = ot(r, e)),
            l)
          ) {
            case 0:
              t = Ji(null, t, r, e, n);
              break e;
            case 1:
              t = $a(null, t, r, e, n);
              break e;
            case 11:
              t = Ua(null, t, r, e, n);
              break e;
            case 14:
              t = Qa(null, t, r, ot(r.type, e), n);
              break e;
          }
          throw Error(p(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Ji(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          $a(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ka(t), e === null)) throw Error(p(387));
          (r = t.pendingProps),
            (s = t.memoizedState),
            (l = s.element),
            aa(e, t),
            ll(t, r, null, n);
          var o = t.memoizedState;
          if (((r = o.element), s.isDehydrated))
            if (
              ((s = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              (l = _n(Error(p(423)), t)), (t = Za(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = _n(Error(p(424)), t)), (t = Za(e, t, r, n, l));
              break e;
            } else
              for (
                We = Rt(t.stateNode.containerInfo.firstChild),
                  Ve = t,
                  te = !0,
                  st = null,
                  n = sa(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Tn(), r === l)) {
              t = Lt(e, t, n);
              break e;
            }
            Me(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          da(t),
          e === null && Li(t),
          (r = t.type),
          (l = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (o = l.children),
          gi(r, l) ? (o = null) : s !== null && gi(r, s) && (t.flags |= 32),
          Aa(e, t),
          Me(e, t, o, n),
          t.child
        );
      case 6:
        return e === null && Li(t), null;
      case 13:
        return Ya(e, t, n);
      case 4:
        return (
          Oi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = En(t, null, r, n)) : Me(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Ua(e, t, r, l, n)
        );
      case 7:
        return Me(e, t, t.pendingProps, n), t.child;
      case 8:
        return Me(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Me(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (s = t.memoizedProps),
            (o = l.value),
            Y(tl, r._currentValue),
            (r._currentValue = o),
            s !== null)
          )
            if (it(s.value, o)) {
              if (s.children === l.children && !Fe.current) {
                t = Lt(e, t, n);
                break e;
              }
            } else
              for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                var a = s.dependencies;
                if (a !== null) {
                  o = s.child;
                  for (var u = a.firstContext; u !== null; ) {
                    if (u.context === r) {
                      if (s.tag === 1) {
                        (u = Et(-1, n & -n)), (u.tag = 2);
                        var h = s.updateQueue;
                        if (h !== null) {
                          h = h.shared;
                          var x = h.pending;
                          x === null
                            ? (u.next = u)
                            : ((u.next = x.next), (x.next = u)),
                            (h.pending = u);
                        }
                      }
                      (s.lanes |= n),
                        (u = s.alternate),
                        u !== null && (u.lanes |= n),
                        zi(s.return, n, t),
                        (a.lanes |= n);
                      break;
                    }
                    u = u.next;
                  }
                } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
                else if (s.tag === 18) {
                  if (((o = s.return), o === null)) throw Error(p(341));
                  (o.lanes |= n),
                    (a = o.alternate),
                    a !== null && (a.lanes |= n),
                    zi(o, n, t),
                    (o = s.sibling);
                } else o = s.child;
                if (o !== null) o.return = s;
                else
                  for (o = s; o !== null; ) {
                    if (o === t) {
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
          Me(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Mn(t, n),
          (l = Xe(l)),
          (r = r(l)),
          (t.flags |= 1),
          Me(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ot(r, t.pendingProps)),
          (l = ot(r.type, l)),
          Qa(e, t, r, l, n)
        );
      case 15:
        return Va(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          pl(e, t),
          (t.tag = 1),
          Ie(r) ? ((e = !0), Yr(t)) : (e = !1),
          Mn(t, n),
          Fa(t, r, l),
          Yi(t, r, l, n),
          qi(null, t, r, !0, e, n)
        );
      case 19:
        return Xa(e, t, n);
      case 22:
        return Wa(e, t, n);
    }
    throw Error(p(156, t.tag));
  };
  function wu(e, t) {
    return qs(e, t);
  }
  function Sd(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
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
  function et(e, t, n, r) {
    return new Sd(e, t, n, r);
  }
  function gs(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Nd(e) {
    if (typeof e == "function") return gs(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ft)) return 11;
      if (e === pt) return 14;
    }
    return 2;
  }
  function Zt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = et(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Nl(e, t, n, r, l, s) {
    var o = 2;
    if (((r = e), typeof e == "function")) gs(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case be:
          return cn(n.children, l, s, t);
        case Ze:
          (o = 8), (l |= 8);
          break;
        case Pt:
          return (
            (e = et(12, n, t, l | 2)), (e.elementType = Pt), (e.lanes = s), e
          );
        case Be:
          return (e = et(13, n, t, l)), (e.elementType = Be), (e.lanes = s), e;
        case rt:
          return (e = et(19, n, t, l)), (e.elementType = rt), (e.lanes = s), e;
        case ie:
          return Cl(n, l, s, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case wt:
                o = 10;
                break e;
              case Gt:
                o = 9;
                break e;
              case ft:
                o = 11;
                break e;
              case pt:
                o = 14;
                break e;
              case ze:
                (o = 16), (r = null);
                break e;
            }
          throw Error(p(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = et(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = s), t
    );
  }
  function cn(e, t, n, r) {
    return (e = et(7, e, r, t)), (e.lanes = n), e;
  }
  function Cl(e, t, n, r) {
    return (
      (e = et(22, e, r, t)),
      (e.elementType = ie),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ks(e, t, n) {
    return (e = et(6, e, null, t)), (e.lanes = n), e;
  }
  function ws(e, t, n) {
    return (
      (t = et(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Cd(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Zl(0)),
      (this.expirationTimes = Zl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Zl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function js(e, t, n, r, l, s, o, a, u) {
    return (
      (e = new Cd(e, t, n, a, u)),
      t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
      (s = et(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ii(s),
      e
    );
  }
  function Td(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Le,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ju(e) {
    if (!e) return Dt;
    e = e._reactInternals;
    e: {
      if (Xt(e) !== e || e.tag !== 1) throw Error(p(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ie(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(p(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ie(n)) return Go(e, n, t);
    }
    return t;
  }
  function Su(e, t, n, r, l, s, o, a, u) {
    return (
      (e = js(n, r, !0, e, l, s, o, a, u)),
      (e.context = ju(null)),
      (n = e.current),
      (r = Pe()),
      (l = $t(n)),
      (s = Et(r, l)),
      (s.callback = t ?? null),
      Qt(n, s, l),
      (e.current.lanes = l),
      Vn(e, l, r),
      He(e, r),
      e
    );
  }
  function Tl(e, t, n, r) {
    var l = t.current,
      s = Pe(),
      o = $t(l);
    return (
      (n = ju(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Et(s, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Qt(l, t, o)),
      e !== null && (ct(e, l, o, s), rl(e, l, o)),
      o
    );
  }
  function El(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Nu(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ss(e, t) {
    Nu(e, t), (e = e.alternate) && Nu(e, t);
  }
  var Cu =
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
      var t = this._internalRoot;
      if (t === null) throw Error(p(409));
      Tl(e, t, null, null);
    }),
    (Ll.prototype.unmount = Ns.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          on(function () {
            Tl(null, e, null, null);
          }),
            (t[jt] = null);
        }
      });
  function Ll(e) {
    this._internalRoot = e;
  }
  Ll.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = oo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++);
      Ft.splice(n, 0, e), n === 0 && co(e);
    }
  };
  function Cs(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ml(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Tu() {}
  function Ed(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var s = r;
        r = function () {
          var h = El(o);
          s.call(h);
        };
      }
      var o = Su(t, r, e, 0, null, !1, !1, "", Tu);
      return (
        (e._reactRootContainer = o),
        (e[jt] = o.current),
        rr(e.nodeType === 8 ? e.parentNode : e),
        on(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var h = El(u);
        a.call(h);
      };
    }
    var u = js(e, 0, !1, null, null, !1, !1, "", Tu);
    return (
      (e._reactRootContainer = u),
      (e[jt] = u.current),
      rr(e.nodeType === 8 ? e.parentNode : e),
      on(function () {
        Tl(t, u, n, r);
      }),
      u
    );
  }
  function Pl(e, t, n, r, l) {
    var s = n._reactRootContainer;
    if (s) {
      var o = s;
      if (typeof l == "function") {
        var a = l;
        l = function () {
          var u = El(o);
          a.call(u);
        };
      }
      Tl(t, o, e, l);
    } else o = Ed(n, t, e, l, r);
    return El(o);
  }
  (io = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Qn(t.pendingLanes);
          n !== 0 &&
            (Yl(t, n | 1), He(t, ae()), !(D & 6) && ((Fn = ae() + 500), Bt()));
        }
        break;
      case 13:
        on(function () {
          var r = Tt(e, 1);
          if (r !== null) {
            var l = Pe();
            ct(r, e, 1, l);
          }
        }),
          Ss(e, 1);
    }
  }),
    (Gl = function (e) {
      if (e.tag === 13) {
        var t = Tt(e, 134217728);
        if (t !== null) {
          var n = Pe();
          ct(t, e, 134217728, n);
        }
        Ss(e, 134217728);
      }
    }),
    (so = function (e) {
      if (e.tag === 13) {
        var t = $t(e),
          n = Tt(e, t);
        if (n !== null) {
          var r = Pe();
          ct(n, e, t, r);
        }
        Ss(e, t);
      }
    }),
    (oo = function () {
      return A;
    }),
    (ao = function (e, t) {
      var n = A;
      try {
        return (A = e), t();
      } finally {
        A = n;
      }
    }),
    (Ql = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Fl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Kr(r);
                if (!l) throw Error(p(90));
                bs(r), Fl(r, l);
              }
            }
          }
          break;
        case "textarea":
          Rs(e, n);
          break;
        case "select":
          (t = n.value), t != null && dn(e, !!n.multiple, t, !1);
      }
    }),
    ($s = vs),
    (Ks = on);
  var Ld = { usingClientEntryPoint: !1, Events: [sr, wn, Kr, Ws, As, vs] },
    kr = {
      findFiberByHostInstance: Jt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Md = {
      bundleType: kr.bundleType,
      version: kr.version,
      rendererPackageName: kr.rendererPackageName,
      rendererConfig: kr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Se.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Xs(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: kr.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_l.isDisabled && _l.supportsFiber)
      try {
        (Lr = _l.inject(Md)), (mt = _l);
      } catch {}
  }
  return (
    (De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ld),
    (De.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Cs(t)) throw Error(p(200));
      return Td(e, t, null, n);
    }),
    (De.createRoot = function (e, t) {
      if (!Cs(e)) throw Error(p(299));
      var n = !1,
        r = "",
        l = Cu;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = js(e, 1, !1, null, null, n, !1, r, l)),
        (e[jt] = t.current),
        rr(e.nodeType === 8 ? e.parentNode : e),
        new Ns(t)
      );
    }),
    (De.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(p(188))
          : ((e = Object.keys(e).join(",")), Error(p(268, e)));
      return (e = Xs(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (De.flushSync = function (e) {
      return on(e);
    }),
    (De.hydrate = function (e, t, n) {
      if (!Ml(t)) throw Error(p(200));
      return Pl(null, e, t, !0, n);
    }),
    (De.hydrateRoot = function (e, t, n) {
      if (!Cs(e)) throw Error(p(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        s = "",
        o = Cu;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = Su(t, null, e, 1, n ?? null, l, !1, s, o)),
        (e[jt] = t.current),
        rr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Ll(t);
    }),
    (De.render = function (e, t, n) {
      if (!Ml(t)) throw Error(p(200));
      return Pl(null, e, t, !1, n);
    }),
    (De.unmountComponentAtNode = function (e) {
      if (!Ml(e)) throw Error(p(40));
      return e._reactRootContainer
        ? (on(function () {
            Pl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[jt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (De.unstable_batchedUpdates = vs),
    (De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ml(n)) throw Error(p(200));
      if (e == null || e._reactInternals === void 0) throw Error(p(38));
      return Pl(e, t, n, !1, r);
    }),
    (De.version = "18.3.1-next-f1338f8080-20240426"),
    De
  );
}
var Fu;
function Rd() {
  if (Fu) return Ls.exports;
  Fu = 1;
  function g() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (j) {
        console.error(j);
      }
  }
  return g(), (Ls.exports = Od()), Ls.exports;
}
var Iu;
function Hd() {
  if (Iu) return bl;
  Iu = 1;
  var g = Rd();
  return (bl.createRoot = g.createRoot), (bl.hydrateRoot = g.hydrateRoot), bl;
}
var Dd = Hd();
const Bd = ({ isOpen: g, closeModal: j }) => (
    gt.useEffect(() => {
      const p = document.querySelectorAll(".lightbox-btn"),
        $ = document.querySelectorAll(".lightbox-close-btn");
      if (
        (p.forEach((P) => {
          P.addEventListener("click", () => {
            const R = P.nextElementSibling;
            R && R.classList.add("light-box-open");
          });
        }),
        $.forEach((P) => {
          P.addEventListener("click", () => {
            const R = P.closest(".light-box-popup");
            R && R.classList.remove("light-box-open");
          });
        }),
        g)
      ) {
        (document.body.style.overflow = "hidden"),
          (document.body.style.position = "fixed"),
          (document.body.style.width = "100%");
        const P = (R) => {
          R.key === "Escape" && j();
        };
        return (
          document.addEventListener("keydown", P),
          () => {
            document.removeEventListener("keydown", P),
              (document.body.style.overflow = ""),
              (document.body.style.position = ""),
              (document.body.style.width = "");
          }
        );
      }
    }, [g, j]),
    null
  ),
  Ud = "assets/baseball-open-B1ARgnB7.png",
  Qd = "assets/jrep-open-U2w48dkK.png",
  Vd = "assets/kikkake-open-BqMuID9i.png",
  Wd = "assets/kikkakeShop-open-B00Ku5tE.png",
  Ad = "assets/Next-open--FihjH7x.png",
  $d = "assets/ZeroIchi-open-B4-Ju-SL.png",
  Kd = "assets/libaty-open-CT07Zh2j.png",
  Zd = "assets/eyecarelabo-open-Dhdv-bM2.png",
  Yd = "assets/vie-huit-open-DWQ-zBP7.png",
  Gd = "assets/zeroOne-open-B0Zlu5VJ.png",
  Xd = "assets/it-plus-open-u3C57RQs.png",
  Jd = "assets/orange-group-open-BP6kdd8c.png",
  qd = "assets/comingSoon-open-ydrWcG4n.png",
  ef = "assets/lessonOne-open-DZkr6ZXp.png",
  tf = "assets/lessonTwo-open-BVddw04l.png",
  nf = "assets/lessonThree-open-ZDz1a7JT.png",
  rf = "assets/lessonFour-open-C_SxQHbd.png",
  lf = "assets/lessonFive-open-Bun9LUzp.png",
  sf = "assets/libatyLp-open-Dgy8OERH.png",
  of = "assets/react-open-BmC7ObPF.png",
  af = [
    { id: 1, open: Ud },
    { id: 2, open: Qd },
    { id: 3, open: Vd },
    { id: 4, open: Wd },
    { id: 5, open: Ad },
    { id: 6, open: $d },
    { id: 7, open: Kd },
    { id: 8, open: Zd },
    { id: 9, open: Yd },
    { id: 10, open: Gd },
    { id: 11, open: qd },
    { id: 12, open: Xd },
    { id: 13, open: Jd },
    { id: 14, open: ef },
    { id: 15, open: tf },
    { id: 16, open: nf },
    { id: 17, open: rf },
    { id: 18, open: lf },
    { id: 19, open: sf },
    { id: 20, open: of },
  ],
  uf = ({ id: g }) => {
    const j = af.find((p) => p.id === g);
    return j
      ? i.jsx("img", {
          className:
            "light-box-popup-in-img border border-white border-3 open-scroll",
          src: j.open,
          alt: "作品表示",
        })
      : null;
  },
  de = ({ id: g }) => {
    const [j, p] = gt.useState(!1),
      $ = () => {
        p(!0);
      },
      P = () => {
        p(!1);
      };
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx(Bd, { isOpen: j, closeModal: P }),
        i.jsxs("div", {
          className: "modal-btn",
          children: [
            i.jsx("div", {
              className:
                "modal-btn-4 js-modal-button hover btn d-inline-block bg-dark outline-dark text-white px-2 py-1 cursor",
              onClick: $,
              children: "詳細を見る",
            }),
            j &&
              i.jsxs("div", {
                className: "light-box-popup light-box-open",
                children: [
                  i.jsx("div", {
                    className: "light-box-popup-in",
                    children: i.jsx("div", {
                      className: "margin-center",
                      children: i.jsx(uf, { id: g }),
                    }),
                  }),
                  i.jsx("div", { className: "bg-gray-clear", onClick: P }),
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
  _e = [
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
    { link: "https://react-portfolio-kengo.netlify.app/" },
  ],
  df = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[0],
      p = _e[0];
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
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
      j = fe[1],
      p = _e[1];
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
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
  mf = "assets/kikkake-close-CEBW0LuZ.png",
  hf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[2],
      p = _e[2];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: mf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
      j = fe[3],
      p = _e[3];
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
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
      j = fe[4],
      p = _e[4];
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
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
  kf = "assets/webZeroichi-close-BVY11mWF.png",
  wf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[5],
      p = _e[5];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: kf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
  jf = "assets/libertyBridge-close-i0F2-3pl.png",
  Sf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[6],
      p = _e[6];
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
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
      j = fe[7],
      p = _e[7];
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
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
  Tf = "assets/vieHuit-close-CpYMaNmR.png",
  Ef = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[8],
      p = _e[8];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Tf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
  Mf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[9],
      p = _e[9];
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
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
  _f = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[10],
      p = _e[10];
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
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
  bf = "assets/it-plus-close-C-eZlnRJ.png",
  zf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[11],
      p = _e[11];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: bf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
  Ff = "assets/orange-group-CTbAUBWX.png",
  If = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[12],
      p = _e[12];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Ff,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
  Of = "assets/lessonOne-close-CrBiiPT9.png",
  Rf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[13];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Of,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: j.title }),
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
  Df = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[14];
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
            i.jsx("h5", { className: "fw-bold", children: j.title }),
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
  Uf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[15];
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
            i.jsx("h5", { className: "fw-bold", children: j.title }),
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
  Qf = "assets/lessonFour-close-BHVnvfiG.png",
  Vf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[16];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Qf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: j.title }),
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
  Af = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[17];
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
            i.jsx("h5", { className: "fw-bold", children: j.title }),
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
  $f = "assets/libatyLp-close-DipLbW3R.png",
  Kf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[18],
      p = _e[13];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: $f,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
  Zf = "assets/react-close-PNqccqRM.png",
  Yf = () => {
    const g = { fontSize: "11px", lineHeight: "14px" },
      j = fe[19],
      p = _e[14];
    return i.jsxs("div", {
      className: "card card-width d-inline-block",
      children: [
        i.jsx("div", {
          children: i.jsx("img", {
            className: "w-100",
            src: Zf,
            alt: "作品紹介",
          }),
        }),
        i.jsxs("div", {
          className: "container pt-3",
          children: [
            i.jsx("h5", { className: "fw-bold", children: j.title }),
            i.jsx("div", {
              children: i.jsx("a", {
                target: "_blank",
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
  Gf = [
    { card: i.jsx(df, {}) },
    { card: i.jsx(pf, {}) },
    { card: i.jsx(hf, {}) },
    { card: i.jsx(yf, {}) },
    { card: i.jsx(gf, {}) },
    { card: i.jsx(wf, {}) },
    { card: i.jsx(Sf, {}) },
    { card: i.jsx(Cf, {}) },
    { card: i.jsx(Ef, {}) },
    { card: i.jsx(Mf, {}) },
    { card: i.jsx(_f, {}) },
    { card: i.jsx(zf, {}) },
    { card: i.jsx(If, {}) },
    { card: i.jsx(Rf, {}) },
    { card: i.jsx(Df, {}) },
    { card: i.jsx(Uf, {}) },
    { card: i.jsx(Vf, {}) },
    { card: i.jsx(Af, {}) },
    { card: i.jsx(Kf, {}) },
    { card: i.jsx(Yf, {}) },
  ],
  Xf = () =>
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
            children: Gf.map((g, j) =>
              i.jsx(
                "li",
                { style: { display: "inline-block" }, children: g.card },
                j
              )
            ),
          }),
        }),
      ],
    }),
  Jf = () =>
    i.jsx("footer", {
      className: "bg-dark",
      children: i.jsx("div", {
        className: "text-center py-5",
        children: i.jsx("small", {
          className: "text-white fw-bold",
          children: "Kengo Masunari",
        }),
      }),
    }),
  qf = "assets/react-CHdo91hT.svg",
  ep = [
    {
      FileName: "src/React/Footer/Footer.tsx",
      text: `
    import React from 'react';
          const Footer = () => {
            return (
              <footer>
                <div>Footer content here</div>
              </footer>
            );
          };
          
          export default Footer;
    `,
    },
    {
      FileName: "src/React/Fv/BgImages.tsx",
      text: `import { useEffect, useState } from "react";
      import FvImg from "./Fv.jpg";
      
      const BgImages = () => {
        const [opacity, setOpacity] = useState(0);
      
        useEffect(() => {
          const timer = setTimeout(() => setOpacity(1), 100);
          return () => clearTimeout(timer);
        }, []);
      
        const BgOnImages = {
          backgroundImage: \`url(\${FvImg})\`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: opacity,
          transition: "opacity 3s ease-in-out",
        };
        
        return (
          <div className="youtube-width" style={BgOnImages}></div>
        );
      };
      
      export default BgImages;`,
    },
    {
      FileName: "src/React/Fv/FirstView.tsx",
      text: `import { useEffect, useState, useRef } from "react";
import FvImg from "./Fv.jpg";

const FirstView = () => {
  const [text, setText] = useState("");
  const isTypingRef = useRef(false);
  const typingElementRef = useRef(null);

  useEffect(() => {
    const Typing = (sentence: string) => {
      if (isTypingRef.current) return;
      isTypingRef.current = true;
      setText("");

      sentence.split("").forEach((character, index) => {
        setTimeout(() => {
          setText((prevText) => prevText + character);
          if (index === sentence.length - 1) {
            setTimeout(() => {
              isTypingRef.current = false;
            }, 500);
          }
        }, 80 * index);
      });
    };
    Typing("React & jQuery");
  }, []);

  const BgOnImages = {
    backgroundImage: \`url(\${FvImg})\`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 1,
  };
  const NoBr = {
    whiteSpace: "nowrap",
  };

  return (
    <div className="video-container bg-dark" id="top" style={BgOnImages}>
      <div className="overlay-text">
        <h2 className="copy">
          <p className="fw-bold oshare-font" ref={typingElementRef} style={NoBr}>{text}</p>
        </h2>
      </div>
    </div>
  );
};

export default FirstView;
`,
    },
    {
      FileName: "src/React/Header/Detail.tsx",
      text: `
    import { useEffect, useState } from "react";
import DetailOpen from "./DetailOpen";

const Detail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDetail = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.classList.add("html-bg-dark");
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.classList.remove("html-bg-dark");
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);
  const styleBgDark: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.61)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };
  return (
    <div className="position-absolute top-0 end-0 mt-2 pt-1 pt-md-0 mt-md-3 mx-4">
      <div
        onClick={toggleDetail}
        className="detail-btn hover fw-bold d-inline-block text-white px-3 py-1 border border-white border-1 oshare-font"
      >
        Detail
      </div>
      {isOpen && (
        <div
          className="bgBtnOpenClose"
          style={styleBgDark}
          onClick={toggleDetail}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <DetailOpen />
          </div>
        </div>
      )}
    </div>
  );
};
export default Detail;

    `,
    },
    { FileName: "src/React/Header/DetailFile.tsx", text: "" },
    {
      FileName: "src/React/Header/DetailMove.tsx",
      text: `const DetailMove = () => {
  return null;
};

export default DetailMove;
`,
    },
    {
      FileName: "src/React/Header/DetailOpen.tsx",
      text: `import DetailFile from "./DetailFile";

const DetailOpen = () => {
  return (
    <div className="margin-center">
      <div className="bg-white py-5 card body detail-card position-absolute">
        <div className="scroll">
          <div className="file-name-size text-center oshare-font text-dark border-bottom border-1 pb-5">
            このportfolioサイトは、
            <br />
            ReactとjQueryとVanilla.jsを使って作成しました。
            <br />
            構成は以下のようになっています。
          </div>
          <DetailFile />
        </div>
      </div>
    </div>
  );
};
export default DetailOpen;
`,
    },
    { FileName: "src/React/Header/DetailSauce.tsx", text: "" },
    {
      FileName: "src/React/Header/Header.tsx",
      text: `import HeaderLogo from "../../../public/headerLogo.svg";
import Detail from "./Detail";
const Header = () => {
  return (
    <>
      <header className="bg-dark fixed-top">
        <div className="position-relative">
          <div className="d-flex align-items-start">
            <div className="py-md-1 ps-2">
              <a className="hover" href="">
                <img className="header-logo" src={HeaderLogo} />
              </a>
            </div>
          </div>
          <Detail />
        </div>
      </header>
    </>
  );
};
export default Header;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/Cards.tsx",
      text: `import OneCard from "./OneCard";
import TwoCard from "./TwoCard";
import ThreeCard from "./ThreeCard";
import FourCard from "./FourCard";
import FiveCard from "./FiveCard";
import SixCard from "./SixCard";
import SevenCard from "./SevenCard";
import EightCard from "./EightCard";
import NineCard from "./NineCard";
import TenCard from "./TenCard";
import ElevenCard from "./ElevenCard";
import TwelveCard from "./TwelveCard";
import ThirteenCard from "./ThirteenCard";
import FourteenCard from "./FourteenCard";
import FifteenCard from "./FifteenCard";
import SixteenCard from "./SixteenCard";
import SeventeenCard from "./SeventeenCard";
import EighteenCard from "./EighteenCard";
import NineteenCard from "./NineteenCard";
import TwentyCard from "./TwentyCard";


const Cards = [
  { card: <OneCard/> },
  { card: <TwoCard/> },
  { card: <ThreeCard/> },
  { card: <FourCard/> },
  { card: <FiveCard/> },
  { card: <SixCard/> },
  { card: <SevenCard/> },
  { card: <EightCard/> },
  { card: <NineCard/> },
  { card: <TenCard/> },
  { card: <ElevenCard/> },
  { card: <TwelveCard/> },
  { card: <ThirteenCard/> },
  { card: <FourteenCard/> },
  { card: <FifteenCard/> },
  { card: <SixteenCard/> },
  { card: <SeventeenCard/> },
  { card: <EighteenCard/> },
  { card: <NineteenCard/> },
  { card: <TwentyCard/> },
];
export default Cards
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/EightCard.tsx",
      text: `import Modal from "../Modal/Modal";
import eyecarelabo from "../Modal/CloseModal/eyecarelabo-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const EightCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[7];
  const Link = Links[7];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={eyecarelabo} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a target="_blank" className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・FileZila</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            画像コーディングの一部のみ
            <br />
            コーディングさせていただきまいた。
            <br />
            このLPを作った方が
            <br />
            コーディングができない方で
            <br />
            一部どうしてもコーディングが必要
            <br />
            な箇所があり、
            <br />
            その部分だけお手伝いしました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={8} />
      </div>
    </div>
  );
};
export default EightCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/EighteenCard.tsx",
      text: `import Modal from "../Modal/Modal";
import ItFiveClose from "../Modal/CloseModal/lessonFive-close.png";
import Titles from "../Infomation/Titles";

const EighteenCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[17];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={ItFiveClose} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・SCSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            以前いた会社の
            <br />
            ITのカリキュラム五つ目の作品です。
            <br />
            実際に公開されていないので
            <br />
            リンクはありませんが
            <br />
            詳細ボタンから画像1ページ分のみ
            <br />
            ご覧ください。
            <br />
            デザインは決められていて
            <br />
            その決められたデザインを
            <br />
            コーディングする内容だったので
            <br />
            比較的簡単にすぐ終えることができ、
            <br />
            周りの新卒の同期は
            <br />
            2025年1月現在も終わっていない
            <br />
            人もいる中、自分はこの
            <br />
            カリキュラム1〜5を
            <br />
            1ヶ月半で終わらせました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={18} />
      </div>
    </div>
  );
};

export default EighteenCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/ElevenCard.tsx",
      text: `import Modal from "../Modal/Modal";
import comingSoon from "../Modal/CloseModal/comingSoon-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const ElevenCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[10];
  const Link = Links[10];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={comingSoon} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a target="_blank" className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・FileZila</li>
            <li>・Figma</li>
            <li>・WordPress</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>現在デザイン、コーディング中です。</div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={11} />
      </div>
    </div>
  );
};
export default ElevenCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/FifteenCard.tsx",
      text: `import Modal from "../Modal/Modal";
import ItTwoClose from "../Modal/CloseModal/lessonTwo-close.png";
import Titles from "../Infomation/Titles";

const FifteenCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[14];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={ItTwoClose} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            以前いた会社の
            <br />
            ITのカリキュラム二つ目の作品です。
            <br />
            実際に公開されていないので
            <br />
            リンクはありませんが
            <br />
            詳細ボタンから画像1ページ分のみ
            <br />
            ご覧ください。
            <br />
            デザインは決められていて
            <br />
            その決められたデザインを
            <br />
            コーディングする内容だったので
            <br />
            比較的簡単にすぐ終えることができ、
            <br />
            周りの新卒の同期は
            <br />
            2025年1月現在も終わっていない
            <br />
            人もいる中、自分はこの
            <br />
            カリキュラム1〜5を
            <br />
            1ヶ月半で終わらせました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={15} />
      </div>
    </div>
  );
};

export default FifteenCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/FiveCard.tsx",
      text: `import Modal from "../Modal/Modal";
import next from "../Modal/CloseModal/next-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const FiveCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[4];
  const Link = Links[4];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={next} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a target="_blank" className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・FileZila</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            こちらは合同会社キッカケが出している
            <br />
            パワーグレードという商品を
            <br />
            売るためのLPになります。
            <br />
            以前は別の見た目をしていましたが
            <br />
            昨年2024年後半ごろに今の見た目に
            <br />
            変更しました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={5} />
      </div>
    </div>
  );
};
export default FiveCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/FourCard.tsx",
      text: `import Modal from "../Modal/Modal";
import kikkakeShop from "../Modal/CloseModal/kikkakeShop-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const FourCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[3];
  const Link = Links[3];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={kikkakeShop} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a target="_blank" className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・FileZila</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            合同会社キッカケの、
            <br />
            商品を売るための専用のHPです。
            <br />
            こちらも参考にしたシンプルな
            <br />
            ショッピングサイトのページが
            <br />
            送られてきて
            <br />
            それの通りに一度情報や画像を
            <br />
            当てはめて作った後に
            <br />
            要望に沿って修正して作成しました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={4} />
      </div>
    </div>
  );
};
export default FourCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/NineCard.tsx",
      text: `import Modal from "../Modal/Modal";
import vieHuit from "../Modal/CloseModal/vieHuit-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const NineCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[8];
  const Link = Links[8];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={vieHuit} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a target="_blank" className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・FileZila</li>
            <li>・WordPress</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            お知り合いの紹介で
            <br />
            知り合った社長さんが
            <br />
            新しく会社を作ることになり
            <br />
            コーディングさせていただいたHPです。
            <br />
            会社員の仕事が一番忙しい時期で
            <br />
            途中から別の方にコーディングを
            <br />
            バトンタッチすることになってしまい
            <br />
            申し訳ない気持ちでしたが
            <br />
            参考サイトも修正依頼も細かく
            <br />
            作成に携わらせていただけて
            <br />
            とても良い経験になりました。
            <br />
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={9} />
      </div>
    </div>
  );
};
export default NineCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/NineteenCard.tsx",
      text: `import Modal from "../Modal/Modal";
import LibatyLpClose from "../Modal/CloseModal/libatyLp-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const NineteenCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[18];
  const Link = Links[13];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={LibatyLpClose} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a target="_blank" className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            株式会社liberty bridgeの<br/>
            既存LPの修正に携わらせて<br/>
            いただきました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={19} />
      </div>
    </div>
  );
};

export default NineteenCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/OneCard.tsx",
      text: `import Modal from "../Modal/Modal";
import baseballClose from "../Modal/CloseModal/baseball-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const OneCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[0];
  const Link = Links[0];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={baseballClose} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a target="_blank" className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・WordPress</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            人生で初めて自分がコーディングして
            <br />
            公開したHPです。
            <br />
            デザインの要望も何もなく、
            <br />
            「強いていうならシンプルに」と
            <br />
            仰っていました。
            <br />
            依頼してくださった方が親戚で
            <br />
            「好きに作っちゃっていいよ。」
            <br />
            と言われたのでシンプルに作りました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={1} />
      </div>
    </div>
  );
};

export default OneCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/SevenCard.tsx",
      text: `import Modal from "../Modal/Modal";
import libertyBridge from "../Modal/CloseModal/libertyBridge-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const SevenCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[6];
  const Link = Links[6];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={libertyBridge} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a target="_blank" className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・Gmail</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            株式会社Liberty Bridgeの、
            <br />
            RIBRECというサービス専用の
            <br />
            LPです。 元々別の方が作った
            <br />
            画像コーディングの
            <br />
            LPだったのですが
            <br />
            テキストコーディングにしたい
            <br />
            とのことで自分がコーディング
            <br />
            しました。
            <br />
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={7} />
      </div>
    </div>
  );
};
export default SevenCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/SeventeenCard.tsx",
      text: `import Modal from "../Modal/Modal";
import ItFourClose from "../Modal/CloseModal/lessonFour-close.png";
import Titles from "../Infomation/Titles";

const SeventeenCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[16];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={ItFourClose} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・SCSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            以前いた会社の
            <br />
            ITのカリキュラム四つ目の作品です。
            <br />
            実際に公開されていないので
            <br />
            リンクはありませんが
            <br />
            詳細ボタンから画像1ページ分のみ
            <br />
            ご覧ください。
            <br />
            デザインは決められていて
            <br />
            その決められたデザインを
            <br />
            コーディングする内容だったので
            <br />
            比較的簡単にすぐ終えることができ、
            <br />
            周りの新卒の同期は
            <br />
            2025年1月現在も終わっていない
            <br />
            人もいる中、自分はこの
            <br />
            カリキュラム1〜5を
            <br />
            1ヶ月半で終わらせました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={17} />
      </div>
    </div>
  );
};

export default SeventeenCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/SixCard.tsx",
      text: `import Modal from "../Modal/Modal";
import webZeroichi from "../Modal/CloseModal/webZeroichi-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const SixCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[5];
  const Link = Links[5];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={webZeroichi} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a target="_blank" className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・FileZila</li>
            <li>・WordPress</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            自分が大学生の時に
            <br />
            WEBコーディングの仕事を
            <br />
            とっていくために
            <br />
            形式上作成したHPです。
            <br />
            参考にしたデザインはなく、
            <br />
            自由に作りました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={6} />
      </div>
    </div>
  );
};
export default SixCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/SixteenCard.tsx",
      text: `import Modal from "../Modal/Modal";
import ItThreeClose from "../Modal/CloseModal/lessonThree-close.png";
import Titles from "../Infomation/Titles";

const SixteenCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[15];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={ItThreeClose} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            以前いた会社の
            <br />
            ITのカリキュラム三つ目の作品です。
            <br />
            実際に公開されていないので
            <br />
            リンクはありませんが
            <br />
            詳細ボタンから画像1ページ分のみ
            <br />
            ご覧ください。
            <br />
            デザインは決められていて
            <br />
            その決められたデザインを
            <br />
            コーディングする内容だったので
            <br />
            比較的簡単にすぐ終えることができ、
            <br />
            周りの新卒の同期は
            <br />
            2025年1月現在も終わっていない
            <br />
            人もいる中、自分はこの
            <br />
            カリキュラム1〜5を
            <br />
            1ヶ月半で終わらせました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={16} />
      </div>
    </div>
  );
};

export default SixteenCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/TenCard.tsx",
      text: `import Modal from "../Modal/Modal";
import zeroOne from "../Modal/CloseModal/ZeroOne-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const TenCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[9];
  const Link = Links[9];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={zeroOne} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a target="_blank" className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・FileZila</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            合同会社キッカケの、
            <br />
            ゼロワンという商品の
            <br />
            販売用LPです。
            <br />
            こちらは参考デザインのLPがあって
            <br />
            そのLPのデザインに沿って
            <br />
            一度情報や画像を当てはめて
            <br />
            作った後
            <br />
            要望に沿って修正して作成しました。
            <br />
            社長さんがこのデザインを
            <br />
            とてもよく気に入ってくださり
            <br />
            元々別の見た目をしていた
            <br />
            パワーグレードのLPも
            <br />
            これと同じ見た目になりました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={10} />
      </div>
    </div>
  );
};
export default TenCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/ThirteenCard.tsx",
      text: `import Modal from "../Modal/Modal";
import orangeGroupClose from "../Modal/CloseModal/orange-group.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const ThirteenCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[12];
  const Link = Links[12];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={orangeGroupClose} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a target="_blank" className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・FileZila</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            大学時代にお世話になった
            <br />
            株式会社ITプラスの子会社にあたる
            <br />
            自動車の事業のHPです。
            <br />
            このHPも保守運用や修正、
            <br />
            一部作成をしました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={13} />
      </div>
    </div>
  );
};
export default ThirteenCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/ThreeCard.tsx",
      text: `import Modal from "../Modal/Modal";
import kikkakeClose from "../Modal/CloseModal/kikkake-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const ThreeCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[2];
  const Link = Links[2];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={kikkakeClose} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a target="_blank" className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・WordPress</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            まず先に参考サイトと
            <br />
            載せたい画像と情報を
            <br />
            GoogleDocumentで 送っていただき、
            <br />
            その参考サイトの
            <br />
            デザインに情報や画像を
            <br />
            当てはめてコーディングをして、
            <br />
            その後「ここはこうしてほしい」
            <br />
            などの要望に沿う形で
            <br />
            修正を加えていき
            <br />
            完成した作品です。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={3} />
      </div>
    </div>
  );
};
export default ThreeCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/TwelveCard.tsx",
      text: `import Modal from "../Modal/Modal";
import itPlusClose from "../Modal/CloseModal/it-plus-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const TwelveCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[11];
  const Link = Links[11];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={itPlusClose} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a target="_blank" className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・FileZila</li>
            <li>・WordPress</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            私が学生時代にWEB制作の
            <br />
            アルバイトでお世話になった
            <br />
            会社のHPです。
            <br />
            このHPは元々あったのですが
            <br />
            以前は少し違う見た目を
            <br />
            していて
            <br />
            WEB制作の知識が全くない
            <br />
            社員さんや社長さんの
            <br />
            ここはもっとこうしてほしい
            <br />
            などの要望の通りに
            <br />
            修正をしたり、
            <br />
            WordPressの新規記事投稿の
            <br />
            作成や、一部ページの作成など
            <br />
            保守運用、修正、一部作成を
            <br />
            しました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={12} />
      </div>
    </div>
  );
};
export default TwelveCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Card/TwentyCard.tsx",
      text: "src/React/SlickSlider/Card/TwentyCard.tsx",
    },
    {
      FileName: "src/React/SlickSlider/Card/TwoCard.tsx",
      text: `import Modal from "../Modal/Modal";
import jrepClose from "../Modal/CloseModal/jrep-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const TwoCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[1];
  const Link = Links[1];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={jrepClose} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a target="_blank" className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・FileZila</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            デザインは既に決まっていて、
            <br />
            後はコーディングのみという状態の
            <br />
            お仕事でした。
            <br />
            初めて社長さんから頂いたお仕事で
            <br />
            コーディング力もない中必死で
            <br />
            デザインの通りに
            <br />
            コーディングしました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={2} />
      </div>
    </div>
  );
};
export default TwoCard;
`,
    },
    {
      FileName: "src/React/SlickSlider/Infomation/Links.tsx",
      text: `const Links = [
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
  { link: "https://react-portfolio-kengo.netlify.app/" },
];
export default Links;
`,
    },
    {
      FileName: "src/React/SlickSlider/Infomation/Titles.tsx",
      text: `const Titles = [
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
];
export default Titles;
`,
    },
    {
      FileName: "src/React/SlickSlider/Modal/Modal.tsx",
      text: `import { useState } from "react";
import ModalLogic from "./ModalLogic";
import ModalImg from "./ModalImg";

const Modal = ({ id }: { id: string | number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  
  return (
    <>
      <ModalLogic isOpen={isOpen} closeModal={closeModal} />
      <div className="modal-btn">
        <div
          className="modal-btn-4 js-modal-button hover btn d-inline-block bg-dark outline-dark text-white px-2 py-1 cursor"
          onClick={openModal}
        >
          詳細を見る
        </div>
        {isOpen && (
          <div className="light-box-popup light-box-open">
            <div className="light-box-popup-in">
              <div className="margin-center">
                <ModalImg id={id} />
              </div>
            </div>
            <div className="bg-gray-clear" onClick={closeModal}></div>
          </div>
        )}
      </div>
    </>
  );
};
export default Modal;
`,
    },
    {
      FileName: "src/React/SlickSlider/Modal/ModalImg.tsx",
      text: `import BaseballOpen from "./OpenModal/baseball-open.png";
import JrepOpen from "./OpenModal/jrep-open.png";
import KikkakeOpen from "./OpenModal/kikkake-open.png";
import KikkakeshopOpen from "./OpenModal/kikkakeShop-open.png";
import NextOpen from "./OpenModal/Next-open.png";
import WebZerIchiOpen from "./OpenModal/ZeroIchi-open.png";
import LibatyOpen from "./OpenModal/libaty-open.png";
import EyecareOpen from "./OpenModal/eyecarelabo-open.png";
import VieHuitOpen from "./OpenModal/vie-huit-open.png";
import ZeroWanOpen from "./OpenModal/zeroOne-open.png";
import ItPlusOpen from "./OpenModal/it-plus-open.png";
import OrangeGroupOpen from "./OpenModal/orange-group-open.png";
import ComingSoonOpen from "./OpenModal/comingSoon-open.png";
import ItOne from "./OpenModal/lessonOne-open.png";
import ItTwo from "./OpenModal/lessonTwo-open.png";
import ItThree from "./OpenModal/lessonThree-open.png";
import ItFour from "./OpenModal/lessonFour-open.png";
import ItFive from "./OpenModal/lessonFive-open.png";
import LibatyLp from "./OpenModal/libatyLp-open.png";
import ReactPortfolio from "./OpenModal/react-open.png";

const OpenImages = [
  { id: 1, open: BaseballOpen },
  { id: 2, open: JrepOpen },
  { id: 3, open: KikkakeOpen },
  { id: 4, open: KikkakeshopOpen },
  { id: 5, open: NextOpen },
  { id: 6, open: WebZerIchiOpen },
  { id: 7, open: LibatyOpen },
  { id: 8, open: EyecareOpen },
  { id: 9, open: VieHuitOpen },
  { id: 10, open: ZeroWanOpen },
  { id: 11, open: ComingSoonOpen },
  { id: 12, open: ItPlusOpen },
  { id: 13, open: OrangeGroupOpen },
  { id: 14, open: ItOne },
  { id: 15, open: ItTwo },
  { id: 16, open: ItThree },
  { id: 17, open: ItFour },
  { id: 18, open: ItFive },
  { id: 19, open: LibatyLp },
  { id: 20, open: ReactPortfolio },
];

const ModalImg = ({ id }: { id: string | number }) => {
  const selectedImage = OpenImages.find((image) => image.id === id);
  return selectedImage ? (
    <img
      className="light-box-popup-in-img border border-white border-3 open-scroll"
      src={selectedImage.open}
      alt="作品表示"
    />
  ) : null;
};
export default ModalImg;
`,
    },
    {
      FileName: "src/React/SlickSlider/Modal/ModalLogic.tsx",
      text: `import { useEffect } from "react";
    
    const ModalLogic = ({ isOpen, closeModal }: { isOpen: boolean, closeModal: () => void }) => {
      useEffect(() => {
        const lightboxBtns = document.querySelectorAll(".lightbox-btn");
        const lightboxCloseBtns = document.querySelectorAll(".lightbox-close-btn");
        lightboxBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            const lightboxContainer = btn.nextElementSibling;
            if (lightboxContainer) {
              lightboxContainer.classList.add("light-box-open");
            }
          });
        });
        lightboxCloseBtns.forEach((closeBtn) => {
          closeBtn.addEventListener("click", () => {
            const lightboxContainer = closeBtn.closest(".light-box-popup");
            if (lightboxContainer) {
              lightboxContainer.classList.remove("light-box-open");
            }
          });
        });
        if (isOpen) {
          document.body.style.overflow = "hidden";
          document.body.style.position = "fixed";
          document.body.style.width = "100%";
          const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
              closeModal();
            }
          };
          document.addEventListener("keydown", handleEscape);
          return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.width = "";
          };
        }
      }, [isOpen, closeModal]);
      return null;
    };
    export default ModalLogic;
    `,
    },
    {
      FileName: "src/React/SlickSlider/SlickSlider.tsx",
      text: `import Cards from "./Card/Cards";

const SlickSlider = () => {
  return (
    <section className="py-5">
      <h1 className="fw-bold text-center">制作実績</h1>
      <div
        className="bg-white"
        style={{ overflowX: "auto", whiteSpace: "nowrap" }}
      >
        <ul id="ul" className="d-inline-flex">
          {Cards.map((item, index) => (
            <li key={index} style={{ display: "inline-block" }}>
              {item.card}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SlickSlider;
`,
    },
    {
      FileName: "src/React/Kengo.tsx",
      text: `import SlickSlider from "./SlickSlider/SlickSlider";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import FirstView from "./Fv/FirstView";

const Kengo = () => {
  return (
    <div className="bg-white">
      <Header />
      <FirstView />
      <SlickSlider />
      <Footer />
    </div>
  );
};
export default Kengo;
`,
    },
    {
      FileName: "src/App.tsx",
      text: `import Kengo from "./React/Kengo"
import './App.css'

const App = () => {
  return (
    <Kengo />
  )
}

export default App
`,
    },
    {
      FileName: "src/index.css",
      text: `html {
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
}
body {
  overflow-x: hidden;
}
body.modal-open {
  overflow-y: hidden;
}
li {
  list-style: none;
}
#ul {
  margin-left: 0;
  padding-left: 0;
}
#top {
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#top::after {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000000;
  background-image: linear-gradient(
      45deg,
      white 25%,
      transparent 25%,
      transparent 75%,
      white 75%,
      white
    ),
    linear-gradient(
      45deg,
      white 25%,
      transparent 25%,
      transparent 75%,
      white 75%,
      white
    );
  background-position: 0 0, 1.5px 1.5px;
  background-size: 3px 3px;
  opacity: 0.2;
  content: "";
}
.video-container {
  width: 100%;
  height: 100vh;
  position: relative;
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.position-relative {
  position: relative;
}
.copy {
  text-align: center;
  width: 80%;
  z-index: 150;
}
.copy p {
  color: #fff;
  font-weight: bold;
  font-size: 40px;
  letter-spacing: 0.2em;
}
@media screen and (max-width: 767px) {
  .copy p {
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0.2em;
  }
}
.oshare-font {
  font-family: "Shippori Mincho", serif;
}
.card-width {
  width: 250px;
  margin: 0 10px;
}
#ul {
  margin-left: 0px;
  padding-left: 0px;
}

.bg-gray-clear {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.643);
  cursor: pointer;
  z-index: 99999999;
}
.light-box-popup {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  z-index: 100000000;
}
.light-box-popup.light-box-open {
  visibility: visible;
  opacity: 1;
}
@media screen and (max-width: 767px) {
  .bg-gray-clear {
    width: 100%;
    height: 100%; /* 100vhではなく、100%に変更してみる */
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.643);
    cursor: pointer;
    z-index: 99999999;
  }
  .light-box-popup {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    z-index: 100000000;
  }
}
.light-box-popup .light-box-popup-in-img {
  width: 100%;
  height: auto;
  display: block;
}
.light-box-popup .light-box-popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 18px;
  color: #333;
}
@keyframes fadeInScale {
  from {
    transform: scale(1.2);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.hover {
  opacity: 1;
}
.hover:hover {
  opacity: 0.5;
  cursor: pointer;
}
.swiper {
  width: 100%;
  height: 300px;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background: #007bff;
  color: white;
}
.header-top {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.header-h1 {
  font-size: 20px;
  line-height: 64px;
  padding-top: 6px;
}
.header-logo {
  width: 60px;
  padding-left: 10px;
}
.space {
  height: 50px;
}
.fas-position {
  right: 0;
  border-radius: 10px;
}
.none {
  text-decoration: none;
}
.anime {
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  position: fixed;
  z-index: 100000;
}
.script-youtube {
  position: absolute;
  overflow: hidden;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999999999999999999;
}
.header-logo {
  width: 70px;
}
@media screen and (min-width: 768px) {
  .light-box-popup .light-box-popup-in {
    width: 767px;
    height: 420px;
    position: relative;
    background-color: white;
    overflow-y: scroll;
    overflow-x: hidden;
    animation: fadeInScale 0.5s ease;
    z-index: 200000002;
    box-shadow: 0 0 10px 1px white;
  }
}
@media screen and (max-width: 767px) {
  .light-box-popup .light-box-popup-in {
    width: 300px;
    height: 25%;
    position: relative;
    background-color: white;
    overflow-y: scroll;
    overflow-x: hidden;
    animation: fadeInScale 0.5s ease;
    z-index: 200000002;
    box-shadow: 0 0 10px 1px white;
  }
}
.scroll {
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.animation {
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s, transform 1s;
  transform: translateY(100px);
}
.animation.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
@media screen and (min-width: 768px) {
  .detail-card {
    width: 700px;
    height: 80vh;
    top: 60px;
    right: 50px;
  }
  .file-name-size {
    font-size: 15px;
  }
}
@media screen and (max-width: 767px) {
  .detail-card {
    width: 300px;
    height: 80vh;
    top: 60px;
    right: 20px;
  }
  .file-name-size {
    font-size: 12px;
  }
}
.html-bg-dark {
  transition: 1s;
}
.code-display {
  background-color: #e7e7e7;
  width: 90%;
  margin: 0 5%;
  padding: 20px;
  font-family: monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.file-name-size {
  font-size: 16px;
  cursor: pointer;
}
.file-name-size:hover {
  color: blue;
}
`,
    },
    {
      FileName: "src/main.tsx",
      text: `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
`,
    },
    {
      FileName: "index.html",
      text: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/headerLogo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      crossorigin="anonymous"
    />
    <title>Kengo Masunari</title>
  </head>
  <body className="body">
    <div className="script-youtube anime">
      <div className="video-container bg-dark" id="top">
        <div className="text-white" style="white-space: nowrap">
          <h2 className="copy">
            <p id="typing" className="oshare-font"></p>
          </h2>
        </div>
        <div
          id="videoPlay"
          data-property="{
            videoURL: 'jbBVV-BGtfY', // 動画IDまたはURL
            containment: '.video-container', // 親要素
            mute: true, // 音声ミュート
            loop: true, // ループ再生
            autoPlay: true, // 自動再生
            startAt: 33, // 動画開始秒数
            showControls: false, // コントロールナビゲーション非表示
            showYTLogo: false, // YouTubeロゴ非表示
            rel: 0, // 関連動画非表示
            modestbranding: 1 // YouTubeのブランド表示非表示
          }"
        ></div>
      </div>
    </div>
    <div id="root"></div>
    <script src="jquery.js"><\/script>
    <script src="jquery.mb.YTPlayer.min.js"><\/script>
    <script src="main.js"><\/script>
    <script type="module" src="/src/main.tsx"><\/script>
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
      crossorigin="anonymous"
    ><\/script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
      crossorigin="anonymous"
    ><\/script>
  </body>
</html>
`,
    },
    {
      FileName: "jquery.js",
      text: `<script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>
`,
    },
    {
      FileName: "jquery.mb.YTPlayer.min.js",
      text: "http://pupunzi.open-lab.com",
    },
    {
      FileName: "main.js",
      text: `// document.addEventListener("DOMContentLoaded", function() {
//   $("#videoPlay").YTPlayer();
// });

document.addEventListener("DOMContentLoaded", function() {
  $("#videoPlay").YTPlayer();
});

setTimeout(function () {
  $(".script-youtube").fadeOut(2000, function () {
    $(".mainSite").css("display", "flex");
  });
}, 6000);

let isTyping = false;
const typing = (element, sentence) => {
  if (isTyping) return;
  isTyping = true;

  document.querySelector(element).textContent = "";
  [...sentence].forEach((character, index) => {
    setTimeout(() => {
      document.querySelector(element).textContent += character;
      if (index === sentence.length - 1) {
        setTimeout(() => {
          isTyping = false;
        }, 500);
      }
    }, 80 * index);
  });
};
typing("#typing", "Open My Portfolio");
`,
    },
  ],
  tp = () => {
    const [g, j] = gt.useState(null),
      p = ($) => {
        j($);
      };
    return i.jsx(i.Fragment, {
      children: i.jsxs("div", {
        className: "text-left my-3",
        children: [
          i.jsx("div", {
            className: "py-5 bg-white",
            id: "ul",
            children: i.jsx("a", {
              href: "#Sauce",
              className: "file-name-size text-dark none",
              children: ep.map(($, P) =>
                i.jsx(
                  "div",
                  {
                    className: "hover py-2 container border-bottom",
                    onClick: () => p($.text),
                    children: $.FileName,
                  },
                  P
                )
              ),
            }),
          }),
          i.jsx("div", {
            className: "bg-dark",
            children: i.jsx("div", {
              className: "bg-dark py-5",
              children: i.jsx("div", {
                id: "Sauce",
                className: "code-display",
                children: g
                  ? i.jsx("pre", {
                      style: {
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                      },
                      children: g,
                    })
                  : i.jsx("p", {
                      className: "oshare-font fw-bold",
                      children:
                        "見たいソースコードのファイルをクリックしてください",
                    }),
              }),
            }),
          }),
        ],
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
                "file-name-size text-center oshare-font text-dark pb-5",
              children: [
                "このportfolioサイトは、",
                i.jsx("br", {}),
                "ReactとjQueryとVanilla.jsを使って作成しました。",
                i.jsx("br", {}),
                "構成は以下のようになっています。",
              ],
            }),
            i.jsx(tp, {}),
          ],
        }),
      }),
    }),
  rp = () => {
    const [g, j] = gt.useState(!1),
      p = () => {
        j((P) => !P);
      };
    gt.useEffect(() => {
      g
        ? ((document.body.style.overflow = "hidden"),
          (document.body.style.position = "fixed"),
          (document.body.style.width = "100%"),
          document.body.classList.add("html-bg-dark"))
        : ((document.body.style.overflow = ""),
          (document.body.style.position = ""),
          (document.body.style.width = ""),
          document.body.classList.remove("html-bg-dark"));
      const P = (R) => {
        R.key === "Escape" && j(!1);
      };
      return (
        document.addEventListener("keydown", P),
        () => {
          document.removeEventListener("keydown", P);
        }
      );
    }, [g]);
    const $ = {
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
      className: "position-absolute top-0 end-0 mt-md-1 mx-4",
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
            style: $,
            onClick: p,
            children: i.jsx("div", {
              onClick: (P) => P.stopPropagation(),
              children: i.jsx(np, {}),
            }),
          }),
      ],
    });
  },
  lp = () =>
    i.jsx("div", {
      className:
        "d-inline-block mx-3 border border-white d-inline-block px-2 hover cursor-pointer",
      children: i.jsx("i", { className: "fa fa-comments text-white" }),
    }),
  ip = () =>
    i.jsx(i.Fragment, {
      children: i.jsx("header", {
        className: "bg-dark fixed-top py-2",
        children: i.jsx("div", {
          className: "position-relative",
          children: i.jsxs("div", {
            className: "d-flex",
            children: [
              i.jsx("div", {
                className: "d-flex align-items-start",
                children: i.jsx("div", {
                  className: "py-md-1 ps-2",
                  children: i.jsx("a", {
                    className: "hover",
                    href: "",
                    children: i.jsx("img", {
                      className: "header-logo",
                      src: qf,
                    }),
                  }),
                }),
              }),
              i.jsx(lp, {}),
              i.jsx(rp, {}),
            ],
          }),
        }),
      }),
    }),
  sp = "assets/Fv-Wc14AL0I.jpg",
  op = () => {
    const [g, j] = gt.useState(""),
      p = gt.useRef(!1),
      $ = gt.useRef(null);
    gt.useEffect(() => {
      ((oe) => {
        p.current ||
          ((p.current = !0),
          j(""),
          oe.split("").forEach((V, ve) => {
            setTimeout(() => {
              j((ye) => ye + V),
                ve === oe.length - 1 &&
                  setTimeout(() => {
                    p.current = !1;
                  }, 500);
            }, 80 * ve);
          }));
      })("React & jQuery");
    }, []);
    const P = {
        backgroundImage: `url(${sp})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 1,
      },
      R = { whiteSpace: "nowrap" };
    return i.jsx("div", {
      className: "video-container bg-dark",
      id: "top",
      style: P,
      children: i.jsx("div", {
        className: "overlay-text",
        children: i.jsx("h2", {
          className: "copy",
          children: i.jsx("p", {
            className: "fw-bold oshare-font",
            ref: $,
            style: R,
            children: g,
          }),
        }),
      }),
    });
  },
  ap = () =>
    i.jsxs("div", {
      className: "bg-white",
      children: [i.jsx(ip, {}), i.jsx(op, {}), i.jsx(Xf, {}), i.jsx(Jf, {})],
    }),
  up = () => i.jsx(ap, {});
Dd.createRoot(document.getElementById("root")).render(
  i.jsx(gt.StrictMode, { children: i.jsx(up, {}) })
);
