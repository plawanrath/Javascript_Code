function countPrime(n) {
    let count = 0;
    let prime = new Array(n).fill(true);
    for(let i=2;i<n;i++) {
        if(prime[i]) {
            count++;
        }
        for(let j=2;i*j < n;j++) {
            prime[i*j] = false;
        }
    }
    return count;
}

console.log(countPrime(10));