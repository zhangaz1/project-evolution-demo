import consts from './common/consts.js';

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
	const gameModule = `./../games/${game}/module.js`;
	// 暂不支持await
	// const module = await import(game)
	// module.default();

	return import(gameModule)
		.then(function (module) {
			module.boot();
		});
}

function clearGame() {
	consts.gameGround.empty();
	consts.gameScripts.empty();
}