import { DoublyLinkedList } from "../LinkedList";

export class Deque {
    private store = new DoublyLinkedList();

    enqueHead(val: string | number): void {
        this.store.addHead(val)
    }

    peekHead(): string | number | null {
        if(this.store.head) {
            return this.store.head.value;
        }

        return this.store.head
    }

    dequeueHead(): void {
        if (this.store.head) {
            this.store.removeHead();
            return;
        }

        throw new Error('Head does not exist');
    }

    enqueTail(val: string | number): void {
        this.store.addTail(val);
    }

    peekTail(): string | number | null {
        if(this.store.tail) {
            return this.store.tail.value;
        }

        return this.store.tail;
    }

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

