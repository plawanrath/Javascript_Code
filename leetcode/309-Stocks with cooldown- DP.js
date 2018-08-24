/*DP - Take 1

2 arrays - 1 for max profit by sell and another for max profit by doing nothing.
Sell[i] = max profit gains by selling on day i
Cooldown[i] = max profit gains by cool down on day i
Cannot have profit by buying so no use maintaining array.

Updating cooldown[i] is cooldown[i] = max(cooldown[i-1], sell[i-1])
Updating sell[i] = scan j = 0 to i-1, sell[i] = max(cooldown[j-1](or 0 when j=0) + (prices[i] - prices[j])). 
This is because you can sell on day i if you cooled down on day j-1 and you bought on day j and sold on day i
Max profit is either sell[n-1] or cooldown[n-1]
*/

function maxProfitV1(prices) { 
    let sell = new Array(prices.length);
    let cooldown = new Array(prices.length);
    sell[0] = 0, cooldown[0] = 0;
    for(let i=1;i<prices.length;i++) {
	cooldown[i] = Math.max(cooldown[i-1], sell[i-1]);
for(let j = 0;j <= i-1; j++) {
    if(j == 0) {
	sell[i] = Math.max(sell[i], (prices[i] - prices[j]));
    } else {
	sell[i] = Math.max(sell[i], cooldown[j-1] + (prices[i] - prices[j]));
    }
}
    }
    return Math.max(sell[prices.length-1], cooldown[prices.length-1]);
}



//O(n^2) time and O(n) space

/*
DP Take 2

To avoid 2nd j loop in Take 1, all we need to do is store the maximum of difference cooldown[j-1] and prices[j] which is what we are doing in loop j.
*/

function maxProfitV2(prices) {
    let sell = new Array(prices.length).fill(0);
    let cooldown = new Array(prices.length).fill(0);
    let diff = -prices[0];
    for(let i=1;i<prices.length;i++) {
	cooldown[i] = Math.max(cooldown[i-1], sell[i-1]);
	sell[i] = Math.max(sell[i], diff + prices[i]);
	diff = Math.max(diff, cooldown[i-1]-prices[i]);
    }
    return Math.max(sell[prices.length-1], cooldown[prices.length-1]);
}

//O(n) time and O(n) space

/*
DP Take 3

Now we can see that we only need previous variable to calculate the next and this way we return the last value. So we do not need to preserve the rest.
*/

function maxProfit(prices) {
    if(prices == null || prices.length == 0) {
	return 0;
    }
    let sell = 0, cooldown = 0, diff = -prices[0];
    for(let i=1;i<prices.length;i++) {
	let temp = cooldown;
	cooldown = Math.max(temp, sell);
	sell = Math.max(sell, diff + prices[i]);
	diff = Math.max(diff, temp-prices[i]);
    }
    return Math.max(sell, cooldown);
}

arr = [1,2,3,0,2];
console.log(maxProfit(arr));