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

arr = [1, 2, 6, 8, 10, 14, 15]
value = 10;
console.log(binSearch(arr, value));