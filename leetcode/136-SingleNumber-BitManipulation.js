/**
 * 
 * Concept

If we take XOR of zero and some bit, it will return that bit
a \oplus 0 = aa⊕0=a
If we take XOR of two same bits, it will return 0
a \oplus a = 0a⊕a=0
a \oplus b \oplus a = (a \oplus a) \oplus b = 0 \oplus b = ba⊕b⊕a=(a⊕a)⊕b=0⊕b=b
So we can XOR all bits together to find the unique number.


** Can also be done bu putting the number and count in hash map and then return key where count = 1
 */

var singleNumber = function(nums) {
    let x = 0;
    for(let num of nums) {
        x = x ^ num;
    }
    return x;
};

let arr = [4,1,2,1,2]
console.log(singleNumber(arr));