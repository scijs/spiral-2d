var spiral = require('./');
var archimedean = spiral.archimedean;
var logarithmic = spiral.logarithmic;
var assert = require('assert');


assert.deepEqual(archimedean([0,0], 0), [0,0]);
assert.deepEqual(archimedean([50,50], 0), [50,50]);
assert.deepEqual(archimedean([50,50], Math.PI), [50 - Math.PI, 50]);
assert.deepEqual(archimedean([50,50], Math.PI * 2), [50 + Math.PI * 2,50]);
assert.deepEqual(archimedean([50,50], Math.PI, 1), [49 - Math.PI, 50]);
assert.deepEqual(archimedean([50,50], Math.PI, 1, 2), [49 - Math.PI*2, 50]);
assert.deepEqual(archimedean([50,50], Math.PI, 1, 1, 0.5), [49 - Math.PI*Math.PI, 50]);


assert.deepEqual(logarithmic([0,0], 0), [1,0]);
assert.deepEqual(logarithmic([50,50], 0), [51,50]);
assert.deepEqual(logarithmic([50,50], Math.PI), [50 - Math.exp(Math.PI), 50]);
assert.deepEqual(logarithmic([50,50], Math.PI * 2).map(Math.round), [50 + Math.exp(Math.PI * 2),50].map(Math.round));
assert.deepEqual(logarithmic([50,50], Math.PI, 1, 2).map(Math.round), [50 - Math.exp(Math.PI*2), 50].map(Math.round));