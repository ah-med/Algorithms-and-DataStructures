# Binary Search Trees

## Trees

- A data structure where nodes have a 1:N parent-child relationships. 
- The number of childeren N depends on the type of tree
- The *root of the tree*: the single point where the tree begings
- The branches of the tree: the branches are internal to the tree and expends outward ????
- The leaves of the tree: where the tree ends
- Inverted tree: the root/parent node is at the top
- Examples of where tree structurs can be found
  - Organization's reporting structures
  - File systems
    - the root of the drive is the root of the tree
    - the branches are the folders
    - the files are the leaves
- Properties of Trees
  - Every node in the tree has exactly one parent except from the root, the root has zero
  - Every node of in the tree has 0 or more children (binary trinary, k-ary)
    - this limit is known as the degree of the tree
  - Leaf nodes have not children
  - Each node in the tree contains exacly a one data item

- Binary Tree: a tree structure whose nodes have at most two child nodes
- Binary Search Tree: A binary tree where nodes with lessor values are placed to the left of the root, and nodes with equal or greater values are place to the right.
- Terminologies
  - Root node: the node with no parent node
  - Edges: connects the nodes
  - Leaf nodes: nodes with no child nodes
  - Interner nodes: nodes that are neither leave nodes nor root node
  - Degree of a tree: max children a tree node can have. In this case 2
  - Height: max no of edges between that node and a leaf
  - Level: 1 + no of edges between that node and the root
  - Balanced Binary Tree: The root node has the same no of children on right and left sides of the node and the height of right leave and left leaf are the same.
- Tree grows wider faster that they grow deeper makes if one of the most efficient structure for storing and accessing data

```typescript
// BSTNode is a generic class whose Type parameter is the type of data being stored in the node
// BSTNode has a left property which can also be null or another BSTNode
// BSTNode has a right property which can also be null or another BSTNode

export class BSTNode<T> {
    constructor(value: T) {
        this.data = value;
        this.left = null;
        this.right = null;
    }

    data: T;
    left: BSTNode<T> | null;
    right: BSTNode<T> | null;
}
```

- Building a Binary Tree from BSTNode

```typescript
//- Create the root node with string type parameter and data value of 'root'
const root: BSTNode<string> = new BSTNode<string>('root');

//- Create the left node with string type parameter and data value of 'left'
const left: BSTNode<string> = new BSTNode<string>('left');

//- Create the right node with string type parameter and data value of 'right'
const right: BSTNode<string> = new BSTNode<string>('right');

// - now that we have 3 nodes we need to connect them to form a tree
    
root.left = left;
root.right = right;

```

- Insertion Complexity for a binary search tree
  - Average Case :: O(log n)
  - Worst case :: O(n)

## Traversals

- ### Pre-Order

  - we perform the action on the node before visting the left and then the right child

  ```typescript
  preOrderTraversal(action: (value: T) => T):void {
    this.implementPreOrderTraversal(action, this.root)
  }
      
  private implementPreOrderTraversal(action: (value: T) => T, node: BSTNode<T> | null):void  {
    // perform the action on the node before visiting the left and then the right child
    if (node !== null) {
        action(node.data);
        this.implementPreOrderTraversal(action, node.left);
        this.implementPreOrderTraversal(action, node.right);
    }
  }
  ```

  - Use case for Pre-Order transversals
    - Creating a copy of a tree: the structure of the new tree is identical to the structure of the original tree

- ### In Order

  - left child is visted, then we perform the action on the node, then the right child is visited

  ```typescript
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
  ```

  - Use case for In-Order transversals
    - Printing values in sort order

- ### Post Order

  - the left and right child are visited before we perform the acton on the node

  ```typescript
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
  ```

  - Use case for Post-Order transversals
    - Deleting all of the nodes in a tree

- ### Traversal Complexity

  - Average Case:: O(n)
  - Worse Case :: O(n)
