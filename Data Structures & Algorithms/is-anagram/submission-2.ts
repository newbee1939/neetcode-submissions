class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const splittedS = s.split("");
        const splittedT = t.split("");

        if (splittedS.length !== splittedT.length) {
            return false;
        }

        return splittedS.sort().join() === splittedT.sort().join();
    }
}
