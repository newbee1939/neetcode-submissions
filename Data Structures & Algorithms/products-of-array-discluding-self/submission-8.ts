class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // まず、「自分より左側の数の積」の配列を作る
        const left = new Array();
        let leftTmp = 1;
        for (const num of nums) {
            left.push(leftTmp);
            leftTmp = leftTmp * num;
        }
        // leftの配列が完成

        // その後、「自分より右側の数の積」を順に掛け合わせて最終的な回答を作る
        let j = 0;
        let rightTmp = 1;
        const answer = [];
        for (let i = nums.length - 1; i >= 0; i--) {
            answer[i] = left[i] * rightTmp;
            rightTmp = rightTmp * nums[i];
        }

        return answer;
    }
}
