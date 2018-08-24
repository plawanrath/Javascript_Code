function nonRepeating(s) {
    var array = new Array(26).fill(0);
    for(var i=0;i<s.length;i++) {
        var index = s.charCodeAt(i) - 97;
        array[index]++;
    }
    charArr = {};
    for(var i=0;i<array.length;i++) {
        if(array[i] === 1) {
            var chr = String.fromCharCode(97 + i);
            charArr[chr] = s.indexOf(chr); 
        }
    }
    if(Object.keys(charArr).length === 0) {
        return -1; 
    }
    var min = undefined;
    for(var key in charArr) {
        if(min === undefined) {
            min = charArr[key];
        }
        if(charArr[key] <= min) {
            min = charArr[key];
        }
    }
    return min;
}

console.log(nonRepeating("leetcode"));