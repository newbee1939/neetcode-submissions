class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = {};
        // 1語ずつ処理
        for (let s of strs) {
            // [0, 0, 0, 0, ...]
            // 26の0を持つ配列
            // アルファベットの数
            const count = new Array(26).fill(0);
            // 1文字ずつ処理
            for (let c of s) {
                // 0~26の数字の場所のカウントを増やす
                count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            
            const key = count.join(",");

            if (!res[key]) {
                res[key] = [];
            }

            res[key].push(s)
        }

        return Object.values(res);
    }
}
