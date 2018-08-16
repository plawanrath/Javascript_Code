/*
given the arrival and departure times we need to find the minimum number of flights 
we will need to accommodate this
*/

function cheapestFlights(n, flights, src, dst) {
    let cheapestArr = new Array(n).fill(Number.MAX_VALUE);
    cheapestArr[src] = 0;
    let count = 0;
    for(let i=0;i<n;i++) {
        let current = cheapestArr.slice();
        for(let j=0;j<flights.length;j++) {
            let u = flights[j][0];
            let v = flights[j][1];
            let price = flights[j][2];
            if(cheapestArr[u] < Number.MAX_VALUE && cheapestArr[u] + price  < current[v]) {
                current[v] = cheapestArr[u] + price;
            }
        }
        if(!areSame(cheapestArr, current)) {
            count++;
        }
        cheapestArr = current;
    }
    if(cheapestArr[dst] === Number.MAX_VALUE) {
        return -1;
    }
    return count;
}

function areSame(arr1, arr2) {
    for(let i=0;i<arr1.length;i++) {
        if(arr2.indexOf(arr1[i]) < 0) {
            return false;
        }
    }
    return true;
}

n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2

console.log(cheapestFlights(n, edges, src, dst));