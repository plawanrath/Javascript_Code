function wordsTyping(sentence, rows, cols) {
    let i=0,j=0;
    let output = 0;
    while(i<rows) {
        j=0;
        for(let word of sentence) {
            if(word.length < (cols-j)) {
                j = j+word.length;

            } else {
                i = i+1;
                j = word.length;
            }
            if(i >= rows) {
                return output;
            }
        }
        output++;
    }
    return output;
}

var wordsTypingDP = function(sentence, rows, cols) {
    let dp = new Array(sentence.length);
    let n = sentence.length;
    for(let i=0,len=0,prev=0;i<sentence.length;i++) {
        //remove previous word length and space
        if(i != 0 && len > 0) {
            len -= sentence[i - 1].length + 1;
        }
        //calculate start of next line
        while(len + sentence[prev % n].length <= cols) {
            len += sentence[prev++ % n].length + 1
        }
        dp[i] = prev;
    }
    let count = 0;
    for(let i = 0,k = 0;i<rows;i++) {
	//count how many words one row has and move to the next row
        count += dp[k] - k;
        k = dp[k] % n;
    }
    return Math.floor(count/n);
};

rows = 4, cols = 5, sentence = ["I", "had", "apple", "pie"]
console.log(wordsTypingDP(sentence, rows, cols));