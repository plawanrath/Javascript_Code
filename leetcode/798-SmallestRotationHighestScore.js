/**
 * @param {number[]} A
 * @return {number}
 */
//O(n) time and space.(Brute-force - do all rotations, calculate points, store points
//in a map <Points, noOfRotations> and also store max points in max. Then return
//map[max]. That will be O(n2) time and O(n) space)
var bestRotation = function(A) {
    let N = A.length;
    let bad = new Array(N).fill(0); //store rotations that will not yield any score
    for(let i=0;i<N;i++) {
        let left = (i - A[i] + 1 + N) % N; //left for left shift
        let right = (i + 1) % N; //right for right shift
        bad[left]--;
        bad[right]++;
        if(left > right) { //This means your rotation led to wrap around array
            bad[0]--;
        }
    }
    //Idea is if you find all illegal positions, then you only need to rotate that many times
    //per value to get the best result for that value. Then we need to find the max.
    let best = -N, result = 0, curr = 0;
    for(let i=0;i<N;i++) {
        curr += bad[i];
        if(curr > best) {
            best = curr;
            result = i;
        }
    }
    return result;
};