class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const mapping = {
            '}': '{',
            ']': '[',
            ')': '(',
        }

        const tmp = [];

        for (let i = 0; i < s.length; i++) {
            const open = mapping[s[i]];

            // 現在の値が閉じタグじゃない場合は登録
            if (!open) {
                tmp.push(s[i]);
                continue;
            }

            // 現在の値が閉じタグだった場合
            // 期待値と実際の値を比較
            if (open !== tmp.pop()) {
                return false;
            }
        }

        return tmp.length === 0;
    }
}
