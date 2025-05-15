hljs.registerLanguage("java", function(a) {
    return {
        aliases: ["jsp"],
        k: "Pattern Matcher false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
        i: /<\//,
        c: [{
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*/",
            r: 0,
            c: [{
                cN: "javadoctag",
                b: "(^|\\s)@[A-Za-z]+"
            }]
        }, a.CLCM, a.CBCM, a.ASM, a.QSM, {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [{
                bK: "extends implements"
            }, a.UTM]
        }, {
            bK: "new throw return",
            r: 0
        }, {
            cN: "function",
            b: "(" + (a.UIR + "(<" + a.UIR + ">)?") + "\\s+)+" + a.UIR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: "Pattern Matcher false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
            c: [{
                b: a.UIR + "\\s*\\(",
                rB: !0,
                r: 0,
                c: [a.UTM]
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: "Pattern Matcher false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
                r: 0,
                c: [a.ASM, a.QSM, a.CNM, a.CBCM]
            }, a.CLCM, a.CBCM]
        }, {
            cN: "number",
            b: "(\\b(0b[01_]+)|\\b0[xX][a-fA-F0-9_]+|(\\b[\\d_]+(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?\\d+)?)[lLfF]?",
            r: 0
        }, {
            cN: "annotation",
            b: "@[A-Za-z]+"
        }]
    }
});
hljs.registerLanguage("javascript", function(a) {
    return {
        aliases: ["js"],
        k: {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        },
        c: [{
            cN: "pi",
            r: 10,
            v: [{
                b: /^\s*('|")use strict('|")/
            }, {
                b: /^\s*('|")use asm('|")/
            }]
        }, a.ASM, a.QSM, {
            cN: "string",
            b: "`",
            e: "`",
            c: [a.BE, {
                cN: "subst",
                b: "\\$\\{",
                e: "\\}"
            }]
        }, a.CLCM, a.CBCM, {
            cN: "number",
            b: "\\b(0[xXbBoO][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
            r: 0
        }, {
            b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [a.CLCM, a.CBCM, a.RM, {
                b: /</,
                e: />\s*[);\]]/,
                r: 0,
                sL: "xml"
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [a.inherit(a.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [a.CLCM, a.CBCM],
                i: /["'\(]/
            }],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, {
            b: "\\." + a.IR,
            r: 0
        }, {
            bK: "import",
            e: "[;$]",
            k: "import from as",
            c: [a.ASM, a.QSM]
        }, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{
                bK: "extends"
            }, a.UTM]
        }]
    }
});
hljs.registerLanguage("php", function(a) {
    var c = {
        cN: "variable",
        b: "\\$+[a-zA-Z_\u007f-\u00c3\u00bf][a-zA-Z0-9_\u007f-\u00c3\u00bf]*"
    }
      , b = {
        cN: "preprocessor",
        b: /<\?(php)?|\?>/
    }
      , d = {
        cN: "string",
        c: [a.BE, b],
        v: [{
            b: 'b"',
            e: '"'
        }, {
            b: "b'",
            e: "'"
        }, a.inherit(a.ASM, {
            i: null
        }), a.inherit(a.QSM, {
            i: null
        })]
    }
      , g = {
        v: [a.BNM, a.CNM]
    };
    return {
        aliases: ["php3", "php4", "php5", "php6"],
        cI: !0,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [a.CLCM, a.HCM, a.C("/\\*", "\\*/", {
            c: [{
                cN: "phpdoc",
                b: "\\s@[A-Za-z]+"
            }, b]
        }), a.C("__halt_compiler.+?;", !1, {
            eW: !0,
            k: "__halt_compiler",
            l: a.UIR
        }), {
            cN: "string",
            b: "<<<['\"]?\\w+['\"]?$",
            e: "^\\w+;",
            c: [a.BE]
        }, b, c, {
            b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
        }, {
            cN: "function",
            bK: "function count print_r preg_match preg_match_all preg_replace",
            e: /[;{]/,
            eE: !0,
            i: "\\$|\\[|%",
            c: [a.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: ["self", c, a.CBCM, d, g]
            }]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            i: /[:\(\$"]/,
            c: [{
                bK: "extends implements"
            }, a.UTM]
        }, {
            bK: "namespace",
            e: ";",
            i: /[\.']/,
            c: [a.UTM]
        }, {
            bK: "use",
            e: ";",
            c: [a.UTM]
        }, {
            b: "=>"
        }, d, g]
    }
});
hljs.registerLanguage("python", function(a) {
    var c = {
        cN: "prompt",
        b: /^(>>>|\.\.\.) /
    }
      , b = {
        cN: "string",
        c: [a.BE],
        v: [{
            b: /(u|b)?r?'''/,
            e: /'''/,
            c: [c],
            r: 10
        }, {
            b: /(u|b)?r?"""/,
            e: /"""/,
            c: [c],
            r: 10
        }, {
            b: /(u|r|ur)'/,
            e: /'/,
            r: 10
        }, {
            b: /(u|r|ur)"/,
            e: /"/,
            r: 10
        }, {
            b: /(b|br)'/,
            e: /'/
        }, {
            b: /(b|br)"/,
            e: /"/
        }, a.ASM, a.QSM]
    }
      , d = {
        cN: "number",
        r: 0,
        v: [{
            b: a.BNR + "[lLjJ]?"
        }, {
            b: "\\b(0o[0-7]+)[lLjJ]?"
        }, {
            b: a.CNR + "[lLjJ]?"
        }]
    };
    return {
        aliases: ["py", "gyp"],
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)/,
        c: [c, d, b, a.HCM, {
            v: [{
                cN: "function",
                bK: "def",
                r: 10
            }, {
                cN: "class",
                bK: "class"
            }],
            e: /:/,
            i: /[${=;\n,]/,
            c: [a.UTM, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: ["self", c, d, b]
            }]
        }, {
            cN: "decorator",
            b: /@/,
            e: /$/
        }, {
            b: /\b(print|exec)\(/
        }]
    }
});
hljs.registerLanguage("cs", function(a) {
    var c = a.IR + "(<" + a.IR + ">)?";
    return {
        aliases: ["csharp"],
        k: "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
        i: /::/,
        c: [a.C("///", "$", {
            rB: !0,
            c: [{
                cN: "xmlDocTag",
                v: [{
                    b: "///",
                    r: 0
                }, {
                    b: "\x3c!--|--\x3e"
                }, {
                    b: "</?",
                    e: ">"
                }]
            }]
        }), a.CLCM, a.CBCM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line region endregion pragma checksum"
        }, {
            cN: "string",
            b: '@"',
            e: '"',
            c: [{
                b: '""'
            }]
        }, a.ASM, a.QSM, a.CNM, {
            bK: "class namespace interface",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [a.TM, a.CLCM, a.CBCM]
        }, {
            bK: "new return throw await",
            r: 0
        }, {
            cN: "function",
            b: "(" + c + "\\s+)+" + a.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
            c: [{
                b: a.IR + "\\s*\\(",
                rB: !0,
                c: [a.TM],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
                r: 0,
                c: [a.ASM, a.QSM, a.CNM, a.CBCM]
            }, a.CLCM, a.CBCM]
        }]
    }
});
Date.now || (Date.prototype.now = function() {
    return (new Date).getTime()
}
);
var GA_PAGE_KEY, FOCUS_CONTINUE_BUTTON_ON_COMPLETE = !1, DEBUG = !1, TYPE_SOLUTION_TEXT = !1, FOCUS_ON_SCROLL = !1;
function Exercise(a, c, b) {
    this.data = b;
    this.problems = [];
    this.problemJqEls = c;
    this.exerciseJqEl = a;
    this.editorJqEl = a.find(".exercise_input_field");
    this.editorLastInput = this.editorInputTimeoutTimer = null;
    this.continueJqEl = a.find(".continue");
    this.solutionJqEl = a.find(".solution")
}
Exercise.prototype.proxy = function(a) {
    return $.proxy(a, this)
}
;
Exercise.prototype.initialize = function() {
    $.each(this.data, this.proxy(function(a, b) {
        this.problems.push(new Problem(this.problemJqEls[a],b.type,b.text,"captureData"in b ? b.captureData : null))
    }));
    this.editorJqEl.on("keydown keyup", this.proxy(function(a) {
        this.requestUpdateFromInput()
    }));
    if (FOCUS_ON_SCROLL && window.innerHeight) {
        var a = this.editorJqEl.offset().top + this.editorJqEl.outerHeight()
          , c = !1
          , b = $(window);
        b.on("scroll", this.proxy(function() {
            var d = b.scrollTop();
            !c && d <= a && a <= d + window.innerHeight && (this.editorJqEl.focus(),
            c = !0)
        }))
    }
    this.exerciseJqEl.find(".show_solution_button").on("click", this.proxy(function(a) {
        this.solutionJqEl.css("display", "block");
        this.editorJqEl.focus();
        a.preventDefault();
        a.stopPropagation()
    }));
    this.solutionJqEl.find(".editor_val").on("click", this.proxy(function(a) {
        var b = $(a.target).text();
        if (TYPE_SOLUTION_TEXT) {
            var c = ""
              , e = this.proxy(function() {
                c.length < b.length ? (c = b.substring(0, c.length + 1),
                this.editorJqEl.val(c),
                setTimeout(e, 10)) : (this.requestUpdateFromInput(),
                this.editorJqEl.focus())
            }, this);
            setTimeout(e, 10)
        } else
            this.editorJqEl.focus(),
            this.editorJqEl.val(b),
            this.requestUpdateFromInput();
        a.preventDefault();
        a.stopPropagation()
    }))
}
;
Exercise.prototype.requestUpdateFromInput = function() {
    null != this.editorInputTimeoutTimer && clearTimeout(this.editorInputTimeoutTimer);
    this.editorInputTimeoutTimer = setTimeout(this.proxy(function() {
        this.updateFromInput();
        this.editorInputTimeoutTimer = null
    }), 64)
}
;
Exercise.prototype.updateFromInput = function() {
    if (DEBUG)
        var a = Date.now();
    var c = this.editorJqEl.val();
    if (c != this.editorLastInput) {
        var b = this.recurseCompletePattern(c, 0, c.length, null)[1];
        DEBUG && console.log(c, b);
        var d = !0;
        $.each(this.problems, this.proxy(function(a, k) {
            d = k.verifyInput(c, b) && d
        }));
        d ? this.enableContinueButton() : this.disableContinueButton();
        this.editorLastInput = c;
        DEBUG && console.log("updateFromInput", Date.now() - a)
    }
}
;
Exercise.prototype.enableContinueButton = function() {
    this.continueJqEl.removeClass("disabled");
    this.continueJqEl.removeAttr("disabled");
    FOCUS_CONTINUE_BUTTON_ON_COMPLETE && this.continueJqEl.focus()
}
;
Exercise.prototype.disableContinueButton = function() {
    this.continueJqEl.addClass("disabled");
    this.continueJqEl.attr("disabled", "1")
}
;
Exercise.prototype.recurseCompletePattern = function(a, c, b, d) {
    for (var g = "", k = b, e = c; e <= b; e++) {
        var f = "";
        0 < e && (f = a.charAt(e - 1));
        var h = a.charAt(e);
        if (e == b) {
            null != d && (g += d);
            break
        }
        if (")" == d && "}" == h && "\\" != f || ")" == d && "]" == h && "\\" != f || "]" == d && ")" == h && "\\" != f || "]" == d && "}" == h && "\\" != f || "}" == d && "]" == h && "\\" != f || "}" == d && ")" == h && "\\" != f) {
            g += d;
            k = e;
            break
        } else if (h == d && e < b) {
            g += h;
            k = e + 1;
            break
        } else if ("(" == h && "\\" != f)
            f = this.recurseCompletePattern(a, e + 1, b, ")"),
            g += h + f[1],
            e += f[0];
        else if ("[" == h && "\\" != f)
            f = this.recurseCompletePattern(a, e + 1, b, "]"),
            g += h + f[1],
            e += f[0];
        else if ("{" == h && "\\" != f)
            f = this.recurseCompletePattern(a, e + 1, b, "}"),
            g += h + f[1],
            e += f[0];
        else if (e < b)
            g += h;
        else
            break
    }
    return [k - c, g]
}
;
function Problem(a, c, b, d) {
    this.problemJqEl = a;
    this.textJqEl = $(a).find(".text");
    this.resultJqEl = $(a).find(".result");
    this.groupJqEls = $(a).find(".groups").find(".group");
    this.type = c;
    this.text = b;
    this.captureData = d
}
Problem.prototype.proxy = function(a) {
    return $.proxy(a, this)
}
;
Problem.prototype.verifyInput = function(a, c) {
    try {
        if (0 == a.length)
            return this.clearResult(),
            !1;
        var b = null
          , d = null;
        try {
            b = this.text.match(RegExp(a, ""))
        } catch (g) {}
        try {
            d = this.text.match(new RegExp(c,""))
        } catch (k) {}
        if ("match" == this.type || "capture" == this.type) {
            if (null != d) {
                var e = this.escapeHtml(this.text.substring(0, d.index)) + "<span class='match_succeeded'>" + this.escapeHtml(d[0]) + "</span>" + this.escapeHtml(this.text.substring(d.index + d[0].length, this.text.length));
                this.textJqEl.html(e)
            }
            if (null != b) {
                if (this.captureData) {
                    var f = b.slice(1, b.length)
                      , h = _.intersection(f, this.captureData.results)
                      , l = _.difference(this.captureData.results, h);
                    $.each(this.groupJqEls, this.proxy(function(a, b) {
                        var d = $(b)
                          , c = d.text();
                        -1 != _.indexOf(h, c) ? this.markGroupMatched(d) : -1 != _.indexOf(l, c) && this.markGroupMissed(d)
                    }));
                    return 0 == l.length ? this.markSucceeded() : this.markFailed()
                }
                return this.markSucceeded()
            }
            null != d ? this.clearNonTextResult() : this.clearResult();
            return this.markFailed()
        }
        if ("skip" == this.type) {
            if (null == b)
                return this.clearResult(),
                !0;
            e = this.escapeHtml(this.text.substring(0, b.index)) + "<span class='match_failed'>" + this.escapeHtml(b[0]) + "</span>" + this.escapeHtml(this.text.substring(b.index + b[0].length, this.text.length));
            this.textJqEl.html(e);
            return this.markFailed()
        }
        alert("Invalid type")
    } catch (m) {
        DEBUG && console.log(m)
    }
    return !1
}
;
Problem.prototype.markGroupMatched = function(a) {
    a.addClass("succeeded");
    return !0
}
;
Problem.prototype.markGroupMissed = function(a) {
    a.removeClass("succeeded");
    return !1
}
;
Problem.prototype.markSucceeded = function() {
    this.resultJqEl.html("<img src='../cs/images/task_complete.png' alt='Success' />");
    this.resultJqEl.removeClass("succeeded failed").addClass("succeeded");
    return !0
}
;
Problem.prototype.markFailed = function() {
    this.resultJqEl.html("<img src='../cs/images/task_incomplete.png' alt='Failed' />");
    this.resultJqEl.removeClass("succeeded failed").addClass("failed");
    return !1
}
;
Problem.prototype.clearResult = function() {
    this.textJqEl.text(this.text);
    this.clearNonTextResult()
}
;
Problem.prototype.clearNonTextResult = function() {
    this.resultJqEl.html("<img src='../cs/images/task_default.png' alt='To be completed' />");
    this.resultJqEl.removeClass("succeeded failed");
    this.captureData && $.each(this.groupJqEls, this.proxy(function(a, c) {
        this.markGroupMissed($(c))
    }))
}
;
Problem.prototype.escapeHtml = function(a) {
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
}
;
function ButtonHoverHelper(a, c, b, d) {
    this.menuJqEl = c;
    this.lessonJqEl = b;
    this.practiceJqEl = d;
    this.lessonMenuVisible = this.menuContainerVisible = !1;
    this.leaveTimeoutTimer = null;
    this.forceOpen = !1;
    a.on("click", this.proxy(this.onBackgroundClick));
    b.on("click", this.proxy(this.onClickLesson));
    b.on("mouseenter", this.proxy(this.onMouseEnterLesson));
    b.on("mouseleave", this.proxy(this.onMouseLeave));
    d.on("click", this.proxy(this.onClickPractice));
    d.on("mouseenter", this.proxy(this.onMouseEnterPractice));
    d.on("mouseleave", this.proxy(this.onMouseLeave));
    c.on("mouseenter", this.proxy(this.onMouseEnterMenu));
    c.on("mouseleave", this.proxy(this.onMouseLeave))
}
ButtonHoverHelper.prototype.proxy = function(a) {
    return $.proxy(a, this)
}
;
ButtonHoverHelper.prototype.onBackgroundClick = function() {
    this.menuContainerVisible && (this.hideMenuContainer(),
    this.forceOpen = !1)
}
;
ButtonHoverHelper.prototype.onClickLesson = function(a) {
    if (this.forceOpen)
        if (this.lessonMenuVisible)
            this.onBackgroundClick();
        else
            this.showLessonMenu();
    else
        this.showLessonMenu(),
        this.forceOpen = !0;
    a.preventDefault();
    a.stopPropagation()
}
;
ButtonHoverHelper.prototype.onClickPractice = function(a) {
    if (this.forceOpen)
        if (this.lessonMenuVisible)
            this.showPracticeMenu();
        else
            this.onBackgroundClick();
    else
        this.showPracticeMenu(),
        this.forceOpen = !0;
    a.preventDefault();
    a.stopPropagation()
}
;
ButtonHoverHelper.prototype.onMouseEnterLesson = function() {
    this.forceOpen || (null != this.leaveTimeoutTimer && clearTimeout(this.leaveTimeoutTimer),
    this.showLessonMenu())
}
;
ButtonHoverHelper.prototype.onMouseEnterPractice = function() {
    this.forceOpen || (null != this.leaveTimeoutTimer && clearTimeout(this.leaveTimeoutTimer),
    this.showPracticeMenu())
}
;
ButtonHoverHelper.prototype.onMouseEnterMenu = function() {
    null != this.leaveTimeoutTimer && clearTimeout(this.leaveTimeoutTimer)
}
;
ButtonHoverHelper.prototype.onMouseLeave = function() {
    this.forceOpen || (null != this.leaveTimeoutTimer && clearTimeout(this.leaveTimeoutTimer),
    this.leaveTimeoutTimer = setTimeout(this.proxy(this.onLeave), 250))
}
;
ButtonHoverHelper.prototype.onEnter = function() {
    this.menuJqEl.fadeIn(125, this.proxy(function() {
        this.menuContainerVisible = !0
    }))
}
;
ButtonHoverHelper.prototype.onLeave = function() {
    this.hideMenuContainer()
}
;
ButtonHoverHelper.prototype.hideMenuContainer = function() {
    this.menuJqEl.fadeOut(125, this.proxy(function() {
        this.menuJqEl.find(".lesson_menu").hide();
        this.menuJqEl.find(".practice_menu").hide();
        this.menuContainerVisible = !1
    }))
}
;
ButtonHoverHelper.prototype.showLessonMenu = function() {
    this.menuContainerVisible ? (this.menuJqEl.find(".practice_menu").hide(),
    this.menuJqEl.find(".lesson_menu").show()) : (this.menuJqEl.find(".lesson_menu").show(),
    this.onEnter());
    this.lessonMenuVisible = !0
}
;
ButtonHoverHelper.prototype.showPracticeMenu = function() {
    this.menuContainerVisible ? (this.menuJqEl.find(".lesson_menu").hide(),
    this.menuJqEl.find(".practice_menu").show()) : (this.menuJqEl.find(".practice_menu").show(),
    this.onEnter());
    this.lessonMenuVisible = !1
}
;
function initializeDocumentLoad(a, c) {
    GA_PAGE_KEY = c;
    new ButtonHoverHelper($("body"),$(".menu_container"),$(".lesson_button"),$(".more_button"));
    $(".paypal_donation_button").bind("click", function(a) {
        $("#paypal_form").submit();
        a.preventDefault();
        a.stopPropagation()
    });
    $("code[class=javascript]").each(function(a, b) {
        hljs.highlightBlock(b)
    });
    $("code[class=java]").each(function(a, b) {
        hljs.highlightBlock(b)
    });
    $("code[class=cs]").each(function(a, b) {
        hljs.highlightBlock(b)
    });
    $("code[class=python]").each(function(a, b) {
        hljs.highlightBlock(b)
    });
    $("code[class=php]").each(function(a, b) {
        hljs.highlightBlock(b)
    });
    var b = JSON.parse(a);
    $(".exercise").each(function(a, c) {
        (new Exercise($(c),$(".problem"),b)).initialize()
    });
    b = null
}
;