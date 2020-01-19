/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
const getHash = str => {
	let result = 1;
	for (let i = 0; i < str.length; i++) {
		const code = str.charCodeAt(i) - 97;
		result *= prime[code]
	}
	return result;
}

const groupAnagrams = function(strs) {
	const map = {};
	strs.forEach(str => {
		const hash = getHash(str);
		if (hash in map) {
			map[hash].push(str);
		} else {
			map[hash] = [str];
		}
	});

	return Object.values(map);
};