function dfs(grid, row, col) {
    const rowLen = grid.length;
    const colLen = grid[0].length;
    if(row < 0 || row >= rowLen || col < 0 || col >= colLen || grid[row][col] === '0') {
        return;
    }
    grid[row][col] = '0';
    dfs(grid, row-1, col);
    dfs(grid, row+1, col);
    dfs(grid, row, col-1);
    dfs(grid, row, col+1);
}

function noOfIslands(grid) {
    if(grid === undefined || grid.length === 0) {
        return 0;
    }
    let noi = 0;
    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[0].length;j++) {
            if(grid[i][j] === '1') {
                dfs(grid, i, j);
                noi++;
            }
        }
    }
    return noi;
}

var grd = [['1', '1', '0', '0', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '1', '0', '0'], ['0', '0', '0', '1', '1']];
console.log(noOfIslands(grd));