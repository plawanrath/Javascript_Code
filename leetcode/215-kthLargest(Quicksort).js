//This will work if the array has no duplicates. Otherwise use Heap
function findkthLargest(nums, k) {
    k = nums.length - k;
    let low = 0, high = nums.length - 1;
    while(low < high) {
        let j = partition(nums, low, high);
        if(j < k) {
            low = j + 1;
        } else if(j > k) {
            high = j - 1;
        } else {
            break;
        }
    }
    return nums[k];
}

function partition(array, left, right) {
    let pivot = array[right];
    while(left <= right) {
        while(array[left] <= pivot) {
            left++;
        }
        while(array[right] > pivot) {
            right--;
        }
        if(left <= right) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    return left-1;
}

let arr = [3,2,3,1,2,4,5,5,6]
k = 4;
console.log(findkthLargest(arr, k));