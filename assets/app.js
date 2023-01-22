$(document).ready(function () {


	$(".fa-chevron-down").click(function () {
		$("#toggle__background").slideToggle();
	});

	$("#custom__background span").click(function () {
		const bgid = $(this).attr("id");
		$("body").removeClass().addClass(bgid);
	});

	$("#custom__submit").click(function () {
		const customurl = $("#custom__input").val();
		$("<style type='text/css'>body{ background-image: url(" + customurl + ")}</style>").appendTo("head");
		$("body").removeClass().addClass("bg_custom");
	});
});