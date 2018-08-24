//valid paranthesis

function isValid(s) {
    var charArr = s.split('');
    var paran = ['(', '{', '['];
    var closingParan = [')', '}', ']'];
    var stack = [];
    for(var i=0;i<charArr.length;i++) {
        if(paran.indexOf(charArr[i]) >= 0) {
            stack.push(charArr[i]);
        }
        if(closingParan.indexOf(charArr[i]) >= 0) {
            if(stack.length === 0) {
                return false;
            }
            var chk = stack.pop();
            if(charArr[i] === ')' && chk !== '(') {
                return false;
            }
            if(charArr[i] === '}' && chk !== '{') {
                return false;
            }
            if(charArr[i] === ']' && chk !== '[') {
                return false;
            }
        }
    }
    if(stack.length !== 0) {
        return false;
    }
    return true;
}

str = "["
console.log(isValid(str));