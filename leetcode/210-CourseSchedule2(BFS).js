/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    if(numCourses.length == 0) {
        return null;
    }
    let indegree = new Array(numCourses).fill(0);
    let order = [];
    let q = [];
    for(let i=0;i<prerequisites.length;i++) {
        indegree[prerequisites[i][0]]++;
    }
    for(let i=0;i<numCourses;i++) {
        if(indegree[i] == 0) {
            order.push(i);
            q.unshift(i);
        }
    }
    while(q.length > 0) {
        let prereq = q.pop();
        for(let i=0;i<prerequisites.length;i++) {
            if(prerequisites[i][1] == prereq) {
                indegree[prerequisites[i][0]]--;
                if(indegree[prerequisites[i][0]] == 0) {
                    order.push(prerequisites[i][0]);
                    q.unshift(prerequisites[i][0]);
                }
            }            
        }
    }
    return order.length == numCourses ? order : [];
};

num = 4, prereqs = [[1,0],[2,0],[3,1],[3,2]];

console.log(findOrder(num, prereqs));