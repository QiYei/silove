jQuery(document).ready(function() {
	function c() { /* 排除首页（记得自行修改下首页地址） */
		if (location.href != "http://zhangge.net/") {
			document.title = document[a] ? "o(∩_∩)o 回头再看看吧!→《" + d + "》" : d
		}

	}


	var a, b, d = document.title;
	"undefined" != typeof document.hidden ? (a = "hidden", b = "visibilitychange") : "undefined" != typeof document.mozHidden ? (a = "mozHidden", b = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (a = "webkitHidden", b = "webkitvisibilitychange");
	"undefined" == typeof document.addEventListener && "undefined" == typeof document[a] || document.addEventListener(b, c, !1)
});
