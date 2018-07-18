import consts from './common/consts.js';

const gameScripts = consts.gameScripts;

boot();

// return void (0);

function boot() {
	$('#snake').click(loadGameHander);
}

function loadGameHander() {
	clearGame();
	// loadGame(this.id);
	loadGameModule(this.id);
}

function loadGameModule(game) {
	var game = `./../games/${game}/boot.js`;
	import(game)
		.then(function(module) {
			module.default();
		});
}

function loadGame(game) {
	const gameScript = $(`<script type="module" src="./games/${game}/boot.js"></script>`);

	gameScripts.append(gameScript);
}

function clearGame() {
	consts.gameGround.empty();
	gameScripts.empty();
}