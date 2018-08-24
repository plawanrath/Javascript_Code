function plusOne(array) {
    array.reverse();
    var carry = 1;
    for(var i=0;i<array.length;i++) {
        array[i] = array[i] + carry;
        carry = 0;
        if(array[i] === 10) {
            array[i] = 0;
            carry = 1;
        }
    }
    if(carry === 1) {
        array.push(1);
    }
    array.reverse();
}

testarr = [9, 9, 9];
plusOne(testarr);
console.log(testarr);