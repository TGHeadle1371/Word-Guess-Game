


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

var selectableWords = [ //Bands word list
        "nas", 
        "warren g",
        "wutang clan",
        "ol dirty bastard",
        "dr dre",
        "jay z",
        "beastie boys",
        "jurrasic 5",
        "snoop dogg",
        "public enemy",
        "naughty by nature",
        "digable planets",
        "house of pain",
        "ice cube",
        "a tribe called quest",
        "tupac",
        "The notorious big",
];

const maxTries = 10; // Maximum tries
var guessingWord = []; // Current word to Guess
var wins = 0; // Number of wins player has
var currentWord; // Current word in the array
var numberGuesses = 0; // Remaining number of guesses
var letterGuesses = []; // Letters already guessed
var startGame = false; // Tells if game actually started
var finishGame = false; // 'Press any key to try again'


//FUNCTIONS




//PROCESSES/EXECUTIONS