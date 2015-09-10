var playerXWins = 0;
var playerOWins = 0;

// // $(document).click(function (event) {    		
//     $('#myDIV:visible').hide();
// });











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
				popImageX()
				clearBoard()
				
			
			} else {
				playerOWins += 1
				$('#playerOWins').html(playerOWins)
				clearBoard()
			}

		} else if ($(square7).val() === xo && $(square8).val() === xo && $(square9).val() === xo) {
			alert(xo + " " + "wins");

			if (xo === "x") {
				playerXWins += 1
				$('#playerXWins').html(playerXWins)
				clearBoard()
				popImageX()
			
			} else {
				playerOWins += 1
				$('#playerOWins').html(playerOWins)
				clearBoard()

			}
			

		} else if ($(square1).val() === xo && $(square2).val() === xo && $(square3).val() === xo) {
		alert(xo + " " + "wins");

			if (xo === "x") {
				playerXWins += 1
				$('#playerXWins').html(playerXWins)
				clearBoard()
				popImageX()
			
			} else {
				playerOWins += 1
				$('#playerOWins').html(playerOWins)
				clearBoard()
			}

			// works up to here
		
		} else if ($(square1).val() === xo && $(square4).val() === xo && $(square7).val() === xo) {
		alert(xo + " " + "wins");
		console.log("row1")

			if (xo === "x") {
				playerXWins += 1
				$('#playerXWins').html(playerXWins)
				clearBoard()
				popImageX()
			
			} else {
				playerOWins += 1
				$('#playerOWins').html(playerOWins)
				clearBoard()
			}

		} else if ($(square2).val() === xo && $(square5).val() === xo && $(square8).val() === xo) {
		alert(xo + " " + "wins");
		console.log("row1")

			if (xo === "x") {
				playerXWins += 1
				$('#playerXWins').html(playerXWins)
				clearBoard()
				popImageX()
			
			} else {
				playerOWins += 1
				$('#playerOWins').html(playerOWins)
				clearBoard()
			}

		} else if ($(square3).val() === xo && $(square6).val() === xo && $(square9).val() === xo) {
		alert(xo + " " + "wins");
		console.log("row1")

			if (xo === "x") {
				playerXWins += 1
				$('#playerXWins').html(playerXWins)
				clearBoard()
				popImageX()
			
			} else {
				playerOWins += 1
				$('#playerOWins').html(playerOWins)
				clearBoard()
			}

		} else if ($(square1).val() === xo && $(square5).val() === xo && $(square9).val() === xo) {
		alert(xo + " " + "wins");
		console.log("row1")

			if (xo === "x") {
				playerXWins += 1
				$('#playerXWins').html(playerXWins)
				clearBoard()
				popImageX()
			
			} else {
				playerOWins += 1
				$('#playerOWins').html(playerOWins)
				clearBoard()
			}

		} else if ($(square3).val() === xo && $(square5).val() === xo && $(square7).val() === xo) {
		alert(xo + " " + "wins");
		console.log("row1")

			if (xo === "x") {
				playerXWins += 1
				$('#playerXWins').html(playerXWins)
				clearBoard()
				popImageX()
			
			} else {
				playerOWins += 1
				$('#playerOWins').html(playerOWins)
				clearBoard()
			}
		}

 	});
}

xory("x")
xory("o")

function randoQuote () {

function getRandomInt(min, max) {
  return Math.floor(Math.random() * 8)
}

getRandomInt()

quoteArray = [];

var ultimate = "If you want the ultimate, you've got to be willing to pay the ultimate price. It's not tragic to die doing what you love. - Bodhi (Swayze)"

var warchild = "Back off Warchild, seriously. -Bodhi (Swayze)"

var young = "Young, dumb and full of... - Dr. Cox"

var religion = "Wars of religion always make me laugh because basically you're fighting over who has the best imaginary friend. - Johnny Utah (Keanu)"

var taxpayers = "Do you think that taxpayers would like it Utah, if they knew that they were paying a federal agent to surf and pick up girls? - Dr. Cox"

var snotnose = "Listen you snot-nose little shit, I was takin' shrapnel in Khe Sanh when you were crappin' in your hands and rubbin' it on your face. - Pappas (Gary Busey)"

var rhino = "I'm so hungry I could eat the ass end out of a dead rhino, I should have had you get me three of these things! - Pappas (Gary Busey)"

var change = "22 years. Man, L.A. has changed a lot during that time. The air got dirty and the sex got clean. - Pappas (Gary Busey)"

quoteArray.push(ultimate);
quoteArray.push(warchild);
quoteArray.push(young);
quoteArray.push(religion);
quoteArray.push(taxpayers);
quoteArray.push(snotnose);
quoteArray.push(rhino);
quoteArray.push(change);

var i = getRandomInt()

var randomQuote = quoteArray[i]

return randomQuote

}

setInterval(function () {$('#quote').html(randoQuote())},9000);

function clearBoard () {
	$('#A1, #A2, #A3, #B1, #B2, #B3, #C1, #C2, #C3').prop('selectedIndex',0)

}

$('#plus').on('click',function() {
clearBoard();

});

function popImageX () {

	var xString = "X WINS !!!"
	// $('#popUpImage').append("<img id='theImg' src='imgres.jpg'/>");
	
	$('#popUpImage').show();
	$('#popUpText').show();


	setTimeout(function() {
    $('#popUpImage').fadeOut('fast');
	}, 5000);

	setTimeout(function() {
	$('#popUpText').fadeOut('fast');	
	}, 5000);

	console.log("hi")
}






// Pappas: Listen you snot-nose little shit, I was takin' shrapnel in Khe Sanh when you were crappin' in your hands and rubbin' it on your face.

// Pappas: I'm so hungry I could eat the ass end out of a dead rhino, I should have had you get me three of these things!

// Pappas: 22 years. Man, L.A. has changed a lot during that time. The air got dirty and the sex got clean.

// Johnny Utah: [to Bodhi] You crossed the line. People trusted you and they died. You gotta' go down.







// Bodhi: If you want the ultimate, you've got to be willing to pay the ultimate price. It's not tragic to die doing what you love.
// 8 of 8 found this interesting | Share this
// Bodhi: Back off Warchild, seriously.
// 7 of 7 found this interesting | Share this
// Bodhi: Life sure has a sick sense of humor, doesn't it?
