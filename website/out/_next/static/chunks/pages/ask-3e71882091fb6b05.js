(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [721],
  {
    7087: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/ask",
        function () {
          return n(7006);
        },
      ]);
    },
    6124: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return c;
        },
      });
      var r = n(5893),
        i = (n(1664), n(214)),
        s = n.n(i),
        o = n(7814),
        a = n(1436),
        l = n(1417),
        c = function () {
          return (0, r.jsxs)("footer", {
            className: s().footer,
            children: [
              (0, r.jsx)("div", {
                children: (0, r.jsx)("img", {
                  src: "/mcasks.png",
                  alt: "logo",
                  style: { marginTop: "1rem", height: "214px" },
                }),
              }),
              (0, r.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                },
                children: [
                  (0, r.jsx)("p", {
                    children: (0, r.jsx)("b", { children: "Information" }),
                  }),
                  (0, r.jsx)("p", { children: "Main" }),
                  (0, r.jsx)("p", { children: "How It Works" }),
                  (0, r.jsx)("p", { children: "Sign UP" }),
                  (0, r.jsx)("p", { children: "Contacts" }),
                ],
              }),
              (0, r.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                },
                children: [
                  (0, r.jsx)("p", {
                    children: (0, r.jsx)("b", { children: "Contacts" }),
                  }),
                  (0, r.jsxs)("span", {
                    style: { display: "flex", gap: "10px" },
                    children: [
                      (0, r.jsx)(o.G, {
                        style: { fontSize: "25px", color: "#FFF" },
                        icon: a.Mzo,
                      }),
                      (0, r.jsx)("p", {
                        children:
                          "1111 Bikini Bottom Sample City, Sample Country MCH 4CKS",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("span", {
                    style: { display: "flex", gap: "10px" },
                    children: [
                      (0, r.jsx)(o.G, {
                        style: { fontSize: "25px", color: "#FFF" },
                        icon: a.j1w,
                      }),
                      (0, r.jsx)("p", { children: "1333-555-7777" }),
                    ],
                  }),
                  (0, r.jsxs)("span", {
                    style: { display: "flex", gap: "10px" },
                    children: [
                      (0, r.jsx)(o.G, {
                        style: { fontSize: "25px", color: "#FFF" },
                        icon: a.FU$,
                      }),
                      (0, r.jsx)("p", { children: "info@McAsks.ca" }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                },
                children: [
                  (0, r.jsx)("p", {
                    children: (0, r.jsx)("b", { children: "Social Media" }),
                  }),
                  (0, r.jsx)(o.G, {
                    style: { fontSize: "25px", color: "#FFF" },
                    icon: l.neY,
                  }),
                  (0, r.jsx)(o.G, {
                    style: { fontSize: "25px", color: "#FFF" },
                    icon: l.mdU,
                  }),
                  (0, r.jsx)(o.G, {
                    style: { fontSize: "25px", color: "#FFF" },
                    icon: l.D9H,
                  }),
                  (0, r.jsx)(o.G, {
                    style: { fontSize: "25px", color: "#FFF" },
                    icon: l.Xs4,
                  }),
                ],
              }),
            ],
          });
        };
    },
    5631: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return a;
        },
      });
      var r = n(5893),
        i = n(1664),
        s = n(214),
        o = n.n(s),
        a = function () {
          return (0, r.jsxs)("nav", {
            className: o().nav,
            children: [
              (0, r.jsx)(i.default, {
                href: "/",
                children: (0, r.jsx)("span", {
                  children: (0, r.jsx)("img", {
                    src: "/mcasks.png",
                    alt: "logo",
                    style: { marginTop: "1rem", height: "214px" },
                  }),
                }),
              }),
              (0, r.jsxs)("div", {
                style: { display: "flex", gap: "1.5rem" },
                children: [
                  (0, r.jsx)(i.default, {
                    href: "/",
                    children: (0, r.jsx)("a", {
                      className: o().navlink,
                      children: " HOME ",
                    }),
                  }),
                  (0, r.jsx)(i.default, {
                    href: "/ask",
                    children: (0, r.jsx)("a", {
                      className: o().navlink,
                      children: " ASK ",
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    7006: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        });
      var r = n(5893),
        i = n(5631),
        s = n(6124),
        o = n(214),
        a = n.n(o),
        l = n(4051),
        c = n.n(l),
        d = n(7294);
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function h(e, t, n, r, i, s, o) {
        try {
          var a = e[s](o),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(r, i);
      }
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function x(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                i,
                s = [],
                o = !0,
                a = !1;
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (s.push(r.value), !t || s.length !== t);
                  o = !0
                );
              } catch (l) {
                (a = !0), (i = l);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (a) throw i;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return u(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return u(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var m = Object.freeze({ number: "" });
      function f() {
        var e = x(d.useState(m), 2),
          t = e[0],
          n = e[1],
          i = (function () {
            var e,
              t =
                ((e = c().mark(function e(t) {
                  var n, r;
                  return c().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            console.log(t.target.textinput.value),
                            (e.next = 4),
                            fetch("https://api.m3o.com/v1/db/Create", {
                              body: JSON.stringify({
                                record: { number: t.target.textinput.value },
                                table: "numbers",
                              }),
                              headers: {
                                "Content-Type": "application/json",
                                Authorization:
                                  "Bearer Mzc0YTE1ZWItYjdlOC00MzUyLWE3YTgtMDdlNzZhMmI4NmU5",
                              },
                              method: "POST",
                            })
                          );
                        case 4:
                          return (n = e.sent), (e.next = 7), n.json();
                        case 7:
                          return (
                            e.sent,
                            (e.next = 10),
                            fetch("https://api.m3o.com/v1/emoji/Send", {
                              body: JSON.stringify({
                                from: "your assistant McAsks.",
                                message:
                                  "Thank you for signing up and cheers to the future! \ud83e\udd42 ",
                                to: t.target.textinput.value,
                              }),
                              headers: {
                                "Content-Type": "application/json",
                                Authorization:
                                  "Bearer Mzc0YTE1ZWItYjdlOC00MzUyLWE3YTgtMDdlNzZhMmI4NmU5",
                              },
                              method: "POST",
                            })
                          );
                        case 10:
                          return (r = e.sent), (e.next = 13), r.json();
                        case 13:
                          e.sent;
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (r, i) {
                    var s = e.apply(t, n);
                    function o(e) {
                      h(s, r, i, o, a, "next", e);
                    }
                    function a(e) {
                      h(s, r, i, o, a, "throw", e);
                    }
                    o(void 0);
                  });
                });
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        return (0, r.jsxs)("form", {
          onSubmit: i,
          children: [
            (0, r.jsx)("label", { htmlFor: "textinput" }),
            (0, r.jsx)("input", {
              id: "textinput",
              name: "textinput",
              onChange: function (e) {
                n(
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                      "function" === typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                          Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(
                              n,
                              e
                            ).enumerable;
                          })
                        )),
                        r.forEach(function (t) {
                          p(e, t, n[t]);
                        });
                    }
                    return e;
                  })({}, t, p({}, e.target.name, e.target.value.trim()))
                );
              },
              className: a().textinput,
              type: "text",
              autoComplete: "YOUR PHONE NUMBER HERE",
              required: !0,
            }),
            (0, r.jsx)("button", {
              type: "submit",
              className: a().button,
              children: "\u2192",
            }),
            " ",
          ],
        });
      }
      function j() {
        return (0, r.jsxs)("div", {
          className: a().container,
          children: [
            (0, r.jsx)(i.w, {}),
            (0, r.jsx)("section", {
              className: a().chat,
              children: (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("h1", {
                    className: a().title2,
                    children: "Let's Chat.",
                  }),
                  (0, r.jsx)(f, {}),
                ],
              }),
            }),
            (0, r.jsxs)("section", {
              className: a().grid,
              children: [
                (0, r.jsx)("h2", {
                  className: a().heading,
                  children: "What you can get with AskFree:",
                }),
                (0, r.jsxs)("div", {
                  className: a().horizontalgrid,
                  children: [
                    (0, r.jsxs)("div", {
                      className: a().card,
                      children: [
                        (0, r.jsx)("img", {
                          src: "/Ellipse.png",
                          style: { margin: "20px", width: "135px" },
                        }),
                        (0, r.jsx)("p", {
                          style: { fontWeight: "600" },
                          children: "Search",
                        }),
                        (0, r.jsx)("p", {
                          children:
                            "                Wanted to know what a term means but don't have internet? Fret not!",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: a().card,
                      children: [
                        (0, r.jsx)("img", {
                          src: "/Ellipse.png",
                          style: { margin: "20px", width: "135px" },
                        }),
                        (0, r.jsx)("p", {
                          style: { fontWeight: "600" },
                          children: "Location/Directions",
                        }),
                        (0, r.jsx)("p", {
                          children:
                            "Never get lost again with on-deman location and directions.",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: a().card,
                      children: [
                        (0, r.jsx)("img", {
                          src: "/Ellipse.png",
                          style: { margin: "20px", width: "135px" },
                        }),
                        (0, r.jsx)("p", {
                          style: { fontWeight: "600" },
                          children: "Jokes",
                        }),
                        (0, r.jsx)("p", {
                          children:
                            "McAsks is always there for you to brighten up your day!",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: a().card,
                      children: [
                        (0, r.jsx)("img", {
                          src: "/Ellipse.png",
                          style: { margin: "20px", width: "135px" },
                        }),
                        (0, r.jsx)("p", {
                          style: { fontWeight: "600" },
                          children: "Quotes",
                        }),
                        (0, r.jsx)("p", {
                          children:
                            "Need some motivation at 8am? We've got your back.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("div", {
              style: { marginBottom: "5rem" },
              children: (0, r.jsxs)("h2", {
                className: a().heading,
                style: { fontSize: "3rem" },
                children: [
                  "Looking for more? Try ",
                  (0, r.jsx)("b", {
                    children: (0, r.jsx)("u", { children: "Ask+" }),
                  }),
                ],
              }),
            }),
            (0, r.jsx)(s.$, {}),
          ],
        });
      }
    },
    214: function (e) {
      e.exports = {
        container: "Home_container__bCOhY",
        main: "Home_main__nLjiQ",
        section: "Home_section__taYTg",
        nav: "Home_nav__vYbrQ",
        footer: "Home_footer____T7K",
        navlink: "Home_navlink__CGpba",
        title: "Home_title__T09hD",
        title2: "Home_title2__onZmd",
        description: "Home_description__41Owk",
        code: "Home_code__suPER",
        button: "Home_button__Zs7A2",
        triangleTopLeft: "Home_triangleTopLeft__R0FMP",
        grid: "Home_grid__GxQ85",
        horizontalgrid: "Home_horizontalgrid__zIWp5",
        card: "Home_card___LpL1",
        heading: "Home_heading__BTwrO",
        subheading: "Home_subheading__Bq80U",
        logo: "Home_logo__27_tb",
        gridlayout: "Home_gridlayout__MVjxg",
        chat: "Home_chat__WgYH_",
        textinput: "Home_textinput__LRUcR",
      };
    },
  },
  function (e) {
    e.O(0, [523, 112, 764, 774, 888, 179], function () {
      return (t = 7087), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
