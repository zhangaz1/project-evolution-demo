import consts from './configs/consts.js';

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
	const gameModule = `./games/${game}/module.js`;
	// 暂不支持await
	// const module = await import(game)
	// module.default();

	return import(gameModule)
		.then(async module => {
			const game = await module.default.newGame();
			return game.start();
		});
}

function clearGame() {
	consts.gameGround.empty();
	consts.gameScripts.empty();
}