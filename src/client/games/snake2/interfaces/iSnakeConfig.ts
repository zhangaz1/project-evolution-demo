import Vector from '../types/vector.js';
import GameModels from '../enums/gameModes.js';

export default interface ISnakeConfig {
	defaultLength: number;
	defaultStep: Vector;
	gameMode: GameModels;
}