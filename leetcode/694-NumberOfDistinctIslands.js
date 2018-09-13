/**
 * @param {number[][]} grid
 * @return {number}
 */
let shape = '';
var numDistinctIslands = function(grid) {
    let uniqueIslands = new Set();
    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[0].length;j++) {
            if(grid[i][j] == '1') {
                shape = '';
                dfs(grid, i, j, 0);
                uniqueIslands.add(shape);
            }
        }
    }
    return uniqueIslands.size;
};

function dfs(grid, row, col, direction) {
    let rl = grid.length, cl = grid[0].length;
    if(row >= 0 && col >= 0 && row < rl && col < cl && grid[row][col] == '1') {
        grid[row][col] = '0';
        shape += direction;
        dfs(grid, row+1, col, 1);
        dfs(grid, row-1, col, 2);
        dfs(grid, row, col+1, 3);
        dfs(grid, row, col-1, 4);
        shape += '0';
    }
}

let grid = [['1', '1', '0'], 
            ['0', '1', '1'], 
            ['0', '0', '0'], 
            ['1', '1', '1'],
            ['0', '1', '0']];

console.log(numDistinctIslands(grid));