import consts from './common/consts.js';

const gameScripts = consts.gameScripts;

boot();

// return void (0);

function boot() {
	$('#snake').click(loadGameHander);
}

function loadGameHander() {
	clearGame();
	loadGame(this.id);
}

function loadGame(game) {
	const gameModule = `./../games/${game}/boot.js`;
	// 暂不支持await
	// const module = await import(game)
	// module.default();

	import(gameModule)
		.then(function(module) {
			module.default();
		});
}

function clearGame() {
	consts.gameGround.empty();
	gameScripts.empty();
}