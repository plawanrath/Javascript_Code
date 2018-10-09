const MORSE = [
    ".-","-...","-.-.","-..",".","..-.","--.",
    "....","..",".---","-.-",".-..","--","-.",
    "---",".--.","--.-",".-.","...","-","..-",
    "...-",".--","-..-","-.--","--.."        
];
let buffer = new Array(26);
let l = 0;
let res = [];
function allCombinations(str, start, len) {
    let noMatch = 0, prev, temp;
    let morseLen;
    if(start != len) {
        for(let i=0;i<26;i++) {
            morseLen = MORSE[i].length;
            if(start + morseLen <= len) {
                for(let j = start,k = 0;j<start + morseLen;j++,k++) {
                    if(MORSE[i][k] == str[j]) {
                        continue;
                    } else {
                        noMatch = 1;
                        break;
                    }
                }
            } else {
                continue;
            }
            if(noMatch == 0) {
                if(start + morseLen == len) {
                    buffer[l] = string.fromCharCode(i + 97);
                    console.log(buffer);
                    res.push(buffer);
                    buffer[l] = '';
                } else {
                    noMatch = 0;
                    buffer[l] = i + 97;
                    l++;
                    allCombinations(str, start+ morseLen, len);
                    l--;
                    buffer[l] = '';
                }
            } else {
                noMatch = 0;
            }
        }
    } else {
        buffer[l] = '';
    }
    return l;
}

let code = '.___';
allCombinations(code, 0, code.length);
// console.log(res);