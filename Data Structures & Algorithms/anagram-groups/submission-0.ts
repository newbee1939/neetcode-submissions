class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = {};
        // 一文字ずつ処理
        for (const str of strs) {
            // 並び替えた上でkeyを作成
            const key = str.split("").sort().join("");

            // 対象のkeyの配列が無ければ作る
            if (!res[key]) {
                res[key] = [];
            }
            // 同一keyのところに保存
            res[key].push(str);
        }
        // keyは除外して値の部分のみ抽出
        return Object.values(res);
    }
}
