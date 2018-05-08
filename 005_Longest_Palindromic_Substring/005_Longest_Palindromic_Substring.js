/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

	var len = s.length;
	var maxLen = 0;
	var maxL = -1;
	for (var i = 0; i < len; i ++) {
		var l = i;
		var r = i;
		while(l >= 0 && r < len && s[l] === s[r]) {
			l --;
			r ++;
		}
		if (maxLen < r - l - 1) {
			maxLen = r - l - 1;
			maxL = l;
		}

		if (i + 1 < len && s[i] === s[i + 1]) {
			l = i;
			r = i + 1;
			while(l >= 0 && r < len && s[l] === s[r]) {
				l --;
				r ++;
			}
			if (maxLen < r - l - 1) {
				maxLen = r - l - 1;
				maxL = l;
			}
		}
	}
	maxL ++;
	return s.substr(maxL, maxLen);
};
