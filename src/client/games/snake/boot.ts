import Game from './../../core/models/game.js';

import consts from './../../configs/consts.js';
import {
    CELL_WIDTH,
    CELL_HEIGHT,

    GROUND_COLUMNS,
    GROUND_ROWS,
} from './config.js';
const CANVAS_WIDTH = CELL_WIDTH * GROUND_COLUMNS;
const CANVAS_HEIGHT = CELL_HEIGHT * GROUND_ROWS;

import Snake from './snake.js';

export default function (
    env: Object = {},
    container: Element = consts.gameGround.get(0)
): Promise<Game> {
    var canvas = createCanvas();
    $(container).append(canvas);

    var game = new Snake({
        canvas,
    });
    return Promise.resolve(game);
}

function createCanvas() {
    return $(`
            <canvas id="can" width="${ CANVAS_WIDTH}" height="${CANVAS_HEIGHT}" style="background: black; display: none1;">
            </canvas>
        `)
        .get(0);
}