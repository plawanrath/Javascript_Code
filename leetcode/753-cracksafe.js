let seen = new Set();
let result = '';

function crackSafe(n, k) {
    let start = '';
    for(let i=0;i<n-1;i++) {
        start += '0';
    }
    dfs(start, k);
    result += start;
    return result;
}

function dfs(node, k) {
    for(let x = 0;x<k;x++) {
        let nei = node + x;
        if(!seen.has(nei)) {         
            seen.add(nei);
            dfs(nei.substring(1), k);
            result += x;
        }
    }
}

n = 2, k = 2;
console.log(crackSafe(n, k));
// console.log(seen);