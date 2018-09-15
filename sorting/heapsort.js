class heap {
    constructor() {
        this.value = [];
    }

    swap(i, j) {
        var temp = this.value[i];
        this.value[i] = this.value[j];
        this.value[j] = temp;
    }

    getParentIndex(index) {
        return Math.floor((index-1)/2);
    }
    
    getLeftChildIndex(index) {
        return (2*index)+1;
    }
    
    getRightChildIndex(index) {
        return (2*index)+2;
    }
    
    add(item) {
        this.value.push(item);
        if(this.value.length === 1) {
            return;
        }
        this.heapifyUp();
    }

    remove() {
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
    
    heapifyUp() {
        var index = this.value.length-1;
        var parent = this.getParentIndex(index);
        while(index >= 0 && this.value[parent] > this.value[index]) {
            this.swap(index, parent);
            index = parent;
            parent = this.getParentIndex(index);
        } 
    }  
    
    heapifyDown() {
        var index = 0;
        var lchildInd = this.getLeftChildIndex(index);
        var rchildInd = this.getRightChildIndex(index);
        while(index < this.value.length && (lchildInd < this.value.length || 
            rchildInd < this.value.length) &&
            (this.value[lchildInd] < this.value[index] || this.value[rchildInd] < this.value[index])) {
            if(this.value[lchildInd] <= this.value[rchildInd]) {
                this.swap(index, lchildInd);
                index = lchildInd;
            } else {
                this.swap(index, rchildInd);
                index = rchildInd;
            }
            lchildInd = this.getLeftChildIndex(index);
            rchildInd = this.getRightChildIndex(index);
        }
    }    
}

function heapSort(array) {
    var sortHeap = new heap();
    for(var i=0;i<array.length;i++) {
        sortHeap.add(array[i]);
    }
    for(var i=0;i<array.length;i++) {
        array[i] = sortHeap.remove();
    }
    return array;
}

testarr = [ 7, 12, 5, 25, 13, 20 ];
console.log(heapSort(testarr));