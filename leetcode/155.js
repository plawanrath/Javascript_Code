/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.array = [];
    this.min = undefined;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.array.push(x);
    this.updateMin();
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.array.pop();
    this.min = undefined;
    this.updateMin();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.array[array.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

MinStack.prototype.updateMin = function() {
    if(this.min === undefined) {
        this.min = this.array[0];
    }
    for(var i=0;i<this.array.length;i++) {
        if(this.array[i] < this.min) {
            this.min = this.array[i];
        }
    }
}
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var stk = new MinStack();
stk.push(-2);
console.log(stk.array);
stk.push(0);
console.log(stk.array);
stk.push(-3);
console.log(stk.array);
console.log(stk.getMin());
stk.pop();
console.log(stk.array);
console.log(stk.getMin());
