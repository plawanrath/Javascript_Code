class RandomizedSet {
    constructor() {
        this.map = new Map();
        this.list = new Array();
    }
}

RandomizedSet.prototype.insert = function(val) {
    if(this.map[val] != undefined) {
        return false;
    }
    this.map[val] = this.list.length;
    this.list.push(val);
    return true;
}

RandomizedSet.prototype.remove = function(val) {
    if(this.map[val] == undefined) {
        return false;
    }
    let index = this.map[val];
    if(index < this.list.length-1) {
        let lastVal = this.list[this.list.length-1];
        this.list[index] = lastVal;
        this.map[lastVal] = index;
    }
    delete this.map[val];
    this.list.pop();
    return true;
}

RandomizedSet.prototype.getRandom = function() {
    let rand = Math.floor(Math.random() * (this.list.length-1));
    return this.list[rand];
}


let rd = new RandomizedSet();
rd.insert(0);
rd.insert(1);
rd.remove(0);
rd.insert(2);
rd.remove(1);
console.log(rd.getRandom());
