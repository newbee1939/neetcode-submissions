class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // Mapを積極的に使う
        const countMap = new Map<number, number>();
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        // [[1, 1], [2, 2], [3, 3]] のようなフォーマットになる
        const entries = Array.from(countMap);

        // 降順に並べる
        entries.sort((a, b) => b[1] - a[1]);

        return entries.slice(0, k).map(entry => entry[0]);
    }
}
