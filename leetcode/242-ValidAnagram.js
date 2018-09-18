/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map();
    if(s.length != t.length) {
        return false;
    }
    for(let i=0;i<s.length;i++) {
        if(!map[s[i]]) {
            map[s[i]] = 0;
        }
        map[s[i]]++;
    }
    for(let i=0;i < t.length;i++) {
        if(!map[t[i]]) {
            return false;
        } 
        map[t[i]]--;
    }
    for(let val of map) {
        if(val != 0) {
            return false;
        }
    }
    return true;
};