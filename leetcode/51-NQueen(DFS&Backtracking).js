/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = new Array(n);
    for(let i=0;i<n;i++) {
        board[i] = new Array(n).fill('.');
    }
    let res = [];
    dfs(board, 0, res);
    return res;
};

function dfs(board, colIndex, res) {
    if(colIndex == board.length) {
        res.push(construct(board));
        return;
    }
    for(let i=0;i<board.length;i++) {
        if(validate(board, i, colIndex)) {
            board[i][colIndex] = 'Q';
            dfs(board, colIndex + 1, res);
            board[i][colIndex] = '.';
        }
    }
}

function validate(board, x, y) {
    for(let i=0;i<board.length;i++) {
        for(let j=0;j<y;j++) {
            if(board[i][j] == 'Q' && (x + y == y + i || x + y == i + j || x == i)) {
                return false;
            }
        }
    }
    return true;
}

function construct(board) {
   let res = [];
   for(let i=0;i<board.length;i++) {
       let s = '';
       for(let j=0;j<board[i].length;j++) {
            s += board[i][j];
       }
       res.push(s);
   } 
   return res;
}