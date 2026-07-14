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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let prev = null;
        let current = head;

        while (current !== null) {
            // ↓で向きが逆になってしまうので、先に次の値を取得しておく
            let tmp = current.next;

            // 次のノードを前のノードにすることで、向きを逆にする
            current.next = prev;

            prev = current;
            current = tmp;
        }

        return prev;
    }
}
