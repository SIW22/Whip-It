console.log('testing')

// Screen should load and wait for player input

//localStorage.setItem('test','this is working');

function playerSelect() {
	if (document.getElementById(onePlayer).addEventListener('click')) {
		localStorage.setItem('numberOfPlayers:', 1);
		document.getElementsByClassName('colorPrompt').innerHTML = "PLAYER ONE, CHOOSE A COLOR"; 
		colorSelect();
	} else {
		document.getElementsById(twoPlayer).addEventListener('click')
		localStorage.setItem('numberOfPlayers:', 2);
		document.getElementsByClassName('colorPrompt').innerHTML = "PLAYER ONE, CHOOSE A COLOR"; 
		colorSelect();
		localStorage.setItem('player1ColorChoice', 'arrNum');
		//wait 10 seconds for input, then pick random color
		document.getElementsByClassName('colorPrompt').innerHTML = "PLAYER TWO, CHOOSE A COLOR"; 
		colorSelect('arrNum');
		localStorage.setItem('player2ColorChoice', 'arrNum');
		//wait 10 seconds for input, then pick random color
		}
	}

function colorSelect(arrNum) { 
	if document.querySelector('#black').addEventListener('click', function() {
		let arrNum = colorOptions[0];
		return colorOptions[0];
	}) else if 
		document.querySelector('#yellow').addEventListener('click', function() { 
		return colorOptions[1];
	}) else if 
		document.querySelector('#orange').addEventListener('click', function() {
		return colorOptions[2];
	}) else if
		document.querySelector('#red').addEventListener('click', function() { 
		return colorOptions[3];
	})
}

const colorOptions = ['black','yellow','orange','red']