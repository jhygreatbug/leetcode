/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	var i = 0, j;
	var curNum;
	var res = 0;
	while (i < nums.length) {
		curNum = nums[i];
		while (nums[i] === curNum) i ++;
		nums[res] = curNum;
		res ++;
	}
	return res;
};
