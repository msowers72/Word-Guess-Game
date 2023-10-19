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

// The startGame function is called when the start button is clicked
function startGame() {
    isWin = false;
    timerCount = 10;
    // Prevent start button from being clicked when round is in rogress
    startButton.disabled = true;
    rednderBlanks();
    startTimer()
   
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                winGame()
            }
        }
    }, 1000)
    // tests if time has run out
    if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame()
    }
}

// Creates blanks on screen
function rednderBlanks() {
    // Randomly picks word from words array
    chosenWord = words[Math.floor(Math.random() * words.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;
    blanksLetters = [];

    // sue loop to push blanks to blankLetters array
    for (var i = 0; i < numBlanks; i++) {
        blanksLetters.push("_")
    }
    // Converts blankLetters array into a string and renders it on the screeen
    wordBlank.textContent = blanksLetters.join(" ")
}

// Attach event listener to start button to call startGame functin on click
startButton.addEventListener("click", startGame)

// Calls init() so that it firs when the page opens
init()