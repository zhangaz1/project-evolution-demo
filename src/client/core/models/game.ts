interface Game {
	open(): Promise<any>;
	start(): Promise<any>;
	pause(): Promise<any>;
	continue(): Promise<any>;
	stop(): Promise<any>;
	close(): Promise<any>;
}

export default Game;