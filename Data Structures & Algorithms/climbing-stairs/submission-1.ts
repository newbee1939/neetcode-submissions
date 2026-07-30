class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n <= 2) {
            return n;
        }

        // 1段目までの上り方
        let prev = 1;
        // 2段目までの上り方
        let current = 2;
        // 現在の段までの上り方
        let next;

        // 2段目まではもうカバーしているので、3段目から開始
        // 1段ずつ上っていく
        for (let i = 3; i <= n; i++) {
            // 現在の段までのパターン
            next = prev + current;

            prev = current;
            current = next;
        }

        // 現在の段までの上り方を返す
        return next;
    }
}
