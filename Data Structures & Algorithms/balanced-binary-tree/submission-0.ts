/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        let maxDiff = 0;

        const getHeight = (node: TreeNode | null): number => {
            if (node === null) {
                // diffが無いので高さはゼロ
                return 0;
            }

            // 左右それぞれの高さを求める
            const leftHeight = getHeight(node.left);
            const rightHeight = getHeight(node.right);

            if (rightHeight >= leftHeight) {
                maxDiff = Math.max(maxDiff, rightHeight - leftHeight);
                // 高さを返す
                // 自分の高さも足す点がポイント
                return rightHeight + 1;
            } else {
                maxDiff = Math.max(maxDiff, leftHeight - rightHeight);
                return leftHeight + 1;
            }
        }

        getHeight(root);

        return !(maxDiff > 1);
    }
}
