/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
	if (!words.length) return [];
	var i, j, k, klen, len;
	var wordLen = words[0].length, sLen = s.length;
	var wordCount = words.length;
	var map = {};
	var word;
	for (i = 0, len = words.length; i < len; i ++) {
		word = words[i];
		if (word.length != wordLen) return [];
		if (word in map) {
			map[word] ++;
		} else {
			map[word] = 1
		}
	}
	var result = [];
	var wordQueue = [];
	var head;
	for (i = 0; i < wordLen; i ++) {
		j = i;
		len = s.length - wordLen;
		for (k = 0, klen = wordQueue.length; k < klen; k ++) {
			map[wordQueue[k]] ++;
		}
		wordQueue = [];
		while (j <= len) {
			word = s.substr(j, wordLen);
			if (word in map) {
				// 这个word用完了，队首出列直到遇到这个word
				if (map[word] === 0) {
					head = '';
					while (head !== word) {
						head = wordQueue.shift();
						map[head] ++;
					}
				}
				wordQueue.push(word);
				map[word] --;
				// 正解，所有word都用完了
				if (wordQueue.length === wordCount) {
					result.push(j - (wordCount - 1) * wordLen);
					// 释放一个word
					head = wordQueue.shift();
					map[head] ++;
				}
			// 不存在这个word，从下一个word开始重新查找
			} else {
				for (k = 0, klen = wordQueue.length; k < klen; k ++) {
					map[wordQueue[k]] ++;
				}
				wordQueue = [];
			}
			console.log(map, wordQueue);
			j += wordLen;
		}
	}
	return result;
};
