function kEmptySlots(flowers, k) {
    //Let Days[x] = i be the time that flower at position x blooms
    let days = new Array(flowers.length);
    for(let i=0;i<flowers.length;i++) {
        days[flowers[i] - 1] = i + 1;
    }
    /**
     * We wanted to find candidate intervals [left, right] where days[left], 
     * days[right] are the two smallest values in [days[left], days[left+1], ..., days[right]], 
     * and right - left = k + 1.
     * 
     * Notice that these candidate intervals cannot intersect: for example, 
     * if the candidate intervals are [left1, right1] and [left2, right2] 
     * with left1 < left2 < right1 < right2, then for the first interval to be a candidate, 
     * days[left2] > days[right1]; and for the second interval to be a candidate, 
     * days[right1] > days[left2], a contradiction. That means whenever whether 
     * some interval can be a candidate and it fails first at i, indices j < i can't be 
     * the start of a candidate interval. This motivates a sliding window approach.
     * 
     * for each interval [left, right] (starting with the first available one), 
     * we'll check whether it is a candidate: whether days[i] > days[left] and 
     * days[i] > days[right] for left < i < right. If we fail, then we've found 
     * some new minimum days[i] and we should check the new interval [i, i+k+1]. 
     * If we succeed, then it's a candidate answer, and we'll check the new 
     * interval [right, right+k+1].
     */

    let ans = Number.MAX_VALUE;
    let left = 0, right = k+1;
    while (right < days.length) {
        for (let i = left+1; i < right;i++) {
            if (days[i] < days[left] || days[i] < days[right]) {
                left = i;
                right = i + k + 1;
                break;
            }
        }
        ans = Math.min(ans, Math.max(days[left], days[right]));
        left = right;
        right = left + k + 1;
    }
    return ans < Number.MAX_VALUE ? ans : -1;    
}

let flowers = [1, 3, 2];
let k = 1;
console.log(kEmptySlots(flowers, k));