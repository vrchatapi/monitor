"use strict";
(self.webpackChunkweb_appedashi = self.webpackChunkweb_appedashi || []).push([
    [1563], {
        41563: (e, t, n) => {
            n.r(t), n.d(t, {
                NetworkObservers: () => o
            });
            var r = n(97582),
                s = n(81941),
                o = function() {
                    function e() {
                        this.fetchObserver = null
                    }
                    return e.prototype.start = function(e) {
                        this.eventCallback = e, this.observeFetch()
                    }, e.prototype.stop = function() {
                        var e;
                        null === (e = this.fetchObserver) || void 0 === e || e.call(this), this.fetchObserver = null, this.eventCallback = void 0
                    }, e.prototype.notifyEvent = function(e) {
                        var t;
                        null === (t = this.eventCallback) || void 0 === t || t.call(this, e)
                    }, e.prototype.observeFetch = function() {
                        var e = this,
                            t = (0, s.l)();
                        if (t) {
                            var n = t.fetch;
                            n && (t.fetch = function(t, s) {
                                return (0, r.mG)(e, void 0, void 0, (function() {
                                    var e, o, a, i, c, h, u;
                                    return (0, r.Jh)(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                e = Date.now(), o = {
                                                    timestamp: e,
                                                    type: "fetch",
                                                    method: (null == s ? void 0 : s.method) || "GET",
                                                    url: t.toString(),
                                                    requestHeaders: null == s ? void 0 : s.headers
                                                }, r.label = 1;
                                            case 1:
                                                return r.trys.push([1, 3, , 4]), [4, n(t, s)];
                                            case 2:
                                                return a = r.sent(), h = Date.now(), o.status = a.status, o.duration = h - e, i = {}, a.headers.forEach((function(e, t) {
                                                    i[t] = e
                                                })), o.responseHeaders = i, this.notifyEvent(o), [2, a];
                                            case 3:
                                                throw c = r.sent(), h = Date.now(), o.duration = h - e, u = c, o.error = {
                                                    name: u.name || "UnknownError",
                                                    message: u.message || "An unknown error occurred"
                                                }, this.notifyEvent(o), c;
                                            case 4:
                                                return [2]
                                        }
                                    }))
                                }))
                            }, this.fetchObserver = function() {
                                t.fetch = n
                            })
                        }
                    }, e
                }()
        }
    }
]);
//# sourceMappingURL=2d42365b12296ed9d1ba92cc0a5fc3c4dfda0018380d66a209b205ce999c60ab.js.map