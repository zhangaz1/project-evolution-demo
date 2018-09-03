import Vector from "../types/vector";

export default interface Point {
	x: number;
	y: number;

	copy(): Point;
	move(step: Vector): Point;
}