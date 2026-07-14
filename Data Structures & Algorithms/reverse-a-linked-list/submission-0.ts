/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// ListNodeの扱いを理解する
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let prev = null;
        let current = head;

        while (current !== null) {
            // next: 次のListノードが入る
            let temp = current.next;
            current.next = prev;

            prev = current;
            current = temp;
        }

        return prev;
    }
}
