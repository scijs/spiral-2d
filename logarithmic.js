/**
 * Logarithmic spiral
 * https://en.wikipedia.org/wiki/Logarithmic_spiral
 *
 * @module spiral-2d/logarithmic
 */


function spiral (center, angle, a, b) {
	var r = radius(angle, a, b);

	return [
		center[0] + r * Math.cos(angle),
		center[1] + r * Math.sin(angle)
	];
};

function radius (angle, a, b) {
	a = a != null ? a : 1;
	b = b != null ? b : 1;
	return a * Math.exp(b * angle);
};

function angle (radius, a, b) {
	a = a != null ? a : 1;
	b = b != null ? b : 1;
	return Math.log(radius / a) / b;
};


spiral.radius = radius;
spiral.angle = angle;

module.exports = spiral;