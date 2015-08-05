$('#photos').bind('panechanged', function () {
	$("img").mouseover(function () {
		$(this).animate({
			width: "175px",
			opacity: 1
		}, 1000);
	});
	$("img").mouseout(function () {
		$(this).animate({
			width: "100px",
			opacity: .3
		}, 1000);
	});
});

//$('#photos').bind('panechanged', function () {
//var rightEdge = window.innerWidth;
//var bottomEdge = window.innerHeight;
//$(window).load(function () {
//	$("#ship").offset({
//		top: bottomEdge / 2,
//		left: rightEdge / 2
//	});
//	$("up").click(function () {
//		$("#ship").attr("src", "../images/saucerUp.png");
//		$("#ship").stop(true).animate({
//			left: 0
//		}, 5000);
//	});
//
//	$("left").click(function () {
//		$("#ship").attr("src", "../images/saucerleft.png");
//		$("#ship").stop(true).animate({
//			left: 0
//		}, 5000);
//	});
//
//	$("right").click(function () {
//		$("#ship").attr("src", "../images/saucerright.png");
//		$("#ship").stop(true).animate({
//			left: rightEdge
//		}, 5000);
//	});
//
//	$("down").click(function () {
//		$("#ship").attr("src", "../images/saucerdown.png");
//		$("#ship").stop(true).animate({
//			left: bottomEdge
//		}, 5000);
//	});
//	$("#stop").click(function () {
//		$("#ship").stop(true)
//	});
//});
//});
