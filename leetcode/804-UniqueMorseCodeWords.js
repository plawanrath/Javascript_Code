function uniqueMorseCodeRepresentation(words) {
    const morse = [
        ".-","-...","-.-.","-..",".","..-.","--.",
        "....","..",".---","-.-",".-..","--","-.",
        "---",".--.","--.-",".-.","...","-","..-",
        "...-",".--","-..-","-.--","--.."        
    ];
    let ans = new Set();
    for(let word of words) {
        word = word.toLowerCase();
        let morseWord = '';
        for(let i=0;i<word.length;i++) {
            let index = word.charCodeAt(i) - 97;
            morseWord += morse[index];
        }
        ans.add(morseWord);
    }
    return ans.size;
}

words = ["gin", "zen", "gig", "msg"]
console.log(uniqueMorseCodeRepresentation(words));

