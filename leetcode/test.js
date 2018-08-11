function canCrossMemorize(stones) {
    let memo = new Array(stones.length);
    for(let i=0;i<memo.length;i++) {
        memo[i] = new Array(stones.length).fill(-1);
    }
    test(memo);
}

function test(memory) {
    console.log(memory);
}

stones = [1, 2, 3, 4, 5];
canCrossMemorize(stones);