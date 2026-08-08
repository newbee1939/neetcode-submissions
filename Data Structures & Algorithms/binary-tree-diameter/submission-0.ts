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
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let maxHeight = 0;

        const getMaxHeight = (node: TreeNode | null): number => {
            if (node === null) {
                return 0;
            }

            const leftHeight = getMaxHeight(node.left);
            const rightHeight = getMaxHeight(node.right);

            maxHeight = Math.max(maxHeight, leftHeight + rightHeight);

            return 1 + Math.max(leftHeight, rightHeight);
        }

        getMaxHeight(root);

        return maxHeight;
    }
}
