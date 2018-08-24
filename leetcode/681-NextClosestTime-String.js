var nextClosestTime = function(time) {
    let timeSplit = time.split(":");
    let arr = timeSplit.join('').split('');
    let timeMinsFor = Number.parseInt(timeSplit[0]) * 60 + Number.parseInt(timeSplit[1]);
    while(true) {
        timeMinsFor = (timeMinsFor + 1) % (24*60);
        let t = getTimeString(timeMinsFor);
        let tarr = t.split(':').join('').split('');
        let discard = isAbsent(arr, tarr);
        if(!discard) {
            return t;
        }
    }
};

function getTimeString(timeInMins) {
    let hrs = Math.floor(timeInMins/60);
    if(hrs <= 9) {
        hrs = '0' + hrs;
    }
    let mins = timeInMins%60;
    if(mins <= 9) {
        mins = '0' + mins;
    }
	return hrs + ':' + mins;
}

function isAbsent(arr1, arr2) {
    for(let i=0;i<arr2.length;i++) {
        if(arr1.indexOf(arr2[i]) < 0) {
            return true;
        }
    }
}

console.log(nextClosestTime("23:59"));