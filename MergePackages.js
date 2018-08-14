function getIndicesOfItemWeights(arr, limit) {
    let res = [];
    let visitedMap = new Map();
    for(let i=0;i<arr.length;i++) {
        let j = arr[i];
        if(Object.keys(visitedMap).indexOf((limit - j) + '') >= 0) {
            res.push(i);
            res.push(visitedMap[limit - j]);
            return res;
        } else {
            visitedMap[j] = i;
        }
    }
    return res;
  }

arr = [4, 4, 1]
lim = 5
console.log(getIndicesOfItemWeights(arr, lim));
