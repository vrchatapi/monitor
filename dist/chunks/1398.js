"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1398], {
        31398(e, t, a) {
            a.r(t), a.d(t, {
                default: () => h
            });
            var l = a(15902),
                n = a(70129),
                r = a(14133),
                o = a(28045),
                s = a(96540),
                c = a(15033),
                m = a(50779),
                i = a(194),
                u = a(53818);
            var d = {
                "/download/sdk3-worlds": "download worlds VCC SDK package",
                "/download/sdk3-avatars": "download avatars VCC SDK package"
            };
            const h = function() {
                var e = (0, i.a$)(),
                    t = e.user,
                    a = e.isFetching,
                    n = (0, m.G)(),
                    h = n.data,
                    g = n.isLoading,
                    v = s.useState(!0),
                    b = (0, l.A)(v, 2),
                    y = b[0],
                    k = b[1],
                    C = s.useState(!1),
                    N = (0, l.A)(C, 2),
                    x = N[0],
                    S = N[1],
                    D = s.useState(null),
                    A = (0, l.A)(D, 2),
                    _ = A[0],
                    j = A[1],
                    T = s.useMemo(function() {
                        return h && t && (null != h && h.disableAvatarGating || t.tagsSet.has("system_avatar_access") || t.tagsSet.has("system_world_access")) ? "none" : "block"
                    }, [null == h ? void 0 : h.disableAvatarGating, null == t ? void 0 : t.tagsSet]);
                if (a || g) return null;
                var V, K = function(e) {
                    return function() {
                        j(e), S(!0)
                    }
                };
                return s.createElement(p, null, s.createElement(c.uo, {
                    isOpen: x,
                    confirmCallback: (V = _, function() {
                        (0, u.u4)("Web_ButtonPressed", {
                            controlName: d[V]
                        }), setTimeout(function() {
                            window.location.assign(V)
                        }, 1e3)
                    }),
                    cancelCallback: function() {
                        return S(!1)
                    },
                    headerText: "Package Download",
                    confirmText: "I Understand, download package",
                    cancelText: "Go Back",
                    type: "danger"
                }, s.createElement("p", null, s.createElement("b", null, "These packages will break the VRCSDK installation for projects made before 2023!")), s.createElement("p", null, "If you have a project with the VRCSDK located in the Assets folder, you need to use", " ", s.createElement("a", {
                    href: "https://vcc.docs.vrchat.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }, "the VCC"), " ", "to migrate."), s.createElement("p", null, "These downloads should ", s.createElement("b", null, "only"), " be used on new projects or projects where the VRCSDK is already in the Packages folder."), s.createElement("p", {
                    className: "mb-2"
                }, "If you're trying to make a ", s.createElement("b", null, "new"), " project instead:"), s.createElement("ul", {
                    className: "mb-0 ps-3"
                }, s.createElement("li", null, s.createElement("a", {
                    href: "https://vcc.docs.vrchat.com/",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Use the Creator Companion")), s.createElement("li", null, "Or download the", " ", s.createElement("a", {
                    href: "https://vcc.docs.vrchat.com/guides/using-project-template-repos",
                    target: "_blank",
                    rel: "noreferrer"
                }, "Template Project")))), s.createElement(c.fI, {
                    className: "text-center justify-content-center mb-5 mt-5"
                }, s.createElement(c.Qc, null, "Download VRChat"), s.createElement(c.fv, null, s.createElement("h2", null, "Download VRChat"), s.createElement(c.fI, {
                    className: "align-items-center justify-content-center mt-2"
                }, s.createElement(f, {
                    href: "/download/vive",
                    target: "_blank",
                    className: "API_vive_url me-3"
                }, s.createElement(c.$n, {
                    className: "px-5"
                }, "Steam")), s.createElement(f, {
                    href: "/download/oculus",
                    target: "_blank",
                    className: "API_oculus_url"
                }, s.createElement(c.$n, {
                    className: "px-5"
                }, "Oculus"))))), s.createElement(c.fI, {
                    className: "center-block text-center justify-content-center content-creation mb-5"
                }, s.createElement(c.fv, {
                    xs: "6"
                }, s.createElement("h2", {
                    className: "fw-normal"
                }, " Content Creation "), s.createElement("div", {
                    className: "text-left",
                    style: {
                        display: T
                    }
                }, s.createElement("p", null, " ", "Welcome to VRChat content creation! We're glad you are excited to get started. We ask that you engage with VRChat for a while before we allow you to upload avatars and worlds. Once you have spent some time enjoying and exploring we'll send you a notification that your ability to upload has been unlocked."), s.createElement("ul", null, s.createElement("li", null, "Explore some worlds "), s.createElement("li", null, "Make some friends "), s.createElement("li", null, "Learn to create and build avatars and worlds "), s.createElement("li", null, "Don't be abusive to other people or groups "), s.createElement("li", null, "Share and stream ")), s.createElement("p", null, "❤ — The VRChat Team")), s.createElement(f, {
                    href: "https://docs.vrchat.com/docs/setting-up-the-sdk",
                    target: "_blank",
                    className: "API_sdk_url mt-2"
                }, s.createElement(c.$n, {
                    className: "px-5"
                }, "Setting up the SDK")))), s.createElement(c.fv, {
                    className: "mb-2 flex-1"
                }, s.createElement(c.N3, null, s.createElement("h4", {
                    className: "fw-normal text-center mb-0"
                }, "Creator Companion")), s.createElement(c.BW, {
                    className: "text-center"
                }, "You can install our new Creator Companion, which will help you get all set up for making Avatars or Worlds.", s.createElement("br", null), " This includes downloading the latest SDKs as well as keeping them up-to-date. More info in the  ", s.createElement("a", {
                    href: "https://vcc.docs.vrchat.com/",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "font-weight-bold"
                }, "Creator Companion Docs."), s.createElement(f, {
                    href: h.downloadUrls.vcc,
                    className: "mt-3"
                }, s.createElement(c.$n, null, "Download the Creator Companion")))), s.createElement(c.fv, null, s.createElement(w, {
                    role: "checkbox",
                    "aria-checked": !y,
                    onClick: function() {
                        return k(!y)
                    }
                }, s.createElement(c.M2, {
                    width: 20,
                    icon: y ? o.QL : r.EZ
                }), s.createElement(E, null, "Manual SDK Installation")), !y && s.createElement(c.fv, {
                    className: "pb-5 mb-5"
                }, s.createElement(c.$T, {
                    type: "info",
                    title: "You don't need these if you use the Creator Companion",
                    className: "mt-1 mb-0"
                }, "These packages are provided for creators working on unsupported platforms like Mac and Linux. If you've got the Creator Companion from above, it will keep itself and its SDKs up-to-date, you may never need to visit this page again!"), s.createElement(c.$T, {
                    type: "error",
                    title: "Compatibility Notice",
                    className: "my-1",
                    slim: !0
                }, "Do not import these VCC Compatible Packages into projects which have a legacy VRChat SDK already. That will cause your projects to break. Use the Creator Companion to migrate."), s.createElement(c.fI, {
                    className: "flex-column flex-sm-row justify-content-center"
                }, s.createElement(c.fv, {
                    className: "me-0 me-sm-1 mb-2 mb-sm-0 flex-1"
                }, s.createElement(c.N3, null, s.createElement("h4", {
                    className: "fw-normal text-center mb-0"
                }, "Worlds SDK (VCC Package)")), s.createElement(c.BW, {
                    className: "flex-1 justify-content-between"
                }, s.createElement("div", {
                    className: "mb-2 text-center"
                }, "Create Udon-Powered Worlds"), s.createElement(c.$n, {
                    onClick: K("/download/sdk3-worlds")
                }, "Download Worlds SDK"))), s.createElement(c.fv, {
                    className: "ms-0 ms-sm-1 flex-1"
                }, s.createElement(c.N3, null, s.createElement("h4", {
                    className: "fw-normal text-center mb-0"
                }, "Avatars SDK (VCC Package)")), s.createElement(c.BW, {
                    className: "flex-1 justify-content-between"
                }, s.createElement("div", {
                    className: "mb-2 text-center"
                }, "Create Avatars using Avatars 3.0"), s.createElement(c.$n, {
                    onClick: K("/download/sdk3-avatars")
                }, "Download Avatars SDK")))), s.createElement(c.$T, {
                    type: "warn",
                    title: "These export to packages",
                    className: "mt-1",
                    slim: !0
                }, "Note that these Packages will extract into your 'Packages' folder rather than your 'Assets' folder, and you will need to remove any old VRCSDKs you may have in your project. Additionally, they are incompatible with UdonSharp versions below 1.0."))))
            };
            var p = (0, n.A)(c.fv, {
                    target: "e1uz4owu3"
                })({
                    name: "1wafcg9",
                    styles: "max-width:1200px;margin:0 auto"
                }),
                f = (0, n.A)("a", {
                    target: "e1uz4owu2"
                })({
                    name: "1bs7qd7",
                    styles: "&:hover{text-decoration:none;}"
                }),
                w = (0, n.A)(c.$n, {
                    target: "e1uz4owu1"
                })({
                    name: "3zych9",
                    styles: "display:flex;align-items:center;min-height:2.5rem"
                }),
                E = (0, n.A)("div", {
                    target: "e1uz4owu0"
                })({
                    name: "11p52gn",
                    styles: "font-size:1rem;margin-right:10px;margin-left:10px;color:hsla(0, 0%, 100%, 0.6)"
                })
        }
    }
]);
//# sourceMappingURL=10447b4ef85bce6525812c984d308a06b7bdb52931e4f489fe7ff89401f7695d.js.map