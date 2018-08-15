//Using Bellman Ford Algorithm

function findCheapestPrice(n, flights, src, dst, K) {
    let arr = new Array(n).fill(Number.MAX_VALUE);
    arr[src] = 0;
    for(let i=0;i<=K;i++) {
        let current = arr.slice()
        for(let j=0;j<flights.length;j++) {
            let u = flights[j][0];
            let v = flights[j][1];
            let price = flights[j][2];
            if(arr[u] < Number.MAX_VALUE && arr[u] + price < current[v]) {
                current[v] = arr[u] + price;
            }
        }
        arr = current;
    }
    if(arr[dst] === Number.MAX_VALUE) {
	    return -1;
    }
    return arr[dst];
}

n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1

console.log(findCheapestPrice(3, edges, src, dst, k));

