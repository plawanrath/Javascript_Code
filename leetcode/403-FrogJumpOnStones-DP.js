function canCross(stones) {
    return checkCanCross(stones, 0, 0);
}

function checkCanCross(stones, index, jump) {
    for(let i=index+1;i<stones.length;i++) {
        let gap = stones[i] - stones[index];
        if(gap >= jump-1 && gap <= jump+1) {
            if(checkCanCross(stones, i, gap)) {
                return true;
            }
        }
    }
    return index === stones.length-1;
}

//With Memorization

function canCrossMemorize(stones) {
    let memo = new Array(stones.length);
    for(let i=0;i<memo.length;i++) {
        memo[i] = new Array(stones.length).fill(-1);
    }
    return checkCanCrossMemory(stones, 0, 0, memo) == 1;
}

function checkCanCrossMemory(stones, index, jump, memory) {
    for(let i=index+1;i<stones.length;i++) {
        let gap = stones[i] - stones[index];
        if(memory[i][gap] != -1) {
            return memory[i][gap];
        }
        if(gap >= jump-1 && gap <= jump+1) {
            if(checkCanCrossMemory(stones, i, gap, memory) == 1) {
                memory[i][gap] = 1;
                return 1;
            }
        }
    }
    if(index === stones.length-1) {
        memory[index][jump] = 1;
    } else {
        memory[index][jump] = 0;
    }
    return memory[index][jump];
}

function canCrossDP(stones) {
    let map = new Map();
    for(let i=0;i<stones.length;i++) {
	    map[stones[i]] = new Set();
    }
    map[0].add(0);
    for(let i=0;i<stones.length;i++) {
        for(let k of map[stones[i]]) {
            for(let step = k-1;step <= k+1;step++) {
	            if(step > 0 && Object.keys(map).indexOf(stones[i] + step + '') >= 0) {
	                map[stones[i] + step].add(step);
                }
            }
        }
    }
    return map[(stones[stones.length-1]) + ''].size > 0;
}

arr = [0, 1, 3, 5, 6, 8, 12, 17]
console.log(canCross(arr));
console.log(canCrossDP(arr));