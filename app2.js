
const problemCardDeck = [
	{index: 0, message: `GO FORWARD!`, moveAmt: 1, action: `MOVE AHEAD ONE SPACE!`},
	{index: 1, message: `MOVE AHEAD!`, moveAmt: 1, action: `MOVE AHEAD ONE SPACE!`},
	{index: 2, message: `TRY TO DETECT IT!`, moveAmt: 1, action: `MOVE AHEAD ONE SPACE!`},
	{index: 3, message: `WHEN A GOOD TIME TURNS AROUND, YOU MUST WHIP IT!`, moveAmt: -1, action: `MOVE BACK ONE SPACE!`},
	{index: 4, message: `BEFORE THE CREAM SITS OUT TOO LONG, YOU MUST WHIP IT!`, moveAmt: -1, action: `MOVE BACK ONE SPACE!`},
	{index: 5, message: `SHAPE IT UP!`, moveAmt: -1, action: `MOVE BACK ONE SPACE!`},
	{index: 6, message: `WHEN A PROBLEM COMES ALONG, YOU MUST WHIP IT!`, moveAmt: 0, action: `END OF YOUR TURN!`},
	{index: 7, message: `CRACK THAT WHIP! GIVE THE PAST THE SLIP!`, moveAmt: 0, action: `END OF YOUR TURN!`},
	{index: 8, message: `YOU WILL NEVER LIVE IT DOWN, UNTIL YOU WHIP IT!`, moveAmt: 0, action: `END OF YOUR TURN!`},
	{index: 9, message: `WHIP IT, INTO SHAPE!`, moveAmt: goAgain(), action: `GO AGAIN!`},
	{index: 10, message: `IT'S NOT TOO LATE, TO WHIP IT!`, moveAmt: goAgain(), action: `GO AGAIN!`},
	{index: 11, message: `WHIP IT GOOD!`, moveAmt: goAgain(), action: `GO AGAIN!`},
	{index: 12, message: `WHEN SOMETHING'S GOING WRONG, YOU MUST WHIP IT!`, moveAmt: loseTurn(), action: `LOSE A TURN!`},
	{index: 13, message: `NO ONE GETS AWAY, UNTIL THEY WHIP IT!`, moveAmt: loseTurn(), action: `LOSE A TURN!`},
	{index: 14, message: `STEP ON A CRACK, BREAK YOUR MAMA'S BACK!`, moveAmt: loseTurn(), action: `LOSE A TURN!`},
];
let arr = problemCardDeck;

const dieSides = [
	{face: 'ONE', img: 'graphics/oneDie.svg', moveAmt: 1},
	{face: 'TWO', img: 'graphics/twoDie.svg', moveAmt: 2},
	{face: 'PROBLEM', img: 'graphics/problemDie.svg', moveAmt: 0, action: problemCardDraw},
];

let dieArray = dieSides;

const player1 = {
	color: '',
	playerNumber: 1,
	currentNumber: 0,
	playerClass: '.playerPiece_1',
	currentSquareClass: '.square_0'
}

const player2 = {
	color: '',
	playerNumber: 2,
	currentNumber: 0,
	playerClass: '.playerPiece_2',
	currentSquareClass: '.square_0'
}


function movePlayer(player, distance) {
	let newSquare = player.currentNumber + distance;
	player.currentNumber = newSquare;
	player.currentSquareClass = ('.square_' + newSquare);
	let location = document.querySelector(player.currentSquareClass);
	// console.log(player.currentSquareClass);
	let playerPiece = document.querySelector(player.playerClass);
	location.append(playerPiece);
	
	let list = document.querySelectorAll('.sq');


	const sqArray = [...list];

	for (i = 0; i < sqArray.length; i++) {
		if (sqArray[i].children.length < 2) {
			console.log(sqArray[i].children);
			document.querySelector('.playerPiece_1').classList.add('cohab');
			document.querySelector('.playerPiece_2').classList.add('cohab');
			// console.log(sqArray[i]);
		}
	}
}
/*	
	for (i = 0; i < list.length; i++) {
		if (list[i].childNode.length === 2) {
			list[i].setAttribute('display', 'flex-grow');
			console.log(list[i]);
			// list[i].style.display = 'flex';
		}
	}
} */

/* Movement Buttons */
let p1B = document.querySelector('.p1Backward');
let p1F = document.querySelector('.p1Forward');
let p2B = document.querySelector('.p2Backward');
let p2F = document.querySelector('.p2Forward');

