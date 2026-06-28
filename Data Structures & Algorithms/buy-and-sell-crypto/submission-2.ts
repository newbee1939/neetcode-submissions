class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // 効率わ悪い...
        const answerArray = [];
        for (let i = 0; i < prices.length; i++) {
            for (let j = i; j < prices.length; j++) {
                answerArray.push(prices[j] - prices[i]);
            }
        }

        answerArray.sort((a, b) => a - b);
        console.log(answerArray);
        const lastValue = answerArray.at(-1);
        console.log(lastValue);

        if (lastValue <= 0) {
            return 0;
        } else {
            return lastValue;
        }
    }
}
