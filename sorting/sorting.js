function bubbleSort(array) {
    var swapped;
    do {
        swapped = false;
        for(var i=0;i<array.length;i++) {
            if(array[i] && array[i+1] && array[i] > array[i+1]) {
                swap(array, i, i+1);
                swapped = true;
            }
        }        
    } while(swapped);
    return array;
} 

function insertionSort(array) {
    for(var i=0;i<array.length;i++) {
        var temp = array[i]
        var j = i-1;
        while(j>=0 && array[j]>temp) {
            array[j] = array[j+1];
            j--;
        }
        array[j+1] = temp;
    }
    return array;
}

function swap(array, i, j) {
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

arr = [3, 8, 1, 12, 5, 6, 2];
console.log(bubbleSort(arr));
console.log(insertionSort(arr));