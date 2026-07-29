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
        // const intervalMap = new Map();
        const intervalArray = [];

        for (let i = 0; i < intervals.length; i++) {
            for (let j = intervals[i].start; j < intervals[i].end; j++) {
                // 先頭、最後以外の値を配列に格納
                intervalArray.push(j);
            }
        }

        console.log(intervalArray);
        const tmp = new Set(intervalArray);
        console.log(tmp);
        return tmp.size === intervalArray.length;
    }
}
