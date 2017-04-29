var colors = createColors(6);
var pickedColor = pickRandomColor(colors);


var message = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");

var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var numSquares = 6;

easyButton.addEventListener("click", function () {
	numSquares = 3;
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = createColors(numSquares);
	pickedColor = pickRandomColor(colors);
	colorDisplay.textContent = 
	document.querySelector("H1").style.background = pickedColor;
	document.querySelector("H1").style.background =  "#232323"
	
	for (var i=0; i < squares.length ; i++){
		if (colors[i]) {
			squares[i].style.background = colors[i].rgb;
		} else  {
			squares[i].style.display="none";
		}
	}

});

hardButton.addEventListener("click", function () {
	numSquares=6;
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors = createColors(6);
	pickedColor = pickRandomColor(colors);
	colorDisplay.textContent = pickedColor;
document.querySelector("H1").style.background =  "#232323"	
	
	for (var i =0; i < colors.length; i++){
		
		squares[i].style.background = colors[i].rgb;
		squares[i].style.display="block";
	}
	
});


var resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", function() {
	
	colors = createColors(numSquares);
	
	pickedColor = pickRandomColor(colors);
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	document.querySelector("H1").style.background = pickedColor;
for (var i = 0; i < numSquares; i++) {
	squares[i].style.background = colors[i].rgb;
}


document.querySelector("H1").style.background =  "#232323";

});
colorDisplay.textContent = pickedColor;

function createColors(num) {
	var colorArray = [];
	var count = 0;
	var r = 0;
	var g = 0;
	var b = 0;

		while (count < num) {

		r = ("(".concat(Math.floor(Math.random() * (256 - 0)) + 0)).concat(", ");
		g = (Math.floor(Math.random() * (256 - 0)) + 0) + ", ";
		b = (Math.floor(Math.random() * (256 - 0)) + 0) + ")";

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






console.log(squares);
for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i].rgb;



	squares[i].addEventListener("click", function() {
		if (this.style.background === pickedColor) {
			message.textContent = "Correct!";
			document.querySelector("H1").style.background = pickedColor;
			for (var i = 0; i < squares.length; i++) {
				squares[i].style.background = pickedColor;
			}

		}
		else {
			message.textContent = "incorrect. try again";
			this.style.background = "#232323";
		}


	});


}

for (var i = 0; i < squares.length; i++) {


}
