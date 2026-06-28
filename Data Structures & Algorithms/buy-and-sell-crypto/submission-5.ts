class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = i; j < prices.length; j++) {
                let currentValue = prices[j] - prices[i]; 
                if (currentValue > maxProfit) {
                    maxProfit = currentValue;
                }
            }
        }
        
        return maxProfit;
    }
}
