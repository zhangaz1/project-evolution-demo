import consts from './configs/consts.js';

let currentGame = null;

boot();

// return void (0);

function boot() {
	$('#snake').click(loadGameHander);
	$('#close').click(closeHandler);
}

async function loadGameHander() {
	clearGame();
	currentGame = await loadGame(this.id);
}

async function closeHandler() {
	if (currentGame) {
		await currentGame.close();
		currentGame = null;
	}
}

async function loadGame(game) {
	const gameModule = `./games/${game}/module.js`;
	// 暂不支持await
	// const module = await import(game)
	// module.default();

	return import(gameModule)
		.then(async module => {
			const game = await module.default.newGame();
			await game.start();
			return game;
		});
}

function clearGame() {
	consts.gameGround.empty();
	consts.gameScripts.empty();
}