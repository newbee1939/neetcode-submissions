class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // 最後に返す答えの配列
        const res: number[][] = [];

        // 最初の段階で昇順（小さい順）にソートしておく
        // e.g. [-1, 0, 2, 3]
        nums.sort((a, b) => a - b);

        // 配列の要素を一つずつ走査
        // 一つ基準となる（一番小さい値）を固定する
        // 左から一つ一つ基準を変えていく
        for (let i = 0; i < nums.length; i++) {
            // 基準となる最小値がすでに0以上の場合は終える
            // -の値が無ければ0になることは絶対ないので
            if (nums[i] > 0) break;

            // 前と同じ値の場合は基準値を一つスキップ（重複する配列が生まれてしまうので）
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1; // 自分の右の値のindex
            let r = nums.length - 1; // 右端のindex

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if (sum > 0) {
                    // 一つ左にずらして小さくする（0に近付けるために）
                    r --;
                } else if (sum < 0) {
                    // 一つ左にずらして大きくする（0に近付けるために）
                    l++;
                } else {
                    // 和が0の場合はresに登録
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;

                    // 和が0の場合かつ
                    // 「新しい nums[l] が、直前に試した nums[l - 1] と同じ値かをチェック
                    // 重複を防ぐため
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }

        return res;
    }
}
