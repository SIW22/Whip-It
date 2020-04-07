console.log('testing')



const problemCardDeck = [
	{message: 'Move Forward!', action: +1},
	{message: 'Move Forward!', action: +1},
	{message: 'Move Forward!', action: +1},
	{message: 'Go Back!', action: -1},
	{message: 'Go Back!', action: -1},
	{message: 'Go Back!', action: -1},
	{message: 'Lose a Turn!', action: loseTurn},
	{message: 'Lose a Turn!', action: loseTurn},
	{message: 'Lose a Turn!', action: loseTurn},
	{message: 'Go Again!', action: goAgain},
	{message: 'Go Again!', action: goAgain},
	{message: 'Go Again!', action: goAgain}
]

const dieSides = [
	{message: 'ONE', action: movePlayer(1)},
	{message: 'TWO', action: movePlayer(2)},
	{message: 'PROBLEM', action: movePlayer(1)}
]

/* Game Engine */
// Screen should load and wait for player input

function playerSelect() {

}

function colorSelect() {

}

function diceRoll() {

}

function problemCardDraw() {

}

function goAgain() {

}

function loseTurn() {

}

function movePlayer() {

}

let arr = problemCardDeck;

function randomCard(arr) { //locates a random card from a given array
	return arr[randomize(arr)];
}

function randomize(arr) { //supplies a random number based on length of given array
return Math.floor(Math.random()* arr.length);
}