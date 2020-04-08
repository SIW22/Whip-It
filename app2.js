console.log('testing')


const problemCardDeck = [
	{message: `GO FORWARD!`, action: movePlayer(1)},
	{message: `MOVE AHEAD!`, action: movePlayer(1)},
	{message: `GET STRAIGHT!`, action: movePlayer(1)},
	{message: `WHEN A GOOD TIME TURNS AROUND, YOU MUST WHIP IT!`, action: movePlayer(-1)},
	{message: `BEFORE THE CREAM SITS OUT TOO LONG, YOU MUST WHIP IT!`, action: movePlayer(-1)},
	{message: `SHAPE IT UP!`, action: movePlayer(-1)},
	{message: `WHEN A PROBLEM COMES ALONG, YOU MUST WHIP IT!`, action: 'none'},
	{message: `CRACK THAT WHIP! GIVE THE PAST THE SLIP!`, action: 'none'},
	{message: `YOU WILL NEVER LIVE IT DOWN, UNTIL YOU WIHP IT!`, action: 'none'},
	{message: `WHIP IT, INTO SHAPE!`, action: goAgain()},
	{message: `IT'S NOT TOO LATE, TO WHIP IT!`, action: goAgain()},
	{message: `WHIP IT GOOD!`, action: goAgain()},
	{message: `WHEN SOMETHING'S GOING WRONG, YOU MUST WHIP IT!`, action: loseTurn()},
	{message: `NO ONE GETS AWAY, UNTIL THE WHIP IT!`, action: loseTurn()},
	{message: `STEP ON A CRACK, BREAK YOUR MAMA'S BACK!`, action: loseTurn()},
]

const dieSides = [
	{message: 'ONE', action: movePlayer(1)},
	{message: 'TWO', action: movePlayer(2)},
	{message: 'PROBLEM', action: problemCardDraw()},
]

/* Game Engine */

// how to link information collected from splash page to here?
// input number of players, 1 or 2;
// input player one color choice
// input player two color choice

function gameMode(num) {
	if (playerSelect(num) === 1) {
		//run one player game
	} else if (playerSelect(num) === 2) {
		//run two player game
	}
}

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

function movePlayer(int) { //moves spaces based on input
	// use int to move current player position on the board
	// append player piece to different square based on int
}

function whipIt() { //
	// resolves active Problem Card
	// triggers sound effect w/ event listener
}

// function whipCrack() {
// 		sound effect 
// 	}


// document.querySelector('button').addEventListener('click', function() {
// 	$('h2').attr('id', 'name').append('Skot Walker');
	
// 	console.log("The Die Was Rolled!");
// })