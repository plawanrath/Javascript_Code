/**
 * initialize your data structure here.
 */
class MinStack {
    constructor() {
        this.min = Number.MAX_VALUE;
        this.next = null;
        this.head = null;
        this.value = null;
    }
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.head == null) {
        this.head = new MinStack();
        this.head.value = x;
        this.head.min = x;
    } else {
        this.newHead = new MinStack();
        this.newHead.value = x;
        this.newHead.min = Math.min(x, this.head.min);
        this.newHead.next = this.head;
        this.head = this.newHead;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.head == null) {
        return;
    }
    this.head = this.head.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.head.value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.head.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let min = new MinStack();
min.push(12);
min.push(4);
min.push(10);
console.log(min.getMin());
console.log(min.top());
min.pop();
min.pop();
console.log(min.getMin());
console.log(min.top());