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
            res.push(i - anchor + 1);
            anchor = i + 1;
        }
    }
    return res;
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));