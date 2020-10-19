import { Deque } from '../StacksandQueues';

describe('Deque should be able to add and remove items from both ends', () => {
    let deque = new Deque();
    deque.enqueHead(4);
    deque.enqueHead(8);

    it('should add an item to tail end', () => {
        deque.enqueTail(0);

        expect(deque.peekTail()).toBe(0)
    });

    it('should add an item head end', () => {
        deque.enqueHead(12);
        
        expect(deque.peekHead()).toBe(12);
    });

    it('should remove an item from tail end', () => {
        deque.enqueHead(16);
        deque.enqueHead(20);
        deque.enqueTail(24);
        deque.enqueTail(28);
        const tail = deque.peekTail();
        deque.dequeueTail();

        expect(deque.peekTail()).not.toEqual(tail)

    });

    it('should remove an item from head end', () => {
        deque.enqueHead(32);
        deque.enqueHead(36);
        deque.enqueTail(40);
        deque.enqueTail(44);
        const head = deque.peekHead();
        deque.dequeueHead();

        expect(deque.peekHead()).not.toEqual(head)
    });
})
