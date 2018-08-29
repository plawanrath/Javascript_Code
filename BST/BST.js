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

//If you need to print sorted from BST then print in-order
BinarySearchTree.prototype.print = function(node) {
    if(node !== null) {
        this.print(node.left);
        console.log(node.value);
        this.print(node.right);
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

//Find min node from BST
BinarySearchTree.prototype.minNode = function(node) {
    if(node === null) {
        return -1;
    }
    if(node.left !== null) {
        return this.minNode(node.left);
    }
    return node.value;
}

//Find max node in BST
BinarySearchTree.prototype.maxNode = function(node) {
    if(node === null) {
        return -1;
    }
    if(node.right !== null) {
        return this.maxNode(node.right);
    }
    return node.value;
}

//Check if binary tree is height balanced
BinarySearchTree.prototype.isBalanced = function(node) {
    if(node === null) {
        return true;
    }
    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);

    if(Math.abs(leftHeight - rightHeight) <= 1
        && this.isBalanced(node.left) && 
        this.isBalanced(node.right)) {
            return true;
    }
    return false; 
}

//Get height of Binary Tree
BinarySearchTree.prototype.height = function(node) {
    if(node === null) {
        return 0;
    }
    return 1 + Math.max(this.height(node.left), this.height(node.right));
}

//COmmon Ancestor in BST
BinarySearchTree.prototype.CommonAncestor = function(node, n1, n2) {
    if(node === null) {
        return null;
    }
    let val = node.value;
    if(n1 < val && n2 < val) {
        return this.CommonAncestor(node.left, n1, n2);
    }
    if(n1 > val && n2 > val) {
        return this.CommonAncestor(node.right, n1, n2);
    }
    return node;
}

//Common Ancestor for any B Tree
function commonAncestorBT(node, n1, n2) {
    if(node === null) {
        return null;
    }
    let val = node.value;
    if(n1 === val || n2 === val) {
        return node;
    }
    let left = commonAncestorBT(node.left, n1, n2);
    let right = commonAncestorBT(node.right, n1, n2);
    if(left !== null && right !== null) {
        return node;
    }
    return left !== null ? left : right;
}

//Left View of BST--> leftViewBST(root, 1); root is level 1
let max_level = 0;
function leftViewBST(node, level) {
    if(node === null) {
        return;
    }
    if(max_level < level) {
        console.log(node.value);
        max_level = level;
    }
    leftViewBST(node.left, level+1);
    leftViewBST(node.right, level+1);
}

//right View of BST
let max_level = 0;
function rightViewBST(node, level) {
    if(node === null) {
        return;
    }
    if(max_level < level) {
        console.log(node.value);
        max_level = level;
    }
    leftViewBST(node.right, level+1);
    leftViewBST(node.left, level+1);
}
