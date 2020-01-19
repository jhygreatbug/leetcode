/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const getHash = str => {
	let sum = 0;
	let mul = 1;
	let xor = 0;
	for (let i = 0; i < str.length; ++i) {
		let charCode = str.charCodeAt(i);
		sum += charCode;
		mul *= charCode / 10;
		xor ^= charCode;
	}
	return (sum * mul) ^ xor;
};

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
