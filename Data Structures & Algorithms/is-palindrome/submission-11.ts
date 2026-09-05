class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // 大文字と小文字は区別しない
        const ALPHA_NUM = /[a-z0-9]/i;

        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (!ALPHA_NUM.test(s[l])) {
                l++;
                continue;
            }
            if (!ALPHA_NUM.test(s[r])) {
                r--;
                continue;
            }

            // ここに来ている時点で、比べられる値（記号以外）ってこと
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}
