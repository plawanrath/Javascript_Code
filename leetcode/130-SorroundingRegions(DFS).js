/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//Run dfs around edges and mark 'O' values so that you don't change them to 'X's
var solve = function(board) {
    if(board.length == 0 || board[0].length == 0) {
        return;
    }
    let m = board.length;
    let n = board[0].length;
    for(let i=0;i<m;i++) {
        dfs(board, i, 0);
        dfs(board, i, n-1);
    }
    for(let j=1;j<n-1;j++) {
        dfs(board, 0, j);
        dfs(board, m - 1, j);
    }
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(board[i][j] == 'O') {
                board[i][j] = 'X';
            } 
            if(board[i][j] == '*') {
                board[i][j] = 'O';
            }
        }
    }
};

let dirs = [[0,1], [0,-1], [1,0], [-1,0]];
function dfs(board, i, j) {
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] == 'X' || board[i][j] == '*') {
        return;
    }
    board[i][j] = '*';
    for(let dir of dirs) {
        let x = i + dir[0];
        let y = j + dir[1];
        dfs(board, x, y);
    }
}