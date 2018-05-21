/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var swap = function (a, i, j) {
	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;
}

var nextPermutation = function(nums) {
	var numLen = nums.length;
	if (numLen <= 1) {
		return;
	}
	var i = numLen - 2, j, n;
	while (i >= 0) {
		j = i + 1;
		while (nums[i] >= nums[j] && j < numLen) j ++;
		if (j < numLen) {
			swap(nums, i, j);
			return;
		}
		n = nums.splice(i, 1)[0];
		nums.push(n);
		i --;
	}
	return;
};
