import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {combinations} from '#module';

const repr = (x) => (Array.isArray(x) ? JSON.stringify(x) : x);

const macro = (t, iterable, r, expected) => {
	t.deepEqual(list(combinations(iterable, r)), expected);
};

macro.title = (title, iterable, r, expected) =>
	title ?? `combinations(${repr(iterable)}, ${r}) is ${repr(expected)}`;

test(macro, 'ABCD', 2, [
	['A', 'B'],
	['A', 'C'],
	['A', 'D'],
	['B', 'C'],
	['B', 'D'],
	['C', 'D'],
]);

test(macro, range(0, 4, 1), 3, [
	[0, 1, 2],
	[0, 1, 3],
	[0, 2, 3],
	[1, 2, 3],
]);

test(macro, range(0, 4, 1), 4, [[0, 1, 2, 3]]);
test(macro, range(0, 4, 1), 5, []);
test(macro, range(0, 4, 1), 0, [[]]);
test(macro, range(0, 0, 1), 0, [[]]);
test(macro, range(0, 0, 1), 1, []);
