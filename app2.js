console.log('testing')


const problemCardDeck = [
	{message: 'Move Forward!', action: +1},
	{message: 'Move Forward!', action: +1},
	{message: 'Move Forward!', action: +1},
	{message: 'Go Back!', action: -1},
	{message: 'Go Back!', action: -1},
	{message: 'Go Back!', action: -1},
	{message: 'Go Again!', action: goAgain()},
	{message: 'Go Again!', action: goAgain()},
	{message: 'Go Again!', action: goAgain()},
	{message: 'Lose a Turn!', action: loseTurn()},
	{message: 'Lose a Turn!', action: loseTurn()},
	{message: 'Lose a Turn!', action: loseTurn()},
]

const dieSides = [
	{message: 'ONE', action: movePlayer(1)},
	{message: 'TWO', action: movePlayer(2)},
	{message: 'PROBLEM', action: problemCardDraw()},
]

/* Game Engine */

function diceRoll(arr) { //locates a random die side from array
	// return arr[randomize(arr)];
}

function problemCardDraw(arr) { //locates a random card from a ProblemCardDeck
	// return arr[randomize(arr)];
}

function randomize(arr) { //supplies a random number based on length of given array
	// return Math.floor(Math.random()* arr.length);
}

function goAgain() { //skips next player's turn

}

function loseTurn() { //triggers goAgain on otherplayer

}

function movePlayer() { //moves spaces based on input
	
}

function whipIt() { //
	// resolves active Problem Card
	// triggers sound effect w/ event listener
}

// function whipCrack() {
// 	document.getElementById("dummy").innerHTML = "<embed src = 'gitignore/whipcrack.mp3'; hidden = "true"; autostart= "true"; loop = "false" >";
// 	}


// document.querySelector('button').addEventListener('click', function() {
// 	$('h2').attr('id', 'name').append('Skot Walker');
	
// 	console.log("The Die Was Rolled!");
// })