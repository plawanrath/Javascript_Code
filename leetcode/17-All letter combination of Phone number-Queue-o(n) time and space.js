//BFS
function letterCombinations(digits) {
    const letters = {
	'1': '',
	'2': ['a', 'b', 'c'],
	'3': ['d', 'e', 'f'],
	'4': ['g', 'h', 'i'],
	'5': ['j', 'k', 'l'],
	'6': ['m','n','o'],
	'7': ['p', 'q', 'r', 's'],
	'8': ['t', 'u', 'v'],
	'9': ['w', 'x', 'y', 'z']
    }
    let res = [];
    for(let i=0;i<digits.length;i++) {
        let val = letters[digits[i]];
        if(res.length === 0) {
            for(let k=0;k<val.length;k++) {
                res.push(val[k]);
            }
        } else {
            let len = res.length;
            for(let j=0;j<len;j++) {
                let t = res.pop();
                for(let k=0;k<val.length;k++) {
                    let tc = t + val[k];
                    res.unshift(tc);
                }
            }    
        }
    }
    return res;
}

console.log(letterCombinations("23"));
