class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // Sliding Windowを利用
        if (s.length === 0) return 0;

        // 文字をキー、その文字が最後に登場したインデックスを値とするMap
        const charIndexMap = new Map<string, number>();

        // 答えを一つの値として保持しておく
        let maxLength = 0;
        let left = 0; // ウィンドウの左端（開始位置）

        for (let right = 0; right < s.length; right++) {
            const currentChar = s[right];
            const prevIndex = charIndexMap.get(currentChar);

            // 過去に同じ文字が登場しており、かつその文字が現在のウィンドウ内（left以降）にある場合
            // つまり、現在のウィンドウの中に同じ文字がある場合
            if (prevIndex !== undefined && prevIndex >= left) {
                // 前回の同じ文字の次の文字から新たなウィンドウを始める
                left = prevIndex + 1;
            }

            // 現在の文字のインデックスを最新化
            charIndexMap.set(currentChar, right);

            // 最新の長さを更新
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
