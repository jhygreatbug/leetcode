/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
	const map = {};
	const nums = [];
	candidates.forEach(n => {
		map[n] = map[n] ? map[n] + 1 : 1;
	});
	for (let key in map) {
		nums.push(Number(key));
	}
	nums.sort((a, b) => (a > b ? 1 : -1));

	const dfs = function(rest, currentIndex, stack, map, nums, result) {
		if (rest === 0) {
			result.push(stack.slice());
			return;
		}
		if (rest < nums[currentIndex]) {
			return;
		}
		while (nums[currentIndex] <= rest) {
			const num = nums[currentIndex];
			if (map[num] > 0) {
				map[num]--;
				stack.push(num);
				dfs(rest - num, currentIndex, stack, map, nums, result);
				stack.pop(num);
				map[num]++;
			}
			currentIndex++;
		}
	};
	const result = [];
	const stack = [];
	dfs(target, 0, stack, map, nums, result);
	return result;
};
