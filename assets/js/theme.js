function ownKeys(t, e) {
    var r, a = Object.keys(t);
    return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
    })), a.push.apply(a, r)), a
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(Object(r), !0).forEach(function(e) {
            _defineProperty(t, e, r[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        })
    }
    return t
}

function _defineProperty(e, t, r) {
    return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function _toPropertyKey(e) {
    e = _toPrimitive(e, "string");
    return "symbol" === _typeof(e) ? e : String(e)
}

function _toPrimitive(e, t) {
    if ("object" !== _typeof(e) || null === e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 === r) return ("string" === t ? String : Number)(e);
    r = r.call(e, t || "default");
    if ("object" !== _typeof(r)) return r;
    throw new TypeError("@@toPrimitive must return a primitive value.")
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

! function() {
    "use strict";
    var t, e, r, a, n, o, l, i;
    null != (a = document.querySelector(".navbar.fixed-top")) && (a.classList, r = function(e) {
            20 < e.currentTarget.pageYOffset ? (a.classList.add("navbar-stuck"), a.classList.contains("navbar-ignore-dark-mode") && a.classList.remove("ignore-dark-mode")) : (a.classList.remove("navbar-stuck"), a.classList.contains("navbar-ignore-dark-mode") && a.classList.add("ignore-dark-mode"))
        }, window.addEventListener("load", function(e) {
            r(e)
        }), window.addEventListener("scroll", function(e) {
            r(e)
        })), null != (i = document.querySelector(".btn-scroll-top")) && (n = parseInt(450, 10), o = i.querySelector("svg circle"), l = o.getTotalLength(), o.style.strokeDasharray = l, o.style.strokeDashoffset = l, window.addEventListener("scroll", function(e) {
            e.currentTarget.pageYOffset > n ? i.classList.add("show") : i.classList.remove("show"), e = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight), o.style.strokeDashoffset = l - l * e
        })),
        function() {
            var n, o = document.querySelectorAll(".masonry-grid");
            if (null !== o)
                for (var e = 0; e < o.length; e++) {
                    var t = function(e) {
                        n = new Shuffle(o[e], {
                            itemSelector: ".masonry-grid-item",
                            sizer: ".masonry-grid-item"
                        }), imagesLoaded(o[e]).on("progress", function() {
                            n.layout()
                        });
                        var a = o[e].closest(".masonry-filterable");
                        if (null === a) return {
                            v: void 0
                        };
                        for (var t = a.querySelectorAll(".masonry-filters [data-group]"), r = 0; r < t.length; r++) t[r].addEventListener("click", function(e) {
                            var t = a.querySelector(".masonry-filters .active"),
                                r = this.dataset.group;
                            null !== t && t.classList.remove("active"), this.classList.add("active"), n.filter(r), e.preventDefault()
                        })
                    }(e);
                    if ("object" === _typeof(t)) return t.v
                }
        }(),
        function() {
            for (var r = document.querySelectorAll(".password-toggle"), e = 0; e < r.length; e++) ! function(e) {
                var t = r[e].querySelector(".form-control");
                r[e].querySelector(".password-toggle-btn").addEventListener("click", function(e) {
                    "checkbox" === e.target.type && (e.target.checked ? t.type = "text" : t.type = "password")
                }, !1)
            }(e)
        }(),
      
        function() {
            for (var e = document.querySelectorAll(".parallax"), t = 0; t < e.length; t++) new Parallax(e[t])
        }(),
        function() {
            for (var e = document.querySelectorAll(".swiper"), t = function(e, t) {
                    (a = null != t.dataset.swiperOptions ? JSON.parse(t.dataset.swiperOptions) : a).thumbnails && (r = a.thumbnails.images, a = Object.assign({}, a, {
                        pagination: {
                            el: a.thumbnails.el,
                            clickable: !0,
                            bulletActiveClass: "active",
                            renderBullet: function(e, t) {
                                return "<li class='swiper-thumbnail ".concat(t, "'>\n              <img src='").concat(r[e], "' alt='Thumbnail'>\n            </li>")
                            }
                        }
                    }));
                    var r, a, n, o, t = new Swiper(t, a);
                    a.controlledSlider && (null != (o = document.querySelector(a.controlledSlider)).dataset.swiperOptions && (n = JSON.parse(o.dataset.swiperOptions)), o = new Swiper(o, n), t.controller.control = o), a.bindedContent && t.on("activeIndexChange", function(e) {
                        var t = document.querySelector(e.slides[e.activeIndex].dataset.swiperBinded);
                        document.querySelector(e.slides[e.previousIndex].dataset.swiperBinded).classList.remove("active"), t.classList.add("active")
                    })
                }, r = void 0, a = 0; a < e.length; a++) t.call(r, a, e[a])
        }(),
     
        function() {
            var e = document.querySelectorAll("[data-chart]");
            if (0 !== e.length)
                for (var t = 0; t < e.length; t++) {
                    var r = JSON.parse(e[t].dataset.chart);
                    new Chart(e[t], r)
                }
        }(),
        function() {
            for (var n = document.querySelectorAll(".range-slider"), e = 0; e < n.length; e++) ! function(e) {
                var t = n[e].querySelector(".range-slider-ui"),
                    r = n[e].querySelector(".range-slider-value-min"),
                    a = n[e].querySelector(".range-slider-value-max"),
                    e = {
                        dataStartMin: parseInt(n[e].dataset.startMin, 10),
                        dataStartMax: parseInt(n[e].dataset.startMax, 10),
                        dataMin: parseInt(n[e].dataset.min, 10),
                        dataMax: parseInt(n[e].dataset.max, 10),
                        dataStep: parseInt(n[e].dataset.step, 10),
                        dataPips: n[e].dataset.pips
                    };
                noUiSlider.create(t, {
                    start: e.dataStartMax ? [e.dataStartMin, e.dataStartMax] : [e.dataStartMin],
                    connect: !!e.dataStartMax || "lower",
                    step: e.dataStep,
                    pips: !!e.dataPips && {
                        mode: "count",
                        values: 5
                    },
                    tooltips: !0,
                    range: {
                        min: e.dataMin,
                        max: e.dataMax
                    },
                    format: {
                        to: function(e) {
                            return "$" + parseInt(e, 10)
                        },
                        from: function(e) {
                            return Number(e)
                        }
                    }
                }), t.noUiSlider.on("update", function(e, t) {
                    e = (e = e[t]).replace(/\D/g, "");
                    t ? a && (a.value = Math.round(e)) : r && (r.value = Math.round(e))
                }), r && r.addEventListener("change", function() {
                    t.noUiSlider.set([this.value, null])
                }), a && a.addEventListener("change", function() {
                    t.noUiSlider.set([null, this.value])
                })
            }(e)
        }(),
        function() {
            var e = document.querySelectorAll(".date-picker");
            if (0 !== e.length)
                for (var t = 0; t < e.length; t++) {
                    var r = void 0,
                        a = (null != e[t].dataset.datepickerOptions && (r = JSON.parse(e[t].dataset.datepickerOptions)), e[t].classList.contains("date-range") ? {
                            plugins: [new rangePlugin({
                                input: e[t].dataset.linkedInput
                            })]
                        } : "{}"),
                        a = _objectSpread(_objectSpread(_objectSpread({}, {
                            disableMobile: "true"
                        }), a), r);
                    flatpickr(e[t], a)
                }
        }(),
        function() {
            for (var e = document.querySelectorAll(".calendar"), t = function(e, t) {
                    var r = _objectSpread({
                        themeSystem: "bootstrap5"
                    }, r = null != t.dataset.calendarOptions ? JSON.parse(t.dataset.calendarOptions) : r);
                    new FullCalendar.Calendar(t, r).render()
                }, r = void 0, a = 0; a < e.length; a++) t.call(r, a, e[a])
        }(), window.addEventListener("load", function() {
            var e = document.getElementsByClassName("needs-validation");
            Array.prototype.filter.call(e, function(t) {
                t.addEventListener("submit", function(e) {
                    !1 === t.checkValidity() && (e.preventDefault(), e.stopPropagation()), t.classList.add("was-validated")
                }, !1)
            })
        }, !1),
        function() {
            var a = document.querySelectorAll("[data-format]");
            if (0 !== a.length)
                for (var e = 0; e < a.length; e++) ! function(e) {
                    var e = a[e],
                        t = e.parentNode.querySelector(".credit-card-icon"),
                        r = void 0;
                    null != e.dataset.format && (r = JSON.parse(e.dataset.format)), t ? new Cleave(e, _objectSpread(_objectSpread({}, r), {}, {
                        onCreditCardTypeChanged: function(e) {
                            t.className = "credit-card-icon " + e
                        }
                    })) : new Cleave(e, r)
                }(e)
        }(),
        function() {
            for (var e = document.querySelectorAll("[data-binded-label]"), t = 0; t < e.length; t++) e[t].addEventListener("change", function() {
                var e = this.dataset.bindedLabel;
                try {
                    document.getElementById(e).textContent = this.value
                } catch (e) {
                    e.message = "Cannot set property 'textContent' of null", console.error("Make sure the [data-binded-label] matches with the id of the target element you want to change text of!")
                }
            })
        }(),
        function() {
            for (var e = document.querySelectorAll("[data-binded-content]"), t = (document.querySelectorAll("[data-scroll-binded]"), document.querySelector(".binded-content"), 0); t < e.length; t++) e[t].addEventListener("click", function(e) {
                e = e.currentTarget.dataset.bindedContent;
                (function(e) {
                    for (var t = [], r = e.parentNode.firstChild; r;) 1 === r.nodeType && r !== e && t.push(r), r = r.nextSibling;
                    return t
                })(e = document.querySelector(e)).map(function(e) {
                    e.classList.remove("active")
                }), e.classList.add("active")
            })
        }(),
        function() {
            for (var n = document.querySelectorAll(".count-input"), e = 0; e < n.length; e++) ! function(e) {
                var e = n[e],
                    t = e.querySelector("[data-increment]"),
                    r = e.querySelector("[data-decrement]"),
                    a = e.querySelector(".form-control");
                t.addEventListener("click", function() {
                    a.value++
                }), r.addEventListener("click", function() {
                    0 < a.value && a.value--
                })
            }(e)
        }(),
        function() {
            var r = document.querySelectorAll("[data-focus-on-open]");
            if (null !== r)
                for (var e = 0; e < r.length; e++) ! function(t) {
                    var e = JSON.parse(r[t].dataset.focusOnOpen);
                    document.querySelector(e[1]).addEventListener("shown.bs.".concat(e[0]), function(e) {
                        r[t].focus()
                    })
                }(e)
        }(), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e) {
            return new bootstrap.Tooltip(e, {
                trigger: "hover"
            })
        }), [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e) {
            return new bootstrap.Popover(e)
        }), [].slice.call(document.querySelectorAll(".toast")).map(function(e) {
            return new bootstrap.Toast(e)
        }),
        function() {
            var e = document.querySelectorAll('[data-bs-toggle="video"]');
            if (e.length)
                for (var t = 0; t < e.length; t++) lightGallery(e[t], {
                    selector: "this",
                    plugins: [lgVideo],
                    licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
                    download: !1,
                    youtubePlayerParams: {
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0
                    },
                    vimeoPlayerParams: {
                        byline: 0,
                        portrait: 0,
                        color: "6366f1"
                    }
                })
        }(),
        function() {
            var e = document.querySelectorAll(".price-switch-wrapper");
            if (!(e.length <= 0))
                for (var t = 0; t < e.length; t++) e[t].querySelector('[data-bs-toggle="price"]').addEventListener("change", function(e) {
                    var t = e.currentTarget.querySelector("[data-monthly-switch]"),
                        r = e.currentTarget.querySelector("[data-annual-switch]"),
                        a = e.currentTarget.closest(".price-switch-wrapper").querySelectorAll("[data-monthly-price]"),
                        e = e.currentTarget.closest(".price-switch-wrapper").querySelectorAll("[data-annual-price]");
                    if (1 == t.checked)
                        for (var n = a, o = e, l = 0; l < n.length; l++) o[l].classList.add("d-none"), n[l].classList.remove("d-none");
                    if (1 == r.checked)
                        for (var i = a, c = e, s = 0; s < i.length; s++) i[s].classList.add("d-none"), c[s].classList.remove("d-none")
                })
        }(),
        function() {
            var e = document.querySelectorAll('[data-bs-toggle="checkbox"]');
            if (0 !== e.length)
                for (var t = 0; t < e.length; t++) e[t].addEventListener("click", function(e) {
                    e.preventDefault();
                    var e = document.querySelector(e.target.dataset.bsTarget),
                        t = e.querySelectorAll('input[type="checkbox"]');
                    if (e.classList.toggle("all-checked"), e.classList.contains("all-checked"))
                        for (var r = 0; r < t.length; r++) t[r].checked = !0;
                    else
                        for (var a = 0; a < t.length; a++) t[a].checked = !1
                })
        }(),
        function() {
            var e = document.querySelectorAll(".countdown");
            if (0 !== e.length)
                for (var t = 0; t < e.length; t++) {
                    var r = e[t].dataset.countdownDate;
                    timezz(e[t], {
                        date: r
                    })
                }
        }(),
        function() {
            var l = document.querySelectorAll(".subscription-form");
            if (null !== l) {
                for (var e = 0; e < l.length; e++) ! function(e) {
                    var t = l[e].querySelector('button[type="submit"]'),
                        r = t.innerHTML,
                        a = l[e].querySelector(".form-control"),
                        n = l[e].querySelector(".subscription-form-antispam"),
                        o = l[e].querySelector(".subscription-status");
                    l[e].addEventListener("submit", function(e) {
                        e && e.preventDefault(), "" === n.value && i(this, t, a, r, o)
                    })
                }(e);
                var i = function(e, t, r, a, n) {
                    t.innerHTML = "Sending...";
                    var e = e.action.replace("/post?", "/post-json?"),
                        o = "&" + r.name + "=" + encodeURIComponent(r.value),
                        l = document.createElement("script"),
                        i = (l.src = e + "&c=callback" + o, document.body.appendChild(l), "callback");
                    window[i] = function(e) {
                        delete window[i], document.body.removeChild(l), t.innerHTML = a, "success" == e.result ? (r.classList.remove("is-invalid"), r.classList.add("is-valid"), n.classList.remove("status-error"), n.classList.add("status-success"), n.innerHTML = e.msg, setTimeout(function() {
                            r.classList.remove("is-valid"), n.innerHTML = "", n.classList.remove("status-success")
                        }, 6e3)) : (r.classList.remove("is-valid"), r.classList.add("is-invalid"), n.classList.remove("status-success"), n.classList.add("status-error"), n.innerHTML = e.msg.substring(4), setTimeout(function() {
                            r.classList.remove("is-invalid"), n.innerHTML = "", n.classList.remove("status-error")
                        }, 6e3))
                    }
                }
            }
        }()
}();