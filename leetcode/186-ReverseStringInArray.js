function reverseWords(s) {
    //1. Reverse the entire string
    reverse(s, 0, s.length-1);
    let start = 0;
    //2. Reverse each individual word
    for(let i=0;i<s.length;i++) {
        if(s[i] == ' ') {
            reverse(s, start, i-1);
            start = i + 1;
        }
    }
    //You will need to reverse the word if the list had a single word(i.e no spaces)
    reverse(s, start, s.length-1);
}

function reverse(s, start, end) {
    while(start < end) {
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
}

s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"];
reverseWords(s);
console.log(s);
