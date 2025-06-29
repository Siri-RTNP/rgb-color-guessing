//https://www.freecodecamp.org/news/learn-how-to-manipulate-the-dom-by-building-a-simple-javascript-color-game-1a3aec1d109a/

/* ? Variable */
let bannerColor = document.querySelector("h1");
// selected squares
let numSquares = 6;
// buttons
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
// all squares
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");



/* ? functions */

/* * random number from 0-255 */
function randNum() {
	var randNum = Math.floor(Math.random()*255);
	return randNum;
}
/* * random RGB color code */
function randColor() {
	return "rgb("+randNum()+", "+randNum()+", "+ randNum()+ ")";
}

/* display RGB color code */
function displayColorCode() {

}


init();

function init() {
	var pickedColor = randColor();
	colorDisplay.append(pickedColor);
	return pickedColor;
}

console.log(pickedColor);
//console.log(colorDisplay);


/* * assign random colors to square */
let colors = assignColors();
function assignColors() {
	const colors = [ 
		randColor() ,
		randColor() ,
		randColor() ,
		randColor() ,
		randColor() ,
		pickedColor 
	];
	return colors;
}


/* reset colors */
resetButton.addEventListener('click', _ => { 
	colors = assignColors();
	console.log("Clicked!");
	refreshColors();
	bannerColor.style.backgroundColor = "steelblue";
});

/* change Modes */

modeButtons[1].addEventListener('click', _ => {
	console.log(modeButtons[1]);
});


refreshColors();
// loop to add colors to squares
function refreshColors(){
	for (let i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
}

//
for (let i=0; i < squares.length; i++) {  
	squares[i].addEventListener('click', _ => {    	
		let selectedColor = squares[i].style.backgroundColor;
		let messageDisplay = document.querySelector("#message");

		messageDisplay.textContent = "";

		// if it is correct
		if ( pickedColor == selectedColor ) {
			
			bannerColor.style.backgroundColor = pickedColor;
			for (let i=0; i<squares.length; i++) {
				squares[i].style.backgroundColor = pickedColor;
			}
			messageDisplay.textContent = "You are good at guessing!";
		
		} else {
			squares[i].style.backgroundColor = "#232323";
			messageDisplay.textContent = "That's wrong!";
			
		}
		messageDisplay.style.color = "white";
		console.log(selectedColor);  
	});
}


