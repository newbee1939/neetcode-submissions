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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let slow = head;
        let fast = head;
        
        while (fast && fast.next) {
            // 2つ動かす
            fast = fast.next.next;
            // 1つ動かす
            slow = slow.next;

            // 重なるところがあればtrue
            if (fast === slow) {
                return true;
            }
        }

        return false;
    }
}
