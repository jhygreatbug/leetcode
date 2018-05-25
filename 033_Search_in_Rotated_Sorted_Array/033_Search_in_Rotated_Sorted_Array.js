/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	var len = nums.length;
    var l = 0, r = nums.length - 1, m;
    while (l <= r) {
    	m = parseInt((l + r) / 2);
    	if (nums[m - 1] >= nums[m] || l === r) {
    		break;
    	} else if (nums[m] <= nums[r]) {
    		r = m;
    	} else if (nums[l] <= nums[m]) {
    		l = m + 1;
    	}
    }
    var i, n, res = -1;
	l = m;
	r = m + len - 1;
	while (l <= r) {
		m = parseInt((l + r) / 2);
		i = m < len ? m : m - len;
		n = nums[i];
		if (n === target) {
			res = i;
			break;
		} else if (n < target) {
			l = m + 1;
		} else if (n > target) {
			r = m - 1;
		}
	}
	return res;
};
