import consts from './common/consts.js';

const gameScripts = consts.gameScripts;

$('#snake').click(loadGameHander);

// return void (0);

function loadGameHander() {
	clearGame();
	loadGame(this.id);
}

function loadGame(game) {
	const gameScript = $(`<script src="./games/${game}/${game}.js"></script>`);

	gameScripts.append(gameScript);
}

function clearGame() {
	consts.gameGround.empty();
	gameScripts.empty();
}