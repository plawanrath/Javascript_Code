class PathFinder {
    constructor() {
        this.dirs = [[0,1], [0,-1], [1, 0], [-1, 0]];
    }

    dfs(matrix, row, col, cache) {
        if(cache[row][col] != 0) {
            return cache[row][col];
        }
        for(let dir of this.dirs) {
            let x = row + dir[0];
            let y = col + dir[1];
            if(x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length &&
                matrix[x][y] > matrix[row][col]) {
                    cache[row][col] = Math.max(cache[row][col], dfs(matrix, x, y, cache));
            }
        }
        cache[row][col]++;
        return cache[row][col];
    }

    longestIncreasingPath(matrix) {
        if(matrix.length == 0 || matrix[0].length == 0) {
            return 0;
        } 
        let cache = new Array(matrix.length);
        for(let i=0;i<matrix.length;i++) {
            cache[i] = new Array(matrix[0].length).fill(0);
        }
        let maxLen = 0;
        for(let i=0;i<matrix.length;i++) {
            for(let j=0;j<matrix[0].length;j++) {
                maxLen = Math.max(maxLen, dfs(matrix, i, j, cache));
            }
        }
        return maxLen;
    }
}