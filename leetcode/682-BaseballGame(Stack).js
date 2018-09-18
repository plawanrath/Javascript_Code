function calPoints(ops) {
    let stack = [];
    for(let op of ops) {
        if(op == '+') {
            let top = stack.pop();
            let newVal = top + stack[stack.length-1];
            stack.push(top);
            stack.push(newVal);
        } else if(op == 'D') {
            stack.push(2 * stack[stack.length-1]);
        } else if(op == 'C') {
            stack.pop();
        } else {
            stack.push(parseInt(op))
        }
    }
    let res = 0;
    while(stack.length > 0) {
        res += stack.pop();
    }
    return res;
}

arr = ["5","2","C","D","+"];
console.log(calPoints(arr));