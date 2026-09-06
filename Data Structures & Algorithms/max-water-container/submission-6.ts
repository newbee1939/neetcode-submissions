class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1;

        let max = 0;

        while (l < r) {
            const height = Math.min(heights[l], heights[r]);
            const length = r - l;
            const value = height * length;

            max = Math.max(max, value);

            // l か rを動かす（小さい方をより内側に）
            // 小さい方が面積を決めているので、小さい方を変えないと水の面積は変わっていかない
            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return max;
    }
}
