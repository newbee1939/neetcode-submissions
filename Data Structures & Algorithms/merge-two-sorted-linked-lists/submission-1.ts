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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        const dummy = new ListNode(0);

        let current = dummy;

        // いずれかがnullにならない限りループを続ける
        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                current.next = list1;
                list1 = list1.next; // list1の位置は確定したので、一つ進める
            } else {
                current.next = list2;
                list2 = list2.next;
            }

            current = current.next; // 一つ進めておく
        }

        // いずれかが空の場合
        if (list1 !== null) {
            current.next = list1;
        } else {
            current.next = list2;
        }

        // dummyの次のノードから始まるので
        return dummy.next;
    }
}
