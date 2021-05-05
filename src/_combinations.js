import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

/**
 * Yields all k-subsets of {0, 1, ..., n-1}.
 *
 * @param {number} n
 * @param {number} k
 * @returns {IterableIterator<number[]>}
 */
export default function* _combinations(n, k) {
	if (k > n) return;

	const indices = list(range(0, k, 1));

	yield indices;

	while (true) {
		let i = k - 1;

		// eslint-disable-next-line no-constant-condition
		while (true) {
			if (i < 0) return;

			if (indices[i] !== i + n - k) {
				let pivot = ++indices[i];

				for (++i; i < k; ++i) indices[i] = ++pivot;

				break;
			}

			--i;
		}

		yield indices;
	}
}
