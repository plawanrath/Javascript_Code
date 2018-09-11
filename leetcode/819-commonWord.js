/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
function mostCommonWord(paragraph, banned) {
    paragraph = paragraph.toLowerCase();
    let set = new Set(banned);
    let map = new Map();
    for(let w of paragraph.replace(/[^\w\s]/g, '').split(' ')) {
        if(!set.has(w)) {
            if(!map[w]) {
                map[w] = 0;
            }
            map[w]++;
        }
    }
    let max = 0, word = null;
    for(let w in map) {
        if(map[w] > max) {
            word = w;
            max = map[w];
        }
    }
    return word;
}

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
console.log(mostCommonWord(paragraph, banned));
