//Reverse vowels
function reverseVowels2Pointers(input) {
    let vowelSet = new Set();
    let str = input.split('');
    vowelSet.add('a');
    vowelSet.add('e');
    vowelSet.add('i');
    vowelSet.add('o');
    vowelSet.add('u');
    let left = 0, right = str.length-1;
    while(left < right) {
        if(!vowelSet.has(str[left].toLowerCase())) {
            left++;
        }
        if(!vowelSet.has(str[right].toLowerCase())) {
            right--;
        }   
        if(vowelSet.has(str[left].toLowerCase()) && vowelSet.has(str[right].toLowerCase())) {
            let temp = str[left];
            str[left] = str[right];
            str[right] = temp;
            left++;
            right--;
        }
    }
    return str.join('');
}

function reverseVowels(str) {
    charArr = str.split('');
    let vowelSet = new Set();
    vowelSet.add('a');
    vowelSet.add('e');
    vowelSet.add('i');
    vowelSet.add('o');
    vowelSet.add('u');
    var vowelarr = [];
    var vowelIndex = [];
    for(var index = 0;index<charArr.length;index++) {
        var chr = charArr[index];
        if(vowelSet.has(chr.toLowerCase())) {
            vowelarr.push(chr);
            vowelIndex.push(index);
        }
    }
    vowelarr.reverse();
    for(var i=0;i<vowelarr.length;i++) {
        charArr[vowelIndex[i]] = vowelarr[i];
    }
    var rev = charArr.join("");
    return rev;
}

testStr = "aA"
console.log(reverseVowels2Pointers(testStr));