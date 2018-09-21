/**
 * Idea: Create a Sliding Window. You start with 2 pointers. Move the right pointer
 * until you find all characters in the substring, then once all characters are found
 * shrink the left pointer until you lose any character that is part of pattern and record
 * the one just before you lost pattern. Move the right pointer and keep repeating. 
 * The last sliding window value you recorded is youe minimum window required.
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s.length == 0 || t.length == 0) {
        return '';
    }
    let dictT = new Map();
    for(let i=0;i<t.length;i++) {
        if(!dictT[t[i]]) {
            dictT[t[i]] = 0;
        }
        dictT[t[i]]++;
    }
    let required = Object.keys(dictT).length;
    let l = 0, r = 0, formed = 0;
    let windowCounts = new Map();
    let res = [-1, 0, 0];
    while(r < s.length) {
        let c = s[r];
        if(!windowCounts[c]) {
            windowCounts[c] = 0;
        }
        windowCounts[c]++;
        if(dictT[c] && windowCounts[c] == dictT[c]) {
            formed++;
        }
        while(l <= r && formed == required) {
            if(res[0] == -1 || r - l + 1 < res[0]) {
                res[0] = r - l + 1;
                res[1] = l;
                res[2] = r;
            }
            let cl = s[l];
            windowCounts[cl]--;
            if(dictT[cl] && windowCounts[cl] < dictT[cl]) {
                formed--;
            }
            l++;
        }
        r++;
    }
    return res[0] == -1 ? '' : s.substring(res[1], res[2] + 1);
};

S = "ADOBECODEBANC", T = "ABC"
console.log(minWindow(S, T));