interface Game {
	start(): Promise<any>;
	close(): Promise<any>;
}

export default Game;