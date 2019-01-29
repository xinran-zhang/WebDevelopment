var numbOfSquares = 3;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
	// mode button eventListener
	setupModeButtons();
	// square listener
	setupSquares();
	reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numbOfSquares = 3;
			}
			if (this.textContent === "Hard") {
				numbOfSquares = 6;
			}
			if (this.textContent === "Super Hard") {
				numbOfSquares = 9;
			}
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add clicklisteners to squares
		squares[i].addEventListener("click", function() {
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if (clickedColor === pickedColor) {
				changeColors(pickedColor);
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		})
	}
}

function reset() {
	// generate all new colors
	colors = generateRandomColors(numbOfSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	// change the title to the color of background
	h1.style.backgroundColor = "steelblue";
}

// change all squares to the color that matches the given color
function changeColors (color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

// pick a random color 
function pickColor() {
	// pick a random number
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// repeat num times
	// get random color and push into arr
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	
	// return that array
	return arr;
}

function randomColor() {
	// pick a red from 0 - 255
	var red = Math.floor(Math.random() * 256)
	// pick a green from 0 - 255
	var green = Math.floor(Math.random() * 256)
	// pick a blue from 0 - 255
	var blue = Math.floor(Math.random() * 256)
	return "rgb(" + red + ", " + green + ", " + blue + ")"
}

resetButton.addEventListener("click", function() {
	reset();
});
