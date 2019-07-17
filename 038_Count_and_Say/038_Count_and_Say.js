/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
	const d = ['1']
	for(let i = 1; i < n; i++) {
		const str = d[i - 1]
		let currChar = str[0]
		let currCount = 1
		d[i] = ''
		for (let j = 1, len = str.length; j < len; j ++) {
			if (str[j] === currChar) {
				currCount++
			} else {
				d[i] += currCount + currChar
				currChar = str[j]
				currCount = 1
			}
		}
		d[i] += currCount + currChar
	}
	return d[n - 1]
};
