# Project #Zero: The Game

### Overview

A board game for one or two players using random progression and event cards that require resolution to continue. First player to reach the end space wins. 

---

### Game Play

The player is greeted with a splash page prompting if one or two players will be participating, and what color
game piece they prefer, the selections are made with a click.

The game board loads with the selected
game piece(s) on the Start square.

Player one must click the die to 'roll' it. A 'one', 'two', or '!' wil lbe rolled. 

Upon rolling a 'one' or a 'two' the player's game piece will advance that many spaces, and the text on that space will be read. 

Upon rolling a '!', a 'Problem' card will be dealt from the deck and must be resolved before continuing. These cards will range from "Move Forward 1 space", "Move Back 1 space.", "Roll Again.", "Lose a Turn.", etc. The player will need to click to resolve the card.

** Possible sound effect on click for resolution of a 'Problem' card.

If there is a second player, their turn will be handled the same way, alternating until one of the players reaches the Finish square. 

A splash page with a winning message is loaded, and the players are asked if they would like to play again.

---

### Techinical Requirements

Random engine for dice roll on click.

Random engine and card library for card draws.

Coordinate based player piece tracking. If one piece appear on a square, it will be centered in the space, and if there are two, they will adjust to be side by side.

---

### Wireframe Sketches

![splash page](assets/Welcome_Page.png)

![board](assets/Game_Board.png)

![victory](assets/Win_Page.png)
