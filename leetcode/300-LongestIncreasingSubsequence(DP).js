/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    let dp = new Array(nums.length).fill(0);
    dp[0] = 1;
    let maxres = 0;
    for(let i=0;i<nums.length;i++) {
        let maxval = 0;
        for(let j=0;j<i;j++) {
            if(nums[i] > nums[j]) {
                maxval = Math.max(maxval, dp[j]);
            }
        }
        maxval = maxval + 1;
        dp[i] = maxval;
        maxres = Math.max(maxres, dp[i]);
    }
    return maxres;
};

nums = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums));