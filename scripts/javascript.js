function moveIt() {
	var coords = new Array(10, 50, 100, 130, 175, 225, 260, 300, 320, 350);
	var x = coords[Math.floor((Math.random() * 10))];
	var y = coords[Math.floor((Math.random() * 10))];
	$("#elusiveText").css({
		"top": x + "px",
		"left": y + "px"
	})
}
