import consts from './../../common/consts.js';

export default function (
    game: (canvas) => Promise<any>
): Promise<any> {
    return boot(consts.gameGround, game);
}

// return void (0);

function boot(gameGround, gamePlay): Promise<any> {
    const canvas = createCanvas();
    gameGround.append(canvas);
    return gamePlay(canvas);
}

function createCanvas() {
    return $('<canvas id="can" width="400" height="400" style="background: black; display: none1;"></canvas>')
        .get(0);
}