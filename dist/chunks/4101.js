"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [4101], {
        74101(e, t, a) {
            a.r(t), a.d(t, {
                default: () => u
            });
            var r = a(70129),
                n = a(96540),
                l = a(84976),
                o = a(47767),
                i = a(15033),
                c = a(99871);
            var d = function(e) {
                    return ("string" == typeof e ? e : (null == e ? void 0 : e.fallback) || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
                },
                s = function(e) {
                    return "string" == typeof e ? e : (null == e ? void 0 : e.fallback) || ""
                },
                m = function(e) {
                    return "string" == typeof e ? e : (null == e ? void 0 : e.fallback) || ""
                };
            const u = function() {
                var e, t = (0, o.g)().topicSlug,
                    a = (0, c.o)({
                        require: ["help-topic"]
                    }),
                    r = a.data,
                    l = void 0 === r ? [] : r,
                    u = a.isLoading,
                    g = a.isError,
                    f = t ? l.find(function(e) {
                        return e.id === t || d(e.data.name) === t
                    }) : l[0],
                    h = null == f || null === (e = f.data) || void 0 === e || null === (e = e.ipsQuery) || void 0 === e ? void 0 : e.require,
                    v = (0, c.o)({
                        require: [h]
                    }, {
                        skip: !h
                    }),
                    b = v.data,
                    E = void 0 === b ? [] : b,
                    x = v.isFetching,
                    y = (0, n.useMemo)(function() {
                        return E.filter(function(e) {
                            if (e.tags.includes("help-topic")) return !1;
                            var t = e.requireClientTags;
                            return !((null == t ? void 0 : t.length) > 0) || 1 === t.length && "platform-web" === t[0]
                        })
                    }, [E]);
                return !t && l.length > 0 ? n.createElement(o.C5, {
                    to: "/home/help-articles/".concat(d(l[0].data.name)),
                    replace: !0
                }) : u ? n.createElement("div", {
                    className: "tw-rounded-md tw-bg-darker-grey"
                }, n.createElement(i.Qc, null, "Help & Info"), n.createElement("div", {
                    className: "tw-bg-grey tw-rounded-md tw-rounded-b-none tw-p-4"
                }, n.createElement(i.fy, {
                    height: "2.5rem"
                })), n.createElement("div", {
                    className: "tw-p-4"
                }, n.createElement(i.fy, {
                    height: "480px",
                    radius: 8
                }))) : g ? n.createElement("div", {
                    className: "tw-rounded-md tw-bg-darker-grey"
                }, n.createElement(i.Qc, null, "Help & Info"), n.createElement("div", {
                    className: "tw-p-4"
                }, n.createElement(i.$T, {
                    type: "error",
                    title: "Error",
                    className: "tw-my-2"
                }, "There was an error loading help topics."))) : n.createElement("div", {
                    className: "tw-rounded-md tw-bg-darker-grey"
                }, n.createElement(i.Qc, null, "Help & Info"), n.createElement("div", {
                    className: "tw-bg-grey tw-rounded-md tw-rounded-b-none tw-p-4"
                }, n.createElement("h2", {
                    className: "tw-text-2xl tw-text-white tw-mb-0"
                }, "Help & Info")), n.createElement("div", {
                    className: "tw-flex tw-flex-col md:tw-flex-row"
                }, n.createElement("div", {
                    className: "tw-w-full md:tw-w-64 tw-shrink-0 tw-p-4 tw-border-r tw-border-gray-800/50"
                }, n.createElement("div", {
                    className: "tw-flex tw-flex-col tw-gap-2"
                }, l.map(function(e) {
                    return n.createElement(w, {
                        key: e.id,
                        to: "/home/help-articles/".concat(d(e.data.name))
                    }, e.data.iconImageUrl && n.createElement("img", {
                        src: e.data.iconImageUrl,
                        alt: "",
                        className: "tw-w-5 tw-h-5 tw-object-contain tw-shrink-0"
                    }), n.createElement("span", null, s(e.data.name)))
                }))), n.createElement("div", {
                    className: "tw-flex-1 tw-p-4"
                }, f && n.createElement("div", {
                    className: "tw-mb-4"
                }, n.createElement("p", {
                    className: "tw-text-lg tw-font-semibold tw-text-white tw-mb-1"
                }, s(f.data.name)), f.data.tooltipDescription && n.createElement("p", {
                    className: "tw-text-gray-400 tw-text-sm tw-mb-0"
                }, m(f.data.tooltipDescription))), x ? n.createElement("div", {
                    className: "tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-3"
                }, [0, 1, 2].map(function(e) {
                    return n.createElement(i.fy, {
                        key: e,
                        height: "160px",
                        radius: 8,
                        delay: 50 * e
                    })
                })) : y.length > 0 ? n.createElement("div", {
                    className: "tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-3"
                }, y.map(function(e) {
                    return n.createElement(p, {
                        key: e.id,
                        to: "/home/help-article/".concat(e.id)
                    }, e.data.imageUrl && n.createElement("div", {
                        className: "tw-bg-black/30 tw-rounded-t-md tw-aspect-video tw-flex tw-items-center tw-justify-center"
                    }, n.createElement("img", {
                        src: e.data.imageUrl,
                        alt: "",
                        className: "tw-w-full tw-h-full tw-object-cover tw-rounded-t-md"
                    })), n.createElement("div", {
                        className: "tw-p-3"
                    }, n.createElement("h4", {
                        className: "tw-text-sm tw-font-semibold tw-text-white tw-mb-1 tw-line-clamp-2"
                    }, s(e.data.name)), e.data.description && n.createElement("p", {
                        className: "tw-text-xs tw-text-gray-400 tw-mb-0 tw-line-clamp-2"
                    }, m(e.data.description))))
                })) : n.createElement("p", {
                    className: "tw-text-gray-400"
                }, "No articles found for this topic."))))
            };
            var w = (0, r.A)(l.k2, {
                    target: "e1fqiln51"
                })({
                    name: "1g2xrww",
                    styles: "background:#07242b;border:#053c48 solid 2px;color:#6ae3f9;border-radius:8px;text-align:left;font-size:1rem;padding:8px 10px;cursor:pointer;box-shadow:none;display:flex;align-items:center;gap:8px;text-decoration:none;&:hover{background:#07343f;border-color:#086c84;transform:scale(1.02);color:#6ae3f9;text-decoration:none;}&.active{background:#07343f;border-color:#086c84;}"
                }),
                p = (0, r.A)(l.N_, {
                    target: "e1fqiln50"
                })({
                    name: "6dfugc",
                    styles: "background:#333;border:2px solid #333;border-radius:8px;overflow:hidden;text-decoration:none;transition:border-color 0.15s ease,transform 0.15s ease;&:hover{background:#064B5C;border-color:#086c84;transform:scale(1.02);text-decoration:none;}"
                })
        },
        99871(e, t, a) {
            a.d(t, {
                o: () => n
            });
            var r = a(89483).m.injectEndpoints({
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
                                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        r = a.include,
                                        n = void 0 === r ? ["user-all"] : r,
                                        l = a.require;
                                    return [{
                                        type: "InfoPushData",
                                        id: {
                                            include: n,
                                            require: void 0 === l ? [] : l
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
                n = r.useGetInfoPushDataQuery
        }
    }
]);
//# sourceMappingURL=c1d1fcb41f2249304449e4cf6af33d5970fcfe2a5bf42ff8c98883c48ef4d33f.js.map