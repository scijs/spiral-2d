2d-[spirals](https://en.wikipedia.org/wiki/Spiral) functions. Includes [archimedean](https://en.wikipedia.org/wiki/Archimedean_spiral) and [logarithmic](https://en.wikipedia.org/wiki/Logarithmic_spiral) generic spirals. Useful to draw spiral paths in canvas, svg etc.

## Usage

[![npm install spiral-2d](https://nodei.co/npm/spiral-2d.png?mini=true)](https://npmjs.org/package/spiral-2d/)

```js
var spiral = require('spiral-2d');

//paint spiral curve in canvas
canvas.beginPath();
canvas.moveTo(50,50);
for (var angle = 0; angle <= Math.PI * 4; angle+=0.01) {
	canvas.lineTo(spiral([50,50], angle));
}
canvas.stroke();

//fill spiral sector
canvas.beginPath();
canvas.moveTo(spiral([50,50], Math.PI * 2));
for (var angle = Math.PI * 2; angle <= Math.PI * 3; angle+=0.01) {
	canvas.lineTo(spiral([50,50], angle));
}
canvas.lineTo(spiral([50,50], Math.PI * 5));
for (var angle = Math.PI * 5; angle >= Math.PI * 4; angle-=0.01) {
	canvas.lineTo(spiral([50,50], angle));
}
canvas.lineTo(spiral([50,50], Math.PI * 2));
canvas.fill();
```

## API

```js
//include the whole module (logarithmic spiral by default)
var spiral = require('spiral-2d');

//or include just part
var archimedean = require('spiral-2d/archimedean');
var logarithmic = require('spiral-2d/logarithmic');

//get coordinates of a spiral point for passed params
logarithmic(centerXY, angleInRadians, a, b);
archimedean(centerXY, angleInRadians, a, b, c?);

//get radius of spiral params
logarithmic.radius(angleInRadians, a, b);
archimedean.radius(angleInRadians, a, b, c?);

//get angle of spiral params
logarithmic.angle(radius, a, b);
archimedean.angle(radius, a, b, c?);
```

## Spirals

Most of spirals fall into one of two kinds of generic spirals:

```js
//Golden, or fibonacci spiral https://en.wikipedia.org/wiki/Golden_spiral
logarithmic(center, angle, a, 0.3063489);

//Hyperbolic spiral https://en.wikipedia.org/wiki/Hyperbolic_spiral
archimedean(center, angle, 0, a, -1);

//Fermat’s spiral https://en.wikipedia.org/wiki/Fermat%27s_spiral
archimedean(center, angle, 0, 1, 2);

//Lituus https://en.wikipedia.org/wiki/Lituus_(mathematics)
archimedean(center, angle, 0, 1, -2);
```

## TODO

- [Euler spiral](https://en.wikipedia.org/wiki/Euler_spiral)
- [Involute](https://en.wikipedia.org/wiki/involute)