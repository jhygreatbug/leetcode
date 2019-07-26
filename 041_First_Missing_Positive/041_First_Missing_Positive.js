/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	const map = {};
	let min = Number.MAX_SAFE_INTEGER;
	nums.forEach(n => {
		map[n] = true;
		if (n > 0) {
			min = Math.min(min, n)
		}
	});
	if (min > 1) {
		return 1
	}

	let n = min + 1;
	while (map[n]) {
		n ++;
	}
	return n;
};
