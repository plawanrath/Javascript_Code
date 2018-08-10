const heap = []

function swap(i, j) {
    var temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
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

function addToHeap(item) {
    heap.push(item);
    if(heap.length === 1) {
        return;
    }
    heapifyUp();
}

function removeFromHeap() {
    if(heap.length === 0) {
        return -1;
    }
    if(heap.length === 1) {
        return heap.pop();
    }
    swap(0, heap.length-1);
    var ret = heap.pop();
    heapifyDown();
    return ret;
}

function heapifyUp() {
    var index = heap.length-1;
    var parent = getParentIndex(index);
    while(index >= 0 && heap[parent] > heap[index]) {
        swap(parent, index);
        index = parent;
        parent = getParentIndex(index);
    }
}

function heapifyDown() {
    var root = 0;
    var lchildIndex = getLeftChildIndex(root);
    var rchildIndex = getRightChildIndex(root);
    while(root < heap.length && (heap[root] > heap[lchildIndex] || heap[root] > heap[rchildIndex])) {        
        if(heap[lchildIndex] <= heap[rchildIndex]) {
            swap(root, lchildIndex);
            root = lchildIndex;
        } else {
            swap(root, rchildIndex);
            root = rchildIndex;
        }
        lchildIndex = getLeftChildIndex(root);
        rchildIndex = getRightChildIndex(root);
    }
}

addToHeap(5);
console.log(heap);
addToHeap(12);
console.log(heap);
addToHeap(20);
console.log(heap);
addToHeap(25);
console.log(heap);
addToHeap(13);
console.log(heap);
addToHeap(7);
console.log(heap);
addToHeap(3);
console.log(heap);
console.log(removeFromHeap());
console.log(heap);