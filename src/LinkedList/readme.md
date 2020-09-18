# Linked List

A Linked List is a chain of objects where each object contains a single value and a pointer to the next object in the list.

The objects linked together to form linked list are called Nodes. A linked list has several nodes with each node's pointer pointing to the next node.  A typical node looks like:

```javascript
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
```

1. value: what is being stored in the node
2. next: reference to the next item in the list

To create a node you instantiate the node with the value. The constructor assigns the `value` property to the value you provided, then sets the next pointer to `null`.

```javascript
let node = new Node(0)

console.log(node.value) // 0
console.log(node.next) // null
```

There are three types of Linked Lists

1. Singly Linked List
2. Doubly Linked List
3. Circular Linked List

## PROs

* Adding items to the head or tail of a linked list has O(1) complexity which means adding items in linked list is very fast.

*

## Cons

* 


## Singly Linked List

A singly linked list provides `forward iteration` from the start to the end of the list. In other words you can't go back to a previous node you can only move forward till the end of the list and start all over.

To create a singly linked list;

```javascript

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

// connecting the 3 nodes in singly linked list
node1.next = node2;
node2.next = node3;

```

## Doubly Linked List

A doubly linked list unlike a singly linked list provides both `forward iteration` from the start to the end of the list and `backward iteration` from the end to the start of the list. In other words you can go back to the previous node as well as move forward to the next node.

To create a doubly linked list;

```javascript

class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

// Connecting the 3 nodes in a doubly linked list
node1.next = node2
node2.next = node3
node2.prev = node1
node3.prev = node2
```

## Circular Linked List

Both singly linked list and doubly linked list can be turned to a circular linked list by linking the first node with the last node of the list.

converting a singly linked list to a circular linked list

```javascript
node1.next = node2
node2.next = node3
node3.next = node1
```

converting a doubly linked list to a circular linked list

```javascript
node1.prev = node3
node1.next = node2
node2.next = node3
node2.prev = node1
node3.prev = node2
node3.next = node1
```
