/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValid = function(board, x, y, val) {
	for (let i = 0; i < 9; i++) {
		if (board[y][i] === val) {
			return false
		}
		if (board[i][x] === val) {
			return false
		}
	}
	const cx = Math.floor(x / 3) * 3;
	const cy = Math.floor(y / 3) * 3;
	for (let i = cy, maxi = cy + 3; i < maxi; i++) {
		for (let j = cx, maxj = cx + 3; j < maxj; j++) {
			if (board[i][j] === val) {
				return false
			}
		}
	}
	return true
};

const dfs = function(board, x, y) {
	if (x > 8) {
		x = 0;
		y ++;
	}
	if (y > 8) {
		return true;
	}
	if (board[y][x] !== '.') {
		return dfs(board, x + 1, y);
	}
	for (let i = 1; i <= 9; i++) {
		if (isValid(board, x, y, '' + i)) {
			board[y][x] = '' + i;
			if (dfs(board, x + 1, y)) {
				return true;
			}
			board[y][x] = '.';
		}
	}
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function(board) {
	dfs(board, 0, 0);
};
