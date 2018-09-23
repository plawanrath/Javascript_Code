/**
 * Position positive numbers in array indexes and then if at any index
 * index + 1 != value return index + 1(since index starts from 0).
 */
function smallestMissing(arr) {
    let i = 0;
    while(i < arr.length) {
        if(arr[i] == i + 1 || arr[i] <= 0 || arr[i] > arr.length) {
            i++;
        } else if(arr[arr[i] - 1] != arr[i]) {
            swap(arr, i, arr[i]-1)
        } else {
            i++;
        }
    }
    i = 0;
    while(i < arr.length && arr[i] == i + 1) {
        i++;
    }
    return i + 1;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

a = [3,0,1]
console.log(smallestMissing(a));