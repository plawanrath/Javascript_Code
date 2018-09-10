var numberOfBoomerangs = function(points) {
    let res = 0;
    for(let i=0;i<points.length;i++) {
        let curr = points[i];
        let map = new Map();
        for(let j=0;j<points.length;j++) {
            let dis = distance(curr, points[j]);
            if(!map[dis + '']) {
            map[dis] = new Set();
        }
        map[dis].add(points[j]);
        }
        console.log(map);
        for(let k in map){
            if(map[k].size >= 2) {
                res = res + map[k].size*(map[k].size-1);
            }
        }
    }
    return res;
};

function distance(arr1, arr2) {
    let x = arr1[0]-arr2[0]
    let y = arr1[1]-arr2[1]
    return x*x+y*y
}


points = [[0,0],[1,0],[2,0]];
console.log(numberOfBoomerangs(points));
