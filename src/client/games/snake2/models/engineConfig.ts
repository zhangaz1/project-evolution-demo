import IEngineConfig from './../interfaces/engineConfig.js';
import GameModes from './../enums/gameModes.js';

export default class EngineConfig implements IEngineConfig {
	constructor(
		public interval: number = 300,
		public gameMode: GameModes = GameModes.NoWalls,
	) { }
}