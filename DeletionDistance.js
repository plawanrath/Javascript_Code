function deletionDistance(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    let memory = new Array(len1 + 1);
    for(let i=0;i<=len1;i++) {
        memory[i] = new Array(len2 + 1).fill(0);
    }
    for(let i=0;i<=len1;i++) {
        for(let j=0;j<=len2;j++) {
            if(i==0) {
                memory[i][j] = j;
            } else if(j==0) {
                memory[i][j] = i;
            } else {
                if(str1[i-1] === str2[j-1]) {
                    memory[i][j] = memory[i-1][j-1];
                } else {
                    memory[i][j] = 1 + Math.min(memory[i-1][j], memory[i][j-1]);
                }
            }
        }
    }
    return memory[len1][len2];
}

s1 = "he";
s2 = "h";
console.log(deletionDistance(s1, s2));