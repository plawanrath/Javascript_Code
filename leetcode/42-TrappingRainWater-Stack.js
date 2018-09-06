/**
 * we can use stack to keep track of the bars that are bounded by longer bars and hence, 
 * may store water. Using the stack, we can do the calculations in only one iteration. 
 * We keep a stack and iterate over the array. We add the index of the bar to the stack 
 * if bar is smaller than or equal to the bar at top of stack, which means that the 
 * current bar is bounded by the previous bar in the stack. If we found a bar longer 
 * than that at the top, we are sure that the bar at the top of the stack is bounded by 
 * the current bar and a previous bar in the stack, hence, we can pop it and add resulting 
 * trapped water to result.
 *  
 */
//O(n) 
function trap(height) {
    let res = 0, curr = 0;
    let stack = [];
    while(curr < height.length) {
        while(stack.length > 0 && height[curr] > height[stack[stack.length-1]]) {
            let top = stack.pop();
            if(stack.length === 0) {
                break;
            }
            let distance = curr - stack[stack.length-1]-1;
            let boundedHeight = Math.min(height[curr], height[stack[stack.length-1]]) - height[top];
            res += distance * boundedHeight;
        }
        stack.push(curr++);
    }
    return res;
}

h = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(h));