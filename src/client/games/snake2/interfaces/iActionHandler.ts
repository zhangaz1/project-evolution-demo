import {
	KeyCode,
} from './../types/index.js';

export { IActionHandler };
export default interface IActionHandler {
	doAction(keyCode: KeyCode): void;
}