function bucketSort(array, bucketSize) {
    min = 0;
    max = 1;
    bucket = putInBuckets(array, max, min, bucketSize);
    var sortedArray = [];
    var index = 0;
    for(var i=0;i<bucket.length;i++) {
        var arr = insertionSort(bucket[i]);
        for(var j=0;j<arr.length;j++) {
            sortedArray[index++] = arr[j];
        }
    }
    return sortedArray;
}

function putInBuckets(array, max, min, bucketSize) {
    var bucket = [];
    var nob = Math.floor(array.length/bucketSize);
    for(var i=0;i<nob;i++) {
        bucket[i] = [];
    }
    var range = (max-min)/nob;
    for(var i=0;i<array.length;i++) {
        var buckNo = Math.floor(array[i]/range);
        bucket[buckNo].push(array[i]);
    }
    return bucket;
}

//Sort Algo : insertion sort
function insertionSort(array) {
    for(var i=1;i<array.length;i++) {
        var temp = i;
        for(var j=i-1;j>=0;j--) {
            if(array[j] > array[temp]) {
                swap(array, j, temp);
                temp = j;
            }
        }
    }
    return array;
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

testArr = [0.01, 0.4, 0.22, 0.14, 0.56, 0.78, 0.19, 0.55, 0.7, 0.95, 0.48, 0.71, 0.33, 0.59, 0.61, 0.91, 0.17, 0.21, 0.44, 0.88];
console.log(bucketSort(testArr, 5));
