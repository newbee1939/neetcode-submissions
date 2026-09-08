const A = 'A'.charCodeAt(0);

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const count = new Array(26).fill(0);
        
        let l = 0;
        let longest = 0;

        for (let r = 0; r < s.length; r++) {
            count[s.charCodeAt(r) - A]++; // 右端の文字を右端に入れる

            while (r - l + 1 - Math.max(...count) > k) {
                count[s.charCodeAt(l) - A]--;
                l++;
            }

            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
