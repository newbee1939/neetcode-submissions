class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = "";
        for (const str of strs) {
            res += str.length.toString() + "#" + str;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res: string[] = [];
        let i = 0;
        
        // 文字列の長さ分ループが続く
        while (i < str.length) {
            // iを進ませないため、一旦jに入れる
            let j = i;
            // 最初の#が見つかるまで進める
            while (str[j] !== "#") {
                j++;
            }

            // jの直前の数字文字列を取り出し、10進数に変換する
            // これが文字列の長さになる
            const length = parseInt(str.substring(i, j), 10);

            // iを次の文字列に進める（文字列の開始位置にする）
            i = j + 1;

            res.push(str.substring(i, i + length));

            // lengthの分ループを進める
            i = i + length;
        }

        return res;
    }
}
