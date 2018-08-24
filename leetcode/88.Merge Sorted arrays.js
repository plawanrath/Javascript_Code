//The arrays are already allocated
function merge(nums1, m, nums2, n) {
    var j=0;
    while(j<n) {
        var i=0;
        while(nums1[i] <= nums2[j] && i<m) {
            i++;
        }
        if(i >= m) {
            nums1[i] = nums2[j];
            m++;
        } else {
            addBefore(nums1, nums2[j], i, m);
            m++;
        }
        j++;
    }
    return nums1;
}

function addBefore(array, item, i, l) {
    var pos = l;
    array[l] = item;
    while(pos > i) {
        swap(array, pos, pos-1);
        pos--;
    }
    return array;
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

n1 = [1, 2, 3, 0, 0, 0];
n2 = [2, 5, 6];
mv = 3, nv = 3;
console.log(merge(n1, mv, n2, nv));