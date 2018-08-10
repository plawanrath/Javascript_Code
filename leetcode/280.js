function wiggleSort(arr) {
    for(var i=0;i<arr.length-1;i++) {
        if(i%2 == 0) {
            if(arr[i] > arr[i+1]) {
                swap(arr, i, i+1);
            }
        } else {
            if(arr[i] < arr[i+1]) {
                swap(arr, i, i+1);
            }
        }
    }
    return arr;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

arr = [3,5,2,1,6,4];
console.log(wiggleSort(arr));