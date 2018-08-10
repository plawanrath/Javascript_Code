function quickSort(arr) {
    quickSortElements(arr, 0, arr.length-1);
}

function quickSortElements(array, left, right) {
    if(left >= right) {
        return;
    } 
    var pivot = array[Math.floor((right+left)/2)];
    index = partition(array, left, right, pivot);
    quickSortElements(array, left, index-1);
    quickSortElements(array, index, right);
}

function partition(array, left, right, pivot) {
    while(left <= right) {
        while(array[left] < pivot) {
            left++;
        }
        while(array[right] > pivot) {
            right--;
        }
        if(left <= right) {
            swap(array, left, right);
            left++;
            right--;
        }
    }
    return left;
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

testarr = [14, 33, 27, 10, 35, 19, 42, 44];
quickSort(testarr);
console.log(testarr);