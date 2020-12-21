// Binary Search Tree class extents the Binary Search tree node

import { BSTNode } from "./BinarySearchTreeNode";

type Action<T> = (value: T) => T

class BST<T> {
    
    constructor(root: BSTNode<T>) {
        this.root = root;
    }

    root: BSTNode<T>;

    preOrderTraversal(action: Action<T>):void {
        this.implementPreOrderTraversal(action, this.root)
    }

    private implementPreOrderTraversal(action: Action<T>, node: BSTNode<T> | null):void  {
        // perform the action on the node before visiting the left and then the right child
        if (node !== null) {
            action(node.data);
            this.implementPreOrderTraversal(action, node.left);
            this.implementPreOrderTraversal(action, node.right);
        }
    }

    inOrderTraversal(action: Action<T>):void {
        this.implementInOrderTraversal(action, this.root)
    }

    private implementInOrderTraversal(action: Action<T>, node: BSTNode<T> | null):void  {
        // left child is visted, then we perform the action on the node, then the right child is visited
        if (node !== null) {
            this.implementInOrderTraversal(action, node.left);
            action(node.data);
            this.implementInOrderTraversal(action, node.right);
        }
    }

    postOrderTraversal(action: Action<T>):void {
        this.implementPostOrderTraversal(action, this.root)
    }

    private implementPostOrderTraversal(action: Action<T>, node: BSTNode<T> | null):void  {
        // the left and right child are visited before we perform the acton on the node
        if (node !== null) {
            this.implementPostOrderTraversal(action, node.left);
            this.implementPostOrderTraversal(action, node.right);
            action(node.data);
        }
    }
}