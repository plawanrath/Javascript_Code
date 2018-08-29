/**
 * Intuition 
 * 
 * Let's add flowers in the order they bloom. When each flower blooms, 
 * we check it's neighbors to see if they can satisfy the condition with the current flower. 
 * 
 * Algorithm 
 * We'll maintain active, a sorted data structure(BST) containing every flower that has currently bloomed. 
 * When we add a flower to active, we should check it's lower and higher neighbors. If some neighbor 
 * satisfies the condition, we know the condition occurred first on this day.
 */
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}

BinarySearchTree.prototype.add = function(val) {
    let curr = this.root;
    if(curr === null) {
        this.root = new Node(val);
        return;
    }
    let newNode = new Node(val);
    while(curr !== null) {
        if(val < curr.value) {
            if(curr.left === null) {
                curr.left = newNode;
                break;
            } else {
                curr = curr.left;
            }
        } else {
            if(curr.right !== null) {
                curr.right = newNode;
                break;
            } else {
                curr = curr.right;
            }
        }
    }
}

//Find Largest Element smaller than given
BinarySearchTree.prototype.lower = function(val) {
    let min = null;
    let temp = this.root;
    while(temp !== null) {
      if(val > temp.value) {
        min = temp.value;
        temp = temp.right;
      } else {
        temp = temp.left;
      }
    }
    return min;    
}

//FInd the Smallest Element greater than given
BinarySearchTree.prototype.higher = function(val) {
    let grt = null;
    let temp = this.root;
    while(temp !== null) {
      if(val < temp.value) {
        grt = temp.value;
        temp = temp.right;
      } else {
        temp = temp.left;
      }
    }
    return grt;  
}

function kEmptySlotsBST(flowers, k) {
    let active = new BinarySearchTree();
    let day = 0;
    for (let flower of flowers) {
        day++;
        active.add(flower);
        let lower = active.lower(flower)
        let higher = active.higher(flower);
        if (lower != null && flower - lower - 1 == k ||
                higher != null && higher - flower - 1 == k)
            return day;
    }
    return -1;
}


function kEmptySlots(flowers, k) {
    //Let Days[x] = i be the time that flower at position x blooms
    let days = new Array(flowers.length);
    for(let i=0;i<flowers.length;i++) {
        days[flowers[i] - 1] = i + 1;
    }
    /**
     * We wanted to find candidate intervals [left, right] where days[left], 
     * days[right] are the two smallest values in [days[left], days[left+1], ..., days[right]], 
     * and right - left = k + 1.
     * 
     * Notice that these candidate intervals cannot intersect: for example, 
     * if the candidate intervals are [left1, right1] and [left2, right2] 
     * with left1 < left2 < right1 < right2, then for the first interval to be a candidate, 
     * days[left2] > days[right1]; and for the second interval to be a candidate, 
     * days[right1] > days[left2], a contradiction. That means whenever whether 
     * some interval can be a candidate and it fails first at i, indices j < i can't be 
     * the start of a candidate interval. This motivates a sliding window approach.
     * 
     * for each interval [left, right] (starting with the first available one), 
     * we'll check whether it is a candidate: whether days[i] > days[left] and 
     * days[i] > days[right] for left < i < right. If we fail, then we've found 
     * some new minimum days[i] and we should check the new interval [i, i+k+1]. 
     * If we succeed, then it's a candidate answer, and we'll check the new 
     * interval [right, right+k+1].
     */

    let ans = Number.MAX_VALUE;
    let left = 0, right = k+1;
    while (right < days.length) {
        for (let i = left+1; i < right;i++) {
            if (days[i] < days[left] || days[i] < days[right]) {
                left = i;
                right = i + k + 1;
                break;
            }
        }
        ans = Math.min(ans, Math.max(days[left], days[right]));
        left = right;
        right = left + k + 1;
    }
    return ans < Number.MAX_VALUE ? ans : -1;    
}

let flowers = [1, 3, 2];
let k = 1;
console.log(kEmptySlots(flowers, k));