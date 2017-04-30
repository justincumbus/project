var colors = createColors(6);
var pickedColor;

var message = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");

var numSquares = 6;

init();

function setUpModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", modeButtonListenerAction)

	}

}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", setupSquaresListenerAction )


	}


}

function init() {
	setUpModeButtons();
	setupSquares();
	reset();



}





function reset() {
	colors = createColors(numSquares);

	pickedColor = pickRandomColor(colors);
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	resetButton.textContent = "New Colors";
	document.querySelector("H1").style.background = "steelblue";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i].rgb;
			squares[i].style.display = "block";
		}
		else {
			squares[i].style.display = "none";
		}
	}
}




resetButton.addEventListener("click", function() {

	colors = createColors(numSquares);

	pickedColor = pickRandomColor(colors);
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	resetButton.textContent = "New Colors";
	document.querySelector("H1").style.background = pickedColor;
	for (var i = 0; i < numSquares; i++) {
		squares[i].style.background = colors[i].rgb;
	}


	document.querySelector("H1").style.background = "steelblue";

});
colorDisplay.textContent = pickedColor;

function createColors(num) {
	var colorArray = [];
	var count = 0;
	var r = 0;
	var g = 0;
	var b = 0;

	while (count < num) {

		r = ("(".concat(getRandomNumberBetweenOneAnd255())).concat(", ");
		g = getRandomNumberBetweenOneAnd255() + ", ";
		b = getRandomNumberBetweenOneAnd255() + ")";

		colorArray.push({
			text: "rgb",
			red: r,
			green: g,
			blue: b,
			rgb: "rgb".concat(r).concat(g).concat(b)
		});

		count++;
	}

	return colorArray;

}



function pickRandomColor(colors) {
	var selectedColor = colors[Math.floor(Math.random() * (colors.length - 0)) + 0].rgb;
	return selectedColor;

}





function getRandomNumberBetweenOneAnd255() {
	return Math.floor(Math.random() * (256 - 0)) + 0;

}


function modeButtonListenerAction () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			if (this.textContent === "Easy") {
				numSquares = 3;

			}
			else {
				numSquares = 6;
			}
			reset();

		}
		
function setupSquaresListenerAction(){
	
			if (this.style.background === pickedColor) {
				message.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				document.querySelector("H1").style.background = pickedColor;
				for (var i = 0; i < squares.length; i++) {
					squares[i].style.background = pickedColor;
				}

			}
			else {
				message.textContent = "Incorrect!";
				this.style.background = "#232323";
			}


		
}