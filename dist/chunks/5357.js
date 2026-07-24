"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [5357], {
        15357(e, t, n) {
            n.r(t), n.d(t, {
                default: () => A
            });
            var a = n(70129),
                r = n(96540),
                c = n(47767),
                l = n(71661),
                i = n(99871),
                o = n(3569),
                s = n(6376),
                u = n(84976),
                m = n(65950),
                d = n(68708),
                w = function(e) {
                    var t = 0,
                        n = 0,
                        a = 0;
                    return 3 === (e = e.replace(/^#/, "")).length ? (t = parseInt(e[0] + e[0], 16), n = parseInt(e[1] + e[1], 16), a = parseInt(e[2] + e[2], 16)) : e.length >= 6 && (t = parseInt(e.substring(0, 2), 16), n = parseInt(e.substring(2, 4), 16), a = parseInt(e.substring(4, 6), 16)), "rgb(".concat(t, ", ").concat(n, ", ").concat(a, ")")
                },
                f = function(e) {
                    var t = Number(e);
                    return t >= 160 ? 1 : t >= 140 ? 2 : t >= 120 ? 3 : t >= 100 ? 4 : t >= 80 ? 5 : 6
                },
                h = /^<b>([\s\S]*?)<\/b>/,
                p = /^<i>([\s\S]*?)<\/i>/,
                v = /^<u>([\s\S]*?)<\/u>/,
                g = /^<link=([^>]+)>([\s\S]*?)<\/link>/,
                E = /^<color=#([A-Fa-f0-9]{3,8})>/,
                b = /^<size=(\d+)%><b>([\s\S]*?)<\/b><\/size>/,
                k = /^<indent=\d+%>([\s\S]*?)<\/indent>/,
                y = /^<[^>]+>/,
                x = function(e, t) {
                    return null == t ? void 0 : t.find(function(t) {
                        return t.id === e
                    })
                },
                N = (0, r.memo)(function(e) {
                    var t = e.link,
                        n = e.children,
                        a = e.className,
                        c = (0, s.wA)(),
                        l = null != a ? a : "tw-text-blue-400 tw-underline";
                    if (!t) return r.createElement("span", null, n);
                    var i = (0, d.Y3)({
                        command: t.command,
                        parameters: t.parameters
                    });
                    if (!i) return r.createElement("span", null, n);
                    var w = (0, r.useCallback)(function() {
                        var e;
                        null === (e = document.querySelector(".content-scroll")) || void 0 === e || e.scrollTo({
                            top: 0
                        })
                    }, []);
                    return i.unsupported ? r.createElement("button", {
                        type: "button",
                        className: l,
                        onClick: function() {
                            c((0, m.X)({
                                title: "Not Available",
                                icon: o.faCircleInfo,
                                message: "That action is not supported on vrchat.com; please use the VRChat app to do that.",
                                color: "warning",
                                timeout: 5e3
                            }))
                        }
                    }, n) : i.href ? r.createElement("a", {
                        href: i.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: l
                    }, n) : i.to ? r.createElement(u.N_, {
                        to: i.to,
                        className: l,
                        onClick: w
                    }, n) : r.createElement("span", null, n)
                }),
                I = function(e, t) {
                    for (var n = new RegExp("<".concat(t, "[^>]*>"), "g"), a = "</".concat(t, ">"), r = 0, c = 0; c < e.length;)
                        if (e.startsWith(a, c)) {
                            if (0 === r) return c;
                            r--, c += a.length
                        } else {
                            n.lastIndex = c;
                            var l = n.exec(e);
                            l && l.index === c ? (r++, c += l[0].length) : c++
                        } return -1
                },
                q = function e(t, n) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    if (!t) return null;
                    for (var c = [], l = t, i = 0; l.length > 0;)
                        if (l.startsWith("<br>")) c.push(r.createElement("br", {
                            key: "".concat(a, "-").concat(i++)
                        })), l = l.slice(4);
                        else {
                            var o = l.match(h);
                            if (o) c.push(r.createElement("strong", {
                                key: "".concat(a, "-").concat(i++)
                            }, e(o[1], n, "".concat(a, "-b-").concat(i)))), l = l.slice(o[0].length);
                            else {
                                var s = l.match(p);
                                if (s) c.push(r.createElement("em", {
                                    key: "".concat(a, "-").concat(i++)
                                }, e(s[1], n, "".concat(a, "-i-").concat(i)))), l = l.slice(s[0].length);
                                else {
                                    var u = l.match(v);
                                    if (u) c.push(r.createElement("span", {
                                        key: "".concat(a, "-").concat(i++),
                                        className: "tw-underline"
                                    }, e(u[1], n, "".concat(a, "-u-").concat(i)))), l = l.slice(u[0].length);
                                    else {
                                        var m = l.match(g);
                                        if (m) {
                                            var d = m[1],
                                                q = x(d, n),
                                                C = e(m[2], n, "".concat(a, "-l-").concat(i));
                                            c.push(r.createElement(N, {
                                                key: "".concat(a, "-").concat(i++),
                                                link: q
                                            }, C)), l = l.slice(m[0].length)
                                        } else {
                                            var A = l.match(E);
                                            if (A) {
                                                var L = l.slice(A[0].length),
                                                    S = I(L, "color");
                                                if (-1 !== S) {
                                                    var T = L.slice(0, S),
                                                        U = A[0].length + S + 8,
                                                        D = w(A[1]);
                                                    c.push(r.createElement("span", {
                                                        key: "".concat(a, "-").concat(i++),
                                                        style: {
                                                            color: D
                                                        }
                                                    }, e(T, n, "".concat(a, "-c-").concat(i)))), l = l.slice(U);
                                                    continue
                                                }
                                            }
                                            var P = l.match(b);
                                            if (P) {
                                                var j = f(P[1]),
                                                    M = "h".concat(j);
                                                c.push(r.createElement(M, {
                                                    key: "".concat(a, "-").concat(i++)
                                                }, e(P[2], n, "".concat(a, "-h-").concat(i)))), l = l.slice(P[0].length)
                                            } else {
                                                var Q = l.match(k);
                                                if (Q) {
                                                    var $ = Q[1].split(/• /).filter(Boolean);
                                                    $.length > 0 && c.push(r.createElement("ul", {
                                                        key: "".concat(a, "-").concat(i++),
                                                        className: "tw-pl-6 tw-list-disc"
                                                    }, $.map(function(t, c) {
                                                        return r.createElement("li", {
                                                            key: c
                                                        }, e(t.replace(/<br>$/, "").replace(/<br><br>$/, ""), n, "".concat(a, "-li-").concat(c)))
                                                    }))), l = l.slice(Q[0].length)
                                                } else {
                                                    var _ = l.match(y);
                                                    if (_) l = l.slice(_[0].length);
                                                    else {
                                                        var z = l.indexOf("<"); - 1 === z ? (c.push(r.createElement(r.Fragment, {
                                                            key: "".concat(a, "-").concat(i++)
                                                        }, l)), l = "") : (c.push(r.createElement(r.Fragment, {
                                                            key: "".concat(a, "-").concat(i++)
                                                        }, l.slice(0, z))), l = l.slice(z))
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } return 1 === c.length ? c[0] : c
                };
            const C = (0, r.memo)(function(e) {
                var t, n = e.article;
                if (null == n || !n.content) return null;
                var a = n.content,
                    c = n.embeddedLinkData,
                    i = void 0 === c ? [] : c,
                    o = (0, r.useMemo)(function() {
                        return a.map(function(e, t) {
                            return e.imageUrl ? r.createElement("div", {
                                key: t,
                                className: "tw-my-4"
                            }, r.createElement("img", {
                                src: e.imageUrl,
                                alt: "",
                                className: "tw-max-w-full tw-rounded-lg"
                            })) : e.videoUrl ? r.createElement("div", {
                                key: t,
                                className: "tw-my-4"
                            }, r.createElement("video", {
                                src: e.videoUrl,
                                controls: !0,
                                className: "tw-max-w-full tw-max-h-[80vh] tw-rounded-lg"
                            })) : e.text ? r.createElement("div", {
                                key: t,
                                id: e.id
                            }, q(e.text, i, t)) : null
                        })
                    }, [a, i]);
                return r.createElement("div", {
                    className: "tw-space-y-2"
                }, o, (null === (t = n.moreInfoLinks) || void 0 === t ? void 0 : t.length) > 0 && r.createElement("div", {
                    className: "tw-mt-6 tw-pt-4 tw-border-t tw-border-gray-700"
                }, r.createElement("h4", {
                    className: "tw-mb-4"
                }, "More Information"), r.createElement("div", {
                    className: "tw-flex tw-flex-wrap tw-gap-3"
                }, n.moreInfoLinks.map(function(e, t) {
                    return r.createElement(N, {
                        key: t,
                        link: e,
                        className: ""
                    }, r.createElement(l.$n, null, e.name || "Link"))
                }))))
            });
            const A = function() {
                var e = (0, c.g)().articleId,
                    t = (0, i.o)({
                        require: ["help-article"]
                    }),
                    n = t.data,
                    a = void 0 === n ? [] : n,
                    o = t.isLoading,
                    s = t.isError,
                    u = (0, r.useMemo)(function() {
                        return a.find(function(t) {
                            return t.id === e
                        })
                    }, [a, e]),
                    m = (0, r.useMemo)(function() {
                        var e;
                        return function(e) {
                            var t;
                            return null != e && null !== (t = e.sectionLinks) && void 0 !== t && t.length && null != e && e.content ? e.sectionLinks.map(function(t) {
                                return e.content.find(function(e) {
                                    return e.id === t
                                })
                            }).filter(function(e) {
                                return (null == e ? void 0 : e.id) && (null == e ? void 0 : e.title)
                            }).map(function(e) {
                                return {
                                    id: e.id,
                                    title: e.title
                                }
                            }) : []
                        }(null == u || null === (e = u.data) || void 0 === e ? void 0 : e.article)
                    }, [u]),
                    d = (0, r.useCallback)(function(e) {
                        var t = document.getElementById(e);
                        t && t.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }, []);
                return o ? r.createElement("div", {
                    className: "tw-rounded-md tw-bg-darker-grey"
                }, r.createElement(l.Qc, null, "Help Article"), r.createElement("div", {
                    className: "tw-bg-grey tw-rounded-md tw-rounded-b-none"
                }, r.createElement(l.fy, {
                    height: "2.5rem",
                    className: "tw-p-4"
                })), r.createElement("div", {
                    className: "tw-p-4"
                }, r.createElement(l.fy, {
                    height: "480px",
                    radius: 8
                }))) : s || !u ? r.createElement("div", {
                    className: "tw-rounded-md tw-bg-darker-grey"
                }, r.createElement(l.Qc, null, "Help Article"), r.createElement("div", {
                    className: "tw-p-4"
                }, r.createElement(l.$T, {
                    type: "error",
                    title: "Error",
                    className: "tw-my-2"
                }, s ? "There was an error loading the article." : "Article not found."))) : r.createElement("div", {
                    className: "tw-flex tw-gap-4 tw-max-w-6xl tw-mx-auto tw-pb-4"
                }, r.createElement("div", {
                    className: "tw-flex-1 tw-min-w-0"
                }, r.createElement("div", {
                    className: "tw-rounded-md tw-bg-darker-grey"
                }, r.createElement(l.Qc, null, u.data.name || "Help Article"), r.createElement("div", {
                    className: "tw-bg-grey tw-rounded-md tw-rounded-b-none tw-flex tw-items-center tw-justify-between tw-p-4"
                }, r.createElement("h2", {
                    className: "tw-text-2xl tw-text-white tw-text-left tw-mb-0"
                }, u.data.name), u.data.imageUrl && r.createElement("img", {
                    src: u.data.imageUrl,
                    alt: u.data.name,
                    className: "tw-max-h-24 tw-max-w-[200px] tw-rounded-lg tw-object-cover tw-ml-4 tw-shrink-0"
                })), r.createElement("div", {
                    className: "tw-p-4"
                }, r.createElement(C, {
                    article: u.data.article
                })))), m.length > 0 && r.createElement("div", {
                    className: "tw-hidden lg:tw-block tw-w-64 tw-shrink-0 tw-sticky tw-top-4 tw-self-start tw-max-h-[calc(100dvh-6rem)] tw-overflow-y-auto"
                }, r.createElement("div", {
                    className: "tw-rounded-md tw-bg-darker-grey tw-p-4"
                }, r.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-1"
                }, m.map(function(e) {
                    return r.createElement(L, {
                        key: e.id,
                        onClick: function() {
                            return d(e.id)
                        }
                    }, e.title)
                })))))
            };
            var L = (0, a.A)("button", {
                target: "ejgmb650"
            })({
                name: "q1k5ur",
                styles: "background:#07242b;border:#053c48 solid 2px;color:#6ae3f9;border-radius:8px;text-align:left;font-size:0.875rem;padding:8px 10px;cursor:pointer;box-shadow:none;&:hover{background:#07343f;border-color:#086c84;transform:scale(1.02);}"
            })
        },
        99871(e, t, n) {
            n.d(t, {
                o: () => r
            });
            var a = n(89483).m.injectEndpoints({
                    endpoints: function(e) {
                        return {
                            getInfoPushData: e.query({
                                query: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.include;
                                    return {
                                        url: "infoPush",
                                        params: {
                                            include: void 0 === t ? ["user-all"] : t,
                                            require: e.require
                                        }
                                    }
                                },
                                providesTags: function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        a = n.include,
                                        r = void 0 === a ? ["user-all"] : a,
                                        c = n.require;
                                    return [{
                                        type: "InfoPushData",
                                        id: {
                                            include: r,
                                            require: void 0 === c ? [] : c
                                        }
                                    }]
                                }
                            })
                        }
                    },
                    overrideExisting: !1
                }).enhanceEndpoints({
                    addTagTypes: ["InfoPushData"]
                }),
                r = a.useGetInfoPushDataQuery
        }
    }
]);
//# sourceMappingURL=6b35f15ac0d933357830e74071b975b386ccd9e027f3e2e091e4bc88ee858f34.js.map