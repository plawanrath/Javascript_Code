function selectionSort(array) {
    for(var i=0;i<array.length;i++) {
        j = findMinPos(array, i);
        if(j !== i) {
            swap(array, i, j);
        }
    }
    return array;
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function findMinPos(array, start) {
    var min = array[start];
    var pos = start;
    for(var i=start+1;i<array.length;i++) {
        if(array[i] < min) {
            min = array[i];
            pos = i;
        }
    }
    return pos;
}

function randomArr(n) {
    res = [];
    for(var i=0;i<n;i++) {
        res[i] = Math.random();
    }
    return res;
}

testArr = randomArr(20);
// testArr = [5, 1, 12, -5, 16];
console.log(selectionSort(testArr));