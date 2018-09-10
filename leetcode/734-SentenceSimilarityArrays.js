function areSentenceSimilar(words1, words2, pairs) {
    let map = new Map();
    if(words1.length !== words2.length) {
        return false;
    }
    for(let pair of pairs) {
        if(!map[pair[0]]) {
            map[pair[0]] = new Set();
        }
        map[pair[0]].add(pair[1]);
        if(!map[pair[1]]) {
            map[pair[1]] = new Set();
        }
        map[pair[1]].add(pair[0]);
    }
    for(var i=0;i<words1.length;i++) {
        if(words1[i] !== words2[i]) {
            if(!map[words1[i]]) {
                return false;
            }
            if(!map[words1[i]].has(words2[i])) {
                return false;
            }
        }
    }
    return true;
}

w1 = ["great"]
w2 = ["doubleplus","good"]
p = [["great","doubleplus"]]
console.log(areSentenceSimilar(w1, w2, p));