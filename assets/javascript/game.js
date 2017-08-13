 





//variables:
var Hangman

//This is the variable containing the possible words at play; they
//will all be strings.
var wordAtPlay = ["Houston", "Dallas", "Austin", "Plano", "Marfa"];
//var spaces will be the blank letter spaces, I know it will be a string
var spaces = " ";
//var correctLetter is when the user guesses correctly
var correctLetter = []
//var incorrectLetter is when the user guesse incorrectly
var incorrectLetter = []

var game = document.getElementById('game');

var guessCount = 15;

var pastGuess = document.getElementById('pastGuess');

var gameResult = document.getElementById('gameResult');

var userGuess;

var letterCount;

var computerGuess;


//start button:
//document.getElementById("startButton").addEventlistener("click", startGame);

//Functions:
//funtion to run if the word is Houston
function Houston (){
	document.onkeyup = function() {
	var userGuess = event.key;

	if (userGuess === "h" || userGuess === "o" || userGuess === "u" || userGuess === "s" || userGuess === "t" || userGuess === "o" || userGuess === "n"){
		correctLetter = userGuess;
		game.innerHTML = correctLetter + spaces;
		
	}
	else {
		incorrectLetter = userGuess;
		console.log("That is incorrect " + incorrectLetter);
		if (guessCount > 0){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		else {
			guessesremaining.innerHTML = "You are all out of guesses. Press 1 to play again.";
			letsPlay();
		}
		
		pastGuess.innerHTML = "Your past guesses: " + incorrectLetter;
	}

}
};


//function to run if the word is Dallas
function Dallas (){
	document.onkeyup = function() {
	var userGuess = event.key;

	if (userGuess === "d" || userGuess === "a" || userGuess === "l" || userGuess === "l" || userGuess === "a" || userGuess === "s"){
		correctLetter = userGuess;
		game.innerHTML = correctLetter + spaces;
		
	}
	else {
		incorrectLetter = userGuess;
		console.log("That is incorrect " + incorrectLetter);
		if (guessCount > 0){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		else {
			guessesremaining.innerHTML = "You are all out of guesses. Press 1 to play again.";
			letsPlay();
		}
		
		pastGuess.innerHTML = "Your past guesses: " + incorrectLetter;
	}

}
};


//function to run if the word is Austin
function Austin (){
	document.onkeyup = function() {
	var userGuess = event.key;

	if (userGuess === "a" || userGuess === "u" || userGuess === "s" || userGuess === "t" || userGuess === "i" || userGuess === "n"){
		correctLetter = userGuess;
		game.innerHTML = correctLetter + spaces;
		
	}
	else {
		incorrectLetter = userGuess;
		console.log("That is incorrect " + incorrectLetter);
		if (guessCount > 0){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		else {
			guessesremaining.innerHTML = "You are all out of guesses. Press 1 to play again.";
			letsPlay();
		}
		
		pastGuess.innerHTML = "Your past guesses: " + incorrectLetter;
	}

}
};


//function to run if the word is Plano
function Plano (){
	document.onkeyup = function() {
	var userGuess = event.key;

	if (userGuess === "p" || userGuess === "l" || userGuess === "a" || userGuess === "n" || userGuess === "o"){
		correctLetter = userGuess;
		game.innerHTML = correctLetter + spaces;
		
	}
	else {
		incorrectLetter = userGuess;
		console.log("That is incorrect " + incorrectLetter);
		if (guessCount > 0){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		else {
			guessesremaining.innerHTML = "You are all out of guesses. Press 1 to play again.";
			letsPlay();
		}
		
		pastGuess.innerHTML = "Your past guesses: " + incorrectLetter;
	}

}
};


//function to run if the word is Marfa
function Marfa (){
	document.onkeyup = function() {
	var userGuess = event.key;

	if (userGuess === "m" || userGuess === "a" || userGuess === "r" || userGuess === "f" || userGuess === "a"){
		correctLetter = userGuess;
		game.innerHTML = correctLetter + spaces;
		remainCount = letterCount--;
		console.log(remainCount)
		if (remainCount === 0 && guessCount > 0){
			//gameResult = "win";
			//console.log(gameResult);
			gameResult.innerHTML = "You Win! Press 1 to play again. ";
			letsPlay();
		}
		else if (letterCount > 0 && guessCount === 0){
			gameResult = "lose";
			console.log(gameResult);
			letsPlay();
		}
		
	}
	else {
		incorrectLetter = userGuess;
		console.log("That is incorrect " + incorrectLetter);
		if (guessCount >= 1){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		else {
			guessesremaining.innerHTML = "You are all out of guesses. Press 1 to play again.";
			letsPlay();
		}
		
		pastGuess.innerHTML = "Your past guesses: " + incorrectLetter;
	}

}
};


//This function will randomly select a word from the array of wordAtPlay 
//when the user presse 1, 2, or 3

function letsPlay (){
	document.onkeyup = function() {
		var userGuess = event.key;
	
		if (userGuess === "1"){
		spaces = "";
		//picks a random word from the wordAtPlay array	
		computerGuess = wordAtPlay[Math.floor(Math.random() * wordAtPlay.length)];
		
		//here tells it to count the number of characters in the computerGuess and render the word as blank spaces instead of text
			for (var i = 0; i < computerGuess.length; i++) {
				letterCount = computerGuess.length;
				spaces = spaces + " _ "
				game.innerHTML = spaces
			}

		guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		
		pastGuess.innerHTML = "Your past guesses: ";

		gameResult.innerHTML = "Game Result: ";

		}
		if (computerGuess === wordAtPlay[0]){
			Houston();
			console.log(wordAtPlay[0]);
		}
		else if (computerGuess === wordAtPlay[1]){
			Dallas();
			console.log(wordAtPlay[1]);
		}
		else if (computerGuess === wordAtPlay[2]){
			Austin();
			console.log(wordAtPlay[2]);
		}
		else if (computerGuess === wordAtPlay[3]){
			Plano();
			console.log(wordAtPlay[3]);
		}
		else if (computerGuess === wordAtPlay[4]){
			Marfa();
			console.log(wordAtPlay[4]);
		}
	//if they don't press 1, 2, or 3 it returns the following error message
		else {
			game.innerHTML = "<h1>That is not the 1 key, Please Try Again</h1>"
		}
	}

};

letsPlay();










