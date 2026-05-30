"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [9355], {
        69355(e, t, a) {
            a.r(t), a.d(t, {
                default: () => E
            });
            var r = a(10467),
                n = a(15902),
                o = a(70129),
                i = a(34496),
                l = a(54756),
                s = a.n(l),
                u = a(74353),
                c = a.n(u),
                d = a(96540),
                m = a(6376),
                v = a(47767),
                p = a(65950),
                f = a(194),
                y = a(95583),
                g = a(31464),
                b = a(60188),
                h = a(15033);
            var A = {
                name: "1k1xm34",
                styles: "padding-bottom:1.75rem"
            };
            const E = function() {
                var e, t, a, o, l, u, E, C, L, M = (0, v.g)().jamId,
                    N = (0, m.wA)(),
                    q = (0, v.Zp)(),
                    O = (0, g.xH)(void 0, {
                        selectFromResult: function(e) {
                            var t = e.data;
                            return {
                                data: null == t ? void 0 : t.find(function(e) {
                                    return e.id === M
                                })
                            }
                        }
                    }),
                    F = O.data,
                    P = O.isLoading,
                    $ = O.isError,
                    R = (0, f.a$)().user,
                    U = (0, g.ht)({
                        jamId: M,
                        submitterId: null == R ? void 0 : R.id
                    }, {
                        skip: !(null != R && R.id)
                    }),
                    G = U.data,
                    V = U.isLoading,
                    W = (0, g.a$)(),
                    J = (0, n.A)(W, 2),
                    Y = J[0],
                    Q = J[1],
                    _ = Q.isLoading,
                    B = Q.error,
                    z = (0, g.wG)(),
                    Z = (0, n.A)(z, 2),
                    H = Z[0],
                    X = Z[1],
                    K = X.isLoading,
                    ee = X.error,
                    te = null == G ? void 0 : G[0],
                    ae = (null == F ? void 0 : F.type) && F.type.slice(0, 1).toUpperCase() + F.type.slice(1),
                    re = d.useState(""),
                    ne = (0, n.A)(re, 2),
                    oe = ne[0],
                    ie = ne[1],
                    le = d.useState(""),
                    se = (0, n.A)(le, 2),
                    ue = se[0],
                    ce = se[1],
                    de = d.useState(10),
                    me = (0, n.A)(de, 2),
                    ve = me[0],
                    pe = me[1],
                    fe = d.useState(null),
                    ye = (0, n.A)(fe, 2),
                    ge = ye[0],
                    be = ye[1],
                    he = d.useState(!1),
                    Ae = (0, n.A)(he, 2),
                    Ee = Ae[0],
                    we = Ae[1],
                    xe = d.useState(""),
                    Te = (0, n.A)(xe, 2),
                    Se = Te[0],
                    ke = Te[1],
                    Ie = d.useState(!1),
                    je = (0, n.A)(Ie, 2),
                    De = je[0],
                    Ce = je[1],
                    Le = d.useMemo(function() {
                        return (null == Se ? void 0 : Se.length) < 100 ? "var(--bs-danger)" : (null == Se ? void 0 : Se.length) < 750 ? "var(--bs-success)" : (null == Se ? void 0 : Se.length) > 1500 ? "var(--bs-danger)" : (null == Se ? void 0 : Se.length) > 750 ? "var(--bs-warning)" : "#fff"
                    }, [null == Se ? void 0 : Se.length]),
                    Me = (0, y.RR)({
                        avatarId: null == te ? void 0 : te.contentId
                    }, {
                        skip: !te || "avatar" !== (null == F ? void 0 : F.type)
                    }),
                    Ne = Me.data,
                    qe = Me.isLoading,
                    Oe = (0, b.Ed)({
                        worldId: null == te ? void 0 : te.contentId
                    }, {
                        skip: !te || "world" !== (null == F ? void 0 : F.type)
                    }),
                    Fe = Oe.data,
                    Pe = Oe.isLoading,
                    $e = (0, y.tS)({
                        user: "me",
                        releaseStatus: "public"
                    }, {
                        skip: !Ee && te || V || "avatar" !== (null == F ? void 0 : F.type)
                    }),
                    Re = $e.data,
                    Ue = $e.isLoading,
                    Ge = (0, b.u7)({
                        user: "me",
                        releaseStatus: "public"
                    }, {
                        skip: !Ee && te || V || "world" !== (null == F ? void 0 : F.type)
                    }),
                    Ve = Ge.data,
                    We = Ge.isLoading,
                    Je = (null === (e = {
                        avatar: Re,
                        world: Ve
                    }) || void 0 === e ? void 0 : e[null == F ? void 0 : F.type]) || [],
                    Ye = (null === (t = {
                        avatar: Ue,
                        world: We
                    }) || void 0 === t ? void 0 : t[null == F ? void 0 : F.type]) || !1,
                    Qe = (null === (a = {
                        avatar: Ne,
                        world: Fe
                    }) || void 0 === a ? void 0 : a[null == F ? void 0 : F.type]) || null,
                    _e = (null === (o = {
                        avatar: qe,
                        world: Pe
                    }) || void 0 === o ? void 0 : o[null == F ? void 0 : F.type]) || !1,
                    Be = d.useMemo(function() {
                        return null == Je ? void 0 : Je.find(function(e) {
                            return e.id === ge
                        })
                    }, [ge]),
                    ze = d.useMemo(function() {
                        var e;
                        if (!F) return [];
                        var t = Je;
                        return null != F && F.submissionContentGated && (t = null == Je ? void 0 : Je.filter(function(e) {
                            var t = e.updated_at;
                            return c()(t).isAfter(c()(null == F ? void 0 : F.submissionContentGateDate))
                        })), null === (e = t) || void 0 === e ? void 0 : e.filter(function(e) {
                            return e.name.toLowerCase().includes(ue.toLowerCase())
                        }).slice(0, ve)
                    }, [Je, ue, ve, F]);
                if ($) return d.createElement(h.$T, {
                    type: "error",
                    title: "Jam load error",
                    message: "Failed to load the Jam",
                    slim: !0
                });
                if (P || V) return d.createElement(h.fy, {
                    width: "100%",
                    height: "200px"
                });
                var Ze = function() {
                        var e = (0, r.A)(s().mark(function e() {
                            var t, a, r;
                            return s().wrap(function(e) {
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
                                            jamId: M,
                                            submissionId: te.id,
                                            silent: !0
                                        }).unwrap();
                                    case 5:
                                        if ((t = e.sent).error) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.next = 9, new Promise(function(e) {
                                            return setTimeout(e, 1e3)
                                        });
                                    case 9:
                                        return e.next = 11, Y({
                                            jamId: M,
                                            contentId: ge,
                                            description: Se
                                        }).unwrap();
                                    case 11:
                                        e.sent.error || (be(null), we(!1), ke("")), e.next = 16;
                                        break;
                                    case 15:
                                        N((0, p.X)({
                                            title: "Failed to update submission",
                                            icon: i.zp,
                                            message: null !== (a = null === (r = t.error.data) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : "Something went wrong",
                                            color: "error",
                                            timeout: 3e3
                                        }));
                                    case 16:
                                        return e.abrupt("return");
                                    case 17:
                                        return e.next = 19, Y({
                                            jamId: F.id,
                                            contentId: ge,
                                            description: Se
                                        }).unwrap();
                                    case 19:
                                        e.sent.error || (be(null), we(!1), ke(""));
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    He = function(e) {
                        var t, a, r = e.error,
                            n = e.rateLimitText;
                        return 429 === (null == r ? void 0 : r.status) ? n : null !== (t = null == r || null === (a = r.data) || void 0 === a || null === (a = a.error) || void 0 === a ? void 0 : a.message) && void 0 !== t ? t : "Something went wrong"
                    },
                    Xe = null !== (l = null === (u = {
                        avatar: "an",
                        world: "a"
                    }) || void 0 === u ? void 0 : u[null == F ? void 0 : F.type]) && void 0 !== l ? l : "",
                    Ke = te ? "Update Submission" : "Submit ".concat(ae, " to Jam"),
                    et = !!te && c()(te.submittedOn).format("MMMM D [at] h:mm A"),
                    tt = F && (F.stateChangeDates.submissionsClosed ? "on ".concat(c()(F.stateChangeDates.submissionsClosed).format("MMMM D [at] h:mm A")) : null),
                    at = Ee ? "Select a new ".concat(ae) : "Select ".concat(Xe, " ").concat(ae, " to submit"),
                    rt = !!te && Qe && !Ee,
                    nt = !(!F || rt || Ee || _e),
                    ot = Ee && !ge,
                    it = 0 === (null == ze ? void 0 : ze.length) && 0 === oe.length && !Ye,
                    lt = oe.length > 1 && 0 === (null == ze ? void 0 : ze.length),
                    st = "You can only submit public ".concat(ae, "s");
                null != F && F.submissionContentGated && (st += " uploaded after ".concat(c()(F.submissionContentGateDate).format("MMMM D YYYY h:mm A")));
                var ut = He({
                        error: B,
                        rateLimitText: "Please wait before submitting again"
                    }),
                    ct = He({
                        error: ee,
                        rateLimitText: "Please before trying to remove a submission again"
                    });
                return F ? d.createElement(w, null, d.createElement(h.fv, {
                    className: "mt-2"
                }, d.createElement("h2", null, "Submit ", ae, " to ", null == F ? void 0 : F.title), d.createElement(h.fv, {
                    className: "mt-3 mb-3"
                }, d.createElement(h.N3, null, d.createElement("h4", null, "My Submission")), d.createElement(h.BW, null, _e && d.createElement(h.fy, {
                    width: "100%",
                    height: "200px"
                }), rt && !(null != te && te.rejected) && d.createElement(T, {
                    "aria-label": "Submitted ".concat(ae)
                }, d.createElement(S, {
                    data: Qe,
                    contentType: null == F ? void 0 : F.type,
                    fieldsList: ["updated_at"],
                    showAuthor: !0
                }), d.createElement(h.fv, {
                    className: "ms-3 flex-1"
                }, d.createElement("p", {
                    className: "mb-2"
                }, "You submitted this ", null == F ? void 0 : F.type, " on ", et), d.createElement("label", {
                    htmlFor: "contentDescription"
                }, "Description"), d.createElement(h.TM, {
                    id: "contentDescription",
                    rows: 5,
                    value: null == te ? void 0 : te.description,
                    readOnly: !0,
                    disabled: !0
                }), d.createElement("br", null), d.createElement("p", null, "You can change or remove your submission until the Jam deadline ", tt, "."), d.createElement(h.$n, {
                    onClick: function() {
                        we(!0)
                    },
                    loading: _,
                    className: "mb-2"
                }, "Replace Submission"), d.createElement(h.$n, {
                    onClick: function() {
                        te && H({
                            jamId: M,
                            submissionId: te.id,
                            silent: !1
                        })
                    },
                    disabled: _,
                    loading: K,
                    danger: !0
                }, "Remove Submission"))), rt && (null == te ? void 0 : te.rejected) && d.createElement(d.Fragment, null, d.createElement(T, {
                    "aria-label": "Submitted ".concat(ae)
                }, d.createElement(S, {
                    data: Qe,
                    contentType: null == F ? void 0 : F.type,
                    fieldsList: ["updated_at"],
                    showAuthor: !0
                }), d.createElement(h.fv, {
                    className: "ms-3 flex-1"
                }, d.createElement("p", {
                    className: "mb-2"
                }, "You have submitted this ", null == F ? void 0 : F.type, " on ", et), d.createElement("label", {
                    htmlFor: "contentDescription"
                }, "Description"), d.createElement(h.TM, {
                    id: "contentDescription",
                    "aria-label": "Description",
                    rows: 5,
                    value: null == te ? void 0 : te.description,
                    readOnly: !0,
                    disabled: !0
                }), d.createElement("br", null), d.createElement(j, {
                    htmlFor: "rejectionReason text"
                }, "This submission was rejected"), d.createElement(D, {
                    id: "rejectionReason",
                    "aria-label": "Rejection Reason",
                    rows: 5,
                    value: null == te ? void 0 : te.rejectionReason,
                    readOnly: !0,
                    disabled: !0
                }))), d.createElement(h.$T, {
                    title: "Rejection Notice",
                    type: "dark",
                    className: "mb-0",
                    slim: !0
                }, "Thank you for participating in the Jam! Unfortunately, the submission has been rejected and will not be considered for judging.", d.createElement("br", null), "We hope to see you again in our future Jams.")), nt && d.createElement(h.fv, null, d.createElement(h.$T, {
                    type: "neutral",
                    title: "No Submission",
                    slim: !0
                }, "You have not submitted any content yet")), ot && d.createElement(h.fv, null, d.createElement(h.$T, {
                    type: "neutral",
                    title: "Replacing submission",
                    slim: !0
                }, "Select a new ", ae, " below"), d.createElement(h.$n, {
                    "aria-label": "Cancel Content Replace",
                    onClick: function() {
                        we(!1)
                    }
                }, "Cancel")), ge && d.createElement(x, {
                    "aria-label": "Selected ".concat(ae),
                    className: "flex-1 w-100 mb-2"
                }, d.createElement(S, {
                    data: Be,
                    contentType: null == F ? void 0 : F.type,
                    fieldsList: ["updated_at"],
                    showAuthor: !0
                }), d.createElement(h.fv, {
                    className: "ms-2 flex-1"
                }, d.createElement("div", {
                    className: "position-relative"
                }, d.createElement(h.TM, {
                    value: Se,
                    onChange: function(e) {
                        var t = e.target.value;
                        return ke(t)
                    },
                    placeholder: "Tell us more about this ".concat(ae, ". What makes it a good fit for the jam?"),
                    "aria-label": "Description",
                    className: "mb-2",
                    inputStyle: A,
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
                }), d.createElement(I, {
                    focused: De,
                    textColor: Le
                }, null !== (E = null == Se ? void 0 : Se.length) && void 0 !== E ? E : 0, " / 1500")), (null == Se ? void 0 : Se.length) < 100 && d.createElement(h.$T, {
                    className: "mt-0",
                    type: "error",
                    title: "Description is required",
                    slim: !0
                }, "Please tell us more about your submission."), (null == Se ? void 0 : Se.length) > 1500 && d.createElement(h.$T, {
                    className: "mt-0",
                    type: "error",
                    title: "Description is too long",
                    slim: !0
                }, "Please write fewer than 1500 characters."), d.createElement(h.$n, {
                    onClick: Ze,
                    loading: _ || K,
                    className: "mb-2",
                    disabled: (null !== (C = null == Se || null === (L = Se.trim()) || void 0 === L ? void 0 : L.length) && void 0 !== C ? C : 0) < 100,
                    positive: !0
                }, Ke), d.createElement(h.$n, {
                    onClick: function() {
                        be(null), we(!1)
                    },
                    disabled: _,
                    neutral: !0
                }, "Cancel"))), B && d.createElement(h.$T, {
                    type: "error",
                    title: "Failed to submit",
                    message: ut,
                    className: "mb-0",
                    slim: !0
                }), ee && d.createElement(h.$T, {
                    type: "error",
                    title: "Failed to remove or update",
                    message: ct,
                    className: "mb-0",
                    slim: !0
                }))), (!te || Ee) && d.createElement(h.fv, null, d.createElement("h4", {
                    className: "mb-0"
                }, at), d.createElement(h.$T, {
                    type: "info",
                    className: "mb-2",
                    title: "Submission Requirements",
                    slim: !0
                }, st), d.createElement(h.pd, {
                    type: "text",
                    placeholder: "Search your content to submit",
                    "aria-label": "Search Content",
                    value: oe,
                    onChange: function(e) {
                        var t = e.target.value,
                            a = void 0 === t ? "" : t;
                        ie(a), d.startTransition(function() {
                            ce(a), pe(10)
                        })
                    },
                    loading: Ye
                }), it && d.createElement(h.$T, {
                    type: "neutral",
                    title: "No public ".concat(ae, "s"),
                    slim: !0
                }, "No public ", ae, "s found"), lt && d.createElement(h.$T, {
                    type: "neutral",
                    title: "No results",
                    message: "No matching content found",
                    slim: !0
                }), d.createElement(h.xA, {
                    className: "mb-4"
                }, null == ze ? void 0 : ze.map(function(e) {
                    return d.createElement(k, {
                        key: e.id,
                        onClick: (t = e.id, function() {
                            var e;
                            be(t), null === (e = document.querySelector(".content-scroll")) || void 0 === e || e.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        })
                    }, d.createElement(S, {
                        data: e,
                        contentType: null == F ? void 0 : F.type,
                        fieldsList: ["updated_at"],
                        showAuthor: !0
                    }));
                    var t
                }))))) : d.createElement(w, null, d.createElement(h.$T, {
                    type: "error",
                    title: "Jam not found",
                    message: "The Jam you are looking for does not exist",
                    customButton: d.createElement(h.$n, {
                        className: "mt-3",
                        onClick: function() {
                            return q("/home/jams")
                        }
                    }, "Back to Jams")
                }))
            };
            var w = (0, o.A)(h.fv, {
                    target: "eyi9ar47"
                })({
                    name: "iano38",
                    styles: "max-width:1200px;width:100%;margin:0 auto"
                }),
                x = (0, o.A)(h.fI, {
                    target: "eyi9ar46"
                })(h.BW, "{background-color:#1e2226;border-color:#1e2226;}"),
                T = (0, o.A)(x, {
                    target: "eyi9ar45"
                })(""),
                S = (0, o.A)(h.mI, {
                    target: "eyi9ar44"
                })({
                    name: "17lbmje",
                    styles: "pointer-events:none;margin-bottom:0"
                }),
                k = (0, o.A)("div", {
                    target: "eyi9ar43"
                })("cursor:pointer;&:hover{", S, "{", h.N3, "{border-color:#054d5e!important;}", h.BW, "{border-color:#054d5e!important;}}}"),
                I = (0, o.A)("div", {
                    target: "eyi9ar42"
                })("position:absolute;bottom:0.75rem;right:1.5rem;font-size:0.75rem;color:", function(e) {
                    return e.textColor
                }, ";opacity:", function(e) {
                    return e.focused ? 1 : .5
                }, ";transition:color 250ms ease-in-out,opacity 250ms ease-in-out;background:", function(e) {
                    return e.focused ? "#07343f" : "transparent"
                }, ";border-radius:3px;padding:0.25rem 0.5rem;"),
                j = (0, o.A)("label", {
                    target: "eyi9ar41"
                })({
                    name: "z1qxtn",
                    styles: "color:var(--bs-danger)"
                }),
                D = (0, o.A)(h.TM, {
                    target: "eyi9ar40"
                })({
                    name: "1vu1jc4",
                    styles: "textarea{background:#541d22bf!important;color:white!important;border-color:var(--bs-danger)!important;}"
                })
        },
        95583(e, t, a) {
            a.d(t, {
                EP: () => y,
                GP: () => E,
                Pb: () => p,
                RM: () => A,
                RR: () => h,
                UH: () => f,
                oV: () => w,
                pl: () => T,
                tS: () => g,
                vG: () => x,
                wx: () => b
            });
            var r = a(10467),
                n = a(15184),
                o = a(64467),
                i = a(54756),
                l = a.n(i),
                s = a(89483);

            function u(e, t) {
                var a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!a) {
                    if (Array.isArray(e) || (a = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return c(e, t);
                                var a = {}.toString.call(e).slice(8, -1);
                                return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? c(e, t) : void 0
                            }
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
                for (var a = 0, r = Array(t); a < t; a++) r[a] = e[a];
                return r
            }

            function d(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), a.push.apply(a, r)
                }
                return a
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(a), !0).forEach(function(t) {
                        (0, o.A)(e, t, a[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    })
                }
                return e
            }
            var v = s.m.injectEndpoints({
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
                                invalidatesTags: (0, s.Z)(function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
                                    }]
                                })
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
                                    }].concat((0, n.A)(o ? [{
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
                                invalidatesTags: (0, s.Z)(function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
                                    }]
                                })
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
                                invalidatesTags: (0, s.Z)(function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
                                    }]
                                })
                            }),
                            deleteImpostors: e.mutation({
                                query: function(e) {
                                    var t = e.avatarId;
                                    return {
                                        url: "/avatars/".concat(t, "/impostor"),
                                        method: "DELETE"
                                    }
                                },
                                invalidatesTags: (0, s.Z)(function(e) {
                                    var t = e.avatarId;
                                    return [{
                                        type: "Avatar",
                                        id: t
                                    }, {
                                        type: "AvatarWithListingData",
                                        id: t
                                    }]
                                })
                            }),
                            getImpostorQueueStats: e.query({
                                query: function() {
                                    return {
                                        url: "/avatars/impostor/queue/stats"
                                    }
                                }
                            }),
                            getAllAvatars: e.query({
                                queryFn: (a = (0, r.A)(l().mark(function e(t, a, r, o) {
                                    var i, s, u, c, d, m, v, p, f, y, g, b, h, A, E, w, x, T, S, k, I, j, D, C, L, M, N;
                                    return l().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                i = t.sort, s = void 0 === i ? "updated" : i, u = t.order, c = void 0 === u ? "descending" : u, d = t.releaseStatus, m = void 0 === d ? "all" : d, v = t.user, p = void 0 === v ? "me" : v, f = t.organization, y = void 0 === f ? "vrchat" : f, g = t.n, b = void 0 === g ? 20 : g, h = t.featured, A = t.userId, E = t.search, w = t.tag, x = t.notag, T = t.platform, S = t.maxUnityVersion, k = t.minUnityVersion, I = t.exactUnityVersion, j = t.minAssetVersion, D = t.maxAssetVersion, C = t.exactAssetVersion, L = [], M = 0;
                                            case 3:
                                                return e.next = 6, o({
                                                    url: "avatars",
                                                    params: {
                                                        exactAssetVersion: C,
                                                        exactUnityVersion: I,
                                                        featured: h,
                                                        maxAssetVersion: D,
                                                        maxUnityVersion: S,
                                                        minAssetVersion: j,
                                                        minUnityVersion: k,
                                                        n: b,
                                                        notag: x,
                                                        offset: M,
                                                        order: c,
                                                        organization: y,
                                                        platform: T,
                                                        releaseStatus: m,
                                                        search: E,
                                                        sort: s,
                                                        tag: w,
                                                        user: p,
                                                        userId: A
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
                                                return L.push.apply(L, (0, n.A)(N.data)), M += b, e.abrupt("continue", 3);
                                            case 13:
                                                return e.abrupt("break", 16);
                                            case 16:
                                                return e.abrupt("return", {
                                                    data: L
                                                });
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                })), function(e, t, r, n) {
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
                                queryFn: (t = (0, r.A)(l().mark(function e() {
                                    var t, a, r, o, i, s, c, d, m, v, p, f, y, g = arguments;
                                    return l().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                a = (t = g.length > 0 && void 0 !== g[0] ? g[0] : {}).tag, r = t.tags, o = t.userId, i = t.groups, s = void 0 === i ? [] : i, c = g.length > 3 ? g[3] : void 0, d = [], m = u(a ? [a] : s), e.prev = 7, m.s();
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
                                                if (!(y = e.sent).error) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return e.abrupt("return", {
                                                    error: y.error
                                                });
                                            case 18:
                                                if (!(y.data.length > 0)) {
                                                    e.next = 22;
                                                    break
                                                }
                                                return d.push.apply(d, (0, n.A)(y.data)), f += 50, e.abrupt("continue", 12);
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
                                    }, e, null, [
                                        [7, 29, 32, 35]
                                    ])
                                })), function() {
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
                y = v.useEnqueueImpostorMutation,
                g = v.useGetAllAvatarsQuery,
                b = v.useGetAllAvatarStylesQuery,
                h = (v.useGetAllFavoriteAvatarsQuery, v.useGetAvatarQuery),
                A = (v.useGetFavoriteAvatarsQuery, v.useGetImpostorQueueStatsQuery),
                E = v.useSelectAvatarMutation,
                w = v.useSelectFallbackAvatarMutation,
                x = v.useSetAvatarTagsMutation,
                T = v.useUpdateAvatarMutation
        }
    }
]);
//# sourceMappingURL=109922ddf4c97f91c070fe46b2022a1db3deb3f2343d8c00f04a734d7ac147a0.js.map