function maxSubarray(nums) {
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    let max = nums[0];
    for(let i=1;i<nums.length;i++) {
        dp[i] = nums[i] + Math.max(dp[i-1], 0);
        max = Math.max(max, dp[i]);
    }
    return max;
}

let arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubarray(arr));