class KthLargest {
    private k: number;
    private nums: number[];

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.nums = nums;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        const tmp = this.nums;
        tmp.push(val);
        tmp.sort((a, b) => b - a);

        this.nums = tmp;

        return tmp[this.k - 1];
    }
}
