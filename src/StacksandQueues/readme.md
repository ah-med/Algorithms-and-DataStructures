# Stacks and Queues

## Stacks 📚

A stack is a Last-In, First-Out container (LIFO). For a stack, adding and removing of items can only be done from one end.

`| item1 - item2 - item3 - item4 `<-> adding and removing

adding and removing can only happen from one end therefore item4 which is the last item in will be the first item out

* Imagine an empty stack.
* Then an item1 is added to the empty stack.
`| item1 ` <->
* Though it has one item in it, it is still a stack.
* item1 is both the top and bottom of the stack.
* Another item2 is added to the top of the stack.
`| item1 - item2 ` <->
* item2 is now the top of the stack while item1 remains the bottom of the stack.
* When items are ordered this way, it will be almost impossible to remove the bottom item (item1) without first removing (pop-out) the top item (item2).
* Therefore, item2 being the last item added to the stack becomes the first item to be removed out of the stack hence the name Last In First Out (LIFO).

The Stack class in the example below both `push` and `pop` to add and remove items respectively from only one end with is the Head end of the Deque store.

```typescript
export class Stack {

    private store = new Deque();

    push(item: string | number): void {
        this.store.enqueueHead(item);
    }

    pop(): string | number {
        const lastItem = this.store.peekHead();

        if(lastItem) {
            this.store.dequeueHead();
            return lastItem;
        }

        throw Error('Stack is empty')
    }

    count(): number {
        return this.store.count();
    }

    peek(): string | number {
        const peek = this.store.peekHead();

        if (peek) return peek;

        throw Error('Stack is empty')
    }

}

```

## Queue 🚶‍♂️🚶‍♂️🚶‍♂️🚶‍♂️

A queue is a First-In, First-Out container (FIFO). For a queue, if adding is done from one end then removing must be done from the other end.

adding -> `item4 - item3 - item2 - item1` -> removing 

item1 which is the first item in will be the first item out

* Imagine an empty queue.
* Then an item1 is added to the empty queue
 -> `item1` -> 
* Though it has one item in it, it is still a queue
* item1 is both the Head and Tail of the queue
* Another item2 is added `behind` the first item (item1)
 -> `item2 - item1` ->
* item2 is now the Tail of the queue while item1 remains the Head of the queue
* Another item3 is added `behind` the last item (item2)
 -> `item3 - item2 - item1` ->
* item3 is now the Tail of the queue shifting item2 as second item while item1 remains the Head of the queue
* to remove items from the queue we start from the Head of the queue down to its Tail
* Therefore, item1 being the first item that was added becomes the frist item to be remved from the queue hence the name (FIFO).

The Queue class in the example below both `enqueue` and `dequeue` to add and remove items respectively. `enqueue` is done from the Tail end of the Deque store while `dequeue` is done from the Head end of the Deque store.

```typescript
export class Queue {
    private store = new Deque();

    enqueue(item: string | number): void {
        this.store.enqueueTail(item);
    }

    dequeue(): string | number {
        const firstIn = this.peek();
        this.store.dequeueHead();
        return firstIn;
    }

    peek(): string | number {
        const firstIn = this.store.peekHead();

        if(firstIn) {
            return firstIn;
        }

        throw Error('Queue is Empty')
    }

    count(): number {
        return this.store.count();
    }
}

```

## Bonus 😉 :: Doubly Ended Queue (deque)

A queue-like container which is both First-In, First-Out and Last-In, Last-Out. Adding and Removing of items are allowed from both ends.

adding and removing <-> `item1 - item2 - item3 - item4 ` <-> adding and removing

It can be used as both stack and queue

The Deque class below uses a `DoublyLinkedList` as its data store. Adding and Removing of items are allowed from both the Head and Tail ends.

```typescript
export class Deque {
    private store = new DoublyLinkedList();

    // add item via Head end
    enqueueHead(val: string | number): void {
        this.store.addHead(val)
    }

    peekHead(): string | number | null {
        if(this.store.head) {
            return this.store.head.value;
        }

        return this.store.head
    }
    // remove item via Head end
    dequeueHead(): void {
        if (this.store.head) {
            this.store.removeHead();
            return;
        }

        throw new Error('Head does not exist');
    }

    // add item via Tail end 
    enqueueTail(val: string | number): void {
        this.store.addTail(val);
    }

    peekTail(): string | number | null {
        if(this.store.tail) {
            return this.store.tail.value;
        }

        return this.store.tail;
    }

    // remove item via Tail end 
    dequeueTail(): void {
        if (this.store.tail) {
            this.store.removeTail();
            return;
        }

        throw new Error('Tail does not exist');
    }

    count(): number {
        return this.store.count;
    }

}
```