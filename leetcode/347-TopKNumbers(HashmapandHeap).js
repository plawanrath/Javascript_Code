class MaxHeap {
    constructor() {
        this.value = [];
    }

    getParent(index) {
        return (index-1)/2;
    }

    getLeftChild(index) {
        return 2*index+1;
    }

    getRightChild(index) {
        return 2*index+2;
    }

    add(item) {
        this.value.push(item);
        if(this.value.length == 1) {
            return;
        }
        this.heapifyUp();
    }

    remove() {
        if(this.value.length == 0) {
            return;
        }
        if(this.value.length == 1) {
            return this.value.pop();
        }
        this.swap(0, this.value.length-1);
        let ret = this.value.pop();
        this.heapifyDown();
        return ret;
    }

    heapifyUp() {
        let index = this.value.length-1;
        let parent = this.getParent(index);
        while(index >= 0 && parent >= 0 && this.value[index] > this.value[parent]) {
            this.swap(index, parent);
            index = parent;
            parent = this.getParent(index);
        }
    }

    heapifyDown() {
        let index = 0;
        let leftchild = this.getLeftChild(index);
        let rightChild = this.getRightChild(index);
        while(index < this.value.length && (leftchild < this.value.length || 
            rightChild < this.value.length) && (this.value[leftchild] > this.value[index]
                || this.value[rightChild] > this.value[index])) {
                    if(this.value[rightChild] > this.value[leftchild]) {
                        this.swap(index, rightChild);
                        index = rightChild;
                        leftchild = this.getLeftChild(index);
                        rightChild = this.getRightChild(index);
                    } else {
                        this.swap(index, leftchild);
                        index = leftchild;
                        leftchild = this.getLeftChild(index);
                        rightChild = this.getRightChild(index);
                    }
        }
    }

    swap(i, j) {
        let temp = this.value[i];
        this.value[i] = this.value[j];
        this.value[j] = temp;
    }
}

class MinHeap {
    constructor() {
        this.value = [];
    }

    getParent(index) {
        return (index-1)/2;
    }

    getLeftChild(index) {
        return 2*index+1;
    }

    getRightChild(index) {
        return 2*index+2;
    }

    add(item) {
        this.value.push(item);
        if(this.value.length == 1) {
            return;
        }
        this.heapifyUp();
    }

    remove() {
        if(this.value.length == 0) {
            return;
        }
        if(this.value.length == 1) {
            return this.value.pop();
        }
        this.swap(0, this.value.length-1);
        let ret = this.value.pop();
        this.heapifyDown();
        return ret;
    }

    heapifyUp() {
        let index = this.value.length-1;
        let parent = this.getParent(index);
        while(index >= 0 && parent >= 0 && this.value[index] < this.value[parent]) {
            this.swap(index, parent);
            index = parent;
            parent = this.getParent(index);
        }
    }

    heapifyDown() {
        let index = 0;
        let leftchild = this.getLeftChild(index);
        let rightChild = this.getRightChild(index);
        while(index < this.value.length && (leftchild < this.value.length || 
            rightChild < this.value.length) && (this.value[leftchild] < this.value[index]
                || this.value[rightChild] < this.value[index])) {
                    if(this.value[rightChild] < this.value[leftchild]) {
                        this.swap(index, rightChild);
                        index = rightChild;
                        leftchild = this.getLeftChild(index);
                        rightChild = this.getRightChild(index);
                    } else {
                        this.swap(index, leftchild);
                        index = leftchild;
                        leftchild = this.getLeftChild(index);
                        rightChild = this.getRightChild(index);                        
                    }
        }
    }

    swap(i, j) {
        let temp = this.value[i];
        this.value[i] = this.value[j];
        this.value[j] = temp;
    }
}

//IDEA: Create a map to store counts of all elements. Use that to create a map of
//items based on count. Now that countMap can be a map of <Count, Minheap> if you need
//items of same count in sorted order. Once you have that, put all counts in a MaxHeap.
//Now get k elements by first getting elements from max heap and look in the countMap and
//get values from min heap in countMap keep doing that until you get all k elements 
function topKFrequent(nums, k) {
    let map = new Map();
    let countMap = new Map();
    let pq = new MaxHeap();
    for(let i=0;i<nums.length;i++) {
        if(!map[nums[i]]) {
            map[nums[i]] = 0;
        }
        map[nums[i]]++;
    }
    for(let item in map) {
        if(!countMap[map[item]]) {
            countMap[map[item]] = new MinHeap();
        }
        countMap[map[item]].add(parseInt(item));
    }
    for(let item in countMap) {
        pq.add(item);
    }
    let res = [];
    while(res.length < k && res.length < nums.length) {
        let maxCount = pq.remove();
        let maxVals = countMap[maxCount];
        while(maxVals.value.length > 0 && res.length < k) {
            let rem = maxVals.remove();
            res.push(rem);
        }
    }
    return res;
}

nums = [2,3,4,1,4,0,4,-1,-2,-1], k = 2
topKFrequent(nums, k);