function numSquares(n) {
    var array = new Array(n+1).fill(Number.MAX_VALUE);
    array[0] = 0;
    for(var i=1;i<=n;i++) {
        for(j=1;(j*j)<=i;j++) { //because two values that make up sum are i-j*j and j*j
            array[i] = Math.min(array[i], array[i - (j*j)] + 1);
        }
    }
    return array[n];
}

console.log(numSquares(13));