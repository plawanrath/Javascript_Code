function groupAnagrams(strs) {
    if(strs.length == 0) {
        return [];
    }
    let map = new Map();
    for(let str of strs) {
        let carr = str.split('');
        carr.sort();
        let key = carr.join('');
        if(!map[key]) {
            map[key] = [];
        }
        map[key].push(str);
    }
    let res = [];
    for(let key in map) {
        res.push(map[key]);
    }
    return res;
}

input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));