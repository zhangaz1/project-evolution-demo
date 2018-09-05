import {
	GameModes,
	Directions,
} from './../enums/index.js';

import {
	IVector,
} from './../types/index.js';

import {
	directionVectorMap,
} from './../constants/index.js';

import {
	IPoint,
	IFood,
	IFoods,
	ISnake,
	ISnakeConfig,
	IVenue,
	IScore,
} from './../interfaces/index.js';

import {
	isDirectionOpposite
} from './../utils/index.js';

import {
	Venue,
	Score,
	SnakeConfig,
} from './index.js';

export { Snake };
export default class Snake implements ISnake {
	private _isDied: boolean = false;
	private _head: IPoint;
	private _score: IScore;
	private _body: IPoint[];
	private step: IVector;

	constructor(
		private venue: IVenue = new Venue(),
		private snakeConfig: ISnakeConfig = new SnakeConfig(),
	) {
		this.init();
	}

	public get head(): IPoint {
		return this._head.copy();
	}

	public get neck(): IPoint {
		return this._body[0]
			.copy();
	}

	public get tail(): IPoint {
		const last = this._body.length - 1;
		return this._body[last]
			.copy();
	}

	public get body(): IPoint[] {
		return [].concat(this._body); // copy
	}

	public get score(): IScore {
		return this._score;
	}

	public get isDied(): boolean {
		return this._isDied;
	}

	public turn(direction: Directions): void {
		const newStep = directionVectorMap[direction];
		if (!this.step.isOpposite(newStep)) {
			this.step = newStep;
		}
	}

	public move(foods: IFoods<IFood>): IFood {
		if (this._isDied) {
			return;
		}

		this.growNeck();
		var newHead = this.getAhead();

		const isCollideSelf = this.isCollideSelf(newHead);
		if (isCollideSelf) {
			this._isDied = true;
			return;
		}

		const isRushOut = this.venue.isRushOut(newHead);
		if (isRushOut) {
			switch (this.snakeConfig.gameMode) {
				case GameModes.Obstacles:
				case GameModes.Classic:
					this._isDied = true;
					return;
				case GameModes.NoWalls:
					this.venue.fixRushOut(newHead)
					break;
				default:
					break;
			}
		}

		this.moveHead(newHead);

		var food = foods.eat(newHead);
		if (!food) {
			this.cutTail();
		}

		return food;
	}

	private isCollideSelf(newHead: IPoint): boolean {
		return !!this._body.find(
			cell => cell.isEqual(newHead)
		);
	}


	private init(): void {
		if (this.snakeBigThanVenue()) {
			throw new Error('snake too big or venue too small!');
		}

		this.step = this.snakeConfig.defaultStep;
		this._score = new Score();

		this._head = this.venue.randomPosition();

		this.initSnakeBody();
	}

	private initSnakeBody(): void {
		this._body = [];
		const snakeLength = this.snakeConfig.defaultLength;
		const tempStep = this.step.getOpposite();
		let tempPosition = this.head;
		for (let i = 1; i < snakeLength; i++) {
			tempPosition = tempPosition.copy()
				.move(tempStep);
			this._body.push(tempPosition);
		}
	}

	private snakeBigThanVenue(): boolean {
		const snakeConfig = this.snakeConfig;
		const venue = this.venue;

		return snakeConfig.defaultLength > venue.columns ||
			snakeConfig.defaultLength > venue.rows;
	}

	private getAhead(): IPoint {
		return this._head
			.copy()
			.move(this.step);
	}

	private moveHead(newHead): void {
		this._head = newHead.copy();
	}

	private growNeck(): void {
		this._body.unshift(this._head);
	}

	private cutTail(): void {
		this._body.pop();
	}
}