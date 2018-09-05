import {
	KeyCode,
} from './../types/index.js';

import {
	IDestroyable,
} from './index.js';

export { IEngine };
export default interface IEngine extends IDestroyable {
	open(): Promise<any>;
	start(): Promise<any>;
	pause(): Promise<any>;
	continue(): Promise<any>;
	stop(): Promise<any>;
	close(): Promise<any>;

	pauseToggle(): void;

	inputKey(keyCode: KeyCode): void;
}