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
        // ⭐️始まりの時間が早い順に配列を並び替える
        // => 単純に前のIntervalのendと後のIntervalのstartを比べて、
        // = または被っていなければ良い
        const sorted = intervals.sort((a, b) => a.start - b.start);

        for (let i = 0;  i < intervals.length - 1; i++) {
            if (intervals[i].end > intervals[i+1].start) {
                return false;
            }
        }

        return true;
    }
}
