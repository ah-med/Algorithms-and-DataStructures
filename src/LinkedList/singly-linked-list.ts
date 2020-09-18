import { count } from "console";

class SinglyLinkedListNode {
    value: string | number
    next: SinglyLinkedListNode | null

    constructor(value: string | number, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {
    private _head: SinglyLinkedListNode | null = null;
    private _tail: SinglyLinkedListNode | null = null;
    private _count: number = 0; // number of items in the list

    get head(): SinglyLinkedListNode | null {
        return this._head;
    }

    get tail(): SinglyLinkedListNode | null {
        return this._tail;
    }

    addHead(value: string | number): void {
        let newNode = new SinglyLinkedListNode(value);

        // Save off the head node so we don't lose it
        const temp = this._head;

        // Point head to the new node
       newNode.next = temp;


        // Insert the rest of the list behind the head
        this._head = newNode;

        if (this._count == 0) {
            // if the list was empty then Head and Tail should
            this._tail = this._head;
        }

        this._count = this._count + 1; // increase count
    }

    addTail(value: string | number): void {
        const newNode = new SinglyLinkedListNode(value);

        if (this._tail) {
            this._tail.next = newNode;
            this._tail = newNode;
            this._count = this._count + 1; // increase count
        } else {
            this.addHead(value);
        }
    }
}

// Exmaple
let singlyLinkedList = new SinglyLinkedList();

console.log('New singly linked list created');
console.table(singlyLinkedList);
console.log('Adding head node with value 3...');
singlyLinkedList.addHead(3);
console.table(singlyLinkedList);
console.log('Adding another head node with value 1...');
singlyLinkedList.addHead(1);
console.table(singlyLinkedList);
console.log('Adding tail node with value 5...');
singlyLinkedList.addTail(5);
console.log('Adding another tail node with value 7...');
singlyLinkedList.addTail(7);
console.table(singlyLinkedList);
console.log("The new Head")
console.log(singlyLinkedList.head);
console.log("The new Tail")
console.log(singlyLinkedList.tail);
