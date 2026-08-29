class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numMap = new Map<number, number>();
        for (const num of nums) {
            const value = numMap.get(num) ?? 0;

            // それぞれの数字が何個あるかを記録していく
            numMap.set(num, value + 1);
        }

        // 持っている個数が大きい順にソート
        return Array.from(numMap).sort((a, b) => {
            return b[1] - a[1];
        }).slice(0, k).map((tmp) => {
            return tmp[0];
        });
    }
}
