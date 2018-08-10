function smallestMissing(arr) {
	var min = getMinPositive(arr);
	for(var i=1;i<min;i++) {
		if(arr.indexOf(i)<0) {
			return i;
		}
	}
    var j=min;
    var index = 0;
	while(index < arr.length) {
		if(arr.indexOf(j) < 0) {
			return j;
		}
        j++;
        index++;
	}
}
function getMinPositive(arr) {
	var min = 1;
for(var i=0;i<arr.length;i++) {
    if(arr[i]<min && arr[i]>0) {
        min = arr[i];
    }
}
	return min;
}

a = []
console.log(smallestMissing(a));
