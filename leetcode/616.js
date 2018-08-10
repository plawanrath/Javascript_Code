function addBoldTag(s, dict) {
    var masked = new Array(s.length).fill(false);
    for(var i=0;i<s.length;i++) {
        for(var k=0;k<dict.length;k++) {
            var index = s.indexOf(dict[k]);
            if(index >= 0) {
                masked[index] = true;
                for(var j=i;j<i+dict[k].length;j++) {
                    masked[j] = true;
                }
            }       
        }	
    }
    console.log(masked);
    var charArr = s.split('');
    var res = []
    for(var i=0;i<charArr.length;i++) {
        if(masked[i] && (i == 0 || !masked[i-1])) {
            res.push("<b>");
        }
        res.push(charArr[i]);
        if(masked[i] && (i == s.length-1 || !masked[i+1])) {
            res.push("</b>")
        }
    }
    return res.join("");
}

s = "aaabbcc"
dict = ["aaa","aab","bc"]

console.log(addBoldTag(s, dict));