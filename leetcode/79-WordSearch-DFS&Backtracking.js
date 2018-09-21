/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let dirs = [[0,1], [0,-1], [1, 0], [-1, 0]];
var exist = function(board, word) {
    for(let x = 0;x < board.length;x++) {
        for(let y=0;y< board[0].length;y++) {
            if(dfs(x, y, board, 0, word)) {
                return true;
            }
        }
    }
    return false;
};

function dfs(x, y, board, index, word) {
    if(index == word.length) {
        return true;
    }
    if(x < 0 || y < 0 || x >= board.length || y >= board[0].length ||
        board[x][y] == '-' || board[x][y] != word[index]) {
            return false;
    }
    board[x][y] = '-';
    for(let i=0;i<4;i++) {
        let nx = x + dirs[i][0];
        let ny = y + dirs[i][1];
        if(dfs(nx, ny, board, index + 1, word)) {
            return true;
        }
    }
    board[x][y] = word[index];
    return false; 
}

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "BE"
console.log(exist(board, word));