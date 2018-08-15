
//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function heap() {
    this.value = [];
}

heap.prototype.swap = function(i, j) {
    var temp = this.value[i];
    this.value[i] = this.value[j];
    this.value[j] = temp;
}

function getParentIndex(index) {
    return Math.floor((index-1)/2);
}

function getLeftChildIndex(index) {
    return (2*index)+1;
}

function getRightChildIndex(index) {
    return (2*index)+2;
}

heap.prototype.add = function(item) {
    this.value.push(item);
    if(this.value.length === 1) {
        return;
    }
    this.heapifyUp();
}

heap.prototype.remove = function() {
    if(this.value.length === 0) {
        return NaN;
    }
    if(this.value.length === 1) {
        return this.value.pop();
    }
    this.swap(0, this.value.length-1);
    var ret = this.value.pop();
    this.heapifyDown();
    return ret;
}

heap.prototype.length = function() {
    return this.value.length;    
}

heap.prototype.heapifyUp = function() {
    var index = this.value.length-1;
    var parent = getParentIndex(index);
    while(index >= 0 && this.value[parent] > this.value[index]) {
        this.swap(index, parent);
        index = parent;
        parent = getParentIndex(index);
    }
}

heap.prototype.heapifyDown = function() {
    var index = 0;
    var lchildInd = getLeftChildIndex(index);
    var rchildInd = getRightChildIndex(index);
    while(index < this.value.length && (this.value[lchildInd] < this.value[index] || this.value[rchildInd] < this.value[index])) {
        if(this.value[lchildInd] <= this.value[rchildInd]) {
            this.swap(index, lchildInd);
            index = lchildInd;
        } else {
            this.swap(index, rchildInd);
            index = rchildInd;
        }
        lchildInd = getLeftChildIndex(index);
        rchildInd = getRightChildIndex(index);
    }
}

var mergeKLists = function(lists) {
    let pq = new heap();
    for(let i=0;i<lists.length;i++) {
        while(lists[i] != null) {
            pq.add(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    let res = new ListNode(null);
    let head = res;
    while(pq.length >= 0) {
        res.next = new LisNode(pq.remove());
        res = res.next;
    }
    return head.next;    
};