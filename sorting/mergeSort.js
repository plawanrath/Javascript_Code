function mergeSort(array, low, high) {
    if(low < high) {
        let mid = Math.floor((high+low)/2);
        mergeSort(array, low, mid);
        mergeSort(array, mid+1, high);
        merge(array, low, mid, high);
    }
}

function merge(array, low, mid, high) {
    let left = low;
    let right = mid+1;
    let temp = [];
    while((left <= mid) && (right <= high)) {
        if(array[left] < array[right]) {
            temp.push(array[left]);
            left++;
        } else {
            temp.push(array[right])
            right++;
        }
    }
    if(left <= mid) {
        while(left <= mid) {
            temp.push(array[left]);
            left++;
        }
    }
    if(right <= high) {
        while(right <= high) {
            temp.push(array[right]);
            right++;
        }
    }
    for(let i=0;i<temp.length;i++) {
        array[low+i] = temp[i];
    }
}

function randomArr() {
    res = [];
    for(var i=0;i<1000;i++) {
        res[i] = Math.random();
    }
    return res;
}

testarr = [14, 33, 27, 10, 35, 19, 42, 44]
// testarr = randomArr();
mergeSort(testarr, 0, testarr.length-1);
console.log(testarr);
// console.log(mergeSort(testarr));
