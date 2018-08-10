function wordBreak(s, wordDict) {
	var memory = new Array(s.length);
	return wordSearch(s, wordDict, 0, memory);
}

function wordSearch(s, wordDict, start, memory) {
	if(start == s.length) {
		return true;
	}
	for(var i=start+1;i<=s.length;i++) {
		if(memory[i] !== undefined) {
			return memory[i];
		}
		var s1 = s.substring(start, i);
		if(wordDict.indexOf(s1) >= 0 && wordSearch(s, wordDict, i, memory)) {
			memory[i] = true;
			return true;
		}
    }
    return memory[start] !== undefined;
}

function wordBreakDP(s, wordDict) {
	var memory = new Array(s.length+1);
	memory[0] = true; //null string is true
	for(var i=1;i<=s.length;i++) {
		for(j=0;j<=i;j++) {
			if(memory[j] && wordDict.indexOf(s.substring(i, j)) >= 0) {
				memory[i] = true;
				break;
			}
		}
	}
	return memory[s.length] == true;
}



s = "applepenapple"
wordDict = ["apple", "pen"]
console.log(wordBreakDP(s, wordDict));