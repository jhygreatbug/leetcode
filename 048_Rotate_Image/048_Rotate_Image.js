/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
	const n = matrix.length;
	for (let row = 0; row < n / 2; row++) {
		for (let col = row; col < n - 1 - row; col++) {
			const temp = matrix[row][col];
			let r = row;
			let c = col;
			let nextRow, nextCol;
			for (let i = 0; i < 3; i++) {
				nextRow = n - 1 - c;
				nextCol = r;
				matrix[r][c] = matrix[nextRow][nextCol];
				r = nextRow;
				c = nextCol;
			}
			matrix[nextRow][nextCol] = temp;
		}
	}
};
