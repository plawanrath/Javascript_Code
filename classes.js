class TestClass {
    constructor(val1) {
        this.val = val1;
    }
}

class TestClass2 extends TestClass {
    constructor(val2, val3) {
        super(val2);
        this.val2 = val3;
    }
}

TestClass2.prototype.checkValues = function(item) {
    console.log(this.val + item);
    console.log(this.val2 + item);
}

let obj = new TestClass2(2, 3);
obj.checkValues(5);