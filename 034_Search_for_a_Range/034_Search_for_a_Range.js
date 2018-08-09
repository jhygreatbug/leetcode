/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var binarySearch = function(arr, target) {
	var l = 0, r = arr.length - 1;
	while (l <= r) {
		var m = parseInt((l + r) / 2);
		var mid = arr[m];
		if (mid === target) {
			return m;
		} else if (mid < target) {
			l = m + 1;
		} else {
			r = m - 1;
		}
	}
	return -1;
};

var searchRange = function(nums, target) {
    var start = -1, end = -1;
    var len = nums.length;
    var i = binarySearch(nums, target), j = i;
    if (i === -1) {
    	return [start, end];
    }
    while (i > 0 && nums[i - 1] === target) i --;
    start = i;
    while (j < len && nums[j + 1] === target) j ++;
	end = j;
    return [start, end];
};
