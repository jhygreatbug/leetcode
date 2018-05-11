/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	var la = haystack.length, lb = needle.length;
	var i = 0, j = 0, len = la - lb;
	while (i <= len) {
		j = 0;
		ji = i;
		while (haystack[ji] === needle[j] && j < lb) {
			j ++;
			ji ++;
		};
		if (j === lb) return i;
		i ++;
	}
	return -1;
};
