function getIndicesOfItemWeights1(arr, limit) {
    let visitedMap = new Map();
    let res = [];
    for(let i=0;i<arr.length;i++) {
      let j = arr[i];
      if(visitedMap[limit - j] !== undefined) {
        res.push(i);
        res.push(visitedMap[limit - j]);
        return res;
      } 
      visitedMap[j] = i;
    }
    return res;
}

function getIndicesOfItemWeights(arr, limit) {
    let map = new Map();
    let res = [];
    for(let i=0;i<arr.length;i++) {
      map[limit - arr[i]] = i;
    }
    for(let i=arr.length-1;i>=0;i--) {
      if(map[arr[i]] !== undefined && map[arr[i]] !== i) {
        res.push(Math.max(i, map[arr[i]]));
        res.push(Math.min(i, map[arr[i]]));
        return res;
      }
    }
    return res;
  }

arr = [4, 4, 1]
lim = 5
console.log(getIndicesOfItemWeights(arr, lim));
