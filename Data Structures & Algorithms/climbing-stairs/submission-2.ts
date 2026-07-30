class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n <= 2) {
            return n;
        }

        let prev = 1;
        let cur = 2;

        for (let i = 3; i <= n; i++) {
            const next = prev + cur;
            prev = cur;
            cur = next;
        }

        return cur;
    }
}
