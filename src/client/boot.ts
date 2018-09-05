import consts from './configs/consts.js';

let currentGame = null;

boot();

// return void (0);

function boot() {
	$('.games-list > button').click(loadGameHander);

	$('#start').click(startHandler);
	$('#pause').click(pauseHandler);
	$('#continue').click(continueHandler);
	$('#stop').click(stopHandler);
	$('#close').click(closeHandler);
}

async function loadGameHander() {
	clearGame();
	currentGame = await loadGame(this.id);
}

async function startHandler() {
	return tryGameAction('start');
}

async function pauseHandler() {
	return tryGameAction('pause');
}

async function continueHandler() {
	return tryGameAction('continue');
}

async function stopHandler() {
	return tryGameAction('stop');
}

async function closeHandler() {
	return tryGameAction('close')
		.then(() => currentGame = null);
}

async function tryGameAction(action: string) {
	if (currentGame) {
		return currentGame[action]();
	}

	return Promise.resolve();
}

async function loadGame(game) {
	const gameModule = `./games/${game}/module.js`;
	// 暂不支持await
	// const module = await import(game)
	// module.default();

	return import(gameModule)
		.then(async module => {
			const game = await module.default.newGame();
			await game.open();
			return game;
		});
}

function clearGame() {
	consts.gameGround.empty();
	consts.gameScripts.empty();
}