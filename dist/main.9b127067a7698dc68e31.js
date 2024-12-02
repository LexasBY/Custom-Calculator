(() => {
  "use strict";
  var t = {
      208: (t, e, r) => {
        r.d(e, { A: () => i });
        var n = r(601),
          o = r.n(n),
          u = r(314),
          a = r.n(u)()(o());
        a.push([
          t.id,
          'body {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #e0e0e0;\n  font-family: sans-serif;\n  margin: 0;\n}\n\n.calculator {\n  width: 550px;\n  border-radius: 10px;\n  background-color: #585858;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n}\n\n.display {\n  width: 100%;\n  height: 80px;\n  border: none;\n  box-sizing: border-box;\n  padding: 15px;\n  font-size: 36px;\n  background-color: #4a4a4a;\n  color: #fff;\n  text-align: right;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.keys {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-gap: 1px;\n  background-color: #2e2e2e;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\nbutton {\n  height: 50px;\n  font-size: 1rem;\n  border: none;\n  background-color: #505050;\n  color: white;\n  transition: background-color 0.2s;\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: #666;\n}\n\nbutton.operator {\n  background-color: #f1a33c;\n}\n\nbutton.operator:hover {\n  background-color: #f09722;\n}\n\nbutton#result {\n  background-color: #f1a33c;\n  border-bottom-right-radius: 10px;\n}\nbutton#rad {\n  border-bottom-left-radius: 10px;\n}\n.key-wide {\n  grid-column: span 2;\n}\n\n.theme-toggle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-column: span 2;\n  background-color: #505050;\n}\n.theme-toggle input {\n  display: none;\n}\n\n.toggle-label {\n  width: 60px;\n  height: 30px;\n  background-color: #8d8383;\n  border-radius: 30px;\n  position: relative;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.toggle-label::after {\n  content: "";\n  width: 26px;\n  height: 26px;\n  background-color: #fff;\n  border-radius: 50%;\n  position: absolute;\n  left: 2px;\n  bottom: 2px;\n  transition: transform 0.2s;\n}\n.theme-toggle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.toggle-text {\n  margin-top: 2px;\n  font-size: 0.8rem;\n  color: #fff;\n}\n\n#theme-toggle:checked + .toggle-label {\n  background-color: #f1a33c;\n}\n\n#theme-toggle:checked + .toggle-label::after {\n  transform: translateX(30px);\n}\n\n.dark-theme {\n  background-color: #121212;\n}\n\n.dark-theme .calculator {\n  background-color: #1e1e1e;\n}\n\n.dark-theme .display {\n  background-color: #424242;\n}\n\n.dark-theme button {\n  background-color: #4a4a4a;\n  color: #fff;\n}\n\n.dark-theme button:hover {\n  background-color: #666;\n  color: #fff;\n}\n\n.dark-theme button.clear_btn:hover {\n  background-color: #f42a2a;\n}\n\n.dark-theme button.operator {\n  background-color: #f1a33c;\n}\n\n.dark-theme button.operator:hover {\n  background-color: #f09722;\n}\n',
          "",
        ]);
        const i = a;
      },
      314: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var r = "",
                  n = void 0 !== e[5];
                return (
                  e[4] && (r += "@supports (".concat(e[4], ") {")),
                  e[2] && (r += "@media ".concat(e[2], " {")),
                  n &&
                    (r += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (r += t(e)),
                  n && (r += "}"),
                  e[2] && (r += "}"),
                  e[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (e.i = function (t, r, n, o, u) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (n)
                for (var i = 0; i < this.length; i++) {
                  var s = this[i][0];
                  null != s && (a[s] = !0);
                }
              for (var l = 0; l < t.length; l++) {
                var c = [].concat(t[l]);
                (n && a[c[0]]) ||
                  (void 0 !== u &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = u)),
                  r &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = r))
                      : (c[2] = r)),
                  o &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = o))
                      : (c[4] = "".concat(o))),
                  e.push(c));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        var e = [];
        function r(t) {
          for (var r = -1, n = 0; n < e.length; n++)
            if (e[n].identifier === t) {
              r = n;
              break;
            }
          return r;
        }
        function n(t, n) {
          for (var u = {}, a = [], i = 0; i < t.length; i++) {
            var s = t[i],
              l = n.base ? s[0] + n.base : s[0],
              c = u[l] || 0,
              f = "".concat(l, " ").concat(c);
            u[l] = c + 1;
            var h = r(f),
              d = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== h) e[h].references++, e[h].updater(d);
            else {
              var p = o(d, n);
              (n.byIndex = i),
                e.splice(i, 0, { identifier: f, updater: p, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function o(t, e) {
          var r = e.domAPI(e);
          r.update(t);
          return function (e) {
            if (e) {
              if (
                e.css === t.css &&
                e.media === t.media &&
                e.sourceMap === t.sourceMap &&
                e.supports === t.supports &&
                e.layer === t.layer
              )
                return;
              r.update((t = e));
            } else r.remove();
          };
        }
        t.exports = function (t, o) {
          var u = n((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < u.length; a++) {
              var i = r(u[a]);
              e[i].references--;
            }
            for (var s = n(t, o), l = 0; l < u.length; l++) {
              var c = r(u[l]);
              0 === e[c].references && (e[c].updater(), e.splice(c, 1));
            }
            u = s;
          };
        };
      },
      659: (t) => {
        var e = {};
        t.exports = function (t, r) {
          var n = (function (t) {
            if (void 0 === e[t]) {
              var r = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (t) {
                  r = null;
                }
              e[t] = r;
            }
            return e[t];
          })(t);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          n.appendChild(r);
        };
      },
      540: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, r) => {
        t.exports = function (t) {
          var e = r.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (r) {
              !(function (t, e, r) {
                var n = "";
                r.supports && (n += "@supports (".concat(r.supports, ") {")),
                  r.media && (n += "@media ".concat(r.media, " {"));
                var o = void 0 !== r.layer;
                o &&
                  (n += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {",
                  )),
                  (n += r.css),
                  o && (n += "}"),
                  r.media && (n += "}"),
                  r.supports && (n += "}");
                var u = r.sourceMap;
                u &&
                  "undefined" != typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(u)))),
                      " */",
                    )),
                  e.styleTagTransform(n, t, e.options);
              })(e, t, r);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var u = (e[n] = { id: n, exports: {} });
    return t[n](u, u.exports, r), u.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.nc = void 0);
  var n = r(72),
    o = r.n(n),
    u = r(825),
    a = r.n(u),
    i = r(659),
    s = r.n(i),
    l = r(56),
    c = r.n(l),
    f = r(540),
    h = r.n(f),
    d = r(113),
    p = r.n(d),
    v = r(208),
    m = {};
  (m.styleTagTransform = p()),
    (m.setAttributes = c()),
    (m.insert = s().bind(null, "head")),
    (m.domAPI = a()),
    (m.insertStyleElement = h());
  o()(v.A, m);
  v.A && v.A.locals && v.A.locals;
  function y(t) {
    return (
      (y =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      y(t)
    );
  }
  function g(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, b(n.key), n);
    }
  }
  function b(t) {
    var e = (function (t, e) {
      if ("object" != y(t) || !t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var n = r.call(t, e || "default");
        if ("object" != y(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(t);
    })(t, "string");
    return "symbol" == y(e) ? e : e + "";
  }
  var V = (function () {
    return (
      (t = function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.firstValue = ""),
          (this.secondValue = ""),
          (this.currentOperator = ""),
          (this.result = null),
          (this.isSecondValueInput = !1),
          (this.finish = !1),
          (this.memory = 0);
      }),
      (e = [
        {
          key: "appendNumber",
          value: function (t) {
            (t = t.toString()),
              this.finish
                ? ((this.firstValue = t),
                  (this.secondValue = ""),
                  (this.currentOperator = ""),
                  (this.result = null),
                  (this.isSecondValueInput = !1),
                  (this.finish = !1))
                : this.isSecondValueInput
                  ? (this.secondValue += t)
                  : (this.firstValue += t);
          },
        },
        {
          key: "setOperation",
          value: function (t) {
            this.currentOperator && this.secondValue && this.calculate(),
              (this.currentOperator = t),
              (this.isSecondValueInput = !0),
              (this.finish = !1);
          },
        },
        {
          key: "calculate",
          value: function () {
            if (!this.currentOperator) {
              if (this.firstValue) return parseFloat(this.firstValue);
              throw new Error("Operation not supported");
            }
            var t = parseFloat(this.firstValue),
              e = parseFloat(this.secondValue || "0");
            if (isNaN(t) || isNaN(e))
              throw new Error("Incorrect data for calculation");
            switch (this.currentOperator) {
              case "+":
                this.result = (10 * t + 10 * e) / 10;
                break;
              case "-":
                this.result = (10 * t - 10 * e) / 10;
                break;
              case "×":
                this.result = t * e;
                break;
              case "÷":
                if (0 === e)
                  throw (
                    ((this.result = "Error"),
                    new Error("Incorrect data for calculation"))
                  );
                this.result = t / e;
                break;
              default:
                throw new Error(
                  "Operation ".concat(this.currentOperator, " not supported"),
                );
            }
            return (
              (this.firstValue = this.result.toString()),
              (this.secondValue = ""),
              (this.currentOperator = ""),
              (this.isSecondValueInput = !1),
              (this.finish = !0),
              this.result
            );
          },
        },
        {
          key: "processPercentage",
          value: function () {
            if (this.secondValue) {
              var t = parseFloat(this.firstValue || "0"),
                e = parseFloat(this.secondValue || "0");
              ["+", "-"].includes(this.currentOperator)
                ? (this.secondValue = ((t * e) / 100).toString())
                : ["×", "÷"].includes(this.currentOperator) &&
                  (this.secondValue = (e / 100).toString());
            } else
              this.firstValue &&
                (this.firstValue = (
                  parseFloat(this.firstValue) / 100
                ).toString());
          },
        },
        {
          key: "toggleSign",
          value: function () {
            this.isSecondValueInput
              ? this.secondValue
                ? (this.secondValue = (-parseFloat(
                    this.secondValue,
                  )).toString())
                : (this.secondValue = "-0")
              : this.firstValue
                ? (this.firstValue = (-parseFloat(this.firstValue)).toString())
                : (this.firstValue = "-0");
          },
        },
        {
          key: "clearMemory",
          value: function () {
            this.memory = 0;
          },
        },
        {
          key: "addToMemory",
          value: function (t) {
            var e = parseFloat(t || this.firstValue || 0);
            this.memory += e;
          },
        },
        {
          key: "subtractFromMemory",
          value: function (t) {
            var e = parseFloat(t || this.firstValue || 0);
            this.memory -= e;
          },
        },
        {
          key: "recallMemory",
          value: function () {
            return (
              isNaN(this.memory) ||
                (this.isSecondValueInput
                  ? (this.secondValue = this.memory.toString())
                  : (this.firstValue = this.memory.toString()),
                (this.finish = !1)),
              this.memory
            );
          },
        },
        {
          key: "reset",
          value: function () {
            (this.firstValue = ""),
              (this.secondValue = ""),
              (this.currentOperator = ""),
              (this.result = null),
              (this.isSecondValueInput = !1);
          },
        },
        {
          key: "square",
          value: function () {
            var t = parseFloat(this.firstValue);
            (this.result = Math.pow(t, 2)),
              (this.firstValue = this.result.toString());
          },
        },
        {
          key: "cube",
          value: function () {
            var t = parseFloat(this.firstValue);
            (this.result = Math.pow(t, 3)),
              (this.firstValue = this.result.toString());
          },
        },
        {
          key: "power",
          value: function () {
            var t = parseFloat(this.firstValue),
              e = parseFloat(this.secondValue);
            return (
              (this.result = Math.pow(t, e)),
              (this.firstValue = this.result.toString()),
              (this.secondValue = ""),
              (this.currentOperator = ""),
              (this.isSecondValueInput = !1),
              (this.finish = !0),
              this.result
            );
          },
        },
        {
          key: "powerOfTen",
          value: function () {
            var t = parseFloat(this.firstValue);
            return (
              (this.result = Math.pow(10, t)),
              (this.firstValue = this.result.toString()),
              (this.finish = !0),
              this.result
            );
          },
        },
        {
          key: "oneOnX",
          value: function () {
            var t = parseFloat(this.firstValue);
            if (isNaN(t)) throw new Error("Invalid input for reciprocal");
            if (0 === t) throw new Error("Division by zero is not allowed");
            return (
              (this.result = 1 / t),
              (this.firstValue = this.result.toString()),
              (this.finish = !0),
              this.result
            );
          },
        },
        {
          key: "calculatePowerRoot",
          value: function (t, e) {
            for (var r = t / e, n = 0; r !== n; )
              (n = r), (r = (t / Math.pow(n, e - 1) + n * (e - 1)) / e);
            return r;
          },
        },
        {
          key: "squareRoot",
          value: function () {
            var t = parseFloat(this.firstValue);
            if (isNaN(t) || t < 0)
              throw new Error("Invalid input for square root");
            return (
              (this.result = this.calculatePowerRoot(t, 2)),
              (this.firstValue = this.result.toString()),
              (this.finish = !0),
              this.result
            );
          },
        },
        {
          key: "cubeRoot",
          value: function () {
            var t = parseFloat(this.firstValue);
            return (
              (this.result = this.calculatePowerRoot(t, 3)),
              (this.firstValue = this.result.toString()),
              (this.finish = !0),
              this.result
            );
          },
        },
        {
          key: "nthRoot",
          value: function () {
            var t = parseFloat(this.firstValue),
              e = parseFloat(this.secondValue);
            if (isNaN(t) || isNaN(e) || e <= 0)
              throw new Error("Invalid input for root");
            return (
              (this.result = this.calculatePowerRoot(t, e)),
              (this.firstValue = this.result.toString()),
              (this.secondValue = ""),
              (this.finish = !0),
              this.result
            );
          },
        },
        {
          key: "factorial",
          value: function () {
            var t = parseInt(this.firstValue, 10);
            if (isNaN(t) || t < 0)
              throw new Error("Invalid input for factorial");
            for (var e = 1, r = 1; r <= t; r++) e *= r;
            return (
              (this.result = e),
              (this.firstValue = this.result.toString()),
              (this.finish = !0),
              this.result
            );
          },
        },
      ]) && g(t.prototype, e),
      r && g(t, r),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
    var t, e, r;
  })();
  function k(t) {
    return (
      (k =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      k(t)
    );
  }
  function w(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, x(n.key), n);
    }
  }
  function x(t) {
    var e = (function (t, e) {
      if ("object" != k(t) || !t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var n = r.call(t, e || "default");
        if ("object" != k(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(t);
    })(t, "string");
    return "symbol" == k(e) ? e : e + "";
  }
  var S = (function () {
    return (
      (t = function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.history = []),
          (this.updateDisplay = e);
      }),
      (e = [
        {
          key: "executeCommand",
          value: function (t) {
            var e = t.execute();
            return (
              t.undo && this.history.push(t),
              console.log(this.history),
              t.calculator &&
                this.updateDisplay &&
                this.updateDisplay(
                  t.calculator.firstValue || t.calculator.result || 0,
                ),
              e
            );
          },
        },
        {
          key: "undo",
          value: function () {
            if (this.history.length > 0) {
              var t = this.history.pop();
              t.undo(),
                t.calculator &&
                  this.updateDisplay &&
                  this.updateDisplay(
                    t.calculator.firstValue || t.calculator.result || 0,
                  ),
                console.log("Undo executed");
            } else console.log("Nothing to undo");
          },
        },
      ]) && w(t.prototype, e),
      r && w(t, r),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
    var t, e, r;
  })();
  function E(t) {
    return (
      (E =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      E(t)
    );
  }
  function O(t, e, r) {
    return (
      (e = C(e)),
      (function (t, e) {
        if (e && ("object" == E(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      })(
        t,
        I() ? Reflect.construct(e, r || [], C(t).constructor) : e.apply(t, r),
      )
    );
  }
  function I() {
    try {
      var t = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch (t) {}
    return (I = function () {
      return !!t;
    })();
  }
  function C(t) {
    return (
      (C = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      C(t)
    );
  }
  function R(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e && L(t, e);
  }
  function L(t, e) {
    return (
      (L = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      L(t, e)
    );
  }
  function P(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function j(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, F(n.key), n);
    }
  }
  function N(t, e, r) {
    return (
      e && j(t.prototype, e),
      r && j(t, r),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function F(t) {
    var e = (function (t, e) {
      if ("object" != E(t) || !t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var n = r.call(t, e || "default");
        if ("object" != E(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(t);
    })(t, "string");
    return "symbol" == E(e) ? e : e + "";
  }
  var T = (function () {
      return N(
        function t() {
          P(this, t);
        },
        [
          {
            key: "execute",
            value: function () {
              throw new Error("Метод execute() должен быть реализован!");
            },
          },
        ],
      );
    })(),
    M = (function (t) {
      function e(t, r) {
        var n;
        return P(this, e), ((n = O(this, e)).calculator = t), (n.number = r), n;
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              (this.previousValue = this.calculator.firstValue),
                this.calculator.appendNumber(this.number);
            },
          },
          {
            key: "undo",
            value: function () {
              this.calculator.firstValue = this.previousValue;
            },
          },
        ])
      );
    })(T),
    B = (function (t) {
      function e(t, r) {
        var n;
        return (
          P(this, e), ((n = O(this, e)).calculator = t), (n.operator = r), n
        );
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              (this.previousOperator = this.calculator.currentOperator),
                this.calculator.setOperation(this.operator);
            },
          },
          {
            key: "undo",
            value: function () {
              this.calculator.currentOperator = this.previousOperator;
            },
          },
        ])
      );
    })(T),
    A = (function (t) {
      function e(t) {
        var r;
        return P(this, e), ((r = O(this, e)).calculator = t), r;
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              this.calculator.isSecondValueInput
                ? this.calculator.secondValue.includes(".") ||
                  (this.calculator.secondValue += ".")
                : this.calculator.firstValue.includes(".") ||
                  (this.calculator.firstValue += ".");
            },
          },
        ])
      );
    })(T),
    q = (function (t) {
      function e(t) {
        var r;
        return P(this, e), ((r = O(this, e)).calculator = t), r;
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              return this.calculator.processPercentage();
            },
          },
        ])
      );
    })(T),
    _ = (function (t) {
      function e(t) {
        var r;
        return P(this, e), ((r = O(this, e)).calculator = t), r;
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              return this.calculator.toggleSign();
            },
          },
        ])
      );
    })(T),
    D = (function (t) {
      function e(t) {
        var r;
        return P(this, e), ((r = O(this, e)).calculator = t), r;
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              return this.calculator.calculate();
            },
          },
        ])
      );
    })(T),
    z = (function (t) {
      function e(t, r) {
        var n;
        return P(this, e), ((n = O(this, e)).body = t), (n.themeToggle = r), n;
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              this.themeToggle.checked
                ? (this.body.classList.add("dark-theme"),
                  localStorage.setItem("theme", "dark"))
                : (this.body.classList.remove("dark-theme"),
                  localStorage.setItem("theme", "light"));
            },
          },
          {
            key: "undo",
            value: function () {
              console.log("Undo for theme toggle is not supported.");
            },
          },
        ])
      );
    })(T),
    U = (function (t) {
      function e(t) {
        var r;
        return P(this, e), ((r = O(this, e)).calculator = t), r;
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              this.calculator.clearMemory();
            },
          },
        ])
      );
    })(T),
    X = (function (t) {
      function e(t, r) {
        var n;
        return P(this, e), ((n = O(this, e)).calculator = t), (n.value = r), n;
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              this.calculator.addToMemory(this.value);
            },
          },
          {
            key: "undo",
            value: function () {
              this.calculator.subtractFromMemory(this.value);
            },
          },
        ])
      );
    })(T),
    H = (function (t) {
      function e(t, r) {
        var n;
        return P(this, e), ((n = O(this, e)).calculator = t), (n.value = r), n;
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              this.calculator.subtractFromMemory(this.value);
            },
          },
          {
            key: "undo",
            value: function () {
              this.calculator.addToMemory(this.value);
            },
          },
        ])
      );
    })(T),
    J = (function (t) {
      function e(t) {
        var r;
        return P(this, e), ((r = O(this, e)).calculator = t), r;
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              return this.calculator.recallMemory();
            },
          },
        ])
      );
    })(T),
    G = (function (t) {
      function e(t) {
        var r;
        return (
          P(this, e),
          ((r = O(this, e)).calculator = t),
          (r.previousValue = null),
          r
        );
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              (this.previousValue = this.calculator.firstValue),
                this.calculator.square();
            },
          },
          {
            key: "undo",
            value: function () {
              this.calculator.firstValue = this.previousValue;
            },
          },
        ])
      );
    })(T),
    K = (function (t) {
      function e(t) {
        var r;
        return (
          P(this, e),
          ((r = O(this, e)).calculator = t),
          (r.previousValue = null),
          r
        );
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              (this.previousValue = this.calculator.firstValue),
                this.calculator.cube();
            },
          },
          {
            key: "undo",
            value: function () {
              this.calculator.firstValue = this.previousValue;
            },
          },
        ])
      );
    })(T),
    Q = (function (t) {
      function e(t) {
        var r;
        return (
          P(this, e),
          ((r = O(this, e)).calculator = t),
          (r.previousState = {
            firstValue: null,
            secondValue: null,
            result: null,
            operator: null,
          }),
          r
        );
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              if (
                ((this.previousState = {
                  firstValue: this.calculator.firstValue,
                  secondValue: this.calculator.secondValue,
                  result: this.calculator.result,
                  operator: this.calculator.currentOperator,
                }),
                "^" !== this.calculator.currentOperator)
              )
                throw new Error("Operator not set to ^");
              this.calculator.power();
            },
          },
          {
            key: "undo",
            value: function () {
              (this.calculator.firstValue = this.previousState.firstValue),
                (this.calculator.secondValue = this.previousState.secondValue),
                (this.calculator.result = this.previousState.result),
                (this.calculator.currentOperator = this.previousState.operator);
            },
          },
        ])
      );
    })(T),
    W = (function (t) {
      function e(t) {
        var r;
        return (
          P(this, e),
          ((r = O(this, e)).calculator = t),
          (r.previousValue = null),
          (r.previousResult = null),
          r
        );
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              (this.previousValue = this.calculator.firstValue),
                (this.previousResult = this.calculator.result),
                this.calculator.powerOfTen();
            },
          },
          {
            key: "undo",
            value: function () {
              (this.calculator.firstValue = this.previousValue),
                (this.calculator.result = this.previousResult);
            },
          },
        ])
      );
    })(T),
    Y = (function (t) {
      function e(t) {
        var r;
        return (
          P(this, e),
          ((r = O(this, e)).calculator = t),
          (r.previousValue = null),
          (r.previousResult = null),
          r
        );
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              (this.previousValue = this.calculator.firstValue),
                (this.previousResult = this.calculator.result),
                this.calculator.oneOnX();
            },
          },
          {
            key: "undo",
            value: function () {
              (this.calculator.firstValue = this.previousValue),
                (this.calculator.result = this.previousResult);
            },
          },
        ])
      );
    })(T),
    Z = (function (t) {
      function e(t) {
        var r;
        return (
          P(this, e),
          ((r = O(this, e)).calculator = t),
          (r.previousValue = null),
          (r.previousResult = null),
          r
        );
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              (this.previousValue = this.calculator.firstValue),
                (this.previousResult = this.calculator.result),
                this.calculator.squareRoot();
            },
          },
          {
            key: "undo",
            value: function () {
              (this.calculator.firstValue = this.previousValue),
                (this.calculator.result = this.previousResult);
            },
          },
        ])
      );
    })(T),
    $ = (function (t) {
      function e(t) {
        var r;
        return (
          P(this, e),
          ((r = O(this, e)).calculator = t),
          (r.previousValue = null),
          (r.previousResult = null),
          r
        );
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              (this.previousValue = this.calculator.firstValue),
                (this.previousResult = this.calculator.result),
                this.calculator.cubeRoot();
            },
          },
          {
            key: "undo",
            value: function () {
              (this.calculator.firstValue = this.previousValue),
                (this.calculator.result = this.previousResult);
            },
          },
        ])
      );
    })(T),
    tt = (function (t) {
      function e(t) {
        var r;
        return (
          P(this, e),
          ((r = O(this, e)).calculator = t),
          (r.previousState = {
            firstValue: null,
            secondValue: null,
            result: null,
          }),
          r
        );
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              (this.previousState = {
                firstValue: this.calculator.firstValue,
                secondValue: this.calculator.secondValue,
                result: this.calculator.result,
              }),
                this.calculator.nthRoot();
            },
          },
          {
            key: "undo",
            value: function () {
              (this.calculator.firstValue = this.previousState.firstValue),
                (this.calculator.secondValue = this.previousState.secondValue),
                (this.calculator.result = this.previousState.result);
            },
          },
        ])
      );
    })(T),
    et = (function (t) {
      function e(t) {
        var r;
        return (
          P(this, e),
          ((r = O(this, e)).calculator = t),
          (r.previousValue = null),
          (r.previousResult = null),
          r
        );
      }
      return (
        R(e, t),
        N(e, [
          {
            key: "execute",
            value: function () {
              (this.previousValue = this.calculator.firstValue),
                (this.previousResult = this.calculator.result),
                this.calculator.factorial();
            },
          },
          {
            key: "undo",
            value: function () {
              (this.calculator.firstValue = this.previousValue),
                (this.calculator.result = this.previousResult);
            },
          },
        ])
      );
    })(T),
    rt = new V(),
    nt = new S(ut),
    ot = document.querySelector(".display");
  function ut(t) {
    ot.value = t || "0";
  }
  document.querySelectorAll(".number").forEach(function (t) {
    t.addEventListener("click", function () {
      var e = new M(rt, t.textContent);
      nt.executeCommand(e),
        ut(rt.isSecondValueInput ? rt.secondValue : rt.firstValue);
    });
  }),
    document.querySelectorAll(".operator").forEach(function (t) {
      t.addEventListener("click", function () {
        try {
          var e = new B(rt, t.textContent);
          nt.executeCommand(e), ut(rt.firstValue);
        } catch (t) {
          console.error("Ошибка при выборе операции:", t.message), ut("Error");
        }
      });
    }),
    document.getElementById("percent").addEventListener("click", function () {
      var t = new q(rt);
      nt.executeCommand(t),
        ut(rt.isSecondValueInput ? rt.secondValue : rt.firstValue);
    }),
    document
      .getElementById("toggle-sign")
      .addEventListener("click", function () {
        var t = new _(rt);
        nt.executeCommand(t),
          ut(rt.isSecondValueInput ? rt.secondValue : rt.firstValue);
      }),
    document.getElementById("square").addEventListener("click", function () {
      var t = new G(rt);
      try {
        nt.executeCommand(t);
      } catch (t) {
        console.error(t.message), (ot.value = "Error");
      }
    }),
    document.getElementById("сube").addEventListener("click", function () {
      var t = new K(rt);
      try {
        nt.executeCommand(t);
      } catch (t) {
        console.error(t.message), (ot.value = "Error");
      }
    }),
    document.getElementById("power").addEventListener("click", function () {
      var t = new B(rt, "^");
      nt.executeCommand(t), ut(rt.firstValue);
    }),
    document
      .getElementById("powerOfTen")
      .addEventListener("click", function () {
        var t = new W(rt);
        try {
          nt.executeCommand(t), ut(rt.firstValue);
        } catch (t) {
          console.error(t.message), ut("Error");
        }
      }),
    document.getElementById("one-on-x").addEventListener("click", function () {
      var t = new Y(rt);
      try {
        nt.executeCommand(t), ut(rt.firstValue);
      } catch (t) {
        console.error(t.message), ut("Error");
      }
    }),
    document
      .getElementById("square-root")
      .addEventListener("click", function () {
        var t = new Z(rt);
        try {
          nt.executeCommand(t), ut(rt.firstValue);
        } catch (t) {
          console.error(t.message), ut("Error");
        }
      }),
    document.getElementById("cube-root").addEventListener("click", function () {
      var t = new $(rt);
      try {
        nt.executeCommand(t), ut(rt.firstValue);
      } catch (t) {
        console.error(t.message), ut("Error");
      }
    }),
    document.getElementById("nth-root").addEventListener("click", function () {
      var t = new B(rt, "root");
      nt.executeCommand(t), ut(rt.firstValue);
    }),
    document.getElementById("factorial").addEventListener("click", function () {
      var t = new et(rt);
      try {
        nt.executeCommand(t), ut(rt.firstValue);
      } catch (t) {
        console.error(t.message), ut("Error");
      }
    }),
    document.getElementById("result").addEventListener("click", function () {
      if ("root" === rt.currentOperator) {
        var t = new tt(rt);
        try {
          nt.executeCommand(t), ut(rt.result);
        } catch (t) {
          console.error(t.message), ut("Error");
        }
      } else if ("^" === rt.currentOperator) {
        var e = new Q(rt);
        try {
          nt.executeCommand(e), ut(rt.result);
        } catch (t) {
          console.error(t.message), ut("Error");
        }
      } else {
        var r = new D(rt);
        try {
          nt.executeCommand(r), ut(rt.result);
        } catch (t) {
          console.error(t.message), ut("Error");
        }
      }
    }),
    document.getElementById("clear").addEventListener("click", function () {
      rt.reset(), ut();
    });
  var at = document.getElementById("theme-toggle"),
    it = document.body;
  "dark" === localStorage.getItem("theme") &&
    (it.classList.add("dark-theme"), (at.checked = !0)),
    at.addEventListener("change", function () {
      var t = new z(it, at);
      nt.executeCommand(t);
    }),
    commaButton.addEventListener("click", function () {
      var t = new A(rt);
      nt.executeCommand(t),
        ut(rt.isSecondValueInput ? rt.secondValue : rt.firstValue);
    }),
    document.getElementById("mc").addEventListener("click", function () {
      var t = new U(rt);
      nt.executeCommand(t), console.log("Memory cleared");
    }),
    document.getElementById("m-plus").addEventListener("click", function () {
      var t = new X(rt, rt.firstValue || "0");
      nt.executeCommand(t),
        console.log("Added to memory: ".concat(rt.firstValue));
    }),
    document.getElementById("m-minus").addEventListener("click", function () {
      var t = new H(rt, rt.firstValue || "0");
      nt.executeCommand(t),
        console.log("Subtracted from memory: ".concat(rt.firstValue));
    }),
    document.getElementById("mr").addEventListener("click", function () {
      var t = new J(rt);
      nt.executeCommand(t);
      var e = rt.isSecondValueInput ? rt.secondValue : rt.firstValue;
      ut(e), console.log("Recalled from memory: ".concat(e));
    }),
    document.getElementById("undo").addEventListener("click", function () {
      nt.undo();
    });
})();
