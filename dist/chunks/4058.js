"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4058, 1810], {
        43862: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var a = n(45987),
                r = n(92332),
                o = n(67294),
                s = n(86646),
                i = ["hidden", "size"];
            const c = function(e) {
                var t = e.hidden,
                    n = e.size,
                    c = void 0 === n ? "2x" : n,
                    l = (0, a.Z)(e, i);
                return o.createElement("div", l, o.createElement(s.Z, {
                    icon: r.LM,
                    size: c,
                    hidden: t,
                    spin: !0,
                    pulse: !0
                }))
            }
        },
        64537: (e, t, n) => {
            n.d(t, {
                Z: () => k
            });
            var a, r = n(87462),
                o = n(4942),
                s = n(15861),
                i = n(45987),
                c = n(2909),
                l = n(7747),
                d = n(53359),
                m = n(64687),
                h = n.n(m),
                u = n(67294),
                p = n(32981),
                f = n(64258),
                w = n(86646),
                g = n(50048),
                v = ["url", "text", "title", "files", "style", "shareLabel", "copyLabel", "displayLabel"];

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var x = !(null === (a = navigator.clipboard) || void 0 === a || !a.writeText),
                N = !!navigator.canShare;
            const k = function(e) {
                var t = e.url,
                    n = e.text,
                    a = e.title,
                    o = e.files,
                    m = e.style,
                    b = e.shareLabel,
                    k = void 0 === b ? "Share" : b,
                    y = e.copyLabel,
                    I = void 0 === y ? "Copy" : y,
                    Z = e.displayLabel,
                    S = void 0 !== Z && Z,
                    L = (0, i.Z)(e, v),
                    C = (0, p.I0)(),
                    M = u.useMemo((function() {
                        return N && navigator.canShare({
                            url: t,
                            text: n,
                            title: a,
                            files: o
                        })
                    }), [N, t, n, a, o]);
                if (!x && !N) return null;
                var O = function() {
                        var e = (0, s.Z)(h().mark((function e() {
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, navigator.clipboard.writeText([a, n, t].filter(Boolean).join("\n"));
                                    case 2:
                                        C((0, f.d)({
                                            title: "Copied to clipboard",
                                            icon: c.kZ,
                                            color: "success",
                                            timeout: 5e3
                                        }));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    T = function() {
                        var e = (0, s.Z)(h().mark((function e(r) {
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r.preventDefault(), !M) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.prev = 2, e.next = 5, navigator.share({
                                            url: t,
                                            text: n,
                                            title: a,
                                            files: o
                                        });
                                    case 5:
                                        e.next = 15;
                                        break;
                                    case 7:
                                        if (e.prev = 7, e.t0 = e.catch(2), !(e.t0 instanceof DOMException && "InvalidStateError" === e.t0.name)) {
                                            e.next = 14;
                                            break
                                        }
                                        C((0, f.d)({
                                            title: "Something went wrong",
                                            icon: d.faTriangleExclamation,
                                            message: "Copying to clipboard instead",
                                            color: "danger",
                                            timeout: 5e3
                                        })), O(), e.next = 15;
                                        break;
                                    case 14:
                                        throw e.t0;
                                    case 15:
                                        e.next = 18;
                                        break;
                                    case 17:
                                        O();
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 7]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    U = M ? k : I,
                    z = M ? l.Dr : c.kZ;
                return u.createElement(g.ZP, (0, r.Z)({
                    neutral: !0,
                    style: E({
                        lineHeight: "1"
                    }, m)
                }, L, {
                    title: U,
                    onClick: T
                }), u.createElement(w.Z, {
                    icon: z,
                    className: S && "tw-mr-1"
                }), S && U)
            }
        },
        37549: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var a = n(87462),
                r = n(67294),
                o = n(89250);
            const s = function(e) {
                return function(t) {
                    var n = (0, o.TH)(),
                        s = (0, o.s0)(),
                        i = (0, o.UO)();
                    return r.createElement(e, (0, a.Z)({}, t, {
                        router: {
                            location: n,
                            navigate: s,
                            params: i
                        }
                    }))
                }
            }
        },
        81810: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => s
            });
            var a = n(67294),
                r = (n(32981), n(79655)),
                o = n(85533);
            const s = function() {
                var e = ["＞﹏＜", "(っ °Д °;)っ", "（＞人＜；）", "≡(▔﹏▔)≡", "~(>_<。)＼", ".·´¯`(>▂<)´¯`·.", "⊙﹏⊙∥", "/(ㄒoㄒ)/~~", "::>_<::", "ඞ", "(；′⌒`)", "(┬┬﹏┬┬)", "ಥ_ಥ", "X﹏X", "(T_T)", "ಥ╭╮ಥ", "UwU", "UnU", "¯\\_(ツ)_/¯", "(・へ・)", "(个_个)", "༶ඬ༝ඬ༶"];
                return a.createElement("div", {
                    className: "m-5 text-center"
                }, a.createElement(o.Z, null, "Instance not found"), a.createElement("h2", null, "This instance does not exist!"), a.createElement("h2", null, e[Math.floor(Math.random() * e.length)]), a.createElement("br", null), a.createElement("h6", null, "There is nothing else here, so why not ", a.createElement(r.rU, {
                    to: "/home"
                }, "Go Home"), "?"))
            }
        },
        94058: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => q
            });
            var a = n(15671),
                r = n(43144),
                o = n(60136),
                s = n(82963),
                i = n(61120),
                c = n(67294),
                l = n(32981),
                d = n(15861),
                m = n(97326),
                h = n(27879),
                u = n(16995),
                p = n(2909),
                f = n(68055),
                w = n(59545),
                g = n(50823),
                v = n(609),
                b = n(92332),
                E = n(64687),
                x = n.n(E),
                N = n(79655),
                k = n(3191),
                y = n(69699),
                I = n(34698),
                Z = n(60766),
                S = n(35773),
                L = n(95305),
                C = n(83505),
                M = n(9669),
                O = n.n(M),
                T = n(34226),
                U = n(85533),
                z = (n(43862), n(64537)),
                j = n(37549),
                P = n(72562),
                R = n(16278),
                $ = n(85856),
                _ = n(64358),
                A = n(81810),
                D = n(81505);

            function B(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = (0, i.Z)(e);
                    if (t) {
                        var r = (0, i.Z)(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var W = "https://vrch.at",
                H = function(e) {
                    (0, o.Z)(s, e);
                    var t, n = B(s);

                    function s(e) {
                        var t;
                        return (0, a.Z)(this, s), (t = n.call(this, e)).state = {
                            data: {},
                            error: null,
                            worldId: e.worldId,
                            instanceId: e.instanceId,
                            friendlyInstanceType: (0, _.aF)(e.instanceId),
                            shortName: null,
                            shortNameParam: e.shortName,
                            shortNameCopied: !1,
                            secureName: null,
                            secureNameCopied: !1,
                            popoverOpen: !1,
                            successfulAuth: !1,
                            showSendInviteLink: !1,
                            invitePending: !1,
                            inviteSent: !1,
                            inviteError: !1,
                            isShowingShortLinkModal: !1,
                            isShowingSecureInstanceModal: !1,
                            isShowingErrorModal: !1,
                            errorModalMessage: ""
                        }, t.onLaunch = t.onLaunch.bind((0, m.Z)(t)), t.sendInvite = t.sendInvite.bind((0, m.Z)(t)), t.copyToClipboard = t.copyToClipboard.bind((0, m.Z)(t)), t
                    }
                    return (0, r.Z)(s, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            O().get("".concat(window.endpoint, "/api/1/config")).then(function() {
                                var t = (0, d.Z)(x().mark((function t(n) {
                                    return x().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                O().get(window.apiUrl("/api/1/worlds/".concat(e.state.worldId))).then((function(t) {
                                                    e.setState({
                                                        data: t.data
                                                    })
                                                })).catch((function(t) {
                                                    console.error(t), e.setState({
                                                        error: t
                                                    })
                                                })), null != e.state.worldId && null != e.state.instanceId && O().get(window.apiUrl("/api/1/instances/".concat(e.state.worldId, ":").concat(e.state.instanceId, "/shortName?permanentify=true")), {
                                                    params: {
                                                        shortName: e.state.shortNameParam
                                                    }
                                                }).then((function(t) {
                                                    t.data.shortName && e.setState({
                                                        shortName: t.data.shortName
                                                    }), t.data.secureName && e.setState({
                                                        secureName: t.data.secureName
                                                    })
                                                })).catch((function(t) {
                                                    403 !== t.response.status ? (console.error(t), e.setState({
                                                        error: t
                                                    })) : e.setState({
                                                        shortName: null
                                                    })
                                                })), O().get(window.apiUrl("/api/1/auth/user")).then((function(t) {
                                                    e.setState({
                                                        successfulAuth: !0,
                                                        showSendInviteLink: null !== e.state.instanceId && "" !== e.state.instanceId
                                                    })
                                                })).catch((function(e) {
                                                    console.warn(e)
                                                }));
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()).catch((function(t) {
                                console.error(t), e.state.error = t, e.forceUpdate()
                            }))
                        }
                    }, {
                        key: "onLaunch",
                        value: function() {
                            (0, P.Kz)("Launch", {
                                worldId: this.state.worldId,
                                worldName: this.state.data.name,
                                occupants: this.state.data.occupants,
                                instanceId: this.state.instanceId,
                                instanceType: this.state.instanceId ? this.state.friendlyInstanceType : null,
                                launchType: this.state.instanceId ? "instance" : "new"
                            })
                        }
                    }, {
                        key: "copyToClipboard",
                        value: function(e) {
                            navigator.clipboard.writeText(e)
                        }
                    }, {
                        key: "sendInvite",
                        value: (t = (0, d.Z)(x().mark((function e() {
                            var t, n, a;
                            return x().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this.setState({
                                            invitePending: !0
                                        }), e.prev = 1, e.next = 4, O().get(window.apiUrl("/api/1/auth/user"));
                                    case 4:
                                        e.sent, this.setState({
                                            successfulAuth: !0,
                                            showSendInviteLink: null !== this.state.instanceId && "" !== this.state.instanceId
                                        }), e.next = 13;
                                        break;
                                    case 8:
                                        return e.prev = 8, e.t0 = e.catch(1), this.setState({
                                            inviteError: !0,
                                            successfulAuth: !1,
                                            showSendInviteLink: !1
                                        }), this.props.router.navigate("/home/login", {
                                            state: {
                                                redirectTo: this.props.router.location.pathname + this.props.router.location.search
                                            }
                                        }), e.abrupt("return");
                                    case 13:
                                        return e.prev = 13, e.next = 16, this.props.dispatch(R.Z.endpoints.inviteMe.initiate({
                                            worldId: this.state.worldId,
                                            instanceId: this.state.instanceId,
                                            shortName: null !== (t = this.state.shortName) && void 0 !== t ? t : this.state.secureName
                                        }));
                                    case 16:
                                        this.setState({
                                            inviteSent: !0
                                        }), e.next = 23;
                                        break;
                                    case 19:
                                        e.prev = 19, e.t1 = e.catch(13), console.error(e.t1), this.setState({
                                            errorModalMessage: null !== (n = null === (a = e.t1.response.data.error) || void 0 === a ? void 0 : a.message) && void 0 !== n ? n : "An unexpected error occured!",
                                            isShowingErrorModal: !0,
                                            inviteError: !0
                                        });
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [1, 8],
                                [13, 19]
                            ])
                        }))), function() {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, n = this,
                                a = "Invite Me";
                            if (this.state.invitePending && (a = c.createElement(T.$1, {
                                    color: "white",
                                    icon: b.LM,
                                    spin: !0
                                })), this.state.inviteSent && (a = c.createElement(T.$1, {
                                    color: "white",
                                    icon: f.LE
                                })), this.state.inviteError && (a = c.createElement(T.$1, {
                                    color: "white",
                                    icon: u.Ps
                                })), this.state.error) return 404 === (null === (t = this.state.error.response) || void 0 === t ? void 0 : t.status) ? c.createElement(A.default, null) : c.createElement("div", null, c.createElement("h1", null, "Error"), c.createElement("p", null, this.state.error.message));
                            if ((0, $.N4)(this.state.data)) return c.createElement(D.Z, null);
                            var r = "vrchat://launch?ref=vrchat.com&id=".concat(this.state.worldId).concat((0, $.N4)(this.state.instanceId) ? "" : ":".concat(this.state.instanceId)).concat(this.state.shortName || this.state.secureName ? "&shortName=".concat(null !== (e = this.state.shortName) && void 0 !== e ? e : this.state.secureName) : ""),
                                o = W || window.endpoint;
                            "/" === o[o.length - 1] && (o = o.substr(0, o.length - 1)), (0, $.N4)(this.state.shortName) ? (0, $.N4)(W) ? o += "/home/launch?worldId=".concat(this.state.worldId) : o += "/".concat(this.state.worldId) : (0, $.N4)(W) ? o += "/i/".concat(this.state.shortName) : o += "/".concat(this.state.shortName);
                            var s = W || window.endpoint;
                            return "/" === s[s.length - 1] && (s = s.substr(0, s.length - 1)), (0, $.N4)(this.state.secureName) ? (0, $.N4)(W) ? s += "/home/launch?worldId=".concat(this.state.worldId) : s += "/".concat(this.state.worldId) : (0, $.N4)(W) ? s += "/i/".concat(this.state.secureName) : s += "/".concat(this.state.secureName), c.createElement("div", {
                                className: (0, C.iv)("& h2,h3,h4,h5{text-transform:capitalize!important;}& h3{border:0;}& h4{color:#0193af;font-size:normal;}& h5{color:#0193af;font-size:normal;}& p{color:#8c8c8c;}& .container-bg{background:#111516;}& .box-shadow{border:4px solid #051d22;border-radius:10px;box-shadow:10px 10px 40px 0px rgba(0, 0, 0, 0.4);background-color:#060809;}& .navbar{font-size:1.25rem;border-top:none!important;background-image:none;}& .navbar .container{@media (min-width: 576px){max-width:540px;}@media (min-width: 768px){max-width:720px;}@media (min-width: 992px){max-width:960px;}@media (min-width: 1200px){max-width:1140px;}@media (min-width: 1920px){max-width:1920px;}}& .navbar .container .col{padding:0;}& .navbar span{padding-right:15px;color:gray;font-size:1rem;}& .navbar .sign-up-none{color:#f5b501;}& .navbar .sign-up-lg-none{color:#f5b501;font-size:1rem!important;}& .navbar .home{color:#f5b501;font-size:1rem!important;}& .logo{width:80px;}& .launch-btn{background:#f5b501;color:#ffffff;border:0;font-size:1.5rem;font-weight:bold;border-radius:25px;letter-spacing:1px;padding:5px 30px;}& .secondary-launch-btn{opacity:0.9;}& .container-margin{margin-top:2 rem!important;}& .section-bg{background-image:url(", this.state.data.imageUrl, ");background-size:cover;background-position:center;height:400px;}& .header .card-text,.header .creator-link{font-size:1.5rem;}& .header .card-title{margin:0;line-height:1;}& .header .card-text{color:#8c8c8c;}& .world-image .card-body{display:flex;}& .world-image .world-size,.world-image .world-users{align-self:flex-start;text-align:right;background:gray;width:55px;padding:0 5px;flex-direction:flex-row-reverse;margin-bottom:10px;border-radius:5px;background:#777777;}& .world-description p{font-size:1.25rem;line-height:normal;}& .world-description a.more-link{text-decoration:underline;}& .world-description .btn-primary{background:#011b22;color:#0193af;font-weight:bold;border:2px solid #0193af;border-radius:25px;letter-spacing:1px;padding:5px 30px;}& .world-share{bottom:20px;position:absolute;}& .item-img{background:#ddd;width:23.3%;margin:6px;}& .item-img img{width:100%;}& .description-height{min-height:200px;}& .share-button{cursor:pointer;}", "")
                            }, c.createElement(U.Z, null, this.state.data.name && "".concat(this.state.data.name, " - "), "Launch Instance"), c.createElement(y.Z, {
                                isOpen: this.state.isShowingSecureInstanceModal,
                                toggle: function() {
                                    n.setState({
                                        isShowingSecureInstanceModal: !1
                                    })
                                },
                                size: "xl"
                            }, c.createElement(I.Z, {
                                className: (0, C.iv)({
                                    name: "154v9b4",
                                    styles: "position:absolute;right:0"
                                }),
                                onClick: function() {
                                    n.setState({
                                        isShowingSecureInstanceModal: !1
                                    })
                                }
                            }, c.createElement(T.$1, {
                                color: "white",
                                icon: w.NB
                            })), c.createElement("h2", {
                                className: "text-center mt-4"
                            }, "Link Options"), c.createElement(Z.Z, null, c.createElement("div", {
                                className: "me-3 ms-3"
                            }, c.createElement(S.Z, {
                                className: "mb-5"
                            }, c.createElement(L.Z, {
                                md: 1
                            }, c.createElement(T.$1, {
                                icon: v.by,
                                size: "3x",
                                className: (0, C.iv)({
                                    name: "17v5ru9",
                                    styles: "width:42px!important"
                                })
                            })), c.createElement(L.Z, {
                                md: 11
                            }, c.createElement("h2", null, "Locked Link"), c.createElement("p", null, "This link will follow the instance rules. If the link is shared, others also follow the rules to join.", c.createElement("br", null), c.createElement("br", null), c.createElement("strong", null, "Friends+: "), "You must have a friend in the instance to join.", c.createElement("br", null), c.createElement("strong", null, "Friends: "), "You must be friends with the instance creator to join.", c.createElement("br", null), c.createElement("br", null), c.createElement("strong", null, "Others: "), "Invite, Invite+, and Public instances are not affected by Locked Links.", c.createElement("br", null), c.createElement("br", null), "A Locked Link to an Invite or Invite+ instance is only usable by you, so it might not be that useful."))), c.createElement(S.Z, null, c.createElement(L.Z, {
                                md: 1
                            }, c.createElement(T.$1, {
                                icon: g._1,
                                size: "3x",
                                className: (0, C.iv)({
                                    name: "17v5ru9",
                                    styles: "width:42px!important"
                                })
                            })), c.createElement(L.Z, {
                                md: 11
                            }, c.createElement("h2", null, "Unlocked Link"), c.createElement("p", null, "This link will ignore the instances rules. Anyone with this link can join the instance. If the link is shared, that person can join too.", c.createElement("br", null), c.createElement("br", null), c.createElement("strong", null, "We do not recommend the usage of Unlocked Links."))))))), c.createElement(y.Z, {
                                className: (0, C.cx)((0, C.iv)({
                                    name: "15xgxri",
                                    styles: "max-width:700px"
                                })),
                                isOpen: this.state.isShowingShortLinkModal,
                                toggle: function() {
                                    n.setState({
                                        isShowingShortLinkModal: !1
                                    })
                                },
                                size: "lg"
                            }, c.createElement(I.Z, {
                                className: (0, C.iv)({
                                    name: "154v9b4",
                                    styles: "position:absolute;right:0"
                                }),
                                onClick: function() {
                                    n.setState({
                                        isShowingShortLinkModal: !1
                                    })
                                }
                            }, c.createElement(T.$1, {
                                color: "white",
                                icon: w.NB
                            })), c.createElement("h2", {
                                className: "text-center mt-4"
                            }, "Woah there! 😲"), c.createElement(Z.Z, null, c.createElement("p", {
                                className: "text-center ms-5 me-5"
                            }, "Unlocked Links allow ", c.createElement("span", {
                                className: "font-italic"
                            }, "anyone"), " to join the instance. Be careful who you share this link with, and who they might share the link with in turn.", " ", c.createElement("strong", {
                                className: "font-weight-bolder"
                            }, c.createElement("br", null), "We do not recommend the use of Unlocked Links.")), void 0 !== o && this.state.shortName && c.createElement("h4", {
                                className: "text-center"
                            }, c.createElement("span", {
                                className: "card-text"
                            }, "Unlocked Link: "), c.createElement("a", {
                                className: "font-weight-normal creator-link",
                                href: o
                            }, o), c.createElement(I.Z, {
                                className: "ms-2",
                                onClick: function() {
                                    n.copyToClipboard(o), n.setState({
                                        shortNameCoppied: !0
                                    }, (function() {
                                        setTimeout((function() {
                                            n.state.shortNameCoppied && n.setState({
                                                shortNameCoppied: !1
                                            })
                                        }), 3e3)
                                    }))
                                },
                                title: "copy unlocked link"
                            }, c.createElement(T.$1, {
                                color: "white",
                                icon: this.state.shortNameCoppied ? f.LE : p.kZ
                            }))))), c.createElement(y.Z, {
                                isOpen: this.state.isShowingErrorModal,
                                toggle: function() {
                                    n.setState({
                                        isShowingErrorModal: !1
                                    })
                                },
                                size: "lg"
                            }, c.createElement(I.Z, {
                                className: (0, C.iv)({
                                    name: "154v9b4",
                                    styles: "position:absolute;right:0"
                                }),
                                onClick: function() {
                                    n.setState({
                                        isShowingErrorModal: !1
                                    })
                                }
                            }, c.createElement(T.$1, {
                                color: "white",
                                icon: w.NB
                            })), c.createElement("h2", {
                                className: "text-center mt-4"
                            }, "Aw jeez gosh dang! 🤔"), c.createElement(Z.Z, null, c.createElement("p", {
                                className: "text-center"
                            }, c.createElement("strong", null, this.state.errorModalMessage)))), c.createElement("div", {
                                className: (0, C.iv)({
                                    name: "16x1f7a",
                                    styles: "max-width:1300px;margin:auto;padding:0 45px"
                                })
                            }, c.createElement(S.Z, {
                                className: "navbar fixed-top box-shadow"
                            }, c.createElement("div", {
                                className: "".concat((0, C.iv)({
                                    name: "x1pt9q",
                                    styles: "max-width:1250px!important"
                                }), " m-auto container w-100 pl-3 pr-3")
                            }, c.createElement("div", {
                                className: "col"
                            }, c.createElement(N.rU, {
                                to: "/home"
                            }, c.createElement("img", {
                                className: "logo",
                                alt: "VRChat Logo",
                                src: "https://assets.vrchat.com/www/brand/vrchat-logo-white-transparent-crop-background.png"
                            }))), !1 === this.state.successfulAuth && c.createElement("div", null, c.createElement("div", {
                                className: "d-lg-none"
                            }, c.createElement("div", {
                                className: "col text-center"
                            }, c.createElement(N.rU, {
                                className: "sign-up-lg-none",
                                to: "/register",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "Don't Have a VRChat Account? Create One Now!"))), c.createElement("div", {
                                className: "d-none d-lg-block"
                            }, c.createElement("div", {
                                className: "col text-center"
                            }, c.createElement(N.rU, {
                                className: "sign-up-none",
                                to: "/register",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "Don't Have a VRChat Account? Create One Now!")))), c.createElement("div", {
                                className: "col text-end"
                            }, c.createElement("a", {
                                className: "home",
                                href: "https://hello.vrchat.com",
                                target: "_blank",
                                rel: "noreferrer"
                            }, "About VRChat")))), c.createElement(S.Z, {
                                className: "header card mb-4 box-shadow",
                                style: {
                                    marginTop: "70px"
                                }
                            }, c.createElement("div", {
                                className: "card-body d-flex flex-wrap"
                            }, c.createElement("div", {
                                className: (0, C.iv)({
                                    name: "8becsz",
                                    styles: "flex-grow:1000"
                                })
                            }, c.createElement("h2", {
                                className: "card-title"
                            }, c.createElement(N.rU, {
                                to: "/home/world/".concat(this.state.worldId)
                            }, this.state.data.name), " - ".concat(this.state.friendlyInstanceType)), c.createElement("span", {
                                className: "card-text font-weight-normal"
                            }, "Created by:", " ", c.createElement(N.rU, {
                                className: "font-weight-normal creator-link",
                                to: "/home/user/".concat(this.state.data.authorId),
                                target: "_blank",
                                rel: "noreferrer"
                            }, this.state.data.authorName)), void 0 !== s && this.state.secureName && c.createElement("div", {
                                className: "d-flex"
                            }, c.createElement("span", {
                                className: "card-text font-weight-normal"
                            }, "Locked Link:", " ", c.createElement("a", {
                                className: "font-weight-normal creator-link",
                                href: s
                            }, s)), c.createElement(I.Z, {
                                className: "ms-2",
                                onClick: function() {
                                    n.copyToClipboard(s), n.setState({
                                        secureNameCoppied: !0
                                    }, (function() {
                                        setTimeout((function() {
                                            n.state.secureNameCoppied && n.setState({
                                                secureNameCoppied: !1
                                            })
                                        }), 3e3)
                                    }))
                                },
                                title: "copy locked link"
                            }, this.state.secureNameCoppied ? c.createElement(T.$1, {
                                color: "white",
                                icon: f.LE
                            }) : c.createElement(T.$1, {
                                color: "white",
                                icon: p.kZ
                            }))), void 0 !== o && this.state.shortName && c.createElement("div", {
                                className: "d-flex mt-4"
                            }, c.createElement(I.Z, {
                                className: "font-weight-bold text-white",
                                onClick: function() {
                                    n.setState({
                                        isShowingShortLinkModal: !0
                                    })
                                }
                            }, "Get Unlocked Link"), c.createElement(I.Z, {
                                className: "ms-2",
                                onClick: function() {
                                    n.setState({
                                        isShowingSecureInstanceModal: !0
                                    })
                                }
                            }, " ", c.createElement(T.$1, {
                                color: "white",
                                icon: u.Ps
                            }), " "))), c.createElement("div", {
                                className: "".concat((0, C.iv)({
                                    name: "1qycygp",
                                    styles: "flex:1 0 195px;max-width:240px"
                                }), " flex-shrink-1 text-left")
                            }, c.createElement("h2", null, c.createElement(I.Z, {
                                href: r,
                                onClick: this.onLaunch,
                                className: "btn btn-primary launch-btn uppercase w-100"
                            }, "Launch World")), c.createElement("h2", null, c.createElement(I.Z, {
                                onClick: this.sendInvite,
                                className: "btn-primary launch-btn secondary-launch-btn w-100"
                            }, a))))), c.createElement(S.Z, {
                                className: "world-image card mb-4 section-bg box-shadow"
                            }, c.createElement("div", {
                                className: "card-body justify-content-end align-self-end"
                            }, c.createElement("div", {
                                className: "world-users"
                            }, c.createElement(T.$1, {
                                color: "white",
                                icon: h.IL,
                                className: "me-2"
                            }), this.state.data.occupants))), c.createElement(S.Z, null, c.createElement("div", {
                                className: "col-12 card mb-4 box-shadow description-height"
                            }, c.createElement("div", {
                                className: "card-body d-flex"
                            }, c.createElement("div", {
                                className: "w-100"
                            }, c.createElement("h4", {
                                className: "card-title font-weight-normal"
                            }, "Description"), c.createElement("p", {
                                className: "card-text"
                            }, this.state.data.description), c.createElement("div", {
                                className: "world-share d-inline-flex"
                            }, c.createElement("span", {
                                className: "me-2"
                            }, "Share this world"), c.createElement(z.Z, {
                                text: "#MadeWithVRChat",
                                url: "".concat(window.endpoint, "/home/launch?worldId=").concat(this.state.worldId),
                                shareLabel: "Share This World",
                                copyLabel: "Copy Link to This World"
                            }))))), this.state.data.previewYoutubeId && c.createElement("div", {
                                className: "card flex-grow-1 mb-4 box-shadow"
                            }, c.createElement("div", {
                                className: "p-1"
                            }, c.createElement(k.Z, {
                                videoId: this.state.data.previewYoutubeId,
                                opts: {
                                    width: "100%"
                                }
                            }))))))
                        }
                    }]), s
                }(c.Component);
            const V = (0, j.Z)((0, l.$j)()(H));

            function Y(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = (0, i.Z)(e);
                    if (t) {
                        var r = (0, i.Z)(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else n = a.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var F = function(e) {
                (0, o.Z)(n, e);
                var t = Y(n);

                function n(e) {
                    var r;
                    (0, a.Z)(this, n), r = t.call(this, e);
                    var o = new URL(document.location).searchParams,
                        s = o.get("worldId"),
                        i = o.get("instanceId"),
                        c = o.get("shortName");
                    return r.state = {
                        worldId: s,
                        instanceId: i,
                        shortName: c
                    }, r
                }
                return (0, r.Z)(n, [{
                    key: "render",
                    value: function() {
                        return c.createElement(V, {
                            worldId: this.state.worldId,
                            instanceId: this.state.instanceId,
                            shortName: this.state.shortName
                        })
                    }
                }]), n
            }(c.Component);
            const q = (0, l.$j)()(F)
        }
    }
]);
//# sourceMappingURL=d49222e48d69130d5ab5d07d40ce455f64410efecf581b37075a2476f3764e3c.js.map