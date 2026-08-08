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
        const dfs = (node: TreeNode | null): [boolean, number] => {
            if (node === null) {
                // そもそもnodeがnullの場合はtrue
                return [true, 0];
            }

            // 左右の高さとバランスを計算
            const [leftBalanced, leftHeight] = dfs(node.right);
            const [rightBalanced, rightHeight] = dfs(node.left)

            const isCurrentBalanced = leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1;

            const currentHeight = Math.max(leftHeight, rightHeight) + 1;

            return [isCurrentBalanced, currentHeight];
        }

        return dfs(root)[0];
    }
}
