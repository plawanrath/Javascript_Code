function maxProfit(prices) {
    if(prices.length == 0) {
        return 0;
    }
    let sell = 0, bought = -prices[0];
    for(let i=1;i<prices.length;i++) {
        sell = Math.max(sell, bought + prices[i]);
        bought = Math.max(bought, -prices[i]);
    }
    return sell > 0 ? sell : 0;
}

prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));