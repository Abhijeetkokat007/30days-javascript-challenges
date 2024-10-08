class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;  
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;  
            } else {
                this.insertNode(node.left, newNode);  
            }
        } else {
            if (node.right === null) {
                node.right = newNode; 
            } else {
                this.insertNode(node.right, newNode);  
            }
        }
    }

    inOrderTraversal() {
        this.inOrder(this.root);
    }

    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);         
            console.log(node.value);          
            this.inOrder(node.right);         
        }
    }
}


const tree = new BinaryTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

console.log("In-order traversal of the binary tree:");
tree.inOrderTraversal();  