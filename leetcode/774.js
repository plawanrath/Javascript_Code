function minimumGasDist(stations, K) {
    let start = 0;
    let end = 1e8;
    while(end-start > 1e-6) {
        let mid = (start+end)/2;
        if(isPossible(mid, stations, K)) {
            end = mid;
        } else {
            start = mid;
        }
    }
    return start;
}

function isPossible(D, stations, K) {
    let used = 0;
    for(let i=0;i<stations.length-1;i++) {
        used += Math.floor((stations[i+1] - stations[i])/D);
    }
    return used <= K;
}

stations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], K = 9
console.log(minimumGasDist(stations, K));