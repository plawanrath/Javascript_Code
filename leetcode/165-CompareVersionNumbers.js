/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1arr = version1.split('.');
    let v2arr = version2.split('.');

    let length = Math.max(v1arr.length, v2arr.length);
    for(let i=0;i<length;i++) {
        let v1 = i < v1arr.length ? v1arr[i] : 0;
        let v2 = i < v2arr.length ? v2arr[i] : 0;
        if(v1 > v2) {
            return 1;
        }
        if(v1 < v2) {
            return -1;
        }
    }
    return 0;
};

version1 = "01", version2 = "1"
console.log(compareVersion(version1, version2));