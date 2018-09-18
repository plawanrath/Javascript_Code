//Return the indices of numbers that sum to target
function twoSum(nums, target) {
    let low = 0, high = nums.length;
    while(low < high) {
        let sum = nums[low] + nums[high];
        if(sum == target) {
            return [low+1, high+1];
        } else if(sum < target) {
            low++;
        } else {
            high--;
        }
    }
    return [];
}