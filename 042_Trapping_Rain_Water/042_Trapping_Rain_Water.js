/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	let result = 0;
	let l = 0;
	let r = height.length - 1;
	while (height[l] <= height[l + 1]) {
		l++;
	}
	while (height[r - 1] >= height[r]) {
		r--;
	}
	while (l < r) {
		const hl = height[l]
		const hr = height[r]
		if (hl < hr) {
			l++
			while (hl > height[l] && l < r) {
				result += hl - height[l];
				l++;
			}
			while (height[l] <= height[l + 1]) {
				l++;
			}
		} else {
			r--;
			while (height[r] < hr && l < r) {
				result += hr - height[r];
				r--;
			}
			while (height[r - 1] >= height[r]) {
				r--;
			}
		}
	}
	return result
};
