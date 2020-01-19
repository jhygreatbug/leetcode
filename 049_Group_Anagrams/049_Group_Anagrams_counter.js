/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const code = {};
for (let i = 0; i < 26; i++) {
	code[String.fromCharCode(97 + i)] = i;
}
const groupAnagrams = function(strs) {
	const map = {};
	strs.forEach(str => {
		const counter = Array(26).fill(0);
		for (let i = 0; i < str.length; i++) {
			counter[str.charCodeAt(i) - 97] += 1;
		}
		const key = counter.join('@');
		if (key in map) {
			map[key].push(str);
		} else {
			map[key] = [str];
		}
	});

	return Object.values(map);
};