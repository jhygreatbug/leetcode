function solveNQueens(n: number): string[][] {
	const res: string[][] = [];
	dfs(n, [], 0, 0, 0, res);
	return res;
};

function transform(solution: number[]) {
	return solution.map(n => {
		const len = solution.length;
		let str = '';
		for(let i = 0; i < len; i ++) {
			str += i === n ? 'Q' : '.';
		}
		return str;
	});
}

function dfs(width: number, solution: number[], col: number, crossA: number, crossB: number, res: string[][]) {
	if (solution.length === width) {
		res.push(transform(solution));
		return;
	}
	const rows = solution.length;
	for (let i = 0; i < width; i ++) {
		const newCol = (1 << i) | col;
		if (newCol === col) {
			continue;
		}

		const newCrossA = (1 << (i - rows + width - 1)) | crossA;
		if (newCrossA === crossA) {
			continue;
		}

		const newCrossB = (1 << (i + rows)) | crossB;
		if (newCrossB === crossB) {
			continue;
		}

		solution.push(i);
		dfs(width, solution, newCol, newCrossA, newCrossB, res);
		solution.pop();
	}
}
