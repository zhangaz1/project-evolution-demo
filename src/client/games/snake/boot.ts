import Game from './../../core/models/game.js';

import consts from './../../configs/consts.js';

import Config from './config.js';

import Snake from './snake.js';

export default function (
    env: Object = {},
    container: HTMLDivElement = <HTMLDivElement>consts.gameGround.get(0)
): Promise<Game> {
    const envSettings = {
        cellWidth: 10,
        groundRows: 30,
    };

    const config = new Config(envSettings);

    const canvas = createCanvas(config);
    $(container).append(canvas);

    const game = new Snake({
        canvas,
        settings: config
    });
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