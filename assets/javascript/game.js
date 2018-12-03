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
    "warren g",
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

// Pick a random word from bandNames
// While the word has not been guessed {
//     Show the player their current progress by filling in underscores
//     Get a guess from the player
//     If the player wants to quit the game {
//         Quit the game
//     }
//     Else If the guess is not a single letter {
//         Tell the player to pick a single letter
//     } Else {
//         If the guess is in the word {
//             Update the player 's progress with the guess
//         }
//     }
// }
// Congratulate the player on guessing the word


 var game = {
     guessed: [],
     left: 10,
     start: function () {
         this.complete = false;
         this.word = bandNames[Math.floor(Math.random() * bandNames.length)];
         this.$wins = document.getElementById('wins');
         this.$losses = document.getElementById('losses');
         this.$remaining = document.getElementById('remaining');
         this.$lettersGuessed = document.getElementById('lettersGuessed');
         this.$right.innerHTML = '_'.repeat(this.word.length);
     },
     guess: function (letter) {
         if (this.left > 0 && this.complete != true) {
             if (this.word.indexOf(letter) > -1 || this.guessed.indexOf(letter) > -1) {
                 this.wins(letter);
             } else {
                 this.losses(letter);
             }
         }
     },
     wins: function (letter) {
         for (var i = 0; i < this.word.length; i++) {
             if (this.word[i] == letter) {
                 var word = this.$wins.innerHTML.split('');
                 word[i] = letter;
                 this.$wins.innerHTML = word.join('');
             }
         }
         if (this.$right.innerHTML.indexOf('_') < 0) {
             alert('you win!');
             this.complete = true;
         }
     },
     losses: function (letter) {
         this.guessed.push(letter);
         this.$losses.innerHTML += ' ' + letter;
         this.left--;
         this.$remaining.innerHTML = this.left;
         if (this.left < 1) {
             alert('you lose! ' + this.word);
             this.complete = true;
         }
     }
 };
 game.start();
 document.onkeyup = function (event) {
     var letter = String.fromCharCode(event.keyCode).toLowerCase();
     game.guess(letter);
 };