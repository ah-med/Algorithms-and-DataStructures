
class DoublyLinkedListNode {
    value: string | number
    next: DoublyLinkedListNode | null
    prev: DoublyLinkedListNode | null

    constructor(value: string | number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    private _head: DoublyLinkedListNode | null = null;
    private _tail: DoublyLinkedListNode | null = null;
    private _count: number = 0; // number of items in the list

    get head(): DoublyLinkedListNode | null {
        return this._head;
    }

    get tail(): DoublyLinkedListNode | null {
        return this._tail;
    }

    get count(): number {
        return this._count;
    }

    addHead(value: string | number): void {
        const newNode = new DoublyLinkedListNode(value);

        if (this._head !=null) {
            newNode.next = this._head;
            this._head.prev = newNode; // update prev member of current head
        }

        this._head = newNode; // set new head

        if (this._tail == null) {
            this._tail = this._head // head is the tail for previously empty list
        }

        this._count = this._count + 1; // increase count
    }

    addTail(value: string | number): void {

        if (this._tail == null ) {
            this.addHead(value) // if it is an empty list then add head first
        } else {
            // Before: Head <-> 3 <-> 5 -> null
            // After Head <-> 3 <-> 5 <-> 7 -> null
            let newNode = new DoublyLinkedListNode(value); // null <- 7 -> null
            this._tail.next = newNode; //new list:: ...5 -> 7 -> null
            newNode.prev = this.tail; // ...5 <-> 7 -> null
            this._tail = newNode; // new node becomes the tail
            this._count = this._count + 1; // increase count
        }
    }
}

// Exmaple
let doublyLinkedList = new DoublyLinkedList();

console.log('New doubly linked list created')
console.table(doublyLinkedList);
console.log('Adding head node with value 3...');
doublyLinkedList.addHead(3);
console.table(doublyLinkedList);
console.log('Adding another head node with value 1...');
doublyLinkedList.addHead(1);
console.log('Adding tail node with value 5...');
doublyLinkedList.addTail(5);
console.log('Adding another tail node with value 7...');
doublyLinkedList.addTail(7);
console.table(doublyLinkedList);
console.log("The new Head")
console.log(doublyLinkedList.head);
console.log("The new Tail")
console.log(doublyLinkedList.tail);

