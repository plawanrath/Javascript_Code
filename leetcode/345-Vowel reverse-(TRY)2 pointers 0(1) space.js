//Reverse vowels

function reverseVowels(str) {
    charArr = str.split('');
    vowelArray = ['a', 'e', 'i', 'o', 'u']
    var vowelarr = [];
    var vowelIndex = [];
    for(var index = 0;index<charArr.length;index++) {
        var chr = charArr[index];
        if(vowelArray.indexOf(chr.toLowerCase()) >= 0) {
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
console.log(reverseVowels(testStr));