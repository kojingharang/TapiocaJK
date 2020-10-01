var links = []
var goBack, goNext;
var index = 0;

function move(delta) {
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
	links[index].focus();
}

$(function() {
	links = $("div.g div.yuRUbf a:not([class])");
	goBack = $("a#pnprev").attr("href");
	goNext = $("a#pnnext").attr("href");
	//console.log("links", links)
	//console.log("back", goBack);
	//console.log("next", goNext);

	$(window).keydown(function(e) {
		//console.log("keyDown", e.keyCode);
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
		return true;
	});
	move(0);
});
