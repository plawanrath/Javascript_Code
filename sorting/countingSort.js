function countingSort(array, maxValue) {
    const countArr = new Array(maxValue+1).fill(0);
    for(var i=0;i<array.length;i++) {
        countArr[array[i]]++;
    }
    //Add counts to get indexes
    for(var i=1;i<countArr.length;i++) {
        countArr[i] = countArr[i] + countArr[i-1];
    }
    var newArray = new Array(array.length);
    for(var i=1;i<countArr.length;i++) {
        if(countArr[i] > countArr[i-1]) {
            var num = i, pos = countArr[i]-1;
            var freq = countArr[i] - countArr[i-1];
            for(var j=0;j<freq;j++) {
                newArray[pos-j] = num;
            }
        }
    }
    return newArray;
}

testArr = [1, 4, 7, 1, 2, 4, 3, 6, 7];
console.log(countingSort(testArr, 8));