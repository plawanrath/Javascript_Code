//Given an unsorted array nums, 
//reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]...

//Input: nums = [3,5,2,1,6,4]
//Output: One possible answer is [3,5,1,6,2,4]

function wiggleSort(arr) {
    for(let i=0;i<arr.length;i++) {
        if(i%2 == 0) {
            if(arr[i] > arr[i+1]) {
                swap(arr, i, i+1);
            }
        } else {
            if(arr[i] < arr[i+1]) {
                swap(arr, i, i+1);
            }
        }
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

nums = [3,5,2,1,6,4]
wiggleSort(nums);
console.log(nums);
