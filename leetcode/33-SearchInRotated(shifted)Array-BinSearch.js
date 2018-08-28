function shiftedArraySearch(shiftedArr, num) {
    let pivot = findPivotPoint(shiftedArr);
    if(shiftedArr[pivot] === target) {
        return pivot;
    }
    if(pivot === 0 || num < shiftedArr[0]) {
        return binSearch(shiftedArr, pivot+1, shiftedArr.length-1, num);
    }
    return binSearch(shiftedArr, 0, pivot-1, num);
}

function findPivotPoint(arr) {
    let begin = 0, end = arr.length-1;
    while(begin <= end) {
        let mid = begin + Math.floor((end-begin)/2);
        if(mid === 0 || arr[mid] < arr[mid-1]) {
            return mid;
        }
        if(arr[mid] > arr[0]) {
            begin = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return 0;
}

function binSearch(arr, begin, end, num) {
    while(begin <= end) {
        let mid = begin + Math.floor((end-begin)/2);
        if(arr[mid] < num) {
            begin = mid + 1;
        } else if(arr[mid] === num) {
            return mid;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

nums = [4,5,6,7,0,1,2], target = 0
console.log(shiftedArraySearch(nums, target));