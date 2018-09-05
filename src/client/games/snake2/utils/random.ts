export function randomInRange(from: number, to: number) {
	const range = to - from;

	let random = Math.random();
	random *= range;
	random = Math.floor(random);

	return from + random;
}