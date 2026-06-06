class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numsMap = new Map<number, number>();
        for (let num of nums) {
            numsMap.set(num, (numsMap.get(num) || 0)+1);
        }
        // 結果が マイナス ➔ a を b より前にする
        // 結果が プラス ➔ b を a より前にする（a を後ろにする）
        // 結果が ゼロ ➔ 順番を変えない
        const numsArray = Array.from(numsMap).sort((a, b) => b[1] - a[1]);

        // 個数を制限
        return numsArray.slice(0, k).map(x => x[0]);
    }
}
