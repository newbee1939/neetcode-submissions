class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const splitted = s.split("");
        const length = splitted.length - 1;

        const reversedS = splitted.map((_, index) => {
            return splitted[length - index];
        }).join("").toLowerCase().replace(/[^a-z0-9]/g, '');

        return reversedS === s.toLowerCase().replace(/[^a-z0-9]/g, '');
    }
}
