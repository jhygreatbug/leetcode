/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	var la = haystack.length, lb = needle.length;
	if (la < lb) return -1;
	var i, j;
	var kmp = [-1, 0];
	i = 2;
	j = 0;
	while (i < lb) {
		if (needle[i - 1] === needle[j]) {
			j ++;
			kmp[i] = j;
			i ++;
		} else if (j > 0) {
			j = kmp[j];
		} else {
			kmp[i] = 0;
			i ++;
		}
	}
	i = 0;
	while (i <= la - lb) {
		j = 0;
		while (haystack[i + j] === needle[j] && j + i < la) j ++;
		if (j === lb) return i;
		if (i + j === la) break;
		i += j - kmp[j];
	}
	return -1;
};
