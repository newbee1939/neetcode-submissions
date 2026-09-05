class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // それぞれの検査用の箱
        const rows = Array.from({length: 9}, () => new Set());
        const lines = Array.from({length: 9}, () => new Set());
        const boxes = Array.from({length: 9}, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                // それぞれのマスを一つずつ処理していく
                const value = board[r][c];

                if (value === ".") {
                    continue;
                }

                const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (rows[r].has(value) || lines[c].has(value) || boxes[b].has(value)) {
                    return false;
                }

                rows[r].add(value);
                lines[c].add(value);
                boxes[b].add(value);
            }
        }

        return true;
    }
}
