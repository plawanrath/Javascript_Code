function linearSearch(array, value) {
    for(var i=0;i<array.length;i++) {
        if(array[i] === value) {
            return i;
        }
    }
    return -1;
}

testArr = [1, 76, 23, 765, 1, 32, 66, 102];
console.log(linearSearch(testArr, 765));