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
// まとめ：頭の中でのイメージのコツ
// コードを「すべて同時に処理している」と思うとこんがらがってしまいます。
// コンピュータの動きとしては、「たった1つのペアを見比べて、ダメなら即アウト、OKなら『その下の子たちどう？』と丸投げする作業を繰り返しているだけ」と捉えるとイメージしやすくなります。
class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        // どちらもnullの場合はtrue
        if (!p && !q) {
            return true;
        }

        // いずれかがnull、値が異なる場合はfalse
        if (!p || !q || p.val !== q.val) {
            return false;
        }

        // さらに下に投げる（左右がどちらもtrueかどうかを調べる）
        const isLeftSame = this.isSameTree(p.left, q.left);
        const isRightSame = this.isSameTree(p.right, q.right);
        return (isLeftSame && isRightSame);
    }
}
