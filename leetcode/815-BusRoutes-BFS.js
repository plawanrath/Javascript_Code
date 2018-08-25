function numBusesToDestination(routes, S, T) {
    let map = [];
    for(let i=0;i<routes.length;i++) {
        for(let j=0;j<routes[i].length;j++) {
            if(map[routes[i][j]] === undefined) {
                map[routes[i][j]] = [];
            }
            map[routes[i][j]].push(i); //Hashmap has bus number for stops
        }
    }
    let set = new Set(); //Set to store bus we take. 
    let q = [];
    let res = 0;
    if(S === T) {
        return res;
    }
    q.unshift(S);
    while(q.length > 0) {
        res++;
        let size = q.length;
        while(size-- > 0) {
            let stop = q.pop();
            for(let bus of map[stop]) {
                if(set.has(bus)) {
                    continue;
                }
                set.add(bus);
                for(let nextPossible of routes[bus]) {
                    if(nextPossible === T) {
                        return res;
                    }
                    q.unshift(nextPossible);
                }
            }
        }
    }
    return -1;
 }

routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]]
S = 15
T = 12
console.log(numBusesToDestination(routes, S, T));