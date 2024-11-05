"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [2998], {
        72998: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(87462),
                o = n(4965),
                i = n(67294),
                a = n(79655),
                c = n(50048),
                s = n(34226);
            const l = function(e) {
                var t = e.tabs,
                    n = e.selected,
                    o = e.onChange,
                    a = void 0 === o ? function() {} : o,
                    c = e.justify,
                    s = t.filter((function(e) {
                        return e.condition
                    }));
                return i.createElement(d, {
                    justify: c
                }, s.map((function(e) {
                    var t = e.id || e.to,
                        o = i.createElement(i.Fragment, null, e.icon && i.createElement(f, {
                            icon: e.icon
                        }), e.name),
                        c = {
                            key: t,
                            onClick: function() {
                                return function(e) {
                                    e.id !== n && a(e.id)
                                }(e)
                            },
                            neutral: n !== e.id
                        };
                    return e === n && (c.className = "selected"), e.to ? i.createElement(m, (0, r.Z)({}, c, {
                        to: e.to,
                        end: e.end
                    }), o) : i.createElement(u, c, o)
                })))
            };
            var f = (0, o.Z)(s.$1, {
                    target: "e1s986um4"
                })({
                    name: "qqykjf",
                    styles: "margin-right:0.25rem"
                }),
                d = (0, o.Z)((0, o.Z)("div", {
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
                            return "\n          & > :first-of-type > ".concat(c.Sn, ",\n          & > ").concat(m, ":first-of-type {\n            margin-left: 0;\n          }\n        ");
                        case "right":
                            return "\n          & > :first-of-type > ".concat(c.Sn, ",\n          & > ").concat(m, ":first-of-type {\n            margin-right: 0;\n          }\n        ");
                        default:
                            return ""
                    }
                }), ";"),
                u = (0, o.Z)(c.ZP, {
                    target: "e1s986um1"
                })({
                    name: "cd6mpr",
                    styles: "display:flex;align-items:center;margin:0.175rem"
                }),
                m = (0, o.Z)(a.OL, {
                    target: "e1s986um0"
                })({
                    name: "kqs0q4",
                    styles: "background:none;border:none;border-bottom:2px solid transparent;color:#fff;padding:5px 0px;text-decoration:none;&:hover,&:active,&:focus{color:#fff;border-color:#086c84;text-decoration:none;}&:disabled{border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);&:hover{border:hsl(0, 0%, 20%) solid 2px;background:hsl(0, 0%, 20%);color:hsl(0, 0%, 60%);}}&.active{border-bottom:#1FD1ED solid 2px;color:#6ae3f9;}display:flex;align-items:center;margin:0.175rem 10px"
                })
        }
    }
]);
//# sourceMappingURL=abc0e60899c7d0ba3dd2c428a7c138616298dd0c58ef35acfcad2a2a0c7e3e9d.js.map