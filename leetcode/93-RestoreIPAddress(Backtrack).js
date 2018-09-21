/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = [];
    backtrack(res, s, new Array())
    return res;
};

function backtrack(res, s, tempList) {
    if(tempList.length == 4) {
        if(s.length == 0) {
            res.push(tempList.join('.'));
        }
        return;
    }
    for(let i=1;i<4;i++) {
        if(s.length < i) {
            break;
        }
        sb = s.substring(0, i);
        if((sb[0] == '0' && sb.length != 1) || parseInt(sb) > 255) {
            continue;
        }
        tempList.push(sb);
        backtrack(res, s.length == i ? '' : s.substring(i, s.length), tempList);
        tempList.pop();
    }
}

console.log(restoreIpAddresses("25525511135"))