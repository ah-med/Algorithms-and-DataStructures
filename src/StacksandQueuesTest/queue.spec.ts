import { Queue } from "../StacksandQueues";


describe('Queue should be able to add item from one end and remove from the other end - FIFO)', () => {
    let queue = new Queue();
    const firstIn = 5;

    // adding 5 items to the queue
    queue.enqueue(firstIn);
    queue.enqueue(4);
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);

    it('last in should be the first out', () => {
        const firstOut = queue.dequeue();

        expect(firstOut).toBe(firstIn)
    });
});

describe('queue.peek() should return the first item in', () => {
    let queue = new Queue();
    const firstIn = 5;

    // adding 5 items to the queue
    queue.enqueue(firstIn);
    queue.enqueue(4);
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);

    it('should return first item in', () => {
        expect(queue.peek()).toBe(firstIn)
    });
});

describe('queue.count() should return number of items in the queue', () => {
    let queue = new Queue();
    const firstIn = 5;

    // adding 5 items to the queue
    queue.enqueue(firstIn);
    queue.enqueue(4);
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);


    it('should queue count', () => {

        expect(queue.count()).toBe(5);
    });
});
