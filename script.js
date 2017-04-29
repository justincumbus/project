var colors=createColors();


function createColors () {
var colorArray = [];
var count =0;
var r = 0;
var g =0;
var b =0;

while (count < 6) {

 r = ("(".concat (Math.floor(Math.random() * (256- 0)) + 0)).concat(", ");
 g = (Math.floor(Math.random() * (256- 0)) + 0) + ", ";
 b = (Math.floor(Math.random() * (256- 0)) + 0) + ")";

colorArray.push({text:"rgb",red:r,green:g,blue:b, rgb:"rgb".concat(r).concat(g).concat(b)});

count++;
}

return colorArray;

}


var pickedColor=pickRandomColor(colors);

function pickRandomColor(colors)  { 
	var selectedColor = colors[Math.floor(Math.random() * (colors.length - 0)) + 0].rgb;
 return selectedColor;

}



var colorDisplay=document.querySelector("#colorDisplay");
var message = document.getElementById("message");
colorDisplay.textContent=pickedColor;

var squares = document.querySelectorAll(".square");
console.log(squares);
for (var i =0; i < squares.length; i++ )  { 
	squares[i].style.background=colors[i].rgb;



	squares[i].addEventListener("click",function() { 
			if (this.style.background === pickedColor){
				message.textContent="Correct!";
				document.querySelector("H1").style.background=pickedColor;
				for (var i =0; i < squares.length; i++ ) {
					squares[i].style.background=pickedColor; 
				}
				
	} else { 
		message.textContent="incorrect. try again";
		this.style.background="#232323";
	}
		

	 }); 


}

for (var i =0; i < squares.length ; i++  ) { 


}

pickRandomColor(colors);
