interface Game {
	start(): Promise<any>;
	stop(): Promise<any>;
}

export default Game;