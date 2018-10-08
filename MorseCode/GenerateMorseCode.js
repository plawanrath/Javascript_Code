function generateMorseCode(word) {
    const morse = [
        ".-","-...","-.-.","-..",".","..-.","--.",
        "....","..",".---","-.-",".-..","--","-.",
        "---",".--.","--.-",".-.","...","-","..-",
        "...-",".--","-..-","-.--","--.."        
    ];
    word = word.toLowerCase();
    let morseWord = '';
    for(let i=0;i<word.length;i++) {
        let index = word.charCodeAt(i) - 97;
        morseWord += ' ' + morse[index];
    }  
    return morseWord;      
}

let testWord = "Plawan"
console.log(generateMorseCode(testWord));
