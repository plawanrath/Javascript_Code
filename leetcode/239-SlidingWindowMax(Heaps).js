class MaxHeap {
    constructor() {
        this.value = [];
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
        if(this.value.length == 1) {
            return;
        }
        this.heapifyUp();
    }

    remvove() {
        if(this.value.length == 0) {
            return null;
        }
        if(this.value.length == 1) {
            return this.value.pop();
        }
        this.swap(0, this.value.length-1);
        let res = this.value.pop();
        this.heapifyDown();
        return res;
    }

    heapifyUp() {
        let index = this.value.length-1;
        let parent = this.getParent(index);
        while(index >= 0 && this.value[parent] < this.value[index]) {
            this.swap(index, parent);
            index = parent;
            parent = this.getParent(index);
        }
    }

    heapifyDown() {
        let index = 0;
        let lchIndex = this.getLeftChild(index);
        let rchIndex = this.getRightChild(index);
        while(index < this.value.length && (this.value[lchIndex] > this.value[index] || this.value[rchIndex] > this.value[index])) {
            if(this.value[lchIndex] > this.value[rchIndex]) {
                this.swap(index, lchIndex);
                index = lchIndex;
            } else {
                this.swap(index, rchIndex);
                index = rchIndex;
            }
            lchIndex = this.getLeftChild(index);
            rchIndex = this.getRightChild(index);
        }
    }

    swap(i, j) {
        let temp = this.value[i];
        this.value[i] = this.value[j];
        this.value[j] = temp;
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
    if(nums.length == 0) {
        return nums;
    }
    let result = [];
    for(let i=0;i<=nums.length-k;i++) {
        let maxHeap = new MaxHeap(k);
        for(let j=0;j<k;j++) {
            maxHeap.add(nums[i+j]);
        }
        let max = maxHeap.remvove();
        result.push(max);
    }
    return result;
};

nums = [1,3,-1,-3,5,3,6,7], k = 3
console.log(maxSlidingWindow(nums, k));

