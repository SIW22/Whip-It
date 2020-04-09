console.log('testing')

// Screen should load and wait for player input

//localStorage.setItem('test','this is working');

function playerSelect() {
	if (document.getElementById(onePlayer).addEventListener('click', () => { // on button click
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
	}

const colorOptions = ['black','yellow','orange','red'];

function colorSelect(arrNum) { 
	if (document.querySelector('#black').addEventListener)('click', () => {
		// let arrNum = colorOptions[0];
		return colorOptions[0];
	}) else if 
		(document.querySelector('#yellow').addEventListener)('click', () => { 
		return colorOptions[1];
	}) else if 
		(document.querySelector('#orange').addEventListener)('click', () => {
		return colorOptions[2];
	}) else if 
		(document.querySelector('#red').addEventListener)('click', () => { 
		return colorOptions[3];
	})
}
