//Idea is that the container will be defined by the edge with the lesser height(out of the 2 
//larget heights so it makes sense to keep increasing the smaller height)
function maxArea(height) {
    let area = 0, start = 0, end = height.length-1;
    while(start < end) {
        let newArea = Math.min(height[start], height[end]) * (end - start);
        area = Math.max(area, newArea);
        if(height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return area;
}