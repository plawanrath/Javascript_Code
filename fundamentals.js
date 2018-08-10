function equals() {
    let x = 2;
    let y = "2";
    console.log(x == y);
    console.log(x === y);
}


function stupidVar(condition) {
    if(condition == 1) {
        action = "one";
    } else {
        action = "two";
    }
    console.log(action);
} //variable declarations are hoisted to top of function


var foo = (function() { console.log("Test"); })(); //Calls a function immediately 
//because its wrapped around in paranthesis and so is trrated as expression.
equals();
stupidVar();
console.log(foo);