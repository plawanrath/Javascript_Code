function spiralOrder(matrix) {
    res = []
    let r1 = 0, r2 = matrix.length-1, c1 = 0, c2 = matrix[0].length-1;
    while(r1 <= r2 && c1 <= c2) {
        for(let c = c1;c <= c2; c++) {
            res.push(matrix[r1][c]);
        }
        for(let r = r1+1; r <= r2; r++) {
            res.push(matrix[r][c2]);
        }
        if(r1 < r2 && c1 < c2) {
            for(let c = c2-1; c > c1; c--) {
                res.push(matrix[r2][c]);
            }
            for(let r = r2; r > r1; r--) {
                res.push(matrix[r][c1])
            }
        }
        r1++;
        r2--;
        c1++;
        c2--;        
    }
    return res;
}


arr = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ]

console.log(spiralOrder(arr));