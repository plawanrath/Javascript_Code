/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
function wordBreak(s, wordDict) {
    let wordSet = new Set(wordDict);
    let dp = new Array(s.length+1);
    let initial = [];
    initial.push('');
    dp[0] = initial;
    for(let i=1;i<=s.length;i++) {
        let list = [];
        for(let j=0;j<i;j++) {
            if(dp[j].length > 0 && wordSet.has(s.substring(j, i))) {
                for(let item of dp[j]) {
                    list.push(item + (item.length == 0 ? '' : ' ') + s.substring(j, i));
                }
            }
        }
        dp[i] = list;
    }
    return dp[s.length];
};

s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
console.log(wordBreak(s, wordDict));

