function generateParanthesis(n) {
    let res = [];
    backtrack(res, '', 0, 0, n);
    return res;
}

function backtrack(res, curr, open, close, max) {
    if(curr.length == max * 2) {
        res.push(curr);
        return;
    }
    if(open < max) {
        backtrack(res, curr + '(', open+1, close, max);
    }
    if(close < open) {
        backtrack(res, curr + ')', open, close+1, max);
    }
}