function stringMatch(A, B) {
    var noOfChecks = Math.floor(B.length/A.length)+2;
    var temp = A;
    var count = 1;
    for(var i=0;i<noOfChecks;i++) {
        if(A.indexOf(B) >= 0) {
            return count;
        }
        A = A.concat(temp);
        count++;
    }
    return -1;
}

a = "abc"
b = "cabcabcab"
console.log(stringMatch(a, b));