import { DoublyLinkedListNode, DoublyLinkedList } from '../LinkedList';

describe('DoublyLinkedListNode', () => {
    let doublyLinkedListNode = new DoublyLinkedListNode(4);

    it('should have a value property equal 4', () => {
        expect(doublyLinkedListNode.value).toBe(4);
    });

    it('should have a next property equal null', () => {
        expect(doublyLinkedListNode.next).toBe(null);
    });

    it('should have a prev property equal null', () => {
        expect(doublyLinkedListNode.prev).toBe(null);
    });
})

describe('DoublyLinkedList', () => {
    let doublyLinkedList = new DoublyLinkedList();

    it('should have a head property equal null', () => {
        expect(doublyLinkedList).toHaveProperty('head', null);
    });

    it('should have a tail property equal null', () => {
        expect(doublyLinkedList).toHaveProperty('tail', null);
    });

    it('should hava a count property equal 0', () => {
        expect(doublyLinkedList).toHaveProperty('count', 0);
    });
})

describe('DoublyLinkedList addHead', () => {

    it('should add a head node with value, next and prev properties to the list', () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.addHead(3);
        expect(doublyLinkedList.head).toHaveProperty('value', 3);
        expect(doublyLinkedList.head).toHaveProperty('next', null);
        expect(doublyLinkedList.head).toHaveProperty('prev', null);
    });

    it('should make previous head the tail if only one head exist', () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.addHead(4); // previous head
        doublyLinkedList.addHead(5); // new head
        expect(doublyLinkedList.head?.next).toHaveProperty('value', 4);
        expect(doublyLinkedList.tail).toHaveProperty('value', 4);
        expect(doublyLinkedList.tail?.prev).toHaveProperty('value', 5);
        expect(doublyLinkedList.tail).toHaveProperty('next', null);
    });

    it('should set head equal tail for list that was initially empty', () => {
        const initialyEmptyList = new DoublyLinkedList();
        initialyEmptyList.addHead(5);
        expect(initialyEmptyList.head).toBe(initialyEmptyList.tail);
    });

    it('should increase the list count by 1 after adding a new head to the list', () => {
        const doublyLinkedList = new DoublyLinkedList();
        const initialCount = doublyLinkedList.count;
        doublyLinkedList.addHead(4);
        const newCount = doublyLinkedList.count;
        expect(newCount - initialCount).toBe(1);
    })
})

describe('DoublyLinkedList addTail', () => {

    it('should add a tail node with value, next and prev properties to the list', () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.addHead(3);
        doublyLinkedList.addTail(4);
        expect(doublyLinkedList.tail).toHaveProperty('value', 4);
        expect(doublyLinkedList.tail).toHaveProperty('next', null);
        expect(doublyLinkedList.tail?.prev).toHaveProperty('value', 3);
    });

    it('should make previous tail the head if only one tail exist', () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.addTail(4); // previous tail
        doublyLinkedList.addTail(5); // new tail
        expect(doublyLinkedList.tail?.prev).toHaveProperty('value', 4);
        expect(doublyLinkedList.head).toHaveProperty('value', 4);
        expect(doublyLinkedList.head).toHaveProperty('prev', null);
        expect(doublyLinkedList.head?.next).toHaveProperty('value', 5);
    });

    it('should set head equal tail for list that was initially empty', () => {
        const initialyEmptyList = new DoublyLinkedList();
        initialyEmptyList.addTail(5);
        expect(initialyEmptyList.tail).toBe(initialyEmptyList.head);
    });

    it('should increase the list count by 1 after adding a new tail to the list', () => {
        const doublyLinkedList = new DoublyLinkedList();
        const initialCount = doublyLinkedList.count;
        doublyLinkedList.addTail(4);
        const newCount = doublyLinkedList.count;
        expect(newCount - initialCount).toBe(1);
    })
})

describe('DoublyLinkedList find method', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.addHead(3);
    doublyLinkedList.addTail(4);
    doublyLinkedList.addTail(5);
    doublyLinkedList.addTail(6);
    it('should return the node if found', () => {
        const found = doublyLinkedList.find(5)
        expect(found).toHaveProperty('value', 5);
        expect(found?.next).toHaveProperty('value', 6);
        expect(found?.prev).toHaveProperty('value', 4);
    });

    it('should return null if not found', () => {
        const found = doublyLinkedList.find(500)
        expect(found).toBe(null);
    });
})

describe('DoublyLinkedList contains method', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.addHead(3);
    doublyLinkedList.addTail(4);
    doublyLinkedList.addTail(5);
    doublyLinkedList.addTail(6);
    it('should return true if list contains the value', () => {
        const isContain = doublyLinkedList.contains(5)
        expect(isContain).toBe(true);
    });

    it('should return false if list doesn\'t contain the value', () => {
        const isContain = doublyLinkedList.contains(5000)
        expect(isContain).toBe(false);
    });
})

describe('DoublyLinkedList remove method', () => {
    it('should make the next node the new head if the head is removed', () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.addHead(3);
        doublyLinkedList.addTail(4);
        const headValue = doublyLinkedList.head?.value;
        if (headValue) {
            doublyLinkedList.remove(headValue);
        }
        expect(doublyLinkedList.head).toHaveProperty('value', 4);
    });

    it('should make the prev node the new tail if the tail is removed', () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.addHead(3);
        doublyLinkedList.addTail(4);
        const tailValue = doublyLinkedList.tail?.value;
        if (tailValue) {
            doublyLinkedList.remove(tailValue);
        }
        expect(doublyLinkedList.head).toHaveProperty('value', 3);
    });

    it('should link the next of removed node"s prev to prev of removed node"s next', () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.addHead(3);
        doublyLinkedList.addTail(4);
        doublyLinkedList.addTail(5);
        doublyLinkedList.addTail(6);
        doublyLinkedList.remove(5);
        const removedNodePrev = doublyLinkedList.find(4);
        const removedNodeNext = doublyLinkedList.find(6);
        expect(removedNodePrev?.next).toBe(removedNodeNext);
        expect(removedNodeNext?.prev).toBe(removedNodePrev);
    });

    it('should return false if list does not contain the value to remove', () => {
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.addHead(3);
        const isDelete = doublyLinkedList.remove(5000)
        expect(isDelete).toBe(false);
    });
})

describe('DoublyLinkedList clear', () => {
    const doublyLinkedList = new DoublyLinkedList()
    doublyLinkedList.addHead(1);
    doublyLinkedList.addTail(3);
    doublyLinkedList.addTail(5);
    doublyLinkedList.addTail(7);
    it('should have head and tail properties set to null and count set to 0 after clear()', () => {
        doublyLinkedList.clear();
        expect(doublyLinkedList).toHaveProperty('head', null);
        expect(doublyLinkedList).toHaveProperty('tail', null);
        expect(doublyLinkedList).toHaveProperty('count', 0)
    });
})
