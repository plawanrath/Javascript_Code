function nonRepeating(s) {
    let map = new Map();
    //populate map of count of characters
    for(let i=0;i<s.length;i++) {
        if(!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    for(let i=0;i<s.length;i++) {
        if(map[s[i]] == 1) {
            return i;
        }
    }
    return null;
}

console.log(nonRepeating("leetcode"));