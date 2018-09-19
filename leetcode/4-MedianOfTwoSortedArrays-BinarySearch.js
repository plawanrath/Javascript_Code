function findMedianSortedArray(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    if (m > n) { // to ensure m<=n
        let temp = nums1; 
        nums1 = nums2; 
        nums2 = temp;
        let tmp = m; 
        m = n; 
        n = tmp;
    }
    let iMin = 0, iMax = m, halfLen = Math.floor((m + n + 1) / 2);
    while (iMin <= iMax) {
        let i = Math.floor((iMin + iMax) / 2);
        let j = halfLen - i;
        if (i < iMax && nums2[j-1] > nums1[i]){
            iMin = i + 1; // i is too small
        }
        else if (i > iMin && nums1[i-1] > nums2[j]) {
            iMax = i - 1; // i is too big
        }
        else { // i is perfect
            let maxLeft = 0;
            if (i == 0) { 
                maxLeft = nums2[j-1]; 
            }
            else if (j == 0) { 
                maxLeft = nums1[i-1]; 
            }
            else { 
                maxLeft = Math.max(nums1[i-1], nums2[j-1]); 
            }
            if ( (m + n) % 2 == 1 ) { 
                return maxLeft; 
            }

            let minRight = 0;
            if (i == m) { 
                minRight = nums2[j]; 
            }
            else if (j == n) { 
                inRight = nums1[i]; 
            }
            else { 
                minRight = Math.min(nums2[j], nums1[i]); 
            }

            return (maxLeft + minRight) / 2.0;
        }
    }
    return 0.0;    
}

nums1 = [1, 2]
nums2 = [3, 4]

console.log(findMedianSortedArray(nums1, nums2));