/**
 * @param {string} S
 * @return {number[]}
 */
//O(n)
var partitionLabels = function(S) {
    let last = new Map();
    for(let i=0;i<S.length;i++) {
        last[S[i]] = i;
    }
    let j = 0, anchor = 0;
    let res = [];
    for(let i=0;i<S.length;i++) {
        j = Math.max(j, last[S[i]]);
        if(i == j) {
            res.push(i - anchor + 1); //when you get to the last occarance of a character
            //in the string, add that position to result but also put an anchor down(a marker)
            anchor = i + 1; //do next partition will be after i + 1 (anchred at i). The
            //ancor helps you find the length of the parittions in a single parse
        }
    }
    return res;
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));