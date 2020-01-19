/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
	const map = {};
	strs.forEach(str => {
		const orderedStr = str.split('').sort().join('');
		if (orderedStr in map) {
			map[orderedStr].push(str);
		} else {
			map[orderedStr] = [str];
		}
	});

	const result = [];
	Object.keys(map).forEach(key => {
		result.push(map[key]);
	});
	return result;
};