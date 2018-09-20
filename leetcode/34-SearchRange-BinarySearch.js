function binSearchExtreme(nums, target, left) {
    let low = 0, high = nums.length;
    while(low < high) {
        let mid = Math.floor((high+low)/2);
        if(nums[mid] > target || (left && nums[mid] == target)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

function searchRange(nums, target) {
    let leftIndex = binSearchExtreme(nums, target, true);
    if(nums.length == 0 || leftIndex == nums.length || nums[leftIndex] != target) {
        return [-1, -1];
    }
    let rightIndex = binSearchExtreme(nums, target, false) - 1;
    return [leftIndex, rightIndex];
}