function threeSumClosest(num, target) {
    num.sort();
    let res = num[0] + num[1] + num[num.length-1];
    for(let i=0;i<num.length-2;i++) {
        let start = i + 1, end = num.length - 1;
        while(start < end) {
            let sum = num[i] + num[start] + num[end];
            if(sum < target) {
                start++;
            } else {
                end--;
            }
            if(Math.abs(target - sum) < Math.abs(target - res)) {
                res = sum;
            }
        }
    }
    return res;
}

nums = [-1, 2, 1, -4]
target = 1;
console.log(threeSumClosest(nums, target));