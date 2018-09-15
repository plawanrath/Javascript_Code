/**
 * @param {string} s
 * @return {number}
 */
//O(n) - Sliding Window and keep adding characters of max substring to set
function lengthOfLongestSubstring(s) {
    let n = s.length;
    if(s == null || s.length <= 1) {
        return s;
    }
    let i=0,j=0,res=0;
    let set = new Set();
    while(i < n && j < n) {
        if(!set.has(s[j])) {
            set.add(s[j]);
            j++;
            res = Math.max(res, j-i);
        } else {
            set.delete(s[i]);
            i++;
        }
    }
    return res;
}

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));


