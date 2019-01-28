# Word-Guess-Game

-   Homework 3 DU Bootcamp

<!-- Pseudocode
90's theme Word-Guessing-Game

User presses any key to begin.
Using key events, user chooses a letter a-z + space on keyboard representing letters available to guess.

On key event, load Wins total, word with underscores (_ _ _ _ _), reveal correct letters, and put incorrect letters into incorrect guess div.
Display # of guesses remaining, subtract any that are incorrect, letters already guessed, and after win or loss
automatically choose another word to begin another game.

Bonus
Play a sound when word is correct
Write stylish CSS to fit theme
HARD MODE: Organize game code as an object, except key events, to guess letter.
Save whole game and its properties in an object.
Save any of the game functions as a method and call them underneath object declaration using event listener.
Global Variables, Objects, Calls

Computer chooses a random value in a list bandNameWords
Determine if the users letter matches one of the bandNameWords letters chosen

User has 10 tries to guess right
If user letter guess is correct, fill in underscore.
Add to wins score.
Keep guessing letters, filling in, till bandNameWords selection.length is complete and is equal to bandName.


If user selection does not match, add letter to letters guessed and remove from available letters.

The user then presses r, p, or s to play again. -->

Word Guess Game

90's Hip-hop artist themed guesses

1. To begin, press any key! Remember, the SPACEBAR is considered a character for your guesses as well.
2. If the player guesses right, that letter will be added to the underscores and will not deduct guessesleft.
3. If the player guesses wrong, the letter will be added to the array of wrong guess letters and 1 guess will be decremented.
4. Once all the guesses are correct, play the winning song and start another guess game.
5. If all guesses are incorrect, play the losing song and start another guess game.

```
If the word is madonna, the display will show: _ _ _ _ _ _ _.
As the user guesses the correct letters, it will be revealed to them as: m a d o _ _ a.
```

Remember: The music, for now, does not give a hint to the word to guess, they are just songs.

Players have 10 total guesses to try to get the word.

![Image of Webpage](/assets/images/screenshot.png?raw=true "Game Page")

### Technology Used

-   HTML5
-   CSS3
-   [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
-   jQuery
-   JavaScript
-   [PopperJS](https://popper.js.org/)
