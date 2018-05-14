/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
	var binary = [];
	var f = [];
	var i, len;
	var sign = true;
	if (dividend < 0) {
		dividend = -dividend;
		sign = !sign;
	}
	if (divisor < 0) {
		divisor = -divisor;
		sign = !sign;
	}
	f[0] = divisor;
	i = 0;
	while (f[i] <= dividend) {
		f[i + 1] = f[i] + f[i];
		i ++;
	}
	if (i === 0) return 0;
	for (i = f.length - 1; i >= 0; i --) {
		if (f[i] <= dividend) {
			dividend -= f[i];
			binary[i] = true;
			if (dividend === 0) break;
		}
	}
	var result = 0;
	for (len = binary.length, i = len - 1; i >= 0; i --) {
		result <<= 1;
		if (result < 0) {
			result = -result;
			break;
		}
		if (binary[i]) {
			result |= 1;
		}
	}
	if (!sign) result = -result;
	if (result > 2147483647) return 2147483647;
	if (result < -2147483648) return -2147483648;
	return result;
};
