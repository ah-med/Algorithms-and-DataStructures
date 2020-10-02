import { SinglyLinkedListNode, SinglyLinkedList } from '../LinkedList';

describe('SinglyLinkedListNode', () => {
    const singlyLinkedListNode  = new SinglyLinkedListNode(4);

    it('should have a value property equal 4', () => {
        expect(singlyLinkedListNode).toHaveProperty('value', 4);
    });

    it('should have a next property equal null', () => {
        expect(singlyLinkedListNode).toHaveProperty('next', null);
    });
})

describe('SinglyLinkedList', () => {
    const singlyLinkedList  = new SinglyLinkedList();

    it('should have a head property equal null', () => {
        expect(singlyLinkedList).toHaveProperty('head', null);
    });

    it('should have a tail property equal null', () => {
        expect(singlyLinkedList).toHaveProperty('tail', null);
    });

    it('should hava a count property equal 0', () => {
        expect(singlyLinkedList).toHaveProperty('count', 0);
    });
})

describe('SinglyLinkedList addHead Method', () => {
    const singlyLinkedList = new SinglyLinkedList()

    it('should add a head node with value and next properties to the list', () => {
        singlyLinkedList.addHead(3);
        expect(singlyLinkedList.head).toHaveProperty('value', 3);
        expect(singlyLinkedList.head).toHaveProperty('next', null);
    });

    it('should set head equal tail for list that was initially empty', () => {
        const initialyEmptyList = new SinglyLinkedList();
        initialyEmptyList.addHead(5);
        expect(initialyEmptyList.head).toBe(initialyEmptyList.tail);
    });

    it('should increase the list count by 1 after adding a new head to the list', () => {
        const initialCount = singlyLinkedList.count;
        singlyLinkedList.addHead(4);
        const newCount = singlyLinkedList.count;
        expect(newCount - initialCount).toBe(1);
    })
})

describe('SinglyLinkedList addTail Method', () => {
    const singlyLinkedList = new SinglyLinkedList()

    it('should add a tail node with value and next properties to the list', () => {
        singlyLinkedList.addTail(9);
        expect(singlyLinkedList.tail).toHaveProperty('value', 9);
        expect(singlyLinkedList.tail).toHaveProperty('next', null);
    });

    it('should set head equal tail for list that was initially empty', () => {
        const initialyEmptyList = new SinglyLinkedList();
        initialyEmptyList.addTail(5);
        expect(initialyEmptyList.tail).toBe(initialyEmptyList.head);
    });

    it('should increase the list count by 1 after adding a new tial to the list', () => {
        const initialCount = singlyLinkedList.count;
        singlyLinkedList.addTail(4);
        const newCount = singlyLinkedList.count;
        expect(newCount - initialCount).toBe(1);
    })
})

describe('SinglyLinkedList contains Method', () => {
    const singlyLinkedList = new SinglyLinkedList()
    singlyLinkedList.addHead(1);
    singlyLinkedList.addTail(3);
    singlyLinkedList.addTail(5);
    singlyLinkedList.addTail(7);

    it('should return true if 5 is in the list', () => {
        expect(singlyLinkedList.contains(5)).toBe(true);
    });

    it('should return false if 500 is not in the list', () => {
        expect(singlyLinkedList.contains(500)).toBe(false);
    });
})

describe('SinglyLinkedList removeHead Method', () => {
    const singlyLinkedList = new SinglyLinkedList()
    singlyLinkedList.addHead(1);
    singlyLinkedList.addTail(3);
    singlyLinkedList.addTail(5);
    singlyLinkedList.addTail(7);

    it('should remove head node of value 1 from the list and new head node value should be 3', () => {
        const isHeadRemoved = singlyLinkedList.removeHead();
        expect(isHeadRemoved).toBe(true);
        expect(singlyLinkedList.head).toHaveProperty('value', 3)
    });

    it('should return false if list is empty', () => {
        const emptyList = new SinglyLinkedList();
        const isHeadRemoved = emptyList.removeHead();
        expect(isHeadRemoved).toBe(false);
    });

    it('should decrease the list count by 1 after removing head from the list', () => {
        const initialCount = singlyLinkedList.count;
        singlyLinkedList.removeHead();
        const newCount = singlyLinkedList.count;
        expect(initialCount - newCount).toBe(1);
    });

    it('should set head to tail if only 1 node is left after removeHead', () => {
        const singlyLinkeList1 = new SinglyLinkedList();
        singlyLinkeList1.addHead(1);
        singlyLinkeList1.addHead(2);
        singlyLinkeList1.removeHead();
        expect(singlyLinkeList1.count).toBe(1);
        expect(singlyLinkeList1.tail).toHaveProperty('value', 1)
        expect(singlyLinkeList1.head).toHaveProperty('value', 1)
    })
})

