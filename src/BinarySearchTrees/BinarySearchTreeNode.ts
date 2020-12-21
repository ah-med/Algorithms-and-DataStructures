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

//- Building a Binary Tree from BSTNode
    //- Create the root node with string type parameter and data value of 'root'
    const root: BSTNode<string> = new BSTNode<string>('root');

    //- Create the left node with string type parameter and data value of 'left'
    const left: BSTNode<string> = new BSTNode<string>('left');

    //- Create the right node with string type parameter and data value of 'right'
    const right: BSTNode<string> = new BSTNode<string>('right');

    // - now that we have 3 nodes we need to connect them to form a tree
    
    root.left = left;
    root.right = right;
