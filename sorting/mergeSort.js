function mergeSort(array) {
    if(array.length === 1) {
        return array;
    }
    const mid = Math.floor(array.length/2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
    var c = [];
    var i=0, j=0;
    while(i<leftArr.length && j<rightArr.length) {
        if(leftArr[i] < rightArr[j]) {
            c.push(leftArr[i++]);
        } else {
            c.push(rightArr[j++]);
        } 
    }
    while(i<leftArr.length) {
        c.push(leftArr[i++]);
    }
    while(j<rightArr.length) {
        c.push(rightArr[j++]);
    }
    return c;
}

function randomArr() {
    res = [];
    for(var i=0;i<1000;i++) {
        res[i] = Math.random();
    }
    return res;
}

// testarr = [14, 33, 27, 10, 35, 19, 42, 44]
testarr = randomArr();
console.log(mergeSort(testarr));
