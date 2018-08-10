function divConq(arr, start, end, target) {
    if(target <= arr[start]) {
	    return start;
    }
    if(target > arr[end]) {
	    return end+1;
    }
    if(end <= start) {
	    return end;
    } 
    let mid = Math.floor((end-start)/2);
    console.log(mid);
    if(arr[mid]-target == 0) {
	    return mid;
    } else if(arr[mid]-target > 0) {
	    return divConq(arr, start, mid-1, target);
    } else {
	    return divConq(arr, mid+1, end, target);
    }
}


arr = [1,3,5,6], target = 7

console.log(divConq(arr,0,arr.length-1,target));