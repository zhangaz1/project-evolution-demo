import {
	IVector,
} from './../types/index.js';

export { ISnakeConfig };
export default interface ISnakeConfig {
	defaultLength: number;
	defaultStep: IVector;
}