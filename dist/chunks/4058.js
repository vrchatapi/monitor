"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4058, 1810], {
        64537: (e, t, a) => {
            a.d(t, {
                Z: () => k
            });
            var n, r = a(87462),
                o = a(4942),
                s = a(15861),
                i = a(45987),
                c = a(2909),
                l = a(7747),
                d = a(53359),
                m = a(64687),
                h = a.n(m),
                u = a(67294),
                p = a(32981),
                f = a(64258),
                g = a(86646),
                w = a(50048),
                v = ["url", "text", "title", "files", "style", "shareLabel", "copyLabel", "displayLabel"];

            function b(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(a), !0).forEach((function(t) {
                        (0, o.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : b(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var x = !(null === (n = navigator.clipboard) || void 0 === n || !n.writeText),
                N = !!navigator.canShare;
            const k = function(e) {
                var t = e.url,
                    a = e.text,
                    n = e.title,
                    o = e.files,
                    m = e.style,
                    b = e.shareLabel,
                    k = void 0 === b ? "Share" : b,
                    y = e.copyLabel,
                    I = void 0 === y ? "Copy" : y,
                    S = e.displayLabel,
                    Z = void 0 !== S && S,
                    L = (0, i.Z)(e, v),
                    C = (0, p.I0)(),
                    M = u.useMemo((function() {
                        return N && navigator.canShare({
                            url: t,
                            text: a,
                            title: n,
                            files: o
                        })
                    }), [N, t, a, n, o]);
                if (!x && !N) return null;
                var O = function() {
                        var e = (0, s.Z)(h().mark((function e() {
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, navigator.clipboard.writeText([n, a, t].filter(Boolean).join("\n"));
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
                                            text: a,
                                            title: n,
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
                    j = M ? k : I,
                    U = M ? l.Dr : c.kZ;
                return u.createElement(w.ZP, (0, r.Z)({
                    neutral: !0,
                    style: E({
                        lineHeight: "1"
                    }, m)
                }, L, {
                    title: j,
                    onClick: T
                }), u.createElement(g.Z, {
                    icon: U,
                    className: Z && "tw-mr-1"
                }), Z && j)
            }
        },
        37549: (e, t, a) => {
            a.d(t, {
                Z: () => s
            });
            var n = a(87462),
                r = a(67294),
                o = a(89250);
            const s = function(e) {
                return function(t) {
                    var a = (0, o.TH)(),
                        s = (0, o.s0)(),
                        i = (0, o.UO)();
                    return r.createElement(e, (0, n.Z)({}, t, {
                        router: {
                            location: a,
                            navigate: s,
                            params: i
                        }
                    }))
                }
            }
        },
        81810: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => s
            });
            var n = a(67294),
                r = (a(32981), a(79655)),
                o = a(85533);
            const s = function() {
                var e = ["＞﹏＜", "(っ °Д °;)っ", "（＞人＜；）", "≡(▔﹏▔)≡", "~(>_<。)＼", ".·´¯`(>▂<)´¯`·.", "⊙﹏⊙∥", "/(ㄒoㄒ)/~~", "::>_<::", "ඞ", "(；′⌒`)", "(┬┬﹏┬┬)", "ಥ_ಥ", "X﹏X", "(T_T)", "ಥ╭╮ಥ", "UwU", "UnU", "¯\\_(ツ)_/¯", "(・へ・)", "(个_个)", "༶ඬ༝ඬ༶"];
                return n.createElement("div", {
                    className: "m-5 text-center"
                }, n.createElement(o.Z, null, "Instance not found"), n.createElement("h2", null, "This instance does not exist!"), n.createElement("h2", null, e[Math.floor(Math.random() * e.length)]), n.createElement("br", null), n.createElement("h6", null, "There is nothing else here, so why not ", n.createElement(r.rU, {
                    to: "/home"
                }, "Go Home"), "?"))
            }
        },
        94058: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => X
            });
            var n = a(15671),
                r = a(43144),
                o = a(60136),
                s = a(82963),
                i = a(61120),
                c = a(67294),
                l = a(32981),
                d = a(15861),
                m = a(97326),
                h = a(27879),
                u = a(16995),
                p = a(2909),
                f = a(68055),
                g = a(59545),
                w = a(50823),
                v = a(609),
                b = a(92332),
                E = a(64687),
                x = a.n(E),
                N = a(79655),
                k = a(3191),
                y = a(69699),
                I = a(34698),
                S = a(60766),
                Z = a(35773),
                L = a(95305),
                C = a(83505),
                M = a(9669),
                O = a.n(M),
                T = a(90924),
                j = a(96985),
                U = a(85533),
                P = a(64537),
                A = a(37549),
                z = a(80646),
                R = a(12227),
                $ = a(16278),
                _ = a(85856),
                D = a(64358),
                B = a(81810),
                W = a(81505);

            function G(e) {
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
                    var a, n = (0, i.Z)(e);
                    if (t) {
                        var r = (0, i.Z)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return (0, s.Z)(this, a)
                }
            }
            var V = "https://vrch.at",
                F = function(e) {
                    (0, o.Z)(s, e);
                    var t, a = G(s);

                    function s(e) {
                        var t;
                        return (0, n.Z)(this, s), (t = a.call(this, e)).state = {
                            data: {},
                            error: null,
                            worldId: e.worldId,
                            instanceId: e.instanceId,
                            friendlyInstanceType: (0, D.aF)(e.instanceId),
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
                            errorModalMessage: "",
                            hasAgeGate: (0, R.YW)(e.instanceId),
                            isAgeGated: !1
                        }, t.onLaunch = t.onLaunch.bind((0, m.Z)(t)), t.sendInvite = t.sendInvite.bind((0, m.Z)(t)), t.copyToClipboard = t.copyToClipboard.bind((0, m.Z)(t)), t
                    }
                    return (0, r.Z)(s, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            O().get(window.apiUrl("/api/1/worlds/".concat(this.state.worldId))).then((function(t) {
                                e.setState({
                                    data: t.data
                                })
                            })).catch((function(t) {
                                console.error(t), e.setState({
                                    error: t
                                })
                            })), null != this.state.worldId && null != this.state.instanceId && O().get(window.apiUrl("/api/1/instances/".concat(this.state.worldId, ":").concat(this.state.instanceId, "/shortName?permanentify=true")), {
                                params: {
                                    shortName: this.state.shortNameParam
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
                                }), e.setState({
                                    isAgeGated: (0, R.PF)(t.data, e.state.instanceId)
                                })
                            })).catch((function(e) {
                                console.warn(e)
                            }))
                        }
                    }, {
                        key: "onLaunch",
                        value: function() {
                            (0, z.j)("Launch", {
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
                            var t, a, n, r, o, s, i;
                            return x().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this.setState({
                                            invitePending: !0
                                        }), e.prev = 1, e.next = 4, O().get(window.apiUrl("/api/1/auth/user"));
                                    case 4:
                                        this.setState({
                                            successfulAuth: !0,
                                            showSendInviteLink: null !== this.state.instanceId && "" !== this.state.instanceId
                                        }), e.next = 12;
                                        break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(1), this.setState({
                                            inviteError: !0,
                                            successfulAuth: !1,
                                            showSendInviteLink: !1
                                        }), this.props.router.navigate("/home/login", {
                                            state: {
                                                redirectTo: this.props.router.location.pathname + this.props.router.location.search
                                            }
                                        }), e.abrupt("return");
                                    case 12:
                                        return e.prev = 12, e.next = 15, this.props.dispatch($.Z.endpoints.inviteMe.initiate({
                                            worldId: this.state.worldId,
                                            instanceId: this.state.instanceId,
                                            shortName: null !== (t = this.state.shortName) && void 0 !== t ? t : this.state.secureName
                                        }));
                                    case 15:
                                        a = e.sent, (n = a.error) ? (console.error(n), this.setState({
                                            errorModalMessage: null !== (r = null === (o = n.data.error) || void 0 === o ? void 0 : o.message) && void 0 !== r ? r : "An unexpected error occured!",
                                            isShowingErrorModal: !0,
                                            inviteError: !0
                                        })) : this.setState({
                                            inviteSent: !0
                                        }), e.next = 24;
                                        break;
                                    case 20:
                                        e.prev = 20, e.t1 = e.catch(12), console.error(e.t1), this.setState({
                                            errorModalMessage: null !== (s = null === (i = e.t1.response.data.error) || void 0 === i ? void 0 : i.message) && void 0 !== s ? s : "An unexpected error occured!",
                                            isShowingErrorModal: !0,
                                            inviteError: !0
                                        });
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [1, 7],
                                [12, 20]
                            ])
                        }))), function() {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a = this,
                                n = "Invite Me";
                            if (this.state.invitePending && (n = c.createElement(j.$1, {
                                    color: "white",
                                    icon: b.LM,
                                    spin: !0
                                })), this.state.inviteSent && (n = c.createElement(j.$1, {
                                    color: "white",
                                    icon: f.LE
                                })), this.state.inviteError && (n = c.createElement(j.$1, {
                                    color: "white",
                                    icon: u.Ps
                                })), this.state.error) return 404 === (null === (t = this.state.error.response) || void 0 === t ? void 0 : t.status) ? c.createElement(B.default, null) : c.createElement("div", null, c.createElement("h1", null, "Error"), c.createElement("p", null, this.state.error.message));
                            if ((0, _.N4)(this.state.data)) return c.createElement(W.Z, null);
                            var r = "vrchat://launch?ref=vrchat.com&id=".concat(this.state.worldId).concat((0, _.N4)(this.state.instanceId) ? "" : ":".concat(this.state.instanceId)).concat(this.state.shortName || this.state.secureName ? "&shortName=".concat(null !== (e = this.state.shortName) && void 0 !== e ? e : this.state.secureName) : "", "&attach=1"),
                                o = V || window.endpoint;
                            "/" === o[o.length - 1] && (o = o.substr(0, o.length - 1)), (0, _.N4)(this.state.shortName) ? (0, _.N4)(V) ? o += "/home/launch?worldId=".concat(this.state.worldId) : o += "/".concat(this.state.worldId) : (0, _.N4)(V) ? o += "/i/".concat(this.state.shortName) : o += "/".concat(this.state.shortName);
                            var s = V || window.endpoint;
                            return "/" === s[s.length - 1] && (s = s.substr(0, s.length - 1)), (0, _.N4)(this.state.secureName) ? (0, _.N4)(V) ? s += "/home/launch?worldId=".concat(this.state.worldId) : s += "/".concat(this.state.worldId) : (0, _.N4)(V) ? s += "/i/".concat(this.state.secureName) : s += "/".concat(this.state.secureName), c.createElement("div", {
                                className: (0, C.iv)("& h2,h3,h4,h5{text-transform:capitalize!important;}& h3{border:0;}& h4{color:#0193af;font-size:normal;}& h5{color:#0193af;font-size:normal;}& p{color:#8c8c8c;}& .container-bg{background:#111516;}& .box-shadow{border:4px solid #051d22;border-radius:10px;box-shadow:10px 10px 40px 0px rgba(0, 0, 0, 0.4);background-color:#060809;}& .navbar{font-size:1.25rem;border-top:none!important;background-image:none;}& .navbar .container{@media (min-width: 576px){max-width:540px;}@media (min-width: 768px){max-width:720px;}@media (min-width: 992px){max-width:960px;}@media (min-width: 1200px){max-width:1140px;}@media (min-width: 1920px){max-width:1920px;}}& .navbar .container .col{padding:0;}& .navbar span{padding-right:15px;color:gray;font-size:1rem;}& .navbar .sign-up-none{color:#f5b501;}& .navbar .sign-up-lg-none{color:#f5b501;font-size:1rem!important;}& .navbar .home{color:#f5b501;font-size:1rem!important;}& .logo{width:80px;}& .launch-btn{background:#f5b501;color:#ffffff;border:0;font-size:1.5rem;font-weight:bold;border-radius:25px;letter-spacing:1px;padding:5px 30px;}& .launch-btn:disabled{background:#777777;}& .secondary-launch-btn{opacity:0.9;}& .container-margin{margin-top:2 rem!important;}& .section-bg{background-image:url(", this.state.data.imageUrl, ");background-size:cover;background-position:center;height:400px;}& .header .card-text,.header .creator-link{font-size:1.5rem;}& .header .card-title{margin:0;line-height:1;}& .header .card-text{color:#8c8c8c;}& .world-image .card-body{display:flex;}& .world-image .world-size,.world-image .world-users{align-self:flex-start;text-align:right;background:gray;width:55px;padding:0 5px;flex-direction:flex-row-reverse;margin-bottom:10px;border-radius:5px;background:#777777;}& .world-description p{font-size:1.25rem;line-height:normal;}& .world-description a.more-link{text-decoration:underline;}& .world-description .btn-primary{background:#011b22;color:#0193af;font-weight:bold;border:2px solid #0193af;border-radius:25px;letter-spacing:1px;padding:5px 30px;}& .world-share{bottom:20px;position:absolute;}& .item-img{background:#ddd;width:23.3%;margin:6px;}& .item-img img{width:100%;}& .description-height{min-height:200px;}& .share-button{cursor:pointer;}", "")
                            }, c.createElement(U.Z, null, this.state.data.name && "".concat(this.state.data.name, " - "), "Launch Instance"), c.createElement(y.Z, {
                                isOpen: this.state.isShowingSecureInstanceModal,
                                toggle: function() {
                                    a.setState({
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
                                    a.setState({
                                        isShowingSecureInstanceModal: !1
                                    })
                                }
                            }, c.createElement(j.$1, {
                                color: "white",
                                icon: g.NB
                            })), c.createElement("h2", {
                                className: "text-center mt-4"
                            }, "Link Options"), c.createElement(S.Z, null, c.createElement("div", {
                                className: "me-3 ms-3"
                            }, c.createElement(Z.Z, {
                                className: "mb-5"
                            }, c.createElement(L.Z, {
                                md: 1
                            }, c.createElement(j.$1, {
                                icon: v.by,
                                size: "3x",
                                className: (0, C.iv)({
                                    name: "17v5ru9",
                                    styles: "width:42px!important"
                                })
                            })), c.createElement(L.Z, {
                                md: 11
                            }, c.createElement("h2", null, "Locked Link"), c.createElement("p", null, "This link will follow the instance rules. If the link is shared, others also follow the rules to join.", c.createElement("br", null), c.createElement("br", null), c.createElement("strong", null, "Friends+: "), "You must have a friend in the instance to join.", c.createElement("br", null), c.createElement("strong", null, "Friends: "), "You must be friends with the instance creator to join.", c.createElement("br", null), c.createElement("br", null), c.createElement("strong", null, "Others: "), "Invite, Invite+, and Public instances are not affected by Locked Links.", c.createElement("br", null), c.createElement("br", null), "A Locked Link to an Invite or Invite+ instance is only usable by you, so it might not be that useful."))), c.createElement(Z.Z, null, c.createElement(L.Z, {
                                md: 1
                            }, c.createElement(j.$1, {
                                icon: w._1,
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
                                    a.setState({
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
                                    a.setState({
                                        isShowingShortLinkModal: !1
                                    })
                                }
                            }, c.createElement(j.$1, {
                                color: "white",
                                icon: g.NB
                            })), c.createElement("h2", {
                                className: "text-center mt-4"
                            }, "Woah there! 😲"), c.createElement(S.Z, null, c.createElement("p", {
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
                                    a.copyToClipboard(o), a.setState({
                                        shortNameCoppied: !0
                                    }, (function() {
                                        setTimeout((function() {
                                            a.state.shortNameCoppied && a.setState({
                                                shortNameCoppied: !1
                                            })
                                        }), 3e3)
                                    }))
                                },
                                title: "copy unlocked link"
                            }, c.createElement(j.$1, {
                                color: "white",
                                icon: this.state.shortNameCoppied ? f.LE : p.kZ
                            }))))), c.createElement(y.Z, {
                                isOpen: this.state.isShowingErrorModal,
                                toggle: function() {
                                    a.setState({
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
                                    a.setState({
                                        isShowingErrorModal: !1
                                    })
                                }
                            }, c.createElement(j.$1, {
                                color: "white",
                                icon: g.NB
                            })), c.createElement("h2", {
                                className: "text-center mt-4"
                            }, "Aw jeez gosh dang! 🤔"), c.createElement(S.Z, null, c.createElement("p", {
                                className: "text-center"
                            }, c.createElement("strong", null, this.state.errorModalMessage)))), c.createElement("div", {
                                className: (0, C.iv)({
                                    name: "16x1f7a",
                                    styles: "max-width:1300px;margin:auto;padding:0 45px"
                                })
                            }, c.createElement(Z.Z, {
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
                            }, "About VRChat")))), c.createElement(Z.Z, {
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
                            }, this.state.data.authorName)), this.state.hasAgeGate && c.createElement("div", {
                                className: "card-text font-weight-normal",
                                title: "Age Verification Required"
                            }, c.createElement(T.Z, null)), void 0 !== s && this.state.secureName && c.createElement("div", {
                                className: "d-flex"
                            }, c.createElement("span", {
                                className: "card-text font-weight-normal"
                            }, "Locked Link:", " ", c.createElement("a", {
                                className: "font-weight-normal creator-link",
                                href: s
                            }, s)), c.createElement(I.Z, {
                                className: "ms-2",
                                onClick: function() {
                                    a.copyToClipboard(s), a.setState({
                                        secureNameCoppied: !0
                                    }, (function() {
                                        setTimeout((function() {
                                            a.state.secureNameCoppied && a.setState({
                                                secureNameCoppied: !1
                                            })
                                        }), 3e3)
                                    }))
                                },
                                title: "copy locked link"
                            }, this.state.secureNameCoppied ? c.createElement(j.$1, {
                                color: "white",
                                icon: f.LE
                            }) : c.createElement(j.$1, {
                                color: "white",
                                icon: p.kZ
                            }))), void 0 !== o && this.state.shortName && c.createElement("div", {
                                className: "d-flex mt-4"
                            }, c.createElement(I.Z, {
                                className: "font-weight-bold text-white",
                                onClick: function() {
                                    a.setState({
                                        isShowingShortLinkModal: !0
                                    })
                                }
                            }, "Get Unlocked Link"), c.createElement(I.Z, {
                                className: "ms-2",
                                onClick: function() {
                                    a.setState({
                                        isShowingSecureInstanceModal: !0
                                    })
                                }
                            }, " ", c.createElement(j.$1, {
                                color: "white",
                                icon: u.Ps
                            }), " "))), c.createElement("div", {
                                className: "".concat((0, C.iv)({
                                    name: "1qycygp",
                                    styles: "flex:1 0 195px;max-width:240px"
                                }), " flex-shrink-1 text-left")
                            }, this.state.isAgeGated ? c.createElement("h2", null, c.createElement(I.Z, {
                                disabled: !0,
                                className: "btn-primary launch-btn secondary-launch-btn w-100"
                            }, "Age Verification Required (18+)")) : c.createElement(c.Fragment, null, c.createElement("h2", null, c.createElement(I.Z, {
                                href: r,
                                onClick: this.onLaunch,
                                className: "btn btn-primary launch-btn uppercase w-100"
                            }, "Launch World")), c.createElement("h2", null, c.createElement(I.Z, {
                                onClick: this.sendInvite,
                                className: "btn-primary launch-btn secondary-launch-btn w-100"
                            }, n)))))), c.createElement(Z.Z, {
                                className: "world-image card mb-4 section-bg box-shadow"
                            }, c.createElement("div", {
                                className: "card-body justify-content-end align-self-end"
                            }, c.createElement("div", {
                                className: "world-users"
                            }, c.createElement(j.$1, {
                                color: "white",
                                icon: h.IL,
                                className: "me-2"
                            }), this.state.data.occupants))), c.createElement(Z.Z, null, c.createElement("div", {
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
                            }, "Share this world"), c.createElement(P.Z, {
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
            const H = (0, A.Z)((0, l.$j)()(F));

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
                    var a, n = (0, i.Z)(e);
                    if (t) {
                        var r = (0, i.Z)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return (0, s.Z)(this, a)
                }
            }
            var q = function(e) {
                (0, o.Z)(a, e);
                var t = Y(a);

                function a(e) {
                    var r;
                    (0, n.Z)(this, a), r = t.call(this, e);
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
                return (0, r.Z)(a, [{
                    key: "render",
                    value: function() {
                        return c.createElement(H, {
                            worldId: this.state.worldId,
                            instanceId: this.state.instanceId,
                            shortName: this.state.shortName
                        })
                    }
                }]), a
            }(c.Component);
            const X = (0, l.$j)()(q)
        }
    }
]);
//# sourceMappingURL=c32931e736a07e1a0b1d0486f4953ac01b96d88ca4983d2a18e8090c2f9be91f.js.map