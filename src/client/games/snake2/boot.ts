import Game from './../../core/models/game.js';
import consts from './../../configs/consts.js';

import {
	VenueConfig,
	RenderConfig,
	RenderCanvas,
	Engine,
} from './models/index.js';

export default function (
	env: object = {},
	container: HTMLDivElement = <HTMLDivElement>consts.gameGround.get(0),
): Promise<Game> {
	const venueConfig = new VenueConfig();
	const renderConfig = new RenderConfig(venueConfig);
	const canvas = createCanvas(renderConfig);
	const render = new RenderCanvas(canvas, renderConfig);

	const game = new Engine(
		render,
		venueConfig,
	);

	$(container).append(canvas);
	return Promise.resolve(game);
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