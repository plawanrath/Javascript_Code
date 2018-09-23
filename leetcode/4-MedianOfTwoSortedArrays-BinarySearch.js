/**
 * https://www.geeksforgeeks.org/median-two-sorted-arrays-different-sizes-ologminn-m/
 */
function findMedianSortedArray(nums1, nums2) {
    let n = nums1.length, m = nums2.length;
    let min_index = 0, max_index = n, i=0, j=0, median = 0;
    while(min_index <= max_index) {
        i = Math.floor((min_index + max_index)/2);
        j = Math.floor((n + m + 1)/2) - i;
        if(i < n && j > 0 && nums2[j - 1] > nums1[i]) {
            min_index = i + 1;
        } else if(i > 0 && j < m && n[j] < nums1[i - 1]) {
            max_index = i - 1;
        } else {
            if(i == 0) {
                median = nums2[j - 1];
            } else if(j == 0) {
                median = nums1[i - 1];
            } else {
                median = Math.max(nums1[i-1],nums2[j-1]);
            }
            break;
        }
    }
    if((m + n) % 2 == 1) {
        return median;
    }
    if(i == n) {
        return (median + nums2[j])/2;
    }
    if(j == m) {
        return (median + nums1[i])/2;
    }
    return (median + Math.min(nums1[i], nums2[j])/2);
}

nums1 = [1, 2]
nums2 = [3, 4]

console.log(findMedianSortedArray(nums1, nums2));