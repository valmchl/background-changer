$(document).ready(function(){
	
	
	$(".fa-image").click(function(){
		$("#toggle_background").slideToggle();
	});
	
	$("#custom__background span").click(function(){
		$('custom__url',null,{ expires: -5, path: '/'});
		var bgid = $(this).attr("id");
		$('custombg',bgid,{ expires: 365, path: '/'});
		$("body").removeClass().addClass(bgid);
	});
	
	$("#custom__submit").click(function(){
		$('custombg',"bg_custom",{ expires: 365, path: '/'});
		var customurl = $("#custom__input").val();
		$('custom__url',customurl,{ expires: 365, path: '/'});
		$("<style type='text/css'>body#bg_custom{ background-image: url(" + customurl + ")}</style>").appendTo("head");
		$("body").removeClass().addClass("bg_custom");
	});
		
	if ( (('custombg') != null))	{
		$("body").addClass('custombg');
	}
	else{
		$("body").addClass("bg0");
	}
	
	if ( (('custom_url') != null))	{
		$("<style type='text/css'>body#bg_custom{ background-image: url(" + $('custom_url') + ")}</style>").appendTo("head");
		$("body").addClass("bg_custom");
	}
	
});