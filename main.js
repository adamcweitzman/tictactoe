var playerXWins = 0;
var playerOWins = 0;












function xory (xo) {


	$('#A1, #A2, #A3, #B1, #B2, #B3, #C1, #C2, #C3').change(function() {



		square1 = $('#A1');
		square2 = $('#A2');
		square3 = $('#A3');
		square4 = $('#B1');
		square5 = $('#B2');
		square6 = $('#B3');
		square7 = $('#C1');
		square8 = $('#C2');
		square9 = $('#C3');


		if ($(square4).val() === xo && $(square5).val() === xo && $(square6).val() === xo) {
			alert(xo + " " + "wins");
			
			if (xo === "x") {
				playerXWins += 1
				$('#playerXWins').html(playerXWins)
				$('#B1, #B2, #B3').prop('selectedIndex',0);
			
			} else {
				playerOWins += 1
				$('#playerOWins').html(playerOWins)
				$('#B1, #B2, #B3').prop('selectedIndex',0)
			}

		} else if ($(square7).val() === xo && $(square8).val() === xo && $(square9).val() === xo) {
			alert(xo + " " + "wins");

				if (xo === "x") {
				playerXWins += 1
				$('#playerXWins').html(playerXWins)
				$('#C1, #C2, #C3').prop('selectedIndex',0);
			
			} else {
				playerOWins += 1
				$('#playerOWins').html(playerOWins)
				$('#C1, #C2, #C3').prop('selectedIndex',0)
			}
			

		} else if ($(square1).val() === xo && $(square2).val() === xo && $(square3).val() === xo) {
		alert(xo + " " + "wins");
		console.log("row1")
		
		} else if ($(square1).val() === xo && $(square4).val() === xo && $(square7).val() === xo) {
		alert(xo + " " + "wins");
		console.log("row1")

		} else if ($(square2).val() === xo && $(square5).val() === xo && $(square8).val() === xo) {
		alert(xo + " " + "wins");
		console.log("row1")

		} else if ($(square3).val() === xo && $(square6).val() === xo && $(square9).val() === xo) {
		alert(xo + " " + "wins");
		console.log("row1")

		} else if ($(square1).val() === xo && $(square5).val() === xo && $(square9).val() === xo) {
		alert(xo + " " + "wins");
		console.log("row1")

		} else if ($(square3).val() === xo && $(square5).val() === xo && $(square7).val() === xo) {
		alert(xo + " " + "wins");
		console.log("row1")
		}

 	});
}

xory("x")
xory("o")



// function playerWins {
// 	if (xo === "x") {

// 		playerXWins += playerXWins

// 	} else if (xo === "y") {

// 		playerYWins += playerYWins
// 	}
// }
// winEvaluate(square1,square2,square3,"o");
// winEvaluate(square4,square5,square6,"x");
// winEvaluate(square4,square5,square6,"o");

// winEvaluate(square)

// 	$(square1, square2, square3).change(function() {

// 		console.log("work?")

// 		if ($(square1).val() === xo && $(square2).val() === xo && $(square3).val() === xo) {
// 		alert(xo + "wins");
// 		}
// 	});
// };

// winEvaluate('#A1, #A2 , #A3',"x")


// next steps: write if statement for more situations (if three 0's...)

