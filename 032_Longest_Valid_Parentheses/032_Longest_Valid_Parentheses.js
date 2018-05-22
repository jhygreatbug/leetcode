/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
	var stack = [s[0]], sLen;
	var char = s[1];
	var i = 1, len = s.length;
	while (i < len) {
		sLen = stack.length;
		if (char === '(') {
			stack.push('(');
			i ++;
			char = s[i];
		} else if (char === ')') {
			if (stack[sLen - 1] === '(') {
				stack.pop();
				char = 2;
			} else if (typeof stack[sLen - 1] === 'number' && i - 2 >= 0 && stack[sLen - 2] === '(') {
				char = stack.pop() + 2;
				stack.pop();
			} else {
				stack.push(')');
				i ++;
				char = s[i];
			}
		} else {
			if (typeof stack[sLen - 1] === 'number') {
				char += stack.pop();
			} else {
				stack.push(char);
				i ++;
				char = s[i];
			}
		}
		console.log(stack, char);
	}

	var max = 0;
	for (i = 0; i < len; i ++) {
		if (typeof stack[i] === 'number') {
			max = Math.max(stack[i], max);
		}
	}
	return max;
};
