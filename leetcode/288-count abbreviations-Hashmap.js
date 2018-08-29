function ValidWordAbv(dictionary) {
	this.map = new Map();
	for(let word of dictionary) {
	    let k = word[0] + (word.length-2) + word[word.length-1];
	    if(this.map[k] !== undefined) {
		    this.map[k]++;
        } else {
	        this.map[k] = 1;
        }
    } 
}

ValidWordAbv.prototype.isUnique = function(word) {
	let wordk = word[0] + (word.length-2) + word[word.length-1];
	if(this.map[wordk] !== undefined) {
		return this.map[wordk] == 0;
    } 
    return true; 
}

dictionary = [ "deer" ]
vwords = new ValidWordAbv(dictionary);
console.log(vwords.isUnique("dear"))
// console.log(vwords.isUnique("cart"))
// console.log(vwords.isUnique("cane"))
// console.log(vwords.isUnique("make"))


