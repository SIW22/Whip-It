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
	{face: 'ONE', action: movePlayer(1)},
	{face: 'TWO', action: movePlayer(2)},
	{face: 'PROBLEM', action: problemCardDraw()},
]

const player1 = {
	color: '',
	currentSquare: '.square_0',
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

console.log(localStorage.getItem('test'));

console.log(localStorage.getItem('numberOfPlayers'));

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
	localStorage.getItem()
	// player clicks die to roll
	// player piece moves or a card is drawn
	// player must click to resolve card
	// repeats until square 34 is reached
	// 'lose a turn' cards are ignored
	// player one victory page "You Whipped it Good!"
}

function twoPlayerGameProtocol() {
	// player one takes a turn
	// player two takes a turn
	// repeats until square 34 is reached by either player.
	// winning player shown on victory page. "Player x Whipped it Good!"

	// display whose turn it is during game? 
}
/* 
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
} */

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

function movePlayer(playerNum, distance) { //moves spaces based on input
	// player starts on square_0. and cannot back up from there.
	//check if player is on square_0.
	const currentSquare = ()
	if (currentSquare === 0) {
		if (distance >= 0) {
			//add distance to current appended square

		}
	}




	// use int to move current player position on the board
	// append player piece to different square based on int
}

document.getElementsByClassName(.forward).addEventListener() {
	document.querySelector("#The-Shire").append(ul);
}

const whipCrack = new Audio(whipcrack.mp3)

/* function whipIt() { //
	// resolves active Problem Card
	#whipItLogo.addEventListener('click', () => {})
	whipCrack.play();
	})
} */

let logoButton = document.getElementById(whipItLogo);

logoButton.addEventListener('click', () => {
	whipCrack.play();
	})

// document.querySelector('button').addEventListener('click', function() {
// 	$('h2').attr('id', 'name').append('Skot Walker');
	
// 	console.log("The Die Was Rolled!");
// })