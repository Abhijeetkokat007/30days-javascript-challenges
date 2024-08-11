// TreeNode class definition
class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Recursive function to perform in-order traversal
function inOrderTraversal(node) {
    if (node === null) {
        return;
    }

    // Traverse the left subtree
    inOrderTraversal(node.left);

    // Visit the current node
    console.log(node.value);

    // Traverse the right subtree
    inOrderTraversal(node.right);
}

// Create a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Perform in-order traversal and log nodes
console.log("In-order Traversal:");
inOrderTraversal(root);
