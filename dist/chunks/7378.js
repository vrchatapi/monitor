"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [7378], {
        87378: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => x
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
                b = a(21538),
                g = a(22082),
                y = a(1208),
                h = a(14411);
            var E = {
                name: "1k1xm34",
                styles: "padding-bottom:1.75rem"
            };
            const x = function() {
                var e, t, a, o, l, u, x, M, N, j = (0, v.UO)().jamId,
                    X = (0, m.I0)(),
                    Z = (0, v.s0)(),
                    L = (0, g.oE)(void 0, {
                        selectFromResult: function(e) {
                            var t = e.data;
                            return {
                                data: null == t ? void 0 : t.find((function(e) {
                                    return e.id === j
                                }))
                            }
                        }
                    }),
                    D = L.data,
                    F = L.isLoading,
                    U = L.isError,
                    J = (0, f.Tu)().user,
                    P = (0, g.Zv)({
                        jamId: j,
                        submitterId: null == J ? void 0 : J.id
                    }, {
                        skip: !(null != J && J.id)
                    }),
                    V = P.data,
                    G = P.isLoading,
                    R = (0, g.Pc)(),
                    z = (0, n.Z)(R, 2),
                    Q = z[0],
                    Y = z[1],
                    O = Y.isLoading,
                    _ = Y.error,
                    W = (0, g.MM)(),
                    B = (0, n.Z)(W, 2),
                    H = B[0],
                    $ = B[1],
                    K = $.isLoading,
                    ee = $.error,
                    te = null == V ? void 0 : V[0],
                    ae = (null == D ? void 0 : D.type) && D.type.slice(0, 1).toUpperCase() + D.type.slice(1),
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
                    be = (0, n.Z)(fe, 2),
                    ge = be[0],
                    ye = be[1],
                    he = d.useState(!1),
                    Ee = (0, n.Z)(he, 2),
                    xe = Ee[0],
                    Ae = Ee[1],
                    we = d.useState(""),
                    Ie = (0, n.Z)(we, 2),
                    Se = Ie[0],
                    Te = Ie[1],
                    ke = d.useState(!1),
                    qe = (0, n.Z)(ke, 2),
                    Ce = qe[0],
                    Me = qe[1],
                    Ne = d.useMemo((function() {
                        return (null == Se ? void 0 : Se.length) < 100 ? "var(--bs-danger)" : (null == Se ? void 0 : Se.length) < 750 ? "var(--bs-success)" : (null == Se ? void 0 : Se.length) > 1500 ? "var(--bs-danger)" : (null == Se ? void 0 : Se.length) > 750 ? "var(--bs-warning)" : "#fff"
                    }), [null == Se ? void 0 : Se.length]),
                    je = (0, b.LQ)({
                        avatarId: null == te ? void 0 : te.contentId
                    }, {
                        skip: !te || "avatar" !== (null == D ? void 0 : D.type)
                    }),
                    Xe = je.data,
                    Ze = je.isLoading,
                    Le = (0, y.Vw)({
                        worldId: null == te ? void 0 : te.contentId
                    }, {
                        skip: !te || "world" !== (null == D ? void 0 : D.type)
                    }),
                    De = Le.data,
                    Fe = Le.isLoading,
                    Ue = (0, b.F6)({
                        user: "me",
                        releaseStatus: "public"
                    }, {
                        skip: !xe && te || G || "avatar" !== (null == D ? void 0 : D.type)
                    }),
                    Je = Ue.data,
                    Pe = Ue.isLoading,
                    Ve = (0, y.Ld)({
                        user: "me",
                        releaseStatus: "public"
                    }, {
                        skip: !xe && te || G || "world" !== (null == D ? void 0 : D.type)
                    }),
                    Ge = Ve.data,
                    Re = Ve.isLoading,
                    ze = (null === (e = {
                        avatar: Je,
                        world: Ge
                    }) || void 0 === e ? void 0 : e[null == D ? void 0 : D.type]) || [],
                    Qe = (null === (t = {
                        avatar: Pe,
                        world: Re
                    }) || void 0 === t ? void 0 : t[null == D ? void 0 : D.type]) || !1,
                    Ye = (null === (a = {
                        avatar: Xe,
                        world: De
                    }) || void 0 === a ? void 0 : a[null == D ? void 0 : D.type]) || null,
                    Oe = (null === (o = {
                        avatar: Ze,
                        world: Fe
                    }) || void 0 === o ? void 0 : o[null == D ? void 0 : D.type]) || !1,
                    _e = d.useMemo((function() {
                        return null == ze ? void 0 : ze.find((function(e) {
                            return e.id === ge
                        }))
                    }), [ge]),
                    We = d.useMemo((function() {
                        var e;
                        if (!D) return [];
                        var t = ze;
                        return null != D && D.submissionContentGated && (t = null == ze ? void 0 : ze.filter((function(e) {
                            var t = e.updated_at;
                            return c()(t).isAfter(c()(null == D ? void 0 : D.submissionContentGateDate))
                        }))), null === (e = t) || void 0 === e ? void 0 : e.filter((function(e) {
                            return e.name.toLowerCase().includes(ue.toLowerCase())
                        })).slice(0, ve)
                    }), [ze, ue, ve, D]);
                if (U) return d.createElement(h.qX, {
                    type: "error",
                    title: "Jam load error",
                    message: "Failed to load the Jam",
                    slim: !0
                });
                if (F || G) return d.createElement(h.UU, {
                    width: "100%",
                    height: "200px"
                });
                var Be = function() {
                        var e = (0, r.Z)(s().mark((function e() {
                            var t, a, r;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (ge) {
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
                                            jamId: j,
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
                                        return e.next = 11, Q({
                                            jamId: j,
                                            contentId: ge,
                                            description: Se
                                        }).unwrap();
                                    case 11:
                                        e.sent.error || (ye(null), Ae(!1), Te("")), e.next = 16;
                                        break;
                                    case 15:
                                        X((0, p.d)({
                                            title: "Failed to update submission",
                                            icon: i.eH,
                                            message: null !== (a = null === (r = t.error.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        }));
                                    case 16:
                                        return e.abrupt("return");
                                    case 17:
                                        return e.next = 19, Q({
                                            jamId: D.id,
                                            contentId: ge,
                                            description: Se
                                        }).unwrap();
                                    case 19:
                                        e.sent.error || (ye(null), Ae(!1), Te(""));
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
                    }) || void 0 === u ? void 0 : u[null == D ? void 0 : D.type]) && void 0 !== l ? l : "",
                    Ke = te ? "Update Submission" : "Submit ".concat(ae, " to Jam"),
                    et = !!te && c()(te.submittedOn).format("MMMM D [at] h:mm A"),
                    tt = D && (D.stateChangeDates.submissionsClosed ? "on ".concat(c()(D.stateChangeDates.submissionsClosed).format("MMMM D [at] h:mm A")) : null),
                    at = xe ? "Select a new ".concat(ae) : "Select ".concat($e, " ").concat(ae, " to submit"),
                    rt = !!te && Ye && !xe,
                    nt = !(!D || rt || xe || Oe),
                    ot = xe && !ge,
                    it = 0 === (null == We ? void 0 : We.length) && 0 === oe.length && !Qe,
                    lt = oe.length > 1 && 0 === (null == We ? void 0 : We.length),
                    st = "You can only submit public ".concat(ae, "s");
                null != D && D.submissionContentGated && (st += " uploaded after ".concat(c()(D.submissionContentGateDate).format("MMMM D YYYY h:mm A")));
                var ut = He({
                        error: _,
                        rateLimitText: "Please wait before submitting again"
                    }),
                    ct = He({
                        error: ee,
                        rateLimitText: "Please before trying to remove a submission again"
                    });
                return D ? d.createElement(A, null, d.createElement(h.JX, {
                    className: "mt-2"
                }, d.createElement("h2", null, "Submit ", ae, " to ", null == D ? void 0 : D.title), d.createElement(h.JX, {
                    className: "mt-3 mb-3"
                }, d.createElement(h.oI, null, d.createElement("h4", null, "My Submission")), d.createElement(h.Ao, null, Oe && d.createElement(h.UU, {
                    width: "100%",
                    height: "200px"
                }), rt && !(null != te && te.rejected) && d.createElement(I, {
                    "aria-label": "Submitted ".concat(ae)
                }, d.createElement(S, {
                    data: Ye,
                    contentType: null == D ? void 0 : D.type,
                    fieldsList: ["updated_at"],
                    showAuthor: !0
                }), d.createElement(h.JX, {
                    className: "ms-3 flex-1"
                }, d.createElement("p", {
                    className: "mb-2"
                }, "You submitted this ", null == D ? void 0 : D.type, " on ", et), d.createElement("label", {
                    htmlFor: "contentDescription"
                }, "Description"), d.createElement(h.gx, {
                    id: "contentDescription",
                    rows: 5,
                    value: null == te ? void 0 : te.description,
                    readOnly: !0,
                    disabled: !0
                }), d.createElement("br", null), d.createElement("p", null, "You can change or remove your submission until the Jam deadline ", tt, "."), d.createElement(h.zx, {
                    onClick: function() {
                        Ae(!0)
                    },
                    loading: O,
                    className: "mb-2"
                }, "Replace Submission"), d.createElement(h.zx, {
                    onClick: function() {
                        te && H({
                            jamId: j,
                            submissionId: te.id,
                            silent: !1
                        })
                    },
                    disabled: O,
                    loading: K,
                    danger: !0
                }, "Remove Submission"))), rt && (null == te ? void 0 : te.rejected) && d.createElement(d.Fragment, null, d.createElement(I, {
                    "aria-label": "Submitted ".concat(ae)
                }, d.createElement(S, {
                    data: Ye,
                    contentType: null == D ? void 0 : D.type,
                    fieldsList: ["updated_at"],
                    showAuthor: !0
                }), d.createElement(h.JX, {
                    className: "ms-3 flex-1"
                }, d.createElement("p", {
                    className: "mb-2"
                }, "You have submitted this ", null == D ? void 0 : D.type, " on ", et), d.createElement("label", {
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
                }, "This submission was rejected"), d.createElement(C, {
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
                        Ae(!1)
                    }
                }, "Cancel")), ge && d.createElement(w, {
                    "aria-label": "Selected ".concat(ae),
                    className: "flex-1 w-100 mb-2"
                }, d.createElement(S, {
                    data: _e,
                    contentType: null == D ? void 0 : D.type,
                    fieldsList: ["updated_at"],
                    showAuthor: !0
                }), d.createElement(h.JX, {
                    className: "ms-2 flex-1"
                }, d.createElement("div", {
                    className: "position-relative"
                }, d.createElement(h.gx, {
                    value: Se,
                    onChange: function(e) {
                        var t = e.target.value;
                        return Te(t)
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
                        return Me(!0)
                    },
                    onBlur: function() {
                        return Me(!1)
                    }
                }), d.createElement(k, {
                    focused: Ce,
                    textColor: Ne
                }, null !== (x = null == Se ? void 0 : Se.length) && void 0 !== x ? x : 0, " / 1500")), (null == Se ? void 0 : Se.length) < 100 && d.createElement(h.qX, {
                    className: "mt-0",
                    type: "error",
                    title: "Description is required",
                    slim: !0
                }, "Please tell us more about your submission."), (null == Se ? void 0 : Se.length) > 1500 && d.createElement(h.qX, {
                    className: "mt-0",
                    type: "error",
                    title: "Description is too long",
                    slim: !0
                }, "Please write fewer than 1500 characters."), d.createElement(h.zx, {
                    onClick: Be,
                    loading: O || K,
                    className: "mb-2",
                    disabled: (null !== (M = null == Se || null === (N = Se.trim()) || void 0 === N ? void 0 : N.length) && void 0 !== M ? M : 0) < 100,
                    positive: !0
                }, Ke), d.createElement(h.zx, {
                    onClick: function() {
                        ye(null), Ae(!1)
                    },
                    disabled: O,
                    neutral: !0
                }, "Cancel"))), _ && d.createElement(h.qX, {
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
                }))), (!te || xe) && d.createElement(h.JX, null, d.createElement("h4", {
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
                    loading: Qe
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
                }, null == We ? void 0 : We.map((function(e) {
                    return d.createElement(T, {
                        key: e.id,
                        onClick: (t = e.id, function() {
                            var e;
                            ye(t), null === (e = document.querySelector(".content-scroll")) || void 0 === e || e.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        })
                    }, d.createElement(S, {
                        data: e,
                        contentType: null == D ? void 0 : D.type,
                        fieldsList: ["updated_at"],
                        showAuthor: !0
                    }));
                    var t
                })))))) : d.createElement(A, null, d.createElement(h.qX, {
                    type: "error",
                    title: "Jam not found",
                    message: "The Jam you are looking for does not exist",
                    customButton: d.createElement(h.zx, {
                        className: "mt-3",
                        onClick: function() {
                            return Z("/home/jams")
                        }
                    }, "Back to Jams")
                }))
            };
            var A = (0, o.Z)(h.JX, {
                    target: "eyi9ar47"
                })({
                    name: "iano38",
                    styles: "max-width:1200px;width:100%;margin:0 auto"
                }),
                w = (0, o.Z)(h.X2, {
                    target: "eyi9ar46"
                })(h.Ao, "{background-color:#1e2226;border-color:#1e2226;}"),
                I = (0, o.Z)(w, {
                    target: "eyi9ar45"
                })(""),
                S = (0, o.Z)(h.uW, {
                    target: "eyi9ar44"
                })({
                    name: "17lbmje",
                    styles: "pointer-events:none;margin-bottom:0"
                }),
                T = (0, o.Z)("div", {
                    target: "eyi9ar43"
                })("cursor:pointer;&:hover{", S, "{", h.oI, "{border-color:#054d5e!important;}", h.Ao, "{border-color:#054d5e!important;}}}"),
                k = (0, o.Z)("div", {
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
                C = (0, o.Z)(h.gx, {
                    target: "eyi9ar40"
                })({
                    name: "1vu1jc4",
                    styles: "textarea{background:#541d22bf!important;color:white!important;border-color:var(--bs-danger)!important;}"
                })
        },
        21538: (e, t, a) => {
            a.d(t, {
                Cm: () => y,
                EA: () => x,
                F6: () => d,
                GG: () => h,
                Gy: () => E,
                LQ: () => v,
                X8: () => A,
                ak: () => g,
                cq: () => b,
                lx: () => m,
                ve: () => p,
                x8: () => f
            });
            var r = a(42138),
                n = a(15861),
                o = a(64687),
                i = a.n(o),
                l = a(61509);

            function s(e, t) {
                var a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!a) {
                    if (Array.isArray(e) || (a = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return u(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === a && e.constructor && (a = e.constructor.name);
                            if ("Map" === a || "Set" === a) return Array.from(e);
                            if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return u(e, t)
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

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                return r
            }
            var c = l.S.injectEndpoints({
                    endpoints: function(e) {
                        return {
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
                            getAvatar: e.query({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t)
                                    }
                                },
                                providesTags: function(e, t, a) {
                                    return [{
                                        type: "Avatar",
                                        id: a.avatarId
                                    }]
                                }
                            }),
                            setAvatarPublic: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t),
                                        method: "PUT",
                                        body: {
                                            releaseStatus: "public"
                                        }
                                    }
                                },
                                invalidatesTags: (0, l.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
                                    }]
                                }))
                            }),
                            setAvatarPrivate: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t),
                                        method: "PUT",
                                        body: {
                                            releaseStatus: "private"
                                        }
                                    }
                                },
                                invalidatesTags: (0, l.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
                                    }]
                                }))
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
                                invalidatesTags: (0, l.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
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
                                invalidatesTags: ["CurrentAvatar"]
                            }),
                            wearAvatar: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/select"),
                                        method: "PUT"
                                    }
                                },
                                invalidatesTags: ["CurrentAvatar"]
                            }),
                            enqueueImpostor: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/impostor/enqueue"),
                                        method: "POST"
                                    }
                                },
                                invalidatesTags: (0, l.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
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
                                invalidatesTags: (0, l.T)((function(e) {
                                    return [{
                                        type: "Avatar",
                                        id: e.avatarId
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
                                queryFn: (a = (0, n.Z)(i().mark((function e(t, a, n, o) {
                                    var l, s, u, c, d, m, v, p, f, b, g, y, h, E, x, A, w, I, S, T, k, q, C, M, N, j, X;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                l = t.sort, s = void 0 === l ? "updated" : l, u = t.order, c = void 0 === u ? "descending" : u, d = t.releaseStatus, m = void 0 === d ? "all" : d, v = t.user, p = void 0 === v ? "me" : v, f = t.organization, b = void 0 === f ? "vrchat" : f, g = t.n, y = void 0 === g ? 20 : g, h = t.featured, E = t.userId, x = t.search, A = t.tag, w = t.notag, I = t.platform, S = t.maxUnityVersion, T = t.minUnityVersion, k = t.exactUnityVersion, q = t.minAssetVersion, C = t.maxAssetVersion, M = t.exactAssetVersion, N = [], j = 0;
                                            case 3:
                                                return e.next = 6, o({
                                                    url: "avatars",
                                                    params: {
                                                        exactAssetVersion: M,
                                                        exactUnityVersion: k,
                                                        featured: h,
                                                        maxAssetVersion: C,
                                                        maxUnityVersion: S,
                                                        minAssetVersion: q,
                                                        minUnityVersion: T,
                                                        n: y,
                                                        notag: w,
                                                        offset: j,
                                                        order: c,
                                                        organization: b,
                                                        platform: I,
                                                        releaseStatus: m,
                                                        search: x,
                                                        sort: s,
                                                        tag: A,
                                                        user: p,
                                                        userId: E
                                                    }
                                                });
                                            case 6:
                                                if (!(X = e.sent).error) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: X.error
                                                });
                                            case 9:
                                                if (!(X.data.length > 0)) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return N.push.apply(N, (0, r.Z)(X.data)), j += y, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: N
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), function(e, t, r, n) {
                                    return a.apply(this, arguments)
                                })
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
                                queryFn: (t = (0, n.Z)(i().mark((function e() {
                                    var t, a, n, o, l, u, c, d, m, v, p, f, b, g = arguments;
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                a = (t = g.length > 0 && void 0 !== g[0] ? g[0] : {}).tag, n = t.tags, o = t.userId, l = t.groups, u = void 0 === l ? [] : l, c = g.length > 3 ? g[3] : void 0, d = [], m = s(a ? [a] : u), e.prev = 7, m.s();
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
                                                        tags: n,
                                                        userId: o
                                                    }
                                                });
                                            case 15:
                                                if (!(b = e.sent).error) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: b.error
                                                });
                                            case 18:
                                                if (!(b.data.length > 0)) {
                                                    e.next = 22;
                                                    break
                                                }
                                                return d.push.apply(d, (0, r.Z)(b.data)), f += 50, e.abrupt("continue", 12);
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
                    addTagTypes: ["FavoriteAvatars"]
                }),
                d = c.useGetAllAvatarsQuery,
                m = c.useGetAllFavoriteAvatarsQuery,
                v = c.useGetAvatarQuery,
                p = (c.useGetFavoriteAvatarsQuery, c.useGetImpostorQueueStatsQuery),
                f = c.useSelectAvatarMutation,
                b = c.useSetAvatarPrivateMutation,
                g = c.useSetAvatarPublicMutation,
                y = c.useSetAvatarTagsMutation,
                h = c.useDeleteAvatarMutation,
                E = c.useWearAvatarMutation,
                x = c.useEnqueueImpostorMutation,
                A = c.useDeleteImpostorsMutation
        }
    }
]);
//# sourceMappingURL=02d5fca3fa5b307396fa64e08775bef03c5e0f2ef42c625f66202bbd508aff2b.js.map