var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button")

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Array used tocreate blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var words = ["variable", "array", "modulus", "object", "function", "string", "boolean"];

// The init function is calle when the page loads
function init() {
    // TODO: getWins() function needs to be set-up
    // TODO: getLosses() function needs to be set-up
}

// Calls init() so that it firs when the page opens
init()