import {list} from '@iterable-iterator/list';
import {map, pick} from '@iterable-iterator/map';

import _combinations from './_combinations.js';

/**
 * Yields all combinations of each possible choice of <code>r</code> elements
 * of the input iterable.
 *
 * @example
 * // AB AC AD BC BD CD
 * combinations('ABCD', 2)
 *
 * @example
 * // 012 013 023 123
 * combinations(range(4), 3)
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {number} r - The size of the combinations to generate.
 * @returns {IterableIterator<Array>}
 */
const combinations = (iterable, r) => {
	const pool = list(iterable);
	return map(
		(indices) => list(pick(pool, indices)),
		_combinations(pool.length, r),
	);
};

export default combinations;
