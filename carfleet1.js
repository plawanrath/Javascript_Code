function clusters(ordering) {
    let res = [];
    let output = [];
    for(let i=1;i<ordering.length-1;i++){
        if(ordering[i] < ordering[i-1] && ordering[i] < ordering[i+1]) {
            res.push(i);
        } 
    }
    if(res.length === 0) {
	    res.push(ordering.length);
    } else {
        let sub = 0;
        for(var i=0;i<res.length;i++) {
            let len = res[i] - sub;
            if(len > 0) {
                output.push(len);
            }
            sub = res[i];
        }
        output.push(ordering.length - sub);
    }
    return output;
}

arr = [2, 4, 1, 3];
arr2 = [10, 8, 7, 15, 3, 1, 2]
console.log(clusters(arr));
console.log(clusters(arr2));
