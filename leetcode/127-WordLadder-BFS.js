//O(n2)
function wordLadder(beginWord, endWord, wordList) {
    let q = [];
    let dict = new Set(wordList);
    q.unshift(beginWord);
    dict.delete(beginWord);
    if(!dict.has(endWord)) {
        return 0;
    }
    let step = 0;
    while(q.length > 0) {
        let size = q.length;
        for(let i=0;i<size;i++) {
            let temp = q.pop();
            if(endWord == temp) {
                return step+1;
            }
            findNext(temp, dict, q);
        }
        step++;
    }
    return 0;
}

function findNext(curr, dict, q) {
    let carr = curr.split('');
    for(let i=0;i<carr.length;i++) {
        let tmp = carr[i];
        for(let j=0;j<26;j++) {
            let chr = String.fromCharCode('a'.charCodeAt(0) + j);
            if(carr[i] != chr) {
                carr[i] = chr
                let tword = carr.join('');
                if(dict.has(tword)) {
                    q.unshift(tword);
                    dict.delete(tword);
                }
            }
        }
        carr[i] = tmp;
    }
}

beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]

console.log(wordLadder(beginWord, endWord, wordList));