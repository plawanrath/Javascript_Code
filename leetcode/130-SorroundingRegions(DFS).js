/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
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

function dfs(board, i, j) {
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
        return;
    }
    if(board[i][j] == 'X' || board[i][j] == '*') {
        return;
    }
    board[i][j] = '*';
    dfs(board, i-1, j);
    dfs(board, i, j-1);
    dfs(board, i+1, j);
    dfs(board, i, j+1);
}