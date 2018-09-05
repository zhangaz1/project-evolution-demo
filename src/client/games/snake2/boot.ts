import Game from './../../core/models/game.js';
import consts from './../../configs/consts.js';

import {
	KeyCode,
} from './types/index.js';

import {
	IEngine,
} from './interfaces/index.js';

import {
	VenueConfig,
	RenderConfig,
	RenderCanvas,
	Engine,
	EngineConfig,
	SnakeConfig,
} from './models/index.js';


export default function (
	env: object = {},
	container: HTMLDivElement = <HTMLDivElement>consts.gameGround.get(0),
): Promise<Game> {
	const game = generateGame(container);

	document.onkeydown = (e: KeyboardEvent) => {
		let keyCode = (e || <KeyboardEvent>event).keyCode;
		game.inputKey(<KeyCode>keyCode);
	};

	return Promise.resolve(game);
}

function generateGame(container): IEngine {
	const venueConfig = new VenueConfig();
	const renderConfig = new RenderConfig(venueConfig);
	const canvas = createCanvas(renderConfig);
	$(container).append(canvas);
	const render = new RenderCanvas(canvas, renderConfig);

	return new Engine(
		render,
		venueConfig,
		new EngineConfig(),
		new SnakeConfig(15),
	);
}

function createCanvas(config: RenderConfig): HTMLCanvasElement {
	var canvas = $(`
            <canvas id="can"
                width="${ config.canvasWidth}"
                height="${config.canvasHeight}"
                style="background: black; display: none1;">
            </canvas>
        `)
		.get(0);

	return canvas as HTMLCanvasElement;
}