function getMemoryAmount(n) {
    let bag = new Array(n+2);
    for(let i=0;i<n+2;i++) {
        bag[i] = new Array(n+2).fill(0);
    }
    for(let gap=1;gap<=n;gap++) {
       for(let i=1;i+gap<=n;i++) {
            j = i + gap;
            bag[i][j] = Number.MAX_VALUE;
    	    for(let k=i;k<=j;k++) {
	            bag[i][j] = Math.min(bag[i][j], k + Math.max(bag[i][k-1], bag[k+1][j]));
            }
        }
    }
    return bag[1][n];
}

console.log(getMemoryAmount(3));
