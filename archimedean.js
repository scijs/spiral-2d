/**
 * Archimedean spiral
 * https://en.wikipedia.org/wiki/Archimedean_spiral
 *
 * @module spiral-2d/archimedean
 */


function spiral (center, angle, a, b, c) {
	var r = radius(angle, a, b, c);

	return [
		center[0] + r * Math.cos(angle),
		center[1] + r * Math.sin(angle)
	];
};

function radius (angle, a, b, c) {
	a = a != null ? a : 0;
	b = b != null ? b : 1;
	c = c != null ? c : 1;
	return a + b * Math.pow(angle, 1 / c);
};

function angle (radius, a, b, c) {
	a = a != null ? a : 0;
	b = b != null ? b : 1;
	c = c != null ? c : 1;
	return Math.pow(r - a / b, c);
};


spiral.radius = radius;
spiral.angle = angle;

module.exports = spiral;