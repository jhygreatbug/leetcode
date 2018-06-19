/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
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
	return l;
};

var searchInsert = function(nums, target) {
    return binarySearch(nums, target);
};
