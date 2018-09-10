function addBoldTag(s, dict) {
    let masked = new Array(s.length).fill(false);
    for(var i=0;i<s.length;i++) {
        for(let word of dict) {
            let k = 0;
            while(k < word.length) {
                if(k+i < s.length && s[k+i] == word[k]) {
                    k++;
                } else {
                    break;
                }
            }
            if(k == word.length) {
                for(let j=i;j<i+word.length;j++) {
                    masked[j] = true;
                }
            }
        }
    }
    var res = []
    for(var i=0;i<s.length;i++) {
        if(masked[i] && (i == 0 || !masked[i-1])) {
            res.push("<b>");
        }
        res.push(s[i]);
        if(masked[i] && (i == s.length-1 || !masked[i+1])) {
            res.push("</b>")
        }
    }
    return res.join("");
}

s = "aaabbcc"
dict = ["a","b","c"]

console.log(addBoldTag(s, dict));