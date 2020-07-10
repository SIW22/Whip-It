
const colorOptions = ['black','yellow','orange','red'];

const onePlayerButton = document.querySelector('#onePlayer');
const twoPlayerButton = document.querySelector('#twoPlayer');

const black = document.querySelector('#black');
const yellow = document.querySelector('#yellow');
const orange = document.querySelector('#orange');
const red = document.querySelector('#red');

const colors = document.getElementsByClassName('.colors');
const colorPrompt = document.querySelector('.colorPrompt');


onePlayerButton.addEventListener('click', playerOne);
twoPlayerButton.addEventListener('click', playerTwo);


function playerOne() {
	disable2PlayerColorSelection()
	localStorage.clear();
	colorPrompt.innerHTML = "PLAYER ONE, CHOOSE A COLOR";
	localStorage.setItem('numberOfPlayers', '1');
	onePlayerButton.style.backgroundColor = 'darkred';
	if (twoPlayerButton.style.backgroundColor == 'darkred') {
		twoPlayerButton.style.backgroundColor = '#C1272D';
	}
	black.style.opacity = '1';
	yellow.style.opacity = '1';
	orange.style.opacity = '1';
	red.style.opacity = '1';
	console.log('One player selected');
	onePlayerColorSelect();	
}

function chooseBlack() {
	localStorage.setItem('color', colorOptions[0]);
		black.style.opacity = '0.5';
		yellow.style.opacity = '1';
		orange.style.opacity = '1';
		red.style.opacity = '1';
		colorPrompt.innerHTML = "PRESS START GAME!";
}

function chooseYellow() {
	localStorage.setItem('color', colorOptions[1]);
	black.style.opacity = '1';
	yellow.style.opacity = '0.5';
	orange.style.opacity = '1';
	red.style.opacity = '1';
	colorPrompt.innerHTML = "PRESS START GAME!";
}

function chooseOrange() {
	localStorage.setItem('color', colorOptions[2]);
	black.style.opacity = '1';
	yellow.style.opacity = '1';
	orange.style.opacity = '0.5';
	red.style.opacity = '1';
	colorPrompt.innerHTML = "PRESS START GAME!";
}

function chooseRed() {
	localStorage.setItem('color', colorOptions[3]);
		black.style.opacity = '1';
		yellow.style.opacity = '1';
		orange.style.opacity = '1';
		red.style.opacity = '0.5';
		colorPrompt.innerHTML = "PRESS START GAME!";
}

function onePlayerColorSelect() {
	black.addEventListener('click', chooseBlack); 
	yellow.addEventListener('click', chooseYellow);
	orange.addEventListener('click', chooseOrange);
	red.addEventListener('click', chooseRed);
}

function disable1PlayerColorSelect() {
	window.onePlayerColorSelect = function(){};
};

function disable2PlayerColorSelection() {
	window.twoPlayerColorSelectA = function(){};
	window.twoPlayerColorSelectB = function(){};
}

// ##################################################TWO PLAYER

function playerTwo() {
	disable1PlayerColorSelect();
	localStorage.clear();
	colorPrompt.innerHTML = "PLAYER ONE, CHOOSE A COLOR";
	localStorage.setItem('numberOfPlayers', '2');
	twoPlayerButton.style.backgroundColor = 'darkred';
	if (onePlayerButton.style.backgroundColor == "darkred") {
		onePlayerButton.style.backgroundColor = '#C1272D';
	}
	black.style.opacity = '1';
	yellow.style.opacity = '1';
	orange.style.opacity = '1';
	red.style.opacity = '1';
	console.log('Two player selected');
	twoPlayerColorSelectA();
}

function twoPlayerColorSelectA() {
	black.addEventListener('click', chooseBlack1);
	yellow.addEventListener('click', chooseYellow1);
	orange.addEventListener('click', chooseOrange1);
	red.addEventListener('click', chooseRed1);
}

function twoPlayerColorSelectB() {
	colorPrompt.innerHTML = "PLAYER TWO, CHOOSE A COLOR"
	black.addEventListener('click', chooseBlack2);
	yellow.addEventListener('click', chooseYellow2);
	orange.addEventListener('click', chooseOrange2);
	red.addEventListener('click', chooseRed2);
}

// function chooseBlack1() {
// 	if (localStorage.getItem('color' !== undefined)) {
// 		localStorage.setItem('color1', colorOptions[0]);
// 	}
// 	black.style.opacity = '0.5';
// 	twoPlayerColorSelectB();
// }

// function chooseYellow1() {
// 	localStorage.setItem('color1', colorOptions[1]);
// 	yellow.style.opacity = '0.5';
// 	twoPlayerColorSelectB();
// }

// function chooseOrange1() {
// 	localStorage.setItem('color1', colorOptions[2]);
// 	orange.style.opacity = '0.5';
// 	twoPlayerColorSelectB();
// }

// function chooseRed1() {
// 	localStorage.setItem('color1', colorOptions[3]);
// 	red.style.opacity = '0.5';
// 	twoPlayerColorSelectB();
// }

// function chooseBlack2() {
// 	localStorage.setItem('color2', colorOptions[0]);
// 	black.style.opacity = '0.5';
// 	colorPrompt.innerHTML = "PRESS START GAME!";
// }
// function chooseYellow2() {
// 	localStorage.setItem('color2', colorOptions[1]);
// 	yellow.style.opacity = '0.5';
// 	colorPrompt.innerHTML = "PRESS START GAME!";
// }
// function chooseOrange2() {
// 	localStorage.setItem('color2', colorOptions[2]);
// 	orange.style.opacity = '0.5';
// 	colorPrompt.innerHTML = "PRESS START GAME!";
// }
// function chooseRed2() {
// 	localStorage.setItem('color2', colorOptions[3]);
// 	red.style.opacity = '0.5';
// 	colorPrompt.innerHTML = "PRESS START GAME!";
// }

if (localStorage.getItem('numberOfPlayers', '1') 
	&& (localStorage.getItem('color', 'black')) 
	|| (localStorage.getItem('color', 'yellow')) 
	|| (localStorage.getItem('color', 'orange')) 
	|| (localStorage.getItem('color', 'red'))) {

	console.log('onto the game')
	//str.link('board.html');
} else {
	localStorage.getItem('numberOfPlayers', '2')
	console.log('two player game start');
}