describe('SinglyLinkedList removeTail Method', () => {
    const singlyLinkedList = new SinglyLinkedList()
    singlyLinkedList.addHead(1);
    singlyLinkedList.addTail(3);
    singlyLinkedList.addTail(5);
    singlyLinkedList.addTail(7);

    it('should remove tail node of value 7 from the list and new tail node value should be 5', () => {
        const isTailRemoved = singlyLinkedList.removeTail();
        expect(isTailRemoved).toBe(true);
        expect(singlyLinkedList.tail).toHaveProperty('value', 5)
    });

    it('should return false if list is empty', () => {
        const emptyList = new SinglyLinkedList();
        const isTailRemoved = emptyList.removeTail();
        expect(isTailRemoved).toBe(false);
    });

    it('should decrease the list count by 1 after removing tail from the list', () => {
        const initialCount = singlyLinkedList.count;
        singlyLinkedList.removeTail();
        const newCount = singlyLinkedList.count;
        expect(initialCount - newCount).toBe(1);
    });

    it('should set tail to head if only 1 node is left after removeTail', () => {
        const singlyLinkeList1 = new SinglyLinkedList();
        singlyLinkeList1.addTail(1);
        singlyLinkeList1.addTail(2);
        singlyLinkeList1.removeTail();
        expect(singlyLinkeList1.count).toBe(1);
        expect(singlyLinkeList1.tail).toHaveProperty('value', 1)
        expect(singlyLinkeList1.head).toHaveProperty('value', 1)
    })
})

describe('SinglyLinkedList remove Method', () => {

    it('should remove node 3', () => {
        const singlyLinkedList = new SinglyLinkedList()
        singlyLinkedList.addHead(1);
        singlyLinkedList.addTail(3);
        singlyLinkedList.addTail(5);
        singlyLinkedList.addTail(7);
        const isValueRemoved = singlyLinkedList.remove(3);
        expect(isValueRemoved).toBe(true);
        expect(singlyLinkedList.contains(3)).toBe(false);
    });

    it('should return false if list is empty', () => {
        const emptyList = new SinglyLinkedList();
        const isValueRemoved = emptyList.remove(3);
        expect(isValueRemoved).toBe(false);
    });

    it('should decrease the list count by 1 after removing the value from the list', () => {
        const singlyLinkedList = new SinglyLinkedList()
        singlyLinkedList.addHead(1);
        singlyLinkedList.addTail(3);
        singlyLinkedList.addTail(5);
        singlyLinkedList.addTail(7);
        const initialCount = singlyLinkedList.count;
        singlyLinkedList.remove(5);
        const newCount = singlyLinkedList.count;
        expect(initialCount - newCount).toBe(1);
    });

    it('should set tail to head if only 1 node is left after removing the value from the list', () => {
        const singlyLinkedList = new SinglyLinkedList()
        singlyLinkedList.addHead(1);
        singlyLinkedList.addTail(3);
        singlyLinkedList.remove(3);
        expect(singlyLinkedList.count).toBe(1);
        expect(singlyLinkedList.tail).toHaveProperty('value', 1)
        expect(singlyLinkedList.head).toHaveProperty('value', 1)
    })
})

describe('SinglyLinkedList clear', () => {
    const singlyLinkedList = new SinglyLinkedList()
    singlyLinkedList.addHead(1);
    singlyLinkedList.addTail(3);
    singlyLinkedList.addTail(5);
    singlyLinkedList.addTail(7);
    it('should have head and tail properties set to null and count set to 0 after clear()', () => {
        singlyLinkedList.clear();
        expect(singlyLinkedList).toHaveProperty('head', null);
        expect(singlyLinkedList).toHaveProperty('tail', null);
        expect(singlyLinkedList).toHaveProperty('count', 0)
    });
})
