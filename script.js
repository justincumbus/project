var colors = createColors();
var pickedColor = pickRandomColor(colors);


var message = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", function() {
	colors = createColors();
	pickedColor = pickRandomColor(colors);
	colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i].rgb;
}

});
colorDisplay.textContent = pickedColor;

function createColors() {
	var colorArray = [];
	var count = 0;
	var r = 0;
	var g = 0;
	var b = 0;

	while (count < 6) {

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
