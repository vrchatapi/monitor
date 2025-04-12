"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7378], {
        87378: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => A
            });
            var r = a(15861),
                n = a(54546),
                o = a(4965),
                i = a(76553),
                l = a(64687),
                s = a.n(l),
                u = a(27484),
                c = a.n(u),
                d = a(67294),
                m = a(32981),
                v = a(89250),
                p = a(64258),
                f = a(12752),
                g = a(21538),
                y = a(22082),
                b = a(1208),
                h = a(14411);
            var E = {
                name: "1k1xm34",
                styles: "padding-bottom:1.75rem"
            };
            const A = function() {
                var e, t, a, o, l, u, A, C, D, L = (0, v.UO)().jamId,
                    N = (0, m.I0)(),
                    M = (0, v.s0)(),
                    O = (0, y.oE)(void 0, {
                        selectFromResult: function(e) {
                            var t = e.data;
                            return {
                                data: null == t ? void 0 : t.find((function(e) {
                                    return e.id === L
                                }))
                            }
                        }
                    }),
                    Z = O.data,
                    F = O.isLoading,
                    X = O.isError,
                    P = (0, f.Tu)().user,
                    U = (0, y.Zv)({
                        jamId: L,
                        submitterId: null == P ? void 0 : P.id
                    }, {
                        skip: !(null != P && P.id)
                    }),
                    J = U.data,
                    V = U.isLoading,
                    G = (0, y.Pc)(),
                    R = (0, n.Z)(G, 2),
                    z = R[0],
                    Q = R[1],
                    W = Q.isLoading,
                    Y = Q.error,
                    _ = (0, y.MM)(),
                    B = (0, n.Z)(_, 2),
                    H = B[0],
                    $ = B[1],
                    K = $.isLoading,
                    ee = $.error,
                    te = null == J ? void 0 : J[0],
                    ae = (null == Z ? void 0 : Z.type) && Z.type.slice(0, 1).toUpperCase() + Z.type.slice(1),
                    re = d.useState(""),
                    ne = (0, n.Z)(re, 2),
                    oe = ne[0],
                    ie = ne[1],
                    le = d.useState(""),
                    se = (0, n.Z)(le, 2),
                    ue = se[0],
                    ce = se[1],
                    de = d.useState(10),
                    me = (0, n.Z)(de, 2),
                    ve = me[0],
                    pe = me[1],
                    fe = d.useState(null),
                    ge = (0, n.Z)(fe, 2),
                    ye = ge[0],
                    be = ge[1],
                    he = d.useState(!1),
                    Ee = (0, n.Z)(he, 2),
                    Ae = Ee[0],
                    we = Ee[1],
                    xe = d.useState(""),
                    Se = (0, n.Z)(xe, 2),
                    ke = Se[0],
                    Ie = Se[1],
                    Te = d.useState(!1),
                    qe = (0, n.Z)(Te, 2),
                    je = qe[0],
                    Ce = qe[1],
                    De = d.useMemo((function() {
                        return (null == ke ? void 0 : ke.length) < 100 ? "var(--bs-danger)" : (null == ke ? void 0 : ke.length) < 750 ? "var(--bs-success)" : (null == ke ? void 0 : ke.length) > 1500 ? "var(--bs-danger)" : (null == ke ? void 0 : ke.length) > 750 ? "var(--bs-warning)" : "#fff"
                    }), [null == ke ? void 0 : ke.length]),
                    Le = (0, g.LQ)({
                        avatarId: null == te ? void 0 : te.contentId
                    }, {
                        skip: !te || "avatar" !== (null == Z ? void 0 : Z.type)
                    }),
                    Ne = Le.data,
                    Me = Le.isLoading,
                    Oe = (0, b.Vw)({
                        worldId: null == te ? void 0 : te.contentId
                    }, {
                        skip: !te || "world" !== (null == Z ? void 0 : Z.type)
                    }),
                    Ze = Oe.data,
                    Fe = Oe.isLoading,
                    Xe = (0, g.F6)({
                        user: "me",
                        releaseStatus: "public"
                    }, {
                        skip: !Ae && te || V || "avatar" !== (null == Z ? void 0 : Z.type)
                    }),
                    Pe = Xe.data,
                    Ue = Xe.isLoading,
                    Je = (0, b.Ld)({
                        user: "me",
                        releaseStatus: "public"
                    }, {
                        skip: !Ae && te || V || "world" !== (null == Z ? void 0 : Z.type)
                    }),
                    Ve = Je.data,
                    Ge = Je.isLoading,
                    Re = (null === (e = {
                        avatar: Pe,
                        world: Ve
                    }) || void 0 === e ? void 0 : e[null == Z ? void 0 : Z.type]) || [],
                    ze = (null === (t = {
                        avatar: Ue,
                        world: Ge
                    }) || void 0 === t ? void 0 : t[null == Z ? void 0 : Z.type]) || !1,
                    Qe = (null === (a = {
                        avatar: Ne,
                        world: Ze
                    }) || void 0 === a ? void 0 : a[null == Z ? void 0 : Z.type]) || null,
                    We = (null === (o = {
                        avatar: Me,
                        world: Fe
                    }) || void 0 === o ? void 0 : o[null == Z ? void 0 : Z.type]) || !1,
                    Ye = d.useMemo((function() {
                        return null == Re ? void 0 : Re.find((function(e) {
                            return e.id === ye
                        }))
                    }), [ye]),
                    _e = d.useMemo((function() {
                        var e;
                        if (!Z) return [];
                        var t = Re;
                        return null != Z && Z.submissionContentGated && (t = null == Re ? void 0 : Re.filter((function(e) {
                            var t = e.updated_at;
                            return c()(t).isAfter(c()(null == Z ? void 0 : Z.submissionContentGateDate))
                        }))), null === (e = t) || void 0 === e ? void 0 : e.filter((function(e) {
                            return e.name.toLowerCase().includes(ue.toLowerCase())
                        })).slice(0, ve)
                    }), [Re, ue, ve, Z]);
                if (X) return d.createElement(h.qX, {
                    type: "error",
                    title: "Jam load error",
                    message: "Failed to load the Jam",
                    slim: !0
                });
                if (F || V) return d.createElement(h.UU, {
                    width: "100%",
                    height: "200px"
                });
                var Be = function() {
                        var e = (0, r.Z)(s().mark((function e() {
                            var t, a, r;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (ye) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (null == te || !te.id) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.next = 5, H({
                                            jamId: L,
                                            submissionId: te.id,
                                            silent: !0
                                        }).unwrap();
                                    case 5:
                                        if ((t = e.sent).error) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.next = 9, new Promise((function(e) {
                                            return setTimeout(e, 1e3)
                                        }));
                                    case 9:
                                        return e.next = 11, z({
                                            jamId: L,
                                            contentId: ye,
                                            description: ke
                                        }).unwrap();
                                    case 11:
                                        e.sent.error || (be(null), we(!1), Ie("")), e.next = 16;
                                        break;
                                    case 15:
                                        N((0, p.d)({
                                            title: "Failed to update submission",
                                            icon: i.eH,
                                            message: null !== (a = null === (r = t.error.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        }));
                                    case 16:
                                        return e.abrupt("return");
                                    case 17:
                                        return e.next = 19, z({
                                            jamId: Z.id,
                                            contentId: ye,
                                            description: ke
                                        }).unwrap();
                                    case 19:
                                        e.sent.error || (be(null), we(!1), Ie(""));
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    He = function(e) {
                        var t, a, r = e.error,
                            n = e.rateLimitText;
                        return 429 === (null == r ? void 0 : r.status) ? n : null !== (t = null == r || null === (a = r.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== t ? t : "Something went wrong"
                    },
                    $e = null !== (l = null === (u = {
                        avatar: "an",
                        world: "a"
                    }) || void 0 === u ? void 0 : u[null == Z ? void 0 : Z.type]) && void 0 !== l ? l : "",
                    Ke = te ? "Update Submission" : "Submit ".concat(ae, " to Jam"),
                    et = !!te && c()(te.submittedOn).format("MMMM D [at] h:mm A"),
                    tt = Z && (Z.stateChangeDates.submissionsClosed ? "on ".concat(c()(Z.stateChangeDates.submissionsClosed).format("MMMM D [at] h:mm A")) : null),
                    at = Ae ? "Select a new ".concat(ae) : "Select ".concat($e, " ").concat(ae, " to submit"),
                    rt = !!te && Qe && !Ae,
                    nt = !(!Z || rt || Ae || We),
                    ot = Ae && !ye,
                    it = 0 === (null == _e ? void 0 : _e.length) && 0 === oe.length && !ze,
                    lt = oe.length > 1 && 0 === (null == _e ? void 0 : _e.length),
                    st = "You can only submit public ".concat(ae, "s");
                null != Z && Z.submissionContentGated && (st += " uploaded after ".concat(c()(Z.submissionContentGateDate).format("MMMM D YYYY h:mm A")));
                var ut = He({
                        error: Y,
                        rateLimitText: "Please wait before submitting again"
                    }),
                    ct = He({
                        error: ee,
                        rateLimitText: "Please before trying to remove a submission again"
                    });
                return Z ? d.createElement(w, null, d.createElement(h.JX, {
                    className: "mt-2"
                }, d.createElement("h2", null, "Submit ", ae, " to ", null == Z ? void 0 : Z.title), d.createElement(h.JX, {
                    className: "mt-3 mb-3"
                }, d.createElement(h.oI, null, d.createElement("h4", null, "My Submission")), d.createElement(h.Ao, null, We && d.createElement(h.UU, {
                    width: "100%",
                    height: "200px"
                }), rt && !(null != te && te.rejected) && d.createElement(S, {
                    "aria-label": "Submitted ".concat(ae)
                }, d.createElement(k, {
                    data: Qe,
                    contentType: null == Z ? void 0 : Z.type,
                    fieldsList: ["updated_at"],
                    showAuthor: !0
                }), d.createElement(h.JX, {
                    className: "ms-3 flex-1"
                }, d.createElement("p", {
                    className: "mb-2"
                }, "You submitted this ", null == Z ? void 0 : Z.type, " on ", et), d.createElement("label", {
                    htmlFor: "contentDescription"
                }, "Description"), d.createElement(h.gx, {
                    id: "contentDescription",
                    rows: 5,
                    value: null == te ? void 0 : te.description,
                    readOnly: !0,
                    disabled: !0
                }), d.createElement("br", null), d.createElement("p", null, "You can change or remove your submission until the Jam deadline ", tt, "."), d.createElement(h.zx, {
                    onClick: function() {
                        we(!0)
                    },
                    loading: W,
                    className: "mb-2"
                }, "Replace Submission"), d.createElement(h.zx, {
                    onClick: function() {
                        te && H({
                            jamId: L,
                            submissionId: te.id,
                            silent: !1
                        })
                    },
                    disabled: W,
                    loading: K,
                    danger: !0
                }, "Remove Submission"))), rt && (null == te ? void 0 : te.rejected) && d.createElement(d.Fragment, null, d.createElement(S, {
                    "aria-label": "Submitted ".concat(ae)
                }, d.createElement(k, {
                    data: Qe,
                    contentType: null == Z ? void 0 : Z.type,
                    fieldsList: ["updated_at"],
                    showAuthor: !0
                }), d.createElement(h.JX, {
                    className: "ms-3 flex-1"
                }, d.createElement("p", {
                    className: "mb-2"
                }, "You have submitted this ", null == Z ? void 0 : Z.type, " on ", et), d.createElement("label", {
                    htmlFor: "contentDescription"
                }, "Description"), d.createElement(h.gx, {
                    id: "contentDescription",
                    "aria-label": "Description",
                    rows: 5,
                    value: null == te ? void 0 : te.description,
                    readOnly: !0,
                    disabled: !0
                }), d.createElement("br", null), d.createElement(q, {
                    htmlFor: "rejectionReason text"
                }, "This submission was rejected"), d.createElement(j, {
                    id: "rejectionReason",
                    "aria-label": "Rejection Reason",
                    rows: 5,
                    value: null == te ? void 0 : te.rejectionReason,
                    readOnly: !0,
                    disabled: !0
                }))), d.createElement(h.qX, {
                    title: "Rejection Notice",
                    type: "dark",
                    className: "mb-0",
                    slim: !0
                }, "Thank you for participating in the Jam! Unfortunately, the submission has been rejected and will not be considered for judging.", d.createElement("br", null), "We hope to see you again in our future Jams.")), nt && d.createElement(h.JX, null, d.createElement(h.qX, {
                    type: "neutral",
                    title: "No Submission",
                    slim: !0
                }, "You have not submitted any content yet")), ot && d.createElement(h.JX, null, d.createElement(h.qX, {
                    type: "neutral",
                    title: "Replacing submission",
                    slim: !0
                }, "Select a new ", ae, " below"), d.createElement(h.zx, {
                    "aria-label": "Cancel Content Replace",
                    onClick: function() {
                        we(!1)
                    }
                }, "Cancel")), ye && d.createElement(x, {
                    "aria-label": "Selected ".concat(ae),
                    className: "flex-1 w-100 mb-2"
                }, d.createElement(k, {
                    data: Ye,
                    contentType: null == Z ? void 0 : Z.type,
                    fieldsList: ["updated_at"],
                    showAuthor: !0
                }), d.createElement(h.JX, {
                    className: "ms-2 flex-1"
                }, d.createElement("div", {
                    className: "position-relative"
                }, d.createElement(h.gx, {
                    value: ke,
                    onChange: function(e) {
                        var t = e.target.value;
                        return Ie(t)
                    },
                    placeholder: "Tell us more about this ".concat(ae, ". What makes it a good fit for the jam?"),
                    "aria-label": "Description",
                    className: "mb-2",
                    inputStyle: E,
                    rows: 7,
                    required: !0,
                    minlength: 1,
                    maxlength: 1500,
                    onFocus: function() {
                        return Ce(!0)
                    },
                    onBlur: function() {
                        return Ce(!1)
                    }
                }), d.createElement(T, {
                    focused: je,
                    textColor: De
                }, null !== (A = null == ke ? void 0 : ke.length) && void 0 !== A ? A : 0, " / 1500")), (null == ke ? void 0 : ke.length) < 100 && d.createElement(h.qX, {
                    className: "mt-0",
                    type: "error",
                    title: "Description is required",
                    slim: !0
                }, "Please tell us more about your submission."), (null == ke ? void 0 : ke.length) > 1500 && d.createElement(h.qX, {
                    className: "mt-0",
                    type: "error",
                    title: "Description is too long",
                    slim: !0
                }, "Please write fewer than 1500 characters."), d.createElement(h.zx, {
                    onClick: Be,
                    loading: W || K,
                    className: "mb-2",
                    disabled: (null !== (C = null == ke || null === (D = ke.trim()) || void 0 === D ? void 0 : D.length) && void 0 !== C ? C : 0) < 100,
                    positive: !0
                }, Ke), d.createElement(h.zx, {
                    onClick: function() {
                        be(null), we(!1)
                    },
                    disabled: W,
                    neutral: !0
                }, "Cancel"))), Y && d.createElement(h.qX, {
                    type: "error",
                    title: "Failed to submit",
                    message: ut,
                    className: "mb-0",
                    slim: !0
                }), ee && d.createElement(h.qX, {
                    type: "error",
                    title: "Failed to remove or update",
                    message: ct,
                    className: "mb-0",
                    slim: !0
                }))), (!te || Ae) && d.createElement(h.JX, null, d.createElement("h4", {
                    className: "mb-0"
                }, at), d.createElement(h.qX, {
                    type: "info",
                    className: "mb-2",
                    title: "Submission Requirements",
                    slim: !0
                }, st), d.createElement(h.II, {
                    type: "text",
                    placeholder: "Search your content to submit",
                    "aria-label": "Search Content",
                    value: oe,
                    onChange: function(e) {
                        var t = e.target.value,
                            a = void 0 === t ? "" : t;
                        ie(a), d.startTransition((function() {
                            ce(a), pe(10)
                        }))
                    },
                    loading: ze
                }), it && d.createElement(h.qX, {
                    type: "neutral",
                    title: "No public ".concat(ae, "s"),
                    slim: !0
                }, "No public ", ae, "s found"), lt && d.createElement(h.qX, {
                    type: "neutral",
                    title: "No results",
                    message: "No matching content found",
                    slim: !0
                }), d.createElement(h.rj, {
                    className: "mb-4"
                }, null == _e ? void 0 : _e.map((function(e) {
                    return d.createElement(I, {
                        key: e.id,
                        onClick: (t = e.id, function() {
                            var e;
                            be(t), null === (e = document.querySelector(".content-scroll")) || void 0 === e || e.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        })
                    }, d.createElement(k, {
                        data: e,
                        contentType: null == Z ? void 0 : Z.type,
                        fieldsList: ["updated_at"],
                        showAuthor: !0
                    }));
                    var t
                })))))) : d.createElement(w, null, d.createElement(h.qX, {
                    type: "error",
                    title: "Jam not found",
                    message: "The Jam you are looking for does not exist",
                    customButton: d.createElement(h.zx, {
                        className: "mt-3",
                        onClick: function() {
                            return M("/home/jams")
                        }
                    }, "Back to Jams")
                }))
            };
            var w = (0, o.Z)(h.JX, {
                    target: "eyi9ar47"
                })({
                    name: "iano38",
                    styles: "max-width:1200px;width:100%;margin:0 auto"
                }),
                x = (0, o.Z)(h.X2, {
                    target: "eyi9ar46"
                })(h.Ao, "{background-color:#1e2226;border-color:#1e2226;}"),
                S = (0, o.Z)(x, {
                    target: "eyi9ar45"
                })(""),
                k = (0, o.Z)(h.uW, {
                    target: "eyi9ar44"
                })({
                    name: "17lbmje",
                    styles: "pointer-events:none;margin-bottom:0"
                }),
                I = (0, o.Z)("div", {
                    target: "eyi9ar43"
                })("cursor:pointer;&:hover{", k, "{", h.oI, "{border-color:#054d5e!important;}", h.Ao, "{border-color:#054d5e!important;}}}"),
                T = (0, o.Z)("div", {
                    target: "eyi9ar42"
                })("position:absolute;bottom:0.75rem;right:1.5rem;font-size:0.75rem;color:", (function(e) {
                    return e.textColor
                }), ";opacity:", (function(e) {
                    return e.focused ? 1 : .5
                }), ";transition:color 250ms ease-in-out,opacity 250ms ease-in-out;background:", (function(e) {
                    return e.focused ? "#07343f" : "transparent"
                }), ";border-radius:3px;padding:0.25rem 0.5rem;"),
                q = (0, o.Z)("label", {
                    target: "eyi9ar41"
                })({
                    name: "z1qxtn",
                    styles: "color:var(--bs-danger)"
                }),
                j = (0, o.Z)(h.gx, {
                    target: "eyi9ar40"
                })({
                    name: "1vu1jc4",
                    styles: "textarea{background:#541d22bf!important;color:white!important;border-color:var(--bs-danger)!important;}"
                })
        },
        21538: (e, t, a) => {
            a.d(t, {
                C0: () => k,
                CO: () => b,
                Cm: () => S,
                EA: () => g,
                F6: () => y,
                GG: () => p,
                LQ: () => E,
                X8: () => f,
                eP: () => x,
                lx: () => h,
                ve: () => A,
                x8: () => w
            });
            var r = a(15861),
                n = a(42138),
                o = a(4942),
                i = a(64687),
                l = a.n(i),
                s = a(61509);

            function u(e, t) {
                var a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!a) {
                    if (Array.isArray(e) || (a = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return c(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === a && e.constructor && (a = e.constructor.name);
                            if ("Map" === a || "Set" === a) return Array.from(e);
                            if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return c(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        a && (e = a);
                        var r = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    l = !1;
                return {
                    s: function() {
                        a = a.call(e)
                    },
                    n: function() {
                        var e = a.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        l = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == a.return || a.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                return r
            }

            function d(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(a), !0).forEach((function(t) {
                        (0, o.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var v = s.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getAllAvatarStyles: e.query({
                                query: function() {
                                    return {
                                        url: "/avatarStyles"
                                    }
                                },
                                providesTags: ["AvatarStyles"]
                            }),
                            updateAvatar: e.mutation({
                                query: function(e) {
                                    var t, a, r, n, o = e.avatarId,
                                        i = e.data;
                                    return {
                                        url: "/avatars/".concat(o),
                                        method: "PUT",
                                        body: m(m(m(m({}, i), null != i && null !== (t = i.styles) && void 0 !== t && t.primary ? {
                                            primaryStyle: null == i || null === (a = i.styles) || void 0 === a ? void 0 : a.primary
                                        } : {}), null != i && null !== (r = i.styles) && void 0 !== r && r.secondary ? {
                                            secondaryStyle: null == i || null === (n = i.styles) || void 0 === n ? void 0 : n.secondary
                                        } : {}), null != i && i.acknowledgements ? {
                                            acknowledgements: null == i ? void 0 : i.acknowledgements
                                        } : {})
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
                                    }]
                                }))
                            }),
                            selectAvatar: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/select"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar"]
                            }),
                            selectFallbackAvatar: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/selectfallback"),
                                        method: "PUT"
                                    }
                                }
                            }),
                            getAvatar: e.query({
                                query: function(e) {
                                    var t = e.avatarId,
                                        a = e.getListingData,
                                        r = void 0 !== a && a;
                                    return {
                                        url: "/avatars/".concat(t),
                                        params: {
                                            getListingData: r
                                        }
                                    }
                                },
                                providesTags: function(e, t, a) {
                                    var r = a.avatarId,
                                        o = a.getListingData;
                                    return [{
                                        type: "Avatar",
                                        id: r
                                    }].concat((0, n.Z)(o ? [{
                                        type: "AvatarWithListingData",
                                        id: r
                                    }] : []))
                                }
                            }),
                            setAvatarTags: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId,
                                        a = e.tags;
                                    return {
                                        url: "/avatars/".concat(t),
                                        method: "PUT",
                                        body: {
                                            tags: a
                                        }
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
                                    }]
                                }))
                            }),
                            deleteAvatar: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar", "Avatar"]
                            }),
                            enqueueImpostor: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/impostor/enqueue"),
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
                                    }]
                                }))
                            }),
                            deleteImpostors: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/impostor"),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, s.T)((function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
                                    }]
                                }))
                            }),
                            getImpostorQueueStats: e.query({
                                query: function() {
                                    return {
                                        url: "/avatars/impostor/queue/stats"
                                    }
                                }
                            }),
                            getAllAvatars: e.query({
                                queryFn: (a = (0, r.Z)(l().mark((function e(t, a, r, o) {
                                    var i, s, u, c, d, m, v, p, f, g, y, b, h, E, A, w, x, S, k, I, T, q, j, C, D, L, N;
                                    return l().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                i = t.sort, s = void 0 === i ? "updated" : i, u = t.order, c = void 0 === u ? "descending" : u, d = t.releaseStatus, m = void 0 === d ? "all" : d, v = t.user, p = void 0 === v ? "me" : v, f = t.organization, g = void 0 === f ? "vrchat" : f, y = t.n, b = void 0 === y ? 20 : y, h = t.featured, E = t.userId, A = t.search, w = t.tag, x = t.notag, S = t.platform, k = t.maxUnityVersion, I = t.minUnityVersion, T = t.exactUnityVersion, q = t.minAssetVersion, j = t.maxAssetVersion, C = t.exactAssetVersion, D = [], L = 0;
                                            case 3:
                                                return e.next = 6, o({
                                                    url: "avatars",
                                                    params: {
                                                        exactAssetVersion: C,
                                                        exactUnityVersion: T,
                                                        featured: h,
                                                        maxAssetVersion: j,
                                                        maxUnityVersion: k,
                                                        minAssetVersion: q,
                                                        minUnityVersion: I,
                                                        n: b,
                                                        notag: x,
                                                        offset: L,
                                                        order: c,
                                                        organization: g,
                                                        platform: S,
                                                        releaseStatus: m,
                                                        search: A,
                                                        sort: s,
                                                        tag: w,
                                                        user: p,
                                                        userId: E
                                                    }
                                                });
                                            case 6:
                                                if (!(N = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: N.error
                                                });
                                            case 9:
                                                if (!(N.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return D.push.apply(D, (0, n.Z)(N.data)), L += b, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: D
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, r, n) {
                                    return a.apply(this, arguments)
                                }),
                                providesTags: function(e, t) {
                                    return [{
                                        type: "Avatars",
                                        id: "LIST"
                                    }]
                                }
                            }),
                            getFavoriteAvatars: e.query({
                                query: function(e) {
                                    return {
                                        url: "avatars/favorites",
                                        params: {
                                            userId: e.userId,
                                            n: e.n,
                                            offset: e.offset,
                                            tag: e.tag,
                                            tags: e.tags
                                        }
                                    }
                                },
                                providesTags: function(e, t, a) {
                                    return [{
                                        type: "FavoriteAvatars",
                                        id: a.tag
                                    }]
                                }
                            }),
                            getAllFavoriteAvatars: e.query({
                                queryFn: (t = (0, r.Z)(l().mark((function e() {
                                    var t, a, r, o, i, s, c, d, m, v, p, f, g, y = arguments;
                                    return l().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                a = (t = y.length > 0 && void 0 !== y[0] ? y[0] : {}).tag, r = t.tags, o = t.userId, i = t.groups, s = void 0 === i ? [] : i, c = y.length > 3 ? y[3] : void 0, d = [], m = u(a ? [a] : s), e.prev = 7, m.s();
                                            case 9:
                                                if ((v = m.n()).done) {
                                                    e.next = 27;
                                                    break
                                                }
                                                p = v.value, f = 0;
                                            case 12:
                                                return e.next = 15, c({
                                                    url: "avatars/favorites",
                                                    params: {
                                                        n: 50,
                                                        offset: f,
                                                        tag: null != a ? a : p,
                                                        tags: r,
                                                        userId: o
                                                    }
                                                });
                                            case 15:
                                                if (!(g = e.sent).error) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: g.error
                                                });
                                            case 18:
                                                if (!(g.data.length > 0)) {
                                                    e.next = 22;
                                                    break
                                                }
                                                return d.push.apply(d, (0, n.Z)(g.data)), f += 50, e.abrupt("continue", 12);
                                            case 22:
                                                return e.abrupt("break", 25);
                                            case 25:
                                                e.next = 9;
                                                break;
                                            case 27:
                                                e.next = 32;
                                                break;
                                            case 29:
                                                e.prev = 29, e.t0 = e.catch(7), m.e(e.t0);
                                            case 32:
                                                return e.prev = 32, m.f(), e.finish(32);
                                            case 35:
                                                return e.abrupt("return", {
                                                    data: d
                                                });
                                            case 36:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [7, 29, 32, 35]
                                    ])
                                }))), function() {
                                    return t.apply(this, arguments)
                                }),
                                providesTags: function(e, t) {
                                    var a = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).tag;
                                    return [{
                                        type: "FavoriteAvatars",
                                        id: null != a ? a : "all"
                                    }]
                                }
                            })
                        };
                        var t, a
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["Avatar", "AvatarWithListingData", "FavoriteAvatars"]
                }),
                p = v.useDeleteAvatarMutation,
                f = v.useDeleteImpostorsMutation,
                g = v.useEnqueueImpostorMutation,
                y = v.useGetAllAvatarsQuery,
                b = v.useGetAllAvatarStylesQuery,
                h = v.useGetAllFavoriteAvatarsQuery,
                E = v.useGetAvatarQuery,
                A = (v.useGetFavoriteAvatarsQuery, v.useGetImpostorQueueStatsQuery),
                w = v.useSelectAvatarMutation,
                x = v.useSelectFallbackAvatarMutation,
                S = v.useSetAvatarTagsMutation,
                k = v.useUpdateAvatarMutation
        }
    }
]);
//# sourceMappingURL=bc3814274c08aba30b2a4f72093bf12f25bf52d994d11c8494b8223a734b2ebf.js.map