function Interval(start, end) {
    this.start = start;
    this.end = end;
}

function mergeIntervals(intervals) {
    if(intervals.length === 0) {
        return intervals;
    }
    intervals.sort(function(a, b) { return a.start - b.start });
    let res = [];
    let index = 1;
    res.push(intervals[0]);
    while(index < intervals.length) {
        let val = res[res.length-1];
        if(val.end < intervals[index].start && val.end < intervals[index].end) {
            res.push(intervals[index]);
        } else {
            let remove = res.pop();
            let newVal = new Interval(remove.start, Math.max(remove.end, intervals[index].end));
            res.push(newVal);
        }
        index++;
    }
    return res;
}