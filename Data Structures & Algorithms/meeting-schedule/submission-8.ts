/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        const intervalArray = [];

        // 配列の分ループを回す
        for (let i = 0; i < intervals.length; i++) {
            // 時間を扱うプログラミングでは、「開始時間は含む（Inclusive）、終了時間は含まない（Exclusive）」 というルール（数学でいう [start, end) の形）にするのが鉄則
            for (let j = intervals[i].start; j < intervals[i].end; j++) {
                // 最後以外の値を配列に格納
                intervalArray.push(j);
            }
        }

        // 重複の排除
        const tmp = new Set(intervalArray);
        return tmp.size === intervalArray.length;
    }
}
