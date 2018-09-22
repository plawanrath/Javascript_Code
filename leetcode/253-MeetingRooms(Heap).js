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
        while(index < this.value.length && ((lchildInd < this.value.length && 
            this.value[lchildInd] < this.value[index]) || (rchildInd < this.value.length && 
                this.value[rchildInd] < this.value[index]))) {
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
    
    top() {
        if(this.value.length == 0) {
            return null;
        }
        return this.value[0];
    }
}

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if(intervals.length == 0) {
        return 0;
    }
    intervals.sort(function(a,b){return a.start - b.start});
    let rooms = 0;
    let minHeap = new heap();
    minHeap.add(intervals[0].end);
    rooms++;
    for(let i=1;i<intervals.length;i++) {
        let top = minHeap.top();
        if(top > intervals[i].start) {
            rooms++;
            minHeap.add(intervals[i].end);
        } else {
            while(minHeap.top() && minHeap.top() < intervals[i].start) {
                minHeap.remove();
            }
            minHeap.add(intervals[i].end);
        }
    }
    return rooms;
};