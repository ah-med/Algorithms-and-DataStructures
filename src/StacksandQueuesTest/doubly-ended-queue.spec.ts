import { Deque } from '../StacksandQueues';

describe('Deque should be able to add and remove items from both ends', () => {
    let deque = new Deque();
    deque.enqueueHead(4);
    deque.enqueueHead(8);

    it('should add an item to tail end', () => {
        deque.enqueueTail(0);

        expect(deque.peekTail()).toBe(0)
    });

    it('should add an item head end', () => {
        deque.enqueueHead(12);
        
        expect(deque.peekHead()).toBe(12);
    });

    it('should remove an item from tail end', () => {
        deque.enqueueHead(16);
        deque.enqueueHead(20);
        deque.enqueueTail(24);
        deque.enqueueTail(28);
        const tail = deque.peekTail();
        deque.dequeueTail();

        expect(deque.peekTail()).not.toEqual(tail)

    });

    it('should remove an item from head end', () => {
        deque.enqueueHead(32);
        deque.enqueueHead(36);
        deque.enqueueTail(40);
        deque.enqueueTail(44);
        const head = deque.peekHead();
        deque.dequeueHead();

        expect(deque.peekHead()).not.toEqual(head)
    });
})
