function bubbleSort(array) {
    var len = array.length;
    for(var i=0;i<len;i++) {
        var swapped = false;
        for(var j=0;j<len-1;j++) {
            if(array[j] > array[j+1]) {
                swap(array, j, j+1);
                swapped = true;
            }
        }
        if(swapped === false) {
            return array;
        }
    }
    return array;
}

function swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function randomArr() {
    res = [];
    for(var i=0;i<1000;i++) {
        res[i] = Math.random();
    }
    return res;
}

testArr = randomArr();
// console.log(testArr);
// testArr = [5, 1, 12, -5, 16];
console.log(bubbleSort(testArr));