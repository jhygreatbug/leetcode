/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	var i = 0;
	var j = nums.length - 1;
	while (i <= j) {
		if (nums[i] === val) {
			nums[i] = nums[j];
			j --;
		} else {
			i ++;
		}
	}
	return j + 1;
};
