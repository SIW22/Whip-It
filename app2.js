console.log('testing')


const problemCardDeck = [
	{index: 0, message: `GO FORWARD!`, action: movePlayer(1)},
	{index: 1, message: `MOVE AHEAD!`, action: movePlayer(1)},
	{index: 2, message: `TRY TO DETECT IT!`, action: movePlayer(1)},
	{index: 3, message: `WHEN A GOOD TIME TURNS AROUND, YOU MUST WHIP IT!`, action: movePlayer(-1)},
	{index: 4, message: `BEFORE THE CREAM SITS OUT TOO LONG, YOU MUST WHIP IT!`, action: movePlayer(-1)},
	{index: 5, message: `SHAPE IT UP!`, action: movePlayer(-1)},
	{index: 6, message: `WHEN A PROBLEM COMES ALONG, YOU MUST WHIP IT!`, action: movePlayer(0)},
	{index: 7, message: `CRACK THAT WHIP! GIVE THE PAST THE SLIP!`, action: movePlayer(0)},
	{index: 8, message: `YOU WILL NEVER LIVE IT DOWN, UNTIL YOU WHIP IT!`, action: movePlayer(0)},
	{index: 9, message: `WHIP IT, INTO SHAPE!`, action: goAgain()},
	{index: 10, message: `IT'S NOT TOO LATE, TO WHIP IT!`, action: goAgain()},
	{index: 11, message: `WHIP IT GOOD!`, action: goAgain()},
	{index: 12, message: `WHEN SOMETHING'S GOING WRONG, YOU MUST WHIP IT!`, action: loseTurn()},
	{index: 13, message: `NO ONE GETS AWAY, UNTIL THE WHIP IT!`, action: loseTurn()},
	{index: 14, message: `STEP ON A CRACK, BREAK YOUR MAMA'S BACK!`, action: loseTurn()},
]

const dieSides = [
	{face: 'ONE', action: movePlayer(1), img: 'oneDie.svg'},
	{face: 'TWO', action: movePlayer(2), img: 'twoDie.svg'},
	{face: 'PROBLEM', action: problemCardDraw(), img: 'problemDie.svg'},
]

const player1 = {
	color: '',
	currentSquare: '.0.square_0',
}

const player2 = {
	color: '',
	currentSquare: '.square_0',
}


/* Game Engine */

// how to link information collected from splash page to here?
// input number of players, 1 or 2;
// input player one color choice
// input player two color choice

let num = localStorage.getItem('numberOfPlayers');


function gameMode(num) {
	if (playerSelect(num) === 1) {
		onePlayerGameProtocol();
		console.log('One Player Game Selected.')
	} else if (playerSelect(num) === 2) {
		twoPlayerGameProtocol();
		console.log('Two Player Game Selected')
	}
}

function onePlayerGameProtocol() {
	// adds color choice to object
	playerOne.color = localStorage.getItem('color');
	// player clicks die to roll
	// player piece moves or a card is drawn
	// player must click to resolve card
	// repeats until square 34 is reached
	// 'lose a turn' cards are skipped in array (items 12-14)
	// player one victory page "You Whipped it Good!"
}

function twoPlayerGameProtocol() {
	playerOne.color = localStorage.getItem('color1');
	playerTwo.colot = localStorage.getItem('color2');
	// player one takes a turn
	// player two takes a turn
	// repeats until square 34 is reached by either player.
	// winning player shown on victory page. "Player x Whipped it Good!"

	// display whose turn it is during game? 
}

const dieClick = document.querySelector('.die');
dieClick.addEventListener('click', () => { // change image





function dieRoll(arr) { //locates a random die side from array
	if (arr[randomize(arr)] === 0) {
		let currentDie = document.getElementById('die');
		currentDie("oneDie.svg") // how to link this properly?
	} else if (arr[randomize(arr)] === 1) {
		let currentDie = document.getElementById('die');
		currentDie("twoDie.svg") // how to link this properly?
	} else (arr[randomize(arr)] === 2) {
		let currentDie = document.getElementById('die');
		currentDie("problemDie.svg") // how to link this properly?
	}
	return arr[randomize(arr)];
}

function problemCardDraw(arr) { //locates a random card from a ProblemCardDeck
	return arr[randomize(arr)];
}

function randomize(arr) { //supplies a random number based on length of given array
	return Math.floor(Math.random()* arr.length);
}

function goAgain() { //skips next player's turn

}

function loseTurn() { //triggers goAgain on otherplayer

}

let currentSquare = ('.0_square'); //starting square

function movePlayer(playerNum, distance) { //moves spaces based on input
	// player starts on square_0. and cannot back up from there;
	if(currentSquare === '.square_0') { // check if player is on square_0
		return currentSquare;
	} else 
		currentSquare.replace(".", "").replace('square', '').replace('_',''); // remove non-numbers
		let parsedNum = parseFloat(locNum, 10); // create number from string
		if (parsedNum === 0) {
			let divLoc = currentSquare;
		} else {
			let newLocNum = parsedNum + moveDistance // add distance from card or die
			let divLoc = ('.' + newLocNum + '_square') // add number back to string
			let newCurrentSquare = divLoc  // append to new div
			document.getElementsByClassName(divLoc).append.getElementsByClassName(playerPiece1);
		}	
}

	currentSquare = ('.square_0')
	if (currentSquare === 0) {
		if (distance >= 0) {
			//add distance to current appended square

		}
	}


	let p1currentSq = playerOne[1];
	let p2currentSq = playerTwo[1];


// let currentSquare = ('.square_0'); //starting square

// let locNum = currentSquare.replace(".", ""); // remove period
// let parsedNum = parseFloat(locNum, 10); // create number from string
// if (parsedNum === 0) {
// 	let newLocNum = parsedNum + moveDistance // add distance from card or die
// 	let sumLoc = (newLocNum + '_square') // add number back to string
// 	let newCurrentSquare = sumLoc  




/* 
let currentSquare = ('.0_square'); //starting square

let locNum = currentSquare.replace(".", ""); // remove period
let parsedNum = parseFloat(locNum, 10); // create number from string
let newLocNum = parsedNum + moveDistance // add distance from card or die
let sumLoc = (parsedNum + '_square') // add number back to string
let newCurrentSquare = sumLoc 
 */

/* 
let children = document.getElementsByClassName('gameBoard');
	children.hasChildNodes();
 */


	// use int to move current player position on the board
	// append player piece to different square based on int

/* 
document.getElementsByClassName(p1forward).addEventListener() {
	document.querySelector(nextParentNode).append(playerOne);
} 
 */


/* Sound Effect */

const whipCrack = new Audio(whipcrack.mp3);

let logoButton = document.getElementById(whipItLogo);

logoButton.addEventListener('click', () => {
	whipCrack.play();
})


	/* Game Play */
/* 
game loads, and prompts if there will be one or two players:
player one chooses a player piece color
player two chooses a player piece color (only if Two Player was selected)
check if color was already selected by player one, if yes
prompt w/ that color has already been selected, please choose a different color.
**Nice to have: highlight overlay on mouse hover, maybe increase size of button a bit
**Maybe the pieces jiggle a little bit while waiting?
**Gray out previously selected color

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

** Nice to have: sound effect on problem card resolution.

**Nice to have: active player is highlighted by adding a glow to the square
their piece is on. 
*/