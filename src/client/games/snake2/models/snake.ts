import ISanke from './../interfaces/snake.js';
import Vector from './../types/vector.js';

import {
	isDirectionOpposite
} from './../utils/index.js';

import Point from './point.js';
import Foods from './foods.js';
import Food from './food.js';
import Score from './score.js';
import Directions from './../enums/directions.js';

import directionVectorMap from './../constants/directionVectorMap.js';


export default class Snake implements ISanke {
	private _head: Point;
	private _score: Score;
	private body: Point[];
	private step: Vector;

	constructor(config) {
		this.init(config);
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


	private init(config): void {
		// TODO: to use config

		this._head = new Point(0, 2);
		this.body = [
			new Point(0, 1),
			new Point(0, 0),
		];

		this.step = new Point(1, 0);

		this._score = new Score();
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