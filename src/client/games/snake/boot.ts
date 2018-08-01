import consts from './../../js/common/consts.js';

import snake from './snake.js';

export default function() {
    boot(consts.gameGround);
}

// return void (0);

function boot(gameGround) {
    const canvas = createCanvas();
    gameGround.append(canvas);
    snake(canvas);
}

function createCanvas() {
    return $('<canvas id="can" width="400" height="400" style="background: black; display: none1;"></canvas>')
        .get(0);
}