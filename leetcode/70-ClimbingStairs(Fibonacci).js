/**
 * @param {number} n
 * @return {number}
 */
//This is simply calculating the nth fibinacci number
var climbStairs = function(n) {
    if(n <= 2) {
        return n;
    }
    let first = 1;
    let second = 2;
    for(let i=3;i<=n;i++) {
        let sum = first + second;
        first = second;
        second = sum;
    }
    return second;
};