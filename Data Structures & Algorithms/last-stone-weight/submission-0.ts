class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        // 石の数の初期値
        let nums = stones.length;

        // stonesの数が0もしくは1になるまでループを回す
        while (nums > 1) {
            // 大きい順に並べる
            stones = stones.sort((a, b) => b - a);
            if (stones[0] === stones[1]) {
                // 先頭2つを取り除いて次のループへ
                stones = stones.slice(2);
                nums -= 2;
            } else {
                const splittedStone = stones[0] - stones[1];
                // 大きさが異なる場合、2つ取り除いた上で新しい石を追加する
                stones = stones.slice(2);
                stones.push(splittedStone);
                nums -= 1;
            }
        }

        return (nums === 0) ? 0 : stones[0];
    }
}
