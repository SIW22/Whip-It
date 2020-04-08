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
		localStorage.setItem('player1ColorChoice', '');
		//wait 10 seconds for input, then pick random color
		document.getElementsByClassName('colorPrompt').innerHTML = "PLAYER TWO, CHOOSE A COLOR"; 
		colorSelect();
		localStorage.setItem('player2ColorChoice', '');
		//wait 10 seconds for input, then pick random color
		}
	}

	// if (document.querySelector(button)).addEventListener('click', function() {
	// 	$('h2').attr('id', 'name').append('Skot Walker');
	// })

function colorSelect() { 
	document.querySelector('black').addEventListener('click', function() {
		
	})
}

const colorOptions = ['black','yellow','orange','red']