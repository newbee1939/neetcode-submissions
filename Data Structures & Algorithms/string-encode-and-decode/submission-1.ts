class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // 返却文字列を定義
        let res = "";

        for (const str of strs) {
            res = res + str.length.toString() + ":" + str;
        }

        // 特殊な加工方法で文字列連結した情報を返す
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        // strは #3Hog#2io#5hih;q のような形式になっている想定
        
        const res: string[] = [];
        let i = 0;

        // strを1文字ずつ走査していく
        // iは文字列の数に応じて増やしていく想定なのでforにはしない
        while (i < str.length) {
            // 目標（:）を見つける
            // iの値を変えたくないので一旦別の変数へ
            let j = i;
            while (str[j] !== ":") {
                j++;
            }
            // :を発見したらこのステップへ
            // 文字列の数を取り出す
            const length = parseInt(str.substring(i, j), 10);

            // 格納する文字列を取り出す
            // jの位置は現在:なので1つ増やす
            j++;
            const tmpString = str.substring(j, j + length);

            res.push(tmpString);

            i = j + length;
        }

        return res;
    }
}
