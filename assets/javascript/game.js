 

//This is the variable containing the possible words at play in an array
var wordAtPlay = ["Houston", "Dallas", "Austin", "Plano", "Marfa"];
//var spaces will be the blank letter spaces, I know it will be a string
var spaces = [];
//var correctLetter captures the letter value if it was the correct letter
var correctLetter = "";
//var incorrectLetter captures the letter value if it was a wrong letter
var incorrectLetter = "";
//var game gets the html id game
var game = document.getElementById('game');
//var guessCount sets the total number of guesses remaning to 15
var guessCount = 15;
//var pastGuess gets the html elemnt that displays the past guesses
var pastGuess = document.getElementById('pastGuess');
//var gameResult declares a win or loss
var gameResult = document.getElementById('gameResult');
//declared userGuess - this will capture whatever key the user presses
var userGuess;
//declared letterCount - this will count the total number of letters in the word
var letterCount;
//var computerGuess is the random word selection from the wordAtPlay array
var computerGuess;
//var word is an array that stores the correct letters
var word = [];



//Functions:
//funtion to run if the word is Houston
function Houston (){
	word = 'houston';
	document.onkeyup = function() {
		var userGuess = event.key;
	//sets the remaining correct letter count to the equivalent of the total letters in the word since none have been pressed yet.
	remainCount = letterCount;
	console.log(letterCount);

	if (userGuess === "h" || userGuess === "o" || userGuess === "u" || userGuess === "s" || userGuess === "t" || userGuess === "o" || userGuess === "n"){
	//set the reamining correct letter count to the total correct letters -1
	remainCount = letterCount--;
	console.log(remainCount);

		//reduces the number of blank spaces by one as the correct letter count descreases and renders the correct letter entered
		for (var i = 0; i < word.length; i++) {
			if (word[i] === userGuess) {
				spaces[i] = userGuess;
			}
		}

		game.innerHTML = spaces.join(' ');
		
		//this if statement reduces the number of guesses remaning count by 1 if they guess a correct letter
		if (guessCount >= 1){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		//if the user guesses all correct letters and still has guesses remaining then they win!
		console.log(remainCount)
		if (remainCount === 1 && guessCount > 0){
			//gameResult = "win";
			//console.log(gameResult);
			gameResult.innerHTML = "You Win! Press 1 to play again. ";
			letsPlay();
		}
		//if they still have remaining letters but their guesses are at 0 then they lose
		else if (letterCount > 0 && guessCount === 0){
			gameResult = "lose";
			console.log(gameResult);
			letsPlay();
		}
		
	}
	//if they guess an incorrect letter then reduce guess count by 1
	else {
		//incorrectLetter = userGuess;
		
		if (guessCount >= 1){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		//if they run out of reminaing guesses then they lose
		else {
			gameResult.innerHTML = "You are all out of guesses. Press 1 to play again.";
			letsPlay();
		}

		//this will list out all previously guessed letters	
		incorrectLetter = incorrectLetter + userGuess;
		pastGuess.innerHTML = "Your past guesses: " + incorrectLetter;

		}
	}
};


//function to run if the word is Dallas
function Dallas (){
	word = 'dallas';
	document.onkeyup = function() {
		var userGuess = event.key;
	//sets the remaining correct letter count to the equivalent of the total letters in the word since none have been pressed yet.
	remainCount = letterCount;
	console.log(letterCount);

	if (userGuess === "d" || userGuess === "a" || userGuess === "l" || userGuess === "l" || userGuess === "a" || userGuess === "s"){
	//set the reamining correct letter count to the total correct letters -1
	remainCount = letterCount--;
	console.log(remainCount);

		//reduces the number of blank spaces by one as the correct letter count descreases and renders the correct letter entered
		for (var i = 0; i < word.length; i++) {
			if (word[i] === userGuess) {
				spaces[i] = userGuess;
			}
		}

		game.innerHTML = spaces.join(' ');
		
		//this if statement reduces the number of guesses remaning count by 1 if they guess a correct letter
		if (guessCount >= 1){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		//if the user guesses all correct letters and still has guesses remaining then they win!
		console.log(remainCount)
		if (remainCount === 1 && guessCount > 0){
			//gameResult = "win";
			//console.log(gameResult);
			gameResult.innerHTML = "You Win! Press 1 to play again. ";
			letsPlay();
		}
		//if they still have remaining letters but their guesses are at 0 then they lose
		else if (letterCount > 0 && guessCount === 0){
			gameResult = "lose";
			console.log(gameResult);
			letsPlay();
		}
		
	}
	//if they guess an incorrect letter then reduce guess count by 1
	else {
		//incorrectLetter = userGuess;
		console.log("That is incorrect " + incorrectLetter);
		if (guessCount >= 1){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		//if they run out of reminaing guesses then they lose
		else {
			gameResult.innerHTML = "You are all out of guesses. Press 1 to play again.";
			letsPlay();
		}
		//this will list out all previously guessed letters
		
		incorrectLetter = incorrectLetter + userGuess;
		pastGuess.innerHTML = "Your past guesses: " + incorrectLetter;


		}
	}
};


// //function to run if the word is Austin
function Austin (){
	word = 'austin';
	document.onkeyup = function() {
		var userGuess = event.key;
	//sets the remaining correct letter count to the equivalent of the total letters in the word since none have been pressed yet.
	remainCount = letterCount;
	console.log(letterCount);

	if (userGuess === "a" || userGuess === "u" || userGuess === "s" || userGuess === "t" || userGuess === "i" || userGuess === "n"){
	//set the reamining correct letter count to the total correct letters -1
	remainCount = letterCount--;
	console.log(remainCount);

		//reduces the number of blank spaces by one as the correct letter count descreases and renders the correct letter entered
		for (var i = 0; i < word.length; i++) {
			if (word[i] === userGuess) {
				spaces[i] = userGuess;
			}
		}

		game.innerHTML = spaces.join(' ');
		
		//this if statement reduces the number of guesses remaning count by 1 if they guess a correct letter
		if (guessCount >= 1){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		//if the user guesses all correct letters and still has guesses remaining then they win!
		console.log(remainCount)
		if (remainCount === 1 && guessCount > 0){
			//gameResult = "win";
			//console.log(gameResult);
			gameResult.innerHTML = "You Win! Press 1 to play again. ";
			letsPlay();
		}
		//if they still have remaining letters but their guesses are at 0 then they lose
		else if (letterCount > 0 && guessCount === 0){
			gameResult = "lose";
			console.log(gameResult);
			letsPlay();
		}
		
	}
	//if they guess an incorrect letter then reduce guess count by 1
	else {
		//incorrectLetter = userGuess;
		console.log("That is incorrect " + incorrectLetter);
		if (guessCount >= 1){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		//if they run out of reminaing guesses then they lose
		else {
			gameResult.innerHTML = "You are all out of guesses. Press 1 to play again.";
			letsPlay();
		}
		//this will list out all previously guessed letters
		
		incorrectLetter = incorrectLetter + userGuess;
		pastGuess.innerHTML = "Your past guesses: " + incorrectLetter;
	
		}
	}
};


// //function to run if the word is Plano
function Plano (){
	word = 'plano';
	document.onkeyup = function() {
		var userGuess = event.key;
	//sets the remaining correct letter count to the equivalent of the total letters in the word since none have been pressed yet.
	remainCount = letterCount;
	console.log(letterCount);

	if (userGuess === "p" || userGuess === "l" || userGuess === "a" || userGuess === "n" || userGuess === "o"){
	//set the reamining correct letter count to the total correct letters -1
	remainCount = letterCount--;
	console.log(remainCount);

		//reduces the number of blank spaces by one as the correct letter count descreases and renders the correct letter entered
		for (var i = 0; i < word.length; i++) {
			if (word[i] === userGuess) {
				spaces[i] = userGuess;
			}
		}

		game.innerHTML = spaces.join(' ');

		//this if statement reduces the number of guesses remaning count by 1 if they guess a correct letter
		if (guessCount >= 1){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		//if the user guesses all correct letters and still has guesses remaining then they win!
		console.log(remainCount)
		if (remainCount === 1 && guessCount > 0){
			//gameResult = "win";
			//console.log(gameResult);
			gameResult.innerHTML = "You Win! Press 1 to play again. ";
			letsPlay();
		}
		//if they still have remaining letters but their guesses are at 0 then they lose
		else if (letterCount > 0 && guessCount === 0){
			gameResult = "lose";
			console.log(gameResult);
			letsPlay();
		}
		
	}
	//if they guess an incorrect letter then reduce guess count by 1
	else {
		//incorrectLetter = userGuess;
		console.log("That is incorrect " + incorrectLetter);
		if (guessCount >= 1){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		//if they run out of reminaing guesses then they lose
		else {
			gameResult.innerHTML = "You are all out of guesses. Press 1 to play again.";
			letsPlay();
		}
		//this will list out all previously guessed letters
		
		incorrectLetter = incorrectLetter + userGuess;
		pastGuess.innerHTML = "Your past guesses: " + incorrectLetter;

		}

	}
};


//function to run if the word is Marfa
function Marfa (){
	word = 'marfa';
	//listens for what key is pressed
	document.onkeyup = function() {
	//sets var userGuess to what key was pressed
	var userGuess = event.key;
	//sets the remaining correct letter count to the equivalent of the total letters in the word since none have been pressed yet.
	remainCount = letterCount;
	console.log(letterCount);
	
	//if the user guesses one of these correct letters...
	if (userGuess === "m" || userGuess === "a" || userGuess === "r" || userGuess === "f" || userGuess === "a"){
	//set the reamining correct letter count to the total correct letters -1
	remainCount = letterCount--;
	console.log(remainCount);

	//reduces the number of blank spaces by one as the correct letter count descreases and renders the correct letter entered
	for (var i = 0; i < word.length; i++) {
		if (word[i] === userGuess) {
			spaces[i] = userGuess;
		}
	}

	game.innerHTML = spaces.join(' ');

		//this if statement reduces the number of guesses remaning count by 1 if they guess a correct letter
		if (guessCount >= 1){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		//if the user guesses all correct letters and still has guesses remaining then they win!
		console.log(remainCount)
		if (remainCount === 1 && guessCount > 0){
			//gameResult = "win";
			//console.log(gameResult);
			gameResult.innerHTML = "You Win! Press 1 to play again. ";
			letsPlay();
		}
		//if they still have remaining letters but their guesses are at 0 then they lose
		else if (letterCount > 0 && guessCount === 0){
			gameResult = "lose";
			console.log(gameResult);
			gameResult.innerHTML = "Game Result: You Lose!"
			letsPlay();
		}
		
	}
	//if they guess an incorrect letter then reduce guess count by 1
	else {
		//incorrectLetter = userGuess;
		console.log("That is incorrect " + incorrectLetter);
		if (guessCount >= 1){
			guessCount = guessCount-1;
			guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		}
		//if they run out of reminaing guesses then they lose
		else {
			gameResult.innerHTML = "You are all out of guesses. Press 1 to play again.";
			letsPlay();
		}
		//this will list out all previously guessed letters
		incorrectLetter = incorrectLetter + userGuess;
		pastGuess.innerHTML = "Your past guesses: " + incorrectLetter;
		
		}
	}
};


//This function will randomly select a word from the array of wordAtPlay 
//when the user presses 1 to start the game

function letsPlay (){
	document.onkeyup = function() {
		
		userGuess = event.key;
		
		if (userGuess === "1"){
		//resets the remaining guess count to 15 everytime this function runs	
		guessCount = 15;
		//resets the spaces variable to a blank string everytime this funciton runs
		spaces = [];
		//reset correctLetter to blank
		correctLetter = "";
		//picks a random word from the wordAtPlay array	
		computerGuess = wordAtPlay[Math.floor(Math.random() * wordAtPlay.length)];

		word = computerGuess;
		console.log(word);
		
		//here tells it to count the number of characters in the computerGuess and render the word as blank spaces instead of text
		for (var i = 0; i < computerGuess.length; i++) {
			//defines the letter count to the length of the word
			letterCount = computerGuess.length;
			spaces[i] = '_';
			game.innerHTML = spaces.join(' ');
		}

		guessesremaining.innerHTML = "You have " + guessCount + " guesses remaining";
		
		pastGuess.innerHTML = "Your past guesses: ";

		gameResult.innerHTML = "Game Result: ";

		//these if/else if statements run the word specific funtion depending on what word is chosen
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
	//if they don't press 1 to start the game it returns the following error message
	else {
		game.innerHTML = "<h1>That is not the 1 key, Please Try Again</h1>"
	}
}
}

};

letsPlay();










