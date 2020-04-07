/* Game Play */
/* 
game loads, and prompts if there will be one or two players:
player one chooses a player piece color
player two chooses a player piece color (only if Two Player was selected)

player piece(s) appear at 'start'.
if two players, player pieces appear side by side
check if more than one object appended to Start Div
adjust placement if yes

random die roll: One, Two, or Problem Card
On One, move player piece to next Square div
append player piece to next div in series

On Two, move player piece to next Square div
append player piece to second div in series

On Problem Card, player does not move
A Random Card message is drawn from the deck

Move Ahead! - same as a One die roll
must click the logo button in the center of the board to continue.

Move Back! - move player piece to previous Square div
append player piece to previous div in series
unless you are on start, as you can't move further back.
must click the logo button in the center of the board to continue.

Lose a turn! (Only on Two Player) 
The player's turn ends immediately, and the other player
takes two turns in a row.
must click the logo button in the center of the board to continue.

Go Again! (Only on Two Player)
the player can roll again immediately
must click the logo button in the center of the board to continue.

game play continues until one player reaches the Finish Square.
open finish dialog and ask to play again w/ button
*/