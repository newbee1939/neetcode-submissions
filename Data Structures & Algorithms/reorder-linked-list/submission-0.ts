/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (!head) {
            return;
        }

        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;

        slow.next = null;
        let prev = null;
        while (second) {
            const next = second.next;

            second.next = prev;

            prev = second;
            second = next;
        }

        let first = head;
        second = prev;
        while (first && second) {
            const next1 = first.next;
            const next2 = second.next;

            first.next = second;
            second.next = next1;

            first = next1;
            second = next2;
        }
    }
}
