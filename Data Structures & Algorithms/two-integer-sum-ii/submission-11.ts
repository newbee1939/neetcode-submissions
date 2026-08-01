class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        // 両端を決めて徐々に狭めていくという考え方は他でも応用できる
        // whileを有効に使う

        // 右端の値のindex
        let r = numbers.length - 1;

        // 基準値を決め
        for (let i = 0; i < numbers.length; i++) {
            while (i < r) {
                if (numbers[i] + numbers[r] === target) {
                    // index番号（に1を足した値）を返す
                    // 実際のiとrの値を変えないために一時変数に入れる
                    let a = i;
                    let b = r;
                    return [a + 1, b + 1];
                }
                r -= 1;
            }

            // 基準値が変わるのでrをリセットする
            r = numbers.length - 1
        }
    }
}
