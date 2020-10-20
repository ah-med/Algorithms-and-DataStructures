import { Deque } from ".";

export class Stack {

    private store = new Deque();
    
    push(item: string | number): void {
        this.store.enqueHead(item);
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
