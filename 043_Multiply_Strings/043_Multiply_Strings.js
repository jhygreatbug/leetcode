/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function(num1, num2) {
	if (num1.length < num2.length) {
		const t = num1;
		num1 = num2;
		num2 = t;
	}
	if (num2 === "0") {
		return "0";
	}
	const a = [];
	const b = [];
	const aLen = num1.length;
	const bLen = num2.length;
	for (let i = 0; i < aLen; i++) {
		a[i] = parseInt(num1[aLen - i - 1], 10);
		if (i < bLen) {
			b[i] = parseInt(num2[bLen - i - 1], 10);
		}
	}

	const result = [];
	for (let i = 0; i < bLen; i++) {
		for (let j = 0; j < aLen; j++) {
			if (typeof result[j + i] === "number") {
				result[j + i] += b[i] * a[j];
			} else {
				result[j + i] = b[i] * a[j];
			}
		}
	}

	let i = 0;
	while (typeof result[i] === "number") {
		if (result[i] > 9) {
			if (typeof result[i + 1] === "number") {
				result[i + 1] += Math.floor(result[i] / 10);
			} else {
				result[i + 1] = Math.floor(result[i] / 10);
			}
			result[i] %= 10;
		}
		i++;
	}

	return result.reverse().join("");
};
