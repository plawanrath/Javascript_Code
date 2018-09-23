let dirs = [[0,1], [0,-1], [1,0], [-1,0]]
function dfs(grid, r, c) {
    let rc = grid.length;
    let cc = grid[0].length;
    if(r < 0 || c < 0 || r >= rc || c >= cc || grid[r][c] === '0') {
        return;
    }
    grid[r][c] = '0';
    for(let dir of dirs) {
        let x = r + dir[0];
        let y = c + dir[1];
        dfs(grid, x, y);
    }
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