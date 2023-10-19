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
    getWins() 
    getLosses() 
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

// the winGame function is called when the win condition is met
function winGame() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    winCounter++
    startButton.disbled = false;
    setWins()
}

// The loseGame funciton is called when timer reaches 0
function loseGame() {
    wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
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
      // tests if time has run out
    if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame()
    }
    }, 1000)
  
}

// Creates blanks on screen
function rednderBlanks() {
    // Randomly picks word from words array
    chosenWord = words[Math.floor(Math.random() * words.length)];
    console.log(chosenWord)
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

// Updates win cont on screen and sets win count to client storage
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter)
}

// gitWins and getlosses functions are used by the init() function
function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
        winCounter = 0;
    } else {
        // If a value is retrieveed from client storge set the winCounter to that value
        winCounter = storedWins
    }
    // Render win count to page
    win.textContent = winCounter
}

function getLosses() {
    var storedLosses = localStorage.getItem("loseCount");
    if (storedLosses === null) {
        loseCounter = 0;
    } else {
        loseCounter = storedLosses;
    }
    lose.textContent = loseCounter
    }

function checkWin() {
    // if the word equals the blankLetters array when converted to string, set isWin to true
    if (chosenWord === blanksLetters.join("")) {
        isWin = true;
    }
}

// Tests if guessed letter is in word and renders it to the screen
function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (chosenWord[j] === letter) {
                blanksLetters[j] = letter;
            }
        }
        wordBlank.textContent = blanksLetters.join(" ");
    }
}

// Attach even listener to document to listen for key event
document.addEventListener("keydown", function (event) {
    // if the ocunt is zero, exit function base case
    if (timerCount === 0) {
        return;
    }
    // Convert all keys to lower case
    var key = event.key.toLowerCase();
    var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
    // Test if key pushed is letter
    if (alphabetNumericCharacters.includes(key)) {
        var letterGuessed = event.key;
        checkLetters(letterGuessed)
        checkWin()
    }
})

// Attach event listener to start button to call startGame functin on click
startButton.addEventListener("click", startGame)

// Calls init() so that it firs when the page opens
init()