p1B.addEventListener('click', () => movePlayer(player1, -1));
p1F.addEventListener('click', () => movePlayer(player1, 1));
p2B.addEventListener('click', () => movePlayer(player2, -1));
p2F.addEventListener('click', () => movePlayer(player2, 1));

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

let currentDie = document.querySelector('.die');

currentDie.addEventListener('click', () => {
	dieRoll(dieArray);
	
	if (document.querySelector('.currentPlayer') == `PLAYER ONE'S TURN`) {
		document.querySelector('.currentPlayer').innerHTML = `PLAYER TWO'S TURN`;
	console.log("It's Player Two's Turn.")
	} else {
		document.querySelector('.currentPlayer').innerHTML = `PLAYER ONE'S TURN`;
		console.log("It's Player One's Turn");
	}
	console.log('the die was clicked')
})

function dieRoll(dieArray) { //locates a random die side from array
	dieResult = (Math.floor(Math.random()*3));
	randomDeg = (Math.floor(Math.random()*360));
	if (dieResult === 0) {
		currentDie.setAttribute('src', 'graphics/oneDie.svg');
		currentDie.style.transform = `rotate(${randomDeg}deg)`;
		console.log('Rolled a 1!');
	} else if (dieResult === 1) {
		currentDie.setAttribute('src', 'graphics/twoDie.svg');
		currentDie.style.transform = `rotate(${randomDeg}deg)`;
		console.log('Rolled a 2!');
	} else if (dieResult === 2) {
		currentDie.setAttribute('src', 'graphics/problemDie.svg')
		currentDie.style.transform = `rotate(${randomDeg}deg)`;
		console.log('Uh oh!');
	}
}

function problemCardDraw(arr) { //locates a random card from a ProblemCardDeck
	return arr[randomize(arr)];
}
function randomize(arr) { //supplies a random number based on length of given array
	return Math.floor(Math.random()*15);
}

function goAgain() {} //skips next player's turn

function loseTurn() {} //triggers goAgain on otherplayer


const problem = document.querySelector('#problemCard');

problem.addEventListener('click', () => {
	let randomCard = problemCardDraw(arr);
	let cardMessage = randomCard.message;
	console.log(cardMessage);

	let pulledCard = document.createElement('div');
	pulledCard.setAttribute('class', 'newCard');
	let newCard = document.querySelector('.pulledProblemCard');
	newCard.appendChild(pulledCard);

	let words = document.createElement('h3');
	words.innerHTML = cardMessage;
	document.querySelector('.newCard').appendChild(words);

	let cardAction = randomCard.action;
	console.log(cardAction);

	let words2 = document.createElement('h4');
	words2.innerHTML = cardAction;
	document.querySelector('.newCard').appendChild(words2);

	console.log('Problem Card Deck Accessed!')
})

/*  */
const nextPlayer = document.querySelector('.currentPlayer');

const state1 = "PLAYER ONE'S TURN";
const state2 = "PLAYER TWO'S TURN";

nextPlayer.addEventListener('click', () => {
	if (nextPlayer === state1) {
	nextPlayer.innerHTML = state2;
	console.log("It's Player Two's Turn.")
	} else if (nextPlayer === state2) {
		nextPlayer.innerHTML = state1;
		console.log("It's Player One's Turn");
	}
})


/* Sound Effect */

const whipCrack = new Audio('sounds/whipcrack.wav');

let logo = document.querySelector('#whipItLogo');
console.log(logo);

logo.addEventListener('click', () => {
	whipCrack.play();

	document.querySelector('.newCard').remove();
	// document.querySelector('.pulledProblemCard').parentNode.removeChild('.newCard');
	console.log('Crack that Whip!');
})

const soundtrack = new Audio('sounds/whip_it.wav');

let notes = document.querySelector('.music');

notes.addEventListener('click', () => {
	soundtrack.play();
	setTimeout(() => {
		soundtrack.pause();
	}, 5000);
	console.log('I say Whip It!');
})


/* Game Automation */
/* 
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
	playerTwo.color = localStorage.getItem('color2');
	// player one takes a turn
	// player two takes a turn
	// repeats until square 34 is reached by either player.
	// winning player shown on victory page. "Player x Whipped it Good!"

	// display whose turn it is during game? 
} */


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