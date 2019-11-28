/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
	const result = [];
	const dfs = function(rest, perm) {
		if (rest.size === 0) {
			result.push(perm.slice());
			return;
		}
		const restArr = Array.from(rest);
		restArr.forEach(item => {
			perm.push(item);
			rest.delete(item);
			dfs(rest, perm);
			perm.pop(item);
			rest.add(item);
		});
	}
	dfs(new Set(nums), []);
	return result;
};
