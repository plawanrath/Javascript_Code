//Dynamic Programming. need to fill dp[i][j] = true if substring from text[i:] matches 
//substring of pattern from pattern[j:]


function isMatch(text, pattern) {
    let dp = new Array(text.length+1);
    for(let i=0;i<dp.length;i++) {
        dp[i] = new Array(pattern.length+1).fill(false);
    }
    dp[text.length][pattern.length] = true;
    for(let i=text.length;i>=0;i--) {
        for(let j=pattern.length-1;j>=0;j--) {
            let first_match = i <text.length && (text[i] === pattern[j] || pattern[j] == '.');
            if(j+1 < pattern.length && pattern[j+1] === '*') {
                dp[i][j] = dp[i][j+2] || first_match && dp[i+1][j]
            } else {
                dp[i][j] = first_match && dp[i+1][j+1]
            }
        }
    }
    return dp[0][0];
}

s = "aa"
p = "a"
console.log(isMatch(s, p));

