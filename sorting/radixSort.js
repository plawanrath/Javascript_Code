function radixSort(array) {
    var m = getMax(array);
    for(var exp = 1; Math.floor(m/exp)>0; exp *= 10) {
        array = countingSort(array, exp);
    }
    return array;
}

function getMax(array) {
    var max = -1;
    for(var i=0;i<array.length;i++) {
        if(array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function countingSort(arr, exp) {
    var newArr = new Array(arr.length);
    var count = new Array(10).fill(0);
    for(var i=0;i<arr.length;i++) {
        count[Math.floor(arr[i]/exp)%10]++;
    }
    for(var i=1;i<10;i++) {
        count[i] += count[i-1];
    }
    for(var i=arr.length-1;i>=0;i--) {
        newArr[count[Math.floor(arr[i]/exp)%10]-1] = arr[i];
        count[Math.floor(arr[i]/exp)%10]--;
    }
    return newArr;
}

var testArr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(testArr));