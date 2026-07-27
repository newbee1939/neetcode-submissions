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
     * 単一のNodeをイメージして考える
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        // 左右に何もなければ深さは0
        if (!root) {
            return 0;
        }

        // 左右に続きがあれば、最低1は深さが付く
        // それ以降どのくらい深くなるかはmaxDepthに計算させる
        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    }
}
