function smallestMissing(arr) {
    let set = new Set();
    for(let i=0;i<arr.length;i++) {
        set.add(arr[i]);
    }
    let min = 1;
    let found = false;
    while(!found) {
        if(!set.has(min)) {
            found = true;
        } else {
            min++;
        }
    }
    return min;
}

a = [3,0,1]
console.log(smallestMissing(a));
console.log(smallestMising2(a));
