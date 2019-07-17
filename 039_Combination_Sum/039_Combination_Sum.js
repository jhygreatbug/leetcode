/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
	const result = [];
	const stack = [];
	candidates.sort((a, b) => (a > b ? 1 : -1));
	const dfs = function(minIndex, rest) {
		if (rest === 0) {
			result.push(stack.slice());
			return;
		}
		if (rest < candidates[minIndex]) {
			return;
		}
		let i = minIndex;
		while (candidates[i] <= rest) {
			const num = candidates[i];
			stack.push(num);
			dfs(i, rest - num);
			stack.pop();
			i++;
		}
	};
	dfs(0, target);
	return result;
};
