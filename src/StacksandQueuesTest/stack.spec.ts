import { Stack } from '../StacksandQueues';

describe('Stack should be able to add and remove items only from one end - LIFO)', () => {
    let stack = new Stack();
    const lastIn = 5;

    // adding 5 items to the stack
    stack.push(1)
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(lastIn); // Last In

    it('last in should be the first out', () => {
        const firstOut = stack.pop();

        expect(firstOut).toBe(lastIn)
    });
});

describe('stack.peek() should return the last item in', () => {
    let stack = new Stack();
    const lastIn = 5;

    // adding 5 items to the stack
    stack.push(1)
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(lastIn); // Last In

    it('should return last item in', () => {

        expect(stack.peek()).toBe(lastIn)
    });
});

describe('stack.count() should return number of items in the stack', () => {
    let stack = new Stack();
    const lastIn = 5;

    // adding 5 items to the stack
    stack.push(1)
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(lastIn); // Last In

    it('should stack count', () => {

        expect(stack.count()).toBe(5);
    });
});
