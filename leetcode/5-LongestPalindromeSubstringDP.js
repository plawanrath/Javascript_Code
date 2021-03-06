/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    if(s == null || s.length < 1) {
        return s;
    }   
    let start = 0, end = 0;
    for(let i=0;i<s.length;i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i+1);
        let len = Math.max(len1, len2);
        if(len > end - start) {
            start = i - Math.floor((len-1)/2); //because you started from center start would be first half and end would be second half
            end = i + Math.floor(len/2);
        }
    }
    return s.substring(start, end + 1); //substr returns end exclusive. We need to include end
}

function expandAroundCenter(s, left, right) {
    let l = left, r = right;
    while(l >= 0 && r < s.length && s[l] == s[r]) {
        l--;
        r++;
    }
    return r - l - 1;
}

let test = "asdbabad";
console.log(longestPalindrome(test));