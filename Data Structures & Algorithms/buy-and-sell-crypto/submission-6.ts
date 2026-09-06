class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = prices[0];
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            let currentPrice = prices[i];

            let profit = currentPrice - minPrice;

            if (profit > maxProfit) {
                maxProfit = profit;
            } 
            
            if (currentPrice < minPrice) {
                minPrice = currentPrice;
            }
        }

        return maxProfit;
    }
}
