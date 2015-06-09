# project1
Welcome to TICTACTOE!!!
This tictactoe game for the web uses javascript, css3, and html5 in order to generate the effects you will see.  On top of these base technologies I have used the jquery library for ease of development and pure.css to clean up the look of the app.

I started and ended on the front end creating a grid and styling it to make it look like a 3X3 grid. then I proceed to solve the first two problems how to get the user to put in objects into the grid and how to alternate turns.

I solved this by making  a turn method that that uses a jquery command wrapped in an if else statement toggling a property known as "player" to toggle which class of div the player is inserting into the grid.

Then I proceeded to answer the hardest question how to determine the winner while being able to detect a tie. I created a check winner method in my game object that uses "cells" property, a two dimensional array that represents the grid in the back end and referenced the 8 ways one can win the game. For the Tie I had to make an elaborate else statement looking for matches that block wins if they were all present on the board the game would report a tie.

The end states for the winner function was also a useful springboard to tally player score and to unbind event handlers the latter was especially since I found that I did not do this, the there would handlers from previously instances of the game caused skipped turns on replay.

When the users presses the reset button runs a loop that iterates through the cells array with a jquery command to fill all grid spaces with "" and the event handlers are also reassigned and binded the the current instance of the game. The thing I would like to do most in the future is to make the grid responsive, impliment AI for the p[ossibiliy of a single player game, and wrestle with my custom font that abolutely hates being centered.
