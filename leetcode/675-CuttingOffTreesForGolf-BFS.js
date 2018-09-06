let directionR = [-1, 1, 0, 0];
let directionC = [0, 0, -1, 1];

function cuttOffTree(forest) {
    let trees = [];
    for(let r=0;r<forest.length;r++) {
        for(let c = 0;c<forest[0].length;c++) {
            let v = forest[r][c];
            if(v > 1) {
                trees.push([v, r, c]);
            }
        }
    }
    trees.sort(function(a, b) { return a[0] - b[0] });
    let res = 0, sr = 0, sc = 0;
    for(let tree of trees) {
        let d = bfsDistance(forest, sr, sc, tree[1], tree[2]);
        if(d < 0) {
            return -1;
        }
        res += d;
        sr = tree[1];
        sc = tree[2];
    }
    return res;
}

function bfsDistance(forest, sr, sc, tr, tc) {
    let rl = forest.length, cl = forest[0].length;
    let que = [];
    que.unshift([sr, sc, 0]);
    let seen = new Array(rl);
    for(let i=0;i<seen.length;i++) {
        seen[i] = new Array(cl).fill(false);
    }
    seen[sr][sc] = true;
    while(que.length > 0) {
        let curr = que.pop();
        if(curr[0] == tr && curr[1] == tc) {
            return curr[2];
        }
        for(let d = 0; d < 4; d++) {
            let r = curr[0] + directionR[d];
            let c = curr[1] + directionC[d];
            if(r >= 0 && r < rl && c >= 0 && c < cl && !seen[r][c] && forest[r][c] > 0) {
                seen[r][c] = true;
                que.unshift([r, c, curr[2]+1]);
            }
        }
    }
    return -1;
}

let f = [
    [1,2,3],
    [0,0,4],
    [7,6,5]
   ];

console.log(cuttOffTree(f));

let nf = [
    [1,2,3],
    [0,0,0],
    [7,6,5]
   ]

console.log(cuttOffTree(nf));

//Running Time - O(n2)