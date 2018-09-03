import ISanke from './../interfaces/snake.js';
import Vector from './../types/vector.js';

import {
	isDirectionOpposite
} from './../utils/index.js';

import Point from './point.js';
import Foods from './foods.js';
import Food from './food.js';
import Venue from './venue.js';
import Score from './score.js';
import SnakeConfig from './snakeConfig.js';
import Directions from './../enums/directions.js';

import directionVectorMap from './../constants/directionVectorMap.js';


export default class Snake implements ISanke {
	private _head: Point;
	private _score: Score;
	private body: Point[];
	private step: Vector;

	constructor(
		private venue: Venue,
		private snakeConfig: SnakeConfig = new SnakeConfig(),
	) {
		this.init();
	}

	public get head() {
		return this._head.copy();
	}

	public get score() {
		return this._score;
	}

	public turn(direction: Directions) {
		const newStep = directionVectorMap[direction];
		if (!this.step.isOpposite(newStep)) {
			this.step = newStep;
		}
	}

	public move(foods: Foods): Food {
		this.growNeck();
		var newHead = this.getAhead();
		this.moveHead(newHead);

		var food = foods.eat(newHead);
		if (!food) {
			this.cutTail();
		}

		return food;
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

	private initSnakeBody() {
		var snakeLength = this.snakeConfig.defaultLength;
		let tempPosition = this.head;
		const tempStep = this.step.getOpposite();
		for (let i = 1; i < snakeLength; i++) {
			tempPosition = tempPosition.copy()
				.move(tempStep);
			this.body.push(tempPosition);
		}
	}

	private snakeBigThanVenue() {
		const snakeConfig = this.snakeConfig;
		const venue = this.venue;

		return snakeConfig.defaultLength > venue.columns ||
			snakeConfig.defaultLength > venue.rows;
	}

	private getAhead(): Point {
		return this._head
			.copy()
			.move(this.step);
	}

	private moveHead(newHead): void {
		this._head = newHead.copy();
	}

	private growNeck(): void {
		this.body.unshift(this._head);
	}

	private cutTail(): void {
		this.body.pop();
	}
}