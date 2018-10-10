const Morse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'    
}

class MorseFinder {
    constructor(words) {
        this.morseDictionary = this.convertToMorseWords(words);
        this.morseCodes = new Set(Object.keys(this.morseDictionary));
        this.maxLen = this.getMaxLen(Object.keys(this.morseDictionary));
        this.answer = new Array();
    }

    //Return Dictionary {morseWords: englishWords}
    convertToMorseWords(words) {
        let res = {};
        for(let word of words) {
            let mw = '';
            word = word.toUpperCase();
            for(let i=0;i<word.length;i++) {
                mw += Morse[word[i]];
            }
            res[mw] = word;
        }
        return res;
    }

    getMaxLen(morseWords) {
        let maxLen = 0;
        for(let word of morseWords) {
            maxLen = Math.max(maxLen, word.length);
        }
        return maxLen;
    }

    decode(morse, eng) {
        if(morse == '') {
            this.answer.push(eng);
        } else {
            let i = 1;
            //While loop allows to go through all possWord where condition met
            while(morse.length >= i && i <= this.maxLen) {
                let possWord = morse.substring(0, i);
                //Checks if the word is a real word
                if(this.morseCodes.has(possWord)) {
                    //Real word therefore add to english and the morse
                    let newEng = eng + " " + this.morseDictionary[possWord];
                    let newMorse = morse.substring(i);
                    this.decode(newMorse, newEng);
                }
                i++;
            }
        }
    }
}

let words = ['A', 'TEST', 'IF', 'DOG', 'DID', 'BLUE', 'WEST', 'I', 'IN', 'EVEN']
let mf = new MorseFinder(words);
let morse = ".--....-....-.-..-----."
mf.decode(morse, '');
console.log(mf.answer);