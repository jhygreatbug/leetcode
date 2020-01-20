/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
	if (n === 0) {
		return 1;
	}
	
	if (x === 0) {
		return 0;
	}

	if (x === 1) {
		return 1;
	}

	const negative = n < 0;
	n = Math.abs(n);

	let result = 1;
	while (n > 0) {
		if (n & 1 > 0) {
			result *= x;
		}
		x *= x;
		n >>>= 1;
	}

	return negative ? 1 / result : result;
};