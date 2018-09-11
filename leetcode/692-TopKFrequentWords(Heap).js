/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
function topKFrequent(words, k) {
    let map = new Map();
    for(let w of words) {
        if(!map[w]) {
            map[w] = 0;
        }
        map[w]++;
    }

    let arr = Object.keys(map);
    arr.sort(
        function(a, b) {
            if(map[a] == map[b]) {
                return a > b;
            } else {
                return map[b] - map[a]
            }
        }
    );
    return arr.splice(0, k);
};

words = ["i", "love", "leetcode", "i", "love", "coding"], k = 3
console.log(topKFrequent(words, k));