class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        const numMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            // Mapの中にすでに同じ値がある場合
            // カウントを一つ増やす
            if (numMap.has(nums[i])) {
                let count = numMap.get(nums[i]);
                const newCount = count + 1;
                // countを増やした上で上書きする
                numMap.set(nums[i], newCount);
            // まだMapの中に値がない場合
            } else {
                numMap.set(nums[i], 1);
            }
        }

        // numMapの中でカウントが1の値を返す
        let answer = 0;
        numMap.forEach((count, num) => {
            if (count === 1) {
                answer = num;
            }
        });

        return answer;
    }
}
