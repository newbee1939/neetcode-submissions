class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // ソートしなくて済む方法はないか？
        const splittedS = s.split("").sort();
        const splittedT = t.split("").sort();

        // そもそも文字の長さが異なる場合はfalse
        if (splittedS.length !== splittedT.length) {
            return false;
        }
        // 重複は排除できないので、Setは使えない

        for (let i = 0; i < splittedS.length; i++) {
            // 一致していなければその時点でfalse
            if (splittedS[i] !== splittedT[i]) {
                return false;
            }
        }

        return true;
    }
}
