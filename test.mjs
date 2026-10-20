import { strict as assert } from 'node:assert';
import test from 'node:test';
import { isEven } from './src/is-even.js';
test('even integers', () => { assert.equal(isEven(2), true); assert.equal(isEven(3), false); assert.equal(isEven(0), true); });
