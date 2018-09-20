/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jump = 0, currEnd = 0, currFarthest = 0;
    for(let i=0;i<nums.length - 1;i++) {
        currFarthest = Math.max(currFarthest, i + nums[i]);
        if(i == currEnd) {
            jump++;
            currEnd = currFarthest;
        }
    }
    return jump;
};