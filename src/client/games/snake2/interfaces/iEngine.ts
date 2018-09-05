import { KeyCode } from './../types/index.js';

export { IEngine };
export default interface IEngine {
	open(): Promise<any>;
	start(): Promise<any>;
	pause(): Promise<any>;
	continue(): Promise<any>;
	stop(): Promise<any>;
	close(): Promise<any>;

	pauseToggle(): void;

	inputKey(keyCode: KeyCode): void;
}