class MedianFinder {
    constructor() {
        this.lowerHalf = new MaxHeap(); //stores smallest half of stream in max heap. THis will always have the extra element for odd number of stream entries
        this.higherHalf = new MinHeap(); //stores largest half of the stream in min heap
    }

    addNum(num) {
        if(this.lowerHalf.length == 0) {
            this.lowerHalf.add(num);
            return;
        }
        let top = this.lowerHalf.value[0];
        if(num < top) {
            if(this.lowerHalf.length > this.higherHalf.length) {
                let rem = this.lowerHalf.remove();
                this.higherHalf.add(rem);
                this.lowerHalf.add(num);
            } else {
                this.lowerHalf.add(num);
            }
        } else {
            if(this.lowerHalf.length > this.higherHalf.length) {
                this.higherHalf.add(num);
            } else {
                let rem = this.higherHalf.remove();
                this.lowerHalf.add(rem);
                this.higherHalf.add(num);
            }
        }
    }

    findMedian() {
        if(this.lowerHalf.length > this.higherHalf.length) {
            return this.lowerHalf.value[0];
        }
        return (this.lowerHalf.value[0] + this.higherHalf.value[0])/2;
    }
}

class MinHeap {
    constructor() {
        this.value = [];
        this.length = 0;
    }

    getParent(index) {
        return Math.floor((index-1)/2);
    }

    getLeftChild(index) {
        return 2*index+1;
    }

    getRightChild(index) {
        return 2*index+2;
    }

    add(item) {
        this.value.push(item);
        this.length++;
        if(this.length == 1) {
            return;
        } 
        this.heapifyDown();
    }

    remove() {
        if(this.length == 1) {
            this.length = 0;
            return this.value.pop();
        }
        this.swap(0, this.length-1);
        let ret = this.value.pop();
        this.heapifyUp();
        this.length--;
        return ret;
    }

    heapifyDown() {
        let index = 0;
        let lchild = this.getLeftChild(index);
        let rchild = this.getRightChild(index);
        while(index < this.length && 
        (this.value[index] > this.value[lchild] || this.value[index] > this.value[rchild])) {
            if(!this.value[rchild] || (this.value[lchild] <= this.value[rchild])) {
                this.swap(index, lchild);
                index = lchild;
            } else {
                this.swap(index, rchild);
                index = rchild;
            }
            lchild = this.getLeftChild(index);
            rchild = this.getRightChild(index);
        }
    }

    heapifyUp() {
        let index = this.length-1;
        let parent = this.getParent(index);
        while(index >= 0 && parent >= 0 && this.value[index] < this.value[parent]) {
            this.swap(parent, index);
            index = parent;
            parent = this.getParent(index);
        }
    }

    swap(i, j) {
        let temp = this.value[i];
        this.value[i] = this.value[j];
        this.value[j] = temp;
    }
}

class MaxHeap {
    constructor() {
        this.value = [];
        this.length = 0;
    }

    getParent(index) {
        return Math.floor((index-1)/2);
    }

    getLeftChild(index) {
        return 2*index+1;
    }

    getRightChild(index) {
        return 2*index+2;
    }

    add(item) {
        this.value.push(item);
        this.length++;
        if(this.length == 1) {
            return;
        } 
        this.heapifyDown();
    }

    remove() {
        if(this.length == 1) {
            this.length = 0;
            return this.value.pop();
        }
        this.swap(0, this.length-1);
        let ret = this.value.pop();
        this.length--;
        this.heapifyUp();
        return ret;
    }

    heapifyDown() {
        let index = 0;
        let lchild = this.getLeftChild(index);
        let rchild = this.getRightChild(index);
        while(index < this.length && 
        (this.value[index] < this.value[lchild] || this.value[index] < this.value[rchild])) {
            if(!this.value[rchild] || (this.value[lchild] > this.value[rchild])) {
                this.swap(index, lchild);
                index = lchild;
            } else {
                this.swap(index, rchild);
                index = rchild;
            }
            lchild = this.getLeftChild(index);
            rchild = this.getRightChild(index);
        }
    }

    heapifyUp() {
        let index = this.length-1;
        let parent = this.getParent(index);
        while(index >= 0 && parent >= 0 && this.value[index] > this.value[parent]) {
            this.swap(parent, index);
            index = parent;
            parent = this.getParent(index);
        }
    }

    swap(i, j) {
        let temp = this.value[i];
        this.value[i] = this.value[j];
        this.value[j] = temp;
    }    
}

let obj = new MedianFinder();
obj.addNum(1);
obj.addNum(2);
console.log(obj.findMedian());
obj.addNum(3);
obj.addNum(4);
obj.addNum(5);
obj.addNum(6);
obj.addNum(7);
obj.addNum(8);
console.log(obj.lowerHalf);
console.log(obj.higherHalf);
console.log(obj.findMedian());