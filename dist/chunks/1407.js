"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1407], {
        4015(e, t, a) {
            a.d(t, {
                A: () => l
            });
            var n = a(9417),
                i = a(77387),
                r = a(96540);

            function s(e) {
                var t = e && e.ownerDocument || document;
                return {
                    document: t,
                    window: t.defaultView || t.parentWindow || window
                }
            }

            function c(e) {
                return e || document.head
            }
            var o = "hcaptcha-api-script-id",
                h = "hcaptchaOnLoad",
                p = [],
                d = function(e) {
                    void 0 === e && (e = {});
                    var t = c(e.scriptLocation);
                    delete e.scriptLocation;
                    var a = s(t),
                        n = p.find(function(e) {
                            return e.scope === a.window
                        });
                    if (a.document.getElementById(o) && n) return n.promise;
                    var i = new Promise(function(n, i) {
                        a.window[h] = n;
                        var r = e.apihost || "https://js.hcaptcha.com";
                        delete e.apihost;
                        var s = a.document.createElement("script");
                        s.id = o, s.src = r + "/1/api.js?render=explicit&onload=" + h, s.async = void 0 === e.loadAsync || e.loadAsync, delete e.loadAsync, s.onerror = function(e) {
                            return i("script-error")
                        };
                        var c = function(e) {
                            return Object.entries(e).filter(function(e) {
                                e[0];
                                var t = e[1];
                                return t || !1 === t
                            }).map(function(e) {
                                var t = e[0],
                                    a = e[1];
                                return encodeURIComponent(t) + "=" + encodeURIComponent(a)
                            }).join("&")
                        }(e);
                        s.src += "" !== c ? "&" + c : "", t.appendChild(s)
                    });
                    return p.push({
                        promise: i,
                        scope: a.window
                    }), i
                };
            const l = function(e) {
                function t(t) {
                    var a;
                    return (a = e.call(this, t) || this)._hcaptcha = void 0, a.renderCaptcha = a.renderCaptcha.bind((0, n.A)(a)), a.resetCaptcha = a.resetCaptcha.bind((0, n.A)(a)), a.removeCaptcha = a.removeCaptcha.bind((0, n.A)(a)), a.isReady = a.isReady.bind((0, n.A)(a)), a.loadCaptcha = a.loadCaptcha.bind((0, n.A)(a)), a.handleOnLoad = a.handleOnLoad.bind((0, n.A)(a)), a.handleSubmit = a.handleSubmit.bind((0, n.A)(a)), a.handleExpire = a.handleExpire.bind((0, n.A)(a)), a.handleError = a.handleError.bind((0, n.A)(a)), a.handleOpen = a.handleOpen.bind((0, n.A)(a)), a.handleClose = a.handleClose.bind((0, n.A)(a)), a.handleChallengeExpired = a.handleChallengeExpired.bind((0, n.A)(a)), a.ref = r.createRef(), a.apiScriptRequested = !1, a.state = {
                        isApiReady: !1,
                        isRemoved: !1,
                        elementId: t.id,
                        captchaId: ""
                    }, a
                }(0, i.A)(t, e);
                var a = t.prototype;
                return a.componentDidMount = function() {
                    var e = this,
                        t = s(c(this.props.scriptLocation));
                    this._hcaptcha = t.window.hcaptcha || void 0, void 0 !== this._hcaptcha ? this.setState({
                        isApiReady: !0
                    }, function() {
                        e.renderCaptcha()
                    }) : this.loadCaptcha()
                }, a.componentWillUnmount = function() {
                    var e = this.state.captchaId,
                        t = this._hcaptcha;
                    this.isReady() && (t.reset(e), t.remove(e))
                }, a.shouldComponentUpdate = function(e, t) {
                    return this.state.isApiReady === t.isApiReady && this.state.isRemoved === t.isRemoved
                }, a.componentDidUpdate = function(e) {
                    var t = this;
                    ["sitekey", "size", "theme", "tabindex", "languageOverride", "endpoint"].every(function(a) {
                        return e[a] === t.props[a]
                    }) || this.removeCaptcha(function() {
                        t.renderCaptcha()
                    })
                }, a.loadCaptcha = function() {
                    if (!this.apiScriptRequested) {
                        var e = this.props,
                            t = e.apihost,
                            a = e.assethost,
                            n = e.endpoint,
                            i = e.host,
                            r = e.imghost,
                            s = e.languageOverride,
                            c = e.reCaptchaCompat,
                            o = e.reportapi,
                            h = e.sentry,
                            p = e.custom,
                            l = e.loadAsync,
                            u = e.scriptLocation;
                        d({
                            apihost: t,
                            assethost: a,
                            endpoint: n,
                            hl: s,
                            host: i,
                            imghost: r,
                            recaptchacompat: !1 === c ? "off" : null,
                            reportapi: o,
                            sentry: h,
                            custom: p,
                            loadAsync: l,
                            scriptLocation: u
                        }).then(this.handleOnLoad).catch(this.handleError), this.apiScriptRequested = !0
                    }
                }, a.renderCaptcha = function(e) {
                    if (this.state.isApiReady) {
                        var t = Object.assign({
                                "open-callback": this.handleOpen,
                                "close-callback": this.handleClose,
                                "error-callback": this.handleError,
                                "chalexpired-callback": this.handleChallengeExpired,
                                "expired-callback": this.handleExpire,
                                callback: this.handleSubmit
                            }, this.props, {
                                hl: this.props.hl || this.props.languageOverride,
                                languageOverride: void 0
                            }),
                            a = this._hcaptcha.render(this.ref.current, t);
                        this.setState({
                            isRemoved: !1,
                            captchaId: a
                        }, function() {
                            e && e()
                        })
                    }
                }, a.resetCaptcha = function() {
                    var e = this.state.captchaId,
                        t = this._hcaptcha;
                    this.isReady() && t.reset(e)
                }, a.removeCaptcha = function(e) {
                    var t = this.state.captchaId,
                        a = this._hcaptcha;
                    this.isReady() && this.setState({
                        isRemoved: !0
                    }, function() {
                        a.remove(t), e && e()
                    })
                }, a.handleOnLoad = function() {
                    var e = this;
                    this.setState({
                        isApiReady: !0
                    }, function() {
                        var t = s(c(e.props.scriptLocation));
                        e._hcaptcha = t.window.hcaptcha, e.renderCaptcha(function() {
                            var t = e.props.onLoad;
                            t && t()
                        })
                    })
                }, a.handleSubmit = function(e) {
                    var t = this.props.onVerify,
                        a = this.state,
                        n = a.isRemoved,
                        i = a.captchaId,
                        r = this._hcaptcha;
                    if (void 0 !== r && !n) {
                        var s = r.getResponse(i),
                            c = r.getRespKey(i);
                        t && t(s, c)
                    }
                }, a.handleExpire = function() {
                    var e = this.props.onExpire,
                        t = this.state.captchaId,
                        a = this._hcaptcha;
                    this.isReady() && (a.reset(t), e && e())
                }, a.handleError = function(e) {
                    var t = this.props.onError,
                        a = this.state.captchaId,
                        n = this._hcaptcha;
                    this.isReady() && n.reset(a), t && t(e)
                }, a.isReady = function() {
                    var e = this.state,
                        t = e.isApiReady,
                        a = e.isRemoved;
                    return t && !a
                }, a.handleOpen = function() {
                    this.isReady() && this.props.onOpen && this.props.onOpen()
                }, a.handleClose = function() {
                    this.isReady() && this.props.onClose && this.props.onClose()
                }, a.handleChallengeExpired = function() {
                    this.isReady() && this.props.onChalExpired && this.props.onChalExpired()
                }, a.execute = function(e) {
                    void 0 === e && (e = null);
                    var t = this.state.captchaId,
                        a = this._hcaptcha;
                    if (this.isReady()) return e && "object" != typeof e && (e = null), a.execute(t, e)
                }, a.setData = function(e) {
                    var t = this.state.captchaId,
                        a = this._hcaptcha;
                    this.isReady() && (e && "object" != typeof e && (e = null), a.setData(t, e))
                }, a.getResponse = function() {
                    return this._hcaptcha.getResponse(this.state.captchaId)
                }, a.getRespKey = function() {
                    return this._hcaptcha.getRespKey(this.state.captchaId)
                }, a.render = function() {
                    var e = this.state.elementId;
                    return r.createElement("div", {
                        ref: this.ref,
                        id: e
                    })
                }, t
            }(r.Component)
        },
        71407(e, t, a) {
            a.r(t), a.d(t, {
                default: () => p
            });
            var n = a(82544),
                i = a(7876),
                r = a(4015),
                s = a(96540),
                c = a(84976),
                o = a(71661),
                h = a(84212);
            const p = function() {
                var e = (0, c.ok)(),
                    t = (0, n.A)(e, 1)[0],
                    a = s.useState(null),
                    p = (0, n.A)(a, 2),
                    d = p[0],
                    l = p[1],
                    u = t.get("returnUrl");
                return s.createElement(h.A, null, s.createElement(o.Qc, null, "Captcha Verification"), s.createElement("div", {
                    className: "tw-bg-dark-grey-transparent-90 tw-w-full sm:tw-w-[700px] tw-p-12 tw-rounded-lg tw-h-fit sm:tw-mt-[200px] tw-mt-0"
                }, s.createElement("div", {
                    className: "tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center"
                }, s.createElement("div", {
                    className: "tw-mb-5"
                }, s.createElement(o.M2, {
                    icon: i.faShieldHalved,
                    className: "tw-w-[72px] tw-h-[72px]"
                })), s.createElement("h4", {
                    className: "tw-text-h2 tw-text-white tw-text-center tw-mb-6"
                }, "Verify You're Human"), s.createElement("p", {
                    className: "tw-text-center tw-mb-6"
                }, "Please complete the captcha below to continue."), d && s.createElement("p", {
                    role: "alert",
                    "aria-label": "Captcha error",
                    className: "tw-text-error-message-red tw-text-sm tw-mb-4"
                }, d), !u && s.createElement("p", {
                    role: "alert",
                    "aria-label": "Missing return URL",
                    className: "tw-text-error-message-red tw-text-sm tw-mb-4"
                }, "Missing return URL parameter."), s.createElement("div", {
                    className: "tw-mb-6"
                }, s.createElement(r.A, {
                    theme: "dark",
                    sitekey: "85eb5fc7-910f-44cb-b913-f92ac87596bd",
                    onVerify: function(e) {
                        if (u) try {
                            var t = new URL(u);
                            t.searchParams.set("captchaCode", e), window.location.href = t.toString()
                        } catch (e) {
                            l("Invalid return URL")
                        } else l("No return URL specified")
                    },
                    onError: function() {
                        l("Captcha verification failed. Please try again.")
                    }
                })))))
            }
        },
        9417(e, t, a) {
            function n(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            a.d(t, {
                A: () => n
            })
        }
    }
]);
//# sourceMappingURL=e142043fc70d93d1ddee40a6e5af1f152ef8d1255643c872a784e95014ee7868.js.map