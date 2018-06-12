; $(function() {
	$('#snake').click(loadGameHander);

	return void (0);

	function loadGameHander() {
		clearGame();
		loadGame(this.id);
	}

	function loadGame(game) {
		const gameScript = $(`<script src="./js/${game}.js"></script>`);
		$('#game-scripts').append(gameScript);
	}

	function clearGame() {
		$('#game-ground').empty();
		$('#game-scripts').empty();
	}
});