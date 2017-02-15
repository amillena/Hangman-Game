var wordList = ["METALICA","TOTO","POLICE","AHA","BANGLES","ASIA","BANANARAMA","POISON","AEROSMITH","WHAM"];

var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSucceses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;



function startGame(){

numGuesses = 9;
blanksAndSucceses = [];
wrongGuesses = [];

// 1. Select word at random
chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
// 2. Break up word into letters and replace with underscores
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;
// 3. Add underscores to HTML

console.log(chosenWord);
console.log(numBlanks);

	for(var i = 0; i < numBlanks; i++){
	  blanksAndSucceses.push("_")
	}

console.log(blanksAndSucceses);
document.getElementById('word-blank').innerHTML = blanksAndSucceses.join("  ");
document.getElementById('guesses-left').innerHTML = numGuesses;
}// end function startGame






function checkLetters(letter){
// 1. compares the letter the user picks matches any of the letters in the word
	var lettersInWord = false;

	for(var i = 0; i < numBlanks; i++){
	  	if (chosenWord [i] === letter){
	  		lettersInWord = true;
	  	}
	}
	if (lettersInWord){
		for(i = 0; i < numBlanks; i++){
			if (chosenWord [i] === letter){
				blanksAndSucceses[i] = letter;
		}
		console.log("inside our checkletter function ", blanksAndSucceses);
		}
	}else{
		numGuesses --;
		wrongGuesses.push(letter)
	}

	console.log("our wrong guesses in checkletter function", wrongGuesses);
}//end of function checkLetters

function roundComplete(){
	// 1. Update HTML with letters that are in word
	// 2. Update HTML with guesses made
	// 3. Update HTML to show wrong guesses
	// 4. Win or Lose
document.getElementById('word-blank').innerHTML = blanksAndSucceses.join(" ");
document.getElementById('guesses-left').innerHTML = numGuesses;
document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

if(lettersInChosenWord.join(" ") === blanksAndSucceses.join(" ")){
	winCounter++;
	alert("You got it !!!. The band was " + chosenWord);
	document.getElementById('win-counter').innerHTML = winCounter;
	startGame();
}else if (numGuesses === 0){
	lossCounter++;
	document.getElementById('loss-counter').innerHTML = lossCounter;
	alert("Sorry you are out of guesses. The band was " + chosenWord);
	startGame();
}

}// end of function roundComplete


document.onkeyup = function(event){
	//1. takes the letter typed in
	//2. and pass it through th Checkletter funtion 

	var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
	console.log("this is the letter we typed", letterGuessed)
	checkLetters(letterGuessed)
	roundComplete();
}

startGame();