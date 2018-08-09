/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
	s = '0' + s;
	p = '0' + p;
	var i, j;
	var slen = s.length, plen = p.length;
	var dp = [Array(slen).fill(false)];
	dp[0][0] = true;
	for (i = 1; i < plen; i ++) {
		dp[i] = [];
		for (j = 0; j < slen; j ++) {
			if (p[i] === '.') {
				dp[i][j] = dp[i - 1][j - 1];
			} else if (p[i] === '*') {
				if (p[i - 1] === '.') {
					dp[i][j] = dp[i - 2][j] || dp[i][j - 1];
				} else {
					dp[i][j] = dp[i - 2][j] || (p[i - 1] === s[j] && dp[i][j - 1]);
				}
			} else {
				dp[i][j] = p[i] === s[j] && dp[i - 1][j - 1];
			}
		}
	}
	return !!dp[plen - 1][slen - 1];
};
