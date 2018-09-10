function ValidWordAbv(dictionary) {
	this.map = new Map();
	for(let word of dictionary) {
		let k = word[0] + (word.length-2) + word[word.length-1];
		if(!this.map[k]) {
			this.map[k] = new Set();
		}
		this.map[k].add(word);
    } 
}

ValidWordAbv.prototype.isUnique = function(word) {
	let wordk = word[0] + (word.length-2) + word[word.length-1];
	if(this.map[wordk]) {
		if(this.map[wordk].has(word)) {
			if(this.map[wordk].size == 1) {
				return true;
			} else {
				return false;
			}
		} else {
			return !this.map[wordk];
		}
	}
	return true;
}

dictionary = [ "deer","door","cake","card" ]
vwords = new ValidWordAbv(dictionary);
console.log(vwords.isUnique("cane"))
// console.log(vwords.isUnique("cart"))
// console.log(vwords.isUnique("cane"))
// console.log(vwords.isUnique("make"))


