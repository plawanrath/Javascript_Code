class Trie {
    constructor() {
        this.morse = [
            ".-","-...","-.-.","-..",".","..-.","--.",
            "....","..",".---","-.-",".-..","--","-.",
            "---",".--.","--.-",".-.","...","-","..-",
            "...-",".--","-..-","-.--","--.."        
        ];
        this.nodes = new Map();
        this.isWord = false;
    }

    addWord(word) {
        word = word.toLowerCase();
        let curr = this;
        for(let i=0;i<word.length;i++) {
            let index = word.charCodeAt(i) - 97;
            let charMorseCode = this.morse[index];
            if(!curr.nodes[charMorseCode]) {
                curr.nodes[charMorseCode] = new Trie();
            }
            curr = curr.nodes[charMorseCode];
        }
        curr.isWord = true;
    }

    searchWord(word) {
        word = word.toLowerCase();
        let curr = this;
        for(let i=0;i<word.length;i++) {
            let index = word.charCodeAt(i) - 97;
            let charMorseCode = this.morse[index];
            if(!curr.nodes[charMorseCode]) {
                return false;
            }
            curr = curr.nodes[charMorseCode];
        }
        return curr.isWord;
    }

    //code is space separated
    searchMorseCode(code) {
        let codes = code.split(" ");
        let curr = this;
        for(let c of codes) {
            if(!curr.nodes[c]) {
                return false;
            }
            curr = curr.nodes[c];
        }
        return curr.isWord;
    }

    startsWith(prefix) {
        prefix = prefix.toLowerCase();
        let curr = this;
        for(let i=0;i<prefix.length;i++) {
            let index = prefix.charCodeAt(i) - 97;
            let charMorseCode = this.morse[index];
            if(!curr.nodes[charMorseCode]){
                return false;
            }
            curr = curr.nodes[charMorseCode];
        }
        return true;
    }
}

let testWord = "Plawan"
let morse = new Trie();
morse.addWord(testWord);
console.log(morse.searchWord("Plawan"));
console.log(morse.searchWord("pla"));
console.log(morse.startsWith("pla"));
let code = '.--. .-.. .- .-- .- -.';
console.log(morse.searchMorseCode(code));