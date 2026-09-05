class Solution {
    /**
     * 理想の解法
     * 
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;
        while(l < r) {
            // 左右のポインタが衝突・追い越しするのを防ぐ（インデックスの範囲外防止）
            while(l < r && !this.isAlphaNum(s[l])) {
                l++;
            }

            while(l < r && !this.isAlphaNum(s[r])) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }

    isAlphaNum(char: string) {
        return (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            (char >= "0" && char <= '9')
        )
    }
}
