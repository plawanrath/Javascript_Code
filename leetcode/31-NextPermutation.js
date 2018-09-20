/**
 * Idea
 * 1. Find the first decreasing element
 * 2. Find the next largest element from that and swap those two elements
 * 3. Reverse from the next position to the end.
 */
function nextPermutation(nums) {
    let i = nums.length-2;
    while(i >= 0 && nums[i+1] <= nums[i]) {
        i--;
    }
    if(i >= 0) {
        let j = nums.length-1;
        while(j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }
    reverse(nums, i + 1);
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function reverse(arr, start) {
    let i = start, j = arr.length - 1;
    while(i < j) {
        swap(arr, i, j);
        i++;
        j--;
    }
}