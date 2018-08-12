function KMessedArray(arr, k) {
    for(let i=1;i<arr.length;i++) {
        let temp = i;
        for(let j=temp-k;j<=temp+k;j++) {
            if(j >= 0 && j < arr.length) {
                if(arr[j] > arr[temp]) {
                    swap(arr, j, temp);
                }
            }
        }
    }
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
k=2
KMessedArray(arr, k);
console.log(arr);