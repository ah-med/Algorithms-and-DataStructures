import { SinglyLinkedListNode, SinglyLinkedList } from '../LinkedList';

describe('SinglyLinkedListNode', () => {
    let singlyLinkedListNode  = new SinglyLinkedListNode(4);

    it('should have a value property equal 4', () => {
        expect(singlyLinkedListNode.value).toBe(4);
    });

    it('should have a next property equal null', () => {
        expect(singlyLinkedListNode.next).toBe(null);
    });
})
