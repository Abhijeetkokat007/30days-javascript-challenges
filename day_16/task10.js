// TreeNode class definition
class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Recursive function to calculate the depth of a binary tree
function calculateDepth(node) {
    // Base case: If the node is null, the depth is 0
    if (node === null) {
        return 0;
    }

    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    // The depth of the current node is the maximum of the depths of its subtrees plus one
    return Math.max(leftDepth, rightDepth) + 1;
}

// Create a sample binary tree
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(7);

// Create another sample binary tree
const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(3);
root2.left.left.left = new TreeNode(4);

// Test Case 1
console.log("Depth of root1:", calculateDepth(root1)); // Output: 3

// Test Case 2
console.log("Depth of root2:", calculateDepth(root2)); // Output: 4

// Test Case 3: Tree with single node
const root3 = new TreeNode(1);
console.log("Depth of root3:", calculateDepth(root3)); // Output: 1

// Test Case 4: Empty tree
console.log("Depth of null tree:", calculateDepth(null)); // Output: 0
