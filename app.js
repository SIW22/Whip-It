console.log('testing')

// Screen should load and wait for player input

//localStorage.setItem('test','this is working');

const colorOptions = ['black','yellow','orange','red'];

const onePlayerButton = document.querySelector('#onePlayer');

onePlayerButton.addEventListener('click', () => {
	localStorage.clear();
	document.querySelector('.colorPrompt').innerHTML = "PLAYER ONE, CHOOSE A COLOR";
	localStorage.setItem('numberOfPlayers', '1'); // store number of players
	onePlayerButton.style.backgroundColor = 'darkred';
	if (twoPlayerButton.style.backgroundColor == "darkred") {
		twoPlayerButton.style.backgroundColor = '#C1272D';
	}
	document.querySelector('#black').style.opacity = '1';
	document.querySelector('#yellow').style.opacity = '1';
	document.querySelector('#orange').style.opacity = '1';
	document.querySelector('#red').style.opacity = '1';
	console.log('One player clicked');
	onePlayerColorSelect();	
})


function onePlayerColorSelect() {
	document.querySelector('.colorPrompt').innerHTML = "PLAYER ONE, CHOOSE A COLOR";
	
	document.querySelector('#black').addEventListener('click', () => {
		localStorage.setItem('color', colorOptions[0]);
		document.querySelector('#black').style.opacity = '0.5';
		document.querySelector('.colorPrompt').innerHTML = "PRESS START GAME!";
	}) 
	document.querySelector('#yellow').addEventListener('click', () => {
		localStorage.setItem('color', colorOptions[1]);
		document.querySelector('#yellow').style.opacity = '0.5';
		document.querySelector('.colorPrompt').innerHTML = "PRESS START GAME!";
	})
	document.querySelector('#orange').addEventListener('click', () => {
		localStorage.setItem('color', colorOptions[2]);
		document.querySelector('#orange').style.opacity = '0.5';
		document.querySelector('.colorPrompt').innerHTML = "PRESS START GAME!";
	}) 
	document.querySelector('#red').addEventListener('click', () => {
		localStorage.setItem('color', colorOptions[3]);
		document.querySelector('#red').style.opacity = '0.5';
		document.querySelector('.colorPrompt').innerHTML = "PRESS START GAME!";
	})
}

const twoPlayerButton = document.querySelector('#twoPlayer');

twoPlayerButton.addEventListener('click', () => {
	localStorage.clear();
	localStorage.setItem('numberOfPlayers', '2'); // store number of players
	twoPlayerButton.style.backgroundColor = 'darkred';
	if (onePlayerButton.style.backgroundColor == "darkred") {
		onePlayerButton.style.backgroundColor = '#C1272D';
	}
	document.querySelector('#black').style.opacity = '1';
	document.querySelector('#yellow').style.opacity = '1';
	document.querySelector('#orange').style.opacity = '1';
	document.querySelector('#red').style.opacity = '1';
	console.log('Two player clicked');
	twoPlayerColorSelectA();	
})

function twoPlayerColorSelectA() {
	document.querySelector('.colorPrompt').innerHTML = "PLAYER ONE, CHOOSE A COLOR";
	document.querySelector('#black').addEventListener('click', () => {
		localStorage.setItem('color1', colorOptions[0]);
		document.querySelector('#black').style.opacity = '0.5';
		document.querySelector('.colorPrompt').innerHTML = "PLAYER TWO, CHOOSE A COLOR";
		twoPlayerColorSelectB();
	}) 
	document.querySelector('#yellow').addEventListener('click', () => {
		localStorage.setItem('color1', colorOptions[1]);
		document.querySelector('#yellow').style.opacity = '0.5';
		document.querySelector('.colorPrompt').innerHTML = "PLAYER TWO, CHOOSE A COLOR";
		twoPlayerColorSelectB();
	})
	document.querySelector('#orange').addEventListener('click', () => {
		localStorage.setItem('color1', colorOptions[2]);
		document.querySelector('#orange').style.opacity = '0.5';
		document.querySelector('.colorPrompt').innerHTML = "PLAYER TWO, CHOOSE A COLOR";
		twoPlayerColorSelectB();
	}) 
	document.querySelector('#red').addEventListener('click', () => {
		localStorage.setItem('color1', colorOptions[3]);
		document.querySelector('#red').style.opacity = '0.5';
		document.querySelector('.colorPrompt').innerHTML = "PLAYER TWO, CHOOSE A COLOR";
		twoPlayerColorSelectB();
	})
}

function twoPlayerColorSelectB() {

	document.querySelector('#black').addEventListener('click', () => { 
		localStorage.setItem('color2', colorOptions[0]);
		document.querySelector('#black').style.opacity = '0.5';
		document.querySelector('.colorPrompt').innerHTML = "PRESS START GAME!";
	}) 
	document.querySelector('#yellow').addEventListener('click', () => {
		localStorage.setItem('color2', colorOptions[1]);
		document.querySelector('#yellow').style.opacity = '0.5';
		document.querySelector('.colorPrompt').innerHTML = "PRESS START GAME!";
	})
	document.querySelector('#orange').addEventListener('click', () => {
		localStorage.setItem('color2', colorOptions[2]);
		document.querySelector('#orange').style.opacity = '0.5';
		document.querySelector('.colorPrompt').innerHTML = "PRESS START GAME!";
	}) 
	document.querySelector('#red').addEventListener('click', () => {
		localStorage.setItem('color2', colorOptions[3]);
		document.querySelector('#red').style.opacity = '0.5';
		document.querySelector('.colorPrompt').innerHTML = "PRESS START GAME!";
	})
}

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