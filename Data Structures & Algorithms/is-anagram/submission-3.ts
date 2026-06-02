class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        // [0, 0, 0, ....]
        const count = new Array(26).fill(0);

        // "a"のUTF-16 文字コードを取得
        const startCode = "a".charCodeAt(0);

        for (let i = 0; i < s.length; i++) {
            // 対象の文字の配列の部屋を+-1
            // 同じ文字であれば+-0になるはず
            count[s.charCodeAt(i) - startCode]++;
            count[t.charCodeAt(i) - startCode]--;
        }

        // 配列の全ての要素が0であること=全部同じ文字であることをチェック
        return count.every((x) => x === 0);
    }
}
