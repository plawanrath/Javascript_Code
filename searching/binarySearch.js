function binarySearch(array, value, first, last) {
    if(first > last) {
        return -1;
    }
    var mid = Math.floor((first+last)/2);
    if(array[mid] === value) {
        return mid;
    } else if(value < array[mid]) {
        return binarySearch(array, value, first, mid-1);
    } else {
        return binarySearch(array, value, mid+1, last)
    }
}

function binSearch(array, val) {
    var first = 0, last = array.length-1;
    while(first <= last) {
        var mid = Math.floor((last+first)/2);
        if(array[mid] === val) {
            return mid;
        } else if(array[mid] > val) {
            last = mid-1;
        } else {
            first = mid+1;
        }
    }
    return -1;
}

function comparator(a, b) {
    return a-b;
}
testArr = [1, 76, 23, 765, 1, 32, 66, 102];
console.log(binarySearch(testArr.sort(comparator), 23, 0, testArr.length-1));