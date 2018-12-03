// Use KEY EVENTS to LISTEN for the LETTERS that your players will type
// Display: Press any key to get started!
// Wins:(# of times user guessed the word correctly)
// display _ _ _ _ _ _ _ for words to guess
// As the user guesses the correct letter, fill the blank _ _ t _ _ t
// Number of guesses remaining: (# of guesses remaining for the user)
// Letters already guessed (Displayed like A B C D)
// After user wins/loses the game, start another word and make user play
// BONUS: Play a sound or song when the user guesses correctly
// Write stylish CSS rules to make design that fits the theme
// HARD MODE: organize the game code as an object, except for the key events to get the letter guessed.
// Save the whole game and its properties in an object
// Save any game functions as methods, call them underneath your object declaration using event listeners
// Dont forget to place your global variables and functions above your object
// Dont forget (Global variables, Objects, Then Calls)
// Talk to TA if stuff!!


//GLOBAL VARIABLES

var bandNames = [ //Bands word list
    "nas",
    "warreng",
    "wutang clan",
    "ol dirty bastard",
    "dr dre",
    "jay z",
    "beastie boys",
    "jurrasic five",
    "snoop dogg",
    "public enemy",
    "naughty by nature",
    "digable planets",
    "house of pain",
    "ice cube",
    "a tribe called quest",
    "tupac",
    "The notorious big"
];

const maxTries = 10; // Maximum tries
var guessingWord = []; // Current word to Guess
var wins = 0; // Number of wins player has
var currentWord; // Current word in the array
var numberGuesses = 0; // Remaining number of guesses
var letterGuesses = []; // Letters already guessed
var startGame = false; // Tells if game actually started
var finishGame = false; // 'Press any key to try again'

var currentWord = bandNames[Math.floor(Math.random() * bandNames.length)];


// //Game sounds
// var keySound = new Audio(source)
// var winSound = new Audio()
// var backgroundSound = new Audio

//FUNCTIONS


// Start a new game


function startNewGame() {
    numberGuesses = maxTries;
    startGame = false;


    // Math floor to round random number down to whole number

    currentWord = bandNames[Math.floor(Math.random() * bandNames.length)];

    // Clear out arrays
    letterGuesses = [];
    guessingWord = [];


    // Build the guessing word and insert underscore
    for (var i = 0; i < currentWord.length; i++) {
        guessingWord[i] = "_";
    }

    // Hide game over and win images/text

    document.getElementById("tryAgain").style.cssText = "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none";

    // Update display
    resetDisplay();
};

// // Create a variable to keep track of letters that remain to be guessed. Hidden from Player
// var remainingLetters = currentWord.length;

// //Game loop
// while (remainingLetters > 0) {
//     //Show the player their progress

// }

//Update display on HTML page
function resetDisplay() {
    document.getElementById("wins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("numberGuesses").innerText = numberGuesses;
    document.getElementById("letterGuesses").innerText = letterGuesses;
    if (numberGuesses <= 0) {
        document.getElementById("gameover-image").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display:block";
        finishGame = true;
    }
};
//onkeydown event listener; if has finished is true, start a new game
document.onkeydown = function (event) {
    // If finished, dump one keystroke and reset
    if (finishGame) {
        startNewGame();
        finishGame = false;
    } else {
        // Check to make sure a (65) - z (90) was pressed.
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};
// Check number of guesses remaining
function makeGuess(letter) {
    if (numberGuesses > 0) {
        if (!startGame) {
            startGame = true;
        }

        // Make sure we didn't use this letter yet
        if (letterGuesses.indexOf(letter) === -1) {
            letterGuesses.push(letter);
            evaluateGuess(letter);
        }
    }

    resetDisplay();
    checkWin();
};

// This function takes a letter and finds all instances of 
// appearance in the string and replaces them in the guess word.
function evaluateGuess(letter) {
    // Array to store positions of letters in string
    var positions = [];
    // Loop through word finding all instances of guessed letter, store the indicies in an array.
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letter) {
            positions.push(i);
        }
    }

    // If there are none left, remove a guess
    if (positions.length <= 0) {
        numberGuesses--;
    } else {
        // Loop through all the indicies and replace the '_' with a letter.
        for (var i = 0; i < positions.length; i++) {
            letterGuesses[positions[i]] = letter;
        }
    }
};
//Checks if you won or lost the game, then displays correlating image
function checkWin() {
    if (guessingWord.indexOf("_") === -1) {
        document.getElementById("youwin-image").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display: block";
        wins++;
        finishGame = true;
        startNewGame();
        resetDisplay();
    }
};
//PROCESSES/EXECUTIONS