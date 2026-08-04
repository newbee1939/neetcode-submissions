/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
// 解答例2
class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        const seen = new Set();
        let cur = head;

        while (cur !== null) {
            if (seen.has(cur)) {
                // 既に存在するノードであれば循環しているということなのでtrueを返す
                return true;
            }

            seen.add(cur);
            cur = cur.next;
        }

        return false;
    }
}
