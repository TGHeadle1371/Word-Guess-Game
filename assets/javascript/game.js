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

var wordList = [ //Bands word list
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
    "the notorious big"
];
var chosenWord = ""; //when select word at random from bands

var lettersInChosenWord = []; //word that is played on is going to break it up into letters

var numBlanks = 0; //will hold the number of letters in the word

var blanksAndSuccesses = []; //will store the right or wrong letters. stores underscores or letters

var wrongGuesses = []; //stores the wrong letter guesses

var winCounter = 0; //Wins starts zeroed out
var lossCounter = 1; // Start with one due to mathRandom
var numGuesses = 10; //only have 10 guesses


// Add audio files


/*
     1. Select random word from bands
     2. Break up random word into letters and replace them with underscores
     3. Add the underscores to the HTML
     4. Numguesses always equals 10, and blankandsuccess and wrongguesses are empy arrays
*/

$(document).ready(function () {
    alert('Press any key to begin! REMEMBER: Spaces count as characters too!');

    function startGame() {
        numGuesses = 10; // Number of guesses allowed set to 10
        blanksAndSuccesses = []; //makes empty at start
        wrongGuesses = []; //makes empty at start

        chosenWord = wordList[Math.floor(Math.random() * wordList.length)]; //Choose random word from the list
        lettersInChosenWord = chosenWord.split(""); //Split up the chosen word for the individual letters to go in the blanks
        numBlanks = lettersInChosenWord.length;
        // console.log(chosenWord);
        // console.log(numBlanks);

        for (var i = 0; i < numBlanks; i++) { //Loop for the blanks to be filled with _  followed with space " "
            blanksAndSuccesses.push("_");
        }
        console.log(blanksAndSuccesses);
        document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" "); //Target innerHTML and join the spaces
        document.getElementById('guesses-left').innerHTML = numGuesses; //Added the numGuesses to guesses left paragraph
        document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" "); //Add wrong guesses to wrong-guesses paragraph
        // USE jQuery Selector $()
    }

    function checkLetters(letter) { //function that gets input from the user / applied letter from child function

        var letterInWord = false;
        //1. Compare if the letter the user picks matches any of the letters in the random band word
        //2. If so, true, add letter to underscores, if not, do something else.
        for (var i = 0; i < numBlanks; i++) {
            if (chosenWord[i] === letter) {
                letterInWord = true;

            }
        }
        //will only run if above for loop is true
        if (letterInWord) {
            for (i = 0; i < numBlanks; i++) {
                if (chosenWord[i] === letter) {
                    blanksAndSuccesses[i] = letter;
                }
                console.log(blanksAndSuccesses); //Console.log test blanksAndSuccesses
            }
            //3. If the user letter guess is wrong decrease the numGuesses variables by one
        } else {
            numGuesses--;
            wrongGuesses.push(letter);
        }
        console.log("Wrong Guesses Chosen", wrongGuesses); //Console.log test wrongGuesses
    }
    /* to check if a letter is already in the wrong guesses array.
     set up an if/else conditional that will run a for loop that will iterate over all the letters 
     and then use the if/else to check if it already exists. 
     */

    function roundComplete() {
        /*
        1. Update the HTML with the letters that are in the word
        2. Update the HTML with guesses we have left
        3. Update the HTML to show the wrong guesses
        4. Determine whether the user has won the game or not
        */
        document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
        document.getElementById('guesses-left').innerHTML = numGuesses;
        document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");



        // console.log(lettersInChosenWord);
        // console.log(blanksAndSuccesses);
        if (lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")) {
            winCounter++;
            alert("You win! The answer was " + chosenWord);
            document.getElementById('win-counter').innerHTML = winCounter;
            document.getElementById('audiotag1').play();
            document.getElementById('audiotag2').pause();
            document.getElementById('audiotag2').load();
            startGame(); // If the letters chosen joined match the underscored random letters joined, increment winCounter, alert the user, play audio, and start a new game

        } else if (numGuesses === 0) {
            document.getElementById('loss-counter').innerHTML = lossCounter++;
            document.getElementById('wrong-guesses').innerHTML = " ";
            alert("You lost! The answer was " + chosenWord);
            document.getElementById('audiotag2').play();
            document.getElementById('audiotag1').pause();
            document.getElementById('audiotag1').load();
            startGame(); // If the letters chosen do not match the underscored random letters, increment lossCounter, alert the user, play audio, and start a new game

        }




    }
    startGame();

    document.onkeyup = function () {
        /*
        1. Take in the letter that user types in
        2. Pass it through the CheckLetter function
        */

        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("The Letter Guessed Is", letterGuessed);
        document.getElementById('audiotag3').play();
        checkLetters(letterGuessed);
        roundComplete();

    };
});