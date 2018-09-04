import Game from './../../core/models/game.js';
import consts from './../../configs/consts.js';

import {
	Venue,
	Score,
	Snake,
	RenderCanvas,
	RenderConfig,
	Engine,
} from './models/index.js';
import Foods from './models/foods.js';

export default function (
	env: object = {},
	container: HTMLDivElement = <HTMLDivElement>consts.gameGround.get(0),
): Promise<Game> {

	const venue = new Venue();

	var renderConfig = new RenderConfig();
	const canvas = createCanvas(renderConfig);
	const renderCanvas = new RenderCanvas(canvas, renderConfig);

	const snake = new Snake(venue);
	const foods = new Foods(venue);

	const game = new Engine(venue, snake, foods, renderCanvas);

	$(container).append(canvas);
	return Promise.resolve(game);
}

function createCanvas(config) {
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