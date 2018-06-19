/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var row = [0,0,0,0,0,0,0,0,0], col = row.slice(), square = row.slice();
    var y, x;
    var val, num, squareI;
    for (y = 0; y < 9; y ++) {
    	for (x = 0; x < 9; x ++) {
    		num = board[y][x];
    		if (num === '.') {
    			continue;
    		}
    		num = parseInt(num);
    		val = 1 << num;
    		squareI = parseInt((x + 3) / 3) + parseInt(y / 3) * 3;
    		if (row[x] & val || col[y] & val || square[squareI] & val) return false;
    		row[x] = row[x] | val;
    		col[y] = col[y] | val;
    		square[squareI] = square[squareI] | val;
    	}
    }
    return true;
};
