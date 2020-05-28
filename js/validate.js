$(function(){
	
	var elements = $("input[type!='submit'], textarea, select");
	elements.focus(function() {
		$(this).parents('div').addClass('highlight');
	});
	elements.blur(function() {
		$(this).parents('div').removeClass('highlight');
	});
	
	$("#forgotpassword").click(function() {
		$("#password").removeClass("required");
		$("#login").submit();
		$("#password").addClass("required");
		return false;
	});

	$("#login").validate()
	$("#mail-form").validate()
});