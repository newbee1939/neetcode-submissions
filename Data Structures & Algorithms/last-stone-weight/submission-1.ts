class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        while (stones.length > 1) {
            // 小さい順に並べる
            stones = stones.sort((a, b) => a - b);
            const stone1 = stones.pop()!;
            const stone2 = stones.pop()!;

            if (stone1 !== stone2) {
                stones.push(stone1 - stone2)
            }
        }

        return stones.length > 0 ? stones[0] : 0;
    }
}
