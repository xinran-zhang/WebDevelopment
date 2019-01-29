// check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event) {
	// remove the parent element of the span
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	// stop the event from bubbling up to its parents
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	// check for the enter key
	if(event.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");
	}
});

$(".fa-plus").click(function () {
	$("input[type='text']").fadeToggle();
})