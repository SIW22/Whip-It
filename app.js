console.log('testing')

// Screen should load and wait for player input

//localStorage.setItem('test','this is working');

const colorOptions = ['black','yellow','orange','red'];

const onePlayerButton = document.querySelector('#onePlayer');
onePlayerButton.addEventListener('click', () => {
	localStorage.setItem('numberOfPlayers', '1'); // store number of players
	document.querySelector('.colorPrompt').innerHTML = "PLAYER ONE, CHOOSE A COLOR";
	console.log('One player clicked');
	// Player One Selects Color
	document.querySelector('#black').addEventListener('click', () => {
		console.log('black was clicked');
		localStorage.setItem('color', colorOptions[0]);
	}) 
	document.querySelector('#yellow').addEventListener('click', () => {
		console.log('yellow was clicked');
		localStorage.setItem('color', colorOptions[1]);
	})
	document.querySelector('#orange').addEventListener('click', () => {
		console.log('orange was clicked');
		localStorage.setItem('color', colorOptions[2]);
	}) 
	document.querySelector('#red').addEventListener('click', () => {
		console.log('red was clicked');
		localStorage.setItem('color', colorOptions[3]);
	})

})

const twoPlayerButton = document.querySelector('#twoPlayer');
twoPlayerButton.addEventListener('click', () => {
	localStorage.setItem('numberOfPlayers', '2'); // store number of players
	document.querySelector('.colorPrompt').innerHTML = "PLAYER ONE, CHOOSE A COLOR"; // update text
	console.log('Two player clicked');
	// Player One Selects Color
	document.querySelector('#black').addEventListener('click', () => {
		console.log('black was clicked');
		localStorage.setItem('color1', colorOptions[0]);
	}) 
	document.querySelector('#yellow').addEventListener('click', () => {
		console.log('yellow was clicked');
		localStorage.setItem('color1', colorOptions[1]);
	})
	document.querySelector('#orange').addEventListener('click', () => {
		console.log('orange was clicked');
		localStorage.setItem('color1', colorOptions[2]);
	}) 
	document.querySelector('#red').addEventListener('click', () => {
		console.log('red was clicked');
		localStorage.setItem('color1', colorOptions[3]);
	})
	// Pause and wait for input? 
	// Player Two Selects Color
	document.querySelector('.colorPrompt').innerHTML = "PLAYER TWO, CHOOSE A COLOR"; // update text
	console.log('Two player clicked');

	document.querySelector('#black').addEventListener('click', () => {
		console.log('black was clicked');
		localStorage.setItem('color2', colorOptions[0]);
	}) 
	document.querySelector('#yellow').addEventListener('click', () => {
		console.log('yellow was clicked');
		localStorage.setItem('color2', colorOptions[1]);
	})
	document.querySelector('#orange').addEventListener('click', () => {
		console.log('orange was clicked');
		localStorage.setItem('color2', colorOptions[2]);
	}) 
	document.querySelector('#red').addEventListener('click', () => {
		console.log('red was clicked');
		localStorage.setItem('color2', colorOptions[3]);
	})
})

if (localStorage.getItem('numberOfPlayers', '1') 
	&& (localStorage.getItem('color', 'black')) 
	|| (localStorage.getItem('color', 'yellow')) 
	|| (localStorage.getItem('color', 'orange')) 
	|| (localStorage.getItem('color', 'red'))) {
	console.log('onto the game')
	//str.link('board.html');
}



/* Sound Effect */

/* const whipCrack = new Audio('sounds/whipcrack.wav');

let navSounds = document.querySelector('.nav');
console.log('Whip It!');

navSounds.addEventListener('click', () => {
	whipCrack.play();
	console.log('Crack that Whip!');
}) */



 /* function playerSelect() {
	(document.getElementById(onePlayer).addEventListener('click', () => { // on button click
		localStorage.setItem('numberOfPlayers:', 1); // store number of players
		document.getElementsByClassName('colorPrompt').innerHTML = "PLAYER ONE, CHOOSE A COLOR"; // update text on page
		colorSelect(); // run color select program
	}) else 
			(document.getElementsById(twoPlayer).addEventListener('click', () => { //on button click
			localStorage.setItem('numberOfPlayers:', 2); // store number of players
			document.getElementsByClassName('colorPrompt').innerHTML = "PLAYER ONE, CHOOSE A COLOR"; //update text on page
			colorSelect(); // run color select function
			localStorage.setItem('player1ColorChoice', 'arrNum'); // store color choice
			// to add - wait 10 seconds for input, then pick random color
			document.getElementsByClassName('colorPrompt').innerHTML = "PLAYER TWO, CHOOSE A COLOR"; //update text on page
			colorSelect('arrNum'); // run color select function
			localStorage.setItem('player2ColorChoice', 'arrNum'); // store color choice
			//to add - wait 10 seconds for input, then pick random color
		})
	} */

// if two player button is clicked, 