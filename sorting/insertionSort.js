function insertionSort(array) {
    for(var i=1;i<array.length;i++) {
        var temp = i;
        for(var j=i-1;j>=0;j--) {
            if(array[j] > array[temp]) {
                swap(array, temp, j);
                temp = j;
            }
        }
    }
    return array;
}

function randomArr(n) {
    res = [];
    for(var i=0;i<n;i++) {
        res[i] = Math.random();
    }
    return res;
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

testArr = randomArr(20);
// testArr = [5, 1, 12, -5, 16];
console.log(insertionSort(testArr));