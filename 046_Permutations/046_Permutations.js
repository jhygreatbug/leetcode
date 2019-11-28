/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
	nums.sort((a, b) => a > b);
	const result = [nums.slice()];
	const len = nums.length;
	let t;
	while(true) {
		let i = len - 1;
		while (i > 0 && nums[i - 1] > nums[i]) {
			i --;
		}
		if (i <= 0) {
			break;
		}

		i --;
		let j = len - 1;
		while (nums[i] >= nums[j]) {
			j --;
		}
		t = nums[i];
		nums[i] = nums[j];
		nums[j] = t;

		j = len - 1;
		i ++;
		while (i < j) {
			t = nums[i];
			nums[i] = nums[j];
			nums[j] = t;
			i ++;
			j --;
		}
		result.push(nums.slice());
	}
	return result;
};
