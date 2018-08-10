function sort(arr) {
    arr.sort(); //1, 2, 3, 4, 5, 6
   for(var i=0;i<arr.length-1;i+=2) {
swap(arr, i+1, i+2);	
   }
   return arr;
}

function sortV2(arr) {
    for(var i=0;i<arr.length-1;i++) {
	if(i%2 === 0) {
	    if(arr[i] > arr[i+1]) {
		swap(arr, i, i+1);
	    }
	} else {
	    if(arr[i] < arr[i+1]) {
swap(arr, i, i+1);
    }
	}
    }
    return arr;
}


function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

arr = [1,2,2,1,2,1,1,1,1,3,2,2]
console.log(sortV2(arr));
