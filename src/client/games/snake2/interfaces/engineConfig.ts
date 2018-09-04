import GameModels from './../enums/gameModes.js';

export default interface EngineConfig {
	interval: number;
	gameMode: GameModels;
}