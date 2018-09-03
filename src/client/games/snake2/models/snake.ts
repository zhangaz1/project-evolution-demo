import ISanke from './../interfaces/snake.js';
import Vector from './../types/vector.js';

import Point from './point.js';
import Foods from './foods.js';
import Food from './food.js';
import directionVectorMap from '../constants/directionVectorMap.js';

export default class Snake implements ISanke {
	private head: Point;
	private body: Point[];
	private step: Vector;

	constructor(config) {
		this.init(config);
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


	private init(config) {
		// TODO: to use config

		this.head = new Point(0, 2);
		this.body = [
			new Point(0, 1),
			new Point(0, 0),
		];

		this.step = new Point(1, 0);
	}

	private getAhead() {
		return new Point(
			this.head.x + this.step.x,
			this.head.y + this.step.y
		);
	}

	private moveHead(newHead) {
		this.head = Point.clone(newHead);
	}

	private growNeck() {
		this.body.unshift(this.head);
	}

	private cutTail() {
		this.body.pop();
	}
}