import { Deque } from ".";

export class Queue {
    private store = new Deque();

    enqueue(item: string | number): void {
        this.store.enqueTail(item);
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
