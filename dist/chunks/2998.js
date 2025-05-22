"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2998], {
        72998: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(87462),
                o = n(4965),
                a = n(67294),
                i = n(79655),
                s = n(50048),
                c = n(37463);
            const l = function(e) {
                var t = e.tabs,
                    n = e.selected,
                    o = e.onChange,
                    i = void 0 === o ? function() {} : o,
                    s = e.justify,
                    c = e.className,
                    l = t.filter((function(e) {
                        return e.condition
                    }));
                return a.createElement(f, {
                    justify: s,
                    className: c
                }, l.map((function(e) {
                    var t = e.id || e.to,
                        o = a.createElement(a.Fragment, null, e.icon && a.createElement(d, {
                            icon: e.icon
                        }), e.name),
                        s = {
                            key: t,
                            onClick: function() {
                                return function(e) {
                                    e.id !== n && i(e.id)
                                }(e)
                            },
                            neutral: n !== e.id
                        };
                    return e.to ? a.createElement(p, (0, r.Z)({}, s, {
                        to: e.to,
                        end: e.end
                    }), o) : (e !== n && (null == e ? void 0 : e.id) !== n || (s.className = "selected"), a.createElement(u, (0, r.Z)({}, s, {
                        containerStyles: {
                            borderRadius: 0,
                            borderBottom: "2px solid transparent"
                        }
                    }), o))
                })))
            };
            var d = (0, o.Z)(c.$1, {
                    target: "e1s986um4"
                })({
                    name: "qqykjf",
                    styles: "margin-right:0.25rem"
                }),
                f = (0, o.Z)((0, o.Z)("div", {
                    target: "e1s986um2"
                })(""), {
                    shouldForwardProp: function(e) {
                        return "justify" !== e
                    },
                    target: "e1s986um3"
                })("display:flex;flex-direction:row;justify-content:", (function(e) {
                    return e.justify || "center"
                }), ";align-items:center;width:100%;flex-wrap:wrap;margin-bottom:8px;", (function(e) {
                    switch (e.justify) {
                        case "left":
                            return "\n          & > :first-of-type > ".concat(s.Sn, ",\n          & > ").concat(p, ":first-of-type {\n            margin-left: 0;\n          }\n        ");
                        case "right":
                            return "\n          & > :first-of-type > ".concat(s.Sn, ",\n          & > ").concat(p, ":first-of-type {\n            margin-right: 0;\n          }\n        ");
                        default:
                            return ""
                    }
                }), ";"),
                u = (0, o.Z)(s.ZP, {
                    target: "e1s986um1"
                })({
                    name: "rsc60g",
                    styles: "background:none;border:none;border-radius:0px!important;border-bottom:2px solid transparent;color:#fff;padding:5px 0px;text-decoration:none;display:flex;align-items:center;margin:10px;&.selected{border-bottom:#1FD1ED solid 2px;color:#6ae3f9;}"
                }),
                p = (0, o.Z)(i.OL, {
                    target: "e1s986um0"
                })({
                    name: "kqs0q4",
                    styles: "background:none;border:none;border-bottom:2px solid transparent;color:#fff;padding:5px 0px;text-decoration:none;&:hover,&:active,&:focus{color:#fff;border-color:#086c84;text-decoration:none;}&:disabled{border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);&:hover{border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);}}&.active{border-bottom:#1FD1ED solid 2px;color:#6ae3f9;}display:flex;align-items:center;margin:0.175rem 10px"
                })
        }
    }
]);
//# sourceMappingURL=ce306c6c70b1e20c7c4f28ed5c9acc822e7a7b9639078947ec6f072bec0bc685.js.map