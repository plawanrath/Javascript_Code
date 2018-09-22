/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length == 0) {
        return -1;
    }
    let left = 0, right = nums.length-1;
    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        if(nums[mid] > nums[mid+1]) {
            return nums[mid+1]
        }
        if(nums[mid] < nums[mid-1]) {
            return nums[mid];
        } else if(nums[mid] > nums[0]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return nums[0];
};