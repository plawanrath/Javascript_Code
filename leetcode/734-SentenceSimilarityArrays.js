function areSentenceSimilar(words1, words2, pairs) {
    var identical = true;
    for(var i=0;i<words1.length;i++) {
        if(words2.indexOf(words1[i]) < 0) {
            identical = false;
        }
    }
    if(identical) {
        return true;
    }
    for(var i=0;i<words1.length;i++) {
        if(words1[i] !== words2[i]) {
            var match = findMatchInPairs(words1[i], pairs);
            if(match === null) {
                return false;
            }
            if(match.indexOf(words2[i]) < 0) {
                return false;
            }
        }
    }
    return true;
}

function findMatchInPairs(word, pair) {
    var res = [];
    for(var i=0;i<pair.length;i++) {
        if(pair[i][0] === word) {
            res.push(pair[i][1]);
        }
        if(pair[i][1] === word) {
            res.push(pair[i][0]);
        }
    }
    if(res.length === 0) {
        return null;
    }
    return res;
}

w1 = ["one","excellent","meal"]
w2 = ["one","good","dinner"]
p = [["great","good"],["extraordinary","good"],["well","good"],["wonderful","good"],["excellent","good"],["fine","good"],["nice","good"],["any","one"],["some","one"],["unique","one"],["the","one"],["an","one"],["single","one"],["a","one"],["truck","car"],["wagon","car"],["automobile","car"],["auto","car"],["vehicle","car"],["entertain","have"],["drink","have"],["eat","have"],["take","have"],["fruits","meal"],["brunch","meal"],["breakfast","meal"],["food","meal"],["dinner","meal"],["super","meal"],["lunch","meal"],["possess","own"],["keep","own"],["have","own"],["extremely","very"],["actually","very"],["really","very"],["super","very"]]
console.log(areSentenceSimilar(w1, w2, p));