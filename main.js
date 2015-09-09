console.log($('#A1').val());

$('#A3').change(function() {

	if ($('#A1').val() && $('#A2').val() && $('#A3').val() === "x") {
	alert("x wins")
	}
});

