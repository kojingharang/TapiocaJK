var links = []
var goBack, goNext;
var index = 0;

function move(delta) {
	if(links.length==0) return;
//	console.log("move", "index", index, "delta", delta, "links", links, "goBack", goBack, "goNext", goNext);

	index += delta;
	if(index==-1 && goBack) {
		window.location.href = goBack;
		return;
	}
	if(index==links.length && goNext) {
		window.location.href = goNext;
		return;
	}

	index = Math.min(Math.max(index, 0), links.length-1);
	if(links[index]) {
		links[index].focus();
		for(var i=0;i<links.length;i++) links[i].style.outline = "";
		links[index].style.outline = "ridge 1px";
		//console.log("focus", links[index]);
	}
}

$(function() {
//	links = $("div.g div.yuRUbf > a:not([class])");
	links = $("div.kvH3mc div.yuRUbf a");
	goBack = $("a#pnprev").attr("href");
	goNext = $("a#pnnext").attr("href");
//	console.log("links", links)
//	console.log("back", goBack);
//	console.log("next", goNext);

	$(window).keydown(function(e) {
//		console.log("keyDown", e.keyCode);
//		console.log("focus", $(":focus"), $(":focus").prop("tagName"));
//		console.log("index", index);
		if($(":focus").prop("tagName")=="TEXTAREA") return true;

		if(e.keyCode==74) {
			// j (down)
			move(1);
			return false;
		}
		if(e.keyCode==75) {
			// k (up)
			move(-1);
			return false;
		}
//		if(e.keyCode==191) {
//			// / (focus search box)
//			$("input.gLFyf.gsfi").focus();
//			return false;
//		}
		return true;
	});
	move(0);
});
